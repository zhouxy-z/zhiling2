System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, BattleBaseComp, battleDataMgr, Out_CardDataChange, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  _export("Out_CardDataChange", void 0);

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

      _cclegacy._RF.push({}, "3a0612LxkJFRJV/Jf+bmb6V", "Out_CardDataChange", undefined);

      /**
       * 卡牌数据变更
       */
      _export("Out_CardDataChange", Out_CardDataChange = class Out_CardDataChange extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        async start() {
          let oldCardData;
          let isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.card.playerId);

          switch (this.data.card.location) {
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand:
              //修改手卡
              oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerHandCard(this.ownerPlayerId, this.data.card.instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Deck:
              //修改卡组
              oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerDeckCard(this.ownerPlayerId, this.data.card.instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Drop:
              //修改弃卡
              oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerDropCard(this.ownerPlayerId, this.data.card.instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Del:
              //修改删除卡
              oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerDelCard(this.ownerPlayerId, this.data.card.instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain:
              //修改地形卡
              oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainCard(this.ownerPlayerId, this.data.card.instId);
              break;

            default:
              console.error("修改来源未知卡");
              console.dir(this.data.card);
              break;
          }

          let add = []; //增加的技能

          let remove = []; //被移除的技能

          let valMap = {};
          let skill;

          for (let index = 0; index < oldCardData.skills.length; index++) {
            skill = oldCardData.skills[index];
            valMap[skill.skillId] = skill;
          }

          for (let index = 0; index < this.data.card.skills.length; index++) {
            skill = this.data.card.skills[index];

            if (!valMap[skill.skillId]) {
              add.push(skill);
            } else {
              delete valMap[skill.skillId];
            }
          }

          for (let key in valMap) {
            remove.push(valMap[key]);
          }

          await this.scene.CardDataChange(isPlayerA, this.data);
          if (this.isExit) return;

          if (oldCardData && oldCardData.power) {
            let oldPower = oldCardData.power.finalValue;
            let curPower = this.data.card.power.finalValue;

            if (oldPower != curPower) {
              //战力变更
              let terrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(oldCardData.playerId, oldCardData.area);

              if (this.data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
                let offsetPower = terrainData.cardMul.finalValue * (curPower - oldPower);
                let oldTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(oldCardData.playerId, oldCardData.area);
                this.scene.FlushAreaPower(isPlayerA, oldCardData.area, oldTotalPower + offsetPower);
              }
            }

            let oldCost = oldCardData.cost.finalValue;
            let curCost = this.data.card.cost.finalValue;

            if (oldCost != curCost) {//费电变更
            }
          } // Second(0.3);


          this.exit();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a1b5d772f7b8447d0d65c2bf26ccf11348bb74a.js.map