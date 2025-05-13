import { Node, Component, Label } from "cc";
import { Card } from "./Card";
import { Utils } from "../../utils/Utils";
import proto from "../../net/Protocol";
export class CardClassItem extends Component {
    private card: Card;
    private lock: Node;
    private isInit: boolean = false;
    private data: proto.base.IBattleCard;
    protected onLoad(): void {
        this.card = this.node.getChildByPath("Cards").addComponent(Card);
        this.lock = this.node.getChildByPath("lock");
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
            Utils.SetNodeGray(this.card.node, true);
        } else {
            this.lock.active = false;
            Utils.SetNodeGray(this.card.node, false);
        }
        this.card.SetData(this.data);
    }
}