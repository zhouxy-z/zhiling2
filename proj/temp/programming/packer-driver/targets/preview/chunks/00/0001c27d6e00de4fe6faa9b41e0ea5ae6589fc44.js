System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, path, sp, Sprite, SpriteFrame, tween, Tween, UIOpacity, Vec3, ShopBasePage, ShopBuyPanel, ResMgr, ShopRefreshPanel, AutoScroller, CfgMgr, PlayerData, ShopCommItem, ShopCommPage, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfShopBasePage(extras) {
    _reporterNs.report("ShopBasePage", "./ShopPageBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopBuyPanel(extras) {
    _reporterNs.report("ShopBuyPanel", "./ShopBuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopRefreshPanel(extras) {
    _reporterNs.report("ShopRefreshPanel", "./ShopRefreshPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShop(extras) {
    _reporterNs.report("StdShop", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopCommodity(extras) {
    _reporterNs.report("StdShopCommodity", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopIndex(extras) {
    _reporterNs.report("StdShopIndex", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSShopItem(extras) {
    _reporterNs.report("SShopItem", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopCommItem(extras) {
    _reporterNs.report("ShopCommItem", "./ShopCommItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("ShopCommPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      path = _cc.path;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ShopBasePage = _unresolved_2.ShopBasePage;
    }, function (_unresolved_3) {
      ShopBuyPanel = _unresolved_3.ShopBuyPanel;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
    }, function (_unresolved_5) {
      ShopRefreshPanel = _unresolved_5.ShopRefreshPanel;
    }, function (_unresolved_6) {
      AutoScroller = _unresolved_6.AutoScroller;
    }, function (_unresolved_7) {
      CfgMgr = _unresolved_7.CfgMgr;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      ShopCommItem = _unresolved_9.ShopCommItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93950Io9PlC26Er00/0tpVg", "ShopCommPage", undefined);

      __checkObsolete__(['Button', 'Component', 'game', 'Label', 'Node', 'path', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'Tween', 'UIOpacity', 'Vec3']);

      _export("ShopCommPage", ShopCommPage = class ShopCommPage extends (_crd && ShopBasePage === void 0 ? (_reportPossibleCrUseOfShopBasePage({
        error: Error()
      }), ShopBasePage) : ShopBasePage) {
        constructor() {
          super(...arguments);
          this.titleImg = void 0;
          this.effect = void 0;
          this.shopList = void 0;
          this.timeCont = void 0;
          this.timeLab = void 0;
          this.refreshBtn = void 0;
          this.refreshBtnLab = void 0;
          this.stdShopIndex = void 0;
          this.shopData = void 0;
          this.noneListCont = void 0;
          this.shopDatas = void 0;
          this.isPlayListEffect = true;
          this.tempTime = 0;
          this.loop = 0;
        }

        onLoad() {
          this.titleImg = this.node.getChildByPath("titleCont/titleImg").getComponent(Sprite);
          this.effect = this.node.getChildByName("effectCont").getComponent(sp.Skeleton);
          this.noneListCont = this.node.getChildByName("noneListCont");
          this.shopList = this.node.getChildByName("shopList").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.shopList.SetHandle(this.updateShopItem.bind(this));
          this.shopList.node.on('select', this.onShopSelect, this);
          this.timeCont = this.node.getChildByPath("timeCont");
          this.timeLab = this.node.getChildByPath("timeCont/timeLab").getComponent(Label);
          this.refreshBtn = this.node.getChildByPath("timeCont/refreshBtn").getComponent(Button);
          this.refreshBtnLab = this.node.getChildByPath("timeCont/refreshBtn/refreshBtnLab").getComponent(Label);
          this.refreshBtn.node.on(Button.EventType.CLICK, this.onRefreshClcik, this);
          super.onLoad();
        }

        update(dt) {
          if (this.shopData) {// let residueTime: number = Math.max(Math.floor(this.shopData.refresh_time - PlayerData.GetServerTime()), 0);
            //     this.timeLab.string = "刷新时间：" + DateUtils.FormatTime(residueTime, "%{hh}:%{mm}:%{ss}");
            //     if (residueTime <= 0) {
            //         if (this.tempTime <= 0) {
            //             this.tempTime = 1;
            //             Session.Send({ type: MsgTypeSend.ShopGetIndex, data: { shop_index_id: [this.stdShopIndex.ID] } });
            //         } else {
            //             this.tempTime -= dt;
            //         }
            //     } else {
            //         this.tempTime = 1;
            //     }
            // } else {
            //     this.timeLab.string = "刷新时间：--:--:--";
          }
        }

        onShow() {
          super.onShow();
          this.isPlayListEffect = true;
        }

        onHide() {
          super.onHide();
          this.isPlayListEffect = false;
        }

        UpdateShow() {
          if (!this.data) return;
          this.stdShopIndex = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetShopIndex(this.data.ShopGroupId, this.data.ShopType);
          var url = path.join("sheets/shop", this.stdShopIndex.TitleImgRes, "spriteFrame");
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
            this.titleImg.spriteFrame = res;
          });
          this.shopId = this.stdShopIndex.ID;
          this.shopData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCommShopData(this.shopId);
          if (!this.shopData) return;
          var stdShop = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetShop(this.shopData.shopId);
          this.refreshBtn.node.active = stdShop.IsCanManualRefresh > 0;

          if (this.shopData) {
            this.noneListCont.active = false;
          } else {
            this.noneListCont.active = true;
          }

          var soldOut = [];
          var normal = [];
          var adItemList = [];

          if (this.shopData) {
            var lists = this.shopData.shopItems;
            adItemList = this.shopData.adShopItems ? this.shopData.adShopItems.concat() : [];

            for (var index = 0; index < lists.length; index++) {
              var shopItem = lists[index];
              var std_s = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCommShopItem(shopItem.id); // console.log(std_s, shopItem.id)

              if (std_s && std_s.GoodAmount > 0 && shopItem.count < 1) {
                soldOut.push(shopItem);
              } else {
                normal.push(shopItem);
              }
            }
          }

          soldOut.sort(this.shopSort);
          normal.sort(this.shopSort);
          this.shopDatas = normal.concat(soldOut);
          this.shopDatas = adItemList.concat(this.shopDatas);
          this.shopList.UpdateDatas(this.shopDatas);

          if (this.isPlayListEffect) {
            // NodeTrickleOutEffect(this.shopList.children, 0.2);
            this.isPlayListEffect = false;
          }
        }

        shopSort(a, b) {
          var stdA = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(a.id);
          var stdB = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(b.id);
          return b.order - a.order;
        }

        updateOnShow() {
          var opacity = this.titleImg.node.getComponent(UIOpacity);
          Tween.stopAllByTarget(opacity);
          Tween.stopAllByTarget(this.titleImg.node);
          this.titleImg.node.position = new Vec3(-80, 0, 0);
          opacity.opacity = 100;
          tween(this.titleImg.node).to(0.2, {
            position: new Vec3(0, 0, 0)
          }).start();
          tween(opacity).to(0.3, {
            opacity: 255
          }).start();
          this.effect.setAnimation(0, "Start", false);
          this.effect.setCompleteListener(() => {
            this.effect.setAnimation(0, "Loop", true);
          });
        }

        onRefreshClcik() {
          if (this.shopData) {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetShop(this.shopData.shopId);

            if (std.RefreshThingType && std.RefreshThingType) {
              (_crd && ShopRefreshPanel === void 0 ? (_reportPossibleCrUseOfShopRefreshPanel({
                error: Error()
              }), ShopRefreshPanel) : ShopRefreshPanel).Show(std, this.shopId);
            } else {// Session.Send({ type: MsgTypeSend.ShopManualRefresh, data: { shop_index_id: this.shopId } });
            }
          }
        }

        updateShopItem(item, data, index) {
          var shopItem = item.getComponent(_crd && ShopCommItem === void 0 ? (_reportPossibleCrUseOfShopCommItem({
            error: Error()
          }), ShopCommItem) : ShopCommItem);
          if (!shopItem) shopItem = item.addComponent(_crd && ShopCommItem === void 0 ? (_reportPossibleCrUseOfShopCommItem({
            error: Error()
          }), ShopCommItem) : ShopCommItem);
          shopItem.SetData(data, this.shopData.shopId);
        }

        onShopSelect(index, item) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var shopData = _this.shopDatas[index]; // let std = CfgMgr.GetCommShopItem(shopData.id);
            // if (shopData.isAdItem) {
            //     let stdShop: StdShop = CfgMgr.GetShop(this.shopData.shop_id);
            //     if (stdShop.AdId > 0) {
            //         let adData: SAdvister = PlayerData.GetAdvisterData(stdShop.AdId);
            //         if (adData.count <= 0) {
            //             MsgPanel.Show("今日广告奖励次数已达上限");
            //             return;
            //         }
            //         if (game.totalTime < adData.cdEndTime) {
            //             MsgPanel.Show("冷却中，请稍后！");
            //             return;
            //         }
            //         if (this.loop) return;
            //         this.loop = game.totalTime;
            //         if(PlayerData.GetIsActivateRights(StdEquityId.Id_9) || PlayerData.GetIsActivateRights(StdEquityId.Id_10)){
            //             AdHelper.JumpAd(stdShop.AdId, "")
            //         }else{
            //             console.log("AdHelper---> rewardAdId2:", GameSet.globalCfg.ad_channel.rewardAdId2);
            //             let action, errorCode, errorMsg;
            //             if (Math.abs(GameSet.globalCfg.ad_channel.rewardAdId2) == 1) {
            //                 [action, errorCode, errorMsg] = await AdHelper.rewardAd(getAdcfg().rewardAdId2, stdShop.AdId, "");
            //             } else {
            //                 [action, errorCode, errorMsg] = await AdHelper.rewardQbAd(getQbAdCfg().rewardAdId2, stdShop.AdId, "");
            //             }
            //             if (action == "onLoadFailed") {
            //                 Tips.Show("广告加载失败，请稍后再试！");
            //                 if (Math.abs(GameSet.globalCfg.ad_channel.rewardAdId2) == 1) {
            //                     if (GameSet.globalCfg.ad_channel.rewardAdId2 > 0) GameSet.globalCfg.ad_channel.rewardAdId2 = 2;
            //                     Tips.Show("广告加载失败，请稍后再试！");
            //                 } else {
            //                     if (GameSet.globalCfg.ad_channel.rewardAdId2 > 0) GameSet.globalCfg.ad_channel.rewardAdId2 = 1;
            //                     Tips.Show("广告展示失败，请稍后再试！");
            //                 }
            //             }
            //             this.loop = undefined;
            //             PlayerData.SetAdvisterCd(stdShop.AdId);
            //         }
            //     }
            // } else {
            //     if (std.GoodAmount > 0 && shopData.count < 1) {
            //         MsgPanel.Show("道具已售馨");
            //         return;
            //     }
            //     if (std.LimitBuyTime > 0 && shopData.expiration_time - PlayerData.GetServerTime() <= 0) {
            //         MsgPanel.Show("道具已超出时间，无法继续兑换");
            //         return;
            //     }

            (_crd && ShopBuyPanel === void 0 ? (_reportPossibleCrUseOfShopBuyPanel({
              error: Error()
            }), ShopBuyPanel) : ShopBuyPanel).Show(_this.shopId, shopData); // }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0001c27d6e00de4fe6faa9b41e0ea5ae6589fc44.js.map