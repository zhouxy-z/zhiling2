System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Canvas, Component, EditBox, Input, Node, UITransform, AutoScroller, Utils, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, Selector;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "./AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../utils/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AutoScroller = _unresolved_2.AutoScroller;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "786d2mAVOJF8oGVOJcyRsC2", "Selector", undefined);

      __checkObsolete__(['_decorator', 'Canvas', 'Component', 'EditBox', 'EventTouch', 'find', 'Input', 'Node', 'ScrollView', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Selector", Selector = (_dec = ccclass('Selector'), _dec2 = property(EditBox), _dec3 = property(Node), _dec4 = property(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
        error: Error()
      }), AutoScroller) : AutoScroller), _dec(_class = (_class2 = (_class3 = class Selector extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "input", _descriptor, this);

          _initializerDefineProperty(this, "open", _descriptor2, this);

          _initializerDefineProperty(this, "scroller", _descriptor3, this);

          this.datas = [];
          this.layout = void 0;
        }

        onLoad() {
          this.layout = this.scroller.node.parent;
          this.open.on(Input.EventType.TOUCH_END, this.onOpen, this);
          this.scroller.node.on("select", this.onSelect, this);
          this.input.node.on("editing-did-ended", this.onInput, this);
          let size = this.getComponent(UITransform).contentSize;
          let h = this.scroller.node.getComponent(UITransform).contentSize.height;
          this.scroller.node.getComponent(UITransform).setContentSize(size.width, h);
        }

        start() {}

        update(deltaTime) {}
        /**
         * 更新
         * @param updateItem 
         * @param craeteItem 
         */


        Init(datas, updateItem, craeteItem) {
          this.UpdateList(datas);
          this.scroller.SetHandle(updateItem, craeteItem);
        }

        Select(index) {
          let data = this.datas[index];
          this.scroller.updateItem(this.input.node, data, index);
          return this.input.string;
        }

        get string() {
          return this.input.string;
        }

        set string(value) {
          this.input.string = value;
        }

        HideList() {
          this.onHide();
        }

        UpdateList(datas) {
          this.datas = datas;
          this.scroller.UpdateDatas(datas);
        }

        onSelect(index) {
          if (Selector.current != this) Selector.current = undefined;
          this.onHide();
          let data = this.Select(index);
          if (data == "" || data == undefined) return;
          this.node.emit("select", data, this.datas[index]);
        }

        onInput(editbox) {
          let value = editbox.string;
          if (value == "" || value == undefined) return;
          this.node.emit("select", value);
        }

        onOpen(e) {
          if (Selector.current && Selector.current != this) {
            Selector.current.onHide();
          }

          if (this.scroller.node.active) {
            if (Selector.current != this) Selector.current = undefined;
            this.onHide();
          } else {
            Selector.current = this;
            this.onShow();
            this.scroller.UpdateDatas(this.datas);
          }

          this.node.emit("open");
        }

        getRoot(node) {
          let parent = node.parent;

          while (parent && !parent.getComponent(Canvas)) {
            if (parent.parent) {
              parent = parent.parent;
            } else {
              break;
            }
          }

          return parent;
        }

        onShow() {
          let root = this.getRoot(this.scroller.node);
          let p = this.scroller.node.position;
          let [x, y] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).Convert(p.x, p.y, this.layout, root);
          this.scroller.node.active = true;
          root.addChild(this.scroller.node);
          this.scroller.node.setPosition(x, y);
        }

        onHide() {
          let root = this.scroller.node.parent;
          let p = this.scroller.node.position;
          let [x, y] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).Convert(p.x, p.y, root, this.layout);
          this.layout.addChild(this.scroller.node);
          this.scroller.node.setPosition(x, y);
          this.scroller.node.active = false;
        }

      }, _class3.current = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "input", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "open", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroller", [_dec4], {
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
//# sourceMappingURL=5888a90212739f3a8a40584c0be9b45752360923.js.map