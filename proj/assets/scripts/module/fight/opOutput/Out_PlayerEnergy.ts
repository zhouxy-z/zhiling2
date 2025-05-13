import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
/**
 * 玩家能量点变更
 */
export class Out_PlayerEnergy extends BattleBaseComp<proto.base.IBattleRoomOpOutput_PlayerEnergy> {
    protected start(): void {

        if (battleDataMgr.isPlayerA(this.data.playerId)) {
            let curEnergy: number = this.data.energy[this.round - 1]?.finalValue;
            this.scene.FlushEnergy(curEnergy,this.data);
        } else {
            //对方能量点不让看，所以现在不作处理    
        }

        this.exit();
    }

    protected reset(): void {

    }
}