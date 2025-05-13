System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Panel, TopUI, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("TopUI", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b6a0HS/kVMP4PPWk733VIt", "TopUI", undefined);

      __checkObsolete__(['Button', 'CCClass', 'Event', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'PageView', 'UIOpacity', 'UITransform', 'Vec3', '_decorator', 'easing', 'instantiate', 'size', 'tween']);

      _export("TopUI", TopUI = class TopUI extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = 'prefabs/main/TopUI';
        }

        onLoad() {}

        onShow() {}

        flush(...args) {}

        onHide(...args) {}

        static Show(...args) {
          return this.ShowMsg(...args);
        }

        static async addChild(value) {
          if (!this.$instance) await this.ShowMsg();
          this.$instance.node.addChild(value);
        }

        static async removeChild(value) {
          if (!this.$instance) return;
          this.$instance.node.removeChild(value);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b605fbb0644711b952a7bc085928406c16ca2d9.js.map