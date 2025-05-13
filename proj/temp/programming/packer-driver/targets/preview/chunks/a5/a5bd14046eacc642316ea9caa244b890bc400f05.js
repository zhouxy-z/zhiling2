System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, RichText, Slider, UITransform, Session, Panel, CfgMgr, ThingTypeName, MsgPanel, ConsumeItem, AwardItem, ItemUtil, Req, Route, ShopBuyPanel, _crd;

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopCommodity(extras) {
    _reporterNs.report("StdShopCommodity", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSShopItem(extras) {
    _reporterNs.report("SShopItem", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumeItem(extras) {
    _reporterNs.report("ConsumeItem", "../common/ConsumeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardItem(extras) {
    _reporterNs.report("AwardItem", "../common/AwardItem", _context.meta, extras);
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

  _export("ShopBuyPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      RichText = _cc.RichText;
      Slider = _cc.Slider;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
      ThingTypeName = _unresolved_4.ThingTypeName;
    }, function (_unresolved_5) {
      MsgPanel = _unresolved_5.MsgPanel;
    }, function (_unresolved_6) {
      ConsumeItem = _unresolved_6.ConsumeItem;
    }, function (_unresolved_7) {
      AwardItem = _unresolved_7.AwardItem;
    }, function (_unresolved_8) {
      ItemUtil = _unresolved_8.ItemUtil;
    }, function (_unresolved_9) {
      Req = _unresolved_9.Req;
      Route = _unresolved_9.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a663ZwKjdBT7RkS60FRnAl", "ShopBuyPanel", undefined);

      __checkObsolete__(['Button', 'Label', 'Node', 'RichText', 'Slider', 'Toggle', 'UITransform']);

      _export("ShopBuyPanel", ShopBuyPanel = class ShopBuyPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/shop/ShopBuyPanel";
          this.itemDesc = void 0;
          this.awardItem = void 0;
          this.awardBtn = void 0;
          this.priceConsumeItem = void 0;
          this.numLab = void 0;
          this.leftBtn = void 0;
          this.slider = void 0;
          this.sliderBar = void 0;
          this.rightBtn = void 0;
          this.maxBtn = void 0;
          this.buyBtn = void 0;
          this.buyConsumeItem = void 0;
          this.curNum = void 0;
          this.maxNum = void 0;
          this.shopId = void 0;
          this.std = void 0;
          this.shopData = void 0;
          this.stdItem = void 0;
          this.item = void 0;
        }

        onLoad() {
          this.itemDesc = this.find("itemDesc", RichText);
          this.awardItem = this.find("AwardItem").addComponent(_crd && AwardItem === void 0 ? (_reportPossibleCrUseOfAwardItem({
            error: Error()
          }), AwardItem) : AwardItem);
          this.awardBtn = this.find("AwardItem", Button);
          this.priceConsumeItem = this.find("priceConsumeItem").addComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          this.numLab = this.find("numLab", Label);
          this.leftBtn = this.find("sliderCont/leftBtn", Button);
          this.slider = this.find("sliderCont/slider", Slider);
          this.sliderBar = this.find("sliderCont/slider/sliderBar");
          this.rightBtn = this.find("sliderCont/rightBtn", Button);
          this.maxBtn = this.find("sliderCont/maxBtn", Button);
          this.buyBtn = this.find("buyBtn", Button);
          this.buyConsumeItem = this.find("buyBtn/buyConsumeItem").addComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          this.CloseBy("closeBtn");
          this.CloseBy("mask");
          this.awardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.slider.node.on('slide', this.onSlide, this);
          this.leftBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.rightBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.maxBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.buyBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onShow() {}

        onHide() {}

        flush(shopId, shopData) {
          this.shopId = shopId;
          this.shopData = shopData;
          this.std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(this.shopData.id);
          this.buyBtn.node.active = true;

          if (!this.std) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("缺少配置");
            this.buyBtn.node.active = false;
            return;
          }

          ;
          this.item = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item, this.std.GoodsID[0], this.std.GoodsNum[0]);
          this.stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.item.item.id);
          this.itemDesc.string = this.stdItem.Remark;
          this.awardItem.SetData({
            itemData: this.item
          });
          this.maxNum = shopData.count; //Math.floor(ItemUtil.GetHaveThingNum(this.std.CostType[0], this.std.CostID[0]) / this.std.CostNumber[0]);

          this.curNum = this.maxNum > 0 ? 1 : 0;
          var priceItem = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item, this.std.CostID[0], this.std.CostNumber[0]);
          this.priceConsumeItem.SetData(priceItem);
          this.changeSlidePro(3);
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.leftBtn:
              this.changeSlidePro(0);
              break;

            case this.rightBtn:
              this.changeSlidePro(1);
              break;

            case this.maxBtn:
              this.changeSlidePro(2);
              break;

            case this.buyBtn:
              // if(this.std.LimitBuyTime > 0 && (this.shopData.expiration_time - PlayerData.GetServerTime() < 1)){
              //     MsgPanel.Show("道具已超出时间，无法继续兑换");
              //     return;
              // }
              var buy_item = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["shop.protocol.buyitem"]();
              buy_item.buyCount = this.curNum;
              buy_item.buyId = this.std.Id;
              buy_item.shopIndexId = this.shopId;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["shop.protocol.buyitem"], buy_item);
              this.Hide();
              break;

            case this.awardBtn:
              // ItemTips.Show(this.item);
              break;
          }
        }

        onSlide(event) {
          var tempNum = Math.ceil(event.progress * this.maxNum);
          if (tempNum > this.maxNum) tempNum = this.maxNum;
          this.curNum = Math.max(tempNum, this.maxNum > 0 ? 1 : 0);
          this.changeSlidePro(3);
        }

        changeSlidePro(type) {
          if (type == 0) {
            if (this.curNum > 1) {
              this.curNum--;
            }
          } else if (type == 1) {
            if (this.curNum < this.maxNum) {
              this.curNum++;
            }
          } else if (type == 2) {
            if (this.curNum != this.maxNum) {
              this.curNum = this.maxNum;
            }
          }

          this.slider.progress = this.maxNum < 1 ? 0 : this.curNum / this.maxNum;
          this.updateItemCount();
        }

        updateItemCount() {
          var barTrans = this.sliderBar.getComponent(UITransform);
          var sliderTrans = this.slider.getComponent(UITransform);
          barTrans.setContentSize(this.slider.progress * sliderTrans.width, barTrans.height);
          this.numLab.string = this.curNum.toString();
          var num = this.curNum * this.std.CostNumber[0];
          var item = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item, this.std.CostID[0], num);
          this.buyConsumeItem.SetData(item);
          var typeList = [];
          var costList = [];

          for (var index = 0; index < this.std.CostID.length; index++) {
            var type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item;
            var cost = this.std.CostID[index];
            typeList.push(type);
            costList.push(cost);
          }

          var isCanBuy = this.curNum > 0 && (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CheckThingConsumes(typeList, costList, [num], true);
          console.log(this.curNum > 0, typeList, costList, [num], (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CheckThingConsumes(typeList, costList, [num]));
          this.buyBtn.enabled = isCanBuy;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5bd14046eacc642316ea9caa244b890bc400f05.js.map