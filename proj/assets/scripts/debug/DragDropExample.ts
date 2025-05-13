import { _decorator, Component, Node } from 'cc';
import { DragDropMgr, IDragData, IDragDropEvent } from '../manager/DragDropMgr';
import { DragDropGrid } from './DragDropGrid';
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

        for (let index = 0; index < this.grid2.children.length; index++) {
            const element = this.grid2.children[index];
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
        }else{
            dragData.dragNode.parent = dragData.dragParentNode;
            dragData.dragNode.position = dragData.dragNodePos;
        }
        
    }

    chekIsCanDrag(node: Node): boolean {
        let icon: Node = node.getChildByName("icon");
        return icon != null;
    }

    creatDragNode(node: Node): IDragData {
        let dragNode: Node = node.getChildByName("icon");
        let dragData: IDragData<IGridData> = {
            dragNode: dragNode,
            dragNodePos: dragNode.position.clone(),
            dragParentNode: node,
        };
        return dragData;
    }
}


