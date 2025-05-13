System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Toggle, AutoScroller, Session, LocalStorage, DateUtils, MailDeletePanel, BagItem1, Panel, Tips, PlayerData, Req, Route, Utils, MailContentPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailDeletePanel(extras) {
    _reporterNs.report("MailDeletePanel", "./MailDeletePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem1", "../bag/BagItem1", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerMailData(extras) {
    _reporterNs.report("SPlayerMailData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  _export("MailContentPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      AutoScroller = _unresolved_2.AutoScroller;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      LocalStorage = _unresolved_4.default;
    }, function (_unresolved_5) {
      DateUtils = _unresolved_5.DateUtils;
    }, function (_unresolved_6) {
      MailDeletePanel = _unresolved_6.MailDeletePanel;
    }, function (_unresolved_7) {
      BagItem1 = _unresolved_7.BagItem1;
    }, function (_unresolved_8) {
      Panel = _unresolved_8.Panel;
    }, function (_unresolved_9) {
      Tips = _unresolved_9.Tips;
    }, function (_unresolved_10) {
      PlayerData = _unresolved_10.PlayerData;
    }, function (_unresolved_11) {
      Req = _unresolved_11.Req;
      Route = _unresolved_11.Route;
    }, function (_unresolved_12) {
      Utils = _unresolved_12.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b30dTEzshG3bsgiS1AmwF8", "MailContentPanel", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'ScrollView', 'Toggle', 'UITransform']);

      _export("MailContentPanel", MailContentPanel = class MailContentPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/mail/MailContentPanel";
          this.title = void 0;
          this.time = void 0;
          this.sender = void 0;
          this.desc = void 0;
          this.scroller = void 0;
          this.getBtn = void 0;
          this.mailInfo = void 0;
          this.time_lock = void 0;
          this.is_begin = false;
          this.time_differ = void 0;
          this.deleteTime = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("closeBtn");
          this.title = this.find("title", Label);
          this.time = this.find("time", Label);
          this.sender = this.find("sender", Label);
          this.desc = this.find("ScrollViewLab/view/content/desc", Label);
          this.scroller = this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.UpdateBagItem.bind(this));
          this.getBtn = this.find("getBtn");
          this.find("delBtn").on(Input.EventType.TOUCH_END, this.onDel, this);
          this.getBtn.on(Input.EventType.TOUCH_END, this.onGet, this);
        }
        /**获取附件 */


        onGet() {
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["mail.protocol.claimmailattachment"]();
          data.mailId = this.mailInfo.id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.claimmailattachment"], data);
        }
        /**删除邮件 */


        onDel() {
          if (!this.mailInfo.isAttachmentClaimed) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("请先提取附件");
          } else {
            var time = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetNumber("MailDeletePanel" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId);

            if (time) {
              var isopen = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).isSameDay(time);

              if (isopen) {
                this.onDelMail();
                return;
              }
            }

            (_crd && MailDeletePanel === void 0 ? (_reportPossibleCrUseOfMailDeletePanel({
              error: Error()
            }), MailDeletePanel) : MailDeletePanel).Show(this.onDelMail.bind(this));
          }
        }

        onDelMail() {
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["mail.protocol.deletemails"]();
          data.mailIds = [this.mailInfo.id];
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.deletemails"], data);
          this.Hide();
        }

        onShow() {}
        /**
         * 更新背包道具item
         * @param item 
         * @param data 
         */


        UpdateBagItem(item, data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield (_crd && BagItem1 === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem1) : BagItem1).UpdateBagItem(item, data);

            _this.scheduleOnce(() => {
              item.getComponent(Toggle).enabled = false;
            });

            item.getComponent(_crd && BagItem1 === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem1) : BagItem1).setIsShowTips(true);
          })();
        }

        flush(data) {
          this.mailInfo = data;
          this.title.string = this.mailInfo.title;
          this.time.string = "\u6536\u4EF6\u65F6\u95F4\uFF1A" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatDate(data.time * 1000, 'yyyy-MM-dd hh:mm:ss');
          this.desc.string = data.content;
          this.sender.string = "\u53D1\u4EF6\u4EBA\uFF1A" + (data.senderPlayerId || "\u7CFB\u7EDF\u90AE\u4EF6"); // this.time_differ = PlayerData.GetServerTime() - data.time;

          if (data.attachments && data.attachments.length) {
            var reward_data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).getMailReward(data.attachments);
            this.scroller.UpdateDatas(reward_data);

            if (data.isAttachmentClaimed) {
              this.getBtn.active = false; // this.deleteTime = CfgMgr.GetCommon(StdCommonType.Mail).DeleteTime2
            } else {
              this.getBtn.active = true; // this.deleteTime = CfgMgr.GetCommon(StdCommonType.Mail).DeleteTime1
            }
          } else {
            this.scroller.UpdateDatas([]);
            this.getBtn.active = false; // this.deleteTime = CfgMgr.GetCommon(StdCommonType.Mail).DeleteTime2
          }

          if (this.time_differ > this.deleteTime) {
            this.is_begin = false;
          } else {
            this.is_begin = true;
          }
        }

        update(dt) {// if(this.is_begin){
          //     let time_differ = PlayerData.GetServerTime() - this.mailInfo.time
          //     let seconds = this.deleteTime - time_differ + PlayerData.GetServerTime();
          //     seconds = Math.floor(seconds)
          //     if (seconds > 0) {
          //         let time = PlayerData.countDown2(seconds);
          //         if(time.d > 0){
          //             this.delete_time.string = "剩余" + time.d + "天";
          //             this.is_begin = false;
          //         }else{
          //             this.delete_time.string = "剩余" + time.h + ":" + time.m + ":" + time.s;
          //             this.is_begin = true;
          //         }
          //     } else {
          //         this.delete_time.string = "";
          //         this.is_begin = false;
          //     }
          // }
        }

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb5dc10ec85e7a70d2b0922c2f036533f0327790.js.map