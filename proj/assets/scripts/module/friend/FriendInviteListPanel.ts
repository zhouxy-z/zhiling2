import { Button, Color, EventTouch, Input, Label, Node, Sprite, SpriteFrame, Toggle, UIOpacity, instantiate, path, v3 } from "cc";
import { Panel } from "../../manager/GameRoot";
import { EventMgr } from "../../manager/EventMgr";
import { AutoScroller } from "../../component/AutoScroller";
import { SPlayerDataTask } from "../player/PlayerStruct";


export class FriendInviteListPanel extends Panel {
    protected prefab: string = "prefabs/friend/FriendInviteListPanel";

    private filtrateBtn: Button;
    private ScrollView: AutoScroller
    private incomeNum: Label;
    protected onLoad(): void {
        this.CloseBy("mask");
        this.CloseBy("frame/closeBtn");
        this.incomeNum = this.find("frame/get/incomeNum").getComponent(Label);
        this.filtrateBtn = this.find("frame/filtrateBtn", Button);
        this.filtrateBtn.node.on("click", this.onFiltrate, this);
        this.ScrollView = this.find("frame/ScrollView").getComponent(AutoScroller);
        this.ScrollView.SetHandle(this.updateItem.bind(this));
        // EventMgr.on(Evt_TaskChange, this.flush, this);
        // EventMgr.on(Evt_GetReward, this.onGetReward, this);
    }

    protected onShow(): void {
    }

    async flush(...args: any[]) {
        // let datas: SPlayerDataTask[] = []
        // let task_data = PlayerData.roleInfo.tasks;
        // let allNum = 0;
        // for (const key in task_data) {
        //     if (Object.prototype.hasOwnProperty.call(task_data, key)) {
        //         const element = task_data[key];
        //         let stdTask = CfgMgr.GetTaskById(element.id);
        //         if (stdTask && stdTask.Show == STaskShowType.friend && stdTask.TaskType == STaskType.invite) {
        //             if (element.s == STaskState.Finsh) {
        //                 allNum += stdTask.RewardNumber[0];
        //             }
        //             datas.push(element);
        //         }
        //     }
        // }
        // datas.sort((a, b) => a.s - b.s)
        // this.ScrollView.UpdateDatas(datas);
        // this.incomeNum.string = allNum + "";
    }

    private onGetReward(id: number) {
        // let datas = CfgMgr.getTaskRewardThings(id);
        // RewardTips.Show(datas);
    }

    private async updateItem(item: Node, data: SPlayerDataTask, index) {
        // let cfg = CfgMgr.GetTaskById(data.id);
        // let tittle = item.getChildByPath("frame/tittleNode/tittle").getComponent(Label);
        // tittle.string = cfg.TaskName;
        // let tittleNum = item.getChildByPath("frame/tittleNode/tittleNum").getComponent(Label);
        // let num = data.v > cfg.CompletionNum ? cfg.CompletionNum : data.v;
        // tittleNum.string = "(" + num + "/" + cfg.CompletionNum + ")";
        // let icon = item.getChildByPath("frame/income/icon").getComponent(Sprite);
        // let icon_url = "yuanshi";
        // icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, icon_url + "", "spriteFrame"), SpriteFrame);
        // let incomeNum = item.getChildByPath("frame/income/incomeNum").getComponent(Label);
        // incomeNum.string = cfg.RewardNumber[0] + "";
        // let getBtn = item.getChildByPath("frame/getBtn").getComponent(Button);
        // getBtn.node.off("click");
        // getBtn.node.on("click", () => {
        //     let info = {
        //         type: MsgTypeSend.CompleteTask,
        //         data: {
        //             task_id: data.id
        //         }
        //     }
        //     Session.Send(info, MsgTypeRet.CompleteTaskRet);
        // });
        // let unGet = item.getChildByPath("frame/unGet")
        // getBtn.node.active = data.v >= cfg.CompletionNum && data.s != STaskState.Finsh;
        // unGet.active = data.v < cfg.CompletionNum;
        // tittleNum.color = data.v < cfg.CompletionNum ? new Color().fromHEX('a55615') : new Color().fromHEX('71B12C');
        // let geted = item.getChildByPath("frame/geted").getComponent(Sprite);
        // geted.node.active = data.s == STaskState.Finsh;
    }

    private onFiltrate() {
        // // let server = GameSet.Server_cfg;
        // // if(server && server.Mark){
        // //     CallApp({api:Api_Share}); 
        // // }else{
        // //     MsgPanel.Show("功能暂未开启")
        // //     return;
        // // }
        // // // FriendSharePanel.Show();
        // MsgPanel.Show("功能暂未开启")
        // return;
        // // CallApp({api:Api_Share,appid:GameSet.Server_cfg.AppId});
    }

    protected onHide(...args: any[]): void {

    }
}