System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, EventMgr, Evt_ShopUpdate, ShopBasePage, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ShopUpdate(extras) {
    _reporterNs.report("Evt_ShopUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopGroup(extras) {
    _reporterNs.report("StdShopGroup", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("ShopBasePage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_ShopUpdate = _unresolved_2.Evt_ShopUpdate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a8dcwnEjVIvqVuQMtXQOgi", "ShopPageBase", undefined);

      __checkObsolete__(['Component']);

      _export("ShopBasePage", ShopBasePage = class ShopBasePage extends Component {
        constructor(...args) {
          super(...args);
          this.data = void 0;
          this.shopId = void 0;
          this.isInit = false;
        }

        onLoad() {
          this.isInit = true;
          this.initShow();
          this.initOnShow();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_ShopUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ShopUpdate({
            error: Error()
          }), Evt_ShopUpdate) : Evt_ShopUpdate, this.onShopUpdate, this);
        }

        initShow() {
          if (!this.isInit || !this.data) return;
          this.UpdateShow();
        }

        onShow() {
          this.node.active = true;
          this.initShow();
          this.initOnShow();
        }

        onHide() {
          this.node.active = false;
        }

        SetData(data) {
          this.data = data;
          this.initShow();
        }

        onShopUpdate() {
          if (!this.node.activeInHierarchy) return;
          this.initShow();
        }

        UpdateShow() {}

        initOnShow() {
          if (!this.isInit) return;
          this.updateOnShow();
        }

        updateOnShow() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc36c31d25608d3b3147d962549a5a88a61869a1.js.map