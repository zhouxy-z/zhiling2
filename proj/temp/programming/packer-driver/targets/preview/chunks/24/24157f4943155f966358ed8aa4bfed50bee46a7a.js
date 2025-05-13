System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, ShopTabBtnItem, _crd;

  function _reportPossibleCrUseOfStdShopGroup(extras) {
    _reporterNs.report("StdShopGroup", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("ShopTabBtnItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa6abNs4vRLJKZLH4dAqERZ", "ShopTabBtnItem", undefined);

      __checkObsolete__(['Component', 'Label', 'Node']);

      _export("ShopTabBtnItem", ShopTabBtnItem = class ShopTabBtnItem extends Component {
        constructor() {
          super(...arguments);
          this.defCont = void 0;
          this.defTabNameLab = void 0;
          this.selectCont = void 0;
          this.selectNameLab = void 0;
          this.isInit = false;
          this.data = void 0;
        }

        onLoad() {
          this.defCont = this.node.getChildByPath("defCont");
          this.defTabNameLab = this.node.getChildByPath("defCont/defTabNameLab").getComponent(Label);
          this.selectCont = this.node.getChildByPath("selectCont");
          this.selectNameLab = this.node.getChildByPath("selectCont/selectTabNameLab").getComponent(Label);
          this.isInit = true;
          this.updateShow();
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.defTabNameLab.string = this.data.ShopName;
          this.selectNameLab.string = this.data.ShopName;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24157f4943155f966358ed8aa4bfed50bee46a7a.js.map