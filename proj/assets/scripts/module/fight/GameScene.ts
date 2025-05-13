import { _decorator, Color, Component, director, EventTouch, find, geometry, Input, instantiate, Label, math, MeshRenderer, Node, ParticleSystem, path, Prefab, Rect, Scene, sp, Sprite, SpriteFrame, Terrain, tween, UITransform, v3, Vec3, view } from 'cc';
import { GameSet } from '../../manager/GameSet';
import { CardState, SceneCard } from './display/SceneCard';
import { PlaneView, Second, TimeStamp, Utils } from '../../utils/Utils';
import { folder_icon, ResMgr } from '../../manager/ResMgr';
import { Skill } from './display/Skill';
import { Battle_End_Round, EventMgr, Evt_BattleDoubleUpdate, Evt_ShowBattleDoubleEffect } from '../../manager/EventMgr';
import { Session } from '../../net/Session';
import proto, { Req, Ret, Route } from '../../net/Protocol';
import { PlayerData } from '../player/PlayerData';
import { battleDataMgr } from '../battle/BattleDataMgr';
import { BattleRoundOperationState } from '../player/PlayerStruct';
import { SkillUtils } from './SkillUtils';
import { CfgMgr } from '../../manager/CfgMgr';
import { EffectTarget } from './display/TestSkill';
import { MsgPanel } from '../common/MsgPanel';
import { Tips } from '../common/Tips';
import { ShowArea } from './display/ShowArea';
import { FightData } from './FightData';
import { GameObj } from '../../manager/GameRoot';
import { SpriteLabel } from '../../component/SpriteLabel';
import { AudioMgr } from '../../manager/AudioMgr';
import { AudioDefine } from '../../define/AudioDefine';
const { ccclass, property } = _decorator;

type OutStruct = {
    fromInstId?: (string | null);
    card?: (proto.base.IBattleRoomCardData | null);
    fromSkillId?: (number | null);
}

type CardLoca = {
    isMy: boolean, card: SceneCard, area: number, index: number
}

function cardLoca(node: Node, isMy: boolean): CardLoca {
    let area = -1;
    if (node instanceof SceneCard) area = node.cardData.area;
    return {
        isMy: isMy,
        card: <unknown>node as SceneCard,
        area: area,
        index: -1,
    }
}

function TouchInstId(data: any) {
    if (data.fromInstId && data['touchInstId'] && data.fromInstId != data['touchInstId']) return data['touchInstId'];
    return undefined;
}

@ccclass('GameScene')
export class GameScene extends Component {
    protected static _instance: GameScene;
    static get isntance() {
        return this._instance;
    }
    private static hasLoad = false;
    private static loadHandle: Function;
    private static sub: Promise<any> = new Promise((resolve, reject) => { GameScene.loadHandle = resolve });

    static async prevLoad() {
        if (!this._instance) {
            let loadSub = new Promise((resolve, reject) => {
                ResMgr.GetResources("prefabs/fight/FightScene", (prefab: Prefab) => {
                    let node: Node = instantiate(prefab);
                    GameScene._instance = node.addComponent(GameScene);
                    resolve(GameScene._instance);
                })
            });
            return loadSub;
        }
        return Promise.resolve();
    }

    static async Show() {
        if (!this._instance) await this.prevLoad();
        director.getScene().addChild(this._instance.node);
        this._instance.node.active = true;
        if (!this.hasLoad) await this.sub;
        this._instance.onShow();
    }
    static async Hide() {
        if (!this.hasLoad) await this.sub;
        Skill.RemoveAll();
        this._instance.Reset();
        this._instance.onHide();
        this._instance.node.parent && this._instance.node.parent.removeChild(this._instance.node);
    }

    private async onShow() {
        AudioMgr.StopChannel(AudioDefine.Channels["audio/bgm/*"].channel);
        AudioMgr.Play("audio/bgm/MainTheme", 0, 0.3);

        this.Reset();
        this.FlushRoundBtnStrState(BattleRoundOperationState.EndRound);
        this.FlushRevealPlayer(null);

        Utils.AddTouchEffect(this.ruondBtn, (e) => {
            if (this.selectedCard || this.areaTarget) return false;
            let [w, h] = Utils.TestSize(this.ruondBtn, true);
            if (!this.uiView.checkTouch(e, this.ruondBtn, w * GameSet.PixelSize, h * GameSet.PixelSize)) return false;
            if (!this.isWaitInput) return false;
            EventMgr.emit(Battle_End_Round);
            let clickEffect: sp.Skeleton = this.ruondBtn.getChildByName("clickEffect").getComponent(sp.Skeleton);
            clickEffect.node.active = true;
            clickEffect.clearAnimation();
            clickEffect.setAnimation(0, "animation", false);
            clickEffect.setCompleteListener(() => {
                clickEffect.node.active = false;
            });
            return true;
        }, this, this.canvas);

        Utils.AddTouchEffect(this.doubleBtn, (e) => {
            if (this.selectedCard || this.areaTarget) return false;
            let [w, h] = Utils.TestSize(this.doubleBtn, true);
            w -= 300, h -= 450;
            if (!this.uiView.checkTouch(e, this.doubleBtn, w * GameSet.PixelSize, h * GameSet.PixelSize)) return false;
            if (!battleDataMgr.roomData) {
                MsgPanel.Show("房间不存在了")
                return;
            }
            if (battleDataMgr.getPlayerDoubleResidue(battleDataMgr.getPlayerId(true))) {
                MsgPanel.Show("加倍次数不足")
                return;
            }
            let server: proto.pb.IServer = proto.pb.Server.create();
            server.id = battleDataMgr?.creatRoomData?.serverId || "";
            let data = new Req['battle.protocol.battleroomdouble']();
            data.server = server;
            data.roomId = battleDataMgr.roomData.roomId;
            Session.Send(Route['battle.protocol.battleroomdouble'], data);
            console.log("发送加倍---->");
            return true;
        }, this, this.canvas);

        Utils.AddTouchEffect(this.exitBtn, (e) => {
            if (this.selectedCard || this.areaTarget) return false;
            let [w, h] = Utils.TestSize(this.exitBtn, true);
            if (!this.uiView.checkTouch(e, this.exitBtn, w * GameSet.PixelSize, h * GameSet.PixelSize)) return false;
            let server: proto.pb.IServer = proto.pb.Server.create();
            server.id = battleDataMgr?.creatRoomData?.serverId || "";
            let data = new Req['battle.protocol.battleroomleave']();
            data.server = PlayerData.server;
            data.roomId = battleDataMgr?.roomData?.roomId || battleDataMgr?.creatRoomData?.roomId;
            Session.Send(Route['battle.protocol.battleroomleave'], data);
            console.log("发送离开房间---->")
            return true;
        }, this, this.canvas);
        
        Session.on(Route['battle.protocol.battleroomping'], this.onBattleroomping, this);
        EventMgr.on(Evt_BattleDoubleUpdate, this.onBattleDoubleUpdate, this);
        EventMgr.on("op_start", this.hideViewCard, this);
        this.onBattleDoubleUpdate(0, false);
    }

    private onHide() {
        AudioMgr.StopChannel(AudioDefine.Channels["audio/bgm/*"].channel);
        GameSet.debug = false;
        Session.off(Route['battle.protocol.battleroomping'], this.onBattleroomping, this);
        EventMgr.off(Evt_BattleDoubleUpdate, this.onBattleDoubleUpdate, this);
        Utils.DelTouchEffect(this.ruondBtn, this.canvas);
        Utils.DelTouchEffect(this.doubleBtn, this.canvas);
    }
    private onBattleDoubleUpdate(addCont: number = 0, isUpdate: boolean = true): void {
        let num: number = battleDataMgr.getRoomDoubleNum(addCont);
        let oldNum: number = Number(this.doubleLab.string);
        this.doubleLab.string = `${num}`;
        if (isUpdate && num > oldNum) {
            EventMgr.emit(Evt_ShowBattleDoubleEffect, this.doubleBtn.worldPosition);
        }
    }

    /**
     * 结算区域战力
     */
    async Settlement() {
        for (let area of this.areaList) {
            let myPower = Number(area.getChildByName("power1").getComponent(Label).string);
            let adPower = Number(area.getChildByName("power2").getComponent(Label).string);
            area.getChildByName("mywin01").active = false;
            area.getChildByName("adwin01").active = false;
            let mywin = area.getChildByName("mywin02");
            let adwin = area.getChildByName("adwin02");
            if (myPower > adPower) {
                mywin.active = true;
                adwin.active = false;
                await Second(0.5);
            } else if (myPower < adPower) {
                mywin.active = false;
                adwin.active = true;
                await Second(0.5);
            } else {
                mywin.active = false;
                adwin.active = false;
            }
        }
    }

    //房间ping结果返回
    private onBattleroomping(data: any): void {
        return;
        let result = Ret['battle.protocol.battleroomping'].decode(data);
        if (result.res.code !== 200) {
            //房间不存在了
        }
    }

    private onBattleroomdouble(): void {

    }
    // 参数相关
    public handCenter = v3();     //手卡中点
    public handRotation = v3();   //手卡角度
    public myCardEnterV = v3();   //自己飞入手卡的起始位置
    public adCardEnterV = v3();   //对手飞入手卡的起始位置
    public PeekHandV: Vec3;
    public handQuat: math.Quat;   //手牌角度

    // 布局节点相关
    public areaList: Node[] = [];       //区域节点列表
    public areaSize: Rect[] = [];       //区域碰撞检测数据
    public adTeamLayout: Node[][] = []; //对方布局
    public myTeamLayout: Node[][] = []; //自己布局
    private cardMap: { [id: string]: CardLoca } = {};// 场景中所有卡的相对路由
    protected selectEffects: Node[] = [];

    // 操作相关
    public handCards: SceneCard[] = []; //自己手卡列表
    public selectedCard: SceneCard;     //选中的手牌或自己区域里的牌
    public areaTarget: number;          //操作过程选中放置卡牌的目标区域
    public canvas: Node;                //2d画布
    protected areaCardLay: Node;
    protected handCardLay: Node;
    protected peekCardLay: Node; //窥视卡显示层
    protected uiView: PlaneView;
    protected handView: PlaneView;
    protected ui: Node;
    protected myDeck: Node;
    protected myHand: Node;
    protected myDrop: Node;
    protected myDel: Node;
    protected myEnergy: Node;
    protected adDeck: Node;
    protected adHand: Node;
    protected adDrop: Node;
    protected adDel: Node;
    protected adEnergy: Node;
    protected revealCard: SceneCard;
    protected showArea: ShowArea;

    //ui
    public myhead: Sprite;
    public myNameLab: Label;
    public myRevealEffect: sp.Skeleton;
    public adhead: Sprite;
    public adNameLab: Label;
    public adRevealEffect: sp.Skeleton;

    public ruondBtn: Node;
    public roundBtnLab: Label;
    progress: Sprite;
    public jshhEffect: Node;
    public qxjshhEffect: Node;
    public notTimeEffect: Node;
    private roundBtnMaskBg: Node;
    public exitBtn: Node;

    public energyLab: SpriteLabel;
    public doubleBtn: Node;
    public doubleLab: SpriteLabel;
    public isWaitInput: boolean = false;
    protected mask: Node;
    protected zero: Vec3;

    protected dropToHand: boolean;
    protected canMove: (instId: string, area?: number) => boolean;
    protected canDrop: (instId: string, area?: number) => number;
    protected operateHandle: (instId: string, targetArea: number, cardState?: number) => number;
    protected async onLoad() {
        await Second(0);
        this.areaCardLay = this.node.getChildByName("areaCardLay");
        this.handCardLay = this.node.getChildByName("myHand");
        this.peekCardLay = this.node.getChildByName("peekCardLay");
        this.mask = this.node.getChildByName("mask");

        GameSet.SceneHight = GameSet.mainCamera.node.position.y;

        const ls = ["ui", "myDeck", "myHand", "myDrop", "myDel", "costmodel/myEnergy", "adDeck", "adHand", "adDrop", "adDel", "ui/adEnergy"];
        for (let s of ls) {
            let k = s.split("/").pop();
            this[k] = this.node.getChildByPath(s);
            this[k].active = true;
        }

        this.canvas = find("Canvas");
        let forward = GameSet.mainCamera.node.forward.negative();
        let [rx, ry, rz] = Utils.EulerAngles(v3(0, 1, 0), forward);
        this.myHand.setWorldRotationFromEuler(rx, ry, rz);
        this.ui.setWorldRotationFromEuler(rx, ry, rz);

        let child = this.myHand.children[0];
        this.handView = new PlaneView(GameSet.mainCamera, this.myHand, Vec3.UNIT_Y);
        GameSet.HandPlane = this.handView.plane;
        this.handQuat = child.getWorldRotation();
        let v = this.handView.localRightDown, handCenter = v3();
        handCenter.set(v.x - 1, v.y, v.z - GameSet.CardHide / 4);
        Vec3.transformMat4(this.handCenter, handCenter, this.handView.mat);

        this.myHand.getWorldRotation().getEulerAngles(this.handRotation);
        this.myDeck.getWorldPosition(this.myCardEnterV);
        this.adDeck.getWorldPosition(this.adCardEnterV);

        for (let i = 0; i < 3; i++) {
            let area = this.node.getChildByName("area" + i);
            let frameSelect = area.getChildByName("frame_select");
            let p = frameSelect.worldPosition.clone();
            this.node.addChild(frameSelect);
            frameSelect.setPosition(p.x, p.y, p.z);
            frameSelect.setSiblingIndex(3);
            this.selectEffects.push(frameSelect);
            this.areaList.push(area);
            let layout = [];
            let children = area.getChildByPath("team1").children.concat();
            for (let child of children) {
                layout.push(child);
            }
            let sk = area.getChildByName("filed").getComponent(sp.Skeleton);
            sk.setCompleteListener(() => {
                if (Utils.CheckAnimation(sk, "idle") && sk?.getCurrent(0)?.animation.name != "idle") sk.setAnimation(0, "idle", true);
            });

            let hitTest1 = area.getChildByName("hitTest1");
            let hitTest2 = area.getChildByName("hitTest2");
            hitTest1.name = hitTest1.name + "_" + area.name;
            hitTest2.name = hitTest2.name + "_" + area.name;
            let hitSize = hitTest1.getComponent(UITransform).contentSize;
            let rect = new Rect(hitTest1.worldPosition.x, 5, hitSize.width, 20);
            this.areaSize[i] = rect;
            this.myTeamLayout[i] = layout;
            area['hitTest1'] = hitTest1;
            area['hitTest2'] = hitTest2;
            let p1 = hitTest1.worldPosition.clone();
            let p2 = hitTest2.worldPosition.clone();
            this.node.addChild(hitTest1);
            this.node.addChild(hitTest2);
            hitTest1.setSiblingIndex(4);
            hitTest2.setSiblingIndex(4);
            hitTest1.setWorldPosition(p1);
            hitTest2.setWorldPosition(p2);

            layout = [];
            children = area.getChildByPath("team2").children.concat();
            for (let child of children) {
                layout.push(child);
            }
            this.adTeamLayout[i] = layout;

        }

        this.PeekHandV = v3(...Utils.ScreenToPlane(GameSet.viewSize.width / 2, GameSet.viewSize.height / 2, GameSet.mainCamera, GameSet.HandPlane));

        this.uiView = new PlaneView(GameSet.mainCamera, this.ui, Vec3.UNIT_Y);
        this.uiView.setLocalLeftDown(this.ui.getChildByName("my"), 2.5, 4);
        this.uiView.setLocalRightUp(this.ui.getChildByName("ad"), 2.7, 2.5);
        // this.uiView.setLocalLeftUp(this.ui.getChildByName("double"), 9, 5);
        console.log("**************", this.ui.getChildByName("double").position.toString())
        // this.uiView.setLocalRightDown(this.ui.getChildByName("myEnergy"), 10, 13);

        this.ruondBtn = this.ui.getChildByName("roundBtn");
        this.roundBtnLab = this.ui.getChildByPath("roundBtn/btnLab").getComponent(Label);
        this.jshhEffect = this.ui.getChildByPath("roundBtn/jshhEffect");
        this.qxjshhEffect = this.ui.getChildByPath("roundBtn/qxjshhEffect");
        this.notTimeEffect = this.ui.getChildByPath("roundBtn/notTimeEffect");
        this.roundBtnMaskBg = this.ui.getChildByPath("roundBtn/maskBg");
        this.progress = this.ui.getChildByPath("roundBtn/progress").getComponent(Sprite);
        this.uiView.setLocalRightDown(this.ruondBtn, 2, 8.5);

        this.exitBtn = this.ui.getChildByPath("exitBtn");
        this.uiView.setLocalLeftDown(this.exitBtn, 2, 8.5);

        this.myhead = this.ui.getChildByPath("my/myhead").getComponent(Sprite);
        this.myNameLab = this.ui.getChildByPath("my/myNameLab").getComponent(Label);
        this.myRevealEffect = this.ui.getChildByPath("my/revealEffect").getComponent(sp.Skeleton);
        this.adhead = this.ui.getChildByPath("ad/adhead").getComponent(Sprite);
        this.adNameLab = this.ui.getChildByPath("ad/adNameLab").getComponent(Label);
        this.adRevealEffect = this.ui.getChildByPath("ad/revealEffect").getComponent(sp.Skeleton);

        this.doubleBtn = this.ui.getChildByPath("double");
        this.doubleLab = this.ui.getChildByPath("double/effect/doubleLab").addComponent(SpriteLabel);
        this.doubleLab.font = "sheets/numberImg/num2";
        this.energyLab = this.node.getChildByPath("costmodel/myEnergy").addComponent(SpriteLabel);
        this.energyLab.font = "sheets/numberImg/num3";

        let size = view.getVisibleSizeInPixel();
        GameSet.ShowPoint = v3(...Utils.ScreenToPlane(size.width / 2, size.height / 2, GameSet.mainCamera, GameSet.ScenePlane, 22));

        GameSet.ScreamRotation = math.quat();
        let out = v3();
        this.myHand.getWorldRotation().getEulerAngles(out)
        math.Quat.fromEuler(GameSet.ScreamRotation, out.x, 0, 0);

        this.myHand.children.forEach(value => {
            value.parent.removeChild(value);
            value.destroy();
        })
        this.myHand.removeAllChildren();

        this.zero = this.node.worldPosition.clone();
        this.zero.y += 6;

        this.revealCard = SceneCard.Create();
        this.showArea = ShowArea.Create();

        if (!GameScene._instance) GameScene._instance = this;
        GameScene.hasLoad = true;
        if (GameScene.loadHandle) GameScene.loadHandle();
    }

    protected skillTarget(isMy: boolean, attacker: Node, targets: Node[], myarea: number[] = [0, 1, 2], adarea: number[] = [0, 1, 2]) {
        let myAreas = [], adAreas = [];
        for (let idx of myarea) {
            let area = this.areaList[idx];
            if (idx >= 0 && area != undefined) myAreas.push(area['hitTest1']);//area.getChildByName("hitTest1_" + area.name));
        }
        for (let idx of adarea) {
            let area = this.areaList[idx];
            if (idx >= 0 && area != undefined) adAreas.push(area['hitTest2']);//area.getChildByName("hitTest2_" + area.name));
        }
        let loca = [];
        if (isMy) {
            loca = [myAreas, this.myDeck, this.myHand, this.myDrop, this.myDel, this.myEnergy, adAreas, this.adDeck, this.adHand, this.adDrop, this.adDel, this.adEnergy];
        } else {
            loca = [adAreas, this.adDeck, this.adHand, this.adDrop, this.adDel, this.adEnergy, myAreas, this.myDeck, this.myHand, this.myDrop, this.myDel, this.myEnergy];
        }
        return new EffectTarget(attacker, targets, ...loca);
    }

    /**
     * 停止所有动作
     */
    EndAllAction() {
        Skill.EndAll();
        for (let card of this.handCards) {
            card?.action?.end();
        }
        for (let k in this.cardMap) {
            let obj = this.cardMap[k];
            if (obj?.card?.action?.running) obj?.card?.action?.end();
        }
    }

    /**
     * 开始操作
     * @param canMove 
     * @param canDrop 
     * @param playHandCard 
     */
    StartOperate(canMove: (instId: string) => boolean, canDrop: (instId: string, area?: number) => number, playHandCard: (instId: string, targetArea: number) => number) {
        this.canMove = canMove;
        this.canDrop = canDrop;
        this.operateHandle = playHandCard;
        this.canvas.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.canvas.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.canvas.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    /**
     * 结束操作
     */
    EndOperate() {
        this.UnSelect();
        this.canvas.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.canvas.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.canvas.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.canvas.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    /**
     * 中断选卡操作
     */
    UnSelect() {
        if (this.selectedCard) {
            this.selectedCard.StopDrag();
            this.LayoutAllHandCards();
            this.LayoutAllArea();
            this.selectedCard = undefined;
        }
    }
    /**点击 */
    protected onTouchStart(e: EventTouch) {
        if (this.mask.active) return;
        let pt = e.getLocation();
        //先计算是否点击到手牌
        let [x, y, z] = Utils.ScreenToPlane(pt.x, pt.y, GameSet.mainCamera, GameSet.HandPlane);
        for (let card of this.handCards) {
            if (card.State == CardState.Handing && card.HitTest(x, y, z)) {
                let msg = this.canMove(card.instId);
                if (msg) {
                    // MsgPanel.Show(msg);
                    continue;
                }
                //if (this.selectedCard == undefined) this.flushSelectEffect(true);
                this.selectedCard = card;
                this.selectedCard['isHandCard'] = true;
                this.flushSelectEffect(true);
                // this.selectedCard.parent.removeChild(this.selectedCard);
                // this.node.addChild(this.selectedCard);
                this.canvas.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
                return;
            }
        }
        //再计算是否点击到自己的区域牌
        [x, y, z] = Utils.ScreenToPlane(pt.x, pt.y, GameSet.mainCamera, GameSet.ScenePlane);
        for (let k in this.cardMap) {
            let obj = this.cardMap[k];
            let card = obj?.card;
            if (obj?.isMy && card && card.HitTest && card.HitTest(x, y, z)) {
                let area = obj?.area;
                let msg = this.canMove(card.instId, area);
                if (msg) {
                    // MsgPanel.Show(msg);
                    continue;
                }
                this.selectedCard = card;
                this.selectedCard['isHandCard'] = false;
                this.node.addChild(this.selectedCard);
                this.canvas.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
                return;
            }
        }
    }
    /**拖动操作 */
    protected onTouchMove(e?: EventTouch) {
        let p = e.getLocation();
        if (this.selectedCard) {
            // 拖动中
            this.selectedCard.Drag(p.x, p.y);

            let x: number, y: number, z: number;
            this.dropToHand = false;
            this.areaTarget = undefined;

            if (this.selectedCard['isHandCard']) {
                // 拖动的是手牌
                [x, y, z] = Utils.ScreenToPlane(p.x, p.y, GameSet.mainCamera, GameSet.ScenePlane);
                for (let i = 0; i < this.areaSize.length; i++) {
                    let rect = this.areaSize[i];
                    if (Math.abs(x - rect.x) <= rect.width / 2 && Math.abs(z - rect.y) <= rect.height / 2) {
                        // this.flushSelectEffect(i);
                        if (!this.canDrop(this.selectedCard.instId, i)) {
                            this.areaTarget = i;
                        } else {
                            // console.log("cannotDrop", this.canDrop(this.selectedCard.instId, i));
                        }
                        break;
                    }
                }
                if (this.areaTarget == undefined) {
                    // this.flushSelectEffect();
                } else return;
            }

            // 计算是否触碰到手牌区域
            [x, y, z] = Utils.ScreenToPlane(p.x, p.y, GameSet.mainCamera, GameSet.HandPlane);
            let out = v3();
            Vec3.transformMat4(out, v3(x, y, z), this.handView.invertMat);
            if (Math.abs(out.z) >= 9.8) {
                this.dropToHand = true;
                return;
            }
        }
    }

    /**松手后的计算 */
    protected onTouchEnd(e: EventTouch) {
        this.canvas.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.flushSelectEffect();
        if (this.selectedCard != undefined) {
            let instId = this.selectedCard.Id;
            if (!this.selectedCard.isDragging && this.selectedCard.cardData) {
                this.viewCard(this.selectedCard.cardData, this.selectedCard.getWorldPosition());
            }
            this.selectedCard.StopDrag();

            // 处理场景区域操作
            if (this.areaTarget != undefined) {
                let failType = this.operateHandle(instId, this.areaTarget, this?.selectedCard?.state);
                this.areaTarget = undefined;
                this.selectedCard = undefined;
                if (failType) {

                }
            } else if (this.dropToHand) {
                this.dropToHand = undefined;
                let failType = this.operateHandle(instId, undefined, this?.selectedCard?.state);
                this.selectedCard = undefined;
                this.areaTarget = undefined;
                if (failType) {

                }
            } else {
                this.LayoutAllHandCards();
                this.LayoutAllArea();
                this.selectedCard = undefined;
                this.areaTarget = undefined;
            }
        } else if (this.mask.active) {
            this.hideViewCard();
        } else {
            let pt = e.getLocation();
            let [x, y, z] = Utils.ScreenToPlane(pt.x, pt.y, GameSet.mainCamera, GameSet.HandPlane);
            for (let card of this.handCards) {
                if (card.cardData && card.HitTest(x, y, z)) {
                    this.viewCard(card.cardData, card.getWorldPosition());
                    return;
                }
            }
            //再计算是否点击到自己的区域牌
            [x, y, z] = Utils.ScreenToPlane(pt.x, pt.y, GameSet.mainCamera, GameSet.ScenePlane);
            for (let k in this.cardMap) {
                let obj = this.cardMap[k];
                let card = obj?.card;
                if (card?.cardData && card?.HitTest(x, y, z)) {
                    this.viewCard(card.cardData, card.getWorldPosition());
                    return;
                }
            }

            //计算是否触碰地形区域
            // for (let area of this.areaList) {
            //     let icon = area.getChildByName("hitTest");
            //     let p = icon.worldPosition;
            //     let size = icon.getComponent(UITransform).contentSize;
            //     // console.log("hitTest", Math.abs(p.x - x), size.width * icon.scale.x, Math.abs(p.z - z), size.height * icon.scale.y);
            //     if (Math.abs(p.x - x) < size.width * icon.scale.x && Math.abs(p.z - z) <= size.height * icon.scale.y) {
            //         this.viewCard(area);
            //         return;
            //     }
            // }
        }
    }

    /**
     * 展示详细信息
     * @param data 
     * @param pos 
     */
    protected async viewCard(data: proto.base.IBattleRoomCardData | Node, pos?: Vec3) {
        if (data instanceof Node) {
            let area = data;
            this.revealCard.EndViewCard();
            this.mask.active = true;
            this.node.addChild(this.showArea);
            let filed = area.getChildByName("filed");
            let sd = filed.active ? filed.getComponent(sp.Skeleton).skeletonData : undefined;
            let desc = area.getChildByName("desc").getComponent(Label).string;
            let myPower = area.getChildByName("power1").getComponent(Label).string;
            let adPower = area.getChildByName("power2").getComponent(Label).string;
            this.showArea.View(sd, desc, myPower, adPower, area.worldPosition);
        } else {
            this.showArea.Hide();
            let cardData: proto.base.IBattleRoomCardData = data;
            this.node.addChild(this.revealCard);
            this.revealCard.active = true;
            await this.revealCard.InitData(true, cardData);
            if (!this.mask.active) {
                this.mask.active = true;
                if (!pos) pos = this.zero;
                this.revealCard.setWorldPosition(pos);
                this.revealCard.ViewCard();
            }
        }
    }
    protected hideViewCard() {
        this.mask.active = false;
        this.showArea.Hide();
        this.revealCard.EndViewCard();
        this.revealCard.active = false;
    }

    /**区域选中效果 */
    protected flushSelectEffect(value: boolean = false) {//,area?: number) {
        for (let i = 0; i < this.areaList.length; i++) {
            let isFull = !this.canDrop(this.selectedCard?.instId, i);
            // this.areaList[i].getChildByName("frame_select").active = value && isFull;//i == area;
            this.selectEffects[i].active = value && isFull;
        }
    }
    /**刷新对战玩家信息 */
    FlushPlayerInfo(isPlayerA: boolean, data: proto.base.IBattleRoomPlayerData) {
        let cfg = CfgMgr.GetHead(data?.deckAttr?.avatarId);
        let headName: string = "";
        if (cfg) {
            headName = cfg.icon;
        } else {
            this.myhead.node.active = false;
        }
        this.myhead.node.active = true;
        if (isPlayerA) {
            this.myNameLab.string = data.name;
            ResMgr.LoadResAbSub(path.join(folder_icon, "head/", headName, "spriteFrame"), SpriteFrame, res => {
                this.myhead.spriteFrame = res;
            });
        } else {
            ResMgr.LoadResAbSub(path.join(folder_icon, "head/", headName, "spriteFrame"), SpriteFrame, res => {
                this.adhead.spriteFrame = res;
            });
            this.adNameLab.string = data.name;
        }
    }
    /**刷新回合数 */
    FlushRound(curRoundNum: number, maxRound: number) {
        this.progress.color.set(192, 40, 255, 140);
        this.progress.fillRange = 0;
        this.progress.node.active = false;
        this.roundProgress = `  ${curRoundNum}/${maxRound}`;
        this.roundBtnLab.string = this.roundState + "\n" + this.roundProgress;
    }
    protected roundProgress = "";
    protected roundState = "";
    /**刷新回合按钮文本状态 */
    FlushRoundBtnStrState(state: BattleRoundOperationState) {
        switch (state) {
            case BattleRoundOperationState.EndRound:
                this.roundState = `结束回合...`;
                this.roundBtnLab.string = this.roundState + "\n" + this.roundProgress;
                break;
            case BattleRoundOperationState.PlaceRound:
                this.roundState = `放置中...`;
                break;
            case BattleRoundOperationState.CancelRound:
                this.roundState = `取消结束回合`;
                this.roundBtnLab.string = this.roundState;
                break;
        }
    }
    /**
     * 刷新优先揭示卡牌玩家特效
     * @param isPlayerA 
     */
    FlushRevealPlayer(isPlayerA: boolean): void {
        if (isPlayerA == null) {
            this.myRevealEffect.node.active = false;
            this.adRevealEffect.node.active = false;
            return;
        }
        if (isPlayerA) {
            this.myRevealEffect.node.active = true;
            this.myRevealEffect.clearAnimation();
            this.myRevealEffect.setAnimation(0, "blue", false);
            this.myRevealEffect.setCompleteListener(() => {
                this.myRevealEffect.node.active = false;
            })
            this.adRevealEffect.node.active = false;
        } else {
            this.myRevealEffect.node.active = false;
            this.adRevealEffect.node.active = true;
            this.adRevealEffect.clearAnimation();
            this.adRevealEffect.setAnimation(0, "red", false);
            this.adRevealEffect.setCompleteListener(() => {
                this.adRevealEffect.node.active = false;
            })
        }

    }

    /**刷新回合按钮文本 */
    FlushRoundTime(time: number, isHaveEnergy: boolean, roundState: BattleRoundOperationState, totalTime: number = 30) {
        this.progress.node.active = true;
        let rote: number = time / totalTime;
        this.progress.fillRange = rote;
        let b: number = rote * 255;
        this.progress.color.set(192, 40, b, 140);
        this.roundBtnMaskBg.active = false;
        //出牌阶段
        if (roundState == BattleRoundOperationState.EndRound) {
            this.qxjshhEffect.active = false;
            //出牌能量不足只出强制结束回合特效
            if (!isHaveEnergy) {
                this.jshhEffect.active = true;
                this.notTimeEffect.active = false;
            } else {
                this.jshhEffect.active = false;
                if (time > 0 && time <= 5) {
                    this.notTimeEffect.active = true;
                } else {
                    this.notTimeEffect.active = false;
                }
            }
            return;
        }
        //可取消阶段
        if (roundState == BattleRoundOperationState.CancelRound) {
            this.qxjshhEffect.active = true;
            this.jshhEffect.active = false;
            this.notTimeEffect.active = false;
            return;
        }
        //放置阶段
        if (roundState == BattleRoundOperationState.PlaceRound) {
            this.qxjshhEffect.active = false;
            this.jshhEffect.active = false;
            this.notTimeEffect.active = false;
            this.roundBtnMaskBg.active = true;
            return;
        }
    }

    /**刷新能量 */
    async FlushEnergy(num: number, data?: OutStruct) {
        FightData.Energy = num;
        let tt = TimeStamp();
        if (data && data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data));
            let tag = this.skillTarget(true, attacker?.card, [target?.card]);
            await Skill.Play(data, tag, true);
        }
        this.energyLab.string = `${num}`;
        return TimeStamp(tt);
    }

    protected update(dt: number): void {
        if (!GameScene.hasLoad) return;
        let sorts = [];
        let children = this.areaCardLay.children;
        for (let child of children) {
            sorts.push({ index: child.getSiblingIndex(), node: child });
        }
        sorts.sort((a, b) => a.node.position.z - b.node.position.z);
        for (let i = 0; i < sorts.length; i++) {
            let obj = sorts[i];
            if (obj.index != i) {
                obj.node.setSiblingIndex(i);
            }
        }
    }



    /**
     * 从卡组发牌到手卡
     * @param data 
     * @returns 
     */
    async AddHandCard(data: proto.base.IBattleRoomOpOutput_CardDeckTopToHandTail) {
        let tt = TimeStamp();
        if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data)) || attacker;
            await Skill.Play(data, this.skillTarget(true, attacker?.card, [target?.card]));
        }

        let cards = data.cards;
        // 排除相同的
        for (let card of this.handCards) {
            let index = cards.findIndex(value => value.instId == card.instId);
            if (index != -1) {
                card.FlushData(true, cards[index]);
                cards.splice(index, 1);
            }
        }
        // 刷新一下已有手牌的布局，为飞进来的卡牌让出位置
        let p = Vec3.clone(this.handCenter);
        let total = (this.handCards.length + cards.length - 1) * GameSet.CardWide;
        p.x = this.handCenter.x - total - GameSet.CardWide / 2;
        for (let i = 0; i < this.handCards.length; i++) {
            let card = this.handCards[i];
            this.handCardLay.addChild(card);
            card.LayoutHands(p, this.handQuat);
            p.x += GameSet.CardWide;
        }

        // 开始飞入
        let promises = [];
        for (let i = 0; i < cards.length; i++) {
            let cardData: proto.base.IBattleRoomCardData = cards[i];
            let newCard: SceneCard = SceneCard.Create();
            newCard.InitData(true, cardData, this.handRotation);
            // this.node.addChild(newCard);
            this.handCards.push(newCard);
            let promise = newCard.SendToHand(this.myCardEnterV, p, this.handQuat);
            this.handCardLay.addChild(newCard);
            promises.push(promise);
            // this.handCards.push(newCard);
            p.x += GameSet.CardWide;
        }
        await Promise.all(promises);
        return TimeStamp(tt);
    }

    /**
     * 刷新所有手牌布局
     * @returns 
     */
    async LayoutAllHandCards() {
        // 刷新一下已有手牌的布局，为飞进来的卡牌让出位置
        let p = Vec3.clone(this.handCenter);
        let total = (this.handCards.length - 1) * GameSet.CardWide;
        p.x = this.handCenter.x - total - GameSet.CardWide / 2;
        let tt = TimeStamp();
        let ps = [];
        for (let i = 0; i < this.handCards.length; i++) {
            let card = this.handCards[i];
            ps.push(card.LayoutHands(p, this.handQuat));
            p.x += GameSet.CardWide;
        }
        await Promise.all(ps);
        return TimeStamp(tt);
    }

    /**
     * 从任意位置飞到不可视位置
     * @param isPlayerA 
     * @param data 
     * @param fromData 
     */
    async CopyCardToUnVisible(isPlayerA: boolean, data: OutStruct, fromData: proto.base.IBattleRoomCardData) {
        let tt = TimeStamp();
        let fromCard = this.findCard(fromData.instId);
        if (!fromCard && data['fromLocation']) fromCard = cardLoca(this.fileLocation(isPlayerA, data['fromLocation']), isPlayerA);
        if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data)) || fromCard;
            let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker.area], [target?.area]);
            await Skill.Play(data, tag, isPlayerA);
        }

        let card: SceneCard = SceneCard.Create();
        card.InitData(isPlayerA, data.card, this.zero);
        let target = this.fileLocation(isPlayerA, data.card.location, data.card.area);
        this.handCardLay.addChild(card);
        card.setWorldPosition(fromCard?.card.worldPosition || this.zero);
        await card.MoveTo(target.worldPosition);
        card.receive();
        return TimeStamp(tt);
    }


    /**
     * 更新手牌
     */
    async FlushHandCard(datas: proto.base.IBattleRoomCardData[]) {
        let ls = {};
        this.handCards.forEach(value => ls[value.instId] = value);
        this.handCards.length = 0;
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            if (ls[data.instId]) {
                ls[data.instId].FlushData(true, datas[i]);
                this.handCards.push(ls[data.instId]);
                delete ls[data.instId];
            } else {
                let card = SceneCard.Create();
                card.InitData(true, data, this.handRotation);
                this.handCardLay.addChild(card);
                if (this.selectedCard) card.setWorldPosition(this.selectedCard.worldPosition);
                this.handCards.push(card);
            }
        }
        for (let k in ls) {
            ls[k].receive();
            delete ls[k];
        }
        let tt = TimeStamp();
        let ps = [];
        let p = Vec3.clone(this.handCenter);
        let total = Math.max(0, this.handCards.length - 1) * GameSet.CardWide;
        p.x = this.handCenter.x - total - GameSet.CardWide / 2;
        for (let i = 0; i < this.handCards.length; i++) {
            let card = this.handCards[i];
            ps.push(card.LayoutHands(p, this.handQuat));
            p.x += GameSet.CardWide;
        }
        await Promise.all(ps);
        return TimeStamp(tt);
    }

    /**
     * 出牌到区域
     * @param cardData 
     * @param area 
     * @param index 
     */
    async SendMyCardToArea(cardData: proto.base.IBattleRoomCardData, area: number, index: number) {
        if (this.cardMap[cardData.instId]) {
            let obj = this.cardMap[cardData.instId];
            console.error("场景中已有相同id的卡 area:" + obj.area + " index:" + obj.index);
            obj.card?.receive?.();
            delete this.cardMap[cardData.instId];
        }
        let newCard: SceneCard = SceneCard.Create();
        if (this.selectedCard) newCard.setWorldPosition(this.selectedCard.worldPosition);
        // this.node.addChild(newCard);
        this.areaCardLay.addChild(newCard);
        this.cardMap[cardData.instId] = { isMy: true, card: newCard, area: area, index: index };
        newCard.InitData(true, cardData, this.handRotation);
        let set = this.myTeamLayout[area][index];
        let tt = TimeStamp();
        await newCard.PlayToMyArea(set.worldPosition, set.rotation);
        // this.areaCardLay.addChild(newCard);
        return TimeStamp(tt);
    }

    /**
     * 添加对手牌
     * @param cardData 
     * @param area 
     * @param index 
     */
    async SendAdCardToArea(cardData: proto.base.IBattleRoomCardData, area: number, index: number) {
        if (this.cardMap[cardData.instId]) {
            let obj = this.cardMap[cardData.instId];
            console.error("场景中已有相同id的卡 area:" + obj.area + " index:" + obj.index);
            obj.card?.receive?.();
            delete this.cardMap[cardData.instId];
        }
        let tt = TimeStamp();
        let newCard: SceneCard = SceneCard.Create();
        // this.node.addChild(newCard);
        this.areaCardLay.addChild(newCard);
        newCard.setWorldPosition(this.adCardEnterV.x, this.adCardEnterV.y, this.adCardEnterV.z);
        this.cardMap[cardData.instId] = { isMy: false, card: newCard, area: area, index: index };
        newCard.InitData(false, cardData, this.handRotation);
        let set = this.adTeamLayout[area][index];
        await newCard.PlayToAdArea(set.worldPosition);
        // this.areaCardLay.addChild(newCard);
        return TimeStamp(tt);
    }

    /**
     * 刷新区域状态
     * @param data 
     */
    async FlushTerrain(ispLayerA: boolean, data: proto.base.IBattleRoomGamePlayData | (proto.base.IBattleRoomTerrainData[]), ownerPlayerId: string) {
        let terrainDatas: proto.base.IBattleRoomTerrainData[];
        let Reveal = [];//第几回合开启
        let TerrainInstIds = [];//地形实际的instId
        if (data instanceof proto.base.BattleRoomGamePlayData) {
            terrainDatas = data.terrains;
            Reveal = data.levelData.reveal;
            for (let k in data.players) {
                let player = data.players[k];
                let isMy = player.playerId == ownerPlayerId;
                for (let i = 0; i < player.terrain.length; i++) {
                    if (!TerrainInstIds[i]) TerrainInstIds[i] = { my: "", ad: "" };
                    if (isMy) {
                        TerrainInstIds[i].my = player.terrain[i].selfInstId;
                    } else {
                        TerrainInstIds[i].ad = player.terrain[i].selfInstId;
                    }
                }
            }
        } else {
            terrainDatas = data as proto.base.IBattleRoomTerrainData[];
        }
        for (let i = 0; i < terrainDatas.length; i++) {
            let terrain = terrainDatas[i];
            let area = this.areaList[terrain.area];
            if (!this.cardMap[terrain.instId]) {
                let card = area.getChildByName("hitTest");
                card['instId'] = terrain.instId;
                this.cardMap[terrain.instId] = { isMy: true, card: <unknown>card as SceneCard, area: undefined, index: undefined };
            }
            if (TerrainInstIds[i]) {
                let instId1 = TerrainInstIds[i].my, instId2 = TerrainInstIds[i].ad;
                if (!this.cardMap[instId1]) {
                    let card = area['hitTest1'];//area.getChildByName("hitTest1_area" + i);
                    card['instId'] = instId1;
                    this.cardMap[instId1] = { isMy: true, card: <unknown>card as SceneCard, area: i, index: undefined };
                }
                if (!this.cardMap[instId2]) {
                    let card = area['hitTest2'];//area.getChildByName("hitTest2_area" + i);
                    card['instId'] = instId2;
                    this.cardMap[instId2] = { isMy: false, card: <unknown>card as SceneCard, area: i, index: undefined };
                }
            }

            area["instId"] = terrain.instId;
            let desc = area.getChildByName('desc').getComponent(Label), mask = area.getChildByName('mask'), destory = area.getChildByName('destory'), filed = area.getChildByName("filed").getComponent(sp.Skeleton);
            desc.node.active = false;
            mask.active = false;
            destory.active = false;
            let std = CfgMgr.Get("Area")[terrain.configId];
            let filedUrl = std ? `spine/${std.AreaIcon}/${std.AreaIcon}` : "spine/filed_0000/filed_0000";
            let ainmName: string, loop = false;
            desc.node.active = false;
            switch (terrain.terrainState) {
                case proto.base.BattleRoomInTerrainState.TerrainStateUnknown:
                    // area.getChildByName('mask').active = true;
                    desc.string = "未知";
                    break;
                case proto.base.BattleRoomInTerrainState.TerrainStateHide:
                    if (terrain.peek && terrain.peek.indexOf(ownerPlayerId) > -1) {
                        ainmName = "idle";
                        loop = true;
                        // desc.node.active = true;
                        desc.string = std.AffectText;
                    } else {
                        ainmName = "idle";
                        loop = true;
                        // desc.node.active = true;
                        if (Reveal[i]) {
                            if (Reveal[i] - FightData.currentRound == 1) {
                                desc.string = "下回合揭示";
                            } else {
                                desc.string = "第" + Reveal[i] + "回合揭示";
                            }
                            desc.node.active = true;
                        } else {
                            desc.string = "未揭示";
                        }
                    }
                    break;
                case proto.base.BattleRoomInTerrainState.TerrainStateShow:
                    ainmName = "show";
                    if (desc.string != std.AffectText) {
                        // desc.node.active = true;
                        desc.string = std.AffectText;
                        let scale = desc.node.scale.x;
                        tween(desc.node).to(0.1, { scale: v3(scale * 1.5, scale * 1.5, scale * 1.5) }).to(0.1, { scale: v3(scale, scale, scale) }).start();
                        await Second(0.2);
                        // for (let k in this.cardMap) {
                        //     let obj = this.cardMap[k];
                        //     if (obj.area == terrain.area) {
                        //         obj.card.Shake(2.5);
                        //     }
                        // }
                    }
                    break;
                case proto.base.BattleRoomInTerrainState.TerrainStateDestroy:
                    area.getChildByName('destory').active = true;
                    break
            }
            if (ainmName) {
                filed.node.active = true;
                if (filedUrl && filed['filedUrl'] != filedUrl) {
                    filed['filedUrl'] = filedUrl;
                    filed.skeletonData = await ResMgr.LoadResAbSub(filedUrl, sp.SkeletonData);
                    filed.setAnimation(0, ainmName, loop);
                }
            } else {
                filed.node.active = false;
            }
        }
    }

    /**
     * 锁定
     * @param isPlayerA 
     * @param data 
     */
    async LockTerrain(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_LockZone) {
        let attacker = this.findCard(data.fromInstId);
        let cardLoca: CardLoca = this.findCard(data.toInstId);
        if (data.fromSkillId) {
            let tag = this.skillTarget(isPlayerA, attacker?.card, [cardLoca?.card], [cardLoca?.area]);
            await Skill.Play(data, tag, isPlayerA);
        }
    }

    /**
     * 刷新战力
     * @param isPlayerA 
     * @param area 
     * @param power 
     */
    FlushAreaPower(isPlayerA: boolean, area: number, power: number) {
        let areaNode = this.areaList[area];
        let apower: Label, bpower: Label, aeffect: ParticleSystem, beffect: ParticleSystem;
        if (isPlayerA) {
            apower = areaNode.getChildByName("power1").getComponent(Label);
            bpower = areaNode.getChildByName("power2").getComponent(Label);
            aeffect = areaNode.getChildByName("mywin01").getComponent(ParticleSystem);
            beffect = areaNode.getChildByName("adwin01").getComponent(ParticleSystem);
        } else {
            apower = areaNode.getChildByName("power2").getComponent(Label);
            bpower = areaNode.getChildByName("power1").getComponent(Label);
            aeffect = areaNode.getChildByName("adwin01").getComponent(ParticleSystem);
            beffect = areaNode.getChildByName("mywin01").getComponent(ParticleSystem);
        }
        if (apower.string) {
            let old = Number(apower.string);
            if (old < power) {
            }
        }
        apower.string = power + "";

        if (power > Number(bpower.string) || 0) {
            aeffect.node.active = true;
            beffect.node.active = false;
        } else if (power < Number(bpower.string) || 0) {
            aeffect.node.active = false;
            beffect.node.active = true;
        } else {
            aeffect.node.active = false;
            beffect.node.active = false;
        }
    }

    /**
     * 刷新指定阵营状态
     * @param isPlayerA 
     * @param area 
     * @param terrains 
     */
    async FlushAreaCrads(isPlayerA: boolean, area: number, terrains: proto.base.IBattleRoomTerrainPlayerData) {
        let datas = terrains.cards;

        //先清理数据不同步的卡牌
        for (let k in this.cardMap) {
            let obj = this.cardMap[k];
            if (obj.card instanceof GameObj && obj.area == area && obj.isMy == isPlayerA && datas.findIndex(value => value.instId == obj.card.instId) == -1) {
                obj.card?.receive?.();
                obj.card = undefined;
                delete this.cardMap[k];
            }
        }
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            let obj = this.cardMap[data.instId];

            if (!obj) {
                let newCard: SceneCard = SceneCard.Create();
                this.areaCardLay.addChild(newCard);
                obj = {
                    isMy: isPlayerA,
                    card: newCard,
                    area: area,
                    index: i
                }
                this.cardMap[data.instId] = obj;
                obj.card?.InitData?.(isPlayerA, data, this.handRotation);
            } else {
                obj.area = area;
                obj.index = i;
                obj.card?.FlushData?.(isPlayerA, data);
            }
        }
        let tt = TimeStamp();
        await this.LayoutAllArea();
        return TimeStamp(tt);
    }

    /**
     * 刷新布局
     */
    async LayoutAllArea() {
        for (let k in this.cardMap) {
            let obj = this.cardMap[k];
            if (obj.card as SceneCard && obj.area != undefined && obj.index != undefined) {
                let layout = obj.isMy ? this.myTeamLayout[obj.area][obj.index] : this.adTeamLayout[obj.area][obj.index];
                if (!layout) {
                    console.error("找不到地形上的卡片：" + obj?.area + "," + obj?.index);
                }
                if (obj.card && obj.card.parent != this.areaCardLay) this.areaCardLay.addChild(obj.card);
                if (!obj.card?.CheckMatrix?.(layout.worldPosition)) {
                    await obj.card?.LayoutArea?.(layout.worldPosition);
                }
            }
        }
    }

    /**
     * 盖牌
     * @param datas 
     */
    async CloseCard(data: proto.base.IBattleRoomCardData) {
        let obj = this.cardMap[data.instId];
        if (obj) {
            await obj.card?.TurnBack?.();
        }
    }

    /**
     * 显示卡
     * @param datas 
     */
    async ShowCard(data: proto.base.IBattleRoomCardData) {
        let obj = this.cardMap[data.instId];
        if (!obj) return 0;
        // if (obj.card.parent) obj.card.setSiblingIndex(obj.card.parent.children.length - 1)
        // this.node.addChild(obj.card);
        let tt = TimeStamp();
        obj.card?.FlushData?.(obj.isMy, data);
        await obj.card?.Open?.();
        this.areaCardLay.addChild(obj.card);
        // for (let k in this.cardMap) {
        //     let other = this.cardMap[k];
        //     if (other != obj && other.card.state == CardState.Fightting && other.card.isMy != obj.card.isMy && other.area == obj.area) {
        //         other.card.Shake(2.5);
        //     }
        // }
        return TimeStamp(tt);
    }

    /**获取位置 */
    protected fileLocation(isPlayerA: boolean, location: number, area: number = 0, idx?: number) {
        switch (location) {
            case proto.base.BattleRoomCardLocation.Hand:
                return isPlayerA ? this.myHand : this.adHand;
            case proto.base.BattleRoomCardLocation.Deck:
                return isPlayerA ? this.myDeck : this.adDeck;
            case proto.base.BattleRoomCardLocation.Drop:
                return isPlayerA ? this.myDrop : this.adDrop;
            case proto.base.BattleRoomCardLocation.Del:
                return isPlayerA ? this.myDel : this.adDel;
            case proto.base.BattleRoomCardLocation.Terrain:
                if (idx != undefined) {
                    return isPlayerA ? this.myTeamLayout[area][idx] : this.myTeamLayout[area][idx];
                }
                let areaName = isPlayerA ? "hitTest1" : "hitTest2";
                let areaNode = this.areaList[area];
                if (areaNode) return area[areaName];//areaNode.getChildByName(areaName + "_" + areaNode.name);
        }
        return undefined;
    }

    /**
     * 播放技能
     * @param isPlayerA 
     * @param data 
     */
    async PlaySkill(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_EffectSkill) {
        // 如果当前回合已起效则跳过,count<0表示未起效
        if (!data.instId || !data.count.length || data.count[battleDataMgr.curRound] == undefined) return;
        if (data.count[battleDataMgr.curRound] == -1 || data.count[battleDataMgr.curRound] < -2) return;
        let attacker = this.cardMap[data.instId];
        if (!attacker) this.handCards.find(value => value.Id == data.instId);
        let targets = [], self = this, myAreas = [], adAreas = [];
        data.targets.forEach(value => {
            targets.push(this.findCard(value.instId) || self.fileLocation(isPlayerA, value.location));
            if (battleDataMgr.isPlayerA(value.playerId)) {
                myAreas.push(value.area);
            } else {
                adAreas.push(value.area);
            }
        });
        let tag: EffectTarget;
        if (!targets.length && attacker) {
            tag = this.skillTarget(isPlayerA, attacker?.card, targets);
            if (!SkillUtils.TryToFindTarget(isPlayerA, attacker?.card, tag, data)) {
                tag = this.skillTarget(isPlayerA, attacker?.card, targets, [attacker.area]);
            }
        } else if (attacker) {
            tag = this.skillTarget(isPlayerA, attacker?.card, targets, [attacker.area]);
        } else {
            return;
        }
        let output = { fromInstId: data.instId, fromSkillId: data.skillId };
        let tt = TimeStamp();
        await Skill.Play(output, tag, isPlayerA, undefined, true);
        return TimeStamp(tt);
    }

    /**
     * 删除技能
     * @param isPlayerA 
     * @param data 
     */
    RemoveSkill(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_Nullify) {
        Skill.Stop(data.toPlayerId, data.toSkillId, data.toInstId);
    }

    /**
     * 卡数据变更
     * @param isPlayerA 
     * @param data 
     * @returns 
     */
    async CardDataChange(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_CardDataChange) {
        let tt = TimeStamp();
        let attacker = this.findCard(data.fromInstId);
        let changeCard = this.findCard(data.card.instId);
        let target = this.findCard(TouchInstId(data)) || changeCard;
        if (data.fromSkillId) {
            let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker?.area], [target?.area]);
            await Skill.Play(data, tag, isPlayerA);
        }
        changeCard?.card?.FlushData?.(isPlayerA, data.card);
        await Second(0.25);
        return TimeStamp(tt);
    }

    /**
     * 查找卡
     * @param instId 
     * @returns 
     */
    protected findCard(instId: string): CardLoca {
        if (!instId) return undefined;
        let card = this.handCards.find(value => value.instId == instId);
        if (card) {
            return { isMy: true, card: card, area: -1, index: -1 };
        } else {
            return this.cardMap[instId];
        }
    }

    /**
     * 从场景移除一张卡片到指定区域
     * @param isPlayerA 
     * @param data 
     * @param loca 
     * @returns 
     */
    async RmoveCardFormArea(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_TerrainToDrop | proto.base.IBattleRoomOpOutput_TerrainToDel, loca: number) {
        let tt = TimeStamp();

        let removeTag = this.cardMap[data.card.instId];
        let attacker = this.findCard(data.fromInstId);
        let target = this.findCard(TouchInstId(data)) || removeTag;
        if (removeTag) {
            if (data.fromSkillId) {
                let tag = this.skillTarget(isPlayerA, attacker?.card, [target.card], [attacker?.area], [target.area]);
                await Skill.Play(data, tag, isPlayerA);
            }
            delete this.cardMap[data.card.instId];
            let delLoca = this.fileLocation(isPlayerA, loca);
            if (delLoca) await removeTag.card?.MoveTo?.(delLoca.worldPosition);
            removeTag.card?.receive?.();
        }
        this.LayoutAllArea();
        return TimeStamp(tt);
    }

    /**
     * 移除手牌上的一张卡到指定位置
     * @param isPlayerA 
     * @param data 
     * @param loca 
     * @returns 
     */
    async RemoveCardFormHand(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_HandToDel, loca: number) {
        let tt = TimeStamp();
        let obj: Node;
        if (isPlayerA) {
            let index = this.handCards.findIndex(value => value.instId == data.card.instId);
            obj = this.handCards[index];
            this.handCards.splice(index, 1);
        } else {
            obj = this.adHand;
        }
        if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data)) || cardLoca(obj, isPlayerA);
            let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker?.area], [target?.area]);
            await Skill.Play(data, tag, isPlayerA);
        }
        let locaNode = this.fileLocation(isPlayerA, loca);
        if (isPlayerA) {
            if (obj instanceof SceneCard) {
                await obj.MoveTo(locaNode.worldPosition);
                obj.receive();
            } else {
                console.warn("找不到可移除的手牌" + data.card.instId);
            }
        } else {
            let card = SceneCard.Create();
            card.InitData(isPlayerA, data.card);
            card.setWorldRotation(this.handQuat);
            this.handCardLay.addChild(card);
            card.setWorldPosition(this.adHand.worldPosition);
            await card.MoveTo(locaNode.worldPosition, this.handQuat);
            card.receive();
        }
        this.LayoutAllHandCards();
        return TimeStamp(tt);
    }

    /**
     * 非可视区域的卡牌飞到场景区域上
     * @param formIsPlayerA 卡牌来源是否第一视觉玩家
     * @param toIsPlayerA 卡牌目标是否第一视觉玩家
     * @param areaIdx 添加卡牌的目标区域下标
     * @param cardIdx 添加卡牌的目标下标
     * @param data 添加卡牌数据
     */
    async CardBackToArea(isPlayerA: boolean, formIsPlayerA: boolean, toIsPlayerA: boolean, areaIdx: number, cardIdx: number, data: proto.base.IBattleRoomOpOutput_AddCardToTerrain) {
        let tt = TimeStamp();
        let fromNode: Node = this.fileLocation(formIsPlayerA, data.fromLocation);
        if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);//定位此技能的发起卡牌
            let target = this.findCard(TouchInstId(data));
            if (!fromNode) fromNode = target?.card;
            let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker?.area], [target?.area]);
            await Skill.Play(data, tag, isPlayerA);
        }
        let layout = (toIsPlayerA ? this.myTeamLayout : this.adTeamLayout)[areaIdx][cardIdx];
        let obj = this.cardMap[data.card.instId];
        if (!obj) {
            let card = SceneCard.Create();
            card.InitData(isPlayerA, data.card, this.zero);
            this.areaCardLay.addChild(card);
            obj = { isMy: toIsPlayerA, card: card, area: areaIdx, index: cardIdx };
            this.cardMap[data.card.instId] = obj;
        }
        obj.card.setWorldPosition(fromNode?.worldPosition || this.zero);
        await obj.card?.MoveTo?.(layout.worldPosition);
        //await obj.card?.Open?.();
        return TimeStamp(tt);
    }

    /**
     * 复制对方的卡或者把对方的卡挪过来用
     * @param isPlayerA 是否自己
     * @param data 
     */
    async AddCard(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_AddCard) {
        let tt = TimeStamp();
        let fromCard: CardLoca = this.findCard(data.sourceInstId);
        if (!fromCard) fromCard = cardLoca(this.fileLocation(isPlayerA, data.sourceLocation), isPlayerA);
        if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);// this.cardMap[data.fromInstId];
            let tager = this.findCard(TouchInstId(data)) || fromCard;
            let tag = this.skillTarget(isPlayerA, attacker?.card, [tager?.card], [attacker?.area], [fromCard?.area]);
            await Skill.Play(data, tag);
        }

        let sourceCard: SceneCard, target: SceneCard;
        // 处理来源
        if (data.sourceLocation == proto.base.BattleRoomCardLocation.Hand) {
            // 来源卡位于自己手牌
            let index = this.handCards.findIndex(value => value.instId == data.sourceInstId);
            if (index != -1) {
                sourceCard = this.handCards[index];
                if (data.isMove) {
                    this.handCards.splice(index, 1);
                    this.LayoutAllHandCards();
                }
            }
        } else if (data.sourceLocation == proto.base.BattleRoomCardLocation.Terrain) {
            // 来源卡位于场景上
            fromCard = this.cardMap[data.sourceInstId];
            if (fromCard) {
                if (data.isMove) delete this.cardMap[data.sourceInstId];
                sourceCard = fromCard.card;
            }
        }
        if (data.isMove) target = sourceCard;
        if (!target) {
            target = SceneCard.Create();
            target.InitData(isPlayerA, data.card);
            target.setWorldPosition(target.worldPosition);
        }
        switch (data.card.location) {
            case proto.base.BattleRoomCardLocation.Hand:
                if (isPlayerA) {
                    this.handCardLay.addChild(target);
                    this.handCards.push(target);
                    await this.LayoutAllHandCards();
                } else {
                    await target.MoveTo(this.adHand.worldPosition, this.handQuat);
                }
                break;

            case proto.base.BattleRoomCardLocation.Terrain:
                this.areaCardLay.addChild(target);
                let idx = 0;
                for (let k in this.cardMap) {
                    if (this.cardMap[k].area == data.card.area && this.cardMap[k].isMy == isPlayerA) {
                        if (this.cardMap[k].index != undefined) {
                            idx = Math.max(this.cardMap[k].index + 1, idx);
                        }
                    }
                }
                this.cardMap[data.card.instId] = {
                    isMy: isPlayerA,
                    card: target,
                    area: data.card.area,
                    index: idx
                }
                await this.LayoutAllArea();
                await target.Open();
                break;

            default:
                this.areaCardLay.addChild(target);
                let loca = this.fileLocation(isPlayerA, proto.base.BattleRoomCardLocation.Deck);
                await target.MoveTo(loca.worldPosition);
                target.receive();
        }
        return TimeStamp(tt);
    }

    /**
     * 从各个地方飞向指定区域
     * @param isPlayerA 
     * @param data 
     * @param fromData 
     * @param targetIdx 
     */
    async AddCardToArea(isPlayerA: boolean, data: OutStruct, fromData: proto.base.IBattleRoomCardData, area: number, targetIdx: number) {
        let tt = TimeStamp();
        let fromCard: CardLoca = this.findCard(fromData?.instId);
        if (!fromCard && data['fromLocation'] != undefined) fromCard = cardLoca(this.fileLocation(isPlayerA, data['fromLocation']), isPlayerA);
        if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);// this.cardMap[data.fromInstId];
            let target = this.findCard(TouchInstId(data)) || fromCard;
            let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker?.area], [area || fromCard?.area]);
            await Skill.Play(data, tag);
        }

        let obj = this.cardMap[data.card.instId];
        if (obj) {
            obj.area = data.card.area;
            obj.index = targetIdx;
            obj.isMy = isPlayerA;
        } else {
            let card = SceneCard.Create();
            card.InitData(data.card, v3());
            this.handCardLay.addChild(card);
            obj = {
                isMy: isPlayerA,
                card: card,
                area: data.card.area,
                index: targetIdx
            };
            this.cardMap[data.card.instId] = obj;
        }
        let target = this.fileLocation(isPlayerA, proto.base.BattleRoomCardLocation.Terrain, data.card.area, targetIdx);
        obj.card?.setWorldPosition(fromCard?.card?.worldPosition || this.zero);
        await obj.card?.MoveTo?.(target.worldPosition);
        if (obj.card.state != CardState.Showing) await obj.card?.Open?.();
        return TimeStamp(tt);
    }

    /**
     * 手牌自动出牌
     * @param cardData 
     * @param area 
     * @param cardIdx 
     * @returns 
     */
    async AutoPlayHand(cardData: proto.base.IBattleRoomCardData, area: number, cardIdx: number) {
        let tt = TimeStamp();
        let card: SceneCard;
        for (let index = 0; index < this.handCards.length; index++) {
            if (this.handCards[index].instId == cardData.instId) {
                card = this.handCards[index];
                this.handCards.splice(index, 1);
            }
        }
        if (card) {
            let obj = {
                isMy: true,
                card: card,
                area: area,
                index: cardIdx
            };
            this.cardMap[cardData.instId] = obj;
            card.parent = this.areaCardLay;
            let target = this.fileLocation(true, proto.base.BattleRoomCardLocation.Terrain, cardData.area, cardIdx);
            await card.MoveTo(target.worldPosition);
            await card.PlayToMyArea(target.worldPosition, target.rotation);
        }
        this.LayoutAllHandCards();
        return TimeStamp(tt);
    }

    /**
     * 非可视区域卡牌转变
     * （例：弃牌区到删除区、卡组区到弃牌区）
     * @param isPlayerA 是否第一视觉玩家
     * @param data 卡牌数据
     */
    async RemoveDeckToUnVisible(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_DeckToDel, loca: number) {
        let tt = TimeStamp();
        let attacker = this.findCard(data.fromInstId);//定位发起技能的卡牌
        let delNode = isPlayerA ? this.myDeck : this.adDeck;
        let target = this.findCard(TouchInstId(data)) || cardLoca(delNode, isPlayerA);
        let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker?.area], []);
        if (data.fromSkillId) await Skill.Play(data, tag, isPlayerA);
        let card: SceneCard = SceneCard.Create();
        card.InitData(isPlayerA, data.card);
        this.node.addChild(card);
        let tagNode = this.fileLocation(isPlayerA, loca);
        if (tagNode) {
            card.setWorldPosition(tagNode.worldPosition.x, tagNode.worldPosition.y, tagNode.worldPosition.z);
        } else {
            card.setWorldPosition(this.zero);
        }
        await card.MoveTo(delNode.worldPosition);
        return TimeStamp(tt);
    }

    /**
     * 非可视区域添加卡牌
     * （例：复制一张卡到卡组区域、系统发卡牌到卡组区域）
     * @param isPlayerA 是否第一视觉玩家
     * @param data 卡牌数据
     */
    async AddCardToDeck(isPlayerA: boolean, targetPlayer: boolean, data: proto.base.IBattleRoomOpOutput_AddCardToDeck) {
        let attacker = this.findCard(data.fromInstId);//尝试定位发起技能的卡牌
        // let head = data.card.area ? this.node.getChildByPath("ui/my") : this.node.getChildByPath("ui/ad");
        let head = this.fileLocation(targetPlayer, data.card.location);
        let tag = this.skillTarget(isPlayerA, attacker?.card, [head]);
        if (data.fromSkillId) await Skill.Play(data, tag);
        if (data.card.location == proto.base.BattleRoomCardLocation.Deck) return;//不可见的地方用特效
        let card: SceneCard = SceneCard.Create();
        card.InitData(isPlayerA, data.card);
        this.node.addChild(card);
        let tagObj = this.findCard(data.fromPlayerId);//this.fileLocation(isPlayerA, proto.base.BattleRoomCardLocation.Drop);
        if (tagObj) {
            card.setWorldPosition(tagObj.card.worldPosition);
        } else {
            let tagNode = this.fileLocation(isPlayerA, data.fromLocation);
            if (tagNode) {
                card.setWorldPosition(tagNode.worldPosition);
            } else {
                card.setWorldPosition(this.zero);
            }
        }
        await card.MoveTo(head.worldPosition);
        card.receive();
    }

    /**
     * 从各个方向添加卡牌到手牌上
     * @param isPlayerA 
     * @param data 
     * @param fromLocation 
     * @param fromCard 
     */
    async AddCardToHand(isPlayerA: boolean, data: proto.base.IBattleRoomOpOutput_AddCardToHand, fromLocation?: number, fromCard?: proto.base.IBattleRoomCardData) {
        let tt = TimeStamp();
        let fromLoca: CardLoca;
        if (fromCard) fromLoca = this.findCard(fromCard.instId);
        if (!fromLoca) fromLoca = cardLoca(this.fileLocation(isPlayerA, data['fromLocation'] || fromLocation), isPlayerA);
        // if (!fromNode) fromNode = this.findCard(TouchInstId(data));
        let target = this.findCard(TouchInstId(data)) || fromLoca;

        if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);//this.cardMap[data.fromInstId];
            let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker?.area], [target?.area]);
            await Skill.Play(data, tag);
        }

        if (isPlayerA) {
            if (!this.handCards.find(value => value.instId == data.card.instId)) {
                let card: SceneCard = SceneCard.Create();
                card.InitData(isPlayerA, data.card, v3());
                this.handCards.push(card);
                this.handCardLay.addChild(card);
                card.setWorldPosition(fromLoca?.card?.worldPosition || this.zero);
                let v = Vec3.clone(this.handCenter);
                let total = this.handCards.length * GameSet.CardWide;
                v.x = this.handCenter.x - total - GameSet.CardWide / 2;
                v.x += (GameSet.CardWide * this.handCards.length);
                await card.MoveTo(v, this.handQuat);
            }
        } else {
            let card: SceneCard = SceneCard.Create();
            card.InitData(isPlayerA, data.card, v3());
            card.setWorldPosition(this.zero);
            await card.MoveTo(this.adHand.worldPosition, this.handQuat);
        }

        return TimeStamp(tt);
    }

    /**
     * 卡牌在区域上移动
     * @param isPlayerA 移动目的地的玩家是否第一视觉玩家
     * @param areaIdx 移动目的地的区域下标
     * @param cardIdx 移动目的地的卡牌下标
     * @param data 
     */
    async CardAreaMove(isPlayerA: boolean, areaIdx: number, cardIdx: number, data: proto.base.IBattleRoomOpOutput_TerrainToTerrain) {
        let tt = TimeStamp();
        let attacker = this.findCard(data.fromInstId);
        let obj = this.cardMap[data.card.instId];
        let target = this.findCard(TouchInstId(data)) || obj;
        if (data.fromSkillId) {
            let tag = this.skillTarget(isPlayerA, attacker?.card, [target?.card], [attacker?.area], [target?.area]);
            await Skill.Play(data, tag, isPlayerA);
        }

        if (obj) {
            obj.isMy = isPlayerA;
            obj.area = areaIdx;
            obj.index = cardIdx;
            let targetNode: Node = isPlayerA ? this.myTeamLayout[areaIdx][cardIdx] : this.adTeamLayout[areaIdx][cardIdx];
            obj.card?.FlushData?.(isPlayerA, data.card);
            await obj.card?.MoveTo?.(targetNode.worldPosition)
        } else {
            this.AddCardToArea(isPlayerA, data, undefined, areaIdx, cardIdx)
        }
        return TimeStamp(tt);
    }

    /**
     * 窥视区域
     * @param data 
     */
    async PeekTerrain(isplayerA: boolean, data: proto.base.IBattleRoomOpOutput_Peek, playerIdA: string) {
        let attacker = this.findCard(data.fromInstId);
        let target = this.findCard(TouchInstId(data)) || attacker;
        let terrains: proto.base.IBattleRoomTerrainData[] = [];
        for (let k in data.terrainData) {
            terrains.push(data.terrainData[k])
        }
        if (data.fromSkillId) {
            let areas = [];
            for (let k in data.terrainData) {
                let terrain = data.terrainData[k];
                // let target = this.fileLocation(false, proto.base.BattleRoomCardLocation.Terrain, terrain.area);
                // if (target) areas.push(target);
                areas.push(terrain.area);
            }
            let tag = this.skillTarget(true, attacker?.card, [target?.card], [attacker?.area], areas);
            await Skill.Play(data, tag);
        }
        await this.FlushTerrain(isplayerA, terrains, playerIdA);
    }

    /**
     * 窥视卡片
     * @param data 
     * @param loca 
     */
    async PeekHandCards(data: proto.base.IBattleRoomOpOutput_Peek, loca: number = proto.base.BattleRoomCardLocation.Hand) {
        let attacker = this.findCard(data.fromInstId);
        if (data.fromSkillId) {
            // let target = this.fileLocation(false, loca);
            let target = this.findCard(TouchInstId(data)) || cardLoca(this.fileLocation(false, loca), true);
            let tag = this.skillTarget(true, attacker?.card, [target?.card], [attacker?.area], [target?.area]);
            await Skill.Play(data, tag);
        }
        let head = this.node.getChildByPath("ui/ad");
        let cards = [];
        for (let k in data.handCards) {
            let cardData = data.handCards[k];
            let card = SceneCard.Create();
            card.InitData(false, cardData, this.handQuat);
            this.handCardLay.addChild(card);
            card.setWorldPosition(head.worldPosition.x, head.worldPosition.y, head.worldPosition.z);
            cards.push(card);
        }
        let ps = [];
        let v = Vec3.clone(this.PeekHandV);
        let total = Math.max(0, cards.length - 1) * GameSet.CardWide;
        v.x = this.handCenter.x - total - GameSet.CardWide / 2;
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            ps.push(card.LayoutHands(v, this.handQuat));
            v.x += GameSet.CardWide;
        }
        await Promise.all(ps);
        await Second(3);
        ps.length = 0;
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            ps.push(card.MoveTo(this.adHand.worldPosition, this.handQuat));
        }
        await Promise.all(ps);
        while (cards.length) {
            cards.pop().receive();
        }
    }

    /**
     * 重置
     */
    Reset() {

        if (this.myNameLab) {
            this.myNameLab.string = "";
            this.adNameLab.string = "";
            // this.roundLab.string = "";
        }
        this.doubleLab.string = `1`;
        this.roundBtnMaskBg.active = true;
        this.progress.fillRange = 0;
        this.isWaitInput = false;
        this.qxjshhEffect.active = false;
        this.notTimeEffect.active = false;
        this.jshhEffect.active = false;
        for (let k in this.cardMap) {
            let obj = this.cardMap[k];
            obj.card?.receive && obj.card?.receive();
        }
        this.cardMap = {};

        for (let area of this.areaList) {
            area.getChildByName("mywin01").active = false;
            area.getChildByName("mywin02").active = false;
            area.getChildByName("adwin01").active = false;
            area.getChildByName("adwin02").active = false;
            area.getChildByName("desc").getComponent(Label).string = "";
            area.getChildByName("power1").getComponent(Label).string = "";
            area.getChildByName("power2").getComponent(Label).string = "";
        }

        while (this.handCards.length) {
            let card = this.handCards.pop();
            card.receive();
        }

    }
}


