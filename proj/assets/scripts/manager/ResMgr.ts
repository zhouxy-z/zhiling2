import { Asset, EffectAsset, ImageAsset, Material, Node, Sprite, SpriteFrame, Texture2D, UITransform, __private, assetManager, error, resources } from "cc";

let resMap: Map<string, any> = new Map<string, any>();
type classz<T = unknown> = new (...args: any[]) => T;
let $seed = 0;
let $loadSeed = {};

export class ResMgr {
    static LoadSeed(obj: Node | string) {
        let uuid: string;
        if (obj instanceof Node) {
            uuid = obj.uuid;
        } else {
            uuid = obj;
        }
        $loadSeed[uuid] = ++$seed;
        return $loadSeed[uuid];
    }
    static CheckSeed(obj: Node | string, seed: number) {
        let uuid: string;
        if (obj instanceof Node) {
            uuid = obj.uuid;
        } else {
            uuid = obj;
        }
        return $loadSeed[uuid] == seed;
    }

    /**
     * 预加载
     */
    static async PrevLoad() {
        let success1: Function;
        let promise1: Promise<any> = new Promise((resolve, reject) => {
            success1 = resolve;
        });
        assetManager.loadBundle("res", (err, ab) => {
            success1(ab);
        });

        let success2: Function;
        let promise2: Promise<any> = new Promise((resolve, reject) => {
            success2 = resolve;
        })
        resources.loadDir('materials', (err, data) => {
            ResMgr.depth_material_uuid = resources.get("materials/depth-test-spine", Material).uuid;
            success2();
        })

        return Promise.all([promise1, promise2]);
    }

    static depth_material_uuid: string;
    static async getDepthMaterial() {
        return this.GetResources<Material>("materials/depth-test-spine");
    }

    /**
     * 获取已加载的资源
     * @param path 
     * @returns 
     */
    static GetAsset<T>(path: string) {
        if (resMap[path]) {
            let res: T = resMap[path];
            return res;
        }
        return undefined;
    }

    /**
     * 加载resources
     * @param path 
     * @param cb 
     */
    static async GetResources<T>(path: string, cb?: (res: T) => void, onProgress?: (value: number, total: number) => void) {
        if (path == "ui") throw path;
        if (path == "gameobj") {
            throw "error";
        }
        if (resMap[path]) {
            let res: T = resMap[path];
            cb && cb(res);
            return Promise.resolve(res);
        }
        let success: Function, fail: Function;
        let promise: Promise<T> = new Promise((resolve, reject) => {
            success = resolve;
            fail = reject;
        });
        resources.load(path, onProgress, (err, data) => {
            if (err) {
                error(err);
                cb && cb(null);
                fail();
            } else {
                let res = data as (T);
                resMap.set(path, res);
                cb && cb(res);
                success(res);
            }
        });
        return promise;
    }
    /**
     * 判断资源是否已加载
     * @param path 
     * @returns 
     */
    static HasResource(path: string) {
        if (resources.getInfoWithPath(path)) {
            return true;
        }
        const resAb = assetManager.getBundle("res");
        if (resAb.getInfoWithPath(path)) return true;
        return false;
    }


    /**
     * 加载res包资源
     * @param path 资源路径
     * @param resType 资源类型
     * @param cb 回调
     * @returns 
     */
    public static LoadResAbSub<T extends Asset>(path: string, resType: classz<T>, cb?: (res: T) => void): Promise<T> {
        let uri = "res/" + path;
        if (<any>resType === SpriteFrame) {
            if (uri.split(/[\\\/]/).pop() != "spriteFrame") uri += "spriteFrame";
        }
        if (resMap[uri]) return resMap[uri];
        let resAb = assetManager.getBundle("res");
        if (!resAb.getInfoWithPath(path)) {
            console.warn("无此资源:" + path);
            cb?.(undefined);
            return Promise.resolve(undefined);
        }
        return new Promise((resolve, reject) => {
            // 加载 Prefab
            resAb.load(path, resType, function (err, resData) {
                if (err) {
                    error(err);
                    resolve(undefined);
                }
                if (resData) {
                    cb && cb(resData as T);
                    resolve(resData);
                }

            });
        })


    }

    /**
     * 加载远程资源
     * @param url 
     * @param cb 
     * @returns 
     */
    static async LoadRemoteSpriteFrame<T>(url: string, cb?: (res: SpriteFrame) => void) {
        let success: Function, fail: Function;
        let promise: Promise<T> = new Promise((resolve, reject) => {
            success = resolve;
            fail = reject;
        });
        if (resMap[url]) {
            cb && cb(resMap[url]);
            success(resMap[url]);
            return promise;
        }
        assetManager.loadRemote<ImageAsset>(url, { maxRetryCount: 1 }, function (err, imageAsset) {
            if (err || !imageAsset) {
                error(err);
                cb && cb(null);
            } else {
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                resMap[url] = spriteFrame;
                cb && cb(spriteFrame);
                success(spriteFrame);
            }
        });
        return promise;
    }
}

/**money */
export const folder_money = "sheets/main/";
/**动态图标 */
export const folder_icon = "sheets/icons/";
/**品质 */
export const folder_quality = "sheets/icons/quality";
/**头像目录 */
export const folder_head = "sheets/icons/head";
/**圆头像 */
export const folder_head_round = "sheets/icons/head/round/";
/**属性图标 */
export const folder_attr = "sheets/icons/attr/";
/**公共图标 */
export const folder_common = "sheets/common";
/**道具图标 */
export const folder_item = "sheets/items/";
/**卡片图标 */
export const folder_card = "sheets/cards/";
/**道具抢夺 */
export const folder_loot = "sheets/loot/";
/**技能图标 */
export const folder_skill = "skill/";
/**公共图标 */
export const folder_mail = "sheets/mails";
/**品质颜色 */
export const quality_color = [`#ffffff`, `#82d760`, `#6bbfe7`, `#e789e7`, `#ffb30f`, `#ec665a`]
/**技能品质颜色 */
export const skill_quality_color = [`#ffffff`, `#8AEF4A`, `#8AE9F5`, `#F188F1`, `#F8B034`, `#F17161`, `#ff0000`, `#00ff00`, `#0000ff`]

/**角色底框品质颜色 */
export const bg_quality_color = [`#ffffff`, `#9ce86c`, `#9edee6`, `#dc9edc`, `#f6b252`, `#ec7769`]

/**音效 */
export const folder_sound = "audio/sound/";

/**bgm */
export const folder_bgm = "audio/music/";

/**环境音效 */
export const folder_scene = "audio/scene/";

/**卡品质 */
export const card_quality = "sheets/cardframe/";

/**卡牌立绘 */
export const roleimage = "sheets/roleimage/";

/**卡牌卡背 */
export const cardBack = "sheets/cardBack/";
