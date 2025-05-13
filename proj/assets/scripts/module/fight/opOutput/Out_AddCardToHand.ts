
import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 添加卡牌到手卡
 */
export class Out_AddCardToHand extends BattleBaseComp<proto.base.IBattleRoomOpOutput_AddCardToHand> {
    private isAddCardEnd: boolean = false;//是否添加手牌结束
    protected async start() {
        let fromIsPlayerA: boolean = battleDataMgr.isPlayerA(this.data.fromPlayerId);
        let toIsPlayerA: boolean = battleDataMgr.isPlayerA(this.data.card.playerId);
        let tt = await this.scene.AddCardToHand(toIsPlayerA, this.data);
        if (this.isExit) return;
        // switch (this.data.fromLocation) {
        //     //非可视区域卡牌添加到手卡
        //     case base.BattleRoomCardLocation.Deck:
        //     case base.BattleRoomCardLocation.Drop:
        //     case base.BattleRoomCardLocation.Del:
        //         if ((fromIsPlayerA && toIsPlayerA) || (!fromIsPlayerA && !toIsPlayerA)) {
        //             //来源区域与目标区域都是第一视觉玩家 或者 来源区域与目标区域都是第二视觉玩家 
        //             this.scene.AddCardFormHeadToHand(toIsPlayerA, this.data);
        //         } else if (fromIsPlayerA && !toIsPlayerA) {
        //             //来源区域是第一视觉玩家目标区域是第二视觉玩家 
        //             this.scene.AddCardFormMyHeadToAdHand(this.data.fromInstId, this.data.fromSkillId, this.data.card);
        //         } else if (!fromIsPlayerA && toIsPlayerA) {
        //             //来源区域是第二视觉玩家目标区域是第第一视觉玩家 
        //             this.scene.AddCardFormAdHeadToMyHand(this.data.fromInstId, this.data.fromSkillId, this.data.card);
        //         }
        //         break;
        //     case base.BattleRoomCardLocation.Unknown://凭空出现的卡（系统发卡， 或者技能生产一张卡）
        //         this.scene.AddCardFormHeadToHand(toIsPlayerA, this.data);
        //         break;
        //     //地形上的添加到手卡区
        //     case base.BattleRoomCardLocation.Terrain:
        //         this.scene.AddCardFormAreaToHand(toIsPlayerA, this.data.fromInstId, this.data.fromSkillId, this.data.card);
        //         break;
        // }
        // if (0.5 - tt > 0) await Second(0.5 - tt);
        this.exit();

    }

    protected onUpdate(dt: number): void {
        if (!this.isAddCardEnd) return;
        //全部动作完成退出播放
        this.exit();
    }

    protected reset(): void {
        this.isAddCardEnd = false;
    }
}
