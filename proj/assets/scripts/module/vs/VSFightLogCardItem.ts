import { Component } from "cc";
import { Card } from "../cards/Card";
import proto from "../../net/Protocol";

export class VSFightLogCardItem extends Component {
    private card: Card;
    private isInit: boolean = false;
    private data: proto.base.IDeckAttrs;
    protected onLoad(): void {
        this.card = this.node.getChildByPath("Cards").addComponent(Card);
        this.card.setIsShowUpEffect(false);
        this.isInit = true;
        if (this.data) this.updateShow();
    }

    SetData(data: proto.base.IDeckAttrs): void {
        this.data = data;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        this.card.SetData(this.data);
    }
}