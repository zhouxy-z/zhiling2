System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, battleLogicMgr, Out_NewRound, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCardGrid(extras) {
    _reporterNs.report("BattleCardGrid", "../BattleCardGrid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleLogicMgr(extras) {
    _reporterNs.report("battleLogicMgr", "../BattleLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainArea(extras) {
    _reporterNs.report("BattleTerrainArea", "../BattleTerrainArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainGrid(extras) {
    _reporterNs.report("BattleTerrainGrid", "../BattleTerrainGrid", _context.meta, extras);
  }

  _export("Out_NewRound", void 0);

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
      battleLogicMgr = _unresolved_4.battleLogicMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3443RNgBZJ2KdDvTAft18t", "Out_NewRound", undefined);

      /**
       * 新回合
       */
      _export("Out_NewRound", Out_NewRound = class Out_NewRound extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          this.initRoomData();
          this.initPlaterCard();
          this.initTerrainData();
          this.initPlaterPower();
          this.initHandCardData();
          setTimeout(() => {
            this.exit();
          }, 2);
        }

        reset() {} //初始化房间数据


        initRoomData() {
          let maxRound = this.data.gamePlayData.levelData.roundMax.finalValue;
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).roundLab.string = `${this.data.gamePlayData.currentRound} / ${maxRound}`;
          let playerData;
          let round = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).curRound;

          for (let key in this.data.gamePlayData.players) {
            playerData = this.data.gamePlayData.players[key];

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(key)) {
              (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).energyLabA.string = playerData.roundEnergy[round - 1].finalValue.toString();
            } else {
              (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).energyLabB.string = playerData.roundEnergy[round - 1].finalValue.toString();
            }
          }
        }
        /**
         * 初始化玩家卡牌数据
         */


        initPlaterCard() {
          let playerMap = this.data.gamePlayData.players;
          let playerData;
          let terrainArea;
          let terrainAreaList;
          let cardGrild;
          let cardData;
          let terrainData;

          for (let key in playerMap) {
            playerData = playerMap[key];
            terrainAreaList = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(key) ? (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListA : (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListB;

            for (let index = 0; index < terrainAreaList.length; index++) {
              terrainArea = terrainAreaList[index];
              terrainData = playerData.terrain[index];
              terrainArea.setData(terrainData);

              for (let j = 0; j < terrainArea.gridList.length; j++) {
                cardGrild = terrainArea.gridList[j];
                cardGrild.setTerrainInstId(terrainData.instId);
                cardData = terrainData && terrainData.cards[j];
                cardGrild.setData(cardData);
              }
            }
          }
        }

        initPlaterPower() {
          let playerMap = this.data.gamePlayData.players;
          let terrainGrildList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terrainGrildList;
          let playerData;
          let isPlayerA;

          for (let key in playerMap) {
            playerData = playerMap[key];
            isPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(playerData.playerId);

            for (let terrainGrild of terrainGrildList) {
              for (let terrainData of playerData.terrain) {
                if (terrainGrild.terrainData.instId == terrainData.instId) {
                  terrainGrild.updatePower(terrainData.power.finalValue, isPlayerA);
                  break;
                }
              }
            }
          }
        } //初始话地形数据


        initTerrainData() {
          let terrainDatas = this.data.gamePlayData.terrains;
          let terrainGrildList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terrainGrildList;
          let terrainGrild;
          let terrainData;

          for (let index = 0; index < terrainGrildList.length; index++) {
            terrainGrild = terrainGrildList[index];
            terrainData = terrainDatas && index < terrainDatas.length ? terrainDatas[index] : null;
            terrainGrild.setData(terrainData);
          }
        } //初始化手卡数据


        initHandCardData() {
          let playerId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerId();
          let handCardList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).handGridList;
          let cardGrid;
          let cardGridDatas = this.data.gamePlayData.players[playerId].handCards;
          let cardData;

          for (let index = 0; index < handCardList.length; index++) {
            cardGrid = handCardList[index];
            cardData = cardGridDatas && index < cardGridDatas.length ? cardGridDatas[index] : null;
            cardGrid.setData(cardData);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a4a32ac884a3e00ba3e4cbf1e0a8fcbd6ae6453.js.map