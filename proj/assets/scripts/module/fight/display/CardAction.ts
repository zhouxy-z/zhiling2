import { ITweenOption, Node, Tween, Vec3, easing, game, math, tween, v3 } from "cc";
import { GameSet } from "../../../manager/GameSet";
import { Second } from "../../../utils/Utils";

export interface ICardAction {
    readonly running: Promise<any>;
    /**运行 */
    run(cb?: Function, update?: (ratio: number) => void): Promise<any>;
    /**合并 */
    merge(act: ICardAction): ICardAction;
    /**直接运行最后一帧 */
    end(): void;
    /**销毁 */
    destory(): void
}

/**卡牌移动 */
class BaseAction {
    protected card: Node;
    protected v: Vec3 = v3();
    protected q: math.Quat = math.quat();
    protected cb: Function;
    protected subComplete: Function;
    protected tw: Tween;

    protected sub: Promise<any>;
    protected ease: any;
    protected tick: number;
    protected dt: number;
    protected lessTime: number;

    constructor(card: Node, start: Vec3, end: Vec3, q: math.Quat) {
        this.card = card;
        end && this.v.set(end);
        q && this.q.set(q);
        start && card.setWorldPosition(start.x, start.y, start.z);
    }

    get running() {
        return this.sub;
    }

    CreateSub(dt: number = 2) {
        let self = this;
        let sub = new Promise((resolve, reject) => {
            self.subComplete = resolve;
        });
        dt++;
        Second(dt).then(() => {
            if (self.subComplete) {
                self.subComplete();
            }
        })
        return sub;
    }

    /**
     * 判断两个动作参数是否相同
     * @param v 
     * @param q 
     * @param ease 
     * @returns 
     */
    Equit(v?: Vec3, q?: math.Quat, ease?: Function) {
        if ((!this.v && !v) || !this.v.equals(v)) return false;
        if ((!this.q && !q) || !this.q.equals(q)) return false;
        if ((!this.ease && !ease) || this.ease != ease) return false;
        return true;
    }

    run(cb?: Function): Promise<any> {
        if (this.running) return this.running;
        this.cb = cb;
        let self = this;
        this.sub = this.CreateSub(this.dt);

        let onEnd = () => {
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
        }
        let prop: any = {};
        if (this.v) prop.worldPosition = this.v;
        if (this.q) prop.worldRotation = this.q;
        let opt: ITweenOption = {};
        if (this.ease) opt.easing = this.ease;
        this.tw = tween(this.card).to(this.dt, prop, opt).call(onEnd.bind(this)).start();
        this.tick = game.totalTime / 1000;
        this.lessTime = this.dt;
        return this.sub;
    }

    merge(act: any): ICardAction {
        if (!this.running) return act;
        if (this.v && act.v && this.v.equals(act.v)) {
            if (act.q && !this?.q?.equals(act.q)) return act;
            return this;
        }
        if (this.q && act.q && this.q.equals(act.q)) {
            if (act.v && !this?.v?.equals(act.v)) return act;
            return this;
        }
        this.end();
        return act;
    }
    end(): void {
        Tween.stopAllByTarget(this.card);
        this.cb && this.cb();
        this.subComplete && this.subComplete();
        this.subComplete = undefined;
        this.sub = undefined;
        this.v && this.card?.setWorldPosition(this.v);
        this.q && this.card?.setWorldRotation(this.q);
        this.tick = 0;
        this.lessTime = 0;
        this.destory();
    }
    destory(): void {
        // console.log("destory", this);
        this.sub = undefined;
        this.tick = 0;
        this.lessTime = 0;
        this.card = this.tw = undefined;
        this.cb = this.subComplete = undefined;
    }
}

/**普通移动 */
export class CardMoveTo extends BaseAction implements ICardAction {
    constructor(card: Node, target: Vec3, q: math.Quat) {
        super(card, undefined, target, q);
    }
    run(cb?: Function): Promise<any> {
        if (this.running) return this.running;
        let dis = Vec3.distance(this.card.worldPosition, this.v);
        this.dt = dis / 100;
        return super.run(cb);
    }
}

/**卡牌布局 */
export class CardLayout extends BaseAction implements ICardAction {
    constructor(card: Node, target: Vec3, q: math.Quat) {
        super(card, undefined, target, q);
        this.dt = 0.4;
        this.ease = easing.quartOut;
    }
}

/**移动到手牌 */
export class CardFlyToHand extends BaseAction implements ICardAction {
    constructor(card: Node, start: Vec3, end: Vec3, q: math.Quat) {
        super(card, start, end, q);
        this.dt = 0.6;
        this.ease = easing.quartOut;
    }
}

/**卡片飞到战斗区域 */
export class CardFlyToArea extends BaseAction implements ICardAction {
    constructor(card: Node, target: Vec3, q: math.Quat) {
        super(card, undefined, target, q);
        this.dt = 0.3;
        this.ease = easing.backIn;
    }
}

export const $Front_Quat = math.quat();
export const $Back_Quat = math.quat();
math.Quat.fromEuler($Back_Quat, 0, 0, 180);
math.Quat.fromEuler($Front_Quat, 0, 0, 0);

/**翻转 */
export class CardTurnBack extends BaseAction implements ICardAction {
    constructor(card: Node) {
        super(card, undefined, card.worldPosition, $Back_Quat);
        this.dt = 0.2;
    }
    run(cb?: Function): Promise<any> {
        if (this.running) return this.running;
        this.cb = cb;
        let self = this;
        this.sub = this.CreateSub(this.dt);
        let onEnd = () => {
            Tween.stopAllByTarget(this.card);
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
        }
        let dt = this.dt / 2;
        let v = v3(this.v.x, this.v.y + this.card['wide'] / 2, this.v.z);
        this.tw = tween(this.card).to(dt, {
            worldPosition: v, worldRotation: this.q
        }, { easing: easing.quartOut }).to(dt, {
            worldPosition: this.v
        }).call(onEnd.bind(this)).start();
        this.tick = game.totalTime / 1000;
        this.lessTime = this.dt;
        return this.sub;
    }
}

/**揭示动作 */
export class CardTurnFront extends BaseAction implements ICardAction {
    constructor(card: Node) {
        super(card, undefined, card.worldPosition, $Front_Quat);
        this.dt = 1.5;
    }
    run(cb?: Function, update?: (ratio: number) => void): Promise<any> {
        if (this.running) return this.running;
        this.cb = cb;
        let self = this;
        this.sub = this.CreateSub(this.dt);
        let onEnd = () => {
            Tween.stopAllByTarget(this.card);
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
        }
        let dt = this.dt / 4;
        let v = GameSet.ShowPoint;
        this.tw = tween(this.card).to(dt, {
            worldPosition: v3(v.x, v.y, v.z), worldRotation: GameSet.ScreamRotation.clone()
        }, { easing: easing.expoOut }).to(dt * 2, {
            worldPosition: v3(v.x, v.y + 1, v.z)
        }, {
            onUpdate: (target: Node, ratio: number) => {
                update && update(ratio);
            }
        }).to(dt, {
            worldPosition: this.v, worldRotation: this.q
        }, { easing: easing.expoIn }).call(onEnd.bind(this)).start();
        this.tick = game.totalTime / 1000;
        this.lessTime = this.dt;
        return this.sub;
    }
}

export class CardShowBig extends BaseAction implements ICardAction {
    constructor(card: Node) {
        super(card, undefined, card.worldPosition, $Front_Quat);
        this.dt = 0.2;
    }
    run(cb?: Function, update?: (ratio: number) => void): Promise<any> {
        if (this.running) return this.running;
        this.cb = cb;
        let self = this;
        this.sub = this.CreateSub(this.dt);
        let onEnd = () => {
            Tween.stopAllByTarget(this.card);
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
        }
        let dt = this.dt;
        let v = GameSet.ShowPoint;
        this.tw = tween(this.card).to(dt, {
            worldPosition: v3(v.x, v.y, v.z), worldRotation: GameSet.ScreamRotation.clone()
        }, { easing: easing.expoOut }).call(onEnd.bind(this)).start();
        this.tick = game.totalTime / 1000;
        this.lessTime = this.dt;
        return this.sub;
    }
}

