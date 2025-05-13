System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, find, geometry, Input, v3, view, Card, _dec, _class, _crd, ccclass, property, TestCard;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../../module/fight/display/Card", _context.meta, extras);
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
      geometry = _cc.geometry;
      Input = _cc.Input;
      v3 = _cc.v3;
      view = _cc.view;
    }, function (_unresolved_2) {
      Card = _unresolved_2.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5824beJf1RGzq60/kNgP/lw", "TestCard", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Canvas', 'Component', 'EventTouch', 'find', 'geometry', 'Input', 'math', 'Node', 'UITransform', 'v3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestCard", TestCard = (_dec = ccclass('TestCard'), _dec(_class = class TestCard extends Component {
        constructor(...args) {
          super(...args);
          this.canvas = void 0;
          this.card = void 0;
          this.touch = void 0;
          this.mainCamera = void 0;
          this.uiCamera = void 0;
          this.plane = void 0;
        }

        start() {
          this.canvas = find("Canvas");
          this.canvas.on(Input.EventType.TOUCH_START, this.onStart, this);
          this.canvas.on(Input.EventType.TOUCH_END, this.onEnd, this);
          this.mainCamera = find("Main Camera").getComponent(Camera);
          this.uiCamera = find("Canvas/Camera").getComponent(Camera);
          this.card = (_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card).Create();
          this.plane = geometry.Plane.create(0, 0, 1, 0.1);
        }

        onStart(e) {
          this.onMove(e);
          this.canvas.on(Input.EventType.TOUCH_MOVE, this.onMove, this);
        }

        onEnd(e) {
          this.touch = undefined;
          this.card.parent && this.card.parent.removeChild(this.card);
          this.canvas.off(Input.EventType.TOUCH_MOVE, this.onMove, this);
          let p = this.rayHit(e);
        }

        onMove(e) {
          let size = view.getVisibleSize();
          let pos = e.getUILocation();
          this.touch = {
            x: pos.x - size.width / 2,
            y: pos.y - size.height / 2
          };
        }

        update(deltaTime) {
          if (this.touch) {
            if (!this.card.parent) {
              this.canvas.addChild(this.card);
              this.card.Reset(this.touch.x, this.touch.y);
            } else {
              this.card.Drag(this.touch.x, this.touch.y);
            }
          }
        }

        rayHit(e) {
          let pos = e.getLocation();
          let ray = this.mainCamera.screenPointToRay(pos.x, pos.y);
          let len = geometry.intersect.rayPlane(ray, this.plane);
          let result = v3();
          ray.computeHit(result, len);
          return result;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=963870b34074f6601d66b72f90a5ee128dac7f4e.js.map