import { Node, Component } from "cc";
import { Card } from "../cards/Card";
import proto from "../../net/Protocol";
export class CardCollectBoxCardItem extends Component {
    private card: Card;
    private getImg: Node;
    private isInit: boolean = false;
    private data: {cardData: proto.base.IBattleCard, isGet: boolean};
    protected onLoad(): void {
        this.card = this.node.getChildByPath("Cards").addComponent(Card);
        this.getImg = this.node.getChildByPath("getImg");
        this.isInit = true;
        this.updateShow();
    }

    SetData(data: {cardData: proto.base.IBattleCard, isGet: boolean}): void {
        this.data = data;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        this.getImg.active = this.data.isGet;
        this.card.setCardMask(this.data.isGet);
        this.card.SetData(this.data.cardData);
    }
}