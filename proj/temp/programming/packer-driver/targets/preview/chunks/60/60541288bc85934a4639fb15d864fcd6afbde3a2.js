System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Input, Label, Sprite, SpriteFrame, Toggle, Vec3, path, PlayerData, CardQuality, CfgMgr, ItemType, StdCommonType, ThingItemId, ThingType, ResMgr, folder_head_card, folder_icon, folder_item, ToFixed, formatNumber, ItemTips, TradeHeroPanel, GameSet, BagItem, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
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
          var bagItem = item.getComponent(BagItem);
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
          var thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }
        /**
         * 刷新道具数据
         * @param data 
         */


        SetData(data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.hasLoad) yield _this.loadSub;
            _this.data = data;

            if (data['id'] != undefined) {
              _this.setItem(data);
            } else {
              _this.setThing(data);
            }
          })();
        }

        setItem(data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(data.id);
            _this2.newIcon.active = data.isNew == true;
            data.isNew = false;
            _this2.node.getComponent(Toggle).enabled = _this2.showSelect;
            _this2.node.name = std.Items + "";
            _this2.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, std.Icon, "spriteFrame"), SpriteFrame);

            if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).shard) {
              _this2.quality.node.active = true;
              _this2.quality.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[std.ItemEffect2], "spriteFrame"), SpriteFrame);
              _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_bg", "spriteFrame"), SpriteFrame);
              _this2.maskBg.node.active = true;
              _this2.maskBg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_mask_bg", "spriteFrame"), SpriteFrame);
              _this2.mask.node.active = true;
              _this2.mask.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                error: Error()
              }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_mask", "spriteFrame"), SpriteFrame);
            } else {
              _this2.maskBg.node.active = false;
              _this2.quality.node.active = false;
              _this2.mask.node.active = false;

              if (std.Quality) {
                _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
              } else {
                _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
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
                _this2.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                  error: Error()
                }), ToFixed) : ToFixed)(data.count, 2);
              } else {
                _this2.num.string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                  error: Error()
                }), formatNumber) : formatNumber)(data.count, 2);
              }
            } else {
              _this2.num.string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                error: Error()
              }), formatNumber) : formatNumber)(data.count);
            }

            var isHaveRedPoint = false;

            if (_this2.showRedPoint) {
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

            _this2.redPoint.active = isHaveRedPoint;
            _this2.itemName.string = std.ItemName;
          })();
        }

        setThing(thing) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            _this3.newIcon.active = false; // this.select.active = this.showSelect;

            _this3.node.getComponent(Toggle).enabled = _this3.showSelect;
            _this3.maskBg.node.active = false;
            _this3.quality.node.active = false;
            _this3.mask.node.active = false;
            _this3.icon.node.scale = new Vec3(1, 1, 1);

            switch (thing.type) {
              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeItem:
                _this3.setItem({
                  id: thing.item.id,
                  count: thing.item.count
                });

                break;

              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeCurrency:
                _this3.itemName.string = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                  error: Error()
                }), GameSet) : GameSet).GetMoneyName(); //"彩虹体";           

                var currency1std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                  error: Error()
                }), ThingItemId) : ThingItemId).ItemId_1);

                switch (thing.currency.type) {
                  case 0:
                    //彩虹体
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
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
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
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
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                      error: Error()
                    }), ToFixed) : ToFixed)(thing.currency.value, 4);
                    currency1std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                      error: Error()
                    }), ThingItemId) : ThingItemId).ItemId_3);
                    break;
                }

                _this3.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, currency1std.Icon, "spriteFrame"), SpriteFrame);
                _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[currency1std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
                _this3.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType)[thing.type];
                break;

              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeGold:
                _this3.itemName.string = "金币";
                var currency2std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                  error: Error()
                }), ThingItemId) : ThingItemId).ItemId_2);

                switch (thing.currency.type) {
                  case 0:
                    //彩虹体
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
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
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
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
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                      error: Error()
                    }), ToFixed) : ToFixed)(thing.currency.value, 4);
                    currency2std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                      error: Error()
                    }), ThingItemId) : ThingItemId).ItemId_3);
                    break;
                }

                _this3.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, currency2std.Icon, "spriteFrame"), SpriteFrame);
                _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[currency2std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
                _this3.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType)[thing.type];
                break;

              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeEquipment:
                _this3.num.string = "";
                _this3.itemName.string = "武器";
                _this3.icon.node.active = false;
                _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality/defineBg/spriteFrame"), SpriteFrame);
                _this3.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType)[thing.type];
                break;

              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeRole:
                // this.node.getComponent(Toggle).enabled = true;
                var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetRole()[thing.role.type];
                _this3.num.string = thing['count'] || "1";
                _this3.itemName.string = std.Name;
                _this3.quality.node.active = true;
                _this3.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_head_card === void 0 ? (_reportPossibleCrUseOffolder_head_card({
                  error: Error()
                }), folder_head_card) : folder_head_card, std.Icon, "spriteFrame"), SpriteFrame);
                _this3.icon.node.scale = new Vec3(0.8, 0.8, 0.8);

                if (thing.role.quality) {
                  _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                    error: Error()
                  }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                    error: Error()
                  }), CardQuality) : CardQuality)[thing.role.quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
                  _this3.quality.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                    error: Error()
                  }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                    error: Error()
                  }), CardQuality) : CardQuality)[thing.role.quality], "spriteFrame"), SpriteFrame);
                } else {
                  _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                    error: Error()
                  }), folder_icon) : folder_icon, "quality/defineBg/spriteFrame"), SpriteFrame);
                }

                _this3.node.name = "role_" + thing.role.type;

                var role_lock = _this3.node.getChildByName("role_lock");

                var node = _this3.node.getChildByPath("role_lock/lbl_time");

                if (role_lock && node) {
                  role_lock.active = false;
                }

                var time = thing.role.trade_cd - (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).GetServerTime();

                if (_this3.isShowRoleLock && thing.role.trade_cd > 0 && time > 0) {
                  var lbl_time;

                  if (role_lock && node) {
                    role_lock.active = true;
                    lbl_time = node.getComponent(Label);
                    var show_time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                      error: Error()
                    }), PlayerData) : PlayerData).countDown2(thing.role.trade_cd);

                    if (show_time.d > 0) {
                      lbl_time.string = show_time.d + "天";
                    } else {
                      lbl_time.string = show_time.h + ":" + show_time.m + ":" + show_time.s;
                    }

                    if (_this3.time_lock) {
                      clearInterval(_this3.time_lock);
                    }

                    var seconds = thing.role.trade_cd - (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                      error: Error()
                    }), PlayerData) : PlayerData).GetServerTime();
                    _this3.time_lock = setInterval(() => {
                      if (seconds > 0) {
                        seconds -= 1;

                        var _time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                          error: Error()
                        }), PlayerData) : PlayerData).countDown2(thing.role.trade_cd);

                        if (_time.d > 0) {
                          lbl_time.string = _time.d + "天";
                        } else {
                          lbl_time.string = _time.h + ":" + _time.m + ":" + _time.s;
                        }
                      } else {
                        role_lock.active = false;
                        clearInterval(_this3.time_lock);
                      }
                    }, 1000);
                  }
                }

                break;

              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeResource:
                if (thing.resource.rock) {
                  _this3.setItem({
                    id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                      error: Error()
                    }), ThingItemId) : ThingItemId).ItemId_7,
                    count: thing.resource.rock
                  });
                } else if (thing.resource.seed) {
                  _this3.setItem({
                    id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                      error: Error()
                    }), ThingItemId) : ThingItemId).ItemId_9,
                    count: thing.resource.seed
                  });
                } else if (thing.resource.water) {
                  _this3.setItem({
                    id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                      error: Error()
                    }), ThingItemId) : ThingItemId).ItemId_8,
                    count: thing.resource.water
                  });
                } else if (thing.resource.wood) {
                  _this3.setItem({
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
                _this3.itemName.string = "辉耀石";
                var currency3std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                  error: Error()
                }), ThingItemId) : ThingItemId).ItemId_3);

                switch (thing.currency.type) {
                  case 0:
                    //彩虹体
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
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
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
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
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                      error: Error()
                    }), ToFixed) : ToFixed)(thing.currency.value, 4);
                    currency3std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                      error: Error()
                    }), ThingItemId) : ThingItemId).ItemId_3);
                    break;
                }

                _this3.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, currency3std.Icon, "spriteFrame"), SpriteFrame);
                _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[currency3std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
                _this3.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType)[thing.type];
                break;

              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeGem:
                _this3.itemName.string = "宝石";
                var currency77std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                  error: Error()
                }), ThingItemId) : ThingItemId).ItemId_202);

                switch (thing.currency.type) {
                  case 77:
                    //世界宝石
                    var keepPre = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                      error: Error()
                    }), CfgMgr) : CfgMgr).GetCommon((_crd && StdCommonType === void 0 ? (_reportPossibleCrUseOfStdCommonType({
                      error: Error()
                    }), StdCommonType) : StdCommonType).Gem).KeepPre;
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                      error: Error()
                    }), ToFixed) : ToFixed)(thing.currency.value, keepPre);
                    break;
                }

                _this3.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, currency77std.Icon, "spriteFrame"), SpriteFrame);
                _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[currency77std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
                _this3.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType)[thing.type];
                break;

              case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeMedal:
                var currency74std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                  error: Error()
                }), ThingItemId) : ThingItemId).ItemId_74);
                _this3.itemName.string = currency74std.ItemName;

                switch (thing.currency.type) {
                  case 74:
                    //勋章
                    _this3.num.string = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
                      error: Error()
                    }), ToFixed) : ToFixed)(thing.currency.value, 2);
                    break;
                }

                _this3.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, currency74std.Icon, "spriteFrame"), SpriteFrame);
                _this3.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[currency74std.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
                _this3.node.name = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType)[thing.type];
                break;
            }
          })();
        }
        /**是否展示道具数量 true展示，false不展示 */


        setIsShowNum(isshow) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (!_this4.hasLoad) yield _this4.loadSub;
            _this4.num.node.active = isshow;
          })();
        }
        /**是否展示道具选中状态 true展示，false不展示 */


        setIsShowSelect(isshow) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5.showSelect = isshow;
            _this5.node.getComponent(Toggle).enabled = _this5.showSelect;
          })();
        }
        /**是否展示道具tips true展示，false不展示 */


        setIsShowTips(isshow) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            _this6.isShowTips = isshow;
          })();
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