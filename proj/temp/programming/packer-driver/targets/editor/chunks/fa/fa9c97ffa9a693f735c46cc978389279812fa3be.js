System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Second, BattleBaseComp, battleDataMgr, Out_LockZone, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  _export("Out_LockZone", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Second = _unresolved_2.Second;
    }, function (_unresolved_3) {
      BattleBaseComp = _unresolved_3.BattleBaseComp;
    }, function (_unresolved_4) {
      battleDataMgr = _unresolved_4.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88a1ahNq8JGnq79orguLhnb", "Out_LockZone", undefined);

      /**
       * 锁定地形区域区域
       */
      _export("Out_LockZone", Out_LockZone = class Out_LockZone extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        async start() {
          let isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.ownerPlayerId);
          await this.scene.LockTerrain(isPlayerA, this.data);
          if (this.isExit) return;
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0.3);
          if (this.isExit) return;
          this.exit();
        }

        reset() {}

      });

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa9c97ffa9a693f735c46cc978389279812fa3be.js.map