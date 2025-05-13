import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 窥视卡牌
 */
export class Out_Peek extends BattleBaseComp<proto.base.IBattleRoomOpOutput_Peek> {
    protected async start() {

        if (this.data.handCards && Object.keys(this.data.handCards).length) {
            //窥视手卡
            await this.scene.PeekHandCards(this.data, proto.base.BattleRoomCardLocation.Hand);
            if (this.isExit) return;
        } else if (this.data.terrainData && Object.keys(this.data.terrainData).length) {
            //将窥视方加入窥视队列（服务器会在下个回合才添加上）
            let terrainData: proto.base.IBattleRoomTerrainData;
            for (let key in this.data.terrainData) {
                terrainData = this.data.terrainData[key];
                if (!terrainData.peek) terrainData.peek = [];
                terrainData.peek.push(this.ownerPlayerId);
            }

            //窥视地形
            let isplayerA = battleDataMgr.isPlayerA(this.ownerPlayerId)
            await this.scene.PeekTerrain(isplayerA, this.data, this.ownerPlayerId);
            if (this.isExit) return;
        } else if (this.data.deckCards && Object.keys(this.data.deckCards).length) {
            //窥视卡组
            await this.scene.PeekHandCards(this.data, proto.base.BattleRoomCardLocation.Deck);
            if (this.isExit) return;
        }
        this.exit();
    }

    protected reset(): void {

    }
}