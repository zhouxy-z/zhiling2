import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 玩家战力变更
 */
export class Out_PlayerPower extends BattleBaseComp<proto.base.IBattleRoomOpOutput_PlayerPower> {
    protected start(): void {
        if (this.data.terrainPower) {
            let playerPowers: { [k: string]: proto.base.IBattleRoomOpOutput_TerrainPower } = this.data.terrainPower;
            let playerPower: proto.base.IBattleRoomOpOutput_TerrainPower;
            let isPlayerA: boolean;
            for (let key in playerPowers) {
                playerPower = playerPowers[key];
                isPlayerA = battleDataMgr.isPlayerA(key);
                for (let areaIdx = 0; areaIdx < playerPower.basePower.length; areaIdx++) {
                    let powerAttr: proto.base.IBattleRoomAttrValue = playerPower.basePower[areaIdx];
                    let cardMulAttr: proto.base.IBattleRoomAttrValue = playerPower.cardMul[areaIdx];
                    let cardTotalPower: number = battleDataMgr.getPlayerTerrainCardTotalPow(key, areaIdx, false);
                    let newPower: number = cardMulAttr.finalValue * cardTotalPower + powerAttr.finalValue;
                    this.scene.FlushAreaPower(isPlayerA, areaIdx, newPower);
                }
            }
            
            this.exit();
        } else {
            console.error("玩家战力变更数据为空");
            this.exit();
        }
    }
    protected reset(): void {
        
    }
}