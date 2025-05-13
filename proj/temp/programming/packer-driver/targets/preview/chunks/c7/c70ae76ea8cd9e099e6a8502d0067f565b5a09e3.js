System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Http, Session, Second, LoginPanel, PlayerData, Req, Ret, Route, CfgMgr, ItemType, EventMgr, DateUtils, GameSet, ServerPanel, LoginModule, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../../net/Http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginPanel(extras) {
    _reporterNs.report("LoginPanel", "./LoginPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerPanel(extras) {
    _reporterNs.report("ServerPanel", "./ServerPanel", _context.meta, extras);
  }

  _export("LoginModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Http = _unresolved_2.Http;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      Second = _unresolved_4.Second;
    }, function (_unresolved_5) {
      LoginPanel = _unresolved_5.LoginPanel;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      Req = _unresolved_7.Req;
      Ret = _unresolved_7.Ret;
      Route = _unresolved_7.Route;
    }, function (_unresolved_8) {
      CfgMgr = _unresolved_8.CfgMgr;
      ItemType = _unresolved_8.ItemType;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_unresolved_10) {
      DateUtils = _unresolved_10.DateUtils;
    }, function (_unresolved_11) {
      GameSet = _unresolved_11.GameSet;
    }, function (_unresolved_12) {
      ServerPanel = _unresolved_12.ServerPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16153JEMZhJb6YBllu3tMiQ", "LoginModule", undefined);

      _export("LoginModule", LoginModule = class LoginModule {
        constructor() {
          this.intervalSync = void 0;
          this.loop = 0;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerLoginPush, this.onPlayerLoginPush, this);

          if ((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).globalCfg) {
            (_crd && ServerPanel === void 0 ? (_reportPossibleCrUseOfServerPanel({
              error: Error()
            }), ServerPanel) : ServerPanel).Show(this.onLogin.bind(this));
          } else {
            (_crd && LoginPanel === void 0 ? (_reportPossibleCrUseOfLoginPanel({
              error: Error()
            }), LoginPanel) : LoginPanel).Show(this.onLogin.bind(this));
          }
        }

        onPlayerLoginPush(data) {
          var info = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerLoginPush.decode(data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).server = info.server;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player = info.data;

          for (var key in info.data.itemCounts) {
            if (Object.hasOwnProperty.call(info.data.itemCounts, key)) {
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(parseInt(key));

              if (std && std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).money) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).items[key] = info.data.itemCounts[key] / 10000;
              }
            }
          }

          console.log("onPlayerLoginPush", info);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cards = info.data.battleCards || [];
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.getuserinfo"]);
          var player_data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["player.protocol.getplayerdata"]();
          player_data.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).server;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["player.protocol.getplayerdata"], player_data);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getplayerlevelrewards"]);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getprocessboxrewards"]);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Call("reset_guide");
        }

        onLogin(loginHost, server, post, user) {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log("登录账号", loginHost, server, post, user);
            var result = yield (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
              error: Error()
            }), Http) : Http).Post(loginHost, {
              code: user
            });

            if ((result == null ? void 0 : result.code) == 200) {
              var data = result.data;
              console.log("登录返回", data.token, data.waiting_nums);

              if (data.waiting_nums) {
                yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                  error: Error()
                }), Second) : Second)(2);

                _this.onLogin(loginHost, server, post, user);
              } else if (data.token) {
                // if (EDITOR) ProtocolInit();
                var uuid = new Date().getTime() + "";
                console.log("连接socket", uuid);
                yield (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Build(server, post, "/", uuid, user, data.token);

                _this.syncServerTime();
              }
            }
          })();
        }

        syncServerTime() {
          if (this.intervalSync) {
            clearInterval(this.intervalSync);
          }

          this.intervalSync = setInterval(this.sendServerTimeSync.bind(this), 1000);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).off((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["gate.protocol.servertime"], this.onServertime, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["gate.protocol.servertime"], this.onServertime, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["gate.protocol.servertime"]);
        } //发送服务器时间同步


        sendServerTimeSync() {
          (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime++;
          this.loop++;

          if (this.loop >= 10) {
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["gate.protocol.servertime"]);
            this.loop = 0;
          }
        } //服务器时间同步下发


        onServertime(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["gate.protocol.servertime"].decode(data);
          if (result.res.code != 200) return;
          (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime = Math.floor(result.timestamp);
          console.log("onServerTime", (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c70ae76ea8cd9e099e6a8502d0067f565b5a09e3.js.map