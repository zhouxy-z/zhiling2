import { Component, Label, Node, Sprite, SpriteFrame, _decorator, path } from "cc";
import { AsyncComponent } from "../common/AsyncComponent";
import { BagItem } from "../bag/BagItem";
import proto from "../../net/Protocol";
import { CfgMgr } from "../../manager/CfgMgr";
import { ResMgr, folder_item } from "../../manager/ResMgr";

const { ccclass, property, disallowMultiple, requireComponent } = _decorator;

@ccclass('ShopItem')
@disallowMultiple(true)
export class ShopItem extends AsyncComponent {
    protected data: proto.base.IShopItem;
    protected limtNumLab: Label;
    protected item: BagItem;
    protected disCout: Label;
    protected costImg: Sprite;
    protected costLab: Label;
    protected overtime: Node;
    protected onLoad() {
        this.limtNumLab = this.node.getChildByPath("limtNumLab").getComponent(Label);
        this.item = this.node.getChildByPath("item").addComponent(BagItem);
        this.disCout = this.node.getChildByPath("disCont/disNumLab").getComponent(Label);
        this.costImg = this.node.getChildByPath("consumeItem/costImg").getComponent(Sprite);
        this.costLab = this.node.getChildByPath("consumeItem/costLab").getComponent(Label);
        this.overtime = this.node.getChildByPath("overtime");
        super.onLoad();
    }

    async SetData(data: proto.base.IShopItem) {
        if (!data) return;
        this.data = data;
        if (!this.hasLoad) await this.loadSub;
        let std = CfgMgr.GetCommShopItem(this.data.id);
        if (!std) return;
        // 折扣
        if (std.Discount > 0) {
            this.disCout.node.parent.active = true;
            this.disCout.string = std.Discount.toString();
        } else {
            this.disCout.node.parent.active = false;
        }
        // 剩余数量
        if (std.GoodAmount > 0) {
            this.overtime.active = false;
            this.limtNumLab.node.active = true;
            this.limtNumLab.string = `数量：${data.count}/${std.GoodAmount}`;
        } else {
            this.overtime.active = true;
            this.limtNumLab.node.active = false;
        }
        let stdcost = CfgMgr.GetCommShopItem(data.id);
        let url = path.join(folder_item, CfgMgr.Getitem(stdcost.CostID[0]).Icon, "spriteFrame");
        this.costImg.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);
        this.costLab.string = stdcost.CostNumber[0].toString();
        this.item.setThing(data.sellThings[0]);
    }
}