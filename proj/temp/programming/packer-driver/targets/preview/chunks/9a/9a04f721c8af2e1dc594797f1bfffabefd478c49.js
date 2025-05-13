System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UITransform, Vec2, Rect, v3, Mat4, DragDropMgr, _crd;

  _export("DragDropMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Rect = _cc.Rect;
      v3 = _cc.v3;
      Mat4 = _cc.Mat4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab2c3zHD79MB6v+F4lNdcLG", "DragDropMgr", undefined);

      __checkObsolete__(['Node', 'EventTouch', 'UITransform', 'Vec2', 'Vec3', 'Rect', 'v3', 'Mat4']);

      /**
       * 拖拽管理器
       */
      _export("DragDropMgr", DragDropMgr = class DragDropMgr {
        //临时记录节点的世界矩阵

        /**
         * 注册监听
         * @param target 监听者
         * @param dragLayer 拖拽层
         */
        static on(target, dragLayer) {
          this._dragDropEvent = target;
          this._dragLayer = dragLayer;
          this._dragLayerTrans = dragLayer.getComponent(UITransform);

          this._dragLayer.on(Node.EventType.TOUCH_START, this.onTouchBegin, this);

          this._dragLayer.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

          this._dragLayer.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);

          this._dragLayer.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }
        /**
         * 移除监听
         * @param target 
         */


        static off(target) {
          this._dragLayer.off(Node.EventType.TOUCH_START, this.onTouchBegin, this);

          this._dragLayer.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

          this._dragLayer.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);

          this._dragLayer.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        static onTouchBegin(event) {
          var _this$_dragDropEvent, _this$_dragDropEvent$, _this$_dragDropEvent2;

          event.preventSwallow = true;
          this._isTouch = true;
          (_this$_dragDropEvent = this._dragDropEvent) == null || _this$_dragDropEvent.onDragBegin == null || _this$_dragDropEvent.onDragBegin(event);
          var pos = event.getUILocation();

          this._tempTouchStartPos.set(pos);

          var touchNode = this.getTouchNode(event); //无触摸目标事件派发给渲染在下一层级的节点

          if (!touchNode) {
            return;
          } //console.log("----->" + touchNode.name)


          this._isCanDrag = (_this$_dragDropEvent$ = (_this$_dragDropEvent2 = this._dragDropEvent) == null ? void 0 : _this$_dragDropEvent2.chekIsCanDrag(touchNode)) != null ? _this$_dragDropEvent$ : false; //不可拖拽事件派发给渲染在下一层级的节点

          if (!this._isCanDrag) {
            //event.preventSwallow = true;
            return;
          } //event.preventSwallow = false; //可以拖拽则吞噬掉事件


          this._curTouchNode = touchNode;
          this._isDragging = false;
        }

        static onTouchMove(event) {
          if (this._isCanDrag) {
            event.preventSwallow = false; //可拖拽则吞噬事件

            if (!this._isDragging && this._isTouch) {
              var pos = event.getUILocation(); //拖动一定范围才算是拖拽

              if (Math.abs(this._tempTouchStartPos.x - pos.x) < 10 && Math.abs(this._tempTouchStartPos.y - pos.y) < 10) {
                return;
              }

              this._isDragging = true;
            }

            if (this._isDragging) {
              var _this$_dragDropEvent5;

              //console.log("拖拽中----->")
              if (!this._dragNode || !this._dragNode.parent) {
                var _this$_dragDropEvent3, _this$_dragDropEvent4;

                this._dragData = (_this$_dragDropEvent3 = this._dragDropEvent) == null ? void 0 : _this$_dragDropEvent3.creatDragNode(this._curTouchNode);
                this._dragNode = this._dragData.dragNode;
                this._dragNode.parent = this._dragLayer;
                this._dragNode.position = this._dragLayerTrans.convertToNodeSpaceAR(v3(this._tempTouchStartPos.x, this._tempTouchStartPos.y));
                (_this$_dragDropEvent4 = this._dragDropEvent) == null || _this$_dragDropEvent4.onDrag(this._dragData); //console.log("添加拖拽节点----->")
              }

              var delta = event.getUIDelta();
              this._dragNode.position = this._dragNode.position.add(v3(delta.x, delta.y, 0));
              (_this$_dragDropEvent5 = this._dragDropEvent) == null || _this$_dragDropEvent5.onDragMove == null || _this$_dragDropEvent5.onDragMove(event);
            }
          } else {
            event.preventSwallow = true; //无拖拽则传入事件下层节点
          }
        }

        static onTouchEnd(event) {
          //拖拽中则吞噬事件
          if (this._isDragging) {
            var _this$_dragDropEvent6;

            event.preventSwallow = false;
            (_this$_dragDropEvent6 = this._dragDropEvent) == null || _this$_dragDropEvent6.onDragEnd == null || _this$_dragDropEvent6.onDragEnd(event);
            this.onDragEnd();
          } else {
            event.preventSwallow = true;
          }

          this._isCanDrag = false;
          this._isTouch = false;
          this._isDragging = false;
        }

        static onTouchCancel(event) {
          if (this._isDragging) {
            var _this$_dragDropEvent7;

            event.preventSwallow = false;
            (_this$_dragDropEvent7 = this._dragDropEvent) == null || _this$_dragDropEvent7.onDragCancel == null || _this$_dragDropEvent7.onDragCancel(event);
            this.onDragEnd();
          } else {
            event.preventSwallow = true;
          }

          this._isCanDrag = false;
          this._isTouch = false;
          this._isDragging = false;
        }

        static onDragEnd() {
          var _this$_dragDropEvent8;

          if (!this._dragData || !this._dragNode) return;
          var resultCont = null;
          var tempCont;

          for (var i = 0; i < this._canDropNodeList.length; i++) {
            tempCont = this._canDropNodeList[i];

            if (this.isIntersects(tempCont, this._dragNode)) {
              resultCont = tempCont;
              break;
            }
          }

          (_this$_dragDropEvent8 = this._dragDropEvent) == null || _this$_dragDropEvent8.onDrop(resultCont, this._dragData);
          this._dragNode = null;
          this._dragData = null;
        }
        /**
         * 获取触摸的目标节点
         * @param event 
         * @returns 
         */


        static getTouchNode(event) {
          var touchPos = event.getUILocation();
          var pos = event.target.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(touchPos.x, touchPos.y));
          var target;
          var targetTrans;
          var targetBox;

          for (var index = 0; index < this._canDragNodeList.length; index++) {
            target = this._canDragNodeList[index];
            if (!target.activeInHierarchy) continue;
            targetTrans = target.getComponent(UITransform);
            targetBox = targetTrans.getBoundingBoxToWorld();

            if (targetBox.contains(touchPos)) {
              //console.log("-------->" + targetBox.width + "----->" + targetBox.height)
              return target;
            }
          }

          return null;
        }
        /**
         * 判断是否相交
         * @param dargNode 拖拽节点
         * @param dropNode 放下节点
         * @returns 
         */


        static isIntersects(dargNode, dropNode) {
          var dragBox = this.getWorldBox(dargNode);
          var dropBox = this.getWorldBox(dropNode);
          return dropBox.intersects(dragBox);
        }
        /**
         * 获取节点的世界包围合
         * @param node 
         * @returns 
         */


        static getWorldBox(node) {
          node.parent.getWorldMatrix(this._tempWorldMatrix);
          Mat4.fromSRT(this._tempLocalMatrix, node.getRotation(), node.getPosition(), node.getScale());
          var trans = node.getComponent(UITransform);
          var box = new Rect(-trans.anchorPoint.x * trans.width, -trans.anchorPoint.y * trans.height, trans.width, trans.height);
          Mat4.multiply(this._tempWorldMatrix, this._tempWorldMatrix, this._tempLocalMatrix);
          box.transformMat4(this._tempWorldMatrix);
          return box;
        }
        /**
         * 添加一个拖拽节点
         * @param node 拖拽目标
         * @param clickEvent 目标的点击事件
         * @returns 
         */


        static addDragNode(node) {
          if (this._canDragNodeList.indexOf(node) >= 0) return;

          this._canDragNodeList.push(node);
        }
        /**
         * 移除一个拖拽节点
         * @param node 
         */


        static removeDragNode(node) {
          var index = this._canDragNodeList.indexOf(node);

          if (index >= 0) {
            this._canDragNodeList.splice(index, 1);
          }
        }
        /**
         * 添加放下放下节点
         * @param node 
         */


        static addDropNode(node) {
          this._canDropNodeList.push(node);
        }
        /**
         * 移除放下节点
         * @param node 
         */


        static removeDropNode(node) {
          var idx = this._canDropNodeList.indexOf(node);

          this._canDropNodeList.splice(idx, 1);
        }
        /**
         * 清理全部放下节点
         */


        static clearAllDropNode() {
          this._canDropNodeList.length = 0;
        }
        /**
         * 清理全部拖拽节点
         */


        static clearAllDragNode() {
          this._canDragNodeList.length = 0;
        }
        /**
         * 清理全部
         */


        static clear() {
          this.clearAllDragNode();
          this.clearAllDropNode();
          this.off(null);
          this.onDragEnd();
          this._dragDropEvent = null;
          this._isCanDrag = false;
          this._isDragging = false;
          this._isTouch = false;
        }

      });

      DragDropMgr._dragDropEvent = void 0;
      //拖拽接口监听者
      DragDropMgr._dragData = null;
      //拖拽节点数据
      DragDropMgr._isCanDrag = false;
      //临时记录触摸的节点是否可拖拽
      DragDropMgr._dragNode = null;
      //拖拽节点
      DragDropMgr._curTouchNode = null;
      //当前触摸节点
      DragDropMgr._canDropNodeList = [];
      //可放下节点列表
      DragDropMgr._canDragNodeList = [];
      //可拖拽节点列表
      DragDropMgr._dragLayer = null;
      //拖拽层
      DragDropMgr._dragLayerTrans = null;
      //拖拽层变换组件
      DragDropMgr._tempTouchStartPos = new Vec2();
      //临时记录开始触摸位置
      DragDropMgr._isTouch = false;
      //是否有触摸
      DragDropMgr._isDragging = false;
      //是否拖动中
      DragDropMgr._tempLocalMatrix = new Mat4();
      //临时记录节点的本地矩阵
      DragDropMgr._tempWorldMatrix = new Mat4();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a04f721c8af2e1dc594797f1bfffabefd478c49.js.map