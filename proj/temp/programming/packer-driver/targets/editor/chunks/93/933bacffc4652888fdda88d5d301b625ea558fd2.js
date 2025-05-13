System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Input, Label, Toggle, AutoScroller, Session, LocalStorage, DateUtils, PlayerData, Utils, Req, Route, BagItem, ItemUtil, Card, Goto, Tips, MailContent, _crd;

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

  function _reportPossibleCrUseOfSPlayerMailData(extras) {
    _reporterNs.report("SPlayerMailData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
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

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  _export("MailContent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
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
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      Req = _unresolved_8.Req;
      Route = _unresolved_8.Route;
    }, function (_unresolved_9) {
      BagItem = _unresolved_9.BagItem;
    }, function (_unresolved_10) {
      ItemUtil = _unresolved_10.ItemUtil;
    }, function (_unresolved_11) {
      Card = _unresolved_11.Card;
    }, function (_unresolved_12) {
      Goto = _unresolved_12.Goto;
    }, function (_unresolved_13) {
      Tips = _unresolved_13.Tips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b19cbZFcaJAprFlQCNSKhfh", "MailContent", undefined);

      __checkObsolete__(['Component', 'Input', 'Label', 'Node', 'ScrollView', 'Toggle', 'UITransform']);

      _export("MailContent", MailContent = class MailContent extends Component {
        constructor(...args) {
          super(...args);
          this.title = void 0;
          this.time = void 0;
          this.desc = void 0;
          this.scroller = void 0;
          this.getBtn = void 0;
          this.delBtn = void 0;
          this.empty = void 0;
          this.geted = void 0;
          this.mailInfo = void 0;
          this.time_differ = void 0;
          this.deleteTime = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }

        onLoad() {
          this.hasLoad = true;
          this.title = this.node.getChildByName("title").getComponent(Label);
          this.time = this.node.getChildByName("time").getComponent(Label);
          this.desc = this.node.getChildByPath("ScrollViewLab/view/content/desc").getComponent(Label);
          this.scroller = this.node.getChildByName("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.UpdateBagItem.bind(this));
          this.empty = this.node.getChildByName("empty");
          this.getBtn = this.node.getChildByName("getBtn");
          this.delBtn = this.node.getChildByName("delBtn");
          this.delBtn.on(Input.EventType.TOUCH_END, this.onDel, this);
          this.getBtn.on(Input.EventType.TOUCH_END, this.onGet, this);
          this.geted = this.node.getChildByName("geted");
        }
        /**获取附件 */


        onGet() {
          let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
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
            let time = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetNumber("MailDeletePanel" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId);

            if (time) {
              let isopen = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).isSameDay(time);

              if (isopen) {
                this.onDelMail();
                return;
              }
            }

            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("MailDeletePanel", this.onDelMail.bind(this));
          }
        }

        onDelMail() {
          let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["mail.protocol.deletemails"]();
          data.mailIds = [this.mailInfo.id];
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["mail.protocol.deletemails"], data); // this.Hide();
        }
        /**
         * 更新背包道具item
         * @param item 
         * @param data 
         */


        UpdateBagItem(itemNode, data) {
          let item = itemNode.getChildByName("item");
          let card = itemNode.getChildByName("Cards");
          item.active = false;
          card.active = false;

          if (data.card) {
            card.active = true;
            let card_item = card.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            if (!card_item) card_item = card.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            card_item.SetData(data.card);
            card_item.setCardMask(false);
          } else {
            item.active = true;
            let bag_item = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            if (!bag_item) bag_item = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            let item_data = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).ChangeItem(data);
            bag_item.setThing(item_data);
            item.getChildByName("mask").active = false;
            this.scheduleOnce(() => {
              item.getComponent(Toggle).enabled = false;
            });
          }
        }

        async flush(data) {
          if (!this.hasLoad) await this.loadSub;
          this.empty.active = false;

          if (!data) {
            this.empty.active = true;
            return;
          }

          this.mailInfo = data;
          this.title.string = data.title.length > 10 ? data.title.slice(0, 10) + "..." : data.title;
          this.time.string = `收件时间：${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatDate(data.time * 1000, 'yyyy-MM-dd hh:mm:ss')}`;
          this.desc.string = data.content;

          if (data.attachments && data.attachments.length) {
            let reward_data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).getMailReward(data.attachments);
            this.scroller.UpdateDatas(reward_data);

            if (data.isAttachmentClaimed) {
              this.getBtn.active = false;
              this.delBtn.active = true;
              this.geted.active = true;
              this.scroller.node.getChildByPath("view/content").children.forEach(node => {
                node.getChildByPath("Cards/cardMask").active = true;
                node.getChildByPath("item/mask").active = true;
              });
            } else {
              this.getBtn.active = true;
              this.delBtn.active = false;
              this.geted.active = false;
            }
          } else {
            this.scroller.UpdateDatas([]);
            this.getBtn.active = false;
            this.delBtn.active = true;
            this.geted.active = false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=933bacffc4652888fdda88d5d301b625ea558fd2.js.map