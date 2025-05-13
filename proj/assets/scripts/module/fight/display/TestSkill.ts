import { _decorator, CCFloat, Component, find, instantiate, Node, ParticleSystem, Prefab, RenderRoot2D, sp, Sprite, UIMeshRenderer } from 'cc';
import { AffectType, EffectSet, TargetSet, TargetType } from './EffectSet';
import { Second } from '../../../utils/Utils';
import { ResMgr } from '../../../manager/ResMgr';
import { ISceneEntry } from './SceneCard';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('TestSkill')
@requireComponent(RenderRoot2D)
export class TestSkill extends Component {

    @property({ type: Prefab, tooltip: "设置预制体进行多发测试" })
    prefab: Prefab = undefined;

    @property({ type: CCFloat, tooltip: "多发延迟", visible() { return this.prefab != undefined } })
    multipleDelay: number = 0;

    @property({ type: [Node], tooltip: "测试多目标", visible() { return this.prefab != undefined } })
    multipleTarget: Node[] = [];

    @property({ tooltip: "循环测试" })
    loop = true;

    protected efflist: EffectSet[];
    protected attacker: Node;
    eventProxy: Node;

    protected async onLoad() {

        // 处理2d组件在3d场景的深度渲染问题
        let comps = this.getComponentsInChildren(Component);
        for (let i = 0, len = comps.length; i < len; i++) {
            let comp = comps[i];
            if (comp instanceof sp.Skeleton || comp instanceof Sprite) {
                if (!comp.customMaterial || comp.customMaterial.uuid != ResMgr.depth_material_uuid) {
                    comp.customMaterial = await ResMgr.getDepthMaterial();
                }
                // if(!comp.getComponent(RenderRoot2D))comp.addComponent(RenderRoot2D);
            } else if (comp instanceof ParticleSystem) {
                if (!comp.node.getComponent(UIMeshRenderer)) {
                    comp.node.addComponent(UIMeshRenderer);
                }
            }
        }

        this.node.on("tigger", this.onTigger, this);
    }
    protected onTigger(...args) {
        if (!this.node.parent) return;
        // this.node.parent.emit("tigger", ...args);
    }
    static testEnemys: Node[];

    protected hasLoop = false;
    protected lastSet: EffectSet;
    protected $targetSet: EffectTarget;
    protected get testTargetSet() {
        // if (!this.$targetSet || !this.$targetSet.length) {
        const my = ["FightScene/myDeck", "FightScene/myHand", "FightScene/myDrop", "FightScene/myDel", "FightScene/ui/myEnergy"];
        const ad = ["FightScene/adDeck", "FightScene/adHand", "FightScene/adDrop", "FightScene/adDel", "FightScene/ui/adEnergy"];
        let area1: Node[] = [find("FightScene/area0")['hitTest1'], find("FightScene/area1")['hitTest1'], find("FightScene/area2")['hitTest1']];
        let area2: Node[] = [find("FightScene/area0")['hitTest2'], find("FightScene/area1")['hitTest2'], find("FightScene/area2")['hitTest2']];
        let mytag: any[] = [area1], adtag: any[] = [area2];
        for (let i = 0; i < my.length; i++) {
            mytag.push(find(my[i]));
            adtag.push(find(ad[i]));
        }
        let params = mytag.concat(adtag);
        if (this.multipleTarget && this.multipleTarget.length) {
            this.$targetSet = new EffectTarget(find("attacker"), this.multipleTarget, ...params);
        } else {
            this.$targetSet = new EffectTarget(find("attacker"), TestSkill.testEnemys.concat(), ...params);
        }
        // }
        return this.$targetSet;
    }

    get isLoop() {
        return this.hasLoop;
    }

    start() {
        this.GetEffects();
    }

    Play(attackers: Node[], targets: Node[]) {

    }

    static skillpool: TestSkill[] = [];
    async Test(e?: any) {
        if (e) await Second(0.5);
        while (TestSkill.skillpool.length) {
            TestSkill.skillpool.pop().node.destroy();
        }
        let len = this.testTargetSet.length;
        if (this.prefab && len > 1) {
            let queue: TestSkill[] = [this];
            let parent = this.node.parent;
            for (let i = 0; i < len; i++) {
                let skill = queue.pop();
                let copy = false;
                if (!skill) {
                    copy = true;
                    skill = instantiate(this.prefab).getComponent(TestSkill);
                    TestSkill.skillpool.push(skill);
                    skill.loop = false;
                    parent.addChild(skill.node);
                    console.log("instantiate", skill);
                }
                let target = this.testTargetSet.pop(1);
                let list = skill.GetEffects();
                for (let set of list) {
                    if (set && set.root) {
                        if (set.last) set.times = 1;
                        if (set.last && i == len - 1) {
                            set.Play(this.Test.bind(this), target, 0, copy);
                        } else {
                            set.Play(undefined, target, 0, copy);
                        }
                    }
                }
                if (this.multipleDelay > 0) await Second(this.multipleDelay);
            }
        } else {
            let targets = this.testTargetSet.pop(1);
            this.GetEffects();
            let sets: EffectSet[] = [];
            for (let set of this.efflist) {
                if (set) {
                    set.Reset();
                    if (set.last) set.times = 1;
                    if (set.root) {
                        sets.push(set);
                    }
                }
            }
            for (let set of sets) {
                set.Play(this.Test.bind(this), targets);
            }
        }
    }

    GetEffects(parent?: Node) {
        if (this.efflist) return this.efflist;
        this.efflist = [];
        let children = this.node.children;
        let hasTigger = false;
        let sets: { [uuid: string]: EffectSet } = {};
        this.lastSet = undefined;
        children.forEach(value => {
            let set: EffectSet = value.getComponent(EffectSet);
            if (parent) set.parent = parent;
            if (set.root) {
                sets[set.node.uuid] = set;
                let lst = set.nextEffects?.concat?.() || [];
                while (lst.length) {
                    set = lst.shift().getComponent(EffectSet);
                    if (set && !sets[set.node.uuid]) {
                        sets[set.node.uuid] = set;
                        if (set?.nextEffects?.length) lst.push(...set.nextEffects);
                    }
                }
            }
        })
        for (let k in sets) {
            let set = sets[k];//child.getComponent(EffectSet);
            if (set) {
                if (set.isLoop) this.hasLoop = true;
                if (set.tigger && set.tiggerType) {
                    hasTigger = true;
                }
                if (!this.lastSet) {
                    this.lastSet = set;
                } else if (!this.lastSet && !set.nextEffects?.length) {
                    this.lastSet = set;
                }
                this.efflist.push(set);
            }
        }
        if (!hasTigger) {
            if (this.lastSet) {
                this.lastSet.tigger = true;
                this.lastSet.tiggerType = TargetType.all;
                this.lastSet.tiggerAffect = AffectType.All;
            } else {
                console.error("必须指定结束特效！");
            }
        }
        // if (!hasTigger && lastSet) {
        //     let node = new Node();
        //     lastSet.node.parent.addChild(node);
        //     let lastSet = node.addComponent(EffectSet);
        //     lastSet.tigger = true;
        //     lastSet.last = true;
        //     if (!lastSet.nextEffects) lastSet.nextEffects = [];
        //     lastSet.nextEffects.push(lastSet.node);
        // }
        return this.efflist;
    }

    update(deltaTime: number) {
    }
}



/**
 * 技能目标定义
 */
export class EffectTarget {
    attacker: Node;
    targets: Node[];
    myArea: Node[];
    myDeck: Node;
    myHand: Node;
    myDrop: Node;
    myDel: Node;
    myEnergy: Node;
    adArea: Node[];
    adDeck: Node;
    adHand: Node;
    adDrop: Node;
    adDel: Node;
    adEnergy: Node;

    clone() {
        return new EffectTarget(this.attacker, this.targets, this.myArea, this.myDeck, this.myHand, this.myDrop, this.myDel, this.myEnergy, this.adArea, this.adDeck, this.adHand, this.adDrop, this.adDel, this.adEnergy);
    }

    constructor(attacker?: Node, targets?: Node[], myArea?: Node[], myDeck?: Node, myHand?: Node, myDrop?: Node, myDel?: Node, myEnergy?: Node, adArea?: Node[], adDeck?: Node, adHand?: Node, adDrop?: Node, adDel?: Node, adEnergy?: Node) {
        this.attacker = attacker;
        this.targets = targets;
        this.myArea = myArea;
        this.myDeck = myDeck;
        this.myHand = myHand;
        this.myDrop = myDrop;
        this.myDel = myDel;
        this.myEnergy = myEnergy;
        this.adArea = adArea;
        this.adDeck = adDeck;
        this.adHand = adHand;
        this.adDrop = adDrop;
        this.adDel = adDel;
        this.adEnergy = adEnergy;
    }

    get length() {
        let len = Math.max(this.targets.length, 0);
        if (len) return len;
        return Math.min(this.myArea.length, this.adArea.length, 1);
    }

    pop(skillId: number): TargetSet {
        let myArea = this.myArea.length ? this.myArea.shift() : undefined;
        let adArea = this.adArea.length ? this.adArea.shift() : undefined;
        let target = this.targets.length ? this.targets.shift() : undefined;
        return {
            route: this.route(skillId, this.attacker),
            attacker: this.attacker,
            target: <unknown>target as ISceneEntry,
            myArea: myArea,
            myDeck: this.myDeck,
            myHand: this.myHand,
            myDrop: this.myDrop,
            myDel: this.myDel,
            myEnergy: this.myEnergy,
            adArea: adArea,
            adDeck: this.adDeck,
            adHand: this.adHand,
            adDrop: this.adDrop,
            adDel: this.adDel,
            adEnergy: this.adEnergy
        };
    }
    private static seed = 0;
    protected route(...args: any[]) {
        EffectTarget.seed++;
        let key = args[0];
        for (let i = 1; i < args.length; i++) {
            let obj = args[i];
            if (obj != undefined && typeof (obj) == "object") {
                key = key + "_" + (obj.instId || obj.name);
            } else {
                key = key + "_" + obj;
            }
        }
        return key + "_" + EffectTarget.seed;
    }
}
