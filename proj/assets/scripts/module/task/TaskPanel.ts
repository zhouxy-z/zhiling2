import { Label, Node, Toggle, Widget, Vec3, js, Button, Input, instantiate, Sprite, SpriteFrame, path} from "cc";
import { EventMgr, Evt_Hide_Scene, Evt_NextDay, Evt_RefreshTaskChange, Evt_Show_Scene, Evt_TaskChange, Evt_TaskShowBoxTips } from "../../manager/EventMgr";
import { ActiveTaskCont } from "./ActiveTaskCont";
import { TaskItem } from "./TaskItem";
import { DateUtils } from "../../utils/DateUtils";
import { TaskActiveBoxTipsCont } from "./TaskActiveBoxTipsCont";
import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { SPlayerDataTask, STaskState, STaskType } from "../player/PlayerStruct";
import { CfgMgr, ItemType, StdCommonType, StdTask, StdTaskSeason } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import proto, { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { ItemUtil } from "../../utils/ItemUtils";
import { ClickTipsPanel } from "../common/ClickTipsPanel";
import { MsgPanel } from "../common/MsgPanel";
import { SeasonActiveTaskCont } from "./SeasonActiveTaskCont";
import { ResMgr, folder_icon, folder_item } from "../../manager/ResMgr";
enum TaskTabType {
    Page_Daily,//日常任务
    Page_Tyro,//新手任务
    Page_Season,//赛季任务
};
export class TaskPanel extends Panel {
    protected prefab: string = "prefabs/task/TaskPanel";
    private navBtns:Node[];
    private activeTaskCont:ActiveTaskCont;//活跃任务
    private seasonActiveTaskCont:SeasonActiveTaskCont;//赛季章节任务
    private taskList: AutoScroller;
    private noneListCont:Node;
    private timeCont:Node;
    private timeLab: Label;
    private weektimeLab: Label;
    private refreshBtn: Node;
    private max: Node;
    private content:Node;
    private clone_item:Node;
    private banner:Sprite
    private task_count:Label;

    private weekActiveTaskList:SPlayerDataTask[];//每周活跃任务
    private dayTaskList:SPlayerDataTask[];//每日任务
    private tyroTaskList:SPlayerDataTask[];//新手任务
    private seasonTaskList:SPlayerDataTask[];//成就任务

    private activeBoxTips:TaskActiveBoxTipsCont;
    private weekCurAcNum:number = 0;
    private weekMaxAcNum:number = 0;
    private page:number;
    private max_day_task_limit = 0

    private cfg_comm:any

    private refresh_cost = 0;
    private selectSeasonChapterId:number = 0
    private SeasonChapterCfg:StdTaskSeason[]

    protected onLoad() {
        this.navBtns = this.find("panel/navBar/view/content").children.concat();
        this.activeTaskCont = this.find("panel/activeTaskCont").addComponent(ActiveTaskCont);
        this.seasonActiveTaskCont = this.find("panel/seasonActiveTaskCont").addComponent(SeasonActiveTaskCont);
        this.taskList = this.find("panel/taskList", AutoScroller);
        this.banner = this.find("panel/banner",Sprite);
        this.noneListCont = this.find("panel/noneListCont");
        this.timeCont = this.find("panel/timeBg/timeCont");
        this.timeLab = this.find("panel/timeBg/timeCont/timeLab",Label);
        this.weektimeLab = this.find("panel/activeTaskCont/time",Label);
        this.activeBoxTips = this.find("panel/activeBoxTips").addComponent(TaskActiveBoxTipsCont);
        this.refreshBtn = this.find("panel/timeBg/refreshBtn");
        this.max = this.find("panel/timeBg/max");
        this.task_count = this.find("panel/timeBg/task_count",Label);
        this.refreshBtn.on(Input.EventType.TOUCH_END, this.onRefresh, this)
        this.taskList.SetHandle(this.updateTaskItem.bind(this));
        for (let btn of this.navBtns) {
            btn.on('toggle', this.onPage, this);
        }
        this.CloseBy("panel/closeBtn");

        this.content = this.find("panel/navBar/view/content/btn3/checkMark/content");
        this.clone_item = this.find("panel/navBar/view/content/btn3/checkMark/content/btn4");
    }
  
    protected onShow(): void {
        Session.Send(Route["logic.protocol.getrefreshdailytasktimes"])
        EventMgr.on(Evt_TaskChange, this.onUpdateTask, this);
        EventMgr.on(Evt_NextDay, this.onUpdateTask, this);
        EventMgr.on(Evt_TaskShowBoxTips, this.onShowBoxTips, this);
        EventMgr.on(Evt_RefreshTaskChange, this.updateRefresh, this);
    }

    async SetPage(page: number) {
        if (!this.$hasLoad) await this.initSub;
        if (!this.navBtns[page]) return;
        this.page = undefined;
        this.navBtns[page].getComponent(Toggle).isChecked = true;
        this.onPage(this.navBtns[page].getComponent(Toggle));
    }
    public flush(page?: TaskTabType, seasonChapterId?:number): void{
        this.SeasonChapterCfg = PlayerData.GetSeasonTaskAllChapter();
        this.selectSeasonChapterId = 0;
        if(seasonChapterId){
            this.selectSeasonChapterId = this.SeasonChapterCfg.findIndex(data=>data.ID == seasonChapterId)
        }
        this.cfg_comm = CfgMgr.GetCommon(StdCommonType.DailyTask);
        this.max_day_task_limit = this.cfg_comm.DailyTaskNum;
        this.initSortListData();
        this.SetPage(page || TaskTabType.Page_Daily);
    }

    //初始化赛季列表数据
    private initSortListData() {
        let time = PlayerData.GetCurSeasonEndTime() - DateUtils.ServerTime;
        if(time > 0){
            this.navBtns[2].active = true;
            this.content.removeAllChildren();
            let all_tag_data = []
            for (let index = 0; index <  this.SeasonChapterCfg.length; index++) {
                let cfg_data =  this.SeasonChapterCfg[index];
                let data = {
                    tag: index,
                    tagData: cfg_data,
                    tagName: cfg_data.SeasonChapterName
                }
                all_tag_data.push(data);
                let item = instantiate(this.clone_item);
                item.name = "item" + index;
                item.setPosition(0, 0);
                item["chapterData"] = cfg_data;
                item["type"] = index;
                item.getChildByPath("defCont/lab").getComponent(Label).string = cfg_data.SeasonChapterName;
                item.getChildByPath("checkMark/lab").getComponent(Label).string = cfg_data.SeasonChapterName;
                let is_lock = PlayerData.GetCurSeasonPastTTime() <= (cfg_data.OpenTime - 1) * 86400
                item.getChildByPath("defCont/lock").active = is_lock
                item.off(Button.EventType.CLICK, this.openOneTag.bind(this), this);
                item.on(Button.EventType.CLICK, this.openOneTag.bind(this), this);
                this.content.addChild(item);
            }
        }else{
            this.navBtns[2].active = false;
        }
       
    }

    private openOneTag(t:Button){
        let item = t.target;
        this.selectSeasonChapterId = item.getSiblingIndex();
        console.log(item["chapterData"])
        let cfg_data:StdTaskSeason = item["chapterData"]
        let seasontime = PlayerData.GetCurSeasonPastTTime()
        let is_lock = seasontime >= (cfg_data.OpenTime - 1) * 86400
        this.seasonTaskList = []
        if(is_lock){
            //获取当前章节的任务
            let datas = CfgMgr.GetSeasonTaskByChapterID(cfg_data.ID)
            let chapt_cfg_data:StdTask
            for (let index = 0; index < datas.length; index++) {
                const element = datas[index]; 
                if(element.TaskType != STaskType.seasonChapter) {
                    let taskData:proto.base.IPlayerDataTask = PlayerData.player.tasks[element.TopTask];
                    if(taskData){
                        this.seasonTaskList.push(taskData)  
                    }else{
                        let data:proto.base.IPlayerDataTask = {id:element.TopTask, start:null, end:null, value:0}
                        this.seasonTaskList.push(data)  
                    }
                }else{
                    chapt_cfg_data = element
                }
            }
            item.getChildByName("checkMark").active = true;
            let item_list = item.parent.children;
            item_list.forEach(element => {
                if(element["type"] != item["type"]){
                    element.getChildByName("checkMark").active = false;
                }
            });
            this.seasonActiveTaskCont.node.active = true;
            this.seasonActiveTaskCont.SetData(this.seasonTaskList, cfg_data.SeasonChapterName, chapt_cfg_data);
            this.noneListCont.active = this.seasonTaskList.length <= 0; 
            this.taskList.UpdateDatas(this.seasonTaskList);
            this.taskList.ScrollToHead();
        }else{
            let day = (cfg_data.OpenTime - 1) * 86400 - seasontime > 86400
            let time = ""
            if(day){
                time = DateUtils.FormatTime((cfg_data.OpenTime - 1) * 86400 - seasontime, "%{d}天%{hh}小时")
            }else{
                time = DateUtils.FormatTime((cfg_data.OpenTime - 1) * 86400 - seasontime, "%{hh}小时%{mm}分%{ss}秒")
            }
            MsgPanel.Show("剩余" + time + "开启")
        }
        
    }

    private onPage(t: Toggle):void{
        if (!t.isChecked) return;
        let page = this.navBtns.indexOf(t.node);
        if (page < 0 || page == this.page) return;
        this.page = page;
        this.updateTaskList(true);
    }
    private onUpdateTask():void{
        this.updateTaskList();
    }
    private updateTaskList(isToHead:boolean = false):void{
        let datas:SPlayerDataTask[];
        this.activeTaskCont.node.active = false;
        this.seasonActiveTaskCont.node.active = false;
        this.refreshBtn.parent.active = false;
        let index = this.page + 1
        ResMgr.LoadResAbSub("sheets/task/banner" + index + "/spriteFrame" , SpriteFrame, res=>{
            this.banner.spriteFrame = res;
        })

        switch (this.page) {
            case TaskTabType.Page_Daily: // 每日任务
                this.refreshBtn.parent.active = true;
                this.filtrDayTask();
                this.filtrWeekAcivtyTask();
                this.updateRefresh();
                this.activeTaskCont.node.active = true;
                this.activeTaskCont.SetData(1, this.weekActiveTaskList, this.weekCurAcNum, this.weekMaxAcNum);
                datas = this.dayTaskList;
                break;
            case TaskTabType.Page_Tyro: // 新手任务
                this.filtrTyroTask();
                datas = this.tyroTaskList;
                break;
            case TaskTabType.Page_Season: // 赛季任务
                this.seasonActiveTaskCont.node.active = true;
                if(this.content.children.length != 0 && this.content.children[this.selectSeasonChapterId]){
                    this.openOneTag(this.content.children[this.selectSeasonChapterId].getComponent(Button));
                }else{
                    MsgPanel.Show("暂无该任务")
                }
                return;
        }

        this.noneListCont.active = datas.length <= 0; 
        this.taskList.UpdateDatas(datas);
        if(isToHead) this.taskList.ScrollToHead();
    }
    //筛选每日任务 
    private filtrDayTask():void{    
        this.dayTaskList = PlayerData.filtrDayTask();
    }
    //新手任务
    private filtrTyroTask():void{   
        this.tyroTaskList = PlayerData.filtrTyroTask();
    }

    //筛选每周活跃任务 
    private filtrWeekAcivtyTask():void{
        this.weekActiveTaskList = [];
        this.weekMaxAcNum = 0;
        this.weekCurAcNum = 0;

        let list = CfgMgr.GetTaskByTaskType(STaskType.weekActive);
        this.weekMaxAcNum = list[list.length - 1].CompletionNum
        for (let index = 0; index < list.length; index++) {
            const element = list[index];  
            let taskData:proto.base.IPlayerDataTask = PlayerData.player.tasks[element.TopTask];
            if(taskData){
                this.weekActiveTaskList.push(taskData)  
            }else{
                let data:proto.base.IPlayerDataTask = {id:element.TopTask, start:null, end:null, value:0}
                this.weekActiveTaskList.push(data)  
            }
        }

        for (const iterator of this.weekActiveTaskList) {
            if(iterator.value > this.weekCurAcNum){
                this.weekCurAcNum = iterator.value;
            }   
        }
    }

    private updateTaskItem(item: Node, data: SPlayerDataTask):void{
        let taskItem = item.getComponent(TaskItem);
        if (!taskItem) taskItem = item.addComponent(TaskItem);
        taskItem.SetData(data);
    }
    private onShowBoxTips(std:StdTask, showPos:Vec3, clickTarget:Node):void{
        let list:proto.base.IThing[] = ItemUtil.GetSThingList(std.RewardType, std.RewardID, std.RewardNumber);
        this.activeBoxTips.SetData(list, std.Description);
        ClickTipsPanel.Show(this.activeBoxTips.node, this.node, clickTarget, showPos, 0);
                
    }

    private onRefresh(){
        if(PlayerData.GetItemCount(this.cfg_comm.DailyTaskRefreshItem) >= this.refresh_cost){
            Session.Send(Route["logic.protocol.refreshdailytask"]);
        }else{
            MsgPanel.Show("资源不足")
        }
    }

    private updateRefresh(){
        let item_cfg = CfgMgr.Getitem(this.cfg_comm.DailyTaskRefreshItem)
        let price = 1
        if(item_cfg.Itemtpye == ItemType.money){
            price = 10000
        }
        let icon = CfgMgr.Getitem(this.cfg_comm.DailyTaskRefreshItem).Icon
        ResMgr.LoadResAbSub(path.join(folder_item, icon,"spriteFrame"), SpriteFrame,res=>{
            this.refreshBtn.getChildByName("icon").getComponent(Sprite).spriteFrame = res
        })
        let refres_count = PlayerData.taskRefreshCount
        let count_list = this.cfg_comm.DailyTaskRefreshItemNum
        let max = count_list[count_list.length - 1]
        let count = count_list[refres_count] ? count_list[refres_count] : max
        this.refreshBtn.getChildByName("lab").getComponent(Label).string = count / price + "";
        this.refresh_cost = count / price;
        if(this.dayTaskList){
            this.refreshBtn.active = this.dayTaskList.length < this.max_day_task_limit;
            this.max.active = this.dayTaskList.length >= this.max_day_task_limit;
            this.task_count.string = this.dayTaskList.length + "/" + this.max_day_task_limit + "个任务"     
        }
    }

    protected update(dt: number): void {
        if(this.page == TaskTabType.Page_Season){
            this.timeCont.active = false;
        }else{
            this.timeCont.active = true;
            if(this.page == TaskTabType.Page_Daily){
                let list = this.cfg_comm.DailyTaskRefreshTime;
                let time_list = [24]
                for (let index = 0; index < list.length; index++) {
                    const element = list[index];
                    time_list.push(element);
                }
                
                //最近的时间
                let next_time = DateUtils.scheduleDailyRefresh(time_list)
                //距离凌晨前一个的时间点
                let before_time = DateUtils.scheduleDailyRefresh([list[list.length - 1]])
                //第二天凌晨
                let next_day_zero_time = DateUtils.nextDayHoursTime(DateUtils.ServerTime)
                let time = next_time - DateUtils.ServerTime
                if(next_day_zero_time > before_time){
                    this.timeLab.string = `${this.cfg_comm.DailyTaskRefreshMaxNum}个任务将在${DateUtils.FormatTime(time)}后刷新`;
                }else{
                    this.timeLab.string = `0点后全部任务重置`;
                }
                let time_lsit = DateUtils.getTimeToNextWeek()
                let day = time_lsit[0]
                let h = time_lsit[1];
                let m = time_lsit[2];
                let s = time_lsit[3];
                if(day <= 0 && h > 0){
                    this.weektimeLab.string =  `${h}小时${m}分`;
                }else if(h <= 0 && s > 0){
                    this.weektimeLab.string =  `${m}分${s}秒`;
                }else{
                    this.weektimeLab.string =  `${day}天${h}小时`;
                }
            }
        }
    }

    protected onHide(...args: any[]): void {
        EventMgr.off(Evt_TaskChange, this.onUpdateTask, this);
        EventMgr.off(Evt_NextDay, this.onUpdateTask, this);
        EventMgr.off(Evt_TaskShowBoxTips, this.onShowBoxTips, this);
        EventMgr.emit(Evt_Show_Scene, js.getClassByName(this));
    
    }

  


















}
