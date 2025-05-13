System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ObjectUtils, _crd;

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

          let result = null;

          if (Array.isArray(source)) {
            result = [];

            for (let item of source) {
              result.push(this.deepCopy(item));
            }
          } else if (source instanceof Map) {
            result = new Map();
            source.forEach((val, key) => {
              result.set(key, this.deepCopy(val));
            });
          } else {
            result = {};

            for (let key in source) {
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
          const objType = function (data) {
            if (data instanceof Object) return "Object";
            if (data instanceof Array) return "Array";
            return null;
          };

          if (!objType(obj1) || !objType(obj2)) throw new Error(`对比数据错误数据应该是对象或数组`);
          if (objType(obj1) !== objType(obj2)) throw new Error(`对比数据错误数据类型不同不可对比`);
          if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
          let tempKeys = Object.keys({ ...obj1,
            ...obj2
          });

          for (const key of tempKeys) {
            if (objType(obj1[key])) {
              return this.isObjEqual(obj1[key], obj2[key]);
            } else {
              let vala = obj1[key];
              let valb = obj2[key];

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