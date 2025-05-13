System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Layout, ScrollView, Sprite, UITransform, instantiate, Panel, CfgMgr, Second, GatePassBuyPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdSeaGatepass(extras) {
    _reporterNs.report("StdSeaGatepass", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  _export("GatePassBuyPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Layout = _cc.Layout;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      Second = _unresolved_4.Second;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70084nRRdBGs6EBj11u4PQD", "GatePassBuyPanel", undefined);

      __checkObsolete__(['Button', 'Input', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'Toggle', 'UITransform', 'instantiate']);

      _export("GatePassBuyPanel", GatePassBuyPanel = class GatePassBuyPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/rights/GatePassBuyPanel";
          this.bg = void 0;
          this.unLock1 = void 0;
          this.unLock2 = void 0;
          this.buyBtn1 = void 0;
          this.buyBtn2 = void 0;
          this.scroller1 = void 0;
          this.scroller2 = void 0;
          this.upLabel = void 0;
          this.clone_item_1 = void 0;
          this.clone_item_2 = void 0;
          this.width = 345;
        }

        onLoad() {
          this.CloseBy("backBtn");
          this.bg = this.find("bg", Sprite);
          this.unLock1 = this.find("general/unLock");
          this.unLock2 = this.find("advance/unLock");
          this.buyBtn1 = this.find("general/generalBuyBtn", Button);
          this.buyBtn2 = this.find("advance/advanceBuyBtn", Button);
          this.scroller1 = this.find("general/ScrollView", ScrollView);
          this.clone_item_1 = this.find("general/ScrollView/view/content/item");
          this.scroller2 = this.find("advance/ScrollView", ScrollView);
          this.clone_item_2 = this.find("advance/ScrollView/view/content/item");
          this.upLabel = this.find("advance/upBg/upLabel", Label);
          this.buyBtn1.node.on(Button.EventType.CLICK, this.onClick, this);
          this.buyBtn2.node.on(Button.EventType.CLICK, this.onClick, this);
        }

        onShow() {}

        flush() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var seaid = 10001;
            var seapass = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).getSeaGatepass(seaid);

            _this.scroller1.content.removeAllChildren();

            _this.scroller2.content.removeAllChildren();

            for (var index = 0; index < seapass[1].BuyDes.length; index++) {
              var element = seapass[1].BuyDes[index];
              var item_1 = instantiate(_this.clone_item_1);

              _this.updateItem(item_1, element, index);

              _this.scroller1.content.addChild(item_1);
            }

            for (var _index = 0; _index < seapass[2].BuyDes.length; _index++) {
              var _element = seapass[2].BuyDes[_index];
              var item_2 = instantiate(_this.clone_item_2);

              _this.updateItem(item_2, _element, _index);

              _this.scroller2.content.addChild(item_2);
            }

            var is_can_buy = false;
            _this.unLock1.active = is_can_buy;
            _this.unLock2.active = is_can_buy;
            _this.buyBtn1.node.active = !is_can_buy;
            _this.buyBtn2.node.active = !is_can_buy;
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0.1);

            _this.scroller1.node.getChildByPath("view/content").children.forEach(item => {
              var des = item.getChildByName("TipsLabel").getComponent(Label);
              var height = des.getComponent(UITransform).contentSize.height;
              item.getComponent(UITransform).setContentSize(_this.width, height);
            });

            _this.scroller2.node.getChildByPath("view/content").children.forEach(item => {
              var des = item.getChildByName("TipsLabel").getComponent(Label);
              var height = des.getComponent(UITransform).contentSize.height;
              item.getComponent(UITransform).setContentSize(_this.width, height);
            });

            _this.scroller1.node.getChildByPath("view/content").getComponent(Layout).updateLayout();

            _this.scroller2.node.getChildByPath("view/content").getComponent(Layout).updateLayout();
          })();
        }

        updateItem(item, data, index) {
          var des = item.getChildByName("TipsLabel").getComponent(Label);
          des.string = data;
        }

        onClick(e) {
          var name = e.name;

          switch (name) {
            case "generalBuyBtn":
              break;

            case "advanceBuyBtn":
              break;

            default:
              break;
          }
        }

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69903f87c08cd926288c0b01ec4c08ed7254b6e5.js.map