System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, RichTextComponent, Panel, ItemUtil, ShopRefreshPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShop(extras) {
    _reporterNs.report("StdShop", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  _export("ShopRefreshPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      RichTextComponent = _cc.RichTextComponent;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      ItemUtil = _unresolved_3.ItemUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c252RSpLpPNak/Novqaben", "ShopRefreshPanel", undefined);

      __checkObsolete__(['Button', 'RichText', 'RichTextComponent']);

      _export("ShopRefreshPanel", ShopRefreshPanel = class ShopRefreshPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/panel/shop/ShopRefreshPanel";
          this.okBtn = void 0;
          this.noBtn = void 0;
          this.contLab = void 0;
          this.stdShop = void 0;
          this.shopId = void 0;
        }

        onLoad() {
          this.contLab = this.find("contLab", RichTextComponent);
          this.okBtn = this.find("okBtn", Button);
          this.noBtn = this.find("noBtn", Button);
          this.okBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.noBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onShow() {}

        onHide(...args) {}

        async flush(stdShop, shopId) {
          this.stdShop = stdShop;
          this.shopId = shopId; // let things:SThing[] = ItemUtil.GetSThingList(this.stdShop.RefreshThingType, this.stdShop.RefreshThingId, this.stdShop.RefreshThingCount);
          // let itemName:string = "";
          // for (let index = 0; index < things.length; index++) {
          //     let item = things[index];
          //     itemName += `<color=#AD4800><size=48>${item.resData.name} * ${item.resData.count}</size></color>`;
          //     if(index < things.length - 1){
          //         itemName += "、";
          //     }   
          // }
          // this.contLab.string = `是否消耗${itemName}马上刷新宝库?`;
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.okBtn:
              if (!(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                error: Error()
              }), ItemUtil) : ItemUtil).CheckThingConsumes(this.stdShop.RefreshThingType, this.stdShop.RefreshThingId, this.stdShop.RefreshThingCount, true)) {
                return;
              } // Session.Send({type: MsgTypeSend.ShopManualRefresh, data:{shop_index_id:this.shopId}});


              break;

            case this.noBtn:
              break;
          }

          this.Hide();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0985210c6f7b3c08b5356ac20b79f7cb1678bbab.js.map