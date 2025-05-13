System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Label, Sprite, SpriteFrame, _decorator, path, ResMgr, folder_item, EventMgr, Evt_Currency_Updtae, Evt_Item_Change, Evt_Res_Update, ItemUtil, CfgMgr, ItemType, ThingTypeName, Utils, PlayerData, ConsumeItem, _crd, ccclass, property, disallowMultiple, requireComponent, ConsumeNumFormatType;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("ConsumeItem", void 0);

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
      _decorator = _cc._decorator;
      path = _cc.path;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
      Evt_Currency_Updtae = _unresolved_3.Evt_Currency_Updtae;
      Evt_Item_Change = _unresolved_3.Evt_Item_Change;
      Evt_Res_Update = _unresolved_3.Evt_Res_Update;
    }, function (_unresolved_4) {
      ItemUtil = _unresolved_4.ItemUtil;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
      ItemType = _unresolved_5.ItemType;
      ThingTypeName = _unresolved_5.ThingTypeName;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fcb4G6DYtF+InpHEpd5jJe", "ConsumeItem", undefined);

      __checkObsolete__(['Color', 'Component', 'Label', 'Sprite', 'SpriteFrame', '_decorator', 'path']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);
      /**
       * 格式化消耗类型数字  
       */

      _export("ConsumeNumFormatType", ConsumeNumFormatType = /*#__PURE__*/function (ConsumeNumFormatType) {
        ConsumeNumFormatType[ConsumeNumFormatType["Comm"] = 0] = "Comm";
        ConsumeNumFormatType[ConsumeNumFormatType["ContrastHave"] = 1] = "ContrastHave";
        ConsumeNumFormatType[ConsumeNumFormatType["Have"] = 2] = "Have";
        return ConsumeNumFormatType;
      }({}));

      _export("ConsumeItem", ConsumeItem = class ConsumeItem extends Component {
        constructor(...args) {
          super(...args);
          this.icon = void 0;
          this.numLab = void 0;
          this.itemNum = void 0;
          this.iconUrl = void 0;
          this.itemId = void 0;
          this.itemName = void 0;
          this.numLabInitCol = void 0;
          this.thingType = void 0;
          this.data = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.numFormatType = ConsumeNumFormatType.Comm;
          this.hasLoad = false;
          this._formatCountCb = null;
        }

        onLoad() {
          var _this$complete;

          this.icon = this.node.getChildByName("icon").getComponent(Sprite);
          this.numLab = this.node.getChildByName("numLab").getComponent(Label);
          this.numLabInitCol = this.numLab.color.clone();
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
          this.formatCount();
        }

        onResUpdate() {
          if (!this.isCanUpdate) return;
          this.setCountCol();
          this.formatCount();
        }

        onCurrencyUpdate() {
          if (!this.isCanUpdate) return;
          this.setCountCol();
          this.formatCount();
        }

        get isCanUpdate() {
          if (!this.node.activeInHierarchy || this.numFormatType == ConsumeNumFormatType.Comm || !this.data) return false;
          return true;
        }

        setCountCol() {
          if (this.numLab) {
            if (this.numFormatType == ConsumeNumFormatType.ContrastHave && !(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
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
         */


        async SetData(data) {
          if (!this.hasLoad) await this.loadSub;
          this.data = data;

          if (this.data instanceof Array) {
            if (this.data.length != 2) {
              console.error(`AwardItem.SetData非法数据！`);
              return;
            }

            this.setItem({
              id: this.data[0],
              count: this.data[1]
            });
          } else {
            this.setThing(this.data);
          }

          this.setCountCol();
          this.formatCount();
          if (this.icon) this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(this.iconUrl, SpriteFrame);
        }

        setItem(data) {
          this.thingType = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item;
          this.itemId = data.id;
          this.itemNum = data.count;
          this.iconUrl = null;
          this.itemName = "";
          let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.id);

          if (!stdItem) {
            console.error(`AwardItem.SetData找不到物品id${data.id}`);
            return;
          }

          if (stdItem.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money) {
            this.itemNum = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).MoneyChange(this.itemNum);
          }

          this.itemName = stdItem.ItemName;
          this.iconUrl = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, stdItem.Icon, "spriteFrame");
        }

        setThing(thing) {
          this.thingType = thing.type;
          this.iconUrl = null;
          this.itemName = "";
          this.itemId = 0;

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
         * 格式化数量回调
         */


        FormatCountCb(cb) {
          this._formatCountCb = cb;
        }
        /**
         * 格式化奖励数量
         */


        formatCount() {
          if (!this.numLab) return;

          if (this._formatCountCb != null) {
            this.numLab.string = this._formatCountCb(this.itemNum);
            return;
          }

          this.itemNum = this.getItemNum();
          let keepPre = 0;
          this.numLab.string = keepPre > 0 ? (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(this.itemNum, keepPre) : this.itemNum.toString();
        }

        getItemNum() {
          if (this.numFormatType == ConsumeNumFormatType.Comm) {
            return this.itemNum;
          } else if (this.numFormatType == ConsumeNumFormatType.ContrastHave) {
            return this.itemNum;
          } else if (this.numFormatType == ConsumeNumFormatType.Have) {
            this.itemNum = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(this.itemId);
            let itemType = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(this.itemId).Itemtpye;

            if (itemType == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).money) {
              this.itemNum = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                error: Error()
              }), ItemUtil) : ItemUtil).MoneyChange(this.itemNum);
            }

            return this.itemNum;
          }

          return this.itemNum;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07a209ac71c6153e0c17608ee7e0de36bdf8e4dc.js.map