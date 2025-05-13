System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Input, Label, Sprite, SpriteFrame, Toggle, Vec3, path, PlayerData, CardQuality, CfgMgr, ItemType, StdCommonType, ThingItemId, ThingType, ResMgr, folder_head_card, folder_icon, folder_item, ToFixed, formatNumber, ItemTips, TradeHeroPanel, GameSet, BagItem, _crd;

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataItem(extras) {
    _reporterNs.report("SPlayerDataItem", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardQuality(extras) {
    _reporterNs.report("CardQuality", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCommonType(extras) {
    _reporterNs.report("StdCommonType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingItemId(extras) {
    _reporterNs.report("ThingItemId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingType(extras) {
    _reporterNs.report("ThingType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_head_card(extras) {
    _reporterNs.report("folder_head_card", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToFixed(extras) {
    _reporterNs.report("ToFixed", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTips(extras) {
    _reporterNs.report("ItemTips", "../common/ItemTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradeHeroPanel(extras) {
    _reporterNs.report("TradeHeroPanel", "../trade/TradeHeroPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../GameSet", _context.meta, extras);
  }

  _export("BagItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Input = _cc.Input;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      Vec3 = _cc.Vec3;
      path = _cc.path;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.default;
    }, function (_unresolved_3) {
      CardQuality = _unresolved_3.CardQuality;
      CfgMgr = _unresolved_3.CfgMgr;
      ItemType = _unresolved_3.ItemType;
      StdCommonType = _unresolved_3.StdCommonType;
      ThingItemId = _unresolved_3.ThingItemId;
      ThingType = _unresolved_3.ThingType;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
      folder_head_card = _unresolved_4.folder_head_card;
      folder_icon = _unresolved_4.folder_icon;
      folder_item = _unresolved_4.folder_item;
    }, function (_unresolved_5) {
      ToFixed = _unresolved_5.ToFixed;
      formatNumber = _unresolved_5.formatNumber;
    }, function (_unresolved_6) {
      ItemTips = _unresolved_6.ItemTips;
    }, function (_unresolved_7) {
      TradeHeroPanel = _unresolved_7.TradeHeroPanel;
    }, function (_unresolved_8) {
      GameSet = _unresolved_8.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1fdfjezANOp51kP4QIFdoA", "BagItem", undefined);

      __checkObsolete__(['Component', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'Vec3', 'input', 'path']);

      _export("BagItem", BagItem = class BagItem extends Component {
        constructor(...args) {
          super(...args);
          this.bg = void 0;
          this.maskBg = void 0;
          this.icon = void 0;
          this.mask = void 0;
          this.num = void 0;
          this.quality = void 0;
          this.newIcon = void 0;
          this.itemName = void 0;
          this.select = void 0;
          this.redPoint = void 0;
          this.data = void 0;
          this.showSelect = true;
          this.isShowTips = false;
          this.showRedPoint = false;
          this.isShowRoleLock = false;
          this.time_lock = void 0;
          this.complete = void 0;
          this.hasLoad = false;
          this.$loadSub = void 0;
        }

        /**
         * 更新背包道具item
         * @param item 
         * @param data 
         */
        static UpdateBagItem(item, data) {
          let bagItem = item.getComponent(BagItem);
          if (!bagItem) bagItem = item.addComponent(BagItem);
          bagItem.SetData(data);
        }

        onLoad() {
          var _this$complete;

          this.bg = this.node.getChildByName("bg").getComponent(Sprite);
          this.maskBg = this.node.getChildByName("maskbg").getComponent(Sprite);
          this.icon = this.node.getChildByName("icon").getComponent(Sprite);
          this.mask = this.node.getChildByName("mask").getComponent(Sprite);
          this.num = this.node.getChildByName("num").getComponent(Label);
          this.quality = this.node.getChildByName("quality").getComponent(Sprite);
          this.newIcon = this.node.getChildByName("isNew");
          this.itemName = this.node.getChildByName("name").getComponent(Label);
          this.redPoint = this.node.getChildByName("redPoint");
          this.redPoint.active = false;
          this.select = this.node.getChildByName("select");
          this.node.on(Input.EventType.TOUCH_END, this.onClick, this);
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }
        /**
         * 刷新道具数据
         * @param data 
         */


        async SetData(data) {
          if (!this.hasLoad) await this.loadSub;
          this.data = data;

          if (data['id'] != undefined) {
            this.setItem(data);
          } else {
            this.setThing(data);
          }
        }

        async setItem(data) {
          let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.id);
          this.newIcon.active = data.isNew == true;
          data.isNew = false;
          this.node.getComponent(Toggle).enabled = this.showSelect;
          this.node.name = std.Items + "";
          this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, std.Icon, "spriteFrame"), SpriteFrame);

          if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).shard) {
            this.quality.node.active = true;
            this.quality.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
              error: Error()
            }), CardQuality) : CardQuality)[std.ItemEffect2], "spriteFrame"), SpriteFrame);
            this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
              error: Error()
            }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_bg", "spriteFrame"), SpriteFrame);
            this.maskBg.node.active = true;
            this.maskBg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
              error: Error()
            }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_mask_bg", "spriteFrame"), SpriteFrame);
            this.mask.node.active = true;
            this.mask.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
              error: Error()
            }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_mask", "spriteFrame"), SpriteFrame);
          } else {
            this.maskBg.node.active = false;
            this.quality.node.active = false;
            this.mask.node.active = false;

            if (std.Quality) {
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
            } else {
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality/defineBg/spriteFrame"), SpriteFrame);
            }
          }

          if ((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId)[data.id]) {
            if (data.id == (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_1 || data.id == (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_2 || data.id == (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_3) {
              this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                error: Error()
              }), ToFixed) : ToFixed)(data.count, 2);
            } else {
              this.num.string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                error: Error()
              }), formatNumber) : formatNumber)(data.count, 2);
            }
          } else {
            this.num.string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
              error: Error()
            }), formatNumber) : formatNumber)(data.count);
          }

          let isHaveRedPoint = false;

          if (this.showRedPoint) {
            if (std.Type == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeItem) {
              if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).shard) {
                isHaveRedPoint = data.count >= std.ItemEffect3;
              } else if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).box) {
                isHaveRedPoint = true;
              }
            }
          }

          this.redPoint.active = isHaveRedPoint;
          this.itemName.string = std.ItemName;
        }

        async setThing(thing) {
          this.newIcon.active = false; // this.select.active = this.showSelect;

          this.node.getComponent(Toggle).enabled = this.showSelect;
          this.maskBg.node.active = false;
          this.quality.node.active = false;
          this.mask.node.active = false;
          this.icon.node.scale = new Vec3(1, 1, 1);

          switch (thing.type) {
            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeItem:
              this.setItem({
                id: thing.item.id,
                count: thing.item.count
              });
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeCurrency:
              this.itemName.string = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).GetMoneyName(); //"彩虹体";           

              let currency1std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_1);

              switch (thing.currency.type) {
                case 0:
                  //彩虹体
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 2);
                  currency1std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_1);
                  break;

                case 2:
                  //金币
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 2);
                  currency1std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_2);
                  break;

                case 3:
                  //原石
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 4);
                  currency1std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_3);
                  break;
              }

              this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, currency1std.Icon, "spriteFrame"), SpriteFrame);
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[currency1std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
              this.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType)[thing.type];
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeGold:
              this.itemName.string = "金币";
              let currency2std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_2);

              switch (thing.currency.type) {
                case 0:
                  //彩虹体
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 2);
                  currency2std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_1);
                  break;

                case 2:
                  //金币
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 2);
                  currency2std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_2);
                  break;

                case 3:
                  //原石
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 4);
                  currency2std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_3);
                  break;
              }

              this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, currency2std.Icon, "spriteFrame"), SpriteFrame);
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[currency2std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
              this.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType)[thing.type];
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeEquipment:
              this.num.string = "";
              this.itemName.string = "武器";
              this.icon.node.active = false;
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality/defineBg/spriteFrame"), SpriteFrame);
              this.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType)[thing.type];
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeRole:
              // this.node.getComponent(Toggle).enabled = true;
              let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetRole()[thing.role.type];
              this.num.string = thing['count'] || "1";
              this.itemName.string = std.Name;
              this.quality.node.active = true;
              this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_head_card === void 0 ? (_reportPossibleCrUseOffolder_head_card({
                error: Error()
              }), folder_head_card) : folder_head_card, std.Icon, "spriteFrame"), SpriteFrame);
              this.icon.node.scale = new Vec3(0.8, 0.8, 0.8);

              if (thing.role.quality) {
                this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[thing.role.quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
                this.quality.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[thing.role.quality], "spriteFrame"), SpriteFrame);
              } else {
                this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality/defineBg/spriteFrame"), SpriteFrame);
              }

              this.node.name = "role_" + thing.role.type;
              let role_lock = this.node.getChildByName("role_lock");
              let node = this.node.getChildByPath("role_lock/lbl_time");

              if (role_lock && node) {
                role_lock.active = false;
              }

              let time = thing.role.trade_cd - (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetServerTime();

              if (this.isShowRoleLock && thing.role.trade_cd > 0 && time > 0) {
                let lbl_time;

                if (role_lock && node) {
                  role_lock.active = true;
                  lbl_time = node.getComponent(Label);
                  let show_time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).countDown2(thing.role.trade_cd);

                  if (show_time.d > 0) {
                    lbl_time.string = show_time.d + "天";
                  } else {
                    lbl_time.string = show_time.h + ":" + show_time.m + ":" + show_time.s;
                  }

                  if (this.time_lock) {
                    clearInterval(this.time_lock);
                  }

                  let seconds = thing.role.trade_cd - (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).GetServerTime();
                  this.time_lock = setInterval(() => {
                    if (seconds > 0) {
                      seconds -= 1;
                      let time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                        error: Error()
                      }), PlayerData) : PlayerData).countDown2(thing.role.trade_cd);

                      if (time.d > 0) {
                        lbl_time.string = time.d + "天";
                      } else {
                        lbl_time.string = time.h + ":" + time.m + ":" + time.s;
                      }
                    } else {
                      role_lock.active = false;
                      clearInterval(this.time_lock);
                    }
                  }, 1000);
                }
              }

              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeResource:
              if (thing.resource.rock) {
                this.setItem({
                  id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_7,
                  count: thing.resource.rock
                });
              } else if (thing.resource.seed) {
                this.setItem({
                  id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_9,
                  count: thing.resource.seed
                });
              } else if (thing.resource.water) {
                this.setItem({
                  id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_8,
                  count: thing.resource.water
                });
              } else if (thing.resource.wood) {
                this.setItem({
                  id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_6,
                  count: thing.resource.wood
                });
              }

              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeGemstone:
              this.itemName.string = "辉耀石";
              let currency3std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_3);

              switch (thing.currency.type) {
                case 0:
                  //彩虹体
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 2);
                  currency3std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_1);
                  break;

                case 2:
                  //金币
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 2);
                  currency3std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_2);
                  break;

                case 3:
                  //原石
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 4);
                  currency3std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                    error: Error()
                  }), ThingItemId) : ThingItemId).ItemId_3);
                  break;
              }

              this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, currency3std.Icon, "spriteFrame"), SpriteFrame);
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[currency3std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
              this.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType)[thing.type];
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeGem:
              this.itemName.string = "宝石";
              let currency77std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_202);

              switch (thing.currency.type) {
                case 77:
                  //世界宝石
                  let keepPre = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).GetCommon((_crd && StdCommonType === void 0 ? (_reportPossibleCrUseOfStdCommonType({
                    error: Error()
                  }), StdCommonType) : StdCommonType).Gem).KeepPre;
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, keepPre);
                  break;
              }

              this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, currency77std.Icon, "spriteFrame"), SpriteFrame);
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[currency77std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
              this.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType)[thing.type];
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeMedal:
              let currency74std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_74);
              this.itemName.string = currency74std.ItemName;

              switch (thing.currency.type) {
                case 74:
                  //勋章
                  this.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                    error: Error()
                  }), ToFixed) : ToFixed)(thing.currency.value, 2);
                  break;
              }

              this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, currency74std.Icon, "spriteFrame"), SpriteFrame);
              this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[currency74std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
              this.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType)[thing.type];
              break;
          }
        }
        /**是否展示道具数量 true展示，false不展示 */


        async setIsShowNum(isshow) {
          if (!this.hasLoad) await this.loadSub;
          this.num.node.active = isshow;
        }
        /**是否展示道具选中状态 true展示，false不展示 */


        async setIsShowSelect(isshow) {
          this.showSelect = isshow;
          this.node.getComponent(Toggle).enabled = this.showSelect;
        }
        /**是否展示道具tips true展示，false不展示 */


        async setIsShowTips(isshow) {
          this.isShowTips = isshow;
        }

        setIsShowRedPoint(val) {
          this.showRedPoint = val;
        }
        /**是否展示角色倒计时 */


        setIsRoleLockShow(isshow) {
          this.isShowRoleLock = isshow;
        }

        onClick(e) {
          if (this.isShowTips) {
            if (this.data.role) {
              (_crd && TradeHeroPanel === void 0 ? (_reportPossibleCrUseOfTradeHeroPanel({
                error: Error()
              }), TradeHeroPanel) : TradeHeroPanel).Show(this.data.role);
            } else {
              (_crd && ItemTips === void 0 ? (_reportPossibleCrUseOfItemTips({
                error: Error()
              }), ItemTips) : ItemTips).Show(this.data);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60541288bc85934a4639fb15d864fcd6afbde3a2.js.map