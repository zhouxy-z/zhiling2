System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, math, GameSet, Shake, _crd;

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../manager/GameSet", _context.meta, extras);
  }

  _export("Shake", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      math = _cc.math;
    }, function (_unresolved_2) {
      GameSet = _unresolved_2.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d925fCHoq5FxaNG4lPsuL2A", "Shake", undefined);

      __checkObsolete__(['Vec3', 'game', 'math']);

      _export("Shake", Shake = class Shake {
        constructor() {
          this.rate = 0.02;
          this.tick = 0;
          this.endTick = 0;
          this.loop = 0;
          this.power = 0;
          this.initV = void 0;
        }

        start(power, duration, rate) {
          this.loop = 0;
          this.rate = rate;
          this.power = power;
          this.tick = game.totalTime / 1000;
          this.endTick = this.tick + duration;
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).addTick(this.update, this);
        }

        end() {
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).removeTick(this.update, this);
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.node.setWorldPosition(this.initV);
        }

        update(dt) {
          if (this.tick < this.endTick) {
            this.tick += dt;
            this.loop += dt;

            if (this.loop >= this.rate) {
              this.loop = 0;
              let dx = math.randomRange(-this.power, this.power);
              let dy = math.randomRange(-this.power, this.power);
              let dz = math.randomRange(-this.power, this.power);
              (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).mainCamera.node.setWorldPosition(this.initV.x + dx, this.initV.y + dy, this.initV.z + dz); // console.log("shake", GameSet.mainCamera.node.worldPosition.toString());
            }
          } else {
            this.end();
          }
        }
        /**
         * 开始
         * @param power 
         */


        static Start(power, duration, rate = 0.02) {
          if (!this.instance) {
            this.instance = new Shake();
            this.instance.initV = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera.node.worldPosition.clone();
          }

          this.instance.start(power * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).PixelSize, duration, rate);
        }
        /**
         * 停止
         * @returns 
         */


        static End() {
          if (!this.instance) return;
          this.instance.end();
        }

      });

      Shake.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=829b2600289c18a7c0fde790555bfd830cd69076.js.map