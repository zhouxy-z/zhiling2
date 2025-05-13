import proto from "../../net/Protocol";

/**
 * 战斗数据
 */
export class FightData {
    static currentRound: number = 0;
    static Energy: number;
    static cardState: { [instId: string]: number } = {};
    static cardBack: { [playerId: string]: string } = {};//玩家卡背
    static BattleRoomOpOutputType: proto.base.BattleRoomOpOutputType;
}

