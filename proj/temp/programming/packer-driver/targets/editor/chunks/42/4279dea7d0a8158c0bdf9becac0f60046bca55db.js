System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Input, Label, RichText, Sprite, SpriteFrame, find, js, path, EventMgr, Evt_SendMail, Session, AutoScroller, ResMgr, folder_item, Panel, CfgMgr, PlayerData, Tips, Req, Route, MailSendPanel, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SendMail(extras) {
    _reporterNs.report("Evt_SendMail", "../../manager/EventMgr", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemGive(extras) {
    _reporterNs.report("ItemGive", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  _export("MailSendPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Label = _cc.Label;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
      js = _cc.js;
      path = _cc.path;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_SendMail = _unresolved_2.Evt_SendMail;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      AutoScroller = _unresolved_4.AutoScroller;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
      folder_item = _unresolved_5.folder_item;
    }, function (_unresolved_6) {
      Panel = _unresolved_6.Panel;
    }, function (_unresolved_7) {
      CfgMgr = _unresolved_7.CfgMgr;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      Tips = _unresolved_9.Tips;
    }, function (_unresolved_10) {
      Req = _unresolved_10.Req;
      Route = _unresolved_10.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b52eaMZAQ5FcpQ9jmamspgB", "MailSendPanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'Input', 'Label', 'Node', 'RichText', 'Sprite', 'SpriteFrame', 'Toggle', 'find', 'js', 'path']);

      _export("MailSendPanel", MailSendPanel = class MailSendPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/mail/MailSendPanel";
          this.head = void 0;
          this.nameLab = void 0;
          this.uidLab = void 0;
          this.homlandLab = void 0;
          this.EditBox = void 0;
          this.giftBtn = void 0;
          this.data = null;
          this.haveLabel = void 0;
          this.costLabel = void 0;
          this.allLabel = void 0;
          this.surePanel = void 0;
          this.surePanelLabel = void 0;
          this.inputPassword = void 0;
          this.RichText = void 0;
          this.RichText2 = void 0;
          this.name_title = void 0;
          this.open_btn = void 0;
          this.ListScrollView = void 0;
          this.cost_price_label = void 0;
          this.all_price_label = void 0;
          this.have_price_icon = void 0;
          this.cost_price_icon = void 0;
          this.all_price_icon = void 0;
          this.navBtns = void 0;
          this.MailCost = 0;
          this.select_id = void 0;
          this.cfg_item = void 0;
          this.reg = new RegExp(/^[0-9]*$/);
        }

        //判断是否是数字。
        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("spriteFrame/Close");
          this.head = this.find(`spriteFrame/headInfo`);
          this.nameLab = this.find(`spriteFrame/msg/role_name`, Label);
          this.uidLab = this.find(`spriteFrame/msg/uid`, Label);
          this.homlandLab = this.find(`spriteFrame/msg/homeLand`, Label);
          this.giftBtn = this.find(`spriteFrame/giftBtn`);
          this.haveLabel = this.find(`spriteFrame/msg/have/PriceLayout/Price`, Label);
          this.have_price_icon = this.find(`spriteFrame/msg/have/PriceLayout/money_icon`, Sprite);
          this.costLabel = this.find(`spriteFrame/msg/cost/PriceLayout/Price`, Label);
          this.cost_price_icon = this.find(`spriteFrame/msg/cost/PriceLayout/money_icon`, Sprite);
          this.cost_price_label = this.find(`spriteFrame/msg/cost/priceLabel`, Label);
          this.allLabel = this.find(`spriteFrame/msg/all/PriceLayout/Price`, Label);
          this.all_price_icon = this.find(`spriteFrame/msg/all/PriceLayout/money_icon`, Sprite);
          this.all_price_label = this.find(`spriteFrame/msg/all/priceLabel`, Label);
          this.EditBox = this.find(`spriteFrame/msg/sendMsg/editboxBg/EditBox`, EditBox);
          this.surePanel = this.find(`surePanel`);
          this.surePanelLabel = this.find(`surePanel/spriteFrame/MidBg/lab`, RichText);
          this.inputPassword = this.find(`surePanel/spriteFrame/inputBg/inputPassword`, EditBox);
          this.RichText = this.find(`spriteFrame/RichText`, RichText);
          this.RichText2 = this.find(`spriteFrame/RichText2`, RichText);
          this.name_title = this.find(`spriteFrame/msg/sendMsg/nameLayout/name`, Label);
          this.open_btn = this.find(`spriteFrame/msg/sendMsg/nameLayout/openBtn`, Button);
          this.ListScrollView = this.find(`spriteFrame/msg/ListScrollView`, _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.ListScrollView.SetHandle(this.updateItem.bind(this));
          this.ListScrollView.node.on('select', this.onSelectItem, this);
          this.navBtns = this.find("spriteFrame/msg/sendMsg/nav").children.concat();
          this.inputPassword.node.on(EditBox.EventType.TEXT_CHANGED, this.onEditBoxChanged, this);
          this.onBntEvent();
        }

        onEditBoxChanged(editBox) {
          let str = "";
          let indexStr;

          for (let i = 0; i < editBox.string.length; i++) {
            indexStr = editBox.string.charAt(i);

            if (this.reg.test(indexStr)) {
              str += editBox.string.charAt(i);
            }
          }

          editBox.string = str;
        }

        onBntEvent() {
          this.open_btn.node.on(Button.EventType.CLICK, this.onOpen, this);
          this.giftBtn.on(Button.EventType.CLICK, this.onShowSurePanel, this);
          this.EditBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
          this.EditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onTextChanged, this);
          find(`spriteFrame/Close`, this.surePanel).on(Input.EventType.TOUCH_END, () => {
            this.surePanel.active = false;
          }, this);
          find(`spriteFrame/closeBtn`, this.surePanel).on(Input.EventType.TOUCH_END, () => {
            this.surePanel.active = false;
          }, this);
          find(`spriteFrame/sureBtn`, this.surePanel).on(Input.EventType.TOUCH_END, this.onSendGift, this);
        }

        onOpen() {
          let is_open = this.ListScrollView.node.active;
          let scaleY = is_open ? -1 : 1;
          this.ListScrollView.node.active = !is_open;
          this.open_btn.node.setScale(1, scaleY);
        }

        onShowSurePanel() {
          this.inputPassword.string = "";
          let has_count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(1);
          let min_str = "ItemMin";
          let max_str = "ItemMax";
          let name = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.cfg_item.Items).ItemName; // if(!PlayerData.roleInfo.is_password){
          //     SettingPasswordPanel.Show();
          //     return;
          // }

          let count = Number(this.EditBox.string);
          let cost_count = count;

          if (!count || count < 1) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(`请输入要赠送的货币数量！`);
          }

          if (count < this.cfg_item.GiveLimitMin) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(`未达最小起赠值`);
          }

          if (count > this.cfg_item.GiveLimitMax) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(`要赠送的超过上限，最多赠送${this.cfg_item.GiveLimitMax}，请检查后重试！`);
          }

          if (cost_count > has_count) {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(name + `不足,请检查后重试！`);
          }

          this.surePanel.active = true;
          this.surePanelLabel.string = `将发送<color=#C36316 >${this.EditBox.string}</color>个${name}给玩家<color=#0C8EAA>${this.data.nickName}</color>\n是否确认赠送？`;
        }

        onSendGift() {
          // if(!this.inputPassword.string || this.inputPassword.string.length < 1){
          //     MsgPanel.Show("请先输入二级密码");
          //     return;
          // }
          let items_list = js.createMap();
          let id = this.cfg_item.Items.toString();
          items_list[id] = Number(this.EditBox.string);
          let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
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

        onEditEnd() {
          let count = Number(this.EditBox.string);
          let item_count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.select_id);
          this.costLabel.string = `${Math.ceil(count)}`;
          this.allLabel.string = `${Math.ceil(item_count - count)}`;
        }

        onTextChanged() {
          let count = Number(this.keepNumbersAndOneDot(this.EditBox.string));
          this.EditBox.string = `${Math.ceil(count * 100) / 100}`;
        }

        keepNumbersAndOneDot(str) {
          // 使用正则表达式来提取所有数字和小数点
          let result = str.replace(/[^0-9.]/g, ''); // 找到第一个小数点的位置

          let firstDotIndex = result.indexOf('.'); // 如果找到了小数点，移除其后的所有小数点

          if (firstDotIndex !== -1) {
            result = result.substring(0, firstDotIndex + 1) + result.substring(firstDotIndex + 1).replace(/\./g, '');
          }

          return result;
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SendMail === void 0 ? (_reportPossibleCrUseOfEvt_SendMail({
            error: Error()
          }), Evt_SendMail) : Evt_SendMail, this.Hide, this);
          this.costLabel.string = `${0}`;
          this.allLabel.string = `${0}`;
          this.EditBox.string = ``;
          this.surePanel.active = false; // console.log("is_has_rights", is_has_rights);

          let cost = 0; // if (PlayerData.GetIsActivateRights(StdEquityId.Id_3) || PlayerData.GetIsActivateRights(StdEquityId.Id_4)) {
          //     this.MailCost = CfgMgr.getEquityListById(StdEquityId.Id_3).Value;     
          // } else {
          //     this.MailCost = CfgMgr.GetCommon(StdCommonType.Mail).MailCost;
          // }

          cost = this.MailCost; // let is_has_guild_rights =  PlayerData.GetMyGuildPrivilegeById(GuildEquityId.GuildEquity_1);
          // console.log(is_has_guild_rights)
          // this.MailCost = is_has_guild_rights ? 0 : this.MailCost;
          // let str = is_has_guild_rights ? "（<color=#DD6E24>0%</color>公会职位减免）" : ""
          // this.RichText.string = `<color=#DD6E24>${CfgMgr.GetCommon(StdCommonType.Mail).Min}</color><color=#849AA7>起赠，额外消耗赠送数量的</color><color=#DD6E24>${cost * 100}%</color><color=#849AA7>${str}作为损耗</color>`;
          // this.RichText2.string = `</color><color=#849AA7>赠送成功好友需要在</color><color=#DD6E24>个人邮件内</color><color=#849AA7>领取</color>`;
        }

        flush(data) {
          this.data = data;
          this.initMsg();
          this.EditBox.string = "";
          this.cost_price_label.string = "赠送数量";
          this.all_price_label.string = "剩余数量";
          this.open_btn.node.active = true;
          this.ListScrollView.node.active = false;
          this.RichText.node.active = false;
          this.RichText2.node.active = true;
          this.onOpen();
          let list_item_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCanSenditem();
          this.ListScrollView.UpdateDatas(list_item_data);
          this.ListScrollView.SelectFirst();
        }

        initMsg() {
          this.nameLab.string = this.data.nickName;
          this.uidLab.string = `UID:${this.data.playerId}`; // let homeLandMsg = CfgMgr.GetHomeLandInit(this.data.homeland_id);
          // if (homeLandMsg) {
          //     this.homlandLab.string = homeLandMsg.Desc[0];
          // }
        }

        updateItem(item, data) {
          let item_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.Items);
          let label = item.getChildByName("label").getComponent(Label);
          label.string = item_data.ItemName;
          item["data"] = data;
        }

        onSelectItem(index, item) {
          console.log(item["data"]);
          let item_data = item["data"];
          this.select_id = item_data.Items;
          this.cfg_item = item_data;
          this.updateItemInfo();
          this.EditBox.string = "";
        }

        updateItemInfo() {
          let icon = "";
          let name = "";
          let item = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.select_id);
          icon = item.Icon;
          name = item.ItemName;
          let item_count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.select_id);
          this.haveLabel.string = item_count + "";
          this.name_title.string = "赠送" + name;
          this.costLabel.string = 0 + "";
          this.allLabel.string = 0 + "";
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, icon, "spriteFrame"), SpriteFrame, res => {
            this.have_price_icon.spriteFrame = res;
            this.all_price_icon.spriteFrame = res;
            this.cost_price_icon.spriteFrame = res;
          });
        }

        onHide(...args) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_SendMail === void 0 ? (_reportPossibleCrUseOfEvt_SendMail({
            error: Error()
          }), Evt_SendMail) : Evt_SendMail, this.Hide, this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4279dea7d0a8158c0bdf9becac0f60046bca55db.js.map