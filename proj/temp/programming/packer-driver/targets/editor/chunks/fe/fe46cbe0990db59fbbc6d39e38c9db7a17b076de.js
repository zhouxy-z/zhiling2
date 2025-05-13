System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Session, PlayerData, MainPanel, LoginPanel, Tips, Req, Ret, Route, EventMgr, Evt_Box_Update, Evt_Card_Add, Evt_Card_Chage, Evt_Card_Del, Evt_Player_Exp_Update, Evt_Player_Level_Update, Evt_PlayerDataInit, Evt_SeasonFightLog, Evt_SectionAwardInit, Evt_SectionAwardUpdate, Evt_SectionSettle, Evt_SectionUpdate, Evt_StarElementSettle, Evt_StarElementUpdate, Evt_Upgrade_Award_Update, Evt_User_Info_Update, MsgPanel, CfgMgr, ServerPanel, PlayerModule, _crd;

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainPanel(extras) {
    _reporterNs.report("MainPanel", "../main/MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginPanel(extras) {
    _reporterNs.report("LoginPanel", "../login/LoginPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
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

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Box_Update(extras) {
    _reporterNs.report("Evt_Box_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Add(extras) {
    _reporterNs.report("Evt_Card_Add", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Chage(extras) {
    _reporterNs.report("Evt_Card_Chage", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Del(extras) {
    _reporterNs.report("Evt_Card_Del", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Player_Exp_Update(extras) {
    _reporterNs.report("Evt_Player_Exp_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Player_Level_Update(extras) {
    _reporterNs.report("Evt_Player_Level_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_PlayerDataInit(extras) {
    _reporterNs.report("Evt_PlayerDataInit", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SeasonFightLog(extras) {
    _reporterNs.report("Evt_SeasonFightLog", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionAwardInit(extras) {
    _reporterNs.report("Evt_SectionAwardInit", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionAwardUpdate(extras) {
    _reporterNs.report("Evt_SectionAwardUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionSettle(extras) {
    _reporterNs.report("Evt_SectionSettle", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionUpdate(extras) {
    _reporterNs.report("Evt_SectionUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_StarElementSettle(extras) {
    _reporterNs.report("Evt_StarElementSettle", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_StarElementUpdate(extras) {
    _reporterNs.report("Evt_StarElementUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Upgrade_Award_Update(extras) {
    _reporterNs.report("Evt_Upgrade_Award_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_User_Info_Update(extras) {
    _reporterNs.report("Evt_User_Info_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerPanel(extras) {
    _reporterNs.report("ServerPanel", "../login/ServerPanel", _context.meta, extras);
  }

  _export("PlayerModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }, function (_unresolved_4) {
      MainPanel = _unresolved_4.MainPanel;
    }, function (_unresolved_5) {
      LoginPanel = _unresolved_5.LoginPanel;
    }, function (_unresolved_6) {
      Tips = _unresolved_6.Tips;
    }, function (_unresolved_7) {
      Req = _unresolved_7.Req;
      Ret = _unresolved_7.Ret;
      Route = _unresolved_7.Route;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
      Evt_Box_Update = _unresolved_8.Evt_Box_Update;
      Evt_Card_Add = _unresolved_8.Evt_Card_Add;
      Evt_Card_Chage = _unresolved_8.Evt_Card_Chage;
      Evt_Card_Del = _unresolved_8.Evt_Card_Del;
      Evt_Player_Exp_Update = _unresolved_8.Evt_Player_Exp_Update;
      Evt_Player_Level_Update = _unresolved_8.Evt_Player_Level_Update;
      Evt_PlayerDataInit = _unresolved_8.Evt_PlayerDataInit;
      Evt_SeasonFightLog = _unresolved_8.Evt_SeasonFightLog;
      Evt_SectionAwardInit = _unresolved_8.Evt_SectionAwardInit;
      Evt_SectionAwardUpdate = _unresolved_8.Evt_SectionAwardUpdate;
      Evt_SectionSettle = _unresolved_8.Evt_SectionSettle;
      Evt_SectionUpdate = _unresolved_8.Evt_SectionUpdate;
      Evt_StarElementSettle = _unresolved_8.Evt_StarElementSettle;
      Evt_StarElementUpdate = _unresolved_8.Evt_StarElementUpdate;
      Evt_Upgrade_Award_Update = _unresolved_8.Evt_Upgrade_Award_Update;
      Evt_User_Info_Update = _unresolved_8.Evt_User_Info_Update;
    }, function (_unresolved_9) {
      MsgPanel = _unresolved_9.MsgPanel;
    }, function (_unresolved_10) {
      CfgMgr = _unresolved_10.CfgMgr;
    }, function (_unresolved_11) {
      ServerPanel = _unresolved_11.ServerPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24cf3ysBQJMxLI9T5LwWz5z", "PlayerModule", undefined);

      _export("PlayerModule", PlayerModule = class PlayerModule {
        constructor() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.getuserinfo"], this.onGetuserinfo, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["player.protocol.getplayerdata"], this.onGetPlayerData, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerBattleCardChangePush, this.onChangeCardData, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.passwordset"], this.onResetPasswordValid, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).RiskLevelPush, this.onRiskLevelPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.battlecardupgrade"], this.onBattleCardUpgrade, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["PlayerLevelExpChangedPush"], this.onPlayerLevelExpChangedPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.playerlevelrewardclaim"], this.onPlayerLevelRewardClaim, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getplayerlevelrewards"], this.onGetPlayerLevelRewards, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getprocessboxrewards"], this.onGetProcessBoxRewards, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.processboxopen"], this.onProcessBoxOpen, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["PlayerPvpInfoPush"], this.onPlayerPvpInfoPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.getranklevelreward"], this.onGetranklevelreward, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.ranklevelrewardclaim"], this.onRanklevelrewardclaim, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["PlayerPvpRankBattleSettlePush"], this.onPlayerPvpRankBattleSettlePush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["PvpRankSeasonChangedPush"], this.onPvpRankSeasonChangedPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.getpvprankinfo"], this.onGetpvprankinfo, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["UserInfoChangePush"], this.onUserInfoChangePush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.getpvprankbattlerecords"], this.onGetpvprankbattlerecords, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["PlayerPvpStarInfoPush"], this.onPlayerPvpStarInfoPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["PvpStarSeasonChangedPush"], this.onPvpStarSeasonChangedPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["PlayerPvpStarBattleSettlePush"], this.onPlayerPvpStarBattleSettlePush, this);
        }

        onGetuserinfo(data) {
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).user = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["user.protocol.getuserinfo"].decode(data);
          console.log("onGetuserinfo", (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).user);
        }

        async onGetPlayerData(data) {
          let info = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["player.protocol.getplayerdata"].decode(data);
          console.log("onGetPlayerData", info);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).Setplayer(info.data);
          (_crd && ServerPanel === void 0 ? (_reportPossibleCrUseOfServerPanel({
            error: Error()
          }), ServerPanel) : ServerPanel).Hide();
          (_crd && LoginPanel === void 0 ? (_reportPossibleCrUseOfLoginPanel({
            error: Error()
          }), LoginPanel) : LoginPanel).Hide();
          await (_crd && MainPanel === void 0 ? (_reportPossibleCrUseOfMainPanel({
            error: Error()
          }), MainPanel) : MainPanel).Show();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_PlayerDataInit === void 0 ? (_reportPossibleCrUseOfEvt_PlayerDataInit({
            error: Error()
          }), Evt_PlayerDataInit) : Evt_PlayerDataInit);
        }

        onChangeCardData(data) {
          let info = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerBattleCardChangePush.decode(data);
          console.log("PlayerBattleCardChangePush", info);

          switch (info.change) {
            case 1:
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).AddCardData(info.card);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Add === void 0 ? (_reportPossibleCrUseOfEvt_Card_Add({
                error: Error()
              }), Evt_Card_Add) : Evt_Card_Add, info.card);
              break;

            case 2:
              let oledCardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCardDataById(info.card.id);
              let changeNum = oledCardData ? info.card.quality - oledCardData.quality : 0;
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).UpdateCardData(info.card);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Chage === void 0 ? (_reportPossibleCrUseOfEvt_Card_Chage({
                error: Error()
              }), Evt_Card_Chage) : Evt_Card_Chage, info.card, changeNum);
              break;

            case 3:
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).DelCardData(info.card);
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["logic.protocol.getplayerdecks"]);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Del === void 0 ? (_reportPossibleCrUseOfEvt_Card_Del({
                error: Error()
              }), Evt_Card_Del) : Evt_Card_Del, info.card);
              break;
          }
        }

        onResetPasswordValid(data) {
          let passwordData = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["user.protocol.passwordset"].decode(data);

          if (passwordData.res.code > 0) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(passwordData.res.msg);
            return;
          } // SettingPasswordSuccessPanel.Show();
          // SettingPasswordPanel.Hide();


          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).user.info.passwordSet = true;
        }

        onRiskLevelPush(data) {
          let RiskLevel = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).RiskLevelPush.decode(data);
          console.log(RiskLevel);
        }

        onBattleCardUpgrade(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.battlecardupgrade"].decode(data);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
            return;
          }
        }

        onPlayerLevelExpChangedPush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["PlayerLevelExpChangedPush"].decode(data);

          if (result.levelAfter != result.levelBefore) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.level = result.levelAfter;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_Player_Level_Update === void 0 ? (_reportPossibleCrUseOfEvt_Player_Level_Update({
              error: Error()
            }), Evt_Player_Level_Update) : Evt_Player_Level_Update, result);
          }

          if (result.levelExpAfter != result.levelExpBefore) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.levelExp = result.levelExpAfter;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_Player_Exp_Update === void 0 ? (_reportPossibleCrUseOfEvt_Player_Exp_Update({
              error: Error()
            }), Evt_Player_Exp_Update) : Evt_Player_Exp_Update, result);
          }
        }

        onPlayerLevelRewardClaim(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.playerlevelrewardclaim"].decode(data);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).AddUpgradeAward(result.levelReward);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Upgrade_Award_Update === void 0 ? (_reportPossibleCrUseOfEvt_Upgrade_Award_Update({
            error: Error()
          }), Evt_Upgrade_Award_Update) : Evt_Upgrade_Award_Update, result.rewardThing);
        }

        onGetPlayerLevelRewards(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.getplayerlevelrewards"].decode(data);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).InitUpgradeAward(result.levelRewards);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Upgrade_Award_Update === void 0 ? (_reportPossibleCrUseOfEvt_Upgrade_Award_Update({
            error: Error()
          }), Evt_Upgrade_Award_Update) : Evt_Upgrade_Award_Update);
        }

        onGetProcessBoxRewards(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.getprocessboxrewards"].decode(data);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).InitBoxProcessList(result.rewards);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Box_Update === void 0 ? (_reportPossibleCrUseOfEvt_Box_Update({
            error: Error()
          }), Evt_Box_Update) : Evt_Box_Update);
        }

        onProcessBoxOpen(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.processboxopen"].decode(data);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).UpdateBoxProcessData(result.boxReward);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Box_Update === void 0 ? (_reportPossibleCrUseOfEvt_Box_Update({
            error: Error()
          }), Evt_Box_Update) : Evt_Box_Update, result.rewardThings);
        }

        onPlayerPvpInfoPush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["PlayerPvpInfoPush"].decode(data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).SetSeasonData(result);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_SectionUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionUpdate({
            error: Error()
          }), Evt_SectionUpdate) : Evt_SectionUpdate);
          let sendData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["pvp.protocol.getranklevelreward"]();
          sendData.seasonId = result.currentSeasonId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.getranklevelreward"], sendData);
        }

        onGetranklevelreward(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["pvp.protocol.getranklevelreward"].decode(data);

          if (result.res.code == 200) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).SetSectionAwardData(result.levelReward);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_SectionAwardInit === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardInit({
              error: Error()
            }), Evt_SectionAwardInit) : Evt_SectionAwardInit);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }
        }

        onRanklevelrewardclaim(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["pvp.protocol.ranklevelrewardclaim"].decode(data);

          if (result.res.code == 200) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).ChangeSectionAwardData(result.reward);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_SectionAwardUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardUpdate({
              error: Error()
            }), Evt_SectionAwardUpdate) : Evt_SectionAwardUpdate, result.reward);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }
        }

        onPlayerPvpRankBattleSettlePush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["PlayerPvpRankBattleSettlePush"].decode(data);

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData) {
            if (result.rankRecord.seasonId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId) {
              let newData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurSeasonData; //newData.currentRankInfo.rankLevelId = result.rankRecord.rankLevelId;

              newData.currentRankInfo.rankPoints = result.rankRecord.pointAfter;
              console.log("排位结算---->" + result.rankRecord);
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).SetSeasonData(newData);
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_SectionSettle === void 0 ? (_reportPossibleCrUseOfEvt_SectionSettle({
            error: Error()
          }), Evt_SectionSettle) : Evt_SectionSettle, result);
        }

        onPvpRankSeasonChangedPush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["PvpRankSeasonChangedPush"].decode(data);
          let newData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;
          newData.currentSeasonId = result.currentSeasonId;
          let stdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPSnatchList();
          let seasonIds = [];

          for (let std of stdPVPSnatch) {
            seasonIds.push(std.MatchID);
          }

          let sendData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["pvp.protocol.getpvprankinfo"]();
          sendData.seasonIds = seasonIds;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.getpvprankinfo"], sendData);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).SetSeasonData(newData);
        }

        onGetpvprankinfo(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["pvp.protocol.getpvprankinfo"].decode(data);

          if (result.res.code == 200) {
            let newData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CurSeasonData;
            newData.currentRankInfo = result.seasonRankInfo[newData.currentSeasonId];
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).SetSeasonData(newData);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_SectionUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionUpdate({
              error: Error()
            }), Evt_SectionUpdate) : Evt_SectionUpdate); //赛季变更重更新拉取一下段位奖励数据

            let sendData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["pvp.protocol.getranklevelreward"]();
            sendData.seasonId = newData.currentSeasonId;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["pvp.protocol.getranklevelreward"], sendData);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }
        }

        onUserInfoChangePush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["UserInfoChangePush"].decode(data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).SetUserInfo(result.info);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_User_Info_Update === void 0 ? (_reportPossibleCrUseOfEvt_User_Info_Update({
            error: Error()
          }), Evt_User_Info_Update) : Evt_User_Info_Update);
        }

        onGetpvprankbattlerecords(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["pvp.protocol.getpvprankbattlerecords"].decode(data);

          if (result.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(result.res.msg);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_SeasonFightLog === void 0 ? (_reportPossibleCrUseOfEvt_SeasonFightLog({
            error: Error()
          }), Evt_SeasonFightLog) : Evt_SeasonFightLog, result.records || []);
        }

        onPlayerPvpStarInfoPush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["PlayerPvpStarInfoPush"].decode(data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).SetSatrElementData(result);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_StarElementUpdate === void 0 ? (_reportPossibleCrUseOfEvt_StarElementUpdate({
            error: Error()
          }), Evt_StarElementUpdate) : Evt_StarElementUpdate);
        }

        onPvpStarSeasonChangedPush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["PvpStarSeasonChangedPush"].decode(data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).SetSatrElementData(result);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_StarElementUpdate === void 0 ? (_reportPossibleCrUseOfEvt_StarElementUpdate({
            error: Error()
          }), Evt_StarElementUpdate) : Evt_StarElementUpdate);
        }

        onPlayerPvpStarBattleSettlePush(data) {
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["PlayerPvpStarBattleSettlePush"].decode(data);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_StarElementSettle === void 0 ? (_reportPossibleCrUseOfEvt_StarElementSettle({
            error: Error()
          }), Evt_StarElementSettle) : Evt_StarElementSettle, result);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe46cbe0990db59fbbc6d39e38c9db7a17b076de.js.map