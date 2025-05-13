System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Card, SeasonFightLogCardItem, _crd;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("SeasonFightLogCardItem", void 0);

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

      _cclegacy._RF.push({}, "da42a+jIcNI8ahlJtSV/mDX", "SeasonFightLogCardItem", undefined);

      __checkObsolete__(['Component']);

      _export("SeasonFightLogCardItem", SeasonFightLogCardItem = class SeasonFightLogCardItem extends Component {
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
//# sourceMappingURL=32cfe83ed57934f472798b6aac684c197f669f88.js.map