import {Button, Input, Label, Layout, Node, ScrollView, Sprite, Toggle, UITransform, instantiate } from "cc";
import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { CfgMgr, StdSeaGatepass } from "../../manager/CfgMgr";
import { Second } from "../../utils/Utils";

export class GatePassBuyPanel extends Panel {
    protected prefab: string = "prefabs/rights/GatePassBuyPanel";
    
    private bg:Sprite;
    private unLock1;
    private unLock2;
    private buyBtn1:Button;
    private buyBtn2:Button;
    protected scroller1: ScrollView;
    protected scroller2: ScrollView;
    private upLabel:Label;
    private clone_item_1:Node;
    private clone_item_2:Node;
    private width = 345
    protected onLoad() {
        this.CloseBy("backBtn");
        this.bg = this.find("bg", Sprite);
        this.unLock1 = this.find("general/unLock");
        this.unLock2 = this.find("advance/unLock");
        this.buyBtn1 = this.find("general/generalBuyBtn", Button);
        this.buyBtn2 = this.find("advance/advanceBuyBtn", Button);
        this.scroller1 = this.find("general/ScrollView", ScrollView);
        this.clone_item_1 = this.find("general/ScrollView/view/content/item");
        this.scroller2 = this.find("advance/ScrollView", ScrollView);
        this.clone_item_2 = this.find("advance/ScrollView/view/content/item");
        this.upLabel = this.find("advance/upBg/upLabel",Label);
      

        this.buyBtn1.node.on(Button.EventType.CLICK, this.onClick, this)
        this.buyBtn2.node.on(Button.EventType.CLICK, this.onClick, this)
    }

    protected onShow(): void {
     
    }

    public async flush(...args: any[]) {
        let seaid = 10001;
        let seapass:StdSeaGatepass[] = CfgMgr.getSeaGatepass(seaid);
        this.scroller1.content.removeAllChildren();
        this.scroller2.content.removeAllChildren();

        for (let index = 0; index < seapass[1].BuyDes.length; index++) {
            const element = seapass[1].BuyDes[index];
            let item_1 = instantiate(this.clone_item_1)
            this.updateItem(item_1, element, index);
            this.scroller1.content.addChild(item_1)
        }

        for (let index = 0; index < seapass[2].BuyDes.length; index++) {
            const element = seapass[2].BuyDes[index];
            let item_2 = instantiate(this.clone_item_2)
            this.updateItem(item_2, element, index);
            this.scroller2.content.addChild(item_2)
        }
        let is_can_buy = false;
        this.unLock1.active = is_can_buy;
        this.unLock2.active = is_can_buy;
        this.buyBtn1.node.active = !is_can_buy;
        this.buyBtn2.node.active = !is_can_buy;   
        await Second(0.1)
        this.scroller1.node.getChildByPath("view/content").children.forEach((item)=>{
            let des = item.getChildByName("TipsLabel").getComponent(Label)
            let height = des.getComponent(UITransform).contentSize.height
            item.getComponent(UITransform).setContentSize(this.width, height)
        })
        this.scroller2.node.getChildByPath("view/content").children.forEach((item)=>{
            let des = item.getChildByName("TipsLabel").getComponent(Label)
            let height = des.getComponent(UITransform).contentSize.height
            item.getComponent(UITransform).setContentSize(this.width, height)
        })
        this.scroller1.node.getChildByPath("view/content").getComponent(Layout).updateLayout()
        this.scroller2.node.getChildByPath("view/content").getComponent(Layout).updateLayout()
    }
    protected updateItem(item: Node, data: string, index: number) {
        let des = item.getChildByName("TipsLabel").getComponent(Label);
        des.string = data
    }


    private onClick(e:Button){
        let name = e.name
        switch (name) {
            case "generalBuyBtn":
                
                break;
            case "advanceBuyBtn":
                
                break;
        
            default:
                break;
        }

    }
    protected onHide(...args: any[]): void {
    }

}
