import { Button, Component, Label, path, Sprite, SpriteFrame, Node, game, Layout } from "cc";
import { ResMgr } from "../../manager/ResMgr";
import { Session } from "../../net/Session";
import { MsgPanel } from "../common/MsgPanel";
import { ShopLuckyBuyPanel } from "./ShopLuckyBuyPanel";
import { EventMgr, Evt_AdvisterUpdate } from "../../manager/EventMgr";
import { AutoScroller } from "../../component/AutoScroller";
import { ConsumeItem, ConsumeNumFormatType } from "../common/ConsumeItem";
import { CfgMgr, StdLuckyShop, StdShopLuckyPool, ThingTypeName } from "../../manager/CfgMgr";
import { ItemUtil } from "../../utils/ItemUtils";
import { PlayerData } from "../player/PlayerData";
import { AwardItem } from "../common/AwardItem";
import proto, { Req, Route } from "../../net/Protocol";


export class ShopLuckyItem extends Component {
    private bg: Sprite;
    private titleImg: Sprite;
    private numLab: Label;
    private yetNumLab: Label;
    private btnLayout: Layout;
    private oneBtn: Button;
    private oneAdBtn: Button;
    private oneAdBtnLab: Label;
    private oneFreeNumLab: Label;
    private oneConsumeItem: ConsumeItem;
    private tenBtn: Button;
    private helpBtn: Button;
    private tenFreeNumLab: Label;
    private tenConsumeItem: ConsumeItem;
    private oneHundredBtn: Button;
    private oneHundredFreeNumLab: Label;
    private oneHundredConsumeItem: ConsumeItem;
    private awardList: AutoScroller;
    private isInit: boolean = false;
    private std: StdLuckyShop;
    private data: proto.base.ILuckyContent;
    private jumpAd: Node;
    protected onLoad(): void {
        this.bg = this.node.getChildByName("bg").getComponent(Sprite);
        this.titleImg = this.node.getChildByName("titleImg").getComponent(Sprite);
        this.numLab = this.node.getChildByName("numLab").getComponent(Label);
        this.yetNumLab = this.node.getChildByName("yetNumLab").getComponent(Label);
        this.btnLayout = this.node.getChildByName("btnCont").getComponent(Layout);
        this.oneBtn = this.node.getChildByPath("btnCont/oneBtn").getComponent(Button);
        this.oneFreeNumLab = this.node.getChildByPath("btnCont/oneBtn/oneFreeNumLab").getComponent(Label);
        this.oneConsumeItem = this.node.getChildByPath("btnCont/oneBtn/oneConsumeItem").addComponent(ConsumeItem);
        this.oneAdBtn = this.node.getChildByPath("btnCont/oneAdBtn").getComponent(Button);
        this.jumpAd = this.node.getChildByPath("btnCont/oneAdBtn/cont/icon/jumpAd")
        this.oneAdBtnLab = this.node.getChildByPath("btnCont/oneAdBtn/cont/oneAdBtnLab").getComponent(Label);
        this.tenBtn = this.node.getChildByPath("btnCont/tenBtn").getComponent(Button);
        this.tenFreeNumLab = this.node.getChildByPath("btnCont/tenBtn/tenFreeNumLab").getComponent(Label);
        this.tenConsumeItem = this.node.getChildByPath("btnCont/tenBtn/tenConsumeItem").addComponent(ConsumeItem);
        this.oneHundredBtn = this.node.getChildByPath("btnCont/oneHundredBtn").getComponent(Button);
        this.oneHundredFreeNumLab = this.node.getChildByPath("btnCont/oneHundredBtn/oneHundredFreeNumLab").getComponent(Label);
        this.oneHundredConsumeItem = this.node.getChildByPath("btnCont/oneHundredBtn/oneHundredConsumeItem").addComponent(ConsumeItem);
        this.awardList = this.node.getChildByName("awardList").getComponent(AutoScroller);
        if (!this.awardList) this.awardList = this.node.getChildByName("awardList").addComponent(AutoScroller);
        this.helpBtn = this.node.getChildByName("helpBtn").getComponent(Button);
        this.awardList.SetHandle(this.updateAwardItem.bind(this));
        this.awardList.node.on('select', this.onAwardItemSelect, this);
        this.oneConsumeItem.numFormatType = ConsumeNumFormatType.ContrastHave;
        this.tenConsumeItem.numFormatType = ConsumeNumFormatType.ContrastHave;
        this.oneHundredConsumeItem.numFormatType = ConsumeNumFormatType.ContrastHave;
        this.isInit = true;
        this.tenBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.oneBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.oneAdBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.helpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.oneHundredBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.updateShow();
        EventMgr.on(Evt_AdvisterUpdate, this.onAdvisterUpdate, this);
    }
    protected update(dt: number): void {
        this.updateAdCdTime();
    }
    private updateAdCdTime(): void {
        let adId: number = this.std.shopStd.AdTime;
        // if (adId > 0) {
        //     let adData: SAdvister = PlayerData.GetAdvisterData(adId);
        //     let stdAd: StdAdvister = CfgMgr.GetAdvister(adId);
        //     let cd: number = adData.cdEndTime - game.totalTime;
        //     if (cd > 0) {
        //         this.oneAdBtnLab.string = DateUtils.FormatTime(cd / 1000, "%{mm}:%{ss}");
        //     } else {
        //         this.oneAdBtnLab.string = `免费(${adData.count}/${stdAd.Max_numb})`;
        //     }
        // }

    }
    private onAdvisterUpdate(): void {
        if (!this.node.activeInHierarchy) return;
        this.updateAddTime();
    }
    private updateAddTime(): void {
        if (!this.std) return;
        if (this.data && this.data.freeX1Count > 0) {
            this.oneAdBtn.node.active = false;
            this.oneBtn.node.active = true;
            this.oneFreeNumLab.node.active = true;
            this.oneFreeNumLab.string = `免费次数：${this.data.freeX1Count}`;
            this.oneConsumeItem.node.active = false;
        } else {
            let adId: number = this.std.shopStd.AdTime;
            if (adId > 0) {
                // let adData: SAdvister = PlayerData.GetAdvisterData(adId);
                // let stdAd: StdAdvister = CfgMgr.GetAdvister(adId);
                // if (adData.count < 1) {
                //     this.oneAdBtn.node.active = false;
                //     this.oneBtn.node.active = true;
                //     this.oneFreeNumLab.node.active = false;
                //     this.oneConsumeItem.node.active = true;
                //     let item = ItemUtil.CreateThing(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0]);
                //     this.oneConsumeItem.SetData(item);
                // } else {
                //     this.oneAdBtn.node.active = true;
                //     this.jumpAd.active = PlayerData.GetIsActivateRights(StdEquityId.Id_9) || PlayerData.GetIsActivateRights(StdEquityId.Id_10);
                //     this.oneBtn.node.active = false;
                // }
            } else {
                this.oneFreeNumLab.node.active = false;
                this.oneConsumeItem.node.active = true;
                let item = ItemUtil.CreateThing(ThingTypeName.Item, this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0]);
                this.oneConsumeItem.SetData(item);
            }
        }

    }
    private onBtnClick(btn: Button): Promise<void> {
        switch (btn) {
            case this.oneBtn:
                if (!this.data) {
                    MsgPanel.Show("商城未开启");
                    return;
                }
                if (this.data.frequency < 0) {
                    MsgPanel.Show("抽卡次数不足");
                    return;
                }
                if (this.data.freeX1Count < 1) {
                    // if(this.std.shopStd.ConvertToConsumeType && this.std.shopStd.ConvertToConsumeType.length && this.std.shopStd.ConsumeX1Type[0] != this.std.shopStd.ConvertToConsumeType[0]){
                    //     if (!ItemUtil.CheckThingConsumes(this.std.shopStd.ConsumeX1Type, this.std.shopStd.ConsumeX1ItemId, this.std.shopStd.ConsumeX1Cost, false)) {

                    //         // let count: number = ItemUtil.GetHaveThingNum(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0]);
                    //         ShopLuckyBuyPanel.Show(this.std, 1, 1);
                    //         return;
                    //     }  
                    // }else{
                    if (!ItemUtil.CheckThingConsumes(null, this.std.shopStd.ConsumeX1ItemId, this.std.shopStd.ConsumeX1Cost, true)) {
                        return;
                    }
                    // }

                }
                let shop_luck_1 = new Req["shop.protocol.dolucky"]();
                shop_luck_1.convertCount = 0;
                shop_luck_1.count = 1;
                shop_luck_1.shopIndexId = this.std.shopId;
                shop_luck_1.skipFree = false;
                Session.Send(Route["shop.protocol.dolucky"], shop_luck_1);
                break;
            case this.tenBtn:
                if (!this.data) {
                    MsgPanel.Show("商城未开启");
                    return;
                }
                if (this.data.frequency < 0) {
                    MsgPanel.Show("抽卡次数不足");
                    return;
                }
                if (this.data.freeX10Count < 1) {
                    let needCount: number = this.std.shopStd.ConsumeX1Cost[0] * 10;
                    // if(this.std.shopStd.ConvertToConsumeType && this.std.shopStd.ConvertToConsumeType.length && this.std.shopStd.ConsumeX1Type[0] != this.std.shopStd.ConvertToConsumeType[0]){
                    //     if (!ItemUtil.CheckThingConsumes(this.std.shopStd.ConsumeX1Type, this.std.shopStd.ConsumeX1ItemId, [needCount], false)) {
                    //         // let haveNum: number = ItemUtil.GetHaveThingNum(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0]);
                    //         // ShopLuckyBuyPanel.Show(this.std, 10, needCount - haveNum);
                    //         return;
                    //     }
                    // }else{
                    if (!ItemUtil.CheckThingConsumes(null, this.std.shopStd.ConsumeX1ItemId, [needCount], true)) {
                        return;
                    }
                    // }

                }
                let shop_luck_10 = new Req["shop.protocol.dolucky"]();
                shop_luck_10.convertCount = 0;
                shop_luck_10.count = 10;
                shop_luck_10.shopIndexId = this.std.shopId;
                shop_luck_10.skipFree = false;
                Session.Send(Route["shop.protocol.dolucky"], shop_luck_10);
                break;
            case this.oneHundredBtn:
                if (!this.data) {
                    MsgPanel.Show("商城未开启");
                    return;
                }
                if (this.data.frequency < 0) {
                    MsgPanel.Show("抽卡次数不足");
                    return;
                }
                let needCount: number = this.std.shopStd.ConsumeX1Cost[0] * 100;
                // if(this.std.shopStd.ConvertToConsumeType && this.std.shopStd.ConvertToConsumeType.length && this.std.shopStd.ConsumeX1Type[0] != this.std.shopStd.ConvertToConsumeType[0]){
                //     if (!ItemUtil.CheckThingConsumes(this.std.shopStd.ConsumeX1Type, this.std.shopStd.ConsumeX1ItemId, [needCount], false)) {
                //         // let haveNum: number = ItemUtil.GetHaveThingNum(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0]);
                //         // ShopLuckyBuyPanel.Show(this.std, 10, needCount - haveNum);
                //         // return;
                //     }
                // }else{
                if (!ItemUtil.CheckThingConsumes(null, this.std.shopStd.ConsumeX1ItemId, [needCount], true)) {
                    return;
                }
                // }
                let shop_luck_100 = new Req["shop.protocol.dolucky"]();
                shop_luck_100.convertCount = 0;
                shop_luck_100.count = 100;
                shop_luck_100.shopIndexId = this.std.shopId;
                shop_luck_100.skipFree = false;
                Session.Send(Route["shop.protocol.dolucky"], shop_luck_100);
                break;
            case this.helpBtn:
                // let stdPool: StdShopLuckyPool = CfgMgr.GetShopLuckyPool(this.std.shopStd.RewardPools);
                // if (stdPool) {
                //     Tips2.Show(stdPool.Instructions);
                // }

                break;
            case this.oneAdBtn:
                // let adId: number = this.std.shopStd.AdTime;
                // let adData: SAdvister = PlayerData.GetAdvisterData(adId);
                // if (!adData || adData.count < 1) {
                //     MsgPanel.Show("广告已看完");
                //     return;
                // }
                // if (game.totalTime < adData.cdEndTime) {
                //     MsgPanel.Show("冷却中，请稍后！");
                //     return;
                // }
                this.oneAdBtn.interactable = false;
                // SetNodeGray(this.oneAdBtn.node, true, true);
                // if(PlayerData.GetIsActivateRights(StdEquityId.Id_9) || PlayerData.GetIsActivateRights(StdEquityId.Id_10)){
                //     AdHelper.JumpAd(adId, "")
                // }else{
                //     console.log("AdHelper---> rewardAdId3:", GameSet.globalCfg.ad_channel.rewardAdId3);
                //     let action, errorCode, errorMsg;
                //     if (Math.abs(GameSet.globalCfg.ad_channel.rewardAdId3) == 1) {
                //         [action, errorCode, errorMsg] = await AdHelper.rewardAd(getAdcfg().rewardAdId3, adId, "");
                //     } else {
                //         [action, errorCode, errorMsg] = await AdHelper.rewardQbAd(getQbAdCfg().rewardAdId3, adId, "");
                //     }
                //     if (action == "onLoadFailed") {
                //         if (Math.abs(GameSet.globalCfg.ad_channel.rewardAdId3) == 1) {
                //             if (GameSet.globalCfg.ad_channel.rewardAdId3 > 0) GameSet.globalCfg.ad_channel.rewardAdId3 = 2;
                //             Tips.Show("广告加载失败，请稍后再试！");
                //         } else {
                //             if (GameSet.globalCfg.ad_channel.rewardAdId3 > 0) GameSet.globalCfg.ad_channel.rewardAdId3 = 1;
                //             Tips.Show("广告展示失败，请稍后再试！");
                //         }
                //     } else {
                //         // SetNodeGray(this.oneAdBtn.node, false, true);
                //     }
                //     PlayerData.SetAdvisterCd(adId);
                //     this.oneAdBtn.interactable = true;
                // }
                break;
        }
    }
    SetData(std: StdLuckyShop) {
        this.std = std;
        this.updateShow();

    }

    private updateShow() {
        if (!this.isInit || !this.std) return;
        if (this.std.shopStd.ConsumeX100Type > 0) {
            this.btnLayout.paddingLeft = 46;
            this.btnLayout.paddingRight = 46;
            this.btnLayout.spacingX = 20;
            this.oneHundredBtn.node.active = true;
            let item = ItemUtil.CreateThing(ThingTypeName.Item, this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0] * 100);
            this.oneHundredConsumeItem.SetData(item);
        } else {
            this.btnLayout.paddingLeft = 97;
            this.btnLayout.paddingRight = 97;
            this.btnLayout.spacingX = 60;
            this.oneHundredBtn.node.active = false;

        }
        this.btnLayout.updateLayout();
        this.data = PlayerData.GetShopLuckyData(this.std.shopId);

        let url = path.join("sheets/shop", this.std.shopStd.LuckyBgRes, "spriteFrame");
        ResMgr.LoadResAbSub(url, SpriteFrame, res => {
            this.bg.spriteFrame = res;
        });

        url = path.join("sheets/shop", this.std.shopStd.LuckyTitleRes, "spriteFrame");
        ResMgr.LoadResAbSub(url, SpriteFrame, res => {
            this.titleImg.spriteFrame = res;
        });
        let stdPool: StdShopLuckyPool = CfgMgr.GetShopLuckyPool(this.std.shopStd.RewardPools);
        let awardList: proto.base.IThing[] = [];
        let num: number = 100;
        if (stdPool) {
            for (let i = 0; i < stdPool.Target.length; i++) {
                let index: number = stdPool.Target[i];
                let itemType = stdPool.RewardType[index];
                let itemId = stdPool.RewardId[index];
                let itemNum = stdPool.RewardNumber[index];
                awardList.push(ItemUtil.CreateThing(itemType, itemId, itemNum));
            }
            num = stdPool.GetNumber;
        }
        this.awardList.UpdateDatas(awardList);
        this.numLab.string = num.toString();
        this.yetNumLab.string = `${Math.max(num - (this.data ? this.data.getNumber : 0))}次`;
        this.numLab.string = `${Math.max(num - (this.data ? this.data.getNumber : 0))}`;
        this.yetNumLab.string = `${Math.max(this.data ? this.data.doCount : 0)}/${this.std.shopStd.Frequency}`;
        this.updateAddTime();
        if (this.data && this.data.freeX10Count > 0) {
            this.tenFreeNumLab.node.active = true;
            this.tenFreeNumLab.string = `免费次数：${this.data.freeX10Count}`;
            this.tenConsumeItem.node.active = false;
        } else {
            this.tenFreeNumLab.node.active = false;
            this.tenConsumeItem.node.active = true;
            let item = ItemUtil.CreateThing(ThingTypeName.Item, this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0] * 10);
            this.tenConsumeItem.SetData(item);
        }

    }
    protected updateAwardItem(item: Node, data: proto.base.IThing) {
        let awardItem = item.getComponent(AwardItem);
        if (!awardItem) awardItem = item.addComponent(AwardItem);
        awardItem.SetData({ itemData: data }, true);
    }
    protected onAwardItemSelect(index: number, item: Node) {
        // console.log("onSelect", index);
        // let data: SThing = item.getComponent(AwardItem).itemData as SThing;
        // ItemTips.Show(data);
    }
}