System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, RichText, ScrollView, UITransform, Widget, Panel, CfgMgr, Tips2, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("Tips2", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      RichText = _cc.RichText;
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d892b7D8OxKr5JU/uw6/7OM", "Tips2", undefined);

      __checkObsolete__(['RichText', 'ScrollView', 'UITransform', 'Node', 'Widget']);

      _export("Tips2", Tips2 = class Tips2 extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/common/Tips2";
          this.ScrollView = void 0;
          this.label = void 0;
          this.scroll_max_height = 500;
        }

        onLoad() {
          this.label = this.find("frame/ScrollView/view/content/label", RichText);
          this.ScrollView = this.find("frame/ScrollView", ScrollView);
          this.CloseBy("frame/topCont/close");
          this.CloseBy("mask");
        }

        onShow() {}

        flush(id) {
          var str = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetInstructionsById(id);
          var result = str.replace(/\\n/g, '\n');
          this.label.string = result;
          var listUi = this.ScrollView.getComponent(UITransform);
          var labH = this.label.node.getComponent(UITransform).height;
          listUi.height = labH >= this.scroll_max_height ? this.scroll_max_height : labH;
          var view = this.find("frame/ScrollView/view");
          var viewWidget = view.getComponent(Widget);
          viewWidget.updateAlignment();
          this.ScrollView.scrollToTop(0.01);
        }

        onHide() {}

        onLabSizeChange() {
          console.log("-------->" + this.label.node.getComponent(UITransform).height);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab228d788e7995e45f99cc1303f929fc558c4e06.js.map