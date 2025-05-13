System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Tween, Vec3, sp, tween, GameObj, GameSet, ShowArea, _crd;

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "../../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../../manager/GameSet", _context.meta, extras);
  }

  _export("ShowArea", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      sp = _cc.sp;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      GameObj = _unresolved_2.GameObj;
    }, function (_unresolved_3) {
      GameSet = _unresolved_3.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a968SR1RNE9JwTPP4CAUvv", "ShowArea", undefined);

      __checkObsolete__(['Label', 'Node', 'Sprite', 'SpriteFrame', 'Tween', 'Vec3', 'sp', 'tween']);

      _export("ShowArea", ShowArea = class ShowArea extends (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
        error: Error()
      }), GameObj) : GameObj) {
        constructor(...args) {
          super(...args);
          this.$prefab = "prefabs/fight/ShowArea";
          this.filed = void 0;
          this.descLab = void 0;
          this.myPower = void 0;
          this.adPower = void 0;
        }

        onLoad() {
          this.filed = this.find("filed", sp.Skeleton);
          this.descLab = this.find("desc", Label);
          this.myPower = this.find("power1", Label);
          this.adPower = this.find("power2", Label);
          let filed = this.filed;
          this.filed.setCompleteListener(() => {
            filed.setAnimation(0, "idle");
          });
        }

        async View(sd, desc, myPower, adPower, pos) {
          Tween.stopAllByTarget(this);
          this.setWorldPosition(pos);
          tween(this).to(0.25, {
            worldPosition: (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ShowPoint
          }).start();
          if (!this.$hasLoad) await this.loadSub;
          this.descLab.string = desc;
          this.filed.skeletonData = sd;
          this.filed.setAnimation(0, "show", false);
          this.myPower.string = myPower;
          this.adPower.string = adPower;
        }

        Hide() {
          Tween.stopAllByTarget(this);
          this.setWorldPosition(Vec3.ZERO);
          if (this.parent) this.parent.removeChild(this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f73a71331748fbd0717ac79949de29210f67009.js.map