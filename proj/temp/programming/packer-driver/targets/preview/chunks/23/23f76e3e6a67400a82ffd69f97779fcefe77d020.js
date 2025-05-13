System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Battle_Exit, Battle_ShowSettlement, EventMgr, Evt_BattleCreatRoomResult, Evt_BattleDoubleUpdate, Evt_BattleLogGet, Evt_BattleLogInfo, Evt_Cancel_Match, Evt_EnterFight, Evt_Match_Complete, Evt_PlayerDataInit, Evt_Start_Match, proto, Req, Ret, Route, Session, MsgPanel, RoomPanel, battleDataMgr, FightUI, GameSet, battleCompMgr, GameScene, MainPanel, LoginPanel, FightLogPanel, Second, Utils, ServerPanel, VSModelPanel, BattleModule, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBattle_Exit(extras) {
    _reporterNs.report("Battle_Exit", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_ShowSettlement(extras) {
    _reporterNs.report("Battle_ShowSettlement", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleCreatRoomResult(extras) {
    _reporterNs.report("Evt_BattleCreatRoomResult", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleDoubleUpdate(extras) {
    _reporterNs.report("Evt_BattleDoubleUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleLogGet(extras) {
    _reporterNs.report("Evt_BattleLogGet", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleLogInfo(extras) {
    _reporterNs.report("Evt_BattleLogInfo", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Cancel_Match(extras) {
    _reporterNs.report("Evt_Cancel_Match", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_EnterFight(extras) {
    _reporterNs.report("Evt_EnterFight", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Match_Complete(extras) {
    _reporterNs.report("Evt_Match_Complete", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_PlayerDataInit(extras) {
    _reporterNs.report("Evt_PlayerDataInit", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Start_Match(extras) {
    _reporterNs.report("Evt_Start_Match", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
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

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomPanel(extras) {
    _reporterNs.report("RoomPanel", "../room/RoomPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "./BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUI(extras) {
    _reporterNs.report("FightUI", "../fight/FightUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleCompMgr(extras) {
    _reporterNs.report("battleCompMgr", "./BattleCompMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainPanel(extras) {
    _reporterNs.report("MainPanel", "../main/MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginPanel(extras) {
    _reporterNs.report("LoginPanel", "../login/LoginPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLogPanel(extras) {
    _reporterNs.report("FightLogPanel", "../fight/FightLogPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerPanel(extras) {
    _reporterNs.report("ServerPanel", "../login/ServerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSModelPanel(extras) {
    _reporterNs.report("VSModelPanel", "../vs/VSModelPanel", _context.meta, extras);
  }

  _export("BattleModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Battle_Exit = _unresolved_2.Battle_Exit;
      Battle_ShowSettlement = _unresolved_2.Battle_ShowSettlement;
      EventMgr = _unresolved_2.EventMgr;
      Evt_BattleCreatRoomResult = _unresolved_2.Evt_BattleCreatRoomResult;
      Evt_BattleDoubleUpdate = _unresolved_2.Evt_BattleDoubleUpdate;
      Evt_BattleLogGet = _unresolved_2.Evt_BattleLogGet;
      Evt_BattleLogInfo = _unresolved_2.Evt_BattleLogInfo;
      Evt_Cancel_Match = _unresolved_2.Evt_Cancel_Match;
      Evt_EnterFight = _unresolved_2.Evt_EnterFight;
      Evt_Match_Complete = _unresolved_2.Evt_Match_Complete;
      Evt_PlayerDataInit = _unresolved_2.Evt_PlayerDataInit;
      Evt_Start_Match = _unresolved_2.Evt_Start_Match;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
      Req = _unresolved_3.Req;
      Ret = _unresolved_3.Ret;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      MsgPanel = _unresolved_5.MsgPanel;
    }, function (_unresolved_6) {
      RoomPanel = _unresolved_6.RoomPanel;
    }, function (_unresolved_7) {
      battleDataMgr = _unresolved_7.battleDataMgr;
    }, function (_unresolved_8) {
      FightUI = _unresolved_8.FightUI;
    }, function (_unresolved_9) {
      GameSet = _unresolved_9.GameSet;
    }, function (_unresolved_10) {
      battleCompMgr = _unresolved_10.battleCompMgr;
    }, function (_unresolved_11) {
      GameScene = _unresolved_11.GameScene;
    }, function (_unresolved_12) {
      MainPanel = _unresolved_12.MainPanel;
    }, function (_unresolved_13) {
      LoginPanel = _unresolved_13.LoginPanel;
    }, function (_unresolved_14) {
      FightLogPanel = _unresolved_14.FightLogPanel;
    }, function (_unresolved_15) {
      Second = _unresolved_15.Second;
      Utils = _unresolved_15.Utils;
    }, function (_unresolved_16) {
      ServerPanel = _unresolved_16.ServerPanel;
    }, function (_unresolved_17) {
      VSModelPanel = _unresolved_17.VSModelPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "895e6xUs9JO3I9MmegfCRWE", "BattleModule", undefined);

      _export("BattleModule", BattleModule = class BattleModule {
        constructor() {
          this.roomPingTime = void 0;
          this.curRoom = void 0;
          this.isDoubleInt = void 0;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle_mgr.protocol.createbattlemgruserroom"], this.onCreatRoomResult, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomenter"], this.onEnterRoomResult, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).BattleRoomOpOutputPush, this.onBattleRoomOpOutputPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomleave"], this.onBattleroomleave, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle_mgr.protocol.getbattlerecentrecords"], this.onGetbattlerecentrecords, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle_mgr.protocol.getbattlereplayroom"], this.onGetbattlereplayroom, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle_mgr.protocol.createbattlereplayroom"], this.onCreatebattlereplayroom, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomdouble"], this.onBattleroomdouble, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle_mgr.protocol.getlastbattleroomsummary"], this.onGetlastbattleroomsummary, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).BattleRoomPlayersPush, this.onBattleRoomPlayersPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["match.protocol.matchmaking"], this.onMatchmaking, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["match.protocol.matchcancel"], this.onMatchcancel, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).MatchMakingPush, this.onMatchMakingPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_ShowSettlement === void 0 ? (_reportPossibleCrUseOfBattle_ShowSettlement({
            error: Error()
          }), Battle_ShowSettlement) : Battle_ShowSettlement, this.onBattleSettlement, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_Exit === void 0 ? (_reportPossibleCrUseOfBattle_Exit({
            error: Error()
          }), Battle_Exit) : Battle_Exit, this.onExitFight, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_PlayerDataInit === void 0 ? (_reportPossibleCrUseOfEvt_PlayerDataInit({
            error: Error()
          }), Evt_PlayerDataInit) : Evt_PlayerDataInit, this.onPlayerDataInit, this);
        }

        onBattleSettlement(roomId, playerAId, data) {
          var isGiveUp = data.leavePlayerId != null || data.leavePlayerId != "";

          if (isGiveUp) {
            (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
              error: Error()
            }), GameScene) : GameScene).isntance.EndAllAction();
            (_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
              error: Error()
            }), battleCompMgr) : battleCompMgr).stopComp();
            (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).clearCurBattlePack();
          }
        }

        onExitFight() {
          (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).isntance.EndAllAction();
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).removeTick((_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
            error: Error()
          }), battleCompMgr) : battleCompMgr).update, _crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
            error: Error()
          }), battleCompMgr) : battleCompMgr);
          (_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
            error: Error()
          }), battleCompMgr) : battleCompMgr).stopComp();
          (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).clearBattleData();
          (_crd && MainPanel === void 0 ? (_reportPossibleCrUseOfMainPanel({
            error: Error()
          }), MainPanel) : MainPanel).Show();
          (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).Hide();
        }

        onPlayerDataInit() {
          //获取有效战斗房间摘要
          var room = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["battle_mgr.protocol.getlastbattleroomsummary"]();
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle_mgr.protocol.getlastbattleroomsummary"], room);
        }

        onCreatRoomResult(data) {
          var room = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle_mgr.protocol.createbattlemgruserroom"].decode(data);
          console.log("onCreatRoomResult", room);

          if (room.res.code == 200) {
            this.curRoom = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).CopyProto(room.roomSummary, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomSummary); //structuredClone(room.roomSummary);

            (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).setCreatRoomData(room.roomSummary);
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("创建房间成功");
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(room.res.msg);
          } // GameSet.debug = true;


          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_BattleCreatRoomResult === void 0 ? (_reportPossibleCrUseOfEvt_BattleCreatRoomResult({
            error: Error()
          }), Evt_BattleCreatRoomResult) : Evt_BattleCreatRoomResult);
        }

        onEnterRoomResult(data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
              error: Error()
            }), Ret) : Ret)["battle.protocol.battleroomenter"].decode(data);
            console.log("onEnterRoomResult", result);
            if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).creatRoomData) return;
            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).creatRoomData.roomId != result.roomId) return;

            if (result.res.code != 200) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show(result.res.msg);
              return;
            }

            _this.enterRoom(true);
          })();
        }

        onBattleRoomOpOutputPush(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).BattleRoomOpOutputPush.decode(data);
          (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).addBattleData(result.roomId, result.outputs);
        }

        onBattleroomleave(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle.protocol.battleroomleave"].decode(data);
          if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData || (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData.roomId != result.roomId) return;

          if (result.res.code == 200) {
            this.clearRoomPing(); //battleDataMgr.clearCurBattlePack();
            //battleCompMgr.stopComp(battleDataMgr.checkIsStopBattlePack);
            //GameSet.removeTick(battleCompMgr.update, battleCompMgr);
            //GameSet.removeTick(this.onPingRoom, this);

            /* setTimeout(() => {
                battleDataMgr.leaveRoom();
            }, 3); */
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }
        }

        onGetbattlerecentrecords(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle_mgr.protocol.getbattlerecentrecords"].decode(data);

          if (result.res.code == 200) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_BattleLogGet === void 0 ? (_reportPossibleCrUseOfEvt_BattleLogGet({
              error: Error()
            }), Evt_BattleLogGet) : Evt_BattleLogGet, result.records);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }
        }

        onGetbattlereplayroom(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle_mgr.protocol.getbattlereplayroom"].decode(data);

          if (result.res.code == 200) {
            console.log("--------->getbattlereplayroom");
            console.dir(result.replayRoomSummary);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_BattleLogInfo === void 0 ? (_reportPossibleCrUseOfEvt_BattleLogInfo({
              error: Error()
            }), Evt_BattleLogInfo) : Evt_BattleLogInfo, result.replayRoomSummary);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }
        }

        onCreatebattlereplayroom(data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
              error: Error()
            }), Ret) : Ret)["battle_mgr.protocol.createbattlereplayroom"].decode(data);

            if (result.res.code == 200) {
              _this2.curRoom = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).CopyProto(result.roomSummary, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomSummary); //structuredClone(result.roomSummary);

              (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).setCreatRoomData(result.roomSummary);

              _this2.enterRoom();
            } else {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show(result.res.msg);
            }
          })();
        }

        onBattleroomdouble(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle.protocol.battleroomdouble"].decode(data);
          if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData || (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData.roomId != result.roomId) return;

          if (result.res.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("加倍成功");
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }
        }

        onGetlastbattleroomsummary(data) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
              error: Error()
            }), Ret) : Ret)["battle_mgr.protocol.getlastbattleroomsummary"].decode(data);

            if (result.res.code == 200) {
              if (result.roomSummary) {
                (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
                  error: Error()
                }), GameScene) : GameScene).isntance.EndAllAction();
                (_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
                  error: Error()
                }), battleCompMgr) : battleCompMgr).stopComp();
                (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).clearBattleData();
                _this3.curRoom = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).CopyProto(result.roomSummary, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomSummary); //structuredClone(result.roomSummary);

                (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                  error: Error()
                }), battleDataMgr) : battleDataMgr).setCreatRoomData(result.roomSummary);
                yield _this3.enterRoom();
                var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).pb.Server.create();
                server.id = _this3.curRoom.serverId;
                var enterRoom = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["battle.protocol.battleroomroundretransmission"]();
                enterRoom.server = server;
                enterRoom.roomId = _this3.curRoom.roomId;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["battle.protocol.battleroomroundretransmission"], enterRoom);
              }
            }
          })();
        }

        onBattleRoomPlayersPush(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).BattleRoomPlayersPush.decode(data);

          if (this.curRoom && this.curRoom.roomId == result.roomId) {
            (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).setRoomDouble(result.roomId, result.players);
            console.log("加倍结果--->" + result.players);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_BattleDoubleUpdate === void 0 ? (_reportPossibleCrUseOfEvt_BattleDoubleUpdate({
              error: Error()
            }), Evt_BattleDoubleUpdate) : Evt_BattleDoubleUpdate, this.isDoubleInt);
            this.isDoubleInt = true;
          }
        }

        onPingRoom() {
          this.clearRoomPing();
          this.roomPingTime = setInterval(this.sendRoomPing.bind(this), 5000);
        }

        clearRoomPing() {
          if (this.roomPingTime) {
            clearInterval(this.roomPingTime);
            this.roomPingTime = null;
          }
        }

        sendRoomPing() {
          if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData) {
            this.clearRoomPing();
            return;
          }

          var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).pb.Server.create();
          server.id = this.curRoom.serverId;
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["battle.protocol.battleroomping"]();
          data.server = server;
          data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomping"], data);
        }

        onMatchmaking(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["match.protocol.matchmaking"].decode(data);
          console.log("发起匹配", result);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Start_Match === void 0 ? (_reportPossibleCrUseOfEvt_Start_Match({
            error: Error()
          }), Evt_Start_Match) : Evt_Start_Match, result.res.code == 200);
        }

        onMatchcancel(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["match.protocol.matchcancel"].decode(data);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Cancel_Match === void 0 ? (_reportPossibleCrUseOfEvt_Cancel_Match({
            error: Error()
          }), Evt_Cancel_Match) : Evt_Cancel_Match, result.cancelled);
        }

        onMatchMakingPush(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).MatchMakingPush.decode(data);
          console.log("匹配结果推送", result);

          if (result.result.code == 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("匹配成功");
            this.curRoom = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).CopyProto(result.roomSummary, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomSummary); //structuredClone(result.roomSummary);

            (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).setCreatRoomData(result.roomSummary);
            var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).pb.Server.create();
            server.id = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).creatRoomData.serverId;
            var enterRoom = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["battle.protocol.battleroomenter"]();
            enterRoom.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).creatRoomData.roomId;
            enterRoom.server = server;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["battle.protocol.battleroomenter"], enterRoom);
            console.log("\u8BF7\u6C42\u8FDB\u5165\u623F\u95F4" + enterRoom.roomId);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.result.msg);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Match_Complete === void 0 ? (_reportPossibleCrUseOfEvt_Match_Complete({
            error: Error()
          }), Evt_Match_Complete) : Evt_Match_Complete, result.result.code == 200, this.curRoom);
        }

        enterRoom(isVs) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (isVs === void 0) {
              isVs = false;
            }

            _this4.isDoubleInt = false;

            _this4.onPingRoom();

            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("进入房间");
            (_crd && RoomPanel === void 0 ? (_reportPossibleCrUseOfRoomPanel({
              error: Error()
            }), RoomPanel) : RoomPanel).Hide();
            (_crd && FightUI === void 0 ? (_reportPossibleCrUseOfFightUI({
              error: Error()
            }), FightUI) : FightUI).ShowUI(_this4.curRoom);
            (_crd && ServerPanel === void 0 ? (_reportPossibleCrUseOfServerPanel({
              error: Error()
            }), ServerPanel) : ServerPanel).Hide();
            (_crd && LoginPanel === void 0 ? (_reportPossibleCrUseOfLoginPanel({
              error: Error()
            }), LoginPanel) : LoginPanel).Hide();
            (_crd && FightLogPanel === void 0 ? (_reportPossibleCrUseOfFightLogPanel({
              error: Error()
            }), FightLogPanel) : FightLogPanel).Hide();
            yield (_crd && MainPanel === void 0 ? (_reportPossibleCrUseOfMainPanel({
              error: Error()
            }), MainPanel) : MainPanel).Hide();
            yield (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
              error: Error()
            }), GameScene) : GameScene).Show();
            console.log("进入成功");
            (_crd && VSModelPanel === void 0 ? (_reportPossibleCrUseOfVSModelPanel({
              error: Error()
            }), VSModelPanel) : VSModelPanel).Hide();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_EnterFight === void 0 ? (_reportPossibleCrUseOfEvt_EnterFight({
              error: Error()
            }), Evt_EnterFight) : Evt_EnterFight);
            if (isVs) yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(2);
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).addTick((_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
              error: Error()
            }), battleCompMgr) : battleCompMgr).update, _crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
              error: Error()
            }), battleCompMgr) : battleCompMgr);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=23f76e3e6a67400a82ffd69f97779fcefe77d020.js.map