System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, Battle_UpdateTerrain, EventMgr, battleDataMgr, Out_BattleRoomOpOutput_TerrainData, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_UpdateTerrain(extras) {
    _reporterNs.report("Battle_UpdateTerrain", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
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
      Battle_UpdateTerrain = _unresolved_3.Battle_UpdateTerrain;
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      battleDataMgr = _unresolved_4.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7deb6v6RqdEiJml1/Bjf9Ib", "Out_BattleRoomOpOutput_TerrainData", undefined);

      /**
       * 房间区域数据
       */
      _export("Out_BattleRoomOpOutput_TerrainData", Out_BattleRoomOpOutput_TerrainData = class Out_BattleRoomOpOutput_TerrainData extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var ispLayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.ownerPlayerId);
            yield _this.scene.FlushTerrain(ispLayerA, [_this.data.terrainData], _this.ownerPlayerId);
            if (_this.isExit) return;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Battle_UpdateTerrain === void 0 ? (_reportPossibleCrUseOfBattle_UpdateTerrain({
              error: Error()
            }), Battle_UpdateTerrain) : Battle_UpdateTerrain, [_this.data.terrainData]);

            _this.exit();
          })();
        }

        reset() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9084118baaa9447ab544742f4f43cd98eb01567.js.map