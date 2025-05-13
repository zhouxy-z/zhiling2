System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Label, Session, DateUtils, EventMgr, Evt_CloseFriendBindOrUnbindPanel, Panel, Req, Route, FriendBindOrUnbindPanel, _crd, FriendBindType;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_CloseFriendBindOrUnbindPanel(extras) {
    _reporterNs.report("Evt_CloseFriendBindOrUnbindPanel", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSUplineInfo(extras) {
    _reporterNs.report("SUplineInfo", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  _export("FriendBindOrUnbindPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      DateUtils = _unresolved_3.DateUtils;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_CloseFriendBindOrUnbindPanel = _unresolved_4.Evt_CloseFriendBindOrUnbindPanel;
    }, function (_unresolved_5) {
      Panel = _unresolved_5.Panel;
    }, function (_unresolved_6) {
      Req = _unresolved_6.Req;
      Route = _unresolved_6.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "971b7l8MCZLk4ToUuKpjGKy", "FriendBindOrUnbindPanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'Touch', 'UIOpacity', 'instantiate', 'path', 'v3']);

      _export("FriendBindType", FriendBindType = /*#__PURE__*/function (FriendBindType) {
        FriendBindType[FriendBindType["bind"] = 0] = "bind";
        FriendBindType[FriendBindType["unbind"] = 1] = "unbind";
        return FriendBindType;
      }({}));

      _export("FriendBindOrUnbindPanel", FriendBindOrUnbindPanel = class FriendBindOrUnbindPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/friend/FriendBindOrUnbindPanel";
          this.buildTittle = void 0;
          this.confirmBtn = void 0;
          this.unbindNode = void 0;
          this.bindNode = void 0;
          this.EditBox = void 0;
          this.lbl = void 0;
          this.last_day = void 0;
          this.unday1 = void 0;
          this.unday2 = void 0;
          this.type = void 0;
          this.id = void 0;
          this.uplineData = void 0;
          this.isCanUnbind = false;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("node/close");
          this.buildTittle = this.find("node/buildTittle", Label);
          this.confirmBtn = this.find("node/confirmBtn", Button);
          this.lbl = this.find("node/confirmBtn/Label", Label);
          this.unbindNode = this.find("node/unbindNode");
          this.last_day = this.find("node/unbindNode/bg/lastNode/last_day", Label);
          this.unday1 = this.find("node/unbindNode/bg/Node/day_num", Label);
          this.unday2 = this.find("node/bindNode/Node/day_num", Label);
          this.bindNode = this.find("node/bindNode");
          this.EditBox = this.find("node/bindNode/EditBox", EditBox);
          this.confirmBtn.node.on("click", this.onConfirmBtn, this);
          this.EditBox.node.on('editing-did-ended', this.onEditBoxEnded, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_CloseFriendBindOrUnbindPanel === void 0 ? (_reportPossibleCrUseOfEvt_CloseFriendBindOrUnbindPanel({
            error: Error()
          }), Evt_CloseFriendBindOrUnbindPanel) : Evt_CloseFriendBindOrUnbindPanel, this.onClose, this);
        }

        onShow() {}

        flush(type, info) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.type = type;
            _this.uplineData = info; // let day = CfgMgr.GetCommon(StdCommonType.Friend).UnboundDays
            // day = day ? day : 0

            _this.buildTittle.string = type == FriendBindType.bind ? "添加邀请人" : "解绑邀请人";
            var isbind = type == FriendBindType.bind ? true : false;
            _this.lbl.string = type == FriendBindType.bind ? "添加" : "解绑"; // this.unday1.string = day + "天";
            // this.unday2.string = day + "天";

            _this.bindNode.active = isbind;
            _this.unbindNode.active = !isbind;

            if (info) {
              if (!info.is_online) {
                if (info.last_offline_time != 0) {
                  var time_data = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                    error: Error()
                  }), DateUtils) : DateUtils).timeElapsedSince(info.last_offline_time * 1000);

                  if (time_data.days) {
                    _this.last_day.string = time_data.days + "天前"; // this.isCanUnbind = time_data.days >= day;
                  } else if (time_data.hours) {
                    _this.last_day.string = time_data.hours + "小时前";
                  } else if (time_data.minutes) {
                    _this.last_day.string = time_data.minutes + "分钟前";
                  }
                } else {
                  _this.isCanUnbind = true; // this.last_day.string = day + "天前";
                }
              } else {
                _this.last_day.string = "在线";
              }
            }
          })();
        }

        onConfirmBtn() {
          var isbind = this.type == FriendBindType.bind;
          var bind_friend = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["user.protocol.bindfriend"]();
          bind_friend.inviterId = this.id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.bindfriend"], bind_friend); // if (isbind) {
          //     //添加确认
          //     let lv = CfgMgr.GetCommon(StdCommonType.Friend).BindingLv
          //     let home_lv:number;
          //     for (let building of PlayerData.roleInfo.homelands[0].buildings) {
          //         if (building.id == 1) {
          //             home_lv = building.level;
          //         }
          //     }
          //     let isCanBind = (lv <= home_lv);
          //     if(isCanBind){
          //         let data = {
          //             type: MsgTypeSend.BindUplineRequest,
          //             data: { upline_id: this.id },
          //         }
          //         Session.Send(data)
          //     }else{
          //         Tips.Show("生命树需要" + lv + "级")
          //     }
          // } else {
          //     //解绑确认
          //     if (this.isCanUnbind) {
          //         let data = {
          //             type: MsgTypeSend.UnbinduplineRequest,
          //             data: {},
          //         }
          //         Session.Send(data);
          //     } else {
          //         Tips.Show("未到解绑时间")
          //     }
          // }
        }

        onEditBoxEnded(editbox) {
          this.id = editbox.string;
        }

        onClose() {
          this.Hide();
        }

        onHide() {
          this.EditBox.string = "";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34221d70101c755401b13e5167224aac02d000ab.js.map