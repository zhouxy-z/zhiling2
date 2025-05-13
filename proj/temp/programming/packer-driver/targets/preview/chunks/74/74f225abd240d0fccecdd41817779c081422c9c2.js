System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, RedDotMgr, _crd, RedDotId;

  _export("RedDotMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2265DfLYVBur9oCQw/fqGi", "RedDotMgr", undefined);

      _export("RedDotId", RedDotId = /*#__PURE__*/function (RedDotId) {
        RedDotId[RedDotId["zhu"] = 100000] = "zhu";
        RedDotId[RedDotId["zhu_task"] = 100001] = "zhu_task";
        return RedDotId;
      }({}));

      _export("RedDotMgr", RedDotMgr = class RedDotMgr {
        // 存储所有节点
        constructor() {
          // 单例实例
          this.nodes = void 0;
          this.nodes = new Map();
        } // 获取单例实例


        static getInstance() {
          if (!RedDotMgr.instance) {
            RedDotMgr.instance = new RedDotMgr();
          }

          return RedDotMgr.instance;
        } // 注册节点


        registerNode(nodeID, parentID) {
          if (parentID === void 0) {
            parentID = null;
          }

          if (this.nodes.has(nodeID)) {
            throw new Error("\u8282\u70B9 " + nodeID + " \u5DF2\u5B58\u5728");
          }

          var parent = parentID ? this.nodes.get(parentID) : null;
          var node = new RedDotNode(nodeID, parent);
          this.nodes.set(nodeID, node);

          if (parent) {
            parent.addChild(node);
          }

          return node;
        } // 点亮节点


        activateNode(nodeID) {
          var node = this.nodes.get(nodeID);

          if (node) {
            node.activate();
          } else {
            throw new Error("\u8282\u70B9 " + nodeID + " \u4E0D\u5B58\u5728");
          }
        } // 熄灭节点


        deactivateNode(nodeID) {
          var node = this.nodes.get(nodeID);

          if (node) {
            node.deactivate();
          } else {
            throw new Error("\u8282\u70B9 " + nodeID + " \u4E0D\u5B58\u5728");
          }
        } // 获取节点状态


        getNodeState(nodeID) {
          var node = this.nodes.get(nodeID);

          if (node) {
            return node.isActive;
          } else {
            throw new Error("\u8282\u70B9 " + nodeID + " \u4E0D\u5B58\u5728");
          }
        }

      });

      RedDotMgr.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74f225abd240d0fccecdd41817779c081422c9c2.js.map