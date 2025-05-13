System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, proto, Out_CopyCard, _crd;

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardLocation(extras) {
    _reporterNs.report("CardLocation", "../../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  _export("Out_CopyCard", void 0);

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
      proto = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8fbbkvNQ9MRavvAEYJ1Hhj", "Out_CopyCard", undefined);

      /**
       * 复制一张卡
       */
      _export("Out_CopyCard", Out_CopyCard = class Out_CopyCard extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        async start() {
          let copyCard = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getCard(this.data.copyInstId); //复制来源是否第一觉玩家

          let copyPlayerIsA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(copyCard.playerId); //是否复制到第一觉玩家

          let toPlayerIsA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.card.playerId); //复制卡来源

          switch (this.data.card.location) {
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand:
              //复制的卡出现在屏幕中间然后飞到对应目标玩家的手卡区
              await this.scene.AddCardToHand(toPlayerIsA, this.data, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Unknown, copyCard);
              if (this.isExit) return; // this.scene.AddCardFormSceneCentreToHand(toPlayerIsA, this.data.card);

              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain:
              //复制的卡出现在屏幕中间然后飞到对应目标玩家的场地上区
              let cardLocation = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerAreaEmptyCardLocationByIdx(this.data.card.playerId, this.data.card.area);
              await this.scene.AddCardToArea(toPlayerIsA, this.data, copyCard, cardLocation.areaIdx, cardLocation.cardIdx);
              if (this.isExit) return;
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Deck:
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Del:
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Drop:
              //复制的卡出现在屏幕中间然后飞到对应目标玩家的头像区
              await this.scene.CopyCardToUnVisible(toPlayerIsA, this.data, copyCard);
              if (this.isExit) return; // this.scene.AddCardFormSceneCentreToHead(toPlayerIsA, this.data.card);

              break;

            default:
              break;
          }

          this.exit();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf04b040f168dd1fefcbe434e05aab1db18c607b.js.map