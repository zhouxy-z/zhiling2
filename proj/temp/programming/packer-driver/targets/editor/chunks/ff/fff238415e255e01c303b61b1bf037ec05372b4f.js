System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, CardCollectLvHeadItem, _crd;

  function _reportPossibleCrUseOfStdPlayerLevel(extras) {
    _reporterNs.report("StdPlayerLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("CardCollectLvHeadItem", void 0);

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

      _cclegacy._RF.push({}, "e88fbXGRwhN24smM+A4hatS", "CardCollectLvHeadItem", undefined);

      __checkObsolete__(['Node', 'Component', 'Label', 'Color']);

      _export("CardCollectLvHeadItem", CardCollectLvHeadItem = class CardCollectLvHeadItem extends Component {
        constructor(...args) {
          super(...args);
          this.lineRight = void 0;
          this.lvBg1 = void 0;
          this.lvBg2 = void 0;
          this.lvBg3 = void 0;
          this.lvLab = void 0;
          this.lvLabColor = void 0;
          this.isInit = false;
          this.data = void 0;
          this.curLv = void 0;
        }

        onLoad() {
          this.lineRight = this.node.getChildByPath("lineRightCont/lineRight");
          this.lvBg1 = this.node.getChildByPath("lvCont/lvBg1");
          this.lvBg2 = this.node.getChildByPath("lvCont/lvBg2");
          this.lvBg3 = this.node.getChildByPath("lvCont/lvBg3");
          this.lvLab = this.node.getChildByPath("lvCont/lvLab").getComponent(Label);
          this.lvLabColor = this.lvLab.color;
          this.isInit = true;
          this.updateShow();
        }

        SetData(data, curLv) {
          this.data = data;
          this.curLv = curLv;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;

          if (this.data.Level < this.curLv) {
            this.lvLab.node.active == true;
            this.lvLab.isBold = false;
            this.lvBg1.active = true;
            this.lvBg2.active = false;
            this.lvBg3.active = false;
            this.lineRight.active = true;
            this.lvLabColor.fromHEX("#D6B480");
          } else if (this.data.Level == this.curLv) {
            this.lvLab.node.active == true;
            this.lvLab.isBold = true;
            this.lvBg1.active = false;
            this.lvBg2.active = true;
            this.lvBg3.active = false;
            this.lineRight.active = false;
            this.lvLabColor.fromHEX("#D94504");
          }

          this.lvLab.string = this.data.Level.toString();
          this.lvLab.color = this.lvLabColor;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fff238415e255e01c303b61b1bf037ec05372b4f.js.map