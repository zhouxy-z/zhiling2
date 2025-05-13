import { _decorator, Button, Component, EditBox, Label, Node, Size } from 'cc';
import { CellInfo, PullMoreInfo, PullStateType, VList } from '../component/VList';
const { ccclass, property } = _decorator;

@ccclass('VirtualListExample')
export class VirtualListExample extends Component {
    @property({ type: [Button]})
    btnList:Button[] = [];
    @property({ type: Button})
    setCountBtn:Button;
    @property({ type: EditBox})
    countEditBox:EditBox;
    @property({ type: Button})
    rollBtn:Button;
    @property({ type: EditBox})
    rollEditBox:EditBox;
    @property({ type: Button})
    selectBtn:Button;
    @property({ type: EditBox})
    selectEditBox:EditBox;

    @property({ type: Button})
    callBackBtn:Button;

    @property({ type: Node})
    panel:Node;

    @property({ type: Node})
    listNode:Node;

    private curList:VList;
    private curCount:number;

    start() {
        for (let index = 0; index < this.btnList.length; index++) {
            const btn = this.btnList[index];
            btn.node.on(Button.EventType.CLICK, this.onBtnClick, this)
        }
        this.setCountBtn.node.on(Button.EventType.CLICK, this.onClick, this);
        this.rollBtn.node.on(Button.EventType.CLICK, this.onClick, this);
        this.selectBtn.node.on(Button.EventType.CLICK, this.onClick, this);
        this.callBackBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.panel.active = false;

        let vList:VList = this.listNode.getChildByPath("vList").getComponent(VList);
        vList.updateCell = (cell: Node, cellInfo: CellInfo)=>{
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
        }
        vList.selectCell = (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo)=>{
            if(cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if(lastCell && lastInfo)lastCell.getChildByName("select").active = lastInfo.isSelect;
        }

        let vListPage:VList = this.listNode.getChildByPath("vListPage").getComponent(VList);
        vListPage.updateCell = (cell: Node, cellInfo: CellInfo)=>{
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
        }
        

        let vGrid:VList = this.listNode.getChildByPath("vGrid").getComponent(VList);
        vGrid.updateCell = (cell: Node, cellInfo: CellInfo)=>{
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
        }
        vGrid.selectCell = (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo)=>{
            if(cell)cell.getChildByName("select").active = cellInfo.isSelect;
            if(lastCell && lastInfo)lastCell.getChildByName("select").active = lastInfo.isSelect;
        }


        let vPullHead:VList = this.listNode.getChildByPath("vPullHead").getComponent(VList);
        let vPullHeadNode:Node = this.listNode.getChildByPath("vPullHead").getChildByPath("view/head");
        vPullHeadNode.active = false;
        vPullHead.updateCell = (cell: Node, cellInfo: CellInfo)=>{
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
        }
        vPullHead.selectCell = (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo)=>{
            if(cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if(lastCell && lastInfo)lastCell.getChildByName("select").active = lastInfo.isSelect;
        }

        vPullHead.updatePullHeader = (pullInfo: PullMoreInfo)=>{
            vPullHeadNode.active = true;
            let label = vPullHeadNode.getChildByName("lab").getComponent(Label);
            if (pullInfo.state == PullStateType.GO_ON) {
                label.string = "↓ 继续下拉"
            } else if (pullInfo.state == PullStateType.LET_GO) {
                label.string = "↑ 松开刷新"
            } else if (pullInfo.state == PullStateType.LOCK) {
                label.string = "刷新中..."
            } else if (pullInfo.state == PullStateType.CANCEL) {
                label.string = ""
                vPullHeadNode.active = false;
            }
            if(pullInfo.isAction){
                this.scheduleOnce(() => {
                    vPullHead.cellCount = 10;
                    vPullHeadNode.active = false;
                }, 1);
            }
        }

        let vPullFooter:VList = this.listNode.getChildByPath("vPullFooter").getComponent(VList);
        let vPullFooterNode:Node = this.listNode.getChildByPath("vPullFooter").getChildByPath("view/footer");
        vPullFooterNode.active = false;
        vPullFooter.updateCell = (cell: Node, cellInfo: CellInfo)=>{
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
        }
        vPullFooter.selectCell = (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo)=>{
            if(cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if(lastCell && lastInfo)lastCell.getChildByName("select").active = lastInfo.isSelect;
        }

        vPullFooter.updatePullFooter = (pullInfo: PullMoreInfo)=>{
            vPullFooterNode.active = true;
            let label = vPullFooterNode.getChildByName("lab").getComponent(Label);
            if (pullInfo.state == PullStateType.GO_ON) {
                label.string = "↑ 继续上拉"
            } else if (pullInfo.state == PullStateType.LET_GO) {
                label.string = "↓ 松开加载更多"
            } else if (pullInfo.state == PullStateType.LOCK) {
                label.string = "数据加载中..."
            } else if (pullInfo.state == PullStateType.CANCEL) {
                label.string = ""
                vPullFooterNode.active = false;
            }
            if(pullInfo.isAction){
                this.scheduleOnce(() => {
                    this.curCount++;
                    vPullFooter.cellCount = this.curCount;
                    vPullFooterNode.active = false;
                }, 1);
            }
        }

        let nestVHList:VList = this.listNode.getChildByPath("nestVHList").getComponent(VList);
        nestVHList.updateCell = (cell: Node, cellInfo: CellInfo)=>{
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
            let subList:VList = cell.getChildByName("subList").getComponent(VList);
            subList.updateCell = (cell: Node, cellInfo: CellInfo)=>{
                cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            }
            subList.cellCount = 100;
        }
        

        let multList:VList = this.listNode.getChildByPath("multList").getComponent(VList);
        multList.updateCell = (cell: Node, cellInfo: CellInfo)=>{
            cell.getChildByName("indexLab").getComponent(Label).string = cellInfo.index + "";
            cell.getChildByName("select").active = cellInfo.isSelect;
        }

        multList.getCellName = (index: number) => {
            let min = Math.ceil(1);
            let max = Math.floor(3);
            let num:number = Math.floor(Math.random() * (max - min + 1)) + min;
            return "multItem" + num;
        }

        multList.getCellSize = (cell:Node, index:number) => {
            let min = Math.ceil(60);
            let max = Math.floor(200);
            let num:number = Math.floor(Math.random() * (max - min + 1)) + min;
            let cellSize: Size = new Size(640, 160 + num);
            return cellSize;
        }
        
    }

    update(deltaTime: number) {
        
    }

    private onBtnClick(btn:Button):void{
        if(btn.node.name == "callBackBtn"){
            this.panel.active = false;
            return;
        }
        this.curCount = 0;
        this.panel.active = true;
        let name:string = btn.node.name;
        let showIndex:number = -1;
        for (let index = 0; index < this.listNode.children.length; index++) {
            const element = this.listNode.children[index];
            if (showIndex < 0 && element.name == name) {
                showIndex = index;
            }
            element.active = false;
        }
        let curPanel:Node = this.listNode.children[showIndex];
        curPanel.active = true;
        this.setPanel(curPanel);
    }

    private onClick(btn:Button):void{
        switch(btn){
            case this.setCountBtn:
                this.curCount = Number(this.countEditBox.string);
                this.curList.cellCount = this.curCount;
                break;
            case this.rollBtn:
                this.curList.scrollToIndex(Number(this.rollEditBox.string));
                break;
            case this.selectBtn:
                this.curList.selectIndex(Number(this.selectEditBox.string));
                break;
        }
    }

    private setPanel(panel:Node):void{
        this.curList = panel.getComponent(VList);
        this.curCount = 0;
        this.curList.cellCount = 0;
    }
}


