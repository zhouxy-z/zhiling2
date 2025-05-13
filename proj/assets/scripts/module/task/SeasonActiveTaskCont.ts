import { Button, Component, Input, instantiate, Label, Node, ProgressBar, Sprite, SpriteFrame, UITransform, v3, Vec3 } from "cc";
import { CfgMgr, StdTask } from "../../manager/CfgMgr";
import { SPlayerDataTask } from "../player/PlayerStruct";
import { PlayerData } from "../player/PlayerData";
import { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { EventMgr, Evt_TaskShowBoxTips } from "../../manager/EventMgr";
import { DateUtils } from "../../utils/DateUtils";
import { ResMgr } from "../../manager/ResMgr";

export class SeasonActiveTaskCont extends Component {
    private proBar:ProgressBar;
    private tips_lab:Label;
    private lv:Label;
    private time:Label;
    private expNum:Label;
    private maxExp:Label;
    private proNum:Label;
    private boxItemTemp:Node;
    private box:Sprite
    
    private isInit:boolean;
    private datas:SPlayerDataTask[];
    private curNum:number;
    private maxNum:number;
    private chapt_cfg_data:StdTask;
    protected onLoad(): void {
        this.proBar = this.node.getChildByName("proBar").getComponent(ProgressBar);
        this.tips_lab = this.node.getChildByPath("tipsCont/lab").getComponent(Label);
        this.lv = this.node.getChildByName("lv").getComponent(Label);
        this.time = this.node.getChildByName("time").getComponent(Label);
        this.expNum = this.node.getChildByPath("expNode/expNum").getComponent(Label);
        this.maxExp = this.node.getChildByPath("expNode/maxExp").getComponent(Label);
        this.box = this.node.getChildByPath("boxItemTemp/box").getComponent(Sprite);
        this.proNum = this.node.getChildByPath("boxItemTemp/check/progreed/proNum").getComponent(Label);
        this.boxItemTemp = this.node.getChildByName("boxItemTemp");
        this.boxItemTemp.on(Input.EventType.TOUCH_END, this.onBtnClick, this);
      
        this.isInit = true;
        this.updateShow();
    }

    /**
     * 设置角色数据
     * @param roleId 
     */
    SetData(datas:SPlayerDataTask[], name:string, chapt_cfg_data:StdTask) {
        let count = 0
        for (let index = 0; index < datas.length; index++) {
            const element = datas[index];
            if(PlayerData.GetTaskState(element) == 1){
                count++;
            }
        }
        this.datas = datas || [];1111
        this.tips_lab.string = name;
        this.curNum = count;
        this.maxNum = datas.length;
        this.chapt_cfg_data = chapt_cfg_data;
        this.updateShow();
    }

    private updateShow():void{
        if (!this.isInit || !this.datas) return;
        let taskData:SPlayerDataTask;
        let stsTask:StdTask;
        let lv = 0;
        let exp = 0;
        let max_exp = 100
        this.expNum.string = exp + "/";
        this.maxExp.string = max_exp + "";
        this.lv.string = "Lv." + lv + "";  
        let tempNum:number = this.curNum;
        if(this.curNum > this.maxNum){
            tempNum = this.maxNum;
        }
        this.proNum.string = tempNum + "/" + this.maxNum;
        this.proBar.progress = exp / max_exp;
        let data = PlayerData.player.tasks[this.chapt_cfg_data.TopTask]
        let task_state = 3
        if(data){
            task_state =  PlayerData.GetTaskState(data)
        }
        console.log(PlayerData.GetCurSeasonEndTime())
        let time = PlayerData.GetCurSeasonEndTime() - DateUtils.ServerTime
        if(time > 86400){
            this.time.string = DateUtils.FormatTime(time,{S: "%{s}秒", M: "%{m}分%{s}秒",H: "%{h}时%{m}分%{s}秒",D:"%{d}天"});
        }   
        let url = "sheets/task/seasonBox/spriteFrame"
        if(task_state == 1){
            url = "sheets/task/box_open/spriteFrame"
        }
        ResMgr.LoadResAbSub(url, SpriteFrame, res=>{
            this.box.spriteFrame = res;
        })
    }

    private onBtnClick(): void {
        let data = PlayerData.player.tasks[this.chapt_cfg_data.TopTask]
        let task_state = 3
        if(data){
            task_state =  PlayerData.GetTaskState(data)
        }
        if (task_state == 2) {
            let send_task = new Req["player.protocol.completetask"]();
            send_task.taskId = this.chapt_cfg_data.TaskId;
            send_task.server = PlayerData.server;
            Session.Send(Route["player.protocol.completetask"], send_task);
        } else {
            let tipsW: number = 382;
            let itemPos = this.boxItemTemp.worldPosition.clone();
            let showPos: Vec3;
            let offset: number = tipsW / 2 + itemPos.x;
            if (offset > 1450) {
                offset = 1450 - tipsW / 2;
            } else {
                offset = itemPos.x;
            }
            showPos = new Vec3(offset, itemPos.y - 197, 0);
            EventMgr.emit(Evt_TaskShowBoxTips, this.chapt_cfg_data, showPos, this.boxItemTemp);
        }

    }

    protected update(dt: number): void {
        let endTime: number = PlayerData.GetCurSeasonEndTime();
        let time = endTime - DateUtils.ServerTime
        if (time < 86400) {
            if(time >= 0){
                this.time.string = DateUtils.FormatTime(time, "%{hh}:%{mm}:%{ss}");
            }else{
                this.time.string = "";
            }
        }
    }
}
