System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, battleLogicMgr, Out_PlayerPower_2d, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleLogicMgr(extras) {
    _reporterNs.report("battleLogicMgr", "../BattleLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainGrid(extras) {
    _reporterNs.report("BattleTerrainGrid", "../BattleTerrainGrid", _context.meta, extras);
  }

  _export("Out_PlayerPower_2d", void 0);

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
      battleLogicMgr = _unresolved_4.battleLogicMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7397zaR6RHqYXoFkho8W7Y", "Out_PlayerPower_2d", undefined);

      /**
       * 玩家战力变更
       */
      _export("Out_PlayerPower_2d", Out_PlayerPower_2d = class Out_PlayerPower_2d extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          let terraninGridList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terrainGrildList;
          let terraninGrid;

          if (this.data.playerPower && this.data.playerPower) {
            let platerPowers = this.data.playerPower;
            let platerPower;
            let isPlayerA;

            for (let key in platerPowers) {
              platerPower = platerPowers[key];
              isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(key);

              for (let index = 0; index < platerPower.power.length; index++) {
                let powerAttr = platerPower.power[index];
                terraninGrid = terraninGridList[index];
                terraninGrid.updatePower(powerAttr.finalValue, isPlayerA);
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
//# sourceMappingURL=550463041bdcdafb1c4d34035ded226c357b1f34.js.map