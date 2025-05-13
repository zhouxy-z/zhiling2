import proto from "../../../net/Protocol";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { CardLocation } from "../../player/PlayerStruct";
/**
 * 从手牌上场
 */
export class Out_HandToTerrain extends BattleBaseComp<proto.base.IBattleRoomOpOutput_HandToTerrain> {
    private actionEnd: boolean = false;
    protected async start(): Promise<void> {
        // battleDataMgr.getPlayerTerrain(this.data.toTerrainPlayerId)
        if (this.data && this.data.card) {
            let cardLocation: CardLocation;
            if (battleDataMgr.isPlayerA(this.data.toTerrainPlayerId)) {
                //回放模式
                if (battleDataMgr.creatRoomData.isReplay) {
                    cardLocation = battleDataMgr.getPlayerAreaEmptyCardLocation(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
                    await this.scene.AutoPlayHand(this.data.card, cardLocation.areaIdx, cardLocation.cardIdx);
                    if (this.isExit) return;
                    await this.scene.CloseCard(this.data.card);
                    if (this.isExit) return;
                    console.log("--------->盖牌完成");
                    this.actionEnd = true;
                } else {
                    await this.scene.CloseCard(this.data.card);
                    if (this.isExit) return;
                    console.log("--------->盖牌完成");
                    this.actionEnd = true;
                }
                //
                
                // await Second(1);
                
            } else {
                cardLocation = battleDataMgr.getPlayerAreaEmptyCardLocation(this.data.toTerrainPlayerId, this.data.toTerrainInstId);
                if (cardLocation) {
                    /**
                     * TODO 对手卡需要作由 盖着出牌 到区域（卡牌由盖牌到显示要等下个包处理变化）
                     */
                    await this.scene.SendAdCardToArea(this.data.card, cardLocation.areaIdx, cardLocation.cardIdx);
                    if (this.isExit) return;
                    // await Second(1);
                    this.actionEnd = true;
                } else {
                    console.error("手牌到地形区域卡牌位置为空");
                    this.exit();
                }
                
            }
            
        } else {
            console.error("手牌到地形区域数据为空");
            this.exit();
        }
    }

    protected onUpdate(dt: number): void {
        if (!this.actionEnd) return;
        this.exit();
    }

    protected reset(): void {
        this.actionEnd = false;
    }
}