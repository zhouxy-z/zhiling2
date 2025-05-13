System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, path, Sprite, SpriteFrame, cardBack, folder_icon, ResMgr, CfgMgr, CardGroupCoverItem, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcardBack(extras) {
    _reporterNs.report("cardBack", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("CardGroupCoverItem", void 0);

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
      cardBack = _unresolved_2.cardBack;
      folder_icon = _unresolved_2.folder_icon;
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50522oPsElKv53P0gUKloZa", "CardGroupCoverItem", undefined);

      __checkObsolete__(['Color', 'Component', 'Label', 'Node', 'path', 'Sprite', 'SpriteFrame']);

      /**
       * 卡组封面item
       */
      _export("CardGroupCoverItem", CardGroupCoverItem = class CardGroupCoverItem extends Component {
        constructor(...args) {
          super(...args);
          this.bg = void 0;
          this.cardBack = void 0;
          this.notCardGroup = void 0;
          this.icon = void 0;
          this.mark = void 0;
          this.userLab = void 0;
          this.nameLab = void 0;
          this.data = void 0;
          this.isInit = false;
          this.isShowUser = void 0;
        }

        onLoad() {
          this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
          this.cardBack = this.node.getChildByPath("cardBack").getComponent(Sprite);
          this.notCardGroup = this.node.getChildByPath("notCardGroup");
          this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
          this.mark = this.node.getChildByPath("mark");
          this.userLab = this.node.getChildByName("userLab").getComponent(Label);
          this.nameLab = this.node.getChildByPath("nameLab").getComponent(Label);
          this.isInit = true;
          this.updateShow();
        }

        SetData(data, isShowUser = true) {
          this.data = data;
          this.isShowUser = isShowUser;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit) return;
          let haveNum = 0;
          let iconUrl = "26";
          let name = "";
          this.cardBack.node.active = false;
          this.icon.node.active = false;
          this.notCardGroup.active = true;
          this.userLab.node.active = false;

          if (this.data) {
            this.cardBack.node.active = true;
            this.icon.node.active = true;
            this.notCardGroup.active = false;
            haveNum = this.data.size;
            name = this.data.name;
            this.userLab.node.active = this.isShowUser && this.data.isDefault;
            this.bg.node.active = true;
            this.nameLab.string = this.data.name;
            this.mark.active = false;
            let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetHead(this.data.avatarId);

            if (cfg) {
              let headIconUrl = cfg.icon;
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
                this.icon.spriteFrame = res;
              });
            }

            let cardBackcfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardBackCfgById(this.data.cardBackId);

            if (cardBackcfg) {
              let callBackIcon = cardBackcfg.icon;
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && cardBack === void 0 ? (_reportPossibleCrUseOfcardBack({
                error: Error()
              }), cardBack) : cardBack, "card_back_" + callBackIcon, "spriteFrame"), SpriteFrame, res => {
                this.cardBack.spriteFrame = res;
              });
            }
          } else {
            this.bg.node.active = false;
            this.nameLab.string = `???`;
            this.mark.active = true;
          }

          let bgUrl = "bg_red";
          let nameColor = "#FF7D7D";

          if (!this.data || haveNum >= (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).CardGuroupComm.DeckFullSize) {
            bgUrl = "bg_blue";
            nameColor = "#FFFFFF";
            this.mark.active = false;
          } else {
            this.mark.active = true;
          }

          this.nameLab.string = name;
          this.nameLab.color.fromHEX(nameColor);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/cardGroupCover", bgUrl, "spriteFrame"), SpriteFrame, res => {
            this.bg.spriteFrame = res;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b85c7bd1df68c983c825657dbeb447682cf6eb1e.js.map