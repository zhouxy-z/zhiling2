System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Card, Utils, CardAwardItem, _crd;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("CardAwardItem", void 0);

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
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd55emGru5L6amySkBWsnu/", "CardAwardItem", undefined);

      __checkObsolete__(['Node', 'Component', 'Label']);

      _export("CardAwardItem", CardAwardItem = class CardAwardItem extends Component {
        constructor() {
          super(...arguments);
          this.card = void 0;
          this.lock = void 0;
          this.getImg = void 0;
          this.isInit = false;
          this.data = void 0;
        }

        onLoad() {
          this.card = this.node.getChildByPath("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.lock = this.node.getChildByPath("lock");
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

          if (!this.data.id) {
            this.lock.active = true;
            this.getImg.active = false;
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.card.node, true);
          } else {
            this.lock.active = false;
            this.getImg.active = true;
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.card.node, false);
          }

          this.card.SetData(this.data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=38814b41b119670034370497ef911adce694f70d.js.map