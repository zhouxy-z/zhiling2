import { Component, Label, Sprite, SpriteFrame, _decorator, path } from "cc";
import { CfgMgr, ItemType, StdItem, ThingType, ThingTypeName } from "../../manager/CfgMgr";
import { ResMgr, folder_card, folder_item, folder_money } from "../../manager/ResMgr";
import { Utils } from "../../utils/Utils";
import proto from "../../net/Protocol";
import { AsyncComponent } from "../common/AsyncComponent";

const { ccclass, property, disallowMultiple, requireComponent } = _decorator;

@ccclass('BagItem')
@disallowMultiple(true)
export class BagItem extends AsyncComponent {
    protected bg: Sprite;
    protected icon: Sprite;
    protected label: Label;
    protected nameLab: Label;

    private thing: proto.base.IThing;

    protected onLoad(): void {
        this.hasLoad = true;
        this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
        this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
        this.label = this.node.getChildByPath("label").getComponent(Label);
        this.nameLab = this.node.getChildByPath("nameLab").getComponent(Label);
        if (this.icon.node.scale.x == 1) {
            this.icon.node.setScale(0.6, 0.6, 0.6);
        }
        super.onLoad();
    }

    async setThing(data: proto.base.IThing) {
        if (!this.hasLoad) await this.loadSub;
        this.thing = data;
        if (this.thing.item) {
            let stdItem = CfgMgr.Getitem(this.thing.item.id);
            this.bg.spriteFrame = await ResMgr.LoadResAbSub("sheets/bag/Quality" + stdItem.Quality + "/spriteFrame", SpriteFrame);
            this.icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame);
            this.label.string = Utils.formatNumber(this.thing.item.count);
            this.nameLab.string = stdItem.ItemName;
        } else if (this.thing.card) {
            let stdCard = CfgMgr.GetCard(this.thing.card.cardId);
            this.bg.spriteFrame = await ResMgr.LoadResAbSub("sheets/bag/Quality" + data.card.quality + "/spriteFrame", SpriteFrame);
            this.icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_card, stdCard.CardBody, "spriteFrame"), SpriteFrame);
            this.label.string = stdCard.CardName;
            this.nameLab.string = ""
        }
    }

    async setItem(itemType?: number, itemId?: number, count?: number) {
        if (!this.hasLoad) await this.loadSub;
        let url: string;
        if (!itemType) {
            this.bg.spriteFrame = await ResMgr.LoadResAbSub("sheets/bag/Quality1/spriteFrame", SpriteFrame);
            url = path.join(folder_money, "货币0" + itemId, "spriteFrame");
            this.nameLab.string = "";
        } else if (itemType == ThingType.item || itemType == ThingType.equipment || itemType == ThingType.playerexp) {
            let std = CfgMgr.Getitem(itemId);
            this.bg.spriteFrame = await ResMgr.LoadResAbSub("sheets/bag/Quality" + std.Quality + "/spriteFrame", SpriteFrame);
            url = path.join(folder_item, std.Icon, "spriteFrame");
            this.nameLab.string = std.ItemName;
        } else if (itemType == ThingType.battlecard) {
            let deliver = CfgMgr.GetBattleCardDeliver(itemId);
            let stdCard = CfgMgr.GetCard(deliver.CardID);
            this.bg.spriteFrame = await ResMgr.LoadResAbSub("sheets/bag/Quality" + deliver.CardQuality + "/spriteFrame", SpriteFrame);
            this.icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_card, stdCard.CardBody, "spriteFrame"), SpriteFrame);
            this.label.string = stdCard.CardName;
            this.nameLab.string = ""
        }
        this.icon.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);
        this.label.string = count.toString();
        ThingTypeName
    }
}