System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CfgMgr, ThingTypeName, EventMgr, Evt_Add_Card_Group_update, Evt_Card_Back_Update, Evt_Card_Check_By_Name, Evt_Card_Group_Update, Evt_Card_Head_Update, Evt_Main_Panel_Card_Group_Update, Evt_Set_Battle_Card_Group_Update, Req, Ret, Route, Session, MsgPanel, RewardTips, PlayerData, CardsMode, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Add_Card_Group_update(extras) {
    _reporterNs.report("Evt_Add_Card_Group_update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Back_Update(extras) {
    _reporterNs.report("Evt_Card_Back_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Check_By_Name(extras) {
    _reporterNs.report("Evt_Card_Check_By_Name", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Head_Update(extras) {
    _reporterNs.report("Evt_Card_Head_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Main_Panel_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Main_Panel_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Set_Battle_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("CardsMode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
      ThingTypeName = _unresolved_2.ThingTypeName;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
      Evt_Add_Card_Group_update = _unresolved_3.Evt_Add_Card_Group_update;
      Evt_Card_Back_Update = _unresolved_3.Evt_Card_Back_Update;
      Evt_Card_Check_By_Name = _unresolved_3.Evt_Card_Check_By_Name;
      Evt_Card_Group_Update = _unresolved_3.Evt_Card_Group_Update;
      Evt_Card_Head_Update = _unresolved_3.Evt_Card_Head_Update;
      Evt_Main_Panel_Card_Group_Update = _unresolved_3.Evt_Main_Panel_Card_Group_Update;
      Evt_Set_Battle_Card_Group_Update = _unresolved_3.Evt_Set_Battle_Card_Group_Update;
    }, function (_unresolved_4) {
      Req = _unresolved_4.Req;
      Ret = _unresolved_4.Ret;
      Route = _unresolved_4.Route;
    }, function (_unresolved_5) {
      Session = _unresolved_5.Session;
    }, function (_unresolved_6) {
      MsgPanel = _unresolved_6.MsgPanel;
    }, function (_unresolved_7) {
      RewardTips = _unresolved_7.RewardTips;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "424223LGFpLxplWBbgX+8NX", "CardsMode", undefined);

      _export("CardsMode", CardsMode = class CardsMode {
        constructor() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.adddeck"], this.adddeck, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setdeckcards"], this.SetCardsGroup, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getplayerdecks"], this.getPlayerdecks, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setdeckattrs"], this.setdeckattrs, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getdeckcards"], this.getdeckcards, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setdeckdefault"], this.setdeckdefault, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerDefaultDeckPush, this.DefaultDeckPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.deletedeck"], this.deletedeck, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getavatarinfos"], this.getavatarinfos, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setavatarinfos"], this.setavatarinfos, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getcardbackinfos"], this.getcardbackinfos, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setcardbackinfos"], this.setcardbackinfos, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerNewAvatarPush, this.NewAvatarPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerNewCardBackPush, this.NewCardBackPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.noobcardsclaim"], this.noobcardsclaim, this);
        }
        /**添加空卡组 */


        adddeck(data) {
          let setData = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.adddeck"].decode(data);
          console.log(setData);

          if (setData.res.code == 200) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cur_id = setData.attrs.id;
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.push(setData.attrs);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_Add_Card_Group_update === void 0 ? (_reportPossibleCrUseOfEvt_Add_Card_Group_update({
              error: Error()
            }), Evt_Add_Card_Group_update) : Evt_Add_Card_Group_update);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(setData.res.code));
          }
        }
        /**修改卡组 */


        SetCardsGroup(data) {
          let setData = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.setdeckcards"].decode(data);
          this.onSetHasCardGroupAttrs(setData);
        }
        /**设置卡组中卡牌的数量为空时的修改返回 */


        setdeckattrs(data) {
          let setData = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.setdeckattrs"].decode(data);
          this.onSetHasCardGroupAttrs(setData);
        }

        onSetHasCardGroupAttrs(setData) {
          if (setData.res.code == 200) {
            console.log("修改卡组成功", setData); // Session.Send(Protocol.getplayerdecks)

            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("修改成功");
            let index = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.findIndex(item => {
              return item.id == setData.attrs.id;
            });

            if (index != -1) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList[index] = setData.attrs;
            } else {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList.push(setData.attrs);
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
              error: Error()
            }), Evt_Card_Group_Update) : Evt_Card_Group_Update);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(setData.res.code));
          }
        }
        /**查询卡组名字 */


        getPlayerdecks(data) {
          let name_data_list = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.getplayerdecks"].decode(data);
          console.log("getPlayerdecks", name_data_list);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList = name_data_list.decks;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Main_Panel_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Main_Panel_Card_Group_Update({
            error: Error()
          }), Evt_Main_Panel_Card_Group_Update) : Evt_Main_Panel_Card_Group_Update);
        }
        /**查询卡组卡牌数据 */


        getdeckcards(data) {
          let card_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.getdeckcards"].decode(data);
          console.log("getdeckcards", card_data);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Check_By_Name === void 0 ? (_reportPossibleCrUseOfEvt_Card_Check_By_Name({
            error: Error()
          }), Evt_Card_Check_By_Name) : Evt_Card_Check_By_Name, card_data.cards);
        }
        /**设置默认 */


        setdeckdefault(data) {
          let set_default = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.setdeckdefault"].decode(data);
          console.log("setdeckdefault", set_default);

          if (set_default.res.code == 200) {
            for (let index = 0; index < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.length; index++) {
              let cardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList[index];

              if (cardData.id == set_default.attrs.id) {
                cardData.isDefault = set_default.attrs.isDefault;
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("设置出战成功");
              } else {
                cardData.isDefault = false;
              }
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_Set_Battle_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update({
              error: Error()
            }), Evt_Set_Battle_Card_Group_Update) : Evt_Set_Battle_Card_Group_Update);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(set_default.res.code));
          }
        }
        /**设置默认 */


        DefaultDeckPush(data) {
          let set_default = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerDefaultDeckPush.decode(data);
          console.log("DefaultDeckPush", set_default);
        }
        /**删除卡组 */


        deletedeck(data) {
          let delete_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.deletedeck"].decode(data);
          console.log("删除卡组", delete_data);

          if (delete_data.res.code == 200) {
            let index = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.findIndex(item => {
              return item.id == delete_data.deckId;
            });

            if (index != -1) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList.splice(index, 1);
            }

            let isReset = false;

            for (let index = 0; index < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.length; index++) {
              let cardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList[index];

              if (cardData == delete_data.deckId) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cardNameList.splice(index, 1);
                isReset = cardData.isDefault;
                break;
              }
            }

            if (isReset && (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.length) {
              let set = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["logic.protocol.setdeckdefault"]();
              set.deckId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList[0].id;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["logic.protocol.setdeckdefault"], set);
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
              error: Error()
            }), Evt_Card_Group_Update) : Evt_Card_Group_Update);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(delete_data.res.code));
          }
        }
        /**新头像推送 */


        NewAvatarPush(data) {
          let new_head = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerNewAvatarPush.decode(data);
          console.log("NewAvatarPush", new_head);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardHeadList[new_head.newAvatar.avatarId] = new_head.newAvatar;
        }
        /**查询头像列表返回 */


        getavatarinfos(data) {
          let avatar_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.getavatarinfos"].decode(data);
          console.log("查询头像列表返回", avatar_data, Object.keys(avatar_data.avatarInfos));

          if (Object.keys(avatar_data.avatarInfos).length > 0) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardHeadList = avatar_data.avatarInfos;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Head_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Head_Update({
            error: Error()
          }), Evt_Card_Head_Update) : Evt_Card_Head_Update);
        }
        /**设置头像列表返回 */


        setavatarinfos(data) {
          let avatar_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.setavatarinfos"].decode(data);
          console.log("设置头像列表返回", avatar_data);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Head_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Head_Update({
            error: Error()
          }), Evt_Card_Head_Update) : Evt_Card_Head_Update);
        }
        /**新卡背推送 */


        NewCardBackPush(data) {
          let new_cardBack = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerNewCardBackPush.decode(data);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardBackList[new_cardBack.newCardBack.cardBackId] = new_cardBack.newCardBack;
        }
        /**查询卡背列表返回 */


        getcardbackinfos(data) {
          let avatar_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.getcardbackinfos"].decode(data);
          console.log("查询卡背列表返回", avatar_data);

          if (Object.keys(avatar_data.cardBackInfos).length > 0) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardBackList = avatar_data.cardBackInfos;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Back_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Back_Update({
            error: Error()
          }), Evt_Card_Back_Update) : Evt_Card_Back_Update);
        }
        /**设置卡背列表返回 */


        setcardbackinfos(data) {
          let avatar_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.setcardbackinfos"].decode(data);
          console.log("设置卡背列表返回", avatar_data);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Back_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Back_Update({
            error: Error()
          }), Evt_Card_Back_Update) : Evt_Card_Back_Update);
        }
        /**领取卡组 */


        noobcardsclaim(data) {
          let getCardData = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.noobcardsclaim"].decode(data);
          console.log(getCardData);

          if (getCardData.res.code == 200) {
            let card_list = [];

            for (const key in getCardData.deckInfo.cards) {
              const element = getCardData.deckInfo.cards[key];
              let thing_data = {
                type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                  error: Error()
                }), ThingTypeName) : ThingTypeName).BattleCard,
                card: null
              };
              thing_data.type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).BattleCard;
              thing_data.card = element;
              card_list.push(thing_data);
            }

            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cur_id = getCardData.deckInfo.attrs.id;
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.statusMark.NoobCardsAdd = true;
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList = [];
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.push(getCardData.deckInfo.attrs);
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(card_list, getCardData.deckInfo.attrs);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
              error: Error()
            }), Evt_Card_Group_Update) : Evt_Card_Group_Update);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetErrorCfgByCode(getCardData.res.code));
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5783e3b1f2bac670ec395f389dd99c09d7b3328b.js.map