System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CfgMgr, ItemType, EventMgr, Evt_GetReward, Evt_Item_Change, Session, RewardTips, PlayerData, Ret, Route, BagModule, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_GetReward(extras) {
    _reporterNs.report("Evt_GetReward", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  _export("BagModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
      ItemType = _unresolved_2.ItemType;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
      Evt_GetReward = _unresolved_3.Evt_GetReward;
      Evt_Item_Change = _unresolved_3.Evt_Item_Change;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      RewardTips = _unresolved_5.RewardTips;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      Ret = _unresolved_7.Ret;
      Route = _unresolved_7.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94dfaD2O7tEArJl7m2rEFDc", "BagModule", undefined);

      _export("BagModule", BagModule = class BagModule {
        constructor() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerItemsChangedPush, this.onItemsChange, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["player.protocol.openbox"], this.getOpenBoxReward, this);
        }

        onItemsChange(data) {
          let item_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerItemsChangedPush.decode(data);
          console.log("道具变更后端数据推送", item_data);
          let changeMap = {};

          for (const item of item_data.list) {
            if (item.countAfter > 0) {
              let type = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(item.itemId).Itemtpye;

              if (type == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).money) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).items[item.itemId] = item.countAfter / 10000;
              } else {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).items[item.itemId] = item.countAfter;
              }
            } else {
              delete (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).items[item.itemId];
            }

            if (!changeMap[item.itemId]) {
              changeMap[item.itemId] = item.count;
            }
          }

          console.log((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).items);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, changeMap);
        }

        getOpenBoxReward(data) {
          let open_box_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["player.protocol.openbox"].decode(data);
          console.log(open_box_data);

          if (open_box_data.things && open_box_data.things) {
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(open_box_data.things);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_GetReward === void 0 ? (_reportPossibleCrUseOfEvt_GetReward({
              error: Error()
            }), Evt_GetReward) : Evt_GetReward, data);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e0aaf66ac74f42574164498f904e9578f11535d0.js.map