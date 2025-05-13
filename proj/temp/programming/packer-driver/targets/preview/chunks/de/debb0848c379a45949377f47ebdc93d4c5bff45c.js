System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, EditBox, Input, Label, ScrollView, Sprite, SpriteFrame, Toggle, instantiate, js, path, AutoScroller, ResMgr, folder_mail, EventMgr, Evt_DelMail, Evt_Get_Mail_Log_Updata, Evt_Hide_Scene, Evt_Mail_Add, Evt_Mail_Update, Evt_PlayerDataInfo_Update, Evt_ReadMail, Evt_Show_Scene, Session, DateUtils, Panel, PlayerData, Tips, MailSendContent, MailContent, Req, Route, BagItem, CfgMgr, ItemType, ThingTypeName, ItemUtil, MailPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_mail(extras) {
    _reporterNs.report("folder_mail", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_DelMail(extras) {
    _reporterNs.report("Evt_DelMail", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Get_Mail_Log_Updata(extras) {
    _reporterNs.report("Evt_Get_Mail_Log_Updata", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Hide_Scene(extras) {
    _reporterNs.report("Evt_Hide_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Mail_Add(extras) {
    _reporterNs.report("Evt_Mail_Add", "../../manager/EventMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfEvt_Show_Scene(extras) {
    _reporterNs.report("Evt_Show_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerMailData(extras) {
    _reporterNs.report("SPlayerMailData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailSendContent(extras) {
    _reporterNs.report("MailSendContent", "./MailSendContent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailContent(extras) {
    _reporterNs.report("MailContent", "./MailContent", _context.meta, extras);
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

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  _export("MailPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Label = _cc.Label;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      instantiate = _cc.instantiate;
      js = _cc.js;
      path = _cc.path;
    }, function (_unresolved_2) {
      AutoScroller = _unresolved_2.AutoScroller;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      folder_mail = _unresolved_3.folder_mail;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_DelMail = _unresolved_4.Evt_DelMail;
      Evt_Get_Mail_Log_Updata = _unresolved_4.Evt_Get_Mail_Log_Updata;
      Evt_Hide_Scene = _unresolved_4.Evt_Hide_Scene;
      Evt_Mail_Add = _unresolved_4.Evt_Mail_Add;
      Evt_Mail_Update = _unresolved_4.Evt_Mail_Update;
      Evt_PlayerDataInfo_Update = _unresolved_4.Evt_PlayerDataInfo_Update;
      Evt_ReadMail = _unresolved_4.Evt_ReadMail;
      Evt_Show_Scene = _unresolved_4.Evt_Show_Scene;
    }, function (_unresolved_5) {
      Session = _unresolved_5.Session;
    }, function (_unresolved_6) {
      DateUtils = _unresolved_6.DateUtils;
    }, function (_unresolved_7) {
      Panel = _unresolved_7.Panel;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      Tips = _unresolved_9.Tips;
    }, function (_unresolved_10) {
      MailSendContent = _unresolved_10.MailSendContent;
    }, function (_unresolved_11) {
      MailContent = _unresolved_11.MailContent;
    }, function (_unresolved_12) {
      Req = _unresolved_12.Req;
      Route = _unresolved_12.Route;
    }, function (_unresolved_13) {
      BagItem = _unresolved_13.BagItem;
    }, function (_unresolved_14) {
      CfgMgr = _unresolved_14.CfgMgr;
      ItemType = _unresolved_14.ItemType;
      ThingTypeName = _unresolved_14.ThingTypeName;
    }, function (_unresolved_15) {
      ItemUtil = _unresolved_15.ItemUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f35980DO0lGE5QlsUrXZS0W", "MailPanel", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'EditBox', 'EventTouch', 'Input', 'Label', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'find', 'instantiate', 'js', 'path', 'sp', 'tween']);

      _export("MailPanel", MailPanel = class MailPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/mail/MailPanel";
          this.nav = void 0;
          this.layout = void 0;
          this.leftNode = void 0;
          this.MailContent = void 0;
          this.leftContentNode = void 0;
          this.scroller = void 0;
          this.deletBtn = void 0;
          this.getAwardBtn = void 0;
          this.leftEmpty = void 0;
          this.sendMail = void 0;
          this.send = void 0;
          this.editBox = void 0;
          this.playerNode = void 0;
          this.icon = void 0;
          this.playerName = void 0;
          this.playerGuide = void 0;
          this.lv = void 0;
          this.uid = void 0;
          this.giftBtn = void 0;
          this.clone_item = void 0;
          this.serchBtn = void 0;
          this.MailSendContent = void 0;
          this.playerInfo = void 0;
          this.pageSize = 100;
          this.seleteIndex = 0;
          this.systemList = [];
          this.playerList = [];
          this.logNode = void 0;
          this.logScroller = void 0;
          this.mailLogDatas = [];
          this.sortType = void 0;
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.nav = this.find("nav");
          this.leftNode = this.find("layout/leftNode");
          this.MailContent = this.find("layout/MailContent");
          this.leftContentNode = this.find("layout/leftNode/leftContentNode");
          this.scroller = this.find("layout/leftNode/leftContentNode/ScrollView", ScrollView);
          this.clone_item = this.find("layout/leftNode/leftContentNode/ScrollView/view/content/item");
          this.deletBtn = this.find("layout/leftNode/leftContentNode/deletBtn");
          this.getAwardBtn = this.find("layout/leftNode/leftContentNode/getAwardBtn");
          this.leftEmpty = this.find("layout/leftNode/leftEmpty");
          this.sendMail = this.find("layout/sendMail");
          this.send = this.find("layout/sendMail/send");
          this.editBox = this.find("layout/sendMail/send/editboxBg/EditBox", EditBox); // this.editBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onSerch, this)

          this.playerNode = this.find("layout/sendMail/send/playerNode");
          this.icon = this.find("layout/sendMail/send/icon", Sprite);
          this.playerName = this.find("layout/sendMail/send/playerNode/infoUp/playerName", Label);
          this.playerGuide = this.find("layout/sendMail/send/playerNode/infoUp/playerGuide", Label);
          this.lv = this.find("layout/sendMail/send/playerNode/infoDown/lv", Label);
          this.uid = this.find("layout/sendMail/send/playerNode/infoDown/uid", Label);
          this.giftBtn = this.find("layout/sendMail/send/playerNode/infoDown/giftBtn", Button);
          this.MailSendContent = this.find("layout/sendMail/MailSendContent").addComponent(_crd && MailSendContent === void 0 ? (_reportPossibleCrUseOfMailSendContent({
            error: Error()
          }), MailSendContent) : MailSendContent);
          this.serchBtn = this.find("layout/sendMail/send/serchBtn");
          this.logNode = this.find("logNode");
          this.layout = this.find("layout");
          this.logScroller = this.find("logNode/logScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.logScroller.SetHandle(this.updateMailLogItem.bind(this));
          this.onBntEvent();
        }

        onBntEvent() {
          this.nav.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.onTouchNav(index);
            }, this);
          });
          this.giftBtn.node.on(Button.EventType.CLICK, this.onSendGift, this);
          this.serchBtn.on(Input.EventType.TOUCH_END, this.onSerch, this);
          this.deletBtn.on(Input.EventType.TOUCH_END, this.onDeleteAll, this);
          this.getAwardBtn.on(Input.EventType.TOUCH_END, this.onClaimAll, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_PlayerDataInfo_Update === void 0 ? (_reportPossibleCrUseOfEvt_PlayerDataInfo_Update({
            error: Error()
          }), Evt_PlayerDataInfo_Update) : Evt_PlayerDataInfo_Update, this.updatePlayerData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_DelMail === void 0 ? (_reportPossibleCrUseOfEvt_DelMail({
            error: Error()
          }), Evt_DelMail) : Evt_DelMail, this.flush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Get_Mail_Log_Updata === void 0 ? (_reportPossibleCrUseOfEvt_Get_Mail_Log_Updata({
            error: Error()
          }), Evt_Get_Mail_Log_Updata) : Evt_Get_Mail_Log_Updata, this.updateMailLogList, this);
        }

        onShow() {
          this.scroller.content.removeAllChildren();
          this.sortType = 2;
          this.onTouchNav(0);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Mail_Add === void 0 ? (_reportPossibleCrUseOfEvt_Mail_Add({
            error: Error()
          }), Evt_Mail_Add) : Evt_Mail_Add, this.onRefershItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Mail_Update === void 0 ? (_reportPossibleCrUseOfEvt_Mail_Update({
            error: Error()
          }), Evt_Mail_Update) : Evt_Mail_Update, this.updateLeftMailsList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_ReadMail === void 0 ? (_reportPossibleCrUseOfEvt_ReadMail({
            error: Error()
          }), Evt_ReadMail) : Evt_ReadMail, this.updateMailContent, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Hide_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Hide_Scene({
            error: Error()
          }), Evt_Hide_Scene) : Evt_Hide_Scene, js.getClassName(this));
        }

        flush() {
          this.mailLogDatas = [];
          var datas = [];

          if (this.seleteIndex != 3) {
            this.updateLeftMailsList();
            this.updateMailContent(null);
          } else {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mails_log.forEach(data => {
              if (data.senderPlayerId && data.senderPlayerId.length >= 1) {
                datas.push(data);
                this.mailLogDatas.push(data);
              }
            });
            datas.sort((a, b) => {
              return b.time - a.time;
            });
            this.logScroller.UpdateDatas(datas);
          }
        }

        onTouchNav(index) {
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).mail_start_id = [""];
          this.seleteIndex = index;
          this.nav.children[index].getComponent(Toggle).isChecked = true;
          this.logNode.active = false;
          this.layout.active = true;

          if (index == 3) {
            //转赠记录
            this.logNode.active = true;
            this.layout.active = false;
            this.onRefershItem();
          } else if (index == 2) {
            //发件
            this.leftNode.active = false;
            this.MailContent.active = false;
            this.scroller.node.active = false;
            this.sendMail.active = true;
            this.send.active = true;
            this.playerNode.active = false;
            this.MailSendContent.node.active = false;
          } else {
            //个人和系统邮件
            this.leftNode.active = true;
            this.MailContent.active = true;
            this.updateMailContent(null);
            this.scroller.node.active = true;
            this.scroller.content.children.forEach(node => {
              node.getComponent(Toggle).isChecked = false;
            });
            this.sendMail.active = false;
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mails = [];
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mailmap = {};
            this.onRefershItem();
          }
        }

        onRefershItem() {
          if (this.seleteIndex != 3) {
            var getmails = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["mail.protocol.getmails"]();
            getmails.readFlag = 0;
            getmails.start = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mail_start_id[(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).mail_start_id.length - 1];
            getmails.limit = this.pageSize;
            getmails.containsMode = 0;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["mail.protocol.getmails"], getmails);
          } else {
            var getitem = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["player.protocol.getitemrecords"]();
            getitem.fromId = "";
            getitem.itemId = "";
            getitem.limit = 100;
            getitem.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).server;
            getitem.start = "";
            getitem.sources = [];
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["player.protocol.getitemrecords"], getitem);
          }
        } //-----------------------------系统和个人邮件相关---------------------------------------


        updateLeftMailsList() {
          this.scroller.content.removeAllChildren();
          var datas = [];
          this.systemList = [];
          this.playerList = [];
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).mails.forEach(data => {
            if (this.seleteIndex == 0) {
              if (!data.senderPlayerId || data.senderPlayerId.length < 1) {
                datas.push(data);
                this.systemList.push(data);
              }
            } else {
              if (data.senderPlayerId && data.senderPlayerId.length >= 1) {
                datas.push(data);
                this.playerList.push(data);
              }
            }
          });
          datas.sort((a, b) => {
            var a_reward = a.attachments.length > 0 ? 1 : 0;
            var b_reward = b.attachments.length > 0 ? 1 : 0;
            var a_read = a.isRead ? 0 : 1;
            var b_read = b.isRead ? 0 : 1;
            var a_num = a.isAttachmentClaimed ? 0 : 1;
            var b_num = b.isAttachmentClaimed ? 0 : 1;
            var a_sort = a_reward + a_num;
            var b_sort = b_reward + b_num;

            if (a_sort == b_sort) {
              if (a_read == b_read) {
                return b.time - a.time;
              }

              return b_read - a_read;
            }

            return b_sort - a_sort;
          });
          this.leftEmpty.active = datas.length <= 0;
          this.leftContentNode.active = datas.length > 0;

          for (var iterator of datas) {
            var item = instantiate(this.clone_item);
            this.updateMailItem(item, iterator);
            this.scroller.content.addChild(item);
          }
        }

        updateMailItem(item, data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var title = data.title.length > 10 ? data.title.slice(0, 10) + "..." : data.title;
            item.getChildByName("title").getComponent(Label).string = title;
            var time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).timeElapsedSince(data.time * 1000);
            var str = "";

            if (time.days > 0) {
              str = time.days + "\u5929\u524D";
            } else if (time.hours > 0) {
              str = time.hours + "\u5C0F\u65F6\u524D";
            } else if (time.minutes > 0) {
              str = time.minutes + "\u5206\u524D";
            } else if (time.seconds > 0) {
              str = time.seconds + "\u79D2\u524D";
            }

            item["mail_id"] = data.id;
            item.getChildByName("time").getComponent(Label).string = "" + str;
            var mailIcon = item.getChildByName("mailIcon").getComponent(Sprite);
            var state = item.getChildByName("state").getComponent(Label);
            state.string = "";
            var mask = item.getChildByName("mask");
            mask.active = false;
            var url = path.join(_crd && folder_mail === void 0 ? (_reportPossibleCrUseOffolder_mail({
              error: Error()
            }), folder_mail) : folder_mail, "redIcon", "spriteFrame");

            if (data.isAttachmentClaimed) {
              state.string = "\u5DF2\u9886\u53D6";
              mask.active = true;
            } else {
              if (data.attachments && data.attachments.length > 0) {
                state.string = "\u672A\u9886\u53D6";
                state.color = new Color().fromHEX("#27633C");

                if (data.isRead) {
                  url = path.join(_crd && folder_mail === void 0 ? (_reportPossibleCrUseOffolder_mail({
                    error: Error()
                  }), folder_mail) : folder_mail, "redIcon", "spriteFrame");
                } else {
                  url = path.join(_crd && folder_mail === void 0 ? (_reportPossibleCrUseOffolder_mail({
                    error: Error()
                  }), folder_mail) : folder_mail, "unRedIcon", "spriteFrame");
                }
              } else {
                if (data.isRead) {
                  url = path.join(_crd && folder_mail === void 0 ? (_reportPossibleCrUseOffolder_mail({
                    error: Error()
                  }), folder_mail) : folder_mail, "redIcon", "spriteFrame");
                  mask.active = true;
                } else {
                  url = path.join(_crd && folder_mail === void 0 ? (_reportPossibleCrUseOffolder_mail({
                    error: Error()
                  }), folder_mail) : folder_mail, "unRedIcon", "spriteFrame");
                }
              }
            }

            mailIcon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            item.off(Input.EventType.TOUCH_END);
            item.on(Input.EventType.TOUCH_END, () => {
              _this.onSelect(data.id);

              _this.scroller.content.children.forEach(node => {
                node.getComponent(Toggle).isChecked = false;
              });

              item.getComponent(Toggle).isChecked = true;
            }, _this);

            _this.checkPage(data);
          })();
        }

        onSelect(id) {
          var info = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["mail.protocol.readmail"]();
          info.mailId = id; // 邮件读取状态筛选条件: 0-所有邮件, 1-已读邮件, 2-未读邮件

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.readmail"], info);
        }
        /**刷新邮件内容 */


        updateMailContent(data) {
          if (data) {
            this.scroller.content.children.forEach(node => {
              if (node["mail_id"] == data.id) {
                this.updateMailItem(node, data);
              }
            });
          }

          var mail_content = this.MailContent.getComponent(_crd && MailContent === void 0 ? (_reportPossibleCrUseOfMailContent({
            error: Error()
          }), MailContent) : MailContent);
          if (!mail_content) mail_content = this.MailContent.addComponent(_crd && MailContent === void 0 ? (_reportPossibleCrUseOfMailContent({
            error: Error()
          }), MailContent) : MailContent);
          mail_content.flush(data);
        }

        onDeleteAll() {
          var delet_data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["mail.protocol.deletemails"]();
          delet_data.mailIds = [];
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.deletemails"], delet_data);
        }

        onClaimAll() {
          var get_mail = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["mail.protocol.claimmailsattachment"]();
          get_mail.mailIds = [];
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.claimmailsattachment"], get_mail);
        }

        checkPage(data) {
          var list = [];

          if (this.seleteIndex == 3) {
            list = this.mailLogDatas;
          } else if (this.seleteIndex == 0) {
            list = this.systemList;
          } else {
            list = this.playerList;
          }

          if (!data.is_last && list[list.length - 1] == data) {
            data.is_last = true;
            this.onRefershItem();
          }
        } //------------------------------发送邮件相关------------------------


        updatePlayerData(info) {
          console.log(info);
          this.playerInfo = info;
          this.playerNode.active = true;
          this.playerName.string = info.nickName;
          this.playerGuide.string = "公会：无";
          this.lv.string = info.playerId;
          this.uid.string = info.playerId;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/default/icon1", "spriteFrame"), SpriteFrame, res => {
            this.icon.spriteFrame = res;
          });
        }
        /**赠送物品 */


        onSendGift() {
          this.MailSendContent.node.active = true;
          var mail_send_panel = this.MailSendContent.getComponent(_crd && MailSendContent === void 0 ? (_reportPossibleCrUseOfMailSendContent({
            error: Error()
          }), MailSendContent) : MailSendContent);
          if (!mail_send_panel) mail_send_panel = this.MailSendContent.addComponent(_crd && MailSendContent === void 0 ? (_reportPossibleCrUseOfMailSendContent({
            error: Error()
          }), MailSendContent) : MailSendContent);

          var close_back = () => {
            this.MailSendContent.node.active = false;
            this.send.active = true;
          };

          mail_send_panel.onShow(this.playerInfo, close_back.bind(this));
          this.send.active = false;
        }

        onSerch() {
          if (this.editBox.string) {
            if (this.editBox.string == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId) return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u65E0\u6CD5\u641C\u7D22\u81EA\u5DF1\u7684ID");
            var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["user.protocol.searchuser"]();
            data.uid = this.editBox.string; // this.editBox.string = ``;

            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["user.protocol.searchuser"], data);
          } else {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u8BF7\u8F93\u5165\u73A9\u5BB6ID\uFF01");
          }
        } //----------------------------------------转增记录相关--------------------


        updateMailLogList(data) {
          this.logScroller.UpdateDatas(data);
        }

        updateMailLogItem(item, data) {
          return _asyncToGenerator(function* () {
            var bag_item = item.getChildByName("item");
            var is_get = item.getChildByName("is_get").getComponent(Sprite);
            var source = item.getChildByName("source").getComponent(Label);
            var time = item.getChildByName("time").getComponent(Label);
            var incom = item.getChildByName("incom").getComponent(Label);
            var datetime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).TimestampToDate(data.time * 1000);
            var m = parseInt(datetime[1]) < 10 ? "0" + datetime[1] : "" + datetime[1];
            var d = parseInt(datetime[2]) < 10 ? "0" + datetime[2] : "" + datetime[2];
            var h = parseInt(datetime[3]) < 10 ? "0" + datetime[3] : "" + datetime[3];
            var min = parseInt(datetime[4]) < 10 ? "0" + datetime[4] : "" + datetime[4];
            var s = parseInt(datetime[5]) < 10 ? "0" + datetime[5] : "" + datetime[5];
            time.string = datetime[0] + "-" + m + "-" + d + "  " + h + ":" + min + ":" + s;
            var cfg_item = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(data.itemId);
            var rate = cfg_item.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).money ? 10000 : 1;
            var is_Add = data.source == "GiveRecv";
            source.string = data.playerId;
            incom.string = is_Add ? "+" + data.count / rate : "" + data.count / rate;
            incom.color = is_Add ? new Color().fromHEX("#498127") : new Color().fromHEX("#AD5858");
            var icon_name = is_Add ? "get" : "send";
            is_get.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/mails", icon_name, "spriteFrame"), SpriteFrame);
            var itemData = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item, cfg_item.Items, 0);
            var bagItem = bag_item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            if (!bagItem) bagItem = bag_item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            bagItem.setThing(itemData); // this.checkPage(data);
          })();
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Mail_Add === void 0 ? (_reportPossibleCrUseOfEvt_Mail_Add({
            error: Error()
          }), Evt_Mail_Add) : Evt_Mail_Add, this.onRefershItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Show_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Show_Scene({
            error: Error()
          }), Evt_Show_Scene) : Evt_Show_Scene, js.getClassByName(this));
          this.scroller.content.children.forEach(node => {
            node.getComponent(Toggle).isChecked = false;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=debb0848c379a45949377f47ebdc93d4c5bff45c.js.map