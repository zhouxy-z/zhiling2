System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Input, Label, Layout, ScrollView, Sprite, SpriteFrame, Toggle, Widget, instantiate, js, Session, TradePanelItem, EventMgr, Evt_Hide_Scene, Evt_Show_Scene, MsgPanel, Panel, AutoScroller, PlayerData, CfgMgr, ThingTypeName, SOrderType, Req, Route, ResMgr, Goto, TradePanel, _crd, GroupType;

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradePanelItem(extras) {
    _reporterNs.report("TradePanelItem", "./item/TradePanelItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Hide_Scene(extras) {
    _reporterNs.report("Evt_Hide_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Show_Scene(extras) {
    _reporterNs.report("Evt_Show_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketCard(extras) {
    _reporterNs.report("StdMarketCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketChoose(extras) {
    _reporterNs.report("StdMarketChoose", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketItem(extras) {
    _reporterNs.report("StdMarketItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOrderType(extras) {
    _reporterNs.report("SOrderType", "../player/PlayerStruct", _context.meta, extras);
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

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  _export("TradePanel", void 0);

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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      Widget = _cc.Widget;
      instantiate = _cc.instantiate;
      js = _cc.js;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      TradePanelItem = _unresolved_3.TradePanelItem;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_Hide_Scene = _unresolved_4.Evt_Hide_Scene;
      Evt_Show_Scene = _unresolved_4.Evt_Show_Scene;
    }, function (_unresolved_5) {
      MsgPanel = _unresolved_5.MsgPanel;
    }, function (_unresolved_6) {
      Panel = _unresolved_6.Panel;
    }, function (_unresolved_7) {
      AutoScroller = _unresolved_7.AutoScroller;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      CfgMgr = _unresolved_9.CfgMgr;
      ThingTypeName = _unresolved_9.ThingTypeName;
    }, function (_unresolved_10) {
      SOrderType = _unresolved_10.SOrderType;
    }, function (_unresolved_11) {
      Req = _unresolved_11.Req;
      Route = _unresolved_11.Route;
    }, function (_unresolved_12) {
      ResMgr = _unresolved_12.ResMgr;
    }, function (_unresolved_13) {
      Goto = _unresolved_13.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37e30ZsvNBIhLUvIF3xub0b", "TradePanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'UITransform', 'Widget', 'instantiate', 'js']);

      /*功能页面类型  buy兑换大厅， sell求购大厅， order 上架管理*/
      _export("GroupType", GroupType = /*#__PURE__*/function (GroupType) {
        GroupType[GroupType["Buy"] = 0] = "Buy";
        GroupType[GroupType["Sell"] = 1] = "Sell";
        GroupType[GroupType["Order"] = 2] = "Order";
        return GroupType;
      }({}));

      _export("TradePanel", TradePanel = class TradePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/Trade/TradePanel";
          this.tradeBanner = void 0;
          this.localNode = void 0;
          this.toggleOrder = null;
          this.btnSort = null;
          this.scrollItem = null;
          this.scrollOrder = null;
          this.toggleGroup = null;
          this.selectType = (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).BUY;

          /**selectGroup 代表不同的功能页0交易大厅，1求购大厅，2上架管理 */
          this.selectGroup = 0;
          this.pageLabel = null;
          this.left = null;
          this.right = null;
          this.heleBtn = void 0;
          this.noneListCont = void 0;
          this.orderAdd = void 0;
          this.combox_item_bg = void 0;
          this.content = void 0;
          this.combox_item1 = void 0;
          this.combox_item2 = void 0;
          this.item_3 = void 0;
          this.serch = null;
          this.pageSize = 20;
          this.curPage = 1;
          this.maxPage = 1;
          this.start_id = "";
          this.select_thing_type = void 0;
          this.clone_item = void 0;

          /**能否切换道具（道具有刷新时间限制3是） */
          this.is_can_change = true;
          this.time = 0;

          /**卡牌排序类型 */
          this.sortType = "";

          /**道具卡牌分组类型 */
          this.groupType = void 0;

          /**选择的道具或卡牌id */
          this.select_id = void 0;

          /**卡牌筛选的参数 */
          this.searchCardData = void 0;

          /**订单最大数量 */
          this.max_order_num = 20;

          /**自己的订单数量 */
          this.my_order_num = 0;
        }

        static get ins() {
          return this.$instance;
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.tradeBanner = this.find("tradeBanner", Sprite);
          this.noneListCont = this.find("noneListCont");
          this.localNode = this.find("Main/localNode");
          this.toggleOrder = this.find("Main/localNode/ToggleOrder");
          this.btnSort = this.find("Main/btnSort");
          this.scrollItem = this.find("Main/ScrollView", ScrollView);
          this.scrollOrder = this.find("Main/ScrollViewOrder", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.toggleGroup = this.find("Main/ToggleGroup");
          this.pageLabel = this.find("Main/pageBg/Label", Label);
          this.left = this.find("Main/pageBg/left");
          this.right = this.find("Main/pageBg/right");
          this.heleBtn = this.find("Bg/heleBtn");
          this.clone_item = this.find("Main/ScrollView/view/content/item");
          this.combox_item_bg = this.find("combox_item/combox_item_bg");
          this.content = this.find("combox_item/combox_item_bg/ScrollView/view/content");
          this.combox_item1 = this.find("combox_item/combox_item1");
          this.combox_item2 = this.find("combox_item/combox_item2");
          this.item_3 = this.find("combox_item/item_3");
          this.serch = this.find("Main/serch");
          this.orderAdd = this.find("Main/orderAdd");
          this.onBtnEvent();
        }

        onBtnEvent() {
          this.serch.getChildByName("EditBox").on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
          this.btnSort.on(Input.EventType.TOUCH_END, () => {
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("SortPanel", this.select_thing_type, this.sortType, this.searchCardData);
          }, this); //功能单选

          this.toggleGroup.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.onSetScrollGroupData(index);
            });
          }); //订单单选

          this.toggleOrder.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.onSetScrollItemData(index);
            });
          });
          this.left.on(Input.EventType.TOUCH_END, () => {
            if (this.curPage > 1) {
              this.curPage--;
              this.start_id = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).startId[this.curPage - 1];
              this.SendSortOrSerch();
            } else {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("已是第一页");
            }
          });
          this.right.on(Input.EventType.TOUCH_END, () => {
            if (this.curPage < this.maxPage) {
              this.curPage++;
              this.start_id = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).startId[this.curPage - 1];
              this.SendSortOrSerch();
            } else {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("已是最后一页");
            }
          });
          this.orderAdd.on(Input.EventType.TOUCH_END, this.AddOrder, this);
          this.scrollOrder.SetHandle(this.updateOrderItem.bind(this));
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Hide_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Hide_Scene({
            error: Error()
          }), Evt_Hide_Scene) : Evt_Hide_Scene, js.getClassName(this));
        }

        flush() {
          this.selectType = 0;
          this.initSortListData();
          this.onEditBegan();
          this.reset();
        }
        /**重置UI和数据 */


        reset() {
          this.scrollItem.content.removeAllChildren();
          this.scrollOrder.UpdateDatas([]);
          this.onSetScrollGroupData(0);
        }
        /**
         * 页面 交易大厅", "求购大厅", "上架管理 页签切换
         * @param index 
         */


        onSetScrollGroupData(index) {
          this.pageLabel.string = "1/1";
          this.curPage = 1;
          this.maxPage = 1;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).startId = [""];
          this.start_id = "";
          this.noneListCont.active = false;
          this.selectGroup = index;
          this.selectType = index != GroupType.Order ? index : 0;
          this.btnSort.active = this.selectGroup != GroupType.Order;
          this.combox_item_bg.active = this.selectGroup != GroupType.Order;
          this.serch.active = this.selectGroup != GroupType.Order;
          this.left.parent.active = this.selectGroup != GroupType.Order;
          this.localNode.active = this.selectGroup == GroupType.Order;
          this.orderAdd.active = this.selectGroup == GroupType.Order;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/bg/trade_banner_" + index + "/spriteFrame", SpriteFrame, res => {
            this.tradeBanner.spriteFrame = res;
          });
          this.select_thing_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item;
          this.select_id = null;
          this.groupType = null;
          this.removeFiltrateOrSort();
          this.setScrollView();
          this.SendSortOrSerch();
        }
        /**设置当前展示的列表以及页签状态 */


        setScrollView() {
          if (this.selectGroup == 2) {
            //订单页面
            this.scrollOrder.node.active = true;
            this.scrollItem.node.active = false;
            this.toggleOrder.children.forEach((node, index) => {
              if (index == this.selectType) {
                node.getComponent(Toggle).isChecked = true;
              }
            });
          } else {
            //求购购买页面
            this.scrollOrder.node.active = false;
            this.scrollItem.node.active = true;
          }

          this.toggleGroup.children.forEach((node, i) => {
            if (i == this.selectGroup) {
              node.getComponent(Toggle).isChecked = true;
            }
          });
        }
        /**筛选排序 */


        SendSortOrSerch() {
          if (this.selectGroup == GroupType.Order) {
            this.SendOrderType();
          } else {
            this.SendBuyOrSellType();
          }
        }
        /**查询自己的卖或买的订单 */


        SendOrderType() {
          var orderType = this.selectType == 0 ? "sell" : "buy";
          var item_data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["market.protocol.getmakeritemorders"]();
          item_data.orderType = orderType;
          item_data.itemId = null;
          item_data.itemType = null;
          item_data.limit = this.max_order_num;
          item_data.playerId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId;
          item_data.status = "active";
          item_data.start = "";
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.getmakeritemorders"], item_data);
          var card_data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["market.protocol.getcardorders"]();
          card_data.orderType = orderType;
          card_data.playerDig = 0;
          card_data.limit = this.max_order_num;
          card_data.playerId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId;
          card_data.status = "active";
          card_data.start = "";
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["market.protocol.getcardorders"], card_data);
        }
        /**查询所有的买或卖以及筛选订单 */


        SendBuyOrSellType(searchCardData) {
          if (this.select_thing_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item) {
            var orderType = this.selectType == 0 ? "sell" : "buy";
            var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["market.protocol.searchitemorders"]();
            data.orderType = orderType;
            data.itemId = this.select_id;
            data.itemType = this.groupType;
            data.limit = this.pageSize;
            data.sort = this.sortType;
            data.start = this.start_id;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["market.protocol.searchitemorders"], data);
          } else if (this.select_thing_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).BattleCard) {
            var card_rarity = null;
            var quality = null;

            if (searchCardData) {
              card_rarity = searchCardData.card_rarity;
              quality = searchCardData.quality;
            }

            var _orderType = this.selectType == 0 ? "sell" : "buy";

            var _data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["market.protocol.searchcardorders"]();

            _data.orderType = _orderType;
            _data.cardId = this.select_id;
            _data.group = this.groupType;
            _data.cardRarity = card_rarity;
            _data.quality = quality;
            _data.limit = this.pageSize;
            _data.sort = this.sortType;
            _data.start = this.start_id;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["market.protocol.searchcardorders"], _data);
          }
        }
        /** 在上架管理中代表订单种类 （头顶小页签）*/


        onSetScrollItemData(index) {
          this.selectType = index;
          this.SendSortOrSerch();
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Show_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Show_Scene({
            error: Error()
          }), Evt_Show_Scene) : Evt_Show_Scene, js.getClassByName(this));
        }
        /**刷新数据 */


        onGetViewData() {
          //计算当前页是否是最后一页
          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).total) {
            this.maxPage = Math.ceil((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).total / this.pageSize);
          }

          this.pageLabel.string = this.curPage + "/" + (this.maxPage || 1);
          var datas = [];
          datas = this.select_thing_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item ? (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).tradeViewData : (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).tradeCardViewData;
          this.noneListCont.active = false;
          this.scrollItem.node.active = true;

          if (!datas || datas.length == 0) {
            this.noneListCont.active = true;
            this.scrollItem.node.active = false;
            return;
          }

          var item_num = this.scrollItem.content.children.length;

          if (datas.length > item_num) {
            this.updateConten(datas);
            var no_num = datas.length - item_num;

            for (var index = 0; index < no_num; index++) {
              var item = instantiate(this.clone_item);
              this.updateItem(item, datas[item_num + index]);
              this.scrollItem.content.addChild(item);
            }
          } else if (datas.length < item_num) {
            var delet_item_list = this.scrollItem.content.children.slice(datas.length - 1, item_num - 1);

            for (var _index = 0; _index < delet_item_list.length; _index++) {
              var element = delet_item_list[_index];
              this.scrollItem.content.removeChild(element);
            }

            this.updateConten(datas);
          } else {
            this.updateConten(datas);
          }

          this.scrollItem.scrollToLeft();
        }

        updateConten(datas) {
          this.scrollItem.content.children.forEach((item, index) => {
            this.updateItem(item, datas[index]);
          });
        }
        /**刷新自己的订单数据 */


        updateMyOrderData() {
          var my_order_list = [];
          my_order_list = my_order_list.concat(...(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).tradeCardViewData);
          my_order_list = my_order_list.concat(...(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).tradeViewData);
          this.my_order_num = my_order_list.length;
          var icon = this.selectType == 0 ? "sellOrderBtn" : "buyOrderBtn";
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/trade/" + icon + "/spriteFrame", SpriteFrame, res => {
            this.orderAdd.getComponent(Sprite).spriteFrame = res;
          });
          this.scrollOrder.UpdateDatas(my_order_list);
          this.scrollOrder.ScrollToHead();
        }
        /**
         * 交易道具角色item
         * @param item 
         * @param data 
         */


        updateItem(item, data, index) {
          var itemScropt = item.getComponent(_crd && TradePanelItem === void 0 ? (_reportPossibleCrUseOfTradePanelItem({
            error: Error()
          }), TradePanelItem) : TradePanelItem);
          itemScropt = itemScropt ? itemScropt : item.addComponent(_crd && TradePanelItem === void 0 ? (_reportPossibleCrUseOfTradePanelItem({
            error: Error()
          }), TradePanelItem) : TradePanelItem);
          itemScropt.SetData(data, this.selectType, this.select_thing_type);
        }
        /**
         * 订单道具角色item
         * @param item 
         * @param data 
         */


        updateOrderItem(item, data) {
          var itemScropt = item.getComponent(_crd && TradePanelItem === void 0 ? (_reportPossibleCrUseOfTradePanelItem({
            error: Error()
          }), TradePanelItem) : TradePanelItem);
          itemScropt = itemScropt ? itemScropt : item.addComponent(_crd && TradePanelItem === void 0 ? (_reportPossibleCrUseOfTradePanelItem({
            error: Error()
          }), TradePanelItem) : TradePanelItem);
          itemScropt.SetOrderData(data, this.selectType);
        }

        AddOrder() {
          if (this.my_order_num >= this.max_order_num) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("已到达上架上限");
          }

          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)("TradeCreateOrderPanel", this.selectType);
        } //-------------------------------------物品查询筛选相关----------------------
        //初始化筛选列表数据


        initSortListData() {
          var _this = this;

          //获取商品种类
          this.content.removeAllChildren();
          var all_tag_name = ["道具", "卡牌"];
          var all_tag_data = [];

          var _loop = function _loop() {
            var bourseData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetTradeAllCfgData(index);
            var data = {
              tag: index,
              tagData: bourseData,
              tagName: all_tag_name[index]
            };
            all_tag_data.push(data);
            var item = instantiate(_this.combox_item1);
            item.name = "item" + index;
            item.setPosition(0, 0);
            item["bourseData"] = bourseData;
            item["type"] = index;
            item.getChildByPath("layout/input/frame/label").getComponent(Label).string = all_tag_name[index];
            item.getChildByPath("layout/input/frame_select/label").getComponent(Label).string = all_tag_name[index];
            var icon1 = "sheets/trade/icon_" + index + "_1" + "/spriteFrame";
            var icon2 = "sheets/trade/icon_" + index + "_2" + "/spriteFrame";
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(icon1, SpriteFrame, res => {
              item.getChildByPath("layout/input/frame/icon").getComponent(Sprite).spriteFrame = res;
            });
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(icon2, SpriteFrame, res => {
              item.getChildByPath("layout/input/frame_select/icon").getComponent(Sprite).spriteFrame = res;
            });
            item.off(Button.EventType.CLICK, _this.openOneTag.bind(_this), _this);
            item.on(Button.EventType.CLICK, _this.openOneTag.bind(_this), _this);

            _this.content.addChild(item);
          };

          for (var index = 0; index < all_tag_name.length; index++) {
            _loop();
          }

          var first = this.content.children[0].getComponent(Button);
          this.openOneTag(first);
        } //打开1级列表


        openOneTag(e) {
          var item = e.target;
          this.closeGroupList(item);
          var content = item.getChildByPath("layout/content");
          var type = item["type"];
          this.select_id = null;
          this.groupType = null;

          if (type == 0) {
            //道具
            this.select_thing_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item;
            this.removeFiltrateOrSort();
            this.SendSortOrSerch();
          } else if (type == 1) {
            //卡牌
            this.select_thing_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).BattleCard;
            this.removeFiltrateOrSort();
            this.SendSortOrSerch();
          }

          if (content.children.length > 0) {
            content.removeAllChildren();
            item.children.forEach(element => {
              element.getComponent(Layout).updateLayout(true);
            });
            item.getChildByPath("layout/input/frame").active = true;
            item.getChildByPath("layout/input/frame_select").active = false;
            return;
          }

          content.removeAllChildren();
          var bourseData = item["bourseData"]; //根据物品的类别细分到不同的组

          var group_id = [];
          var group_list_data = []; //一级页签下未分组的物品 加到最后

          var no_group_list_data = [];

          for (var index = 0; index < bourseData.length; index++) {
            var element = bourseData[index];

            if (group_id.length > 0) {
              if (element.Group != 0) {
                var i = group_id.indexOf(element.Group);

                if (i == -1) {
                  group_id.push(element.Group);
                  group_list_data.push([]);
                  group_list_data[group_id.length - 1].push(element);
                } else {
                  group_list_data[i].push(element);
                }
              } else {
                no_group_list_data.push(element);
              }
            } else {
              if (element.Group != 0) {
                group_id.push(element.Group);
                group_list_data.push([]);
                group_list_data[group_id.length - 1].push(element);
              } else {
                no_group_list_data.push(element);
              }
            }
          }

          if (no_group_list_data.length > 0) {
            group_list_data.push(no_group_list_data);
          }

          for (var _index2 = 0; _index2 < group_list_data.length; _index2++) {
            var _element = group_list_data[_index2];

            if (_element[0].Group == 0) {
              for (var _index3 = 0; _index3 < _element.length; _index3++) {
                var item3 = _element[_index3];
                var tag_item3 = instantiate(this.item_3);
                tag_item3.name = "item3" + _index3;
                tag_item3.setPosition(0, 0);
                tag_item3["bourseData3"] = item3;
                tag_item3["type"] = type;
                tag_item3.getChildByName("item_name").getComponent(Label).string = item3.Name;
                tag_item3.getChildByPath("item_select/item_name").getComponent(Label).string = item3.Name;
                tag_item3.off(Button.EventType.CLICK, this.setectItemName.bind(this), this);
                tag_item3.on(Button.EventType.CLICK, this.setectItemName.bind(this), this);
                content.addChild(tag_item3);
              }
            } else {
              var tag_item2 = instantiate(this.combox_item2);
              tag_item2.name = "item2" + _index2;
              tag_item2.setPosition(0, 0);
              tag_item2["bourseData2"] = _element;
              tag_item2["type"] = type;
              tag_item2.getChildByPath("layout/input/frame/label").getComponent(Label).string = _element[0].GroupName;
              tag_item2.getChildByPath("layout/input/frame_select/label").getComponent(Label).string = _element[0].GroupName;

              var callBack = item => {
                console.log(this.is_can_change);

                if (!this.is_can_change) {
                  return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                    error: Error()
                  }), MsgPanel) : MsgPanel).Show("点击过快");
                }

                this.openTwoTag(item);
              };

              tag_item2.off(Button.EventType.CLICK, callBack, this);
              tag_item2.on(Button.EventType.CLICK, callBack, this);
              content.addChild(tag_item2);
            }
          }

          item.children.forEach(element => {
            element.getComponent(Layout).updateLayout(true);
          });
        } //打开2级列表


        openTwoTag(e) {
          var item = e.target;
          this.closeGroupList(item, 2);
          var content = item.getChildByPath("layout/content");
          var bourseData = item["bourseData2"];
          var type = item["type"];
          this.select_id = null;
          this.groupType = bourseData[0].Group;

          if (type == 0) {
            //道具
            this.select_thing_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item;
            this.removeFiltrateOrSort();
            this.SendBuyOrSellType();
          } else if (type == 1) {
            //卡牌
            this.select_thing_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).BattleCard;
            this.removeFiltrateOrSort();
            this.SendBuyOrSellType();
            console.log("卡牌");
          }

          if (content.children.length > 0) {
            content.removeAllChildren();
            item.children.forEach(element => {
              element.getComponent(Layout).updateLayout(true);
            });
            item.getChildByPath("layout/input/frame").active = true;
            item.getChildByPath("layout/input/frame_select").active = false;
            return;
          }

          content.removeAllChildren();

          for (var index = 0; index < bourseData.length; index++) {
            var element = bourseData[index];
            var tag_item3 = instantiate(this.item_3);
            tag_item3.setPosition(0, 0);
            tag_item3["bourseData3"] = element;
            tag_item3["type"] = type;
            tag_item3.getChildByName("item_name").getComponent(Label).string = element.Name;
            tag_item3.getChildByPath("item_select/item_name").getComponent(Label).string = element.Name;

            var callBack = item => {
              console.log(this.is_can_change);

              if (!this.is_can_change) {
                return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("点击过快");
              }

              this.setectItemName(item);
            };

            tag_item3.off(Input.EventType.TOUCH_END, callBack, this);
            tag_item3.on(Input.EventType.TOUCH_END, callBack, this);
            content.addChild(tag_item3);
          }

          console.log(content.children, content.children.length);
          item.children.forEach(element => {
            element.getComponent(Layout).updateLayout(true);
          });
        }
        /**选中某个物品 */


        setectItemName(e) {
          var item = e.target;
          item.parent.parent.getChildByPath("input/frame_select").active = false;
          item.parent.parent.getChildByPath("input/frame").active = true;
          var content = item.parent.children;

          for (var index = 0; index < content.length; index++) {
            var element = content[index];

            var _combox_item2 = element.getChildByPath("layout/input/frame_select");

            if (_combox_item2) {
              element.getChildByPath("layout/input/frame_select").active = false;
              element.getChildByPath("layout/input/frame").active = true;
              this.closeTag(element);
            } else {
              element.getChildByName("item_select").active = false;
            }
          }

          var cur_combox_item2 = item.getChildByPath("layout/input/frame_select");

          if (cur_combox_item2) {
            item.getChildByPath("layout/input/frame_select").active = true;
          } else {
            item.getChildByName("item_select").active = true;
          }

          var type = item["type"];

          if (type == 0) {
            //道具
            var bourseData = item["bourseData3"]; //筛选道具

            this.groupType = bourseData.Group;
            this.select_id = bourseData.ItemId;
            this.removeFiltrateOrSort();
            this.SendBuyOrSellType();
          } else if (type == 1) {
            //卡牌
            var _bourseData = item["bourseData3"];
            this.groupType = null;
            this.select_id = _bourseData.CardID;
            console.log("卡牌", _bourseData);
            this.removeFiltrateOrSort();
            this.SendBuyOrSellType();
          }
        } //收起列表


        closeTag(node) {
          var item = node;
          var content = item.getChildByPath("layout/content");
          content.removeAllChildren();
        }
        /**关闭同组下的其它列表 */


        closeGroupList(item, tag) {
          if (tag == 2) {
            //该组的上级标签置灰
            item.parent.parent.getChildByPath("input/frame_select").active = false;
            item.parent.parent.getChildByPath("input/frame").active = true;
          } //关闭同组下的其它列表


          var item_content = item.parent.children;

          for (var index = 0; index < item_content.length; index++) {
            var element = item_content[index];

            var _combox_item2 = element.getChildByPath("layout/input/frame_select");

            if (_combox_item2) {
              element.getChildByPath("layout/input/frame_select").active = false;
              element.getChildByPath("layout/input/frame").active = true;

              if (element.name != item.name) {
                this.closeTag(element);
              }
            } else {
              element.getChildByName("item_select").active = false;
            }
          } //点亮当前标签页


          var cur_combox_item = item.getChildByPath("layout/input/frame_select");

          if (cur_combox_item) {
            item.getChildByPath("layout/input/frame").active = false;
            item.getChildByPath("layout/input/frame_select").active = true;
          } else {
            item.getChildByName("item_select").active = true;
          }
        }

        onEditBegan() {
          //编辑时文本会发生偏移在输入时刷新一次对齐
          this.serch.children.forEach(node => {
            if (node.getComponent(Widget)) {
              node.getComponent(Widget).updateAlignment();
            }
          });
        }
        /**搜索栏事件 */


        onEditEnd() {
          if (this.serch.getComponentInChildren(EditBox).string) {
            var str = this.serch.getComponentInChildren(EditBox).string;
            var item_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("market_item");

            for (var iterator of item_cfg) {
              if (iterator.Name == str) {
                this.groupType = null;
                this.select_id = iterator.ItemId;
                this.select_thing_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                  error: Error()
                }), ThingTypeName) : ThingTypeName).Item;
                this.SendBuyOrSellType();
                this.serch.getComponentInChildren(EditBox).string = "";
                return;
              }
            }

            var card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("market_card");

            for (var _iterator of card_cfg) {
              if (_iterator.Name == str) {
                this.groupType = null;
                this.select_id = _iterator.CardID;
                this.select_thing_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                  error: Error()
                }), ThingTypeName) : ThingTypeName).BattleCard;
                this.SendBuyOrSellType();
                this.serch.getComponentInChildren(EditBox).string = "";
                return;
              }
            }
          }
        }
        /**筛选排序条件 */


        onFiltrateOrSort(filtrat_data, sort_type) {
          this.sortType = sort_type;
          var card_rarity = null;
          var quality = null;

          for (var index = 0; index < filtrat_data.length; index++) {
            var element = filtrat_data[index];

            if (element.Group == 1) {
              card_rarity = element.Type;
            } else if (element.Group == 2) {
              quality = element.Type;
            }
          }

          this.searchCardData = {
            card_rarity: card_rarity,
            quality: quality
          };
          this.SendBuyOrSellType(this.searchCardData);
        }

        removeFiltrateOrSort() {
          this.searchCardData = {
            card_rarity: null,
            quality: null
          };
          this.sortType = "";
        }

        update(dt) {
          if (!this.is_can_change) {
            this.time += dt;

            if (this.time >= 2) {
              this.is_can_change = true;
              this.time = 0;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=337b06babab6fe6c4fc26bb7a80145f4e3e2c030.js.map