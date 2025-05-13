import { Label } from "cc";
import { Panel } from "../../manager/GameRoot";

export class MsgPanel extends Panel {
    protected prefab: string = "prefabs/common/MsgPanel";
    private msgLabel: Label;
    protected onLoad(): void {
        this.msgLabel = this.find("bar/Label", Label);
    }
    protected onShow(): void {
        
    }
    public flush(msg: string): void {
        console.log(msg);
        if (!msg || msg == "") {
            this.Hide();
            return;
        }
        this.msgLabel.string = msg;
        this.scheduleOnce(this.Hide.bind(this), 2);
    }
    protected onHide(): void {
        this.unscheduleAllCallbacks();
    }
}