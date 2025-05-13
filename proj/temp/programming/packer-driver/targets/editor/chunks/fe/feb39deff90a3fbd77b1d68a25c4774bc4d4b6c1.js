System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Second, BattleBaseComp, battleDataMgr, Out_AddCardToTerrain, _crd;

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
        constructor(...args) {
          super(...args);
          this.actionEnd = false;
        }

        async start() {
          let isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.ownerPlayerId);
          let fromIsPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.fromPlayerId);
          let toIsPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.card.playerId);
          let cardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerAreaEmptyCardLocation(this.data.card.playerId, this.data.terrainInstId);
          await this.scene.CardBackToArea(isPlayerA, fromIsPlayerA, toIsPlayerA, cardLocation.areaIdx, cardLocation.cardIdx, this.data);
          if (this.isExit) return;
          let formCard; //来源卡可能是来自系统

          if (this.data.fromPlayerId != "") formCard = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerCard(this.data.fromPlayerId, this.data.card.instId); //此卡如果来自场地则减掉此卡的战力

          if (formCard && this.data.fromLocation && this.data.fromLocation == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
            //减掉移动来源的卡牌战力
            let fromCardPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerCardPower(this.data.fromPlayerId, this.data.card.instId);
            let fromTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(this.data.fromPlayerId, formCard.area);
            let offsetPower = fromTerrainData.cardMul.finalValue * fromCardPower;
            let fromTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(this.data.fromPlayerId, formCard.area);
            this.scene.FlushAreaPower((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.fromPlayerId), formCard.area, fromTotalPower - offsetPower);
          } //增加目的区域的战力


          let toTerrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormId(this.data.card.playerId, this.data.terrainInstId);
          let toTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(this.data.card.playerId, cardLocation.areaIdx);
          let addCardPower = this.data.card.power ? this.data.card.power.finalValue * toTerrainData.cardMul.finalValue : 0;
          this.scene.FlushAreaPower((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.card.playerId), cardLocation.areaIdx, toTotalPower + addCardPower);
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0.5);
          if (this.isExit) return;
          this.exit();
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