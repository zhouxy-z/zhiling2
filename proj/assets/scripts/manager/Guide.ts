import { BlockInputEvents, Button, EventTouch, Input, Label, Layers, Node, Size, Sprite, SpriteFrame, System, Tween, UITransform, Vec2, Widget, debug, director, easing, find, game, input, instantiate, js, math, path, sp, tween, v2, v3, view } from "cc";
import { EventMgr } from "./EventMgr";
import { PanelDefine } from "../PanelDefine";
import { GameSet } from "./GameSet";
import { CfgMgr, StdGuide, StdUIOpen } from "./CfgMgr";
import { Tips } from "../module/common/Tips";
import { CheckCondition, Goto } from "../DL";
import { ResMgr, folder_common } from "./ResMgr";
import { GameObj, Panel } from "./GameRoot";
import { Second, Utils } from "../utils/Utils";
import { Snapshot } from "../utils/Snapshot";
import LocalStorage from "../utils/LocalStorage";
import { PlayerData } from "../module/player/PlayerData";

/**
 * 引导系统
 */
export class Guide {

    protected systems: SystenDoor[] = [];
    protected guides: GuideSub[] = [];

    constructor() {
        GameSet.addTick(this.update, this);
        EventMgr.AddChan('reset_guide', this.Init, this);
        EventMgr.AddChan('ui_guide', this.fetch, this);
    }

    /**
     * 初始
     */
    protected async Init() {
        await GuideLay.ShowTop();
        while (this.systems.length) {
            let door = this.systems.pop();
            door.destory();
        }
        let stdDoors = CfgMgr.Get("SystemOpen");
        for (let std of stdDoors) {
            let door = new SystenDoor(std);
            this.systems.push(door);
        }

        while (this.guides.length) {
            let guide = this.guides.pop();
            guide.destory();
        }

        if (PlayerData.player?.statusMark.NoobCardsAdd) {
            LocalStorage.SetNumber("guide301", 1);
            LocalStorage.SetNumber("guide302", 1);
        }

        let stdGuids: StdGuide[] = CfgMgr.Get("guide");
        for (let stdGuide of stdGuids) {
            if (!LocalStorage.GetNumber("guide" + stdGuide.ID, 0)) {
                this.guides.push(new GuideSub(stdGuide));
            }
        }
    }

    /**
     * 打开界面
     * @param link 
     * @param params 
     * @returns 
     */
    protected fetch(link: string, ...params: any[]) {
        let route = link.split(".");
        if (PanelDefine[route[0]]) {
            let classz: any = js.getClassByName(route.shift());
            if (!classz) return;
            if (route.length) {
                for (let h of route) {
                    classz = classz[h];
                }
                classz(...params);
            } else {
                classz.Show(...params);
            }
        } else {
            let target = find(route[0]);
            if (target && target.activeInHierarchy && params) {
                target.emit(params.shift(), ...params);
            }
        }
    }

    protected updateLoop = 0;
    protected update(dt: number) {
        this.updateLoop += dt;
        if (this.updateLoop >= 0.25) {
            this.updateLoop = 0;
            for (let door of this.systems) {
                door.update();
            }
            let i = 0;
            while (i < this.guides.length) {
                let guide = this.guides[i];
                guide.update();
                if (guide.isEnd) {
                    this.guides[i].destory();
                    this.guides.splice(i, 1);
                } else {
                    i++;
                }
            }
        }
    }
}

/**
 * 系统开启
 */
class SystenDoor {
    private std: StdUIOpen;
    private open: boolean = true;
    private msg: string;
    constructor(std: StdUIOpen) {
        this.std = std;
    }
    update() {
        // 判断触发条件
        let seed = true;
        for (let n = 1; ; n++) {
            let types = this.std['ConditionId' + n];
            let values = this.std['ConditionValue' + n];
            if (types == undefined || types.length == 0 || values == undefined) break;

            for (let i = 0; i < types.length; i++) {
                let type = types[i];
                let value = values[i];
                if (!Utils.IsArray(value)) value = [value];
                if (!CheckCondition(type, ...value)) this.msg = this.std.Tips;
                if (this.msg != undefined) {
                    seed = false;
                    break;
                }
            }
            if (seed) break;
        }
        if (seed) {
            if (!this.open) {
                this.open = true;
            } else {
                return;
            }
        } else if (this.open) {
            this.open = false;
        } else {
            return;
        }
        let uis: string[] = this.std.UI;
        let types: number[] = this.std.HideType;
        for (let i = 0; i < uis.length; i++) {
            let url = uis[i];
            let target = find(url);
            if (!target) continue;
            // 系统入口开启或隐藏样式
            switch (types[i]) {
                case 0:
                    target.active = this.open;
                    break;
                case 1:
                    if (this.open) {
                        this.resetBtn(target);
                    } else {
                        if (target.getChildByName(`lock`)) {
                            target.getChildByName(`lock`).active = true;
                        } else {
                            let lock = new Node("lock");
                            let sprite = lock.addComponent(Sprite);
                            target.addChild(lock);
                            ResMgr.LoadResAbSub(path.join(folder_common, "lock/spriteFrame"), SpriteFrame, sf => {
                                sprite.spriteFrame = sf;
                            });
                        }
                        this.maskTouch(target);
                    }
                    break;
                default:
                    target.active = this.open;
            }
        }
    }

    protected maskTouch(target: any) {
        if (!target['$$mask']) {
            let size = target.getComponent(UITransform).contentSize;
            let sx = target.getScale().x, sy = target.getScale().y;
            let mask = new Node('mask');
            mask.addComponent(Sprite);
            mask.addComponent(BlockInputEvents);
            mask.getComponent(UITransform).setContentSize(size.width * sx, size.height * sy);
            target.addChild(mask);
            target['$$mask'] = mask;
            mask['$$target'] = target;
            mask.on(Input.EventType.TOUCH_START, this.breakTouch, this);
            mask.on(Input.EventType.TOUCH_END, this.breakTouch, this);
            mask.on(Input.EventType.TOUCH_CANCEL, this.breakTouch, this);
            target.on(Node.EventType.PARENT_CHANGED, this.onParentChange, this);
        }
    }
    protected breakTouch(e: EventTouch) {
        let target = e.currentTarget['$$target'];
        let btn = target.getComponent(Button);
        if (btn) {
            if (e.type == Input.EventType.TOUCH_END) {
                btn['_pressed'] = false;
                btn['_updateState']();
            } else {
                let evt = instantiate(e);
                evt.target = btn;
                evt.currentTarget = btn;
                target.dispatchEvent(evt);
            }
        }
        if (e.type == Input.EventType.TOUCH_END) Tips.Show(this.msg);
    }
    protected onParentChange(target: any) {
        if (!target || !target['$$mask']) return;
        if (target['$$mask'].parent) {
            target['$$mask'].parent.removeChild(target['$$mask']);
        }
    }

    resetBtn(target: Node) {
        target.active = true
        if (target.getChildByName(`lock`)) target.getChildByName(`lock`).active = false;
        if (target['$$mask']) {
            let mask = target['$$mask'];
            target['$$mask'] = undefined;
            mask.off(Input.EventType.TOUCH_START);
            mask.off(Input.EventType.TOUCH_END);
            mask.off(Input.EventType.TOUCH_CANCEL);
            mask.parent && mask.parent.removeChild(mask);
            mask.destroy();
        }
    }
    get isOpen() {
        return this.open;
    }
    get Std() {
        return this.std;
    }

    destory() {
        if (!this.std) return;
        let uis: string[] = this.std.UI;
        if (!uis) return;
        for (let i = 0; i < uis.length; i++) {
            let url = uis[i];
            let target = find(url);
            if (!target) continue;
            target.active = true;
            this.resetBtn(target);
        }
    }
}

export class GuideLay extends Panel {
    protected prefab: string = "prefabs/guide/GuideLay";
    protected onShow(): void { }
    public flush(...args: any[]): void { }
    protected onHide(...args: any[]): void { }
    static async Add(node: Node) {
        if (!this.$instance) await this.ShowTop();
        this.$instance.node.addChild(node);
    }
    static async Del(node: Node) {
        if (!this.$instance) await this.$loading;
        this.$instance.node.removeChild(node);
    }
}

/**
 * 引导
 */
export class GuideSub {
    protected state: number;
    protected progress: number;
    protected cfg: StdGuide;
    protected pointTo: PointTo;
    protected video: PlayVideo;
    protected $currentTarget: Node;
    protected loop = 0;

    constructor(cfg: StdGuide) {
        this.cfg = cfg;
        this.progress = 0;
        this.state = 0;
    }

    set currentTarget(value: Node) {
        this.$currentTarget = value;
    }
    get currentTarget() {
        return this.$currentTarget
    }

    update() {
        if (!this.state) {
            let result = true;
            for (let n = 1; ; n++) {
                let cs = this.cfg["ConditionId" + n];
                if (cs == undefined || !cs.length) break;
                let vs = this.cfg["ConditionValue" + n];
                for (let i = 0; i < cs.length; i++) {
                    let values = vs[i];
                    if (!Utils.IsArray(values)) values = [values];
                    if (!CheckCondition(cs[i], ...values)) {
                        result = false;
                        break;
                    }
                }
            }
            if (result) {
                //开始指引
                this.state = 1;
                this.progress = -1;
                this.next();
            }
        } else if (this.state == 1) {
            let result = false;
            for (let n = 1; ; n++) {
                let cs = this.cfg["EndConditionId" + n];
                if (cs == undefined || !cs.length) break;
                let vs = this.cfg["EndConditionValue" + n];
                for (let i = 0; i < cs.length; i++) {
                    let values = vs[i];
                    if (!Utils.IsArray(values)) values = [values];
                    if (CheckCondition(cs[i], ...values)) {
                        result = true;
                        break;
                    }
                }
            }
            if (result) {
                this.end();
            } else {
                if (!this.currentTarget) {
                    this.next();
                } else {
                    this.checkTarget();
                }
            }
        }
    }
    get isRunning() {
        return this.state == 1;
    }
    get isEnd() {
        return this.state == 2;
    }
    protected async next(e?: any) {
        if (this.progress + 1 <= this.cfg.Steps.length) {
            if (e && this.cfg.OpenUI[this.progress]) {
                Goto(this.cfg.OpenUI[this.progress]);
            }

            if (this.pointTo) {
                this.pointTo.receive();
                this.pointTo = undefined;
            }
            if (this.video) {
                this.video.receive();
                this.video = undefined;
            }
            this.currentTarget = undefined;
            let i = this.progress + 1, cfg = this.cfg;
            if (!cfg.Type[i] && cfg.OverTime[i] == undefined) {
                this.progress++;
                return this.next();
            }
            let step = cfg.Steps[i];
            if (cfg?.Type?.[i] == 3) {
                if (!cfg.Prefabs[i]) return this.next();
                this.video = PlayVideo.Create("prefabs/guide/" + cfg.Prefabs[i]);
                this.video.on("end", this.next, this);
                this.video.Play(cfg?.OverTime?.[i] || 0);
                this.progress++;
                this.currentTarget = this.video;
                return;
            }
            this.currentTarget = step ? find(step) : undefined;
            if (!this.currentTarget || !this.currentTarget.activeInHierarchy) {
                this.currentTarget = undefined;
                return;
            }
            let modal = false;
            if (cfg.Type?.[i] == 0) {
                modal = true;
            } else {
                modal = cfg.Type?.[i] == 2;
            }
            this.pointTo = PointTo.Create();
            this.pointTo.on("end", this.next, this);
            console.log("Step--->", step, this.currentTarget);
            this.pointTo.Target(this.currentTarget, cfg.Angle?.[i], cfg.Tips?.[i], modal, cfg.Offset?.[i], cfg.TipsAngle?.[i], cfg.TipsOffset?.[i], cfg.TipsSize?.[i], cfg.OverTime[i] ? cfg.OverTime[i] : undefined);
            this.pointTo.clickSzie = [cfg?.ClickSize?.[0] || 100, cfg?.ClickSize?.[1] || 100];
            this.progress++;
        } else {
            this.end();
        }
    }
    protected checkTarget() {
        let cfg = this.cfg;
        let step = this.cfg.Steps[this.progress];
        if (this.cfg?.Type?.[this.progress] == 3) return;
        let target = step ? find(step) : undefined;
        if (!this.currentTarget || this.currentTarget == target) return;
        let modal = false;
        if (this.cfg.Type?.[this.progress] == 0) {
            modal = true;
        } else {
            modal = this.cfg.Type?.[this.progress] == 2;
        }
        let i = this.progress;
        this.currentTarget = target;
        if (this.pointTo) this.pointTo.receive()
        this.pointTo = PointTo.Create();
        this.pointTo.on("end", this.next, this);
        this.pointTo.Target(this.currentTarget, cfg.Angle?.[i], cfg.Tips?.[i], modal, cfg.Offset?.[i], cfg.TipsAngle?.[i], cfg.TipsOffset?.[i], cfg.TipsSize?.[i], cfg.OverTime[i] ? cfg.OverTime[i] : undefined);
        this.pointTo.clickSzie = [cfg?.ClickSize?.[0] || 100, cfg?.ClickSize?.[1] || 100];
    }
    protected end() {
        LocalStorage.SetNumber("guide" + this.cfg.ID, 1);
        if (this.cfg.Childs) {
            for (let id of this.cfg.Childs) {
                LocalStorage.SetNumber("guide" + id, 1);
            }
        }
        this.state = 2;
        this.currentTarget = undefined;
        if (this.pointTo) {
            this.pointTo.receive();
            this.pointTo = undefined;
        }
        if (this.video) {
            this.video.receive();
            this.video = undefined;
        }

        if (this.cfg.OpenUI[this.cfg.OpenUI.length - 1]) {
            Goto(this.cfg.OpenUI[this.cfg.OpenUI.length - 1]);
        }
    }
    destory() {
        this.currentTarget = undefined;
        if (this.pointTo) {
            this.pointTo.receive();
            this.pointTo = undefined;
        }
        if (this.video) {
            this.video.receive();
            this.video = undefined;
        }
    }
}

/**
 * 指引
 */
export class PointTo extends GameObj {
    protected $prefab: string = "prefabs/guide/PointTo";
    protected cfg: StdGuide;
    protected modalMask: Node;
    protected finger: Node;
    protected pointer: Node;
    protected tips: Node;
    protected label: Label;

    target: Node;
    protected overTime: number;
    protected img: Node;
    protected imgSp: Sprite;
    protected sub = 50;
    protected duration = 0.4;
    protected modal = false;
    protected tipsSize: Size;
    protected pointerAngle: number;
    protected offset: number[];
    protected msgAngle: number;
    protected msgOffset: number[];

    protected onLoad(): void {
        let widget = this.addComponent(Widget);
        widget.isAlignLeft = widget.isAlignRight = widget.isAlignBottom = widget.isAlignTop = true;
        widget.left = 0;
        widget.right = 0;
        widget.bottom = 0;
        widget.top = 0;
        let size = view.getVisibleSize();
        let ut = this.getComponent(UITransform);
        ut.setContentSize(size);
        this.modalMask = this.find("mask");
        this.pointer = this.find("pointer");
        this.finger = this.pointer.getChildByName("finger");
        this.tips = this.find("tips");
        this.label = this.find("tips/label").getComponent(Label);
        this.tipsSize = this.tips.getComponent(UITransform).contentSize.clone();
    }

    async Stop() {
        if (!this.$hasLoad) await this.loadSub;
        this.active = false;
    }

    async Target(node: Node, angle: number, msg: string = "", modal: boolean = false, offset: number[], msgAngle?: number, msgOffset?: number[], msgSize?: number[], duration?: number) {
        GuideLay.Add(this);
        this.clickSzie = [];
        this.overTime = duration;
        this.pointerAngle = angle;
        this.modal = modal;
        if (!this.$hasLoad) await this.loadSub;
        // this.modalMask.active = modal;
        if (!msgSize) msgSize = [this.tipsSize.x, this.tipsSize.y];
        this.offset = offset || [0, 0];
        this.msgAngle = msgAngle;
        this.msgOffset = msgOffset || [0, 0];
        this.tips.getComponent(UITransform).setContentSize(msgSize[0], msgSize[1]);
        this.label.string = msg;
        this.tips.active = (msg != "");
        this.target = node;
        if (this.modal) {
            this.img = Snapshot.Add(this.target);
            this.prefabNode.addChild(this.img);
            this.img.setSiblingIndex(1);
            this.img.name = msg;
            this.img.on(Input.EventType.TOUCH_START, this.onModalTouch, this);
        } else {
            if (this.target.layer & Layers.Enum['SCENE']) {
                find("Canvas").on(Input.EventType.TOUCH_START, this.onTouchCanvas, this);
            } else {
                this.target.once(Input.EventType.TOUCH_START, this.onTouch, this);
            }
        }

        this.pointSub();
        this.update(1);
    }
    protected pointSub() {
        if (this.finger.position.x < this.sub) {
            this.finger.setPosition(0, 0, 0);
            tween(this.finger).to(this.duration, { position: v3(this.sub, 0, 0) }, { easing: easing.quadOut }).call(this.pointSub.bind(this)).start();
        } else {
            this.finger.setPosition(this.sub, 0, 0);
            tween(this.finger).to(this.duration, { position: v3(0, 0, 0) }, { easing: easing.quadIn }).call(this.pointSub.bind(this)).start();
        }
    }
    clickSzie = [];
    protected onTouchCanvas(e: EventTouch) {
        let out = v3();
        GameSet.mainCamera.worldToScreen(this.target.worldPosition, out);
        let p = e.getLocation();
        let w = this.clickSzie[0] || 100, h = this.clickSzie[1] || 100;
        if (Math.abs(p.x - out.x) <= w && Math.abs(p.y - out.y) <= h) {
            if (this.target) {
                e.type = Input.EventType.TOUCH_END;
                this.target.dispatchEvent(e);
                this.end();
            } else {

            }
        }
    }
    protected onModalTouch(e: EventTouch) {
        if (this.target && this.target.isValid) {
            let out = v3();
            if (this.target.layer & Layers.Enum['SCENE']) {
                GameSet.mainCamera.worldToScreen(this.target.worldPosition, out);
                let p = e.getLocation();
                let w = this.clickSzie[0] || 100, h = this.clickSzie[1] || 100;
                if (Math.abs(p.x - out.x) <= w && Math.abs(p.y - out.y) <= h) {

                } else return;
            } else {
                GameSet.UICamera.worldToScreen(this.target.worldPosition, out);
                let p = e.getLocation();
                let w = 100, h = 100;
                if (this.clickSzie[0] != undefined && this.clickSzie[1] != undefined) {
                    w = this.clickSzie[0], h = this.clickSzie[1];
                }
                if (Math.abs(p.x - out.x) <= w && Math.abs(p.y - out.y) <= h) {

                } else return;
            }
            e.type = Input.EventType.TOUCH_END;
            this.target.dispatchEvent(e);
            this.target.emit(Button.EventType.CLICK, this.target.getComponent(Button));
        }
        this.end();
    }
    protected onTouch(e: EventTouch) {
        if (this.target && this.target.isValid) {
            this.target.off(Input.EventType.TOUCH_START, this.onTouch, this);
        }
        this.end();
    }

    protected secondTick = 0;
    protected update(dt: number) {
        if (this.overTime != undefined) {
            this.overTime -= dt;
            if (this.overTime <= 0) {
                // if (this.target && this.target.isValid) {
                //     this.target.dispatchEvent(new EventTouch([], true, Input.EventType.TOUCH_END));
                //     this.target.emit(Button.EventType.CLICK, this.target.getComponent(Button));
                // }
                this.overTime = undefined;
                this.end();
                return;
            }
        }
        this.secondTick += dt;
        if (!this.target || this.secondTick < 0.25) return;
        this.secondTick = 0;

        if (!this.modal && !this.target.activeInHierarchy) {
            this.active = false;
            return;
        }
        this.active = true;
        let offset = this.offset;
        if (this.target.layer & Layers.Enum['SCENE']) {
            let out = v3();
            GameSet.mainCamera.convertToUINode(this.target.worldPosition, find("Canvas"), out);
            this.pointer.setPosition(out.x + (Number(offset[0]) || 0), out.y + Number(offset[1] || 0));
        } else {
            let [x, y] = Utils.Convert(0, 0, this.target, this.prefabNode);
            let box = Utils.GetBoundingBoxTo(this.target, this.pointer.parent);
            let w = Math.max(Math.abs(box.xMin - x), Math.abs(box.xMax - x));
            let h = Math.max(Math.abs(box.yMin - y), Math.abs(box.yMax - y));
            w = Math.max(w, h) * Math.cos(math.toRadian(this.pointerAngle));
            h = Math.min(w, h) * Math.sin(math.toRadian(this.pointerAngle));
            this.pointer.setPosition(x + w + (Number(offset[0]) || 0), y + h + Number(offset[1] || 0));
        }
        this.pointer.setRotationFromEuler(0, 0, this.pointerAngle);

        let rad = math.toRadian(this.pointerAngle);
        if (this.msgAngle) rad = this.msgAngle;

        let fingerSize = this.finger.getComponent(UITransform).contentSize;
        let fingerWide = Math.max(fingerSize.width, fingerSize.height);
        let size = this.tips.getComponent(UITransform).contentSize;
        let a = Math.max(size.width, size.height) / 2 + this.sub + fingerWide;
        let b = Math.min(size.width, size.height) / 2 + this.sub + fingerWide;
        this.tips.setPosition(this.pointer.position.x + a * Math.cos(rad) + this.msgOffset[0], this.pointer.position.y + b * Math.sin(rad) + this.msgOffset[1]);
    }

    protected end() {
        if (this.target) {
            this.target.off(Input.EventType.TOUCH_START, this.onTouch, this);
            Snapshot.Remove(this.target);
        }
        if (this.img) {
            this.img.off(Input.EventType.TOUCH_START, this.onModalTouch, this);
            this.img.parent && this.img.parent.removeChild(this.img);
        }
        find("Canvas").off(Input.EventType.TOUCH_START, this.onTouchCanvas, this);
        this.emit('end', this);
    }
    async receive() {
        if (!this.$hasLoad) await this.loadSub;
        if (this.target) {
            this.target.off(Input.EventType.TOUCH_START, this.onTouch, this);
            Snapshot.Remove(this.target);
        }
        this.off("end");
        this.Stop();
        if (this.img) {
            this.img.off(Input.EventType.TOUCH_START, this.onModalTouch, this);
            this.img.parent && this.img.parent.removeChild(this.img);
            this.img.off(Input.EventType.TOUCH_END);
        }
        this.img = undefined;
        if (this.target) {
            if (this.target.isValid) this.target.off(Input.EventType.TOUCH_END, this.onTouch, this);
            this.target = undefined;
        }
        find("Canvas").off(Input.EventType.TOUCH_START, this.onTouchCanvas, this);
        Tween.stopAllByTarget(this.pointer);
        super.receive();
    }
}

class PlayVideo extends GameObj {
    protected $prefab: string;
    protected targetUrl: string;
    protected duration: number;
    protected startTick: number;
    async Play(duration: number) {
        GuideLay.Add(this);
        if (!this.$hasLoad) await this.loadSub;
        let ls = this.prefabNode.children;
        for (let child of ls) {
            child.active = false;
        }
        this.duration = duration || 0.1;
        this.startTick = game.totalTime / 1000;
    }
    protected update(dt: number): void {
        let t = game.totalTime / 1000 - this.startTick;
        if (t >= this.duration) {
            this.end();
            if (this.parent) this.parent.removeChild(this);
            return;
        }
        let list = this.prefabNode.children;
        let index = Math.floor(t / this.duration * list.length);
        for (let i = 0; i < list.length; i++) {
            let child = list[i];
            if (i == index) {
                if (!child.active) {
                    child.active = true;
                    let sk = child.getComponent(sp.Skeleton);
                    if (sk) {
                        let action = Utils.GetSkeAciton(sk);
                        sk.setAnimation(0, action, false);
                        let duration = sk.getCurrent(0)?.animation?.duration || 0;
                        let scale = Math.min(1, this.duration / duration)
                        sk.timeScale = scale;
                    }
                }
            } else {
                child.active = false;
            }
        }
    }
    end() {
        this.emit('end', this);
    }
}