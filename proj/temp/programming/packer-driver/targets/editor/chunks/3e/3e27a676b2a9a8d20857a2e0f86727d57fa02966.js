System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, path, Sprite, SpriteFrame, CardGroupCoverItem, ResMgr, roleimage, CfgMgr, VsPlayerItem, _crd;

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "../common/CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroleimage(extras) {
    _reporterNs.report("roleimage", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("VsPlayerItem", void 0);

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
      CardGroupCoverItem = _unresolved_2.CardGroupCoverItem;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      roleimage = _unresolved_3.roleimage;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a9f9VVVttDNrQpquZc4H7e", "VsPlayerItem", undefined);

      __checkObsolete__(['Component', 'Label', 'Node', 'path', 'Sprite', 'SpriteFrame', 'UITransform', 'v3', 'Widget']);

      _export("VsPlayerItem", VsPlayerItem = class VsPlayerItem extends Component {
        constructor(...args) {
          super(...args);
          this.effect = void 0;
          this.cardView = void 0;
          this.nameBg = void 0;
          this.nameLab = void 0;
          this.cardGroupCoverItem = void 0;
          this.playerName = void 0;
          this.cardGroupData = void 0;
          this.isMy = void 0;
          this.isInit = false;
          this.resNum = 0;
        }

        onLoad() {
          this.effect = this.node.getChildByPath("effect");
          this.cardView = this.node.getChildByPath("playerCont/cardView").getComponent(Sprite);
          this.nameBg = this.node.getChildByPath("playerCont/nameBg").getComponent(Sprite);
          this.nameLab = this.node.getChildByPath("playerCont/nameLab").getComponent(Label);
          this.cardGroupCoverItem = this.node.getChildByPath("playerCont/CardGroupCoverItem").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.isInit = true;
          this.effect.active = false;
          if (this.playerName) this.updateShow();
        }

        SetData(name, cardGroupData = null, isMy = false) {
          this.playerName = name;
          this.isMy = isMy;
          this.cardGroupData = cardGroupData;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit) return;
          this.resNum++;
          let bgUrl;

          if (this.playerName) {
            this.effect.active = false;
            this.nameLab.string = this.playerName;
          } else {
            this.effect.active = true;
            this.nameLab.string = `???`;
          }

          this.cardView.node.active = false;

          if (this.cardGroupData) {
            this.cardGroupCoverItem.node.active = true;
            this.cardGroupCoverItem.SetData(this.cardGroupData, false);
            let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetHead(this.cardGroupData.avatarId);

            if (cfg) {
              this.cardView.node.active = true;
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && roleimage === void 0 ? (_reportPossibleCrUseOfroleimage({
                error: Error()
              }), roleimage) : roleimage, cfg.cardView, "spriteFrame"), SpriteFrame, res => {
                this.cardView.spriteFrame = res;
              });
            }
          } else {
            this.cardGroupCoverItem.node.active = false;
          }

          if (this.isMy) {
            bgUrl = "nameBg_blue";
          } else {
            bgUrl = "nameBg_red";
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/vs", bgUrl, "spriteFrame"), SpriteFrame, res => {
            this.nameBg.spriteFrame = res;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e27a676b2a9a8d20857a2e0f86727d57fa02966.js.map