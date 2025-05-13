System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RenderTexture, SpriteFrame, Camera, Layers, director, Sprite, UITransform, RenderRoot2D, Rect, Color, sp, view, instantiate, Mask, Second, Utils, GameObj, ResMgr, GameSet, Snapshot, _crd, ccclass, property;

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "./Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "./Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../manager/GameSet", _context.meta, extras);
  }

  _export("Snapshot", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RenderTexture = _cc.RenderTexture;
      SpriteFrame = _cc.SpriteFrame;
      Camera = _cc.Camera;
      Layers = _cc.Layers;
      director = _cc.director;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      RenderRoot2D = _cc.RenderRoot2D;
      Rect = _cc.Rect;
      Color = _cc.Color;
      sp = _cc.sp;
      view = _cc.view;
      instantiate = _cc.instantiate;
      Mask = _cc.Mask;
    }, function (_unresolved_2) {
      Second = _unresolved_2.Second;
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      GameObj = _unresolved_3.GameObj;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
    }, function (_unresolved_5) {
      GameSet = _unresolved_5.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4d46Hwu2FO7azGqwO7hQQo", "Snapshot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RenderTexture', 'SpriteFrame', 'Camera', 'Layers', 'director', 'Vec3', 'math', 'geometry', 'Sprite', 'UITransform', 'MeshRenderer', 'find', 'Size', 'RenderRoot2D', 'Rect', 'Color', 'v3', 'sp', 'resources', 'Material', 'view', 'instantiate', 'Mask']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Snapshot", Snapshot = class Snapshot extends Component {
        static init() {
          if (!this._instance) {
            var _director$getScene;

            this._root = new Node('Snapshot');
            this._root.layer = 4;

            this._root.addComponent(RenderRoot2D);

            this._instance = this._root.addComponent(Snapshot);
            (_director$getScene = director.getScene()) == null || _director$getScene.addChild(this._root);
            this.sceneCameras = {};
            this.uiCameras = {};
          }

          return this._instance;
        }

        static get Root() {
          return this._root;
        }

        static Add(targetNode) {
          let layer = 4;
          let oldLayer = targetNode.layer;
          targetNode['$$old_layer'] = oldLayer;
          targetNode.layer = targetNode.layer | layer;
          let results = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).MapParentBy(targetNode, Mask);
          results.forEach(value => value.layer = value.layer | layer);
          console.log("layer", targetNode.layer.toString(2), layer.toString(2));
          let size = view.getVisibleSize();
          let width = size.width,
              height = size.height;
          if (!this._instance) this.init();
          if (!targetNode.getComponent) targetNode.addComponent(UITransform);

          if (this.renderMap.has(targetNode)) {
            let obj = this.renderMap.get(targetNode);
            return obj.spriteNode;
          }

          this._root.active = true;
          let obj;
          let cameraNode,
              isNew = false;

          if (oldLayer & Layers.Enum['SCENE']) {
            obj = this.sceneCameras[layer];

            if (!obj) {
              isNew = true;
              let img = new Node();
              img.layer = Layers.Enum.DEFAULT;
              img.addComponent(Sprite);
              obj = {
                camera: undefined,
                img: img,
                tex: undefined
              };
              cameraNode = instantiate((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).mainCamera.node);
              obj.camera = cameraNode.getComponent(Camera);
              obj.camera.node.setWorldPosition((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).mainCamera.node.worldPosition);
              this.sceneCameras[layer] = obj;
            }
          } else {
            obj = this.uiCameras[layer];

            if (!obj) {
              isNew = true;
              let img = new Node();
              img.layer = Layers.Enum.DEFAULT;
              img.addComponent(Sprite);
              obj = {
                camera: undefined,
                img: img,
                tex: undefined
              };
              cameraNode = instantiate((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).UICamera.node);
              obj.camera = cameraNode.getComponent(Camera);
              obj.camera.node.setWorldPosition((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).UICamera.node.worldPosition);
              this.uiCameras[layer] = obj;
            }
          }

          if (isNew) {
            obj.camera.clearColor = new Color(0, 0, 0, 200); // 透明背景

            obj.camera.clearFlags = Camera.ClearFlag.SOLID_COLOR;
            obj.camera.visibility = layer;
            cameraNode.layer = layer;
            obj.camera.priority = -1;

            this._root.addChild(cameraNode);

            let tex = new RenderTexture();
            tex.initialize({
              width: width,
              height: height
            });
            let sf = new SpriteFrame();
            sf.rect = new Rect(0, 0, width, height);
            sf.texture = tex;
            obj.tex = tex;
            obj.img.getComponent(Sprite).spriteFrame = sf;
          }

          if (targetNode instanceof (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
            error: Error()
          }), GameObj) : GameObj)) {
            if (!targetNode.hasLoad) {
              targetNode.GetLoadSub().then(() => {
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).MapChildrenFor(targetNode, child => {
                  child.layer = child.layer | layer;
                });
                obj.camera.targetTexture = obj.tex;
              });
            } else {
              (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(1).then(() => {
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).MapChildrenFor(targetNode, child => {
                  child.layer = child.layer | layer;
                });
                obj.camera.targetTexture = obj.tex;
              });
            }
          } else {
            (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0).then(() => {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).MapChildrenFor(targetNode, child => {
                child.layer = child.layer | layer;
              });
              obj.camera.targetTexture = obj.tex;
            });
          }

          let spriteNode = obj.img;
          this.renderMap.set(targetNode, {
            camera: obj.camera,
            layer: layer,
            masks: results,
            oldLayer: oldLayer,
            spriteNode: spriteNode
          });
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).MapChildrenFor(targetNode, child => {
            let comp = child.getComponent(Sprite) || child.getComponent(sp.Skeleton);

            if (comp) {
              if (!comp.customMaterial || comp.customMaterial.uuid != (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).depth_material_uuid) {
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).getDepthMaterial().then(material => {
                  comp.customMaterial = material;
                });
              }
            }

            child.layer = child.layer | layer;
          });
          return spriteNode;
        }

        static Remove(targetNode) {
          if (!targetNode) {
            this.renderMap.forEach((obj, key) => {
              key.layer = key['$$old_layer'];
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).MapChildrenFor(key, child => {
                child.layer = key['$$old_layer'];
              });
              obj.masks.forEach(value => value.layer = key['$$old_layer']);
            });
            this.renderMap.clear();
          } else if (this.renderMap.has(targetNode)) {
            targetNode.layer = targetNode['$$old_layer'];
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).MapChildrenFor(targetNode, child => {
              child.layer = targetNode['$$old_layer'];
            });
            let obj = this.renderMap.get(targetNode);
            obj.masks.forEach(value => value.layer = targetNode['$$old_layer']);
            this.renderMap.delete(targetNode);
          }
        }

      });

      Snapshot._instance = null;
      Snapshot._root = void 0;
      Snapshot.sceneCameras = {};
      Snapshot.uiCameras = {};
      Snapshot.renderMap = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e395838f2594cf81f23b6da8ed93ef5c3083e24.js.map