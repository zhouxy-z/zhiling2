System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Panel, MsgPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("MsgPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51b11fmNntCTIwi0dbbilzM", "MsgPanel", undefined);

      __checkObsolete__(['Label']);

      _export("MsgPanel", MsgPanel = class MsgPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/common/MsgPanel";
          this.msgLabel = void 0;
        }

        onLoad() {
          this.msgLabel = this.find("bar/Label", Label);
        }

        onShow() {}

        flush(msg) {
          console.log(msg);

          if (!msg || msg == "") {
            this.Hide();
            return;
          }

          this.msgLabel.string = msg;
          this.scheduleOnce(this.Hide.bind(this), 2);
        }

        onHide() {
          this.unscheduleAllCallbacks();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6e39d4c53a3ad058bd125f05f0d21a8d1faaea7.js.map