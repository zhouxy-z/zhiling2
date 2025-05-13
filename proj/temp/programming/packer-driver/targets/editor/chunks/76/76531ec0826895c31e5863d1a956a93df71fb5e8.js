System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, BattleSettlementPanel, Out_Settlement, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleSettlementPanel(extras) {
    _reporterNs.report("BattleSettlementPanel", "../BattleSettlementPanel", _context.meta, extras);
  }

  _export("Out_Settlement", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BattleBaseComp = _unresolved_2.BattleBaseComp;
    }, function (_unresolved_3) {
      battleDataMgr = _unresolved_3.battleDataMgr;
    }, function (_unresolved_4) {
      BattleSettlementPanel = _unresolved_4.BattleSettlementPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b97ffFwpi1JFqmjDZnzniV+", "Out_Settlement", undefined);

      /**
       * 结算
       */
      _export("Out_Settlement", Out_Settlement = class Out_Settlement extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          (_crd && BattleSettlementPanel === void 0 ? (_reportPossibleCrUseOfBattleSettlementPanel({
            error: Error()
          }), BattleSettlementPanel) : BattleSettlementPanel).Show((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId, this.data);
          this.exit();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76531ec0826895c31e5863d1a956a93df71fb5e8.js.map