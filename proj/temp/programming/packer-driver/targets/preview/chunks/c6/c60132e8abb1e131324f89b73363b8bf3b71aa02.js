System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, UITransform, v3, BattleBaseComp, battleDataMgr, battleLogicMgr, BattleCard, Out_HandToTerrain_2d, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleLogicMgr(extras) {
    _reporterNs.report("battleLogicMgr", "../BattleLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCard(extras) {
    _reporterNs.report("BattleCard", "../BattleCard", _context.meta, extras);
  }

  _export("Out_HandToTerrain_2d", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      BattleBaseComp = _unresolved_2.BattleBaseComp;
    }, function (_unresolved_3) {
      battleDataMgr = _unresolved_3.battleDataMgr;
    }, function (_unresolved_4) {
      battleLogicMgr = _unresolved_4.battleLogicMgr;
    }, function (_unresolved_5) {
      BattleCard = _unresolved_5.BattleCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4fa1r4HzRDI6VvVUIj+k/w", "Out_HandToTerrain_2d", undefined);

      __checkObsolete__(['Node', 'tween', 'UITransform', 'v3', 'Vec3']);

      /**
       * 从手牌上场
       */
      _export("Out_HandToTerrain_2d", Out_HandToTerrain_2d = class Out_HandToTerrain_2d extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          if (this.data && this.data.card) {
            this.toShow();
          } else {
            console.error("手牌到地形区域数据为空");
            this.showEnd();
          }
        }

        reset() {}

        toShow() {
          if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.data.toTerrainPlayerId)) {
            var isCheck = false;

            for (var area of (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListA) {
              if (area.terrainData.instId) {
                for (var grid of area.gridList) {
                  if (grid.cardData && grid.cardData.instId == this.data.card.instId) {
                    grid.setData(this.data.card);
                    isCheck = true;
                    break;
                  }
                }
              }

              if (isCheck) break;
            }

            this.showEnd();
          } else {
            (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).showCardLayer.active = true;
            var layerTrans = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).showCardLayer.getComponent(UITransform);
            var startPos = layerTrans.convertToWorldSpaceAR(v3(layerTrans.width * 0.5, layerTrans.height * 0.5, 0));
            var targetPos;
            var terrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormId(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
            var _isCheck = false;

            for (var _area of (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListB) {
              if (_area.terrainData.instId == terrainData.instId) {
                for (var _grid of _area.gridList) {
                  if (!_grid.cardData) {
                    targetPos = _grid.node.worldPosition;

                    _grid.setData(this.data.card);

                    _isCheck = true;
                    break;
                  }
                }
              }

              if (_isCheck) break;
            }

            var card = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).fromPoolCard;
            var cardComp = card.getComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
              error: Error()
            }), BattleCard) : BattleCard) || card.addComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
              error: Error()
            }), BattleCard) : BattleCard);
            cardComp.setData(this.data.card);
            card.position = startPos;
            tween(card).to(0.5, {
              worldPosition: targetPos
            }, {
              easing: 'cubicIn'
            }).call(() => {
              (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).putCardToPool(card);
              this.showEnd();
            }).start();
          }
        }

        showEnd() {
          this.exit();
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).showCardLayer.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c60132e8abb1e131324f89b73363b8bf3b71aa02.js.map