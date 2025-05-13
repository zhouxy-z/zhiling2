System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AudioDefine, _crd;

  _export("AudioDefine", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f183btZGBHJK/yV/k7AZGK", "AudioDefine", undefined);

      /**
       * 音效定义
       */
      _export("AudioDefine", AudioDefine = class AudioDefine {});

      /**
       * 频道
       */
      AudioDefine.Channels = {
        ["audio/bgm/*"]: {
          channel: 1,
          maxNum: 2
        },
        ["audio/card/*"]: {
          channel: 2,
          maxNum: 10
        },
        ["audio/scene/*"]: {
          channel: 3,
          maxNum: 2
        },
        ["audio/ui/*"]: {
          channel: 4,
          maxNum: 10
        }
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e117cfbe07e7cbec06233544e81ac0d64e59351.js.map