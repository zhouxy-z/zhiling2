System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Layout, Sprite, SpriteFrame, path, AsyncComponent, Req, Route, PlayerData, CfgMgr, ThingType, AutoScroller, ResMgr, BagItem, CostItem, MsgPanel, Session, ShopLuckyPage, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIPanelPage(extras) {
    _reporterNs.report("IPanelPage", "../common/IPanelPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
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

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopIndex(extras) {
    _reporterNs.report("StdShopIndex", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopLuckyPool(extras) {
    _reporterNs.report("StdShopLuckyPool", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingType(extras) {
    _reporterNs.report("ThingType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostItem(extras) {
    _reporterNs.report("CostItem", "../common/CostItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  _export("ShopLuckyPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      path = _cc.path;
    }, function (_unresolved_2) {
      AsyncComponent = _unresolved_2.AsyncComponent;
    }, function (_unresolved_3) {
      Req = _unresolved_3.Req;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
      ThingType = _unresolved_5.ThingType;
    }, function (_unresolved_6) {
      AutoScroller = _unresolved_6.AutoScroller;
    }, function (_unresolved_7) {
      ResMgr = _unresolved_7.ResMgr;
    }, function (_unresolved_8) {
      BagItem = _unresolved_8.BagItem;
    }, function (_unresolved_9) {
      CostItem = _unresolved_9.CostItem;
    }, function (_unresolved_10) {
      MsgPanel = _unresolved_10.MsgPanel;
    }, function (_unresolved_11) {
      Session = _unresolved_11.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7df14a/XddIFow3XyNv7ma2", "ShopLuckyPage", undefined);

      __checkObsolete__(['Component', 'Input', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteFrame', 'instantiate', 'path']);

      /**将shopitem再次封装，用于动态绑定shopIndexId的语法糖提示 */
      _export("ShopLuckyPage", ShopLuckyPage = class ShopLuckyPage extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor() {
          super(...arguments);
          this.scroller = void 0;
          this.bg = void 0;
          this.awardScroller = void 0;
          this.titleImg = void 0;
          this.numLab = void 0;
          this.btnCont = void 0;
          this.yetNumLab = void 0;
          this.oneFree = void 0;
          this.tenFree = void 0;
          this.hundredFree = void 0;
          this.oneCost = void 0;
          this.tenCost = void 0;
          this.hundredCost = void 0;
          this.selectShop = void 0;
        }

        onLoad() {
          this.scroller = this.node.getChildByPath("btns").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.updateBtn.bind(this));
          this.scroller.node.on('select', this.onSelect, this);
          this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
          this.awardScroller = this.node.getChildByPath("awards").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.awardScroller.SetHandle(this.updateAwardItem.bind(this));
          this.titleImg = this.node.getChildByPath("titleImg").getComponent(Sprite);
          this.numLab = this.node.getChildByPath("numLab").getComponent(Label);
          this.btnCont = this.node.getChildByPath("btnCont");
          this.yetNumLab = this.node.getChildByPath("yetNumLab").getComponent(Label);
          this.oneFree = this.node.getChildByPath("btnCont/oneBtn/freeLab").getComponent(Label);
          this.tenFree = this.node.getChildByPath("btnCont/tenBtn/freeLab").getComponent(Label);
          this.hundredFree = this.node.getChildByPath("btnCont/oneHundredBtn/freeLab").getComponent(Label);
          this.oneCost = this.node.getChildByPath("btnCont/oneBtn/costitem").addComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
            error: Error()
          }), CostItem) : CostItem);
          this.tenCost = this.node.getChildByPath("btnCont/tenBtn/costitem").addComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
            error: Error()
          }), CostItem) : CostItem);
          this.hundredCost = this.node.getChildByPath("btnCont/oneHundredBtn/costitem").addComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
            error: Error()
          }), CostItem) : CostItem);
          this.node.getChildByPath("btnCont/oneBtn").on(Input.EventType.TOUCH_END, this.onOne, this);
          this.node.getChildByPath("btnCont/tenBtn").on(Input.EventType.TOUCH_END, this.onTen, this);
          this.node.getChildByPath("btnCont/oneHundredBtn").on(Input.EventType.TOUCH_END, this.onHundred, this);
          super.onLoad();
        }

        Show(indexIds) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.node.active = true;
            if (!_this.hasLoad) yield _this.loadSub;
            var datas = [];

            for (var indexId of indexIds) {
              var content = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetShopByID(indexId);
              var stdIndex = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetShopIndexById(content.shopIndexId);
              datas.push(stdIndex);
            }

            _this.scroller.UpdateDatas(datas);

            _this.scroller.SelectFirst();

            _this.node.getChildByName("mask").active = false;
          })();
        }

        Hide() {
          this.node.active = false;
        }

        updateBtn(item, data, index) {
          var label = item.getChildByPath("Label").getComponent(Label);
          label.string = data.ShopName;
        }

        updateAwardItem(item, data) {
          var bagItem = item.getChildByName("item").getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!bagItem) bagItem = item.getChildByName("item").addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.setItem(data.itemType, data.itemId, data.count);
        }

        onSelect(index, item, data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$selectShop, _this2$selectShop2;

            _this2.selectShop = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetShopByID(data.ID);
            var stdLuck = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetShopLucky(data.LuckyID);
            var url = path.join("sheets/shop", stdLuck.LuckyBgRes, "spriteFrame");
            _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            var stdPool = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetShopLuckyPool(stdLuck.RewardPools);
            var num = 100,
                rewards = [];

            if (stdPool) {
              for (var i = 0; i < stdPool.Target.length; i++) {
                var _index = stdPool.Target[i];

                if (_index != undefined) {
                  var itemType = stdPool.RewardType[_index];
                  var itemId = stdPool.RewardId[_index];
                  var itemNum = stdPool.RewardNumber[_index];
                  if (itemType == undefined || itemId == undefined || itemNum == undefined) throw "luckpool表配置错误";
                  rewards.push({
                    itemType: itemType,
                    itemId: itemId,
                    count: itemNum
                  });
                } // awardList.push(ItemUtil.CreateThing(itemType, itemId, itemNum));

              }

              num = stdPool.GetNumber;
            }

            _this2.awardScroller.UpdateDatas(rewards);

            _this2.numLab.string = "" + Math.max(num - ((_this2$selectShop = _this2.selectShop) == null || (_this2$selectShop = _this2$selectShop.lucky) == null ? void 0 : _this2$selectShop.getNumber) || 0);
            _this2.yetNumLab.string = (((_this2$selectShop2 = _this2.selectShop) == null || (_this2$selectShop2 = _this2$selectShop2.lucky) == null ? void 0 : _this2$selectShop2.doCount) || 0) + "/" + stdLuck.Frequency;
            url = path.join("sheets/shop", stdLuck.LuckyTitleRes, "spriteFrame");
            _this2.titleImg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            var costType = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).item,
                costId = stdLuck.ConsumeX1ItemId[0],
                costNum = stdLuck.ConsumeX1Cost[0]; // 1次档位状态

            if (_this2.selectShop.lucky.freeX1Count > 0) {
              _this2.oneFree.string = "免费次数:" + _this2.selectShop.lucky.freeX1Count;
              _this2.oneCost.node.active = false;
            } else {
              _this2.oneFree.string = "";
              _this2.oneCost.node.active = true;

              _this2.oneCost.SetItem(costType, costId, costNum);
            } // 10次档位状态


            if (_this2.selectShop.lucky.freeX10Count > 0) {
              _this2.tenFree.string = "免费次数:" + _this2.selectShop.lucky.freeX10Count;
              _this2.tenCost.node.active = false;
            } else {
              _this2.tenFree.string = "";
              _this2.tenCost.node.active = true;

              _this2.tenCost.SetItem(costType, costId, costNum * 10);
            } // 100次档位状态


            if (stdLuck.ConsumeX100Type > 0) {
              _this2.hundredFree.string = "免费次数:" + stdLuck.ConsumeX100Type;
              _this2.hundredCost.node.active = false;
            } else {
              _this2.hundredCost.node.active = true;

              _this2.hundredCost.SetItem(costType, costId, costNum * 100);
            }

            _this2.btnCont.getComponent(Layout).updateLayout();
          })();
        }

        onOne() {
          if (!this.selectShop) return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("商城未开启");
          if (this.selectShop.lucky.frequency < 0) return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("抽卡次数不足");
          var req = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["shop.protocol.dolucky"]();
          req.shopIndexId = this.selectShop.shopIndexId;
          req.count = 1;
          req.convertCount = 0;
          this.node.getChildByName("mask").active = false;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.dolucky"], req);
        }

        onTen() {
          if (!this.selectShop) return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("商城未开启");
          if (this.selectShop.lucky.frequency < 0) return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("抽卡次数不足");
          var req = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["shop.protocol.dolucky"]();
          req.shopIndexId = this.selectShop.shopIndexId;
          req.count = 10;
          req.convertCount = 0;
          this.node.getChildByName("mask").active = false;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.dolucky"], req);
        }

        onHundred() {
          if (!this.selectShop) return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("商城未开启");
          if (this.selectShop.lucky.frequency < 0) return (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("抽卡次数不足");
          var req = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["shop.protocol.dolucky"]();
          req.shopIndexId = this.selectShop.shopIndexId;
          req.count = 100;
          req.convertCount = 0;
          this.node.getChildByName("mask").active = false;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.dolucky"], req);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b69f7c86c41a2e821e2e0957fdfcde1695e47d8.js.map