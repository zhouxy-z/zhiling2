import proto from "../../../net/Protocol";
import { Second } from "../../../utils/Utils";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { CardLocation } from "../../player/PlayerStruct";
/**
 * 添加卡牌到场地区域（都是已揭示的牌）
 */
export class Out_AddCardToTerrain extends BattleBaseComp<proto.base.IBattleRoomOpOutput_AddCardToTerrain> {
    private actionEnd: boolean = false;
    protected async start(): Promise<void> {
        let isPlayerA = battleDataMgr.isPlayerA(this.ownerPlayerId);
        let fromIsPlayerA: boolean = battleDataMgr.isPlayerA(this.data.fromPlayerId);
        let toIsPlayerA: boolean = battleDataMgr.isPlayerA(this.data.card.playerId);
        let cardLocation: CardLocation = battleDataMgr.getPlayerAreaEmptyCardLocation(this.data.card.playerId, this.data.terrainInstId);
        
        await this.scene.CardBackToArea(isPlayerA, fromIsPlayerA, toIsPlayerA, cardLocation.areaIdx, cardLocation.cardIdx, this.data);
        if (this.isExit) return;
        let formCard: proto.base.IBattleRoomCardData;
        //来源卡可能是来自系统
        if (this.data.fromPlayerId != "") formCard  = battleDataMgr.getPlayerCard(this.data.fromPlayerId, this.data.card.instId);
        //此卡如果来自场地则减掉此卡的战力
        if (formCard && this.data.fromLocation && this.data.fromLocation == proto.base.BattleRoomCardLocation.Terrain) {
            //减掉移动来源的卡牌战力
            let fromCardPower: number = battleDataMgr.getPlayerCardPower(this.data.fromPlayerId, this.data.card.instId);
            let fromTerrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(this.data.fromPlayerId, formCard.area);
            let offsetPower: number = fromTerrainData.cardMul.finalValue * fromCardPower;
            let fromTotalPower = battleDataMgr.getPlayerTerrainTotalPow(this.data.fromPlayerId, formCard.area);
            this.scene.FlushAreaPower(battleDataMgr.isPlayerA(this.data.fromPlayerId), formCard.area, fromTotalPower - offsetPower);
        }
    
        //增加目的区域的战力
        let toTerrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormId(this.data.card.playerId, this.data.terrainInstId);
        let toTotalPower: number = battleDataMgr.getPlayerTerrainTotalPow(this.data.card.playerId, cardLocation.areaIdx);
        let addCardPower: number = this.data.card.power ? this.data.card.power.finalValue * toTerrainData.cardMul.finalValue : 0;
        this.scene.FlushAreaPower(battleDataMgr.isPlayerA(this.data.card.playerId), cardLocation.areaIdx, toTotalPower + addCardPower);


        await Second(0.5);
        if (this.isExit) return;
        this.exit();
    }

    protected onUpdate(dt: number): void {
        if (!this.actionEnd) return;
        this.exit();
    }

    protected reset(): void {
        this.actionEnd = false;
    }
}