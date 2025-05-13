System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, PageView, Panel, TaskPanel, Home, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskPanel(extras) {
    _reporterNs.report("TaskPanel", "../task/TaskPanel", _context.meta, extras);
  }

  _export("Home", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Input = _cc.Input;
      PageView = _cc.PageView;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      TaskPanel = _unresolved_3.TaskPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b331vJydpEF6jB+JtlYgss", "Home", undefined);

      __checkObsolete__(['Button', 'CCClass', 'Event', 'EventTouch', 'Input', 'Node', 'PageView', 'UITransform', '_decorator', 'instantiate', 'size']);

      _export("Home", Home = class Home extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = 'prefabs/Home';
          this.taskButton = void 0;
          this.PageView = void 0;
          this.PageViewTime = 8;
        }

        onLoad() {
          this.PageView = this.find("PageView", PageView);
          this.taskButton = this.find("taskButton", Button);
          this.taskButton.node.on("click", this.onButton, this);
        }

        onShow() {}

        flush() {
          //    RedDotMgr.getInstance().registerNode(RedDotId.zhu)
          this.starPage();
        }

        onHide() {}

        onButton() {
          (_crd && TaskPanel === void 0 ? (_reportPossibleCrUseOfTaskPanel({
            error: Error()
          }), TaskPanel) : TaskPanel).Show();
        }

        starPage() {
          var pagetype = [0, 1, 2];
          var pagetypenum_0 = 2;
          var pagetypenum_1 = 3;
          var pagetypenum_2 = 2;
          var pageName = ["page1", "page2", "page3", "page4", "page5"];
          this.PageView.node.on("page-turning", this.movePage, this);
          this.PageView.node.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          this.PageView.scrollToPage(1, 0.01); // for (let k = 0; k < pageName.length; k++) {
          //     // let is_has = this.pageItem.findIndex((item)=>{item.name == pageName[k]});
          //     // console.log(is_has)
          //     // if(is_has){
          //         let page_item = new Node("page_node");
          //         page_item.addComponent(UITransform).setContentSize(size(300,900))
          //         let item = instantiate(page_item) 
          //         let itemNode = item.getComponent(pageitem);
          //         if (!itemNode) itemNode = item.addComponent(pageitem);
          //         itemNode.SetData(k)
          //         this.PageView.addPage(item);
          //     // }
          // }
        }

        movePage(pageView) {
          var index = this.PageView.getPages().length;

          if (this.PageView.getCurrentPageIndex() == 0) {
            this.PageView.scrollToPage(index - 2, 0.01);
          } else if (this.PageView.getCurrentPageIndex() == index - 1) {
            this.PageView.scrollToPage(1, 0.01);
          }
        }

        touchMove() {
          this.PageViewTime = 8;
        }

        update(dt) {
          this.PageViewTime -= dt;

          if (this.PageViewTime <= 0) {
            this.PageView.setCurrentPageIndex(this.PageView.getCurrentPageIndex() + 1);
            this.PageViewTime = 8;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29284803547f80e6f00cba2d65a0c5416673e700.js.map