import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 从场景区到弃牌区
 */
export class Out_EffectSkill extends BattleBaseComp<proto.base.IBattleRoomOpOutput_EffectSkill> {
    protected async start(): Promise<void> {
        let isPlayerA = battleDataMgr.isPlayerA(this.ownerPlayerId);
        await this.scene.PlaySkill(isPlayerA, this.data);
        if (this.isExit) return;
        // await Second(0.5);
        this.exit();
    }

    protected reset(): void {

    }
}