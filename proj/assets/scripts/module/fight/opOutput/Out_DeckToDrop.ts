import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { Second } from "../../../utils/Utils";
import proto from "../../../net/Protocol";

/**
 * 卡组区域到弃卡区域
 */
export class Out_DeckToDrop extends BattleBaseComp<proto.base.IBattleRoomOpOutput_DeckToDrop> {
    protected async start(): Promise<void> {
        await this.scene.RemoveDeckToUnVisible(battleDataMgr.isPlayerA(this.ownerPlayerId), this.data, proto.base.BattleRoomCardLocation.Drop);
        if (this.isExit) return;
        await Second(0.3);
        if (this.isExit) return;
        this.exit();
    }

    protected reset(): void {

    }
}