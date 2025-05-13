import { EventMgr, Evt_ShopLuckyGet, Evt_ShopUpdate } from "../../manager/EventMgr";
import { Ret, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { BeforeGameUtils } from "../../utils/BeforeGameUtils";
import { MsgPanel } from "../common/MsgPanel";
import { RewardTips } from "../common/RewardTips";
import { PlayerData } from "../player/PlayerData";

/**错误码类型*/
export enum ShopErrorCodeType {
    ErrorShopInvalidShopIndexID = 100, // 无效的商店索引ID
    ErrorShopInvalidShopIndexType = 101, // 无效的商店类型
    ErrorShopInvalidShopNotFindItem = 102, // 无效的商店商品
    ErrorShopInvalidShopInsufficientBuyCount = 103, // 无效的商店购买数量
    ErrorShopShopLuckyFrequencyMax = 104, // 已到达商店抽奖次数上限
    ErrorShopBuyItemHasExpired = 105, // 商品已过期
    ErrorShopConsumeItemFailed = 106, // 消耗道具失败
    ErrorShopCanNotManualRefresh = 107, // 不允许手动刷新的商店
    ErrorShopHasExpired = 108, // 商店已过期
    ErrorShopBuyPaymentCallFailed = 120,//支付调用失败
    ErrorShopBuyPaymentCallSuccess = 121,//
    ErrorShopBuyPaymentFailed = 122,//支付失败
    ErrorShopNotOpen = 123,//商城未开启
    ErrorShopBuyPending = 124,//有支付中的订单
    ErrorShopShopLuckyGlobalFrequencyMax = 126,
}
export class ShopModule {
    private errorStr: { [key: string]: string } = BeforeGameUtils.toHashMapObj(
        ShopErrorCodeType.ErrorShopInvalidShopIndexID, "无效的商店索引ID",
        ShopErrorCodeType.ErrorShopInvalidShopIndexType, "无效的商店类型",
        ShopErrorCodeType.ErrorShopInvalidShopNotFindItem, "无效的商店道具",
        ShopErrorCodeType.ErrorShopInvalidShopInsufficientBuyCount, "无效的商店购买数量",
        ShopErrorCodeType.ErrorShopShopLuckyFrequencyMax, "已到达商店抽奖次数上限",
        ShopErrorCodeType.ErrorShopBuyItemHasExpired, "道具已过期",
        ShopErrorCodeType.ErrorShopConsumeItemFailed, "消耗道具失败",
        ShopErrorCodeType.ErrorShopCanNotManualRefresh, "不允许手动刷新的商店",
        ShopErrorCodeType.ErrorShopHasExpired, "商店已过期",
        ShopErrorCodeType.ErrorShopBuyPaymentCallFailed, "支付调用失败",
        ShopErrorCodeType.ErrorShopBuyPaymentFailed, "支付失败",
        ShopErrorCodeType.ErrorShopNotOpen, "商城未开启",
        ShopErrorCodeType.ErrorShopBuyPending, "有支付中的订单",
        ShopErrorCodeType.ErrorShopShopLuckyGlobalFrequencyMax, "已到达商店抽奖全局次数上限",

    );

    constructor() {
        Session.on(Route["shop.protocol.getindex"], this.onShopGetIndexRet, this);
        Session.on(Route["shop.protocol.buyitem"], this.onShopBuyItemRet, this);
        // Session.on(MsgTypeRet.ShopManualRefreshRet, this.onShopRefreshRet, this);
        Session.on(Route["shop.protocol.dolucky"], this.onShopDoLotteryRet, this);
        // Session.on(MsgTypeRet.ShopConvertLuckyItemRet, this.onShopConvertLotteryItemRet, this);
        // Session.on(MsgTypeRet.ShopBuyWithPaymentSuccess, this.onShopGetIndexRet, this);
    }

    onShopGetIndexRet(data: any): void {
        let shop_data = Ret["shop.protocol.getindex"].decode(data);
        console.log(shop_data);
        PlayerData.SetShopData(shop_data.shopIndexContent);
        EventMgr.emit(Evt_ShopUpdate);
    }
    onShopBuyItemRet(data: any): void {
        let shop_buy_data = Ret["shop.protocol.buyitem"].decode(data);
        console.log(shop_buy_data)
        PlayerData.UpdateShopData(shop_buy_data.shopIndexContent);
        EventMgr.emit(Evt_ShopUpdate);
        if (shop_buy_data.newThings && shop_buy_data.newThings.length) {
            RewardTips.Show(shop_buy_data.newThings);
        }
    }
    onShopRefreshRet(data: any): void {
        if (data.code) {
            this.showErrorCode(data.code);
            return;
        }
        // PlayerData.SetShopData([data.shop_index_content]);
        EventMgr.emit(Evt_ShopUpdate);
    }
    onShopDoLotteryRet(data: any): void {
        let luck_data = Ret["shop.protocol.dolucky"].decode(data);
        console.log(luck_data)
        if (luck_data.res.code == 200) {
            PlayerData.UpdateShopData(luck_data.shopIndexContent);
            EventMgr.emit(Evt_ShopUpdate);
            // if (luck_data.newThings && luck_data.newThings.length) {
            //     EventMgr.emit(Evt_ShopLuckyGet, luck_data.newThings, luck_data.shopIndexContent.lucky.luckyId);
            // }
            EventMgr.emit(Evt_ShopLuckyGet, luck_data.newThings, luck_data.shopIndexContent.lucky.luckyId);
        }

    }
    onShopConvertLotteryItemRet(data: any): void {
        if (data.code) {
            this.showErrorCode(data.code);
            return;
        }
        EventMgr.emit(Evt_ShopUpdate);
        if (data.new_things && data.new_things.data && data.new_things.data.length) {
            RewardTips.Show(data.new_things.data);
        }
    }

    private showErrorCode(code: number): void {
        let errorStr: string = this.errorStr[code];
        if (errorStr) {
            MsgPanel.Show(errorStr);
        }
    }
}