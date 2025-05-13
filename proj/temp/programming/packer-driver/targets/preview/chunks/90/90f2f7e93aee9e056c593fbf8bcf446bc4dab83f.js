System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, BattleRoundOperationState, Out_CardTerrainState, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.data && _this.data.card) {
              if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).curRoundRevealPlayerId != "") {
                _this.scene.FlushRevealPlayer((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).isPlayerA((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).curRoundRevealPlayerId));
              }

              _this.scene.FlushRoundBtnStrState((_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
                error: Error()
              }), BattleRoundOperationState) : BattleRoundOperationState).PlaceRound);

              _this.scene.FlushRound(_this.round, (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).roomData.roundMax.finalValue);

              yield _this.scene.ShowCard(_this.data.card);
              if (_this.isExit) return; // await Second(2)

              var playerId = _this.data.card.playerId;
              var terrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(playerId, _this.data.card.area);
              var addPower = _this.data.card.power ? _this.data.card.power.finalValue * terrainData.cardMul.finalValue : 0; //增加战力

              var oldPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(playerId, _this.data.card.area); //旧战力

              _this.scene.FlushAreaPower((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(playerId), _this.data.card.area, oldPower + addPower);

              _this.exit();
            } else {
              console.error("卡牌在地形上改变状态数据为空");

              _this.exit();
            }
          })();
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