System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameData, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("GameData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac187EPw/hPirw+d9fxVcTL", "GameData", undefined);

      /**
       * 战斗数据
       */
      _export("GameData", GameData = class GameData {
        constructor() {
          //当前战斗房间数据
          this.roomData = void 0;
          //战斗数据包列表
          this.fiPackList = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55a98e33a368d3124b4fbccf305dfafa51ebba3e.js.map