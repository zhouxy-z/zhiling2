import proto from "../../../net/Protocol";
import { Second } from "../../../utils/Utils";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
/**
 * 回合数增加
 */
export class Out_RoundData extends BattleBaseComp<proto.base.IBattleRoomOpOutput_RoundData> {
    protected async start(): Promise<void> {
        if (battleDataMgr.isPlayerA(this.ownerPlayerId)) {
            let oldMaxRound: number = battleDataMgr.roomData.roundMax.finalValue;
            this.scene.FlushRound(this.round, oldMaxRound + 1);
            await Second(0.5);
            if (this.isExit) return;
            this.exit();
        } else {
            this.exit();
        }
        
    }
    protected reset(): void {
        
    }
    
}