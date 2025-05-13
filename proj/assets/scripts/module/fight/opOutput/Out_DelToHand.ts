import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { Second } from "../../../utils/Utils";
import proto from "../../../net/Protocol";

/**
 * 删除区域的卡到手卡
 */
export class Out_DelToHand extends BattleBaseComp<proto.base.IBattleRoomOpOutput_DelToHand> {
    protected async start(): Promise<void> {
        let isPlayerA = battleDataMgr.isPlayerA(this.ownerPlayerId);
        // this.scene.AddCardFormHeadToHand(isPlayerA, this.data);
        await this.scene.AddCardToHand(isPlayerA, this.data,proto.base.BattleRoomCardLocation.Del);
        if (this.isExit) return;
        await Second(0.5);
        if (this.isExit) return;
        this.exit();
    }

    protected reset(): void {

    }
}