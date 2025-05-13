System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, path, Sprite, SpriteFrame, CfgMgr, folder_head, ResMgr, CardGroupHead, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdHead(extras) {
    _reporterNs.report("StdHead", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_head(extras) {
    _reporterNs.report("folder_head", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("CardGroupHead", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      folder_head = _unresolved_3.folder_head;
      ResMgr = _unresolved_3.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0a35aCZDRAjbIW+kX1d9vT", "CardGroupHead", undefined);

      __checkObsolete__(['Component', 'Input', 'Label', 'Node', 'path', 'sp', 'Sprite', 'SpriteFrame']);

      _export("CardGroupHead", CardGroupHead = class CardGroupHead extends Component {
        constructor() {
          super(...arguments);
          this.headBg = void 0;
          this.icon = void 0;
          this.favorite = void 0;
          this.use = void 0;
          this.isInit = false;
          this.avatarId = void 0;
          this.is_show_like = void 0;
          this.is_show_use = void 0;
        }

        onLoad() {
          this.headBg = this.node.getChildByName("headBg");
          this.icon = this.node.getChildByPath("Mask/icon").getComponent(Sprite);
          this.favorite = this.node.getChildByName("favorite");
          this.use = this.node.getChildByName("use");
          this.isInit = true;
          this.updateShow();
        }

        SetData(avatarId, is_show_like, is_show_use) {
          if (is_show_like === void 0) {
            is_show_like = false;
          }

          if (is_show_use === void 0) {
            is_show_use = false;
          }

          this.avatarId = avatarId;
          this.is_show_like = is_show_like;
          this.is_show_use = is_show_use;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.avatarId) return;
          this.favorite.active = this.is_show_like;
          this.use.active = this.is_show_use;
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetHead(this.avatarId);

          if (std) {
            var headUrl = path.join(_crd && folder_head === void 0 ? (_reportPossibleCrUseOffolder_head({
              error: Error()
            }), folder_head) : folder_head, std.icon, "spriteFrame");
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(headUrl, SpriteFrame, res => {
              this.icon.spriteFrame = res;
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f55edb91511da5b883db76476bcdbd8d16498bc.js.map