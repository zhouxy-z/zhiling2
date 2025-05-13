import { Button, Color, Component, Label, path, Sprite, SpriteFrame } from "cc";
import { CfgMgr, ItemType, StdItem } from "../../manager/CfgMgr";
import { folder_item, folder_money, ResMgr } from "../../manager/ResMgr";
import { PlayerData } from "../player/PlayerData";
import { EventMgr, Evt_Item_Change } from "../../manager/EventMgr";
import { AsyncComponent } from "./AsyncComponent";
/**
 * 消耗道具展示
 */
export class CostItem extends AsyncComponent {
    private icon: Sprite;
    private numLab: Label;
    private itemId: number;
    private itemNum: number;
    private defNumColor: Color;
    private notNumColor: string;
    private isShowHave: boolean;
    private std: StdItem;
    protected onLoad(): void {
        this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
        this.numLab = this.node.getChildByPath("numLab").getComponent(Label);
        this.defNumColor = this.numLab.color.clone();
        this.updateShow();
        super.onLoad();
    }

    protected onEnable(): void {
        EventMgr.on(Evt_Item_Change, this.onItemChange, this);

    }

    protected onDisable(): void {
        EventMgr.off(Evt_Item_Change, this.onItemChange, this);

    }

    private async onItemChange(changeMap: { [key: number]: number }) {
        if (!this.hasLoad) await this.loadSub;
        if (changeMap[this.itemId] != undefined) {
            this.updateNum();
        }
    }

    SetData(itemId: number, itemNum: number, notNumColor?: string, isShowHave?: boolean): void {
        this.itemId = itemId;
        this.itemNum = itemNum;
        this.notNumColor = notNumColor;
        this.isShowHave = isShowHave;
        this.updateShow();
    }

    async SetItem(itemType: number, itemId: number, count: number) {
        let url: string;
        if (itemType == ItemType.money) {
            url = path.join(folder_money, "货币0" + itemId, "spriteFrame");
        } else {
            let std = CfgMgr.Getitem(itemId);
            url = path.join(folder_item, std.Icon, "spriteFrame");
        }
        this.icon.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);
        this.numLab.string = count.toString();
    }

    private async updateShow() {
        if (!this.hasLoad) await this.loadSub;
        if (!this.std || (this.std && this.itemId != this.std.Items)) {
            this.std = CfgMgr.Getitem(this.itemId);
        }
        if (this.std) {
            ResMgr.LoadResAbSub(path.join(folder_item, this.std.Icon, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                this.icon.spriteFrame = res;
            });
            this.updateNum();
        }
    }

    private updateNum(): void {
        let haveNum: number = PlayerData.GetItemCount(this.itemId);
        this.numLab.string = this.isShowHave ? `${haveNum}/${this.itemNum}` : `${this.itemNum}`;
        if (this.notNumColor) {
            let newColor: Color = this.defNumColor.clone();
            if (haveNum < this.itemNum) {
                newColor = newColor.fromHEX(this.notNumColor);
            }
            this.numLab.color = newColor;
        }

    }

}