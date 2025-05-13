System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Battle_UpdateTerrain, EventMgr, BattleBaseComp, battleDataMgr, FightData, Out_RetransmissionRound, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBattle_UpdateTerrain(extras) {
    _reporterNs.report("Battle_UpdateTerrain", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../FightData", _context.meta, extras);
  }

  _export("Out_RetransmissionRound", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Battle_UpdateTerrain = _unresolved_2.Battle_UpdateTerrain;
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      BattleBaseComp = _unresolved_3.BattleBaseComp;
    }, function (_unresolved_4) {
      battleDataMgr = _unresolved_4.battleDataMgr;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e3ffB9ZkNCMIKFUQbhsLFy", "Out_RetransmissionRound", undefined);

      /**
       * 重置战斗房间数据
       */
      _export("Out_RetransmissionRound", Out_RetransmissionRound = class Out_RetransmissionRound extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.setRoomData();
            if (_this.isExit) return;
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).currentRound = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).curRound;

            _this.scene.FlushRound(_this.round, (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).roomData.roundMax.finalValue);

            _this.exit();
          })();
        }

        reset() {}

        onUpdate(dt) {}
        /**
         * 初始化房间数据
         */


        setRoomData() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // 刷新场景手牌和卡牌
            var playerData;
            var isPlayerA;

            for (var key in _this2.data.gamePlayData.players) {
              playerData = _this2.data.gamePlayData.players[key];
              var terrainMax = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).roomData.terrainMax;
              isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(playerData.playerId);

              _this2.scene.FlushPlayerInfo(isPlayerA, playerData);

              var totalPower = void 0;

              for (var areaIdx = 0; areaIdx < terrainMax; areaIdx++) {
                var cardData = playerData.terrain[areaIdx];
                yield _this2.scene.FlushAreaCrads(isPlayerA, areaIdx, cardData);
                if (_this2.isExit) return;
                totalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(playerData.playerId, areaIdx);

                _this2.scene.FlushAreaPower(isPlayerA, areaIdx, totalPower);
              }

              if (isPlayerA) {
                var _playerData$roundEner;

                yield _this2.setHandCard(playerData.handCards);
                if (_this2.isExit) return;
                var curEnergy = (_playerData$roundEner = playerData.roundEnergy[_this2.round - 1]) == null ? void 0 : _playerData$roundEner.finalValue;

                _this2.scene.FlushEnergy(curEnergy);
              }
            } // 初始场景区域


            yield _this2.scene.FlushTerrain(true, _this2.data.gamePlayData, _this2.ownerPlayerId);
            if (_this2.isExit) return;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Battle_UpdateTerrain === void 0 ? (_reportPossibleCrUseOfBattle_UpdateTerrain({
              error: Error()
            }), Battle_UpdateTerrain) : Battle_UpdateTerrain, _this2.data.gamePlayData.terrains, _this2.data.gamePlayData);
          })();
        }
        /**
         * 设置手卡数据
         */


        setHandCard(cards) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            yield _this3.scene.FlushHandCard(cards);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa60431a05915ad80eb37903bd06ba709c011175.js.map