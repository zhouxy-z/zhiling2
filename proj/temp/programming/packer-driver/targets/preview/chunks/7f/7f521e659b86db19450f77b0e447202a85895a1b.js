System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, PlayerData, LocalStorage, EventMgr, battleDataMgr, ConditionMgr, _crd, Condition;

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../module/player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../module/battle/BattleDataMgr", _context.meta, extras);
  }

  _export("ConditionMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.PlayerData;
    }, function (_unresolved_3) {
      LocalStorage = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      battleDataMgr = _unresolved_5.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0a95Px2OJBSZZ2L37ihb39", "ConditionMgr", undefined);

      __checkObsolete__(['find']);

      _export("ConditionMgr", ConditionMgr = class ConditionMgr {
        static init() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).AddChan('condition_check', this.Check, this);
        }
        /**
         * 检测条件
         * @param ConditionId 
         * @param values 
         * @returns 
         */


        static Check(ConditionId) {
          for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
          }

          if (ConditionId == undefined || !(values != null && values.length)) return false;

          switch (ConditionId) {
            case Condition.Lock:
              return "未开放";

            case Condition.HasCard:
              // 判断是否有指定品质的卡
              var cards = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCardDataByCfgId(values[0]);

              if (cards != null && cards.length) {
                var quality = values[1] || 0,
                    count = values[2] || 1;

                for (var card of cards) {
                  if (card && (!quality || card.quality >= quality)) {
                    count--;
                  }
                }

                return count <= 0;
              }

              return false;

            case Condition.Collect:
              break;

            case Condition.Level:
              if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).player.level < values[0]) return false;
              break;

            case Condition.Item:
              if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetItemCount(values[0]) < (values[1] || 1)) return false;
              break;

            case Condition.Guide:
              if (!(_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).GetNumber("guide" + values[0], 0)) return false;
              break;

            case Condition.UI:
              if (!values[0] || !String(values[0])) return false;
              var target = find(values[0].toString());
              if (!target || !target.activeInHierarchy) return false;
              break;

            case Condition.UNUI:
              if (!values[0] || !String(values[0])) return false;
              var target1 = find(values[0].toString());
              if (target1 && target1.activeInHierarchy) return false;
              break;

            case Condition.Round:
              if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).roomData || (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).curRound != Number(values[0])) return false;
              break;
          }

          return true;
        }

      });
      /**
       * 条件枚举
       */


      _export("Condition", Condition = /*#__PURE__*/function (Condition) {
        Condition[Condition["Lock"] = 0] = "Lock";
        Condition[Condition["HasCard"] = 1] = "HasCard";
        Condition[Condition["Collect"] = 2] = "Collect";
        Condition[Condition["Level"] = 3] = "Level";
        Condition[Condition["Item"] = 4] = "Item";
        Condition[Condition["Guide"] = 5] = "Guide";
        Condition[Condition["UI"] = 6] = "UI";
        Condition[Condition["UNUI"] = 7] = "UNUI";
        Condition[Condition["Round"] = 8] = "Round";
        Condition[Condition["Settlement"] = 9] = "Settlement";
        return Condition;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f521e659b86db19450f77b0e447202a85895a1b.js.map