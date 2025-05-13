System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Panel, TopUI, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
          this.prefab = 'prefabs/main/TopUI';
        }

        onLoad() {}

        onShow() {}

        flush() {}

        onHide() {}

        static Show() {
          return this.ShowMsg(...arguments);
        }

        static addChild(value) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.$instance) yield _this.ShowMsg();

            _this.$instance.node.addChild(value);
          })();
        }

        static removeChild(value) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.$instance) return;

            _this2.$instance.node.removeChild(value);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b605fbb0644711b952a7bc085928406c16ca2d9.js.map