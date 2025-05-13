import { Component, Input, Label, Node, path, sp, Sprite, SpriteFrame } from "cc";
import { CfgMgr } from "../../manager/CfgMgr";
import { card_quality, folder_icon, ResMgr } from "../../manager/ResMgr";
import { Second, Utils } from "../../utils/Utils";
import proto from "../../net/Protocol";
import { EventMgr, Evt_Card_Chage, Evt_Item_Change } from "../../manager/EventMgr";
import { PlayerData } from "../player/PlayerData";

export class Card extends Component {
    private frame: sp.Skeleton;
    private nameframe: Sprite;
    private nameLab: Label;
    private costLab: Label;
    private body_card: sp.Skeleton;
    private powerLab: Label;
    private select: Node;
    private doneNode: Node;
    private add: Node;
    private cardMask: Node;
    private cardNode: Node;
    private upEffect: Node;
    private tradeCd: Node;
    private effectFrame: sp.Skeleton;
    private camp:Sprite;
    private job:Sprite;

    private isShowUpEffect:boolean = true;

    private data:proto.base.IBattleCard
    private addCallBack:Function;
    protected $loadSub: Promise<any>;
    protected complete: Function;
    protected hasLoad = false;


    protected onLoad(): void {
        this.frame = this.node.getChildByPath("cardNode/frame").getComponent(sp.Skeleton);
        this.costLab = this.node.getChildByPath("cardNode/cost/label").getComponent(Label);
        this.powerLab = this.node.getChildByPath("cardNode/power/label").getComponent(Label);
        this.nameframe = this.node.getChildByPath("cardNode/nameframe").getComponent(Sprite);
        this.nameLab = this.node.getChildByPath("cardNode/nameframe/name").getComponent(Label);
        this.body_card = this.node.getChildByPath("cardNode/body_card").getComponent(sp.Skeleton);
        this.select = this.node.getChildByPath("cardNode/select");
        this.effectFrame = this.node.getChildByPath("cardNode/effectFrame").getComponent(sp.Skeleton);
        this.camp = this.node.getChildByPath("cardNode/camp_job_node/camp_icon").getComponent(Sprite);
        this.job = this.node.getChildByPath("cardNode/camp_job_node/job_icon").getComponent(Sprite);
        this.doneNode = this.node.getChildByName("doneNode");
        this.add = this.node.getChildByName("add");
        this.cardMask = this.node.getChildByName("cardMask");
        this.cardNode = this.node.getChildByName("cardNode");
        this.upEffect = this.node.getChildByName("upEffect");
        this.tradeCd = this.node.getChildByName("tradeCd");
        this.cardMask.active = false;
        this.upEffect.active = false;
        this.tradeCd.active = false;
        this.add.active = false;
        this.hasLoad = true;
        this.complete?.();
    }

    protected get loadSub() {
        if (this.$loadSub) return this.$loadSub;
        let thisObj = this;
        this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
        });
        return this.$loadSub;
    }
    protected onEnable(): void {
        EventMgr.on(Evt_Card_Chage, this.onUpdateCard, this);
        EventMgr.on(Evt_Item_Change, this.onItemChange, this);
    }

    protected onDisable(): void {
        EventMgr.off(Evt_Card_Chage, this.onUpdateCard, this);
        EventMgr.off(Evt_Item_Change, this.onItemChange, this);
    }

    private onUpdateCard(cardData: proto.base.BattleCard): void {
        if (this.data && this.data.id == cardData.id) {
            this.SetData(cardData);
        }
    }

    private onItemChange(): void {
        this.updateUpgradeState();
    }

    /**
     * 设置角色数据
     * @param data 
     */
    async SetData(data: proto.base.IBattleCard) {
        if (!this.hasLoad) await this.loadSub;
    
        if(data == null){
            this.doneNode.active = true;
            this.cardNode.active = false;
            this.data = null;
            this.upEffect.active = false;
            return;
        }else{
            this.doneNode.active = false;
            this.cardNode.active = true;
        }
        this.body_card.node.active = true;
        this.data = data;
        let std = CfgMgr.GetCard(data.cardId)
        this.costLab.string = std.Cost + "";
        this.powerLab.string = std.Power + "";
        this.nameLab.string = std.CardName;

        this.body_card.skeletonData = await ResMgr.LoadResAbSub(path.join("spine",  std.CardBody, std.CardBody), sp.SkeletonData);
        this.body_card.setAnimation(0, "Idle", true);
        this.frame.clearAnimation();
        this.frame.skeletonData = await ResMgr.LoadResAbSub(path.join("spine",  "cardbg_000" + this.data.quality, "cardbg_000" + this.data.quality), sp.SkeletonData); 
        this.frame.setAnimation(0, "Idle", true);
        
        this.effectFrame.clearAnimation();
        this.effectFrame.setAnimation(0, data.quality.toString(), true);
        this.nameframe.spriteFrame = await ResMgr.LoadResAbSub(path.join(card_quality,  "nameframe_" + data.quality, "spriteFrame"), SpriteFrame);
        
        if(std.EthnicType){
            this.camp.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_icon, "camp/" + std.EthnicType, "spriteFrame"), SpriteFrame);
        }
        this.camp.node.active = std.EthnicType != 0;
       
        if(std.ProfessionType){
            this.job.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_icon, "job/" + std.ProfessionType, "spriteFrame"), SpriteFrame); 
        }
        this.job.node.active = std.ProfessionType != 0;

        this.updateUpgradeState();
    }

    public setIsShowUpEffect(bool: boolean): void {
        this.isShowUpEffect = bool;
    }

    private updateUpgradeState(): void {
        let isCanUpgrade: boolean = PlayerData.CheckCardIsCanUpgrade(this.data && this.data.id);
        this.upEffect.active = isCanUpgrade && this.isShowUpEffect;
    }

    async setSelect(is_select: boolean){
        if (!this.hasLoad) await this.loadSub;
        this.select.active = is_select;
    }

    getSelectState(){
        return this.select.active;
    }

    getData(){
        return this.data;
    }

    setGray(is_gray){
        Utils.SetNodeGray(this.node, is_gray)
    }

    async setCardMask(bool: boolean) {
        if (!this.hasLoad) await this.loadSub;
        this.cardMask.active = bool;
    }

    async setCardTradeCd(bool: boolean) {
        if (!this.hasLoad) await this.loadSub;
        this.tradeCd.active = bool;
    }

    setCardEffectState(bool: boolean) {
       this.isShowUpEffect = bool;
    }

    async setShowAdd(bool: boolean, callBack?:Function){
        if (!this.hasLoad) await this.loadSub;
        this.add.active = bool;
    }
}