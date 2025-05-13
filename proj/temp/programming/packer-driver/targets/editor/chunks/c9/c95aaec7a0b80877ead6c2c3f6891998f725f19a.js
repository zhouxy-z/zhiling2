System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, AutoScroller, Panel, GetMoreWin, _crd;

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("GetMoreWin", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
    }, function (_unresolved_2) {
      AutoScroller = _unresolved_2.AutoScroller;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5572oCHGREXb28IuC4ThXA", "GetMoreWin", undefined);

      __checkObsolete__(['Color', 'Input', 'Label', 'Node', 'Slider', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'UITransform', 'game', 'path', 'random', 'tween', 'v3']);

      _export("GetMoreWin", GetMoreWin = class GetMoreWin extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/panel/bag/GetMoreWin";
          this.scroller = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.scroller = this.find("bg/ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller); // this.scroller.SetHandle(this.updateItem.bind(this));
          // this.scroller.node.on('select', this.onSelect, this);

          this.find("bg/closeBtn").on(Input.EventType.TOUCH_END, this.Hide, this);
        }

        flush(path) {// if (path && path.length > 0) {
          //     let datas: Fetch[] = [];
          //     for (let index = 0; index < path.length; index++) {
          //         let data = CfgMgr.GetFetchData(path[index]);
          //         datas.push(data);
          //     }
          //     this.scroller.UpdateDatas(datas);
          // }
        }

        onShow() {}

        onHide(...args) {} // protected updateItem(item: Node, data: Fetch) {
        //     let itemNode = item.getComponent(GetMoreItem);
        //     if (!itemNode) itemNode = item.addComponent(GetMoreItem);
        //     itemNode.setData(data, this.close.bind(this));
        // }
        // private close(data: Fetch) {
        //     if(data.Win == "ResourcesPanel" || data.Win == "JidiPanel" || data.Win == "SoldierProductionPanel"){
        //         this.closeOther();
        //     }
        //     Goto(data.Win, ...data.Param);
        //     this.Hide()
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c95aaec7a0b80877ead6c2c3f6891998f725f19a.js.map