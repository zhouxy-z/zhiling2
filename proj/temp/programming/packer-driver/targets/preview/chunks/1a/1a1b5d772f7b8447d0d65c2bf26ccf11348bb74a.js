System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, BattleBaseComp, battleDataMgr, Out_CardDataChange, _crd;

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
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var oldCardData;
            var isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.card.playerId);

            switch (_this.data.card.location) {
              case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Hand:
                //修改手卡
                oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerHandCard(_this.ownerPlayerId, _this.data.card.instId);
                break;

              case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Deck:
                //修改卡组
                oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerDeckCard(_this.ownerPlayerId, _this.data.card.instId);
                break;

              case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Drop:
                //修改弃卡
                oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerDropCard(_this.ownerPlayerId, _this.data.card.instId);
                break;

              case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Del:
                //修改删除卡
                oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerDelCard(_this.ownerPlayerId, _this.data.card.instId);
                break;

              case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Terrain:
                //修改地形卡
                oldCardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerTerrainCard(_this.ownerPlayerId, _this.data.card.instId);
                break;

              default:
                console.error("修改来源未知卡");
                console.dir(_this.data.card);
                break;
            }

            var add = []; //增加的技能

            var remove = []; //被移除的技能

            var valMap = {};
            var skill;

            for (var index = 0; index < oldCardData.skills.length; index++) {
              skill = oldCardData.skills[index];
              valMap[skill.skillId] = skill;
            }

            for (var _index = 0; _index < _this.data.card.skills.length; _index++) {
              skill = _this.data.card.skills[_index];

              if (!valMap[skill.skillId]) {
                add.push(skill);
              } else {
                delete valMap[skill.skillId];
              }
            }

            for (var key in valMap) {
              remove.push(valMap[key]);
            }

            yield _this.scene.CardDataChange(isPlayerA, _this.data);
            if (_this.isExit) return;

            if (oldCardData && oldCardData.power) {
              var oldPower = oldCardData.power.finalValue;
              var curPower = _this.data.card.power.finalValue;

              if (oldPower != curPower) {
                //战力变更
                var terrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(oldCardData.playerId, oldCardData.area);

                if (_this.data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
                  var offsetPower = terrainData.cardMul.finalValue * (curPower - oldPower);
                  var oldTotalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                    error: Error()
                  }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(oldCardData.playerId, oldCardData.area);

                  _this.scene.FlushAreaPower(isPlayerA, oldCardData.area, oldTotalPower + offsetPower);
                }
              }

              var oldCost = oldCardData.cost.finalValue;
              var curCost = _this.data.card.cost.finalValue;

              if (oldCost != curCost) {//费电变更
              }
            } // Second(0.3);


            _this.exit();
          })();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a1b5d772f7b8447d0d65c2bf26ccf11348bb74a.js.map