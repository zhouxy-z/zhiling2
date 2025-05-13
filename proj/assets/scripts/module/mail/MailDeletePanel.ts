import { Button, Node, Toggle} from "cc";
import { Panel } from "../../manager/GameRoot";
import { AudioMgr } from "../../manager/AudioMgr";
import LocalStorage from "../../utils/LocalStorage";
import { PlayerData } from "../player/PlayerData";

export class MailDeletePanel extends Panel {
    protected prefab: string = "prefabs/mail/MailDeletePanel";
    private callBack;
    private deleteBtn: Node;
    private toggle: Toggle;
    protected onLoad() {
        this.CloseBy("mask");
        this.CloseBy("spriteFrame/Close");
        this.CloseBy("spriteFrame/Close2");
        this.deleteBtn = this.find(`spriteFrame/deleteBtn`);
        this.toggle = this.find(`spriteFrame/Node/toggle`, Toggle);
        this.onBntEvent()
    }

    private onBntEvent() {
        this.deleteBtn.on(Button.EventType.CLICK, this.onClickDelete, this);
    }

    protected onShow(): void {

    }

    public flush(...args: any[]): void {
        this.callBack = args[0];
        this.toggle.isChecked = false;
    }

    protected onHide(...args: any[]): void {

    }

    private onClickDelete() {
        let time = Date.now();
        if (this.toggle.isChecked) {
            LocalStorage.SetNumber("MailDeletePanel" + PlayerData.player.playerId, time)
        } else {
            LocalStorage.RemoveItem("MailDeletePanel" + PlayerData.player.playerId)
        }
        if (this.callBack) {
            this.callBack();
        }
        this.Hide();
    }

}
