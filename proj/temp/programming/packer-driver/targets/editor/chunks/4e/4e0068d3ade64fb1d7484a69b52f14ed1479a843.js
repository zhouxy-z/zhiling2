System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ParticleSystem, director, GameObj, GameSet, Effect, SampleEffect, _crd;

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "../../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../../manager/GameSet", _context.meta, extras);
  }

  _export({
    Effect: void 0,
    SampleEffect: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ParticleSystem = _cc.ParticleSystem;
      director = _cc.director;
    }, function (_unresolved_2) {
      GameObj = _unresolved_2.GameObj;
    }, function (_unresolved_3) {
      GameSet = _unresolved_3.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d55aNvY/pEd5qnQT55v4ZA", "Effect", undefined);

      __checkObsolete__(['IVec3Like', 'ParticleSystem', 'director']);

      _export("Effect", Effect = class Effect extends (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
        error: Error()
      }), GameObj) : GameObj) {
        constructor(...args) {
          super(...args);
          this.$prefab = "prefabs/fight/ShowArea";
          this.p = void 0;
          this.prevState = void 0;
        }

        onLoad() {
          this.layer = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).Lay_Scene;
          this.p = this.getComponent(ParticleSystem);
          this.prevState = this.p.isPlaying;
        }

        async Play(x, y, z) {
          director.getScene().addChild(this);
          if (!this.$hasLoad) await this.loadSub;
          this.p.play();
          this.prevState = true;
          this.setWorldPosition(x, y, z);
        }

        async PlayOnce(x, y, z) {
          director.getScene().addChild(this);
          if (!this.$hasLoad) await this.loadSub;
          this.p.loop = false;
          this.p.play();
          this.prevState = true;
          this.setWorldPosition(x, y, z);
        }

        async PlayLoop(x, y, z) {
          director.getScene().addChild(this);
          if (!this.$hasLoad) await this.loadSub;
          this.p.loop = true;
          this.p.play();
          this.prevState = true;
          this.setWorldPosition(x, y, z);
        }

        async Stop() {
          if (!this.$hasLoad) await this.loadSub;
          this.p.stop();
        }

        update(dt) {
          if (this.prevState && !this.p.isPlaying) {
            this.prevState = false;
            this.emit(Effect.Event_Play_End);
          }
        }

      });

      Effect.Event_Play_End = "Event_Play_End";

      _export("SampleEffect", SampleEffect = class SampleEffect extends Effect {
        update(dt) {
          if (this.prevState && !this.p.isPlaying) {
            this.prevState = false;
            this.emit(Effect.Event_Play_End);
            if (this.parent) this.parent.removeChild(this);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e0068d3ade64fb1d7484a69b52f14ed1479a843.js.map