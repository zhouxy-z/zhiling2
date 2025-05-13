import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 添加卡牌到卡组区域
 */
export class Out_AddCardToDeck extends BattleBaseComp<proto.base.IBattleRoomOpOutput_AddCardToDeck> {
    protected async start(): Promise<void> {

        await this.scene.AddCardToDeck(battleDataMgr.isPlayerA(this.ownerPlayerId), battleDataMgr.isPlayerA(this.data.card.playerId),this.data);
        if (this.isExit) return;
        this.exit();
    }

    protected reset(): void {
        
    }   
}