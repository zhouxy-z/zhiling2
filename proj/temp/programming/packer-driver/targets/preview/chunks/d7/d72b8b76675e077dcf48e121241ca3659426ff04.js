System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, BattleGrid, _crd;

  _export("BattleGrid", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "830d7sbb4dHq5e1PENTTFOJ", "BattleGrid", undefined);

      __checkObsolete__(['Node', 'Component']);

      _export("BattleGrid", BattleGrid = class BattleGrid extends Component {
        constructor() {
          super(...arguments);
          this.cardCont = void 0;
          //卡牌容器
          this.gridId = void 0;
          //格子id
          this.isInit = false;
          this.cardNode = void 0;
        }

        onLoad() {
          this.cardCont = this.node.getChildByName("cardCont");
          this.isInit = true;
        }

        updateShow() {
          if (!this.isInit || !this.gridId) return;

          if (this.cardNode) {
            this.cardNode.parent = this.cardCont;
          }
        }

        setData(gridId) {
          this.gridId = gridId;
        }
        /**
         * 添加卡牌节点
         */


        addCardNode(cardNode) {
          if (!this.isInit || !this.gridId) {
            this.cardNode = cardNode;
          }

          this.updateShow();
        }
        /**
         * 移除卡牌节点
         */


        removeCardNode() {
          if (this.cardNode && this.cardNode.parent) {
            this.cardNode.removeFromParent();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d72b8b76675e077dcf48e121241ca3659426ff04.js.map