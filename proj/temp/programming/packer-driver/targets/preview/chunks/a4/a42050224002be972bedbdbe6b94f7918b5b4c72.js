System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, Label, Vec3, CfgMgr, ItemType, ThingTypeName, ConsumeItem, ItemUtil, AwardItem, ShopCommItem, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShop(extras) {
    _reporterNs.report("StdShop", "../../manager/CfgMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfConsumeItem(extras) {
    _reporterNs.report("ConsumeItem", "../common/ConsumeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardItem(extras) {
    _reporterNs.report("AwardItem", "../common/AwardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("ShopCommItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
      ItemType = _unresolved_2.ItemType;
      ThingTypeName = _unresolved_2.ThingTypeName;
    }, function (_unresolved_3) {
      ConsumeItem = _unresolved_3.ConsumeItem;
    }, function (_unresolved_4) {
      ItemUtil = _unresolved_4.ItemUtil;
    }, function (_unresolved_5) {
      AwardItem = _unresolved_5.AwardItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd8ffbXizdO0IWLwENbu6gi", "ShopCommItem", undefined);

      __checkObsolete__(['Button', 'Component', 'path', 'Sprite', 'SpriteFrame', 'Node', 'Label', 'Vec3', 'game']);

      _export("ShopCommItem", ShopCommItem = class ShopCommItem extends Component {
        constructor() {
          super(...arguments);
          this.bg = void 0;
          this.adBg = void 0;
          this.disCont = void 0;
          this.disNumLab = void 0;
          this.awardItem = void 0;
          this.limitCont = void 0;
          this.limtNumLab = void 0;
          this.timeCont = void 0;
          this.limtTimeTitle = void 0;
          this.limtTimeLab = void 0;
          this.adCont = void 0;
          this.jumpAd = void 0;
          this.adNumLab = void 0;
          this.consumeItem = void 0;
          this.noBuy = void 0;
          this.sellOut = void 0;
          this.overTime = void 0;
          this.isInit = false;
          this.std = void 0;
          this.data = void 0;
          this.shopId = void 0;
        }

        onLoad() {
          this.bg = this.node.getChildByName("bg").getComponent(Sprite);
          this.adBg = this.node.getChildByName("adBg").getComponent(Sprite);
          this.disCont = this.node.getChildByName("disCont");
          this.disNumLab = this.node.getChildByPath("disCont/disNumLab").getComponent(Label);
          this.awardItem = this.node.getChildByName("AwardItem").addComponent(_crd && AwardItem === void 0 ? (_reportPossibleCrUseOfAwardItem({
            error: Error()
          }), AwardItem) : AwardItem);
          this.limitCont = this.node.getChildByName("limitCont");
          this.limtNumLab = this.node.getChildByPath("limitCont/limtNumLab").getComponent(Label);
          this.timeCont = this.node.getChildByPath("limitCont/timeCont");
          this.limtTimeTitle = this.node.getChildByPath("limitCont/timeCont/limtTimeTitle").getComponent(Label);
          this.limtTimeLab = this.node.getChildByPath("limitCont/timeCont/limtTimeLab").getComponent(Label);
          this.consumeItem = this.node.getChildByName("consumeItem").addComponent(_crd && ConsumeItem === void 0 ? (_reportPossibleCrUseOfConsumeItem({
            error: Error()
          }), ConsumeItem) : ConsumeItem);
          this.adCont = this.node.getChildByName("adCont");
          this.jumpAd = this.node.getChildByPath("adCont/icon/jumpAd");
          this.adNumLab = this.node.getChildByPath("adCont/adNumLab").getComponent(Label);
          this.noBuy = this.node.getChildByName("noBuy");
          this.sellOut = this.node.getChildByPath("noBuy/sellOut");
          this.overTime = this.node.getChildByPath("noBuy/overTime");
          this.isInit = true;
          this.updateShow();
        }

        update(dt) {
          // if(this.data && this.std.LimitBuyTime > 0){
          // let residueTime:number = Math.max(Math.floor(this.data.expiration_time - PlayerData.GetServerTime()), 0);
          // this.limtTimeLab.string = DateUtils.FormatTime(residueTime, "%{hh}:%{mm}:%{ss}");
          // if(residueTime > 86400){
          //     this.limtTimeLab.string = DateUtils.FormatTime(residueTime, "%{d}天%{hh}:%{mm}:%{ss}");
          // }else{
          //     if(residueTime > 0){
          //         this.limtTimeLab.string = DateUtils.FormatTime(residueTime, "%{hh}:%{mm}:%{ss}");
          //     }else{
          //         this.limtTimeLab.string = "活动结束";
          //         //this.SetData(this.data);
          //     }   
          // }
          // }
          this.updateShopState();
          this.updateAdTime();
        }

        updateAdTime() {
          if (!this.data) return; //是否才有广告的商品

          if (this.data.isAdItem) {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetShop(this.shopId);

            if (std.AdId > 0) {
              this.adBg.node.active = true; // let adData:SAdvister = PlayerData.GetAdvisterData(std.AdId);
              // let stdAd: StdAdvister = CfgMgr.GetAdvister(std.AdId);
              // let cd:number = adData.cdEndTime - game.totalTime;
              // if(cd > 0){
              //     this.adNumLab.string = DateUtils.FormatTime(cd/1000, "%{mm}:%{ss}");
              // }else{
              //     this.adNumLab.string = `广告（${adData.count}/${stdAd.Max_numb}）`;
              // }
              // this.consumeItem.node.active = false;

              this.adCont.active = true;
            } else {
              this.adBg.node.active = false;
              this.consumeItem.node.active = true;
              this.adCont.active = false;
            }
          } else {
            this.adBg.node.active = false;
            this.consumeItem.node.active = true;
            this.adCont.active = false;
          }
        }

        SetData(data, shopId) {
          this.data = data;
          this.shopId = shopId;
          this.updateShow();
          this.updateShopState();
        }

        updateShopState() {
          if (!this.data || !this.std) return;
          this.noBuy.active = false;

          if (this.std.GoodAmount > 0) {
            if (this.data.count < 1) {
              this.noBuy.active = true;
              this.sellOut.active = true;
              this.overTime.active = false;
            }
          }

          if (this.std.LimitBuyTime > 0 && !this.noBuy.active) {
            // if(this.data.expiration_time - PlayerData.GetServerTime() <= 0){
            this.noBuy.active = true;
            this.sellOut.active = false;
            this.overTime.active = true; // }
          }
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommShopItem(this.data.id);
          if (!this.std) return;

          if (this.std && this.std.Discount > 0) {
            this.disCont.active = true;
            this.disNumLab.string = this.std.Discount.toString();
          } else {
            this.disCont.active = false;
          }

          if (this.std && this.std.GoodAmount > 0) {
            this.limtNumLab.node.active = true;
            this.limtNumLab.string = "\u6570\u91CF\uFF1A" + this.data.count + "/" + this.std.GoodAmount;
          } else {
            this.limtNumLab.node.active = false;
          }

          this.timeCont.active = this.std && this.std.LimitBuyTime > 0;
          var thing;
          thing = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing(this.std.Goodstype[0], this.std.GoodsID[0], this.std.GoodsNum[0]); // let url = path.join("sheets/shop", `qualBg_${thing.resData.qual}`, "spriteFrame");
          // ResMgr.LoadResAbSub(url, SpriteFrame, res => {
          //     this.bg.spriteFrame = res;
          // });

          this.awardItem.SetData({
            itemData: thing
          });
          var awNumLab = this.awardItem.node.getChildByName("numLab").getComponent(Label);
          var otherNumLab = this.awardItem.node.getChildByName("otherNumLab").getComponent(Label);
          var awNameLab = this.awardItem.node.getChildByName("nameLab");
          awNumLab.node.active = true;
          otherNumLab.node.active = false;
          otherNumLab.string = this.std.GoodsNum[0].toString();
          var awPosY = 62;
          var awNamePosY = -142;

          if (thing.item) {
            var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(thing.item.id);

            if (stdItem) {
              if (stdItem.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).shard) {
                awPosY = 50;
                awNamePosY = -130;
                awNumLab.node.active = false;
                otherNumLab.node.active = true;
              } else {
                awNumLab.string = "x" + this.std.GoodsNum[0];
              }
            }
          }

          awNameLab.position = new Vec3(0, awNamePosY, 0);
          this.awardItem.node.position = new Vec3(this.awardItem.node.position.x, awPosY, 0);
          thing = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CreateThing((_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item, this.std.CostID[0], this.std.CostNumber[0]);
          this.consumeItem.SetData(thing); // this.jumpAd.active = PlayerData.GetIsActivateRights(StdEquityId.Id_9) || PlayerData.GetIsActivateRights(StdEquityId.Id_10);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a42050224002be972bedbdbe6b94f7918b5b4c72.js.map