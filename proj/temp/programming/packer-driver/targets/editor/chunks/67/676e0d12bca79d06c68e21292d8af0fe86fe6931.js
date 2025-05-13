System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, BattleCardGrid, BattleTerrainArea, _crd;

  function _reportPossibleCrUseOfBattleCardGrid(extras) {
    _reporterNs.report("BattleCardGrid", "./BattleCardGrid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/proto", _context.meta, extras);
  }

  _export("BattleTerrainArea", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      BattleCardGrid = _unresolved_2.BattleCardGrid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a0284EMqJHHYOdR8q0iOPo", "BattleTerrainArea", undefined);

      __checkObsolete__(['Node', 'Component']);

      /**
       * 地形区域
       */
      _export("BattleTerrainArea", BattleTerrainArea = class BattleTerrainArea extends Component {
        constructor(...args) {
          super(...args);
          this.gridList = [];
          this.isInit = false;
          this._areaId = void 0;
          this._terrainData = void 0;
        }

        onLoad() {
          for (let node of this.node.children) {
            this.gridList.push(node.addComponent(_crd && BattleCardGrid === void 0 ? (_reportPossibleCrUseOfBattleCardGrid({
              error: Error()
            }), BattleCardGrid) : BattleCardGrid));
          }

          this.updateGridId();
          this.isInit = true; //this.updateShow();
        }

        setAreaId(id) {
          this._areaId = id;
          this.updateGridId();
        }

        updateGridId() {
          if (!this.isInit) return;

          for (let index = 0; index < this.gridList.length; index++) {
            let com = this.gridList[index];
            com.setGridIdx(index, this._areaId);
          }
        }

        get areaId() {
          return this._areaId;
        }

        setData(terrainData) {
          this._terrainData = terrainData;
          this.updateShow();
        }

        get terrainData() {
          return this._terrainData;
        }

        updateShow() {
          if (!this.isInit) return;
          this.node.active = this._terrainData != null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=676e0d12bca79d06c68e21292d8af0fe86fe6931.js.map