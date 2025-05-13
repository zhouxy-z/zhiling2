import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { Battle_UpdateTerrain, EventMgr } from "../../../manager/EventMgr";
import proto from "../../../net/Protocol";
import { battleDataMgr } from "../../battle/BattleDataMgr";
/**
 * 房间区域数据
 */
export class Out_BattleRoomOpOutput_TerrainData extends BattleBaseComp<proto.base.IBattleRoomOpOutput_TerrainData> {

    protected async start() {
        let ispLayerA = battleDataMgr.isPlayerA(this.ownerPlayerId)
        await this.scene.FlushTerrain(ispLayerA, [this.data.terrainData], this.ownerPlayerId);
        if (this.isExit) return;
        EventMgr.emit(Battle_UpdateTerrain, [this.data.terrainData]);
        this.exit();
    }

    protected reset(): void {

    }

}