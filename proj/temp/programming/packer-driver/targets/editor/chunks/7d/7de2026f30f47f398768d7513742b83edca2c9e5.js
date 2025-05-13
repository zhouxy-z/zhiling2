System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Card, CardCollectBoxCardItem, _crd;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("CardCollectBoxCardItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Card = _unresolved_2.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fc8beoLvpLVY6MgXOD3hyw", "CardCollectBoxCardItem", undefined);

      __checkObsolete__(['Node', 'Component']);

      _export("CardCollectBoxCardItem", CardCollectBoxCardItem = class CardCollectBoxCardItem extends Component {
        constructor(...args) {
          super(...args);
          this.card = void 0;
          this.getImg = void 0;
          this.isInit = false;
          this.data = void 0;
        }

        onLoad() {
          this.card = this.node.getChildByPath("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.getImg = this.node.getChildByPath("getImg");
          this.isInit = true;
          this.updateShow();
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.getImg.active = this.data.isGet;
          this.card.setCardMask(this.data.isGet);
          this.card.SetData(this.data.cardData);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7de2026f30f47f398768d7513742b83edca2c9e5.js.map