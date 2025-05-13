System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BattleBaseComp, battleLogicMgr, battleDataMgr, tween, BattleCard, Out_TerrainToTerrain_2d, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleLogicMgr(extras) {
    _reporterNs.report("battleLogicMgr", "../BattleLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainArea(extras) {
    _reporterNs.report("BattleTerrainArea", "../BattleTerrainArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCardGrid(extras) {
    _reporterNs.report("BattleCardGrid", "../BattleCardGrid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCard(extras) {
    _reporterNs.report("BattleCard", "../BattleCard", _context.meta, extras);
  }

  _export("Out_TerrainToTerrain_2d", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BattleBaseComp = _unresolved_2.BattleBaseComp;
    }, function (_unresolved_3) {
      battleLogicMgr = _unresolved_3.battleLogicMgr;
    }, function (_unresolved_4) {
      battleDataMgr = _unresolved_4.battleDataMgr;
    }, function (_unresolved_5) {
      BattleCard = _unresolved_5.BattleCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7e70qb+dhHAba3qZ3fr/a7", "Out_TerrainToTerrain_2d", undefined);

      __checkObsolete__(['Node', 'tween', 'Vec3']);

      /**
       * 房间区域数据
       */
      _export("Out_TerrainToTerrain_2d", Out_TerrainToTerrain_2d = class Out_TerrainToTerrain_2d extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          if (!this.data) {
            (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).showCardLayer.active = true;
            this.toMove();
          } else {
            this.exit();
          }
        }

        reset() {}

        toMove() {
          if (this.data.success) {
            //手动移动并且第一视觉方移动不做处理（因为在操作移动上已修改数据了）
            if (this.data.manual && (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.fromTerrainPlayerId) && (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.toTerrainPlayerId)) {
              this.exit();
              return;
            } //移动成功


            let startPos;
            let targetPos;
            let terrainArea;
            let terrainAreaList;
            let grid;

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.fromTerrainPlayerId)) {
              terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).terraninAreaListA;
            } else {
              terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).terraninAreaListB;
            }

            for (let index = 0; index < terrainAreaList.length; index++) {
              terrainArea = terrainAreaList[index];

              if (terrainArea.terrainData.instId == this.data.fromTerrainInstId) {
                for (let index = 0; index < terrainArea.gridList.length; index++) {
                  grid = terrainArea.gridList[index];

                  if (grid.cardData && grid.cardData.instId == this.data.card.instId) {
                    grid.setData(null);
                    startPos = grid.node.worldPosition;
                    break;
                  }
                }

                break;
              }
            }

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.toTerrainPlayerId)) {
              terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).terraninAreaListA;
            } else {
              terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).terraninAreaListB;
            }

            for (let index = 0; index < terrainAreaList.length; index++) {
              terrainArea = terrainAreaList[index];

              if (terrainArea.terrainData.instId == this.data.toTerrainInstId) {
                for (let index = 0; index < terrainArea.gridList.length; index++) {
                  grid = terrainArea.gridList[index];

                  if (!grid.cardData) {
                    //grid.setData(this.data.card);
                    targetPos = grid.node.worldPosition;
                    break;
                  }
                }

                break;
              }
            }

            let cardNode = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).fromPoolCard;
            let cardCom = cardNode.getComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
              error: Error()
            }), BattleCard) : BattleCard) || cardNode.addComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
              error: Error()
            }), BattleCard) : BattleCard);
            cardCom.setData(this.data.card);
            cardNode.parent = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).showCardLayer;
            cardNode.layer = cardNode.parent.layer;
            cardNode.worldPosition = startPos;
            cardNode.active = true;
            tween(cardNode).to(0.5, {
              worldPosition: targetPos
            }, {
              easing: 'cubicIn'
            }).call(() => {
              (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).putCardToPool(cardNode);
              this.resetAreaData();
              this.exit();
            }).start();
          } else {
            /**
             * TODO 暂时没有移动失败的表现
             */
            this.exit();
          }
        }

        resetAreaData() {
          let terrainAreaList;
          let terrainArea;
          let terrainDataList;
          let terrainData;
          let grid;

          if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.fromTerrainPlayerId)) {
            terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListA;
          } else {
            terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListB;
          }

          terrainDataList = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerTerrainDatas(this.data.fromTerrainPlayerId);

          for (let areaIdx = 0; areaIdx < terrainAreaList.length; areaIdx++) {
            terrainArea = terrainAreaList[areaIdx];
            terrainData = terrainDataList[areaIdx];

            for (let index = 0; index < terrainArea.gridList.length; index++) {
              grid = terrainArea.gridList[index];
              let cardData = terrainData.cards[index] || null;
              grid.setData(cardData);
            }
          }

          if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.toTerrainPlayerId)) {
            terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListA;
          } else {
            terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListB;
          }

          terrainDataList = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerTerrainDatas(this.data.toTerrainPlayerId);

          for (let areaIdx = 0; areaIdx < terrainAreaList.length; areaIdx++) {
            terrainArea = terrainAreaList[areaIdx];
            terrainData = terrainDataList[areaIdx];

            for (let index = 0; index < terrainArea.gridList.length; index++) {
              grid = terrainArea.gridList[index];
              let cardData = terrainData.cards[index] || null;
              grid.setData(cardData);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eae135608abeaebbeb9d0dfde311ee363047c536.js.map