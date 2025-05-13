System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Battle_RoomUnusual, EventMgr, BattleBaseComp, Out_RoomDestroy, _crd;

  function _reportPossibleCrUseOfBattle_RoomUnusual(extras) {
    _reporterNs.report("Battle_RoomUnusual", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  _export("Out_RoomDestroy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Battle_RoomUnusual = _unresolved_2.Battle_RoomUnusual;
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      BattleBaseComp = _unresolved_3.BattleBaseComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08503RzXSRIm7oak8gZScuU", "Out_RoomDestroy", undefined);

      /**
       * 房间异常销毁
       */
      _export("Out_RoomDestroy", Out_RoomDestroy = class Out_RoomDestroy extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Battle_RoomUnusual === void 0 ? (_reportPossibleCrUseOfBattle_RoomUnusual({
            error: Error()
          }), Battle_RoomUnusual) : Battle_RoomUnusual, this.data.reason);
          this.exit();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e3716563f2d143a44a7c9f7074820b59bd772b0.js.map