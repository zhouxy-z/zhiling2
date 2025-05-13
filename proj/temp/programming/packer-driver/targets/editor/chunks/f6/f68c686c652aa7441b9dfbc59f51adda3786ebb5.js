System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ShopCommPage, ShopPvpPage, _crd;

  function _reportPossibleCrUseOfShopCommPage(extras) {
    _reporterNs.report("ShopCommPage", "./ShopCommPage", _context.meta, extras);
  }

  _export("ShopPvpPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ShopCommPage = _unresolved_2.ShopCommPage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9b01MfxCJFuJnVFgtiW89T", "ShopPvpPage", undefined);

      _export("ShopPvpPage", ShopPvpPage = class ShopPvpPage extends (_crd && ShopCommPage === void 0 ? (_reportPossibleCrUseOfShopCommPage({
        error: Error()
      }), ShopCommPage) : ShopCommPage) {
        onLoad() {
          super.onLoad();
        }

        onShow() {
          super.onShow();
        }

        onHide() {
          super.onHide();
        }

        UpdateShow() {
          super.UpdateShow();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f68c686c652aa7441b9dfbc59f51adda3786ebb5.js.map