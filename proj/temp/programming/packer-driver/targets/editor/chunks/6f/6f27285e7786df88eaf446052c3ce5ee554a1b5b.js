System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Ret, Route, Session, RightsModule, _crd;

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  _export("RightsModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Ret = _unresolved_2.Ret;
      Route = _unresolved_2.Route;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41710qSsCxA+4G2n6pAwNMP", "RightsModule", undefined);

      _export("RightsModule", RightsModule = class RightsModule {
        constructor() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerBenefitInfoPush, this.PlayerBenefitInfoPush, this);
        }

        PlayerBenefitInfoPush(data) {
          let rights_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerBenefitInfoPush.decode(data);
          console.log("权益推送", rights_data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f27285e7786df88eaf446052c3ce5ee554a1b5b.js.map