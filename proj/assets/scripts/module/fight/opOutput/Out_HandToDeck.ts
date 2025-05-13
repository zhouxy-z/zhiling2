import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
/**
 * 从手卡区到卡组
 */
export class Out_HandToDeck extends BattleBaseComp<proto.base.IBattleRoomOpOutput_HandToDeck> {
    protected async start(): Promise<void> {
        await this.scene.RemoveCardFormHand(battleDataMgr.isPlayerA(this.ownerPlayerId), this.data, proto.base.BattleRoomCardLocation.Deck);
        if (this.isExit) return;
        // await Second(0.5);
        this.exit();
    }

    protected reset(): void {

    }
}