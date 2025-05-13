System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, Out_TerrainToTerrain, _crd;

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

  function _reportPossibleCrUseOfCardLocation(extras) {
    _reporterNs.report("CardLocation", "../../player/PlayerStruct", _context.meta, extras);
  }

  _export("Out_TerrainToTerrain", void 0);

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

      _cclegacy._RF.push({}, "a1c0a59efRLs4epfZI8ubk6", "Out_TerrainToTerrain", undefined);

      /**
       * 区域上的卡牌移动（包括手动移动动移动 ）
       */
      _export("Out_TerrainToTerrain", Out_TerrainToTerrain = class Out_TerrainToTerrain extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          if (this.data) {
            this.toMove();
          } else {
            this.exit();
          }
        }

        reset() {}

        toMove() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.data.success) {
              //移动成功
              //开始移动的地形是否第一视觉玩家
              var fromTerrainIsA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.fromTerrainPlayerId); //目标去到的地形是否第一视觉玩家

              var toTerrainIsA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.toTerrainPlayerId); //手动移动并且第一视觉方移动不做处理（因为在操作移动上已修改数据了）

              if (_this.data.manual && fromTerrainIsA && toTerrainIsA) {
                _this.exit();

                return;
              } //移动卡牌的开始位置


              var startCardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerCardLocation(_this.data.fromTerrainPlayerId, _this.data.card.instId); //移动卡牌的目标位置

              var targetCardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerAreaEmptyCardLocation(_this.data.toTerrainPlayerId, _this.data.toTerrainInstId);
              /**
              * TODO 这里实现起移动效果 (只做了简单位置交换)
              */

              yield _this.scene.CardAreaMove((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.toTerrainPlayerId), targetCardLocation.areaIdx, targetCardLocation.cardIdx, _this.data); //减掉移动来源的卡牌战力

              var fromCardPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerCardPower(_this.data.fromTerrainPlayerId, _this.data.card.instId);
              var fromTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormId(_this.data.fromTerrainPlayerId, _this.data.fromTerrainInstId);
              var offsetPower = fromTerrainData.cardMul.finalValue * fromCardPower;
              var fromTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(_this.data.fromTerrainPlayerId, startCardLocation.areaIdx);

              _this.scene.FlushAreaPower(fromTerrainIsA, startCardLocation.areaIdx, fromTotalPower - offsetPower); //增加移动目的区域的战力


              var toTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormId(_this.data.toTerrainPlayerId, _this.data.toTerrainInstId);
              var toTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(_this.data.toTerrainPlayerId, targetCardLocation.areaIdx);
              var addCardPower = _this.data.card.power ? _this.data.card.power.finalValue * toTerrainData.cardMul.finalValue : 0;

              _this.scene.FlushAreaPower(fromTerrainIsA, targetCardLocation.areaIdx, toTotalPower + addCardPower);

              _this.exit();
            } else {
              /**
               * TODO 暂时没有移动失败的表现
               */
              _this.exit();
            }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79d39280a6c908595fbd030403749c4aa7797a66.js.map