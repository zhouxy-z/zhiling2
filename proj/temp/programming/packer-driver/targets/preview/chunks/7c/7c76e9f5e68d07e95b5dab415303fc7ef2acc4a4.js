System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // minimal library entry point.
        "use strict";

        module.exports = require("./src/index-minimal"); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './src/index-minimal': _req
      }));
    }
  };
});
//# sourceMappingURL=7c76e9f5e68d07e95b5dab415303fc7ef2acc4a4.js.map