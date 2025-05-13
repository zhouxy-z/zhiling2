System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, p, pb, _crd;

  function _reportPossibleCrUseOfp(extras) {
    _reporterNs.report("p", "./proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpb(extras) {
    _reporterNs.report("pb", "./proto.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      p = _unresolved_2.default;
      pb = _unresolved_2.pb;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7228vgADJIGZzW9wEUrckB", "PbUtils", undefined);

      pb = (_crd && p === void 0 ? (_reportPossibleCrUseOfp({
        error: Error()
      }), p) : p).pb;

      _export("default", _crd && pb === void 0 ? (_reportPossibleCrUseOfpb({
        error: Error()
      }), pb) : pb);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b564319a9571f02a38081adad01c4265bf5b4ea.js.map