System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, UITransform, v3, Vec3, GameSet, Utils, _dec, _dec2, _dec3, _class, _class2, _crd, ccclass, property, requireComponent, $LayoutV, $LayoutH, Transform3d;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameSet = _unresolved_2.GameSet;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d14e1Yq6dH8rHk+P+C+yfv", "Transform3d", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'Layout', 'math', 'sp', 'Sprite', 'SpriteRenderer', 'UITransform', 'v3', 'Vec3']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      $LayoutV = /*#__PURE__*/function ($LayoutV) {
        $LayoutV[$LayoutV["none"] = 0] = "none";
        $LayoutV[$LayoutV["top"] = 1] = "top";
        $LayoutV[$LayoutV["middle"] = 2] = "middle";
        $LayoutV[$LayoutV["bottom"] = 3] = "bottom";
        return $LayoutV;
      }($LayoutV || {});

      $LayoutH = /*#__PURE__*/function ($LayoutH) {
        $LayoutH[$LayoutH["none"] = 0] = "none";
        $LayoutH[$LayoutH["right"] = 1] = "right";
        $LayoutH[$LayoutH["center"] = 2] = "center";
        $LayoutH[$LayoutH["left"] = 3] = "left";
        return $LayoutH;
      }($LayoutH || {});

      _export("Transform3d", Transform3d = (_dec = ccclass('Transform3d'), _dec2 = property({
        type: Enum($LayoutV)
      }), _dec3 = property({
        type: Enum($LayoutH)
      }), _dec(_class = (_class2 = class Transform3d extends Component {
        constructor() {
          super(...arguments);
          this._layoutV = void 0;
          this._layoutH = void 0;
          this.$width = 0;
          this.$height = 0;
          this.thickness = 1;
          this.mat = void 0;
          this.matInvert = void 0;
          this.$left = void 0;
          this.$right = void 0;
          this.$top = void 0;
          this.$bottom = void 0;
          this.leftv = v3();
          this.rightv = v3();
          this.topv = v3();
          this.bottomv = v3();
        }

        get layoutV() {
          return this._layoutV;
        }

        set layoutV(value) {
          this._layoutV = value;
          var children = this.node.children;

          for (var child of children) {
            var h = 0;
            var ut = child.getComponent(UITransform);

            if (ut) {
              h = ut.height * child.scale.y * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize;
            } else {
              h = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).MapBound(child).height;
            }

            if (value == $LayoutV.top) {
              child.setPosition(child.position.x, h / 2, child.position.z);
            } else if (value == $LayoutV.middle) {
              child.setPosition(child.position.x, 0, child.position.z);
            } else if (value == $LayoutV.bottom) {
              child.setPosition(child.position.x, -h / 2, child.position.z);
            }
          }
        }

        get layoutH() {
          return this._layoutH;
        }

        set layoutH(value) {
          this._layoutH = value;
          var children = this.node.children;

          for (var child of children) {
            var w = 0;
            var ut = child.getComponent(UITransform);

            if (ut) {
              w = ut.width * child.scale.x * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize;
            } else {
              w = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).MapBound(child).width;
            }

            if (value == $LayoutH.left) {
              child.setPosition(w / 2, child.position.y, child.position.z);
            } else if (value == $LayoutH.center) {
              child.setPosition(0, child.position.y, child.position.z);
            } else if (value == $LayoutH.right) {
              child.setPosition(-w / 2, child.position.y, child.position.z);
            }
          }
        }

        onLoad() {
          var sx = this.node.scale.x,
              sy = this.node.scale.y;
          var ut = this.getComponent(UITransform);

          if (ut) {
            this.$width = ut.contentSize.width * sx;
            this.$height = ut.contentSize.height * sy;
          } else {
            var rect = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).MapBound(this.node);
            this.$width = rect.width;
            this.$height = rect.height;
          }

          this.$left = v3(-this.$width / 2, 0, 0);
          this.$right = v3(this.$width / 2, 0, 0);
          this.$top = v3(0, this.$height / 2, 0);
          this.$bottom = v3(-this.$height / 2, 0, 0);
          this.mat = this.node.getWorldMatrix();
          this.matInvert = this.mat.invert();
        }

        get width() {
          return this.$width;
        }

        get height() {
          return this.$height;
        }

        get left() {
          Vec3.transformMat4(this.leftv, this.$left, this.mat);
          return this.leftv;
        }

        get right() {
          Vec3.transformMat4(this.rightv, this.$right, this.mat);
          return this.rightv;
        }

        get top() {
          Vec3.transformMat4(this.topv, this.$top, this.mat);
          return this.topv;
        }

        get bottom() {
          Vec3.transformMat4(this.bottomv, this.$bottom, this.mat);
          return this.bottomv;
        }

      }, (_applyDecoratedDescriptor(_class2.prototype, "layoutV", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "layoutV"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "layoutH", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "layoutH"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42c7ee33a3a42de9553a9cab1757db58c3a9b894.js.map