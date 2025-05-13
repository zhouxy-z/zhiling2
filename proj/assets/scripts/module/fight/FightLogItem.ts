import { Button, Component, EditBox, Label, Node } from "cc";
import { DateUtils } from "../../utils/DateUtils";
import proto, { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";

export class FightLogItem extends Component {
    private playerLab: Label;
    private timeLab: Label;
    private roomLab: EditBox;
    private getBtn: Button;
    private select: Node;
    private isInit: boolean = false;
    private logData: proto.base.IBattleRecordData;
    protected onLoad(): void {
        this.playerLab = this.node.getChildByName("playerLab").getComponent(Label);
        this.timeLab = this.node.getChildByName("timeLab").getComponent(Label)
        this.roomLab = this.node.getChildByName("roomLab").getComponent(EditBox);
        this.getBtn = this.node.getChildByName("getBtn").getComponent(Button);
        this.isInit = true;
        this.getBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.getBtn:
                let data = new Req["battle_mgr.protocol.getbattlereplayroom"]();
                data.roomId = [this.logData.roomId];
                Session.Send(Route["battle_mgr.protocol.getbattlereplayroom"], data);
                console.log("发送获取战报详情---->")
                break;
        }
    }

    SetData(logData: proto.base.IBattleRecordData): void {
        this.logData = logData;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit) return;
        if (this.logData) {
            this.playerLab.string = this.logData.playerId;
            this.roomLab.string = this.logData.roomId;
            if (this.logData.createTime > 0) {
                let dates: string[] = DateUtils.TimestampToDate(this.logData.createTime * 1000, true);
                this.timeLab.string = `${dates[0]}-${dates[1]}-${dates[2]}  ${dates[3]}:${dates[4]}:${dates[5]}`;
            } else {
                this.timeLab.string = "";
            }

        }
    }


}