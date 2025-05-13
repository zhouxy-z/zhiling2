System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, BattleBaseComp, battleDataMgr, Out_Peek, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  _export("Out_Peek", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      BattleBaseComp = _unresolved_3.BattleBaseComp;
    }, function (_unresolved_4) {
      battleDataMgr = _unresolved_4.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c01d7ZmEI9HeKMlNzdzPMMI", "Out_Peek", undefined);

      /**
       * 窥视卡牌
       */
      _export("Out_Peek", Out_Peek = class Out_Peek extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        async start() {
          if (this.data.handCards && Object.keys(this.data.handCards).length) {
            //窥视手卡
            await this.scene.PeekHandCards(this.data, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand);
            if (this.isExit) return;
          } else if (this.data.terrainData && Object.keys(this.data.terrainData).length) {
            //将窥视方加入窥视队列（服务器会在下个回合才添加上）
            let terrainData;

            for (let key in this.data.terrainData) {
              terrainData = this.data.terrainData[key];
              if (!terrainData.peek) terrainData.peek = [];
              terrainData.peek.push(this.ownerPlayerId);
            } //窥视地形


            let isplayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.ownerPlayerId);
            await this.scene.PeekTerrain(isplayerA, this.data, this.ownerPlayerId);
            if (this.isExit) return;
          } else if (this.data.deckCards && Object.keys(this.data.deckCards).length) {
            //窥视卡组
            await this.scene.PeekHandCards(this.data, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Deck);
            if (this.isExit) return;
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
//# sourceMappingURL=f02a724e00f68c85876f5235f7549cf16ef89d13.js.map