import { Button, Color, Component, EventTouch, Input, Label, Node, Slider, Sprite, SpriteFrame, Toggle, UITransform, find, instantiate, path, sp, tween, view } from "cc";
import { ResMgr, folder_icon, folder_item } from "../../manager/ResMgr";
import { Session } from "../../net/Session";
import { Panel } from "../../manager/GameRoot";
import { SOrderType } from "../player/PlayerStruct";
import { CardQuality, CfgMgr, StdMarketItem, StdItem, ThingTypeName, StdMarketCard, StdCard } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import { Utils } from "../../utils/Utils";
import { Tips } from "../common/Tips";
import proto, { Req, Route } from "../../net/Protocol";
import { AutoScroller } from "../../component/AutoScroller";
import { Card } from "../cards/Card";
import { base } from "../../net/proto/proto";
import { BagItem } from "../bag/BagItem";
import { MsgPanel } from "../common/MsgPanel";



export class BuyPanel extends Panel {
    protected prefab: string = "prefabs/Trade/BuyPanel";

    private quality: Sprite;
    private tittle: Label;
    private item_node:Node;
    private item_name: Label;
    private card_node:Node;
    private card_name: Label;
    private item_count: Label;
    private Price: Label;
    private money_icon: Sprite;
    private need_count: Label;
    private maxBtn: Button;
    private buyBtn: Button;
    private buyVaule: Label;
    private buyicon: Sprite;
    private sellNode: Node;
    private sellBtn: Button;
    private sellVaule: Label;
    private get_money_icon: Sprite;
    private costVaule: Label;
    private Slider: Slider;
    private progress: Node;
    private max_count: Label;
    private right: Node;
    private left: Node;
    private item_tips: Label;
    private ScrollView:AutoScroller;
    private aa:Button;

    private type: number;//买or卖
    private selectData: proto.base.IMarketItemOrder;
    private selectCount: number;//当前选择的数量
    private costNum: number;//损耗
    private market_type: string;//商品的类型 //道具或卡牌
    private itemSelectData: proto.base.IThing;//选择的商品是道具
    private maxItemNum: number;//能够买卖的最大组数   
    private touchIndex = 0;
    private touchTime = 0;
    private addNum = 0;
    private tradeData:StdMarketItem | StdMarketCard;
    private select_card_data:proto.base.IBattleCard

    protected onLoad() {
        this.CloseBy("mask");
        this.CloseBy("spriteFrame/Close");
        this.quality = this.find("spriteFrame/left/quality", Sprite);
        this.tittle = this.find("spriteFrame/title/title_name", Label);
        this.item_tips = this.find("spriteFrame/desc", Label);
        this.item_node = this.find("spriteFrame/left/itemNode")
        this.item_name = this.find("spriteFrame/left/itemNode/item_name", Label);
        this.card_node = this.find("spriteFrame/left/cardNode");
        this.card_name = this.find("spriteFrame/left/cardNode/card_name", Label);
       
        this.item_count = this.find("spriteFrame/item_count", Label);
        this.Price = this.find("spriteFrame/PriceLayout/Price", Label);
        this.money_icon = this.find("spriteFrame/PriceLayout/money_icon", Sprite);
        this.need_count = this.find("spriteFrame/mid/need_count", Label);
        this.max_count = this.find("spriteFrame/mid/max_count", Label);
        this.maxBtn = this.find("spriteFrame/mid/page1/maxBtn", Button);
        this.buyBtn = this.find("spriteFrame/mid/buyBtn", Button);
        this.buyVaule = this.find("spriteFrame/mid/buyBtn/layout/buyVaule", Label);
        this.buyicon = this.find("spriteFrame/mid/buyBtn/layout/icon", Sprite);
        this.sellNode = this.find("spriteFrame/mid/sellNode");
        this.sellBtn = this.find("spriteFrame/mid/sellNode/sellBtn", Button);
        this.sellVaule = this.find("spriteFrame/mid/sellNode/layout/sellVaule", Label);
        this.get_money_icon = this.find("spriteFrame/mid/sellNode/layout/get_money_icon", Sprite);
        this.costVaule = this.find("spriteFrame/mid/sellNode/layout/costVaule", Label);
        this.Slider = this.find("spriteFrame/mid/page1/Slider", Slider);
        this.progress = this.find("spriteFrame/mid/page1/Slider/progress");
        this.right = this.find("spriteFrame/mid/page1/right")
        this.left = this.find("spriteFrame/mid/page1/left")
        this.buyBtn.node.on("click", this.onSend, this);
        this.sellBtn.node.on("click", this.onSend, this);

        this.ScrollView = this.find("spriteFrame/ScrollView").getComponent(AutoScroller);
        this.ScrollView.SetHandle(this.UpdateCardItem.bind(this));
        this.ScrollView.node.on('select', this.SelectItem, this);
        this.aa = this.find("spriteFrame/aa", Button);
        this.aa.node.on("click", this.onAA, this);

    }

    protected onShow(): void {
    }

    flush(type: number, _data: proto.base.IMarketItemOrder |  proto.base.IMarketCardOrder) {
        if (!_data) return;
        this.ScrollView.node.active = false;
        this.type = type;
        let keepPre = 2;
        let data = _data 
        this.selectData = data;
        let item_data :proto.base.IThing
        let item_cfg: StdItem;   
        let card_cfg: StdCard;
        this.item_node.active = false;
        this.card_node.active = false;
        let tittle_name = "商品详情"
        let url = "";
        let num = 1
        if((data as proto.base.IMarketCardOrder).card){
            this.market_type = ThingTypeName.BattleCard
            item_data = {type:ThingTypeName.BattleCard, card:(data as proto.base.IMarketCardOrder).card}
            tittle_name = "卡牌详情"
            card_cfg = CfgMgr.GetCard(item_data.card.cardId)
            this.card_name.string = card_cfg.CardName
            this.card_node.active = true;
            let card = this.card_node.getChildByName("Cards");
            let cards = card.getComponent(Card)
            if(!cards) cards = card.addComponent(Card)
            cards.SetData(item_data.card)
            url = "sheets/bag/Quality_" + item_data.card.quality + "/spriteFrame"
            this.select_card_data = item_data.card;
        }else{    
            this.market_type = ThingTypeName.Item
            let itemOrderData = data as proto.base.IMarketItemOrder
            item_data = {type:ThingTypeName.Item,item:{id:itemOrderData.itemId, count:itemOrderData.quantity}} ;          
            item_cfg = CfgMgr.Getitem(item_data.item.id);
            if (item_cfg) {
                this.item_name.string = item_cfg.ItemName;
                url = "sheets/bag/Quality_" + item_cfg.Quality + "/spriteFrame"
            }
            let item_num = this.item_node.getChildByName("item_num").getComponent(Label);
            item_num.string = "拥有数量" + PlayerData.GetItemCount(item_data.item.id)
            this.item_node.active = true;
            let item = this.item_node.getChildByName("item");
            let bagItem = item.getComponent(BagItem)
            if(!bagItem) bagItem = item.addComponent(BagItem)
            bagItem.setThing(item_data)

            num = itemOrderData.quantityRemaining / (itemOrderData.quantity / itemOrderData.groupNum)
        }
        this.tittle.string = tittle_name;
        ResMgr.LoadResAbSub(url, SpriteFrame, res=>{
            this.quality.spriteFrame = res;
        })
        this.addNum = 1;
        this.tradeData = CfgMgr.GetTradeData(item_data);
        let GroupSize = this.tradeData.GroupSize ? this.tradeData.GroupSize : 1
        this.costNum = this.tradeData.Fees / 10000;
        this.itemSelectData = item_data;

        let icon_spr = CfgMgr.Getitem(this.tradeData.Currencies[0]).Icon;
        ResMgr.LoadResAbSub(path.join(folder_item, icon_spr, "spriteFrame"), SpriteFrame, res=>{
            this.money_icon.spriteFrame = res;
            this.get_money_icon.spriteFrame = res;
            this.buyicon.spriteFrame = res;
        })
        
        if (type == SOrderType.SELL) {
            //数量不够置灰
            let hasNum: number   
            
            hasNum = this.market_type == ThingTypeName.Item ? PlayerData.GetItemCount(this.itemSelectData.item.id) : PlayerData.GetCardDataById(this.itemSelectData.card.id);
            if (hasNum == 0) {
                this.sellBtn.enabled = false
                this.sellBtn.node.getComponent(Sprite).grayscale = true;

            } else {
                this.sellBtn.enabled = true
                this.sellBtn.node.getComponent(Sprite).grayscale = false;
            }
            let max_has = Math.floor(hasNum / GroupSize);
            if(this.market_type == ThingTypeName.Item){
                this.maxItemNum = max_has > num ? num : max_has;
            }else{
                this.maxItemNum = 1
            }
        } else {
            if(this.market_type == ThingTypeName.Item){
                this.maxItemNum = num;
            }else{
                this.maxItemNum = 1
            }
            
        }
        this.item_tips.string = this.market_type == ThingTypeName.Item ? item_cfg.Remark : card_cfg.SkillDesc;
        this.selectCount = this.addNum;

        this.item_count.string = "(每组数量：" + GroupSize + "个)";
       
        this.max_count.string = "/" + num;
        this.Price.string = Utils.ToFixed(data.price / 10000, keepPre);
        this.need_count.string = "0";
        this.costVaule.string = "(扣除" + this.costNum * 100 + "%损耗)";
        this.sellNode.active = (type == SOrderType.SELL)
        this.buyBtn.node.active = !(type == SOrderType.SELL)
        if (this.selectCount > this.maxItemNum || this.maxItemNum <= 0) {
            this.selectCount = 0;
            this.maxItemNum = 1;
            this.Slider.enabled = false;
            this.Slider.node.off('slide');
            this.right.off(Input.EventType.TOUCH_END);
            this.left.off(Input.EventType.TOUCH_END);
            this.right.off(Input.EventType.TOUCH_CANCEL);
            this.left.off(Input.EventType.TOUCH_CANCEL);
            this.right.off(Input.EventType.TOUCH_START);
            this.left.off(Input.EventType.TOUCH_START);
            this.maxBtn.node.off("click");
            this.Slider.progress = 0;
            Utils.SetNodeGray(this.sellBtn.node, true);
        } else {
            this.Slider.enabled = true;
            this.Slider.node.on('slide', this.onSlide, this);
            this.right.on(Input.EventType.TOUCH_END, this.onAdd, this);
            this.left.on(Input.EventType.TOUCH_END, this.onDel, this);
            this.right.on(Input.EventType.TOUCH_CANCEL, this.onAdd, this);
            this.left.on(Input.EventType.TOUCH_CANCEL, this.onDel, this);
            this.right.on(Input.EventType.TOUCH_START, () => { this.onTouchStart(1) }, this);
            this.left.on(Input.EventType.TOUCH_START, () => { this.onTouchStart(2) }, this);
            this.maxBtn.node.on("click", this.onMaxBtn, this);
            Utils.SetNodeGray(this.sellBtn.node, false);
        }
        this.updateProgress();
        
    }
    private onTouchStart(index: number) {
        this.touchIndex = index;
    }

    private onAdd(e?: any) {
        this.selectCount += this.addNum;
        //超出拥有数量
        if (this.selectCount > this.maxItemNum) {
            this.selectCount = this.maxItemNum;
        }
        this.updateProgress();
        if (e) {
            this.touchIndex = 0;
            this.touchTime = 0;
        }
    }

    private onDel(e?: any) {
        if (this.selectCount <= this.addNum) return;
        this.selectCount -= this.addNum;
        if (this.selectCount < this.addNum) {
            this.selectCount = this.addNum;
        }
        this.updateProgress();
        if (e) {
            this.touchIndex = 0;
            this.touchTime = 0;
        }
    }

    private onSlide(e?: Slider) {
        this.selectCount = Math.ceil(this.maxItemNum * this.Slider.progress);
        if (this.selectCount % this.addNum != 0) {
            this.selectCount = Math.ceil(this.selectCount / this.addNum) * this.addNum;
        }
        if (this.selectCount > this.maxItemNum) {
            this.selectCount = this.maxItemNum;
        }
        if (this.selectCount < this.addNum) {
            this.selectCount = this.addNum;
        }
        this.updateProgress();
        if (e) {
            this.touchIndex = 0;
            this.touchTime = 0;
        }
    }

    private onMaxBtn() {
        this.selectCount = this.maxItemNum;
        this.updateProgress();
        this.touchIndex = 0;
        this.touchTime = 0;
    }

    private updateProgress() {
        let price = this.selectData.price //单价
        let keepPre = 2;
        this.need_count.string = this.selectCount + "";
        let all_price = this.selectCount * price; //选择数量的总价
        this.buyVaule.string = Utils.ToFixed(all_price  / 10000, keepPre);
        // let is_can_buy = (num / 10000) <= PlayerData.GetItemCount(1);
        // this.buyVaule.color = is_can_buy ? new Color().fromHEX("#ffffff") : new Color().fromHEX("#ff3f3f");
        this.sellVaule.string = Utils.ToFixed(all_price / 10000 - (this.selectCount * this.costNum + this.tradeData.AddFees / 10000));
        this.Slider.progress = this.selectCount / this.maxItemNum;
    }

    private onAA(){
        if(this.type == SOrderType.SELL && this.market_type == ThingTypeName.BattleCard){
            this.ScrollView.node.active = true;
            this.ScrollView.UpdateDatas(PlayerData.cards)
        }
    }

    private onSend() {
        let value = 0
        let currency = PlayerData.GetItemCount(1);
        let is_gem: boolean = true
        value = this.selectData.price / 10000 
        if (this.type == SOrderType.BUY && is_gem) {
            let need_currency = this.selectCount * value;
            if (currency < need_currency) {
                Tips.Show("货币不足")
                return;
            }
        }

        if(this.market_type == ThingTypeName.Item){
            let buyData = new Req["market.protocol.takeitemorder"]();
            buyData.orderId = this.selectData.orderId;
            buyData.takeGroup = this.selectCount;
            Session.Send(Route["market.protocol.takeitemorder"],buyData);
        }else{

            //随机一个匹配的卡牌
            let cardUnionId =  this.select_card_data.id
            if(this.selectData.orderType == "buy"){
                cardUnionId = ""
                for (const iterator of PlayerData.cards) {
                    if(iterator.cardId == this.select_card_data.cardId && iterator.level == this.select_card_data.level && iterator.quality == this.select_card_data.quality){
                        cardUnionId = iterator.id
                    }
                }
            }

            if(cardUnionId == ""){
                MsgPanel.Show("没有匹配英雄")
                return
            }

            this.ScrollView.node.active = false;
            let buyData = new Req["market.protocol.takecardorder"]();
            buyData.orderId = this.selectData.orderId;
            buyData.cardUnionId = cardUnionId;
            Session.Send(Route["market.protocol.takecardorder"],buyData);
        }
    }

    protected update(dt: number): void {
        let size = this.Slider.node.getComponent(UITransform).contentSize;
        this.progress.getComponent(UITransform).setContentSize(this.Slider.progress * size.width, size.height);
        if (this.touchIndex != 0) {
            this.touchTime += dt;
            if (this.touchTime >= 0.5) {
                this.touchTime = 0.47;
                switch (this.touchIndex) {
                    case 1:
                        this.onAdd()
                        break;
                    case 2:
                        this.onDel();
                        break;
                }
            }
        }
    }

    private UpdateCardItem(item: Node, data: proto.base.IBattleCard, index: number) {
        // item.getChildByPath("cardNode/select").active = index == this.select_index;
        let cardItem = item.getComponent(Card);
        if (!cardItem) cardItem = item.addComponent(Card);
        // cardItem.setSelect(index == this.select_index)
        cardItem.SetData(data);
    }

        /**
     * 选中道具
     * @param index 
     */
        protected async SelectItem(index: number, item: Node) {
            if (!this.$hasLoad) await this.initSub;
            let card = item.getComponent(Card);
            this.select_card_data = card.getData();
        }
    


    protected onHide(...args: any[]): void {
        this.selectData = undefined;
        this.Slider.node.off('slide');
        this.right.off(Input.EventType.TOUCH_END);
        this.left.off(Input.EventType.TOUCH_END);
        this.right.off(Input.EventType.TOUCH_CANCEL);
        this.left.off(Input.EventType.TOUCH_CANCEL);
        this.right.off(Input.EventType.TOUCH_START);
        this.left.off(Input.EventType.TOUCH_START);
        this.maxBtn.node.off("click");

    }
}