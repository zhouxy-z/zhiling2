import {_decorator, Component, Enum, Event, EventTouch, instantiate, js, Layout, Mask, math, Node, NodeEventType, NodePool, Prefab, Rect, ScrollView, Size, Touch, UITransform, Vec2, Vec3, Widget } from "cc";
const { ccclass, property} = _decorator;
/**
 * 布局类型  
 */
enum LayoutType {
    /**
     * 列表类型
     */
    LIST,
    /**
     * 网格类型
     */
    GRID
}

/**
 * 滚动方向  
 */
enum ScrollDirection {
    /**
     * 垂直滚动
     */
    VERTICAL,
    /**
     * 水平滚动
     */
    HORIZONTAL
}

/**
 * 选择类型
 */
enum SelectType {
    /**
     * 单选
     */
    ToggleGroup,
    /**
     * 多选
     */
    Toggle, 
}

/**
 * 拉到尽头状态定义
 */
export enum PullStateType{
    CANCEL,//取消
    GO_ON,//继续
    LET_GO,//松开
    LOCK,//锁定中
}

/**
 * 拉到尽头回调信息
*/
export interface PullMoreInfo{
    isAction: boolean,//是否可获取
    progress: number,//拉动比例
    state: PullStateType,//拉动尽头状态
}

/**
 * 当前滚动方向
 */
export enum RollViewDir {
    None,//无
    Left,//往左滚动
    Right,//往右滚动
    Up,//往上滚动
    Down,//往下滚动
}

@ccclass('VList')
export class VList extends Component {
    @property({ 
        type: Enum(LayoutType), 
        tooltip: `布局类型：\nLIST：列表布局（支持多Cell模板动态改变Size） \nGRID：网格布局（支持多Cell模板，但必须要相同尺寸,不支持动态改变节点尺寸变化）` 
    }) 
    layoutType: LayoutType = LayoutType.LIST;

    @property({ 
        type: Enum(ScrollDirection), 
        tooltip: `滚动方向：\nVERTICAL：垂直滚动 \nHORIZONTAL：水平滚动` 
    }) 
    scrollDirection: ScrollDirection = ScrollDirection.VERTICAL;

    @property({ 
        tooltip: `不足一行时是否居中对齐`,
        visible: function () {
            return (this.layoutType == LayoutType.LIST && this.scrollDirection == ScrollDirection.HORIZONTAL);
        }
    }) 
    notLineIsAlignCenter: boolean = false;

    @property({ 
        type: [Prefab], 
        tooltip: `Cell模板列表（不挂预制体则以节点方式挂cell在根部或者挂根节点view/content下）`,
    }) 
    tempCells: Prefab[] = [];
    
    @property({
        tooltip: `上边距`,
    })
    paddingTop: number = 0;

    @property({
        tooltip: `下边距`,
    })
    paddingBottom: number = 0;

    @property({
        tooltip: `左边距`,
    })
    paddingLeft: number = 0;

    @property({
        tooltip: `右边距`,
    })
    paddingRight: number = 0;

    @property({
        tooltip: `相邻节点之前的垂直距离`,
        visible: function () {
            return (this.layoutType == LayoutType.LIST && this.scrollDirection == ScrollDirection.VERTICAL) || (this.layoutType == LayoutType.GRID);
        }
    })
    spacingY: number = 0;

    @property({
        tooltip: `相邻节点之前的水平距离`,
        visible: function () {
            return (this.layoutType == LayoutType.LIST && this.scrollDirection == ScrollDirection.HORIZONTAL) || (this.layoutType == LayoutType.GRID);
        }
    })
    spacingX: number = 0;

    @property({
        type: Enum(SelectType), 
        tooltip: `节点选择类型\nToggleGroup：单选\nToggle：复选`,
    })
    selectType: SelectType = SelectType.ToggleGroup;

    @property({ 
        tooltip: `多少帧刷新一次可见区域（有数据数据变更或者有尺寸变更时生效）` 
    })
    frameInterval: number = 1;

    @property({ 
        tooltip: `多少帧回收一次不可见区域（有数据数据变更或者有尺寸变更时生效）` 
    })
    recycleInterval: number = 1;

    @property({ 
        tooltip: "是否开启翻页模式, 布局类型是List才生效，如果是网格类型翻页就用List嵌套Grid", 
        visible: function () {
            return this.layoutType == LayoutType.LIST
        }
    }) 
    isPageView: boolean = false;

    @property({ tooltip: "是否开启拉到头部尽头获取更多" })
    isOpenPullHeader: boolean = false;

    @property({ tooltip: "是否开启拉到尾部尽头获取更多" })
    isOpenPullFooter: boolean = false;

    @property({ tooltip: "拉到尽头时超过此偏移量会触发回调",
        visible: function() { return this.isOpenPullHeader || this.isOpenPullFooter; }
    })
    pullOffset: number = 200;

    @property({ tooltip: "拉到尽头时满足触发列表进度的倍数",
        visible: function () { return this.isOpenPullHeader || this.isOpenPullFooter; }
    }) 
    pullMultiple: number = 2;

    private _rollView: RollView;
    private _contentTrans: UITransform;
    private _cellCount: number = 0; //cell数量
    private _cellInfos: CellInfo[] = null;
    private _cellTempSize: Map<string, Size> = new Map(); //临时保存cell变化后的尺寸
    private _cellTypeMap: {[key: string]: Node} = js.createMap(); //保存cell类型模板
    private _cellPoolMap:  {[key: string]: NodePool} = js.createMap(); //保存cell类型池子
    private _visibleCellMap: {[key: number]: Node} = js.createMap(); //可见节点信息
    private _visibleInfoMap: {[key: number]: CellInfo} = js.createMap(); //可见节点信息
    private _curSelectIndexList: number[]; //当前选中节点
    private _tempRollIndex: number = -1; //临时记录列表未初始化滚动的下标
    private _tempSelectIndexList: number[] = []; //临时记录列表未初始化选中列表
    private _cellDefName: string; //默认cell名称
    private _cellDefSize: Size; //默认cell尺寸
    private _isFirstUpdate: boolean = true; //是否首次初始化列表
    private _frameNum: number = 0; // 帧计数
    private _isUpdateVisible: boolean = false; //当前帧是否需要更新可见节点  
    private _isRecycleInvisible = false; // 当前帧是否需要回收不可见节点  
    private _isRecountSize: boolean = false; //当前帧是否需要重新计算content尺寸  
    private _vec3Out: Vec3 = new Vec3(); //用于输出cell矩形转换实际坐标
    private _curVisibleRect: Rect = new Rect(); //用于获取当前显示区域矩形
    private _tempCellRect: Rect = new math.Rect(); //用于获取cell矩形数据
    private _isInitVisible: boolean = false;
    private _lastRollTime: number = 0;//记录上次滚动时间
    private _lastContPos: Vec2 = new Vec2(0, 0);//记录上次容器坐标
    /**
     * 初始化回调
     */
    public initVisible: () => void;
    /**
     * 渲染Cell回调
     * @param cell 渲染节点
     * @param cellInfo 节点数据
     */
    public updateCell: (cell: Node, cellInfo: CellInfo) => void;

    /**
     * 点击Cell回调
     * @param cell 渲染节点
     * @param cellInfo 节点数据
     */
    public clickCell: (cell: Node, cellInfo: CellInfo) => void;

    /**
     * 选中Cell回调
     * @param cell 渲染节点
     * @param cellInfo 节点数据
     * @param lastCell 上次被选中的节点
     * @param lastCell 上次被选中的节点数据
     */
    public selectCell: (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo) => void;

    /**
     * 选中Cell条件检测回调
     * @param cell 渲染节点
     * @param cellInfo 节点数据
     */
    public selectCondCheck: (cell: Node, cellInfo: CellInfo) => boolean;

    /**
     * 获取Cell类型名字回调
     * @param index cell下标
     * @returns 渲染的节点名称
     */
    public getCellName:(index: number) => string = null;

    /**
     * 获取Cell尺寸
     * @param index cell下标
     * @returns 渲染的节点尺寸
     */
    public getCellSize:(cell: Node, index: number) => Size = null;

    /**
     * 拉到头部尽头回调
     * @param pullInfo 尽头回调数据
     */
    public updatePullHeader: (pullInfo: PullMoreInfo) => void;

    /**
     * 拉到尾部部尽头回调
     * @param pullInfo 尽头回调数据
     */
    public updatePullFooter: (pullInfo: PullMoreInfo) => void;

    protected onLoad(): void {
        let layout: Layout = this.node.getComponent(Layout);
        if (layout) layout.enabled = false;
        let temps: Node[] = [];
        let cont: Node = this.node.getChildByPath(`view/content`) || this.node;
        let contWidget: Widget = cont.getComponent(Widget);
        if (contWidget) contWidget.enabled = false;
        for (let prefab of this.tempCells) {
            temps.push(instantiate(prefab));
        }
        if (temps.length > 0) {
            cont.destroyAllChildren();
        }else{
            temps = cont.children;
        }
        let tempCell: Node;
        for (let index = temps.length - 1; index >= 0; index--) {
            //console.log("------>TempIndex" + index)
            tempCell = temps[index];
            if(tempCell.parent) tempCell.removeFromParent();
            if (!this._cellTypeMap[tempCell.name]) {
                this._cellTypeMap[tempCell.name] = tempCell;
                this._cellPoolMap[tempCell.name] = new NodePool();
                this._cellDefName = this._cellDefName ?? tempCell.name;
                this._cellDefSize = this._cellDefSize ?? tempCell.getComponent(UITransform).contentSize;
            }else{
                console.error("cell模板名字重复");
                return;
            }
        }
        
        this.initRollView();
    }
    
    onEnable(): void {
        this.addEventListener();
    }

    onDisable(): void {
        this.removeEventListener();
    }

    update(dt: number): void {
        this._frameNum++;
        this.updateRecountSize(dt);
        this.updateVisible(dt);
        this.updateInvisible(dt);
    }

    protected onDestroy(): void {
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

    private initRollView(): void {
        let view: Node = this.node.getChildByName(`view`) || new Node(`view`);
        let viewTrans: UITransform = view.getComponent(UITransform) || view.addComponent(UITransform);
        viewTrans.setAnchorPoint(new Vec2(0.5, 0.5));
        viewTrans.contentSize = this.node.getComponent(UITransform).contentSize;

        this._rollView = view.addComponent(RollView);
        this._rollView.initView(this);
        
        let widget: Widget = view.getComponent(Widget) || view.addComponent(Widget);
        widget.isAlignTop = true, widget.isAlignBottom = true, widget.isAlignLeft = true, widget.isAlignRight = true,
        widget.top = this.paddingTop, widget.bottom = this.paddingBottom, widget.left = this.paddingLeft, widget.right = this.paddingRight,
        view.parent = this.node;
        view.layer = this.node.layer;

        let mask: Mask = view.getComponent(Mask) || view.addComponent(Mask);
        mask.type = Mask.Type.GRAPHICS_RECT;

        let content: Node = view.getChildByName(`content`) || new Node(`content`);
        content.setPosition(Vec3.ZERO);
        this._contentTrans = content.getComponent(UITransform) || content.addComponent(UITransform);
        this._contentTrans.setAnchorPoint(new Vec2(0.5, 0.5));
        this._contentTrans.contentSize = viewTrans.contentSize;
        content.parent = view;
        content.layer = content.parent.layer;
        let layout: Layout = content.getComponent(Layout);
        if (layout) layout.enabled = false;

        this._rollView.content = content;
        if (this.scrollDirection == ScrollDirection.VERTICAL){
            this._rollView.horizontal = false;
            this._rollView.vertical = true;
        } else {
            this._rollView.horizontal = true;
            this._rollView.vertical = false;
        }
        //console.log("初始化列表完毕")
    }

    private addEventListener(): void {
        this._rollView.view.node.on(Node.EventType.SIZE_CHANGED, this.onViewSizeChange, this);
        this._rollView.view.node.on(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
        this._rollView.view.node.on(ScrollView.EventType.SCROLLING, this.onScrolling, this);
        this._rollView.view.node.on(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);
        this._rollView.view.node.on(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
    }

    private removeEventListener(): void {
        this._rollView.view.node.off(Node.EventType.SIZE_CHANGED, this.onViewSizeChange, this);
        this._rollView.view.node.off(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
        this._rollView.view.node.off(ScrollView.EventType.SCROLLING, this.onScrolling, this);
        this._rollView.view.node.off(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);
        this._rollView.view.node.off(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
    }

    private onCellClick(event: EventTouch): void {
        let cell: Node = event.target as Node;
        let cellInfo: CellInfo = this.getVisibleInfo(cell.name);
        if (!cellInfo) return;
        this.onSelect(cellInfo, cell, true);
    }
    /**
     * view节点尺寸变化
     */
    private onViewSizeChange(): void {
        this._isRecountSize = true;
        //this._isUpdateVisible = true;
        //if (this.recycleInterval > 0) this._isRecycleInvisible = true;
    }

    private onScrollBegan(): void {
        this.node.emit(ScrollView.EventType.SCROLL_BEGAN);
    }

    private onScrolling(): void {
        this._isUpdateVisible = true;
        if (this.recycleInterval > 0 && !this._rollView.isOutOfBoundary) this._isRecycleInvisible = true;
        let currentPos: Vec2 = this._rollView.getScrollOffset();
        let time: number = Date.now();
        let deltaTime: number = (time - this._lastRollTime) / 1000;
        let rollDir: RollViewDir = RollViewDir.None;
        if (deltaTime > 0) {
            let deltaX: number = currentPos.x - this._lastContPos.x;
            let deltaY: number = currentPos.y - this._lastContPos.y;
            let velocityX: number = deltaX / deltaTime;
            let velocityY: number = deltaY / deltaTime;
            
            // 判断主要滚动方向
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

    private onScrollTouchUp(): void {
        this.recycleInvisible();
        this.node.emit(ScrollView.EventType.SCROLL_ENDED);
    }

    private onScrollEnded(): void {
        this.recycleInvisible();
        this.node.emit(ScrollView.EventType.SCROLL_ENDED);
    }

    private onCellSizeChange(cell: Node): void {
        this._cellTempSize.set(cell.name, cell.getComponent(UITransform).contentSize);
        this._isRecountSize = true;
        console.log("Size------>" + cell.name);
    }

    private onSelect(cellInfo: CellInfo, cell?: Node, isClick: boolean = false): void {
        isClick && this.clickCell?.(cell, cellInfo);

        let result: boolean = true;
        if (this.selectCondCheck != null){
            result = this.selectCondCheck(cell, cellInfo);
        }
        if (!result) return;
        let lastCell: Node;
        let lastCallInfo: CellInfo;
        if (this.selectType == SelectType.ToggleGroup) {
            let lastSelectIndex: number = this._curSelectIndexList[0];
            if (lastSelectIndex > -1 && lastSelectIndex != cellInfo.index && lastSelectIndex < this._cellInfos.length) {
                this._curSelectIndexList = [];
                lastCallInfo = this._cellInfos[lastSelectIndex];
                lastCallInfo.isSelect = false;
                lastCell = this._visibleCellMap[lastCallInfo.index];
            } 
            cellInfo.isSelect = true;
            this._curSelectIndexList[0] = cellInfo.index;
        } else {
            let index: number = this._curSelectIndexList.indexOf(cellInfo.index);
            if (index > -1) {
                cellInfo.isSelect = false;
                this._curSelectIndexList.splice(index, 1);
            } else {
                cellInfo.isSelect = true;
                this._curSelectIndexList.push(cellInfo.index);
            }
        }
       
        this.selectCell?.(cell, cellInfo, lastCell, lastCallInfo);
    }

    /**
     * 更新可见区域
     */
    private updateVisible(dt: number): void {
        if (!this._isUpdateVisible) return;
        if ((this.frameInterval <= 1) || (this._frameNum % this.frameInterval == 0)) {
            this.refreshVisible();
            return;
        }
    }

    /**
     * 更新不可见区域
     */
    private updateInvisible(dt: number): void {
        if (this._isRecycleInvisible == false) return ;
        if ((this.recycleInterval >= 1) && (this._frameNum % this.recycleInterval == 0)) {
            this.recycleInvisible();
            return;
        }
    }

    /**
     * 更新重新计算尺寸
     * @param dt 
     * @returns 
     */
    private updateRecountSize(dt: number): void {
        if (!this._isRecountSize) return;
        this.refreshSize();
    }
    
    /**
     * 重置列表尺寸
     */
    private refreshSize(): void {
        this._isRecountSize = false;
        this._rollView.stopAutoScroll();
        this.recycleInvisible(true);
        //记录偏移
        let offset: Vec2 = this._rollView.getScrollOffset();
        offset.x = -offset.x;

        this.updateLayou();
        if(this.notLineIsAlignCenter && this._contentTrans.width < this._rollView.view.width) {
            this._rollView.setContentPosition(new Vec3(0,0,0));//列表横向布局时不足一行居中
        } else {
            let cellInfo: CellInfo = this._tempRollIndex != -1 ? this._cellInfos[this._tempRollIndex] : null;
            this._tempRollIndex = -1;
            if (cellInfo) {
                this._rollView.scrollToOffset(cellInfo.frame.origin);
            } else {
                if (this._isFirstUpdate) {
                    //初始位置
                    this.scrollDirection == ScrollDirection.VERTICAL ? this._rollView.scrollToTop() : this._rollView.scrollToTopLeft();
                } else {
                    //恢复偏移
                    let maxOffset: Vec2 = this._rollView.getMaxScrollOffset();
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
    private setUpdateVisibleFlag(force: boolean = false): void {
        if (force) {
            this.refreshVisible();
            this.recycleInvisible();
            return
        }
        this._isUpdateVisible = true;
        this._isRecycleInvisible = true;
    }

    /**
     *更新布局
     */
    private updateLayou(): void { 
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
    private updateListLayou(): void {
        let contentHeight: number = 0;
        let contentWidth: number = 0;
        let cellInfo: CellInfo;
        let cellName: string;
        let cell: Node;
        let cellSize: Size;
        for (let index = 0; index < this._cellCount; index++) {
            cellName = this.getCellName?.(index) ?? this._cellDefName;
            cell = this._cellTypeMap[cellName];
            cellInfo = new CellInfo();
            cellInfo.name = cellName;
            cellInfo.index = index;
            cellInfo.isSelect = this._tempSelectIndexList.indexOf(index) > -1 ? true : false;
            cellSize = this._cellTempSize.get(cellInfo.cellName) ?? this.getCellSize?.(cell, index) ?? cell.getComponent(UITransform).contentSize;
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
            this._cellInfos[index] = cellInfo;
        }
        
        this._contentTrans.contentSize = new Size(contentWidth, contentHeight);
    }

    /**
     * 更新网格布局
     */
    private updateGridLayou(): void {
        let contentHeight: number = 0;
        let contentWidth: number = 0;
        let maxRow: number = 0;
        let maxCol: number = 0;
        if (this.scrollDirection == ScrollDirection.VERTICAL) {
            maxCol = Math.floor((this._rollView.view.width +  this.spacingX) / (this._cellDefSize.width + this.spacingX));
            maxRow = Math.ceil(this._cellCount / maxCol);
            contentWidth = this._rollView.view.width;
            contentHeight = maxRow * (this._cellDefSize.height + this.spacingY) - this.spacingY;
        }else{
            maxRow = Math.floor((this._rollView.view.height + this.spacingY) / (this._cellDefSize.height + this.spacingY));
            maxCol = Math.ceil(this._cellCount / maxRow);
            contentWidth = maxCol * (this._cellDefSize.width + this.spacingX) - this.spacingX;
            contentHeight = this._rollView.view.height;
        }
        
        this._contentTrans.contentSize = new Size(Math.max(contentWidth, this._rollView.view.width), Math.max(contentHeight, this._rollView.view.height));
        let row: number;
        let col: number;
        let cellInfo: CellInfo;
        for (let index = 0; index < this._cellCount; index++) {
            if (this.scrollDirection == ScrollDirection.VERTICAL) {
                row = Math.floor(index / maxCol);
                col = index % maxCol;
            }else{
                col = Math.floor(index / maxRow);
                row = index % maxRow;
            }
            cellInfo = new CellInfo();
            cellInfo.name = this._cellDefName;
            cellInfo.index = index;
            cellInfo.isSelect = this._tempSelectIndexList.indexOf(index) > -1 ? true : false;
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
    private refreshVisible(): void {
        this._isUpdateVisible = false;
        let visibleCellInfos: CellInfo[] = this.getVisibleCellInfos();
        let cellInfo: CellInfo;
        let cell: Node;
        let isAdd: boolean;
        for (let index = 0; index < visibleCellInfos.length; index++) {
            cellInfo = visibleCellInfos[index];
            if (!this._curVisibleRect.intersects(cellInfo.frame)) continue;
            cell = this._visibleCellMap[cellInfo.index];
            isAdd = false;
            if(!cell){
                isAdd = true;
                let pool: NodePool = this._cellPoolMap[cellInfo.name];
                cell = pool.get();
                if (cell == null) {
                    cell = instantiate(this._cellTypeMap[cellInfo.name]);
                }
                
            }
            cell.off(NodeEventType.TOUCH_END, this.onCellClick, this);
            cell.on(NodeEventType.TOUCH_END, this.onCellClick, this);
            //cell.off(NodeEventType.SIZE_CHANGED, this._onCellSizeChange , this);
            cell.name = cellInfo.cellName;
            cell.getComponent(UITransform).contentSize = new Size(cellInfo.frame.width, cellInfo.frame.height);
            if (cell.parent != this._rollView.content) {
                this._rollView.content.insertChild(cell, index);
                cell.layer = cell.parent.layer;
                this._vec3Out.x = - (this._contentTrans.contentSize.width - cellInfo.frame.width) * 0.5 + cellInfo.frame.x;
                this._vec3Out.y = + (this._contentTrans.contentSize.height - cellInfo.frame.height) * 0.5 - cellInfo.frame.y;
                cell.position = this._vec3Out;
                //console.log("显示----->" + cell.name + "------->" + cell.position.x);
            }
           
            if (isAdd) {
                this._visibleCellMap[cellInfo.index] = cell;
                this._visibleInfoMap[cellInfo.index] = cellInfo;
                this.updateCell?.(cell, cellInfo);
                
            };
            
        }

        if (this._tempSelectIndexList.length) {
            let cellInfo: CellInfo;
            let cell: Node;
            for (let index of this._tempSelectIndexList) {
                cellInfo = this._cellInfos[index];
                if (!cellInfo) continue;
                cell = this._visibleCellMap[cellInfo.index];
                this.onSelect(cellInfo, cell);
            }
            this._tempSelectIndexList.length = 0;
        }
        if (this._isInitVisible) {
            this._isInitVisible = false;
            this.initVisible?.();
        }
    }

    /**
     * 回收不可见节点
     * @param isForce 是否强制回收
     */
    private recycleInvisible(isForce: boolean = false): void {
        this._isRecycleInvisible = false;
        this.resetVisibleRect();
        let contSize: Size = this._contentTrans.contentSize;
        let boundingBox: Rect;
        let pool: NodePool;
        let cellInfo: CellInfo;
        let cell: Node;
        for (let key in this._visibleCellMap) {
            cell = this._visibleCellMap[key];
            boundingBox = cell.getComponent(UITransform).getBoundingBox();
            this._tempCellRect.size = boundingBox.size;
            this._tempCellRect.x = (contSize.width - this._tempCellRect.width) * 0.5 + cell.position.x;
            this._tempCellRect.y = (contSize.height - this._tempCellRect.height) * 0.5 - cell.position.y;
            if (isForce || !this._curVisibleRect.intersects(this._tempCellRect)) {
                //console.log("回收----->" + value.name);
                cell.off(NodeEventType.TOUCH_END, this.onCellClick, this);
                cellInfo = this._visibleInfoMap[key];
                pool = this._cellPoolMap[cellInfo.name];
                pool.put(cell);
                delete this._visibleCellMap[key];
                delete this._visibleInfoMap[key];
            }
        }
        
        
    }
    
    /**
     * 根据可视范围获取可见cellInfo列表
     * @returns 
     */
    private getVisibleCellInfos(): CellInfo[] {
        this.resetVisibleRect();
        let result: CellInfo[] = [];
        let checkIndex: number = -1;
        let left: number = 0;
        let right: number = this._cellInfos.length - 1;
        let index: number;
        let cellInfo: CellInfo;
        //根据当前容器位置，用二分叉查找法找出中位数
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
        }
        //查找失败
        if (checkIndex < 0) return this._cellInfos;

        result.push(this._cellInfos[checkIndex]);

        let startIndex: number = checkIndex;
        let endIndex: number = checkIndex;
        let idx: number;
        let info:CellInfo;
        //中位数往左查
        while (startIndex > 0) {
            idx = startIndex - 1;
            info = this._cellInfos[idx];
            if (!this._curVisibleRect.intersects(info.frame)) break;
            result.push(info);
            startIndex = idx;
        }
        //中位数往左右查
        while (endIndex < this._cellInfos.length - 1) {
            idx = endIndex + 1;
            info = this._cellInfos[idx];
            if (!this._curVisibleRect.intersects(info.frame)) break;
            result.push(info);
            endIndex = idx;
        }

        return result.sort((a: CellInfo, b: CellInfo) => {return a.index - b.index});
            
    }

    /**
     * 重置当前的可见范围  
     */
    private resetVisibleRect(): void {
        this._curVisibleRect.origin = this._rollView.getScrollOffset();
        this._curVisibleRect.x = - this._curVisibleRect.x;
        this._curVisibleRect.size = this._rollView.view.contentSize;
    }

    /**
     * 通知拉到头部尽头回调（内置ScrollView组件调用外部请勿调用此接口）
     * @param isAction 是否可获取
     * @param progress 当前拉取的进度
     * @param state 拉取状态
     */
    public callPullHeader(isAction: boolean, progress: number, state: PullStateType): void {
        let pullIndo:PullMoreInfo = {isAction: isAction, progress: progress, state: state};
        if (this.isOpenPullHeader) this.updatePullHeader?.(pullIndo);
    }

    /**
     * 通知拉到尾部尽头回调（内置ScrollView组件调用外部请勿调用此接口）
     * @param isHeader 
     * @param progress 
     * @param state 
     */
    public callPullFooter(isHeader: boolean, progress: number, state: PullStateType): void {
        let pullIndo:PullMoreInfo = {isAction: isHeader, progress: progress, state: state};
        if (this.isOpenPullFooter) this.updatePullFooter?.(pullIndo);
    }

    private getVisibleCell(name: string): Node {
        for (let node of this._rollView.content.children) {
            if (node.name === name) {
                return node;
            }
        }
        return null;
    }

    private getVisibleInfo(name: string): CellInfo {
        let cellInfo: CellInfo;
        for (let key in this._visibleInfoMap) {
            cellInfo = this._visibleInfoMap[key];
            if (cellInfo.cellName === name) {
                return cellInfo;
            }
        }
        return null;
    }

    /**
     * 设置Cell总数
     */
    public set cellCount(count: number) {
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
    public get cellCount(): number {
        return this._cellCount;
    }

    public get rollView(): RollView {
        return this._rollView;
    }

    /**
     * 滚动到指定cell下标
     * @param index cell下标
     * @param timeInSecond 滚动时间
     * @param attenuated 滚动加速是否衰减
     */
    public scrollToIndex(index: number, timeInSecond: number = 0, attenuated: boolean = true): void {
        if (!this._cellInfos) {
            this._tempRollIndex = index;
            return;
        }
        let cellInfo: CellInfo = this._cellInfos[index];
        if(cellInfo){
            this._rollView.stopAutoScroll();
            this._rollView.scrollToOffset(cellInfo.frame.origin, timeInSecond, attenuated);
            this.setUpdateVisibleFlag();
            //console.log("------>" + index)
        } else {
            console.error(`无效滚动下标----->${index}`);
        }
    }

    /**
     * 选中Cell下标
     * @param index 
     */
    public selectIndex(index: number, timeInSecond: number = 0, attenuated: boolean = true): void {
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
    public getSelectIndex(): number {
       return this._curSelectIndexList.length > 0 ? this._curSelectIndexList[0] : -1;
    }

    /**
     * 获取当前显示节点实例列表
     */
    public get visibleCellList(): Node[] {
        let result: Node[] = [];
        for (let key in this._visibleCellMap) {
            result.push(this._visibleCellMap[key]);
        }
        return result;
    }

    /**
     * 获取当前显示节点实例列表
     */
    public get visibleCellMap(): {[key: number]: Node} {
        return this._visibleCellMap;
    }

    /**
     * 获取当前显示节点实例Map
     */
    public get visibleCellInfoList(): CellInfo[] {
        let result: CellInfo[] = [];
        for (let key in this._visibleInfoMap) {
            result.push(this._visibleInfoMap[key]);
        }
        return result;
    }

    /**
     * 设置选中多个Cell下标
     * @param indexList 
     * @returns 
     */
    public selectMultIndex(indexList: number[]): void {
        if (this.selectType != SelectType.Toggle) {
            console.error("当前非复选模式");
            return;
        }
        if (!this._cellInfos) {
            this._tempSelectIndexList = indexList;
            this._tempRollIndex = indexList[0];
            return;
        }
        let cellInfo: CellInfo;
        let cell: Node;
        for (let index of indexList) {
            cellInfo = this._cellInfos[index];
            if (!cellInfo) return;
            cell = this._visibleCellMap[cellInfo.index];
            this.onSelect(cellInfo, cell);
        }
    }

    /**
     * 获取选中Cell下标列表
     * @returns 
     */
    public getSelectMultIndex(): number[] {
        return this._curSelectIndexList;
    }
}
export class RollView extends ScrollView {
    private vList:VList;
    private readonly SCROLL_THRESHOLd = 0.5;//滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原
    private readonly AUTO_Page_THRESHOLd: number = 100;//快速滑动翻页临界值。当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值,该值与此临界值相比较，如果大于临界值，则进行自动翻页
    private readonly EPSILON: number = 1e-4;
    private _tempVec2 = new Vec2();
    private _touchBeganPos = new Vec2();//记录触摸开始坐标
    private _touchEndPos = new Vec2();//记录触摸结束坐标

    private _isPullMoveHeader: boolean = false;//是否已经拉取到头部可触发区域
    private _isPullMoveFooter: boolean = false;//是否已经拉取到底部可触发区域
    private _isPullLockHeader: boolean = false;//是否拉取到头部锁定状态
    private _isPullLockFooter: boolean = false;//是否拉取到尾部锁定状态
    private _pullHeaderProgress: number = 0;//拉取到头部进度
    private _pullFooterProgress: number = 0;//拉取到尾部进度
    public initView(vList:VList): void{
        this.vList = vList;
    }
    /**重写内置函数 */
    protected _onTouchBegan(event: EventTouch, captureListeners?: Node[]): void {
        let nodes: Node[] = [event.target];
        if (captureListeners) nodes = nodes.concat(captureListeners);
        for (let node of nodes) {
            // 清空滚动节点标记
            node[`__RollTarget`] = null;
        }
        if (this.vList.isPageView) {
            event.touch!.getUILocation(this._tempVec2);
            Vec2.set(this._touchBeganPos, this._tempVec2.x, this._tempVec2.y);
        }
        super._onTouchBegan(event, captureListeners);
    }

    /** 重写ScrollView内置函数 */
    protected _onTouchEnded(event: EventTouch, captureListeners?: Node[]): void {
        if (this.vList.isPageView) {
            event.touch!.getUILocation(this._tempVec2);
            Vec2.set(this._touchEndPos, this._tempVec2.x, this._tempVec2.y);
        }
        super._onTouchEnded(event, captureListeners);
    }

    /** 重写ScrollView内置函数 */
    protected _onTouchCancelled(event: EventTouch, captureListeners?: Node[]): void {
        if (this.vList.isPageView) {
            event.touch!.getUILocation(this._tempVec2);
            Vec2.set(this._touchEndPos, this._tempVec2.x, this._tempVec2.y);
        }
        super._onTouchCancelled(event, captureListeners);
    }

    /**重写内置函数 */
    protected _onTouchMoved(event: EventTouch, captureListeners?: Node[]): void {
        let rollTarget: Node = this.getRollTarget(event, captureListeners);
        if (this.node === rollTarget) {
            super._onTouchMoved(event, captureListeners);

            if (this.vList.isOpenPullHeader || this.vList.isOpenPullFooter) {
                let outOfBoundary: Vec3 = this._getHowMuchOutOfBoundary();
                let offset: number = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
                //console.log("---------->offset")
                if (offset > 0 && !this._isPullLockHeader && !this._isPullLockFooter) {
                    this._pullHeaderProgress = offset < this.EPSILON ? 0 : offset / this.vList.pullOffset;
                    this._isPullMoveHeader = this.vList.isOpenPullHeader && this._pullHeaderProgress >= this.vList.pullMultiple;
                    this.vList.callPullHeader(false, this._pullHeaderProgress, this._isPullMoveHeader ? PullStateType.LET_GO : PullStateType.GO_ON);
                    this.vList.callPullFooter(false, 0, PullStateType.CANCEL);
                } else if (offset < 0 && !this._isPullLockHeader && !this._isPullLockFooter) {
                    this._pullFooterProgress = -offset < this.EPSILON ? 0 : -offset / this.vList.pullOffset;
                    this._isPullMoveFooter = this.vList.isOpenPullFooter && this._pullFooterProgress >= this.vList.pullMultiple;
                    //console.log("是否移动到尾部" + this._isPullMoveFooter)
                    this.vList.callPullFooter(false, this._pullFooterProgress, this._isPullMoveFooter ? PullStateType.LET_GO : PullStateType.GO_ON);
                    this.vList.callPullHeader(false, 0, PullStateType.CANCEL);
                } else if (offset == 0 && !this._isPullLockHeader && !this._isPullLockFooter) {
                    this.cancelPullState();
                }
            }
        }
    }

    /**重写内置函数 */
    protected _hasNestedViewGroup(event: Event, captureListeners?: Node[]): boolean {
        return false;//默认给无嵌套列表，具体滚动目标由_onTouchMoved去判断
    }

    /**重写内置函数 */
    protected _stopPropagationIfTargetIsMe(event: Event): void {
        if (this._touchMoved) {
            event.propagationStopped = true;
            return;
        }
        super._stopPropagationIfTargetIsMe(event);
    }

    /** 重写ScrollView内置函数 */
    protected _handleReleaseLogic(touch: Touch): void {
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
    protected _startAutoScroll(deltaMove: Vec3, timeInSecond: number, attenuated?: boolean, flag?: boolean): void {
        if (this.vList.isOpenPullHeader || this.vList.isOpenPullFooter) {  // 如果没有刷新/加载的监听者 则不计算 
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
    protected _updateScrollBar(outOfBoundary: Vec2 | Readonly<Vec2>): void {
        super._updateScrollBar(new Vec2(outOfBoundary.x, outOfBoundary.y));
        if (this._autoScrollBraking) return; // 自动回弹时不计算 （非手动）
        //console.log("是否惯性滚动" + this._autoScrolling)
        if (!this._autoScrolling) return; // 非自动滚动时不计算 
        if (!this.vList.isOpenPullHeader && !this.vList.isOpenPullFooter) return;
        let offset: number = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        let progress: number;
        if (offset > 0) { // 下滑
            progress = offset < this.EPSILON ? 0 : offset / this.vList.pullOffset; //根据参数 headerOutOffset 计算当前下滑的办百分比
            if (this._isPullLockHeader) {
                this._pullHeaderProgress = this._pullHeaderProgress == 1 ? this._pullHeaderProgress : Math.max(progress, 1);
                this.vList.callPullHeader(false, this._pullHeaderProgress, PullStateType.LOCK);
            } else {
                this._pullHeaderProgress = progress < this._pullHeaderProgress ? progress : this._pullHeaderProgress;
                this.vList.callPullHeader(false, this._pullHeaderProgress, PullStateType.CANCEL);
            }
        } else if (offset < 0) {
            progress = -offset < this.EPSILON ? 0 : -offset / this.vList.pullOffset;  //根据参数 pullOffset 计算当前下滑的办百分比
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
    public get isOutOfBoundary(): boolean {
        return this._isOutOfBoundary();
    }

    /**
     * 获取本次滑动目标列表
     */
    private getRollTarget(event: EventTouch, captureListeners?: Node[]): Node {
        let cache: Node = event.target[`__RollTarget`];
        if (cache) return cache;

        let nodes: Node[] = [event.target];
        if (captureListeners) nodes = nodes.concat(captureListeners);
        if (nodes.length == 1) return nodes[0];

        let touch: Touch = event.touch;
        let deltaMove: Vec2 = touch.getLocation().subtract(touch.getStartLocation());
        let x: number = Math.abs(deltaMove.x);
        let y: number = Math.abs(deltaMove.y);
        let distance: number = Math.abs(x - y);
        if (distance < 5) return null;

        let result: Node = null;
        for (let node of nodes) {
            let rollView = node.getComponent(RollView);
            if (rollView) {
                if (result == null) result = node; // 取第一个滚动组件作为默认响应者
                if ((rollView.horizontal && x > y) || (rollView.vertical && y > x)) {
                    result = node;
                    break;
                }
            }
        }
        
        if (result) {
            for (let node of nodes) {
                node[`__RollTarget`] = result;
            }
        }
        return result;
    }

    /** 
     * 自动滚到页 
     */
    private autoScrollToPage(): void {
        let bounceBackStarted: boolean = this._startBounceBackIfNeeded();
        let pageIndex: number = this.vList.getSelectIndex();
        if (bounceBackStarted) {
            const bounceBackAmount: Vec3 = this._getHowMuchOutOfBoundary();
            this._clampDelta(bounceBackAmount);
            if (this.horizontal) {
                if (bounceBackAmount.x < 0) {
                    pageIndex = 0;
                } else if(bounceBackAmount.x > 0) {
                    pageIndex = this.vList.cellCount > 0 ? this.vList.cellCount - 1 : 0;
                }
            } else {
                if (bounceBackAmount.y > 0) {
                    pageIndex = 0;
                } else if(bounceBackAmount.y < 0) {
                    pageIndex = this.vList.cellCount > 0 ? this.vList.cellCount - 1 : 0;
                }
            }
        } else {
            let moveOffset: Vec2 = new Vec2();
            Vec2.subtract(moveOffset, this._touchBeganPos, this._touchEndPos);
            let index: number = pageIndex;
            let nextIndex: number = index + this.getDragPageNum(moveOffset);
            let timeInSecond: number = 0.3 * Math.abs(index - nextIndex);
            if (nextIndex < this.vList.cellCount) {
                if (this.isScrollable(moveOffset, index, nextIndex)) {
                    this.vList.selectIndex(nextIndex, timeInSecond);
                    return;
                } else {
                    let touchMoveVelocity = this._calculateTouchMoveVelocity();
                    if (this.isQuicklyScrollable(touchMoveVelocity)) {
                        this.vList.selectIndex(nextIndex, timeInSecond);
                        return;
                    }
                }
            }
            this.vList.selectIndex(index, timeInSecond);
        }
    }

    /** 是否超过自动滚动临界值 */
    private isScrollable(offset: Vec2, index: number, nextIndex: number): boolean {
        if (this.horizontal) {
            return Math.abs(offset.x) >= this.view.width * this.SCROLL_THRESHOLd;
        } else {
            return Math.abs(offset.y) >= this.view.height * this.SCROLL_THRESHOLd;
        }
    }

    /** 判断是否快速滑动 */
    private isQuicklyScrollable(touchMoveVelocity: Vec3): boolean {
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
    private getDragPageNum(moveOffset: Vec2): number {
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
    cancelPullState(): void {
        this.vList.callPullHeader(false, 0, PullStateType.CANCEL);
        this.vList.callPullFooter(false, 0, PullStateType.CANCEL);
    }

    /** 
     * 重置拉取更多各种状态 
    */
    resetPullState(): void {
        this._isPullMoveHeader = false;
        this._isPullMoveFooter = false;
        if (this._isPullLockHeader || this._isPullLockFooter) {
            this.cancelPullState();
            this._isPullLockHeader = false;
            this._isPullLockFooter = false;
        }
    }
}
export class CellInfo {
    private _name: string;
    private _index: number;
    private _isSelect: boolean = false;
    private _frame: math.Rect = new math.Rect();
    constructor(){
        
    }
    set name(value: string) {
        this._name = value;
    }

    get name(): string {
        return this._name;
    }

    set index(value: number) {
        this._index = value;
    }

    get index(): number {
        return this._index;
    }

    set isSelect(value: boolean) {
        this._isSelect = value;
    }

    get isSelect(): boolean {
        return this._isSelect;
    }

    get frame(): math.Rect { 
        return this._frame; 
    }
    
    get cellName(): string {
        return `${this.name}_${this._index}`;
    }
}