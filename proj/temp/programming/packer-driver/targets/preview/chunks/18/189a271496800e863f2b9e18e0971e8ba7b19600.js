System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ScrollView, Label, Panel, CfgMgr, Tips3, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("Tips3", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ScrollView = _cc.ScrollView;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c67498V5EdPpoHgDxJgMv0K", "Tips3", undefined);

      __checkObsolete__(['RichText', 'ScrollView', 'UITransform', 'Node', 'Widget', 'Label']);

      _export("Tips3", Tips3 = class Tips3 extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/ui/Tips3";
          this.ScrollView = void 0;
          this.label = void 0;
          this.titleLab = void 0;
        }

        onLoad() {
          this.titleLab = this.find("frame/titleLab", Label);
          this.label = this.find("frame/ScrollView/view/content/label", Label);
          this.ScrollView = this.find("frame/ScrollView", ScrollView);
          this.CloseBy("frame/topCont/close"); // this.CloseBy("mask");
        }

        onShow() {}

        flush(id) {
          var str_cfg = this.GetLanguageById(id);
          var result = str_cfg.Desc.replace(/\\n/g, '\n');
          this.label.string = result;
          this.titleLab.string = str_cfg.Title;
          this.ScrollView.scrollToTop(0.01);
        }

        GetLanguageById(id) {
          var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("RiskWarning");

          for (var iterator of cfg) {
            if (iterator.ID == id) {
              return iterator;
            }
          }

          return null;
        }

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=189a271496800e863f2b9e18e0971e8ba7b19600.js.map