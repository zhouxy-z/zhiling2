import { Input, Label, Node, Sprite, SpriteFrame, UITransform, Slider, path, Button, tween, v3, PageView, instantiate, Layout, Toggle } from "cc";
import { ResMgr, folder_item } from "../../manager/ResMgr";
import { Panel, UILay } from "../../manager/GameRoot";
import { Session } from "../../net/Session";
import { BoxType, CfgMgr, RewardBox, StdBattleCardDelivery, StdItem, ThingName } from "../../manager/CfgMgr";
import { AutoScroller } from "../../component/AutoScroller";
import { PlayerData } from "../player/PlayerData";
import { BagItem } from "./BagItem";
import { Tips } from "../common/Tips";
import { Second } from "../../utils/Utils";
import { EventMgr, Evt_GetReward, Evt_Item_Change, Evt_OpenBoxGetRewardPanel } from "../../manager/EventMgr";
import { ItemUtil } from "../../utils/ItemUtils";
import proto, { Req, Route } from "../../net/Protocol";

export class OpenBoxPanel extends Panel {
    protected prefab: string = "prefabs/bag/OpenBoxPanel";
    protected $lockLay = UILay.Modal;
    private Slider: Slider;
    private progress: Node;
    private nameLab: Label;
    private icon: Sprite;
    private cardBg: Sprite;
    private numLab: Label;
    private scroller: AutoScroller;
    private valueLab: Label;
    private maxLab: Label;
    private consLab: Label;
    private consumeNum: Label;
    private openBtn: Button;

    private BoxData: RewardBox;
    private maxItemcount: number;
    private selects: number[];
    private curSelectCount: number;
    private itemData: StdItem;

    protected onLoad(): void {
        this.CloseBy("right/closeBtn");

        this.nameLab = this.find("left/nameLab", Label);
        this.icon = this.find("left/icon", Sprite);
        this.cardBg = this.find("left/cardBg", Sprite);
        this.numLab = this.find("left/num", Label);
        this.consLab = this.find("right/label", Label);
        this.consumeNum = this.find("right/consumeNum", Label);
        this.scroller = this.find("right/ScrollView", AutoScroller);
        this.valueLab = this.find("right/value", Label);
        this.maxLab = this.find("right/max", Label);

        this.Slider = this.find("right/Slider", Slider);
        this.progress = this.find("right/Slider/progress");
        this.Slider.node.on('slide', this.onSlide, this);

        this.scroller.SetHandle(this.updateItem.bind(this));
        this.scroller.node.on('select', this.onSelect, this);

        this.openBtn = this.find("right/openBtn", Button);
        this.find("right/del").on(Input.EventType.TOUCH_END, this.onDel, this);
        this.find("right/add").on(Input.EventType.TOUCH_END, this.onAdd, this);
        this.find("right/openBtn").on(Input.EventType.TOUCH_END, this.onOpen, this);
    }

    protected onShow() {
        EventMgr.on(Evt_Item_Change, this.ItemChange, this);
        EventMgr.on(Evt_GetReward, this.resetData, this);
    }
    private ItemChange() {
        let count = PlayerData.GetItemCount(this.itemData.Items);
        this.numLab.string = count + "";
        if (count <= 0) {
            this.Hide();
        }
    }

    private resetData() {
        this.Hide();
        if (this.maxItemcount <= 0) {
            return;
        }
        this.flush(this.itemData);
    }


    async flush(itemData: StdItem) {
        if (!itemData) return;
        this.itemData = itemData;
        this.selects = [];
        this.curSelectCount = 1;
        this.nameLab.string = itemData.ItemName;
        let count = PlayerData.GetItemCount(itemData.Items);
        this.numLab.string = count + "";
        this.icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, itemData.Icon, "spriteFrame"), SpriteFrame);
        this.cardBg.spriteFrame = await ResMgr.LoadResAbSub("sheet/bag/box/Quality" + itemData.Quality + "/spriteFrame", SpriteFrame);
        this.BoxData = CfgMgr.GetBoxData(itemData.Items);
        this.maxItemcount = count > this.BoxData.Limit ? this.BoxData.Limit : count;
        this.maxLab.string = this.maxItemcount + "";

        let is_select = this.BoxData.Boxtype == BoxType.select;
        // this.openBtn.enabled = !is_select;
        // this.openBtn.node.getComponent(Sprite).grayscale = is_select;
        this.scroller.CanSelect(is_select);

        this.updateProgress();

        for (let child of this.scroller.children) {
            let toggle = child.getComponent(Toggle);
            if (toggle) toggle.isChecked = false;
        }
        this.scroller.SelectFirst();
    }
    protected updateScroller() {
        let cardatas = [];
        for (let i = 0; i < this.BoxData.Items.length; i++) {
            let id = this.BoxData.Items[i];
            let type = this.BoxData.Types[i];
            if (type == ThingName.battlecard) {
                let deliver = CfgMgr.GetBattleCardDeliver(id);
                if (deliver) cardatas.push({ card: { cardId: deliver.CardID, quality: deliver.CardQuality } });
            } else {
                // let awardList = ItemUtil.CreateThing(ItemUtil.SthingType[type], id, num);
                // cardatas.push(awardList)
                let stdItem = CfgMgr.Getitem(id);
                if (stdItem) {
                    cardatas.push({ item: { id: id, count: this.curSelectCount * (this.BoxData.ItemsNum[i] || 1) } });
                }
            }
        }
        this.scroller.UpdateDatas(cardatas);
    }

    private updateItem(item: Node, data: proto.base.IThing, index: number) {
        let bagItem = item.getComponent(BagItem) || item.addComponent(BagItem);
        bagItem.setThing(data);
        let toggle = bagItem.getComponent(Toggle);
        if (!toggle) return;
        toggle.isChecked = this.selects.indexOf(index) != -1;
    }
    private async onSelect(index: number, item: Node, data: any) {
        if (this.BoxData.Boxtype != BoxType.select) return;
        let toggle = item.getComponent(Toggle);
        if (!toggle) return;
        await Second(0);
        if (toggle.isChecked) {
            if (this.selects.length >= this.BoxData.RewardNum) {
                Tips.Show("只能选择" + this.BoxData.RewardNum + "个");
                toggle.isChecked = false;
                return;
            }
            if (this.selects.indexOf(index) == -1) {
                this.selects.push(index);
                this.selects.sort((a, b) => a - b);
            }
        } else {
            let idx = this.selects.indexOf(index);
            if (idx != -1) this.selects.splice(idx, 1);
        }
        this.updateProgress();
    }

    protected onHide(...args: any[]) {
    }

    protected update(dt: number): void {
        let size = this.Slider.node.getComponent(UITransform).contentSize;
        this.progress.getComponent(UITransform).setContentSize(this.Slider.progress * size.width, 13.448);
    }

    private onAdd(e?: any) {
        if (this.curSelectCount >= this.maxItemcount) return;
        this.curSelectCount++;
        //超出拥有数量
        if (this.curSelectCount > this.maxItemcount) {
            this.curSelectCount = this.maxItemcount
        }
        this.updateProgress();
    }

    private onDel(e?: any) {
        if (this.curSelectCount < 1) return;
        this.curSelectCount--;
        if (this.curSelectCount < 1) {
            this.curSelectCount = 1;
        }
        this.updateProgress();
    }

    private onSlide(e?: Slider) {
        this.curSelectCount = Math.max(Math.ceil(this.maxItemcount * this.Slider.progress), 1);
        this.updateProgress();
    }
    private updateProgress() {
        this.Slider.progress = this.curSelectCount / this.maxItemcount;
        this.valueLab.string = this.curSelectCount + "";
        this.consumeNum.string = "";

        switch (this.BoxData.Boxtype) {
            case 3:
                this.consLab.string = "获得以下全部道具";
                break;
            case 1:
                this.consLab.string = "随机获得以下道具";
                break;
            case 2:
                this.consLab.string = "选择获得以下道具";
                this.consumeNum.string = this.selects.length + "/" + this.BoxData.RewardNum;
                break;
        }
        this.updateScroller();

    }

    private onOpen() {
        let list = this.selects;
        if (this.BoxData.Boxtype == 2 && this.selects.length < this.BoxData.RewardNum) {
            Tips.Show(`请选择${this.BoxData.RewardNum}个道具！`);
            return;
        }
        if (this.BoxData.Boxtype != BoxType.select) {
            list = null;
        }
        let open_box = new Req["player.protocol.openbox"]();
        open_box.boxId = this.BoxData.ItemID;
        open_box.count = this.curSelectCount;
        open_box.selectedItems = list
        open_box.server = PlayerData.server
        Session.Send(Route["player.protocol.openbox"], open_box);
    }
}