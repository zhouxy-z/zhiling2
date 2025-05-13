import { _decorator, Component, Node, NodePool } from 'cc';
import { DragDropMgr, IDragData, IDragDropEvent } from '../manager/DragDropMgr';
import { DragDropGrid } from './DragDropGrid';
import { instantiate } from 'cc';
const { ccclass, property } = _decorator;
export interface IGridData {
    id:number;
}
@ccclass('DragDropExample')
export class DragDropExample extends Component implements IDragDropEvent {
    
    @property({ type: Node})
    grid1:Node;

    @property({ type: Node})
    grid2:Node;

    @property({ type: Node})
    dragLayer:Node;

    @property({ type: Node})
    tempAgent:Node;

    private nodePool:NodePool = new NodePool();
    start() {
        DragDropMgr.on(this, this.dragLayer);
        let id: number = 1;
        for (let index = 0; index < this.grid1.children.length; index++) {
            const element = this.grid1.children[index];
            const com:DragDropGrid = element.addComponent(DragDropGrid);
            DragDropMgr.addDragNode(com.node);
            DragDropMgr.addDropNode(com.node);
            com.setData({id:id});
            id ++;
        }
        let node: Node = this.grid2.children[0];
        for (let index = 0; index < node.children.length; index++) {
            const element = node.children[index];
            const com:DragDropGrid = element.addComponent(DragDropGrid);
            DragDropMgr.addDragNode(com.node);
            DragDropMgr.addDropNode(com.node);
            com.setData({id:id});
            id ++;
        }
        
    }

    update(deltaTime: number) {
        
    }
    onDrag(dragData: IDragData): void {
        
    }
    onDrop(dropNode: Node, dragData: IDragData): void {
        if (dropNode){
            dragData.dragNode.parent = dropNode;
            dragData.dragNode.position = dragData.dragNodePos;
            let icon:Node = dragData.dragParentNode.getChildByName("icon");
            this.nodePool.put(icon);
        }else{
            this.nodePool.put(dragData.dragNode);
        }
        
    }

    chekIsCanDrag(node: Node): boolean {
        let icon: Node = node.getChildByName("icon");
        return icon != null;
    }

    creatDragNode(node: Node): IDragData {
        let dragAgent = this.nodePool.get() || instantiate(this.tempAgent);
        dragAgent.name = "icon";
        let icon: Node = node.getChildByName("icon");
        let dragData: IDragData<IGridData> = {
            dragNode: dragAgent,
            dragNodePos: icon.position.clone(),
            dragParentNode: node,
            isAgent:true,
        };
        return dragData;
    }
}


