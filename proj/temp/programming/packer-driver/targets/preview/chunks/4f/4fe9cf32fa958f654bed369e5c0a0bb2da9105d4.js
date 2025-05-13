System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Sprite, SpriteFrame, _decorator, path, AsyncComponent, BagItem, CfgMgr, ResMgr, folder_item, _dec, _dec2, _class, _crd, ccclass, property, disallowMultiple, requireComponent, ShopItem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
      path = _cc.path;
    }, function (_unresolved_2) {
      AsyncComponent = _unresolved_2.AsyncComponent;
    }, function (_unresolved_3) {
      BagItem = _unresolved_3.BagItem;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
      folder_item = _unresolved_5.folder_item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "258dfignTtHnqvIHfkGO697", "ShopItem", undefined);

      __checkObsolete__(['Component', 'Label', 'Node', 'Sprite', 'SpriteFrame', '_decorator', 'path']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);

      _export("ShopItem", ShopItem = (_dec = ccclass('ShopItem'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class ShopItem extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor() {
          super(...arguments);
          this.data = void 0;
          this.limtNumLab = void 0;
          this.item = void 0;
          this.disCout = void 0;
          this.costImg = void 0;
          this.costLab = void 0;
          this.overtime = void 0;
        }

        onLoad() {
          this.limtNumLab = this.node.getChildByPath("limtNumLab").getComponent(Label);
          this.item = this.node.getChildByPath("item").addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          this.disCout = this.node.getChildByPath("disCont/disNumLab").getComponent(Label);
          this.costImg = this.node.getChildByPath("consumeItem/costImg").getComponent(Sprite);
          this.costLab = this.node.getChildByPath("consumeItem/costLab").getComponent(Label);
          this.overtime = this.node.getChildByPath("overtime");
          super.onLoad();
        }

        SetData(data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!data) return;
            _this.data = data;
            if (!_this.hasLoad) yield _this.loadSub;
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCommShopItem(_this.data.id);
            if (!std) return; // 折扣

            if (std.Discount > 0) {
              _this.disCout.node.parent.active = true;
              _this.disCout.string = std.Discount.toString();
            } else {
              _this.disCout.node.parent.active = false;
            } // 剩余数量


            if (std.GoodAmount > 0) {
              _this.overtime.active = false;
              _this.limtNumLab.node.active = true;
              _this.limtNumLab.string = "\u6570\u91CF\uFF1A" + data.count + "/" + std.GoodAmount;
            } else {
              _this.overtime.active = true;
              _this.limtNumLab.node.active = false;
            }

            var stdcost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCommShopItem(data.id);
            var url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(stdcost.CostID[0]).Icon, "spriteFrame");
            _this.costImg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            _this.costLab.string = stdcost.CostNumber[0].toString();

            _this.item.setThing(data.sellThings[0]);
          })();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4fe9cf32fa958f654bed369e5c0a0bb2da9105d4.js.map