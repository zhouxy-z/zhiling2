import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 卡组区域到删除区域
 */
export class Out_DeckToDel extends BattleBaseComp<proto.base.IBattleRoomOpOutput_DeckToDel> {
    protected async start(): Promise<void> {
        await this.scene.RemoveDeckToUnVisible(battleDataMgr.isPlayerA(this.ownerPlayerId), this.data, proto.base.BattleRoomCardLocation.Del);
        if (this.isExit) return;
        // await Second(0.3);
        this.exit();
    }

    protected reset(): void {

    }
}