import { CfgMgr } from "../../manager/CfgMgr";
import { Ret, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { MsgPanel } from "../common/MsgPanel";
import { PlayerData } from "../player/PlayerData";
import { OrderStateType } from "../player/PlayerStruct";
import { BuyPanel } from "./BuyPanel";
import { TradeCreateOrderPanel } from "./TradeCreateOrderPanel";
import { TradePanel } from "./TradePanel";

export class TradeModule {
    constructor() {
        //查询订单（道具）
        Session.on(Route["market.protocol.searchitemorders"], this.onItemViewRet, this);
        //上架订单(道具)
        Session.on(Route["market.protocol.makeitemorder"], this.onItemOrder, this);
        //交易行上架（道具）消息推送
        Session.on(Route.MarketItemOrderMakePush, this.onItemOrderPush, this);
        //下架订单（道具）
        Session.on(Route["market.protocol.cancelitemorder"], this.onCancelItemOrder, this);
        //交易行下架订单（道具）消息推送
        Session.on(Route.MarketItemOrderCancelledPush, this.onItemCanelOrderPush, this);
        //查询挂单（自己的订单道具）
        Session.on(Route["market.protocol.getmakeritemorders"], this.onItemGetMyOrder, this)
        //买卖订单（道具）
        Session.on(Route["market.protocol.takeitemorder"], this.onItemExchangesTradeRet, this);
        //交易行买卖（道具）消息推送
        Session.on(Route.MarketItemOrderTakePush, this.onItemExchangesTradePush, this);


        //查询订单（卡牌）
        Session.on(Route["market.protocol.searchcardorders"], this.onCardViewRet, this);
        //上架订单(求购卡牌)
        Session.on(Route["market.protocol.makecardbuyorder"], this.onCardBuyOrder, this);
        //上架订单(出售卡牌)
        Session.on(Route["market.protocol.makecardsellorder"], this.onCardSellOrder, this);
        //交易行上架订单（卡牌）消息推送
        Session.on(Route.MarketCardOrderMakePush, this.onCardOrderPush, this);
        //下架订单（卡牌）
        Session.on(Route["market.protocol.cancelcardorder"], this.onCancelCardOrder, this);
        //交易行下架订单（卡牌）消息推送
        Session.on(Route.MarketCardOrderCancelledPush, this.onCardCanelOrderPush, this);
        //查询挂单（自己的订单卡牌）
        Session.on(Route["market.protocol.getcardorders"], this.onCardGetMyOrder, this)
        //买卖订单（卡牌）
        Session.on(Route["market.protocol.takecardorder"], this.onCardExchangesTradeRet, this);
        //交易行买卖订单（卡牌）消息推送
        Session.on(Route.MarketCardOrderTakePush, this.onCardExchangesTradePush, this);

    }
    /*道具查询订单*/
    private onItemViewRet(data: any) {
        let trade_data = Ret["market.protocol.searchitemorders"].decode(data);
        console.log("筛选的交易列表",trade_data)
        if (trade_data.res.code == 200) {//请求数据成功
            PlayerData.tradeViewData = [];
            for (const iterator of trade_data.orders) {
                if(iterator.status != OrderStateType.cancelled){
                    PlayerData.tradeViewData.push(iterator)
                }
            }
            PlayerData.total = trade_data.total;
            if(trade_data.orders.length > 0){
                if(trade_data.total){
                    PlayerData.startId = [];
                    PlayerData.startId.push("")
                }
                if(PlayerData.startId.findIndex(id => id == trade_data.orders[trade_data.orders.length -1].id) == -1){
                    PlayerData.startId.push(trade_data.orders[trade_data.orders.length -1].id);
                }
                console.log("start_id",PlayerData.startId)
            }
            TradePanel.ins.onGetViewData();
        } else {     
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**道具上架订单 */
    private onItemOrder(data) {
        let trade_data = Ret["market.protocol.makeitemorder"].decode(data);
        console.log(trade_data)
        if (trade_data.res.code == 200) {
            MsgPanel.Show("上架成功")
            TradeCreateOrderPanel.Hide();
        }else{  
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**道具上架订单推送 */
    private onItemOrderPush(data: any){
        let trade_data = Ret.MarketItemOrderMakePush.decode(data);
        console.log("道具上架推送",trade_data)
        if(trade_data.playerId == PlayerData.player.playerId){
            PlayerData.tradeViewData.push(trade_data.order);
            TradePanel.ins.updateMyOrderData();
        }
      
    }

    /**道具下架订单 */
    private onCancelItemOrder(data) {
        let trade_data = Ret["market.protocol.cancelitemorder"].decode(data);
        console.log(trade_data)
        if (trade_data.res.code == 200) {
            MsgPanel.Show("下架成功")
        }else{  
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**道具下架订单推送 */
    private onItemCanelOrderPush(data: any) {
        let trade_data = Ret.MarketItemOrderCancelledPush.decode(data);
        console.log(trade_data)
        if(trade_data.playerId == PlayerData.player.playerId){
            let index = PlayerData.tradeViewData.findIndex(item=>item.id == trade_data.order.id)
            if(index != -1){
                PlayerData.tradeViewData.splice(index, 1);
                TradePanel.ins.updateMyOrderData();
            }
        }
    }

    /**道具获取自己的订单列表 */
    private onItemGetMyOrder(data) {
        let trade_data = Ret["market.protocol.getmakeritemorders"].decode(data);
        console.log("获取自己的订单列表",trade_data)
        if (trade_data.res.code == 200) {
            PlayerData.tradeViewData = [];
            for (const iterator of trade_data.orders) {
                if(iterator.status != OrderStateType.cancelled){     
                    if(PlayerData.tradeViewData.findIndex(order_data =>order_data.id == iterator.id) == -1){
                        PlayerData.tradeViewData.push(iterator)
                    }
                }
            }
            TradePanel.ins.updateMyOrderData();
        }  else {     
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**道具交易返回 */
    private onItemExchangesTradeRet(data: any) {
        let trade_data = Ret["market.protocol.takeitemorder"].decode(data);
        console.log(trade_data)
        if(trade_data.res.code == 200){
            BuyPanel.Hide();
            MsgPanel.Show("交易成功")
        }else{
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
            BuyPanel.Hide();
            if(trade_data.res.code == 1802){
                TradePanel.ins.SendBuyOrSellType();
            }
        }
    }

    /**道具交易推送 */
    private onItemExchangesTradePush(data: any){
        let trade_data = Ret.MarketItemOrderTakePush.decode(data);
        console.log("交易推送",trade_data)   
        if(trade_data.playerId == PlayerData.player.playerId){ 
            let order = trade_data.order
            for (const iterator of PlayerData.tradeViewData) {
                if(iterator.id == order.id){
                    iterator.createdAt = order.createdAt;
                    iterator.currency = order.currency;
                    iterator.expiresAt = order.expiresAt;
                    iterator.groupNum = order.groupNum;
                    iterator.id = order.id;
                    iterator.itemId = order.itemId;
                    iterator.itemType = order.itemType;
                    iterator.makerId = order.makerId;
                    iterator.orderId = order.orderId;
                    iterator.orderType = order.orderType;
                    iterator.price = order.price;
                    iterator.quantity = order.quantity;
                    iterator.quantityRemaining = order.quantityRemaining;
                    iterator.status = order.status;
                    iterator.totalPrice = order.totalPrice;
                    iterator.updatedAt = order.updatedAt;
                    break;
                }
            }
            TradePanel.ins.onGetViewData();
        }
    }





    /*卡牌查询订单*/
    private onCardViewRet(data: any) {
        let trade_data = Ret["market.protocol.searchcardorders"].decode(data);
        console.log("筛选的交易列表",trade_data)
        if (trade_data.res.code == 200) {//请求数据成功
            PlayerData.tradeCardViewData = [];
            for (const iterator of trade_data.orders) {
                if(iterator.status != OrderStateType.cancelled){
                    PlayerData.tradeCardViewData.push(iterator)
                }
            }
            PlayerData.total = trade_data.total;
            if(trade_data.orders.length > 0){
                if(trade_data.total){
                    PlayerData.startId = [];
                    PlayerData.startId.push("")
                }
                if(PlayerData.startId.findIndex(id => id == trade_data.orders[trade_data.orders.length -1].id) == -1){
                    PlayerData.startId.push(trade_data.orders[trade_data.orders.length -1].id);
                }
                console.log("start_id",PlayerData.startId)
            }
            TradePanel.ins.onGetViewData();
        } else {     
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**卡牌上架求购返回订单 */
    private onCardBuyOrder(data) {
        let trade_data = Ret["market.protocol.makecardbuyorder"].decode(data);
        console.log(trade_data)
        if (trade_data.res.code == 200) {
            MsgPanel.Show("上架成功")
            TradeCreateOrderPanel.Hide();
        }else if(trade_data.res.code == 1808){
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(1808000))
        }else{  
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**卡牌上架出售返会订单 */
    private onCardSellOrder(data) {
        let trade_data = Ret["market.protocol.makecardsellorder"].decode(data);
        console.log(trade_data)
        if (trade_data.res.code == 200) {
            MsgPanel.Show("上架成功")
            TradeCreateOrderPanel.Hide();
        }else if(trade_data.res.code == 1808){
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(1808000))
        }else{  
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**卡牌上架订单推送 */
    private onCardOrderPush(data: any){
        let trade_data = Ret.MarketCardOrderMakePush.decode(data);
        console.log("卡牌上架推送",trade_data)
        if(trade_data.playerId == PlayerData.player.playerId){
            PlayerData.tradeCardViewData.push(trade_data.order);
            TradePanel.ins.updateMyOrderData();
        }
      
    }

    /**卡牌下架订单 */
    private onCancelCardOrder(data) {
        let trade_data = Ret["market.protocol.cancelcardorder"].decode(data);
        console.log(trade_data)
        if (trade_data.res.code == 200) {
            MsgPanel.Show("下架成功")
        }else{  
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**卡牌下架订单推送 */
    private onCardCanelOrderPush(data: any) {
        let trade_data = Ret.MarketCardOrderCancelledPush.decode(data);
        console.log(trade_data)
        if(trade_data.playerId == PlayerData.player.playerId){
            let index = PlayerData.tradeCardViewData.findIndex(item=>item.id == trade_data.order.id)
            if(index != -1){
                PlayerData.tradeCardViewData.splice(index, 1);
                TradePanel.ins.updateMyOrderData();
            }
        }
    }

    /**卡牌获取自己的订单列表 */
    private onCardGetMyOrder(data) {
        let trade_data = Ret["market.protocol.getcardorders"].decode(data);
        console.log("获取自己的订单列表",trade_data)
        if (trade_data.res.code == 200) {
            PlayerData.tradeCardViewData = [];
            for (const iterator of trade_data.orders) {
                if(iterator.status != OrderStateType.cancelled){
                    if(PlayerData.tradeCardViewData.findIndex(order_data =>order_data.id == iterator.id) == -1){
                        PlayerData.tradeCardViewData.push(iterator)
                    }
                }
            }
            TradePanel.ins.updateMyOrderData();
        }else{
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
    }

    /**卡牌交易返回 */
    private onCardExchangesTradeRet(data: any) {
        let trade_data = Ret["market.protocol.takecardorder"].decode(data);
        console.log(trade_data)
        if(trade_data.res.code == 200){
            MsgPanel.Show("交易成功")
        }else{
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(trade_data.res.code))
        }
        BuyPanel.Hide();
    }

    /**卡牌交易推送 */
    private onCardExchangesTradePush(data: any){
        let trade_data = Ret.MarketCardOrderTakePush.decode(data);
        console.log("交易推送",trade_data)
        if(trade_data.playerId == PlayerData.player.playerId){
            let order = trade_data.order
            for (const iterator of PlayerData.tradeCardViewData) {
                if(iterator.id == order.id){
                    iterator.id = order.id;
                    iterator.orderType = order.orderType;
                    iterator.orderId = order.orderId;
                    iterator.makerId = order.makerId;
                    iterator.takerId = order.takerId;
                    iterator.card = order.card;
                    iterator.cardClass = order.cardClass;
                    iterator.cardRarity =order.cardRarity
                    iterator.goodsGroup =order.goodsGroup
                    iterator.currency = order.currency;
                    iterator.price = order.price;
                    iterator.status = order.status;
                    iterator.createdAt = order.createdAt;
                    iterator.expiresAt = order.expiresAt;
                    iterator.updatedAt = order.updatedAt;
                    break;
                }
            }
            TradePanel.ins.onGetViewData();
        }
    }
}