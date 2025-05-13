System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Component, DragDropGrid, _crd;

  function _reportPossibleCrUseOfIGridData(extras) {
    _reporterNs.report("IGridData", "./DragDropExample", _context.meta, extras);
  }

  _export("DragDropGrid", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9aa54tIxyRLi6vOY0Tl0+1R", "DragDropGrid", undefined);

      __checkObsolete__(['Label', 'Node', 'Component', 'color']);

      _export("DragDropGrid", DragDropGrid = class DragDropGrid extends Component {
        constructor() {
          super(...arguments);
          this.lab = void 0;
          this._data = void 0;
          this._isInit = false;
        }

        start() {
          this.lab = this.node.getChildByName("lab").getComponent(Label);
          this._isInit = true;
          this.updateShow();
          this.node.on(Node.EventType.TOUCH_END, () => {
            console.log("------>" + this.data.id);
          }, this);
        }

        setData(data) {
          this._data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this._isInit || !this._data) return;
          this.lab.string = this._data.id + "";
        }

        get data() {
          return this._data;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab12f5a60b027f877deaf29691b9caf443cdc9ba.js.map