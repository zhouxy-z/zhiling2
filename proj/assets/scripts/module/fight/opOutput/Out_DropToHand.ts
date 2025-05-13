import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 弃卡区域的卡到手卡
 */
export class Out_DropToHand extends BattleBaseComp<proto.base.IBattleRoomOpOutput_DropToHand> {
    protected async start(): Promise<void> {
        let isPlayerA = battleDataMgr.isPlayerA(this.ownerPlayerId);
        await this.scene.AddCardToHand(isPlayerA, this.data, proto.base.BattleRoomCardLocation.Drop);
        if (this.isExit) return;
        // this.scene.AddCardFormHeadToHand(battleDataMgr.isPlayerA(this.ownerPlayerId), this.data);
        // await Second(0.5);
        this.exit();
    }

    protected reset(): void {

    }
}