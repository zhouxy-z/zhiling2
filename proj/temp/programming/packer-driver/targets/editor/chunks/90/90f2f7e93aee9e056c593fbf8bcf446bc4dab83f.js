System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, BattleRoundOperationState, Out_CardTerrainState, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleRoundOperationState(extras) {
    _reporterNs.report("BattleRoundOperationState", "../../player/PlayerStruct", _context.meta, extras);
  }

  _export("Out_CardTerrainState", void 0);

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
      BattleRoundOperationState = _unresolved_4.BattleRoundOperationState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61ffe3tuqlHdbJI3arvAzIA", "Out_CardTerrainState", undefined);

      /**
       * 卡牌在地形上的状态改变（由盖牌到显示）
       */
      _export("Out_CardTerrainState", Out_CardTerrainState = class Out_CardTerrainState extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        async start() {
          if (this.data && this.data.card) {
            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).curRoundRevealPlayerId != "") {
              this.scene.FlushRevealPlayer((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).curRoundRevealPlayerId));
            }

            this.scene.FlushRoundBtnStrState((_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).PlaceRound);
            this.scene.FlushRound(this.round, (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).roomData.roundMax.finalValue);
            await this.scene.ShowCard(this.data.card);
            if (this.isExit) return; // await Second(2)

            let playerId = this.data.card.playerId;
            let terrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(playerId, this.data.card.area);
            let addPower = this.data.card.power ? this.data.card.power.finalValue * terrainData.cardMul.finalValue : 0; //增加战力

            let oldPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(playerId, this.data.card.area); //旧战力

            this.scene.FlushAreaPower((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(playerId), this.data.card.area, oldPower + addPower);
            this.exit();
          } else {
            console.error("卡牌在地形上改变状态数据为空");
            this.exit();
          }
        }

        reset() {
          (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).curRoundRevealPlayerId = "";
          this.scene.FlushRevealPlayer(null);
          this.scene.FlushRoundBtnStrState((_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).EndRound);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90f2f7e93aee9e056c593fbf8bcf446bc4dab83f.js.map