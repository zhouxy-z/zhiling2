import { Component, Label, Layout, Node } from "cc";
import { AutoScroller } from "../../component/AutoScroller";
import { BagItem } from "../bag/BagItem";
import proto from "../../net/Protocol";


export class TaskActiveBoxTipsCont extends Component {
    private title:Label;
    private awardList:AutoScroller;
    private isInit:boolean = false;
    private datas:proto.base.IThing[] = [];
    private title_str: string;
    protected onLoad(): void {
        this.title = this.node.getChildByName("Label").getComponent(Label);
        this.awardList = this.node.getChildByName("awardList").getComponent(AutoScroller);
        this.awardList.SetHandle(this.updateAwardItem.bind(this));
        this.awardList.node.on('select', this.onSelect, this);

        this.isInit = true;
        this.updateShow();
    }
    protected onEnable(): void {
        this.updateShow();
    }
    SetData(datas:proto.base.IThing[], title:string) {
        this.datas = datas;
        this.title_str = title;
        this.updateShow();
    }

    private updateShow():void{
        if (!this.isInit || !this.datas) return;
        this.title.string = this.title_str;
        this.awardList.UpdateDatas(this.datas);
        let layout = this.awardList.node.getChildByPath("view/content").getComponent(Layout);
        layout.affectedByScale = true;
        layout.updateLayout();
    }
    private updateAwardItem(item: Node, data: proto.base.IThing) {
        let awardItem = item.getComponent(BagItem);
        if (!awardItem) awardItem = item.addComponent(BagItem);
        awardItem.setThing(data);
    }
    protected async onSelect(index: number, item: Node) {
        // let selectData = this.datas[index];
        // if(selectData){
        //     ItemTips.Show(selectData);
        // }
    }
}
