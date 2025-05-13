System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, ShopLuckyPage, ShopDayPage, EventMgr, Evt_Change_Scene_Bgm, Evt_Currency_Updtae, Evt_Hide_Scene, Evt_Item_Change, Evt_Show_Scene, ShopTabBtnItem, ShopWeekPage, Session, ShopTempPage, Panel, AutoScroller, CfgMgr, ShopGroupId, ShopType, BeforeGameUtils, ItemUtil, ConsumeItem, ConsumeNumFormatType, Req, Route, ShopPanel1, _crd;

  function _reportPossibleCrUseOfShopLuckyPage(extras) {
    _reporterNs.report("ShopLuckyPage", "./ShopLuckyPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopDayPage(extras) {
    _reporterNs.report("ShopDayPage", "./ShopDayPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Change_Scene_Bgm(extras) {
    _reporterNs.report("Evt_Change_Scene_Bgm", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Currency_Updtae(extras) {
    _reporterNs.report("Evt_Currency_Updtae", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Hide_Scene(extras) {
    _reporterNs.report("Evt_Hide_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Show_Scene(extras) {
    _reporterNs.report("Evt_Show_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopTabBtnItem(extras) {
    _reporterNs.report("ShopTabBtnItem", "./ShopTabBtnItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopBasePage(extras) {
    _reporterNs.report("ShopBasePage", "./ShopPageBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopWeekPage(extras) {
    _reporterNs.report("ShopWeekPage", "./ShopWeekPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopTempPage(extras) {
    _reporterNs.report("ShopTempPage", "./ShopTempPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopGroupId(extras) {
    _reporterNs.report("ShopGroupId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopType(extras) {
    _reporterNs.report("ShopType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopGroup(extras) {
    _reporterNs.report("StdShopGroup", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopIndex(extras) {
    _reporterNs.report("StdShopIndex", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "../../utils/BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumeItem(extras) {
    _reporterNs.report("ConsumeItem", "../common/ConsumeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumeNumFormatType(extras) {
    _reporterNs.report("ConsumeNumFormatType", "../common/ConsumeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  _export("ShopPanel1", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      ShopLuckyPage = _unresolved_2.ShopLuckyPage;
    }, function (_unresolved_3) {
      ShopDayPage = _unresolved_3.ShopDayPage;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_Change_Scene_Bgm = _unresolved_4.Evt_Change_Scene_Bgm;
      Evt_Currency_Updtae = _unresolved_4.Evt_Currency_Updtae;
      Evt_Hide_Scene = _unresolved_4.Evt_Hide_Scene;
      Evt_Item_Change = _unresolved_4.Evt_Item_Change;
      Evt_Show_Scene = _unresolved_4.Evt_Show_Scene;
    }, function (_unresolved_5) {
      ShopTabBtnItem = _unresolved_5.ShopTabBtnItem;
    }, function (_unresolved_6) {
      ShopWeekPage = _unresolved_6.ShopWeekPage;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }, function (_unresolved_8) {
      ShopTempPage = _unresolved_8.ShopTempPage;
    }, function (_unresolved_9) {
      Panel = _unresolved_9.Panel;
    }, function (_unresolved_10) {
      AutoScroller = _unresolved_10.AutoScroller;
    }, function (_unresolved_11) {
      CfgMgr = _unresolved_11.CfgMgr;
      ShopGroupId = _unresolved_11.ShopGroupId;
      ShopType = _unresolved_11.ShopType;
    }, function (_unresolved_12) {
      BeforeGameUtils = _unresolved_12.BeforeGameUtils;
    }, function (_unresolved_13) {
      ItemUtil = _unresolved_13.ItemUtil;
    }, function (_unresolved_14) {
      ConsumeItem = _unresolved_14.ConsumeItem;
      ConsumeNumFormatType = _unresolved_14.ConsumeNumFormatType;
    }, function (_unresolved_15) {
      Req = _unresolved_15.Req;
      Route = _unresolved_15.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f18dD7AyNNF6UEIX/gy+h4", "ShopPanel1", undefined);

      __checkObsolete__(['Node', 'Toggle', 'js']);

      _export("ShopPanel1", ShopPanel1 = class ShopPanel1 extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/shop/ShopPanel1";
          this.haveItemList = void 0;
          this.luckyPage = void 0;
          this.dayPage = void 0;
          this.weekPage = void 0;
          this.tempPage = void 0;
          this.tabBtnList = void 0;
          this.tabDatas = void 0;
          this.curTabIndex = void 0;
          this.shopPageInfo = void 0;
          //商城组信息（包含商城页签）
          this.ShopGroupInfo = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj( //基础商店
          (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
            error: Error()
          }), ShopGroupId) : ShopGroupId).BaseShop, [{
            ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
              error: Error()
            }), ShopGroupId) : ShopGroupId).BaseShop,
            ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
              error: Error()
            }), ShopType) : ShopType).LuckyShop,
            TabSort: 0,
            ShopName: "抽奖商城"
          }, {
            ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
              error: Error()
            }), ShopGroupId) : ShopGroupId).BaseShop,
            ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
              error: Error()
            }), ShopType) : ShopType).DayShop,
            TabSort: 0,
            ShopName: "每日商城"
          }, {
            ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
              error: Error()
            }), ShopGroupId) : ShopGroupId).BaseShop,
            ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
              error: Error()
            }), ShopType) : ShopType).WeekShop,
            TabSort: 0,
            ShopName: "特殊商城"
          }, {
            ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
              error: Error()
            }), ShopGroupId) : ShopGroupId).BaseShop,
            ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
              error: Error()
            }), ShopType) : ShopType).TempShop,
            TabSort: 0,
            ShopName: "临时商店"
          }]);
        }

        onLoad() {
          this.haveItemList = this.find("haveItemList", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.haveItemList.SetHandle(this.updateHaveItem.bind(this));
          this.tabBtnList = this.find("tabBtnList", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.tabBtnList.SetHandle(this.updateTabBtnItem.bind(this));
          this.tabBtnList.node.on('select', this.onTabBtnSelect, this);
          this.luckyPage = this.node.getChildByName("luckyPage").addComponent(_crd && ShopLuckyPage === void 0 ? (_reportPossibleCrUseOfShopLuckyPage({
            error: Error()
          }), ShopLuckyPage) : ShopLuckyPage);
          this.luckyPage.Hide();
          this.dayPage = this.node.getChildByName("dayPage").addComponent(_crd && ShopDayPage === void 0 ? (_reportPossibleCrUseOfShopDayPage({
            error: Error()
          }), ShopDayPage) : ShopDayPage);
          this.dayPage.onHide();
          this.weekPage = this.node.getChildByName("weekPage").addComponent(_crd && ShopWeekPage === void 0 ? (_reportPossibleCrUseOfShopWeekPage({
            error: Error()
          }), ShopWeekPage) : ShopWeekPage);
          this.weekPage.onHide();
          this.tempPage = this.node.getChildByName("tempPage").addComponent(_crd && ShopTempPage === void 0 ? (_reportPossibleCrUseOfShopTempPage({
            error: Error()
          }), ShopTempPage) : ShopTempPage);
          this.tempPage.onHide();
          this.shopPageInfo = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj((_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
            error: Error()
          }), ShopType) : ShopType).TempShop, this.tempPage, (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
            error: Error()
          }), ShopType) : ShopType).LuckyShop, this.luckyPage, (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
            error: Error()
          }), ShopType) : ShopType).DayShop, this.dayPage, (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
            error: Error()
          }), ShopType) : ShopType).WeekShop, this.weekPage);
          this.CloseBy("backBtn");
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Hide_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Hide_Scene({
            error: Error()
          }), Evt_Hide_Scene) : Evt_Hide_Scene, js.getClassName(this));
          let shop_index = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["shop.protocol.getindex"]();
          shop_index.shopIndexId = null;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.getindex"], shop_index); // EventMgr.emit(Evt_Change_Scene_Bgm, SceneBgmId.SceneBgm_6); 

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Currency_Updtae === void 0 ? (_reportPossibleCrUseOfEvt_Currency_Updtae({
            error: Error()
          }), Evt_Currency_Updtae) : Evt_Currency_Updtae, this.onCurrencyUpdate, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        onHide(...args) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Show_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Show_Scene({
            error: Error()
          }), Evt_Show_Scene) : Evt_Show_Scene, js.getClassByName(this));
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Change_Scene_Bgm === void 0 ? (_reportPossibleCrUseOfEvt_Change_Scene_Bgm({
            error: Error()
          }), Evt_Change_Scene_Bgm) : Evt_Change_Scene_Bgm);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Currency_Updtae === void 0 ? (_reportPossibleCrUseOfEvt_Currency_Updtae({
            error: Error()
          }), Evt_Currency_Updtae) : Evt_Currency_Updtae, this.onCurrencyUpdate, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        async flush(shopGroupId) {
          this.curTabIndex = -1;
          let showShopList = [];
          let defShowList = this.ShopGroupInfo[shopGroupId];
          let stdShopGroup;
          let stdShopIndex;

          for (let index = 0; index < defShowList.length; index++) {
            stdShopGroup = defShowList[index];
            stdShopIndex = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetShopIndex(stdShopGroup.ShopGroupId, stdShopGroup.ShopType);

            if (stdShopIndex && stdShopIndex.SystemOpen) {
              var _stdShopIndex$TabSort;

              stdShopGroup.TabSort = (_stdShopIndex$TabSort = stdShopIndex.TabSort) != null ? _stdShopIndex$TabSort : 0;
              showShopList.push(stdShopGroup);
            }
          }

          showShopList.sort((a, b) => {
            return a.TabSort - b.TabSort;
          });
          this.tabDatas = showShopList;
          this.tabBtnList.UpdateDatas(this.tabDatas);
          this.tabBtnList.SelectFirst(0);
        }

        update(dt) {}

        onItemChange() {
          this.updateHave();
        }

        onCurrencyUpdate() {
          this.updateHave();
        }

        updateHave() {
          let haveItems = [];
          let tabData = this.tabDatas[this.curTabIndex];
          let stdShopIndex = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetShopIndex(tabData.ShopGroupId, tabData.ShopType);

          if (stdShopIndex) {
            haveItems = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).GetSThingList(stdShopIndex.MoneyType, stdShopIndex.MoneyID);
          }

          this.haveItemList.UpdateDatas(haveItems);
        }

        updateTabSelect() {
          let shopType;
          let shopBasePage;
          let tabData = this.tabDatas[this.curTabIndex];

          for (let key in this.shopPageInfo) {
            shopType = Number(key);
            shopBasePage = this.shopPageInfo[key];

            if (shopType == tabData.ShopType) {
              shopBasePage.onShow();
              shopBasePage.SetData(tabData);
            } else {
              shopBasePage.onHide();
            }
          }

          this.updateHave();
        }

        updateHaveItem(item, data) {
          let consumeItem = item.getComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          if (!consumeItem) consumeItem = item.addComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          consumeItem.numFormatType = (_crd && ConsumeNumFormatType === void 0 ? (_reportPossibleCrUseOfConsumeNumFormatType({
            error: Error()
          }), ConsumeNumFormatType) : ConsumeNumFormatType).Have;
          consumeItem.SetData(data);
        }

        updateTabBtnItem(item, data, index) {
          let tabBtnItem = item.getComponent(_crd && ShopTabBtnItem === void 0 ? (_reportPossibleCrUseOfShopTabBtnItem({
            error: Error()
          }), ShopTabBtnItem) : ShopTabBtnItem);
          if (!tabBtnItem) tabBtnItem = item.addComponent(_crd && ShopTabBtnItem === void 0 ? (_reportPossibleCrUseOfShopTabBtnItem({
            error: Error()
          }), ShopTabBtnItem) : ShopTabBtnItem);
          let select = item.getChildByName("selectCont");
          select.active = index == this.curTabIndex;
          tabBtnItem.SetData(data);
        }

        onTabBtnSelect(index, item) {
          if (this.curTabIndex == index) return;
          this.resetSelect();
          let select = item.getChildByName("selectCont");
          select.active = true;
          this.curTabIndex = index;
          this.updateTabSelect();
        }

        resetSelect() {
          let node;
          let itemIndex;
          let select;

          for (let index = 0; index < this.tabBtnList.children.length; index++) {
            node = this.tabBtnList.children[index];
            itemIndex = node["$$index"];

            if (itemIndex == this.curTabIndex) {
              select = node.getChildByName("selectCont");
              select.active = false;
              break;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6cc964bf9ddcd011cc9400a665f3eb80e7b7a07f.js.map