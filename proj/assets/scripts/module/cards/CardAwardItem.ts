import { Node, Component, Label } from "cc";
import { Card } from "./Card";
import { Utils } from "../../utils/Utils";
import proto from "../../net/Protocol";
export class CardAwardItem extends Component {
    private card: Card;
    private lock: Node;
    private getImg: Node;
    private isInit: boolean = false;
    private data: proto.base.IBattleCard;
    protected onLoad(): void {
        this.card = this.node.getChildByPath("Cards").addComponent(Card);
        this.lock = this.node.getChildByPath("lock");
        this.getImg = this.node.getChildByPath("getImg");
        this.isInit = true;
        this.updateShow();
    }

    SetData(data: proto.base.IBattleCard): void {
        this.data = data;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        if (!this.data.id) {
            this.lock.active = true;
            this.getImg.active = false;
            Utils.SetNodeGray(this.card.node, true);
        } else {
            this.lock.active = false;
            this.getImg.active = true;
            Utils.SetNodeGray(this.card.node, false);
        }
        this.card.SetData(this.data);
    }
}