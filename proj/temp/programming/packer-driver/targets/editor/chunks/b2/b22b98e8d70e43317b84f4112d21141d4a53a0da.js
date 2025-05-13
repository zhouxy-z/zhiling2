System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, Layout, Sprite, SpriteFrame, Toggle, UIOpacity, instantiate, path, CardQuality, CfgMgr, ItemType, ResMgr, folder_quality, Second, Tips, OpenBoxPage, _crd;

  function _reportPossibleCrUseOfCardQuality(extras) {
    _reporterNs.report("CardQuality", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_quality(extras) {
    _reporterNs.report("folder_quality", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  _export("OpenBoxPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      UIOpacity = _cc.UIOpacity;
      instantiate = _cc.instantiate;
      path = _cc.path;
    }, function (_unresolved_2) {
      CardQuality = _unresolved_2.CardQuality;
      CfgMgr = _unresolved_2.CfgMgr;
      ItemType = _unresolved_2.ItemType;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      folder_quality = _unresolved_3.folder_quality;
    }, function (_unresolved_4) {
      Second = _unresolved_4.Second;
    }, function (_unresolved_5) {
      Tips = _unresolved_5.Tips;
    }, function (_unresolved_6) {}],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3a4bJL4V1MwayIyv1VE2my", "OpenBoxPage", undefined);

      __checkObsolete__(['Component', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate', 'path']);

      _export("OpenBoxPage", OpenBoxPage = class OpenBoxPage extends Component {
        constructor(...args) {
          super(...args);
          this.Layout = void 0;
          this.item = void 0;
          this.isSelect = void 0;
          this.maxCount = void 0;
          this.limit = void 0;
          this.callBack = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          var _this$complete;

          this.Layout = this.node.getChildByName("Layout").getComponent(Layout);
          this.item = this.node.getChildByPath("Layout/item");
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
        /**
         * 刷新道具数据
         * @param data 
         */


        async SetData(data, count, limit, is_select, callback) {
          if (!this.hasLoad) await this.loadSub;
          this.callBack = callback;
          this.Layout.node.removeAllChildren();
          this.updateItem(data);
          this.maxCount = count;
          this.limit = limit;
          this.isSelect = is_select;
        }

        async updateItem(data) {
          for (let index = 0; index < data.length; index++) {
            let item = instantiate(this.item);
            let bg = item.getChildByName("bg").getComponent(Sprite);
            let icon = item.getChildByPath("bg/icon").getComponent(Sprite);
            let num = item.getChildByPath("bg/num").getComponent(Label);
            let mask = item.getChildByPath("mask").getComponent(UIOpacity);
            let maskBg = item.getChildByPath("bg/maskBg").getComponent(Sprite);
            let max_num = item.getChildByPath("mask/max_num").getComponent(Label);
            let id = item.getChildByName("id").getComponent(Label);
            let toggle = item.getComponent(Toggle);
            toggle.node.on("toggle", this.onSelect, this);
            toggle.isChecked = false;
            bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(data[index].resData.iconBgUrl, SpriteFrame);
            icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(data[index].resData.iconUrl, SpriteFrame);

            if (data[index].item) {
              let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(data[index].item.id);

              if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).shard) {
                maskBg.node.active = true;
                maskBg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_quality === void 0 ? (_reportPossibleCrUseOffolder_quality({
                  error: Error()
                }), folder_quality) : folder_quality, (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                  error: Error()
                }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_mask", "spriteFrame"), SpriteFrame);
              } else {
                maskBg.node.active = false;
              }

              id.string = data[index].item.id + "";
              num.string = (data[index].item.count ? data[index].item.count : "") + "";
            } else {
              num.string = "1";
            }

            max_num.string = this.maxCount + "";
            mask.opacity = this.isSelect ? 0 : 255;
            toggle.interactable = this.isSelect;
            this.Layout.node.addChild(item);
          }
        }

        async onSelect(toggle) {
          if (!this.limit || !this.isSelect) return;
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          let selects = [];
          let chidlren = this.Layout.node.children;
          let num = 0;

          for (let child of chidlren) {
            let isSelect = child.getComponent(Toggle).isChecked;

            if (isSelect) {
              num++;

              if (this.isSelect) {}

              {
                child.getChildByName("mask").getComponent(UIOpacity).opacity = 255;
              }
              selects.push(child.getSiblingIndex());
            } else {
              child.getChildByName("mask").getComponent(UIOpacity).opacity = 0;
            }
          }

          if (num > this.limit) {
            toggle.isChecked = false;
            toggle.node.getChildByName("mask").getComponent(UIOpacity).opacity = 0;
            let index = selects.indexOf(toggle.node.getSiblingIndex());

            if (index > -1) {
              selects.splice(index, 1);
            }

            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("只能选择" + this.limit + "个");
          }

          this.callBack(selects);
        }

        setSelectNum(count, is_select) {
          let chidlren = this.Layout.node.children;

          for (let child of chidlren) {
            let isSelect = child.getComponent(Toggle).isChecked;

            if (isSelect && is_select) {
              child.getChildByName("mask").getComponent(UIOpacity).opacity = 255;
            }

            child.getChildByPath("mask/max_num").getComponent(Label).string = count + "";
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b22b98e8d70e43317b84f4112d21141d4a53a0da.js.map