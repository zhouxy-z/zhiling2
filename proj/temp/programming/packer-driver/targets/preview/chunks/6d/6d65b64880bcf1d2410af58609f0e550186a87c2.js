System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, path, Sprite, SpriteFrame, CfgMgr, folder_item, ResMgr, PlayerData, EventMgr, Evt_Item_Change, HaveItem, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  _export("HaveItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      folder_item = _unresolved_3.folder_item;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_Item_Change = _unresolved_5.Evt_Item_Change;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6352dkPlaJHPbmami5i5jBo", "HaveItem", undefined);

      __checkObsolete__(['Color', 'Component', 'Label', 'path', 'Sprite', 'SpriteFrame']);

      /**
       * 拥有道具展示
       */
      _export("HaveItem", HaveItem = class HaveItem extends Component {
        constructor() {
          super(...arguments);
          this.icon = void 0;
          this.numLab = void 0;
          this.itemId = 0;
          this.std = void 0;
          this.isInit = false;
        }

        onLoad() {
          this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
          this.numLab = this.node.getChildByPath("numLab").getComponent(Label);
          this.isInit = true;
          if (this.itemId > 0) this.updateShow();
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        onItemChange(changeMap) {
          if (changeMap[this.itemId] != undefined) {
            this.updateNum();
          }
        }

        SetData(itemId, notNumColor) {
          this.itemId = itemId;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || this.itemId < 1) return;

          if (!this.std || this.std && this.itemId != this.std.Items) {
            this.std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(this.itemId);
          }

          if (this.std) {
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, this.std.Icon, "spriteFrame"), SpriteFrame, res => {
              this.icon.spriteFrame = res;
            });
            this.updateNum();
          }
        }

        updateNum() {
          var haveNum = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.itemId);
          this.numLab.string = "" + haveNum;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d65b64880bcf1d2410af58609f0e550186a87c2.js.map