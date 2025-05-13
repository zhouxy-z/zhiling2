System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Tween, Vec3, easing, game, math, tween, v3, GameSet, Second, BaseAction, CardMoveTo, CardLayout, CardFlyToHand, CardFlyToArea, CardTurnBack, CardTurnFront, CardShowBig, _crd, $Front_Quat, $Back_Quat;

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../../utils/Utils", _context.meta, extras);
  }

  _export({
    CardMoveTo: void 0,
    CardLayout: void 0,
    CardFlyToHand: void 0,
    CardFlyToArea: void 0,
    CardTurnBack: void 0,
    CardTurnFront: void 0,
    CardShowBig: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      easing = _cc.easing;
      game = _cc.game;
      math = _cc.math;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GameSet = _unresolved_2.GameSet;
    }, function (_unresolved_3) {
      Second = _unresolved_3.Second;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16adbu3xrVCM4ydo2K0sNDO", "CardAction", undefined);

      __checkObsolete__(['ITweenOption', 'Node', 'Tween', 'Vec3', 'easing', 'game', 'math', 'tween', 'v3']);

      /**卡牌移动 */
      BaseAction = class BaseAction {
        constructor(card, start, end, q) {
          this.card = void 0;
          this.v = v3();
          this.q = math.quat();
          this.cb = void 0;
          this.subComplete = void 0;
          this.tw = void 0;
          this.sub = void 0;
          this.ease = void 0;
          this.tick = void 0;
          this.dt = void 0;
          this.lessTime = void 0;
          this.card = card;
          end && this.v.set(end);
          q && this.q.set(q);
          start && card.setWorldPosition(start.x, start.y, start.z);
        }

        get running() {
          return this.sub;
        }

        CreateSub(dt) {
          if (dt === void 0) {
            dt = 2;
          }

          var self = this;
          var sub = new Promise((resolve, reject) => {
            self.subComplete = resolve;
          });
          dt++;
          (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(dt).then(() => {
            if (self.subComplete) {
              self.subComplete();
            }
          });
          return sub;
        }
        /**
         * 判断两个动作参数是否相同
         * @param v 
         * @param q 
         * @param ease 
         * @returns 
         */


        Equit(v, q, ease) {
          if (!this.v && !v || !this.v.equals(v)) return false;
          if (!this.q && !q || !this.q.equals(q)) return false;
          if (!this.ease && !ease || this.ease != ease) return false;
          return true;
        }

        run(cb) {
          if (this.running) return this.running;
          this.cb = cb;
          var self = this;
          this.sub = this.CreateSub(this.dt);

          var onEnd = () => {
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
          };

          var prop = {};
          if (this.v) prop.worldPosition = this.v;
          if (this.q) prop.worldRotation = this.q;
          var opt = {};
          if (this.ease) opt.easing = this.ease;
          this.tw = tween(this.card).to(this.dt, prop, opt).call(onEnd.bind(this)).start();
          this.tick = game.totalTime / 1000;
          this.lessTime = this.dt;
          return this.sub;
        }

        merge(act) {
          if (!this.running) return act;

          if (this.v && act.v && this.v.equals(act.v)) {
            var _this$q;

            if (act.q && !(this != null && (_this$q = this.q) != null && _this$q.equals(act.q))) return act;
            return this;
          }

          if (this.q && act.q && this.q.equals(act.q)) {
            var _this$v;

            if (act.v && !(this != null && (_this$v = this.v) != null && _this$v.equals(act.v))) return act;
            return this;
          }

          this.end();
          return act;
        }

        end() {
          var _this$card, _this$card2;

          Tween.stopAllByTarget(this.card);
          this.cb && this.cb();
          this.subComplete && this.subComplete();
          this.subComplete = undefined;
          this.sub = undefined;
          this.v && ((_this$card = this.card) == null ? void 0 : _this$card.setWorldPosition(this.v));
          this.q && ((_this$card2 = this.card) == null ? void 0 : _this$card2.setWorldRotation(this.q));
          this.tick = 0;
          this.lessTime = 0;
          this.destory();
        }

        destory() {
          // console.log("destory", this);
          this.sub = undefined;
          this.tick = 0;
          this.lessTime = 0;
          this.card = this.tw = undefined;
          this.cb = this.subComplete = undefined;
        }

      };
      /**普通移动 */

      _export("CardMoveTo", CardMoveTo = class CardMoveTo extends BaseAction {
        constructor(card, target, q) {
          super(card, undefined, target, q);
        }

        run(cb) {
          if (this.running) return this.running;
          var dis = Vec3.distance(this.card.worldPosition, this.v);
          this.dt = dis / 100;
          return super.run(cb);
        }

      });
      /**卡牌布局 */


      _export("CardLayout", CardLayout = class CardLayout extends BaseAction {
        constructor(card, target, q) {
          super(card, undefined, target, q);
          this.dt = 0.4;
          this.ease = easing.quartOut;
        }

      });
      /**移动到手牌 */


      _export("CardFlyToHand", CardFlyToHand = class CardFlyToHand extends BaseAction {
        constructor(card, start, end, q) {
          super(card, start, end, q);
          this.dt = 0.6;
          this.ease = easing.quartOut;
        }

      });
      /**卡片飞到战斗区域 */


      _export("CardFlyToArea", CardFlyToArea = class CardFlyToArea extends BaseAction {
        constructor(card, target, q) {
          super(card, undefined, target, q);
          this.dt = 0.3;
          this.ease = easing.backIn;
        }

      });

      _export("$Front_Quat", $Front_Quat = math.quat());

      _export("$Back_Quat", $Back_Quat = math.quat());

      math.Quat.fromEuler($Back_Quat, 0, 0, 180);
      math.Quat.fromEuler($Front_Quat, 0, 0, 0);
      /**翻转 */

      _export("CardTurnBack", CardTurnBack = class CardTurnBack extends BaseAction {
        constructor(card) {
          super(card, undefined, card.worldPosition, $Back_Quat);
          this.dt = 0.2;
        }

        run(cb) {
          if (this.running) return this.running;
          this.cb = cb;
          var self = this;
          this.sub = this.CreateSub(this.dt);

          var onEnd = () => {
            Tween.stopAllByTarget(this.card);
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
          };

          var dt = this.dt / 2;
          var v = v3(this.v.x, this.v.y + this.card['wide'] / 2, this.v.z);
          this.tw = tween(this.card).to(dt, {
            worldPosition: v,
            worldRotation: this.q
          }, {
            easing: easing.quartOut
          }).to(dt, {
            worldPosition: this.v
          }).call(onEnd.bind(this)).start();
          this.tick = game.totalTime / 1000;
          this.lessTime = this.dt;
          return this.sub;
        }

      });
      /**揭示动作 */


      _export("CardTurnFront", CardTurnFront = class CardTurnFront extends BaseAction {
        constructor(card) {
          super(card, undefined, card.worldPosition, $Front_Quat);
          this.dt = 1.5;
        }

        run(cb, update) {
          if (this.running) return this.running;
          this.cb = cb;
          var self = this;
          this.sub = this.CreateSub(this.dt);

          var onEnd = () => {
            Tween.stopAllByTarget(this.card);
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
          };

          var dt = this.dt / 4;
          var v = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).ShowPoint;
          this.tw = tween(this.card).to(dt, {
            worldPosition: v3(v.x, v.y, v.z),
            worldRotation: (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ScreamRotation.clone()
          }, {
            easing: easing.expoOut
          }).to(dt * 2, {
            worldPosition: v3(v.x, v.y + 1, v.z)
          }, {
            onUpdate: (target, ratio) => {
              update && update(ratio);
            }
          }).to(dt, {
            worldPosition: this.v,
            worldRotation: this.q
          }, {
            easing: easing.expoIn
          }).call(onEnd.bind(this)).start();
          this.tick = game.totalTime / 1000;
          this.lessTime = this.dt;
          return this.sub;
        }

      });

      _export("CardShowBig", CardShowBig = class CardShowBig extends BaseAction {
        constructor(card) {
          super(card, undefined, card.worldPosition, $Front_Quat);
          this.dt = 0.2;
        }

        run(cb, update) {
          if (this.running) return this.running;
          this.cb = cb;
          var self = this;
          this.sub = this.CreateSub(this.dt);

          var onEnd = () => {
            Tween.stopAllByTarget(this.card);
            self.cb && self.cb();
            self.subComplete && self.subComplete();
            self.subComplete = undefined;
            self.destory();
          };

          var dt = this.dt;
          var v = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).ShowPoint;
          this.tw = tween(this.card).to(dt, {
            worldPosition: v3(v.x, v.y, v.z),
            worldRotation: (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ScreamRotation.clone()
          }, {
            easing: easing.expoOut
          }).call(onEnd.bind(this)).start();
          this.tick = game.totalTime / 1000;
          this.lessTime = this.dt;
          return this.sub;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8c06c96619ac61d30400b54d79552c98dafa6fa.js.map