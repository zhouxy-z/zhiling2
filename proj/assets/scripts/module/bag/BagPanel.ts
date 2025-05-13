import { EventTouch, Input, Label, Node, Sprite, SpriteFrame, Toggle, instantiate, path } from "cc";

import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { PlayerData } from "../player/PlayerData";
import { CfgMgr, StdItem } from "../../manager/CfgMgr";
import { BagItem } from "./BagItem";
import { ResMgr, folder_item } from "../../manager/ResMgr";
import { EventMgr, Evt_GetReward, Evt_Item_Change } from "../../manager/EventMgr";
import { Tips } from "../common/Tips";
import { Goto } from "../../DL";
import proto from "../../net/Protocol";

export class BagPanel extends Panel {
    protected prefab: string = "prefabs/bag/BagPanel";

    protected infoView: Node;
    protected itemShow: Node;
    protected empty: Node;
    protected scroller: AutoScroller;
    protected navBtns: Toggle[] = [];
    protected currentPage: number;
    protected selector: StdItem;

    protected async onLoad() {
        this.CloseBy("backBtn");
        this.infoView = this.find("infoView");
        this.itemShow = this.find("itemShow");
        this.empty = this.find("empty");
        this.scroller = this.find("ScrollView", AutoScroller);
        this.scroller.SetHandle(this.updateItem.bind(this));
        this.scroller.node.on('select', this.onSelect, this);

        let nav = this.find("nav");
        nav.children.forEach((item, index) => {
            this.navBtns.push(item.getComponent(Toggle));
            item.on(Input.EventType.TOUCH_END, e => {
                this.onPage(index);
            }, this);
        });

        this.find("infoView/useBtn").on(Input.EventType.TOUCH_END, this.onUse, this);
        this.find("infoView/tradeBtn").on(Input.EventType.TOUCH_END, this.ontrade, this);
    }

    protected onShow(): void {
        EventMgr.on(Evt_Item_Change, this.flush, this);
        EventMgr.on(Evt_GetReward, this.flush, this);
    }

    public flush(...args: any[]): void {
        this.SetPage(this.currentPage || 0);
    }

    protected onHide(...args: any[]): void {

    }

    public async SetPage(page: number) {
        if (!this.$hasLoad) await this.initSub;
        let btn = this.navBtns[page];
        if (btn) btn.isChecked = true;
        this.onPage(page);
    }
    onPage(page: number) {
        let reflush = this.currentPage != page;
        this.currentPage = page;
        let items = PlayerData.GetitemBySubType(page);
        for (let i = items.length - 1; i >= 0; i--) {
            if (items[i].item['std'].HideBag) {
                items.splice(i, 1);
            }
        }
        this.scroller.UpdateDatas(items);
        if (items.length <= 0) {
            this.empty.active = true;
            this.infoView.active = this.itemShow.active = false;
        } else {
            this.empty.active = false;
            this.infoView.active = this.itemShow.active = true;
        }
        if (reflush && items?.length) {
            this.scroller.SelectFirst();
            this.onSelect(undefined, undefined, items[0]);
        }
    }
    protected updateItem(item: Node, data: any, index: number) {
        let bagItem = item.getComponent(BagItem) || item.addComponent(BagItem);
        bagItem.setThing(data);
    }
    protected async onSelect(index: number, item: Node, data: proto.base.IThing) {
        this.empty.active = false;
        this.infoView.active = this.itemShow.active = true;
        let stdItem = CfgMgr.Getitem(data.item.id);
        this.selector = stdItem;
        this.itemShow.getChildByName("bg").getComponent(Sprite).spriteFrame = await ResMgr.LoadResAbSub("sheets/bag/Quality_" + stdItem.Quality + "/spriteFrame", SpriteFrame);
        this.itemShow.getChildByName("icon").getComponent(Sprite).spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame);

        let fetchs = CfgMgr.Get("fetch");
        this.infoView.getChildByPath("nameLab").getComponent(Label).string = stdItem.ItemName;
        this.infoView.getChildByPath("numLab").getComponent(Label).string = data.item.count;
        this.infoView.getChildByPath("descLab").getComponent(Label).string = stdItem.Remark;
        let layout = this.infoView.getChildByPath("layout");
        for (let i = 0, len = Math.max(stdItem.SkipGet?.length || 0, layout.children.length); i < len; i++) {
            let child = layout.children[i];
            if (!child) {
                child = instantiate(layout.children[0]);
                layout.addChild(child);
            }
            let stdFetch = fetchs[stdItem?.SkipGet?.[i]];
            child.getChildByName("goto").off(Input.EventType.TOUCH_END);
            if (stdFetch) {
                child.active = true;
                child['fetch'] = stdFetch.Win;
                child.getChildByName("descLab").getComponent(Label).string = stdFetch.Desc;
                child.getChildByName("goto").on(Input.EventType.TOUCH_END, this.goto, child);
            } else {
                child.active = false;
            }
        }
        this.find("infoView/useBtn").active = false;
        this.find("infoView/tradeBtn").active = false;
        if (this.selector?.Button?.indexOf(3) != -1) {
            this.find("infoView/useBtn").active = true;
        }
        if (this.selector?.Button?.indexOf(1) != -1) {
            this.find("infoView/tradeBtn").active = true;
        }
    }
    protected goto(e: EventTouch) {
        let win = this['fetch'];
        Goto(win);
    }

    protected onUse() {
        Goto("OpenBoxPanel", this.selector);
    }
    protected ontrade() {
        Tips.Show("暂未开启");
    }
}
