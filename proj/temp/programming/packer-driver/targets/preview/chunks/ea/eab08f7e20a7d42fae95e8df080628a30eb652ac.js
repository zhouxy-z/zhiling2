System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, instantiate, js, Layout, Mask, math, Node, NodeEventType, NodePool, Prefab, Rect, ScrollView, Size, UITransform, Vec2, Vec3, Widget, RollView, CellInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, LayoutType, ScrollDirection, SelectType, PullStateType, RollViewDir, VList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    RollView: void 0,
    CellInfo: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      instantiate = _cc.instantiate;
      js = _cc.js;
      Layout = _cc.Layout;
      Mask = _cc.Mask;
      math = _cc.math;
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      Rect = _cc.Rect;
      ScrollView = _cc.ScrollView;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f4basmx0xMGphkgIQ3184K", "VList", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'Event', 'EventTouch', 'instantiate', 'js', 'Layout', 'Mask', 'math', 'Node', 'NodeEventType', 'NodePool', 'Prefab', 'Rect', 'ScrollView', 'Size', 'Touch', 'UITransform', 'Vec2', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 布局类型  
       */

      LayoutType = /*#__PURE__*/function (LayoutType) {
        LayoutType[LayoutType["LIST"] = 0] = "LIST";
        LayoutType[LayoutType["GRID"] = 1] = "GRID";
        return LayoutType;
      }(LayoutType || {});
      /**
       * 滚动方向  
       */


      ScrollDirection = /*#__PURE__*/function (ScrollDirection) {
        ScrollDirection[ScrollDirection["VERTICAL"] = 0] = "VERTICAL";
        ScrollDirection[ScrollDirection["HORIZONTAL"] = 1] = "HORIZONTAL";
        return ScrollDirection;
      }(ScrollDirection || {});
      /**
       * 选择类型
       */


      SelectType = /*#__PURE__*/function (SelectType) {
        SelectType[SelectType["ToggleGroup"] = 0] = "ToggleGroup";
        SelectType[SelectType["Toggle"] = 1] = "Toggle";
        return SelectType;
      }(SelectType || {});
      /**
       * 拉到尽头状态定义
       */


      _export("PullStateType", PullStateType = /*#__PURE__*/function (PullStateType) {
        PullStateType[PullStateType["CANCEL"] = 0] = "CANCEL";
        PullStateType[PullStateType["GO_ON"] = 1] = "GO_ON";
        PullStateType[PullStateType["LET_GO"] = 2] = "LET_GO";
        PullStateType[PullStateType["LOCK"] = 3] = "LOCK";
        return PullStateType;
      }({}));
      /**
       * 拉到尽头回调信息
      */


      /**
       * 当前滚动方向
       */
      _export("RollViewDir", RollViewDir = /*#__PURE__*/function (RollViewDir) {
        RollViewDir[RollViewDir["None"] = 0] = "None";
        RollViewDir[RollViewDir["Left"] = 1] = "Left";
        RollViewDir[RollViewDir["Right"] = 2] = "Right";
        RollViewDir[RollViewDir["Up"] = 3] = "Up";
        RollViewDir[RollViewDir["Down"] = 4] = "Down";
        return RollViewDir;
      }({}));

      _export("VList", VList = (_dec = ccclass('VList'), _dec2 = property({
        type: Enum(LayoutType),
        tooltip: "\u5E03\u5C40\u7C7B\u578B\uFF1A\nLIST\uFF1A\u5217\u8868\u5E03\u5C40\uFF08\u652F\u6301\u591ACell\u6A21\u677F\u52A8\u6001\u6539\u53D8Size\uFF09 \nGRID\uFF1A\u7F51\u683C\u5E03\u5C40\uFF08\u652F\u6301\u591ACell\u6A21\u677F\uFF0C\u4F46\u5FC5\u987B\u8981\u76F8\u540C\u5C3A\u5BF8,\u4E0D\u652F\u6301\u52A8\u6001\u6539\u53D8\u8282\u70B9\u5C3A\u5BF8\u53D8\u5316\uFF09"
      }), _dec3 = property({
        type: Enum(ScrollDirection),
        tooltip: "\u6EDA\u52A8\u65B9\u5411\uFF1A\nVERTICAL\uFF1A\u5782\u76F4\u6EDA\u52A8 \nHORIZONTAL\uFF1A\u6C34\u5E73\u6EDA\u52A8"
      }), _dec4 = property({
        tooltip: "\u4E0D\u8DB3\u4E00\u884C\u65F6\u662F\u5426\u5C45\u4E2D\u5BF9\u9F50",
        visible: function visible() {
          return this.layoutType == LayoutType.LIST && this.scrollDirection == ScrollDirection.HORIZONTAL;
        }
      }), _dec5 = property({
        type: [Prefab],
        tooltip: "Cell\u6A21\u677F\u5217\u8868\uFF08\u4E0D\u6302\u9884\u5236\u4F53\u5219\u4EE5\u8282\u70B9\u65B9\u5F0F\u6302cell\u5728\u6839\u90E8\u6216\u8005\u6302\u6839\u8282\u70B9view/content\u4E0B\uFF09"
      }), _dec6 = property({
        tooltip: "\u4E0A\u8FB9\u8DDD"
      }), _dec7 = property({
        tooltip: "\u4E0B\u8FB9\u8DDD"
      }), _dec8 = property({
        tooltip: "\u5DE6\u8FB9\u8DDD"
      }), _dec9 = property({
        tooltip: "\u53F3\u8FB9\u8DDD"
      }), _dec10 = property({
        tooltip: "\u76F8\u90BB\u8282\u70B9\u4E4B\u524D\u7684\u5782\u76F4\u8DDD\u79BB",
        visible: function visible() {
          return this.layoutType == LayoutType.LIST && this.scrollDirection == ScrollDirection.VERTICAL || this.layoutType == LayoutType.GRID;
        }
      }), _dec11 = property({
        tooltip: "\u76F8\u90BB\u8282\u70B9\u4E4B\u524D\u7684\u6C34\u5E73\u8DDD\u79BB",
        visible: function visible() {
          return this.layoutType == LayoutType.LIST && this.scrollDirection == ScrollDirection.HORIZONTAL || this.layoutType == LayoutType.GRID;
        }
      }), _dec12 = property({
        type: Enum(SelectType),
        tooltip: "\u8282\u70B9\u9009\u62E9\u7C7B\u578B\nToggleGroup\uFF1A\u5355\u9009\nToggle\uFF1A\u590D\u9009"
      }), _dec13 = property({
        tooltip: "\u591A\u5C11\u5E27\u5237\u65B0\u4E00\u6B21\u53EF\u89C1\u533A\u57DF\uFF08\u6709\u6570\u636E\u6570\u636E\u53D8\u66F4\u6216\u8005\u6709\u5C3A\u5BF8\u53D8\u66F4\u65F6\u751F\u6548\uFF09"
      }), _dec14 = property({
        tooltip: "\u591A\u5C11\u5E27\u56DE\u6536\u4E00\u6B21\u4E0D\u53EF\u89C1\u533A\u57DF\uFF08\u6709\u6570\u636E\u6570\u636E\u53D8\u66F4\u6216\u8005\u6709\u5C3A\u5BF8\u53D8\u66F4\u65F6\u751F\u6548\uFF09"
      }), _dec15 = property({
        tooltip: "是否开启翻页模式, 布局类型是List才生效，如果是网格类型翻页就用List嵌套Grid",
        visible: function visible() {
          return this.layoutType == LayoutType.LIST;
        }
      }), _dec16 = property({
        tooltip: "是否开启拉到头部尽头获取更多"
      }), _dec17 = property({
        tooltip: "是否开启拉到尾部尽头获取更多"
      }), _dec18 = property({
        tooltip: "拉到尽头时超过此偏移量会触发回调",
        visible: function visible() {
          return this.isOpenPullHeader || this.isOpenPullFooter;
        }
      }), _dec19 = property({
        tooltip: "拉到尽头时满足触发列表进度的倍数",
        visible: function visible() {
          return this.isOpenPullHeader || this.isOpenPullFooter;
        }
      }), _dec(_class = (_class2 = class VList extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "layoutType", _descriptor, this);

          _initializerDefineProperty(this, "scrollDirection", _descriptor2, this);

          _initializerDefineProperty(this, "notLineIsAlignCenter", _descriptor3, this);

          _initializerDefineProperty(this, "tempCells", _descriptor4, this);

          _initializerDefineProperty(this, "paddingTop", _descriptor5, this);

          _initializerDefineProperty(this, "paddingBottom", _descriptor6, this);

          _initializerDefineProperty(this, "paddingLeft", _descriptor7, this);

          _initializerDefineProperty(this, "paddingRight", _descriptor8, this);

          _initializerDefineProperty(this, "spacingY", _descriptor9, this);

          _initializerDefineProperty(this, "spacingX", _descriptor10, this);

          _initializerDefineProperty(this, "selectType", _descriptor11, this);

          _initializerDefineProperty(this, "frameInterval", _descriptor12, this);

          _initializerDefineProperty(this, "recycleInterval", _descriptor13, this);

          _initializerDefineProperty(this, "isPageView", _descriptor14, this);

          _initializerDefineProperty(this, "isOpenPullHeader", _descriptor15, this);

          _initializerDefineProperty(this, "isOpenPullFooter", _descriptor16, this);

          _initializerDefineProperty(this, "pullOffset", _descriptor17, this);

          _initializerDefineProperty(this, "pullMultiple", _descriptor18, this);

          this._rollView = void 0;
          this._contentTrans = void 0;
          this._cellCount = 0;
          //cell数量
          this._cellInfos = null;
          this._cellTempSize = new Map();
          //临时保存cell变化后的尺寸
          this._cellTypeMap = js.createMap();
          //保存cell类型模板
          this._cellPoolMap = js.createMap();
          //保存cell类型池子
          this._visibleCellMap = js.createMap();
          //可见节点信息
          this._visibleInfoMap = js.createMap();
          //可见节点信息
          this._curSelectIndexList = void 0;
          //当前选中节点
          this._tempRollIndex = -1;
          //临时记录列表未初始化滚动的下标
          this._tempSelectIndexList = [];
          //临时记录列表未初始化选中列表
          this._cellDefName = void 0;
          //默认cell名称
          this._cellDefSize = void 0;
          //默认cell尺寸
          this._isFirstUpdate = true;
          //是否首次初始化列表
          this._frameNum = 0;
          // 帧计数
          this._isUpdateVisible = false;
          //当前帧是否需要更新可见节点  
          this._isRecycleInvisible = false;
          // 当前帧是否需要回收不可见节点  
          this._isRecountSize = false;
          //当前帧是否需要重新计算content尺寸  
          this._vec3Out = new Vec3();
          //用于输出cell矩形转换实际坐标
          this._curVisibleRect = new Rect();
          //用于获取当前显示区域矩形
          this._tempCellRect = new math.Rect();
          //用于获取cell矩形数据
          this._isInitVisible = false;
          this._lastRollTime = 0;
          //记录上次滚动时间
          this._lastContPos = new Vec2(0, 0);
          //记录上次容器坐标

          /**
           * 初始化回调
           */
          this.initVisible = void 0;

          /**
           * 渲染Cell回调
           * @param cell 渲染节点
           * @param cellInfo 节点数据
           */
          this.updateCell = void 0;

          /**
           * 点击Cell回调
           * @param cell 渲染节点
           * @param cellInfo 节点数据
           */
          this.clickCell = void 0;

          /**
           * 选中Cell回调
           * @param cell 渲染节点
           * @param cellInfo 节点数据
           * @param lastCell 上次被选中的节点
           * @param lastCell 上次被选中的节点数据
           */
          this.selectCell = void 0;

          /**
           * 选中Cell条件检测回调
           * @param cell 渲染节点
           * @param cellInfo 节点数据
           */
          this.selectCondCheck = void 0;

          /**
           * 获取Cell类型名字回调
           * @param index cell下标
           * @returns 渲染的节点名称
           */
          this.getCellName = null;

          /**
           * 获取Cell尺寸
           * @param index cell下标
           * @returns 渲染的节点尺寸
           */
          this.getCellSize = null;

          /**
           * 拉到头部尽头回调
           * @param pullInfo 尽头回调数据
           */
          this.updatePullHeader = void 0;

          /**
           * 拉到尾部部尽头回调
           * @param pullInfo 尽头回调数据
           */
          this.updatePullFooter = void 0;
        }

        onLoad() {
          var layout = this.node.getComponent(Layout);
          if (layout) layout.enabled = false;
          var temps = [];
          var cont = this.node.getChildByPath("view/content") || this.node;
          var contWidget = cont.getComponent(Widget);
          if (contWidget) contWidget.enabled = false;

          for (var prefab of this.tempCells) {
            temps.push(instantiate(prefab));
          }

          if (temps.length > 0) {
            cont.destroyAllChildren();
          } else {
            temps = cont.children;
          }

          var tempCell;

          for (var _index = temps.length - 1; _index >= 0; _index--) {
            //console.log("------>TempIndex" + index)
            tempCell = temps[_index];
            if (tempCell.parent) tempCell.removeFromParent();

            if (!this._cellTypeMap[tempCell.name]) {
              var _this$_cellDefName, _this$_cellDefSize;

              this._cellTypeMap[tempCell.name] = tempCell;
              this._cellPoolMap[tempCell.name] = new NodePool();
              this._cellDefName = (_this$_cellDefName = this._cellDefName) != null ? _this$_cellDefName : tempCell.name;
              this._cellDefSize = (_this$_cellDefSize = this._cellDefSize) != null ? _this$_cellDefSize : tempCell.getComponent(UITransform).contentSize;
            } else {
              console.error("cell模板名字重复");
              return;
            }
          }

          this.initRollView();
        }

        onEnable() {
          this.addEventListener();
        }

        onDisable() {
          this.removeEventListener();
        }

        update(dt) {
          this._frameNum++;
          this.updateRecountSize(dt);
          this.updateVisible(dt);
          this.updateInvisible(dt);
        }

        onDestroy() {
          this.removeEventListener();
          this._cellCount = null;
          this._cellInfos = null;
          this._tempRollIndex = -1;
          this._tempSelectIndexList = null;

          this._cellTempSize.clear();

          this._cellTempSize = null;
          this._cellTypeMap = null;
          this._cellPoolMap = null;
          this._visibleCellMap = null;
          this._visibleInfoMap = null;
          this._curSelectIndexList = null;
          this.updateCell = null;
          this.clickCell = null;
          this.selectCell = null;
          this.selectCondCheck = null;
          this.getCellName = null;
          this.getCellSize = null;
          this.updatePullHeader = null;
          this.updatePullFooter = null;
        }

        initRollView() {
          var view = this.node.getChildByName("view") || new Node("view");
          var viewTrans = view.getComponent(UITransform) || view.addComponent(UITransform);
          viewTrans.setAnchorPoint(new Vec2(0.5, 0.5));
          viewTrans.contentSize = this.node.getComponent(UITransform).contentSize;
          this._rollView = view.addComponent(RollView);

          this._rollView.initView(this);

          var widget = view.getComponent(Widget) || view.addComponent(Widget);
          widget.isAlignTop = true, widget.isAlignBottom = true, widget.isAlignLeft = true, widget.isAlignRight = true, widget.top = this.paddingTop, widget.bottom = this.paddingBottom, widget.left = this.paddingLeft, widget.right = this.paddingRight, view.parent = this.node;
          view.layer = this.node.layer;
          var mask = view.getComponent(Mask) || view.addComponent(Mask);
          mask.type = Mask.Type.GRAPHICS_RECT;
          var content = view.getChildByName("content") || new Node("content");
          content.setPosition(Vec3.ZERO);
          this._contentTrans = content.getComponent(UITransform) || content.addComponent(UITransform);

          this._contentTrans.setAnchorPoint(new Vec2(0.5, 0.5));

          this._contentTrans.contentSize = viewTrans.contentSize;
          content.parent = view;
          content.layer = content.parent.layer;
          var layout = content.getComponent(Layout);
          if (layout) layout.enabled = false;
          this._rollView.content = content;

          if (this.scrollDirection == ScrollDirection.VERTICAL) {
            this._rollView.horizontal = false;
            this._rollView.vertical = true;
          } else {
            this._rollView.horizontal = true;
            this._rollView.vertical = false;
          } //console.log("初始化列表完毕")

        }

        addEventListener() {
          this._rollView.view.node.on(Node.EventType.SIZE_CHANGED, this.onViewSizeChange, this);

          this._rollView.view.node.on(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);

          this._rollView.view.node.on(ScrollView.EventType.SCROLLING, this.onScrolling, this);

          this._rollView.view.node.on(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);

          this._rollView.view.node.on(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
        }

        removeEventListener() {
          this._rollView.view.node.off(Node.EventType.SIZE_CHANGED, this.onViewSizeChange, this);

          this._rollView.view.node.off(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);

          this._rollView.view.node.off(ScrollView.EventType.SCROLLING, this.onScrolling, this);

          this._rollView.view.node.off(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);

          this._rollView.view.node.off(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
        }

        onCellClick(event) {
          var cell = event.target;
          var cellInfo = this.getVisibleInfo(cell.name);
          if (!cellInfo) return;
          this.onSelect(cellInfo, cell, true);
        }
        /**
         * view节点尺寸变化
         */


        onViewSizeChange() {
          this._isRecountSize = true; //this._isUpdateVisible = true;
          //if (this.recycleInterval > 0) this._isRecycleInvisible = true;
        }

        onScrollBegan() {
          this.node.emit(ScrollView.EventType.SCROLL_BEGAN);
        }

        onScrolling() {
          this._isUpdateVisible = true;
          if (this.recycleInterval > 0 && !this._rollView.isOutOfBoundary) this._isRecycleInvisible = true;

          var currentPos = this._rollView.getScrollOffset();

          var time = Date.now();
          var deltaTime = (time - this._lastRollTime) / 1000;
          var rollDir = RollViewDir.None;

          if (deltaTime > 0) {
            var deltaX = currentPos.x - this._lastContPos.x;
            var deltaY = currentPos.y - this._lastContPos.y;
            var velocityX = deltaX / deltaTime;
            var velocityY = deltaY / deltaTime; // 判断主要滚动方向

            if (Math.abs(velocityX) > Math.abs(velocityY)) {
              if (velocityX > 0) {
                rollDir = RollViewDir.Right;
              } else {
                rollDir = RollViewDir.Left;
              }
            } else {
              if (velocityY > 0) {
                rollDir = RollViewDir.Up;
              } else {
                rollDir = RollViewDir.Down;
              }
            }
          }

          this._lastContPos.set(currentPos);

          this._lastRollTime = time;
          this.node.emit(ScrollView.EventType.SCROLLING, rollDir, this._rollView.isOutOfBoundary);
        }

        onScrollTouchUp() {
          this.recycleInvisible();
          this.node.emit(ScrollView.EventType.SCROLL_ENDED);
        }

        onScrollEnded() {
          this.recycleInvisible();
          this.node.emit(ScrollView.EventType.SCROLL_ENDED);
        }

        onCellSizeChange(cell) {
          this._cellTempSize.set(cell.name, cell.getComponent(UITransform).contentSize);

          this._isRecountSize = true;
          console.log("Size------>" + cell.name);
        }

        onSelect(cellInfo, cell, isClick) {
          var _this$clickCell, _this$selectCell;

          if (isClick === void 0) {
            isClick = false;
          }

          isClick && ((_this$clickCell = this.clickCell) == null ? void 0 : _this$clickCell.call(this, cell, cellInfo));
          var result = true;

          if (this.selectCondCheck != null) {
            result = this.selectCondCheck(cell, cellInfo);
          }

          if (!result) return;
          var lastCell;
          var lastCallInfo;

          if (this.selectType == SelectType.ToggleGroup) {
            var lastSelectIndex = this._curSelectIndexList[0];

            if (lastSelectIndex > -1 && lastSelectIndex != cellInfo.index && lastSelectIndex < this._cellInfos.length) {
              this._curSelectIndexList = [];
              lastCallInfo = this._cellInfos[lastSelectIndex];
              lastCallInfo.isSelect = false;
              lastCell = this._visibleCellMap[lastCallInfo.index];
            }

            cellInfo.isSelect = true;
            this._curSelectIndexList[0] = cellInfo.index;
          } else {
            var _index2 = this._curSelectIndexList.indexOf(cellInfo.index);

            if (_index2 > -1) {
              cellInfo.isSelect = false;

              this._curSelectIndexList.splice(_index2, 1);
            } else {
              cellInfo.isSelect = true;

              this._curSelectIndexList.push(cellInfo.index);
            }
          }

          (_this$selectCell = this.selectCell) == null || _this$selectCell.call(this, cell, cellInfo, lastCell, lastCallInfo);
        }
        /**
         * 更新可见区域
         */


        updateVisible(dt) {
          if (!this._isUpdateVisible) return;

          if (this.frameInterval <= 1 || this._frameNum % this.frameInterval == 0) {
            this.refreshVisible();
            return;
          }
        }
        /**
         * 更新不可见区域
         */


        updateInvisible(dt) {
          if (this._isRecycleInvisible == false) return;

          if (this.recycleInterval >= 1 && this._frameNum % this.recycleInterval == 0) {
            this.recycleInvisible();
            return;
          }
        }
        /**
         * 更新重新计算尺寸
         * @param dt 
         * @returns 
         */


        updateRecountSize(dt) {
          if (!this._isRecountSize) return;
          this.refreshSize();
        }
        /**
         * 重置列表尺寸
         */


        refreshSize() {
          this._isRecountSize = false;

          this._rollView.stopAutoScroll();

          this.recycleInvisible(true); //记录偏移

          var offset = this._rollView.getScrollOffset();

          offset.x = -offset.x;
          this.updateLayou();

          if (this.notLineIsAlignCenter && this._contentTrans.width < this._rollView.view.width) {
            this._rollView.setContentPosition(new Vec3(0, 0, 0)); //列表横向布局时不足一行居中

          } else {
            var _cellInfo = this._tempRollIndex != -1 ? this._cellInfos[this._tempRollIndex] : null;

            this._tempRollIndex = -1;

            if (_cellInfo) {
              this._rollView.scrollToOffset(_cellInfo.frame.origin);
            } else {
              if (this._isFirstUpdate) {
                //初始位置
                this.scrollDirection == ScrollDirection.VERTICAL ? this._rollView.scrollToTop() : this._rollView.scrollToTopLeft();
              } else {
                //恢复偏移
                var maxOffset = this._rollView.getMaxScrollOffset();

                Vec2.min(offset, offset, maxOffset);

                this._rollView.scrollToOffset(offset);
              }
            }
          }

          this.setUpdateVisibleFlag(true);
          this._isFirstUpdate = false;
        }
        /**
         * 设置可见/不可见更新标记
         * @param force 是否强制刷新  
         */


        setUpdateVisibleFlag(force) {
          if (force === void 0) {
            force = false;
          }

          if (force) {
            this.refreshVisible();
            this.recycleInvisible();
            return;
          }

          this._isUpdateVisible = true;
          this._isRecycleInvisible = true;
        }
        /**
         *更新布局
         */


        updateLayou() {
          this._cellInfos = [];

          if (this.layoutType == LayoutType.LIST) {
            this.updateListLayou();
          } else {
            this.updateGridLayou();
          }
        }
        /**
         * 更新列表布局
         */


        updateListLayou() {
          var contentHeight = 0;
          var contentWidth = 0;
          var cellInfo;
          var cellName;
          var cell;
          var cellSize;

          for (var _index3 = 0; _index3 < this._cellCount; _index3++) {
            var _this$getCellName, _this$getCellName2, _ref, _this$_cellTempSize$g, _this$getCellSize;

            cellName = (_this$getCellName = (_this$getCellName2 = this.getCellName) == null ? void 0 : _this$getCellName2.call(this, _index3)) != null ? _this$getCellName : this._cellDefName;
            cell = this._cellTypeMap[cellName];
            cellInfo = new CellInfo();
            cellInfo.name = cellName;
            cellInfo.index = _index3;
            cellInfo.isSelect = this._tempSelectIndexList.indexOf(_index3) > -1 ? true : false;
            cellSize = (_ref = (_this$_cellTempSize$g = this._cellTempSize.get(cellInfo.cellName)) != null ? _this$_cellTempSize$g : (_this$getCellSize = this.getCellSize) == null ? void 0 : _this$getCellSize.call(this, cell, _index3)) != null ? _ref : cell.getComponent(UITransform).contentSize;
            cellInfo.frame.width = cellSize.width;
            cellInfo.frame.height = cellSize.height;

            if (this.scrollDirection == ScrollDirection.VERTICAL) {
              cellInfo.frame.x = this._rollView.view.width * 0.5 - cellSize.width * 0.5;
              cellInfo.frame.y = contentHeight + (cellInfo.index > 0 ? this.spacingY : 0);
              contentHeight = cellInfo.frame.yMax;
              contentWidth = this._rollView.view.width;
            } else {
              cellInfo.frame.x = contentWidth + (cellInfo.index > 0 ? this.spacingX : 0);
              cellInfo.frame.y = this._rollView.view.height * 0.5 - cellSize.height * 0.5;
              contentHeight = this._rollView.view.height;
              contentWidth = cellInfo.frame.xMax;
            }

            this._cellInfos[_index3] = cellInfo;
          }

          this._contentTrans.contentSize = new Size(contentWidth, contentHeight);
        }
        /**
         * 更新网格布局
         */


        updateGridLayou() {
          var contentHeight = 0;
          var contentWidth = 0;
          var maxRow = 0;
          var maxCol = 0;

          if (this.scrollDirection == ScrollDirection.VERTICAL) {
            maxCol = Math.floor((this._rollView.view.width + this.spacingX) / (this._cellDefSize.width + this.spacingX));
            maxRow = Math.ceil(this._cellCount / maxCol);
            contentWidth = this._rollView.view.width;
            contentHeight = maxRow * (this._cellDefSize.height + this.spacingY) - this.spacingY;
          } else {
            maxRow = Math.floor((this._rollView.view.height + this.spacingY) / (this._cellDefSize.height + this.spacingY));
            maxCol = Math.ceil(this._cellCount / maxRow);
            contentWidth = maxCol * (this._cellDefSize.width + this.spacingX) - this.spacingX;
            contentHeight = this._rollView.view.height;
          }

          this._contentTrans.contentSize = new Size(Math.max(contentWidth, this._rollView.view.width), Math.max(contentHeight, this._rollView.view.height));
          var row;
          var col;
          var cellInfo;

          for (var _index4 = 0; _index4 < this._cellCount; _index4++) {
            if (this.scrollDirection == ScrollDirection.VERTICAL) {
              row = Math.floor(_index4 / maxCol);
              col = _index4 % maxCol;
            } else {
              col = Math.floor(_index4 / maxRow);
              row = _index4 % maxRow;
            }

            cellInfo = new CellInfo();
            cellInfo.name = this._cellDefName;
            cellInfo.index = _index4;
            cellInfo.isSelect = this._tempSelectIndexList.indexOf(_index4) > -1 ? true : false;
            cellInfo.frame.x = (this._cellDefSize.width + this.spacingX) * col;
            cellInfo.frame.y = (this._cellDefSize.height + this.spacingY) * row;
            cellInfo.frame.width = this._cellDefSize.width;
            cellInfo.frame.height = this._cellDefSize.height;

            this._cellInfos.push(cellInfo);
          }
        }
        /**
         * 刷新可见节点
         */


        refreshVisible() {
          this._isUpdateVisible = false;
          var visibleCellInfos = this.getVisibleCellInfos();
          var cellInfo;
          var cell;
          var isAdd;

          for (var _index5 = 0; _index5 < visibleCellInfos.length; _index5++) {
            cellInfo = visibleCellInfos[_index5];
            if (!this._curVisibleRect.intersects(cellInfo.frame)) continue;
            cell = this._visibleCellMap[cellInfo.index];
            isAdd = false;

            if (!cell) {
              isAdd = true;
              var pool = this._cellPoolMap[cellInfo.name];
              cell = pool.get();

              if (cell == null) {
                cell = instantiate(this._cellTypeMap[cellInfo.name]);
              }
            }

            cell.off(NodeEventType.TOUCH_END, this.onCellClick, this);
            cell.on(NodeEventType.TOUCH_END, this.onCellClick, this); //cell.off(NodeEventType.SIZE_CHANGED, this._onCellSizeChange , this);

            cell.name = cellInfo.cellName;
            cell.getComponent(UITransform).contentSize = new Size(cellInfo.frame.width, cellInfo.frame.height);

            if (cell.parent != this._rollView.content) {
              this._rollView.content.insertChild(cell, _index5);

              cell.layer = cell.parent.layer;
              this._vec3Out.x = -(this._contentTrans.contentSize.width - cellInfo.frame.width) * 0.5 + cellInfo.frame.x;
              this._vec3Out.y = +(this._contentTrans.contentSize.height - cellInfo.frame.height) * 0.5 - cellInfo.frame.y;
              cell.position = this._vec3Out; //console.log("显示----->" + cell.name + "------->" + cell.position.x);
            }

            if (isAdd) {
              var _this$updateCell;

              this._visibleCellMap[cellInfo.index] = cell;
              this._visibleInfoMap[cellInfo.index] = cellInfo;
              (_this$updateCell = this.updateCell) == null || _this$updateCell.call(this, cell, cellInfo);
            }

            ;
          }

          if (this._tempSelectIndexList.length) {
            var _cellInfo2;

            var _cell;

            for (var _index6 of this._tempSelectIndexList) {
              _cellInfo2 = this._cellInfos[_index6];
              if (!_cellInfo2) continue;
              _cell = this._visibleCellMap[_cellInfo2.index];
              this.onSelect(_cellInfo2, _cell);
            }

            this._tempSelectIndexList.length = 0;
          }

          if (this._isInitVisible) {
            var _this$initVisible;

            this._isInitVisible = false;
            (_this$initVisible = this.initVisible) == null || _this$initVisible.call(this);
          }
        }
        /**
         * 回收不可见节点
         * @param isForce 是否强制回收
         */


        recycleInvisible(isForce) {
          if (isForce === void 0) {
            isForce = false;
          }

          this._isRecycleInvisible = false;
          this.resetVisibleRect();
          var contSize = this._contentTrans.contentSize;
          var boundingBox;
          var pool;
          var cellInfo;
          var cell;

          for (var _key in this._visibleCellMap) {
            cell = this._visibleCellMap[_key];
            boundingBox = cell.getComponent(UITransform).getBoundingBox();
            this._tempCellRect.size = boundingBox.size;
            this._tempCellRect.x = (contSize.width - this._tempCellRect.width) * 0.5 + cell.position.x;
            this._tempCellRect.y = (contSize.height - this._tempCellRect.height) * 0.5 - cell.position.y;

            if (isForce || !this._curVisibleRect.intersects(this._tempCellRect)) {
              //console.log("回收----->" + value.name);
              cell.off(NodeEventType.TOUCH_END, this.onCellClick, this);
              cellInfo = this._visibleInfoMap[_key];
              pool = this._cellPoolMap[cellInfo.name];
              pool.put(cell);
              delete this._visibleCellMap[_key];
              delete this._visibleInfoMap[_key];
            }
          }
        }
        /**
         * 根据可视范围获取可见cellInfo列表
         * @returns 
         */


        getVisibleCellInfos() {
          this.resetVisibleRect();
          var result = [];
          var checkIndex = -1;
          var left = 0;
          var right = this._cellInfos.length - 1;
          var index;
          var cellInfo; //根据当前容器位置，用二分叉查找法找出中位数

          while (left <= right && right >= 0) {
            index = left + (right - left) / 2;
            index = Math.floor(index);
            cellInfo = this._cellInfos[index];

            if (this._curVisibleRect.intersects(cellInfo.frame)) {
              checkIndex = index;
              break;
            }

            if (this._curVisibleRect.yMax < cellInfo.frame.yMin || this._curVisibleRect.xMax < cellInfo.frame.xMin) {
              right = index - 1;
            } else {
              left = index + 1;
            }
          } //查找失败


          if (checkIndex < 0) return this._cellInfos;
          result.push(this._cellInfos[checkIndex]);
          var startIndex = checkIndex;
          var endIndex = checkIndex;
          var idx;
          var info; //中位数往左查

          while (startIndex > 0) {
            idx = startIndex - 1;
            info = this._cellInfos[idx];
            if (!this._curVisibleRect.intersects(info.frame)) break;
            result.push(info);
            startIndex = idx;
          } //中位数往左右查


          while (endIndex < this._cellInfos.length - 1) {
            idx = endIndex + 1;
            info = this._cellInfos[idx];
            if (!this._curVisibleRect.intersects(info.frame)) break;
            result.push(info);
            endIndex = idx;
          }

          return result.sort((a, b) => {
            return a.index - b.index;
          });
        }
        /**
         * 重置当前的可见范围  
         */


        resetVisibleRect() {
          this._curVisibleRect.origin = this._rollView.getScrollOffset();
          this._curVisibleRect.x = -this._curVisibleRect.x;
          this._curVisibleRect.size = this._rollView.view.contentSize;
        }
        /**
         * 通知拉到头部尽头回调（内置ScrollView组件调用外部请勿调用此接口）
         * @param isAction 是否可获取
         * @param progress 当前拉取的进度
         * @param state 拉取状态
         */


        callPullHeader(isAction, progress, state) {
          var _this$updatePullHeade;

          var pullIndo = {
            isAction: isAction,
            progress: progress,
            state: state
          };
          if (this.isOpenPullHeader) (_this$updatePullHeade = this.updatePullHeader) == null || _this$updatePullHeade.call(this, pullIndo);
        }
        /**
         * 通知拉到尾部尽头回调（内置ScrollView组件调用外部请勿调用此接口）
         * @param isHeader 
         * @param progress 
         * @param state 
         */


        callPullFooter(isHeader, progress, state) {
          var _this$updatePullFoote;

          var pullIndo = {
            isAction: isHeader,
            progress: progress,
            state: state
          };
          if (this.isOpenPullFooter) (_this$updatePullFoote = this.updatePullFooter) == null || _this$updatePullFoote.call(this, pullIndo);
        }

        getVisibleCell(name) {
          for (var node of this._rollView.content.children) {
            if (node.name === name) {
              return node;
            }
          }

          return null;
        }

        getVisibleInfo(name) {
          var cellInfo;

          for (var _key2 in this._visibleInfoMap) {
            cellInfo = this._visibleInfoMap[_key2];

            if (cellInfo.cellName === name) {
              return cellInfo;
            }
          }

          return null;
        }
        /**
         * 设置Cell总数
         */


        set cellCount(count) {
          this._cellCount = count;
          this._cellInfos = null;
          this._tempRollIndex = -1;
          this._curSelectIndexList = [];
          if (this._rollView) this._rollView.resetPullState();
          this._isRecountSize = true;
          this._isInitVisible = true;
        }
        /**
         * 获取cell总数
         */


        get cellCount() {
          return this._cellCount;
        }

        get rollView() {
          return this._rollView;
        }
        /**
         * 滚动到指定cell下标
         * @param index cell下标
         * @param timeInSecond 滚动时间
         * @param attenuated 滚动加速是否衰减
         */


        scrollToIndex(index, timeInSecond, attenuated) {
          if (timeInSecond === void 0) {
            timeInSecond = 0;
          }

          if (attenuated === void 0) {
            attenuated = true;
          }

          if (!this._cellInfos) {
            this._tempRollIndex = index;
            return;
          }

          var cellInfo = this._cellInfos[index];

          if (cellInfo) {
            this._rollView.stopAutoScroll();

            this._rollView.scrollToOffset(cellInfo.frame.origin, timeInSecond, attenuated);

            this.setUpdateVisibleFlag(); //console.log("------>" + index)
          } else {
            console.error("\u65E0\u6548\u6EDA\u52A8\u4E0B\u6807----->" + index);
          }
        }
        /**
         * 选中Cell下标
         * @param index 
         */


        selectIndex(index, timeInSecond, attenuated) {
          if (timeInSecond === void 0) {
            timeInSecond = 0;
          }

          if (attenuated === void 0) {
            attenuated = true;
          }

          if (this.selectType != SelectType.ToggleGroup) {
            console.error("当前非单选模式");
            return;
          }

          this._tempSelectIndexList.length = 0;
          this._tempSelectIndexList[0] = index;
          this.scrollToIndex(index, timeInSecond, attenuated);
        }
        /**
         * 获取当前Cell选中下标
         * @returns 
         */


        getSelectIndex() {
          return this._curSelectIndexList.length > 0 ? this._curSelectIndexList[0] : -1;
        }
        /**
         * 获取当前显示节点实例列表
         */


        get visibleCellList() {
          var result = [];

          for (var _key3 in this._visibleCellMap) {
            result.push(this._visibleCellMap[_key3]);
          }

          return result;
        }
        /**
         * 获取当前显示节点实例列表
         */


        get visibleCellMap() {
          return this._visibleCellMap;
        }
        /**
         * 获取当前显示节点实例Map
         */


        get visibleCellInfoList() {
          var result = [];

          for (var _key4 in this._visibleInfoMap) {
            result.push(this._visibleInfoMap[_key4]);
          }

          return result;
        }
        /**
         * 设置选中多个Cell下标
         * @param indexList 
         * @returns 
         */


        selectMultIndex(indexList) {
          if (this.selectType != SelectType.Toggle) {
            console.error("当前非复选模式");
            return;
          }

          if (!this._cellInfos) {
            this._tempSelectIndexList = indexList;
            this._tempRollIndex = indexList[0];
            return;
          }

          var cellInfo;
          var cell;

          for (var _index7 of indexList) {
            cellInfo = this._cellInfos[_index7];
            if (!cellInfo) return;
            cell = this._visibleCellMap[cellInfo.index];
            this.onSelect(cellInfo, cell);
          }
        }
        /**
         * 获取选中Cell下标列表
         * @returns 
         */


        getSelectMultIndex() {
          return this._curSelectIndexList;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LayoutType.LIST;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollDirection", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ScrollDirection.VERTICAL;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "notLineIsAlignCenter", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tempCells", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "paddingBottom", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "paddingLeft", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paddingRight", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spacingX", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "selectType", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SelectType.ToggleGroup;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "frameInterval", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "recycleInterval", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "isPageView", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "isOpenPullHeader", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "isOpenPullFooter", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "pullOffset", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "pullMultiple", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      _export("RollView", RollView = class RollView extends ScrollView {
        constructor() {
          super(...arguments);
          this.vList = void 0;
          this.SCROLL_THRESHOLd = 0.5;
          //滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原
          this.AUTO_Page_THRESHOLd = 100;
          //快速滑动翻页临界值。当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值,该值与此临界值相比较，如果大于临界值，则进行自动翻页
          this.EPSILON = 1e-4;
          this._tempVec2 = new Vec2();
          this._touchBeganPos = new Vec2();
          //记录触摸开始坐标
          this._touchEndPos = new Vec2();
          //记录触摸结束坐标
          this._isPullMoveHeader = false;
          //是否已经拉取到头部可触发区域
          this._isPullMoveFooter = false;
          //是否已经拉取到底部可触发区域
          this._isPullLockHeader = false;
          //是否拉取到头部锁定状态
          this._isPullLockFooter = false;
          //是否拉取到尾部锁定状态
          this._pullHeaderProgress = 0;
          //拉取到头部进度
          this._pullFooterProgress = 0;
        }

        //拉取到尾部进度
        initView(vList) {
          this.vList = vList;
        }
        /**重写内置函数 */


        _onTouchBegan(event, captureListeners) {
          var nodes = [event.target];
          if (captureListeners) nodes = nodes.concat(captureListeners);

          for (var node of nodes) {
            // 清空滚动节点标记
            node["__RollTarget"] = null;
          }

          if (this.vList.isPageView) {
            event.touch.getUILocation(this._tempVec2);
            Vec2.set(this._touchBeganPos, this._tempVec2.x, this._tempVec2.y);
          }

          super._onTouchBegan(event, captureListeners);
        }
        /** 重写ScrollView内置函数 */


        _onTouchEnded(event, captureListeners) {
          if (this.vList.isPageView) {
            event.touch.getUILocation(this._tempVec2);
            Vec2.set(this._touchEndPos, this._tempVec2.x, this._tempVec2.y);
          }

          super._onTouchEnded(event, captureListeners);
        }
        /** 重写ScrollView内置函数 */


        _onTouchCancelled(event, captureListeners) {
          if (this.vList.isPageView) {
            event.touch.getUILocation(this._tempVec2);
            Vec2.set(this._touchEndPos, this._tempVec2.x, this._tempVec2.y);
          }

          super._onTouchCancelled(event, captureListeners);
        }
        /**重写内置函数 */


        _onTouchMoved(event, captureListeners) {
          var rollTarget = this.getRollTarget(event, captureListeners);

          if (this.node === rollTarget) {
            super._onTouchMoved(event, captureListeners);

            if (this.vList.isOpenPullHeader || this.vList.isOpenPullFooter) {
              var outOfBoundary = this._getHowMuchOutOfBoundary();

              var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x; //console.log("---------->offset")

              if (offset > 0 && !this._isPullLockHeader && !this._isPullLockFooter) {
                this._pullHeaderProgress = offset < this.EPSILON ? 0 : offset / this.vList.pullOffset;
                this._isPullMoveHeader = this.vList.isOpenPullHeader && this._pullHeaderProgress >= this.vList.pullMultiple;
                this.vList.callPullHeader(false, this._pullHeaderProgress, this._isPullMoveHeader ? PullStateType.LET_GO : PullStateType.GO_ON);
                this.vList.callPullFooter(false, 0, PullStateType.CANCEL);
              } else if (offset < 0 && !this._isPullLockHeader && !this._isPullLockFooter) {
                this._pullFooterProgress = -offset < this.EPSILON ? 0 : -offset / this.vList.pullOffset;
                this._isPullMoveFooter = this.vList.isOpenPullFooter && this._pullFooterProgress >= this.vList.pullMultiple; //console.log("是否移动到尾部" + this._isPullMoveFooter)

                this.vList.callPullFooter(false, this._pullFooterProgress, this._isPullMoveFooter ? PullStateType.LET_GO : PullStateType.GO_ON);
                this.vList.callPullHeader(false, 0, PullStateType.CANCEL);
              } else if (offset == 0 && !this._isPullLockHeader && !this._isPullLockFooter) {
                this.cancelPullState();
              }
            }
          }
        }
        /**重写内置函数 */


        _hasNestedViewGroup(event, captureListeners) {
          return false; //默认给无嵌套列表，具体滚动目标由_onTouchMoved去判断
        }
        /**重写内置函数 */


        _stopPropagationIfTargetIsMe(event) {
          if (this._touchMoved) {
            event.propagationStopped = true;
            return;
          }

          super._stopPropagationIfTargetIsMe(event);
        }
        /** 重写ScrollView内置函数 */


        _handleReleaseLogic(touch) {
          if (this.vList.isPageView) {
            this.autoScrollToPage();

            if (this._scrolling) {
              this._scrolling = false;

              if (!this._autoScrolling) {
                this._dispatchEvent(ScrollView.EventType.SCROLL_ENDED);
              }
            }
          } else {
            super._handleReleaseLogic(touch);
          }
        }
        /**
         * 重写ScrollView 内置函数
        */


        _startAutoScroll(deltaMove, timeInSecond, attenuated, flag) {
          if (this.vList.isOpenPullHeader || this.vList.isOpenPullFooter) {
            // 如果没有刷新/加载的监听者 则不计算 
            if (this._isPullMoveHeader && !this._isPullLockHeader) {
              if (this.vertical) {
                this._topBoundary -= this.vList.pullOffset;
                deltaMove.y -= this.vList.pullOffset;
              } else {
                this._leftBoundary += this.vList.pullOffset;
                deltaMove.x += this.vList.pullOffset;
              }

              this._isPullLockHeader = true;
              this.vList.callPullHeader(true, this._pullHeaderProgress, PullStateType.LOCK);
            } else if (this._isPullMoveFooter && !this._isPullLockFooter) {
              if (this.vertical) {
                this._bottomBoundary += this.vList.pullOffset;
                deltaMove.y += this.vList.pullOffset;
              } else {
                this._rightBoundary -= this.vList.pullOffset;
                deltaMove.x -= this.vList.pullOffset;
              }

              this._isPullLockFooter = true;
              this.vList.callPullFooter(true, this._pullFooterProgress, PullStateType.LOCK);
            }
          }

          super._startAutoScroll(deltaMove, timeInSecond, attenuated);
        }
        /** 
         * 重写ScrollView 内置函数
        */


        _updateScrollBar(outOfBoundary) {
          super._updateScrollBar(new Vec2(outOfBoundary.x, outOfBoundary.y));

          if (this._autoScrollBraking) return; // 自动回弹时不计算 （非手动）
          //console.log("是否惯性滚动" + this._autoScrolling)

          if (!this._autoScrolling) return; // 非自动滚动时不计算 

          if (!this.vList.isOpenPullHeader && !this.vList.isOpenPullFooter) return;
          var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
          var progress;

          if (offset > 0) {
            // 下滑
            progress = offset < this.EPSILON ? 0 : offset / this.vList.pullOffset; //根据参数 headerOutOffset 计算当前下滑的办百分比

            if (this._isPullLockHeader) {
              this._pullHeaderProgress = this._pullHeaderProgress == 1 ? this._pullHeaderProgress : Math.max(progress, 1);
              this.vList.callPullHeader(false, this._pullHeaderProgress, PullStateType.LOCK);
            } else {
              this._pullHeaderProgress = progress < this._pullHeaderProgress ? progress : this._pullHeaderProgress;
              this.vList.callPullHeader(false, this._pullHeaderProgress, PullStateType.CANCEL);
            }
          } else if (offset < 0) {
            progress = -offset < this.EPSILON ? 0 : -offset / this.vList.pullOffset; //根据参数 pullOffset 计算当前下滑的办百分比

            if (this._isPullLockFooter) {
              this._pullFooterProgress = this._pullFooterProgress == 1 ? this._pullFooterProgress : Math.max(progress, 1);
              this.vList.callPullFooter(false, this._pullFooterProgress, PullStateType.LOCK);
            } else {
              this._pullFooterProgress = progress < this._pullFooterProgress ? progress : this._pullFooterProgress;
              this.vList.callPullFooter(false, this._pullFooterProgress, PullStateType.CANCEL);
            }
          } else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
            if (!this._isPullLockHeader && !this._isPullLockFooter) {
              this.cancelPullState();
            }
          }
        }
        /**
         * 是否已到达边界
         * @returns 
         */


        get isOutOfBoundary() {
          return this._isOutOfBoundary();
        }
        /**
         * 获取本次滑动目标列表
         */


        getRollTarget(event, captureListeners) {
          var cache = event.target["__RollTarget"];
          if (cache) return cache;
          var nodes = [event.target];
          if (captureListeners) nodes = nodes.concat(captureListeners);
          if (nodes.length == 1) return nodes[0];
          var touch = event.touch;
          var deltaMove = touch.getLocation().subtract(touch.getStartLocation());
          var x = Math.abs(deltaMove.x);
          var y = Math.abs(deltaMove.y);
          var distance = Math.abs(x - y);
          if (distance < 5) return null;
          var result = null;

          for (var node of nodes) {
            var rollView = node.getComponent(RollView);

            if (rollView) {
              if (result == null) result = node; // 取第一个滚动组件作为默认响应者

              if (rollView.horizontal && x > y || rollView.vertical && y > x) {
                result = node;
                break;
              }
            }
          }

          if (result) {
            for (var _node of nodes) {
              _node["__RollTarget"] = result;
            }
          }

          return result;
        }
        /** 
         * 自动滚到页 
         */


        autoScrollToPage() {
          var bounceBackStarted = this._startBounceBackIfNeeded();

          var pageIndex = this.vList.getSelectIndex();

          if (bounceBackStarted) {
            var bounceBackAmount = this._getHowMuchOutOfBoundary();

            this._clampDelta(bounceBackAmount);

            if (this.horizontal) {
              if (bounceBackAmount.x < 0) {
                pageIndex = 0;
              } else if (bounceBackAmount.x > 0) {
                pageIndex = this.vList.cellCount > 0 ? this.vList.cellCount - 1 : 0;
              }
            } else {
              if (bounceBackAmount.y > 0) {
                pageIndex = 0;
              } else if (bounceBackAmount.y < 0) {
                pageIndex = this.vList.cellCount > 0 ? this.vList.cellCount - 1 : 0;
              }
            }
          } else {
            var moveOffset = new Vec2();
            Vec2.subtract(moveOffset, this._touchBeganPos, this._touchEndPos);
            var _index8 = pageIndex;

            var nextIndex = _index8 + this.getDragPageNum(moveOffset);

            var timeInSecond = 0.3 * Math.abs(_index8 - nextIndex);

            if (nextIndex < this.vList.cellCount) {
              if (this.isScrollable(moveOffset, _index8, nextIndex)) {
                this.vList.selectIndex(nextIndex, timeInSecond);
                return;
              } else {
                var touchMoveVelocity = this._calculateTouchMoveVelocity();

                if (this.isQuicklyScrollable(touchMoveVelocity)) {
                  this.vList.selectIndex(nextIndex, timeInSecond);
                  return;
                }
              }
            }

            this.vList.selectIndex(_index8, timeInSecond);
          }
        }
        /** 是否超过自动滚动临界值 */


        isScrollable(offset, index, nextIndex) {
          if (this.horizontal) {
            return Math.abs(offset.x) >= this.view.width * this.SCROLL_THRESHOLd;
          } else {
            return Math.abs(offset.y) >= this.view.height * this.SCROLL_THRESHOLd;
          }
        }
        /** 判断是否快速滑动 */


        isQuicklyScrollable(touchMoveVelocity) {
          if (this.horizontal) {
            if (Math.abs(touchMoveVelocity.x) > this.AUTO_Page_THRESHOLd) {
              return true;
            }
          } else {
            if (Math.abs(touchMoveVelocity.y) > this.AUTO_Page_THRESHOLd) {
              return true;
            }
          }

          return false;
        }
        /** 
         * 获取拖拽页数 
         */


        getDragPageNum(moveOffset) {
          if (this.horizontal) {
            if (moveOffset.x === 0) return 0;
            return moveOffset.x > 0 ? 1 : -1;
          } else {
            if (moveOffset.y === 0) return 0;
            return moveOffset.y < 0 ? 1 : -1;
          }
        }
        /**
         * 取消拉取更多状态
         */


        cancelPullState() {
          this.vList.callPullHeader(false, 0, PullStateType.CANCEL);
          this.vList.callPullFooter(false, 0, PullStateType.CANCEL);
        }
        /** 
         * 重置拉取更多各种状态 
        */


        resetPullState() {
          this._isPullMoveHeader = false;
          this._isPullMoveFooter = false;

          if (this._isPullLockHeader || this._isPullLockFooter) {
            this.cancelPullState();
            this._isPullLockHeader = false;
            this._isPullLockFooter = false;
          }
        }

      });

      _export("CellInfo", CellInfo = class CellInfo {
        constructor() {
          this._name = void 0;
          this._index = void 0;
          this._isSelect = false;
          this._frame = new math.Rect();
        }

        set name(value) {
          this._name = value;
        }

        get name() {
          return this._name;
        }

        set index(value) {
          this._index = value;
        }

        get index() {
          return this._index;
        }

        set isSelect(value) {
          this._isSelect = value;
        }

        get isSelect() {
          return this._isSelect;
        }

        get frame() {
          return this._frame;
        }

        get cellName() {
          return this.name + "_" + this._index;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eab08f7e20a7d42fae95e8df080628a30eb652ac.js.map