System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, BagPanel, OpenBoxPanel, Decoupling, _crd;

  function _reportPossibleCrUseOfBagPanel(extras) {
    _reporterNs.report("BagPanel", "./module/bag/BagPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenBoxPanel(extras) {
    _reporterNs.report("OpenBoxPanel", "./module/bag/OpenBoxPanel", _context.meta, extras);
  }

  _export("Decoupling", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      BagPanel = _unresolved_2.BagPanel;
    }, function (_unresolved_3) {
      OpenBoxPanel = _unresolved_3.OpenBoxPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59de2XLbaJMyqJma9rftqY0", "Decoupling", undefined);

      __checkObsolete__(['js']);

      _export("Decoupling", Decoupling = class Decoupling {
        constructor() {
          js.setClassName("BagPanel", _crd && BagPanel === void 0 ? (_reportPossibleCrUseOfBagPanel({
            error: Error()
          }), BagPanel) : BagPanel);
          js.setClassName("OpenBoxPanel", _crd && OpenBoxPanel === void 0 ? (_reportPossibleCrUseOfOpenBoxPanel({
            error: Error()
          }), OpenBoxPanel) : OpenBoxPanel);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=037eb0880f1783ad4f1e8076e7bed93b986f5c34.js.map