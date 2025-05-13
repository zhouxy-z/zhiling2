import { Component, Label, Layout, Node, Sprite, SpriteFrame, Toggle, UIOpacity, instantiate, path } from "cc";
import { CardQuality, CfgMgr, ItemType, StdBattleCardDelivery, StdItem } from "../../manager/CfgMgr";
import { ResMgr, folder_icon, folder_item, folder_quality } from "../../manager/ResMgr";
import { Second } from "../../utils/Utils";
import { Tips } from "../common/Tips";
import proto from "../../net/Protocol";


export class OpenBoxPage extends Component {
    private Layout: Layout;
    private item: Node

    private isSelect: boolean;
    private maxCount: number
    private limit: number;
    private callBack: Function;
    private befor_selects = [];


    private page_num:number = 0
    protected $loadSub: Promise<any>;
    protected complete: Function;
    protected hasLoad = false;

    protected onLoad(): void {
        this.Layout = this.node.getChildByName("Layout").getComponent(Layout);
        this.item = this.node.getChildByPath("Layout/item")
        this.hasLoad = true;
        this.complete?.();
    }

    protected get loadSub() {
        if (this.$loadSub) return this.$loadSub;
        let thisObj = this;
        this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
        });
    }

    /**
     * 刷新道具数据
     * @param data 
     */
    async SetData(data, count: number, limit, is_select: boolean, callback: Function, is_card: boolean, page_num:number, select_num) {
        if (!this.hasLoad) await this.loadSub;
        this.callBack = callback;
        this.page_num = page_num;
        this.Layout.node.removeAllChildren();
        if(is_card){
            this.updateItem(data);
        }else{
            this.updateCard(data);
        }
        this.befor_selects = select_num;
        this.maxCount = count;
        this.limit = limit;
        this.isSelect = is_select;
    }

    private async updateItem(data: proto.base.IThing[]) {
        for (let index = 0; index < data.length; index++) {
            let item = instantiate(this.item)
            let bg = item.getChildByName("bg").getComponent(Sprite);
            let icon = item.getChildByPath("bg/icon").getComponent(Sprite);
            let num = item.getChildByPath("bg/num").getComponent(Label);
            let mask = item.getChildByPath("mask").getComponent(UIOpacity);
            let maskBg = item.getChildByPath("bg/maskBg").getComponent(Sprite);
            let max_num = item.getChildByPath("mask/max_num").getComponent(Label);
            let id = item.getChildByName("id").getComponent(Label);
            let toggle = item.getComponent(Toggle);
            toggle.node.on("toggle", this.onSelect, this)
            toggle.isChecked = false;
            // bg.spriteFrame = await ResMgr.LoadResAbSub(data[index].resData.iconBgUrl, SpriteFrame);
            // icon.spriteFrame = await ResMgr.LoadResAbSub(data[index].resData.iconUrl, SpriteFrame);
            if(data[index].item){
                let std: StdItem = CfgMgr.Getitem(data[index].item.id);
                if (std.Itemtpye == ItemType.shard) {
                    maskBg.node.active = true;
                    maskBg.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_quality, CardQuality[std.ItemEffect2] + "_bag_mask", "spriteFrame"), SpriteFrame);
                }else{
                    maskBg.node.active = false;
                }
                id.string = data[index].item.id + ""
                num.string = (data[index].item.count ? data[index].item.count : "") + "";
            }else{
                num.string = "1";
            }
            id.node.active = false;
            max_num.string = this.maxCount + "";
            mask.opacity = this.isSelect ? 0 : 255;
            toggle.interactable = this.isSelect;
            this.Layout.node.addChild(item)
        }
    }

    private async updateCard(data: StdBattleCardDelivery[]) {
        for (let index = 0; index < data.length; index++) {
            let item = instantiate(this.item)
            let bg = item.getChildByName("bg").getComponent(Sprite);
            let icon = item.getChildByPath("bg/icon").getComponent(Sprite);
            let num = item.getChildByPath("bg/num").getComponent(Label);
            let mask = item.getChildByPath("mask").getComponent(UIOpacity);
            let maskBg = item.getChildByPath("bg/maskBg").getComponent(Sprite);
            let max_num = item.getChildByPath("mask/max_num").getComponent(Label);
            let id = item.getChildByName("id").getComponent(Label);
            let toggle = item.getComponent(Toggle);
           
            toggle.isChecked = false;
            let pos = index + this.page_num * 8
            if(this.befor_selects.indexOf(pos) != -1){
                toggle.isChecked = true;
            }
            toggle.node.on("toggle", this.onSelect, this)
            bg.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_quality, CardQuality[data[index].CardQuality] + "_bag_bg", "spriteFrame"), SpriteFrame);
            num.string = "1";
            id.string = data[index].CardID + "_" + CfgMgr.GetCard(data[index].CardID).CardName
            icon.node.active = false;
            id.node.active = true;
            max_num.string = this.maxCount + "";
            mask.opacity = this.isSelect ? 0 : 255;
            toggle.interactable = this.isSelect;
            this.Layout.node.addChild(item)
        }
    }

    protected async onSelect(toggle: Toggle) {
        if (!this.limit || !this.isSelect) return;
        await Second(0);
        let selects = [];
        let chidlren = this.Layout.node.children;
        let num = 0 + this.befor_selects.length ;  
        console.log(this.befor_selects)
        // for (let child of chidlren) {
            let isSelect = toggle.isChecked;
            if (isSelect) {
                num++;
                if (isSelect){
                    toggle.node.getChildByName("mask").getComponent(UIOpacity).opacity = 255;
                }
                selects.push(toggle.node.getSiblingIndex() + this.page_num * 8);
            }else{
                toggle.node.getChildByName("mask").getComponent(UIOpacity).opacity = 0;
            }
        // }
        if (num > this.limit) {
            toggle.isChecked = false;
            toggle.node.getChildByName("mask").getComponent(UIOpacity).opacity = 0;
            let index = selects.indexOf(toggle.node.getSiblingIndex() + this.page_num * 8);
            if (index != -1) {
                selects.splice(index, 1);
            }
            Tips.Show("只能选择" + this.limit + "个");
        }
        this.callBack(selects);
    }

    public setSelectNum(count, is_select) {
        let chidlren = this.Layout.node.children;
        for (let child of chidlren) {
            let isSelect = child.getComponent(Toggle).isChecked;
            if (isSelect && is_select) { 
                child.getChildByName("mask").getComponent(UIOpacity).opacity = 255;       
            }  
            child.getChildByPath("mask/max_num").getComponent(Label).string = count + ""
        }
    }
}