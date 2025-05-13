System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, Label, Slider, Sprite, SpriteFrame, Toggle, Tween, UITransform, path, tween, Panel, AutoScroller, BagItem, SOrderType, CfgMgr, ItemType, ThingTypeName, Second, Utils, PlayerData, ResMgr, folder_item, Tips2, Tips, Session, EventMgr, Evt_Item_Change, Req, Route, Card, DateUtils, TopUI, TradeCreateOrderPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOrderType(extras) {
    _reporterNs.report("SOrderType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketCard(extras) {
    _reporterNs.report("StdMarketCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketItem(extras) {
    _reporterNs.report("StdMarketItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips2", "../common/Tips2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips2(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopUI(extras) {
    _reporterNs.report("TopUI", "../main/TopUI", _context.meta, extras);
  }

  _export("TradeCreateOrderPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Input = _cc.Input;
      Label = _cc.Label;
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      Tween = _cc.Tween;
      UITransform = _cc.UITransform;
      path = _cc.path;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      BagItem = _unresolved_4.BagItem;
    }, function (_unresolved_5) {
      SOrderType = _unresolved_5.SOrderType;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
      ItemType = _unresolved_6.ItemType;
      ThingTypeName = _unresolved_6.ThingTypeName;
    }, function (_unresolved_7) {
      Second = _unresolved_7.Second;
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      ResMgr = _unresolved_9.ResMgr;
      folder_item = _unresolved_9.folder_item;
    }, function (_unresolved_10) {
      Tips2 = _unresolved_10.Tips2;
    }, function (_unresolved_11) {
      Tips = _unresolved_11.Tips;
    }, function (_unresolved_12) {
      Session = _unresolved_12.Session;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
      Evt_Item_Change = _unresolved_13.Evt_Item_Change;
    }, function (_unresolved_14) {
      Req = _unresolved_14.Req;
      Route = _unresolved_14.Route;
    }, function (_unresolved_15) {
      Card = _unresolved_15.Card;
    }, function (_unresolved_16) {
      DateUtils = _unresolved_16.DateUtils;
    }, function (_unresolved_17) {
      TopUI = _unresolved_17.TopUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "252a0mV2+xJlosk+8vIk0Dr", "TradeCreateOrderPanel", undefined);

      __checkObsolete__(['Button', 'Input', 'Label', 'Node', 'Slider', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'UITransform', 'Widget', 'instantiate', 'path', 'size', 'sp', 'tween']);

      _export("TradeCreateOrderPanel", TradeCreateOrderPanel = class TradeCreateOrderPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/Trade/TradeCreateOrderPanel";
          this.page = void 0;
          this.page1 = void 0;
          this.scroller1 = void 0;
          this.page2 = void 0;
          this.scroller2 = void 0;
          this.navBtns = void 0;
          this.scroller = void 0;
          this.itemName = void 0;
          this.cost_slider = void 0;
          this.cost_progress = void 0;
          this.cost_consumeNum = void 0;
          this.cost_hasNum = void 0;
          this.num_slider = void 0;
          this.num_consumeNum = void 0;
          this.num_hasNum = void 0;
          this.num_progress = void 0;
          this.description = void 0;
          this.buyNum = void 0;
          this.sellNum = void 0;
          this.cost_num = void 0;
          this.btnCreate = void 0;
          this.buyNode = void 0;
          this.sellNode = void 0;
          this.num_slider_node = void 0;
          this.num_left_btn = void 0;
          this.num_right_btn = void 0;
          this.orderNode = void 0;
          this.noneListCont = void 0;
          this.arry_num = void 0;
          this.btnLabel = void 0;
          this.cdTime = void 0;
          this.sortBtn = void 0;
          this.sortNode = void 0;
          this.sortNav = void 0;
          this.bg = void 0;
          this.iconNode = [];
          this.Data = void 0;
          this.selectData = void 0;
          this.tradeData = void 0;
          //交易商品配置
          this.cost_count = 0;
          this.num_count = 0;
          this.type = void 0;
          this.max_num_count = void 0;
          //最大交易数量；
          this.touchIndex = 0;
          this.touchTime = 0;
          this.select_index = void 0;
          this.sort_type = 0;
          this.data_list = [];
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("layout/closeBtn");
          this.bg = this.find("layout/orderNode/bg");
          this.page1 = this.find("layout/page1");
          this.scroller1 = this.page1.getChildByName("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller1.SetHandle(this.UpdateBagItem.bind(this));
          this.scroller1.node.on('select', this.SelectItem, this);
          this.page2 = this.find("layout/page2");
          this.scroller2 = this.page2.getChildByName("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller2.SetHandle(this.UpdateCardItem.bind(this));
          this.scroller2.node.on('select', this.SelectItem, this);
          this.orderNode = this.find("layout/orderNode");
          this.noneListCont = this.find("layout/noneListCont");
          this.itemName = this.find("layout/orderNode/name", Label);
          this.sellNum = this.find("layout/orderNode/sellNode/sellNum", Label);
          this.cost_num = this.find("layout/orderNode/sellNode/cost_num", Label);
          this.buyNum = this.find("layout/orderNode/buyNode/buyNum", Label);
          this.cost_slider = this.find("layout/orderNode/layout/page1/Slider", Slider);
          this.cost_progress = this.find("layout/orderNode/layout/page1/Slider/progress");
          this.cost_consumeNum = this.find("layout/orderNode/layout/page1/consumeNum", Label);
          this.cost_hasNum = this.find("layout/orderNode/layout/page1/hasNum", Label);
          this.num_slider_node = this.find("layout/orderNode/layout/page2");
          this.num_slider = this.find("layout/orderNode/layout/page2/Slider", Slider);
          this.num_progress = this.find("layout/orderNode/layout/page2/Slider/progress");
          this.num_consumeNum = this.find("layout/orderNode/layout/page2/consumeNum", Label);
          this.num_hasNum = this.find("layout/orderNode/layout/page2/hasNum", Label);
          this.btnCreate = this.find("layout/orderNode/btnCreate", Button);
          this.buyNode = this.find("layout/orderNode/buyNode");
          this.sellNode = this.find("layout/orderNode/sellNode");
          this.arry_num = this.find("layout/orderNode/arryNode/arry_num", Label);
          this.btnLabel = this.find("layout/orderNode/btnCreate/Label", Label);
          this.description = this.find("layout/orderNode/description", Label);
          this.cdTime = this.find("layout/orderNode/time", Label);
          this.sortBtn = this.find("layout/page2/sortBtn");
          this.sortNode = this.find("layout/sortNode");
          this.sortNav = this.find("layout/sortNode/bg/nav").children.concat();
          var icon_1 = this.find("layout/orderNode/sellNode/neddItem");
          var icon_3 = this.find("layout/orderNode/sellNode/neddItem2");
          var icon_4 = this.find("layout/orderNode/buyNode/neddItem");
          this.iconNode.push(icon_1);
          this.iconNode.push(icon_3);
          this.iconNode.push(icon_4);
          this.num_left_btn = this.find("layout/orderNode/layout/page2/left");
          this.num_right_btn = this.find("layout/orderNode/layout/page2/right");
          this.find("layout/orderNode/layout/page1/right").on(Input.EventType.TOUCH_END, this.onAddCost, this);
          this.find("layout/orderNode/layout/page1/left").on(Input.EventType.TOUCH_END, this.onDelCost, this);
          this.find("layout/orderNode/layout/page1/right").on(Input.EventType.TOUCH_CANCEL, this.onAddCost, this);
          this.find("layout/orderNode/layout/page1/left").on(Input.EventType.TOUCH_CANCEL, this.onDelCost, this);
          this.find("layout/orderNode/layout/page1/right").on(Input.EventType.TOUCH_START, () => {
            this.onTouchStart(1);
          }, this);
          this.find("layout/orderNode/layout/page1/left").on(Input.EventType.TOUCH_START, () => {
            this.onTouchStart(2);
          }, this);
          this.cost_slider.node.on('slide', this.onSlideCost, this);
          this.num_slider.node.on('slide', this.onSlideNum, this);
          this.btnCreate.node.on("click", this.onCreate, this);
          this.navBtns = this.find("layout/nav").children.concat();

          for (var btn of this.navBtns) {
            btn.off('toggle', this.onPage, this);
            btn.on('toggle', this.onPage, this);
          }

          this.sortBtn.on(Input.EventType.TOUCH_END, this.onShowSortNode, this);
          this.sortNode.on(Input.EventType.TOUCH_END, this.onCloseSortNode, this);
          this.sortNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.sort_type = index;
              this.setCardSort();
            }, this);
          });
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        SetPage(page) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.$hasLoad) yield _this.initSub;
            if (!_this.navBtns[page]) return;
            _this.page = undefined;
            _this.navBtns[page].getComponent(Toggle).isChecked = true;

            _this.onPage(_this.navBtns[page].getComponent(Toggle));
          })();
        }

        onShow() {
          (_crd && TopUI === void 0 ? (_reportPossibleCrUseOfTopUI({
            error: Error()
          }), TopUI) : TopUI).Hide();
          this.SetPage(0);
          this.SelectItem(0, null);
        }

        flush() {
          this.type = arguments.length <= 0 ? undefined : arguments[0];
          this.sellNode.active = this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).SELL;
          this.buyNode.active = this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).BUY;
          this.btnLabel.string = this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).SELL ? "上架" : "发布求购";
          this.sortNode.active = false;
        }

        onItemChange() {
          if (!this.node.parent) return;
          this.SetPage(this.page);
        }

        onPage(t) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!t.isChecked) return;
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0);

            var page = _this2.navBtns.indexOf(t.node);

            if (page < 0 || page == _this2.page) return;
            _this2.page = page;
            _this2.page1.active = false;
            _this2.page2.active = false;
            _this2.num_slider_node.active = true;
            var cur_page;
            var datas = [];
            _this2.num_left_btn.parent.active = true;

            if (_this2.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
              error: Error()
            }), SOrderType) : SOrderType).BUY) {
              _this2.Data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTradeAllData(_this2.page);
            } else {
              _this2.Data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetResBySubType(page);
            }

            switch (page) {
              case 0:
                // 道具
                _this2.bg.getComponent(UITransform).setContentSize(496, 234);

                _this2.Data.forEach(data => {
                  if (_this2.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
                    error: Error()
                  }), SOrderType) : SOrderType).BUY) {
                    if ((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).GetTradeData(data)) {
                      var role_data = {
                        type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                          error: Error()
                        }), ThingTypeName) : ThingTypeName).Item,
                        item: data.item
                      };
                      datas.push(role_data);
                    }
                  } else {
                    if (data.item.count > 0 && (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).GetTradeData(data)) {
                      var _role_data = {
                        type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                          error: Error()
                        }), ThingTypeName) : ThingTypeName).Item,
                        item: data.item
                      };
                      datas.push(_role_data);
                    }
                  }
                });

                _this2.Data = datas;
                cur_page = _this2.page1;
                _this2.scroller = _this2.scroller1;
                break;

              case 1:
                _this2.bg.getComponent(UITransform).setContentSize(496, 186);

                _this2.num_left_btn.parent.active = false;

                _this2.Data.forEach(data => {
                  if (_this2.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
                    error: Error()
                  }), SOrderType) : SOrderType).BUY) {
                    if ((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).GetTradeData(data)) {
                      var card_data = {
                        type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                          error: Error()
                        }), ThingTypeName) : ThingTypeName).BattleCard,
                        card: data.card
                      };
                      datas.push(card_data);
                    }
                  } else {
                    if (data.card && (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).GetTradeData(data)) {
                      var _card_data = {
                        type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                          error: Error()
                        }), ThingTypeName) : ThingTypeName).BattleCard,
                        card: data.card
                      };
                      datas.push(_card_data);
                    }
                  }
                });

                _this2.Data = datas;
                _this2.data_list = JSON.parse(JSON.stringify(_this2.Data)); //structuredClone(this.Data);

                cur_page = _this2.page2;
                _this2.scroller = _this2.scroller2;
                break;

              default:
                _this2.Data.length = 0;
            }

            if (!_this2.Data || _this2.Data.length == 0) {
              _this2.orderNode.active = false;
              cur_page.active = false;
              _this2.noneListCont.active = true;
              return;
            } else {
              _this2.orderNode.active = true;
              cur_page.active = true;
              _this2.noneListCont.active = false;
            }

            if (_this2.scroller && _this2.Data) {
              _this2.scroller.UpdateDatas(_this2.Data);

              if (_this2.Data.length) {
                _this2.scroller.SelectFirst();
              } else {
                _this2.SelectItem(0, null);
              }
            }
          })();
        }
        /**
         * 选中道具
         * @param index 
         */


        SelectItem(index, item) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.$hasLoad) yield _this3.initSub;
            if (!_this3.Data || !_this3.Data[index]) return;
            var type = _this3.Data[index].item ? 1 : 2;

            for (var i = 0; i < _this3.scroller.children.length; i++) {
              var element = _this3.scroller.children[i];

              if (type == 1) {
                if (index == element["$$index"]) {
                  element.getChildByName("select").active = true;
                  _this3.select_index = element["$$index"];
                } else {
                  element.getChildByName("select").active = false;
                }
              } else if (type == 2) {
                if (index == element["$$index"]) {
                  element.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                    error: Error()
                  }), Card) : Card).setSelect(true);
                  _this3.select_index = element["$$index"];
                } else {
                  element.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                    error: Error()
                  }), Card) : Card).setSelect(false);
                }
              }
            }

            var data = _this3.Data[index];
            _this3.selectData = data;
            _this3.max_num_count = 1;

            if (data.item) {
              _this3.max_num_count = data.item.count;
            }

            _this3.updateOrderInfo(data);
          })();
        }

        updateOrderInfo(data) {
          var _this4 = this;

          Tween.stopAllByTarget(this.cdTime);
          this.cdTime.node.active = false;
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).SetNodeGray(this.btnCreate.node, false);

          if (data.item) {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(data.item.id);
            this.itemName.string = std.ItemName;
            this.description.string = std.Remark;
          } else if (data.card) {
            var card = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(data.card.cardId);
            this.itemName.string = card.CardName;
            this.description.string = card.SkillDesc;

            if (data.card.tradeCd - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime > 0) {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).SetNodeGray(this.btnCreate.node, true);
              this.cdTime.string = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).FormatTime(data.card.tradeCd - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime) + "\u540E\u53EF\u4E0A\u67B6";
              this.cdTime.node.active = true;
              tween(this.cdTime).repeatForever(tween().delay(1).call(() => {
                if (data.card.tradeCd - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).ServerTime > 0) {
                  this.cdTime.string = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                    error: Error()
                  }), DateUtils) : DateUtils).FormatTime(data.card.tradeCd - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                    error: Error()
                  }), DateUtils) : DateUtils).ServerTime) + "\u540E\u53EF\u4E0A\u67B6";
                } else {
                  this.cdTime.node.active = false;
                  (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).SetNodeGray(this.btnCreate.node, false);
                  Tween.stopAllByTarget(this.cdTime);
                }
              })).start();
            }
          }

          this.tradeData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTradeData(data);

          var _loop = function _loop() {
            var element = _this4.iconNode[index];
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, _this4.tradeData.Currencies[0].toString(), "spriteFrame"), SpriteFrame, res => {
              element.getComponent(Sprite).spriteFrame = res;
            });
          };

          for (var index = 0; index < this.iconNode.length; index++) {
            _loop();
          }

          this.setIsCanCreate();
        }

        setIsCanCreate() {
          if (!this.tradeData) {
            (_crd && Tips2 === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips2) : Tips2).Show("缺少配置");
            return;
          }

          var GroupSize = this.tradeData.GroupSize ? this.tradeData.GroupSize : 1;
          var GrouplimitMax = this.tradeData.GrouplimitMax ? this.tradeData.GrouplimitMax : 1;
          var GrouplimitMin = this.tradeData.GrouplimitMin ? this.tradeData.GrouplimitMin : 1;

          var _max_num_count = Math.floor(this.max_num_count / GroupSize);

          this.max_num_count = _max_num_count > GrouplimitMax ? GrouplimitMax : _max_num_count;

          if (this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).BUY) {
            this.max_num_count = GrouplimitMax;
          }

          this.arry_num.string = GroupSize + "个";
          this.num_hasNum.string = "/" + this.max_num_count;
          this.cost_count = this.getLowestPrice();

          var _highestPrice = this.getHighestPrice();

          this.cost_hasNum.string = "/" + _highestPrice / 10000;
          this.num_count = GrouplimitMin > this.max_num_count ? 0 : GrouplimitMin;

          if (this.max_num_count == 0) {
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.btnCreate.node, true);
            this.btnCreate.enabled = false;
            this.num_slider.enabled = false;
            this.num_left_btn.off(Input.EventType.TOUCH_END, this.onDelNum, this);
            this.num_left_btn.off(Input.EventType.TOUCH_CANCEL, this.onDelNum, this);
            this.num_left_btn.off(Input.EventType.TOUCH_START);
            this.num_right_btn.off(Input.EventType.TOUCH_END, this.onAddNum, this);
            this.num_right_btn.off(Input.EventType.TOUCH_CANCEL, this.onAddNum, this);
            this.num_right_btn.off(Input.EventType.TOUCH_START);
            this.num_slider.progress = 0;
            this.sellNum.string = 0 + "";
            this.cost_num.string = 0 + "";
            return;
          } else {
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.btnCreate.node, false);
            this.btnCreate.enabled = true;
            this.num_slider.enabled = true;
            this.num_left_btn.on(Input.EventType.TOUCH_END, this.onDelNum, this);
            this.num_left_btn.on(Input.EventType.TOUCH_CANCEL, this.onDelNum, this);
            this.num_left_btn.on(Input.EventType.TOUCH_START, () => {
              this.onTouchStart(4);
            }, this);
            this.num_right_btn.on(Input.EventType.TOUCH_END, this.onAddNum, this);
            this.num_right_btn.on(Input.EventType.TOUCH_CANCEL, this.onAddNum, this);
            this.num_right_btn.on(Input.EventType.TOUCH_START, () => {
              this.onTouchStart(3);
            }, this);
          }

          this.updateCostProgress();
          this.updateNumProgress();
        }

        onCreate() {
          if (this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).BUY) {
            var id = this.tradeData.Currencies[0];
            var currency = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(id);
            var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(id);
            var rate = 1;

            if (cfg.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).money) {
              rate = 10000;
            }

            var need_cost = this.cost_count / rate * this.num_count;

            if (currency < need_cost) {
              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips2({
                error: Error()
              }), Tips) : Tips).Show("货币不足");
              return;
            }
          } else {
            if (this.tradeData.GrouplimitMin && this.num_count < this.tradeData.GrouplimitMin) {
              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips2({
                error: Error()
              }), Tips) : Tips).Show("数量不可低于" + this.tradeData.GrouplimitMin);
              return;
            }

            if (this.num_count > this.max_num_count) {
              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips2({
                error: Error()
              }), Tips) : Tips).Show("数量不足");
              return;
            }
          }

          this.callBack();
        }

        callBack() {
          if (this.page == 0) {
            if (this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
              error: Error()
            }), SOrderType) : SOrderType).SELL) {
              var orderData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["market.protocol.makeitemorder"]();
              orderData.orderType = "sell";
              orderData.itemId = this.selectData.item.id;
              orderData.itemGroup = this.num_count;
              orderData.currency = this.tradeData.Currencies[0];
              orderData.price = this.cost_count;
              orderData.totalPrice = null;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["market.protocol.makeitemorder"], orderData);
            } else {
              var _orderData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["market.protocol.makeitemorder"]();

              _orderData.orderType = "buy";
              _orderData.itemId = this.selectData.item.id;
              _orderData.itemGroup = this.num_count;
              _orderData.currency = this.tradeData.Currencies[0];
              ;
              _orderData.price = this.cost_count;
              _orderData.totalPrice = null;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["market.protocol.makeitemorder"], _orderData);
            }
          } else if (this.page == 1) {
            var _tradeData = this.tradeData;

            if (this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
              error: Error()
            }), SOrderType) : SOrderType).SELL) {
              var _orderData2 = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["market.protocol.makecardsellorder"]();

              _orderData2.cardUnionId = this.selectData.card.id;
              _orderData2.currency = this.tradeData.Currencies[0];
              _orderData2.price = this.cost_count;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["market.protocol.makecardsellorder"], _orderData2);
            } else {
              var _orderData3 = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["market.protocol.makecardbuyorder"]();

              _orderData3.cardId = _tradeData.CardID;
              _orderData3.currency = _tradeData.Currencies[0];
              ;
              _orderData3.price = this.cost_count;
              _orderData3.quality = _tradeData.CardQuality;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["market.protocol.makecardbuyorder"], _orderData3);
            }
          }
        }

        onTouchStart(index) {
          this.touchIndex = index;
        }

        onAddCost(event) {
          if (!this.tradeData) return;
          this.cost_count += 100;

          var _highestPrice = this.getHighestPrice();

          if (this.cost_count > _highestPrice) {
            this.cost_count = _highestPrice;
          }

          this.updateCostProgress();

          if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onDelCost(event) {
          if (!this.tradeData) return;
          this.cost_count -= 100;

          var _lowestPrice = this.getLowestPrice();

          if (this.cost_count < _lowestPrice) {
            this.cost_count = _lowestPrice;
          }

          this.updateCostProgress();

          if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onSlideCost(e) {
          if (!this.tradeData) return;

          var _highestPrice = this.getHighestPrice();

          this.cost_count = Math.ceil(_highestPrice * (Math.ceil(this.cost_slider.progress * 100) / 100));

          var _lowestPrice = this.getLowestPrice();

          if (this.cost_count <= _lowestPrice) {
            this.cost_count = _lowestPrice;
          }

          this.touchIndex = 0;
          this.touchTime = 0;
          this.updateCostProgress();
        }

        onAddNum(event) {
          if (!this.tradeData) return;
          this.num_count++;

          if (this.num_count > this.max_num_count) {
            this.num_count = this.max_num_count;
          }

          this.updateNumProgress();

          if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onDelNum(event) {
          if (!this.tradeData) return;
          this.num_count--;

          if (this.num_count < this.tradeData.GrouplimitMin && this.tradeData.GrouplimitMin <= this.max_num_count) {
            this.num_count = this.tradeData.GrouplimitMin;
          }

          if (this.max_num_count < this.tradeData.GrouplimitMin) {
            this.num_count = 0;
          }

          this.updateNumProgress();

          if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onSlideNum(e) {
          if (!this.tradeData) return;
          this.num_count = Math.ceil(this.max_num_count * this.num_slider.progress);

          if (this.num_count < this.tradeData.GrouplimitMin && this.tradeData.GrouplimitMin <= this.max_num_count) {
            this.num_count = this.tradeData.GrouplimitMin;
          }

          if (this.max_num_count < this.tradeData.GrouplimitMin) {
            this.num_count = 0;
          }

          this.touchIndex = 0;
          this.touchTime = 0;
          this.updateNumProgress();
        }

        updateCostProgress() {
          this.cost_consumeNum.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(this.cost_count / 10000, 2);

          var _highestPrice = this.getHighestPrice();

          this.cost_slider.progress = this.cost_count / _highestPrice;
          this.updateCount();
        }

        updateNumProgress() {
          this.num_consumeNum.string = this.num_count + "";
          var progress_num = this.tradeData.GrouplimitMin;

          if (this.selectData) {
            progress_num = this.num_count / this.max_num_count;
          }

          this.num_slider.progress = progress_num;
          this.updateCount();
        }

        updateCount() {
          var total_sell = this.cost_count * this.num_count / 10000;
          var server_cost = this.cost_count * this.num_count * this.tradeData.Fees / 10000 / 10000;
          this.sellNum.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(total_sell - server_cost - this.tradeData.AddFees / 10000, 2);
          this.cost_num.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(server_cost + this.tradeData.AddFees / 10000, 2);
          this.buyNum.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(total_sell, 2);
        }

        UpdateBagItem(item, data, index) {
          item.getChildByName("select").active = index == this.select_index;
          var bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!bagItem) bagItem = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.setThing(data);
        }

        UpdateCardItem(item, data, index) {
          var cardItem = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          if (!cardItem) cardItem = item.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          cardItem.setSelect(index == this.select_index);
          cardItem.setCardEffectState(false);
          cardItem.SetData(data.card);

          if (data.card.tradeCd - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime > 0) {
            cardItem.setCardTradeCd(true);
          }

          tween(item).repeatForever(tween().delay(1).call(() => {
            if (data.card.tradeCd - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime <= 0) {
              cardItem.setCardTradeCd(false);
              Tween.stopAllByTarget(item);
            }
          })).start();
        }

        onShowSortNode() {
          this.sortNode.active = true;
        }

        onCloseSortNode() {
          this.sortNode.active = false;
        }

        update(dt) {
          var size = this.cost_slider.node.getComponent(UITransform).contentSize;
          this.cost_progress.getComponent(UITransform).setContentSize(this.cost_slider.progress * size.width, 12);
          this.num_progress.getComponent(UITransform).setContentSize(this.num_slider.progress * size.width, 12);

          if (this.touchIndex != 0) {
            this.touchTime += dt;

            if (this.touchTime >= 0.5) {
              this.touchTime = 0.47;

              switch (this.touchIndex) {
                case 1:
                  this.onAddCost();
                  break;

                case 2:
                  this.onDelCost();
                  break;

                case 3:
                  this.onAddNum();
                  break;

                case 4:
                  this.onDelNum();
                  break;
              }
            }
          }
        }
        /**每组最高值 */


        getHighestPrice() {
          var _highestPrice = 0;
          var _tradeData = this.tradeData;
          _highestPrice = this.type == 0 ? _tradeData.SellGroupPriceMax : _tradeData.BuyGroupPriceMax;
          return _highestPrice;
        }
        /***每组最低值 */


        getLowestPrice() {
          var _lowestPrice = 0;
          var _tradeData = this.tradeData;
          _lowestPrice = this.type == 0 ? _tradeData.SellGroupPriceMin : _tradeData.BuyGroupPriceMin;
          return _lowestPrice;
        }

        onHide() {
          this.scroller = undefined;
          this.Data = undefined;
          (_crd && TopUI === void 0 ? (_reportPossibleCrUseOfTopUI({
            error: Error()
          }), TopUI) : TopUI).Show();
        }

        setCardSort() {
          if (this.sort_type != 0) {
            this.Data = [];

            for (var iterator of this.data_list) {
              var car_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(iterator.card.cardId);

              if (car_cfg.ProfessionType == this.sort_type) {
                this.Data.push(iterator);
              }
            }

            this.Data.sort((a, b) => {
              var a_car_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(a.card.cardId);
              var b_car_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(b.card.cardId);

              if (a_car_cfg.CardRarity == b_car_cfg.CardRarity) {
                return a_car_cfg.ID - b_car_cfg.ID;
              }

              return a_car_cfg.CardRarity - b_car_cfg.CardRarity;
            });
          } else {
            this.Data = this.data_list;
          }

          this.scroller.UpdateDatas(this.Data);

          if (this.Data.length) {
            this.scroller.SelectFirst();
          } else {
            this.SelectItem(0, null);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dbf4a3d0faaa048c5d91f91f92babcd60f7e69fa.js.map