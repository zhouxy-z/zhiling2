System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sp, ResMgr, Utils, AnimationUtils, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "./Utils", _context.meta, extras);
  }

  _export("AnimationUtils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5882d2VpulCsbDsyq4uuvIu", "AnimationUtils", undefined);

      __checkObsolete__(['sp']);

      _export("AnimationUtils", AnimationUtils = class AnimationUtils {
        static async Play(url, ske, action, loop) {
          const key = "$skeletonData_url";

          if (!ske[key] || ske[key] != url) {
            ske[key] = url;
            let skeletonData = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, sp.SkeletonData);

            if (ske[key] == url) {
              ske.skeletonData = skeletonData;

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).CheckAnimation(ske, action)) {
                try {
                  ske.setAnimation(0, action, loop);
                } catch (e) {
                  console.warn("playAnimation:" + url);
                }
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f8002273b190ca7f2629b6c95a6e39b0ac7312e.js.map