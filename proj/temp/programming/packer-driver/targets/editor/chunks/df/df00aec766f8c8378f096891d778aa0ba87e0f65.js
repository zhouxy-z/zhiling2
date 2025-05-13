System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, UITransform, v3, BattleBaseComp, battleLogicMgr, BattleCard, battleDataMgr, Out_HandToDrop_2d, _crd;

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

  _export("Out_HandToDrop_2d", void 0);

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

      _cclegacy._RF.push({}, "fdc47GIJixFU6cK//uvqDir", "Out_HandToDrop_2d", undefined);

      __checkObsolete__(['Node', 'tween', 'UITransform', 'v3', 'Vec3']);

      /**
       * 从手卡区到弃卡区
       */
      _export("Out_HandToDrop_2d", Out_HandToDrop_2d = class Out_HandToDrop_2d extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).showCardLayer.active = true;

          if (this.data.card) {
            this.creatCard();
          } else {
            console.error("弃卡数据为空");
            this.exit();
          }
        }

        reset() {
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).showCardLayer.active = false;
        }

        creatCard() {
          let targetPos;
          let startPos;
          let layerTrans = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).showCardLayer.getComponent(UITransform); //第一视觉补牌

          if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.ownerPlayerId)) {
            for (let grid of (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).handGridList) {
              if (grid.cardData && grid.cardData.instId == this.data.card.instId) {
                startPos = grid.node.worldPosition;
                grid.setData(null);
                break;
              }
            }

            targetPos = layerTrans.convertToWorldSpaceAR(v3(-layerTrans.width * 0.5, 0, 0));
          } else {
            startPos = layerTrans.convertToWorldSpaceAR(v3(0, layerTrans.height * 0.5, 0));
            targetPos = layerTrans.convertToWorldSpaceAR(v3(-layerTrans.width * 0.5, 0, 0));
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
          tween(cardCom.node).to(0.5, {
            worldPosition: targetPos
          }, {
            easing: 'cubicIn'
          }).call(() => {
            (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).putCardToPool(cardNode);
            this.exit();
          }).start();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df00aec766f8c8378f096891d778aa0ba87e0f65.js.map