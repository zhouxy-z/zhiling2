System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Second, BattleBaseComp, battleDataMgr, Out_AddCardToTerrain, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfCardLocation(extras) {
    _reporterNs.report("CardLocation", "../../player/PlayerStruct", _context.meta, extras);
  }

  _export("Out_AddCardToTerrain", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      Second = _unresolved_3.Second;
    }, function (_unresolved_4) {
      BattleBaseComp = _unresolved_4.BattleBaseComp;
    }, function (_unresolved_5) {
      battleDataMgr = _unresolved_5.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad4e2w1ZNpHKqVnNo0SVp9P", "Out_AddCardToTerrain", undefined);

      /**
       * 添加卡牌到场地区域（都是已揭示的牌）
       */
      _export("Out_AddCardToTerrain", Out_AddCardToTerrain = class Out_AddCardToTerrain extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        constructor() {
          super(...arguments);
          this.actionEnd = false;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.ownerPlayerId);
            var fromIsPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.fromPlayerId);
            var toIsPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.card.playerId);
            var cardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerAreaEmptyCardLocation(_this.data.card.playerId, _this.data.terrainInstId);
            yield _this.scene.CardBackToArea(isPlayerA, fromIsPlayerA, toIsPlayerA, cardLocation.areaIdx, cardLocation.cardIdx, _this.data);
            if (_this.isExit) return;
            var formCard; //来源卡可能是来自系统

            if (_this.data.fromPlayerId != "") formCard = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerCard(_this.data.fromPlayerId, _this.data.card.instId); //此卡如果来自场地则减掉此卡的战力

            if (formCard && _this.data.fromLocation && _this.data.fromLocation == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
              //减掉移动来源的卡牌战力
              var fromCardPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerCardPower(_this.data.fromPlayerId, _this.data.card.instId);
              var fromTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(_this.data.fromPlayerId, formCard.area);
              var offsetPower = fromTerrainData.cardMul.finalValue * fromCardPower;
              var fromTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(_this.data.fromPlayerId, formCard.area);

              _this.scene.FlushAreaPower((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.fromPlayerId), formCard.area, fromTotalPower - offsetPower);
            } //增加目的区域的战力


            var toTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormId(_this.data.card.playerId, _this.data.terrainInstId);
            var toTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(_this.data.card.playerId, cardLocation.areaIdx);
            var addCardPower = _this.data.card.power ? _this.data.card.power.finalValue * toTerrainData.cardMul.finalValue : 0;

            _this.scene.FlushAreaPower((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.card.playerId), cardLocation.areaIdx, toTotalPower + addCardPower);

            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0.5);
            if (_this.isExit) return;

            _this.exit();
          })();
        }

        onUpdate(dt) {
          if (!this.actionEnd) return;
          this.exit();
        }

        reset() {
          this.actionEnd = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=feb39deff90a3fbd77b1d68a25c4774bc4d4b6c1.js.map