System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, UITransform, Slider, path, Button, PageView, instantiate, folder_icon, folder_item, Session, OpenBoxPage, EventMgr, Evt_GetReward, Evt_Item_Change, Evt_OpenBoxGetRewardPanel, Panel, BoxType, CardQuality, CfgMgr, ThingName, PlayerData, ItemUtil, Tips, Req, Route, OpenBoxPanel1, _crd;

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
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

  function _reportPossibleCrUseOfThingName(extras) {
    _reporterNs.report("ThingName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
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

  _export("OpenBoxPanel1", void 0);

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
      UITransform = _cc.UITransform;
      Slider = _cc.Slider;
      path = _cc.path;
      Button = _cc.Button;
      PageView = _cc.PageView;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      folder_icon = _unresolved_2.folder_icon;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      OpenBoxPage = _unresolved_4.OpenBoxPage;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_GetReward = _unresolved_5.Evt_GetReward;
      Evt_Item_Change = _unresolved_5.Evt_Item_Change;
      Evt_OpenBoxGetRewardPanel = _unresolved_5.Evt_OpenBoxGetRewardPanel;
    }, function (_unresolved_6) {
      Panel = _unresolved_6.Panel;
    }, function (_unresolved_7) {
      BoxType = _unresolved_7.BoxType;
      CardQuality = _unresolved_7.CardQuality;
      CfgMgr = _unresolved_7.CfgMgr;
      ThingName = _unresolved_7.ThingName;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      ItemUtil = _unresolved_9.ItemUtil;
    }, function (_unresolved_10) {
      Tips = _unresolved_10.Tips;
    }, function (_unresolved_11) {
      Req = _unresolved_11.Req;
      Route = _unresolved_11.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "340eewW9XZKWJ+ni04X9FTS", "OpenBoxPanel1", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'UITransform', 'Slider', 'path', 'Button', 'tween', 'v3', 'PageView', 'instantiate', 'Layout', 'Toggle']);

      _export("OpenBoxPanel1", OpenBoxPanel1 = class OpenBoxPanel1 extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/bag/OpenBoxPanel1";
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
          this.Slider.node.on('slide', this.onSlide, this);
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

        flush(...args) {
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
          }), folder_item) : folder_item, this.itemData.Icon, "spriteFrame"); // this.icon.spriteFrame = await ResMgr.LoadResAbSub(icon_url, SpriteFrame);

          let icon_bg_url = path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
            error: Error()
          }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
            error: Error()
          }), CardQuality) : CardQuality)[this.itemData.Quality] + "_bag_bg", "spriteFrame"); // this.iocnBg.spriteFrame = await ResMgr.LoadResAbSub(icon_bg_url, SpriteFrame);
          // this.BoxData = CfgMgr.GetBoxData(1200);

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
              let num = rewardDataNum[i + index * rewardCount] ? rewardDataNum[i + index * rewardCount] : 1;

              if (!id) {
                break;
              }

              if (type == (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
                error: Error()
              }), ThingName) : ThingName).battlecard) {
                let card = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetBattleCardDeliver(id);
                pageData.push(card);
              } else {
                let awardList = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                  error: Error()
                }), ItemUtil) : ItemUtil).CreateThing((_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                  error: Error()
                }), ItemUtil) : ItemUtil).SthingType[type], id, num);
                pageData.push(awardList);
              }
            }

            this.datas.push(pageData);
          }

          this.selectItem = [];
          this.PageView.removeAllPages();

          for (let k = 0; k < page_num; k++) {
            let item = instantiate(this.openBoxItem);
            let itemNode = item.getComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
              error: Error()
            }), OpenBoxPage) : OpenBoxPage);
            if (!itemNode) itemNode = item.addComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
              error: Error()
            }), OpenBoxPage) : OpenBoxPage);
            itemNode.SetData(this.datas[k], this.curSelectCount, this.BoxData.RewardNum, is_select, this.getSelect.bind(this), this.BoxData.Types[0] != 3, this.curPageNum, this.selectItem);
            this.PageView.addPage(item);
          }

          this.updateProgress();
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
          this.selectItem = [];

          if (this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select) {
            this.lbl_tips.string = "选择获得以下道具" + this.selectItem.length + "/" + this.BoxData.RewardNum;
            this.PageView.setCurrentPageIndex(this.curPageNum);
            let item = this.PageView.getPages()[this.curPageNum].getComponent(_crd && OpenBoxPage === void 0 ? (_reportPossibleCrUseOfOpenBoxPage({
              error: Error()
            }), OpenBoxPage) : OpenBoxPage);
            item.SetData(this.datas[this.curPageNum], this.curSelectCount, this.BoxData.RewardNum, this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
              error: Error()
            }), BoxType) : BoxType).select, this.getSelect.bind(this), this.BoxData.Types[0] != 3, this.curPageNum, this.selectItem);
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
          this.selectItem = [];
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
          }), BoxType) : BoxType).select, this.getSelect.bind(this), this.BoxData.Types[0] != 3, this.curPageNum, this.selectItem);
        }

        getSelect(data) {
          this.selectItem.push(...data);
          this.lbl_tips.string = "选择获得以下道具" + this.selectItem.length + "/" + this.BoxData.RewardNum;
          let isClick = this.selectItem.length == this.BoxData.RewardNum;
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
            let id = this.BoxData.Items[this.selectItem[0]]; // let lbl = CfgMgr.GetRewardRoleById(id).RoleName
            // let str = CfgMgr.GetText(this.BoxData.Text, {name: lbl})
            // Tips.Show(str, this.callBack.bind(this))
          } else {
            this.callBack();
          }
        }

        callBack() {
          let list = this.selectItem;

          if (this.BoxData.Boxtype != (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select) {
            list = null;
          }

          let open_box = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["player.protocol.openbox"]();
          open_box.boxId = this.BoxData.ItemID;
          open_box.count = this.curSelectCount;
          open_box.selectedItems = list;
          open_box.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).server;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["player.protocol.openbox"], open_box); // this.okBtn.enabled = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34a86f7f4952395ce2ffddde4c5bfc091df7859d.js.map