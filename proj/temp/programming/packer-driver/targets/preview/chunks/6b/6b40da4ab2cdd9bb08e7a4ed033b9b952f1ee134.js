System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ObjectUtils, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  _export("ObjectUtils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5364dl7T7tA8ouetPKxassi", "ObjectUtils", undefined);

      _export("ObjectUtils", ObjectUtils = class ObjectUtils {
        /**
         * 深拷贝
         * @param source 源数据
         */
        static deepCopy(source) {
          if (typeof source !== "object" || source === null || source instanceof RegExp) {
            return source;
          }

          var result = null;

          if (Array.isArray(source)) {
            result = [];

            for (var item of source) {
              result.push(this.deepCopy(item));
            }
          } else if (source instanceof Map) {
            result = new Map();
            source.forEach((val, key) => {
              result.set(key, this.deepCopy(val));
            });
          } else {
            result = {};

            for (var key in source) {
              result[key] = this.deepCopy(source[key]);
            }
          }

          return result;
        }
        /**
         * 判断两个对象值是否全等
         * @param obj1 
         * @param obj2 
         * @returns 
         */


        static isObjEqual(obj1, obj2) {
          var objType = function objType(data) {
            if (data instanceof Object) return "Object";
            if (data instanceof Array) return "Array";
            return null;
          };

          if (!objType(obj1) || !objType(obj2)) throw new Error("\u5BF9\u6BD4\u6570\u636E\u9519\u8BEF\u6570\u636E\u5E94\u8BE5\u662F\u5BF9\u8C61\u6216\u6570\u7EC4");
          if (objType(obj1) !== objType(obj2)) throw new Error("\u5BF9\u6BD4\u6570\u636E\u9519\u8BEF\u6570\u636E\u7C7B\u578B\u4E0D\u540C\u4E0D\u53EF\u5BF9\u6BD4");
          if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
          var tempKeys = Object.keys(_extends({}, obj1, obj2));

          for (var key of tempKeys) {
            if (objType(obj1[key])) {
              return this.isObjEqual(obj1[key], obj2[key]);
            } else {
              var vala = obj1[key];
              var valb = obj2[key];

              if (obj1[key] !== obj2[key]) {
                return false;
              }
            }
          }

          return true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b40da4ab2cdd9bb08e7a4ed033b9b952f1ee134.js.map