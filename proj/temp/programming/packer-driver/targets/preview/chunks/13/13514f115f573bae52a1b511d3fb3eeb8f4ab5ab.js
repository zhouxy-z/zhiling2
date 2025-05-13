System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UITransform, Vec2, Vec3, Panel, ClickTipsPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("ClickTipsPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c78eigjYtK7pA8C6FUYILa", "ClickTipsPanel", undefined);

      __checkObsolete__(['EventTouch', 'Node', 'Rect', 'Size', 'UITransform', 'Vec2', 'Vec3']);

      _export("ClickTipsPanel", ClickTipsPanel = class ClickTipsPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/common/ClickTipsPanel";
          this.tipsCont = void 0;
          //滑动是否关闭TOUCH_END事件
          this.moveIsEnd = false;
          this.haveStart = false;
          this._target = void 0;
          this._clickTarget = void 0;
          this._targetPatent = void 0;
          this._size = void 0;
          this._hideCb = null;
          this.isDelay = void 0;
          //是否移动状态
          this.isMove = null;
          //点击移动距离
          this.dis = new Vec2(0, 0);
        }

        onLoad() {
          this.tipsCont = this.find("tipsCont");
          this._size = this.node.getComponent(UITransform).contentSize;
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        onShow() {}
        /**
         * 
         * @param target tips目标节点
         * @param targetPatent tips目标节点父节点
         * @param clickTarget 点击目标节点
         * @param showWorlPos 显示坐标（世界）
         * @param dir target在点击目标的方向 0：下方 1：上方
         * @param hideCb tips关闭回调
         */


        flush(target, targetPatent, clickTarget, showWorlPos, dir, hideCb) {
          if (showWorlPos === void 0) {
            showWorlPos = null;
          }

          if (dir === void 0) {
            dir = 0;
          }

          if (this._clickTarget == clickTarget) {
            this.isDelay = true;
            return;
          }

          this.isDelay = false;
          this.resetTarger();
          this._hideCb = hideCb;
          this._target = target;
          this._target.active = true;
          this._target.position = new Vec3(0, 0);
          this._targetPatent = targetPatent;
          this._clickTarget = clickTarget;

          this._target.setParent(this.tipsCont);

          var targetTrans = target.getComponent(UITransform);
          var targetRect = targetTrans.getBoundingBox();
          this.tipsCont.getComponent(UITransform).setContentSize(targetRect.width, targetRect.height);
          var newPos; //有指定位置显示就指定位置显示

          if (showWorlPos) {
            newPos = showWorlPos;
          } else {
            var clickTargetTrans = this._clickTarget.getComponent(UITransform);

            newPos = this._clickTarget.worldPosition.clone();
            newPos.x = this._size.width / 2;
            var newY; //出下方

            if (dir == 0) {
              newY = newPos.y - clickTargetTrans.height / 2 - targetRect.height / 2; //下方超出边界则出上方

              if (newY < 0) {
                newY = newPos.y + clickTargetTrans.height / 2 + targetRect.height / 2;
              }

              newPos.y = newY;
            } else {
              //出上方
              newY = newPos.y + clickTargetTrans.height / 2 + targetRect.height / 2;

              if (newY > this._size.height) {
                newY = newPos.y - clickTargetTrans.height / 2 - targetRect.height / 2;
              }
            }
          }

          this.tipsCont.worldPosition = newPos;
        }

        onHide() {
          this.resetTarger();
          if (this._hideCb != null) this._hideCb();
          this._hideCb = null;
        }

        resetTarger() {
          if (this.tipsCont.children.length > 0) {
            var target = this.tipsCont.children[0];

            if (this._targetPatent) {
              target.setParent(this._targetPatent);
              target.active = false;
              this._target = null;
              this._clickTarget = null;
              this._targetPatent = null;
            }
          }
        }

        onTouchStart(touch) {
          touch.preventSwallow = true;
          this.haveStart = true;
          this.isMove = false;
          this.dis = new Vec2(0, 0); //console.log("----->onTouchStart");
        }

        onTouchMove(touch) {
          touch.preventSwallow = true;
          if (!this.haveStart) return;
          var dis = touch.getDelta();
          this.dis.x += dis.x;
          this.dis.y += dis.y;
          var distance = this.dis.length(); //滑动区域20像素算作移动

          if (distance >= 20) this.isMove = true; //console.log("----->onTouchMove");
        }

        onTouchEnd(touch) {
          touch.preventSwallow = true;
          if (!this.haveStart) return;
          if (this.moveIsEnd && this.isMove) return;

          if (this.isDelay) {
            this.scheduleOnce(() => {
              this.Hide();
            }, 0.05);
          } else {
            this.Hide();
          }

          this.haveStart = false;
          this.isMove = false; //console.log("----->onTouchEnd");
        }

        onTouchCancel(touch) {
          touch.preventSwallow = true;
          this.haveStart = false;
          this.isMove = false; //console.log("----->onTouchCancel");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13514f115f573bae52a1b511d3fb3eeb8f4ab5ab.js.map