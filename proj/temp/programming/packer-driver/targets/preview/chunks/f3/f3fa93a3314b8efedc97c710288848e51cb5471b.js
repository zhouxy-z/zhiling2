System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, Evt_DelMail, Evt_Get_Mail_Log_Updata, Evt_Mail_Update, Evt_PlayerDataInfo_Update, Evt_ReadMail, Evt_SendMail, Session, Tips, PlayerData, RewardTips, Md5Utils, Req, Ret, Route, MsgPanel, MailModule, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_DelMail(extras) {
    _reporterNs.report("Evt_DelMail", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Get_Mail_Log_Updata(extras) {
    _reporterNs.report("Evt_Get_Mail_Log_Updata", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Mail_Update(extras) {
    _reporterNs.report("Evt_Mail_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_PlayerDataInfo_Update(extras) {
    _reporterNs.report("Evt_PlayerDataInfo_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ReadMail(extras) {
    _reporterNs.report("Evt_ReadMail", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SendMail(extras) {
    _reporterNs.report("Evt_SendMail", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMd5Utils(extras) {
    _reporterNs.report("Md5Utils", "../../utils/Md5Utils", _context.meta, extras);
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

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  _export("MailModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_DelMail = _unresolved_2.Evt_DelMail;
      Evt_Get_Mail_Log_Updata = _unresolved_2.Evt_Get_Mail_Log_Updata;
      Evt_Mail_Update = _unresolved_2.Evt_Mail_Update;
      Evt_PlayerDataInfo_Update = _unresolved_2.Evt_PlayerDataInfo_Update;
      Evt_ReadMail = _unresolved_2.Evt_ReadMail;
      Evt_SendMail = _unresolved_2.Evt_SendMail;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      Tips = _unresolved_4.Tips;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      RewardTips = _unresolved_6.RewardTips;
    }, function (_unresolved_7) {
      Md5Utils = _unresolved_7.Md5Utils;
    }, function (_unresolved_8) {
      Req = _unresolved_8.Req;
      Ret = _unresolved_8.Ret;
      Route = _unresolved_8.Route;
    }, function (_unresolved_9) {
      MsgPanel = _unresolved_9.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7a1ez9gYJEuoKsv+4Pif5D", "MailModule", undefined);

      _export("MailModule", MailModule = class MailModule {
        constructor() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).NewMailPush, this.onMailPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.getmails"], this.onReadMailList, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.readmail"], this.onReadMail, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.claimmailattachment"], this.onClaimMailAttachments, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.deletemails"], this.onDeleteMail, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.claimmailsattachment"], this.onClaimAllMailAttachments, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.searchuser"], this.onPlayerInfo, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.sendgivemail"], this.onSendCurrency, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["player.protocol.getitemrecords"], this.ongetitemrecords, this);
        }
        /**
         * 新邮件
         * @param data 
         */


        onMailPush(data) {
          var pushData = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).NewMailPush.decode(data);
          console.log("推送新邮件", pushData);
          var getmails = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["mail.protocol.getmails"]();
          getmails.readFlag = 0;
          getmails.start = "";
          getmails.limit = 9999;
          getmails.containsMode = 0;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.getmails"], getmails);
        }
        /**接收邮件列表 */


        onReadMailList(data) {
          var data_list = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["mail.protocol.getmails"].decode(data);
          console.log("接收邮件列表", data_list);

          if (data_list.mails && data_list.mails.length > 0) {
            var _loop = function _loop(mail) {
              if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mailmap[mail.id] && mail.senderPlayerId != (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).player.playerId) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).mailmap[mail.id] = mail;
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).mails.push(mail);
              } else {
                var curMail = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).mails.find(item => item.id === mail.id) || null;
                curMail = mail;
              }
            };

            for (var mail of data_list.mails) {
              _loop(mail);
            }

            if (data_list.total) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mail_start_id = [];
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mail_start_id.push("");
            }

            if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mail_start_id.findIndex(id => id == data_list.mails[data_list.mails.length - 1].id) == -1) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mail_start_id.push(data_list.mails[data_list.mails.length - 1].id);
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Mail_Update === void 0 ? (_reportPossibleCrUseOfEvt_Mail_Update({
            error: Error()
          }), Evt_Mail_Update) : Evt_Mail_Update);
        }
        /**读取邮件内容 */


        onReadMail(data) {
          var read_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["mail.protocol.readmail"].decode(data);
          console.log("读取邮件", read_data);
          this.updateMailsData(read_data, 1);
        }
        /**提取附件 */


        onClaimMailAttachments(data) {
          var get_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["mail.protocol.claimmailattachment"].decode(data);
          console.log("提取附件", get_data);

          if (get_data.res.code == 200) {
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(get_data.mail.attachments);
            this.updateMailsData(get_data, 2);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("邮件领取失败");
          }
        }

        updateMailsData(mail_data, type) {
          for (var i = 0; i < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).mails.length; i++) {
            var mail = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mails[i];

            if (mail.id == mail_data.mail.id) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mails[i] = mail_data.mail;

              if (type == 1) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).mails[i].isRead = true;
              } else if (type == 2) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).mails[i].isAttachmentClaimed = true;
              }

              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mails[i].content = mail_data.mail.content;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(_crd && Evt_ReadMail === void 0 ? (_reportPossibleCrUseOfEvt_ReadMail({
                error: Error()
              }), Evt_ReadMail) : Evt_ReadMail, (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mails[i]);
              return;
            }
          }
        }
        /**删除邮件 */


        onDeleteMail(data) {
          var delete_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["mail.protocol.deletemails"].decode(data);
          console.log("删除邮件", delete_data);

          if (delete_data.deletedMailIds.length > 0) {
            for (var i = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mails.length - 1; i >= 0; i--) {
              var mail = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mails[i];

              if (delete_data.deletedMailIds.indexOf(mail.id) != -1) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).mails.splice(i, 1);
                delete (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).mailmap[mail.id];
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit(_crd && Evt_DelMail === void 0 ? (_reportPossibleCrUseOfEvt_DelMail({
                  error: Error()
                }), Evt_DelMail) : Evt_DelMail);
              }
            }

            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("删除成功");
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("没有可删除邮件");
          } // EventMgr.emit(Evt_ReadMail);

        }
        /**提取所有附件 */


        onClaimAllMailAttachments(data) {
          var gets_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["mail.protocol.claimmailsattachment"].decode(data);
          console.log("提取所有附件", gets_data);

          if (gets_data.things && gets_data.things.length > 0) {
            for (var i = 0; i < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mails.length; i++) {
              var mail = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).mails[i];
              mail.isRead = true;
              mail.isAttachmentClaimed = true;
            }

            var reward_data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).getMailReward(gets_data.things);
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(reward_data);
          } else {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u6CA1\u6709\u53EF\u9886\u53D6\u90AE\u4EF6!");
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_DelMail === void 0 ? (_reportPossibleCrUseOfEvt_DelMail({
            error: Error()
          }), Evt_DelMail) : Evt_DelMail);
        }
        /**邮件玩家查询 */


        onPlayerInfo(data) {
          var player_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["user.protocol.searchuser"].decode(data);
          console.log(player_data);

          if (player_data.info) {
            // MailPlayerPanel.Show(player_data.info);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_PlayerDataInfo_Update === void 0 ? (_reportPossibleCrUseOfEvt_PlayerDataInfo_Update({
              error: Error()
            }), Evt_PlayerDataInfo_Update) : Evt_PlayerDataInfo_Update, player_data.info);
          } else {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u6CA1\u627E\u5230\u6307\u5B9A\u73A9\u5BB6\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01");
          }
        }
        /**发送五彩石邮件回调 */


        onSendCurrency(data) {
          var send_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.sendgivemail"].decode(data);
          console.log(send_data);

          if (send_data.res.code == 1107) {
            var setpassword = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["user.protocol.passwordset"]();
            setpassword.password = (_crd && Md5Utils === void 0 ? (_reportPossibleCrUseOfMd5Utils({
              error: Error()
            }), Md5Utils) : Md5Utils).hash((_crd && Md5Utils === void 0 ? (_reportPossibleCrUseOfMd5Utils({
              error: Error()
            }), Md5Utils) : Md5Utils).hash("1234567"));
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["user.protocol.passwordset"], setpassword);
          } else if (send_data.res.code == 200) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_SendMail === void 0 ? (_reportPossibleCrUseOfEvt_SendMail({
              error: Error()
            }), Evt_SendMail) : Evt_SendMail);
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u53D1\u9001\u6210\u529F");
          } else if (send_data.res.code == 1304) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u53D1\u9001\u5931\u8D25, \u8D85\u51FA\u6BCF\u65E5\u8D60\u9001\u4E0A\u9650");
          } else {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u53D1\u9001\u5931\u8D25");
          }
        }
        /**邮件赠送接收物品查询返回 */


        ongetitemrecords(data) {
          var info_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["player.protocol.getitemrecords"].decode(data);
          console.log(info_data);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Get_Mail_Log_Updata === void 0 ? (_reportPossibleCrUseOfEvt_Get_Mail_Log_Updata({
            error: Error()
          }), Evt_Get_Mail_Log_Updata) : Evt_Get_Mail_Log_Updata, info_data.records);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f3fa93a3314b8efedc97c710288848e51cb5471b.js.map