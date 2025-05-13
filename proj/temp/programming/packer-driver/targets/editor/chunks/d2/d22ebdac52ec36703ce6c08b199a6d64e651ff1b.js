System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, EventMgr, Evt_PvpSerchFinsh, Second, Panel, Tips, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_PvpSerchFinsh(extras) {
    _reporterNs.report("Evt_PvpSerchFinsh", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("Tips", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_PvpSerchFinsh = _unresolved_2.Evt_PvpSerchFinsh;
    }, function (_unresolved_3) {
      Second = _unresolved_3.Second;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b7e4mhFAVMYbZW0q0EqA9X", "Card", undefined);

      __checkObsolete__(['Input', 'Label', 'Node']);

      _export("Tips", Tips = class Tips extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/common/Tips";
          this.label = void 0;
          this.btn1 = void 0;
          this.btn2 = void 0;
          this.okCallback = void 0;
          this.noCallback = void 0;
          this.closeLoop = 0;
        }

        onLoad() {
          this.label = this.find("Label", Label);
          this.btn1 = this.find("btn1");
          this.btn2 = this.find("btn2");
          this.btn1.on(Input.EventType.TOUCH_END, this.onOk, this);
          this.btn2.on(Input.EventType.TOUCH_END, this.onNo, this);
          this.CloseBy("mask");
        }

        onShow() {}

        async flush(msg, okCallBack, noCallBack, autoClose) {
          this.label.string = msg;
          this.okCallback = okCallBack;
          this.noCallback = noCallBack;

          if (okCallBack) {
            this.btn1.active = true;
            this.btn2.active = true;
          } else {
            this.btn1.active = false;
            this.btn2.active = false;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_PvpSerchFinsh === void 0 ? (_reportPossibleCrUseOfEvt_PvpSerchFinsh({
            error: Error()
          }), Evt_PvpSerchFinsh) : Evt_PvpSerchFinsh);

          if (autoClose) {
            this.closeLoop++;
            let loop = this.closeLoop;
            await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(autoClose);
            if (loop != this.closeLoop) return;
            this.Hide();
          }
        }

        onHide(...args) {
          this.okCallback = undefined;
          this.noCallback = undefined;
          this.closeLoop++;
        }

        onOk() {
          this.okCallback && this.okCallback();
          this.Hide();
        }

        onNo() {
          this.noCallback && this.noCallback();
          this.Hide();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d22ebdac52ec36703ce6c08b199a6d64e651ff1b.js.map