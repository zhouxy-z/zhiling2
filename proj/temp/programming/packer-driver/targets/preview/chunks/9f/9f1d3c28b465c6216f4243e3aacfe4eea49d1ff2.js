System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Input, Label, Sprite, SpriteFrame, Toggle, path, CardQuality, CfgMgr, ItemType, ThingTypeName, ResMgr, folder_icon, folder_item, Utils, ItemTips, BagItem1, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCardQuality(extras) {
    _reporterNs.report("CardQuality", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTips(extras) {
    _reporterNs.report("ItemTips", "../common/ItemTips", _context.meta, extras);
  }

  _export("BagItem1", void 0);

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
      path = _cc.path;
    }, function (_unresolved_2) {
      CardQuality = _unresolved_2.CardQuality;
      CfgMgr = _unresolved_2.CfgMgr;
      ItemType = _unresolved_2.ItemType;
      ThingTypeName = _unresolved_2.ThingTypeName;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      folder_icon = _unresolved_3.folder_icon;
      folder_item = _unresolved_3.folder_item;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      ItemTips = _unresolved_5.ItemTips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07f9cDTLWxBzJS/ATIr72sj", "BagItem1", undefined);

      __checkObsolete__(['Component', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'Vec3', 'input', 'path']);

      _export("BagItem1", BagItem1 = class BagItem1 extends Component {
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
          var bagItem = item.getComponent(BagItem1);
          if (!bagItem) bagItem = item.addComponent(BagItem1);
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

            _this.setItem(data);
          })();
        }

        setItem(data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (data.type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item) {
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(data.item.id);
              _this2.newIcon.active = false; // data.isNew = false;

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

              if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).money) {
                _this2.num.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).ToFixed(data.item.count / 10000);
              } else {
                _this2.num.string = data.item.count;
              }

              var isHaveRedPoint = false; // if (this.showRedPoint) {
              //     if (std.Type == ThingType.ThingTypeItem) {
              //         if (std.Itemtpye == ItemType.shard) {
              //             isHaveRedPoint = data.count >= std.ItemEffect3;
              //         } else if (std.Itemtpye == ItemType.box) {
              //             isHaveRedPoint = true;
              //         }
              //     }
              // }

              _this2.redPoint.active = isHaveRedPoint;
              _this2.itemName.string = std.ItemName;
            } else if (data.type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).BattleCard) {
              var _std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(data.card.cardId);

              _this2.newIcon.active = false; // data.isNew = false;

              _this2.node.getComponent(Toggle).enabled = _this2.showSelect;
              _this2.node.name = _std.CardName + ""; // this.icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, std.Icon, "spriteFrame"), SpriteFrame);

              _this2.maskBg.node.active = false;
              _this2.quality.node.active = false;
              _this2.mask.node.active = false;

              if (data.card.quality) {
                _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[data.card.quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
              } else {
                _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                  error: Error()
                }), folder_icon) : folder_icon, "quality/defineBg/spriteFrame"), SpriteFrame);
              }

              _this2.num.string = '1';
              var _isHaveRedPoint = false;
              _this2.redPoint.active = _isHaveRedPoint;
              _this2.itemName.string = _std.CardName;
            }
          })();
        }
        /**是否展示道具数量 true展示，false不展示 */


        setIsShowNum(isshow) {
          this.num.node.active = isshow;
        }
        /**是否展示道具选中状态 true展示，false不展示 */


        setIsShowSelect(isshow) {
          this.showSelect = isshow;
          this.node.getComponent(Toggle).enabled = this.showSelect;
        }
        /**是否展示道具tips true展示，false不展示 */


        setIsShowTips(isshow) {
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
            (_crd && ItemTips === void 0 ? (_reportPossibleCrUseOfItemTips({
              error: Error()
            }), ItemTips) : ItemTips).Show(this.data);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f1d3c28b465c6216f4243e3aacfe4eea49d1ff2.js.map