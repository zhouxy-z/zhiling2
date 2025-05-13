System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, BeforeGameUtils, _crd;

  _export("BeforeGameUtils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f435BbyPRCs5bKPw9wqKDp", "BeforeGameUtils", undefined);
      /**
       * 此文件用于游戏初始化前的所有定义与声明，防止其他类文件互相引用时的先后顺序导致的异常
       */


      __checkObsolete__(['js']);

      _export("BeforeGameUtils", BeforeGameUtils = class BeforeGameUtils {
        /**
         * 传入参数转为哈希map布尔值
         * @param args 
         * @returns 
         */
        static toHashMap(...args) {
          let result = js.createMap();

          for (const val of args) {
            result[val] = true;
          }

          return result;
        }
        /**
         * 传入参数转为哈希map对象
         * @param args 
         * @returns 
         */


        static toHashMapObj(...args) {
          let result = js.createMap();
          var val, key;
          var len = args.length;

          for (var i = 0; i < len; i++) {
            key = args[i];
            val = args[++i];
            result[key] = val;
          }

          return result;
        }

        static generateSafeFunction(fn) {
          var _fn$name;

          let code = fn.toString();
          let bodyStart = code.indexOf('{') + 1;
          let bodyEnd = code.lastIndexOf('}');
          let fnBody = code.slice(bodyStart, bodyEnd);
          let newFnCode = `return function ${(_fn$name = fn.name) != null ? _fn$name : 'anonymous'}() { ${fnBody} }`;
          return new Function(newFnCode)();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=816c5f13f50f6143eb8c8cbdcb159450338a239d.js.map