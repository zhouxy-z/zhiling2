System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, UITransform, v3, BattleBaseComp, battleLogicMgr, BattleCard, battleDataMgr, Out_CardDeckFrontToHandTail_2d, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleLogicMgr(extras) {
    _reporterNs.report("battleLogicMgr", "../BattleLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCard(extras) {
    _reporterNs.report("BattleCard", "../BattleCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCardGrid(extras) {
    _reporterNs.report("BattleCardGrid", "../BattleCardGrid", _context.meta, extras);
  }

  _export("Out_CardDeckFrontToHandTail_2d", void 0);

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
      battleLogicMgr = _unresolved_3.battleLogicMgr;
    }, function (_unresolved_4) {
      BattleCard = _unresolved_4.BattleCard;
    }, function (_unresolved_5) {
      battleDataMgr = _unresolved_5.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82372PUralGwY109NlK8ca1", "Out_CardDeckFrontToHandTail_2d", undefined);

      __checkObsolete__(['Node', 'tween', 'UITransform', 'v3', 'Vec3']);

      /**
       * 卡牌由卡组最前到手牌末尾
       */
      _export("Out_CardDeckFrontToHandTail_2d", Out_CardDeckFrontToHandTail_2d = class Out_CardDeckFrontToHandTail_2d extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).showCardLayer.active = true;

          if (this.data.cards && this.data.cards.length) {
            this.creatCard();
          } else {
            console.error("补卡数据为空");
            this.exit();
          }
        }

        reset() {
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).showCardLayer.active = false;
        }

        creatCard() {
          var data = this.data.cards.shift();
          var cardNode = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).fromPoolCard;
          var cardCom = cardNode.getComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
            error: Error()
          }), BattleCard) : BattleCard) || cardNode.addComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
            error: Error()
          }), BattleCard) : BattleCard);
          cardCom.setData(data);
          cardNode.parent = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).showCardLayer;
          cardNode.layer = cardNode.parent.layer;
          cardNode.position = v3(0, 0, 0);
          cardNode.active = true;
          var layerTrans = cardCom.node.parent.getComponent(UITransform);
          var startPos = layerTrans.convertToWorldSpaceAR(cardCom.node.getPosition());
          cardCom.node.worldPosition = startPos;
          var targetPos; //第一视觉补牌

          if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.ownerPlayerId)) {
            for (var grid of (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).handGridList) {
              if (!grid.cardData) {
                targetPos = grid.node.worldPosition;
                break;
              }
            }

            if (targetPos) {
              this.flyCard(cardCom, targetPos);
            } else {
              this.checkNextCard();
            }
          } else {
            targetPos = layerTrans.convertToWorldSpaceAR(v3(layerTrans.width * 0.5, layerTrans.height * 0.5, 0));
            this.flyCard(cardCom, targetPos);
          }
        }

        flyCard(cardCom, targetPos) {
          tween(cardCom.node).to(0.5, {
            worldPosition: targetPos
          }, {
            easing: 'cubicIn'
          }).call(() => {
            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(this.ownerPlayerId)) {
              var grid;

              for (var index = 0; index < (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).handGridList.length; index++) {
                grid = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                  error: Error()
                }), battleLogicMgr) : battleLogicMgr).handGridList[index];

                if (!grid.cardData) {
                  grid.setData(cardCom.cardData);
                  break;
                }
              }
            }

            this.checkNextCard();
          }).start();
        }

        checkNextCard() {
          if (this.data.cards.length > 0) {
            this.creatCard();
          } else {
            this.exit();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aad58d2847f6ac1d724152aa23930602549f4a82.js.map