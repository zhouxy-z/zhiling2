System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, EditBox, Label, Node, Size, PullStateType, VList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, VirtualListExample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPullMoreInfo(extras) {
    _reporterNs.report("PullMoreInfo", "../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPullStateType(extras) {
    _reporterNs.report("PullStateType", "../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../component/VList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      Size = _cc.Size;
    }, function (_unresolved_2) {
      PullStateType = _unresolved_2.PullStateType;
      VList = _unresolved_2.VList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "044b3l3Q+1FcYbC5gGw4A74", "VirtualListExample", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node', 'Size']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VirtualListExample", VirtualListExample = (_dec = ccclass('VirtualListExample'), _dec2 = property({
        type: [Button]
      }), _dec3 = property({
        type: Button
      }), _dec4 = property({
        type: EditBox
      }), _dec5 = property({
        type: Button
      }), _dec6 = property({
        type: EditBox
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: EditBox
      }), _dec9 = property({
        type: Button
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec(_class = (_class2 = class VirtualListExample extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnList", _descriptor, this);

          _initializerDefineProperty(this, "setCountBtn", _descriptor2, this);

          _initializerDefineProperty(this, "countEditBox", _descriptor3, this);

          _initializerDefineProperty(this, "rollBtn", _descriptor4, this);

          _initializerDefineProperty(this, "rollEditBox", _descriptor5, this);

          _initializerDefineProperty(this, "selectBtn", _descriptor6, this);

          _initializerDefineProperty(this, "selectEditBox", _descriptor7, this);

          _initializerDefineProperty(this, "callBackBtn", _descriptor8, this);

          _initializerDefineProperty(this, "panel", _descriptor9, this);

          _initializerDefineProperty(this, "listNode", _descriptor10, this);

          this.curList = void 0;
          this.curCount = void 0;
        }

        start() {
          for (var index = 0; index < this.btnList.length; index++) {
            var btn = this.btnList[index];
            btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          }

          this.setCountBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.rollBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.selectBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.callBackBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.panel.active = false;
          var vList = this.listNode.getChildByPath("vList").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);

          vList.updateCell = (cell, cellInfo) => {
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
          };

          vList.selectCell = (cell, cellInfo, lastCell, lastInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
          };

          var vListPage = this.listNode.getChildByPath("vListPage").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);

          vListPage.updateCell = (cell, cellInfo) => {
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
          };

          var vGrid = this.listNode.getChildByPath("vGrid").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);

          vGrid.updateCell = (cell, cellInfo) => {
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
          };

          vGrid.selectCell = (cell, cellInfo, lastCell, lastInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
          };

          var vPullHead = this.listNode.getChildByPath("vPullHead").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          var vPullHeadNode = this.listNode.getChildByPath("vPullHead").getChildByPath("view/head");
          vPullHeadNode.active = false;

          vPullHead.updateCell = (cell, cellInfo) => {
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
          };

          vPullHead.selectCell = (cell, cellInfo, lastCell, lastInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
          };

          vPullHead.updatePullHeader = pullInfo => {
            vPullHeadNode.active = true;
            var label = vPullHeadNode.getChildByName("lab").getComponent(Label);

            if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).GO_ON) {
              label.string = "↓ 继续下拉";
            } else if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).LET_GO) {
              label.string = "↑ 松开刷新";
            } else if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).LOCK) {
              label.string = "刷新中...";
            } else if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).CANCEL) {
              label.string = "";
              vPullHeadNode.active = false;
            }

            if (pullInfo.isAction) {
              this.scheduleOnce(() => {
                vPullHead.cellCount = 10;
                vPullHeadNode.active = false;
              }, 1);
            }
          };

          var vPullFooter = this.listNode.getChildByPath("vPullFooter").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          var vPullFooterNode = this.listNode.getChildByPath("vPullFooter").getChildByPath("view/footer");
          vPullFooterNode.active = false;

          vPullFooter.updateCell = (cell, cellInfo) => {
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
          };

          vPullFooter.selectCell = (cell, cellInfo, lastCell, lastInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
          };

          vPullFooter.updatePullFooter = pullInfo => {
            vPullFooterNode.active = true;
            var label = vPullFooterNode.getChildByName("lab").getComponent(Label);

            if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).GO_ON) {
              label.string = "↑ 继续上拉";
            } else if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).LET_GO) {
              label.string = "↓ 松开加载更多";
            } else if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).LOCK) {
              label.string = "数据加载中...";
            } else if (pullInfo.state == (_crd && PullStateType === void 0 ? (_reportPossibleCrUseOfPullStateType({
              error: Error()
            }), PullStateType) : PullStateType).CANCEL) {
              label.string = "";
              vPullFooterNode.active = false;
            }

            if (pullInfo.isAction) {
              this.scheduleOnce(() => {
                this.curCount++;
                vPullFooter.cellCount = this.curCount;
                vPullFooterNode.active = false;
              }, 1);
            }
          };

          var nestVHList = this.listNode.getChildByPath("nestVHList").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);

          nestVHList.updateCell = (cell, cellInfo) => {
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
            var subList = cell.getChildByName("subList").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
              error: Error()
            }), VList) : VList);

            subList.updateCell = (cell, cellInfo) => {
              cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            };

            subList.cellCount = 100;
          };

          var multList = this.listNode.getChildByPath("multList").getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);

          multList.updateCell = (cell, cellInfo) => {
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
          };

          multList.getCellName = index => {
            var min = Math.ceil(1);
            var max = Math.floor(3);
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return "multItem" + num;
          };

          multList.getCellSize = (cell, index) => {
            var min = Math.ceil(60);
            var max = Math.floor(200);
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            var cellSize = new Size(640, 160 + num);
            return cellSize;
          };
        }

        update(deltaTime) {}

        onBtnClick(btn) {
          if (btn.node.name == "callBackBtn") {
            this.panel.active = false;
            return;
          }

          this.curCount = 0;
          this.panel.active = true;
          var name = btn.node.name;
          var showIndex = -1;

          for (var index = 0; index < this.listNode.children.length; index++) {
            var element = this.listNode.children[index];

            if (showIndex < 0 && element.name == name) {
              showIndex = index;
            }

            element.active = false;
          }

          var curPanel = this.listNode.children[showIndex];
          curPanel.active = true;
          this.setPanel(curPanel);
        }

        onClick(btn) {
          switch (btn) {
            case this.setCountBtn:
              this.curCount = Number(this.countEditBox.string);
              this.curList.cellCount = this.curCount;
              break;

            case this.rollBtn:
              this.curList.scrollToIndex(Number(this.rollEditBox.string));
              break;

            case this.selectBtn:
              this.curList.selectIndex(Number(this.selectEditBox.string));
              break;
          }
        }

        setPanel(panel) {
          this.curList = panel.getComponent(_crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.curCount = 0;
          this.curList.cellCount = 0;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "setCountBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "countEditBox", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rollBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rollEditBox", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "selectEditBox", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "callBackBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "listNode", [_dec11], {
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
//# sourceMappingURL=8f687e151869c41138df0403c5177b028e385603.js.map