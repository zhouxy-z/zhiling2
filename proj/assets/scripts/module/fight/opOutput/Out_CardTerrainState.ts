import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { BattleRoundOperationState } from "../../player/PlayerStruct";

/**
 * 卡牌在地形上的状态改变（由盖牌到显示）
 */
export class Out_CardTerrainState extends BattleBaseComp<proto.base.IBattleRoomOpOutput_CardTerrainState> {

    protected async start(): Promise<void> {
        if (this.data && this.data.card) {
            if (battleDataMgr.curRoundRevealPlayerId != "") {
                this.scene.FlushRevealPlayer(battleDataMgr.isPlayerA(battleDataMgr.curRoundRevealPlayerId));
            }

            this.scene.FlushRoundBtnStrState(BattleRoundOperationState.PlaceRound);
            this.scene.FlushRound(this.round, battleDataMgr.roomData.roundMax.finalValue);
            await this.scene.ShowCard(this.data.card);
            if (this.isExit) return;
            // await Second(2)
            let playerId: string = this.data.card.playerId;
            let terrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(playerId, this.data.card.area);
            let addPower: number = this.data.card.power ? this.data.card.power.finalValue * terrainData.cardMul.finalValue: 0;//增加战力
            let oldPower: number = battleDataMgr.getPlayerTerrainTotalPow(playerId, this.data.card.area);//旧战力
            this.scene.FlushAreaPower(battleDataMgr.isPlayerA(playerId), this.data.card.area, oldPower + addPower);
            this.exit();
        } else {
            console.error("卡牌在地形上改变状态数据为空");
            this.exit();
        }
    }

    protected reset(): void {
        battleDataMgr.curRoundRevealPlayerId = "";
        this.scene.FlushRevealPlayer(null);
        this.scene.FlushRoundBtnStrState(BattleRoundOperationState.EndRound);
    }
}