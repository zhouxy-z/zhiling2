import { Color, Component, Label, path, Sprite, SpriteFrame } from "cc";
import { CfgMgr, ItemType, StdItem } from "../../manager/CfgMgr";
import { folder_item, folder_money, ResMgr } from "../../manager/ResMgr";
import { PlayerData } from "../player/PlayerData";
import { EventMgr, Evt_Item_Change } from "../../manager/EventMgr";
/**
 * 拥有道具展示
 */
export class HaveItem extends Component {
    private icon: Sprite;
    private numLab: Label;
    private itemId: number = 0;
    private std: StdItem;
    private isInit: boolean = false;
    protected onLoad(): void {
        this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
        this.numLab = this.node.getChildByPath("numLab").getComponent(Label);
        this.isInit = true;
        if (this.itemId > 0) this.updateShow();
    }

    protected onEnable(): void {
        EventMgr.on(Evt_Item_Change, this.onItemChange, this);

    }

    protected onDisable(): void {
        EventMgr.off(Evt_Item_Change, this.onItemChange, this);

    }

    private onItemChange(changeMap: { [key: number]: number }): void {
        if (changeMap[this.itemId] != undefined) {
            this.updateNum();
        }
    }

    SetData(itemId: number,  notNumColor?: string): void {
        this.itemId = itemId;
        this.updateShow();
    }

    private  updateShow(): void {
        if (!this.isInit || this.itemId < 1) return;
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
        this.numLab.string = `${haveNum}`;
    }

}