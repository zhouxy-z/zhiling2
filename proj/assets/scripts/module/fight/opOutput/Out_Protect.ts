import proto from "../../../net/Protocol";
import { Second } from "../../../utils/Utils";
import { BattleBaseComp } from "../../battle/BattleBaseComp";

/**
 * 卡牌上的buff增加或者改变
 */
export class Out_Protect extends BattleBaseComp<proto.base.IBattleRoomOpOutput_Protect> {
    protected async start(): Promise<void> {
        
        await Second(0.3);
        if (this.isExit) return;
        this.exit();
    }

    protected reset(): void {
        
    }   
}