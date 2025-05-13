import { CfgMgr } from "../../manager/CfgMgr";
import { EventMgr, Evt_MainTaskChange, Evt_RefreshTaskChange, Evt_TaskChange } from "../../manager/EventMgr";
import { Ret, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { MsgPanel } from "../common/MsgPanel";
import { RewardTips } from "../common/RewardTips";
import { PlayerData } from "../player/PlayerData";
import { STaskShowType } from "../player/PlayerStruct";

enum TaskChangeType{
    TaskUpdate = 0,//更新任务，没有任务数据则添加
    TaskDel = 1,//删除任务
  }
export class TaskModule {

   
    constructor() {
        Session.on(Route.PlayerTasksChangedPush, this.onTaskChange, this);
        Session.on(Route["player.protocol.completetask"], this.onCompleteTask, this);
        Session.on(Route["logic.protocol.refreshdailytask"], this.onRefreshDailyTask, this)
        Session.on(Route.PlayerDailyTaskRefreshTimesChangePush, this.onRefreshDailyTaskPush, this)
        Session.on(Route["logic.protocol.getrefreshdailytasktimes"], this.onGetrefreshdailytasktimes, this)
    }


    private onTaskChange(data: any) {
        let task_data = Ret.PlayerTasksChangedPush.decode(data);
        // console.log("任务推送", task_data)
        for (const iterator of task_data.list) {
            if(iterator.mode && iterator.mode == TaskChangeType.TaskDel){
                delete PlayerData.player.tasks[iterator.data.id]
            }else{
                // console.log("任务变更", iterator)
                PlayerData.player.tasks[iterator.data.id] = iterator.data;
                let task_state = PlayerData.GetTaskState(iterator.data)
                let task_cfg = CfgMgr.GetTaskByData(iterator.data);
                if(task_state == 3 && task_cfg.isMainShow == 1){
                    PlayerData.change_task_list.push(iterator)
                }
            }
        }
        EventMgr.emit(Evt_MainTaskChange)
        EventMgr.emit(Evt_TaskChange);
    }
    private onCompleteTask(data: any):void{
        let task_data = Ret["player.protocol.completetask"].decode(data);
        // console.log("完成任务", task_data)
        if(task_data.res.code != 200){
            MsgPanel.Show("任务领取失败")
            return;
        }
        PlayerData.player.tasks[task_data.Data.id] = task_data.Data; 
        PlayerData.player.tasks[task_data.Data.id] = task_data.Data; 
        let datas = PlayerData.getTaskRewardThings(task_data.Data.end);
        RewardTips.Show(datas);
        EventMgr.emit(Evt_TaskChange);
    }

    private onRefreshDailyTask(data:any){
        let task_data = Ret["logic.protocol.refreshdailytask"].decode(data);
        // console.log(task_data)
        if(task_data.res.code != 200){
            MsgPanel.Show("刷新失败")
        }
    }

    private onRefreshDailyTaskPush(data:any){
        let task_data = Ret.PlayerDailyTaskRefreshTimesChangePush.decode(data);
        // console.log("手动刷新推送",task_data)
        let change = task_data.change ? task_data.change : 0;
        let changeBefore = task_data.changeBefore ? task_data.changeBefore : 0;
        PlayerData.taskRefreshCount = change + changeBefore;
        EventMgr.emit(Evt_RefreshTaskChange);
    }

    
    private onGetrefreshdailytasktimes(data:any){
        let task_data = Ret["logic.protocol.getrefreshdailytasktimes"].decode(data);
        // console.log("次数",task_data)
        if(task_data.res.code == 200){
            PlayerData.taskRefreshCount = task_data.times;
            EventMgr.emit(Evt_RefreshTaskChange);
        }
    }
}