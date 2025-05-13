System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, Label, Slider, Sprite, SpriteFrame, UITransform, path, ResMgr, folder_item, Session, Panel, SOrderType, CfgMgr, ThingTypeName, PlayerData, Utils, Tips, Req, Route, AutoScroller, Card, BagItem, MsgPanel, BuyPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOrderType(extras) {
    _reporterNs.report("SOrderType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketItem(extras) {
    _reporterNs.report("StdMarketItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketCard(extras) {
    _reporterNs.report("StdMarketCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
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

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  _export("BuyPanel", void 0);

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
      UITransform = _cc.UITransform;
      path = _cc.path;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      SOrderType = _unresolved_5.SOrderType;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
      ThingTypeName = _unresolved_6.ThingTypeName;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }, function (_unresolved_8) {
      Utils = _unresolved_8.Utils;
    }, function (_unresolved_9) {
      Tips = _unresolved_9.Tips;
    }, function (_unresolved_10) {
      Req = _unresolved_10.Req;
      Route = _unresolved_10.Route;
    }, function (_unresolved_11) {
      AutoScroller = _unresolved_11.AutoScroller;
    }, function (_unresolved_12) {
      Card = _unresolved_12.Card;
    }, function (_unresolved_13) {
      BagItem = _unresolved_13.BagItem;
    }, function (_unresolved_14) {
      MsgPanel = _unresolved_14.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "710e7tErQdBvZE+lhEjwLYw", "BuyPanel", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'EventTouch', 'Input', 'Label', 'Node', 'Slider', 'Sprite', 'SpriteFrame', 'Toggle', 'UITransform', 'find', 'instantiate', 'path', 'sp', 'tween', 'view']);

      _export("BuyPanel", BuyPanel = class BuyPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/Trade/BuyPanel";
          this.quality = void 0;
          this.tittle = void 0;
          this.item_node = void 0;
          this.item_name = void 0;
          this.card_node = void 0;
          this.card_name = void 0;
          this.item_count = void 0;
          this.Price = void 0;
          this.money_icon = void 0;
          this.need_count = void 0;
          this.maxBtn = void 0;
          this.buyBtn = void 0;
          this.buyVaule = void 0;
          this.buyicon = void 0;
          this.sellNode = void 0;
          this.sellBtn = void 0;
          this.sellVaule = void 0;
          this.get_money_icon = void 0;
          this.costVaule = void 0;
          this.Slider = void 0;
          this.progress = void 0;
          this.max_count = void 0;
          this.right = void 0;
          this.left = void 0;
          this.item_tips = void 0;
          this.ScrollView = void 0;
          this.aa = void 0;
          this.type = void 0;
          //买or卖
          this.selectData = void 0;
          this.selectCount = void 0;
          //当前选择的数量
          this.costNum = void 0;
          //损耗
          this.market_type = void 0;
          //商品的类型 //道具或卡牌
          this.itemSelectData = void 0;
          //选择的商品是道具
          this.maxItemNum = void 0;
          //能够买卖的最大组数   
          this.touchIndex = 0;
          this.touchTime = 0;
          this.addNum = 0;
          this.tradeData = void 0;
          this.select_card_data = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("spriteFrame/Close");
          this.quality = this.find("spriteFrame/left/quality", Sprite);
          this.tittle = this.find("spriteFrame/title/title_name", Label);
          this.item_tips = this.find("spriteFrame/desc", Label);
          this.item_node = this.find("spriteFrame/left/itemNode");
          this.item_name = this.find("spriteFrame/left/itemNode/item_name", Label);
          this.card_node = this.find("spriteFrame/left/cardNode");
          this.card_name = this.find("spriteFrame/left/cardNode/card_name", Label);
          this.item_count = this.find("spriteFrame/item_count", Label);
          this.Price = this.find("spriteFrame/PriceLayout/Price", Label);
          this.money_icon = this.find("spriteFrame/PriceLayout/money_icon", Sprite);
          this.need_count = this.find("spriteFrame/mid/need_count", Label);
          this.max_count = this.find("spriteFrame/mid/max_count", Label);
          this.maxBtn = this.find("spriteFrame/mid/page1/maxBtn", Button);
          this.buyBtn = this.find("spriteFrame/mid/buyBtn", Button);
          this.buyVaule = this.find("spriteFrame/mid/buyBtn/layout/buyVaule", Label);
          this.buyicon = this.find("spriteFrame/mid/buyBtn/layout/icon", Sprite);
          this.sellNode = this.find("spriteFrame/mid/sellNode");
          this.sellBtn = this.find("spriteFrame/mid/sellNode/sellBtn", Button);
          this.sellVaule = this.find("spriteFrame/mid/sellNode/layout/sellVaule", Label);
          this.get_money_icon = this.find("spriteFrame/mid/sellNode/layout/get_money_icon", Sprite);
          this.costVaule = this.find("spriteFrame/mid/sellNode/layout/costVaule", Label);
          this.Slider = this.find("spriteFrame/mid/page1/Slider", Slider);
          this.progress = this.find("spriteFrame/mid/page1/Slider/progress");
          this.right = this.find("spriteFrame/mid/page1/right");
          this.left = this.find("spriteFrame/mid/page1/left");
          this.buyBtn.node.on("click", this.onSend, this);
          this.sellBtn.node.on("click", this.onSend, this);
          this.ScrollView = this.find("spriteFrame/ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.ScrollView.SetHandle(this.UpdateCardItem.bind(this));
          this.ScrollView.node.on('select', this.SelectItem, this);
          this.aa = this.find("spriteFrame/aa", Button);
          this.aa.node.on("click", this.onAA, this);
        }

        onShow() {}

        flush(type, _data) {
          if (!_data) return;
          this.ScrollView.node.active = false;
          this.type = type;
          var keepPre = 2;
          var data = _data;
          this.selectData = data;
          var item_data;
          var item_cfg;
          var card_cfg;
          this.item_node.active = false;
          this.card_node.active = false;
          var tittle_name = "商品详情";
          var url = "";
          var num = 1;

          if (data.card) {
            this.market_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).BattleCard;
            item_data = {
              type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).BattleCard,
              card: data.card
            };
            tittle_name = "卡牌详情";
            card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(item_data.card.cardId);
            this.card_name.string = card_cfg.CardName;
            this.card_node.active = true;
            var card = this.card_node.getChildByName("Cards");
            var cards = card.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            if (!cards) cards = card.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            cards.SetData(item_data.card);
            url = "sheets/bag/Quality_" + item_data.card.quality + "/spriteFrame";
            this.select_card_data = item_data.card;
          } else {
            this.market_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item;
            var itemOrderData = data;
            item_data = {
              type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item,
              item: {
                id: itemOrderData.itemId,
                count: itemOrderData.quantity
              }
            };
            item_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(item_data.item.id);

            if (item_cfg) {
              this.item_name.string = item_cfg.ItemName;
              url = "sheets/bag/Quality_" + item_cfg.Quality + "/spriteFrame";
            }

            var item_num = this.item_node.getChildByName("item_num").getComponent(Label);
            item_num.string = "拥有数量" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(item_data.item.id);
            this.item_node.active = true;
            var item = this.item_node.getChildByName("item");
            var bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            if (!bagItem) bagItem = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            bagItem.setThing(item_data);
            num = itemOrderData.quantityRemaining / (itemOrderData.quantity / itemOrderData.groupNum);
          }

          this.tittle.string = tittle_name;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
            this.quality.spriteFrame = res;
          });
          this.addNum = 1;
          this.tradeData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTradeData(item_data);
          var GroupSize = this.tradeData.GroupSize ? this.tradeData.GroupSize : 1;
          this.costNum = this.tradeData.Fees / 10000;
          this.itemSelectData = item_data;
          var icon_spr = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.tradeData.Currencies[0]).Icon;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, icon_spr, "spriteFrame"), SpriteFrame, res => {
            this.money_icon.spriteFrame = res;
            this.get_money_icon.spriteFrame = res;
            this.buyicon.spriteFrame = res;
          });

          if (type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).SELL) {
            //数量不够置灰
            var hasNum;
            hasNum = this.market_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item ? (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(this.itemSelectData.item.id) : (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCardDataById(this.itemSelectData.card.id);

            if (hasNum == 0) {
              this.sellBtn.enabled = false;
              this.sellBtn.node.getComponent(Sprite).grayscale = true;
            } else {
              this.sellBtn.enabled = true;
              this.sellBtn.node.getComponent(Sprite).grayscale = false;
            }

            var max_has = Math.floor(hasNum / GroupSize);

            if (this.market_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item) {
              this.maxItemNum = max_has > num ? num : max_has;
            } else {
              this.maxItemNum = 1;
            }
          } else {
            if (this.market_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item) {
              this.maxItemNum = num;
            } else {
              this.maxItemNum = 1;
            }
          }

          this.item_tips.string = this.market_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item ? item_cfg.Remark : card_cfg.SkillDesc;
          this.selectCount = this.addNum;
          this.item_count.string = "(每组数量：" + GroupSize + "个)";
          this.max_count.string = "/" + num;
          this.Price.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(data.price / 10000, keepPre);
          this.need_count.string = "0";
          this.costVaule.string = "(扣除" + this.costNum * 100 + "%损耗)";
          this.sellNode.active = type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).SELL;
          this.buyBtn.node.active = !(type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).SELL);

          if (this.selectCount > this.maxItemNum || this.maxItemNum <= 0) {
            this.selectCount = 0;
            this.maxItemNum = 1;
            this.Slider.enabled = false;
            this.Slider.node.off('slide');
            this.right.off(Input.EventType.TOUCH_END);
            this.left.off(Input.EventType.TOUCH_END);
            this.right.off(Input.EventType.TOUCH_CANCEL);
            this.left.off(Input.EventType.TOUCH_CANCEL);
            this.right.off(Input.EventType.TOUCH_START);
            this.left.off(Input.EventType.TOUCH_START);
            this.maxBtn.node.off("click");
            this.Slider.progress = 0;
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.sellBtn.node, true);
          } else {
            this.Slider.enabled = true;
            this.Slider.node.on('slide', this.onSlide, this);
            this.right.on(Input.EventType.TOUCH_END, this.onAdd, this);
            this.left.on(Input.EventType.TOUCH_END, this.onDel, this);
            this.right.on(Input.EventType.TOUCH_CANCEL, this.onAdd, this);
            this.left.on(Input.EventType.TOUCH_CANCEL, this.onDel, this);
            this.right.on(Input.EventType.TOUCH_START, () => {
              this.onTouchStart(1);
            }, this);
            this.left.on(Input.EventType.TOUCH_START, () => {
              this.onTouchStart(2);
            }, this);
            this.maxBtn.node.on("click", this.onMaxBtn, this);
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.sellBtn.node, false);
          }

          this.updateProgress();
        }

        onTouchStart(index) {
          this.touchIndex = index;
        }

        onAdd(e) {
          this.selectCount += this.addNum; //超出拥有数量

          if (this.selectCount > this.maxItemNum) {
            this.selectCount = this.maxItemNum;
          }

          this.updateProgress();

          if (e) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onDel(e) {
          if (this.selectCount <= this.addNum) return;
          this.selectCount -= this.addNum;

          if (this.selectCount < this.addNum) {
            this.selectCount = this.addNum;
          }

          this.updateProgress();

          if (e) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onSlide(e) {
          this.selectCount = Math.ceil(this.maxItemNum * this.Slider.progress);

          if (this.selectCount % this.addNum != 0) {
            this.selectCount = Math.ceil(this.selectCount / this.addNum) * this.addNum;
          }

          if (this.selectCount > this.maxItemNum) {
            this.selectCount = this.maxItemNum;
          }

          if (this.selectCount < this.addNum) {
            this.selectCount = this.addNum;
          }

          this.updateProgress();

          if (e) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onMaxBtn() {
          this.selectCount = this.maxItemNum;
          this.updateProgress();
          this.touchIndex = 0;
          this.touchTime = 0;
        }

        updateProgress() {
          var price = this.selectData.price; //单价

          var keepPre = 2;
          this.need_count.string = this.selectCount + "";
          var all_price = this.selectCount * price; //选择数量的总价

          this.buyVaule.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(all_price / 10000, keepPre); // let is_can_buy = (num / 10000) <= PlayerData.GetItemCount(1);
          // this.buyVaule.color = is_can_buy ? new Color().fromHEX("#ffffff") : new Color().fromHEX("#ff3f3f");

          this.sellVaule.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ToFixed(all_price / 10000 - (this.selectCount * this.costNum + this.tradeData.AddFees / 10000));
          this.Slider.progress = this.selectCount / this.maxItemNum;
        }

        onAA() {
          if (this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).SELL && this.market_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).BattleCard) {
            this.ScrollView.node.active = true;
            this.ScrollView.UpdateDatas((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cards);
          }
        }

        onSend() {
          var value = 0;
          var currency = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(1);
          var is_gem = true;
          value = this.selectData.price / 10000;

          if (this.type == (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
            error: Error()
          }), SOrderType) : SOrderType).BUY && is_gem) {
            var need_currency = this.selectCount * value;

            if (currency < need_currency) {
              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                error: Error()
              }), Tips) : Tips).Show("货币不足");
              return;
            }
          }

          if (this.market_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item) {
            var buyData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["market.protocol.takeitemorder"]();
            buyData.orderId = this.selectData.orderId;
            buyData.takeGroup = this.selectCount;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["market.protocol.takeitemorder"], buyData);
          } else {
            //随机一个匹配的卡牌
            var cardUnionId = this.select_card_data.id;

            if (this.selectData.orderType == "buy") {
              cardUnionId = "";

              for (var iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cards) {
                if (iterator.cardId == this.select_card_data.cardId && iterator.level == this.select_card_data.level && iterator.quality == this.select_card_data.quality) {
                  cardUnionId = iterator.id;
                }
              }
            }

            if (cardUnionId == "") {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("没有匹配英雄");
              return;
            }

            this.ScrollView.node.active = false;

            var _buyData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["market.protocol.takecardorder"]();

            _buyData.orderId = this.selectData.orderId;
            _buyData.cardUnionId = cardUnionId;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["market.protocol.takecardorder"], _buyData);
          }
        }

        update(dt) {
          var size = this.Slider.node.getComponent(UITransform).contentSize;
          this.progress.getComponent(UITransform).setContentSize(this.Slider.progress * size.width, size.height);

          if (this.touchIndex != 0) {
            this.touchTime += dt;

            if (this.touchTime >= 0.5) {
              this.touchTime = 0.47;

              switch (this.touchIndex) {
                case 1:
                  this.onAdd();
                  break;

                case 2:
                  this.onDel();
                  break;
              }
            }
          }
        }

        UpdateCardItem(item, data, index) {
          // item.getChildByPath("cardNode/select").active = index == this.select_index;
          var cardItem = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          if (!cardItem) cardItem = item.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card); // cardItem.setSelect(index == this.select_index)

          cardItem.SetData(data);
        }
        /**
        * 选中道具
        * @param index 
        */


        SelectItem(index, item) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.$hasLoad) yield _this.initSub;
            var card = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            _this.select_card_data = card.getData();
          })();
        }

        onHide() {
          this.selectData = undefined;
          this.Slider.node.off('slide');
          this.right.off(Input.EventType.TOUCH_END);
          this.left.off(Input.EventType.TOUCH_END);
          this.right.off(Input.EventType.TOUCH_CANCEL);
          this.left.off(Input.EventType.TOUCH_CANCEL);
          this.right.off(Input.EventType.TOUCH_START);
          this.left.off(Input.EventType.TOUCH_START);
          this.maxBtn.node.off("click");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53d929de433a15c2b6fb82179ea4b5d1c347c605.js.map