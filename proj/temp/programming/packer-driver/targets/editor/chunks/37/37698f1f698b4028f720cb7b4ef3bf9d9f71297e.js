System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Input, Label, Layout, ScrollView, Toggle, UITransform, Widget, instantiate, js, size, view, EventMgr, Evt_Card_Check_By_Name, Evt_Card_Group_Update, Evt_Hide_Scene, Evt_Show_Scene, Panel, AutoScroller, PlayerData, Card, Session, Protocol, CfgMgr, ObjectUtils, CardGroupItem, MsgPanel, CardsPanel, _crd, CardSotrType1, CardSotrType2, MoreType;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Check_By_Name(extras) {
    _reporterNs.report("Evt_Card_Check_By_Name", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Hide_Scene(extras) {
    _reporterNs.report("Evt_Hide_Scene", "../../manager/EventMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectUtils(extras) {
    _reporterNs.report("ObjectUtils", "../../utils/ObjectUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupItem(extras) {
    _reporterNs.report("CardGroupItem", "./CardGroupItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
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
      Layout = _cc.Layout;
      ScrollView = _cc.ScrollView;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      instantiate = _cc.instantiate;
      js = _cc.js;
      size = _cc.size;
      view = _cc.view;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_Card_Check_By_Name = _unresolved_2.Evt_Card_Check_By_Name;
      Evt_Card_Group_Update = _unresolved_2.Evt_Card_Group_Update;
      Evt_Hide_Scene = _unresolved_2.Evt_Hide_Scene;
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
      Protocol = _unresolved_8.Protocol;
    }, function (_unresolved_9) {
      CfgMgr = _unresolved_9.CfgMgr;
    }, function (_unresolved_10) {
      ObjectUtils = _unresolved_10.ObjectUtils;
    }, function (_unresolved_11) {
      CardGroupItem = _unresolved_11.CardGroupItem;
    }, function (_unresolved_12) {
      MsgPanel = _unresolved_12.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e997zgQmRL1Zb+neAsu2oE", "CardsPanel%20copy", undefined);

      __checkObsolete__(['Button', 'EditBox', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'ObjectCurve', 'ScrollView', 'Toggle', 'UITransform', 'Widget', 'instantiate', 'js', 'size', 'view']);

      CardSotrType1 = /*#__PURE__*/function (CardSotrType1) {
        CardSotrType1[CardSotrType1["Up"] = 0] = "Up";
        CardSotrType1[CardSotrType1["Down"] = 1] = "Down";
        return CardSotrType1;
      }(CardSotrType1 || {});

      CardSotrType2 = /*#__PURE__*/function (CardSotrType2) {
        CardSotrType2[CardSotrType2["Name"] = 0] = "Name";
        CardSotrType2[CardSotrType2["Cost"] = 1] = "Cost";
        CardSotrType2[CardSotrType2["Power"] = 2] = "Power";
        CardSotrType2[CardSotrType2["New"] = 3] = "New";
        CardSotrType2[CardSotrType2["Quality"] = 4] = "Quality";
        CardSotrType2[CardSotrType2["UpLevel"] = 5] = "UpLevel";
        return CardSotrType2;
      }(CardSotrType2 || {});

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
          this.card_list = [];
          this.max_card_group = 20;
          //最大卡组数
          this.max_card = 12;
          //最大卡牌数
          this.sort_type_1 = CardSotrType1.Up;
          this.sort_type_2 = CardSotrType2.Cost;
          this.search_card_list = [];
          this.curSearchStr = "";
          this.searchStrList = [];
          this.selects = [];
          this.add_or_change = void 0;
          //添加卡组true 修改卡组false;
          this.is_change_name = false;
          //是否修改名字
          this.is_open_add_card_group = false;
        }

        //false未打卡添加卡牌界面
        onLoad() {
          this.CloseBy("backBtn");
          this.noneListCont = this.find("noneListCont");
          this.sortNode = this.find("sortNode");
          this.scroller = this.find("ScrollView", ScrollView);
          this.scroller.node.on('select', this.onSelectCard, this);
          this.sortNav = this.find("sortNode/bg/nav").children.concat();
          this.upOrDownBtn = this.find("sortNode/bg/upOrDown", Button);
          this.upOrDownBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.closeSortBtn = this.find("sortNode/bg/closeSortBtn", Button);
          this.closeSortBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.filtrateNode = this.find("filtrateNode");
          this.searchNode = this.find("filtrateNode/bg/searchNode");
          this.editBox = this.find("filtrateNode/bg/EditBox", EditBox);
          this.editBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
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
          this.addCardScrollView.SetHandle(this.updateCardItem.bind(this)); // this.addCardScrollView.node.on('select', this.select, this);

          this.back = this.find("showNode/addCardNode/back");
          this.clone_item = this.find("ScrollView/view/content/Cards");
          this.groupNameEditBox = this.find("showNode/addCardNode/groupNameEditBox", EditBox);
          this.groupNameEditBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onGroupNameEditEnd, this);
          this.moreBtn = this.find("showNode/addCardNode/moreBtn", Button);
          this.moreBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.moreNode = this.find("moreNode");
          this.moreNode.on(Input.EventType.TOUCH_END, () => {
            this.moreNode.active = false;
          }, this);
          this.moreNav = this.find("moreNode/bg/moreNav").children.concat();
          this.back.on(Input.EventType.TOUCH_END, () => {
            if (this.selects.length > 0 || this.is_change_name) {
              let id_list = [];

              for (const iterator of this.selects) {
                id_list.push(iterator.id);
              }

              let send_data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                error: Error()
              }), Protocol) : Protocol).setdeckcards();
              send_data.attrs = {
                id: (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cur_id,
                name: this.groupNameEditBox.string,
                type: null
              };
              send_data.cardIds = id_list;
              send_data.deckId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cur_id;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send(send_data);
            } else {
              this.updateCardGroup();
            }
          }, this);
          this.sortNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.sort_type_2 = index;
              this.setCardSort();
            });
          });
          this.moreNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.onMoreBtn(index);
            });
          });
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Check_By_Name === void 0 ? (_reportPossibleCrUseOfEvt_Card_Check_By_Name({
            error: Error()
          }), Evt_Card_Check_By_Name) : Evt_Card_Check_By_Name, this.updateCardsGroupCardData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
            error: Error()
          }), Evt_Card_Group_Update) : Evt_Card_Group_Update, this.updateCardGroup, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Hide_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Hide_Scene({
            error: Error()
          }), Evt_Hide_Scene) : Evt_Hide_Scene, js.getClassName(this)); // Session.Send(Protocol.getplayerdecks)
        }

        flush(data) {
          this.updateCardGroup();
          this.updateAllCardsShow();

          if (data) {
            this.is_open_add_card_group = true;
            this.setHaveCardGroup(data);
          }
        }

        setHaveCardGroup(data) {
          //已有卡组请求该卡组数据
          this.add_or_change = false;
          this.updatePanel();
          this.groupNameEditBox.string = data.name;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id = data.id;
          let getdeckcards = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).getdeckcards();
          getdeckcards.deckId = data.id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(getdeckcards);
        }

        updateCardGroup() {
          this.is_open_add_card_group = false;
          this.updatePanel();
          this.updateAllCardGroup();
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
          this.scroller.content.children.forEach(item => {
            if (item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card)) {
              item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card).setSelect(false);
            }
          });
          let height = this.scroller.getComponent(UITransform).contentSize.height;
          let panel_width = view.getVisibleSize().width;
          let right_width = size_3.width;
          let max_width = panel_width - right_width;
          this.scroller.getComponent(UITransform).setContentSize(size(max_width, height));
          this.scroller.node.children[0].getComponent(Widget).updateAlignment();
          this.scroller.content.getComponent(UITransform).setContentSize(size(max_width, 238));
          let item_width = this.clone_item.getComponent(UITransform).contentSize.width; //最大放几个卡牌

          let num = Math.floor(max_width / item_width); //总剩余的间隙

          let yu = max_width % item_width; //最大间隙

          let jianju = Math.floor(yu / (num - 1)); //最右侧剩余间隙

          let offset = yu % (num - 1); //最小间隙15

          if (jianju < 15) {
            jianju = Math.floor((yu + item_width) / (num - 2));
            offset = (yu + item_width) % (num - 2);
          }

          this.scroller.content.getComponent(Layout).paddingLeft = offset;
          this.scroller.content.getComponent(Layout).spacingX = jianju;
          this.scroller.content.getComponent(Layout).updateLayout();
        }
        /**展示所有卡牌 */


        updateAllCardsShow() {
          this.noneListCont.active = false;
          this.card_list = [];

          for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cards) {
            this.card_list.push(iterator);
          }

          this.setCardSort();

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.battleCards.length > 0) {
            this.setCardsData(this.card_list);
          } else {
            this.noneListCont.active = true;
          }
        }
        /**展示所有卡组 */


        updateAllCardGroup() {
          let data = [];
          data = (_crd && ObjectUtils === void 0 ? (_reportPossibleCrUseOfObjectUtils({
            error: Error()
          }), ObjectUtils) : ObjectUtils).deepCopy((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList);

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList.length < 20) {
            data.unshift("");
          }

          this.cardGroupScrollView.UpdateDatas(data);
        }
        /**设置卡牌 */


        setCardsData(data_list) {
          this.scroller.content.removeAllChildren();

          for (const iterator of data_list) {
            let card = instantiate(this.clone_item);
            card.on(Input.EventType.TOUCH_END, this.onSelectCard, this);
            this.updateCardItem(card, iterator);
            this.scroller.content.addChild(card);
          }

          const layout = this.scroller.content.getComponent(Layout);
          layout.enabled = false;
          layout.enabled = true;
          layout.updateLayout();
        }

        updateCardItem(item, data) {
          let card = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          if (!card) card = item.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          card.SetData(data);
        }
        /**选择卡牌 */


        onSelectCard(event) {
          let item = event.getCurrentTarget();
          let index = item.getSiblingIndex();
          console.log("onSelectCard", index);

          if (this.is_open_add_card_group) {
            //卡组打开卡牌加入或删除卡组
            let cards = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            let is_select = cards.getSelectState();

            if (this.selects.length >= 12 && !is_select) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("超出上限");
              return;
            }

            cards.setSelect(!is_select);

            if (!is_select) {
              this.selects.push(cards.getData());
            } else {
              this.selects.splice(this.selects.indexOf(cards.getData()), 1);
            }

            this.addCardsGroup();
          } else {
            console.log("打开展示界面");
          }
        }

        addCardsGroup() {
          let data = this.setCurCardGroupCardList(this.selects);
          ;
          this.addCardScrollView.UpdateDatas(data);
        }
        /**设置卡组 */


        updateCardGroupItem(item, data) {
          let card_group_item = item.getComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem);
          if (!card_group_item) card_group_item = item.addComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem);
          card_group_item.SetData(data);
        }
        /**选择卡组 */


        onCardGroupSelect(index, item) {
          let data = item.getComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem).getData();
          console.log("onCardGroupSelect", data, typeof data);
          /**添加卡组 */

          this.is_open_add_card_group = true;
          this.is_change_name = false;

          if (typeof data == "string") {
            this.updatePanel();
            let count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList.length + 1;
            this.groupNameEditBox.string = "自动-卡组" + count;
            let card_data = this.setCurCardGroupCardList([]);
            this.addCardScrollView.UpdateDatas(card_data);
            this.add_or_change = true;

            if (this.add_or_change) {
              let add = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                error: Error()
              }), Protocol) : Protocol).setdeckattrs();
              add.attrs = {
                id: null,
                name: this.groupNameEditBox.string,
                type: null
              };
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send(add);
            }
          } else {
            //已有卡组请求该卡组数据
            // this.add_or_change = false;
            // this.updatePanel();
            // this.groupNameEditBox.string = data.name
            // PlayerData.cur_id = data.id;
            // let getdeckcards = new Protocol.getdeckcards();
            // getdeckcards.deckId = data.id;
            // Session.Send(getdeckcards);
            this.setHaveCardGroup(data);
          }
        }
        /**展示卡组中卡牌 */


        updateCardsGroupCardData(data) {
          console.log("data", data);
          let list = [];

          for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              const element = data[key];
              list.push(element);
            }
          }

          list.sort((a, b) => {
            let a_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId).Cost;
            let b_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId).Cost;
            return a_cost - b_cost;
          });
          let data_list = this.setCurCardGroupCardList(list);
          this.addCardScrollView.UpdateDatas(data_list);
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

        onClick(btn) {
          let name = btn.node.name;
          console.log(name);

          switch (name) {
            case "filtrateBtn":
              this.filtrateNode.active = true;
              this.filtrateBtn.node.getChildByName("close").active = false;
              this.filtrateBtn.node.getChildByName("open").active = true;
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
              this.sort_type_1 = this.sort_type_1 == CardSotrType1.Up ? CardSotrType1.Down : CardSotrType1.Up;
              this.setCardSort();
              break;

            case "complete":
              this.filtrateNode.active = false;
              this.filtrateBtn.node.getChildByName("close").active = true;
              this.filtrateBtn.node.getChildByName("open").active = false;
              break;

            case "cancel":
              this.setCardSort();
              break;

            case "moreBtn":
              this.moreNode.active = true;
              break;

            default:
              break;
          }
        }

        onMoreBtn(index) {
          switch (index) {
            case MoreType.del_card:
              let delete_data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                error: Error()
              }), Protocol) : Protocol).deletedeck();
              delete_data.deckId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cur_id;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send(delete_data);
              break;

            case MoreType.shard:
              break;

            case MoreType.copy:
              break;

            case MoreType.add:
              break;

            case MoreType.inquiry:
              break;

            default:
              break;
          }

          this.setCardsData(this.card_list);
        }

        onGroupNameEditEnd() {
          this.is_change_name = true;
        } //——————————————————————————————————————————————————————————————————排序相关————————————————————————————————————————


        setCardSort() {
          switch (this.sort_type_2) {
            case CardSotrType2.Name:
              this.getNameSort();
              break;

            case CardSotrType2.Cost:
              this.getCostSort();
              break;

            case CardSotrType2.Power:
              this.getPowerSort();
              break;

            case CardSotrType2.New:
              this.getNewSort();
              break;

            case CardSotrType2.Quality:
              this.getQulitySort();
              break;

            case CardSotrType2.UpLevel:
              this.getCanUpSort();
              break;

            default:
              break;
          }

          this.setCardsData(this.card_list);
        }
        /**名字排序 */


        getNameSort() {
          this.card_list.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (this.sort_type_1 == CardSotrType1.Up) {
              if (a_data.CardName == b_data.CardName) {
                return this.defaultSort(a_data, b_data);
              }

              return a_data.CardName.localeCompare(b_data.CardName);
            } else {
              if (a_data.CardName == b_data.CardName) {
                return this.defaultSort(a_data, b_data);
              }

              return b_data.CardName.localeCompare(a_data.CardName);
            }
          });
        }
        /**能量排序 */


        getCostSort() {
          this.card_list.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);
            return this.defaultSort(a_data, b_data);
          });
        }
        /**战力排序 */


        getPowerSort() {
          this.card_list.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (this.sort_type_1 == CardSotrType1.Up) {
              if (a_data.Power == b_data.Power) {
                if (a_data.Cost == b_data.Cost) {
                  return a_data.ID - b_data.ID;
                }

                return a_data.Cost - b_data.Cost;
              }

              return a_data.Power - b_data.Power;
            } else {
              if (a_data.Power == b_data.Power) {
                if (a_data.Cost == b_data.Cost) {
                  return b_data.ID - a_data.ID;
                }

                return b_data.Cost - a_data.Cost;
              }

              return b_data.Power - a_data.Power;
            }
          });
        }
        /**最新排序 */


        getNewSort() {
          this.card_list.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (this.sort_type_1 == CardSotrType1.Up) {
              if (a_data.CardName == b_data.CardName) {
                return this.defaultSort(a_data, b_data);
              }

              return a_data.CardName.localeCompare(b_data.CardName);
            } else {
              if (a_data.CardName == b_data.CardName) {
                return this.defaultSort(a_data, b_data);
              }

              return b_data.CardName.localeCompare(a_data.CardName);
            }
          });
        }
        /**品质排序 */


        getQulitySort() {
          this.card_list.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (this.sort_type_1 == CardSotrType1.Up) {
              if (a.quality == b.quality) {
                return this.defaultSort(a_data, b_data);
              }

              return a.quality - b.quality;
            } else {
              if (a.quality == b.quality) {
                return this.defaultSort(a_data, b_data);
              }

              return b.quality - a.quality;
            }
          });
        }
        /**可升级排序 */


        getCanUpSort() {}
        /**默认规则 */


        defaultSort(a, b) {
          if (this.sort_type_1 == CardSotrType1.Up) {
            if (a.Cost == b.Cost) {
              if (a.Power == b.Power) {
                return a.ID - b.ID;
              }

              return a.Power - b.Power;
            }

            return a.Cost - b.Cost;
          } else {
            if (a.Cost == b.Cost) {
              if (a.Power == b.Power) {
                return b.ID - a.ID;
              }

              return b.Power - a.Power;
            }

            return b.Cost - a.Cost;
          }
        } //——————————————————————————————————————————————————————————————————————筛选相关————————————————————————————————————————————————————————


        onEditEnd() {
          if (this.editBox.string) {
            this.curSearchStr = this.editBox.string;
            this.searchStrList.unshift(this.editBox.string);

            if (this.searchStrList.length > 4) {
              this.searchStrList.splice(4, 1);
            }

            this.searchNode.children.forEach(item => {
              item.children[0].getComponent(Label).string = this.searchStrList[item.getSiblingIndex()];
            });
            let card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("Card");

            for (const key in card_cfg) {
              if (Object.hasOwnProperty.call(card_cfg, key)) {
                const iterator = card_cfg[key];

                if (iterator.CardName.includes(this.editBox.string) || iterator.SkillDesc.includes(this.editBox.string)) {
                  this.card_list.forEach(item => {
                    if (item.cardId == iterator.ID) {
                      this.search_card_list.push(item);
                    }
                  });
                }
              }
            }

            this.setCardsData(this.search_card_list);
          }
        }

        onHide(...args) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Show_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Show_Scene({
            error: Error()
          }), Evt_Show_Scene) : Evt_Show_Scene, js.getClassByName(this));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37698f1f698b4028f720cb7b4ef3bf9d9f71297e.js.map