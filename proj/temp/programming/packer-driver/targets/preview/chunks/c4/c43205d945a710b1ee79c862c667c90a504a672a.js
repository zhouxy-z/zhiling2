System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, v3, BattleBaseComp, battleDataMgr, battleLogicMgr, Out_CardTerrainState, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
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

  function _reportPossibleCrUseOfBattleCardGrid(extras) {
    _reporterNs.report("BattleCardGrid", "../BattleCardGrid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainArea(extras) {
    _reporterNs.report("BattleTerrainArea", "../BattleTerrainArea", _context.meta, extras);
  }

  _export("Out_CardTerrainState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      BattleBaseComp = _unresolved_2.BattleBaseComp;
    }, function (_unresolved_3) {
      battleDataMgr = _unresolved_3.battleDataMgr;
    }, function (_unresolved_4) {
      battleLogicMgr = _unresolved_4.battleLogicMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89323sRsUpKtKJdtSkDQFWX", "Out_CardTerrainState", undefined);

      __checkObsolete__(['Node', 'tween', 'UITransform', 'v3', 'Vec3']);

      /**
       * 卡牌在地形上的状态改变（由盖牌到显示）
       */
      _export("Out_CardTerrainState", Out_CardTerrainState = class Out_CardTerrainState extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          if (this.data && this.data.card) {
            this.toShow();
          } else {
            console.error("卡牌在地形上改变状态数据为空");
            this.exit();
          }
        }

        reset() {}

        toShow() {
          var terraninAreaList = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.ownerPlayerId) ? (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terraninAreaListA : (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terraninAreaListB;
          var targetGrid;

          for (var area of terraninAreaList) {
            if (area.terrainData.instId == this.data.instId) {
              for (var grid of area.gridList) {
                if (grid.cardData && grid.cardData.instId == this.data.card.instId) {
                  grid.setData(this.data.card);
                  targetGrid = grid;
                  break;
                }
              }
            }

            if (targetGrid) break;
          }

          if (targetGrid) {
            tween(targetGrid.card).to(0.5, {
              scale: v3(1.5, 1.5, 0)
            }).to(0.5, {
              scale: v3(1, 1, 0)
            }).call(() => {
              this.exit();
            }).start();
          } else {
            this.exit();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c43205d945a710b1ee79c862c667c90a504a672a.js.map