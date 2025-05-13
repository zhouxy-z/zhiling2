System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, Card, Utils, CfgMgr, CardTitleItem, _crd;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("CardTitleItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Card = _unresolved_2.Card;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3b66TXqM5MMJJNi8qJLRmc", "CardTitleItem", undefined);

      __checkObsolete__(['Node', 'Component', 'Label']);

      _export("CardTitleItem", CardTitleItem = class CardTitleItem extends Component {
        constructor(...args) {
          super(...args);
          this.titleLab = void 0;
          this.card = void 0;
          this.lock = void 0;
          this.isInit = false;
          this.data = void 0;
          this.titleStr = void 0;
        }

        onLoad() {
          this.titleLab = this.node.getChildByPath("titleCont/titleLab").getComponent(Label);
          this.card = this.node.getChildByPath("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.lock = this.node.getChildByPath("lock"); //this.lockBtn = this.node.getChildByPath("lock");

          this.isInit = true;
          this.updateShow();
        }

        SetData(data, titleStr) {
          this.data = data;
          this.titleStr = titleStr;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;

          if (!this.data.id) {
            this.lock.active = true;
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.card.node, true);
          } else {
            this.lock.active = false;
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.card.node, false);
          }

          this.card.SetData(this.data);

          if (this.titleStr) {
            this.titleLab.string = this.titleStr;
          } else {
            let stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(this.data.cardId);
            this.titleLab.string = stdCard.CardName;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3f69d9fee250124d293fdc36faa862e67a7a4ba.js.map