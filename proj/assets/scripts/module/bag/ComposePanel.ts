import { Input, Label, Node, Sprite, sp } from "cc";
import { EventMgr, Evt_Compose } from "../../manager/EventMgr";
import { Panel } from "../../manager/GameRoot";
import { StdItem } from "../../manager/CfgMgr";

export class ComposePanel extends Panel {
    protected prefab: string = "prefabs/panel/bag/ComposePanel";
    private composeBtn: Node;
    protected onLoad() {
        this.CloseBy("Main/closeBtn");
        this.CloseBy("mask");
        this.composeBtn = this.find(`Main/composeBtn`);
        
        this.composeBtn.on(Input.EventType.TOUCH_END, this.onClickCompose, this);
    }
    public static showByItemId(ItemID: number) {
        this.Show(ItemID);
    }
    protected onShow(): void {
        EventMgr.on(Evt_Compose, this.onCompose, this);
    }

    protected onHide(...args: any[]): void {
        EventMgr.off(Evt_Compose);
    }
    public async flush(ItemID: number) {
    }

    private onClickCompose() {
    }

    private onCompose(data) {
    }

}
