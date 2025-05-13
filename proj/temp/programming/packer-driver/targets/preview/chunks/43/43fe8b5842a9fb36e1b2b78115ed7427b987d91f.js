System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, EditBox, Label, DateUtils, Req, Route, Session, FightLogItem, _crd;

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  _export("FightLogItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      DateUtils = _unresolved_2.DateUtils;
    }, function (_unresolved_3) {
      Req = _unresolved_3.Req;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b19ceM/cDVNhZIGbLYnLkeR", "FightLogItem", undefined);

      __checkObsolete__(['Button', 'Component', 'EditBox', 'Label', 'Node']);

      _export("FightLogItem", FightLogItem = class FightLogItem extends Component {
        constructor() {
          super(...arguments);
          this.playerLab = void 0;
          this.timeLab = void 0;
          this.roomLab = void 0;
          this.getBtn = void 0;
          this.select = void 0;
          this.isInit = false;
          this.logData = void 0;
        }

        onLoad() {
          this.playerLab = this.node.getChildByName("playerLab").getComponent(Label);
          this.timeLab = this.node.getChildByName("timeLab").getComponent(Label);
          this.roomLab = this.node.getChildByName("roomLab").getComponent(EditBox);
          this.getBtn = this.node.getChildByName("getBtn").getComponent(Button);
          this.isInit = true;
          this.getBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.getBtn:
              var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["battle_mgr.protocol.getbattlereplayroom"]();
              data.roomId = [this.logData.roomId];
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["battle_mgr.protocol.getbattlereplayroom"], data);
              console.log("发送获取战报详情---->");
              break;
          }
        }

        SetData(logData) {
          this.logData = logData;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit) return;

          if (this.logData) {
            this.playerLab.string = this.logData.playerId;
            this.roomLab.string = this.logData.roomId;

            if (this.logData.createTime > 0) {
              var dates = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).TimestampToDate(this.logData.createTime * 1000, true);
              this.timeLab.string = dates[0] + "-" + dates[1] + "-" + dates[2] + "  " + dates[3] + ":" + dates[4] + ":" + dates[5];
            } else {
              this.timeLab.string = "";
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43fe8b5842a9fb36e1b2b78115ed7427b987d91f.js.map