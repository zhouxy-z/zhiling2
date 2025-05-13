import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
/**
 * 从手卡区到弃卡区
 */
export class Out_HandToDrop extends BattleBaseComp<proto.base.IBattleRoomOpOutput_HandToDrop> {
    protected async start(): Promise<void> {
        await this.scene.RemoveCardFormHand(battleDataMgr.isPlayerA(this.ownerPlayerId), this.data, proto.base.BattleRoomCardLocation.Drop);
        if (this.isExit) return;
        // await Second(0.5);
        this.exit();
    }

    protected reset(): void {

    }
}