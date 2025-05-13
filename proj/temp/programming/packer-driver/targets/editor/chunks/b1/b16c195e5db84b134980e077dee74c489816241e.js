System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Label, Sprite, SpriteFrame, path, ResMgr, folder_icon, folder_item, EventMgr, Evt_Currency_Updtae, Evt_Item_Change, Evt_Res_Update, ItemUtil, CardQuality, CfgMgr, ItemType, ThingTypeName, AwardItem, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Currency_Updtae(extras) {
    _reporterNs.report("Evt_Currency_Updtae", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Res_Update(extras) {
    _reporterNs.report("Evt_Res_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
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

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("AwardItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      path = _cc.path;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_icon = _unresolved_2.folder_icon;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
      Evt_Currency_Updtae = _unresolved_3.Evt_Currency_Updtae;
      Evt_Item_Change = _unresolved_3.Evt_Item_Change;
      Evt_Res_Update = _unresolved_3.Evt_Res_Update;
    }, function (_unresolved_4) {
      ItemUtil = _unresolved_4.ItemUtil;
    }, function (_unresolved_5) {
      CardQuality = _unresolved_5.CardQuality;
      CfgMgr = _unresolved_5.CfgMgr;
      ItemType = _unresolved_5.ItemType;
      ThingTypeName = _unresolved_5.ThingTypeName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42bd9/lAv5I0p7OWwr+q2Pt", "AwardItem", undefined);

      __checkObsolete__(['Color', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'path']);

      _export("AwardItem", AwardItem = class AwardItem extends Component {
        constructor(...args) {
          super(...args);
          this.qualBg = void 0;
          this.roleMaskBg = void 0;
          this.icon = void 0;
          this.roleMask = void 0;
          this.numLab = void 0;
          this.nameLab = void 0;
          this.effectValBg = void 0;
          this.effectValLab = void 0;
          this.select = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
          this._data = void 0;
          this.itemId = void 0;
          this.itemNum = void 0;
          this.qualBgUrl = void 0;
          this.roleMaskBgUrl = void 0;
          this.iconUrl = void 0;
          this.roleMaskUrl = void 0;
          this.itemName = void 0;
          this.effectType = void 0;
          this.showEffect = void 0;
          this.effectVal = void 0;
          this.isCheckHave = false;
          this.numLabInitCol = void 0;
          this.thingType = void 0;
          this._formatNameCb = null;
          this._formatCountCb = null;
          this._formatEffectCb = null;
        }

        onLoad() {
          var _this$node$getChildBy, _this$node$getChildBy2, _this$node$getChildBy3, _this$node$getChildBy4, _this$node$getChildBy5, _this$node$getChildBy6, _this$node$getChildBy7, _this$complete;

          this.qualBg = (_this$node$getChildBy = this.node.getChildByName("qualBg")) == null ? void 0 : _this$node$getChildBy.getComponent(Sprite);
          this.roleMaskBg = (_this$node$getChildBy2 = this.node.getChildByName("roleMaskBg")) == null ? void 0 : _this$node$getChildBy2.getComponent(Sprite);
          this.icon = (_this$node$getChildBy3 = this.node.getChildByName("icon")) == null ? void 0 : _this$node$getChildBy3.getComponent(Sprite);
          this.roleMask = (_this$node$getChildBy4 = this.node.getChildByName("roleMask")) == null ? void 0 : _this$node$getChildBy4.getComponent(Sprite);
          this.numLab = (_this$node$getChildBy5 = this.node.getChildByName("numLab")) == null ? void 0 : _this$node$getChildBy5.getComponent(Label);
          this.nameLab = (_this$node$getChildBy6 = this.node.getChildByName("nameLab")) == null ? void 0 : _this$node$getChildBy6.getComponent(Label);
          this.effectValBg = this.node.getChildByName("effectValBg");
          this.effectValLab = (_this$node$getChildBy7 = this.node.getChildByName("effectValLab")) == null ? void 0 : _this$node$getChildBy7.getComponent(Label);
          this.select = this.node.getChildByName("select");
          if (this.select) this.select.active = false;
          if (this.numLab) this.numLabInitCol = this.numLab.color.clone();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Res_Update === void 0 ? (_reportPossibleCrUseOfEvt_Res_Update({
            error: Error()
          }), Evt_Res_Update) : Evt_Res_Update, this.onResUpdate, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Currency_Updtae === void 0 ? (_reportPossibleCrUseOfEvt_Currency_Updtae({
            error: Error()
          }), Evt_Currency_Updtae) : Evt_Currency_Updtae, this.onCurrencyUpdate, this);
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
        }

        onItemChange() {
          if (!this.isCanUpdate) return;
          this.setCountCol();
        }

        onResUpdate() {
          this.setCountCol();
        }

        onCurrencyUpdate() {
          this.setCountCol();
        }

        get isCanUpdate() {
          if (!this.isCheckHave || !this._data) return false;
          return true;
        }

        setCountCol() {
          if (this.numLab) {
            if (this.isCheckHave && !(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).CheckItemIsHave(this.thingType, this.itemNum, this.itemId)) {
              this.numLab.color = new Color().fromHEX("#BF1600");
            } else {
              this.numLab.color = this.numLabInitCol;
            }
          }
        }
        /**
         * 设置消耗物品数据
         * @param data number index 0 物品id index 1 物品数量, SPlayerDataItem道具数据结构
         * @param isCheckHave 是否检测拥有
         */


        async SetData(data, isCheckHave = false) {
          if (!this.hasLoad) await this.loadSub;
          this._data = data;
          this.isCheckHave = isCheckHave;

          if (this._data.itemData instanceof Array) {
            if (this._data.itemData.length != 2) {
              console.error(`AwardItem.SetData非法数据！`);
              return;
            }

            this.setItem({
              id: this._data.itemData[0],
              count: this._data.itemData[1]
            });
          } else {
            this.setThing(this._data.itemData);
          }

          this.setCountCol();
          this.formatName();
          this.formatCount();
          this.formatEffectVal();
          if (this.qualBg && this.qualBgUrl) this.qualBg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(this.qualBgUrl, SpriteFrame);
          if (this.icon) this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(this.iconUrl, SpriteFrame);

          if (this.roleMaskBg) {
            if (this.roleMaskBgUrl) {
              this.roleMaskBg.node.active = true;
              this.roleMaskBg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(this.roleMaskBgUrl, SpriteFrame);
            } else {
              this.roleMaskBg.node.active = false;
            }
          }

          if (this.roleMask) {
            if (this.roleMaskUrl) {
              this.roleMask.node.active = true;
              this.roleMask.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(this.roleMaskUrl, SpriteFrame);
            } else {
              this.roleMask.node.active = false;
            }
          }
        }

        setItem(data) {
          let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.id);

          if (!stdItem) {
            console.error(`AwardItem.SetData找不到物品id${data.id}`);
            return;
          }

          this.thingType = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item;
          this.itemId = data.id;
          this.itemNum = data.count;
          this.iconUrl = null;
          this.qualBgUrl = null;
          this.roleMaskBgUrl = null;
          this.roleMaskUrl = null;
          this.itemName = "";
          this.effectType = -1;
          this.effectVal = -1;
          this.showEffect = stdItem.HideBag;
          let valStr = "";
          this.effectType = stdItem.Itemtpye;
          this.effectVal = stdItem.ItemEffect1;
          this.itemName = stdItem.ItemName;
          this.iconUrl = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, stdItem.Icon, "spriteFrame");
          this.qualBgUrl = path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
            error: Error()
          }), folder_icon) : folder_icon, "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
            error: Error()
          }), CardQuality) : CardQuality)[stdItem.Quality] + "_bag_bg", "spriteFrame");
        }

        async setThing(thing) {
          this.thingType = thing.type;
          this.itemId = 0;
          this.iconUrl = null;
          this.qualBgUrl = null;
          this.roleMaskBgUrl = null;
          this.roleMaskUrl = null;
          this.itemName = "";
          this.effectType = -1;
          this.effectVal = -1;
          this.showEffect = 0;

          if (thing.type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item) {
            this.setItem({
              id: thing.item.id,
              count: thing.item.count
            });
          }
        }
        /**
         * 格式化奖励名称
         */


        formatName() {
          if (!this.nameLab) return;

          if (this._formatNameCb != null) {
            this.nameLab.string = this._formatNameCb(this.itemName);
            return;
          }

          this.nameLab.string = `${this.itemName}`;
        }
        /**
         * 格式化奖励数量
         */


        formatCount() {
          if (!this.numLab || !this.itemNum) return;

          if (this._formatCountCb != null) {
            this.numLab.string = this._formatCountCb(this.itemNum);
            return;
          }

          this.numLab.string = this.itemNum.toString();
        }
        /**
         * 格式化道具效果
         */


        formatEffectVal() {
          if (!this.effectValLab) return;

          if (this.showEffect > 0 || this.effectType < 0 || this.effectVal < 0) {
            if (this.effectValBg) this.effectValBg.active = false;
            if (this.effectValLab) this.effectValLab.node.active = false;
            return;
          }

          if (this.effectValBg) this.effectValBg.active = true;
          if (this.effectValLab) this.effectValLab.node.active = true;

          if (this._formatEffectCb != null) {
            this.effectValLab.string = this._formatEffectCb(this.effectType, this.effectVal);
            return;
          }

          let valStr = "";

          switch (this.effectType) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).exp:
              valStr = `经验值${this.effectVal}`;
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).speed:
              valStr = `${this.effectVal / 60}分钟`;
              break;
          }

          if (valStr == "") this.effectValBg.active = this.effectValLab.node.active = false;
          this.effectValLab.string = valStr;
        }
        /**
         * 格式化名称回调
         */


        FormatNameCb(cb) {
          this._formatNameCb = cb;
        }
        /**
         * 格式化数量回调
         */


        FormatCountCb(cb) {
          this._formatCountCb = cb;
        }
        /**
         * 格式化道具效果回调
         */


        FormatEffectCb(cb) {
          this._formatEffectCb = cb;
        }

        get itemData() {
          return this._data.itemData;
        }

        get thingTypeData() {
          return this.thingType;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b16c195e5db84b134980e077dee74c489816241e.js.map