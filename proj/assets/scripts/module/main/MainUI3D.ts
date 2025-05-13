import { Component, director, easing, EventTouch, find, geometry, Input, instantiate, Label, math, Node, path, Prefab, Sprite, SpriteFrame, tween, UIOpacity, UITransform, v3, Vec3 } from "cc";
import { folder_item, ResMgr } from "../../manager/ResMgr";
import { GameSet } from "../../manager/GameSet";
import { PlaneView, Second, Utils } from "../../utils/Utils";
import { Transform3d } from "../common/Transform3d";
import { AsyncComponent } from "../common/AsyncComponent";
import { TaskPanel } from "../task/TaskPanel";
import { PlayerData } from "../player/PlayerData";
import { CfgMgr, StdTask } from "../../manager/CfgMgr";
import { EventMgr, Evt_MainTaskChange, Evt_TaskChange } from "../../manager/EventMgr";
import { Panel } from "../../manager/GameRoot";
import { MsgPanel } from "../common/MsgPanel";
import { Goto } from "../../DL";
import proto from "../../net/Protocol";

export class MainUI3D extends AsyncComponent {
    protected static _instance: MainUI3D;
    protected static canvas: Node;
    static get instance() {
        return this._instance;
    }

    protected static loadSub: Promise<any>;

    static async prevLoad() {
        if (!this.loadSub) {
            this.loadSub = new Promise((resolve, reject) => {
                ResMgr.GetResources("prefabs/main/MainUI3D", (prefab: Prefab) => {
                    let node: Node = instantiate(prefab);
                    MainUI3D._instance = node.addComponent(MainUI3D);
                    resolve(MainUI3D._instance);
                })
            });
            return this.loadSub;
        }
        return this.loadSub;
    }

    /**
     * 显示
     */
    static async Show(node: Node) {
        if (!this._instance) await this.prevLoad();
        GameSet.mainCamera.node.addChild(this._instance.node);
        let d = Utils.TestUIHigh(720 * GameSet.PixelSize, GameSet.mainCamera);
        MainUI3D._instance.node.setPosition(0, 0, -d);

        this.canvas = node;
        this.canvas.on(Input.EventType.TOUCH_START, this._instance.onTouchStart, this._instance);
        this.canvas.on(Input.EventType.TOUCH_END, this._instance.onTouchEnd, this._instance);
        this._instance.Init();
    }


    static async Hide() {
        if (!this._instance) await this.prevLoad();
        if (this._instance && this._instance.node.parent) {
            this._instance.node.parent.removeChild(this._instance.node);
        }
        if (this.canvas) {
            this.canvas.off(Input.EventType.TOUCH_START, this._instance.onTouchStart, this._instance);
            this.canvas.off(Input.EventType.TOUCH_END, this._instance.onTouchEnd, this._instance);
        }
    }

    protected planeView: PlaneView;
    protected leftView: PlaneView;
    protected rightView: PlaneView;
    protected battleView: PlaneView;
    protected fightBtn: Node;
    protected saijiBtn: Node;
    protected txzItem: Node;
    protected leftStartY: number;
    protected rightStartY: number;
    protected right_taskStartX: number;
    protected taskClone: Node;
    protected noticeClone: Node;
    protected taskPool: Node[] = [];
    protected noticePool: Node[] = [];
    protected leftItems: Node[] = [];
    protected taskItems: Node[] = [];
    private startTaskTween: boolean = false;

    protected async onLoad() {
        MainUI3D._instance = this;

        this.fightBtn = this.node.getChildByPath("ui/battleNode/fight");
        this.saijiBtn = this.node.getChildByPath("ui/battleNode/saiji");
        this.txzItem = this.node.getChildByPath("ui/left/txzItem");


        let left = this.node.getChildByPath("ui/left");
        this.taskClone = left.getChildByPath("item0");
        left.removeChild(this.taskClone);
        this.taskPool.push(left.getChildByPath("item1"));
        this.taskPool.push(left.getChildByPath("item2"));
        left.removeChild(this.taskPool[0]);
        left.removeChild(this.taskPool[1]);
        this.leftStartY = left.getChildByPath("txzItem").position.y;

        let right = this.node.getChildByPath("ui/right");
        this.rightStartY = right.getChildByPath("hdItem").position.y;

        this.taskItems.push(this.node.getChildByPath("ui/taskItem/item0"));
        this.taskItems.push(this.node.getChildByPath("ui/taskItem/item1"));
        this.taskItems.push(this.node.getChildByPath("ui/taskItem/item2"));
        this.right_taskStartX = this.node.getChildByPath("ui/taskItem/item0").position.x;
        EventMgr.on(Evt_MainTaskChange, this.updateLeftData, this);

        super.onLoad();
    }

    protected Init() {

        let hdItem = this.node.getChildByPath("ui/right/hdItem");
        Utils.AddTouchEffect(hdItem, (e) => {
            let ut = hdItem.getComponent(UITransform);
            if (this.rightView.checkTouch(e, hdItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
        }, this, MainUI3D.canvas);
        
        Utils.AddTouchEffect(this.txzItem, (e) => {
            let ut = this.txzItem.getComponent(UITransform);
            if (this.leftView.checkTouch(e, this.txzItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
        }, this, MainUI3D.canvas);

        let tileItem = this.node.getChildByPath("ui/left/tileItem");
        Utils.AddTouchEffect(tileItem, (e) => {
            let ut = tileItem.getComponent(UITransform);
            if (this.leftView.checkTouch(e, tileItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
        }, this, MainUI3D.canvas);

        Utils.AddTouchEffect(this.fightBtn, (e) => {
            let ut = this.fightBtn.getComponent(UITransform);
            if (this.battleView.checkTouch(e, this.fightBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) return true;
            return false;
        }, this, MainUI3D.canvas);
        Utils.AddTouchEffect(this.saijiBtn, (e) => {
            let ut = this.saijiBtn.getComponent(UITransform);
            if (this.battleView.checkTouch(e, this.saijiBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) return true;
            return false;
        }, this, MainUI3D.canvas);

    }

    async start() {
        this.planeView = new PlaneView(GameSet.mainCamera, this.node.getChildByPath("ui"), Vec3.UNIT_Z);
        this.leftView = new PlaneView(GameSet.mainCamera, this.node.getChildByPath("ui/left"));
        this.rightView = new PlaneView(GameSet.mainCamera, this.node.getChildByPath("ui/right"));
        this.battleView = new PlaneView(GameSet.mainCamera, this.node.getChildByPath("ui/battleNode"));

        this.updateLeftData();

        let children = this.node.getChildByPath("ui/left").children;
        this.layoutV(this.leftView.localLeftDown.x, this.leftStartY, children);
        this.startTween(0, children);

        children = this.node.getChildByPath("ui/right").children;
        this.layoutV(this.rightView.localRightDown.x, this.rightStartY, children);
        this.startTween(1, children);

        this.setTween();
    }

    private async setTween() {
        // let poster = this.node.getChildByPath("poster");
        // poster.getComponent(UIOpacity).opacity = 0;
        // poster.setScale(new Vec3(poster.scale.x * 0.5, poster.scale.y * 0.5, 1));
        // tween(poster)
        //     .to(0.6, { scale: new Vec3(poster.scale.x * 2, poster.scale.y * 2, 1) }, { easing: easing.circOut })
        //     .start();

        let battleNode = this.node.getChildByPath("ui/battleNode");
        let battleNode_pos = battleNode.getPosition();
        battleNode.setPosition(new Vec3(battleNode_pos.x, battleNode_pos.y - 20, battleNode_pos.z));

        tween(battleNode)
            .to(1.2, { position: new Vec3(battleNode_pos.x, battleNode_pos.y, battleNode_pos.z) }, { easing: easing.circOut })
            .start();
        // // await Second(0.2)
        // tween(poster.getComponent(UIOpacity))
        //     .to(1, { opacity: 255 }, { easing: easing.circOut })
        //     .start()
    }

    private async startTween(left_right: number, items: Node[]) {
        let endPos = [];
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            let pos = element.getPosition();
            endPos.push(pos);
            if (left_right == 1) {
                element.setPosition(new Vec3(pos.x + 100, pos.y, pos.z));
            } else {
                element.setPosition(new Vec3(pos.x - 100, pos.y, pos.z));
            }
        }

        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            tween(element).
                to(1, { position: endPos[index] }, { easing: easing.circOut }).
                start();
            await Second(0.05);
        }
    }

    protected layoutV(x: number, starty: number, items: Node[]) {
        let h = 0;
        for (let _i = 0; _i < items.length; _i++) {
            let _item = items[_i];
            h += _item.getComponent(Transform3d).height;
        }
        let startx = x;
        let startz = 0;
        let out = v3();
        let mat = this.node.getWorldMatrix().invert();
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let trans = item.getComponent(Transform3d);
            Vec3.transformMat4(out, item.worldPosition, mat);
            let v = item.position;
            item.setPosition(startx, starty, startz);
            starty -= trans.height;
        }
    }

    /**
     * 更新左边任务栏
     * @param datas 
     */
    protected updateLeftData() {
        let datas: any[] = PlayerData.GetShowMianTask();
        let left = this.node.getChildByPath("ui/left");
        for (let i = 0, len = Math.max(datas.length, this.leftItems.length); i < len; i++) {
            let data = datas[i];
            if (!data) {
                let item = this.leftItems[i]
                left.removeChild(item);
                this.taskPool.push(item);
                Utils.DelTouchEffect(item, MainUI3D.canvas);

            } else {
                let item = this.leftItems[i];
                if (!item) {
                    item = this.taskPool.length ? this.taskPool.pop() : instantiate(this.taskClone);
                    Utils.DelTouchEffect(item, MainUI3D.canvas);
                    Utils.AddTouchEffect(item, (e) => {
                        let ut = item.getComponent(UITransform);
                        if (this.leftView.checkTouch(e, item, ut.contentSize.width, ut.contentSize.height / 2)) return true;
                        return false;
                    }, this, MainUI3D.canvas);

                    this.leftItems.push(item);
                    left.addChild(item);
                }
                let cfg_task = CfgMgr.GetTaskByData(data)
                console.log(cfg_task)
                let icon = CfgMgr.Getitem(cfg_task.RewardID[0]).Icon;
                let num = cfg_task.RewardNumber[0];
                ResMgr.LoadResAbSub(path.join(folder_item, icon, "spriteFrame"), SpriteFrame, res => {
                    item.getChildByName("icon").getComponent(Sprite).spriteFrame = res;
                })
                item.getChildByPath("icon/num").getComponent(Label).string = num + ""
                item.getChildByPath("icon/label").getComponent(Label).string = cfg_task.Description
                let state = PlayerData.GetTaskState(data)
                item.getChildByName("select").active = state == 2
                item["data"] = cfg_task
            }
        }
    }

    protected update(dt: number): void {
        if (this.node.parent) {
            if (PlayerData.change_task_list.length && Panel.GetPanelNum("MainPanel", "TopUI") <= 0) {
                if (!this.startTaskTween) {
                    this.startTaskTween = true;
                    this.updateRighTaskItem();
                }
            }
        }
    }

    /** 更新右边任务栏 */
    private async updateRighTaskItem() {
        let data = [];
        data = data.concat(...PlayerData.change_task_list);
        PlayerData.change_task_list = [];
        this.startTaskTween = false;
        let item_count = this.taskItems.length
        let count = Math.ceil(data.length / item_count);
        for (let index = 0; index < count; index++) {
            let time = index == count - 1 ? 3 : 0.6
            for (let i = 0; i < item_count; i++) {
                const element = data[index * item_count + i];
                console.log(element, data.length, index, item_count, i)
                let item = this.taskItems[i];
                if (!element) {
                    item.active = false
                } else {
                    item.active = true;
                    let cfg_task = CfgMgr.GetTaskByData(element.data)
                    let count = element.data.value > cfg_task.CompletionNum ? cfg_task.CompletionNum : element.data.value
                    let str = "(" + count + "/" + cfg_task.CompletionNum + ")"
                    item.getChildByName("label").getComponent(Label).string = "完成" + cfg_task.Description + str
                }
                tween(item)
                    .to(0.5, { position: new Vec3(this.right_taskStartX - 4.1, item.position.y, item.position.z) })
                    .delay(time)
                    .call(() => { item.active = false })
                    .to(0.01, { position: new Vec3(this.right_taskStartX, item.position.y, item.position.z) })
                    .call(() => { item.active = true })
                    .start()
            }
            await Second(1.11)
        }
    }

    protected onTouchStart(e: EventTouch) {

    }


    /**
     * 点击事件
     * @param e 
     * @returns 
     */
    protected onTouchEnd(e: EventTouch) {
        let ut = this.saijiBtn.getComponent(UITransform);
        if (this.battleView.checkTouch(e, this.saijiBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) {
            if (PlayerData.CurSeasonData && PlayerData.CurSeasonData.currentSeasonId != 0) {
                Goto("VSModelPanel", proto.base.BattleMode.BattleModeRank);
            } else {
                MsgPanel.Show("暂时没有赛季进行中");
            }
            return;
        }

        ut = this.fightBtn.getComponent(UITransform);
        if (this.battleView.checkTouch(e, this.fightBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) {
            if (PlayerData.SatrElementData && PlayerData.SatrElementData.currentSeasonId != 0) {
                Goto("VSModelPanel", proto.base.BattleMode.BattleModeStar);
            } else {
                MsgPanel.Show("暂时没有星元对战进行中");
            }
            return;
        }

        //赛季通行证
        ut = this.txzItem.getComponent(UITransform);
        if (this.leftView.checkTouch(e, this.txzItem, ut.contentSize.width, ut.contentSize.height)) {
            Goto("RightsPanel")
            return;
        }

        //任务
        let tileItem = this.node.getChildByPath("ui/left/tileItem");
        ut = tileItem.getComponent(UITransform);
        if (this.leftView.checkTouch(e, tileItem, ut.contentSize.width, ut.contentSize.height)) {
            console.log(tileItem.name);
            Goto("TaskPanel");
            return;
        }

        for (let item of this.leftItems) {
            if (item.parent) {
                ut = item.getComponent(UITransform);
                if (this.leftView.checkTouch(e, item, ut.contentSize.width, ut.contentSize.height)) {
                    let cfg: StdTask = item["data"];
                    console.log(cfg);
                    let type = 0;
                    if (cfg.TaskTypeData && cfg.TaskTypeData.length > 0) {
                        type = cfg.TaskTypeData[0]
                    }
                    Goto("TaskPanel", cfg.Show - 1, type);
                    return;
                }
            }
        }
    }
}
