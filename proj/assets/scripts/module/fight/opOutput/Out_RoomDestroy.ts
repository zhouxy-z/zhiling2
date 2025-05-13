import { Battle_RoomUnusual, EventMgr } from "../../../manager/EventMgr";
import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
/**
 * 房间异常销毁
 */
export class Out_RoomDestroy extends BattleBaseComp<proto.base.IBattleRoomOpOutput_RoomDestroy> {
    protected start(): void {
        EventMgr.emit(Battle_RoomUnusual, this.data.reason);
        this.exit();
    }
    protected reset(): void {
        
    }

}