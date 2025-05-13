System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Material, Node, SpriteFrame, Texture2D, assetManager, error, resources, ResMgr, _crd, resMap, $seed, $loadSeed, folder_money, folder_icon, folder_quality, folder_head, folder_head_round, folder_attr, folder_common, folder_item, folder_card, folder_loot, folder_skill, folder_mail, quality_color, skill_quality_color, bg_quality_color, folder_sound, folder_bgm, folder_scene, card_quality, roleimage, cardBack;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("ResMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Material = _cc.Material;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      assetManager = _cc.assetManager;
      error = _cc.error;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8851r4LThOaJjgFuX4AGZF", "ResMgr", undefined);

      __checkObsolete__(['Asset', 'EffectAsset', 'ImageAsset', 'Material', 'Node', 'Sprite', 'SpriteFrame', 'Texture2D', 'UITransform', '__private', 'assetManager', 'error', 'resources']);

      resMap = new Map();
      $seed = 0;
      $loadSeed = {};

      _export("ResMgr", ResMgr = class ResMgr {
        static LoadSeed(obj) {
          var uuid;

          if (obj instanceof Node) {
            uuid = obj.uuid;
          } else {
            uuid = obj;
          }

          $loadSeed[uuid] = ++$seed;
          return $loadSeed[uuid];
        }

        static CheckSeed(obj, seed) {
          var uuid;

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


        static PrevLoad() {
          return _asyncToGenerator(function* () {
            var success1;
            var promise1 = new Promise((resolve, reject) => {
              success1 = resolve;
            });
            assetManager.loadBundle("res", (err, ab) => {
              success1(ab);
            });
            var success2;
            var promise2 = new Promise((resolve, reject) => {
              success2 = resolve;
            });
            resources.loadDir('materials', (err, data) => {
              ResMgr.depth_material_uuid = resources.get("materials/depth-test-spine", Material).uuid;
              success2();
            });
            return Promise.all([promise1, promise2]);
          })();
        }

        static getDepthMaterial() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return _this.GetResources("materials/depth-test-spine");
          })();
        }
        /**
         * 获取已加载的资源
         * @param path 
         * @returns 
         */


        static GetAsset(path) {
          if (resMap[path]) {
            var _res = resMap[path];
            return _res;
          }

          return undefined;
        }
        /**
         * 加载resources
         * @param path 
         * @param cb 
         */


        static GetResources(path, cb, onProgress) {
          return _asyncToGenerator(function* () {
            if (path == "ui") throw path;

            if (path == "gameobj") {
              throw "error";
            }

            if (resMap[path]) {
              var _res2 = resMap[path];
              cb && cb(_res2);
              return Promise.resolve(_res2);
            }

            var success, fail;
            var promise = new Promise((resolve, reject) => {
              success = resolve;
              fail = reject;
            });
            resources.load(path, onProgress, (err, data) => {
              if (err) {
                error(err);
                cb && cb(null);
                fail();
              } else {
                var _res3 = data;
                resMap.set(path, _res3);
                cb && cb(_res3);
                success(_res3);
              }
            });
            return promise;
          })();
        }
        /**
         * 判断资源是否已加载
         * @param path 
         * @returns 
         */


        static HasResource(path) {
          if (resources.getInfoWithPath(path)) {
            return true;
          }

          var resAb = assetManager.getBundle("res");
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


        static LoadResAbSub(path, resType, cb) {
          var uri = "res/" + path;

          if (resType === SpriteFrame) {
            if (uri.split(/[\\\/]/).pop() != "spriteFrame") uri += "spriteFrame";
          }

          if (resMap[uri]) return resMap[uri];
          var resAb = assetManager.getBundle("res");

          if (!resAb.getInfoWithPath(path)) {
            console.warn("无此资源:" + path);
            cb == null || cb(undefined);
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
                cb && cb(resData);
                resolve(resData);
              }
            });
          });
        }
        /**
         * 加载远程资源
         * @param url 
         * @param cb 
         * @returns 
         */


        static LoadRemoteSpriteFrame(url, cb) {
          return _asyncToGenerator(function* () {
            var success, fail;
            var promise = new Promise((resolve, reject) => {
              success = resolve;
              fail = reject;
            });

            if (resMap[url]) {
              cb && cb(resMap[url]);
              success(resMap[url]);
              return promise;
            }

            assetManager.loadRemote(url, {
              maxRetryCount: 1
            }, function (err, imageAsset) {
              if (err || !imageAsset) {
                error(err);
                cb && cb(null);
              } else {
                var spriteFrame = new SpriteFrame();
                var texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                resMap[url] = spriteFrame;
                cb && cb(spriteFrame);
                success(spriteFrame);
              }
            });
            return promise;
          })();
        }

      });
      /**money */


      ResMgr.depth_material_uuid = void 0;

      _export("folder_money", folder_money = "sheets/main/");
      /**动态图标 */


      _export("folder_icon", folder_icon = "sheets/icons/");
      /**品质 */


      _export("folder_quality", folder_quality = "sheets/icons/quality");
      /**头像目录 */


      _export("folder_head", folder_head = "sheets/icons/head");
      /**圆头像 */


      _export("folder_head_round", folder_head_round = "sheets/icons/head/round/");
      /**属性图标 */


      _export("folder_attr", folder_attr = "sheets/icons/attr/");
      /**公共图标 */


      _export("folder_common", folder_common = "sheets/common");
      /**道具图标 */


      _export("folder_item", folder_item = "sheets/items/");
      /**卡片图标 */


      _export("folder_card", folder_card = "sheets/cards/");
      /**道具抢夺 */


      _export("folder_loot", folder_loot = "sheets/loot/");
      /**技能图标 */


      _export("folder_skill", folder_skill = "skill/");
      /**公共图标 */


      _export("folder_mail", folder_mail = "sheets/mails");
      /**品质颜色 */


      _export("quality_color", quality_color = ["#ffffff", "#82d760", "#6bbfe7", "#e789e7", "#ffb30f", "#ec665a"]);
      /**技能品质颜色 */


      _export("skill_quality_color", skill_quality_color = ["#ffffff", "#8AEF4A", "#8AE9F5", "#F188F1", "#F8B034", "#F17161", "#ff0000", "#00ff00", "#0000ff"]);
      /**角色底框品质颜色 */


      _export("bg_quality_color", bg_quality_color = ["#ffffff", "#9ce86c", "#9edee6", "#dc9edc", "#f6b252", "#ec7769"]);
      /**音效 */


      _export("folder_sound", folder_sound = "audio/sound/");
      /**bgm */


      _export("folder_bgm", folder_bgm = "audio/music/");
      /**环境音效 */


      _export("folder_scene", folder_scene = "audio/scene/");
      /**卡品质 */


      _export("card_quality", card_quality = "sheets/cardframe/");
      /**卡牌立绘 */


      _export("roleimage", roleimage = "sheets/roleimage/");
      /**卡牌卡背 */


      _export("cardBack", cardBack = "sheets/cardBack/");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59ac5c685a17eec03eeccd408177dad718492fe2.js.map