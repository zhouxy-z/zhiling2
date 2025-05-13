System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AsyncComponent, _dec, _dec2, _class, _crd, ccclass, property, disallowMultiple, requireComponent, GatePass;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AsyncComponent = _unresolved_2.AsyncComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb8f6J3eJBHx7A8gavFnL7n", "GatePass%20copy", undefined);

      __checkObsolete__(['Component', 'Label', 'Sprite', 'SpriteFrame', '_decorator', 'path']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);

      _export("GatePass", GatePass = (_dec = ccclass('GatePass'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class GatePass extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor(...args) {
          super(...args);
          this.bg = void 0;
          this.icon = void 0;
          this.label = void 0;
          this.nameLab = void 0;
        }

        onLoad() {
          this.hasLoad = true;
          super.onLoad();
        }

        async Show(data) {
          if (!this.hasLoad) await this.loadSub;
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b3a0d4a17dc6ce9b0cc2a7d34a838ea835d3fb1.js.map