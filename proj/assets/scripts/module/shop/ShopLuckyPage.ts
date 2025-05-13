import { Component, Input, Label, Layout, Node, Sprite, SpriteFrame, instantiate, path } from "cc";
import { IPanelPage } from "../common/IPanelPage";
import { AsyncComponent } from "../common/AsyncComponent";
import proto, { Req, Route } from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { CfgMgr, ItemType, StdShopIndex, StdShopLuckyPool, ThingType } from "../../manager/CfgMgr";
import { AutoScroller } from "../../component/AutoScroller";
import { ResMgr } from "../../manager/ResMgr";
import { ItemUtil } from "../../utils/ItemUtils";
import { BagItem } from "../bag/BagItem";
import { ItemTips } from "../common/ItemTips";
import { CostItem } from "../common/CostItem";
import { MsgPanel } from "../common/MsgPanel";
import { Session } from "../../net/Session";

/**将shopitem再次封装，用于动态绑定shopIndexId的语法糖提示 */
interface IShopItem extends proto.base.IShopItem {
    shopIndexId: number;
}

export class ShopLuckyPage extends AsyncComponent implements IPanelPage {

    protected scroller: AutoScroller;
    protected bg: Sprite;
    protected awardScroller: AutoScroller;
    protected titleImg: Sprite;
    protected numLab: Label;
    protected btnCont: Node;
    protected yetNumLab: Label;
    protected oneFree: Label;
    protected tenFree: Label;
    protected hundredFree: Label;
    protected oneCost: CostItem;
    protected tenCost: CostItem;
    protected hundredCost: CostItem;

    protected selectShop: proto.base.IShopIndexContent;

    protected onLoad() {
        this.scroller = this.node.getChildByPath("btns").getComponent(AutoScroller);
        this.scroller.SetHandle(this.updateBtn.bind(this));
        this.scroller.node.on('select', this.onSelect, this);
        this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
        this.awardScroller = this.node.getChildByPath("awards").getComponent(AutoScroller);
        this.awardScroller.SetHandle(this.updateAwardItem.bind(this));
        this.titleImg = this.node.getChildByPath("titleImg").getComponent(Sprite);
        this.numLab = this.node.getChildByPath("numLab").getComponent(Label);
        this.btnCont = this.node.getChildByPath("btnCont");
        this.yetNumLab = this.node.getChildByPath("yetNumLab").getComponent(Label);
        this.oneFree = this.node.getChildByPath("btnCont/oneBtn/freeLab").getComponent(Label);
        this.tenFree = this.node.getChildByPath("btnCont/tenBtn/freeLab").getComponent(Label);
        this.hundredFree = this.node.getChildByPath("btnCont/oneHundredBtn/freeLab").getComponent(Label);
        this.oneCost = this.node.getChildByPath("btnCont/oneBtn/costitem").addComponent(CostItem);
        this.tenCost = this.node.getChildByPath("btnCont/tenBtn/costitem").addComponent(CostItem);
        this.hundredCost = this.node.getChildByPath("btnCont/oneHundredBtn/costitem").addComponent(CostItem);
        this.node.getChildByPath("btnCont/oneBtn").on(Input.EventType.TOUCH_END, this.onOne, this);
        this.node.getChildByPath("btnCont/tenBtn").on(Input.EventType.TOUCH_END, this.onTen, this);
        this.node.getChildByPath("btnCont/oneHundredBtn").on(Input.EventType.TOUCH_END, this.onHundred, this);
        super.onLoad();
    }

    async Show(indexIds: number[]) {
        this.node.active = true;
        if (!this.hasLoad) await this.loadSub;
        let datas: StdShopIndex[] = [];
        for (let indexId of indexIds) {
            let content = PlayerData.GetShopByID(indexId);
            let stdIndex = CfgMgr.GetShopIndexById(content.shopIndexId);
            datas.push(stdIndex);
        }
        this.scroller.UpdateDatas(datas);
        this.scroller.SelectFirst();
        this.node.getChildByName("mask").active = false;
    }
    Hide(): void {
        this.node.active = false;
    }

    protected updateBtn(item: Node, data: StdShopIndex, index: number) {
        let label = item.getChildByPath("Label").getComponent(Label);
        label.string = data.ShopName;
    }

    protected updateAwardItem(item: Node, data: { itemType: number, itemId: number, count: number }) {
        let bagItem: BagItem = item.getChildByName("item").getComponent(BagItem);
        if (!bagItem) bagItem = item.getChildByName("item").addComponent(BagItem);
        bagItem.setItem(data.itemType, data.itemId, data.count);
    }

    protected async onSelect(index: number, item: Node, data: StdShopIndex) {
        this.selectShop = PlayerData.GetShopByID(data.ID);
        let stdLuck = CfgMgr.GetShopLucky(data.LuckyID);
        let url = path.join("sheets/shop", stdLuck.LuckyBgRes, "spriteFrame");
        this.bg.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);
        let stdPool: StdShopLuckyPool = CfgMgr.GetShopLuckyPool(stdLuck.RewardPools);
        let num: number = 100, rewards = [];
        if (stdPool) {
            for (let i = 0; i < stdPool.Target.length; i++) {
                let index: number = stdPool.Target[i];
                if (index != undefined) {
                    let itemType = stdPool.RewardType[index];
                    let itemId = stdPool.RewardId[index];
                    let itemNum = stdPool.RewardNumber[index];
                    if (itemType == undefined || itemId == undefined || itemNum == undefined) throw "luckpool表配置错误";
                    rewards.push({ itemType: itemType, itemId: itemId, count: itemNum });
                }
                // awardList.push(ItemUtil.CreateThing(itemType, itemId, itemNum));
            }
            num = stdPool.GetNumber;
        }
        this.awardScroller.UpdateDatas(rewards);
        this.numLab.string = `${Math.max(num - this.selectShop?.lucky?.getNumber || 0)}`;
        this.yetNumLab.string = `${this.selectShop?.lucky?.doCount || 0}/${stdLuck.Frequency}`;

        url = path.join("sheets/shop", stdLuck.LuckyTitleRes, "spriteFrame");
        this.titleImg.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);

        let costType = ThingType.item, costId = stdLuck.ConsumeX1ItemId[0], costNum = stdLuck.ConsumeX1Cost[0];
        // 1次档位状态
        if (this.selectShop.lucky.freeX1Count > 0) {
            this.oneFree.string = "免费次数:" + this.selectShop.lucky.freeX1Count;
            this.oneCost.node.active = false;
        } else {
            this.oneFree.string = "";
            this.oneCost.node.active = true;
            this.oneCost.SetItem(costType, costId, costNum);
        }
        // 10次档位状态
        if (this.selectShop.lucky.freeX10Count > 0) {
            this.tenFree.string = "免费次数:" + this.selectShop.lucky.freeX10Count;
            this.tenCost.node.active = false;
        } else {
            this.tenFree.string = "";
            this.tenCost.node.active = true;
            this.tenCost.SetItem(costType, costId, costNum * 10);
        }
        // 100次档位状态
        if (stdLuck.ConsumeX100Type > 0) {
            this.hundredFree.string = "免费次数:" + stdLuck.ConsumeX100Type;
            this.hundredCost.node.active = false;
        } else {
            this.hundredCost.node.active = true;
            this.hundredCost.SetItem(costType, costId, costNum * 100);
        }
        this.btnCont.getComponent(Layout).updateLayout();
    }

    protected onOne() {
        if (!this.selectShop) return MsgPanel.Show("商城未开启");
        if (this.selectShop.lucky.frequency < 0) return MsgPanel.Show("抽卡次数不足");
        let req = new Req["shop.protocol.dolucky"]();
        req.shopIndexId = this.selectShop.shopIndexId;
        req.count = 1;
        req.convertCount = 0;
        this.node.getChildByName("mask").active = false;
        Session.Send(Route["shop.protocol.dolucky"], req);
    }
    protected onTen() {
        if (!this.selectShop) return MsgPanel.Show("商城未开启");
        if (this.selectShop.lucky.frequency < 0) return MsgPanel.Show("抽卡次数不足");
        let req = new Req["shop.protocol.dolucky"]();
        req.shopIndexId = this.selectShop.shopIndexId;
        req.count = 10;
        req.convertCount = 0;
        this.node.getChildByName("mask").active = false;
        Session.Send(Route["shop.protocol.dolucky"], req);
    }
    protected onHundred() {
        if (!this.selectShop) return MsgPanel.Show("商城未开启");
        if (this.selectShop.lucky.frequency < 0) return MsgPanel.Show("抽卡次数不足");
        let req = new Req["shop.protocol.dolucky"]();
        req.shopIndexId = this.selectShop.shopIndexId;
        req.count = 100;
        req.convertCount = 0;
        this.node.getChildByName("mask").active = false;
        Session.Send(Route["shop.protocol.dolucky"], req);
    }
}