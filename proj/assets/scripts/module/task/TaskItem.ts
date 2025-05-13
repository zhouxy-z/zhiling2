import { Button, Color, Component, EventKeyboard, Label, Layout, Node, Tween, TweenSystem, UITransform, tween } from "cc";
import { CfgMgr, StdTask, ThingTypeName } from "../../manager/CfgMgr";
import { Session } from "../../net/Session";
import { AutoScroller } from "../../component/AutoScroller";
import { SPlayerDataTask, STaskType } from "../player/PlayerStruct";
import proto, { Req, Route } from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { ItemUtil } from "../../utils/ItemUtils";
import { BagItem } from "../bag/BagItem";
import { Goto } from "../../DL";
import { Utils } from "../../utils/Utils";

export class TaskItem extends Component {
    private nameLab: Label;
    private proLab: Label;
    private proLab2: Label;
    private progress: Node;
    private awardList: AutoScroller;
    private goBtn: Button;
    private getBtn: Button;
    private activeNumLab: Label;
    private getdLab: Node;
    private timelab: Label;
    private isInit: boolean = false;
    private std: StdTask;
    private data: SPlayerDataTask;
    private awList: proto.base.IThing[] = [];
    protected onLoad(): void {
        this.nameLab = this.node.getChildByPath("unLockNode/nameLab").getComponent(Label);
        this.proLab = this.node.getChildByPath("unLockNode/Node/proLab").getComponent(Label);
        this.proLab2 = this.node.getChildByPath("unLockNode/Node/lab").getComponent(Label);
        this.awardList = this.node.getChildByPath("unLockNode/awardList").getComponent(AutoScroller);
        this.goBtn = this.node.getChildByPath("unLockNode/goBtn").getComponent(Button);
        this.getBtn = this.node.getChildByPath("unLockNode/getBtn").addComponent(Button);
        this.activeNumLab = this.node.getChildByPath("unLockNode/activeNumLab").getComponent(Label);
        this.getdLab = this.node.getChildByPath("unLockNode/getdLab");
        this.timelab = this.node.getChildByPath("lockNode/timelab").getComponent(Label);
        this.progress = this.node.getChildByPath("unLockNode/taskProgress/progress");
        this.awardList.SetHandle(this.updateAwardItem.bind(this));
        this.awardList.node.on('select', this.onSelect, this);
        this.goBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.getBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.isInit = true;
        this.updateShow();
    }

    SetData(data: SPlayerDataTask) {
        this.data = data;
        this.updateShow();

    }
    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.goBtn:
                if(this.std.Win){
                    let fetchs = CfgMgr.Get("fetch");
                    let stdFetch = fetchs[this.std.Win];
                    if(stdFetch.Param){
                        Goto(stdFetch.Win, ...stdFetch.Param);
                    }else{
                        Goto(stdFetch.Win); 
                    }
                }  
                break;
            case this.getBtn:
                let send_task = new Req["player.protocol.completetask"]();
                send_task.taskId = this.std.TaskId;
                send_task.server = PlayerData.server;
                Session.Send(Route["player.protocol.completetask"], send_task);
                break;
        }
    }
    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        this.goBtn.node.active = false;
        this.getBtn.node.active = false;
        this.activeNumLab.node.active = false;
        this.getdLab.active = false
        this.timelab.node.parent.active = false;
        this.goBtn.node.parent.active = false;

        this.std = CfgMgr.GetTaskByData(this.data);
        this.nameLab.string = this.std.Description;

        
        let task_state = PlayerData.GetTaskState(this.data);
        let value = this.data.value ? (this.data.value > this.std.CompletionNum ? this.std.CompletionNum : this.data.value) : 0
        if(task_state == 2 || task_state == 1){
            value = this.std.CompletionNum;
        }
        
        this.proLab.string = `${value}/`;
        this.proLab2.string = `${this.std.CompletionNum}`;
        let pro = value / this.std.CompletionNum
        let max_width = this.progress.parent.getComponent(UITransform).width
        this.progress.getComponent(UITransform).width = max_width * (pro > 1 ? 1 : pro)
        if(task_state == 1){
            this.getdLab.active = true;
        }else if(task_state == 2){
            this.getBtn.node.active = true;
        }else{
            this.goBtn.node.active = true;
            Utils.SetNodeGray(this.goBtn.node, !this.std.Win)
        }
        if(this.std.TaskType == STaskType.season){
            let open_time = 0
            let lv = 0
            for (let index = 0; index < this.std.ConditionId.length; index++) {
                const element = this.std.ConditionId[index];
                if(element == 2){
                    open_time = this.std.ConditionValue[index] - 1;
                }else if(element == 1){
                    lv = this.std.ConditionValue[index]
                }
            }
            let day;
            let hour;
            let str = "";
            let seasontime = PlayerData.GetCurSeasonPastTTime();
            let time = open_time * 86400 - seasontime
            if(time > 3600){    
                day = Math.floor(time / (3600 * 24))
                hour = Math.floor((time % (3600 * 24)) / 3600);
                str = "在" + day + "天" + hour + "小时" + "后解锁";
            }

            let cur_lv = 100000
            if(cur_lv < lv){
                if(str.length > 0){
                    str = str + "并且收藏等级不小于" + lv;
                }else{
                    str = str + "收藏等级不小于" + lv;
                }
            }

            if(time < 3600 && time > 0){  
                let m = Math.floor(time / 60)
                let s = Math.floor(time % 60);
                str = "在" + m + "分" + s + "秒" + "后解锁";
                if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.timelab) > 0) {
                    Tween.stopAllByTarget(this.timelab);
                }
                tween(this.timelab).repeatForever(tween().delay(1).call(() => {
                    if(time - 1 <= 0){
                        Tween.stopAllByTarget(this.timelab);
                    }else{
                        time = time - 1
                        let m = Math.floor(time / 60)
                        let s = Math.floor(time % 60);
                        str = "在" + m + "分" + s + "秒" + "后解锁";
                        this.timelab.string = str;
                    }
                })).start();
            }
            
            if(str != ""){
                //不开放
                this.timelab.node.parent.active = true;
                this.timelab.string = str;
            }else{
                //开放
                this.goBtn.node.parent.active = true;
            }
            
        }else{
            this.goBtn.node.parent.active = true;
        }

        let list:proto.base.IThing[]  =  [];
        if (typeof  this.std.ActiveTaskValue == "number" && this.std.ActiveTaskValue > 0) {
            let a: proto.base.IThing = {type:ThingTypeName.Item, item:{id:202, count:this.std.ActiveTaskValue}}
            list.push(a);
        } 
        if (typeof  this.std.WeekActiveTaskValue == "number" && this.std.WeekActiveTaskValue > 0) {
            let a: proto.base.IThing = {type:ThingTypeName.Item, item:{id:203, count:this.std.WeekActiveTaskValue}}
            list.push(a);
        }
        if(this.std.TaskTypeData[1]){
            let a: proto.base.IThing = {type:ThingTypeName.Item, item:{id:201, count:this.std.TaskTypeData[1]}}
            list.push(a);
        }
        this.awList = ItemUtil.GetSThingList(this.std.RewardType, this.std.RewardID, this.std.RewardNumber);
        list = list.concat(...this.awList)
        this.awardList.UpdateDatas(list);
    }

    private updateAwardItem(item: Node, data: proto.base.IThing) {
        let awardItem = item.getComponent(BagItem);
        if (!awardItem) awardItem = item.addComponent(BagItem);
        awardItem.setThing(data);
    }
    protected async onSelect(index: number, item: Node) {
        // let selectData = this.awList[index];
        // if(selectData){
        //     ItemTips.Show(selectData);
        // }
    }
}