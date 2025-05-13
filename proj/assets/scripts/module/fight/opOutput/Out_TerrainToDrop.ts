import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 从场景区到弃牌区
 */
export class Out_TerrainToDrop extends BattleBaseComp<proto.base.IBattleRoomOpOutput_TerrainToDrop> {
    protected async start(): Promise<void> {
        await this.scene.RmoveCardFormArea(battleDataMgr.isPlayerA(this.ownerPlayerId), this.data, proto.base.BattleRoomCardLocation.Drop);
        if (this.isExit) return;
        // await Second(0.5);
        this.exit();
    }

    protected reset(): void {

    }
}