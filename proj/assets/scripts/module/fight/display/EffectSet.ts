import { _decorator, CCFloat, CCString, Component, easing, Enum, game, Node, ParticleSystem, sp, Sprite, Tween, tween, v3, Vec3 } from 'cc';
import { EaseType } from './EaseType';
import { Second, Utils } from '../../../utils/Utils';
import { Bezier } from '../../../utils/Bezier';
import { ISceneEntry, SceneCard } from './SceneCard';
import { EventMgr } from '../../../manager/EventMgr';
import { GameObj } from '../../../manager/GameRoot';
const { ccclass, disallowMultiple, property } = _decorator;

/**效果类型枚举 */
enum EffectType {
    none,
    sample,
    times,
    bullet,
    autoBullet
}

/**目标枚举 */
export enum TargetType {
    None,
    all,
    attacker,
    target,
    myArea,
    myDeck,
    myHand,
    myDrop,
    myDel,
    myEnergy,
    adArea,
    adDeck,
    adHand,
    adDrop,
    adDel,
    adEnergy
}
export type TargetSet = {
    route: string,
    attacker: Node,
    target: ISceneEntry,
    myArea: Node,
    myDeck: Node,
    myHand: Node,
    myDrop: Node,
    myDel: Node,
    myEnergy: Node,
    adArea: Node,
    adDeck: Node,
    adHand: Node,
    adDrop: Node,
    adDel: Node,
    adEnergy: Node
}

/**效果 */
export enum AffectType {
    None,
    ChangePower,	     //增加/翻倍/减少卡牌战力
    ChangeCost,	         //增加/翻倍/减少卡牌费率
    Copy,	             //复制卡牌
    CopyPower,	         //复制卡牌战力
    CopyCost,	         //复制卡牌费率
    Transform,	         //转换卡牌
    Nullify,	         //使卡牌效果无效
    RepeatEffect,	     //重复卡牌效果
    Protect,	         //卡牌保护
    Resurrect,	         //卡牌复活
    Draw,	             //抽牌
    Dis,	             //弃牌
    Recycle,	         //回收手牌
    Peek,	             //窥视手牌
    ModifyHandCost,	     //修改手牌费率
    AdjustHandLimit,     //手牌上限调整
    AddToZone,	         //在区域中添加卡牌
    RemoveZone,	         //移除区域卡牌
    AdjustZonePower,     //增加/减少区域总战力
    ScaleZonePower,	     //区域战力翻倍/减半
    ModifyZoneSkill,     //变更区域技能
    MoveBetweenZones,    //将卡牌从一个区域移动到另一个区域
    LockZone,	         //区域锁定
    ClearZone,	         //区域清空
    DestroyZone,	     //摧毁区域
    AdjustAllZonesPower, //区域内所有卡牌战力+X/-X
    GainEnergy,	         //增加能量
    ExtendTurn,	         //增加回合数


    All // 注意：此字段位于枚举末尾，不能更改
}

/**特效状态 */
enum EffectState {
    idle,
    playing,
    finish,
    buff
}

/**路径类型 */
enum PathType {
    liner,
    curve,
    bezier
}

@ccclass('EffectSet')
@disallowMultiple(true)
export class EffectSet extends Component {

    @property({ type: Enum(EffectType), tooltip: "类型" })
    type: EffectType = EffectType.sample;

    @property({ tooltip: "起始特效" })
    root: boolean = false;

    @property({ tooltip: "触发器" })
    tigger: boolean = false;

    @property({
        tooltip: "结束特效，此特效播放结束将强制回收所有特效", visible() {
            return this.tigger == true;
        }
    })
    last: boolean = false;

    @property({
        type: Enum(TargetType), tooltip: "触发对象", visible() {
            return this.tigger == true;
        }
    })
    tiggerType: number = 0;

    @property({
        type: Enum(AffectType), tooltip: "作用效果,详见battle_card_effect表", visible() {
            return this.tigger == true;
        }
    })
    tiggerAffect = 0;

    @property({
        type: CCString, tooltip: "buff触发播放", visible() {
            return this.tigger == true;
        }
    })
    buffEvent = "";

    @property({ type: CCFloat, tooltip: "(可配暂未实装)震屏" })
    shake: number = 0;

    @property({ type: CCString, tooltip: "角色技能动作" })
    action = "";

    @property({ type: Enum(TargetType), tooltip: "发起特效的类型,none表示不展示,all表示任意类型" })
    attackerType: TargetType = TargetType.attacker;

    @property({ tooltip: "坐标偏差" })
    offset: Vec3 = v3();

    @property({ tooltip: "锁定层级-1目标下层,0无锁定,1锁定目标上层" })
    lockDepth = 0;

    @property({ type: CCFloat, tooltip: "延迟播放的秒数,支持负数" })
    delay: number = 0;

    @property({ type: CCFloat, tooltip: "播放的次数,0表示循环播放", visible() { return this.type == EffectType.times; } })
    times: number = 1;

    @property({
        type: CCFloat, tooltip: "持续播放秒数", visible() {
            return this.type == EffectType.times && this.times == 0;
        }
    })
    playDuration: number = 0;

    @property({
        type: CCFloat, tooltip: "飞行速度(米/秒)", visible() {
            return this.type == EffectType.bullet;
        }
    })
    speed: number = 1;

    @property({
        type: Enum(EaseType), tooltip: "速度类型,详见EaseType", visible() {
            return this.type == EffectType.bullet;
        }
    })
    ease = "";

    @property({
        type: Enum(PathType), tooltip: "(暂未确定)路径类型:\n  liner(线性)\n   curve(抛物线)\n bezier(贝塞尔曲线)", visible() {
            return this.type == EffectType.bullet;
        }
    })
    pathType: number = 0;

    @property({ tooltip: "多发合并,用于合并同时触发多次特效时只播一次的情况" })
    protected merge: boolean = false;

    @property({
        tooltip: "子弹是否实时朝向运动方向", visible() {
            return this.type == EffectType.bullet;
        }
    })
    face: boolean = false;

    params: any[] = [];

    @property({
        type: CCFloat, tooltip: "抛物线高度和距离比值", visible() {
            return this.pathType == PathType.curve;
        }
    })
    curveRatio: number = 1;

    @property({
        type: [Vec3], tooltip: "多阶贝塞尔", visible() {
            return this.pathType == PathType.bezier;
        }
    })
    bezierPath: Vec3[] = new Array(3);

    @property({
        type: Enum(TargetType), tooltip: "被攻击目标类型", visible() {
            return this.type == EffectType.bullet;
        }
    })
    targetType: TargetType = TargetType.target;

    @property({ type: [Node], tooltip: "此特效播放完后的下一个特效" })
    nextEffects: Node[] = [];

    attacker: Node = undefined;
    target: Node = undefined;
    parent: Node;

    ////////////////////////////////////////////////////////////////////////////////
    protected static seed = 0;
    protected version: number;
    protected par: ParticleSystem; // 粒子特效
    protected prevState: boolean;  // 粒子特效状态记录
    protected ske: sp.Skeleton;    // 骨骼动画
    protected spr: Sprite;
    protected lessTimes: number;   // 剩余播放次数
    protected duration: number;     // 此特效持续时间
    protected status: number = EffectState.idle;    // 特效状态
    protected startTick = 0;            // 记录开始播放时间
    protected cb: Function;        // 结束回调
    protected tempV: Vec3 = v3();  // 位置记录
    protected bezier: Bezier;

    protected onLoad() {
        this.prevState = false;
        this.par = this.getComponent(ParticleSystem);
        if (this.par) {
            this.par.playOnAwake = false;
            this.par.stop();
            this.par.node.active = false;
        }
        this.ske = this.getComponent(sp.Skeleton);
        if (this.ske) {
            this.ske.node.active = false;
        }
        for (let i = this.nextEffects.length - 1; i >= 0; i--) {
            if (!this.nextEffects[i]) this.nextEffects.splice(i, 1);
        }
        this.spr = this.getComponent(Sprite);
    }

    Reset() {
        EventMgr.off("buff_event", this.onBuffEvent, this);
        this.version = ++EffectSet.seed;
        this.cb = undefined;
        Tween.stopAllByTarget(this.node);
        this.status = EffectState.idle;
        this.cb = undefined;
        this.startTick = 0;
        this.lessTimes = 0;
        if (this.par && this.par.node) {
            this.par.node.active = false;
            try { this.par.stop(); } catch (e) { }
            this.par.playOnAwake = false;
        }
        if (this.ske) {
            if (this.ske.node) {
                this.ske.node.active = false;
            } else {
                console.error("EffectSet.onDestory", this.node.name);
            }
        }
        if (!this.root) {
            this.node.active = false;
        }
    }

    protected onDestroy(): void {
        this.Reset();
    }

    /**
     * 设置坐标
     * @param v
     */
    setPosition(v: Vec3) {
        if (this.offset && !this.offset.equals(Vec3.ZERO)) {
            this.node.setWorldPosition(v.x + this.offset.x, v.y + this.offset.y, v.z + this.offset.z);
        } else {
            this.node.setWorldPosition(v.x, v.y, v.z);
        }
        // console.log(this.node.name, v.toString(), this.offset.toString(), this.node.worldPosition.toString());
    }

    /**
     * 是否循环播放
     */
    get isLoop() {
        // if (this.type == EffectType.bullet) return true;
        if (this.times <= 0 && this.type == EffectType.times && this.playDuration <= 0) return true;
        return false;
    }

    get isRunning() {
        return this.status == EffectState.playing;
    }


    private targetSet: TargetSet;

    /**
     * 开始播放
     * @param callBack 
     * @param targets 
     * @returns 
     */
    async Play(callBack: Function, targetSet: TargetSet, delay?: number, copy?: boolean) {
        this.Reset();
        if (this.type == EffectType.none) return this.playNext();
        let $attacker = this.attacker?.worldPosition;
        this.targetSet = targetSet;
        if (!$attacker) {
            this.attacker = targetSet[TargetType[this.attackerType]];
            $attacker = this.attacker?.worldPosition || Vec3.ZERO;
        }
        this.cb = callBack;
        this.status = EffectState.playing;
        if (this.lockDepth > 0) {
            if (this.attacker) {
                this.attacker.addChild(this.node);
                this.node.setSiblingIndex(this.attacker.children.length);
            }
        } else if (this.lockDepth < 0) {
            if (this.attacker) {
                this.attacker.addChild(this.node);
                this.node.setSiblingIndex(0);
            }
        }
        this.setPosition($attacker);
        if (!delay) delay = this.delay;
        this.startTick = game.totalTime / 1000 + delay;
        if (delay > 0) {
            await Second(delay);
            if (this.status == EffectState.finish) {
                return this.playNext();
            }
        }
        if (this.action) {
            let card = this.attacker || targetSet[TargetType[TargetType.attacker]];
            if (card as SceneCard) {
                card.PlaySkill(this.action);
            }
        }

        if (this.buffEvent) {
            EventMgr.on("buff_event", this.onBuffEvent, this);
        }

        if (this.tigger && this.tiggerType > TargetType.None && this.tiggerAffect > AffectType.None) {
            if (this.parent) {
                this.parent.emit("tigger", this, this.attackerType, this.tiggerAffect);
            } else {
                let parent = this.node.parent;//,skillRoot: TestSkill;
                while (parent) {
                    parent = parent.parent;
                    if (parent) parent.emit("tigger", this, this.attackerType, this.tiggerAffect);
                    if (parent instanceof GameObj) break;
                }
            }
        }

        this.node.active = true;
        let merge = false;
        if (copy && this.merge) merge = true;
        this.lessTimes = this.times;
        if (this.par) {
            this.par.node.active = true;
            this.par.enabled = !merge;
            this.prevState = true;
            this.par.loop = this.isLoop || this.type == EffectType.bullet;
            this.par.play();
            if (!this.isLoop) {
                this.duration = (this.par.duration || 0) * (this.times || 1);
            } else {
                this.duration = this.par.duration || 0;
            }
            // if(this.smoothIn) {
            // this.par.startColor
            // this.par.startColor.color
            // }
        } else if (this.ske) {
            this.ske.node.active = !merge;
            let name = this.ske.getCurrent(0).animation.name || Utils.GetSkeAciton(this.ske);
            this.ske.setAnimation(0, name, this.isLoop || this.type == EffectType.bullet);
            if (!this.isLoop) {
                this.duration = (this.ske.getCurrent(0)?.animation?.duration || 0) * (this.times || 1);
            } else {
                this.duration = this.ske.getCurrent(0)?.animation?.duration || 0;
            }
        } else if (this.spr) {
            this.spr.node.active = !merge;
        } else {
            this.duration = 0;
        }

        switch (this.type) {
            case EffectType.sample:
            case EffectType.times:
                break;

            case EffectType.bullet:
                let $target = this.target?.worldPosition;
                if (!$target) $target = targetSet[TargetType[this.targetType]]?.worldPosition;
                if (!$target) return this.playNext();
                this.tempV.set($target);
                this.duration = Vec3.distance($attacker, this.tempV) / this.speed;

                // console.log("buttle", this.duration);
                let update: (target: Node, ratio: number) => void = undefined;
                if (this.face) Utils.FaceToNode(this.node, $attacker);
                if (this.pathType != PathType.liner) {
                    if (!this.bezier) {
                        if (this.pathType == PathType.curve) {
                            this.bezier = Bezier.craeteCurve($attacker, $target, this.curveRatio);
                        } else {
                            this.bezier = Bezier.create($attacker, $target, this.bezierPath);
                        }
                    }
                    let self = this;
                    update = (target: Node, ratio: number) => {
                        let v = self.bezier.update(ratio)
                        if (self.face) Utils.FaceToNode(self.node, v);
                        self.bezier && self.setPosition(v);
                    }
                }
                tween(this.node).to(this.duration, { worldPosition: this.tempV }, { easing: easing[EaseType[this.ease]], onUpdate: update }).start();
                break;

            case EffectType.autoBullet:
                break;
        }
        this.prevPlayNext(this.duration);
    }

    /**
     * 播放下一个
     */
    protected playNext() {
        if (this.par && this.par.enabled && this.par.node.activeInHierarchy) this.par.stop();
        if (this.ske) this.ske.node.active = false;
        if (this.spr) this.spr.node.active = false;
        this.node.active = false;
        Tween.stopAllByTarget(this.node);
        if (this.bezier) {
            this.bezier.receive();
            this.bezier = undefined;
        }
        if (this.status != EffectState.finish) {
            this.status = EffectState.finish;
        }
        if (this.buffEvent) {
            this.status = EffectState.buff;
        }
        if (this.nextEffects && this.nextEffects.length) {
            for (let i = 0; i < this.nextEffects.length; i++) {
                let effect = this.nextEffects[i];
                if (!effect) continue;
                let set = effect.getComponent(EffectSet);
                if (set && set.status == EffectState.idle) {
                    set.Play(this.cb, this.targetSet);
                }
            }
        } else if (this.tigger && this.last && this.cb) {
            this.cb(this);
        }
    }

    /**
     * 预播放
     * @param duration 
     * @returns 
     */
    protected prevPlayNext(duration: number) {
        if (!this.nextEffects) return;
        for (let effect of this.nextEffects) {
            let set = effect.getComponent(EffectSet);
            if (!set) continue;
            if (set.delay < 0) {
                set.Play(this.cb, this.targetSet, duration + set.delay);
            }
        }
    }

    /**
     * 轮训判断持续播放时间是否截止
     * @param deltaTime 
     */
    update(deltaTime: number) {
        if (this.status == EffectState.idle) return;
        if (!this.isLoop || this.type == EffectType.bullet) {
            let tick = game.totalTime / 1000;
            if (this.playDuration && tick - this.startTick >= this.playDuration) {
                this.playNext();
                return;
            }

            let dt = this.duration + 2 / Number(game.frameRate);
            if (tick - this.startTick >= dt) {
                this.playNext();
            }
        } else if (this.isLoop && this.nextEffects.length) {
            let tick = game.totalTime / 1000;
            let dt = this.duration + 1 / Number(game.frameRate);
            if (tick - this.startTick >= dt) {
                this.startTick = Number.MAX_SAFE_INTEGER;
                for (let i = 0; i < this.nextEffects.length; i++) {
                    let effect = this.nextEffects[i];
                    if (!effect) continue;
                    let set = effect.getComponent(EffectSet);
                    if (set && set.status == EffectState.idle) {
                        set.Play(this.cb, this.targetSet);
                    }
                }
            }
        }
    }

    protected onBuffEvent(event: string) {
        if (this.buffEvent == event.toString()) {
            this.startTick = game.totalTime / 1000;
            if (this.ske) {
                let name = this.ske.getCurrent(0).animation.name || Utils.GetSkeAciton(this.ske);
                this.ske.node.active = true;
                this.ske.setAnimation(0, name, this.isLoop || this.type == EffectType.bullet);
            }
            if (this.par) {
                this.par.loop = false;
                this.par.node.active = true;
                this.par.play();
            }
        }
    }
}
