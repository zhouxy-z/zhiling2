import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 卡牌由卡组最前到手牌末尾
 */
export class Out_CardDeckFrontToHandTail extends BattleBaseComp<proto.base.IBattleRoomOpOutput_CardDeckTopToHandTail> {
    private isAddCardEnd: boolean = false;//是否添加手牌结束
    protected async start() {
        if (this.data.cards && this.data.cards.length) {
            if (battleDataMgr.isPlayerA(this.ownerPlayerId)) {
                await this.scene.AddHandCard(this.data);
                if (this.isExit) return;
                // await Second(0.5);
            } else {
            }
            this.isAddCardEnd = true;
        } else {
            console.error("补卡数据为空");
            this.exit();
        }
    }

    protected onUpdate(dt: number): void {
        if (!this.isAddCardEnd) return;
        //全部动作完成退出播放
        this.exit();
    }

    protected reset(): void {
        this.isAddCardEnd = false;
    }
}
