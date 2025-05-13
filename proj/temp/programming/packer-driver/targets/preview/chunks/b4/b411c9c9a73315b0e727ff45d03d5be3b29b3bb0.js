System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, EditBox, Label, RichText, Sprite, SpriteFrame, js, path, Session, AutoScroller, ResMgr, folder_item, CfgMgr, ItemType, ThingTypeName, PlayerData, Tips, BagItem, ItemUtil, Req, Route, EventMgr, Evt_Item_Change, Utils, MsgPanel, MailSendContent, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemGive(extras) {
    _reporterNs.report("ItemGive", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
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

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  _export("MailSendContent", void 0);

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
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      js = _cc.js;
      path = _cc.path;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
      folder_item = _unresolved_4.folder_item;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
      ItemType = _unresolved_5.ItemType;
      ThingTypeName = _unresolved_5.ThingTypeName;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      Tips = _unresolved_7.Tips;
    }, function (_unresolved_8) {
      BagItem = _unresolved_8.BagItem;
    }, function (_unresolved_9) {
      ItemUtil = _unresolved_9.ItemUtil;
    }, function (_unresolved_10) {
      Req = _unresolved_10.Req;
      Route = _unresolved_10.Route;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
      Evt_Item_Change = _unresolved_11.Evt_Item_Change;
    }, function (_unresolved_12) {
      Utils = _unresolved_12.Utils;
    }, function (_unresolved_13) {
      MsgPanel = _unresolved_13.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20830slxedBqo7QSLsj2N7Y", "MailSendContent", undefined);

      __checkObsolete__(['Button', 'Component', 'EditBox', 'Input', 'Label', 'Layout', 'Node', 'RichText', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'find', 'js', 'path']);

      _export("MailSendContent", MailSendContent = class MailSendContent extends Component {
        constructor() {
          super(...arguments);
          this.close = void 0;
          this.head = void 0;
          this.nameLab = void 0;
          this.playerGuide = void 0;
          this.EditBox = void 0;
          this.giftBtn = void 0;
          this.haveLabel = void 0;
          this.costLabel = void 0;
          this.allLabel = void 0;
          this.surePanel = void 0;
          this.surePanelLabel = void 0;
          this.inputPassword = void 0;
          this.tipsLab = void 0;
          this.item = void 0;
          this.item_name = void 0;
          this.open_btn = void 0;
          this.ListScrollView = void 0;
          this.cost_price_icon = void 0;
          this.all_price_icon = void 0;
          this.sureBtn = void 0;
          this.closeBtn = void 0;
          this.data = void 0;
          this.select_id = void 0;
          this.cfg_item = void 0;
          this.reg = new RegExp(/^[0-9]*$/);
          //判断是否是数字。
          this.closeCallBack = void 0;
          this.itemData = void 0;
          this.cost_item_cfg = void 0;
          //发送给后端的数量
          this.sendCount = 0;
          //手续费
          this.MailCost = 0;
          //最小手续费
          this.minCost = 0;
          //货币比率
          this.rate = 1;
          //道具比率
          this.item_rate = 1;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          var thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }

        onLoad() {
          this.hasLoad = true;
          this.close = this.node.getChildByPath("titleBg/Close").getComponent(Button);
          this.head = this.node.getChildByPath("playerNode/headInfo");
          this.item = this.node.getChildByName("item");
          this.nameLab = this.node.getChildByPath("playerNode/role_name").getComponent(Label);
          this.playerGuide = this.node.getChildByPath("playerNode/playerGuide").getComponent(Label);
          this.giftBtn = this.node.getChildByName("giftBtn");
          this.haveLabel = this.node.getChildByName("Price").getComponent(Label);
          this.costLabel = this.node.getChildByPath("cost/Price").getComponent(Label);
          this.cost_price_icon = this.node.getChildByPath("cost/money_icon").getComponent(Sprite);
          this.item_name = this.node.getChildByName("item_name").getComponent(Label);
          this.allLabel = this.node.getChildByPath("all/Price").getComponent(Label);
          this.all_price_icon = this.node.getChildByPath("all/money_icon").getComponent(Sprite);
          this.EditBox = this.node.getChildByPath("editboxBg/EditBox").getComponent(EditBox);
          this.tipsLab = this.node.getChildByName("tipsLab").getComponent(Label);
          this.ListScrollView = this.node.getChildByPath("playerNode/Node/ListScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.ListScrollView.SetHandle(this.updateItem.bind(this));
          this.ListScrollView.node.on('select', this.onSelectItem, this);
          this.surePanel = this.node.getChildByName("surePanel");
          this.surePanelLabel = this.node.getChildByPath("surePanel/spriteFrame/lab").getComponent(RichText);
          this.inputPassword = this.node.getChildByPath("surePanel/spriteFrame/inputBg/inputPassword").getComponent(EditBox);
          this.sureBtn = this.node.getChildByPath("surePanel/spriteFrame/sureBtn").getComponent(Button);
          this.closeBtn = this.node.getChildByPath("surePanel/spriteFrame/closeBtn").getComponent(Button);
          this.onBntEvent();
        }

        onBntEvent() {
          this.close.node.on(Button.EventType.CLICK, this.onHide, this);
          this.giftBtn.on(Button.EventType.CLICK, this.onShowSurePanel, this);
          this.sureBtn.node.on(Button.EventType.CLICK, this.onSendGift, this);
          this.closeBtn.node.on(Button.EventType.CLICK, () => {
            this.surePanel.active = false;
          }, this);
          this.EditBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
          this.EditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onTextChanged, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.updateItemCount, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.updateItemCount, this);
        }

        onShow(data, close_back) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.hasLoad) yield _this.loadSub;
            _this.data = data;
            _this.nameLab.string = data.nickName;
            _this.playerGuide.string = "公会：无";
            _this.closeCallBack = close_back;
            _this.costLabel.string = "" + 0;
            _this.allLabel.string = "" + 0;
            _this.EditBox.string = "";

            _this.ListScrollView.Clean();

            var list_item_data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCanSenditem();

            _this.ListScrollView.UpdateDatas(list_item_data);

            _this.ListScrollView.SelectFirst();

            _this.surePanel.active = false;
          })();
        }

        updateItemCount() {
          var list_item_data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCanSenditem();
          this.ListScrollView.UpdateDatas(list_item_data);
          this.updateItemInfo();
        }

        updateItem(item, data) {
          if (!data) return;
          var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.Items);
          var count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(cfg.Items);
          var bag_item = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!bag_item) bag_item = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          var item_data = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item, cfg.Items, count);
          item["data"] = data;
          bag_item.setThing(item_data);
        }

        onSelectItem(index, item) {
          var item_data = item["data"];
          this.select_id = item_data.Items;
          this.cfg_item = item_data;
          this.updateItemInfo();
          this.EditBox.string = "";
        }

        updateItemInfo() {
          var item = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.select_id);
          this.cost_item_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.cfg_item.FeeItemID);
          this.itemData = item;
          this.rate = 1;
          this.tipsLab.string = "最小赠送数量：" + (this.itemData.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money ? this.cfg_item.GiveLimitMin / 10000 : this.cfg_item.GiveLimitMin);

          if (this.cost_item_cfg.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money && this.itemData.Itemtpye != (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money) {
            this.rate = 10000;
          }

          this.MailCost = this.cfg_item.GiveFeeRate / this.cfg_item.GiveFeeBase / this.rate;
          this.item_name.string = item.ItemName;
          var item_count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.select_id);
          this.haveLabel.string = "已拥有" + item_count;
          this.costLabel.string = this.MailCost + "";
          this.allLabel.string = 0 + "";
          this.EditBox.string = "";
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, this.cost_item_cfg.Icon, "spriteFrame"), SpriteFrame, res => {
            // this.have_price_icon.spriteFrame = res;
            this.all_price_icon.spriteFrame = res;
            this.cost_price_icon.spriteFrame = res;
          });
          var bag_item = this.item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!bag_item) bag_item = this.item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          var item_data = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item, item.Items, 0);
          bag_item.setThing(item_data);
        }

        onEditEnd() {
          if (this.EditBox.string == "") return;
          this.sendCount = Number(this.EditBox.string);
          var cost = this.sendCount * this.MailCost;

          if (this.itemData.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money) {
            this.sendCount = this.sendCount * 10000;
            cost = this.sendCount * this.MailCost / 10000;
          }

          this.minCost = cost > this.cfg_item.GiveFeeMin / 10000 ? cost : this.cfg_item.GiveFeeMin / 10000;
          this.costLabel.string = "" + this.MailCost;
          this.allLabel.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(this.minCost, 4);
        }

        onTextChanged() {
          // let count = Number(this.keepNumbersAndOneDot(this.EditBox.string));
          // console.log(this.reg.test(this.EditBox.string), this.EditBox.string)
          if (!this.reg.test(this.EditBox.string)) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("输入有误");
            this.EditBox.string = "";
            return;
          } // this.EditBox.string = `${Math.ceil(parseFloat(this.EditBox.string))}`;

        } // private keepNumbersAndOneDot(str) {
        //     // 使用正则表达式来提取所有数字和小数点
        //     let result = str.replace(/[^0-9.]/g, '');
        //     // 找到第一个小数点的位置
        //     let firstDotIndex = result.indexOf('.');
        //     // 如果找到了小数点，移除其后的所有小数点
        //     if (firstDotIndex !== -1) {
        //         result = result.substring(0, firstDotIndex + 1) + result.substring(firstDotIndex + 1).replace(/\./g, '');
        //     }
        //     return result;
        // }


        onShowSurePanel() {
          this.inputPassword.string = "";
          var cost_item_num = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.cfg_item.FeeItemID);
          var name = this.itemData.ItemName; // if(!PlayerData.roleInfo.is_password){
          //     SettingPasswordPanel.Show();
          //     return;
          // }

          var rate = 1;

          if (this.itemData.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money) {
            rate = 10000;
          }

          var count = this.sendCount;

          if (!count || count < 1) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u8BF7\u8F93\u5165\u8981\u8D60\u9001\u7684\u7269\u54C1\u6570\u91CF\uFF01");
          }

          if (count < this.cfg_item.GiveLimitMin) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u672A\u8FBE\u6700\u5C0F\u8D77\u8D60\u503C\uFF0C\u6700\u5C11\u8D60\u9001" + this.cfg_item.GiveLimitMin / rate + "\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01");
          }

          if (count > this.cfg_item.GiveLimitMax) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u8981\u8D60\u9001\u7684\u8D85\u8FC7\u4E0A\u9650\uFF0C\u6700\u591A\u8D60\u9001" + this.cfg_item.GiveLimitMax / rate + "\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01");
          }

          if (this.minCost > cost_item_num) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("手续费不足");
          }

          if (this.cfg_item.FeeItemID == this.cfg_item.Items) {
            if (count / rate + this.minCost > cost_item_num) {
              return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                error: Error()
              }), Tips) : Tips).Show(name + "\u4E0D\u8DB3,\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01");
            }
          } else {
            var has_count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(this.cfg_item.Items);

            if (this.cost_item_cfg.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).money) {
              if (count / rate > has_count) {
                return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                  error: Error()
                }), Tips) : Tips).Show(name + "\u4E0D\u8DB3,\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01");
              }
            } else {
              if (count > has_count) {
                return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                  error: Error()
                }), Tips) : Tips).Show(name + "\u4E0D\u8DB3,\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01");
              }
            }
          }

          this.surePanel.active = true;
          this.surePanelLabel.string = "\u5C06\u53D1\u9001<color=#C36316 >" + this.EditBox.string + "</color>\u4E2A" + name + "\u7ED9\u73A9\u5BB6<color=#5A74AF>" + this.data.nickName + "</color>\n\u662F\u5426\u786E\u8BA4\u8D60\u9001\uFF1F";
        }

        onSendGift() {
          var items_list = js.createMap();
          var id = this.cfg_item.Items.toString();
          this.sendCount = Number(this.EditBox.string);

          if (this.itemData.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money) {
            this.sendCount = Number(this.EditBox.string) * 10000;
          }

          items_list[id] = this.sendCount;
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["logic.protocol.sendgivemail"]();
          data.items = items_list;
          data.receiverId = this.data.playerId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.sendgivemail"], data);
        }

        onHide() {
          // EventMgr.off(Evt_SendMail, this.Hide, this);
          if (this.closeCallBack) {
            this.closeCallBack();
            this.closeCallBack = null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b411c9c9a73315b0e727ff45d03d5be3b29b3bb0.js.map