System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, path, Sprite, SpriteFrame, Layout, ResMgr, Session, MsgPanel, EventMgr, Evt_AdvisterUpdate, AutoScroller, ConsumeItem, ConsumeNumFormatType, CfgMgr, ThingTypeName, ItemUtil, PlayerData, AwardItem, Req, Route, ShopLuckyItem, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_AdvisterUpdate(extras) {
    _reporterNs.report("Evt_AdvisterUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumeItem(extras) {
    _reporterNs.report("ConsumeItem", "../common/ConsumeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumeNumFormatType(extras) {
    _reporterNs.report("ConsumeNumFormatType", "../common/ConsumeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdLuckyShop(extras) {
    _reporterNs.report("StdLuckyShop", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopLuckyPool(extras) {
    _reporterNs.report("StdShopLuckyPool", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardItem(extras) {
    _reporterNs.report("AwardItem", "../common/AwardItem", _context.meta, extras);
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

  _export("ShopLuckyItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Layout = _cc.Layout;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      MsgPanel = _unresolved_4.MsgPanel;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_AdvisterUpdate = _unresolved_5.Evt_AdvisterUpdate;
    }, function (_unresolved_6) {
      AutoScroller = _unresolved_6.AutoScroller;
    }, function (_unresolved_7) {
      ConsumeItem = _unresolved_7.ConsumeItem;
      ConsumeNumFormatType = _unresolved_7.ConsumeNumFormatType;
    }, function (_unresolved_8) {
      CfgMgr = _unresolved_8.CfgMgr;
      ThingTypeName = _unresolved_8.ThingTypeName;
    }, function (_unresolved_9) {
      ItemUtil = _unresolved_9.ItemUtil;
    }, function (_unresolved_10) {
      PlayerData = _unresolved_10.PlayerData;
    }, function (_unresolved_11) {
      AwardItem = _unresolved_11.AwardItem;
    }, function (_unresolved_12) {
      Req = _unresolved_12.Req;
      Route = _unresolved_12.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa20caXBPFJhJ7qAqryybJw", "ShopLuckyItem", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'path', 'Sprite', 'SpriteFrame', 'Node', 'game', 'Layout']);

      _export("ShopLuckyItem", ShopLuckyItem = class ShopLuckyItem extends Component {
        constructor(...args) {
          super(...args);
          this.bg = void 0;
          this.titleImg = void 0;
          this.numLab = void 0;
          this.yetNumLab = void 0;
          this.btnLayout = void 0;
          this.oneBtn = void 0;
          this.oneAdBtn = void 0;
          this.oneAdBtnLab = void 0;
          this.oneFreeNumLab = void 0;
          this.oneConsumeItem = void 0;
          this.tenBtn = void 0;
          this.helpBtn = void 0;
          this.tenFreeNumLab = void 0;
          this.tenConsumeItem = void 0;
          this.oneHundredBtn = void 0;
          this.oneHundredFreeNumLab = void 0;
          this.oneHundredConsumeItem = void 0;
          this.awardList = void 0;
          this.isInit = false;
          this.std = void 0;
          this.data = void 0;
          this.jumpAd = void 0;
        }

        onLoad() {
          this.bg = this.node.getChildByName("bg").getComponent(Sprite);
          this.titleImg = this.node.getChildByName("titleImg").getComponent(Sprite);
          this.numLab = this.node.getChildByName("numLab").getComponent(Label);
          this.yetNumLab = this.node.getChildByName("yetNumLab").getComponent(Label);
          this.btnLayout = this.node.getChildByName("btnCont").getComponent(Layout);
          this.oneBtn = this.node.getChildByPath("btnCont/oneBtn").getComponent(Button);
          this.oneFreeNumLab = this.node.getChildByPath("btnCont/oneBtn/oneFreeNumLab").getComponent(Label);
          this.oneConsumeItem = this.node.getChildByPath("btnCont/oneBtn/oneConsumeItem").addComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          this.oneAdBtn = this.node.getChildByPath("btnCont/oneAdBtn").getComponent(Button);
          this.jumpAd = this.node.getChildByPath("btnCont/oneAdBtn/cont/icon/jumpAd");
          this.oneAdBtnLab = this.node.getChildByPath("btnCont/oneAdBtn/cont/oneAdBtnLab").getComponent(Label);
          this.tenBtn = this.node.getChildByPath("btnCont/tenBtn").getComponent(Button);
          this.tenFreeNumLab = this.node.getChildByPath("btnCont/tenBtn/tenFreeNumLab").getComponent(Label);
          this.tenConsumeItem = this.node.getChildByPath("btnCont/tenBtn/tenConsumeItem").addComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          this.oneHundredBtn = this.node.getChildByPath("btnCont/oneHundredBtn").getComponent(Button);
          this.oneHundredFreeNumLab = this.node.getChildByPath("btnCont/oneHundredBtn/oneHundredFreeNumLab").getComponent(Label);
          this.oneHundredConsumeItem = this.node.getChildByPath("btnCont/oneHundredBtn/oneHundredConsumeItem").addComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          this.awardList = this.node.getChildByName("awardList").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          if (!this.awardList) this.awardList = this.node.getChildByName("awardList").addComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.helpBtn = this.node.getChildByName("helpBtn").getComponent(Button);
          this.awardList.SetHandle(this.updateAwardItem.bind(this));
          this.awardList.node.on('select', this.onAwardItemSelect, this);
          this.oneConsumeItem.numFormatType = (_crd && ConsumeNumFormatType === void 0 ? (_reportPossibleCrUseOfConsumeNumFormatType({
            error: Error()
          }), ConsumeNumFormatType) : ConsumeNumFormatType).ContrastHave;
          this.tenConsumeItem.numFormatType = (_crd && ConsumeNumFormatType === void 0 ? (_reportPossibleCrUseOfConsumeNumFormatType({
            error: Error()
          }), ConsumeNumFormatType) : ConsumeNumFormatType).ContrastHave;
          this.oneHundredConsumeItem.numFormatType = (_crd && ConsumeNumFormatType === void 0 ? (_reportPossibleCrUseOfConsumeNumFormatType({
            error: Error()
          }), ConsumeNumFormatType) : ConsumeNumFormatType).ContrastHave;
          this.isInit = true;
          this.tenBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.oneBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.oneAdBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.helpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.oneHundredBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.updateShow();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_AdvisterUpdate === void 0 ? (_reportPossibleCrUseOfEvt_AdvisterUpdate({
            error: Error()
          }), Evt_AdvisterUpdate) : Evt_AdvisterUpdate, this.onAdvisterUpdate, this);
        }

        update(dt) {
          this.updateAdCdTime();
        }

        updateAdCdTime() {
          let adId = this.std.shopStd.AdTime; // if (adId > 0) {
          //     let adData: SAdvister = PlayerData.GetAdvisterData(adId);
          //     let stdAd: StdAdvister = CfgMgr.GetAdvister(adId);
          //     let cd: number = adData.cdEndTime - game.totalTime;
          //     if (cd > 0) {
          //         this.oneAdBtnLab.string = DateUtils.FormatTime(cd / 1000, "%{mm}:%{ss}");
          //     } else {
          //         this.oneAdBtnLab.string = `免费(${adData.count}/${stdAd.Max_numb})`;
          //     }
          // }
        }

        onAdvisterUpdate() {
          if (!this.node.activeInHierarchy) return;
          this.updateAddTime();
        }

        updateAddTime() {
          if (!this.std) return;

          if (this.data && this.data.freeX1Count > 0) {
            this.oneAdBtn.node.active = false;
            this.oneBtn.node.active = true;
            this.oneFreeNumLab.node.active = true;
            this.oneFreeNumLab.string = `免费次数：${this.data.freeX1Count}`;
            this.oneConsumeItem.node.active = false;
          } else {
            let adId = this.std.shopStd.AdTime;

            if (adId > 0) {// let adData: SAdvister = PlayerData.GetAdvisterData(adId);
              // let stdAd: StdAdvister = CfgMgr.GetAdvister(adId);
              // if (adData.count < 1) {
              //     this.oneAdBtn.node.active = false;
              //     this.oneBtn.node.active = true;
              //     this.oneFreeNumLab.node.active = false;
              //     this.oneConsumeItem.node.active = true;
              //     let item = ItemUtil.CreateThing(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0]);
              //     this.oneConsumeItem.SetData(item);
              // } else {
              //     this.oneAdBtn.node.active = true;
              //     this.jumpAd.active = PlayerData.GetIsActivateRights(StdEquityId.Id_9) || PlayerData.GetIsActivateRights(StdEquityId.Id_10);
              //     this.oneBtn.node.active = false;
              // }
            } else {
              this.oneFreeNumLab.node.active = false;
              this.oneConsumeItem.node.active = true;
              let item = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                error: Error()
              }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item, this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0]);
              this.oneConsumeItem.SetData(item);
            }
          }
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.oneBtn:
              if (!this.data) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("商城未开启");
                return;
              }

              if (this.data.frequency < 0) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("抽卡次数不足");
                return;
              }

              if (this.data.freeX1Count < 1) {
                // if(this.std.shopStd.ConvertToConsumeType && this.std.shopStd.ConvertToConsumeType.length && this.std.shopStd.ConsumeX1Type[0] != this.std.shopStd.ConvertToConsumeType[0]){
                //     if (!ItemUtil.CheckThingConsumes(this.std.shopStd.ConsumeX1Type, this.std.shopStd.ConsumeX1ItemId, this.std.shopStd.ConsumeX1Cost, false)) {
                //         // let count: number = ItemUtil.GetHaveThingNum(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0]);
                //         ShopLuckyBuyPanel.Show(this.std, 1, 1);
                //         return;
                //     }  
                // }else{
                if (!(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                  error: Error()
                }), ItemUtil) : ItemUtil).CheckThingConsumes(null, this.std.shopStd.ConsumeX1ItemId, this.std.shopStd.ConsumeX1Cost, true)) {
                  return;
                } // }

              }

              let shop_luck_1 = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["shop.protocol.dolucky"]();
              shop_luck_1.convertCount = 0;
              shop_luck_1.count = 1;
              shop_luck_1.shopIndexId = this.std.shopId;
              shop_luck_1.skipFree = false;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["shop.protocol.dolucky"], shop_luck_1);
              break;

            case this.tenBtn:
              if (!this.data) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("商城未开启");
                return;
              }

              if (this.data.frequency < 0) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("抽卡次数不足");
                return;
              }

              if (this.data.freeX10Count < 1) {
                let needCount = this.std.shopStd.ConsumeX1Cost[0] * 10; // if(this.std.shopStd.ConvertToConsumeType && this.std.shopStd.ConvertToConsumeType.length && this.std.shopStd.ConsumeX1Type[0] != this.std.shopStd.ConvertToConsumeType[0]){
                //     if (!ItemUtil.CheckThingConsumes(this.std.shopStd.ConsumeX1Type, this.std.shopStd.ConsumeX1ItemId, [needCount], false)) {
                //         // let haveNum: number = ItemUtil.GetHaveThingNum(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0]);
                //         // ShopLuckyBuyPanel.Show(this.std, 10, needCount - haveNum);
                //         return;
                //     }
                // }else{

                if (!(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                  error: Error()
                }), ItemUtil) : ItemUtil).CheckThingConsumes(null, this.std.shopStd.ConsumeX1ItemId, [needCount], true)) {
                  return;
                } // }

              }

              let shop_luck_10 = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["shop.protocol.dolucky"]();
              shop_luck_10.convertCount = 0;
              shop_luck_10.count = 10;
              shop_luck_10.shopIndexId = this.std.shopId;
              shop_luck_10.skipFree = false;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["shop.protocol.dolucky"], shop_luck_10);
              break;

            case this.oneHundredBtn:
              if (!this.data) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("商城未开启");
                return;
              }

              if (this.data.frequency < 0) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("抽卡次数不足");
                return;
              }

              let needCount = this.std.shopStd.ConsumeX1Cost[0] * 100; // if(this.std.shopStd.ConvertToConsumeType && this.std.shopStd.ConvertToConsumeType.length && this.std.shopStd.ConsumeX1Type[0] != this.std.shopStd.ConvertToConsumeType[0]){
              //     if (!ItemUtil.CheckThingConsumes(this.std.shopStd.ConsumeX1Type, this.std.shopStd.ConsumeX1ItemId, [needCount], false)) {
              //         // let haveNum: number = ItemUtil.GetHaveThingNum(this.std.shopStd.ConsumeX1Type[0], this.std.shopStd.ConsumeX1ItemId[0]);
              //         // ShopLuckyBuyPanel.Show(this.std, 10, needCount - haveNum);
              //         // return;
              //     }
              // }else{

              if (!(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                error: Error()
              }), ItemUtil) : ItemUtil).CheckThingConsumes(null, this.std.shopStd.ConsumeX1ItemId, [needCount], true)) {
                return;
              } // }


              let shop_luck_100 = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["shop.protocol.dolucky"]();
              shop_luck_100.convertCount = 0;
              shop_luck_100.count = 100;
              shop_luck_100.shopIndexId = this.std.shopId;
              shop_luck_100.skipFree = false;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["shop.protocol.dolucky"], shop_luck_100);
              break;

            case this.helpBtn:
              // let stdPool: StdShopLuckyPool = CfgMgr.GetShopLuckyPool(this.std.shopStd.RewardPools);
              // if (stdPool) {
              //     Tips2.Show(stdPool.Instructions);
              // }
              break;

            case this.oneAdBtn:
              // let adId: number = this.std.shopStd.AdTime;
              // let adData: SAdvister = PlayerData.GetAdvisterData(adId);
              // if (!adData || adData.count < 1) {
              //     MsgPanel.Show("广告已看完");
              //     return;
              // }
              // if (game.totalTime < adData.cdEndTime) {
              //     MsgPanel.Show("冷却中，请稍后！");
              //     return;
              // }
              this.oneAdBtn.interactable = false; // SetNodeGray(this.oneAdBtn.node, true, true);
              // if(PlayerData.GetIsActivateRights(StdEquityId.Id_9) || PlayerData.GetIsActivateRights(StdEquityId.Id_10)){
              //     AdHelper.JumpAd(adId, "")
              // }else{
              //     console.log("AdHelper---> rewardAdId3:", GameSet.globalCfg.ad_channel.rewardAdId3);
              //     let action, errorCode, errorMsg;
              //     if (Math.abs(GameSet.globalCfg.ad_channel.rewardAdId3) == 1) {
              //         [action, errorCode, errorMsg] = await AdHelper.rewardAd(getAdcfg().rewardAdId3, adId, "");
              //     } else {
              //         [action, errorCode, errorMsg] = await AdHelper.rewardQbAd(getQbAdCfg().rewardAdId3, adId, "");
              //     }
              //     if (action == "onLoadFailed") {
              //         if (Math.abs(GameSet.globalCfg.ad_channel.rewardAdId3) == 1) {
              //             if (GameSet.globalCfg.ad_channel.rewardAdId3 > 0) GameSet.globalCfg.ad_channel.rewardAdId3 = 2;
              //             Tips.Show("广告加载失败，请稍后再试！");
              //         } else {
              //             if (GameSet.globalCfg.ad_channel.rewardAdId3 > 0) GameSet.globalCfg.ad_channel.rewardAdId3 = 1;
              //             Tips.Show("广告展示失败，请稍后再试！");
              //         }
              //     } else {
              //         // SetNodeGray(this.oneAdBtn.node, false, true);
              //     }
              //     PlayerData.SetAdvisterCd(adId);
              //     this.oneAdBtn.interactable = true;
              // }

              break;
          }
        }

        SetData(std) {
          this.std = std;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.std) return;

          if (this.std.shopStd.ConsumeX100Type > 0) {
            this.btnLayout.paddingLeft = 46;
            this.btnLayout.paddingRight = 46;
            this.btnLayout.spacingX = 20;
            this.oneHundredBtn.node.active = true;
            let item = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item, this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0] * 100);
            this.oneHundredConsumeItem.SetData(item);
          } else {
            this.btnLayout.paddingLeft = 97;
            this.btnLayout.paddingRight = 97;
            this.btnLayout.spacingX = 60;
            this.oneHundredBtn.node.active = false;
          }

          this.btnLayout.updateLayout();
          this.data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetShopLuckyData(this.std.shopId);
          let url = path.join("sheets/shop", this.std.shopStd.LuckyBgRes, "spriteFrame");
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
            this.bg.spriteFrame = res;
          });
          url = path.join("sheets/shop", this.std.shopStd.LuckyTitleRes, "spriteFrame");
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
            this.titleImg.spriteFrame = res;
          });
          let stdPool = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetShopLuckyPool(this.std.shopStd.RewardPools);
          let awardList = [];
          let num = 100;

          if (stdPool) {
            for (let i = 0; i < stdPool.Target.length; i++) {
              let index = stdPool.Target[i];
              let itemType = stdPool.RewardType[index];
              let itemId = stdPool.RewardId[index];
              let itemNum = stdPool.RewardNumber[index];
              awardList.push((_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                error: Error()
              }), ItemUtil) : ItemUtil).CreateThing(itemType, itemId, itemNum));
            }

            num = stdPool.GetNumber;
          }

          this.awardList.UpdateDatas(awardList);
          this.numLab.string = num.toString();
          this.yetNumLab.string = `${Math.max(num - (this.data ? this.data.getNumber : 0))}次`;
          this.numLab.string = `${Math.max(num - (this.data ? this.data.getNumber : 0))}`;
          this.yetNumLab.string = `${Math.max(this.data ? this.data.doCount : 0)}/${this.std.shopStd.Frequency}`;
          this.updateAddTime();

          if (this.data && this.data.freeX10Count > 0) {
            this.tenFreeNumLab.node.active = true;
            this.tenFreeNumLab.string = `免费次数：${this.data.freeX10Count}`;
            this.tenConsumeItem.node.active = false;
          } else {
            this.tenFreeNumLab.node.active = false;
            this.tenConsumeItem.node.active = true;
            let item = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item, this.std.shopStd.ConsumeX1ItemId[0], this.std.shopStd.ConsumeX1Cost[0] * 10);
            this.tenConsumeItem.SetData(item);
          }
        }

        updateAwardItem(item, data) {
          let awardItem = item.getComponent(_crd && AwardItem === void 0 ? (_reportPossibleCrUseOfAwardItem({
            error: Error()
          }), AwardItem) : AwardItem);
          if (!awardItem) awardItem = item.addComponent(_crd && AwardItem === void 0 ? (_reportPossibleCrUseOfAwardItem({
            error: Error()
          }), AwardItem) : AwardItem);
          awardItem.SetData({
            itemData: data
          }, true);
        }

        onAwardItemSelect(index, item) {// console.log("onSelect", index);
          // let data: SThing = item.getComponent(AwardItem).itemData as SThing;
          // ItemTips.Show(data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ddc10920afc3718f8b6d8d121824678e132fc1f.js.map