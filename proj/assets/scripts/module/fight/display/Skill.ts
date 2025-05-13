import { Node, RenderRoot2D, UITransform, director, game } from "cc";
import { CfgMgr } from "../../../manager/CfgMgr";
import { GameObj } from "../../../manager/GameRoot";
import { AffectType, EffectSet, TargetSet, TargetType } from "./EffectSet";
import { EffectTarget, TestSkill } from "./TestSkill";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { GameSet } from "../../../manager/GameSet";
import { GameScene } from "../GameScene";

export class Skill extends GameObj {

    protected $prefab: string;
    protected callback: (attacker: Node, target: Node, affect: AffectType) => void;
    protected effects: EffectSet[];
    protected isLoop: boolean = false;
    protected startTick = 0;

    constructor() {
        super();
        this.layer = GameSet.Lay_Scene;
        this.$addComponent(RenderRoot2D);
    }

    protected onLoad(): void {
        let skill: TestSkill = this.getComponent(TestSkill);
        let root = skill.getComponent(RenderRoot2D)
        if (root) root.destroy();
        this.effects = skill.GetEffects(this);
        skill.eventProxy = this;
    }
    protected update(dt: number): void {
        if (this.startTick && this.endHandle) {
            if (game.totalTime - this.startTick > 3000) {
                let has = false;
                for (let effectSet of this.effects) {
                    if (effectSet.isRunning && effectSet.isLoop) {
                        has = true;
                        break;
                    } else if (effectSet.isRunning && effectSet.last && !effectSet.isLoop) {
                        console.error("Skill Error!");
                        this.endHandle(effectSet.attacker, effectSet.target, AffectType.All);
                        return;
                    }
                }
                if (!has) {
                    console.error("Skill Error!");
                    this.endHandle(undefined, undefined, AffectType.All);
                }
            }
        }
    }
    protected async play(targetset: TargetSet) {
        this.startTick = game.totalTime;
        if (!this.$hasLoad) await this.loadSub;
        this.isLoop = true;
        for (let set of this.effects) {
            if (set) {
                set.Reset();
                if (set.root) {
                    set.Play(this.receive.bind(this), targetset);
                }
                if (this.isLoop && set.last && !set.isLoop) this.isLoop = false;
            }
        }
    }

    async receive() {
        if (!this.$hasLoad) await this.loadSub;
        let h = this.endHandle;
        this.endHandle = undefined;
        if (h) {
            h(this.effects[0]?.attacker, this.effects[0]?.target, AffectType.All);
        }

        for (let k in Skill.runningls) {
            let skills = Skill.runningls[k];
            for (let i = 0; i < skills.length; i++) {
                let skill = skills[i];
                if (skill == this) {
                    skills.splice(i, 1);
                    if (!skills.length) delete Skill.runningls[k];
                    break;
                }
            }
        }
        super.receive();
        this.startTick = 0;
        if (this.effects) {
            for (let effectSet of this.effects) {
                effectSet.Reset();
                if (effectSet.node.parent != this.prefabNode) {
                    this.prefabNode.addChild(effectSet.node);
                }
            }
        }
        this.callback = undefined;
    }

    protected endHandle: (attacker: Node, target: Node, affect: AffectType) => void;
    protected onTigger(effectSet?: EffectSet, targetType?: number, affect?: AffectType) {
        let attacker = effectSet?.attacker;
        let target = effectSet?.target;
        let h = this.endHandle;
        this.endHandle = undefined;
        h && h(attacker, target, affect);
    }

    /**
     * 播放技能
     * @param cardId    释放此技能的卡片,如果不是卡片释放此项则传空
     * @param skillId   技能id
     * @param attacker  攻击者节点
     * @param areas    友军节点
     * @param targets   目标节点
     * @param callback  回调，attacker攻击者节点，目标节点，效果类型枚举值
     * @returns 
     */
    static async Play(output: { fromInstId?: string, fromSkillId?: number }, targets: EffectTarget, isMy = true, callback?: (attacker: Node, target: Node, affect: AffectType) => void, onlyBuff = false): Promise<{ attacker: Node, target: Node, affect: AffectType }> {
        let cardData = battleDataMgr.getCardByInstId(output.fromInstId);
        let prefab: string;
        let stdSkill = CfgMgr.GetCardSkill(output.fromSkillId);
        if (cardData) {
            let stdCard: any = CfgMgr.GetCard(cardData.configId);
            if (!stdCard) stdCard = CfgMgr.GetTerrain(cardData.configId);
            if (stdCard && stdCard.SkillID) {
                let index = stdCard.SkillID.indexOf(output.fromSkillId);
                prefab = stdCard.SkillPrefabs[index];
            }
            if (!prefab) {
                prefab = stdSkill.SkillPrefabs[isMy ? 0 : 1] || stdSkill.SkillPrefabs[0];
            }
        } else {
            if (isMy) {
                prefab = stdSkill?.SkillPrefabs[0];
            } else {
                prefab = stdSkill?.SkillPrefabs[1] || stdSkill?.SkillPrefabs[0];
            }
        }
        if (!prefab) {
            callback && callback(targets.attacker, targets.targets[0], AffectType[stdSkill.EffectType]);
            return undefined;
        }
        // if (prefab.indexOf("defaultSkill") != -1) return;//暂时屏蔽默认特效
        let handle: (attacker: Node, target: Node, affect: AffectType) => void;
        let sub: Promise<any> = new Promise((resolve, reject) => {
            handle = resolve;
        });
        let url = "prefabs/particle/" + prefab;
        let len = targets.length, num = 0;
        for (let i = 0; i < len; i++) {
            // if (this.hasSkill(tag.route)) continue;
            let skill: Skill = this.Create(url);
            let tag = targets.pop(output.fromSkillId);
            skill.name = prefab;
            skill.callback = callback;
            if (this.runningls[tag.route]) {
                if (skill.isLoop) {
                    skill.onTigger();
                    skill.receive();
                    continue;
                }
            } else {
                this.runningls[tag.route] = [];
            }
            skill['skillId'] = output.fromInstId;
            let skills = this.runningls[tag.route];
            console.log("Skill.Play", output.fromSkillId, url);
            skills.push(skill);
            director.getScene().addChild(skill);
            skill.endHandle = handle;
            skill.on("tigger", skill.onTigger, skill);
            skill.play(tag);
            if (onlyBuff) {
                if (!skill.$hasLoad) await skill.loadSub;
                if (!skill.isLoop) {
                    skill.receive();
                    continue;
                }
            }
            num++;
        }
        if (num <= 0) handle(targets.attacker, undefined, AffectType.All);
        return sub;
    }

    protected static runningls: { [key: string]: Skill[] } = {};
    /**
     * 移除所有技能特效
     */
    static RemoveAll() {
        for (let k in this.runningls) {
            while (this.runningls[k].length) {
                this.runningls[k].pop().receive();
            }
        }
        this.runningls = {};
    }

    /**
     * 停止所有
     */
    static EndAll() {
        for (let k in this.runningls) {
            let skills = this.runningls[k];
            for (let skill of skills) {
                for (let effectSet of skill.effects) {
                    if (effectSet.tigger && effectSet.last) {
                        skill.onTigger(effectSet, TargetType.all, AffectType.All);
                        break;
                    }
                }
                skill.receive();
            }
        }
        this.runningls = {};
    }

    /**
     * 删除技能特效
     * @param key 
     */
    static async Stop(playerId: string, skillId: number, instId: string) {
        let route = skillId + "_" + instId;
        for (let key in this.runningls) {
            if (key.indexOf(route) == 0) {
                let skills = this.runningls[key];
                if (skills.length) {
                    if (!skills[0]?.getComponent(TestSkill)?.isLoop) return;
                    let skill = skills.shift();
                    skill.receive();
                    if (!skills.length) delete this.runningls[key];
                }
            }
        }
    }

    /**
     * 检测是否已有持续性技能运行
     * @param route 
     */
    protected static hasSkill(route: string) {
        let buffid = route.replace(/\_[^_]*$/, "");
        for (let key in this.runningls) {
            let skills = this.runningls[key];
            for (let skill of skills) {
                if (skill?.isLoop && key.indexOf(buffid) == 0) return true;
            }
        }
        return false;
    }
}