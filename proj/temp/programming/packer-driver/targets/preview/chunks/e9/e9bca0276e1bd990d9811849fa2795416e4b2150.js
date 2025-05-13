System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Event, EventTouch, Input, Layout, Node, ScrollView, Toggle, UITransform, _decorator, instantiate, Second, _dec, _dec2, _dec3, _class, _crd, ccclass, property, disallowMultiple, requireComponent, AutoScroller;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
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
          var scroller = this.getComponent(ScrollView);
          if (!scroller || !scroller.content) throw "滚动组件必须指定一个Content";
          var contentTrans = scroller.content.getComponent(UITransform);
          var ins = this;
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

          var layout = scroller.content.getComponent(Layout);

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

          for (var child of scroller.content.children) {
            ins.itemPool.push(child);
          }

          scroller.content.removeAllChildren();
          scroller.node.on("scrolling", () => {
            ins.flush.apply(ins);
          }, ins);
          /**解决表嵌表处理*/

          var nestedCall = scroller["_hasNestedViewGroup"];

          scroller["_hasNestedViewGroup"] = function (event, captureListeners) {
            if (event.eventPhase !== Event.CAPTURING_PHASE) return false;
            if (!ins.isMoveSub) return false;
            return nestedCall.call(this, event, captureListeners);
          };

          scroller.node.on(Node.EventType.TOUCH_MOVE, function (e) {
            if (e.target != scroller.node) {
              if (ins.isMoveSub) return;
              e.propagationStopped = true;
              var start = e.getStartLocation();
              var curre = e.getLocation();
              var isMoveX = Math.abs(start.x - curre.x) > 7;
              var isMoveY = Math.abs(start.y - curre.y) > 7;

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


        SelectFirst(t) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (t === void 0) {
              t = 0.1;
            }

            _this.ScrollToHead(t);

            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(t);
            var children = _this.scroller.content.children;

            for (var child of children) {
              if (child['$$index'] == 0) {
                _this.onSelect(child);

                return;
              }
            }
          })();
        }

        SelectLast(t) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (t === void 0) {
              t = 0.1;
            }

            _this2.ScrollToLast(t);

            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(t);
            var children = _this2.scroller.content.children;

            for (var child of children) {
              if (child['$$index'] == _this2.datas.length - 1) {
                _this2.onSelect(child);

                return;
              }
            }
          })();
        }

        ScrollToHead(t) {
          if (t === void 0) {
            t = 0.1;
          }

          if (!this.scroller) return;

          if (this.scroller.vertical) {
            this.scroller.scrollToTop(t);
          } else {
            this.scroller.scrollToLeft(t);
          }
        }

        ScrollToLast(t) {
          if (t === void 0) {
            t = 0.1;
          }

          if (!this.scroller) return;

          if (this.scroller.vertical) {
            this.scroller.scrollToBottom(t);
          } else {
            this.scroller.scrollToRight(t);
          }
        }

        ScrollNext(t) {
          if (t === void 0) {
            t = 1;
          }

          this.scroller.scrollToRight(t);
        }

        ScrollPrev(t) {
          if (t === void 0) {
            t = 1;
          }

          this.scroller.scrollToLeft(t);
        }

        SetHandle(updateItem, craeteItem) {
          this.updateItem = updateItem;

          if (craeteItem) {
            this.createItem = craeteItem;

            if (!this.original) {
              var trans = craeteItem().getComponent(UITransform);
              var box = this.scroller.getComponent(UITransform).getBoundingBoxTo(this.scroller.content.getWorldMatrix());
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

          for (var _item of this.itemPool) {
            var _this$updateItem;

            (_this$updateItem = this.updateItem) == null || _this$updateItem.call(this, _item, null, -1);
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
          var trans = this.scroller.content.getComponent(UITransform);
          var itemSize = this.itemTransForm.contentSize;
          var wide;
          var len = datas.length;

          if (this.type == Layout.Type.VERTICAL) {
            wide = Math.max(len * (itemSize.height + this.spaceY) - this.spaceY, 0);
            trans.setContentSize(this.contentW, wide + this.paddingTop + this.paddingDown);
          } else if (this.type == Layout.Type.HORIZONTAL) {
            wide = Math.max(len * (itemSize.width + this.spaceX) - this.spaceX, 0);
            trans.setContentSize(wide + this.paddingLeft + this.paddingRight, this.contentH);
          } else {
            var col = this.getGridCol(itemSize.width);
            var row = Math.ceil(len / col);
            wide = Math.max(row * (itemSize.height + this.spaceY) - this.spaceY, 0);
            trans.setContentSize(this.contentW + this.paddingLeft + this.paddingRight, wide + this.paddingTop + this.paddingDown);
          }

          for (var k in this.showing) this.showing[k]["$$index"] = undefined;

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
          var children = this.scroller.content.children;

          for (var child of children) {
            var toggle = child.getComponent(Toggle);
            if (toggle) toggle.enabled = value;
          }
        }

        getItem(index) {
          var item;

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

          var toggle = item.getComponent(Toggle);

          if (toggle) {
            if (!this.canSelect) toggle.isChecked = false;
            toggle.enabled = this.canSelect;
          }

          return item;
        }

        onSelect(e) {
          var item;

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
          var trans = item.getComponent(UITransform);
          var x = this.startX + nx * (trans.contentSize.width + this.spaceX);
          var y = this.startY - ny * (trans.contentSize.height + this.spaceY);
          if (this.type == Layout.Type.HORIZONTAL || this.type == Layout.Type.GRID) x += this.paddingLeft;
          if (this.type == Layout.Type.VERTICAL || this.type == Layout.Type.GRID) y -= this.paddingTop;
          item.setPosition(x, y, 0);
        }

        flush(reset) {
          if (reset === void 0) {
            reset = false;
          }

          if (!this.datas) return;
          var trans = this.scroller.getComponent(UITransform);
          var box = trans.getBoundingBoxTo(this.scroller.content.getWorldMatrix());
          var leftX = box.xMin,
              topY = box.yMax;
          var rightX = box.xMax,
              downY = box.yMin; // Logger.log("box", rightX - leftX);

          var views = {};
          var itemSize = this.itemTransForm.contentSize;

          if (this.type == Layout.Type.VERTICAL) {
            var hide = itemSize.height + this.spaceY;
            var start = Math.floor(Math.max(0, this.startY - topY) / hide);
            var end = Math.ceil(Math.max(0, this.startY - downY) / hide); // Logger.log("flush", start, end);

            for (var i = start; i <= end; i++) {
              var _this$updateItem2;

              if (i >= this.datas.length) break;

              var _item2 = this.getItem(i);

              if (_item2['$$index'] != i || reset) (_this$updateItem2 = this.updateItem) == null || _this$updateItem2.call(this, _item2, this.datas[i], i);
              _item2['$$index'] = i;
              this.scroller.content.addChild(_item2);
              this.layout(_item2, 0, i);
              views[i + ''] = _item2;
              this.showing[i + ''] = _item2;
            }
          } else if (this.type == Layout.Type.HORIZONTAL) {
            var wide = itemSize.width + this.spaceX;

            var _start = Math.floor(Math.max(0, leftX - this.startX) / wide);

            var _end = Math.ceil(Math.max(0, rightX - this.startX) / wide); // Logger.log("flush", start, end);


            for (var _i = _start; _i <= _end; _i++) {
              var _this$updateItem3;

              if (_i >= this.datas.length) break;

              var _item3 = this.getItem(_i);

              if (_item3['$$index'] != _i || reset) (_this$updateItem3 = this.updateItem) == null || _this$updateItem3.call(this, _item3, this.datas[_i], _i);
              _item3['$$index'] = _i;
              this.scroller.content.addChild(_item3);
              this.layout(_item3, _i, 0);
              views[_i + ''] = _item3;
              this.showing[_i + ''] = _item3;
            }
          } else if (this.type == Layout.Type.GRID) {
            var _hide = itemSize.height + this.spaceY;

            var _start2 = Math.floor(Math.max(0, this.startY - topY) / _hide);

            var _end2 = Math.ceil(Math.max(0, this.startY - downY) / _hide);

            var col = this.getGridCol(itemSize.width);

            var _i2 = _start2 * col;

            for (var y = _start2; y <= _end2; y++) {
              for (var x = 0; x < col; x++) {
                var _this$updateItem4;

                if (_i2 >= this.datas.length) break; // Logger.log("flush", i, x, y);

                var _item4 = this.getItem(_i2);

                if (_item4['$$index'] != _i2 || reset) (_this$updateItem4 = this.updateItem) == null || _this$updateItem4.call(this, _item4, this.datas[_i2], _i2);
                _item4['$$index'] = _i2;
                this.scroller.content.addChild(_item4);
                this.layout(_item4, x, y);
                views[_i2 + ''] = _item4;
                this.showing[_i2 + ''] = _item4;
                _i2++;
              }

              if (_i2 >= this.datas.length) break;
            }
          }

          for (var k in this.showing) {
            if (!views[k]) {
              var isDel = this.receiveItem(this.showing[k]);
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
          for (var k in this.showing) {
            var isDel = this.receiveItem(this.showing[k]);
            if (isDel) delete this.showing[k];
          }

          var trans = this.scroller.getComponent(UITransform);
          var box = trans.getBoundingBoxTo(this.scroller.content.getWorldMatrix());
          var views = {};
          var itemSize = this.itemTransForm.contentSize;

          if (this.type == Layout.Type.VERTICAL) {
            var hide = itemSize.height + this.spaceY;
            var start = index;
            var end = start + Math.ceil((box.yMax - box.yMin) / hide);

            for (var i = start; i <= end; i++) {
              var _this$updateItem5;

              if (i >= this.datas.length) break;

              var _item5 = this.getItem(i);

              if (_item5['$$index'] != i) (_this$updateItem5 = this.updateItem) == null || _this$updateItem5.call(this, _item5, this.datas[i], i);
              _item5['$$index'] = i;
              this.scroller.content.addChild(_item5);
              this.layout(_item5, 0, i);
              views[i + ''] = _item5;
              this.showing[i + ''] = _item5;
            }

            var transform = this.scroller.content.getComponent(UITransform);
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