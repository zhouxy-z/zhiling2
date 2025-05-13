System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, RichText, Panel, ThingTypeName, ItemUtil, Session, Req, Route, ShopLuckyBuyPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumeItem(extras) {
    _reporterNs.report("ConsumeItem", "../common/ConsumeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdLuckyShop(extras) {
    _reporterNs.report("StdLuckyShop", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  _export("ShopLuckyBuyPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      ThingTypeName = _unresolved_3.ThingTypeName;
    }, function (_unresolved_4) {
      ItemUtil = _unresolved_4.ItemUtil;
    }, function (_unresolved_5) {
      Session = _unresolved_5.Session;
    }, function (_unresolved_6) {
      Req = _unresolved_6.Req;
      Route = _unresolved_6.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5cb5BUyBZLBq9U1o/VrzhO", "ShopLuckyBuyPanel", undefined);

      __checkObsolete__(['Button', 'RichText']);

      _export("ShopLuckyBuyPanel", ShopLuckyBuyPanel = class ShopLuckyBuyPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/shop/ShopLuckyBuyPanel";
          this.tipsLab = void 0;
          this.buyBtn = void 0;
          this.buyConsumeItem = void 0;
          this.std = void 0;
          this.offsetCont = void 0;
          this.count = void 0;
          this.newItemNum = void 0;
        }

        onLoad() {
          this.tipsLab = this.find("tipsLab").getComponent(RichText);
          this.buyBtn = this.find("buyBtn", Button); // this.buyConsumeItem = this.find("buyBtn/buyConsumeItem").addComponent(ConsumeItem);

          this.CloseBy("closeBtn");
          this.CloseBy("mask");
          this.buyBtn.node.on(Button.EventType.CLICK, this.onBtnBuyClick, this);
        }

        onShow() {}

        onHide() {}

        flush(std, count, offsetCont) {
          this.std = std;
          this.count = count;
          this.offsetCont = offsetCont;
          this.newItemNum = [];

          if (this.std.shopStd.ConvertToConsumeCost) {
            for (var val of this.std.shopStd.ConvertToConsumeCost) {
              this.newItemNum.push(val * this.offsetCont);
            }
          } // let item = ItemUtil.CreateThing(ThingTypeName.Item, this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0]);


          var consume = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item, this.std.shopStd.ConvertToConsumeItemId[0], this.newItemNum[0]); // let tipsStr:string = `<color=#AD4800><size=48>${item.resData.name}</size></color>数量不足\n是否消耗<color=#36B13A>${consume.resData.count + consume.resData.name}</color>兑换<color=#AD4800><size=48>${this.offsetCont}个${item.resData.name}</size></color>`;
          // this.tipsLab.string = tipsStr;

          this.buyConsumeItem.SetData(consume);
        }

        onBtnBuyClick(btn) {
          if (!(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CheckThingConsumes(null, this.std.shopStd.ConvertToConsumeItemId, this.newItemNum, true)) {
            return;
          }

          var shop_luck = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["shop.protocol.dolucky"]();
          shop_luck.convertCount = this.offsetCont;
          shop_luck.count = this.count;
          shop_luck.shopIndexId = this.std.shopId;
          shop_luck.skipFree = false;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.dolucky"], shop_luck);
          this.Hide();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5e4907119515edabc799872897700a9b45030269.js.map