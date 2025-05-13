System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, easing, Label, tween, v3, Panel, Card, PlayerData, CfgMgr, CardTipsPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("CardTipsPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      easing = _cc.easing;
      Label = _cc.Label;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      Card = _unresolved_3.Card;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9516dBlGHlERKsyEnabhgtd", "CardTipsPanel", undefined);

      __checkObsolete__(['Button', 'easing', 'Label', 'RichText', 'tween', 'v3']);

      _export("CardTipsPanel", CardTipsPanel = class CardTipsPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/common/CardTipsPanel";
          this.maskBtn = void 0;
          this.closeBtn = void 0;
          this.card = void 0;
          this.skillDescLab = void 0;
          this.cardData = void 0;
        }

        onLoad() {
          this.card = this.find("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.skillDescLab = this.find("skillDescLab", Label);
          this.maskBtn = this.find("mask", Button);
          this.closeBtn = this.find("closeBtn", Button);
          this.maskBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onShow() {}

        flush(cardCfgId, cardId = null) {
          let cardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCardDataById(cardId);

          if (cardData) {
            this.cardData = cardData;
          } else {
            this.cardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CreateCardData(cardCfgId);
          }

          let skillDesc = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardSkillDesc(cardCfgId);
          this.skillDescLab.string = skillDesc;
          this.showCard();
        }

        onHide() {}

        onBtnClick(btn) {
          switch (btn) {
            case this.maskBtn:
            case this.closeBtn:
              this.Hide();
              break;
          }
        }

        showCard() {
          this.maskBtn.interactable = false;
          this.closeBtn.node.active = false;
          this.skillDescLab.node.active = false;
          this.card.SetData(this.cardData);
          this.card.node.scale = v3(0.5, 0.5, 0.5);
          tween(this.card.node).to(0.5, {
            scale: v3(2, 2, 2)
          }, {
            easing: easing.backOut
          }).call(() => {
            this.maskBtn.interactable = true;
            this.closeBtn.node.active = true;
            this.skillDescLab.node.active = true;
          }).start();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ee3f430aee1b4b7dd50df056418a0007a15fa1e.js.map