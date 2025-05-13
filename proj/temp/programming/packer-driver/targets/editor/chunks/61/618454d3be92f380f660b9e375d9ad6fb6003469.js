System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, NodePool, DragDropMgr, DragDropGrid, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, DragDropExample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDragDropMgr(extras) {
    _reporterNs.report("DragDropMgr", "../manager/DragDropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDragData(extras) {
    _reporterNs.report("IDragData", "../manager/DragDropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDragDropEvent(extras) {
    _reporterNs.report("IDragDropEvent", "../manager/DragDropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragDropGrid(extras) {
    _reporterNs.report("DragDropGrid", "./DragDropGrid", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      DragDropMgr = _unresolved_2.DragDropMgr;
    }, function (_unresolved_3) {
      DragDropGrid = _unresolved_3.DragDropGrid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a5a1rOhxVCAKQ/eC5//F3l", "DragDropAgentExample", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'NodePool']);

      __checkObsolete__(['instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragDropExample", DragDropExample = (_dec = ccclass('DragDropExample'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = class DragDropExample extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "grid1", _descriptor, this);

          _initializerDefineProperty(this, "grid2", _descriptor2, this);

          _initializerDefineProperty(this, "dragLayer", _descriptor3, this);

          _initializerDefineProperty(this, "tempAgent", _descriptor4, this);

          this.nodePool = new NodePool();
        }

        start() {
          (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
            error: Error()
          }), DragDropMgr) : DragDropMgr).on(this, this.dragLayer);
          let id = 1;

          for (let index = 0; index < this.grid1.children.length; index++) {
            const element = this.grid1.children[index];
            const com = element.addComponent(_crd && DragDropGrid === void 0 ? (_reportPossibleCrUseOfDragDropGrid({
              error: Error()
            }), DragDropGrid) : DragDropGrid);
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDragNode(com.node);
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDropNode(com.node);
            com.setData({
              id: id
            });
            id++;
          }

          let node = this.grid2.children[0];

          for (let index = 0; index < node.children.length; index++) {
            const element = node.children[index];
            const com = element.addComponent(_crd && DragDropGrid === void 0 ? (_reportPossibleCrUseOfDragDropGrid({
              error: Error()
            }), DragDropGrid) : DragDropGrid);
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDragNode(com.node);
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDropNode(com.node);
            com.setData({
              id: id
            });
            id++;
          }
        }

        update(deltaTime) {}

        onDrag(dragData) {}

        onDrop(dropNode, dragData) {
          if (dropNode) {
            dragData.dragNode.parent = dropNode;
            dragData.dragNode.position = dragData.dragNodePos;
            let icon = dragData.dragParentNode.getChildByName("icon");
            this.nodePool.put(icon);
          } else {
            this.nodePool.put(dragData.dragNode);
          }
        }

        chekIsCanDrag(node) {
          let icon = node.getChildByName("icon");
          return icon != null;
        }

        creatDragNode(node) {
          let dragAgent = this.nodePool.get() || instantiate(this.tempAgent);
          dragAgent.name = "icon";
          let icon = node.getChildByName("icon");
          let dragData = {
            dragNode: dragAgent,
            dragNodePos: icon.position.clone(),
            dragParentNode: node,
            isAgent: true
          };
          return dragData;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "grid1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "grid2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dragLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tempAgent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=618454d3be92f380f660b9e375d9ad6fb6003469.js.map