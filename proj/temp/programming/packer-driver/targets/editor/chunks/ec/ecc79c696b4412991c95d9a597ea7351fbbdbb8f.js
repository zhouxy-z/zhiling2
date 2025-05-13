System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, Sprite, SpriteFrame, path, ResMgr, folder_item, GetMoreItem, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFetch(extras) {
    _reporterNs.report("Fetch", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("GetMoreItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      path = _cc.path;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_item = _unresolved_2.folder_item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00e27ACNBhBpqXVNjvbaOQB", "GetMoreItem", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'path']);

      _export("GetMoreItem", GetMoreItem = class GetMoreItem extends Component {
        constructor(...args) {
          super(...args);
          this.item_bg = void 0;
          this.item_icon = void 0;
          this.item_name = void 0;
          this.tips = void 0;
          this.btn_go = void 0;
          this.callBack = void 0;
          this.data = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          var _this$complete;

          this.item_bg = this.node.getChildByName("item_bg").getComponent(Sprite);
          this.item_icon = this.node.getChildByPath("item_bg/item_icon").getComponent(Sprite);
          this.item_name = this.node.getChildByName("item_name").getComponent(Label);
          this.tips = this.node.getChildByName("tips").getComponent(Label);
          this.btn_go = this.node.getChildByName("btn_go").getComponent(Button);
          this.btn_go.node.on(Button.EventType.CLICK, this.onGoTo, this);
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

        async setData(data, callback) {
          if (!this.hasLoad) await this.loadSub;
          this.data = data;
          this.callBack = callback;
          let icon_url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, data.Icon, "spriteFrame");
          this.item_icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(icon_url, SpriteFrame);
          this.item_name.string = data.WinName;
          this.tips.string = data.Desc;
        }

        onGoTo() {
          let callBack = this.callBack;
          this.callBack = undefined;
          callBack == null || callBack(this.data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ecc79c696b4412991c95d9a597ea7351fbbdbb8f.js.map