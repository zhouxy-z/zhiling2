System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Event, EventTouch, Input, Layout, Node, ScrollView, Toggle, UITransform, _decorator, instantiate, Second, _dec, _dec2, _dec3, _class, _crd, ccclass, property, disallowMultiple, requireComponent, AutoScroller;

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../utils/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Event = _cc.Event;
      EventTouch = _cc.EventTouch;
      Input = _cc.Input;
      Layout = _cc.Layout;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Second = _unresolved_2.Second;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b77a1hQ3OxD9Yhc/cwsxF2Z", "AutoScroller", undefined);

      __checkObsolete__(['Component', 'Event', 'EventTouch', 'Input', 'Layout', 'Node', 'NodeEventType', 'ScrollView', 'Size', 'Toggle', 'UITransform', 'Vec2', 'Vec3', '_decorator', 'instantiate', 'v2', 'v3']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);

      _export("AutoScroller", AutoScroller = (_dec = ccclass('AutoScroller'), _dec2 = disallowMultiple(true), _dec3 = requireComponent(ScrollView), _dec(_class = _dec2(_class = _dec3(_class = class AutoScroller extends Component {
        constructor(...args) {
          super(...args);
          this.scroller = void 0;
          this.createItem = void 0;
          this.updateItem = void 0;
          this.datas = void 0;
          this.itemPool = [];
          this.itemTransForm = void 0;
          this.original = void 0;
          this.startX = void 0;
          this.startY = void 0;
          this.showing = {};
          this.type = void 0;
          this.contentW = 0;
          this.contentH = 0;
          this.spaceX = 10;
          this.spaceY = 10;
          this.paddingLeft = 0;
          this.paddingRight = 0;
          this.paddingTop = 0;
          this.paddingDown = 0;
          this.selectIndex = void 0;
          this.isMoveSub = false;
          this._initSpaceX = 0;
          this.canSelect = true;
        }

        onLoad() {
          let scroller = this.getComponent(ScrollView);
          if (!scroller || !scroller.content) throw "滚动组件必须指定一个Content";
          let contentTrans = scroller.content.getComponent(UITransform);
          let ins = this;
          ins.scroller = scroller;
          ins.contentW = contentTrans.width;
          ins.contentH = contentTrans.height;

          if (this.scroller.content.children.length) {
            this.original = this.scroller.content.children[0];
            ins.startX = ins.original.position.x;
            ins.startY = ins.original.position.y;
            var trans = ins.original.getComponent(UITransform);
            ins.original.parent.removeChild(ins.original);
            ins.itemTransForm = trans;
          }

          let layout = scroller.content.getComponent(Layout);

          if (layout) {
            // Layout.Type.VERTICAL
            ins.type = layout.type;
            ins.paddingTop = layout.paddingTop;
            ins.paddingDown = layout.paddingBottom;
            ins.paddingLeft = layout.paddingLeft;
            ins.paddingRight = layout.paddingRight;
            ins.spaceX = layout.spacingX;
            ins.spaceY = layout.spacingY;
            layout.enabled = false;
          } else {
            if (!scroller.vertical && scroller.horizontal) {
              ins.type = Layout.Type.HORIZONTAL;
            } else {
              ins.type = Layout.Type.VERTICAL;
            }
          }

          for (let child of scroller.content.children) {
            ins.itemPool.push(child);
          }

          scroller.content.removeAllChildren();
          scroller.node.on("scrolling", () => {
            ins.flush.apply(ins);
          }, ins);
          /**解决表嵌表处理*/

          let nestedCall = scroller["_hasNestedViewGroup"];

          scroller["_hasNestedViewGroup"] = function (event, captureListeners) {
            if (event.eventPhase !== Event.CAPTURING_PHASE) return false;
            if (!ins.isMoveSub) return false;
            return nestedCall.call(this, event, captureListeners);
          };

          scroller.node.on(Node.EventType.TOUCH_MOVE, function (e) {
            if (e.target != scroller.node) {
              if (ins.isMoveSub) return;
              e.propagationStopped = true;
              let start = e.getStartLocation();
              let curre = e.getLocation();
              let isMoveX = Math.abs(start.x - curre.x) > 7;
              let isMoveY = Math.abs(start.y - curre.y) > 7;

              if (scroller["horizontal"] && !isMoveX && isMoveY) {
                ins.isMoveSub = true;
              } else if (scroller["vertical"] && !isMoveY && isMoveX) {
                ins.isMoveSub = true;
              } //console.log("是否滚动子表----->" + ins.isMoveSub)

            }
          }, ins, true);
          scroller.node.on(Node.EventType.TOUCH_END, function () {
            ins.isMoveSub = false;
          }, ins, true);
          scroller.node.on(Node.EventType.TOUCH_CANCEL, function () {
            ins.isMoveSub = false;
          }, ins, true);
          /**解决表嵌表处理*/

          if (this.datas && (this.original || this.createItem)) {
            this.UpdateDatas(this.datas);
          }
        }
        /**
         * 选择第一个
         */


        async SelectFirst(t = 0.1) {
          this.ScrollToHead(t);
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(t);
          let children = this.scroller.content.children;

          for (let child of children) {
            if (child['$$index'] == 0) {
              this.onSelect(child);
              return;
            }
          }
        }

        async SelectLast(t = 0.1) {
          this.ScrollToLast(t);
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(t);
          let children = this.scroller.content.children;

          for (let child of children) {
            if (child['$$index'] == this.datas.length - 1) {
              this.onSelect(child);
              return;
            }
          }
        }

        ScrollToHead(t = 0.1) {
          if (!this.scroller) return;

          if (this.scroller.vertical) {
            this.scroller.scrollToTop(t);
          } else {
            this.scroller.scrollToLeft(t);
          }
        }

        ScrollToLast(t = 0.1) {
          if (!this.scroller) return;

          if (this.scroller.vertical) {
            this.scroller.scrollToBottom(t);
          } else {
            this.scroller.scrollToRight(t);
          }
        }

        ScrollNext(t = 1) {
          this.scroller.scrollToRight(t);
        }

        ScrollPrev(t = 1) {
          this.scroller.scrollToLeft(t);
        }

        SetHandle(updateItem, craeteItem) {
          this.updateItem = updateItem;

          if (craeteItem) {
            this.createItem = craeteItem;

            if (!this.original) {
              var trans = craeteItem().getComponent(UITransform);
              let box = this.scroller.getComponent(UITransform).getBoundingBoxTo(this.scroller.content.getWorldMatrix());
              this.startX = box.xMin + trans.anchorX * trans.contentSize.width;
              this.startY = box.yMax - (1 - trans.anchorY) * trans.contentSize.height;
            }
          }
        }
        /**
         * 清理列表，并使用null对象初始所有item
         */


        Clean() {
          this.UpdateDatas([]);

          for (let item of this.itemPool) {
            var _this$updateItem;

            (_this$updateItem = this.updateItem) == null || _this$updateItem.call(this, item, null, -1);
          }
        }
        /**
         * 更新数据
         * @param datas 
         * @returns 
         */


        UpdateDatas(datas) {
          this.datas = datas;

          if (!this.datas) {
            debugger;
            return;
          }

          if (!this.scroller) return;
          let trans = this.scroller.content.getComponent(UITransform);
          let itemSize = this.itemTransForm.contentSize;
          let wide;
          let len = datas.length;

          if (this.type == Layout.Type.VERTICAL) {
            wide = Math.max(len * (itemSize.height + this.spaceY) - this.spaceY, 0);
            trans.setContentSize(this.contentW, wide + this.paddingTop + this.paddingDown);
          } else if (this.type == Layout.Type.HORIZONTAL) {
            wide = Math.max(len * (itemSize.width + this.spaceX) - this.spaceX, 0);
            trans.setContentSize(wide + this.paddingLeft + this.paddingRight, this.contentH);
          } else {
            let col = this.getGridCol(itemSize.width);
            let row = Math.ceil(len / col);
            wide = Math.max(row * (itemSize.height + this.spaceY) - this.spaceY, 0);
            trans.setContentSize(this.contentW + this.paddingLeft + this.paddingRight, wide + this.paddingTop + this.paddingDown);
          }

          for (let k in this.showing) this.showing[k]["$$index"] = undefined;

          this.flush(true);
        }

        getGridCol(itemW) {
          return Math.floor((this.contentW + this.spaceX) / (itemW + this.spaceX));
        }

        GetSelectIndex() {
          return this.selectIndex;
        }

        reflush() {
          this.flush(true);
        }

        get children() {
          return this.scroller.content.children;
        }

        getSpaceX() {
          if (!this._initSpaceX) this._initSpaceX = this.spaceX;
          return this._initSpaceX;
        }

        setSpaceX(value) {
          this.spaceX = value;
        }

        getWide() {
          if (this.original) return this.original.getComponent(UITransform).contentSize;
          return this.scroller.content.children[0].getComponent(UITransform).contentSize;
        }

        CanSelect(value) {
          this.canSelect = value;
          let children = this.scroller.content.children;

          for (let child of children) {
            let toggle = child.getComponent(Toggle);
            if (toggle) toggle.enabled = value;
          }
        }

        getItem(index) {
          let item;

          if (this.showing[index]) {
            item = this.showing[index];
          } else if (this.itemPool.length) {
            item = this.itemPool.pop();

            if (!item.hasEventListener(Input.EventType.TOUCH_END, this.onSelect, this)) {
              item.on(Input.EventType.TOUCH_END, this.onSelect, this);
            }
          } else if (this.original) {
            //console.error("-------->创建Item")
            item = instantiate(this.original);
            item.on(Input.EventType.TOUCH_END, this.onSelect, this);
          } else {
            item = this.createItem();
            item.on(Input.EventType.TOUCH_END, this.onSelect, this);
          }

          let toggle = item.getComponent(Toggle);

          if (toggle) {
            if (!this.canSelect) toggle.isChecked = false;
            toggle.enabled = this.canSelect;
          }

          return item;
        }

        onSelect(e) {
          let item;

          if (e instanceof EventTouch) {
            item = e.target;
          } else {
            item = e;
          }

          this.selectIndex = item["$$index"];

          if (item != undefined) {
            this.node.emit("select", item["$$index"], item, this.datas[item["$$index"]]);
          }
        }

        layout(item, nx, ny) {
          let trans = item.getComponent(UITransform);
          let x = this.startX + nx * (trans.contentSize.width + this.spaceX);
          let y = this.startY - ny * (trans.contentSize.height + this.spaceY);
          if (this.type == Layout.Type.HORIZONTAL || this.type == Layout.Type.GRID) x += this.paddingLeft;
          if (this.type == Layout.Type.VERTICAL || this.type == Layout.Type.GRID) y -= this.paddingTop;
          item.setPosition(x, y, 0);
        }

        flush(reset = false) {
          if (!this.datas) return;
          var trans = this.scroller.getComponent(UITransform);
          let box = trans.getBoundingBoxTo(this.scroller.content.getWorldMatrix());
          let leftX = box.xMin,
              topY = box.yMax;
          let rightX = box.xMax,
              downY = box.yMin; // Logger.log("box", rightX - leftX);

          let views = {};
          let itemSize = this.itemTransForm.contentSize;

          if (this.type == Layout.Type.VERTICAL) {
            let hide = itemSize.height + this.spaceY;
            let start = Math.floor(Math.max(0, this.startY - topY) / hide);
            let end = Math.ceil(Math.max(0, this.startY - downY) / hide); // Logger.log("flush", start, end);

            for (let i = start; i <= end; i++) {
              var _this$updateItem2;

              if (i >= this.datas.length) break;
              let item = this.getItem(i);
              if (item['$$index'] != i || reset) (_this$updateItem2 = this.updateItem) == null || _this$updateItem2.call(this, item, this.datas[i], i);
              item['$$index'] = i;
              this.scroller.content.addChild(item);
              this.layout(item, 0, i);
              views[i + ''] = item;
              this.showing[i + ''] = item;
            }
          } else if (this.type == Layout.Type.HORIZONTAL) {
            let wide = itemSize.width + this.spaceX;
            let start = Math.floor(Math.max(0, leftX - this.startX) / wide);
            let end = Math.ceil(Math.max(0, rightX - this.startX) / wide); // Logger.log("flush", start, end);

            for (let i = start; i <= end; i++) {
              var _this$updateItem3;

              if (i >= this.datas.length) break;
              let item = this.getItem(i);
              if (item['$$index'] != i || reset) (_this$updateItem3 = this.updateItem) == null || _this$updateItem3.call(this, item, this.datas[i], i);
              item['$$index'] = i;
              this.scroller.content.addChild(item);
              this.layout(item, i, 0);
              views[i + ''] = item;
              this.showing[i + ''] = item;
            }
          } else if (this.type == Layout.Type.GRID) {
            let hide = itemSize.height + this.spaceY;
            let start = Math.floor(Math.max(0, this.startY - topY) / hide);
            let end = Math.ceil(Math.max(0, this.startY - downY) / hide);
            let col = this.getGridCol(itemSize.width);
            let i = start * col;

            for (let y = start; y <= end; y++) {
              for (let x = 0; x < col; x++) {
                var _this$updateItem4;

                if (i >= this.datas.length) break; // Logger.log("flush", i, x, y);

                let item = this.getItem(i);
                if (item['$$index'] != i || reset) (_this$updateItem4 = this.updateItem) == null || _this$updateItem4.call(this, item, this.datas[i], i);
                item['$$index'] = i;
                this.scroller.content.addChild(item);
                this.layout(item, x, y);
                views[i + ''] = item;
                this.showing[i + ''] = item;
                i++;
              }

              if (i >= this.datas.length) break;
            }
          }

          for (let k in this.showing) {
            if (!views[k]) {
              let isDel = this.receiveItem(this.showing[k]);
              if (isDel) delete this.showing[k];
            }
          }
        }

        receiveItem(item) {
          //console.error("-------->回收Item")

          /**增加滚动边界判断（因为滚动到边界item被回收掉了无法派发touch-end导致滚动列表不触发回弹） */
          if (this.scroller["_isOutOfBoundary"]()) return false;
          if (item.parent) item.parent.removeChild(item);
          item["$$index"] = undefined;
          this.itemPool.push(item);
          return true;
        } // 滑动到指定的位置


        ScrollToIndex(index) {
          for (let k in this.showing) {
            let isDel = this.receiveItem(this.showing[k]);
            if (isDel) delete this.showing[k];
          }

          var trans = this.scroller.getComponent(UITransform);
          let box = trans.getBoundingBoxTo(this.scroller.content.getWorldMatrix());
          let views = {};
          let itemSize = this.itemTransForm.contentSize;

          if (this.type == Layout.Type.VERTICAL) {
            let hide = itemSize.height + this.spaceY;
            let start = index;
            let end = start + Math.ceil((box.yMax - box.yMin) / hide);

            for (let i = start; i <= end; i++) {
              var _this$updateItem5;

              if (i >= this.datas.length) break;
              let item = this.getItem(i);
              if (item['$$index'] != i) (_this$updateItem5 = this.updateItem) == null || _this$updateItem5.call(this, item, this.datas[i], i);
              item['$$index'] = i;
              this.scroller.content.addChild(item);
              this.layout(item, 0, i);
              views[i + ''] = item;
              this.showing[i + ''] = item;
            }

            let transform = this.scroller.content.getComponent(UITransform);
            this.scroller.content.setPosition(0, index * hide + this.contentH * (transform.anchorY - 0.5));
          }
          /* else if (this.type == Layout.Type.HORIZONTAL) {
              let width = itemSize.width + this.spaceX;
              let start = index;
              let end =  start + Math.ceil((box.xMax - box.xMin) / width);
              this.scroller.content.setPosition(0, 0);
              for (let i = start; i <= end; i++) {
                  if (i >= this.datas.length) break;
                  let item = this.getItem(i);
                  if (item['$$index'] != i) this.updateItem?.(item, this.datas[i], i);
                  item['$$index'] = i;
                  this.scroller.content.addChild(item);
                  this.layout(item, i, 0);
                  views[i + ''] = item;
                  this.showing[i + ''] = item;
              }
                this.scroller.content.setPosition(index * width, 0);
          } */

        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9bca0276e1bd990d9811849fa2795416e4b2150.js.map