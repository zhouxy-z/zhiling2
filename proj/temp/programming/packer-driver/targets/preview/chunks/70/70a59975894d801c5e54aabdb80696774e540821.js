System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, Layout, AutoScroller, BagItem, TaskActiveBoxTipsCont, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("TaskActiveBoxTipsCont", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      Layout = _cc.Layout;
    }, function (_unresolved_2) {
      AutoScroller = _unresolved_2.AutoScroller;
    }, function (_unresolved_3) {
      BagItem = _unresolved_3.BagItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e89fFOaHRGS45mqgYZNL3A", "TaskActiveBoxTipsCont", undefined);

      __checkObsolete__(['Component', 'Label', 'Layout', 'Node']);

      _export("TaskActiveBoxTipsCont", TaskActiveBoxTipsCont = class TaskActiveBoxTipsCont extends Component {
        constructor() {
          super(...arguments);
          this.title = void 0;
          this.awardList = void 0;
          this.isInit = false;
          this.datas = [];
          this.title_str = void 0;
        }

        onLoad() {
          this.title = this.node.getChildByName("Label").getComponent(Label);
          this.awardList = this.node.getChildByName("awardList").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.awardList.SetHandle(this.updateAwardItem.bind(this));
          this.awardList.node.on('select', this.onSelect, this);
          this.isInit = true;
          this.updateShow();
        }

        onEnable() {
          this.updateShow();
        }

        SetData(datas, title) {
          this.datas = datas;
          this.title_str = title;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.datas) return;
          this.title.string = this.title_str;
          this.awardList.UpdateDatas(this.datas);
          var layout = this.awardList.node.getChildByPath("view/content").getComponent(Layout);
          layout.affectedByScale = true;
          layout.updateLayout();
        }

        updateAwardItem(item, data) {
          var awardItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!awardItem) awardItem = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          awardItem.setThing(data);
        }

        onSelect(index, item) {// let selectData = this.datas[index];
          // if(selectData){
          //     ItemTips.Show(selectData);
          // }

          return _asyncToGenerator(function* () {})();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70a59975894d801c5e54aabdb80696774e540821.js.map