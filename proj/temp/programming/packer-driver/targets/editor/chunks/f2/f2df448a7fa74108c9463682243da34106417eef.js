System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Battle_End_Round, Battle_PlayNewRoundEffect, Battle_UpdateTerrain, EventMgr, BattleBaseComp, battleDataMgr, FightData, Out_NewRound, _crd;

  function _reportPossibleCrUseOfBattle_End_Round(extras) {
    _reporterNs.report("Battle_End_Round", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_PlayNewRoundEffect(extras) {
    _reporterNs.report("Battle_PlayNewRoundEffect", "../../../manager/EventMgr", _context.meta, extras);
  }

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

  _export("Out_NewRound", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Battle_End_Round = _unresolved_2.Battle_End_Round;
      Battle_PlayNewRoundEffect = _unresolved_2.Battle_PlayNewRoundEffect;
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

      _cclegacy._RF.push({}, "6281eRtwHZKN6FG1jC3TyF+", "Out_NewRound", undefined);

      /**
       * 新回合
       */
      _export("Out_NewRound", Out_NewRound = class Out_NewRound extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        constructor(...args) {
          super(...args);
          this.isInitCardEnd = false;
          //是否初始化手牌完成
          this.isPlayEffectEnd = false;
        }

        //是否播放回合开始动画结束
        async start() {
          await this.setRoomData();
          if (this.isExit) return;
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).currentRound = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).curRound;
          this.scene.FlushRound(this.round, (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roundMax.finalValue);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Battle_PlayNewRoundEffect === void 0 ? (_reportPossibleCrUseOfBattle_PlayNewRoundEffect({
            error: Error()
          }), Battle_PlayNewRoundEffect) : Battle_PlayNewRoundEffect, this.round, (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roundMax.finalValue);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_End_Round === void 0 ? (_reportPossibleCrUseOfBattle_End_Round({
            error: Error()
          }), Battle_End_Round) : Battle_End_Round, this.onRoundEffectPlayEnd, this);
        }

        reset() {
          this.isInitCardEnd = false;
          this.isPlayEffectEnd = false;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Battle_End_Round === void 0 ? (_reportPossibleCrUseOfBattle_End_Round({
            error: Error()
          }), Battle_End_Round) : Battle_End_Round, this.onRoundEffectPlayEnd, this);
        }

        onUpdate(dt) {
          if (!this.isInitCardEnd) return;
          if (!this.isPlayEffectEnd) return; //全部动作完成退出播放

          this.exit();
        }

        onRoundEffectPlayEnd() {
          this.isPlayEffectEnd = true;
        }
        /**
         * 初始化房间数据
         */


        async setRoomData() {
          // 刷新场景手牌和卡牌
          let playerData;
          let isPlayerA;

          for (let key in this.data.gamePlayData.players) {
            playerData = this.data.gamePlayData.players[key];
            let terrainMax = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).roomData.terrainMax;
            isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(playerData.playerId);
            this.scene.FlushPlayerInfo(isPlayerA, playerData);
            let totalPower;

            for (let areaIdx = 0; areaIdx < terrainMax; areaIdx++) {
              let cardData = playerData.terrain[areaIdx];
              await this.scene.FlushAreaCrads(isPlayerA, areaIdx, cardData);
              if (this.isExit) return;
              totalPower = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerTerrainTotalPow(playerData.playerId, areaIdx);
              this.scene.FlushAreaPower(isPlayerA, areaIdx, totalPower);
            }

            if (isPlayerA) {
              var _playerData$roundEner;

              await this.setHandCard(playerData.handCards);
              if (this.isExit) return;
              let curEnergy = (_playerData$roundEner = playerData.roundEnergy[this.round - 1]) == null ? void 0 : _playerData$roundEner.finalValue;
              this.scene.FlushEnergy(curEnergy);
            }
          } // 初始场景区域


          await this.scene.FlushTerrain(true, this.data.gamePlayData, this.ownerPlayerId);
          if (this.isExit) return;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Battle_UpdateTerrain === void 0 ? (_reportPossibleCrUseOfBattle_UpdateTerrain({
            error: Error()
          }), Battle_UpdateTerrain) : Battle_UpdateTerrain, this.data.gamePlayData.terrains, this.data.gamePlayData);
        }
        /**
         * 设置手卡数据
         */


        async setHandCard(cards) {
          await this.scene.FlushHandCard(cards);
          if (this.isExit) return;
          this.isInitCardEnd = true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2df448a7fa74108c9463682243da34106417eef.js.map