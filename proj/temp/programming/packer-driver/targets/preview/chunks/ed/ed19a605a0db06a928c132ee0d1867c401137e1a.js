System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, Label, base, CfgMgr, BattleCard, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("BattleCard", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      base = _unresolved_2.default;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b4ddmkt1NFUpc8ujE0ubw7", "BattleCard", undefined);

      __checkObsolete__(['Node', 'Component', 'Sprite', 'Label']);

      _export("BattleCard", BattleCard = class BattleCard extends Component {
        constructor() {
          super(...arguments);
          this.icon = void 0;
          this.energy = void 0;
          this.energyLab = void 0;
          this.power = void 0;
          this.powerLab = void 0;
          this.cardIdLab = void 0;
          this.back = void 0;
          this.isInit = false;
          this.data = void 0;
          this.cardCfg = void 0;
        }

        onLoad() {
          this.icon = this.node.getChildByName("icon").getComponent(Sprite);
          this.energy = this.node.getChildByName("energy");
          this.energyLab = this.node.getChildByPath("energy/energyLab").getComponent(Label);
          this.power = this.node.getChildByName("power");
          this.powerLab = this.node.getChildByPath("power/powerLab").getComponent(Label);
          this.cardIdLab = this.node.getChildByPath("cardIdLab").getComponent(Label);
          this.back = this.node.getChildByPath("back");
          this.isInit = true;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit) return;

          if (this.data) {
            this.back.active = !this.data.terrainState || this.data.terrainState != (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomInCardState.CardStateShow;
            this.cardIdLab.string = this.data.instId.toString();

            if (this.cardCfg) {
              this.energy.active = true;
              this.power.active = true;
              this.energyLab.string = this.cardCfg.Cost.toString();
              this.powerLab.string = this.cardCfg.Power.toString();
            } else {
              this.energy.active = false;
              this.power.active = false;
            }
          } else {}
        }

        setData(data) {
          this.data = data;
          this.cardCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard(this.data.configId);
          this.updateShow();
        }

        get cardData() {
          return this.data;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed19a605a0db06a928c132ee0d1867c401137e1a.js.map