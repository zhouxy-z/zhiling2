import { Button, Color, Component, instantiate, Label, Node, ProgressBar, sp, Sprite, SpriteFrame, UIOpacity, Vec3 } from "cc";
import { CfgMgr, StdTask } from "../../manager/CfgMgr";
import { Session } from "../../net/Session";
import { EventMgr, Evt_TaskShowBoxTips } from "../../manager/EventMgr";
import { SPlayerDataTask, STaskState } from "../player/PlayerStruct";
import { Req, Route } from "../../net/Protocol";
import { ResMgr } from "../../manager/ResMgr";
import { PlayerData } from "../player/PlayerData";

export class TaskActiveBoxItem extends Component {
    private activeNumLab: Label;
    private btn: Button;
    private geted:Node;
    private box:Sprite;
    private isInit: boolean;
    private data: SPlayerDataTask;
    private std: StdTask;
    private index: number;
    protected onLoad(): void {
        this.btn = this.node.getComponent(Button);
        this.geted = this.node.getChildByName("geted");
        this.box = this.node.getChildByName("box").getComponent(Sprite);
        this.activeNumLab = this.node.getChildByName("activeNumLab").getComponent(Label);
        this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.isInit = true;
        this.updateShow();
    }
    SetData(data: SPlayerDataTask, index) {
        this.data = data;
        this.index = index;
        this.updateShow();
    }
    private onBtnClick(): void {
        if (!this.data || !this.std) return;
        if (this.data.value >= this.std.CompletionNum && (!this.data.end || this.data.start != this.data.end)) {
            let send_task = new Req["player.protocol.completetask"]();
            send_task.taskId = this.std.TaskId;
            send_task.server = PlayerData.server;
            Session.Send(Route["player.protocol.completetask"], send_task);
        } else {
            let tipsW: number = 382;
            let itemPos = this.btn.node.worldPosition.clone();
            let showPos: Vec3;
            let offset: number = tipsW / 2 + itemPos.x;
            if (offset > 1450) {
                offset = 1450 - tipsW / 2;
            } else {
                offset = itemPos.x;
            }
            showPos = new Vec3(offset, itemPos.y - 197, 0);
            EventMgr.emit(Evt_TaskShowBoxTips, this.std, showPos, this.btn.node);
        }

    }
    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        this.std = CfgMgr.GetTaskByData(this.data);
        this.activeNumLab.string = this.std.CompletionNum.toString();
        let index = this.index + 1 > 5 ? 5 : this.index + 1;
        ResMgr.LoadResAbSub("sheets/task/box_" + index + "/spriteFrame", SpriteFrame, res=>{
            this.box.spriteFrame = res;
        })
       
        this.geted.active = false;
        if (this.data.value >= this.std.CompletionNum) {
            this.box.node.getComponent(UIOpacity).opacity = 255;
            this.activeNumLab.enableOutline = true;
            this.activeNumLab.color = new Color().fromHEX("#55FFF9");
            this.activeNumLab.outlineColor = new Color().fromHEX("#007A8C");
            if (this.data.start == this.data.end) {
                this.geted.active = true
                ResMgr.LoadResAbSub("sheets/task/box_open/spriteFrame", SpriteFrame, res=>{
                    this.box.spriteFrame = res;
                })
            }
        }else{
            this.box.node.getComponent(UIOpacity).opacity = 180;
            this.activeNumLab.color = new Color().fromHEX("#000000");
            this.activeNumLab.enableOutline = false;
        }
    }
}
