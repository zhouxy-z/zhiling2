
import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 从场上数据选择来源卡牌数据
 */
export class Out_AddCard extends BattleBaseComp<proto.base.IBattleRoomOpOutput_AddCard> {
    protected async start(): Promise<void> {
        await this.scene.AddCard(battleDataMgr.isPlayerA(this.data.card.playerId), this.data);
        if (this.isExit) return;
        let formCard: proto.base.IBattleRoomCardData;
        //来源卡可能是来自系统
        if (this.data.sourcePlayerId != "") formCard  = battleDataMgr.getPlayerCard(this.data.sourcePlayerId, this.data.card.instId);
        //此卡如果来自场地则减掉此卡的战力
        if (formCard && this.data.sourceLocation && this.data.sourceLocation == proto.base.BattleRoomCardLocation.Terrain) {
            if (this.data.isMove) {
                //减掉移动来源的卡牌战力
                let fromCardPower: number = battleDataMgr.getPlayerCardPower(this.data.sourcePlayerId, this.data.card.instId);
                let fromTerrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(this.data.sourcePlayerId, formCard.area);
                let offsetPower: number = fromTerrainData.cardMul.finalValue * fromCardPower;
                let fromTotalPower = battleDataMgr.getPlayerTerrainTotalPow(this.data.sourcePlayerId, formCard.area);
                this.scene.FlushAreaPower(battleDataMgr.isPlayerA(this.data.sourcePlayerId), formCard.area, fromTotalPower - offsetPower);
            }
            
        }
        if (this.data.card.location == proto.base.BattleRoomCardLocation.Terrain) {
            //增加目的区域的战力
            let toTerrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(this.data.card.playerId, this.data.card.area);
            let toTotalPower: number = battleDataMgr.getPlayerTerrainTotalPow(this.data.card.playerId, this.data.card.area);
            let addCardPower: number = this.data.card.power ? this.data.card.power.finalValue * toTerrainData.cardMul.finalValue : 0;
            this.scene.FlushAreaPower(battleDataMgr.isPlayerA(this.data.card.playerId), this.data.card.area, toTotalPower + addCardPower);
        }
    
        


        this.exit();
    }

    protected reset(): void {
        
    }   
}