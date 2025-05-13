System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Input, Label, Node, UITransform, AutoScroller, Convert, FindParent, GameSet, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ComboBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "./AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConvert(extras) {
    _reporterNs.report("Convert", "./Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindParent(extras) {
    _reporterNs.report("FindParent", "./Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../module/GameSet", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AutoScroller = _unresolved_2.AutoScroller;
    }, function (_unresolved_3) {
      Convert = _unresolved_3.Convert;
      FindParent = _unresolved_3.FindParent;
    }, function (_unresolved_4) {
      GameSet = _unresolved_4.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e9e3Tc2A9NYLDrR7OXaTfy", "ComboBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'EventTouch', 'find', 'input', 'Input', 'Label', 'Node', 'ScrollView', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ComboBox", ComboBox = (_dec = ccclass('ComboBox'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
        error: Error()
      }), AutoScroller) : AutoScroller), _dec(_class = (_class2 = class ComboBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "input", _descriptor, this);

          _initializerDefineProperty(this, "open", _descriptor2, this);

          _initializerDefineProperty(this, "scroller", _descriptor3, this);

          this.setHead = void 0;
          this.datas = [];
          this.layout = void 0;
          this.initx = void 0;
          this.inity = void 0;
          this.scaleX = void 0;
          this.scaleY = void 0;
          this.complete = void 0;
          this.hasLoad = false;
          this.$loadSub = void 0;
        }

        onLoad() {
          var _this$complete;

          this.layout = this.scroller.node.parent;
          this.input.on(Input.EventType.TOUCH_END, this.onOpen, this);
          this.scroller.node.on("select", this.onSelect, this); // this.input.on("editing-did-ended", this.onInput, this);

          let p = this.scroller.node.position;
          this.initx = p.x;
          this.inity = p.y;
          this.scaleX = this.open.getScale().x;
          this.scaleY = this.open.getScale().y;
          let size = this.getComponent(UITransform).contentSize;
          let h = this.scroller.node.getComponent(UITransform).contentSize.height;
          this.scroller.node.getComponent(UITransform).setContentSize(size.width, h);
          this.node.on(Node.EventType.PARENT_CHANGED, this.onHide, this);
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }

        onRoot(e) {
          console.log("onRoot", e.target.name);

          if (!(_crd && FindParent === void 0 ? (_reportPossibleCrUseOfFindParent({
            error: Error()
          }), FindParent) : FindParent)(e.target, this.node)) {
            this.onHide();
          }
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }

        start() {}

        update(deltaTime) {}
        /**
         * 更新
         * @param updateItem 
         * @param craeteItem 
         */


        async Init(datas, updateItem, setHead, craeteItem) {
          if (!this.hasLoad) await this.loadSub;
          this.setHead = setHead;
          this.UpdateList(datas);
          this.scroller.SetHandle(updateItem, craeteItem);
        }

        Select(index) {
          if (!this.input) return;
          let data = this.datas[index];

          if (this.setHead) {
            this.setHead(this.input, data);
          } else {
            this.scroller.updateItem(this.input, data, index);
          }

          return data;
        }

        get string() {
          if (!this.input) return "";
          let input = this.input.getComponent(EditBox);
          if (input) return input.string;
          let label = this.input.getComponent(Label);
          if (label) return label.string;
        }

        set string(value) {
          if (!this.input) return;
          let input = this.input.getComponent(EditBox);
          if (input) input.string = value;
          let label = this.input.getComponent(Label);
          if (label) label.string = value;
        }

        async HideList() {
          if (!this.hasLoad) await this.loadSub;
          this.onHide();
        }

        async UpdateList(datas) {
          if (!this.hasLoad) await this.loadSub;
          this.datas = datas;
          this.scroller.UpdateDatas(datas);
        }

        onSelect(index) {
          this.onHide();
          let data = this.Select(index);
          if (data == "" || data == undefined) return;
          this.node.emit("select", data);
        }

        onInput(editbox) {
          let value = editbox.string;
          if (value == "" || value == undefined) return;
          this.node.emit("select", value);
        }

        onOpen(e) {
          if (this.scroller.node.active) {
            this.open.setScale(this.scaleX, this.scaleY);
            this.onHide();
          } else {
            this.open.setScale(this.scaleX, -this.scaleY);
            this.onShow();
            this.scroller.UpdateDatas(this.datas);
          }

          this.node.emit("open");
        }

        onShow() {
          let root = this.node.parent;
          let p = this.scroller.node.position;
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).GetUICanvas().on(Input.EventType.TOUCH_END, this.onRoot, this, true);
          let [x, y] = (_crd && Convert === void 0 ? (_reportPossibleCrUseOfConvert({
            error: Error()
          }), Convert) : Convert)(this.initx, this.inity, this.layout, root);
          this.scroller.node.active = true;
          root.addChild(this.scroller.node);
          this.scroller.node.setPosition(x, y);
        }

        onHide() {
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).GetUICanvas().off(Input.EventType.TOUCH_END, this.onRoot, this, true);
          this.open.setScale(this.scaleX, this.scaleY);
          let root = this.node.parent;
          let p = this.scroller.node.position;
          this.layout.addChild(this.scroller.node);
          this.scroller.node.setPosition(this.initx, this.inity);
          this.scroller.node.active = false;
        }

        hideScroller() {
          this.open.setScale(this.scaleX, this.scaleY);
          let root = this.scroller.node.parent;
          let p = this.scroller.node.position;
          let [x, y] = (_crd && Convert === void 0 ? (_reportPossibleCrUseOfConvert({
            error: Error()
          }), Convert) : Convert)(p.x, p.y, root, this.layout);
          this.layout.addChild(this.scroller.node);
          this.scroller.node.setPosition(x, y);
          this.scroller.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "input", [_dec2], {
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
//# sourceMappingURL=ccd187dba26bb8ca5dacec2f36787694ef806bd0.js.map