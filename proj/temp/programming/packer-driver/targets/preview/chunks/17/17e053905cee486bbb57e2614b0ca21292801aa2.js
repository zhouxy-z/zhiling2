System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, instantiate, Label, ProgressBar, UITransform, v3, TaskActiveBoxItem, CfgMgr, ActiveTaskCont, _crd;

  function _reportPossibleCrUseOfTaskActiveBoxItem(extras) {
    _reporterNs.report("TaskActiveBoxItem", "./TaskActiveBoxItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataTask(extras) {
    _reporterNs.report("SPlayerDataTask", "../player/PlayerStruct", _context.meta, extras);
  }

  _export("ActiveTaskCont", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      TaskActiveBoxItem = _unresolved_2.TaskActiveBoxItem;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb04foLz4tKk7HCliF+ngZd", "ActiveTaskCont", undefined);

      __checkObsolete__(['Button', 'Component', 'instantiate', 'Label', 'Node', 'ProgressBar', 'UITransform', 'v3']);

      _export("ActiveTaskCont", ActiveTaskCont = class ActiveTaskCont extends Component {
        constructor() {
          super(...arguments);
          this.activeNumLab = void 0;
          this.proBar = void 0;
          this.tipsCont = void 0;
          this.boxCont = void 0;
          this.boxItemTemp = void 0;
          this.isInit = void 0;
          this.activeType = void 0;
          this.datas = void 0;
          this.boxList = void 0;
          this.curNum = void 0;
          this.maxNum = void 0;
        }

        onLoad() {
          this.activeNumLab = this.node.getChildByName("activeNumLab").getComponent(Label);
          this.proBar = this.node.getChildByName("proBar").getComponent(ProgressBar);
          this.tipsCont = this.node.getChildByName("tipsCont").getComponent(Button);
          this.boxCont = this.node.getChildByName("boxCont");
          this.boxItemTemp = this.node.getChildByPath("boxCont/boxItemTemp");
          this.isInit = true;
          this.updateShow();
        }
        /**
         * 设置角色数据
         * @param roleId 
         */


        SetData(activeType, datas, curNum, maxNum) {
          this.activeType = activeType;
          this.datas = datas || [];
          this.curNum = curNum;
          this.maxNum = maxNum;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.activeType || !this.datas) return;
          var len = this.datas.length;
          var maxLen = this.datas.length;
          var boxNode;
          var boxItem;
          var taskData;
          var stsTask;
          var boxX = 0;
          var barTrans = this.proBar.node.getComponent(UITransform);
          this.boxCont.removeAllChildren();

          for (var index = 0; index < maxLen; index++) {
            boxNode = instantiate(this.boxItemTemp);
            taskData = this.datas[index];
            stsTask = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetTaskByData(taskData);
            boxX = barTrans.width * (stsTask.CompletionNum / this.maxNum);
            boxNode.active = true;
            boxNode.position = v3(boxX, 0, 0);
            boxItem = boxNode.getComponent(_crd && TaskActiveBoxItem === void 0 ? (_reportPossibleCrUseOfTaskActiveBoxItem({
              error: Error()
            }), TaskActiveBoxItem) : TaskActiveBoxItem);
            if (!boxItem) boxItem = boxNode.addComponent(_crd && TaskActiveBoxItem === void 0 ? (_reportPossibleCrUseOfTaskActiveBoxItem({
              error: Error()
            }), TaskActiveBoxItem) : TaskActiveBoxItem);
            boxItem.SetData(taskData, index);
            this.boxCont.addChild(boxNode);
          }

          var tempNum = this.curNum;

          if (this.curNum > this.maxNum) {
            tempNum = this.maxNum;
          }

          this.activeNumLab.string = "已完成" + tempNum + "/" + this.maxNum;
          this.proBar.progress = this.curNum / this.maxNum;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17e053905cee486bbb57e2614b0ca21292801aa2.js.map