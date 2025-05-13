System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Input, Label, Toggle, UITransform, Vec3, Widget, js, size, sp, view, EventMgr, Evt_Add_Card_Group_update, Evt_Card_Add, Evt_Card_Check_By_Name, Evt_Card_Del, Evt_Card_Group_Update, Evt_Hide_Scene, Evt_Set_Battle_Card_Group_Update, Evt_Show_Scene, Panel, AutoScroller, PlayerData, Card, Session, CardSotrType1, CardSotrType2, CfgMgr, skillType, CardGroupItem, CardInfoStateType, Second, proto, Req, Route, CardsSortOrFiltrate, CardsGroupSetting, Goto, Tips, MsgPanel, Tips2, CardGroupCreatorTips, VList, CardsPanel, _crd, MoreType;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Add_Card_Group_update(extras) {
    _reporterNs.report("Evt_Add_Card_Group_update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Add(extras) {
    _reporterNs.report("Evt_Card_Add", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Check_By_Name(extras) {
    _reporterNs.report("Evt_Card_Check_By_Name", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Del(extras) {
    _reporterNs.report("Evt_Card_Del", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Hide_Scene(extras) {
    _reporterNs.report("Evt_Hide_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Set_Battle_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Show_Scene(extras) {
    _reporterNs.report("Evt_Show_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardSotrType(extras) {
    _reporterNs.report("CardSotrType1", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardSotrType2(extras) {
    _reporterNs.report("CardSotrType2", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdNoobCardGroup(extras) {
    _reporterNs.report("StdNoobCardGroup", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfskillType(extras) {
    _reporterNs.report("skillType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupItem(extras) {
    _reporterNs.report("CardGroupItem", "./CardGroupItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardInfoStateType(extras) {
    _reporterNs.report("CardInfoStateType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
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

  function _reportPossibleCrUseOfCardsSortOrFiltrate(extras) {
    _reporterNs.report("CardsSortOrFiltrate", "./CardsSortOrFiltrate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardsGroupSetting(extras) {
    _reporterNs.report("CardsGroupSetting", "./CardsGroupSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips2(extras) {
    _reporterNs.report("Tips2", "../common/Tips2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupCreatorTips(extras) {
    _reporterNs.report("CardGroupCreatorTips", "./CardGroupCreatorTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  _export("CardsPanel", void 0);

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
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
      js = _cc.js;
      size = _cc.size;
      sp = _cc.sp;
      view = _cc.view;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_Add_Card_Group_update = _unresolved_2.Evt_Add_Card_Group_update;
      Evt_Card_Add = _unresolved_2.Evt_Card_Add;
      Evt_Card_Check_By_Name = _unresolved_2.Evt_Card_Check_By_Name;
      Evt_Card_Del = _unresolved_2.Evt_Card_Del;
      Evt_Card_Group_Update = _unresolved_2.Evt_Card_Group_Update;
      Evt_Hide_Scene = _unresolved_2.Evt_Hide_Scene;
      Evt_Set_Battle_Card_Group_Update = _unresolved_2.Evt_Set_Battle_Card_Group_Update;
      Evt_Show_Scene = _unresolved_2.Evt_Show_Scene;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      AutoScroller = _unresolved_4.AutoScroller;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      Card = _unresolved_6.Card;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }, function (_unresolved_8) {
      CardSotrType1 = _unresolved_8.CardSotrType1;
      CardSotrType2 = _unresolved_8.CardSotrType2;
      CfgMgr = _unresolved_8.CfgMgr;
      skillType = _unresolved_8.skillType;
    }, function (_unresolved_9) {
      CardGroupItem = _unresolved_9.CardGroupItem;
    }, function (_unresolved_10) {
      CardInfoStateType = _unresolved_10.CardInfoStateType;
    }, function (_unresolved_11) {
      Second = _unresolved_11.Second;
    }, function (_unresolved_12) {
      proto = _unresolved_12.default;
      Req = _unresolved_12.Req;
      Route = _unresolved_12.Route;
    }, function (_unresolved_13) {
      CardsSortOrFiltrate = _unresolved_13.CardsSortOrFiltrate;
    }, function (_unresolved_14) {
      CardsGroupSetting = _unresolved_14.CardsGroupSetting;
    }, function (_unresolved_15) {
      Goto = _unresolved_15.Goto;
    }, function (_unresolved_16) {
      Tips = _unresolved_16.Tips;
    }, function (_unresolved_17) {
      MsgPanel = _unresolved_17.MsgPanel;
    }, function (_unresolved_18) {
      Tips2 = _unresolved_18.Tips2;
    }, function (_unresolved_19) {
      CardGroupCreatorTips = _unresolved_19.CardGroupCreatorTips;
    }, function (_unresolved_20) {
      VList = _unresolved_20.VList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "873cbHOqrNCXowEzNxXl2OZ", "CardsPanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'Input', 'Label', 'Node', 'Toggle', 'Tween', 'UITransform', 'Vec3', 'Widget', 'js', 'size', 'sp', 'tween', 'view']);

      MoreType = /*#__PURE__*/function (MoreType) {
        MoreType[MoreType["del_card"] = 0] = "del_card";
        MoreType[MoreType["shard"] = 1] = "shard";
        MoreType[MoreType["copy"] = 2] = "copy";
        MoreType[MoreType["add"] = 3] = "add";
        MoreType[MoreType["inquiry"] = 4] = "inquiry";
        return MoreType;
      }(MoreType || {});

      _export("CardsPanel", CardsPanel = class CardsPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cards/CardsPanel";
          this.scroller = void 0;
          this.noneListCont = void 0;
          this.sortNode = void 0;
          this.closeSortBtn = void 0;
          this.upOrDownBtn = void 0;
          this.sortNav = void 0;
          this.filtrateNode = void 0;
          this.searchNode = void 0;
          this.editBox = void 0;
          this.completeBtn = void 0;
          this.cancelBtn = void 0;
          this.filtrateClose = void 0;
          this.filtrateBtn = void 0;
          this.sortBtn = void 0;
          this.moreBtn = void 0;
          this.showNode = void 0;
          this.cardGroupScrollView = void 0;
          this.addCardNode = void 0;
          this.addCardScrollView = void 0;
          this.back = void 0;
          this.clone_item = void 0;
          this.groupNameEditBox = void 0;
          this.moreNode = void 0;
          this.moreNav = void 0;
          this.skillEffNode = void 0;
          this.costNode = void 0;
          this.diyNode = void 0;
          this.sortNodeBack = void 0;
          this.navBtns = void 0;
          this.illustratedScrollView = void 0;
          this.help = void 0;
          this.card_group_setting = void 0;
          this.EffNode = void 0;
          this.Content = void 0;
          this.card_list = [];
          this.max_card_group = 20;
          //最大卡组数
          this.max_card = 12;
          //最大卡牌数
          this.sort_type_1 = (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
            error: Error()
          }), CardSotrType1) : CardSotrType1).Up;
          this.sort_type_2 = (_crd && CardSotrType2 === void 0 ? (_reportPossibleCrUseOfCardSotrType2({
            error: Error()
          }), CardSotrType2) : CardSotrType2).Cost;
          this.search_card_list = [];
          this.searchStrList = [];
          this.selects = [];
          this.add_or_change = void 0;
          //添加卡组true 修改卡组false;
          this.is_open_add_card_group = false;
          //false未打开添加卡牌界面
          this.selectSkillType = 0;
          this.costType = [];
          this.showType = false;
          this.selectSkillList = [];
          this.costTypeList = [];
          this.showTypeList = [];
          this.isCanAdd = false;
          this.old_selects = [];
          this.old_name = void 0;
          this.tag = void 0;
          this.data = void 0;
          this.data_list = [];

          /**用于生成卡组的卡牌id */
          this.select_creator_card_group_card_id = void 0;
          this.guide_index = 0;
        }

        onLoad() {
          this.CloseBy("backBtn");
          this.navBtns = this.find("nav").children.concat();

          for (let btn of this.navBtns) {
            btn.off('toggle', this.onPage, this);
            btn.on('toggle', this.onPage, this);
          }

          this.EffNode = this.find("effNode");
          this.help = this.find("filtrateNode/bg/help");
          this.help.on(Input.EventType.TOUCH_END, () => {
            (_crd && Tips2 === void 0 ? (_reportPossibleCrUseOfTips2({
              error: Error()
            }), Tips2) : Tips2).Show(1);
          }, this);
          this.noneListCont = this.find("noneListCont");
          this.sortNode = this.find("sortNode");
          this.scroller = this.find("ScrollView", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.scroller.updateCell = this.updateCardItem.bind(this);
          this.scroller.selectCell = this.onSelectCard.bind(this);
          this.Content = this.find("ScrollView/view/content");
          this.sortNav = this.find("sortNode/bg/nav").children.concat();
          this.upOrDownBtn = this.find("sortNode/bg/upOrDown", Button);
          this.upOrDownBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.closeSortBtn = this.find("sortNode/bg/closeSortBtn", Button);
          this.closeSortBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.filtrateNode = this.find("filtrateNode");
          this.searchNode = this.find("filtrateNode/bg/searchNode");
          this.editBox = this.find("filtrateNode/bg/EditBox", EditBox);
          this.editBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
          this.skillEffNode = this.find("filtrateNode/bg/skillEffNode");
          this.costNode = this.find("filtrateNode/bg/costNode");
          this.diyNode = this.find("filtrateNode/bg/diyNode");
          this.filtrateClose = this.find("filtrateNode/filtrateClose");
          this.filtrateClose.on(Input.EventType.TOUCH_END, () => {
            this.filtrateNode.active = false;
            this.filtrateBtn.node.getChildByName("close").active = true;
            this.filtrateBtn.node.getChildByName("open").active = false;
          }, this);
          this.completeBtn = this.find("filtrateNode/bg/complete", Button);
          this.completeBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.cancelBtn = this.find("filtrateNode/bg/cancel", Button);
          this.cancelBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.filtrateBtn = this.find("filtrateBtn", Button);
          this.filtrateBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.sortBtn = this.find("sortBtn", Button);
          this.sortBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.showNode = this.find("showNode");
          this.cardGroupScrollView = this.find("showNode/cardGroupScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.cardGroupScrollView.SetHandle(this.updateCardGroupItem.bind(this));
          this.cardGroupScrollView.node.on('select', this.onCardGroupSelect, this);
          this.addCardNode = this.find("showNode/addCardNode");
          this.addCardScrollView = this.find("showNode/addCardNode/addCardScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.addCardScrollView.SetHandle(this.updateCardGroupCardItem.bind(this));
          this.addCardScrollView.node.on('select', this.onSelectCardGroupCard, this);
          this.back = this.find("showNode/addCardNode/back");
          this.clone_item = this.find("ScrollView/view/content/item");
          this.groupNameEditBox = this.find("showNode/addCardNode/groupNameEditBox", EditBox);
          this.moreBtn = this.find("showNode/addCardNode/moreBtn", Button);
          this.moreBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.moreNode = this.find("moreNode");
          this.moreNode.on(Input.EventType.TOUCH_END, () => {
            this.moreNode.active = false;
          }, this);
          this.moreNav = this.find("moreNode/bg/moreNav").children.concat();
          this.illustratedScrollView = this.find("illustratedScrollView", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.illustratedScrollView.updateCell = this.updateCardItem.bind(this);
          this.card_group_setting = this.find("CardsGroupSetting").addComponent(_crd && CardsGroupSetting === void 0 ? (_reportPossibleCrUseOfCardsGroupSetting({
            error: Error()
          }), CardsGroupSetting) : CardsGroupSetting);
          this.sortNodeBack = this.find("sortNode/back");
          this.sortNodeBack.on(Input.EventType.TOUCH_END, () => {
            this.sortNode.active = false;
            this.sortBtn.node.getChildByName("close").active = true;
            this.sortBtn.node.getChildByName("open").active = false;
          }, this);
          this.back.on(Input.EventType.TOUCH_END, () => {
            this.onBack();
          }, this);
          this.sortNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.sort_type_2 = index;
              this.setCardSort();
            }, this);
          });
          this.moreNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.onMoreBtn(index);
            }, this);
          });
          this.searchNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.editBox.string = node.children[0].getComponent(Label).string;
              this.onEditEnd();
            }, this);
          });
          this.skillEffNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.skillSearch();
            }, this);
          });
          this.costNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.costSearch();
            }, this);
          });
          this.diyNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.showSearch();
            }, this);
          });
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Check_By_Name === void 0 ? (_reportPossibleCrUseOfEvt_Card_Check_By_Name({
            error: Error()
          }), Evt_Card_Check_By_Name) : Evt_Card_Check_By_Name, this.updateCardsGroupCardData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Set_Battle_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update({
            error: Error()
          }), Evt_Set_Battle_Card_Group_Update) : Evt_Set_Battle_Card_Group_Update, this.flush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
            error: Error()
          }), Evt_Card_Group_Update) : Evt_Card_Group_Update, this.flush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Add_Card_Group_update === void 0 ? (_reportPossibleCrUseOfEvt_Add_Card_Group_update({
            error: Error()
          }), Evt_Add_Card_Group_update) : Evt_Add_Card_Group_update, this.onReqSaveCardGroup, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Add === void 0 ? (_reportPossibleCrUseOfEvt_Card_Add({
            error: Error()
          }), Evt_Card_Add) : Evt_Card_Add, this.onAddCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Del === void 0 ? (_reportPossibleCrUseOfEvt_Card_Del({
            error: Error()
          }), Evt_Card_Del) : Evt_Card_Del, this.onDelCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Hide_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Hide_Scene({
            error: Error()
          }), Evt_Hide_Scene) : Evt_Hide_Scene, js.getClassName(this));
        }

        flush(data) {
          let is_show_head_node = this.card_group_setting.node.getChildByName("ornamentNode").active;

          if (!is_show_head_node) {
            this.data = data;
            this.SetPage(0);
          }
        }

        onAddCard(cardData) {
          this.setCardState(cardData, null, true);
        }

        onDelCard(cardData) {
          this.setCardState(cardData, null, false, true);
        }

        async SetPage(page) {
          if (!this.$hasLoad) await this.initSub;
          if (!this.navBtns[page]) return;
          this.tag = undefined;
          this.navBtns[page].getComponent(Toggle).isChecked = true;
          this.onPage(this.navBtns[page].getComponent(Toggle));
        }

        onPage(t) {
          let page = this.navBtns.indexOf(t.node);
          if (page < 0 || page == this.tag) return;
          this.tag = page;
          this.card_group_setting.node.active = false;

          if (page == 0) {
            this.filtrateBtn.node.active = true;
            this.sortBtn.node.active = true;
            this.illustratedScrollView.node.active = false;
            this.scroller.node.active = true;
            this.showNode.active = true;
            this.updateCardGroup();
            this.updateAllCardsShow();

            if (this.data) {
              this.card_group_setting.node.active = true;
              this.is_open_add_card_group = true;
              this.setHaveCardGroup(this.data);
            }
          } else if (page == 1) {
            this.filtrateBtn.node.active = false;
            this.sortBtn.node.active = false;
            this.illustratedScrollView.node.active = true;
            this.scroller.node.active = false;
            this.showNode.active = false;
            let cfg_card_list = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
              error: Error()
            }), CardsSortOrFiltrate) : CardsSortOrFiltrate).onSetSearchShow();
            this.data_list = cfg_card_list;
            this.illustratedScrollView.cellCount = cfg_card_list.length; // this.illustratedScrollView.UpdateDatas(cfg_card_list)
          }
        }

        setHaveCardGroup(data) {
          //已有卡组请求该卡组数据
          this.add_or_change = false;
          this.updatePanel();
          this.groupNameEditBox.string = data.name;
          this.old_name = data.name;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id = data.id;
          let getdeckcards = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["logic.protocol.getdeckcards"]();
          getdeckcards.deckId = data.id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getdeckcards"], getdeckcards);
        }

        updateCardGroup() {
          this.is_open_add_card_group = false;
          this.updatePanel();
          this.updateAllCardGroup();
          this.updateAllCardsShow();
        }

        updatePanel() {
          this.cardGroupScrollView.node.active = !this.is_open_add_card_group;
          this.addCardNode.active = this.is_open_add_card_group;
          let size_1 = this.cardGroupScrollView.getComponent(UITransform).contentSize;
          let size_2 = this.addCardNode.getComponent(UITransform).contentSize;
          let size_3 = this.is_open_add_card_group ? size_2 : size_1;
          this.showNode.getComponent(UITransform).setContentSize(size_3);
          this.showNode.children.forEach(item => {
            if (item.getComponent(Widget)) {
              item.getComponent(Widget).updateAlignment();
            }
          });
          this.selects = [];
          this.Content.children.forEach(item => {
            if (item.getChildByName("Cards").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card)) {
              item.getChildByName("Cards").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card).setSelect(false);
            }
          });
          let height = this.scroller.getComponent(UITransform).contentSize.height;
          let panel_width = view.getVisibleSize().width;
          let paddingLeft = 30;
          let paddingRight = 0;
          let right_width = size_3.width + paddingLeft + paddingRight;
          let max_width = panel_width - right_width;
          this.scroller.getComponent(UITransform).setContentSize(size(max_width, height));
          this.scroller.node.children[0].getComponent(Widget).updateAlignment();
          this.Content.getComponent(UITransform).setContentSize(size(max_width, 238));
          let item_width = this.clone_item.getComponent(UITransform).contentSize.width; //最大放几个卡牌

          let num = Math.floor(max_width / item_width); //总剩余的间隙

          let yu = max_width % item_width; //最大间隙

          let jianju = Math.floor(yu / (num - 1)); //最小间隙15

          if (jianju < 15) {
            jianju = Math.floor((yu + item_width) / (num - 2));
          }

          this.scroller.spacingX = jianju;
          this.scroller.cellCount = this.card_list.length;
        }
        /**展示所有卡牌 */


        updateAllCardsShow() {
          this.noneListCont.active = false;

          if (this.card_list.length <= 0 || this.selectSkillType == 0 && this.costType.length == 0 && !this.showType) {
            this.card_list = [];

            for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cards) {
              this.card_list.push(iterator);
            }
          }

          this.setCardSort();

          if (this.card_list.length > 0) {
            this.setCardsData(this.card_list);
          } else {
            this.noneListCont.active = true;
          }
        }
        /**展示所有卡组 */


        updateAllCardGroup() {
          let data = [];

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.statusMark.NoobCardsAdd) {
            //已领取新手卡组
            for (let index = 0; index < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.length; index++) {
              const element = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList[index];
              data.push(JSON.parse(JSON.stringify(element)));
            }
          } else {
            //未领取新手卡组加入一个初始卡组
            let initCardGroupCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("Noob_CardGroup")[0];
            let initCardGroup = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.DeckAttrs.create();
            initCardGroup.avatarId = initCardGroupCfg.CardGroupHead;
            initCardGroup.cardBackId = initCardGroupCfg.CardGroupBack;
            initCardGroup.name = initCardGroupCfg.CardGroupName;
            initCardGroup.size = 12;
            initCardGroup.id = "";
            data.push(initCardGroup);
          }

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList.length < this.max_card_group) {
            data.unshift("");
          }

          this.cardGroupScrollView.UpdateDatas(data);
        }
        /**设置卡牌 */


        setCardsData(data_list) {
          this.data_list = data_list;
          this.scroller.cellCount = this.data_list.length;
        }

        updateCardItem(cell, cellInfo) {
          let card = cell.getChildByName("Cards").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card) || cell.getChildByName("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          card.setIsShowUpEffect(true);
          cell.getChildByPath("Cards/cardNode/select").active = cellInfo.isSelect;
          let data = this.data_list[cellInfo.index];
          card.SetData(data);

          if (data && data.id == "") {
            card.setGray(true);
          } else {
            card.setGray(false);
            let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(data.cardId);

            for (const iterator of this.selects) {
              let select_card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(iterator.cardId); //本体

              if (iterator.id == data.id) {
                card.setSelect(true);
              } //多个同样的本体非变体


              if (select_card_cfg.Classid == cfg.Classid && cfg.ID == select_card_cfg.ID && iterator.id != data.id) {
                card.setGray(true);
              }
            }
          }
        }

        updateCardGroupCardItem(item, data, index) {
          let card = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          if (!card) card = item.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          card.SetData(data);

          if (!data && index == this.max_card - 1) {
            card.setShowAdd(true);
          } else {
            card.setShowAdd(false);
          }
        }
        /**选择卡牌 */


        onSelectCard(cell, cellInfo, lastCell, lastInfo) {
          if (cell && cell.getChildByName("Cards")) {
            let cards = cell.getChildByName("Cards").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            let data = cards.getData();

            if (data && data.id != "") {
              if (this.is_open_add_card_group) {
                //卡组打开卡牌加入或删除
                let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetCard(data.cardId);

                let callBack = () => {
                  let is_select = cards.getSelectState();

                  if (cfg.IsOpen != 1) {
                    (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                      error: Error()
                    }), MsgPanel) : MsgPanel).Show("此卡未开放");
                    return;
                  }

                  if (this.selects.length >= 12 && !is_select) {
                    (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                      error: Error()
                    }), MsgPanel) : MsgPanel).Show("超出上限");
                    return;
                  }

                  cards.setSelect(!is_select);

                  if (!is_select) {
                    this.selects.push(data);
                    this.setCardGary(data, true);
                  } else {
                    this.selects.splice(this.selects.findIndex(card => card.id == data.id), 1);
                    this.setCardGary(data, false);
                  }

                  this.addCardsGroup();
                }; //查找是否选择的是变体


                let is_has = false;

                for (const iterator of this.selects) {
                  let select_card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).GetCard(iterator.cardId);

                  if (select_card_cfg.Classid == cfg.Classid && cfg.ID != select_card_cfg.ID) {
                    is_has = true;
                  }
                }

                let type = (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                  error: Error()
                }), CardInfoStateType) : CardInfoStateType).Add;

                if (this.selects.length >= 12) {
                  type = (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                    error: Error()
                  }), CardInfoStateType) : CardInfoStateType).Fill;
                }

                if (is_has) {
                  type = (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                    error: Error()
                  }), CardInfoStateType) : CardInfoStateType).Change;
                } else if (this.selects.findIndex(card => card.id == data.id) != -1) {
                  type = (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                    error: Error()
                  }), CardInfoStateType) : CardInfoStateType).Del;
                }

                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)("CardInfoPanel", data, type, callBack.bind(this));
              } else {
                let callBack = card_data => {
                  if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).cardNameList.length >= this.max_card_group) {
                    (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                      error: Error()
                    }), MsgPanel) : MsgPanel).Show("卡组数量已达上限！");
                    return;
                  }

                  this.select_creator_card_group_card_id = card_data.cardId;
                  this.CreaterCardGroupAnmition();
                };

                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)("CardInfoPanel", data, (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                  error: Error()
                }), CardInfoStateType) : CardInfoStateType).Creator, callBack.bind(this));
              }
            }
          }
        }

        addCardsGroup() {
          let data = this.setCurCardGroupCardList(this.selects);
          ;
          this.addCardScrollView.UpdateDatas(data);
        }
        /**设置卡组 */


        updateCardGroupItem(item, data, index) {
          let card_group_item = item.getComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem);
          if (!card_group_item) card_group_item = item.addComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem);
          item.name = "cardGroupItem" + index;
          card_group_item.SetData(data);
        }
        /**选择卡组 */


        onCardGroupSelect(index, item) {
          let data = item.getComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem).getData();
          /**添加卡组 */

          this.is_open_add_card_group = true;

          if (typeof data == "string") {
            this.updatePanel();
            let card_data = this.setCurCardGroupCardList([]);
            this.addCardScrollView.UpdateDatas(card_data);
            this.onReqCreateCardGroup();
          } else {
            //已有卡组请求该卡组数据
            this.setHaveCardGroup(data);
          }

          this.card_group_setting.node.active = true;
          this.card_group_setting.SetPage(0, this.onBack.bind(this));
        }
        /**展示卡组中卡牌 */


        updateCardsGroupCardData(data) {
          let list = [];
          this.old_selects = [];

          for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              const element = data[key];
              list.push(element);
              this.old_selects.push(element);
            }
          }

          list.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (a_data.Cost == b_data.Cost) {
              if (a_data.Power == b_data.Power) {
                return a_data.ID - b_data.ID;
              }

              return a_data.Power - b_data.Power;
            }

            return a_data.Cost - b_data.Cost;
          });
          this.selects = list;

          for (let index = 0; index < this.selects.length; index++) {
            const element = this.selects[index];
            this.setCardState(element, true);
            this.setCardGary(element, true);
          }

          let data_list = this.setCurCardGroupCardList(list);
          this.addCardScrollView.UpdateDatas(data_list);
        }

        setCardGary(data, is_gray) {
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard(data.cardId);

          for (const iterator of this.Content.children) {
            let item = iterator.getChildByName("Cards").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            let card_data = item.getData();
            let card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(card_data.cardId);

            if (is_gray) {
              if (cfg.Classid == card_cfg.Classid && data.id != card_data.id) {
                item.setGray(is_gray);
              }
            } else {
              if (cfg.Classid == card_cfg.Classid) {
                item.setGray(is_gray);
              }
            }
          }
        }
        /**设置当前选中卡组的卡牌 */


        setCurCardGroupCardList(list) {
          let data_list = [];

          for (let index = 0; index < 12; index++) {
            let element = list[index] ? list[index] : null;
            data_list.push(element);
          }

          return data_list;
        }

        onSelectCardGroupCard(index, item) {
          let cards = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          let is_add = item.getChildByName("add").active;

          if (is_add) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("是否自动填充卡组", this.CreaterCardGroupAnmition.bind(this));
          }

          if (!cards) return;
          let data = cards.getData();

          if (data) {
            let callBack = () => {
              this.selects.splice(this.selects.indexOf(data), 1);
              this.addCardsGroup();
              this.setCardState(data, false);
              this.setCardGary(data, false);
            };

            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("CardInfoPanel", data, (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
              error: Error()
            }), CardInfoStateType) : CardInfoStateType).Del, callBack.bind(this));
          }
        }

        setCardState(data, is_select = null, isUpdate, isDle) {
          let content = this.Content.children;
          let delete_node;

          for (let index = 0; index < content.length; index++) {
            const element = content[index];
            let card = element.getChildByName("Cards").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            if (!card) card = element.getChildByName("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);

            if (card.getData().id == data.id) {
              if (is_select != null) {
                card.setSelect(is_select);
              }

              if (isUpdate) {
                card.SetData(data);
              }

              if (isDle) {
                delete_node = element;
              }

              break;
            }
          }

          if (isDle) {
            this.Content.removeChild(delete_node);
          }
        }

        onClick(btn) {
          let name = btn.node.name;

          switch (name) {
            case "filtrateBtn":
              let is_open = this.filtrateBtn.node.getChildByName("open").active;
              this.filtrateNode.active = !is_open;
              this.filtrateBtn.node.getChildByName("close").active = is_open;
              this.filtrateBtn.node.getChildByName("open").active = !is_open;
              break;

            case "sortBtn":
              this.sortNode.active = true;
              this.sortBtn.node.getChildByName("close").active = false;
              this.sortBtn.node.getChildByName("open").active = true;
              break;

            case "closeSortBtn":
              this.sortNode.active = false;
              this.sortBtn.node.getChildByName("close").active = true;
              this.sortBtn.node.getChildByName("open").active = false;
              break;

            case "upOrDown":
              this.sort_type_1 = this.sort_type_1 == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
                error: Error()
              }), CardSotrType1) : CardSotrType1).Up ? (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
                error: Error()
              }), CardSotrType1) : CardSotrType1).Down : (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
                error: Error()
              }), CardSotrType1) : CardSotrType1).Up;
              let y = this.sort_type_1 == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
                error: Error()
              }), CardSotrType1) : CardSotrType1).Up ? -1 : 1;
              this.upOrDownBtn.node.getChildByName("icon").setScale(new Vec3(1, y, 1));
              this.setCardSort();
              break;

            case "complete":
              this.filtrateNode.active = false;
              this.filtrateBtn.node.getChildByName("close").active = true;
              this.filtrateBtn.node.getChildByName("open").active = false;
              break;

            case "cancel":
              this.resetSearchState();
              this.setCardSort();
              break;

            case "moreBtn":
              this.moreNode.active = true;
              break;

            default:
              break;
          }
        }
        /**重置筛选状态 */


        resetSearchState() {
          this.editBox.string = "";
          this.costNode.children.forEach(node => {
            node.getComponent(Toggle).isChecked = false;
          });
          this.skillEffNode.children.forEach(node => {
            node.getComponent(Toggle).isChecked = false;
          });
          this.diyNode.children.forEach(node => {
            node.getComponent(Toggle).isChecked = false;
          });
          this.card_list = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cards;
          this.selectSkillType = (_crd && skillType === void 0 ? (_reportPossibleCrUseOfskillType({
            error: Error()
          }), skillType) : skillType).undefined;
          this.costType = [];
          this.showType = false;
        }

        onMoreBtn(index) {
          switch (index) {
            case MoreType.del_card:
              let callBack = () => {
                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).CurFightCardGroup.id == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cur_id) {
                  (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                    error: Error()
                  }), MsgPanel) : MsgPanel).Show("出战卡组，不可删除！");
                  return;
                }

                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cardNameList.length == 1) {
                  (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                    error: Error()
                  }), MsgPanel) : MsgPanel).Show("唯一卡组，不可删除！");
                  return;
                }

                let delete_data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["logic.protocol.deletedeck"]();
                delete_data.deckId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cur_id;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["logic.protocol.deletedeck"], delete_data);
                this.setCardsData(this.card_list);
              };

              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                error: Error()
              }), Tips) : Tips).Show("删除卡组", callBack.bind(this));
              break;

            case MoreType.shard:
              break;

            case MoreType.copy:
              break;

            case MoreType.add:
              if (this.selects.length < this.max_card) {
                this.CreaterCardGroupAnmition();
              } else {
                (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                  error: Error()
                }), Tips) : Tips).Show("卡牌已达上限");
              }

              break;

            case MoreType.inquiry:
              break;

            default:
              break;
          }

          this.moreNode.active = false;
        }
        /**设置空卡组 */


        onReqCreateCardGroup() {
          let count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList.length + 1;
          this.groupNameEditBox.string = "自动-卡组" + count;
          this.old_name = "自动-卡组" + count;
          this.add_or_change = true;
          let cfg_logic = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetLogic("InitDeck");
          let head_id = cfg_logic.HeadID;
          let card_back_id = cfg_logic.BackpackerID;

          if (this.add_or_change) {
            let add = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["logic.protocol.adddeck"]();
            add.attrs = {
              id: null,
              name: this.groupNameEditBox.string,
              type: null,
              avatarId: head_id,
              cardBackId: card_back_id
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.adddeck"], add);
          }
        }
        /**修改后保存卡组 */


        onReqSaveCardGroup() {
          if (this.isCanAdd) {
            let is_change_name = false;

            if (this.old_name != this.groupNameEditBox.string) {
              is_change_name = true;
            }

            let is_change_card = false;

            if (this.old_selects.length == this.selects.length) {
              for (const iterator of this.selects) {
                let index = this.old_selects.findIndex(card => card.id == iterator.id);

                if (index == -1) {
                  is_change_card = true;
                }
              }
            } else {
              is_change_card = true;
            }

            if (is_change_name || is_change_card) {
              let id_list = [];

              if (is_change_name && !is_change_card) {
                //只修改名字
                let data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cur_id);
                data.name = this.groupNameEditBox.string;
                let Change_name = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["logic.protocol.setdeckattrs"]();
                Change_name.attrs = data;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["logic.protocol.setdeckattrs"], Change_name);
              } else {
                for (const iterator of this.selects) {
                  id_list.push(iterator.id);
                }

                let data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cur_id);
                data.name = this.groupNameEditBox.string;
                let send_data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["logic.protocol.setdeckcards"]();
                send_data.attrs = data;
                send_data.cardIds = id_list;
                send_data.deckId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cur_id;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["logic.protocol.setdeckcards"], send_data);
              }
            } else {
              this.updateCardGroup();
            }

            this.isCanAdd = false;
          }
        }

        onBack() {
          this.isCanAdd = true;
          this.card_group_setting.node.active = false;
          this.onReqSaveCardGroup();
        }

        onHide(...args) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Check_By_Name === void 0 ? (_reportPossibleCrUseOfEvt_Card_Check_By_Name({
            error: Error()
          }), Evt_Card_Check_By_Name) : Evt_Card_Check_By_Name, this.updateCardsGroupCardData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
            error: Error()
          }), Evt_Card_Group_Update) : Evt_Card_Group_Update, this.updateCardGroup, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Add_Card_Group_update === void 0 ? (_reportPossibleCrUseOfEvt_Add_Card_Group_update({
            error: Error()
          }), Evt_Add_Card_Group_update) : Evt_Add_Card_Group_update, this.onReqSaveCardGroup, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Add === void 0 ? (_reportPossibleCrUseOfEvt_Card_Add({
            error: Error()
          }), Evt_Card_Add) : Evt_Card_Add, this.onAddCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Del === void 0 ? (_reportPossibleCrUseOfEvt_Card_Del({
            error: Error()
          }), Evt_Card_Del) : Evt_Card_Del, this.onDelCard, this);

          if (this.is_open_add_card_group) {
            this.isCanAdd = true;
            this.onReqSaveCardGroup();
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Show_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Show_Scene({
            error: Error()
          }), Evt_Show_Scene) : Evt_Show_Scene, js.getClassByName(this));
        } //——————————————————————————————————————————————————————————————————排序相关————————————————————————————————————————


        setCardSort() {
          this.card_list = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).setCardSort(this.sort_type_1, this.sort_type_2, this.card_list);
          this.setCardsData(this.card_list);
        } //——————————————————————————————————————————————————————————————————————筛选相关————————————————————————————————————————————————————————
        //搜索后的卡牌


        onEditEnd() {
          let list = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).onEditEnd(this.editBox, this.searchStrList, this.searchNode, this.search_card_list, this.selectSkillType, this.costType, this.showType);
          this.setCardsData(list);
          this.card_list = list;
        } //筛选特殊技能效果的卡牌


        async skillSearch() {
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          this.selectSkillType = (_crd && skillType === void 0 ? (_reportPossibleCrUseOfskillType({
            error: Error()
          }), skillType) : skillType).undefined;
          let data = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).skillSearch(this.editBox, this.skillEffNode, this.selectSkillList, this.selectSkillType, this.costType, this.showType);
          this.selectSkillList = data[0];
          this.selectSkillType = data[1];
          this.setCardsData(this.selectSkillList);
          this.card_list = this.selectSkillList;
        } //筛选能量消耗的卡牌


        async costSearch() {
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          this.costType = [];
          let data = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).costSearch(this.editBox, this.costNode, this.costTypeList, this.selectSkillType, this.costType, this.showType);
          this.costTypeList = data[0];
          this.costType = data[1];
          this.setCardsData(this.costTypeList);
          this.card_list = this.costTypeList;
        } //筛选自定义展示的卡牌


        async showSearch() {
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          this.showType = false;
          let data = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).showSearch(this.editBox, this.diyNode, this.showTypeList, this.selectSkillType, this.costType, this.showType);
          this.showTypeList = data[0];
          this.showType = data[1];
          this.setCardsData(this.showTypeList);
          this.card_list = this.showTypeList;
        } //----------------------------------动画展示------------------------------

        /**生成卡组动画展示 */


        CreaterCardGroupAnmition() {
          //打开添加卡牌
          if (this.is_open_add_card_group) {
            this.EffNode.active = true;
            let spine = this.EffNode.children[0].getComponent(sp.Skeleton);
            spine.clearAnimation();
            spine.setAnimation(0, "animation", false);
            spine.setCompleteListener(() => {
              this.EffNode.active = false; //播放结束 展示列表

              this.old_selects = [];
              let old_card_list = JSON.parse(JSON.stringify(this.selects));
              this.select_creator_card_group_card_id = this.selects.length > 0 ? this.selects[0].cardId : null;
              this.selects = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetGenerateCardGroup(this.select_creator_card_group_card_id);
              this.addCardsGroup(); //加入的

              for (let index = 0; index < this.selects.length; index++) {
                const element = this.selects[index];
                let is_add = old_card_list.findIndex(card_data => card_data.id == element.id);

                if (is_add == -1) {
                  this.setCardState(element, true);
                  this.setCardGary(element, true);
                }
              } //移除的


              for (let index = 0; index < old_card_list.length; index++) {
                const element = old_card_list[index];
                let is_del = this.selects.findIndex(card_data => card_data.id == element.id);

                if (is_del == -1) {
                  this.setCardState(element, false);
                  this.setCardGary(element, false);
                }
              }
            });
          } else {
            let callBack1 = () => {
              let data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cur_id);
              this.card_group_setting.node.active = true;
              this.is_open_add_card_group = true;

              if (data) {
                this.setHaveCardGroup(data);
              }
            };

            let callBack2 = () => {
              let data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cur_id);

              if (data) {
                let set = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["logic.protocol.setdeckdefault"]();
                set.deckId = data.id;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["logic.protocol.setdeckdefault"], set);
              }
            };

            this.old_selects = [];
            this.isCanAdd = true;
            this.selects = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetGenerateCardGroup(this.select_creator_card_group_card_id);
            let card_list = JSON.parse(JSON.stringify(this.selects));
            (_crd && CardGroupCreatorTips === void 0 ? (_reportPossibleCrUseOfCardGroupCreatorTips({
              error: Error()
            }), CardGroupCreatorTips) : CardGroupCreatorTips).Show(this.select_creator_card_group_card_id, card_list, callBack1.bind(this), callBack2.bind(this));
            this.onReqCreateCardGroup();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f8c361185a999569c3eef140c77944723106e78.js.map