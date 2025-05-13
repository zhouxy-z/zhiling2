export class ObjectUtils
{
    /**
     * 深拷贝
     * @param source 源数据
     */
    public static deepCopy<T>(source: T): T {
        if (typeof source !== "object" || source === null || source instanceof RegExp) {
            return source;
        }

        let result: any = null;
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
    public static isObjEqual<T>(obj1:T, obj2:T):boolean {
        const objType = function(data){
            if(data instanceof Object)return "Object";
            if(data instanceof Array) return "Array";
            return null;
        }
        if (!objType(obj1) || !objType(obj2)) throw new Error(`对比数据错误数据应该是对象或数组`);

        if (objType(obj1) !== objType(obj2)) throw new Error(`对比数据错误数据类型不同不可对比`);

        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

        let tempKeys = Object.keys({...obj1, ...obj2});

        for (const key of tempKeys) {
            if (objType(obj1[key])) {
                return this.isObjEqual(obj1[key], obj2[key]);
            } else {
                let vala = obj1[key];
                let valb = obj2[key];
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }
        }
        return true;
    }
}
