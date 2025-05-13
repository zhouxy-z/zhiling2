System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FightData, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("FightData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd2e69vePVI5ZouU2F8vogi", "FightData", undefined);

      /**
       * 战斗数据
       */
      _export("FightData", FightData = class FightData {});

      FightData.currentRound = 0;
      FightData.Energy = void 0;
      FightData.cardState = {};
      FightData.cardBack = {};
      //玩家卡背
      FightData.BattleRoomOpOutputType = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a63833c5425cd0c49ea98ff75c00d7d93e1494fb.js.map