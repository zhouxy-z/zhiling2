import proto from "../../../net/Protocol";
import { Second } from "../../../utils/Utils";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 锁定地形区域区域
 */
export class Out_LockZone extends BattleBaseComp<proto.base.IBattleRoomOpOutput_LockZone> {
    protected async start(): Promise<void> {
        let isPlayerA = battleDataMgr.isPlayerA(this.ownerPlayerId);
        await this.scene.LockTerrain(isPlayerA,this.data);
        if (this.isExit) return;
        await Second(0.3);
        if (this.isExit) return;
        this.exit();
    }

    protected reset(): void {
        
    }   
};