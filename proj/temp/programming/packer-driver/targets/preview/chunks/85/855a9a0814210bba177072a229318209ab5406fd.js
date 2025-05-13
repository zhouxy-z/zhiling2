System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, base, BattleTerrainGrid, _crd;

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  _export("BattleTerrainGrid", void 0);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce9efaUhhRPBL0IcDf7BSsQ", "BattleTerrainGrid", undefined);

      __checkObsolete__(['Node', 'Component', 'Label']);

      /**
       * 地形格子
       */
      _export("BattleTerrainGrid", BattleTerrainGrid = class BattleTerrainGrid extends Component {
        constructor() {
          super(...arguments);
          this.powerA = void 0;
          this.powerNumLabA = void 0;
          this.powerB = void 0;
          this.powerNumLabB = void 0;
          this.stateLab = void 0;
          this.data = void 0;
          this.isInit = false;
          this._terrainId = void 0;
        }

        onLoad() {
          this.powerA = this.node.getChildByName("powerA");
          this.powerNumLabA = this.node.getChildByPath("powerA/powerNumLabA").getComponent(Label);
          this.powerB = this.node.getChildByName("powerB");
          this.powerNumLabB = this.node.getChildByPath("powerB/powerNumLabB").getComponent(Label);
          this.stateLab = this.node.getChildByPath("stateLab").getComponent(Label);
          this.isInit = true;
          this.updateShow();
        }

        setTerrainId(id) {
          this._terrainId = id;
        }

        get terrainId() {
          return this._terrainId;
        }

        setData(data) {
          this.data = data;
          this.updateShow();
        }

        get terrainData() {
          return this.data;
        }

        updatePower(power, isPlaterA) {
          if (isPlaterA === void 0) {
            isPlaterA = true;
          }

          if (isPlaterA) {
            this.powerNumLabA.string = power.toString();
          } else {
            this.powerNumLabB.string = power.toString();
          }
        }

        updateShow() {
          if (!this.isInit) return;

          if (this.data) {
            this.node.active = true;

            if (this.data.terrainState == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomInTerrainState.TerrainStateHide) {
              this.stateLab.string = "未揭示";
            } else if (this.data.terrainState == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomInTerrainState.TerrainStateShow) {
              this.stateLab.string = "已揭示";
            } else if (this.data.terrainState == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomInTerrainState.TerrainStateDestroy) {
              this.stateLab.string = "已损毁";
            } else {
              this.stateLab.string = "未定义";
            }
          } else {
            this.node.active = false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=855a9a0814210bba177072a229318209ab5406fd.js.map