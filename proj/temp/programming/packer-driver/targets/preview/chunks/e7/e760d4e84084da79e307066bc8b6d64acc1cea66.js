System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, find, Layers, RenderTexture, SpriteFrame, UITransform, v2, Utils, _dec, _class, _class2, _crd, ccclass, property, FilmMaker;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "./Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      find = _cc.find;
      Layers = _cc.Layers;
      RenderTexture = _cc.RenderTexture;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d8e2ou1h9FaIZ01wKQWp0s", "FilmMaker", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'find', 'Layers', 'Node', 'Rect', 'RenderTexture', 'SpriteFrame', 'UITransform', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FilmMaker", FilmMaker = (_dec = ccclass('FilmMaker'), _dec(_class = (_class2 = class FilmMaker extends Component {
        constructor() {
          super(...arguments);
          this.caches = {};
          this.camera = void 0;
          this.queue = [];
          this.current = void 0;
        }

        onLoad() {
          if (FilmMaker.instance) {
            throw "FilmUtils instance error!";
          }

          FilmMaker.instance = this;
          this.camera = this.getComponent(Camera);
        }

        update(dt) {
          if (this.current) this.render();

          if (this.queue.length) {
            var param = this.queue.shift();
            this.shoot(param);
          }
        }

        static Shoot(node, cb) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.instance.caches[node.uuid]) {
              return Promise.resolve(_this.instance.caches[node.uuid]);
            }

            if (!node.activeInHierarchy || !node.getComponent(UITransform)) {
              return Promise.reject();
            }

            if (_this.instance.current && _this.instance.current.target == node) {
              return _this.instance.current.p;
            }

            var queue = _this.instance.queue;

            for (var _param of queue) {
              if (_param.target == node) return _param.p;
            }

            var h;
            var promise = new Promise((resolve, reject) => {
              h = resolve;
            });
            var param = {
              cb: cb,
              handle: h,
              tex: undefined,
              rect: undefined,
              target: node,
              layers: {},
              p: promise
            };

            _this.instance.queue.push(param);

            return promise;
          })();
        }

        shoot(param) {
          var layers = {};
          var target = param.target;
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).MapChildrenFor(target, child => {
            layers[child.uuid] = child.layer;
            child.layer = Layers.Enum['SPRITE_FRAME'];
          });
          param.layers = layers;
          var canvas = find(target.getPathInHierarchy().split("/")[0]);
          param.rect = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).GetBoundingBoxTo(target, canvas);
          this.camera.node.setPosition(param.rect.center.x, param.rect.center.y);
          var size = canvas.getComponent(UITransform).contentSize;
          param.rect.center = v2(-size.width / 2, -size.height / 2);
          param.tex = new RenderTexture();
          param.tex.initialize({
            width: size.width,
            height: size.height
          });
          this.camera.targetTexture = param.tex;
          this.current = param;
        }

        render() {
          if (!this.current) return;
          var spriteFrame = new SpriteFrame();
          spriteFrame.texture = this.current.tex;
          spriteFrame.rect = this.current.rect;
          var layers = this.current.layers;
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).MapChildrenFor(this.current.target, child => {
            child.layer = layers[child.uuid];
          });
          this.caches[this.current.target.uuid] = spriteFrame;
          this.current.cb && this.current.cb(spriteFrame);
          this.current.handle(spriteFrame);
          this.current.cb = undefined;
          this.current.handle = undefined;
          this.current.rect = undefined;
          this.current.target = undefined;
          this.current.tex = undefined;
          this.current = undefined;
        }

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e760d4e84084da79e307066bc8b6d64acc1cea66.js.map