import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { BeforeGameUtils } from "../../../utils/BeforeGameUtils";
import { CardLocation } from "../../player/PlayerStruct";
import proto from "../../../net/Protocol";

/**
 * 复制一张卡
 */
export class Out_CopyCard extends BattleBaseComp<proto.base.IBattleRoomOpOutput_CopyCard> {

    protected async start(): Promise<void> {
        let copyCard: proto.base.IBattleRoomCardData = battleDataMgr.getCard(this.data.copyInstId);
        //复制来源是否第一觉玩家
        let copyPlayerIsA: boolean = battleDataMgr.isPlayerA(copyCard.playerId);
        //是否复制到第一觉玩家
        let toPlayerIsA: boolean = battleDataMgr.isPlayerA(this.data.card.playerId);
        //复制卡来源
        switch (this.data.card.location) {
            case proto.base.BattleRoomCardLocation.Hand:
                //复制的卡出现在屏幕中间然后飞到对应目标玩家的手卡区
                await this.scene.AddCardToHand(toPlayerIsA, this.data, proto.base.BattleRoomCardLocation.Unknown, copyCard);
                if (this.isExit) return;
                // this.scene.AddCardFormSceneCentreToHand(toPlayerIsA, this.data.card);
                break;
            case proto.base.BattleRoomCardLocation.Terrain:
                //复制的卡出现在屏幕中间然后飞到对应目标玩家的场地上区
                let cardLocation: CardLocation = battleDataMgr.getPlayerAreaEmptyCardLocationByIdx(this.data.card.playerId, this.data.card.area);
                await this.scene.AddCardToArea(toPlayerIsA, this.data, copyCard, cardLocation.areaIdx, cardLocation.cardIdx);
                if (this.isExit) return;
                break;
            case proto.base.BattleRoomCardLocation.Deck:
            case proto.base.BattleRoomCardLocation.Del:
            case proto.base.BattleRoomCardLocation.Drop:
                //复制的卡出现在屏幕中间然后飞到对应目标玩家的头像区
                await this.scene.CopyCardToUnVisible(toPlayerIsA, this.data, copyCard);
                if (this.isExit) return;
                // this.scene.AddCardFormSceneCentreToHead(toPlayerIsA, this.data.card);
                break;
            default:
                break;
        }
        this.exit();
    }

    protected reset(): void {

    }
}