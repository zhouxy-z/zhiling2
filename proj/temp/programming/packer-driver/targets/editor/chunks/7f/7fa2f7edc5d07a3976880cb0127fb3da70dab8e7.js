System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, UITransform, Slider, path, Button, PageView, instantiate, Panel, PlayerData, BoxType, CardQuality, CfgMgr, ResMgr, folder_icon, folder_item, MsgTypeSend, Session, OpenBoxPage, EventMgr, Evt_GetReward, Evt_Item_Change, Evt_OpenBoxGetRewardPanel, Tips, ItemUtil, OpenBoxPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxType(extras) {
    _reporterNs.report("BoxType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardQuality(extras) {
    _reporterNs.report("CardQuality", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardBox(extras) {
    _reporterNs.report("RewardBox", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgTypeSend(extras) {
    _reporterNs.report("MsgTypeSend", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenBoxPage(extras) {
    _reporterNs.report("OpenBoxPage", "./OpenBoxPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_GetReward(extras) {
    _reporterNs.report("Evt_GetReward", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_OpenBoxGetRewardPanel(extras) {
    _reporterNs.report("Evt_OpenBoxGetRewardPanel", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  _export("OpenBoxPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Slider = _cc.Slider;
      path = _cc.path;
      Button = _cc.Button;
      PageView = _cc.PageView;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.default;
    }, function (_unresolved_4) {
      BoxType = _unresolved_4.BoxType;
      CardQuality = _unresolved_4.CardQuality;
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
      folder_icon = _unresolved_5.folder_icon;
      folder_item = _unresolved_5.folder_item;
    }, function (_unresolved_6) {
      MsgTypeSend = _unresolved_6.MsgTypeSend;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }, function (_unresolved_8) {
      OpenBoxPage = _unresolved_8.OpenBoxPage;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_GetReward = _unresolved_9.Evt_GetReward;
      Evt_Item_Change = _unresolved_9.Evt_Item_Change;
      Evt_OpenBoxGetRewardPanel = _unresolved_9.Evt_OpenBoxGetRewardPanel;
    }, function (_unresolved_10) {
      Tips = _unresolved_10.Tips;
    }, function (_unresolved_11) {
      ItemUtil = _unresolved_11.ItemUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c549fWk2ANBQaMfnL2gdbFx", "OpenBoxPanel", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'UITransform', 'Slider', 'path', 'Button', 'tween', 'v3', 'PageView', 'instantiate', 'Layout']);

      _export("OpenBoxPanel", OpenBoxPanel = class OpenBoxPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/panel/bag/OpenBoxPanel";
          this.iocnBg = void 0;
          this.icon = void 0;
          this.itemName = void 0;
          this.item_num = void 0;
          this.lbl_tips = void 0;
          this.consumeNum = void 0;
          this.hasNum = void 0;
          this.Slider = void 0;
          this.progress = void 0;
          this.btn_right = void 0;
          this.btn_left = void 0;
          this.okBtn = void 0;
          this.PageView = void 0;
          this.openBoxItem = void 0;
          this.page1 = void 0;
          this.itemData = void 0;
          this.BoxData = void 0;
          this.curSelectCount = 1;
          this.maxItemcount = void 0;
          this.selectItem = void 0;
          this.curPageNum = 0;
          this.datas = [];
          this.maxPageNum = 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.find("panel/closeBtn").on(Input.EventType.TOUCH_END, this.Hide, this);
          this.okBtn = this.find("panel/okBtn", Button);
          this.okBtn.node.on("click", this.onOk, this);
          this.iocnBg = this.find("panel/iocnBg", Sprite);
          this.icon = this.find("panel/iocnBg/icon", Sprite);
          this.itemName = this.find("panel/itemName", Label);
          this.item_num = this.find("panel/item_num", Label);
          this.lbl_tips = this.find("panel/lbl_tips", Label);
          this.page1 = this.find("panel/page1");
          this.consumeNum = this.find("panel/page1/consumeNum", Label);
          this.hasNum = this.find("panel/page1/hasNum", Label);
          this.Slider = this.find("panel/page1/Slider", Slider);
          this.progress = this.find("panel/page1/Slider/progress");
          this.btn_right = this.find("panel/btn_right", Button);
          this.btn_left = this.find("panel/btn_left", Button);
          this.PageView = this.find("panel/PageView", PageView);
          this.openBoxItem = this.find("panel/PageView/view/content/OpenBoxItem");
          this.find("panel/page1/right").on(Input.EventType.TOUCH_END, this.onAdd, this);
          this.find("panel/page1/left").on(Input.EventType.TOUCH_END, this.onDel, this);
          this.btn_right.node.on("click", this.onBtnRight, this);
          this.btn_left.node.on("click", this.onBtnLeft, this);
          this.Slider.node.on('slide', this.onSlide, this); // EventMgr.on(Evt_Item_Change, this.onItemChange, this);
          // EventMgr.on(Evt_GetReward, this.resetData, this);
          // EventMgr.on(Evt_OpenBoxGetRewardPanel, this.updateBtnState, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.ItemChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_GetReward === void 0 ? (_reportPossibleCrUseOfEvt_GetReward({
            error: Error()
          }), Evt_GetReward) : Evt_GetReward, this.resetData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_OpenBoxGetRewardPanel === void 0 ? (_reportPossibleCrUseOfEvt_OpenBoxGetRewardPanel({
            error: Error()
          }), Evt_OpenBoxGetRewardPanel) : Evt_OpenBoxGetRewardPanel, this.updateBtnState, this);
        }

        async flush(...args) {
          this.itemData = args[0]; // this.itemData = CfgMgr.Getitem(1202)

          if (!this.itemData) return;
          this.itemName.string = this.itemData.ItemName;
          let count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.itemData.Items);
          this.page1.active = true;

          if (count <= 1) {
            this.page1.active = false;
          }

          this.item_num.string = "" + count;
          this.BoxData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBoxData(this.itemData.Items);
          this.maxItemcount = count > this.BoxData.Limit ? this.BoxData.Limit : count;
          this.hasNum.string = "/" + this.maxItemcount;
          let icon_url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, this.itemData.Icon, "spriteFrame");
          this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(icon_url, SpriteFrame);
          let icon_bg_url = path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
            error: Error()
          }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
            error: Error()
          }), CardQuality) : CardQuality)[this.itemData.Quality] + "_bag_bg", "spriteFrame");
          this.iocnBg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(icon_bg_url, SpriteFrame); // this.BoxData = CfgMgr.GetBoxData(1200);

          let is_select = this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select;
          this.okBtn.enabled = !is_select;
          this.okBtn.node.getComponent(Sprite).grayscale = is_select;
          let str = ["可随机获得以下道具", "选择获得以下道具0/", "可获得以下道具"];
          this.lbl_tips.string = is_select ? str[this.BoxData.Boxtype - 1] + this.BoxData.RewardNum : str[this.BoxData.Boxtype - 1];
          let rewardDataType = this.BoxData.Types;
          let rewardData = this.BoxData.Items;
          let rewardDataNum = this.BoxData.ItemsNum;
          let rewardCount = this.BoxData.Items.length < 8 ? this.BoxData.Items.length : 8;
          let page_num = Math.floor(rewardData.length / 8) + (rewardData.length % 8 == 0 ? 0 : 1);
          this.maxPageNum = page_num;
          this.datas = [];

          for (let index = 0; index < page_num; index++) {
            let pageData = [];

            for (let i = 0; i < rewardCount; i++) {
              let type = rewardDataType[i + index * rewardCount];
              let id = rewardData[i + index * rewardCount];
              let num = rewardDataNum[i + index * rewardCount];

              if (!num) {
                break;
              }

              if (type == 5) {
                id = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetRewardRoleById(id).RoleType;
              }

              let awardList = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                error: Error()
              }), ItemUtil) : ItemUtil).CreateThing(type, id, num);
              pageData.push(awardList);
            }

            this.datas.push(pageData);
          }

          this.PageView.removeAllPages();

          for (let k = 0; k < page_num; k++) {
            let item = instantiate(this.openBoxItem);
            let itemNode = item.getComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
              error: Error()
            }), OpenBoxPage) : OpenBoxPage);
            if (!itemNode) itemNode = item.addComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
              error: Error()
            }), OpenBoxPage) : OpenBoxPage);
            itemNode.SetData(this.datas[k], this.curSelectCount, this.BoxData.RewardNum, is_select, this.getSelect.bind(this));
            this.PageView.addPage(item);
          }

          this.updateProgress();
        }

        getRoleReward(type) {
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("RewardRole");

          for (let index = 0; index < cfg.length; index++) {
            const element = cfg[index];

            if (type == element.RewardID) {
              return element.RoleType;
            }
          }

          return null;
        }

        ItemChange() {
          let count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.itemData.Items);
          this.item_num.string = "" + count;
          this.maxItemcount = count > this.BoxData.Limit ? this.BoxData.Limit : count;
          ;
          this.hasNum.string = "/" + this.maxItemcount;
        }

        resetData() {
          if (this.maxItemcount <= 0) {
            this.Hide();
            return;
          }

          if (this.maxItemcount <= 1) {
            this.page1.active = false;
          }

          this.curSelectCount = 1;
          this.curPageNum = 0;

          if (this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select) {
            this.selectItem = [];
            this.lbl_tips.string = "选择获得以下道具" + this.selectItem.length + "/" + this.BoxData.RewardNum;
            this.PageView.setCurrentPageIndex(this.curPageNum);
            let item = this.PageView.getPages()[this.curPageNum].getComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
              error: Error()
            }), OpenBoxPage) : OpenBoxPage);
            item.SetData(this.datas[this.curPageNum], this.curSelectCount, this.BoxData.RewardNum, this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
              error: Error()
            }), BoxType) : BoxType).select, this.getSelect.bind(this));
            this.okBtn.enabled = false;
            this.okBtn.node.getComponent(Sprite).grayscale = true;
          }

          this.updateProgress();
        }

        updateProgress() {
          this.Slider.progress = this.curSelectCount / this.maxItemcount;
          this.consumeNum.string = this.curSelectCount + "";
          let item = this.PageView.getPages()[this.curPageNum].getComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
            error: Error()
          }), OpenBoxPage) : OpenBoxPage);
          item.setSelectNum(this.curSelectCount, this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select);
        }

        updateBtnState() {
          this.okBtn.enabled = true;
        }

        onHide(...args) {
          this.curSelectCount = 1;
          this.curPageNum = 0;
          this.selectItem = undefined;
          this.PageView.removeAllPages();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.ItemChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_GetReward === void 0 ? (_reportPossibleCrUseOfEvt_GetReward({
            error: Error()
          }), Evt_GetReward) : Evt_GetReward, this.resetData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_OpenBoxGetRewardPanel === void 0 ? (_reportPossibleCrUseOfEvt_OpenBoxGetRewardPanel({
            error: Error()
          }), Evt_OpenBoxGetRewardPanel) : Evt_OpenBoxGetRewardPanel, this.updateBtnState, this);
        }

        update(dt) {
          let size = this.Slider.node.getComponent(UITransform).contentSize;
          this.progress.getComponent(UITransform).setContentSize(this.Slider.progress * size.width, 28);
        }

        onAdd(e) {
          if (this.curSelectCount >= this.maxItemcount) return;
          this.curSelectCount++; //超出拥有数量

          if (this.curSelectCount > this.maxItemcount) {
            this.curSelectCount = this.maxItemcount;
          }

          this.updateProgress();
        }

        onDel(e) {
          if (this.curSelectCount < 1) return;
          this.curSelectCount--;

          if (this.curSelectCount < 1) {
            this.curSelectCount = 1;
          }

          this.updateProgress();
        }

        onSlide(e) {
          this.curSelectCount = Math.max(Math.ceil(this.maxItemcount * this.Slider.progress), 1);
          this.updateProgress();
        }

        onBtnRight() {
          this.curPageNum++;

          if (this.curPageNum >= this.maxPageNum) {
            this.curPageNum = this.maxPageNum - 1;
            return;
          }

          this.setItemData();
        }

        onBtnLeft() {
          this.curPageNum--;

          if (this.curPageNum < 0) {
            this.curPageNum = 0;
            return;
          }

          this.setItemData();
        }

        setItemData() {
          this.PageView.setCurrentPageIndex(this.curPageNum);
          let cur = this.PageView.getCurrentPageIndex();
          let item = this.PageView.getPages()[cur].getComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
            error: Error()
          }), OpenBoxPage) : OpenBoxPage);
          item.SetData(this.datas[cur], this.curSelectCount, this.BoxData.RewardNum, this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select, this.getSelect.bind(this));
        }

        getSelect(data) {
          this.selectItem = data;
          this.lbl_tips.string = "选择获得以下道具" + data.length + "/" + this.BoxData.RewardNum;
          let isClick = data.length == this.BoxData.RewardNum;
          this.okBtn.enabled = isClick;
          this.okBtn.node.getComponent(Sprite).grayscale = !isClick;
        }

        onOk() {
          if (this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select && (!this.selectItem || this.selectItem.length < this.BoxData.RewardNum)) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("请选择道具");
            return;
          }

          if (this.curSelectCount >= 2 && this.BoxData.Text && this.BoxData.Text != "") {
            let id = this.BoxData.Items[this.selectItem[0]];
            let lbl = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRewardRoleById(id).RoleName;
            let str = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetText(this.BoxData.Text, {
              name: lbl
            });
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(str, this.callBack.bind(this));
          } else {
            this.callBack();
          }
        }

        callBack() {
          if (this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).random) {
            let data = {
              type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                error: Error()
              }), MsgTypeSend) : MsgTypeSend).OpenBoxRequest,
              data: {
                item_id: this.BoxData.ItemID,
                count: this.curSelectCount,
                selected_items: []
              }
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(data);
          } else if (this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select) {
            let data = {
              type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                error: Error()
              }), MsgTypeSend) : MsgTypeSend).OpenBoxRequest,
              data: {
                item_id: this.BoxData.ItemID,
                count: this.curSelectCount,
                selected_items: this.selectItem
              }
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(data);
          } else {
            let data = {
              type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                error: Error()
              }), MsgTypeSend) : MsgTypeSend).OpenBoxRequest,
              data: {
                item_id: this.BoxData.ItemID,
                count: this.curSelectCount
              }
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(data);
          }

          this.okBtn.enabled = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7fa2f7edc5d07a3976880cb0127fb3da70dab8e7.js.map