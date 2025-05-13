System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, p, base, _crd;

  function _reportPossibleCrUseOfp(extras) {
    _reporterNs.report("p", "./proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "./proto.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      p = _unresolved_2.default;
      base = _unresolved_2.base;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99aa4NnnxxCjrgygH+MmMEd", "BaseUtils", undefined);

      base = (_crd && p === void 0 ? (_reportPossibleCrUseOfp({
        error: Error()
      }), p) : p).base;

      _export("default", _crd && base === void 0 ? (_reportPossibleCrUseOfbase({
        error: Error()
      }), base) : base);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2cfe79d0ce98a44d878794129e75d10b6833a1f3.js.map