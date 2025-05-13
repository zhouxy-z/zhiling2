System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Panel, AutoScroller, CfgMgr, GetMoreItem, Goto, GetMoreWin, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../utils/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFetch(extras) {
    _reporterNs.report("Fetch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetMoreItem(extras) {
    _reporterNs.report("GetMoreItem", "./GetMoreItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../manager/EventMgr", _context.meta, extras);
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
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      GetMoreItem = _unresolved_5.GetMoreItem;
    }, function (_unresolved_6) {
      Goto = _unresolved_6.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5572oCHGREXb28IuC4ThXA", "GetMoreWin", undefined);

      __checkObsolete__(['Color', 'Input', 'Label', 'Node', 'Slider', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'UITransform', 'game', 'path', 'random', 'tween', 'v3']);

      _export("GetMoreWin", GetMoreWin = class GetMoreWin extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/bag/GetMoreWin";
          this.scroller = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.scroller = this.find("bg/ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.updateItem.bind(this)); // this.scroller.node.on('select', this.onSelect, this);

          this.find("bg/closeBtn").on(Input.EventType.TOUCH_END, this.Hide, this);
        }

        flush(path) {
          if (path && path.length > 0) {
            var datas = [];

            for (var index = 0; index < path.length; index++) {
              var data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetFetchData(path[index]);
              datas.push(data);
            }

            this.scroller.UpdateDatas(datas);
          }
        }

        onShow() {}

        onHide() {}

        updateItem(item, data) {
          var itemNode = item.getComponent(_crd && GetMoreItem === void 0 ? (_reportPossibleCrUseOfGetMoreItem({
            error: Error()
          }), GetMoreItem) : GetMoreItem);
          if (!itemNode) itemNode = item.addComponent(_crd && GetMoreItem === void 0 ? (_reportPossibleCrUseOfGetMoreItem({
            error: Error()
          }), GetMoreItem) : GetMoreItem);
          itemNode.setData(data, this.close.bind(this));
        }

        close(data) {
          if (data.Win == "ResourcesPanel" || data.Win == "JidiPanel" || data.Win == "SoldierProductionPanel") {
            this.closeOther();
          }

          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)(data.Win, ...data.Param);
          this.Hide();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3fb8136d652b30975d4a6b4a2c888291281a84f.js.map