System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, Sprite, GetMoreItem, _crd;

  _export("GetMoreItem", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00e27ACNBhBpqXVNjvbaOQB", "GetMoreItem", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'path']);

      _export("GetMoreItem", GetMoreItem = class GetMoreItem extends Component {
        constructor() {
          super(...arguments);
          this.item_bg = void 0;
          this.item_icon = void 0;
          this.item_name = void 0;
          this.tips = void 0;
          this.btn_go = void 0;
          this.callBack = void 0;
          // private data: Fetch;
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
          var thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
        } // async setData(data: Fetch, callback: Function) {
        //     if (!this.hasLoad) await this.loadSub;
        //     this.data = data;
        //     this.callBack = callback;
        //     let icon_url = path.join(folder_item, data.Icon, "spriteFrame");
        //     this.item_icon.spriteFrame = await ResMgr.LoadResAbSub(icon_url, SpriteFrame);
        //     this.item_name.string = data.WinName;
        //     this.tips.string = data.Desc;
        // }


        onGoTo() {
          var callBack = this.callBack;
          this.callBack = undefined; // callBack?.(this.data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd8e46c47947455f9826432a6c7db86a20d2b048.js.map