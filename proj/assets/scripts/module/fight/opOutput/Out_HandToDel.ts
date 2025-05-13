import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 手卡 区到删除区
 */
export class Out_HandToDel extends BattleBaseComp<proto.base.IBattleRoomOpOutput_HandToDel> {
    protected async start(): Promise<void> {
        await this.scene.RemoveCardFormHand(battleDataMgr.isPlayerA(this.ownerPlayerId), this.data, proto.base.BattleRoomCardLocation.Del);
        if (this.isExit) return;
        // await Second(0.5);
        this.exit();
    }

    protected reset(): void {

    }
}