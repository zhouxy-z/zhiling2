import { Component } from "cc";
import { CardGroupCoverItem } from "../common/CardGroupCoverItem";
import proto from "../../net/Protocol";

export class VSCardGruopItem extends Component {
    private cardGroup: CardGroupCoverItem;
    private isInit: boolean = false;
    private data: proto.base.IDeckAttrs;
    protected onLoad(): void {
        this.cardGroup = this.node.getChildByPath("CardGroupCoverItem").addComponent(CardGroupCoverItem);
        this.isInit = true;
        this.updateShow();
    }

    SetData(data: proto.base.IDeckAttrs): void {
        this.data = data;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        this.cardGroup.SetData(this.data);
    }
}