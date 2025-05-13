System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PlayerData, Req, Route, CfgMgr, AutoScroller, AsyncComponent, Input, Label, Slider, Sprite, SpriteFrame, UITransform, path, ShopItem, Tips, ResMgr, folder_item, Session, DateUtils, ShopDefinePage, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
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

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopCommodity(extras) {
    _reporterNs.report("StdShopCommodity", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopItem(extras) {
    _reporterNs.report("ShopItem", "./ShopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPanelPage(extras) {
    _reporterNs.report("IPanelPage", "../common/IPanelPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  _export("ShopDefinePage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      path = _cc.path;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.PlayerData;
    }, function (_unresolved_3) {
      Req = _unresolved_3.Req;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      AutoScroller = _unresolved_5.AutoScroller;
    }, function (_unresolved_6) {
      AsyncComponent = _unresolved_6.AsyncComponent;
    }, function (_unresolved_7) {
      ShopItem = _unresolved_7.ShopItem;
    }, function (_unresolved_8) {
      Tips = _unresolved_8.Tips;
    }, function (_unresolved_9) {
      ResMgr = _unresolved_9.ResMgr;
      folder_item = _unresolved_9.folder_item;
    }, function (_unresolved_10) {
      Session = _unresolved_10.Session;
    }, function (_unresolved_11) {
      DateUtils = _unresolved_11.DateUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17301vZE2pEuITZz3TiGczs", "ShopDefinePage", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Slider', 'Sprite', 'SpriteFrame', 'UITransform', 'path']);

      /**将shopitem再次封装，用于动态绑定shopIndexId的语法糖提示 */
      _export("ShopDefinePage", ShopDefinePage = class ShopDefinePage extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor() {
          super(...arguments);
          this.scroller = void 0;
          this.icon = void 0;
          this.numLab = void 0;
          this.nameLab = void 0;
          this.descLab = void 0;
          this.slider = void 0;
          this.progress = void 0;
          this.costIcon = void 0;
          this.costLab = void 0;
          this.timeLab = void 0;
          this.indexIds = [];
          this.selectShop = void 0;
          this.costCfg = void 0;
          this.limit = void 0;
          this.buyCount = 0;
          this.refreshShop = undefined;
        }

        onLoad() {
          this.scroller = this.node.getChildByPath("shopList").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          if (!this.scroller) this.scroller = this.node.getChildByPath("shopList").addComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.updateItem.bind(this));
          this.scroller.node.on('select', this.onSelect, this);
          this.icon = this.node.getChildByPath("infoView/itemShow/icon").getComponent(Sprite);
          this.numLab = this.node.getChildByPath("infoView/itemShow/numLab").getComponent(Label);
          this.nameLab = this.node.getChildByPath("infoView/nameLab").getComponent(Label);
          this.descLab = this.node.getChildByPath("infoView/descLab").getComponent(Label);
          this.slider = this.node.getChildByPath("infoView/Slider").getComponent(Slider);
          this.progress = this.node.getChildByPath("infoView/Slider/progress");
          this.costIcon = this.node.getChildByPath("infoView/costLayout/icon").getComponent(Sprite);
          this.costLab = this.node.getChildByPath("infoView/costLayout/cost").getComponent(Label);
          this.timeLab = this.node.getChildByPath("timeCont/timeLab").getComponent(Label);
          this.node.getChildByPath("infoView/del").on(Input.EventType.TOUCH_END, this.onDel, this);
          this.node.getChildByPath("infoView/add").on(Input.EventType.TOUCH_END, this.onAdd, this);
          this.node.getChildByPath("infoView/buyBtn").on(Input.EventType.TOUCH_END, this.onBuy, this);
          this.slider.node.on('slide', this.onSlide, this);
          super.onLoad();
        }

        sort(a, b) {
          var aseed = (a.count < 0 ? 1 : 0) * 10000 + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(a.id).Order;
          var bseed = (b.count < 0 ? 1 : 0) * 10000 + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(b.id).Order;
          return aseed - bseed;
        }

        Show(indexIds) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.selectShop = undefined;
            _this.node.active = true;
            if (!_this.hasLoad) yield _this.loadSub;
            _this.indexIds = indexIds;

            _this.updateData();
          })();
        }

        Hide() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.hasLoad) yield _this2.loadSub;
            _this2.node.active = false;
          })();
        }

        updateData(exceptIndex) {
          var _this3 = this;

          // 将相同tabSort的商店合并
          var adshops = [];
          var items = [];
          this.refreshShop = undefined;

          var _loop = function _loop() {
            var content = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetShopByID(indexId);

            if (content.shopIndexId != exceptIndex) {
              if (!_this3.refreshShop || _this3.refreshShop.shop.refreshTime > content.shop.refreshTime) _this3.refreshShop = content;
            }

            content.shop.adShopItems.forEach(value => {
              value['shopIndexId'] = content.shopIndexId;
              adshops.push(value);
            });
            content.shop.shopItems.forEach(value => {
              value['shopIndexId'] = content.shopIndexId;
              items.push(value);
            });
          };

          for (var indexId of this.indexIds) {
            _loop();
          } // 排序


          adshops.sort(this.sort);
          items.sort(this.sort);
          var datas = adshops.concat(items);

          if (datas.length) {
            this.scroller.UpdateDatas(datas);
            this.scroller.SelectFirst();
            this.nameLab.node.parent.active = true;
          } else {
            this.nameLab.node.parent.active = false;
          }
        }

        update(dt) {
          var size = this.slider.node.getComponent(UITransform).contentSize;
          this.progress.getComponent(UITransform).setContentSize(this.slider.progress * size.width, 13.448);

          if (this.refreshShop) {
            this.timeLab.node.parent.active = true;
            var residueTime = Math.max(Math.floor(this.refreshShop.shop.refreshTime - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime), 0);
            this.timeLab.string = "刷新时间：" + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).FormatTime(residueTime, "%{hh}:%{mm}:%{ss}");

            if (residueTime <= 0) {
              var shop_index = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["shop.protocol.getindex"]();
              shop_index.shopIndexId = undefined; //[this.refreshShop.shopIndexId];

              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).sendAsync((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["shop.protocol.getindex"], shop_index);
              this.updateData(this.refreshShop.shopIndexId);
            } else {}
          } else {
            this.timeLab.node.parent.active = false;
            this.timeLab.string = "刷新时间：--:--:--";
          }
        }

        updateItem(item, data, index) {
          var shopItem = item.getComponent(_crd && ShopItem === void 0 ? (_reportPossibleCrUseOfShopItem({
            error: Error()
          }), ShopItem) : ShopItem);
          if (!shopItem) shopItem = item.addComponent(_crd && ShopItem === void 0 ? (_reportPossibleCrUseOfShopItem({
            error: Error()
          }), ShopItem) : ShopItem);
          shopItem.SetData(data);
        }

        onSelect(index, item, data) {
          var _GetCommShopItem;

          if (this.selectShop != data) this.buyCount = 1;
          this.selectShop = data;
          this.costCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(data.id);
          var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.costCfg.GoodsID[0]);
          this.nameLab.string = stdItem.ItemName;
          this.descLab.string = stdItem.Remark;
          this.nameLab.node.parent.active = true;
          this.limit = ((_GetCommShopItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(this.selectShop.id)) == null ? void 0 : _GetCommShopItem.GoodAmount) || 1000;
          this.updateProgress();
        }

        onSlide(e) {
          if (!this.selectShop) return;
          this.buyCount = Math.max(Math.ceil(this.limit * this.slider.progress), 1);
          this.updateProgress();
        }

        updateProgress() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            _this4.slider.progress = _this4.buyCount / _this4.limit;
            var url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(_this4.costCfg.CostID[0]).Icon, "spriteFrame");
            _this4.costIcon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            _this4.costLab.string = (_this4.costCfg.CostNumber[0] * _this4.buyCount).toString();
            _this4.numLab.string = "×" + _this4.buyCount.toString();
          })();
        }

        onDel() {
          this.buyCount = Math.max(1, this.buyCount - 1);
          this.updateProgress();
        }

        onAdd() {
          this.buyCount = Math.max(1, this.buyCount + 1);
          this.updateProgress();
        }

        onBuy() {
          if (!this.selectShop) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("请选择需要购买的商品");
            return;
          }

          var buy_item = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["shop.protocol.buyitem"]();
          buy_item.buyCount = this.buyCount;
          buy_item.buyId = this.costCfg.Id;
          buy_item.shopIndexId = this.selectShop.shopIndexId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.buyitem"], buy_item);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83d9862c1dc37df75354abd39f7b29f7838fe992.js.map