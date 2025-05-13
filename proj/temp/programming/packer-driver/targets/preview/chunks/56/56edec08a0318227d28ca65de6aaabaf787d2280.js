System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Panel, HomePanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("HomePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21926lp9pFAWL3Qh3XNl2FB", "HomePanel", undefined);

      __checkObsolete__(['Button']);

      _export("HomePanel", HomePanel = class HomePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/home/HomePanel";
          this.vsBtn = void 0;
        }

        //匹配
        onLoad() {
          this.vsBtn = this.find("vsBtn").getComponent(Button);
          this.vsBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        flush() {}

        onShow() {}

        onHide() {}

        onBtnClick(btn) {
          switch (btn) {
            case this.vsBtn:
              break;

            default:
              break;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56edec08a0318227d28ca65de6aaabaf787d2280.js.map