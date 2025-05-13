import { Battle_ShowSettlement, EventMgr, Evt_BattleDoubleUpdate } from "../../../manager/EventMgr";
import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 结算
 */
export class Out_Settlement extends BattleBaseComp<proto.base.IBattleRoomOpOutput_Settlement> {
    async start() {
        //系统加倍
        if (this.data.settleDoubleCount && this.data.settleDoubleCount > 0) {
            EventMgr.emit(Evt_BattleDoubleUpdate, this.data.settleDoubleCount, this);
        }
        await this.scene.Settlement();
        if (this.isExit) return;
        EventMgr.emit(Battle_ShowSettlement, battleDataMgr.roomData.roomId, battleDataMgr.getPlayerId(true), this.data)
        this.exit();
    }

    protected reset(): void {
        
    }
    
}