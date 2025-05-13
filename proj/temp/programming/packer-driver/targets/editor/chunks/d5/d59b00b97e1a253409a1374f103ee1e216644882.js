System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CfgMgr, Ret, Route, Session, MsgPanel, PlayerData, OrderStateType, BuyPanel, TradeCreateOrderPanel, TradePanel, TradeModule, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrderStateType(extras) {
    _reporterNs.report("OrderStateType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyPanel(extras) {
    _reporterNs.report("BuyPanel", "./BuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradeCreateOrderPanel(extras) {
    _reporterNs.report("TradeCreateOrderPanel", "./TradeCreateOrderPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradePanel(extras) {
    _reporterNs.report("TradePanel", "./TradePanel", _context.meta, extras);
  }

  _export("TradeModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Ret = _unresolved_3.Ret;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      MsgPanel = _unresolved_5.MsgPanel;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      OrderStateType = _unresolved_7.OrderStateType;
    }, function (_unresolved_8) {
      BuyPanel = _unresolved_8.BuyPanel;
    }, function (_unresolved_9) {
      TradeCreateOrderPanel = _unresolved_9.TradeCreateOrderPanel;
    }, function (_unresolved_10) {
      TradePanel = _unresolved_10.TradePanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85f0c0deytHJbpPS5Zn+2ij", "TradeModule", undefined);

      _export("TradeModule", TradeModule = class TradeModule {
        constructor() {
          //查询订单（道具）
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.searchitemorders"], this.onItemViewRet, this); //上架订单(道具)

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.makeitemorder"], this.onItemOrder, this); //交易行上架（道具）消息推送

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).MarketItemOrderMakePush, this.onItemOrderPush, this); //下架订单（道具）

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.cancelitemorder"], this.onCancelItemOrder, this); //交易行下架订单（道具）消息推送

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).MarketItemOrderCancelledPush, this.onItemCanelOrderPush, this); //查询挂单（自己的订单道具）

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.getmakeritemorders"], this.onItemGetMyOrder, this); //买卖订单（道具）

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.takeitemorder"], this.onItemExchangesTradeRet, this); //交易行买卖（道具）消息推送

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).MarketItemOrderTakePush, this.onItemExchangesTradePush, this); //查询订单（卡牌）

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.searchcardorders"], this.onCardViewRet, this); //上架订单(求购卡牌)

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.makecardbuyorder"], this.onCardBuyOrder, this); //上架订单(出售卡牌)

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.makecardsellorder"], this.onCardSellOrder, this); //交易行上架订单（卡牌）消息推送

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).MarketCardOrderMakePush, this.onCardOrderPush, this); //下架订单（卡牌）

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.cancelcardorder"], this.onCancelCardOrder, this); //交易行下架订单（卡牌）消息推送

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).MarketCardOrderCancelledPush, this.onCardCanelOrderPush, this); //查询挂单（自己的订单卡牌）

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.getcardorders"], this.onCardGetMyOrder, this); //买卖订单（卡牌）

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.takecardorder"], this.onCardExchangesTradeRet, this); //交易行买卖订单（卡牌）消息推送

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).MarketCardOrderTakePush, this.onCardExchangesTradePush, this);
        }
        /*道具查询订单*/


        onItemViewRet(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.searchitemorders"].decode(data);
          console.log("筛选的交易列表", trade_data);

          if (trade_data.res.code == 200) {
            //请求数据成功
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeViewData = [];

            for (const iterator of trade_data.orders) {
              if (iterator.status != (_crd && OrderStateType === void 0 ? (_reportPossibleCrUseOfOrderStateType({
                error: Error()
              }), OrderStateType) : OrderStateType).cancelled) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).tradeViewData.push(iterator);
              }
            }

            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).total = trade_data.total;

            if (trade_data.orders.length > 0) {
              if (trade_data.total) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).startId = [];
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).startId.push("");
              }

              if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).startId.findIndex(id => id == trade_data.orders[trade_data.orders.length - 1].id) == -1) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).startId.push(trade_data.orders[trade_data.orders.length - 1].id);
              }

              console.log("start_id", (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).startId);
            }

            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.onGetViewData();
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**道具上架订单 */


        onItemOrder(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.makeitemorder"].decode(data);
          console.log(trade_data);

          if (trade_data.res.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("上架成功");
            (_crd && TradeCreateOrderPanel === void 0 ? (_reportPossibleCrUseOfTradeCreateOrderPanel({
              error: Error()
            }), TradeCreateOrderPanel) : TradeCreateOrderPanel).Hide();
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**道具上架订单推送 */


        onItemOrderPush(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).MarketItemOrderMakePush.decode(data);
          console.log("道具上架推送", trade_data);

          if (trade_data.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeViewData.push(trade_data.order);
            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.updateMyOrderData();
          }
        }
        /**道具下架订单 */


        onCancelItemOrder(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.cancelitemorder"].decode(data);
          console.log(trade_data);

          if (trade_data.res.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("下架成功");
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**道具下架订单推送 */


        onItemCanelOrderPush(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).MarketItemOrderCancelledPush.decode(data);
          console.log(trade_data);

          if (trade_data.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId) {
            let index = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeViewData.findIndex(item => item.id == trade_data.order.id);

            if (index != -1) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).tradeViewData.splice(index, 1);
              (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
                error: Error()
              }), TradePanel) : TradePanel).ins.updateMyOrderData();
            }
          }
        }
        /**道具获取自己的订单列表 */


        onItemGetMyOrder(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.getmakeritemorders"].decode(data);
          console.log("获取自己的订单列表", trade_data);

          if (trade_data.res.code == 200) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeViewData = [];

            for (const iterator of trade_data.orders) {
              if (iterator.status != (_crd && OrderStateType === void 0 ? (_reportPossibleCrUseOfOrderStateType({
                error: Error()
              }), OrderStateType) : OrderStateType).cancelled) {
                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).tradeViewData.findIndex(order_data => order_data.id == iterator.id) == -1) {
                  (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).tradeViewData.push(iterator);
                }
              }
            }

            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.updateMyOrderData();
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**道具交易返回 */


        onItemExchangesTradeRet(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.takeitemorder"].decode(data);
          console.log(trade_data);

          if (trade_data.res.code == 200) {
            (_crd && BuyPanel === void 0 ? (_reportPossibleCrUseOfBuyPanel({
              error: Error()
            }), BuyPanel) : BuyPanel).Hide();
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("交易成功");
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
            (_crd && BuyPanel === void 0 ? (_reportPossibleCrUseOfBuyPanel({
              error: Error()
            }), BuyPanel) : BuyPanel).Hide();

            if (trade_data.res.code == 1802) {
              (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
                error: Error()
              }), TradePanel) : TradePanel).ins.SendBuyOrSellType();
            }
          }
        }
        /**道具交易推送 */


        onItemExchangesTradePush(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).MarketItemOrderTakePush.decode(data);
          console.log("交易推送", trade_data);

          if (trade_data.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId) {
            let order = trade_data.order;

            for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeViewData) {
              if (iterator.id == order.id) {
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

            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.onGetViewData();
          }
        }
        /*卡牌查询订单*/


        onCardViewRet(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.searchcardorders"].decode(data);
          console.log("筛选的交易列表", trade_data);

          if (trade_data.res.code == 200) {
            //请求数据成功
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeCardViewData = [];

            for (const iterator of trade_data.orders) {
              if (iterator.status != (_crd && OrderStateType === void 0 ? (_reportPossibleCrUseOfOrderStateType({
                error: Error()
              }), OrderStateType) : OrderStateType).cancelled) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).tradeCardViewData.push(iterator);
              }
            }

            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).total = trade_data.total;

            if (trade_data.orders.length > 0) {
              if (trade_data.total) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).startId = [];
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).startId.push("");
              }

              if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).startId.findIndex(id => id == trade_data.orders[trade_data.orders.length - 1].id) == -1) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).startId.push(trade_data.orders[trade_data.orders.length - 1].id);
              }

              console.log("start_id", (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).startId);
            }

            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.onGetViewData();
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**卡牌上架求购返回订单 */


        onCardBuyOrder(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.makecardbuyorder"].decode(data);
          console.log(trade_data);

          if (trade_data.res.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("上架成功");
            (_crd && TradeCreateOrderPanel === void 0 ? (_reportPossibleCrUseOfTradeCreateOrderPanel({
              error: Error()
            }), TradeCreateOrderPanel) : TradeCreateOrderPanel).Hide();
          } else if (trade_data.res.code == 1808) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(1808000));
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**卡牌上架出售返会订单 */


        onCardSellOrder(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.makecardsellorder"].decode(data);
          console.log(trade_data);

          if (trade_data.res.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("上架成功");
            (_crd && TradeCreateOrderPanel === void 0 ? (_reportPossibleCrUseOfTradeCreateOrderPanel({
              error: Error()
            }), TradeCreateOrderPanel) : TradeCreateOrderPanel).Hide();
          } else if (trade_data.res.code == 1808) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(1808000));
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**卡牌上架订单推送 */


        onCardOrderPush(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).MarketCardOrderMakePush.decode(data);
          console.log("卡牌上架推送", trade_data);

          if (trade_data.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeCardViewData.push(trade_data.order);
            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.updateMyOrderData();
          }
        }
        /**卡牌下架订单 */


        onCancelCardOrder(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.cancelcardorder"].decode(data);
          console.log(trade_data);

          if (trade_data.res.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("下架成功");
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**卡牌下架订单推送 */


        onCardCanelOrderPush(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).MarketCardOrderCancelledPush.decode(data);
          console.log(trade_data);

          if (trade_data.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId) {
            let index = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeCardViewData.findIndex(item => item.id == trade_data.order.id);

            if (index != -1) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).tradeCardViewData.splice(index, 1);
              (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
                error: Error()
              }), TradePanel) : TradePanel).ins.updateMyOrderData();
            }
          }
        }
        /**卡牌获取自己的订单列表 */


        onCardGetMyOrder(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.getcardorders"].decode(data);
          console.log("获取自己的订单列表", trade_data);

          if (trade_data.res.code == 200) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeCardViewData = [];

            for (const iterator of trade_data.orders) {
              if (iterator.status != (_crd && OrderStateType === void 0 ? (_reportPossibleCrUseOfOrderStateType({
                error: Error()
              }), OrderStateType) : OrderStateType).cancelled) {
                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).tradeCardViewData.findIndex(order_data => order_data.id == iterator.id) == -1) {
                  (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).tradeCardViewData.push(iterator);
                }
              }
            }

            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.updateMyOrderData();
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }
        }
        /**卡牌交易返回 */


        onCardExchangesTradeRet(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["market.protocol.takecardorder"].decode(data);
          console.log(trade_data);

          if (trade_data.res.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("交易成功");
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(trade_data.res.code));
          }

          (_crd && BuyPanel === void 0 ? (_reportPossibleCrUseOfBuyPanel({
            error: Error()
          }), BuyPanel) : BuyPanel).Hide();
        }
        /**卡牌交易推送 */


        onCardExchangesTradePush(data) {
          let trade_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).MarketCardOrderTakePush.decode(data);
          console.log("交易推送", trade_data);

          if (trade_data.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId) {
            let order = trade_data.order;

            for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).tradeCardViewData) {
              if (iterator.id == order.id) {
                iterator.id = order.id;
                iterator.orderType = order.orderType;
                iterator.orderId = order.orderId;
                iterator.makerId = order.makerId;
                iterator.takerId = order.takerId;
                iterator.card = order.card;
                iterator.cardClass = order.cardClass;
                iterator.cardRarity = order.cardRarity;
                iterator.goodsGroup = order.goodsGroup;
                iterator.currency = order.currency;
                iterator.price = order.price;
                iterator.status = order.status;
                iterator.createdAt = order.createdAt;
                iterator.expiresAt = order.expiresAt;
                iterator.updatedAt = order.updatedAt;
                break;
              }
            }

            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.onGetViewData();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d59b00b97e1a253409a1374f103ee1e216644882.js.map