import { Button, Label, Node, RichText, Slider, Toggle, UITransform } from "cc";
import { Session } from "../../net/Session";
import { Panel } from "../../manager/GameRoot";
import { CfgMgr, StdItem, StdShopCommodity, ThingTypeName } from "../../manager/CfgMgr";
import { SShopItem } from "../player/PlayerStruct";
import { MsgPanel } from "../common/MsgPanel";
import { ConsumeItem } from "../common/ConsumeItem";
import { AwardItem } from "../common/AwardItem";
import { ItemUtil } from "../../utils/ItemUtils";
import proto, { Req, Route } from "../../net/Protocol";

export class ShopBuyPanel extends Panel {
    protected prefab: string = "prefabs/shop/ShopBuyPanel";
    private itemDesc: RichText;
    private awardItem: AwardItem;
    private awardBtn: Button;
    private priceConsumeItem: ConsumeItem;
    private numLab: Label;
    private leftBtn: Button;
    private slider: Slider;
    private sliderBar: Node;
    private rightBtn: Button;
    private maxBtn: Button;
    private buyBtn: Button;
    private buyConsumeItem: ConsumeItem;
    private curNum: number;
    private maxNum: number;
    private shopId: number;
    private std: StdShopCommodity;
    private shopData: SShopItem;
    private stdItem: StdItem;
    private item: proto.base.IThing;
    protected onLoad() {
        this.itemDesc = this.find("itemDesc", RichText);
        this.awardItem = this.find("AwardItem").addComponent(AwardItem);
        this.awardBtn = this.find("AwardItem", Button);
        this.priceConsumeItem = this.find("priceConsumeItem").addComponent(ConsumeItem);
        this.numLab = this.find("numLab", Label);
        this.leftBtn = this.find("sliderCont/leftBtn", Button);
        this.slider = this.find("sliderCont/slider", Slider);
        this.sliderBar = this.find("sliderCont/slider/sliderBar");
        this.rightBtn = this.find("sliderCont/rightBtn", Button);
        this.maxBtn = this.find("sliderCont/maxBtn", Button);
        this.buyBtn = this.find("buyBtn", Button);
        this.buyConsumeItem = this.find("buyBtn/buyConsumeItem").addComponent(ConsumeItem);
        this.CloseBy("closeBtn");
        this.CloseBy("mask");
        this.awardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.slider.node.on('slide', this.onSlide, this);
        this.leftBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.rightBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.maxBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.buyBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }
    protected onShow(): void {

    }
    protected onHide(...args: any[]): void {

    }

    public flush(shopId: number, shopData: SShopItem): void {
        this.shopId = shopId;
        this.shopData = shopData;
        this.std = CfgMgr.GetCommShopItem(this.shopData.id);
        this.buyBtn.node.active = true;
        if (!this.std) {
            MsgPanel.Show("缺少配置")
            this.buyBtn.node.active = false;
            return;
        };
        this.item = ItemUtil.CreateThing(ThingTypeName.Item, this.std.GoodsID[0], this.std.GoodsNum[0]);
        this.stdItem = CfgMgr.Getitem(this.item.item.id);
        this.itemDesc.string = this.stdItem.Remark;
        this.awardItem.SetData({ itemData: this.item });
        this.maxNum = shopData.count;//Math.floor(ItemUtil.GetHaveThingNum(this.std.CostType[0], this.std.CostID[0]) / this.std.CostNumber[0]);
        this.curNum = this.maxNum > 0 ? 1 : 0;
        let priceItem = ItemUtil.CreateThing(ThingTypeName.Item, this.std.CostID[0], this.std.CostNumber[0]);
        this.priceConsumeItem.SetData(priceItem);
        this.changeSlidePro(3);
    }
    onBtnClick(btn: Button) {
        switch (btn) {
            case this.leftBtn:
                this.changeSlidePro(0);
                break;
            case this.rightBtn:
                this.changeSlidePro(1);
                break;
            case this.maxBtn:
                this.changeSlidePro(2);
                break;
            case this.buyBtn:
                // if(this.std.LimitBuyTime > 0 && (this.shopData.expiration_time - PlayerData.GetServerTime() < 1)){
                //     MsgPanel.Show("道具已超出时间，无法继续兑换");
                //     return;
                // }
                let buy_item = new Req["shop.protocol.buyitem"]();
                buy_item.buyCount = this.curNum;
                buy_item.buyId = this.std.Id;
                buy_item.shopIndexId = this.shopId;
                Session.Send(Route["shop.protocol.buyitem"], buy_item);
                this.Hide();
                break;
            case this.awardBtn:
                // ItemTips.Show(this.item);
                break;
        }
    }
    private onSlide(event: Slider) {
        let tempNum: number = Math.ceil(event.progress * this.maxNum);
        if (tempNum > this.maxNum) tempNum = this.maxNum;
        this.curNum = Math.max(tempNum, this.maxNum > 0 ? 1 : 0);
        this.changeSlidePro(3);
    }
    private changeSlidePro(type: number): void {
        if (type == 0) {
            if (this.curNum > 1) {
                this.curNum--;
            }
        } else if (type == 1) {
            if (this.curNum < this.maxNum) {
                this.curNum++;
            }
        } else if (type == 2) {
            if (this.curNum != this.maxNum) {
                this.curNum = this.maxNum;
            }
        }
        this.slider.progress = this.maxNum < 1 ? 0 : this.curNum / this.maxNum;
        this.updateItemCount();
    }
    private updateItemCount(): void {
        let barTrans = this.sliderBar.getComponent(UITransform);
        let sliderTrans = this.slider.getComponent(UITransform);
        barTrans.setContentSize(this.slider.progress * sliderTrans.width, barTrans.height);
        this.numLab.string = this.curNum.toString();
        let num: number = this.curNum * this.std.CostNumber[0];
        let item = ItemUtil.CreateThing(ThingTypeName.Item, this.std.CostID[0], num);
        this.buyConsumeItem.SetData(item);
        let typeList = []
        let costList = []
        for (let index = 0; index < this.std.CostID.length; index++) {
            const type = ThingTypeName.Item;
            const cost = this.std.CostID[index]
            typeList.push(type)
            costList.push(cost)
        }
        let isCanBuy: boolean = this.curNum > 0 && ItemUtil.CheckThingConsumes(typeList, costList, [num], true);
        console.log(this.curNum > 0, typeList, costList, [num], ItemUtil.CheckThingConsumes(typeList, costList, [num]))
        this.buyBtn.enabled = isCanBuy
    }
}