System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Card, VSFightLogCardItem, _crd;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("VSFightLogCardItem", void 0);

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

      _cclegacy._RF.push({}, "0f0e1UHat9D3JxRAbcFZQdX", "VSFightLogCardItem", undefined);

      __checkObsolete__(['Component']);

      _export("VSFightLogCardItem", VSFightLogCardItem = class VSFightLogCardItem extends Component {
        constructor() {
          super(...arguments);
          this.card = void 0;
          this.isInit = false;
          this.data = void 0;
        }

        onLoad() {
          this.card = this.node.getChildByPath("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.card.setIsShowUpEffect(false);
          this.isInit = true;
          if (this.data) this.updateShow();
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.card.SetData(this.data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eaf1dfbc6db28ad754608594fb8ba5c01e708464.js.map