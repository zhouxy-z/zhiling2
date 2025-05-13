import { Input, Label, Node } from "cc";
import { EventMgr } from "../../manager/EventMgr";
import { Second } from "../../utils/Utils";
import { Panel, UILay } from "../../manager/GameRoot";

export class Tips extends Panel {
    protected prefab: string = "prefabs/common/Tips";
    private label: Label;
    private btn1: Node;
    private btn2: Node;
    private okCallback: Function;
    private noCallback: Function;
    private closeLoop = 0;
    protected $lockLay = UILay.Modal;

    protected onLoad(): void {
        this.label = this.find("Label", Label);
        this.btn1 = this.find("btn1");
        this.btn2 = this.find("btn2");
        this.btn1.on(Input.EventType.TOUCH_END, this.onOk, this);
        this.btn2.on(Input.EventType.TOUCH_END, this.onNo, this);
        this.CloseBy("mask");
        this.find("closeBtn").on(Input.EventType.TOUCH_END, this.Hide, this);
    }

    protected onShow(): void {

    }
    async flush(msg: string, okCallBack?: Function, noCallBack?: Function, autoClose?: number) {
        this.label.string = msg;
        this.okCallback = okCallBack;
        this.noCallback = noCallBack;
        if (okCallBack) {
            this.btn1.active = true;
            this.btn2.active = true;
        } else {
            this.btn1.active = false;
            this.btn2.active = false;
        }

        if (autoClose) {
            this.closeLoop++;
            let loop = this.closeLoop;
            await Second(autoClose);
            if (loop != this.closeLoop) return;
            this.Hide();
        }
    }
    protected onHide(...args: any[]): void {
        this.okCallback = undefined;
        this.noCallback = undefined;
        this.closeLoop++;
    }
    private onOk() {
        this.okCallback && this.okCallback();
        this.Hide();
    }
    private onNo() {
        this.noCallback && this.noCallback();
        this.Hide();
    }
}