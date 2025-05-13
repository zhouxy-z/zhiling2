System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, RichText, Sprite, SpriteFrame, UITransform, Widget, path, ResMgr, folder_item, Panel, AutoScroller, CfgMgr, ItemTips, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("ItemTips", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      path = _cc.path;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      AutoScroller = _unresolved_4.AutoScroller;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42fa3E8NOVN7ql6po/xdmiv", "ItemTips", undefined);

      __checkObsolete__(['Label', 'Node', 'RichText', 'Sprite', 'SpriteFrame', 'UITransform', 'Widget', 'path']);

      _export("ItemTips", ItemTips = class ItemTips extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/common/ItemTips";
          this.bg = void 0;
          this.icon = void 0;
          this.nameLab = void 0;
          this.cd_time = void 0;
          this.tipsLab = void 0;
          this.getNode = void 0;
          this.ScrollView = void 0;
          this.cont = void 0;
        }

        onLoad() {
          this.cont = this.find("cont");
          this.bg = this.find("cont/bg").getComponent(Sprite);
          this.icon = this.find("cont/bg/icon").getComponent(Sprite);
          this.nameLab = this.find("cont/nameLab").getComponent(Label);
          this.cd_time = this.find("cont/cd_time").getComponent(Label);
          this.tipsLab = this.find("cont/layout/tipsNode/tipsLab").getComponent(RichText);
          this.getNode = this.find("cont/layout/getNode");
          this.ScrollView = this.find("cont/layout/getNode/ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller); // this.ScrollView.SetHandle(this.updateItem.bind(this));

          this.CloseBy("mask");
        }

        static ShowHideNode(data) {
          this.Show(data, false);
        }

        onShow() {}

        async flush(data, is_show_getNode = true) {
          if (!this.$hasLoad) await this.initSub;
          let std_item;

          if (data["Items"] != undefined) {
            std_item = data;
          } else {
            let _data = data;

            if (_data.item) {
              std_item = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(_data.item.id);
            }
          }

          if (!std_item) return;
          this.nameLab.string = std_item.ItemName;
          this.cd_time.string = std_item.LockTime + "";
          this.tipsLab.string = std_item.Remark + ""; // this.bg.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_quality, CardQuality[std_item.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);

          let spr = std_item.Icon;
          this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, spr, "spriteFrame"), SpriteFrame);

          if (is_show_getNode) {
            this.getNode.active = true;
            this.cont.getComponent(UITransform).height = 709;
          } else {
            this.getNode.active = false;
            this.cont.getComponent(UITransform).height = 709 - 300;
          }

          this.cont.children.forEach(node => {
            if (node.getComponent(Widget)) {
              node.getComponent(Widget).updateAlignment();
            }
          });
        }

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8b0ae8aef5e7373d5ad5e391d6c3900f0220352.js.map