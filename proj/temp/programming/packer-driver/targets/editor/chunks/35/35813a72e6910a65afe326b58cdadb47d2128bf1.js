System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, base, CfgMgr, BattleCardGrid, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("BattleCardGrid", void 0);

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
      base = _unresolved_2.default;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "737ecTZWLlA2ZCPOWo8rpxR", "BattleCardGrid", undefined);

      __checkObsolete__(['Node', 'Component', 'Label', 'Sprite', 'instantiate', 'v3']);

      /**
       * 卡牌格子
       */
      _export("BattleCardGrid", BattleCardGrid = class BattleCardGrid extends Component {
        constructor(...args) {
          super(...args);
          this.idLab = void 0;
          this.card = void 0;
          this.cardBg = void 0;
          this.energy = void 0;
          this.energyLab = void 0;
          this.power = void 0;
          this.powerLab = void 0;
          this.cardIdLab = void 0;
          this.back = void 0;
          this._areaIdx = void 0;
          this._gridIdx = void 0;
          this._terrainInstId = void 0;
          this._cardData = void 0;
          this._cardCfg = void 0;
          this.isInit = false;
        }

        onLoad() {
          this.idLab = this.node.getChildByName("idLab").getComponent(Label);
          this.card = this.node.getChildByName("card");
          this.energy = this.node.getChildByPath("card/energy");
          this.energyLab = this.node.getChildByPath("card/energy/energyLab").getComponent(Label);
          this.power = this.node.getChildByPath("card/power");
          this.powerLab = this.node.getChildByPath("card/power/powerLab").getComponent(Label);
          this.cardIdLab = this.node.getChildByPath("card/cardIdLab").getComponent(Label);
          this.back = this.node.getChildByPath("card/back");
          this.isInit = true;
          this.updateShow();
        }

        setData(cardData) {
          var _this$_cardData;

          this._cardData = cardData;
          this._cardCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard((_this$_cardData = this._cardData) == null ? void 0 : _this$_cardData.configId);
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit) return;
          this.node.active = true;

          if (this._cardData) {
            this.cardIdLab.string = this._cardData.instId;
            this.card.active = true;
            this.back.active = this._cardData.terrainState == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomInCardState.CardStateHide;

            if (this._cardCfg) {
              this.energy.active = true;
              this.power.active = true;
              this.energyLab.string = this._cardCfg.Cost.toString();
              this.powerLab.string = this._cardCfg.Power.toString();
            } else {
              this.energy.active = false;
              this.power.active = false;
              this.cardIdLab.node.active = false;
            }
          } else {
            if (this.areaIdx < 0) {
              this.node.active = false;
            }

            this.card.active = false;
          }
        }

        get cardData() {
          return this._cardData;
        }

        setTerrainInstId(instId) {
          this._terrainInstId = instId;
        }

        get terrainInstId() {
          return this._terrainInstId;
        }

        setGridIdx(gridIdx, areaIdx = -1) {
          this._gridIdx = gridIdx;
          this._areaIdx = areaIdx;
          this.idLab.string = `${this._areaIdx}_${this._gridIdx}`;
        }

        toBack() {
          this.back.active = false;
        }

        toShow() {
          this.back.active = true;
        }

        get areaIdx() {
          return this._areaIdx;
        }

        get gridIdx() {
          return this._gridIdx;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35813a72e6910a65afe326b58cdadb47d2128bf1.js.map