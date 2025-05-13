import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { CardLocation } from "../../player/PlayerStruct";
/**
 * 区域上的卡牌移动（包括手动移动动移动 ）
 */
export class Out_TerrainToTerrain extends BattleBaseComp<proto.base.IBattleRoomOpOutput_TerrainToTerrain> {
    
    protected start(): void {
        if (this.data) {
            this.toMove();
        } else {
            this.exit();
        }
    }

    protected reset(): void {
       
    }

    private async toMove() {
        if (this.data.success) {
            //移动成功

            //开始移动的地形是否第一视觉玩家
            let fromTerrainIsA: boolean = battleDataMgr.isPlayerA(this.data.fromTerrainPlayerId);
            //目标去到的地形是否第一视觉玩家
            let toTerrainIsA: boolean = battleDataMgr.isPlayerA(this.data.toTerrainPlayerId);
            //手动移动并且第一视觉方移动不做处理（因为在操作移动上已修改数据了）
            if (this.data.manual && fromTerrainIsA && toTerrainIsA) {
                this.exit();
                return;
            }
            //移动卡牌的开始位置
            let startCardLocation: CardLocation = battleDataMgr.getPlayerCardLocation(this.data.fromTerrainPlayerId, this.data.card.instId);
            //移动卡牌的目标位置
            let targetCardLocation: CardLocation = battleDataMgr.getPlayerAreaEmptyCardLocation(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
            
            /**
            * TODO 这里实现起移动效果 (只做了简单位置交换)
            */
            await this.scene.CardAreaMove(battleDataMgr.isPlayerA(this.data.toTerrainPlayerId), targetCardLocation.areaIdx, targetCardLocation.cardIdx, this.data);
            
            //减掉移动来源的卡牌战力
            let fromCardPower: number = battleDataMgr.getPlayerCardPower(this.data.fromTerrainPlayerId, this.data.card.instId);
            let fromTerrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormId(this.data.fromTerrainPlayerId, this.data.fromTerrainInstId);
            let offsetPower: number = fromTerrainData.cardMul.finalValue * fromCardPower;
            let fromTotalPower = battleDataMgr.getPlayerTerrainTotalPow(this.data.fromTerrainPlayerId, startCardLocation.areaIdx);
            this.scene.FlushAreaPower(fromTerrainIsA, startCardLocation.areaIdx, fromTotalPower - offsetPower);

            //增加移动目的区域的战力
            let toTerrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormId(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
            let toTotalPower: number = battleDataMgr.getPlayerTerrainTotalPow(this.data.toTerrainPlayerId, targetCardLocation.areaIdx);
            let addCardPower: number = this.data.card.power ? this.data.card.power.finalValue * toTerrainData.cardMul.finalValue : 0;
            this.scene.FlushAreaPower(fromTerrainIsA, targetCardLocation.areaIdx, toTotalPower + addCardPower);
            this.exit();
        } else {
            /**
             * TODO 暂时没有移动失败的表现
             */
            this.exit();
        }
    
    }

}