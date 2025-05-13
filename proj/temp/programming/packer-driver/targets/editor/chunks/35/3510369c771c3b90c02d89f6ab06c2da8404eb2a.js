System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Battle_ShowSettlement, EventMgr, Evt_BattleDoubleUpdate, BattleBaseComp, battleDataMgr, Out_Settlement, _crd;

  function _reportPossibleCrUseOfBattle_ShowSettlement(extras) {
    _reporterNs.report("Battle_ShowSettlement", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleDoubleUpdate(extras) {
    _reporterNs.report("Evt_BattleDoubleUpdate", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  _export("Out_Settlement", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Battle_ShowSettlement = _unresolved_2.Battle_ShowSettlement;
      EventMgr = _unresolved_2.EventMgr;
      Evt_BattleDoubleUpdate = _unresolved_2.Evt_BattleDoubleUpdate;
    }, function (_unresolved_3) {
      BattleBaseComp = _unresolved_3.BattleBaseComp;
    }, function (_unresolved_4) {
      battleDataMgr = _unresolved_4.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "669e8WpDD9K/LoTYK3o5af5", "Out_Settlement", undefined);

      /**
       * 结算
       */
      _export("Out_Settlement", Out_Settlement = class Out_Settlement extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        async start() {
          //系统加倍
          if (this.data.settleDoubleCount && this.data.settleDoubleCount > 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_BattleDoubleUpdate === void 0 ? (_reportPossibleCrUseOfEvt_BattleDoubleUpdate({
              error: Error()
            }), Evt_BattleDoubleUpdate) : Evt_BattleDoubleUpdate, this.data.settleDoubleCount, this);
          }

          await this.scene.Settlement();
          if (this.isExit) return;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Battle_ShowSettlement === void 0 ? (_reportPossibleCrUseOfBattle_ShowSettlement({
            error: Error()
          }), Battle_ShowSettlement) : Battle_ShowSettlement, (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId, (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerId(true), this.data);
          this.exit();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3510369c771c3b90c02d89f6ab06c2da8404eb2a.js.map