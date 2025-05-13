import { Color, Component, IVec3Like, Label, Layers, Layout, MeshRenderer, Node, ParticleSystem, RenderRoot2D, Sprite, SpriteFrame, Tween, UITransform, Vec2, Vec3, easing, game, labelAssembler, math, path, random, randomRange, sp, tween, v2, v3 } from "cc";
import { GameObj } from "../../../manager/GameRoot";
import { card_quality, ResMgr } from "../../../manager/ResMgr";
import { GameSet } from "../../../manager/GameSet";
import { Second, Utils } from "../../../utils/Utils";
import { CfgMgr, StdCard } from "../../../manager/CfgMgr";
import { CardLayout, CardMoveTo, CardFlyToHand, CardFlyToArea, CardTurnBack, CardTurnFront, ICardAction, $Back_Quat, $Front_Quat, CardShowBig } from "./CardAction";
import { Effect, SampleEffect } from "./Effect";
import proto from "../../../net/Protocol";
import { FightData } from "../FightData";
import { AnimationUtils } from "../../../utils/AnimationUtils";

/***
 * 卡片状态
 */
export enum CardState {
    /**默认状态 */
    None,
    /**发牌中 */
    Sending,
    /**手牌排布中 */
    Layout,
    /**手牌中 */
    Handing,
    /**出牌中 */
    Playing,
    /**盖牌 */
    Covering,
    /**揭示中 */
    Showing,
    /**战斗中 */
    Fightting,
    /**震动 */
    Shaking,
    /**删除 */
    Del,
}

export interface ISceneEntry {
    readonly instId: string;
}

/**
 * 场景卡片
 */
export class SceneCard extends GameObj implements ISceneEntry {
    protected $prefab: string = "prefabs/fight/SceneCard";

    cardData: proto.base.IBattleRoomCardData;
    instId: string;                // 卡片id
    frame: sp.Skeleton;            // 外框
    cardBack: Sprite;              //卡背
    cost: Label;
    mask: Node;
    power: Label;
    nameframe: Sprite;
    nameLab: Label;
    myBattle: Node;
    myName: Label;
    myPower: Label;
    adBattle: Node;
    adName: Label;
    adPower: Label;
    costEffect: sp.Skeleton;
    powerEffect: sp.Skeleton
    ctrl: sp.spine.Bone;           // 控制点
    ctrlZero: Vec2;                // 初始位置
    body: sp.Skeleton;             // 卡片动画
    body_card: sp.Skeleton;
    debugNode: Node;
    descLab: Label;
    skillDesc: Label;
    cardIdLab: Label;
    $state: number;                // 当前状态
    wide: number;                  // 卡牌宽度
    hide: number;                  // 卡牌高度
    dragPoint: IVec3Like;          // 拖动点
    twHandle: Function;
    action: ICardAction;
    infoPage: Node;
    top: Sprite;
    std: StdCard;
    skills: proto.base.IBattleRoomSkillData[];
    locking = false;

    isMy = true;
    pbV3: Vec3;
    pbQt: math.Quat;
    bodyV3: Vec3;
    bodyQt: math.Quat;

    constructor() {
        super();
        this.layer = GameSet.Lay_Scene;
    }

    get state() {
        return this.$state;
    }
    set state(value) {
        if (value == CardState.None) {
            console.log("sate", value);
        }
        this.$state = value;
        if (this.cardData) {
            this.cardData['playState'] = value;
        }
    }

    protected onLoad(): void {

        let rendder = this.$proxy.getComponent(RenderRoot2D);
        if (rendder) rendder.destroy();

        this.addComponent(RenderRoot2D);

        this.infoPage = this.find("infoPage");
        this.frame = this.find("infoPage/frame", sp.Skeleton);
        this.cardBack = this.find("infoPage/cardBack", Sprite);
        this.body = this.find("body", sp.Skeleton);
        let body = this.body;
        this.body.setCompleteListener(() => {
            if (body?.getCurrent(0)?.animation.name != "idle" && body?.skeletonData) {
                body.setAnimation(0, "idle", true);
            }
        })
        this.addChild(this.body.node);
        this.bodyV3 = this.body.node.position.clone();
        this.bodyQt = this.body.node.rotation.clone();
        this.pbV3 = this.prefabNode.position.clone();
        this.pbQt = this.prefabNode.rotation.clone();
        this.body.node.active = false;

        this.body_card = this.find("infoPage/body_card", sp.Skeleton);
        this.body_card.node.active = false;

        this.mask = this.find("infoPage/cardmask");
        this.top = this.find("infoPage/top", Sprite);
        this.cost = this.find("infoPage/cost/label", Label);
        this.costEffect = this.find("infoPage/cost/icon_cost").getComponent(sp.Skeleton);
        this.power = this.find("infoPage/power/label", Label);
        this.powerEffect = this.find("infoPage/power/icon_power").getComponent(sp.Skeleton);
        this.nameframe = this.find("infoPage/nameframe").getComponent(Sprite);
        this.nameLab = this.find("infoPage/nameframe/label").getComponent(Label);
        this.myBattle = this.find("infoPage/myBattle");
        this.myName = this.find("infoPage/myBattle/label", Label);
        this.myPower = this.find("infoPage/myBattle/power/label", Label);
        this.adBattle = this.find("infoPage/adBattle");
        this.adName = this.find("infoPage/adBattle/label", Label);
        this.adPower = this.find("infoPage/adBattle/power/label", Label);

        this.addChild(this.myBattle);
        this.addChild(this.adBattle);

        let self = this;
        this.costEffect.setCompleteListener(() => {
            if (self.costEffect.animation != "idle") self.costEffect.setAnimation(0, "idle", true);
        })
        this.powerEffect.setCompleteListener(() => {
            if (self.powerEffect.animation != "idle") self.powerEffect.setAnimation(0, "idle", true);
        })

        this.debugNode = this.find("infoPage/debugNode");
        this.descLab = this.find("infoPage/desc", Label);
        this.skillDesc = this.find("infoPage/debugNode/skillDesc", Label);
        this.cardIdLab = this.find("infoPage/debugNode/cardIdLab", Label);

        this.ctrl = this.frame.findBone("MoveCtrl");
        this.ctrlZero = v2(this.ctrl.x, this.ctrl.y);

        this.wide = GameSet.CardWide;
        this.hide = GameSet.CardHide;
    }

    /**卡牌id */
    get Id() {
        return this.instId;
    }
    /**卡牌宽度 */
    get Wide() {
        return this.wide;
    }
    /**卡牌状态 */
    get State() {
        return this.state;
    }
    /**是否背向 */
    get isBack() {
        return this.eulerAngles.z == 180;
    }
    /**
     * 检测位置变动
     * @param p 
     * @param q 
     * @returns 
     */
    CheckMatrix(p: Vec3, q?: math.Quat) {
        if (!this.worldPosition.equals(p)) return false;
        if (q && !this.worldRotation.equals(q)) return false;
    }

    /**
     * 新卡牌
     * @param data
     */
    async InitData(isMy: boolean, data: proto.base.IBattleRoomCardData, rotation: Vec3 = Vec3.ZERO) {
        this.cardData = data;
        this.instId = data.instId
        this.locking = false;
        if (!data) {
            this.std = undefined;
            this.state = CardState.Covering;
            this.setInfoVisible();
            return;
        }
        let std = CfgMgr.GetCard(data.configId);
        this.std = std;
        this.skills = data.skills;
        this.name = std?.ID?.toString() || this.uuid;
        rotation && this.setWorldRotationFromEuler(rotation.x, rotation.y, rotation.z);
        this.setScale(1, 1, 1);
        if (this.cardData['playState'] != undefined) {
            this.state = this.cardData['playState'];
        } else {
            if (std && data.area >= 0) {
                this.state = CardState.Fightting;
            } else {
                this.state = CardState.None;
            }
        }
        if (!this.$hasLoad) await this.loadSub;

        this.isMy = isMy;
        this.pbShakeQt.set(this.pbQt);
        this.bodyShakeQt.set(this.bodyQt);
        this.pbShakePower = this.bodyShakePower = 0;

        let stdQuality = CfgMgr.GetCardUpgradeShow(this.cardData.quality);
        this.myName.color = (new Color()).fromHEX(stdQuality?.QualityColor || "#FFFFFF");
        this.adName.color = (new Color()).fromHEX(stdQuality?.QualityColor || "#FFFFFF");
        this.top.color = (new Color()).fromHEX(stdQuality?.QualityColor || "#FFFFFF");
        this.adName.string = this.myName.string = this.nameLab.string = std?.CardName || "未知";
        this.adPower.string = this.myPower.string = this.power.string = data?.power?.finalValue?.toString() || std?.Power?.toString() || "";
        this.cost.string = data?.cost?.finalValue?.toString() || std?.Cost?.toString() || "";

        this.body.node.active = false;
        this.body_card.node.active = false;
        if (std?.CardBody) {
            let url = `spine/${std?.SceneBody}/${std?.SceneBody}`;
            AnimationUtils.Play(url,this.body,"idle",true);
            // if (this.body['spUrl'] != url) {
            //     this.body['spUrl'] = url;
            //     this.body.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
            // }
            // console.log("url", url);
            // try {
            //     if (this.body.skeletonData) this.body.setAnimation(0, "idle", true);
            // } catch (e) { }
            url = `spine/${std?.CardBody}/${std?.CardBody}`;
            AnimationUtils.Play(url,this.body_card,"idle",true);
            // if (this.body_card['spUrl'] != url) {
            //     console.log("url", url);
            //     this.body_card['spUrl'] = url;
            //     this.body_card.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
            // }
            // if (this.body_card.skeletonData) this.body_card.setAnimation(0, "idle", true);

            this.body.node.active = false;
            this.body_card.node.active = true;
        }
        let quality: number = data.quality || 1;
        let spUrl = path.join("spine", "cardbg_000" + quality, "cardbg_000" + quality);
        this.frame['spUrl'] = spUrl;
        this.frame.skeletonData = await ResMgr.LoadResAbSub(spUrl, sp.SkeletonData);
        this.frame.setAnimation(0, "idle", true);

        this.nameframe.spriteFrame = await ResMgr.LoadResAbSub(path.join(card_quality, "nameframe_" + quality, "spriteFrame"), SpriteFrame);

        this.skillDesc.string = "";
        this.descLab.string = "";
        let skillId = this?.cardData?.skills[0]?.skillId;
        if (skillId != undefined) {
            let stdSkill = CfgMgr.GetCardSkill(skillId);
            if (stdSkill) {
                this.debugNode.active = GameSet.debug;
                this.skillDesc.string = skillId + ":" + stdSkill.Desc;
            }
        } else this.debugNode.active = false;
        this.cardIdLab.string = this.instId;
        this.updateCardBack();
        this.setInfoVisible();
    }

    /**
     * 更新手卡
     * @param data 
     */
    async FlushData(isMy: boolean, data: proto.base.IBattleRoomCardData) {
        this.isMy = isMy;
        if (!this.$hasLoad) await this.loadSub;
        this.cardData = data;
        let std = CfgMgr.GetCard(data.configId);
        this.std = std;
        if (this.state != CardState.Covering && Number(this.power.string) < data?.power?.finalValue) {
            this.powerEffect.setAnimation(0, "change", false);
            Tween.stopAllByTarget(this.power.node);
            tween(this.power.node).to(0.25, { scale: v3(4, 4, 4) }, { easing: easing.cubicOut }).delay(0.2).to(0.25, { scale: v3(1, 1, 1) }).start();
        }
        this.adPower.string = this.myPower.string = this.power.string = data?.power?.finalValue?.toString() || "";
        if (this.state != CardState.Covering && Number(this.cost.string) < data?.cost?.finalValue) {
            this.costEffect.setAnimation(0, "change", false);
            Tween.stopAllByTarget(this.cost.node);
            tween(this.cost.node).to(0.25, { scale: v3(4, 4, 4) }, { easing: easing.cubicOut }).delay(0.2).to(0.25, { scale: v3(1, 1, 1) }).start();
        }
        this.cost.string = data?.cost?.finalValue?.toString() || "";
        this.skills = data.skills;

        let stdQuality = CfgMgr.GetCardUpgradeShow(this.cardData.quality);
        this.myName.color = (new Color()).fromHEX(stdQuality?.QualityColor || "#FFFFFF");
        this.adName.color = (new Color()).fromHEX(stdQuality?.QualityColor || "#FFFFFF");
        this.top.color = (new Color()).fromHEX(stdQuality?.QualityColor || "#FFFFFF");
        this.adName.string = this.myName.string = this.nameLab.string = std?.CardName || "未知";
        if (std?.CardBody) {
            let url = `spine/${std?.SceneBody}/${std?.SceneBody}`;
            AnimationUtils.Play(url, this.body, "idle", true);
            // if (this.body['spUrl'] != url) {
            //     this.body['spUrl'] = url;
            //     this.body.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
            //     console.log("skeletonData", url);
            //     if (this.body.skeletonData) this.body.setAnimation(0, "idle", true);
            // }
            url = `spine/${std?.CardBody}/${std?.CardBody}`;
            AnimationUtils.Play(url, this.body_card, "idle", true);
            // if (this.body_card['spUrl'] != url) {
            //     this.body_card['spUrl'] = url;
            //     this.body_card.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
            //     if (this.body_card.skeletonData) this.body_card.setAnimation(0, "idle", true);
            //     this.body_card.node.active = true;
            // }
        }
        let quality: number = data.quality || 1;
        let spUrl = path.join("spine", "cardbg_000" + quality, "cardbg_000" + quality);
        if (this.frame['spUrl'] != spUrl) {
            this.frame.skeletonData = await ResMgr.LoadResAbSub(spUrl, sp.SkeletonData);
            this.frame.setAnimation(0, "idle", true);
        }

        this.nameframe.spriteFrame = await ResMgr.LoadResAbSub(path.join(card_quality, "nameframe_" + quality, "spriteFrame"), SpriteFrame);
        this.skillDesc.string = "";
        this.descLab.string = "";
        let skillId = this?.cardData?.skills[0]?.skillId;
        if (skillId != undefined) {
            let stdSkill = CfgMgr.GetCardSkill(skillId);
            if (stdSkill) {
                this.debugNode.active = GameSet.debug;
                this.skillDesc.string = skillId + ":" + stdSkill.Desc;
            }
        } else this.debugNode.active = false;
        this.cardIdLab.string = this.instId;
        if (this.cardData['playState'] != undefined) {
            this.state = this.cardData['playState'];
        } else if (std && data.area >= 0 && this.state <= CardState.Showing) {
            this.state = CardState.Fightting;
        }
        this.updateCardBack();
        this.setInfoVisible();
    }

    private async updateCardBack(): Promise<void> {
        let cardBackName: string = this.cardData ? FightData.cardBack[this.cardData.playerId] : "bg_1";
        this.cardBack.spriteFrame = await ResMgr.LoadResAbSub(path.join(card_quality, cardBackName, "spriteFrame"), SpriteFrame);
    }

    /**
     * 碰撞检测
     * @param x 
     * @param y 
     * @param z 
     * @returns 
     */
    HitTest(x: number, y: number, z: number) {
        if (Math.abs(this.worldPosition.x - x) <= this.wide / 2 && Math.abs(this.worldPosition.z - z) <= this.hide / 2) {
            return true;
        }
        return false;
    }

    /**
     * 拖动
     * @param tx 
     * @param ty 
     */
    Drag(tx: number, ty: number) {
        Tween.stopAllByTarget(this);
        let [x, y, z] = Utils.ScreenToPlane(tx, ty, GameSet.mainCamera, GameSet.HandPlane, 20);
        this.dragPoint = { x: x, y: y, z: z };
    }

    get isDragging() { return this.dragPoint != undefined };

    /**
     * 停止拖动
     */
    async StopDrag() {
        if (!this.$hasLoad) await this.loadSub;
        this.setInfoVisible();
        this.dragPoint = undefined;
        this.ctrl.x = this.ctrlZero.x;
        this.ctrl.y = this.ctrlZero.y;
    }

    /**轮训 */
    protected update(dt: number): void {
        if (this.dragPoint) {
            this.mask.active = true;
            let dx = this.dragPoint.x - this.worldPosition.x;
            let dy = this.dragPoint.y - this.worldPosition.y;
            let dz = this.dragPoint.z - this.worldPosition.z;
            this.setWorldPosition(this.worldPosition.x + dx / 6, this.worldPosition.y + dy / 6, this.worldPosition.z + dz / 6);
            // console.log("Drag",dx,dy,dz,this.worldPosition.toString());
            if (!this.hasLoad) return;
            const offset = 200;
            this.ctrl.x = Math.sign(dx) * Math.min(Math.abs(dx) * 100, offset);
            this.ctrl.y = Math.sign(dy) * Math.min(Math.abs(dy) * 100, offset);
        }

        if (FightData.BattleRoomOpOutputType == proto.base.BattleRoomOpOutputType.Out_WaitPlayerShow) {
            this.mask.active = false;
        } else if (this.state == CardState.Handing) {
            if (FightData.Energy < Number(this.cost.string)) {
                this.mask.active = true;
            } else {
                let states = this.cardData.persistentState || {};
                if (states[proto.base.BattleRoomPersistentState.PersistentStatePlace] || FightData.cardState[this.cardData.instId]) {
                    this.mask.active = true;
                    return;
                }
                this.mask.active = false;
            }
        }
    }

    /**缓动结束 */
    protected async onActionEnd() {
        if (this.ctrl) {
            this.ctrl.x = this.ctrlZero.x;
            this.ctrl.y = this.ctrlZero.y;
        }
        let h = this.twHandle;
        this.twHandle = undefined;
        h && h();
        this.action = undefined;
    }
    protected setAction(act: ICardAction) {
        if (this.action) {
            this.action = this.action.merge(act);
        } else {
            this.action = act;
        }
        return this.action.run();
    }

    /**展示卡片 */
    async ViewCard() {
        if (!this.$hasLoad) await this.loadSub;
        this.active = true;
        this.state = CardState.None;
        this.setInfoVisible();
        this.descLab.string = "";
        this.debugNode.active = false;
        this.$proxy.node.setPosition(0, 0, -this.descLab.getComponent(UITransform).contentSize.height * GameSet.PixelSize / 2);
        await this.setAction(new CardShowBig(this));
        if (this?.std?.SkillDesc) {
            this.descLab.string = this.std.SkillDesc;
        } else {
            this.descLab.string = "";
        }
        this.onActionEnd();
    }
    async EndViewCard() {
        if (!this.$hasLoad) await this.loadSub;
        if (this.action && this.action.running) this.action.end();
        this.active = false;
        if (this?.std?.SkillDesc) {
            this.debugNode.active = false;
        } else {
            this.debugNode.active = GameSet.debug;
        }
    }

    /**
     * 发牌
     * @param end
     * @param q 
     * @returns 
     */
    async SendToHand(start: Vec3, end: Vec3, q: math.Quat) {
        this.setInfoVisible();
        this.state = CardState.Sending;
        await this.setAction(new CardFlyToHand(this, start, end, q));
        this.state = CardState.Handing;
        this.onActionEnd();
    }

    /**
     * 手牌排布
     * @param p
     */
    async LayoutHands(p: Vec3, q: math.Quat) {
        this.setInfoVisible();
        this.state = CardState.Layout;
        await this.setAction(new CardLayout(this, p, q));
        this.state = CardState.Handing;
        this.onActionEnd();
    }

    /**
     * 出牌动作
     * @param v 
     * @param q 
     * @returns 
     */
    async PlayToMyArea(v: Vec3, q: math.Quat) {
        if (this.state < CardState.Fightting) this.state = CardState.Playing;
        this.setInfoVisible();
        await this.setAction(new CardFlyToArea(this, v, q));
        let effect = SampleEffect.Create("prefabs/particle/smoke");
        effect.PlayOnce(v.x, v.y, v.z);
        this.onActionEnd();
    }

    /**
     * 对方出牌
     * @param v 
     * @param q 
     */
    async PlayToAdArea(v: Vec3) {
        this.state = CardState.Covering;
        if (!this.$hasLoad) await this.loadSub;
        this.setInfoVisible();
        this.setWorldRotation($Back_Quat);
        await this.setAction(new CardFlyToArea(this, v, $Back_Quat));
        this.onActionEnd();
    }


    /**
     * 回到手牌
     * @param x 
     * @param y 
     * @param z 
     */
    async BackToHand(p: Vec3, q: math.Quat) {
        this.state = CardState.Handing;
        this.setInfoVisible();
        await this.setAction(new CardMoveTo(this, p, q));
        this.onActionEnd();
    }

    /**
     * 盖牌
     * @returns 
     */
    async TurnBack() {
        this.state = CardState.Covering;
        await this.setAction(new CardTurnBack(this));
        this.setInfoVisible();
        this.onActionEnd();
    }

    /**
     * 转向
     */
    async Open(showAnimation = true) {
        this.state = CardState.Showing;
        this.setInfoVisible();
        let effect: SampleEffect = SampleEffect.Create("prefabs/particle/Fx_area_summon");
        effect.PlayOnce(this.worldPosition.x, this.worldPosition.y, this.worldPosition.z);
        if (showAnimation) {
            await Second(0.6);
            await this.setAction(new CardTurnFront(this));
        }
        this.state = CardState.Fightting;
        await this.setInfoVisible();
    }

    /**
     * 立即打开
     */
    OpenSync() {
        this.state = CardState.Fightting;
        this.setInfoVisible();
    }

    /**
     * 普通移动
     * @param v 
     * @param q 
     */
    async MoveTo(v: Vec3, q?: math.Quat) {
        this.setInfoVisible();
        if (!q) {
            if (this.isMy && this.state != CardState.Covering)
                q = $Front_Quat;
            else
                q = this.state >= CardState.Fightting ? $Front_Quat : $Back_Quat;
        }
        await this.setAction(new CardMoveTo(this, v, q));
        this.onActionEnd();
    }

    /**
     * 区域布局
     */
    async LayoutArea(v: Vec3, q?: math.Quat) {
        if (this.state < CardState.Playing) this.state = CardState.Playing;
        if (!q) {
            if (this.isMy && this.state != CardState.Covering)
                q = $Front_Quat;
            else
                q = this.state >= CardState.Fightting ? $Front_Quat : $Back_Quat;
        }
        await this.setAction(new CardMoveTo(this, v, q));
        this.onActionEnd();
        this.setInfoVisible();
    }

    /**异步 */
    protected createTwSub() {
        this.twHandle && this.twHandle();
        let self = this;
        return new Promise((resolve, reject) => {
            self.twHandle = resolve;
        })
    }

    protected setPrefabNodeVisible(value: boolean) {
        this.infoPage.active = value;
        this.find("card").active = value;
    }

    async PlaySkill(action: string) {
        if (!this.$hasLoad) await this.loadSub;
        if (Utils.CheckAnimation(this.body, action) && this.body.skeletonData) this.body.setAnimation(0, action, false);
    }

    protected async setInfoVisible() {
        if (!this.$hasLoad) await this.loadSub;
        this.power.node.parent.active = true;
        this.cost.node.parent.active = true;
        if (this.state == CardState.Covering) {
            this.power.node.parent.active = false;
            this.cost.node.parent.active = false;
            this.setPrefabNodeVisible(true);
            this.body.node.active = false;
            this.myBattle.active = this.adBattle.active = false;
        } else if (this.state == CardState.Showing) {
            this.setPrefabNodeVisible(true);
            this.body.node.active = false;
            this.myBattle.active = this.adBattle.active = false;
        } else if (this.state >= CardState.Fightting) {
            if (!this.body.node.active) {
                this.body.node.active = true;
                if (this.body.skeletonData) this.body.setAnimation(0, "show", false);
                await Second(1);
            }
            this.myBattle.active = this.isMy;
            this.adBattle.active = !this.isMy;

            this.setPrefabNodeVisible(false);
        } else {
            this.body.node.active = false;
            this.myBattle.active = this.adBattle.active = false;

            this.setPrefabNodeVisible(true);
        }
    }

    async Shake(power: number, qt?: math.Quat) {
        if (!this.$hasLoad) await this.loadSub;
        if (qt == undefined) {
            this.randomQt(this.bodyShakeQt);
            this.randomQt(this.pbShakeQt);
            this.bodyShakePower = Math.max(this.bodyShakePower, power);
            this.pbShakePower = Math.max(this.pbShakePower, power / 2);
        } else {

        }
        let bodyV3 = this.bodyV3.clone();
        bodyV3.y += this.bodyShakePower;
        let pbV3 = this.pbV3.clone();
        pbV3.y += this.pbShakePower;
        Tween.stopAllByTarget(this.body.node);
        Tween.stopAllByTarget(this.prefabNode);
        let dt = randomRange(0.15, 0.25);
        tween(this.body.node).to(dt, { position: bodyV3, rotation: this.bodyShakeQt }, { easing: easing.expoOut }).to(
            dt, { position: this.bodyV3, rotation: this.pbShakeQt }, { easing: easing.expoIn }
        ).call(this.EndShake.bind(this)).start();
        tween(this.prefabNode).to(dt * 0.65, { position: pbV3, rotation: this.pbShakeQt }, { easing: easing.expoOut }).to(
            dt * 0.65, { position: this.pbV3, rotation: this.pbQt }, { easing: easing.expoIn }
        ).start();
    }

    async EndShake() {
        if (!this.$hasLoad) await this.loadSub;
        Tween.stopAllByTarget(this.body.node);
        Tween.stopAllByTarget(this.prefabNode);
        this.bodyShakePower = this.pbShakePower = 0;
        this.bodyShakeQt.set(this.bodyQt);
        this.pbShakeQt.set(this.pbQt);
        this.body.node.setRotation(this.bodyQt);
        this.body.node.setPosition(this.bodyV3);
        this.prefabNode.setRotation(this.pbQt);
        this.prefabNode.setPosition(this.pbV3);
    }

    protected bodyShakePower: number;
    protected bodyShakeQt: math.Quat = math.quat();
    protected pbShakePower: number;
    protected pbShakeQt: math.Quat = math.quat();

    protected randomQt(qt: math.Quat) {
        let rx = Math.random() * 30 - 15;
        let rz = Math.random() * 30 - 15;
        let out = v3();
        qt.getEulerAngles(out);
        out.x += rx;
        out.z += rz;
        math.Quat.fromEuler(qt, out.x, out.y, out.z);
    }

    receive(): void {
        if (this.$hasLoad) {
            this.name = "";
            this.body_card.node.active = false;
            this.power.string = "0";
            this.cost.string = "0";

            this.body.node.active = false;
            this.myBattle.active = false;
            this.adBattle.active = false;
            Utils.MapChildrenFor(this, value => {
                value.layer = Layers.Enum['SCENE'];
            })
        }
        this.locking = false;
        this.onActionEnd();
        Tween.stopAllByTarget(this);
        Tween.stopAllByTarget(this.prefabNode);
        super.receive();
    }
}
