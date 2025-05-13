System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, Evt_ShopLuckyGet, Evt_ShopUpdate, Ret, Route, Session, BeforeGameUtils, MsgPanel, RewardTips, PlayerData, ShopModule, _crd, ShopErrorCodeType;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ShopLuckyGet(extras) {
    _reporterNs.report("Evt_ShopLuckyGet", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ShopUpdate(extras) {
    _reporterNs.report("Evt_ShopUpdate", "../../manager/EventMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "../../utils/BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("ShopModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_ShopLuckyGet = _unresolved_2.Evt_ShopLuckyGet;
      Evt_ShopUpdate = _unresolved_2.Evt_ShopUpdate;
    }, function (_unresolved_3) {
      Ret = _unresolved_3.Ret;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      BeforeGameUtils = _unresolved_5.BeforeGameUtils;
    }, function (_unresolved_6) {
      MsgPanel = _unresolved_6.MsgPanel;
    }, function (_unresolved_7) {
      RewardTips = _unresolved_7.RewardTips;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f2220V1XpBw692NPr8aQY9", "ShopModule", undefined);

      /**错误码类型*/
      _export("ShopErrorCodeType", ShopErrorCodeType = /*#__PURE__*/function (ShopErrorCodeType) {
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopInvalidShopIndexID"] = 100] = "ErrorShopInvalidShopIndexID";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopInvalidShopIndexType"] = 101] = "ErrorShopInvalidShopIndexType";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopInvalidShopNotFindItem"] = 102] = "ErrorShopInvalidShopNotFindItem";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopInvalidShopInsufficientBuyCount"] = 103] = "ErrorShopInvalidShopInsufficientBuyCount";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopShopLuckyFrequencyMax"] = 104] = "ErrorShopShopLuckyFrequencyMax";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopBuyItemHasExpired"] = 105] = "ErrorShopBuyItemHasExpired";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopConsumeItemFailed"] = 106] = "ErrorShopConsumeItemFailed";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopCanNotManualRefresh"] = 107] = "ErrorShopCanNotManualRefresh";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopHasExpired"] = 108] = "ErrorShopHasExpired";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopBuyPaymentCallFailed"] = 120] = "ErrorShopBuyPaymentCallFailed";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopBuyPaymentCallSuccess"] = 121] = "ErrorShopBuyPaymentCallSuccess";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopBuyPaymentFailed"] = 122] = "ErrorShopBuyPaymentFailed";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopNotOpen"] = 123] = "ErrorShopNotOpen";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopBuyPending"] = 124] = "ErrorShopBuyPending";
        ShopErrorCodeType[ShopErrorCodeType["ErrorShopShopLuckyGlobalFrequencyMax"] = 126] = "ErrorShopShopLuckyGlobalFrequencyMax";
        return ShopErrorCodeType;
      }({}));

      _export("ShopModule", ShopModule = class ShopModule {
        constructor() {
          this.errorStr = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj(ShopErrorCodeType.ErrorShopInvalidShopIndexID, "无效的商店索引ID", ShopErrorCodeType.ErrorShopInvalidShopIndexType, "无效的商店类型", ShopErrorCodeType.ErrorShopInvalidShopNotFindItem, "无效的商店道具", ShopErrorCodeType.ErrorShopInvalidShopInsufficientBuyCount, "无效的商店购买数量", ShopErrorCodeType.ErrorShopShopLuckyFrequencyMax, "已到达商店抽奖次数上限", ShopErrorCodeType.ErrorShopBuyItemHasExpired, "道具已过期", ShopErrorCodeType.ErrorShopConsumeItemFailed, "消耗道具失败", ShopErrorCodeType.ErrorShopCanNotManualRefresh, "不允许手动刷新的商店", ShopErrorCodeType.ErrorShopHasExpired, "商店已过期", ShopErrorCodeType.ErrorShopBuyPaymentCallFailed, "支付调用失败", ShopErrorCodeType.ErrorShopBuyPaymentFailed, "支付失败", ShopErrorCodeType.ErrorShopNotOpen, "商城未开启", ShopErrorCodeType.ErrorShopBuyPending, "有支付中的订单", ShopErrorCodeType.ErrorShopShopLuckyGlobalFrequencyMax, "已到达商店抽奖全局次数上限");
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.getindex"], this.onShopGetIndexRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.buyitem"], this.onShopBuyItemRet, this); // Session.on(MsgTypeRet.ShopManualRefreshRet, this.onShopRefreshRet, this);

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.dolucky"], this.onShopDoLotteryRet, this); // Session.on(MsgTypeRet.ShopConvertLuckyItemRet, this.onShopConvertLotteryItemRet, this);
          // Session.on(MsgTypeRet.ShopBuyWithPaymentSuccess, this.onShopGetIndexRet, this);
        }

        onShopGetIndexRet(data) {
          var shop_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["shop.protocol.getindex"].decode(data);
          console.log(shop_data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).SetShopData(shop_data.shopIndexContent);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_ShopUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ShopUpdate({
            error: Error()
          }), Evt_ShopUpdate) : Evt_ShopUpdate);
        }

        onShopBuyItemRet(data) {
          var shop_buy_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["shop.protocol.buyitem"].decode(data);
          console.log(shop_buy_data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).UpdateShopData(shop_buy_data.shopIndexContent);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_ShopUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ShopUpdate({
            error: Error()
          }), Evt_ShopUpdate) : Evt_ShopUpdate);

          if (shop_buy_data.newThings && shop_buy_data.newThings.length) {
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(shop_buy_data.newThings);
          }
        }

        onShopRefreshRet(data) {
          if (data.code) {
            this.showErrorCode(data.code);
            return;
          } // PlayerData.SetShopData([data.shop_index_content]);


          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_ShopUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ShopUpdate({
            error: Error()
          }), Evt_ShopUpdate) : Evt_ShopUpdate);
        }

        onShopDoLotteryRet(data) {
          var luck_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["shop.protocol.dolucky"].decode(data);
          console.log(luck_data);

          if (luck_data.res.code == 200) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).UpdateShopData(luck_data.shopIndexContent);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_ShopUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ShopUpdate({
              error: Error()
            }), Evt_ShopUpdate) : Evt_ShopUpdate); // if (luck_data.newThings && luck_data.newThings.length) {
            //     EventMgr.emit(Evt_ShopLuckyGet, luck_data.newThings, luck_data.shopIndexContent.lucky.luckyId);
            // }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_ShopLuckyGet === void 0 ? (_reportPossibleCrUseOfEvt_ShopLuckyGet({
              error: Error()
            }), Evt_ShopLuckyGet) : Evt_ShopLuckyGet, luck_data.newThings, luck_data.shopIndexContent.lucky.luckyId);
          }
        }

        onShopConvertLotteryItemRet(data) {
          if (data.code) {
            this.showErrorCode(data.code);
            return;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_ShopUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ShopUpdate({
            error: Error()
          }), Evt_ShopUpdate) : Evt_ShopUpdate);

          if (data.new_things && data.new_things.data && data.new_things.data.length) {
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(data.new_things.data);
          }
        }

        showErrorCode(code) {
          var errorStr = this.errorStr[code];

          if (errorStr) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(errorStr);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d111db3925cf3d4661b1247b8add0ec5cfb1c491.js.map