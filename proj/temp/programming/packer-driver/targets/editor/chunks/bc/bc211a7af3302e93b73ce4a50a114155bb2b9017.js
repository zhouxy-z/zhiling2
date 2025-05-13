System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, path, Sprite, SpriteFrame, ResMgr, PlayerData, CardGroupItem, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("CardGroupItem", void 0);

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
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c810ffzFItAAJ3ELGpqQwDE", "CardGroupItem%20copy", undefined);

      __checkObsolete__(['Button', 'Component', 'Input', 'Label', 'Node', 'path', 'sp', 'Sprite', 'SpriteFrame']);

      _export("CardGroupItem", CardGroupItem = class CardGroupItem extends Component {
        constructor(...args) {
          super(...args);
          this.add = void 0;
          this.cardNode = void 0;
          this.bg = void 0;
          this.cardSpr = void 0;
          this.warning = void 0;
          this.nameLab = void 0;
          this.useLab = void 0;
          this.data = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          var _this$complete;

          this.add = this.node.getChildByName("add");
          this.cardNode = this.node.getChildByName("cardNode");
          this.bg = this.node.getChildByPath("cardNode/bg").getComponent(Sprite);
          this.cardSpr = this.node.getChildByPath("cardNode/cardSpr").getComponent(Sprite);
          this.warning = this.node.getChildByPath("cardNode/warning");
          this.nameLab = this.node.getChildByPath("cardNode/nameLab").getComponent(Label);
          this.useLab = this.node.getChildByPath("cardNode/useLab");
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }
        /**
         * 设置角色数据
         * @param data 
         */


        async SetData(data) {
          if (!this.hasLoad) await this.loadSub;
          this.data = data;
          this.add.active = false;
          this.cardNode.active = true;

          if (typeof data == "string") {
            this.add.active = true;
            this.cardNode.active = false;
            return;
          }

          this.nameLab.string = data.name;
          this.warning.active = data.size < 12;
          let url = data.size < 12 ? path.join("sheets/default/卡组红", "spriteFrame") : path.join("sheets/default/卡组蓝", "spriteFrame");
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
            this.bg.spriteFrame = res;
          });
          this.useLab.active = data.id == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).battleCardGoupData.id;
        }

        getData() {
          return this.data;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc211a7af3302e93b73ce4a50a114155bb2b9017.js.map