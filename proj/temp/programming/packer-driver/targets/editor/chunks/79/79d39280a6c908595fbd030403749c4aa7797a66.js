System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, Out_TerrainToTerrain, _crd;

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

        async toMove() {
          if (this.data.success) {
            //移动成功
            //开始移动的地形是否第一视觉玩家
            let fromTerrainIsA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.fromTerrainPlayerId); //目标去到的地形是否第一视觉玩家

            let toTerrainIsA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.toTerrainPlayerId); //手动移动并且第一视觉方移动不做处理（因为在操作移动上已修改数据了）

            if (this.data.manual && fromTerrainIsA && toTerrainIsA) {
              this.exit();
              return;
            } //移动卡牌的开始位置


            let startCardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerCardLocation(this.data.fromTerrainPlayerId, this.data.card.instId); //移动卡牌的目标位置

            let targetCardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerAreaEmptyCardLocation(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
            /**
            * TODO 这里实现起移动效果 (只做了简单位置交换)
            */

            await this.scene.CardAreaMove((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.toTerrainPlayerId), targetCardLocation.areaIdx, targetCardLocation.cardIdx, this.data); //减掉移动来源的卡牌战力

            let fromCardPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerCardPower(this.data.fromTerrainPlayerId, this.data.card.instId);
            let fromTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormId(this.data.fromTerrainPlayerId, this.data.fromTerrainInstId);
            let offsetPower = fromTerrainData.cardMul.finalValue * fromCardPower;
            let fromTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(this.data.fromTerrainPlayerId, startCardLocation.areaIdx);
            this.scene.FlushAreaPower(fromTerrainIsA, startCardLocation.areaIdx, fromTotalPower - offsetPower); //增加移动目的区域的战力

            let toTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormId(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
            let toTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(this.data.toTerrainPlayerId, targetCardLocation.areaIdx);
            let addCardPower = this.data.card.power ? this.data.card.power.finalValue * toTerrainData.cardMul.finalValue : 0;
            this.scene.FlushAreaPower(fromTerrainIsA, targetCardLocation.areaIdx, toTotalPower + addCardPower);
            this.exit();
          } else {
            /**
             * TODO 暂时没有移动失败的表现
             */
            this.exit();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79d39280a6c908595fbd030403749c4aa7797a66.js.map