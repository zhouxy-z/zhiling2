import {Label, Node, RichText, Sprite, SpriteFrame, UITransform, Widget, path } from "cc";
import { ResMgr, folder_item, folder_quality } from "../../manager/ResMgr";
import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { CfgMgr, StdItem } from "../../manager/CfgMgr";
import proto from "../../net/Protocol";



export class ItemTips extends Panel {
    protected prefab: string = "prefabs/common/ItemTips";
    private bg: Sprite;
    private icon: Sprite;
    private nameLab: Label;
    private cd_time: Label;
    private tipsLab: RichText;
    private getNode:Node;
    private ScrollView: AutoScroller;

    private cont:Node
    protected onLoad() {
        this.cont = this.find("cont");
        this.bg = this.find("cont/bg").getComponent(Sprite);
        this.icon = this.find("cont/bg/icon").getComponent(Sprite);
        this.nameLab = this.find("cont/nameLab").getComponent(Label);
        this.cd_time = this.find("cont/cd_time").getComponent(Label);
        this.tipsLab = this.find("cont/layout/tipsNode/tipsLab").getComponent(RichText);
        this.getNode = this.find("cont/layout/getNode");
        this.ScrollView = this.find("cont/layout/getNode/ScrollView").getComponent(AutoScroller);
        // this.ScrollView.SetHandle(this.updateItem.bind(this));
        this.CloseBy("mask");

    }

    static ShowHideNode(data: proto.base.IThing  | StdItem) {
        this.Show(data, false);
    }

    protected onShow(): void {

    }
    public async flush(data: proto.base.IThing  | StdItem, is_show_getNode:boolean = true): Promise<void> {
        if (!this.$hasLoad) await this.initSub;
        let std_item: StdItem
        if(data["Items"] != undefined){
            std_item = data as StdItem;
        }else{
            let _data = data as proto.base.IThing
            if (_data.item) {
                std_item = CfgMgr.Getitem(_data.item.id);
            }
        }
        
        if (!std_item) return;
        this.nameLab.string = std_item.ItemName;
        this.cd_time.string = std_item.LockTime + "";
        this.tipsLab.string = std_item.Remark + "";
        // this.bg.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_quality, CardQuality[std_item.Quality] + "_bag_bg", "spriteFrame"), SpriteFrame);
        let spr = std_item.Icon
      
        this.icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, spr, "spriteFrame"), SpriteFrame);
        if(is_show_getNode){
            this.getNode.active = true;
            this.cont.getComponent(UITransform).height = 709;
        }else{
            this.getNode.active = false;
            this.cont.getComponent(UITransform).height = 709 - 300;
        }
        this.cont.children.forEach((node) => {
            if (node.getComponent(Widget)) {
                node.getComponent(Widget).updateAlignment();
            }
        })
    }
    protected onHide(...args: any[]): void {
    }
}