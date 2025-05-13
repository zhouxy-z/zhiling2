System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Layers, find, geometry, math, view, GameSet, _crd;

  _export("GameSet", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      Layers = _cc.Layers;
      find = _cc.find;
      geometry = _cc.geometry;
      math = _cc.math;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1890fRb79NCgL4u1qZaosgj", "GameSet", undefined);

      __checkObsolete__(['Camera', 'InstanceMaterialType', 'Layers', 'Vec3', 'director', 'find', 'geometry', 'math', 'view']);

      _export("GameSet", GameSet = class GameSet {
        static addTick(cb, thisObj) {
          let result = this.handles.find(obj => obj.func == cb && obj.thisObj == thisObj);
          if (result) return;
          this.handles.push({
            func: cb,
            thisObj: thisObj
          });
        }

        static removeTick(cb, thisObj) {
          let index = this.handles.findIndex(obj => obj.func == cb && obj.thisObj == thisObj);
          if (index == -1) return;
          this.handles.splice(index, 1);
        }

        static update(dt) {
          for (let obj of this.handles) {
            obj.func.call(obj.thisObj, dt);
          }
        }

        /**
         * 获取主摄像机
         */
        static get mainCamera() {
          if (!this._mainCamera) {
            this._mainCamera = find("MainCamera").getComponent(Camera);
          }

          return this._mainCamera;
        }
        /**
         * 获取ui摄像机
         */


        static get UICamera() {
          if (!this._uiCamera) {
            this._uiCamera = find("Canvas/Camera").getComponent(Camera);
          }

          return this._uiCamera;
        }

      });

      GameSet.Version = "v1.0.10";
      GameSet.globalCfg = void 0;
      GameSet.handles = [];
      GameSet.SceneHight = 0;
      GameSet._mainCamera = void 0;
      GameSet._uiCamera = void 0;
      GameSet.Lay_Scene = Layers.Enum['SCENE'];

      /**像素与世界单位(米)的比例 */
      GameSet.PixelSize = 0.01;

      /**视窗像素 */
      GameSet.viewSize = view.getVisibleSizeInPixel();

      /**地平面 */
      GameSet.ScenePlane = geometry.Plane.create(0, 1, 0, 0);
      GameSet.HandPlane = void 0;
      GameSet.ShowPoint = void 0;
      GameSet.ScreamRotation = math.quat();
      GameSet.GiantPoster = void 0;
      GameSet.CardWide = 4.1 * 1.1;
      GameSet.CardHide = 5.2 * 1.1;
      GameSet.debug = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9cb3c448ac12e2bb7175433cb0be8d855c000187.js.map