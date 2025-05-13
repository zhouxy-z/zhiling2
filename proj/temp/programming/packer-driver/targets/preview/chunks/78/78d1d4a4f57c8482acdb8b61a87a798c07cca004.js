System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, CardGroupCoverItem, VSCardGruopItem, _crd;

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "../common/CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("VSCardGruopItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      CardGroupCoverItem = _unresolved_2.CardGroupCoverItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f4551LEetK0YwLqVC1aqeF", "VSCardGruopItem", undefined);

      __checkObsolete__(['Component']);

      _export("VSCardGruopItem", VSCardGruopItem = class VSCardGruopItem extends Component {
        constructor() {
          super(...arguments);
          this.cardGroup = void 0;
          this.isInit = false;
          this.data = void 0;
        }

        onLoad() {
          this.cardGroup = this.node.getChildByPath("CardGroupCoverItem").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.isInit = true;
          this.updateShow();
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.cardGroup.SetData(this.data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78d1d4a4f57c8482acdb8b61a87a798c07cca004.js.map