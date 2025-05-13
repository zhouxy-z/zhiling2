System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DecodeReq, Protocol, Session, DateUtils, PlayerData, BattleBaseComp, battleDataMgr, Out_WaitPlayerShow_2d, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecodeReq(extras) {
    _reporterNs.report("DecodeReq", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  _export("Out_WaitPlayerShow_2d", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DecodeReq = _unresolved_2.DecodeReq;
      Protocol = _unresolved_2.Protocol;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      DateUtils = _unresolved_4.DateUtils;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      BattleBaseComp = _unresolved_6.BattleBaseComp;
    }, function (_unresolved_7) {
      battleDataMgr = _unresolved_7.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c929fvyOXJNpK7XfG77uzwH", "Out_WaitPlayerShow_2d", undefined);

      /**
       * 等待客户端表现完毕
       */
      _export("Out_WaitPlayerShow_2d", Out_WaitPlayerShow_2d = class Out_WaitPlayerShow_2d extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).battleroomroundshowend, this.onBattleroomroundshowend, this);
          let data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).battleroomroundshowend();
          data.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).server;
          data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(data);
        }

        reset() {}

        onUpdate(dt) {
          if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime >= this.data.timeout) {
            this.exit();
          }
        }

        onBattleroomroundshowend(data) {
          let result = (_crd && DecodeReq === void 0 ? (_reportPossibleCrUseOfDecodeReq({
            error: Error()
          }), DecodeReq) : DecodeReq).battleroomroundshowend(data);
          if (result.res.code == 200) this.exit();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84c5970242c2af2d37f03bb3bb60b3152963b301.js.map