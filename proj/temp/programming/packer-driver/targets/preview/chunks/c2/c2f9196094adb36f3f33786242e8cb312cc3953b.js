System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, Label, path, SpriteFrame, ResMgr, CardCollectQualItem, _crd;

  function _reportPossibleCrUseOfStdCardUpgradeShow(extras) {
    _reporterNs.report("StdCardUpgradeShow", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("CardCollectQualItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      path = _cc.path;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "552c6Y5gexA/Ja87GN0mk84", "CardCollectQualItem", undefined);

      __checkObsolete__(['Node', 'Component', 'Sprite', 'Label', 'path', 'SpriteFrame']);

      _export("CardCollectQualItem", CardCollectQualItem = class CardCollectQualItem extends Component {
        constructor() {
          super(...arguments);
          this.bg = void 0;
          this.nameLab = void 0;
          this.expLab = void 0;
          this.isInit = false;
          this.data = void 0;
        }

        onLoad() {
          this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
          this.nameLab = this.node.getChildByPath("nameCont/nameLab").getComponent(Label);
          this.expLab = this.node.getChildByPath("expCont/expLab").getComponent(Label);
          this.isInit = true;
          this.updateShow();
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.nameLab.string = this.data.QualityName;
          this.expLab.string = "+" + this.data.AddExp;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/cardCollect", "qualNameBg_" + this.data.CardQuality, "spriteFrame"), SpriteFrame, res => {
            this.bg.spriteFrame = res;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2f9196094adb36f3f33786242e8cb312cc3953b.js.map