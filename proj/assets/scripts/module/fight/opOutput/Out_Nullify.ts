import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 从场景区到弃牌区
 */
export class Out_Nullify extends BattleBaseComp<proto.base.IBattleRoomOpOutput_Nullify> {
    protected async start(): Promise<void> {
        let isPlayerA = battleDataMgr.isPlayerA(this.ownerPlayerId);
        this.scene.RemoveSkill(isPlayerA, this.data);
        this.exit();
    }

    protected reset(): void {
        
    }   
}