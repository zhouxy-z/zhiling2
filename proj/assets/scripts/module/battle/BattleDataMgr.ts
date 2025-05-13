import { Battle_ShowSettlement, EventMgr } from "../../manager/EventMgr";
import { base } from "../../net/proto/proto";
import proto from "../../net/Protocol";
import { DateUtils } from "../../utils/DateUtils";
import LocalStorage from "../../utils/LocalStorage";
import { PlayerData } from "../player/PlayerData";
import { BattleOpData, BattlePackData, BattleRoomInstType, CardLocation } from "../player/PlayerStruct";
import { PanelDefine } from "../../PanelDefine";
import { FightData } from "../fight/FightData";
import { CfgMgr } from "../../manager/CfgMgr";

/**
 * 战斗数据管理
 */
export class BattleDataMgr {
    //当前创建房间数据
    private _creatRoomData: proto.base.IBattleRoomSummary;
    //房间数据
    private _roomData: proto.base.IBattleRoomLevelData;
    //玩家数据
    private _playerDatas: { [k: string]: proto.base.IBattleRoomPlayerData };
    //地形列表
    private _terrains: proto.base.IBattleRoomTerrainData[];
    //当前回合
    private _currentRound: number;
    private _doubleData: { [k: string]: proto.base.IBattleRoomPlayerDataNotGamePlay }
    //战斗数据包列表
    private _battlePackList: BattleOpData[] = [];
    //第一人称视觉玩家
    private _playerA: Map<string, boolean> = new Map();
    private _curRoundRevealPlayerId: string = "";
    //设置创建的房间数据
    public setCreatRoomData(roomData: proto.base.IBattleRoomSummary): void {
        this._creatRoomData = roomData;
        FightData.cardBack = {};
        for (let key in this._creatRoomData.players) {
            let playerData: proto.base.IBattleRoomSummaryPlayer = this._creatRoomData.players[key];
            let cardGroupData: proto.base.IDeckAttrs = playerData.deckAttr;
            let stdCardBack = CfgMgr.GetCardBackCfgById(cardGroupData?.cardBackId);
            let cardBackName: string = stdCardBack ? stdCardBack.icon1 : "bg_1";
            FightData.cardBack[playerData.playerId] = cardBackName;
        }
    }

    //设置房间加倍数据
    public setRoomDouble(roomId: string, data: { [k: string]: proto.base.IBattleRoomPlayerDataNotGamePlay }): void {
        this._doubleData = data;
    }
    /**
     * 获取当前加倍次数
     * @returns 
     */
    public getRoomDoubleNum(addCont: number = 0): number {
        let base: number = 1;
        let doubleCont: number = 0;
        for (let key in this._doubleData) {
            let doubleData: proto.base.IBattleRoomPlayerDataNotGamePlay = this._doubleData[key];
            doubleCont += doubleData.doubleCount;
        }
        doubleCont += addCont;
        return base * Math.pow(2, doubleCont);
    }
    /**获取玩家剩余可加倍次数 */
    public getPlayerDoubleResidue(playerId: string): number {
        let doubleData: proto.base.IBattleRoomPlayerDataNotGamePlay = this._doubleData[playerId];
        return doubleData?.doubleCount || 0;
    }

    /**
     * 获取创建的房间数据
     */
    public get creatRoomData(): proto.base.IBattleRoomSummary {
        return this._creatRoomData;
    }

    /**
     * 添加战斗数据
     */
    public addBattleData(roomId: string, packList: proto.base.IBattleRoomOpOutput[]): void {
        if (!this._creatRoomData) {
            console.warn(`未创建战斗房间`);
            return;
        } 
        if (this._creatRoomData.roomId != roomId) {
            console.warn(`收到错误房间数据--->${roomId}当前房间----->${this._creatRoomData.roomId}`);
            return;
        }
        for (let data of packList) {
            this.analysisBattleData(roomId, data);
        }
    }

    private getInstType(instId: string): BattleRoomInstType {
        let str: string = instId.split(":")[0];
        let type: BattleRoomInstType;
        switch (str) {
            case "card":
                type = BattleRoomInstType.RoomInstCard;
                break;
            case "terr":
                type = BattleRoomInstType.RoomInstTerrain;
                break;
            case "player":
                type = BattleRoomInstType.RoomInstPlayer;
                break;
        }
        return type
    }
    /**
     * 解析战斗数据包
     * @param data 
     */
    private analysisBattleData(roomId: string, data: proto.base.IBattleRoomOpOutput): void {
        console.log("战斗房间id-------->" + this._creatRoomData.roomId + "------------>" + roomId)
        let packData: any;
        let comp: any;
        let changeDataCall: (playerId: string, data: any) => void;
        // console.dir(data);
        switch (data.opType) {
            //新的回合0
            case proto.base.BattleRoomOpOutputType.Out_NewRound:
                packData = data.newRound;
                comp = PanelDefine.Out_NewRound;
                this.setBattleRoomData(data.newRound.gamePlayData);
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //卡牌由卡组最前到手牌末尾1
            case proto.base.BattleRoomOpOutputType.Out_CardDeckFrontToHandTail:
                packData = data.cardDeckTopToHandTail;
                comp = PanelDefine.Out_CardDeckFrontToHandTail;
                changeDataCall = this.changeCardDeckFrontToHandTail;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //等待客户端玩家操作2
            case proto.base.BattleRoomOpOutputType.Out_WaitPlayerInput:
                packData = data.waitPlayerInput;
                comp = PanelDefine.Out_WaitPlayerInput;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //等待客户端表现完毕3
            case proto.base.BattleRoomOpOutputType.Out_WaitPlayerShow:
                packData = data.waitPlayerShow;
                comp = PanelDefine.Out_WaitPlayerShow;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //结算4
            case proto.base.BattleRoomOpOutputType.Out_Settlement:
                packData = data.settlement;
                let isGiveUp: boolean = data.settlement.leavePlayerId && data.settlement.leavePlayerId != "";
                if (isGiveUp) {
                    EventMgr.emit(Battle_ShowSettlement, this._roomData.roomId, this.getPlayerId(true), data.settlement);
                } else {
                    comp = PanelDefine.Out_Settlement;
                }
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //卡牌数据修改5
            case proto.base.BattleRoomOpOutputType.Out_CardDataChange:
                console.log("100002_Out_CardDataChange", data);
                packData = data.cardDataChange;
                comp = PanelDefine.Out_CardDataChange;
                changeDataCall = this.changeCardData;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //删除区域的卡回到手卡6
            case proto.base.BattleRoomOpOutputType.Out_DelToHand:
                packData = data.delToHand;
                comp = PanelDefine.Out_DelToHand;
                changeDataCall = this.changeDelToHand;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //复制一张卡7
            case proto.base.BattleRoomOpOutputType.Out_CopyCard:
                packData = data.copyCard;
                comp = PanelDefine.Out_CopyCard;
                changeDataCall = this.changeCopyCard;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //从手牌上场8
            case proto.base.BattleRoomOpOutputType.Out_HandToTerrain:
                packData = data.handToTerrain;
                comp = PanelDefine.Out_HandToTerrain;
                changeDataCall = this.changeHandToTerrain;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //从手牌区到弃卡区9
            case proto.base.BattleRoomOpOutputType.Out_HandToDrop:
                packData = data.handToDrop;
                comp = PanelDefine.Out_HandToDrop;
                changeDataCall = this.changeHandToDrop;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //从手卡区到删除区10
            case proto.base.BattleRoomOpOutputType.Out_HandToDel:
                packData = data.handToDel;
                comp = PanelDefine.Out_HandToDel;
                changeDataCall = this.changeHandToDel;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //从地形区域到删除区11
            case proto.base.BattleRoomOpOutputType.Out_TerrainToDel:
                packData = data.terrainToDel;
                comp = PanelDefine.Out_TerrainToDel;
                changeDataCall = this.changeTerrainToDel;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //从弃牌区到手牌12
            case proto.base.BattleRoomOpOutputType.Out_DropToHand:
                packData = data.dropToHand;
                comp = PanelDefine.Out_DropToHand;
                changeDataCall = this.changeDropToHand;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //区域上的卡牌移动13
            case proto.base.BattleRoomOpOutputType.Out_TerrainToTerrain:
                packData = data.terrainToTerrain;
                comp = PanelDefine.Out_TerrainToTerrain;
                changeDataCall = this.changeTerrainToTerrain;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //卡组区域到删除区域14
            case proto.base.BattleRoomOpOutputType.Out_DeckToDel:
                packData = data.deckToDel;
                comp = PanelDefine.Out_DeckToDel;
                changeDataCall = this.changeDeckToDel;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //卡组区域到弃牌区域15
            case proto.base.BattleRoomOpOutputType.Out_DeckToDrop:
                packData = data.deckToDrop;
                comp = PanelDefine.Out_DeckToDrop;
                changeDataCall = this.changeDeckToDrop;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //玩家地形战力变更16
            case proto.base.BattleRoomOpOutputType.Out_PlayerPower:
                packData = data.playerPower;
                comp = PanelDefine.Out_PlayerPower;
                changeDataCall = this.changePlayerPower;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //回合数增加17
            case proto.base.BattleRoomOpOutputType.Out_RoundData:
                packData = data.roundData;
                comp = PanelDefine.Out_RoundData;
                changeDataCall = this.changeRoundData;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //地形数据变更19
            case proto.base.BattleRoomOpOutputType.Out_TerrainData:
                packData = data.terrainData;
                comp = PanelDefine.Out_BattleRoomOpOutput_TerrainData;
                changeDataCall = this.changeTerrainData;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //卡牌在地形上变化20
            case proto.base.BattleRoomOpOutputType.Out_CardTerrainState:
                packData = data.cardTerrainState;
                comp = PanelDefine.Out_CardTerrainState;
                changeDataCall = this.changeCardTerrainState;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                //设置优先揭示卡牌玩家id
                if (this._curRoundRevealPlayerId == "") {
                    this.curRoundRevealPlayerId = data.ownerPlayerId;
                    console.log("优先揭示卡牌玩家----->" + data.ownerPlayerId)
                }
                break;
            //玩家能量变更21
            case proto.base.BattleRoomOpOutputType.Out_PlayerEnergy:
                packData = data.playerEnergy;
                comp = PanelDefine.Out_PlayerEnergy;
                changeDataCall = this.changePlayerEnergy;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //往卡组上添加卡牌22
            case proto.base.BattleRoomOpOutputType.Out_AddCardToDeck:
                packData = data.addCardToDeck;
                comp = PanelDefine.Out_AddCardToDeck;
                changeDataCall = this.changeAddCardToDeck;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //往卡组上添加卡牌23
            case proto.base.BattleRoomOpOutputType.Out_AddCardToHand:
                packData = data.addCardToHand;
                comp = PanelDefine.Out_AddCardToHand;
                changeDataCall = this.changeAddCardToHand;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //往区域添加卡牌24
            case proto.base.BattleRoomOpOutputType.Out_AddCardToTerrain:
                packData = data.addCardToTerrain;
                comp = PanelDefine.Out_AddCardToTerrain;
                changeDataCall = this.changeAddCardToTerrain;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //从场景区域到弃卡区25
            case proto.base.BattleRoomOpOutputType.Out_TerrainToDrop:
                packData = data.terrainToDrop;
                comp = PanelDefine.Out_TerrainToDrop;
                changeDataCall = this.changeTerrainToDrop;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //窥视卡牌26
            case proto.base.BattleRoomOpOutputType.Out_Peek:
                packData = data.peek;
                comp = PanelDefine.Out_Peek;
                changeDataCall = this.changePeek;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //战斗房间异常27
            case proto.base.BattleRoomOpOutputType.Out_RoomDestroy:
                packData = data.roomDestroy;
                comp = PanelDefine.Out_RoomDestroy;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                //EventMgr.emit(Battle_RoomUnusual, data.roomDestroy.reason);
                break;
            //增加区域持续状态29
            case proto.base.BattleRoomOpOutputType.Out_LockZone:
                packData = data.lockZone;
                comp = PanelDefine.Out_LockZone;
                changeDataCall = this.changeLockZone;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //从场上数据选择来源卡牌数据31
            case proto.base.BattleRoomOpOutputType.Out_AddCard:
                packData = data.addCard;
                comp = PanelDefine.Out_AddCard;
                changeDataCall = this.changeAddCard;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //移除持续状态32
            case proto.base.BattleRoomOpOutputType.Out_Nullify:
                // console.log("100002_Out_Nullify", data);
                packData = data.nullify;
                comp = PanelDefine.Out_Nullify;
                changeDataCall = this.changeNullify;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            case proto.base.BattleRoomOpOutputType.Out_HandToDeck:
                packData = data.handToDeck;
                comp = PanelDefine.Out_HandToDeck;
                changeDataCall = this.changeHandToDeck;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            //技能释放
            case proto.base.BattleRoomOpOutputType.Out_EffectSkill:
                // console.log("100002_Out_EffectSkill", data);
                packData = data.effectSkill;
                comp = PanelDefine.Out_EffectSkill;
                changeDataCall = this.applyBuff;
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            case proto.base.BattleRoomOpOutputType.Out_RetransmissionRound:
                packData = data.retransmissionRound.round;
                comp = PanelDefine.Out_RetransmissionRound;
                this.setBattleRoomData(data.retransmissionRound.round.gamePlayData);
                this.addBattlePackData(data, packData, comp, changeDataCall);
                //处于输入状态，重新添加输入包
                if (data.retransmissionRound.waitPlayerInput) {
                    let inputData = proto.base.BattleRoomOpOutput.create();
                    inputData.ownerPlayerId = data.ownerPlayerId;
                    inputData.touchInstId = data.touchInstId;
                    inputData.opType = proto.base.BattleRoomOpOutputType.Out_WaitPlayerInput;
                    let inputPackData = proto.base.BattleRoomOpOutput_WaitPlayerInput.create();
                    inputPackData.timeout = data.retransmissionRound.timeout;
                    let inputComp = PanelDefine.Out_WaitPlayerInput;
                    inputPackData["isPlayerInput"] = data.retransmissionRound.isPlayerInput;
                    inputPackData["inputs"] = data.retransmissionRound.inputs;
                    this.addBattlePackData(inputData, inputPackData, inputComp);
                }
                break;
            case proto.base.BattleRoomOpOutputType.Out_RetransmissionSettlement:
                packData = data.retransmissionSettlement.settlement;
                let giveUp: boolean = data.retransmissionSettlement.settlement.leavePlayerId && data.retransmissionSettlement.settlement.leavePlayerId != "";
                if (giveUp) {
                    EventMgr.emit(Battle_ShowSettlement, this._roomData.roomId, this.getPlayerId(true), data.retransmissionSettlement.settlement);
                } else {
                    comp = PanelDefine.Out_Settlement;
                }
                this.addBattlePackData(data, packData, comp, changeDataCall);
                break;
            default:
                console.error(`未定义战斗数据包----->${data.opType}`);
                break;
        }
        console.log(`battleData push----> round ${this._currentRound} --->${proto.base.BattleRoomOpOutputType[data.opType]}`, data);
        

    }

    private addBattlePackData(data: proto.base.IBattleRoomOpOutput, packData: any, comp: any, changeDataCall?: (playerId: string, data: any) => void): void {
        if (packData && comp) {
            let battlePackData: BattlePackData = {
                roomId: this._roomData.roomId,
                round: this.curRound,
                ownerPlayerId: data.ownerPlayerId,
                data: packData,
                touchInstId: data.touchInstId
            };
            let battleOpData: BattleOpData = {
                packData: battlePackData,
                comp: comp,
                type: data.opType,
                changeDataCell: changeDataCall,
            };
            this._battlePackList.push(battleOpData);
        }
    }
    /**
     * 设置当前回合优先揭示玩家id
     */
    public set curRoundRevealPlayerId(playerId: string) {
        this._curRoundRevealPlayerId = playerId;
    }
    /**
     * 获取当前回合优先揭示玩家id
     */
    public get curRoundRevealPlayerId(): string {
        return this._curRoundRevealPlayerId;
    }

    /**
     *设置当前房间数据 
     */
    private setBattleRoomData(data: proto.base.IBattleRoomGamePlayData): void {
        this.curRoundRevealPlayerId = "";
        //无房间或者非同一房间，重置第一视觉玩家
        if (!this._roomData || this._roomData.roomId != data.levelData.roomId) {
            this._playerA = new Map();
        }
        this._playerDatas = data.players;
        this._roomData = data.levelData;
        console.log("设置战斗房间id ----->" + this.roomData.roomId)
        this._terrains = data.terrains;
        this._currentRound = data.currentRound;
        this.addBattleLog();
        if (this._creatRoomData.isReplay) {
            this._playerA.set(this._creatRoomData.viewPlayerId, true);
            return
        }
        //本局作战设置过第一视觉了则不处理
        let myId: string = PlayerData.player.playerId;
        if (this._playerDatas[myId]) {
            this._playerA.set(myId, true);
            return;
        }

        //无自己则随便一个玩家作为第一视觉
        for (let key in this._playerDatas) {
            this._playerA.set(key, true);
            break;
        }
    }
    
    private addBattleLog(): void {
        if (this._creatRoomData.isReplay) return;
        let key: string = `battleLog_${PlayerData.player.playerId}`;
        let logDatas: any[] = LocalStorage.GetObject(key);
        if (!logDatas) {
            logDatas = [];
        }
        let isAdd: boolean = true;
        let logData: any;
        for (let index = 0; index < logDatas.length; index++) {
            logData = logDatas[index];
            if (logData.roomId == this.roomData.roomId) {
                isAdd = false;
                break;
            }
        }
        if (isAdd) {
            let playerIds: string[] = [];
            for (let key in this.playerDatas) {
                let playerData = this.playerDatas[key];
                if (playerData.playerId == PlayerData.player.playerId) {
                    playerIds[0] = playerData.playerId;
                } else {
                    playerIds[1] = playerData.playerId;
                }
            }
            logDatas.push({
                playerList: playerIds,
                roomId: this.roomData.roomId,
                createTime: DateUtils.ServerTime,
            })
        }
        LocalStorage.SetObject(key, logDatas);
    }
    /**
     * 获取当前回合数
     */
    public get curRound(): number {
        return this._currentRound;
    }

    /**
     * 获取战斗数据包列表
     */
    public get battlePackList(): BattleOpData[] {
        return this._battlePackList;
    }

    /**
     * 获取首个战斗数据包
     */
    public getFirstBattlePack(): BattleOpData {
        return this._battlePackList.length > 0 ? this._battlePackList.shift() : null;
    }

    /**
     * 获取房间数据
     */
    public get roomData(): proto.base.IBattleRoomLevelData {
        return this._roomData;
    }

    /**
     * 获取地形数据列表
     */
    public get terrains(): proto.base.IBattleRoomTerrainData[] {
        return this._terrains;
    }

    /**
     * 根据地形实体id获取地形数据
     * @param instId 
     * @returns 
     */
    public terrainIdData(instId: string): proto.base.IBattleRoomTerrainData {
        for (let terrainData of this._terrains) {
            if (terrainData.instId == instId) return terrainData;
        }
        return null;
    }

    /**
     * 根据地形下标获取地形数据
     * @param idx 
     * @returns 
     */
    public terrainIndexData(idx: number): proto.base.IBattleRoomTerrainData {
        if (idx < this._terrains.length) {
            return this._terrains[idx];
        }
        return null;
    }
    /**
     * 根据区域实例id获取玩家区域数据
     * @param playerId 
     * @param instId 
     * @returns 
     */
    public getPlayerTerrainFormId(playerId: string, instId: string): proto.base.IBattleRoomTerrainPlayerData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = playerData.terrain;
        for (let terrainData of terrains) {
            if (terrainData.instId == instId) return terrainData;
        }
        return null;
    }

    /**
     * 根据区域下标获取玩家区域数据
     * @param playerId 
     * @param instId 
     * @returns 
     */
    public getPlayerTerrainFormIdx(playerId: string, areaIdx: number): proto.base.IBattleRoomTerrainPlayerData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData = playerData.terrain[areaIdx];
        return terrains;
    }

    /**
     * 获取玩家区域列表
     * @param playerId 
     * @returns 
     */
    public getPlayerTerrainDatas(playerId: string): proto.base.IBattleRoomTerrainPlayerData[] {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = playerData.terrain;
        return terrains;
    }

    /**
     * 获取玩家区域列表
     * @param playerId 
     * @returns 
     */
    public setPlayerTerrainDatas(playerId: string, terrains: proto.base.IBattleRoomTerrainPlayerData[]): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        playerData.terrain = [...terrains];
    }
    /**
     * 获取玩家区域总战力
     * @param playerId 
     * @param areaIdx 
     * @returns 
     */
    public getPlayerTerrainTotalPow(playerId: string, areaIdx: number): number {
        let base: number = this.getPlayerTerrainBasePow(playerId, areaIdx);
        let cardTotalPower: number = this.getPlayerTerrainCardTotalPow(playerId, areaIdx);
        return base + cardTotalPower;
    }

    /**
     * 获取玩家区域基础战力
     * @param playerId 
     * @param areaIdx 
     * @returns 
     */
    public getPlayerTerrainBasePow(playerId: string, areaIdx: number): number {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrainData: proto.base.IBattleRoomTerrainPlayerData = playerData.terrain[areaIdx];
        let count: number = 0;
        if (terrainData) {
            count = terrainData.basePower.finalValue;
        }
        return count;
    }

    /**
    * 获取玩家区域卡牌总战力
    * @param playerId 
    * @param areaIdx 
    * @param isMult 是否计算卡的倍数 
    * @returns 
    */
    public getPlayerTerrainCardTotalPow(playerId: string, areaIdx: number, isMult: boolean = true): number {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrainData: proto.base.IBattleRoomTerrainPlayerData = playerData.terrain[areaIdx];
        let count: number = 0;
        if (terrainData) {
            for (let cardData of terrainData.cards) {
                //未揭示不计算战力
                if (cardData.terrainState != proto.base.BattleRoomInCardState.CardStateShow) continue;
                count += isMult ? terrainData.cardMul.finalValue * cardData.power.finalValue : cardData.power.finalValue;
            }
        }
        return count;
    }

    /**
     * 获取玩家卡的地形卡倍数
     * @param playerId 
     * @param areaIdx 
     * @returns 
     */
    public getPlayerTerrainCardPowerMul(playerId: string, areaIdx: number): number {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrainData: proto.base.IBattleRoomTerrainPlayerData = playerData.terrain[areaIdx];
        if (terrainData) {
            return terrainData.cardMul.finalValue;
        }
        return 1;
    }

    /**
     * 获取玩家数据
     * @param playerId 
     */
    public get playerDatas(): { [k: string]: proto.base.IBattleRoomPlayerData } {
        return this._playerDatas;
    }

    /**
     * 获取玩家数据
     * @param playerId 
     */
    public getPlayerData(playerId: string): proto.base.IBattleRoomPlayerData {
        return this._playerDatas[playerId];
    }

    /**
     * 获取是否第一人称视觉
     * @param playerId 
     * @returns 
     */
    public isPlayerA(playerId: string): boolean {
        return this._playerA.get(playerId) ?? false;
    }

    /**
     * 获取指定的实体
     * @param instId 
     * @returns 
     */
    public getEntityByInstId(instId: string): proto.base.IBattleRoomPlayerData | base.IBattleRoomTerrainPlayerData | base.IBattleRoomCardData {
        for (let k in this.playerDatas) {
            let player = this.playerDatas[k];
            if (instId == player.instId) {
                return player;
            }
            let all = [player.deckCards, player.delCards, player.dropCards, player.handCards];
            for (let cards of all) {
                if (cards) {
                    for (let card of cards) {
                        if (card.instId == instId) return card;
                    }
                }
            }
            let terrain = player.terrain || [];
            for (let i = 0; i < terrain.length; i++) {
                let t = terrain[i];
                if (t.selfInstId == instId) {
                    t['area'] = t;
                    return t;
                }
                for (let card of t.cards) {
                    if (card.instId == instId) return card;
                }
            }
        }
    }

    /**
     * 获取玩家id
     * @param isPlayerA 是否第一视觉玩家 
     * @returns 
     */
    public getPlayerId(isPlayerA: boolean = true): string {
        for (let key in this.playerDatas) {
            if (isPlayerA) {
                if (this.isPlayerA(key)) {
                    return key;
                }
            } else {
                if (!this.isPlayerA(key)) {
                    return key;
                }
            }
        }
        return null;
    }

    /**
     * 获取玩家手卡列表
     * @param playerId 
     */
    public getPlayerHandCards(playerId: string): proto.base.IBattleRoomCardData[] {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        return playerData.handCards;
    }

    /**
     * 设置玩家手牌
     * @param playerId 
     * @returns 
     */
    public setPlayerHandCards(playerId: string, cards: proto.base.IBattleRoomCardData[]): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        playerData.handCards = [...cards];
    }

    /**
     * 获取玩家弃卡
     * @param playerId 
     * @param instId 
     * @returns 
     */
    public getPlayerDropCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        for (let cardData of playerData.dropCards) {
            if (cardData.instId == instId) return cardData;
        }
        return null;
    }

    /**
     * 获取玩家删除卡
     * @param playerId 
     * @param instId 
     * @returns 
     */
    public getPlayerDelCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        for (let cardData of playerData.delCards) {
            if (cardData.instId == instId) return cardData;
        }
        return null;
    }

    /**
     * 获取玩家的卡
     * @param playerId 
     * @param cardData 
     */
    public getPlayerHandCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let cards: proto.base.IBattleRoomCardData[] = this.getPlayerHandCards(playerId);
        for (let cardData of cards) {
            if (cardData.instId == instId) return cardData;
        }
        return null;
    }

    /**
     * 获取玩家卡的能量
     * @param playerId 
     * @param instId 
     */
    public getPlayerCardCost(playerId: string, instId: string): number {
        let cardData: proto.base.IBattleRoomCardData = this.getPlayerHandCard(playerId, instId);
        cardData ?? this.getPlayerTerrainCard(playerId, instId);
        if (cardData) return cardData.cost?.finalValue ?? 0;
        return 0;
    }

    /**
     * 获取玩家卡的战力
     * @param playerId 
     * @param instId 
     */
    public getPlayerCardPower(playerId: string, instId: string): number {
        let cardData: proto.base.IBattleRoomCardData = this.getPlayerHandCard(playerId, instId);
        if (!cardData) cardData = this.getPlayerTerrainCard(playerId, instId);
        if (cardData && cardData.terrainState == proto.base.BattleRoomInCardState.CardStateShow) return cardData?.power?.finalValue || 0;
        return 0;
    }

    /**
     * 获取玩家地形上的卡
     * @param playerId 
     * @param instId 
     * @returns 
     */
    public getPlayerTerrainCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = this.getPlayerTerrainDatas(playerId);
        for (let terrainData of terrains) {
            for (let cardData of terrainData.cards) {
                if (cardData.instId == instId) return cardData;
            }
        }
        return null
    }

    /**
     * 获取玩家身上某一张卡（手卡、地形上的卡）
     * @param playerId 
     * @param instId 
     * @returns 
     */
    public getPlayerCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        if (playerId == "") return null;
        return this.getPlayerHandCard(playerId, instId) ||
            this.getPlayerTerrainCard(playerId, instId) ||
            this.getPlayerDeckCard(playerId, instId) ||
            this.getPlayerDropCard(playerId, instId) ||
            this.getPlayerDelCard(playerId, instId);
    }
    /**
     * 获取对战卡牌
     * @param instId 
     * @returns 
     */
    public getCard(instId: string): proto.base.IBattleRoomCardData {
        let playerIdA: string = this.getPlayerId();
        let playerIdB: string = this.getPlayerId(false);
        let cardData: proto.base.IBattleRoomCardData = this.getPlayerCard(playerIdA, instId);
        if (!cardData) {
            cardData = this.getPlayerCard(playerIdB, instId);
        }
        return cardData;
    }

    /**
     * 通过唯一id获取卡牌数据
     * @param instId 
     * @param all 
     * @returns 
     */
    getCardByInstId(instId: string, all = false) {
        for (let terrains of this._terrains) {
            if (terrains.instId == instId) return terrains;
        }
        for (let k in this._playerDatas) {
            let player = this._playerDatas[k];
            let card = player.handCards.find(value => value.instId == instId);
            if (card) return card;
            card = player.terrain.find(value => value.instId == instId);
            if (card) return card;
            card = player.deckCards.find(value => value.instId == instId);
            if (card) return card;
            if (all) {
                card = player.dropCards.find(value => value.instId == instId);
                if (card) return card;
                card = player.delCards.find(value => value.instId == instId);
                if (card) return card;
            }
        }
        return undefined;
    }

    /**
     * 从玩家卡组中获取一张卡牌
     * @param playerId 玩家id
     * @param instId 卡牌id
     */
    public getPlayerDeckCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        for (let cardData of playerData.deckCards) {
            if (cardData.instId == instId) return cardData;
        }
        return null;
    }

    /**
     * 根据卡牌实例id获取卡牌位置
     * @param playerId 
     * @param instId 
     * @returns 
     */
    public getPlayerCardLocation(playerId: string, instId: string): CardLocation {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        for (let cardIdx = 0; cardIdx < playerData.handCards.length; cardIdx++) {
            let cardData = playerData.handCards[cardIdx];
            if (cardData.instId == instId) {
                return { areaIdx: -1, cardIdx: cardIdx, card: cardData };
            }
        }

        for (let areaIdx = 0; areaIdx < playerData.terrain.length; areaIdx++) {
            let terrainData = playerData.terrain[areaIdx];
            for (let cardIdx = 0; cardIdx < terrainData.cards.length; cardIdx++) {
                let cardData = terrainData.cards[cardIdx];
                if (cardData.instId == instId) {
                    return { areaIdx: areaIdx, cardIdx: cardIdx, card: cardData };
                }
            }
        }

        return null;
    }

    /**
     * 获取玩家区域空位卡牌位置
     * @param playerId 玩家id
     * @param instId 区域实体id
     * @returns 
     */
    public getPlayerAreaEmptyCardLocation(playerId: string, instId: string): CardLocation {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        for (let areaIdx = 0; areaIdx < playerData.terrain.length; areaIdx++) {
            let terrainData = playerData.terrain[areaIdx];
            if (terrainData.instId == instId) {
                if (terrainData.cards.length < this.roomData.terrainCardMax) {
                    return { areaIdx: areaIdx, cardIdx: terrainData.cards.length };
                }
                break;
            }
        }

        return null;
    }

    /**
     * 获取玩家区域空位卡牌位置
     * @param playerId 玩家id
     * @param areaIdx 区域实体下标
     * @returns 
     */
    public getPlayerAreaEmptyCardLocationByIdx(playerId: string, areaIdx: number): CardLocation {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrainData = playerData.terrain[areaIdx];
        if (terrainData.cards.length < this.roomData.terrainCardMax) {
            return { areaIdx: areaIdx, cardIdx: terrainData.cards.length };
        }
        return null;
    }

    /**
     * 根据实例id检查实体上获取某种持续状态值
     * @param instId 
     * @param buffType 
     * @returns 
     */
    public chekPersistentStateByInstId(instId: string, buffType: proto.base.BattleRoomPersistentState): boolean {
        let traget: proto.base.IBattleRoomPlayerData | base.IBattleRoomTerrainPlayerData | base.IBattleRoomCardData = this.getEntityByInstId(instId);
        if (!traget || !traget.persistentState) return false;
        let state: proto.base.IBattleRoomAttrValue = traget.persistentState[buffType];
        if (!state || !state.base || state.base.length < 1) return false;
        return true;
    }

    /**
     * 根据实例id检查实体上获取某种持续状态值
     * @param instId 
     * @param buffType 
     * @returns 
     */
    public getPersistentStateListByInstId(instId: string, buffType: proto.base.BattleRoomPersistentState): proto.base.IBaseAddMul[] {
        let traget: proto.base.IBattleRoomPlayerData | base.IBattleRoomTerrainPlayerData | base.IBattleRoomCardData = this.getEntityByInstId(instId);
        if (!traget || !traget.persistentState) return null;
        let state: proto.base.IBattleRoomAttrValue = traget.persistentState[buffType];
        if (!state || !state.base || state.base.length < 1) return null;
        return state.base;
    }

    public clearCurBattlePack(): void {
        for (let data of this._battlePackList) {
            if (data.changeDataCell != null) {
                data.changeDataCell(data.packData.ownerPlayerId, data);
            }
        }
        this._battlePackList.length = 0;
        this._curRoundRevealPlayerId = "";
    }
    /**
     * 检查是否停止战斗包输出
     * @param type 
     */
    public checkIsStopBattlePack(type: proto.base.BattleRoomOpOutputType) {
        if (type == proto.base.BattleRoomOpOutputType.Out_Settlement) {
            return true;
        } else if (type == proto.base.BattleRoomOpOutputType.Out_RoomDestroy) {
            return true;
        }
        return false;
    }

    /**
     * 添加卡牌到玩家
     * @param playerId 
     * @param cardLocation 
     * @param card 
     */
    private addCardToPlayerLocation(playerId: string, cardLocation: proto.base.BattleRoomCardLocation, card: proto.base.IBattleRoomCardData): void {
        switch (cardLocation) {
            case proto.base.BattleRoomCardLocation.Hand:
                this.addPlayerHandCard(playerId, card);
                break;
            case proto.base.BattleRoomCardLocation.Terrain:
                this.addCardToTerrainByIdx(playerId, card.area, card);
                break;
            case proto.base.BattleRoomCardLocation.Deck:
                this.addPlayerDeckCard(playerId, card);
                break;
            case proto.base.BattleRoomCardLocation.Del:
                this.addPlayerDelCard(playerId, card);
                break;
            case proto.base.BattleRoomCardLocation.Drop:
                this.addPlayerDropCard(playerId, card);
                break;
            default:
                break;
        }
    }

    /**
     * 移除玩家卡牌
     * @param playerId 
     * @param cardLocation 
     * @param card 
     */
    private delPlayerLocationCard(playerId: string, cardLocation: proto.base.BattleRoomCardLocation, instId: string): void {
        switch (cardLocation) {
            case proto.base.BattleRoomCardLocation.Hand:
                this.delPlayerHandCard(playerId, instId);
                break;
            case proto.base.BattleRoomCardLocation.Deck:
                this.delPlayerDeckCard(playerId, instId);
                break;
            case proto.base.BattleRoomCardLocation.Drop:
                this.delPlayerDropCard(playerId, instId);
                break;
            case proto.base.BattleRoomCardLocation.Del:
                this.delPlayerDelCard(playerId, instId);
                break;
            case proto.base.BattleRoomCardLocation.Terrain:
                this.delTerrainCard(playerId, instId);
                break;
        }
    }
    /**
     * 清理战场数据
     */
    public clearBattleData(): void {
        this._playerA.clear();
        this._creatRoomData = null;
        this._roomData = null;
        this._playerDatas = null;
        this._terrains = null;
        this._currentRound = null;
        this._battlePackList.length = 0;
    }



    /****************以下是修改数据源***************/
    //修改从卡组中补牌到手卡
    private changeCardDeckFrontToHandTail(playerId: string, data: proto.base.IBattleRoomOpOutput_CardDeckTopToHandTail): void {
        if (!this._roomData) return;
        for (let cardData of data.cards) {
            this.delPlayerDeckCard(playerId, cardData.instId);
            this.addPlayerHandCard(playerId, cardData);
        }
    }

    /**
     * 从手卡出牌到地形
     * @param data 
     */
    private changeHandToTerrain(playerId: string, data: proto.base.IBattleRoomOpOutput_HandToTerrain): void {
        if (!this._roomData) return;
        this.addCardToTerrainByInstId(data.toTerrainPlayerId, data.toTerrainInstId, data.card);
        this.delPlayerHandCard(data.toTerrainPlayerId, data.card.instId);
    }

    /**
     * 修改玩家手卡到移除
     * @param playerId 
     * @param data 
     */
    private changeHandToDrop(playerId: string, data: proto.base.IBattleRoomOpOutput_HandToDrop): void {
        if (!this._roomData) return;
        this.addPlayerDropCard(playerId, data.card);
        this.delPlayerHandCard(playerId, data.card.instId);
    }
    /**
     * 修改玩家手卡到删除区
     * @param playerId 
     * @param data 
     */
    private changeHandToDel(playerId: string, data: proto.base.IBattleRoomOpOutput_HandToDel): void {
        if (!this._roomData) return;
        this.addPlayerDelCard(playerId, data.card);
        this.delPlayerHandCard(playerId, data.card.instId);
    }

    /**
     * 修改从地形区到删除区
     * @param playerId 
     * @param data 
     */
    private changeTerrainToDel(playerId: string, data: proto.base.IBattleRoomOpOutput_TerrainToDel): void {
        if (!this._roomData) return;
        this.delTerrainCard(playerId, data.card.instId);
        this.addPlayerDelCard(playerId, data.card);
    }

    /**
     * 修改从地形区到删除区
     * @param playerId 
     * @param data 
     */
    private changeTerrainToDrop(playerId: string, data: proto.base.IBattleRoomOpOutput_TerrainToDrop): void {
        if (!this._roomData) return;
        this.delTerrainCard(playerId, data.card.instId);
        this.addPlayerDropCard(playerId, data.card);
    }

    /**
     * 修改从弃卡区到手卡区
     * @param playerId 
     * @param data 
     */
    private changeDropToHand(playerId: string, data: proto.base.IBattleRoomOpOutput_DropToHand): void {
        if (!this._roomData) return;
        this.delPlayerDropCard(playerId, data.card.instId);
        this.addPlayerHandCard(playerId, data.card);
    }

    /**
     * 修改玩家战力
     * @param data 
     */
    private changePlayerPower(playerId: string, data: proto.base.IBattleRoomOpOutput_PlayerPower): void {
        if (!this._roomData) return;
        let powerData: proto.base.IBattleRoomOpOutput_TerrainPower;
        for (let key in data.terrainPower) {
            powerData = data.terrainPower[key];
            let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(key);
            for (let index = 0; index < powerData.basePower.length; index++) {
                playerData.terrain[index].basePower = powerData.basePower[index];
                playerData.terrain[index].cardMul = powerData.cardMul[index];
            }
        }
    }

    /**
     * 改变地形数据
     * @param data 
     */
    private changeTerrainData(playerId: string, data: proto.base.IBattleRoomOpOutput_TerrainData): void {
        if (!this._roomData) return;
        this.resetTerrainData(data.terrainData);
    }

    /**
     * 改变卡牌在地形上的变化
     */
    private changeCardTerrainState(playerId: string, data: proto.base.IBattleRoomOpOutput_CardTerrainState): void {
        if (!this._roomData) return;
        this.resetTerrainCard(playerId, data.instId, data.card);
    }

    /**
     * 改变玩家能量
     * @param playerId 
     * @param energys 
     */
    private changePlayerEnergy(playerId: string, data: proto.base.IBattleRoomOpOutput_PlayerEnergy): void {
        if (!this._roomData) return;
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(data.playerId);
        playerData.roundEnergy = data.energy;
    }

    /**
     * 改变地形上卡牌移动
     */
    private changeTerrainToTerrain(playerId: string, data: proto.base.IBattleRoomOpOutput_TerrainToTerrain): void {
        if (!this._roomData) return;
        this.delCardFromTerrain(data.fromTerrainPlayerId, data.fromTerrainInstId, data.card);
        this.addCardToTerrainByInstId(data.toTerrainPlayerId, data.toTerrainInstId, data.card);
    }

    /**
     * 从删除区增加一张卡到手牌去
     */
    private changeDelToHand(playerId: string, data: proto.base.IBattleRoomOpOutput_DelToHand): void {
        if (!this._roomData) return;
        this.delPlayerDelCard(playerId, data.card.instId);
        this.addPlayerHandCard(playerId, data.card);
    }

    /**
     * 改变卡组区到删除区
     */
    private changeDeckToDel(playerId: string, data: proto.base.IBattleRoomOpOutput_DeckToDel): void {
        if (!this._roomData) return;
        this.delPlayerDeckCard(playerId, data.card.instId);
        this.addPlayerDelCard(playerId, data.card);
    }

    /**
    * 改变卡组区到弃卡区
    */
    private changeDeckToDrop(playerId: string, data: proto.base.IBattleRoomOpOutput_DeckToDel): void {
        if (!this._roomData) return;
        this.delPlayerDeckCard(playerId, data.card.instId);
        this.addPlayerDropCard(playerId, data.card);
    }

    /**
    * 改变添加卡牌到卡组区域
    */
    private changeAddCardToDeck(playerId: string, data: proto.base.IBattleRoomOpOutput_AddCardToDeck): void {
        if (!this._roomData) return;
        this.addPlayerDeckCard(playerId, data.card);
    }

    /**
     * 改变往添加卡牌到手卡区
     */
    private changeAddCardToHand(playerId: string, data: proto.base.IBattleRoomOpOutput_AddCardToHand): void {
        if (!this._roomData) return;
        this.delPlayerLocationCard(data.fromPlayerId, data.fromLocation, data.card.instId);
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(data.card.playerId);
        playerData.handCards.push(data.card);
    }

    /**
     * 改变往添加卡牌到地形区
     */
    private changeAddCardToTerrain(playerId: string, data: proto.base.IBattleRoomOpOutput_AddCardToTerrain): void {
        if (!this._roomData) return;
        this.delPlayerLocationCard(data.fromPlayerId, data.fromLocation, data.card.instId);
        this.addCardToPlayerLocation(data.card.playerId, data.card.location, data.card);
    }

    /**改变卡牌数据 */
    private changeCardData(playerId: string, data: proto.base.IBattleRoomOpOutput_CardDataChange): void {
        if (!this._roomData) return;
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        if (data.card.location == proto.base.BattleRoomCardLocation.Hand) {
            //修改手卡
            for (let index = 0; index < playerData.handCards.length; index++) {
                if (playerData.handCards[index].instId == data.card.instId) {
                    playerData.handCards[index] = data.card;
                    break;
                }
            }
        } else if (data.card.location == proto.base.BattleRoomCardLocation.Deck) {
            //修改卡组
            for (let index = 0; index < playerData.deckCards.length; index++) {
                if (playerData.deckCards[index].instId == data.card.instId) {
                    playerData.deckCards[index] = data.card;
                    break;
                }
            }
        } else if (data.card.location == proto.base.BattleRoomCardLocation.Drop) {
            //修改弃卡
            for (let index = 0; index < playerData.dropCards.length; index++) {
                if (playerData.dropCards[index].instId == data.card.instId) {
                    playerData.dropCards[index] = data.card;
                    break;
                }
            }
        } else if (data.card.location == proto.base.BattleRoomCardLocation.Del) {
            //修改删除卡
            for (let index = 0; index < playerData.delCards.length; index++) {
                if (playerData.delCards[index].instId == data.card.instId) {
                    playerData.delCards[index] = data.card;
                    break;
                }
            }
        } else if (data.card.location == proto.base.BattleRoomCardLocation.Terrain) {
            //修改地形卡
            let terrainData: proto.base.IBattleRoomTerrainPlayerData = playerData.terrain[data.card.area];
            for (let index = 0; index < terrainData.cards.length; index++) {
                if (terrainData.cards[index].instId == data.card.instId) {
                    terrainData.cards[index] = data.card;
                    break;
                }
            }
        }

    }
    /**
     * 改变复制卡牌数据
     * @param playerId 
     * @param data 
     */
    private changeCopyCard(playerId: string, data: proto.base.IBattleRoomOpOutput_CopyCard): void {
        if (!this._roomData) return;
        this.addCardToPlayerLocation(data.card.playerId, data.card.location, data.card);

    }

    /**
     * 改变回合数增加数据
     * @param playerId 
     * @param data 
     */
    private changeRoundData(playerId: string, data: proto.base.IBattleRoomOpOutput_RoundData): void {
        if (!this._roomData) return;
        if (battleDataMgr.isPlayerA(playerId)) {
            this.addRoundNum();
            this.resetPlayerEnergy(playerId, data.roundEnergy);
        }

    }

    /**
     * 修改窥视卡牌
     */
    private changePeek(playerId: string, data: proto.base.IBattleRoomOpOutput_Peek): void {
        if (!this._roomData) return;
        //只有地形有持续效果固只修改地形即可
        if (data.terrainData) {
            for (const key in data.terrainData) {
                this.resetTerrainData(data.terrainData[key]);
            }
        }
    }

    /**
     * 改变区域持续状体数据
     * @param playerId 
     * @param data 
     */
    private changeLockZone(playerId: string, data: proto.base.IBattleRoomOpOutput_LockZone): void {
        if (!this._roomData) return;
        let traget: proto.base.IBattleRoomPlayerData | base.IBattleRoomTerrainPlayerData | base.IBattleRoomCardData = this.getEntityByInstId(data.toInstId);
        if (!traget) return;
        if (!traget.persistentState) {
            traget.persistentState = {};
        }
        for (let state of data.state) {
            let stateValue: proto.base.IBattleRoomAttrValue = traget.persistentState[state];
            if (!stateValue) {
                stateValue = proto.base.BattleRoomAttrValue.create();
                stateValue.base = [];
                traget.persistentState[state] = stateValue;
            }
            traget.persistentState[state] = stateValue;
            let base: proto.base.IBaseAddMul = proto.base.BaseAddMul.create();
            base.from = data.fromInstId;
            base.source = data.fromSkillId.toString();
            stateValue.base.push(base);
            stateValue.finalValue = stateValue.base.length;
        }
    }

    private changeAddCard(playerId: string, data: proto.base.IBattleRoomOpOutput_AddCard): void {
        if (!this._roomData) return;
        if (data.isMove) {
            this.delPlayerLocationCard(data.sourcePlayerId, data.sourceLocation, data.sourceInstId);
        }
        this.addCardToPlayerLocation(data.card.playerId, data.card.location, data.card);

    }

    

    /**
     * 检测是否有buff
     * @param playerId 
     * @param data 
     */
    private applyBuff(playerId: string, data: proto.base.IBattleRoomOpOutput_EffectSkill) {

    }


    /**
     * 改变移除玩家buff数据
     * @param playerId 
     * @param data 
     */
    private changeNullify(playerId: string, data: proto.base.IBattleRoomOpOutput_Nullify): void {
        if (!this._roomData) return;
        let traget: proto.base.IBattleRoomPlayerData | proto.base.IBattleRoomTerrainPlayerData | proto.base.IBattleRoomCardData = this.getEntityByInstId(data.toInstId);
        if (!traget || !traget.persistentState) return;
        if (!data.state) return;
        for (let state of data.state) {
            let stateValue: proto.base.IBattleRoomAttrValue = traget.persistentState[state];
            if (stateValue && stateValue.base && stateValue.base.length) {
                for (let index = 0; index < stateValue.base.length; index++) {
                    let base: proto.base.IBaseAddMul = stateValue.base[index];
                    if (base.from == data.fromInstId && Number(base.source) == data.fromSkillId) {
                        stateValue.base.splice(index, 1);
                        break;
                    }
                }
                if (stateValue.base.length < 1) {
                    traget.persistentState[state] = null;
                    delete traget.persistentState[state];
                } else {
                    stateValue.finalValue = stateValue.base.length;
                } 
            }
        }
    }

    private changeHandToDeck(playerId: string, data: proto.base.IBattleRoomOpOutput_HandToDeck): void {
        if (!this._roomData) return;
        this.delPlayerHandCard(playerId, data.card.instId);
        this.addPlayerDeckCard(playerId, data.card);
    }

    /***********详细处理函数**********/

    /**
     * 添加卡牌到地形
     * @param playerId 玩家id
     * @param instId 地形实例id
     * @param cardData 卡牌数据
     * @returns 
     */
    private addCardToTerrainByInstId(playerId: string, instId: string, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = playerData.terrain;
        for (let terrainData of terrains) {
            if (terrainData.instId == instId) {
                if (!terrainData.cards) terrainData.cards = [];
                terrainData.cards.push(cardData);
                break;
            }
        }
    }

    /**
     * 按地形区域下标添加卡牌到玩家地形区域
     * @param playerId 
     * @param areaIdx 
     * @param cardData 
     */
    private addCardToTerrainByIdx(playerId: string, areaIdx: number, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = playerData.terrain;
        let terrainData: proto.base.IBattleRoomTerrainPlayerData = terrains[areaIdx];
        if (terrainData) {
            if (!terrainData.cards) terrainData.cards = [];
            terrainData.cards.push(cardData);
        }
    }

    /**
     * 删除地形上的卡
     * @param playerId 玩家id
     * @param instId 地形实例id
     * @param cardData 卡牌数据
     * @returns 
     */
    private delCardFromTerrain(playerId: string, instId: string, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = playerData.terrain;
        let tempCardData: proto.base.IBattleRoomCardData;
        let isDel: boolean = false;
        for (let terrainData of terrains) {
            if (terrainData.instId == instId) {
                for (let cardIdx = 0; cardIdx < terrainData.cards.length; cardIdx++) {
                    tempCardData = terrainData.cards[cardIdx];
                    if (tempCardData.instId == cardData.instId) {
                        terrainData.cards.splice(cardIdx, 1);
                        isDel = true;
                        break;
                    }
                }
            }
            if (isDel) break;
        }
    }
    /**
     * 删除地形上的卡牌
     * @param playerId 
     * @param instId 
     */
    private delTerrainCard(playerId: string, instId: string): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = playerData.terrain;
        let cardData: proto.base.IBattleRoomCardData;
        let isDel: boolean = false;
        for (let terrainData of terrains) {
            for (let cardIdx = 0; cardIdx < terrainData.cards.length; cardIdx++) {
                cardData = terrainData.cards[cardIdx];
                if (cardData.instId == instId) {
                    terrainData.cards.splice(cardIdx, 1);
                    isDel = true;
                    break;
                }
            }
            if (isDel) break;
        }
    }

    /**
     * 重置地形上卡牌数据
     * @param playerId 
     * @param instId 
     * @param cardData 
     */
    private resetTerrainCard(playerId: string, instId: string, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = playerData.terrain;
        let result: boolean = false;
        for (let terrainData of terrains) {
            if (terrainData.instId == instId) {
                for (let index = 0; index < terrainData.cards.length; index++) {
                    if (terrainData.cards[index].instId == cardData.instId) {
                        terrainData.cards[index] = cardData;
                        result = true;
                        break;
                    }
                }
            }
            if (result) break;
        }
    }

    /**
     * 覆盖地形区域数据
     * @param terrainData 
     */
    private resetTerrainData(terrainData: proto.base.IBattleRoomTerrainPlayerData): void {
        let terrains: proto.base.IBattleRoomTerrainPlayerData[] = this.terrains;
        for (let index = 0; index < terrains.length; index++) {
            if (terrains[index].instId == terrainData.instId) {
                terrains[index] = terrainData;
            }

        }
    }

    /**
     * 移除玩家手卡
     * @param playerId 
     * @param instId 
     */
    private delPlayerHandCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let cardData: proto.base.IBattleRoomCardData;
        for (let index = 0; index < playerData.handCards.length; index++) {
            cardData = playerData.handCards[index];
            if (cardData.instId == instId) {
                playerData.handCards.splice(index, 1);
                return cardData;
            }
        }
        return null;
    }

    /**
     * 增加一张卡牌到玩家弃牌区
     * @param playerId 
     * @param instId 
     */
    private addPlayerDropCard(playerId: string, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        playerData.dropCards.push(cardData);
    }

    /**
     * 增加一张卡牌到玩家弃牌区
     * @param playerId 
     * @param instId 
     */
    private delPlayerDropCard(playerId: string, instId: string): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let cardData: proto.base.IBattleRoomCardData;
        for (let index = 0; index < playerData.dropCards.length; index++) {
            cardData = playerData.dropCards[index];
            if (cardData.instId == instId) {
                playerData.dropCards.splice(index, 1);
                break;
            }
        }
    }

    /**
     * 添加一张卡牌到玩家手卡区
     * @param playerId 
     * @param cardData 
     */
    private addPlayerHandCard(playerId: string, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        playerData.handCards.push(cardData);
    }

    /**
     * 从玩家卡组中删除一张卡牌
     * @param playerId 玩家id
     * @param instId 卡牌实例id
     */
    private delPlayerDeckCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let cardData: proto.base.IBattleRoomCardData;
        for (let index = 0; index < playerData.deckCards.length; index++) {
            cardData = playerData.deckCards[index];
            if (cardData.instId == instId) {
                playerData.deckCards.splice(index, 0);
                return cardData;
            }
        }
        return null;
    }

    /**
     * 从玩家卡组中添加一张卡牌
     * @param playerId 玩家id
     * @param cardData 卡牌数据
     */
    private addPlayerDeckCard(playerId: string, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        playerData.deckCards.push(cardData);
    }

    /**
     * 从玩家删除区中删除一张卡牌
     * @param playerId 
     * @param instId 
     */
    private delPlayerDelCard(playerId: string, instId: string): proto.base.IBattleRoomCardData {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        let cardData: proto.base.IBattleRoomCardData;
        for (let index = 0; index < playerData.delCards.length; index++) {
            cardData = playerData.delCards[index];
            if (cardData.instId == instId) {
                playerData.delCards.splice(index, 1);
                return cardData;
            }
        }
        return null;
    }

    /**
     * 添加一张卡牌到玩家删除区
     * @param playerId 
     * @param instId 
     */
    private addPlayerDelCard(playerId: string, cardData: proto.base.IBattleRoomCardData): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        playerData.delCards.push(cardData);
    }

    /**
     * 增加回合数
     * @param num 
     */
    private addRoundNum(num: number = 1): void {
        this.roomData.roundMax.finalValue++;
    }

    /**
     * 重置玩家回合能量
     * @param playerId 
     * @param num 
     */
    private resetPlayerEnergy(playerId: string, energys: proto.base.IBattleRoomAttrValue[]): void {
        let playerData: proto.base.IBattleRoomPlayerData = this.getPlayerData(playerId);
        playerData.roundEnergy = energys;
    }
}

/**
 * 操作失败原因
 */
export enum OperateFailReason {
    none,       // 成功
    undefine,   // 找不到卡
    mustLast,   // 只能操作上一个
    areaLock,   // 区域锁定
    areaDestroy,// 区域已销毁
    limit,      // 区域已满
    duplicate,  // 重复
    handToHandArea, //已是编辑手卡只能放回手卡区
    terrainToTerrainArea, //已是编辑地形卡回到编辑前的位置
    confirmInput, //已是确认操作
    areaHaveNoPutBuff, //区域有不可放置buff
    areaHaveMoveBuff, //区域有不可移动buff
    error,
}


export const battleDataMgr = new BattleDataMgr();