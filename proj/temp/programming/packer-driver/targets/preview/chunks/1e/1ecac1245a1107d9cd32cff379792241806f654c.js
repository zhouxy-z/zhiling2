System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Req, Ret, Route, Session, DateUtils, BattleBaseComp, battleDataMgr, Out_WaitPlayerShow, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  _export("Out_WaitPlayerShow", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
      Req = _unresolved_2.Req;
      Ret = _unresolved_2.Ret;
      Route = _unresolved_2.Route;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      DateUtils = _unresolved_4.DateUtils;
    }, function (_unresolved_5) {
      BattleBaseComp = _unresolved_5.BattleBaseComp;
    }, function (_unresolved_6) {
      battleDataMgr = _unresolved_6.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3494HaaPJPcqgacMdtCzE/", "Out_WaitPlayerShow", undefined);

      /**
       * 等待客户端表现完毕
       */
      _export("Out_WaitPlayerShow", Out_WaitPlayerShow = class Out_WaitPlayerShow extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        start() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomroundshowend"], this.onBattleroomroundshowend, this);
          var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).pb.Server.create();
          server.id = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData.serverId;
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["battle.protocol.battleroomroundshowend"]();
          data.server = server;
          data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomroundshowend"], data);
        }

        reset() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).off((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomroundshowend"], this.onBattleroomroundshowend, this);
        }

        onUpdate(dt) {
          if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime >= this.data.timeout) {
            this.exit();
          }
        }

        onBattleroomroundshowend(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle.protocol.battleroomroundshowend"].decode(data);
          if (this.roomId != result.roomId) return;
          if (result.res.code == 200) this.exit();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ecac1245a1107d9cd32cff379792241806f654c.js.map