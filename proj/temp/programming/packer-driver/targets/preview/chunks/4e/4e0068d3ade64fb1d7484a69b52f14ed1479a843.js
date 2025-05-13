System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ParticleSystem, director, GameObj, GameSet, Effect, SampleEffect, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
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

        Play(x, y, z) {
          var _this = this;

          return _asyncToGenerator(function* () {
            director.getScene().addChild(_this);
            if (!_this.$hasLoad) yield _this.loadSub;

            _this.p.play();

            _this.prevState = true;

            _this.setWorldPosition(x, y, z);
          })();
        }

        PlayOnce(x, y, z) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            director.getScene().addChild(_this2);
            if (!_this2.$hasLoad) yield _this2.loadSub;
            _this2.p.loop = false;

            _this2.p.play();

            _this2.prevState = true;

            _this2.setWorldPosition(x, y, z);
          })();
        }

        PlayLoop(x, y, z) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            director.getScene().addChild(_this3);
            if (!_this3.$hasLoad) yield _this3.loadSub;
            _this3.p.loop = true;

            _this3.p.play();

            _this3.prevState = true;

            _this3.setWorldPosition(x, y, z);
          })();
        }

        Stop() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (!_this4.$hasLoad) yield _this4.loadSub;

            _this4.p.stop();
          })();
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