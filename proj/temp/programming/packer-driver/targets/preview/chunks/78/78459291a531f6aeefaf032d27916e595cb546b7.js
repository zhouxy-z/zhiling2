System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleLogicMgr, Out_BattleRoomOpOutput_TerrainData, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleLogicMgr(extras) {
    _reporterNs.report("battleLogicMgr", "../BattleLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainGrid(extras) {
    _reporterNs.report("BattleTerrainGrid", "../BattleTerrainGrid", _context.meta, extras);
  }

  _export("Out_BattleRoomOpOutput_TerrainData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BattleBaseComp = _unresolved_2.BattleBaseComp;
    }, function (_unresolved_3) {
      battleLogicMgr = _unresolved_3.battleLogicMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbbbcH7lxFIc6/HDedE5aqN", "Out_BattleRoomOpOutput_TerrainData", undefined);

      /**
       * 房间区域数据
       */
      _export("Out_BattleRoomOpOutput_TerrainData", Out_BattleRoomOpOutput_TerrainData = class Out_BattleRoomOpOutput_TerrainData extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          if (!this.data) {
            console.error("\u623F\u95F4\u6570\u636E\u66F4\u65B0\u5931\u8D25---->\u623F\u95F4\uFF1A" + this.roomId + "\u56DE\u5408\uFF1A" + this.round + "ownerPlayerId: " + this.ownerPlayerId + " data:" + this.data);
            this.exit();
            return;
          }

          var terrainGrildList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terrainGrildList;

          for (var terrainGrild of terrainGrildList) {
            if (terrainGrild.terrainData.instId == this.data.terrainData.instId) {
              terrainGrild.setData(this.data.terrainData);
            }
          }

          this.exit();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78459291a531f6aeefaf032d27916e595cb546b7.js.map