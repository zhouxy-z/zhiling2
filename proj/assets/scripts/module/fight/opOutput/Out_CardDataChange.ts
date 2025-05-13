import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";

/**
 * 卡牌数据变更
 */
export class Out_CardDataChange extends BattleBaseComp<proto.base.IBattleRoomOpOutput_CardDataChange> {
    protected async start(): Promise<void> {
        let oldCardData: proto.base.IBattleRoomCardData;
        let isPlayerA = battleDataMgr.isPlayerA(this.data.card.playerId);
        switch (this.data.card.location) {
            case proto.base.BattleRoomCardLocation.Hand://修改手卡
                oldCardData = battleDataMgr.getPlayerHandCard(this.ownerPlayerId, this.data.card.instId);
                break;
            case proto.base.BattleRoomCardLocation.Deck://修改卡组
                oldCardData = battleDataMgr.getPlayerDeckCard(this.ownerPlayerId, this.data.card.instId);
                break;
            case proto.base.BattleRoomCardLocation.Drop://修改弃卡
                oldCardData = battleDataMgr.getPlayerDropCard(this.ownerPlayerId, this.data.card.instId);
                break;
            case proto.base.BattleRoomCardLocation.Del://修改删除卡
                oldCardData = battleDataMgr.getPlayerDelCard(this.ownerPlayerId, this.data.card.instId);
                break;
            case proto.base.BattleRoomCardLocation.Terrain://修改地形卡
                oldCardData = battleDataMgr.getPlayerTerrainCard(this.ownerPlayerId, this.data.card.instId);
                break;
            default:
                console.error("修改来源未知卡")
                console.dir(this.data.card);
                break;
        }

        
        let add: proto.base.IBattleRoomSkillData[] = [];//增加的技能
        let remove: proto.base.IBattleRoomSkillData[] = [];//被移除的技能
        let valMap = {};
        let skill: proto.base.IBattleRoomSkillData;
        for (let index = 0; index < oldCardData.skills.length; index++) {
            skill = oldCardData.skills[index];
            valMap[skill.skillId] = skill;
        }
    
        for (let index = 0; index < this.data.card.skills.length; index++) {
            skill = this.data.card.skills[index];
            if (!valMap[skill.skillId]) {
                add.push(skill)
            } else {
                delete valMap[skill.skillId];
            }
        }
        
        for (let key in valMap) {
            remove.push(valMap[key]);
        }
        
        
        await this.scene.CardDataChange(isPlayerA, this.data);
        if (this.isExit) return;
        if (oldCardData && oldCardData.power) {
            let oldPower: number = oldCardData.power.finalValue;
            let curPower: number = this.data.card.power.finalValue;
            if (oldPower != curPower) {
                //战力变更
                let terrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(oldCardData.playerId, oldCardData.area);
                if (this.data.card.location == proto.base.BattleRoomCardLocation.Terrain) {
                    let offsetPower: number = terrainData.cardMul.finalValue * (curPower - oldPower);
                    let oldTotalPower = battleDataMgr.getPlayerTerrainTotalPow(oldCardData.playerId, oldCardData.area);
                    this.scene.FlushAreaPower(isPlayerA, oldCardData.area, oldTotalPower + offsetPower);
                }
                
            }
            let oldCost: number = oldCardData.cost.finalValue;
            let curCost: number = this.data.card.cost.finalValue;
            if (oldCost != curCost) {
                //费电变更

            }

          
        }
        // Second(0.3);
        this.exit();
    }

    protected reset(): void {

    }
}