import { Node, EventTouch, UITransform, Vec2, Vec3, Rect, v3, Mat4} from "cc";
export interface IDragData <T = any> {
    /**
     * 拖拽目标
     */
    dragNode: Node;
    /**
     * 拖拽目标原坐标
     */
    dragNodePos?: Vec3;
    /** 
     * 拖拽父节点
     */
    dragParentNode?: Node;
    /**
     * 是否使用代理(代理就instantiate一个节点作为拖拽节点)
     */
    isAgent?:boolean;
    /**
     * 拖拽数据
     */
    data?: T;
}
export interface IDragDropEvent {
    /**
     * 拖拽开始
     * @param event 
     */
    onDragBegin?(event: EventTouch): void;

    /**
     * 拖拽移动
     * @param event 
     */
    onDragMove?(event: EventTouch): void;

    /**
     * 拖拽结束
     * @param event 
     */
    onDragEnd?(event: EventTouch): void;
    
    /**
     * 拖拽取消
     * @param event 
     */
    onDragCancel?(event: EventTouch): void;

    /**
     * 检查目标是否可拖拽
     * @param node 触摸节点
     */
    chekIsCanDrag(node: Node): boolean;

    /**
     * 创建拖拽目标
     * @param node 拖拽目标()
     */
    creatDragNode(node:Node): IDragData;

    /**
     * 拖拽
     * @param dragData 拖拽数据
     */
    onDrag?(dragData:IDragData): void;

    /**
     * 放下
     * @param dropNode 放下的节点
     * @param dragData 拖拽数据
     */
    onDrop(dropNode: Node, dragData:IDragData): void;

    
}

/**
 * 拖拽管理器
 */
export class DragDropMgr {
    private static _dragDropEvent: IDragDropEvent;//拖拽接口监听者
    private static _dragData: IDragData = null; //拖拽节点数据
    private static _isCanDrag: boolean = false; //临时记录触摸的节点是否可拖拽
    private static _dragNode: Node = null; //拖拽节点
    private static _curTouchNode: Node = null; //当前触摸节点
    private static _canDropNodeList: Node[] = []; //可放下节点列表
    private static _canDragNodeList: Node[] = []; //可拖拽节点列表
    private static _dragLayer: Node = null; //拖拽层
    private static _dragLayerTrans: UITransform = null; //拖拽层变换组件
    private static _tempTouchStartPos: Vec2 = new Vec2(); //临时记录开始触摸位置
    private static _isTouch: boolean = false; //是否有触摸
    private static _isDragging: boolean = false; //是否拖动中
    private static _tempLocalMatrix: Mat4 = new Mat4(); //临时记录节点的本地矩阵
    private static _tempWorldMatrix: Mat4 = new Mat4(); //临时记录节点的世界矩阵

    /**
     * 注册监听
     * @param target 监听者
     * @param dragLayer 拖拽层
     */
    public static on(target: IDragDropEvent, dragLayer: Node): void {
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
    public static off(target: IDragDropEvent): void {
        this._dragLayer.off(Node.EventType.TOUCH_START, this.onTouchBegin, this);
        this._dragLayer.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this._dragLayer.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this._dragLayer.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    private static onTouchBegin(event: EventTouch): void {
        event.preventSwallow = true;
        this._isTouch = true;
        this._dragDropEvent?.onDragBegin?.(event);
        let pos: Vec2 = event.getUILocation();
        this._tempTouchStartPos.set(pos);
        let touchNode: Node = this.getTouchNode(event);
        //无触摸目标事件派发给渲染在下一层级的节点
        if (!touchNode) {
            return;
        } 
        //console.log("----->" + touchNode.name)
        this._isCanDrag = this._dragDropEvent?.chekIsCanDrag(touchNode) ?? false;
        //不可拖拽事件派发给渲染在下一层级的节点
        if (!this._isCanDrag) {
            //event.preventSwallow = true;
            return;
        }
        //event.preventSwallow = false; //可以拖拽则吞噬掉事件
        this._curTouchNode = touchNode;
        this._isDragging = false;
    }

    private static onTouchMove(event: EventTouch): void {
        if (this._isCanDrag) {
            event.preventSwallow = false;//可拖拽则吞噬事件
            if (!this._isDragging && this._isTouch) {
                let pos = event.getUILocation();
                //拖动一定范围才算是拖拽
                if (Math.abs(this._tempTouchStartPos.x - pos.x) < 10 && 
                    Math.abs(this._tempTouchStartPos.y - pos.y) < 10) {
                    return;
                }
                this._isDragging = true;
            }
            if (this._isDragging) {
                //console.log("拖拽中----->")
                if (!this._dragNode || !this._dragNode.parent){
                    this._dragData = this._dragDropEvent?.creatDragNode(this._curTouchNode);
                    this._dragNode = this._dragData.dragNode;
                    this._dragNode.parent = this._dragLayer;
                    this._dragNode.position = this._dragLayerTrans.convertToNodeSpaceAR(v3(this._tempTouchStartPos.x, this._tempTouchStartPos.y));
                    this._dragDropEvent?.onDrag(this._dragData);
                    //console.log("添加拖拽节点----->")
                }
                let delta = event.getUIDelta();
                this._dragNode.position = this._dragNode.position.add(v3(delta.x, delta.y, 0));
                this._dragDropEvent?.onDragMove?.(event);
            }
        } else {
            event.preventSwallow = true;//无拖拽则传入事件下层节点
        }
    }

    private static onTouchEnd(event: EventTouch): void {
        //拖拽中则吞噬事件
        if (this._isDragging) {
            event.preventSwallow = false;
            this._dragDropEvent?.onDragEnd?.(event);
            this.onDragEnd();
        } else {
            event.preventSwallow = true;
        }
        this._isCanDrag = false;
        this._isTouch = false;
        this._isDragging = false;
    }

    private static onTouchCancel(event: EventTouch): void {
        if (this._isDragging) {
            event.preventSwallow = false;
            this._dragDropEvent?.onDragCancel?.(event);
            this.onDragEnd();
        } else {
            event.preventSwallow = true;
        }
        this._isCanDrag = false;
        this._isTouch = false;
        this._isDragging = false;
    }

    private static onDragEnd(): void {
        if (!this._dragData || !this._dragNode) return;
        let resultCont: Node = null;
        let tempCont: Node;
        for (let i = 0; i < this._canDropNodeList.length; i++) {
            tempCont = this._canDropNodeList[i];
            if (this.isIntersects(tempCont, this._dragNode)) {
                resultCont = tempCont;
                break;
            }
        }
        this._dragDropEvent?.onDrop(resultCont, this._dragData);
        this._dragNode = null;
        this._dragData = null;
    }

    /**
     * 获取触摸的目标节点
     * @param event 
     * @returns 
     */
    private static getTouchNode(event: EventTouch): Node {
        let touchPos: Vec2 = event.getUILocation();
        let pos = event.target.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(touchPos.x, touchPos.y));
        let target: Node;
        let targetTrans: UITransform;
        let targetBox: Rect;
        for (let index = 0; index < this._canDragNodeList.length; index++) {
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
    private static isIntersects(dargNode: Node, dropNode: Node): boolean {
        let dragBox: Rect = this.getWorldBox(dargNode);
        let dropBox: Rect = this.getWorldBox(dropNode);
        return dropBox.intersects(dragBox);
    }

    /**
     * 获取节点的世界包围合
     * @param node 
     * @returns 
     */
    private static getWorldBox(node: Node): Rect {
        node.parent.getWorldMatrix(this._tempWorldMatrix);
        Mat4.fromSRT(this._tempLocalMatrix, node.getRotation(), node.getPosition(), node.getScale());
        let trans: UITransform = node.getComponent(UITransform);
        let box: Rect = new Rect(
            -trans.anchorPoint.x * trans.width,
            -trans.anchorPoint.y * trans.height,
            trans.width,
            trans.height,
        );
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
    public static addDragNode(node: Node): void {
        if (this._canDragNodeList.indexOf(node) >= 0) return;
        this._canDragNodeList.push(node);
    }

    /**
     * 移除一个拖拽节点
     * @param node 
     */
    public static removeDragNode(node: Node): void {
        let index: number = this._canDragNodeList.indexOf(node);
        if (index >= 0) {
            this._canDragNodeList.splice(index, 1);
        }
    }

    /**
     * 添加放下放下节点
     * @param node 
     */
    public static addDropNode(node: Node): void {
        this._canDropNodeList.push(node);
    }

    /**
     * 移除放下节点
     * @param node 
     */
    public static removeDropNode(node: Node): void {
        let idx = this._canDropNodeList.indexOf(node);
        this._canDropNodeList.splice(idx, 1);
    }

    /**
     * 清理全部放下节点
     */
    public static clearAllDropNode(): void {
        this._canDropNodeList.length = 0;
    }
    
    /**
     * 清理全部拖拽节点
     */
    public static clearAllDragNode(): void {
        this._canDragNodeList.length = 0;
    }
    
    /**
     * 清理全部
     */
    public static clear(): void {
        this.clearAllDragNode();
        this.clearAllDropNode();
        this.off(null);
        this.onDragEnd();
        this._dragDropEvent = null;
        this._isCanDrag = false;
        this._isDragging = false;
        this._isTouch = false;
    }

    
}