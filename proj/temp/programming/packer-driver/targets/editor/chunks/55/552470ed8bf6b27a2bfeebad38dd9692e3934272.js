System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, Out_PlayerPower, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  _export("Out_PlayerPower", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BattleBaseComp = _unresolved_2.BattleBaseComp;
    }, function (_unresolved_3) {
      battleDataMgr = _unresolved_3.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ca46Zqe+hESZbJgJYXEyAi", "Out_PlayerPower", undefined);

      /**
       * 玩家战力变更
       */
      _export("Out_PlayerPower", Out_PlayerPower = class Out_PlayerPower extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          if (this.data.terrainPower) {
            let playerPowers = this.data.terrainPower;
            let playerPower;
            let isPlayerA;

            for (let key in playerPowers) {
              playerPower = playerPowers[key];
              isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(key);

              for (let areaIdx = 0; areaIdx < playerPower.basePower.length; areaIdx++) {
                let powerAttr = playerPower.basePower[areaIdx];
                let cardMulAttr = playerPower.cardMul[areaIdx];
                let cardTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerTerrainCardTotalPow(key, areaIdx, false);
                let newPower = cardMulAttr.finalValue * cardTotalPower + powerAttr.finalValue;
                this.scene.FlushAreaPower(isPlayerA, areaIdx, newPower);
              }
            }

            this.exit();
          } else {
            console.error("玩家战力变更数据为空");
            this.exit();
          }
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=552470ed8bf6b27a2bfeebad38dd9692e3934272.js.map