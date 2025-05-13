System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, AsyncComponent, _crd;

  _export("AsyncComponent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f11aK0Ir5B34HyXupinoHU", "AsyncComponent", undefined);

      __checkObsolete__(['Component']);

      _export("AsyncComponent", AsyncComponent = class AsyncComponent extends Component {
        constructor(...args) {
          super(...args);
          this.hasLoad = false;
          this.handle = undefined;
          this.$loadSub = void 0;
        }

        onLoad() {
          this.hasLoad = true;
          this.handle && this.handle();
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let self = this;
          this.$loadSub = new Promise((resolve, reject) => {
            self.handle = resolve;
          });
          return this.$loadSub;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f7f286b115398c060d35b8c2e4053226927f1b6.js.map