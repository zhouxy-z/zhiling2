System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, RedDotNode, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a483Dlk3JB9YTUHlQVgfXa", "RedDotNode", undefined);

      RedDotNode = class RedDotNode {
        // 红点状态
        constructor(nodeID, parent) {
          if (parent === void 0) {
            parent = null;
          }

          this.nodeID = void 0;
          // 节点唯一标识
          this.parent = void 0;
          // 父节点
          this.children = void 0;
          // 子节点列表
          this.isActive = void 0;
          this.nodeID = nodeID;
          this.parent = parent;
          this.children = [];
          this.isActive = false;
        } // 添加子节点


        addChild(child) {
          if (child === null || this.children.indexOf(child)) return;
          this.children.push(child);
          child.parent = this;
        } // 点亮当前节点及其所有父节点


        activate() {
          if (this.isActive) return; // 如果已经点亮，则直接返回

          this.isActive = true;
          console.log("\u8282\u70B9 " + this.nodeID + " \u88AB\u70B9\u4EAE"); // 递归点亮父节点

          if (this.parent) {
            this.parent.activate();
          }
        } // 熄灭当前节点及其父节点（如果所有子节点都熄灭）


        deactivate() {
          if (!this.isActive) return; // 如果已经熄灭，则直接返回
          // 检查所有子节点是否都熄灭

          var allChildrenInactive = this.children.every(child => !child.isActive);

          if (allChildrenInactive) {
            this.isActive = false;
            console.log("\u8282\u70B9 " + this.nodeID + " \u88AB\u7184\u706D"); // 递归熄灭父节点

            if (this.parent) {
              this.parent.deactivate();
            }
          }
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c8c4829f8637dbdedff2cb0eae19eb5e8ee57be.js.map