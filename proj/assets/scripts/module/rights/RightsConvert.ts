import { Button, Component, Label, Layout, Node, ScrollView, Sprite, SpriteFrame, Widget, _decorator, instantiate, path } from "cc";
import { CfgMgr, ItemType, StdEquityCard, StdEquityList, StdItem, ThingType, ThingTypeName } from "../../manager/CfgMgr";
import { ResMgr, folder_card, folder_item, folder_money } from "../../manager/ResMgr";
import { Second, Utils } from "../../utils/Utils";
import proto from "../../net/Protocol";
import { AsyncComponent } from "../common/AsyncComponent";
import { AutoScroller } from "../../component/AutoScroller";
import { Card } from "../cards/Card";
import { BagItem } from "../bag/BagItem";
import { ItemUtil } from "../../utils/ItemUtils";
import { MsgPanel } from "../common/MsgPanel";
import { PlayerData } from "../player/PlayerData";

const { ccclass, property, disallowMultiple, requireComponent } = _decorator;

@ccclass('RightsConvert')
@disallowMultiple(true)
export class RightsConvert extends AsyncComponent {
    private bg: Sprite;
    private ScrollView:AutoScroller;
    private rewardScrollView:ScrollView;
    private getBtn:Button;
    private Limit: Label
    private icon: Sprite;
    private name_icon: Sprite;
    private buyBtn:Button;
    private unLock: Node;
    private time: Label;
    private item_icon:Sprite
    private buyNum: Label;

    private clone_item:Node;
    private data:StdEquityCard
    protected onLoad(): void {
        this.bg = this.node.getChildByName("bg").getComponent(Sprite);
        this.ScrollView = this.node.getChildByPath("general/ScrollView").getComponent(AutoScroller);
        this.ScrollView.SetHandle(this.updateDesItem.bind(this));
        this.rewardScrollView = this.node.getChildByPath("general/rewardScrollView").getComponent(ScrollView);
        this.clone_item =  this.node.getChildByPath("general/rewardScrollView/view/content/Node");
        this.getBtn = this.node.getChildByPath("general/getBtn").getComponent(Button);
        this.Limit = this.node.getChildByPath("general/limit_time").getComponent(Label);
        this.icon = this.node.getChildByName("icon").getComponent(Sprite);
        this.name_icon = this.node.getChildByName("name_icon").getComponent(Sprite);
        this.buyBtn = this.node.getChildByName("buyBtn").getComponent(Button);
        this.unLock = this.node.getChildByName("unLock");
        this.time = this.node.getChildByName("time").getComponent(Label);
        this.item_icon = this.node.getChildByPath("buyBtn/icon").getComponent(Sprite);
        this.buyNum = this.node.getChildByPath("buyBtn/buyNum").getComponent(Label);
        this.getBtn.node.on(Button.EventType.CLICK, this.onClick, this);
        this.buyBtn.node.on(Button.EventType.CLICK, this.onClick, this);


        this.hasLoad = true;
        super.onLoad();
    }

    async Show(data: StdEquityCard) {
        if (!this.hasLoad) await this.loadSub;

        this.data = data;
        this.unLock.active = false
        let show_list = CfgMgr.getEquityShowList(data.EquityList)
        let des_list = show_list[0];
        this.ScrollView.UpdateDatas(des_list);
        let reward_list:proto.base.IThing[] = []
        if(show_list[1].length > 0 && show_list[1][0].length > 0){     
            reward_list = ItemUtil.GetSThingList(show_list[1][0], show_list[1][1], show_list[1][2]);   
        }
        this.rewardScrollView.content.removeAllChildren();
        for (let index = 0; index < reward_list.length; index++) {
            const element = reward_list[index];
            let item = instantiate(this.clone_item);
            this.updateItem(item, element, index);
            this.rewardScrollView.content.addChild(item);
        }
        
        let bg_url = data.BgTxture ? data.BgTxture : "rightsBg2"
        this.bg.spriteFrame = await ResMgr.LoadResAbSub("sheets/bg/" + bg_url + "/spriteFrame", SpriteFrame)
        let icon_url = data.GetEquityIcon ? data.GetEquityIcon : "icon201"
        this.icon.spriteFrame = await ResMgr.LoadResAbSub("sheets/rights/icon/" + icon_url + "/spriteFrame", SpriteFrame)
        let name_icon_url = data.NameIcon ? data.NameIcon : "nameIcon201";
        this.name_icon.spriteFrame = await ResMgr.LoadResAbSub("sheets/rights/icon/" + name_icon_url + "/spriteFrame", SpriteFrame)
        let item_data = CfgMgr.Getitem(data.ItemId)
        if(item_data && item_data.Icon){
            this.item_icon.spriteFrame = await ResMgr.LoadResAbSub(folder_item + item_data.Icon + "/spriteFrame", SpriteFrame) 
        }
        this.rewardScrollView.content.setPosition(0,0,0)
        this.updatePanel();
    }

    private updatePanel(){
        let num = 0;
        this.buyNum.string = num + "/" + this.data.LimitNum
    }

    private updateItem(item:Node, data: proto.base.IThing, index: number) {
        let reward = item.getChildByName("item")
        let reward_item = reward.getComponent(BagItem) || reward.addComponent(BagItem);
        reward_item.setThing(data)
    }

    private updateDesItem(item:Node, data: string, index: number) {
        let des = item.getChildByName("TipsLabel").getComponent(Label);
        des.string = data
    }


    private onClick(e:Button){
        let name = e.name
        switch (name) {
            case "getBtn":
                let is_can_get = false
                if(is_can_get){

                }else{
                    MsgPanel.Show("不可领取")
                }
                
                break;
            case "buyBtn":
                let item_num = PlayerData.GetItemCount(this.data.ItemId)
                let buyNum = 0;
                
                let is_can_buy = item_num > 1 && buyNum > 0 && buyNum <= this.data.LimitNum;
                if(is_can_buy){

                }else{
                    MsgPanel.Show("无法兑换")
                }  
                break;
        
            default:
                break;
        }
    }

}