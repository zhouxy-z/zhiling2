System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, EventMgr, Evt_Compose, Panel, ComposePanel, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Compose(extras) {
    _reporterNs.report("Evt_Compose", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("ComposePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_Compose = _unresolved_2.Evt_Compose;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2400iAWXpAoZhibkKVd8do", "ComposePanel", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Sprite', 'sp']);

      _export("ComposePanel", ComposePanel = class ComposePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/panel/bag/ComposePanel";
          this.composeBtn = void 0;
        }

        onLoad() {
          this.CloseBy("Main/closeBtn");
          this.CloseBy("mask");
          this.composeBtn = this.find(`Main/composeBtn`);
          this.composeBtn.on(Input.EventType.TOUCH_END, this.onClickCompose, this);
        }

        static showByItemId(ItemID) {
          this.Show(ItemID);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Compose === void 0 ? (_reportPossibleCrUseOfEvt_Compose({
            error: Error()
          }), Evt_Compose) : Evt_Compose, this.onCompose, this);
        }

        onHide(...args) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Compose === void 0 ? (_reportPossibleCrUseOfEvt_Compose({
            error: Error()
          }), Evt_Compose) : Evt_Compose);
        }

        async flush(ItemID) {}

        onClickCompose() {}

        onCompose(data) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a919890069ec5a34138e0aff355cd3c5e582e72.js.map