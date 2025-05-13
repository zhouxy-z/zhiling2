import { Button } from "cc";
import { Panel } from "../../manager/GameRoot";

export class HomePanel extends Panel{
    protected prefab: string = "prefabs/home/HomePanel";
    private vsBtn: Button;//匹配
    protected onLoad() {
        this.vsBtn = this.find("vsBtn").getComponent(Button);
        this.vsBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }
    public flush(...args: any[]): void {
        
    }

    protected onShow(): void {
        
    }
    
    protected onHide(...args: any[]): void {
        
    }

    
    private onBtnClick(btn:Button): void {
        switch (btn) {
            case this.vsBtn:
                
                break;
            default:
                break;
        }
    }

}