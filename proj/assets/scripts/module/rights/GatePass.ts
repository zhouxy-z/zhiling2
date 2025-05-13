import { Button, Color, Component, Label, Node, ProgressBar, Sprite, SpriteFrame, UIOpacity, _decorator, path } from "cc";
import { AsyncComponent } from "../common/AsyncComponent";
import { AutoScroller } from "../../component/AutoScroller";
import { CfgMgr, ItemType, StdEquityCard, StdSeaGatepass, StdSeaGatepassLv, StdSeaGatepassLvReward, ThingType } from "../../manager/CfgMgr";
import { ResMgr } from "../../manager/ResMgr";
import { BagItem } from "../bag/BagItem";
import proto from "../../net/Protocol";
import { ItemUtil } from "../../utils/ItemUtils";
import { GatePassBuyPanel } from "./GatePassBuyPanel";
import { Card } from "../cards/Card";
import { SpriteLabel } from "../../component/SpriteLabel";

const { ccclass, property, disallowMultiple, requireComponent } = _decorator;

@ccclass('GatePass')
@disallowMultiple(true)
export class GatePass extends AsyncComponent {
    private bg: Sprite;
    private icon: Sprite;
    private title: Sprite;
    private sesson_time:Label;
    private Lv:SpriteLabel;
    private proBar:ProgressBar
    private curProgress: Label;
    private allProgress: Label;
    private oneKeyBtn:Button;
    private buyBtn:Button;
    private ScrollView:AutoScroller;
    private item:Node



    private baseRewardList:StdSeaGatepassLvReward[]
    private heighRewardList:StdSeaGatepassLvReward[]

    private old_index = 0;
    private cur_show_index = 0;
    protected onLoad(): void {
        this.bg = this.node.getChildByName("bg").getComponent(Sprite);
        this.icon = this.node.getChildByName("icon").getComponent(Sprite);
        this.title = this.node.getChildByName("title").getComponent(Sprite);
        this.Lv = this.node.getChildByPath("lvBg/lv").addComponent(SpriteLabel)
        this.Lv.font = "sheets/numberImg/num2";
        this.Lv.string = "0";
        this.Lv.spacingX = -5;
        this.sesson_time = this.node.getChildByPath("sesson/sesson_time").getComponent(Label);
        this.proBar = this.node.getChildByName("proBar").getComponent(ProgressBar);
        this.curProgress = this.node.getChildByPath("expNode/curProgress").getComponent(Label);
        this.allProgress = this.node.getChildByPath("expNode/allProgress").getComponent(Label);
        this.oneKeyBtn = this.node.getChildByName("oneKeyBtn").getComponent(Button);
        this.buyBtn = this.node.getChildByName("buyBtn").getComponent(Button);
        this.ScrollView = this.node.getChildByName("ScrollView").getComponent(AutoScroller);
        this.ScrollView.SetHandle(this.updateItem.bind(this));
        this.ScrollView.node.on('select', this.onSelect, this);
        this.item = this.node.getChildByName("item");
        this.oneKeyBtn.node.on(Button.EventType.CLICK, this.onOneKey, this)
        this.buyBtn.node.on(Button.EventType.CLICK, this.onBuy, this)


        this.hasLoad = true;   
        super.onLoad();
    }

    async Show(data:StdEquityCard) {
        if (!this.hasLoad) await this.loadSub;
    
        let cur_lv = 21;
        this.Lv.string = cur_lv + "";
        let seaid = data.SeaId;
        let cur_exp = 0;
        let max_exp: number = CfgMgr.getSeaGatepassNextExp(cur_lv)
        this.curProgress.string = cur_exp + "/";
        this.allProgress.string = max_exp + "";
        this.proBar.progress =  cur_exp / max_exp;
       

        let seapass:StdSeaGatepass[] = CfgMgr.getSeaGatepass(seaid);
        let BgTexture = seapass[0].BgTexture ? seapass[0].BgTexture: "rightsBg1"
        let BigPrizeIcon = seapass[0].BigPrizeIcon ? seapass[0].BigPrizeIcon: "icon"
        let TitleIcon = seapass[0].TitleIcon ? seapass[0].TitleIcon: "nameIcon_10001"

        ResMgr.LoadResAbSub("sheets/bg/" + BgTexture +  "/spriteFrame",SpriteFrame, res=>{
            this.bg.spriteFrame = res;
        })

        ResMgr.LoadResAbSub("sheets/rights/icon/" + BigPrizeIcon +  "/spriteFrame",SpriteFrame, res=>{
            this.icon.spriteFrame = res;
        })

        ResMgr.LoadResAbSub("sheets/rights/icon/" + TitleIcon +  "/spriteFrame",SpriteFrame, res=>{
            this.title.spriteFrame = res;
        })
        let lv_cfg:StdSeaGatepassLvReward[] = CfgMgr.getSeaGatepassReward(seaid);
        for (let i = 0; i < seapass.length; i++) {
            const element = seapass[i];
            if(element.Grate == 1){
                this.baseRewardList = CfgMgr.getSeaGatepassReward(element.ID)
            }

            if(element.Grate == 2){
                this.heighRewardList = CfgMgr.getSeaGatepassReward(element.ID) 
            }  
        }
        this.baseRewardList.sort((a:StdSeaGatepassLvReward,b:StdSeaGatepassLvReward)=>{
            return a.Lv - b.Lv
        })
        this.heighRewardList.sort((a:StdSeaGatepassLvReward,b:StdSeaGatepassLvReward)=>{
            return a.Lv - b.Lv
        })
        this.ScrollView.UpdateDatas(this.baseRewardList)
       
    }

    private updateItem(item: Node, data: StdSeaGatepassLvReward, index: number){
        let cur_show_index = 0
        if(index > this.old_index){
            cur_show_index = Math.ceil((index + 1) / 10) * 10
        }else{
            cur_show_index = Math.ceil((index + 8) / 10) * 10
        }
        if(cur_show_index != this.cur_show_index){
            this.cur_show_index = cur_show_index
            let cur_data_index = this.cur_show_index <= this.baseRewardList.length ? this.cur_show_index - 1 : this.baseRewardList.length - 1
            this.setStageReward(this.item, this.baseRewardList[cur_data_index], cur_data_index)
        }
        this.old_index  = index;

        let lv = item.getChildByName("lv").getComponent(Label);
        let base_node = item.getChildByName("free");
        let height_node1 = item.getChildByPath("no_free/Node1");
        let height_node2 = item.getChildByPath("no_free/Node2");
        let card_node = item.getChildByPath("no_free/card");

        lv.string = "Lv." + data.Lv; 
        let reward_lsit = ItemUtil.GetSThingList(data.RewardType, data.RewardID, data.RewardNum) 
        this.setItem(base_node, reward_lsit[0], 0)

        let heigh_data = this.heighRewardList[index];
        let is_has_card = heigh_data.RewardType.indexOf(ThingType.battlecard)
        height_node1.active = is_has_card == -1;
        height_node2.active = is_has_card == -1;
        card_node.active = is_has_card != -1;
        if(is_has_card == -1){
            let height_reward_lsit = ItemUtil.GetSThingList(heigh_data.RewardType, heigh_data.RewardID, heigh_data.RewardNum)
            this.setItem(height_node1, height_reward_lsit[0], 0);
            if( height_reward_lsit[1]){
                this.setItem(height_node2, height_reward_lsit[1], 0)
                height_node2.active = true
            }else{
                height_node2.active = false
            }
        }else{
            let card_cfg = CfgMgr.GetBattleCardDeliver(heigh_data.RewardID[is_has_card])
            let card_data: proto.base.IBattleCard = new proto.base.BattleCard();
            card_data.cardId = card_cfg.CardID;
            card_data.createdAt = "";
            card_data.id = "";
            card_data.exp = 0;
            card_data.level = 1;
            card_data.nftLockExpires = false;
            card_data.ownershipType = 0;
            card_data.quality = card_cfg.CardQuality;
            card_data.tradeCd = 0;
            card_data.updateId = 0;
            this.setCard(card_node, card_data, 0);
        }
    }

    private setItem(item: Node, reward: proto.base.IThing, is_state:number){
        let base_item = item.getChildByName("item");
        let mask = item.getChildByName("mask").getComponent(Sprite);
        let mask_opac = item.getChildByName("mask").getComponent(UIOpacity);
        let select = item.getChildByName("select");
        let lock = item.getChildByName("lock");

        let bagItem = base_item.getComponent(BagItem) || base_item.addComponent(BagItem);  
        bagItem.setThing(reward);  
        is_state = 0
        let _color = is_state ? "#EDF5FE" : "#000000" 
        mask.color.fromHEX(_color)
        let _opacity = is_state ? 255 : 179 
        mask_opac.opacity = _opacity
        select.active = is_state ? true : false;
        if(lock){
            lock.active = is_state ? true : false;
        }
    }

    private setCard(item: Node, reward: proto.base.IBattleCard, is_state:number){
        let card = item.getChildByName("Cards");
        let mask = item.getChildByName("mask").getComponent(Sprite);
        let mask_opac = item.getChildByName("mask").getComponent(UIOpacity);
        let select = item.getChildByName("select");
        let lock = item.getChildByName("lock");

        let cards = card.getComponent(Card) || card.addComponent(Card);  
        cards.SetData(reward);

        is_state = 0
        let _color = is_state ? "#EDF5FE" : "#000000" 
        mask.color.fromHEX(_color)
        let _opacity = is_state ? 255 : 179 
        mask_opac.opacity = _opacity
        select.active = is_state ? true : false;
        lock.active = is_state ? true : false;
    }

    private setStageReward(item: Node, data: StdSeaGatepassLvReward, index: number){
        let lv = item.getChildByName("lv").getComponent(Label);
        let base_node = item.getChildByName("free");
        let height_node1 = item.getChildByPath("no_free/Node1");
        let height_node2 = item.getChildByPath("no_free/Node2");
        let card_node = item.getChildByPath("no_free/card");

        lv.string = "Lv." + data.Lv; 
        let reward_lsit = ItemUtil.GetSThingList(data.RewardType, data.RewardID, data.RewardNum) 
        this.setItem(base_node, reward_lsit[0], 0)

        let heigh_data = this.heighRewardList[index];
        let is_has_card = heigh_data.RewardType.indexOf(ThingType.battlecard)
        height_node1.active = is_has_card == -1;
        height_node2.active = is_has_card == -1;
        card_node.active = is_has_card != -1;
        if(is_has_card == -1){
            let height_reward_lsit = ItemUtil.GetSThingList(heigh_data.RewardType, heigh_data.RewardID, heigh_data.RewardNum)
            this.setItem(height_node1, height_reward_lsit[0], 0);
            if( height_reward_lsit[1]){
                this.setItem(height_node2, height_reward_lsit[1], 0)
                height_node2.active = true
            }else{
                height_node2.active = false
            }
        }else{
            let card_cfg = CfgMgr.GetBattleCardDeliver(heigh_data.RewardID[is_has_card])
            let card_data: proto.base.IBattleCard = new proto.base.BattleCard();
            card_data.cardId = card_cfg.CardID;
            card_data.createdAt = "";
            card_data.id = "";
            card_data.exp = 0;
            card_data.level = 1;
            card_data.nftLockExpires = false;
            card_data.ownershipType = 0;
            card_data.quality = card_cfg.CardQuality;
            card_data.tradeCd = 0;
            card_data.updateId = 0;
            this.setCard(card_node, card_data, 0);
        }
    }

    private onSelect(index: number, item: Node, data: any){
        console.log("领奖")
    }



    private onBuy(){
        GatePassBuyPanel.Show();

    }

    private onOneKey(){

    }


}