import { Battle_End_Round, Battle_PlayNewRoundEffect, Battle_UpdateTerrain, EventMgr } from "../../../manager/EventMgr";
import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { FightData } from "../FightData";

/**
 * 重置战斗房间数据
 */
export class Out_RetransmissionRound extends BattleBaseComp<proto.base.IBattleRoomOpOutput_NewRound> {
    protected async start() {
        await this.setRoomData();
        if (this.isExit) return;
        FightData.currentRound = battleDataMgr.curRound;
        this.scene.FlushRound(this.round, battleDataMgr.roomData.roundMax.finalValue);
        this.exit();
    }

    protected reset(): void {
        
    }

    protected onUpdate(dt: number): void {
        
    }
    /**
     * 初始化房间数据
     */
    private async setRoomData() {

        // 刷新场景手牌和卡牌
        let playerData: proto.base.IBattleRoomPlayerData;
        let isPlayerA: boolean;
        for (let key in this.data.gamePlayData.players) {
            playerData = this.data.gamePlayData.players[key];

            let terrainMax = battleDataMgr.roomData.terrainMax;
            isPlayerA = battleDataMgr.isPlayerA(playerData.playerId);
            this.scene.FlushPlayerInfo(isPlayerA, playerData);
            let totalPower: number;
            for (let areaIdx = 0; areaIdx < terrainMax; areaIdx++) {
                let cardData: proto.base.IBattleRoomTerrainPlayerData = playerData.terrain[areaIdx]
                await this.scene.FlushAreaCrads(isPlayerA, areaIdx, cardData);
                if (this.isExit) return;
                totalPower = battleDataMgr.getPlayerTerrainTotalPow(playerData.playerId, areaIdx);
                this.scene.FlushAreaPower(isPlayerA, areaIdx, totalPower);
            }

            if (isPlayerA) {
                await this.setHandCard(playerData.handCards);
                if (this.isExit) return;
                let curEnergy: number = playerData.roundEnergy[this.round - 1]?.finalValue;
                this.scene.FlushEnergy(curEnergy);
            }
        }

        // 初始场景区域
        await this.scene.FlushTerrain(true, this.data.gamePlayData, this.ownerPlayerId);
        if (this.isExit) return;
        EventMgr.emit(Battle_UpdateTerrain, this.data.gamePlayData.terrains, this.data.gamePlayData);
    }

    /**
     * 设置手卡数据
     */
    private async setHandCard(cards: proto.base.IBattleRoomCardData[]) {
        await this.scene.FlushHandCard(cards);
        
    }

}