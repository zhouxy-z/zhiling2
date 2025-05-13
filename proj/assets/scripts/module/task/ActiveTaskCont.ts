import { Button, Component, instantiate, Label, Node, ProgressBar, UITransform, v3 } from "cc";
import { TaskActiveBoxItem } from "./TaskActiveBoxItem";
import { CfgMgr, StdTask } from "../../manager/CfgMgr";
import { SPlayerDataTask } from "../player/PlayerStruct";

export class ActiveTaskCont extends Component {
    private activeNumLab:Label;
    private proBar:ProgressBar;
    private tipsCont:Button;
    private boxCont:Node;
    private boxItemTemp:Node;
    private isInit:boolean;
    private activeType:number;
    private datas:SPlayerDataTask[];
    private boxList:Node[];
    private curNum:number;
    private maxNum:number;
    protected onLoad(): void {
        this.activeNumLab = this.node.getChildByName("activeNumLab").getComponent(Label);
        this.proBar = this.node.getChildByName("proBar").getComponent(ProgressBar);
        this.tipsCont = this.node.getChildByName("tipsCont").getComponent(Button);
        this.boxCont = this.node.getChildByName("boxCont");
        this.boxItemTemp = this.node.getChildByPath("boxCont/boxItemTemp");
        this.isInit = true;
        this.updateShow();
    }

    /**
     * 设置角色数据
     * @param roleId 
     */
    SetData(activeType:number, datas:SPlayerDataTask[], curNum:number, maxNum:number) {
        this.activeType = activeType;
        this.datas = datas || [];
        this.curNum = curNum;
        this.maxNum = maxNum;
        this.updateShow();
    }

    private updateShow():void{
        if (!this.isInit || !this.activeType || !this.datas) return;
        let len:number = this.datas.length;
        let maxLen = this.datas.length;
        let boxNode:Node;
        let boxItem:TaskActiveBoxItem;
        let taskData:SPlayerDataTask;
        let stsTask:StdTask;
        let boxX:number = 0;
        let barTrans:UITransform = this.proBar.node.getComponent(UITransform);
        this.boxCont.removeAllChildren();
        for (let index = 0; index < maxLen; index++) {
            boxNode = instantiate(this.boxItemTemp);
            taskData = this.datas[index];
            stsTask = CfgMgr.GetTaskByData(taskData);
            boxX = barTrans.width * (stsTask.CompletionNum / this.maxNum);
            boxNode.active = true;
            boxNode.position = v3(boxX, 0, 0);
            boxItem = boxNode.getComponent(TaskActiveBoxItem);
            if(!boxItem) boxItem = boxNode.addComponent(TaskActiveBoxItem);
            boxItem.SetData(taskData,  index);
            this.boxCont.addChild(boxNode);
        }
        let tempNum:number = this.curNum;
        if(this.curNum > this.maxNum){
            tempNum = this.maxNum;
        }
        this.activeNumLab.string = "已完成" + tempNum + "/" + this.maxNum;
        this.proBar.progress = this.curNum / this.maxNum;
    }
}
