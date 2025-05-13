System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, Out_HandToTerrain, _crd;

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

  _export("Out_HandToTerrain", void 0);

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

      _cclegacy._RF.push({}, "e6e471sdOFAMrBLwGv/kgPg", "Out_HandToTerrain", undefined);

      /**
       * 从手牌上场
       */
      _export("Out_HandToTerrain", Out_HandToTerrain = class Out_HandToTerrain extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        constructor(...args) {
          super(...args);
          this.actionEnd = false;
        }

        async start() {
          // battleDataMgr.getPlayerTerrain(this.data.toTerrainPlayerId)
          if (this.data && this.data.card) {
            let cardLocation;

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.toTerrainPlayerId)) {
              //回放模式
              if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).creatRoomData.isReplay) {
                cardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerAreaEmptyCardLocation(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
                await this.scene.AutoPlayHand(this.data.card, cardLocation.areaIdx, cardLocation.cardIdx);
                if (this.isExit) return;
                await this.scene.CloseCard(this.data.card);
                if (this.isExit) return;
                console.log("--------->盖牌完成");
                this.actionEnd = true;
              } else {
                await this.scene.CloseCard(this.data.card);
                if (this.isExit) return;
                console.log("--------->盖牌完成");
                this.actionEnd = true;
              } //
              // await Second(1);

            } else {
              cardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerAreaEmptyCardLocation(this.data.toTerrainPlayerId, this.data.toTerrainInstId);

              if (cardLocation) {
                /**
                 * TODO 对手卡需要作由 盖着出牌 到区域（卡牌由盖牌到显示要等下个包处理变化）
                 */
                await this.scene.SendAdCardToArea(this.data.card, cardLocation.areaIdx, cardLocation.cardIdx);
                if (this.isExit) return; // await Second(1);

                this.actionEnd = true;
              } else {
                console.error("手牌到地形区域卡牌位置为空");
                this.exit();
              }
            }
          } else {
            console.error("手牌到地形区域数据为空");
            this.exit();
          }
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
//# sourceMappingURL=16f0335a889e9576b7f66ebed62cca0b50e439fc.js.map