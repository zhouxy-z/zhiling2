import { Session } from "../../../net/Session";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { DateUtils } from "../../../utils/DateUtils";
import { PlayerData } from "../../player/PlayerData";
import { OperateFailReason, battleDataMgr } from "../../battle/BattleDataMgr";
import { BattleRoundOperationState, CardLocation } from "../../player/PlayerStruct";
import { Battle_End_Round, EventMgr, Evt_BattlePlayHandTime } from "../../../manager/EventMgr";
import proto, { Req, Ret, Route } from "../../../net/Protocol";
import { CfgMgr, StdCard } from "../../../manager/CfgMgr";
import { BeforeGameUtils } from "../../../utils/BeforeGameUtils";
import { js } from "cc";
import { FightData } from "../FightData";
import { Utils } from "../../../utils/Utils";
interface IEditCardData {
    formAreaIdx: number; //原区域下标
    formCardIdx: number; //原格子下标
    curAreaIdx: number; //当前区域下标
    curCardIdx: number; //当前格子下标
    editIdx?: number;     //编辑下标
    cardData: proto.base.IBattleRoomCardData;
}


/**
 * 等待客户端玩家操作
 */
export class Out_WaitPlayerInput extends BattleBaseComp<proto.base.IBattleRoomOpOutput_WaitPlayerInput> {
    private isSend: boolean = false; //是否已发送编辑卡
    private editGridList: IEditCardData[] = [];//编辑中的卡牌列表
    private copyHandCards: proto.base.IBattleRoomCardData[] = [];
    private copyAreas: proto.base.IBattleRoomTerrainPlayerData[] = [];
    private playerData: proto.base.IBattleRoomPlayerData;
    private curEnergy: number;//当前编辑剩余能量
    private isCanCancel: boolean;//是否可取消
    private isCandEdit: boolean;//是否可编辑
    private isHaveEnergyPlay: boolean;//是否还有足够的能量可出牌
    private curState: BattleRoundOperationState;
    //区域限制卡费点放置
    private areaLimitCardDrop: { [key: number]: number } = BeforeGameUtils.toHashMapObj(
        proto.base.BattleRoomPersistentState.PersistentStateForbidCost1, 1,//限制费点1的卡不能放置
        proto.base.BattleRoomPersistentState.PersistentStateForbidCost2, 2,//限制费点2的卡不能放置
        proto.base.BattleRoomPersistentState.PersistentStateForbidCost3, 3,//限制费点3的卡不能放置
    );

    //区域限制卡数量放置
    private areaLimitCardNum: { [key: number]: number } = BeforeGameUtils.toHashMapObj(
        proto.base.BattleRoomPersistentState.PersistentStateMax1Card, 1,//此区域只能放一张卡
    );

    //限制出来数量
    private limitPlayHandNum: { [key: number]: number } = BeforeGameUtils.toHashMapObj(
        proto.base.BattleRoomPersistentState.PersistentStatePlaceCount1, 1,//此回合只能出一张卡
    );

    private inputTotalTime: number;
    protected start(): void {
        //回放模式不可操作
        if (battleDataMgr.creatRoomData.isReplay) {
            this.sendRoundConfirm();
            this.isCandEdit = false;
            this.scene.isWaitInput = false;
            this.exit();
            return;
        }
        

        this.inputTotalTime = this.data.timeout - DateUtils.ServerTime;
        console.log(`当前回合出牌时长---->${this.inputTotalTime}`)
        this.isCanCancel = false;
        this.isCandEdit = true;
        this.scene.isWaitInput = true;
        let playerId = battleDataMgr.getPlayerId(true);
        this.playerData = battleDataMgr.getPlayerData(playerId);
        this.curEnergy = this.playerData.roundEnergy[this.round - 1].finalValue;
        this.editGridList.length = 0;
        
        this.copyHandCards = Utils.CopyProto(battleDataMgr.getPlayerHandCards(playerId), proto.base.BattleRoomCardData);//structuredClone(battleDataMgr.getPlayerHandCards(playerId));
        this.copyAreas = Utils.CopyProto(battleDataMgr.getPlayerTerrainDatas(playerId), proto.base.BattleRoomTerrainPlayerData);//structuredClone(battleDataMgr.getPlayerTerrainDatas(playerId));
        this.updatePlayState();
        this.scene.StartOperate(this.canMove.bind(this), this.canDrop.bind(this), this.operateHandle.bind(this));
        
        EventMgr.on(Battle_End_Round, this.onBtnClick, this);
        Session.on(Route["battle.protocol.battleroomconfirmopinput"], this.onBattleroomconfirmopinput, this);
        Session.on(Route.BattleRoomConfirmOpInputPush, this.onConfirmOpInputPush, this);
        Session.on(Route["battle.protocol.battleroomcancelopinput"], this.onBattleroomcancelopinput, this);

        if (this.data["isPlayerInput"] !== undefined) {
            let isInput: boolean = this.data["isPlayerInput"];
            let oldInputs: proto.base.IBattleRoomOpInput[] = this.data["inputs"] || [];
            let newEditData: IEditCardData;
            for (let inputData of oldInputs) {
                if (inputData.opType == proto.base.BattleRoomOpInputType.In_HandToTerrain) {
                    for (let index = 0; index < this.copyHandCards.length; index++) {
                        let handCardData: proto.base.IBattleRoomCardData = this.copyHandCards[index];
                        if (handCardData.instId == inputData.HandToTerrain.cardInstId) {
                            this.copyHandCards.splice(index, 1);
                            for (let areaIdx = 0; areaIdx < this.copyAreas.length; areaIdx++) {
                                let terrainData = this.copyAreas[areaIdx];
                                if (terrainData.instId == inputData.HandToTerrain.terrainInstId) {
                                    newEditData = {
                                        formAreaIdx: undefined,
                                        formCardIdx: index,
                                        curAreaIdx: areaIdx,
                                        curCardIdx: terrainData.cards.length,
                                        editIdx: this.editGridList.length,
                                        cardData: handCardData,
                                    };
                                    terrainData.cards.push(handCardData);
                                    this.editGridList.push(newEditData);
                                    this.curEnergy -= handCardData.cost.finalValue;
                                    break;
                                }
                            }
                            break;
                        } 
                    }
                } else if (inputData.opType == proto.base.BattleRoomOpInputType.In_TerrainToTerrain) {
                    let formAreaIdx: number = -1;
                    let formCardIdx: number = -1;
                    let curAreaIdx: number = -1;
                    let curCardIdx: number = -1;
                    let cardData: proto.base.IBattleRoomCardData;
                    for (let areaIdx = 0; areaIdx < this.copyAreas.length; areaIdx++) {
                        let terrainData = this.copyAreas[areaIdx];
                        for (let cardIndex = 0; cardIndex < terrainData.cards.length; cardIndex++) {
                            if (terrainData.cards[cardIndex].instId == inputData.TerrainToTerrain.cardInstId) {
                                formAreaIdx = areaIdx;
                                formCardIdx = cardIndex;
                                cardData = terrainData.cards[cardIndex];
                                terrainData.cards.splice(cardIndex, 1);
                
                                break;
                            }
                        }
                        if (formAreaIdx > -1) {
                            break;
                        }
                    }
                    for (let areaIdx = 0; areaIdx < this.copyAreas.length; areaIdx++) {
                        let terrainData = this.copyAreas[areaIdx];
                        if (terrainData.instId == inputData.HandToTerrain.terrainInstId) {
                            newEditData = {
                                formAreaIdx: formAreaIdx,
                                formCardIdx: formCardIdx,
                                curAreaIdx: areaIdx,
                                curCardIdx: terrainData.cards.length,
                                editIdx: this.editGridList.length,
                                cardData: cardData,
                            };
                            terrainData.cards.push(cardData);
                            this.editGridList.push(newEditData);
                            break;
                        }
                    }
                }
            }
            for (let index = 0; index < this.copyAreas.length; index++) {
                this.scene.FlushAreaCrads(true, index, this.copyAreas[index]);
                
            }
            this.scene.FlushHandCard(this.copyHandCards);
            this.cancelEditor(OperateFailReason.none);
            //已经确认过出牌(以下操作主要是向服务器请求一下双方出手状态)
            if (isInput) {
                //发送重新出牌
                this.sendRoundConfirm();
            } else {
                this.sendCancel();
            }
            
        }

    }

    protected reset(): void {
        this.scene.isWaitInput = false;
        this.curState = BattleRoundOperationState.PlaceRound;
        this.scene.FlushRoundBtnStrState(this.curState);
        this.scene.FlushRoundTime(0, this.isHaveEnergyPlay, this.curState, this.inputTotalTime);
        this.scene.EndOperate();
        this.updateHandState(false);
        EventMgr.off(Battle_End_Round, this.onBtnClick, this);
        Session.off(Route["battle.protocol.battleroomconfirmopinput"], this.onBattleroomconfirmopinput, this);
        Session.off(Route.BattleRoomConfirmOpInputPush, this.onConfirmOpInputPush, this);
        Session.off(Route["battle.protocol.battleroomcancelopinput"], this.onBattleroomcancelopinput, this);
        this.isSend = false;
        this.editGridList.length = 0;
    }

    protected onUpdate(dt: number): void {
        if (!battleDataMgr.roomData || !battleDataMgr.roomData.roomId) {
            this.exit();
            return;
        }
        let offset: number = this.data.timeout - DateUtils.ServerTime;
        if (this.isSend) {
            //超时5秒若服务器没有响应直接结束
            if (offset < 5) {
                this.exit();
            }
            this.scene.FlushRoundTime(0, this.isHaveEnergyPlay, this.curState, this.inputTotalTime);
            return;
        }
        this.scene.FlushRoundTime(Math.ceil(offset), this.isHaveEnergyPlay, this.curState, this.inputTotalTime);
        //倒计时1秒后自动发送
        if (offset <= 2) {
            EventMgr.emit(Evt_BattlePlayHandTime);
            this.sendRoundConfirm();
        } else if (offset <= 0) {
            this.exit();
        }
    }

    /**
     * 获取本阶段的卡牌位置
     * @param instId 
     * @returns 
     */
    protected getCardLocation(instId: string): CardLocation {
        for (let cardIdx = 0; cardIdx < this.copyHandCards.length; cardIdx++) {
            let cardData = this.copyHandCards[cardIdx];
            if (this.copyHandCards[cardIdx].instId == instId) {
                return { areaIdx: undefined, cardIdx: cardIdx, card: cardData };
            }
        }
        for (let areaIdx = 0; areaIdx < this.copyAreas.length; areaIdx++) {
            let terrainData = this.copyAreas[areaIdx];
            for (let cardIdx = 0; cardIdx < terrainData.cards.length; cardIdx++) {
                let cardData = terrainData.cards[cardIdx];
                if (cardData.instId == instId) {
                    return { areaIdx: areaIdx, cardIdx: cardIdx, card: cardData };
                }
            }
        }
        return undefined;
    }

    /**
     * 获取玩家区域空位卡牌位置
     * @param playerId 玩家id
     * @param areaIdx 区域下标
     * @returns 
     */
    protected getPlayerAreaEmptyCardLocation(areaIdx: number): CardLocation {
        let terrainData = this.copyAreas[areaIdx];
        if (terrainData.cards.length < battleDataMgr.roomData.terrainCardMax) {
            return { areaIdx: areaIdx, cardIdx: terrainData.cards.length };
        }
        return null;
    }

    /**最后一个操作 */
    protected get lastOperateId() {
        if (!this.editGridList || !this.editGridList.length) return undefined;
        return this.editGridList[this.editGridList.length - 1].cardData.instId;
    }

    /**判断卡牌是否可以操作 */
    protected canMove(instId: string, area?: number) {
        let obj = this.getCardLocation(instId);
        if (!obj) return "目标无效";
        if (!this.isCandEdit) return "当前目标不可移动";

        let cardData = obj.card;
        let editCardData: IEditCardData = this.getEditCardData(cardData.instId);
        if (editCardData) {
            //拖拽的是编辑列表的卡 如果是最后一个则可以拖拽 否则不可以
            if (editCardData.editIdx == this.editGridList.length - 1) return undefined;
            return "只能移动上一个卡牌";
        }
        //无编辑卡
        if (cardData.location == proto.base.BattleRoomCardLocation.Hand) {
            let stateList: proto.base.IBaseAddMul[] = battleDataMgr.getPersistentStateListByInstId(instId, proto.base.BattleRoomPersistentState.PersistentStatePlace);
            if (stateList) {
                for (let state of stateList) {
                    EventMgr.emit("buff_event", Number(state.source));
                }
                
                return "此手卡已被锁定";
            }
            if (this.curEnergy < cardData.cost.finalValue) {
                //能量不足
                return "能量不足";
            }

            if (this.checkLimitPlayHandNum()) {
                return "已超出出牌数量";
            }

        } else if (cardData.location == proto.base.BattleRoomCardLocation.Terrain) {
            //拖拽的是地形牌

            //卡牌没有有可主动移动移动buff
            if (!battleDataMgr.chekPersistentStateByInstId(instId, proto.base.BattleRoomPersistentState.PersistentStateActiveMove)) {
                return "目标卡牌不可移动";
            }
            let terrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(this.playerData.playerId, area);
            //此区域上中了不能移动buff
            if (terrainData && battleDataMgr.chekPersistentStateByInstId(terrainData.selfInstId, proto.base.BattleRoomPersistentState.PersistentStateMove)) {
                return "此区域已被锁定无法移动";
            }
        }

        return undefined;
    }

    /**判断是否可以放置 */
    protected canDrop(instId: string, area: number) {
        if (instId == undefined) {
            //此区域中了不可放置buff
            let terrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(this.playerData.playerId, area);
            let stateList: proto.base.IBaseAddMul[] = battleDataMgr.getPersistentStateListByInstId(terrainData.selfInstId, proto.base.BattleRoomPersistentState.PersistentStatePut);
            if (stateList) {
                for (let state of stateList) {
                    EventMgr.emit("buff_event", Number(state.source));
                }
                return OperateFailReason.areaHaveNoPutBuff;
            }
            if (!this.getPlayerAreaEmptyCardLocation(area)) return OperateFailReason.limit;
            return OperateFailReason.none;
        }
        let dragLocation = this.getCardLocation(instId);
        if (!dragLocation) return OperateFailReason.undefine;
        if (!this.isCandEdit) return OperateFailReason.confirmInput;
        let cardData = dragLocation.card;
        if (area != undefined) {
            let terrainData: proto.base.IBattleRoomTerrainPlayerData = battleDataMgr.getPlayerTerrainFormIdx(this.playerData.playerId, area);
            let stateList: proto.base.IBaseAddMul[] = battleDataMgr.getPersistentStateListByInstId(terrainData.selfInstId, proto.base.BattleRoomPersistentState.PersistentStatePut);
            //此区域中了不可放置buff
            if (stateList) {
                for (let state of stateList) {
                    EventMgr.emit("buff_event", Number(state.source));
                }
                
                return OperateFailReason.areaHaveNoPutBuff;
            }
            //此区域中了不可放置buff
            if (battleDataMgr.chekPersistentStateByInstId(terrainData.selfInstId, proto.base.BattleRoomPersistentState.PersistentStateForbidCost1)) {
                if (this.checkLimitDropCardCost(cardData.configId, proto.base.BattleRoomPersistentState.PersistentStateForbidCost1)) {
                    return OperateFailReason.areaHaveNoPutBuff;
                }
            }
            if (battleDataMgr.chekPersistentStateByInstId(terrainData.selfInstId, proto.base.BattleRoomPersistentState.PersistentStateForbidCost2)) {
                if (this.checkLimitDropCardCost(cardData.configId, proto.base.BattleRoomPersistentState.PersistentStateForbidCost2)) {
                    return OperateFailReason.areaHaveNoPutBuff;
                }
            }
            if (battleDataMgr.chekPersistentStateByInstId(terrainData.selfInstId, proto.base.BattleRoomPersistentState.PersistentStateForbidCost3)) {
                if (this.checkLimitDropCardCost(cardData.configId, proto.base.BattleRoomPersistentState.PersistentStateForbidCost3)) {
                    return OperateFailReason.areaHaveNoPutBuff;
                }
            }
            if (battleDataMgr.chekPersistentStateByInstId(terrainData.selfInstId, proto.base.BattleRoomPersistentState.PersistentStateMax1Card)) {
                if (this.checkLimitDropCardNum(area, proto.base.BattleRoomPersistentState.PersistentStateMax1Card)) {
                    return OperateFailReason.areaHaveNoPutBuff;
                }
            }

            //在地形区域放下
            let editCardData: IEditCardData = this.getEditCardData(cardData.instId);
            if (editCardData) {
                //已在编辑卡里
                if (cardData.location == proto.base.BattleRoomCardLocation.Hand) {
                    //编辑的手牌不可以在地形上放下只能放回手牌区
                    return OperateFailReason.handToHandArea;
                } else if (cardData.location == proto.base.BattleRoomCardLocation.Terrain) {
                    if (area != editCardData.formAreaIdx) {
                        //编辑的区域牌只能放回原来区域
                        return OperateFailReason.terrainToTerrainArea;
                    } else {
                        return OperateFailReason.none;
                    }
                }
            }
            let areaData: proto.base.IBattleRoomTerrainData = battleDataMgr.terrainIndexData(area);
            if (areaData.terrainState == proto.base.BattleRoomInTerrainState.TerrainStateDestroy) {
                //区域已销毁
                return OperateFailReason.areaDestroy;
            }
            let dropLocation = this.getPlayerAreaEmptyCardLocation(area);
            //区域已满不可放置
            if (!dropLocation) return OperateFailReason.limit;
            //原来就在此区域
            if (dragLocation.areaIdx == area) return OperateFailReason.error;

            return OperateFailReason.none;
        } else {
            //在手牌区放下
            if (cardData.location == proto.base.BattleRoomCardLocation.Hand) {
                let editCardData: IEditCardData = this.getEditCardData(cardData.instId);
                if (editCardData && editCardData.editIdx == this.editGridList.length - 1) {
                    return OperateFailReason.none;
                }
            } else {
                //其它位置的卡牌不能放回手牌区
            }
            return OperateFailReason.error;
        }
    }

    private cancelEditor(result: number = 0) {
        this.scene.FlushEnergy(this.curEnergy);
        this.scene.UnSelect();
        this.updatePlayState();
        this.updateHandState(true);
        return result;
    }

    /**玩家放置动作回调 */
    protected operateHandle(instId: string, area: number, cardState?: number) {
        let result = this.canDrop(instId, area);
        if (result) return this.cancelEditor(result);
        let dragLocation = this.getCardLocation(instId);
        if (cardState) dragLocation.card['playState'] = cardState;

        if (area != undefined) {
            let dropLocation = this.getPlayerAreaEmptyCardLocation(area);
            //在地形区域放下
            let editCardData: IEditCardData = this.getEditCardData(dragLocation.card.instId);
            if (editCardData) {
                if (dragLocation.card.location == proto.base.BattleRoomCardLocation.Terrain) {
                    //区域上的卡放回原来区域位置
                    let delIdx: number = this.editGridList.indexOf(editCardData);
                    let delEditCardData: IEditCardData = this.editGridList[delIdx];
                    this.editGridList.splice(delIdx, 1);
                    //this.resetEditCardIndx();
                    console.log("删除编辑---->" + delIdx)
                    let terrainData: proto.base.IBattleRoomTerrainPlayerData;
                    terrainData = this.copyAreas[delEditCardData.curAreaIdx];
                    //从当前区域删除
                    terrainData.cards.splice(delEditCardData.curCardIdx, 1);
                    console.log("从地形上删除---->" + delEditCardData.curAreaIdx + "------>" + delEditCardData.curCardIdx)

                    terrainData = this.copyAreas[delEditCardData.formAreaIdx];
                    //插入到原来区域
                    terrainData.cards.splice(delEditCardData.formCardIdx, 0, delEditCardData.cardData);
                    console.log("添加到地形---->" + delEditCardData.formAreaIdx + "------>" + delEditCardData.formCardIdx)
                    this.scene.SendMyCardToArea(dragLocation.card, dropLocation.areaIdx, dropLocation.cardIdx);
                    this.scene.FlushAreaCrads(true, dragLocation.areaIdx, this.copyAreas[dragLocation.areaIdx]);

                    // this.scene.FlushAreaCrads(true, dropLocation.areaIdx, this.copyAreas[dropLocation.areaIdx]);

                    return this.cancelEditor(OperateFailReason.none);
                }
            }

            let newEditData: IEditCardData = {
                formAreaIdx: dragLocation.areaIdx,
                formCardIdx: dragLocation.cardIdx,
                curAreaIdx: dropLocation.areaIdx,
                curCardIdx: dropLocation.cardIdx,
                editIdx: this.editGridList.length,
                cardData: dragLocation.card,
            };

            this.editGridList.push(newEditData);
            console.log("添加编辑---->" + newEditData.curAreaIdx + "----->" + newEditData.curCardIdx)
            if (dragLocation.card.location == proto.base.BattleRoomCardLocation.Hand) {
                this.copyHandCards.splice(dragLocation.cardIdx, 1);
                let terrainData: proto.base.IBattleRoomTerrainPlayerData = this.copyAreas[dropLocation.areaIdx];
                terrainData.cards.push(dragLocation.card);
                this.curEnergy -= dragLocation.card.cost.finalValue;
                this.scene.SendMyCardToArea(dragLocation.card, dropLocation.areaIdx, dropLocation.cardIdx);
                this.scene.FlushAreaCrads(true, dropLocation.areaIdx, this.copyAreas[dropLocation.areaIdx]);
                this.scene.FlushHandCard(this.copyHandCards);

                return this.cancelEditor(OperateFailReason.none);
            } else if (dragLocation.card.location == proto.base.BattleRoomCardLocation.Terrain) {
                let terrainData: proto.base.IBattleRoomTerrainPlayerData = this.copyAreas[dragLocation.areaIdx];
                terrainData.cards.splice(dragLocation.cardIdx, 1);
                this.scene.FlushAreaCrads(true, dragLocation.areaIdx, this.copyAreas[dragLocation.areaIdx]);

                terrainData = this.copyAreas[dropLocation.areaIdx];
                terrainData.cards.push(dragLocation.card);
                this.scene.SendMyCardToArea(dragLocation.card, dropLocation.areaIdx, dropLocation.cardIdx);
                this.scene.FlushAreaCrads(true, dropLocation.areaIdx, this.copyAreas[dropLocation.areaIdx]);

                return this.cancelEditor(OperateFailReason.none);
            }
        } else {
            //在手牌区放下
            if (dragLocation.card.location == proto.base.BattleRoomCardLocation.Hand) {
                let editCardData: IEditCardData = this.getEditCardData(dragLocation.card.instId);
                if (editCardData && editCardData.editIdx == this.editGridList.length - 1) {
                    this.editGridList.pop();
                    this.curEnergy += dragLocation.card.cost.finalValue;
                    let terrainData: proto.base.IBattleRoomTerrainPlayerData = this.copyAreas[dragLocation.areaIdx];
                    terrainData.cards.splice(dragLocation.cardIdx, 1);
                    this.scene.FlushAreaCrads(true, dragLocation.areaIdx, this.copyAreas[dragLocation.areaIdx]);

                    this.copyHandCards.splice(editCardData.formCardIdx, 0, dragLocation.card);
                    this.scene.FlushHandCard(this.copyHandCards);
                    return this.cancelEditor(OperateFailReason.none);
                }
            } else {
                //其它位置的卡牌不能放回手牌区
            }
            this.updatePlayState();
            return OperateFailReason.error;
        }
        this.updatePlayState();
        return OperateFailReason.error;
    }

    /**区域选中效果 */
    protected flushSelectEffect(area?: number, index?: number) {
        for (let areaId = 0; areaId < this.scene.myTeamLayout.length; areaId++) {
            let cards = this.scene.myTeamLayout[areaId];
            for (let i = 0; i < cards.length; i++) {
                if (area == undefined || area != areaId) {
                    cards[i].active = false;
                } else if (index == undefined || index != i) {
                    cards[i].active = false;
                } else {
                    cards[i].active = true;
                }
            }
        }
    }

    private onBtnClick(): void {
        if (this.isCanCancel) {
            this.sendCancel();
            return;
        }
        this.sendRoundConfirm();
    }
    private sendCancel(): void {
        let server: proto.pb.IServer = proto.pb.Server.create();
        server.id = battleDataMgr.creatRoomData.serverId;
        let data = new Req["battle.protocol.battleroomcancelopinput"]();
        data.server = server;
        data.roomId = battleDataMgr.roomData.roomId;
        console.log("发送取消回合结束---->");
        console.dir(data)
        Session.Send(Route["battle.protocol.battleroomcancelopinput"], data);
    }

    private sendRoundConfirm(): void {
        if (this.isSend) return;
        let inputs: proto.base.BattleRoomOpInput[] = [];
        let input: proto.base.BattleRoomOpInput;
        let editCardData: IEditCardData;
        let terrainData: proto.base.IBattleRoomTerrainPlayerData;
        for (let index = 0; index < this.editGridList.length; index++) {
            editCardData = this.editGridList[index];
            terrainData = this.copyAreas[editCardData.curAreaIdx];
            input = proto.base.BattleRoomOpInput.create();
            if (editCardData.cardData.location == proto.base.BattleRoomCardLocation.Hand) {
                input.opType = proto.base.BattleRoomOpInputType.In_HandToTerrain;
                let handToTerrainData: proto.base.IBattleRoomOpInput_HandToTerrain;
                handToTerrainData = proto.base.BattleRoomOpInput_HandToTerrain.create();
                handToTerrainData.terrainInstId = terrainData.instId;
                handToTerrainData.cardInstId = editCardData.cardData.instId;
                input.HandToTerrain = handToTerrainData;
            } else if (editCardData.cardData.location == proto.base.BattleRoomCardLocation.Terrain) {
                input.opType = proto.base.BattleRoomOpInputType.In_TerrainToTerrain;
                let terrainToTerrainData: proto.base.IBattleRoomOpInput_TerrainToTerrain;
                terrainToTerrainData = proto.base.BattleRoomOpInput_TerrainToTerrain.create();
                terrainToTerrainData.toTerrainInstId = terrainData.instId;
                terrainToTerrainData.cardInstId = editCardData.cardData.instId;
                input.TerrainToTerrain = terrainToTerrainData;
            }

            inputs.push(input);
        }
        let server: proto.pb.IServer = proto.pb.Server.create();
        server.id = battleDataMgr.creatRoomData.serverId;
        let data = new Req["battle.protocol.battleroomconfirmopinput"]();
        data.server = server;
        data.roomId = battleDataMgr.roomData.roomId;
        data.inputs = inputs;
        console.log("发送出牌数据---->");
        console.dir(data)
        Session.Send(Route["battle.protocol.battleroomconfirmopinput"], data);
        this.isSend = true;
        this.isCandEdit = false;
    }

    private onBattleroomconfirmopinput(data: any): void {
        let result = Ret["battle.protocol.battleroomconfirmopinput"].decode(data);
        if (this.roomId != result.roomId) return;
        if (result.res.code == 200) {
            //battleDataMgr.setPlayerHandCards(this.playerData.playerId, this.copyHandCards);
            //battleDataMgr.setPlayerTerrainDatas(this.playerData.playerId, this.copyAreas);
        } else {
            //出牌失败
            console.log("-------->失败");
            this.copyHandCards = Utils.CopyProto(battleDataMgr.getPlayerHandCards(this.playerData.playerId), proto.base.BattleRoomCardData);//structuredClone(battleDataMgr.getPlayerHandCards(this.playerData.playerId));
            this.copyAreas = Utils.CopyProto(battleDataMgr.getPlayerTerrainDatas(this.playerData.playerId), proto.base.BattleRoomTerrainPlayerData);//structuredClone(battleDataMgr.getPlayerTerrainDatas(this.playerData.playerId));
            this.curEnergy = this.playerData.roundEnergy[this.round - 1].finalValue;
            for (let index = 0; index < this.copyAreas.length; index++) {
                this.scene.FlushAreaCrads(true, index, this.copyAreas[index]);
            }

            this.scene.FlushHandCard(this.copyHandCards);
            this.cancelEditor();
        }
        //this.exit();
    }

    private onConfirmOpInputPush(data: any): void {
        let result = Ret.BattleRoomConfirmOpInputPush.decode(data);
        let playerIdB: string = battleDataMgr.getPlayerId(false);
        let playerIdA: string = battleDataMgr.getPlayerId(true);
        console.dir(result.isConfirm);
        if (result.isConfirm[playerIdB] && result.isConfirm[playerIdA]) {
            //双方已确认
            this.isCanCancel = false;
            this.exit();
        } else if (result.isConfirm[playerIdB]) {
            //对方已确认不能取消
            this.isCanCancel = false;
        } else {
            //对方未确认并且我方已确认则可取消
            if (result.isConfirm[playerIdA]) {
                this.isCanCancel = true;
            } else {
                this.isCanCancel = false;
            }

        }
        this.updateRoundState();
    }
    private onBattleroomcancelopinput(data: any): void {
        let result = Ret["battle.protocol.battleroomcancelopinput"].decode(data);
        if (this.roomId != result.roomId) return;
        if (result.res.code == 200) {
            //取消成功
            this.isCandEdit = true;
            this.isSend = false;
        } else {

        }
    }
    private updateRoundState(): void {
        this.curState = this.isCanCancel ? BattleRoundOperationState.CancelRound : BattleRoundOperationState.EndRound;
        this.scene.FlushRoundBtnStrState(this.curState);
    }

    private getEditCardData(instId: string): IEditCardData {
        for (let data of this.editGridList) {
            if (data.cardData.instId == instId) return data;
        }
    }

    //更新出牌状态
    private updatePlayState(): void {
        this.isHaveEnergyPlay = true;
        let num: number = 0;
        for (let index = 0; index < this.copyHandCards.length; index++) {
            let cardData = this.copyHandCards[index];
            if (this.curEnergy >= cardData.cost.finalValue) {
                num ++;
                break;
            }
        }
        this.isHaveEnergyPlay = num > 0;
        this.updateRoundState();
    }

    private updateHandState(isCheck: boolean = false): void {
        let cardState: {[key: number]: number} = js.createMap();
        if (isCheck && this.checkLimitPlayHandNum()) {
            for (let cardData of this.copyHandCards) {
                cardState[cardData.instId] = 1;
            }
        }
        FightData.cardState = cardState;
    }

    /**
     * 检测限制放置卡牌费点
     * @param cardId 
     * @param state 
     * @returns 
     */
    private checkLimitDropCardCost(cardId: number, state: proto.base.BattleRoomPersistentState): boolean {
        let stdCard: StdCard = CfgMgr.GetCard(cardId);
        let cost: number = this.areaLimitCardDrop[state];
        if (stdCard.Cost == cost) {
            return true;
        }
        return false;
    }

    /**
     * 检测限制放置卡牌的数量
     * @param areaIdx 
     * @param state 
     * @returns 
     */
    private checkLimitDropCardNum(areaIdx: number, state: proto.base.BattleRoomPersistentState): boolean {
        let terrainData = this.copyAreas[areaIdx];
        let haceNum: number = terrainData.cards.length;
        let cardNum: number = this.areaLimitCardNum[state];
        if (haceNum < cardNum) {
            return false;
        }
        return true;
    }

    /**
     * 检测限制放置卡牌的数量
     * @param areaIdx 
     * @param state 
     * @returns 
     */
    private checkLimitPlayHandNum(): boolean {
        let curNum: number = 0;
        for (let editCardData of this.editGridList) {
            if (editCardData.cardData.location == proto.base.BattleRoomCardLocation.Hand) {
                curNum++;
            }
        }
        let limitNum: number = 0;
        for (let key in this.limitPlayHandNum) {
            if (battleDataMgr.chekPersistentStateByInstId(this.playerData.instId, Number(key))) {
                limitNum = this.limitPlayHandNum[key];
                //以限制最少的状态为最终限制
                if (limitNum == this.limitPlayHandNum[proto.base.BattleRoomPersistentState.PersistentStatePlaceCount1]) {
                    break;
                }
            }
        }
        return limitNum > 0 && curNum >= limitNum;
    }
}