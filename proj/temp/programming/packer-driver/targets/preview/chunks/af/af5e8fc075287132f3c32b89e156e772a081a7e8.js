System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Session, BattleBaseComp, DateUtils, OperateFailReason, battleDataMgr, BattleRoundOperationState, Battle_End_Round, EventMgr, Evt_BattlePlayHandTime, proto, Req, Ret, Route, CfgMgr, BeforeGameUtils, js, FightData, Utils, Out_WaitPlayerInput, _crd;

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperateFailReason(extras) {
    _reporterNs.report("OperateFailReason", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleRoundOperationState(extras) {
    _reporterNs.report("BattleRoundOperationState", "../../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardLocation(extras) {
    _reporterNs.report("CardLocation", "../../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_End_Round(extras) {
    _reporterNs.report("Battle_End_Round", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattlePlayHandTime(extras) {
    _reporterNs.report("Evt_BattlePlayHandTime", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "../../../utils/BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
  }

  _export("Out_WaitPlayerInput", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      BattleBaseComp = _unresolved_3.BattleBaseComp;
    }, function (_unresolved_4) {
      DateUtils = _unresolved_4.DateUtils;
    }, function (_unresolved_5) {
      OperateFailReason = _unresolved_5.OperateFailReason;
      battleDataMgr = _unresolved_5.battleDataMgr;
    }, function (_unresolved_6) {
      BattleRoundOperationState = _unresolved_6.BattleRoundOperationState;
    }, function (_unresolved_7) {
      Battle_End_Round = _unresolved_7.Battle_End_Round;
      EventMgr = _unresolved_7.EventMgr;
      Evt_BattlePlayHandTime = _unresolved_7.Evt_BattlePlayHandTime;
    }, function (_unresolved_8) {
      proto = _unresolved_8.default;
      Req = _unresolved_8.Req;
      Ret = _unresolved_8.Ret;
      Route = _unresolved_8.Route;
    }, function (_unresolved_9) {
      CfgMgr = _unresolved_9.CfgMgr;
    }, function (_unresolved_10) {
      BeforeGameUtils = _unresolved_10.BeforeGameUtils;
    }, function (_unresolved_11) {
      FightData = _unresolved_11.FightData;
    }, function (_unresolved_12) {
      Utils = _unresolved_12.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da913yUq8ZG4ZA2zDs7afKR", "Out_WaitPlayerInput", undefined);

      __checkObsolete__(['js']);

      /**
       * 等待客户端玩家操作
       */
      _export("Out_WaitPlayerInput", Out_WaitPlayerInput = class Out_WaitPlayerInput extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        constructor() {
          super(...arguments);
          this.isSend = false;
          //是否已发送编辑卡
          this.editGridList = [];
          //编辑中的卡牌列表
          this.copyHandCards = [];
          this.copyAreas = [];
          this.playerData = void 0;
          this.curEnergy = void 0;
          //当前编辑剩余能量
          this.isCanCancel = void 0;
          //是否可取消
          this.isCandEdit = void 0;
          //是否可编辑
          this.isHaveEnergyPlay = void 0;
          //是否还有足够的能量可出牌
          this.curState = void 0;
          //区域限制卡费点放置
          this.areaLimitCardDrop = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost1, 1, //限制费点1的卡不能放置
          (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost2, 2, //限制费点2的卡不能放置
          (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost3, 3 //限制费点3的卡不能放置
          );
          //区域限制卡数量放置
          this.areaLimitCardNum = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomPersistentState.PersistentStateMax1Card, 1 //此区域只能放一张卡
          );
          //限制出来数量
          this.limitPlayHandNum = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomPersistentState.PersistentStatePlaceCount1, 1 //此回合只能出一张卡
          );
          this.inputTotalTime = void 0;
        }

        start() {
          //回放模式不可操作
          if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData.isReplay) {
            this.sendRoundConfirm();
            this.isCandEdit = false;
            this.scene.isWaitInput = false;
            this.exit();
            return;
          }

          this.inputTotalTime = this.data.timeout - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime;
          console.log("\u5F53\u524D\u56DE\u5408\u51FA\u724C\u65F6\u957F---->" + this.inputTotalTime);
          this.isCanCancel = false;
          this.isCandEdit = true;
          this.scene.isWaitInput = true;
          var playerId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerId(true);
          this.playerData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerData(playerId);
          this.curEnergy = this.playerData.roundEnergy[this.round - 1].finalValue;
          this.editGridList.length = 0;
          this.copyHandCards = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).CopyProto((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerHandCards(playerId), (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardData); //structuredClone(battleDataMgr.getPlayerHandCards(playerId));

          this.copyAreas = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).CopyProto((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerTerrainDatas(playerId), (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomTerrainPlayerData); //structuredClone(battleDataMgr.getPlayerTerrainDatas(playerId));

          this.updatePlayState();
          this.scene.StartOperate(this.canMove.bind(this), this.canDrop.bind(this), this.operateHandle.bind(this));
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_End_Round === void 0 ? (_reportPossibleCrUseOfBattle_End_Round({
            error: Error()
          }), Battle_End_Round) : Battle_End_Round, this.onBtnClick, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomconfirmopinput"], this.onBattleroomconfirmopinput, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).BattleRoomConfirmOpInputPush, this.onConfirmOpInputPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomcancelopinput"], this.onBattleroomcancelopinput, this);

          if (this.data["isPlayerInput"] !== undefined) {
            var isInput = this.data["isPlayerInput"];
            var oldInputs = this.data["inputs"] || [];
            var newEditData;

            for (var inputData of oldInputs) {
              if (inputData.opType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomOpInputType.In_HandToTerrain) {
                for (var index = 0; index < this.copyHandCards.length; index++) {
                  var handCardData = this.copyHandCards[index];

                  if (handCardData.instId == inputData.HandToTerrain.cardInstId) {
                    this.copyHandCards.splice(index, 1);

                    for (var areaIdx = 0; areaIdx < this.copyAreas.length; areaIdx++) {
                      var terrainData = this.copyAreas[areaIdx];

                      if (terrainData.instId == inputData.HandToTerrain.terrainInstId) {
                        newEditData = {
                          formAreaIdx: undefined,
                          formCardIdx: index,
                          curAreaIdx: areaIdx,
                          curCardIdx: terrainData.cards.length,
                          editIdx: this.editGridList.length,
                          cardData: handCardData
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
              } else if (inputData.opType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomOpInputType.In_TerrainToTerrain) {
                var formAreaIdx = -1;
                var formCardIdx = -1;
                var curAreaIdx = -1;
                var curCardIdx = -1;
                var cardData = void 0;

                for (var _areaIdx = 0; _areaIdx < this.copyAreas.length; _areaIdx++) {
                  var _terrainData = this.copyAreas[_areaIdx];

                  for (var cardIndex = 0; cardIndex < _terrainData.cards.length; cardIndex++) {
                    if (_terrainData.cards[cardIndex].instId == inputData.TerrainToTerrain.cardInstId) {
                      formAreaIdx = _areaIdx;
                      formCardIdx = cardIndex;
                      cardData = _terrainData.cards[cardIndex];

                      _terrainData.cards.splice(cardIndex, 1);

                      break;
                    }
                  }

                  if (formAreaIdx > -1) {
                    break;
                  }
                }

                for (var _areaIdx2 = 0; _areaIdx2 < this.copyAreas.length; _areaIdx2++) {
                  var _terrainData2 = this.copyAreas[_areaIdx2];

                  if (_terrainData2.instId == inputData.HandToTerrain.terrainInstId) {
                    newEditData = {
                      formAreaIdx: formAreaIdx,
                      formCardIdx: formCardIdx,
                      curAreaIdx: _areaIdx2,
                      curCardIdx: _terrainData2.cards.length,
                      editIdx: this.editGridList.length,
                      cardData: cardData
                    };

                    _terrainData2.cards.push(cardData);

                    this.editGridList.push(newEditData);
                    break;
                  }
                }
              }
            }

            for (var _index = 0; _index < this.copyAreas.length; _index++) {
              this.scene.FlushAreaCrads(true, _index, this.copyAreas[_index]);
            }

            this.scene.FlushHandCard(this.copyHandCards);
            this.cancelEditor((_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).none); //已经确认过出牌(以下操作主要是向服务器请求一下双方出手状态)

            if (isInput) {
              //发送重新出牌
              this.sendRoundConfirm();
            } else {
              this.sendCancel();
            }
          }
        }

        reset() {
          this.scene.isWaitInput = false;
          this.curState = (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).PlaceRound;
          this.scene.FlushRoundBtnStrState(this.curState);
          this.scene.FlushRoundTime(0, this.isHaveEnergyPlay, this.curState, this.inputTotalTime);
          this.scene.EndOperate();
          this.updateHandState(false);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Battle_End_Round === void 0 ? (_reportPossibleCrUseOfBattle_End_Round({
            error: Error()
          }), Battle_End_Round) : Battle_End_Round, this.onBtnClick, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).off((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomconfirmopinput"], this.onBattleroomconfirmopinput, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).off((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).BattleRoomConfirmOpInputPush, this.onConfirmOpInputPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).off((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomcancelopinput"], this.onBattleroomcancelopinput, this);
          this.isSend = false;
          this.editGridList.length = 0;
        }

        onUpdate(dt) {
          if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData || !(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId) {
            this.exit();
            return;
          }

          var offset = this.data.timeout - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime;

          if (this.isSend) {
            //超时5秒若服务器没有响应直接结束
            if (offset < 5) {
              this.exit();
            }

            this.scene.FlushRoundTime(0, this.isHaveEnergyPlay, this.curState, this.inputTotalTime);
            return;
          }

          this.scene.FlushRoundTime(Math.ceil(offset), this.isHaveEnergyPlay, this.curState, this.inputTotalTime); //倒计时1秒后自动发送

          if (offset <= 2) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_BattlePlayHandTime === void 0 ? (_reportPossibleCrUseOfEvt_BattlePlayHandTime({
              error: Error()
            }), Evt_BattlePlayHandTime) : Evt_BattlePlayHandTime);
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


        getCardLocation(instId) {
          for (var cardIdx = 0; cardIdx < this.copyHandCards.length; cardIdx++) {
            var cardData = this.copyHandCards[cardIdx];

            if (this.copyHandCards[cardIdx].instId == instId) {
              return {
                areaIdx: undefined,
                cardIdx: cardIdx,
                card: cardData
              };
            }
          }

          for (var areaIdx = 0; areaIdx < this.copyAreas.length; areaIdx++) {
            var terrainData = this.copyAreas[areaIdx];

            for (var _cardIdx = 0; _cardIdx < terrainData.cards.length; _cardIdx++) {
              var _cardData = terrainData.cards[_cardIdx];

              if (_cardData.instId == instId) {
                return {
                  areaIdx: areaIdx,
                  cardIdx: _cardIdx,
                  card: _cardData
                };
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


        getPlayerAreaEmptyCardLocation(areaIdx) {
          var terrainData = this.copyAreas[areaIdx];

          if (terrainData.cards.length < (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.terrainCardMax) {
            return {
              areaIdx: areaIdx,
              cardIdx: terrainData.cards.length
            };
          }

          return null;
        }
        /**最后一个操作 */


        get lastOperateId() {
          if (!this.editGridList || !this.editGridList.length) return undefined;
          return this.editGridList[this.editGridList.length - 1].cardData.instId;
        }
        /**判断卡牌是否可以操作 */


        canMove(instId, area) {
          var obj = this.getCardLocation(instId);
          if (!obj) return "目标无效";
          if (!this.isCandEdit) return "当前目标不可移动";
          var cardData = obj.card;
          var editCardData = this.getEditCardData(cardData.instId);

          if (editCardData) {
            //拖拽的是编辑列表的卡 如果是最后一个则可以拖拽 否则不可以
            if (editCardData.editIdx == this.editGridList.length - 1) return undefined;
            return "只能移动上一个卡牌";
          } //无编辑卡


          if (cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Hand) {
            var stateList = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPersistentStateListByInstId(instId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStatePlace);

            if (stateList) {
              for (var state of stateList) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit("buff_event", Number(state.source));
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
          } else if (cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
            //拖拽的是地形牌
            //卡牌没有有可主动移动移动buff
            if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).chekPersistentStateByInstId(instId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStateActiveMove)) {
              return "目标卡牌不可移动";
            }

            var terrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(this.playerData.playerId, area); //此区域上中了不能移动buff

            if (terrainData && (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).chekPersistentStateByInstId(terrainData.selfInstId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStateMove)) {
              return "此区域已被锁定无法移动";
            }
          }

          return undefined;
        }
        /**判断是否可以放置 */


        canDrop(instId, area) {
          if (instId == undefined) {
            //此区域中了不可放置buff
            var terrainData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(this.playerData.playerId, area);
            var stateList = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPersistentStateListByInstId(terrainData.selfInstId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStatePut);

            if (stateList) {
              for (var state of stateList) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit("buff_event", Number(state.source));
              }

              return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                error: Error()
              }), OperateFailReason) : OperateFailReason).areaHaveNoPutBuff;
            }

            if (!this.getPlayerAreaEmptyCardLocation(area)) return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).limit;
            return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).none;
          }

          var dragLocation = this.getCardLocation(instId);
          if (!dragLocation) return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
            error: Error()
          }), OperateFailReason) : OperateFailReason).undefine;
          if (!this.isCandEdit) return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
            error: Error()
          }), OperateFailReason) : OperateFailReason).confirmInput;
          var cardData = dragLocation.card;

          if (area != undefined) {
            var _terrainData3 = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainFormIdx(this.playerData.playerId, area);

            var _stateList = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPersistentStateListByInstId(_terrainData3.selfInstId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStatePut); //此区域中了不可放置buff


            if (_stateList) {
              for (var _state of _stateList) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit("buff_event", Number(_state.source));
              }

              return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                error: Error()
              }), OperateFailReason) : OperateFailReason).areaHaveNoPutBuff;
            } //此区域中了不可放置buff


            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).chekPersistentStateByInstId(_terrainData3.selfInstId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost1)) {
              if (this.checkLimitDropCardCost(cardData.configId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost1)) {
                return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).areaHaveNoPutBuff;
              }
            }

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).chekPersistentStateByInstId(_terrainData3.selfInstId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost2)) {
              if (this.checkLimitDropCardCost(cardData.configId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost2)) {
                return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).areaHaveNoPutBuff;
              }
            }

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).chekPersistentStateByInstId(_terrainData3.selfInstId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost3)) {
              if (this.checkLimitDropCardCost(cardData.configId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomPersistentState.PersistentStateForbidCost3)) {
                return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).areaHaveNoPutBuff;
              }
            }

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).chekPersistentStateByInstId(_terrainData3.selfInstId, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPersistentState.PersistentStateMax1Card)) {
              if (this.checkLimitDropCardNum(area, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomPersistentState.PersistentStateMax1Card)) {
                return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).areaHaveNoPutBuff;
              }
            } //在地形区域放下


            var editCardData = this.getEditCardData(cardData.instId);

            if (editCardData) {
              //已在编辑卡里
              if (cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Hand) {
                //编辑的手牌不可以在地形上放下只能放回手牌区
                return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).handToHandArea;
              } else if (cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
                if (area != editCardData.formAreaIdx) {
                  //编辑的区域牌只能放回原来区域
                  return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                    error: Error()
                  }), OperateFailReason) : OperateFailReason).terrainToTerrainArea;
                } else {
                  return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                    error: Error()
                  }), OperateFailReason) : OperateFailReason).none;
                }
              }
            }

            var areaData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).terrainIndexData(area);

            if (areaData.terrainState == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateDestroy) {
              //区域已销毁
              return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                error: Error()
              }), OperateFailReason) : OperateFailReason).areaDestroy;
            }

            var dropLocation = this.getPlayerAreaEmptyCardLocation(area); //区域已满不可放置

            if (!dropLocation) return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).limit; //原来就在此区域

            if (dragLocation.areaIdx == area) return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).error;
            return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).none;
          } else {
            //在手牌区放下
            if (cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand) {
              var _editCardData = this.getEditCardData(cardData.instId);

              if (_editCardData && _editCardData.editIdx == this.editGridList.length - 1) {
                return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).none;
              }
            } else {//其它位置的卡牌不能放回手牌区
            }

            return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).error;
          }
        }

        cancelEditor(result) {
          if (result === void 0) {
            result = 0;
          }

          this.scene.FlushEnergy(this.curEnergy);
          this.scene.UnSelect();
          this.updatePlayState();
          this.updateHandState(true);
          return result;
        }
        /**玩家放置动作回调 */


        operateHandle(instId, area, cardState) {
          var result = this.canDrop(instId, area);
          if (result) return this.cancelEditor(result);
          var dragLocation = this.getCardLocation(instId);
          if (cardState) dragLocation.card['playState'] = cardState;

          if (area != undefined) {
            var dropLocation = this.getPlayerAreaEmptyCardLocation(area); //在地形区域放下

            var editCardData = this.getEditCardData(dragLocation.card.instId);

            if (editCardData) {
              if (dragLocation.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
                //区域上的卡放回原来区域位置
                var delIdx = this.editGridList.indexOf(editCardData);
                var delEditCardData = this.editGridList[delIdx];
                this.editGridList.splice(delIdx, 1); //this.resetEditCardIndx();

                console.log("删除编辑---->" + delIdx);
                var terrainData;
                terrainData = this.copyAreas[delEditCardData.curAreaIdx]; //从当前区域删除

                terrainData.cards.splice(delEditCardData.curCardIdx, 1);
                console.log("从地形上删除---->" + delEditCardData.curAreaIdx + "------>" + delEditCardData.curCardIdx);
                terrainData = this.copyAreas[delEditCardData.formAreaIdx]; //插入到原来区域

                terrainData.cards.splice(delEditCardData.formCardIdx, 0, delEditCardData.cardData);
                console.log("添加到地形---->" + delEditCardData.formAreaIdx + "------>" + delEditCardData.formCardIdx);
                this.scene.SendMyCardToArea(dragLocation.card, dropLocation.areaIdx, dropLocation.cardIdx);
                this.scene.FlushAreaCrads(true, dragLocation.areaIdx, this.copyAreas[dragLocation.areaIdx]); // this.scene.FlushAreaCrads(true, dropLocation.areaIdx, this.copyAreas[dropLocation.areaIdx]);

                return this.cancelEditor((_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).none);
              }
            }

            var newEditData = {
              formAreaIdx: dragLocation.areaIdx,
              formCardIdx: dragLocation.cardIdx,
              curAreaIdx: dropLocation.areaIdx,
              curCardIdx: dropLocation.cardIdx,
              editIdx: this.editGridList.length,
              cardData: dragLocation.card
            };
            this.editGridList.push(newEditData);
            console.log("添加编辑---->" + newEditData.curAreaIdx + "----->" + newEditData.curCardIdx);

            if (dragLocation.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand) {
              this.copyHandCards.splice(dragLocation.cardIdx, 1);
              var _terrainData4 = this.copyAreas[dropLocation.areaIdx];

              _terrainData4.cards.push(dragLocation.card);

              this.curEnergy -= dragLocation.card.cost.finalValue;
              this.scene.SendMyCardToArea(dragLocation.card, dropLocation.areaIdx, dropLocation.cardIdx);
              this.scene.FlushAreaCrads(true, dropLocation.areaIdx, this.copyAreas[dropLocation.areaIdx]);
              this.scene.FlushHandCard(this.copyHandCards);
              return this.cancelEditor((_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                error: Error()
              }), OperateFailReason) : OperateFailReason).none);
            } else if (dragLocation.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
              var _terrainData5 = this.copyAreas[dragLocation.areaIdx];

              _terrainData5.cards.splice(dragLocation.cardIdx, 1);

              this.scene.FlushAreaCrads(true, dragLocation.areaIdx, this.copyAreas[dragLocation.areaIdx]);
              _terrainData5 = this.copyAreas[dropLocation.areaIdx];

              _terrainData5.cards.push(dragLocation.card);

              this.scene.SendMyCardToArea(dragLocation.card, dropLocation.areaIdx, dropLocation.cardIdx);
              this.scene.FlushAreaCrads(true, dropLocation.areaIdx, this.copyAreas[dropLocation.areaIdx]);
              return this.cancelEditor((_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                error: Error()
              }), OperateFailReason) : OperateFailReason).none);
            }
          } else {
            //在手牌区放下
            if (dragLocation.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand) {
              var _editCardData2 = this.getEditCardData(dragLocation.card.instId);

              if (_editCardData2 && _editCardData2.editIdx == this.editGridList.length - 1) {
                this.editGridList.pop();
                this.curEnergy += dragLocation.card.cost.finalValue;
                var _terrainData6 = this.copyAreas[dragLocation.areaIdx];

                _terrainData6.cards.splice(dragLocation.cardIdx, 1);

                this.scene.FlushAreaCrads(true, dragLocation.areaIdx, this.copyAreas[dragLocation.areaIdx]);
                this.copyHandCards.splice(_editCardData2.formCardIdx, 0, dragLocation.card);
                this.scene.FlushHandCard(this.copyHandCards);
                return this.cancelEditor((_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
                  error: Error()
                }), OperateFailReason) : OperateFailReason).none);
              }
            } else {//其它位置的卡牌不能放回手牌区
            }

            this.updatePlayState();
            return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
              error: Error()
            }), OperateFailReason) : OperateFailReason).error;
          }

          this.updatePlayState();
          return (_crd && OperateFailReason === void 0 ? (_reportPossibleCrUseOfOperateFailReason({
            error: Error()
          }), OperateFailReason) : OperateFailReason).error;
        }
        /**区域选中效果 */


        flushSelectEffect(area, index) {
          for (var areaId = 0; areaId < this.scene.myTeamLayout.length; areaId++) {
            var cards = this.scene.myTeamLayout[areaId];

            for (var i = 0; i < cards.length; i++) {
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

        onBtnClick() {
          if (this.isCanCancel) {
            this.sendCancel();
            return;
          }

          this.sendRoundConfirm();
        }

        sendCancel() {
          var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).pb.Server.create();
          server.id = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData.serverId;
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["battle.protocol.battleroomcancelopinput"]();
          data.server = server;
          data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId;
          console.log("发送取消回合结束---->");
          console.dir(data);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomcancelopinput"], data);
        }

        sendRoundConfirm() {
          if (this.isSend) return;
          var inputs = [];
          var input;
          var editCardData;
          var terrainData;

          for (var index = 0; index < this.editGridList.length; index++) {
            editCardData = this.editGridList[index];
            terrainData = this.copyAreas[editCardData.curAreaIdx];
            input = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpInput.create();

            if (editCardData.cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand) {
              input.opType = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomOpInputType.In_HandToTerrain;
              var handToTerrainData = void 0;
              handToTerrainData = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomOpInput_HandToTerrain.create();
              handToTerrainData.terrainInstId = terrainData.instId;
              handToTerrainData.cardInstId = editCardData.cardData.instId;
              input.HandToTerrain = handToTerrainData;
            } else if (editCardData.cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
              input.opType = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomOpInputType.In_TerrainToTerrain;
              var terrainToTerrainData = void 0;
              terrainToTerrainData = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomOpInput_TerrainToTerrain.create();
              terrainToTerrainData.toTerrainInstId = terrainData.instId;
              terrainToTerrainData.cardInstId = editCardData.cardData.instId;
              input.TerrainToTerrain = terrainToTerrainData;
            }

            inputs.push(input);
          }

          var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).pb.Server.create();
          server.id = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData.serverId;
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["battle.protocol.battleroomconfirmopinput"]();
          data.server = server;
          data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId;
          data.inputs = inputs;
          console.log("发送出牌数据---->");
          console.dir(data);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomconfirmopinput"], data);
          this.isSend = true;
          this.isCandEdit = false;
        }

        onBattleroomconfirmopinput(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle.protocol.battleroomconfirmopinput"].decode(data);
          if (this.roomId != result.roomId) return;

          if (result.res.code == 200) {//battleDataMgr.setPlayerHandCards(this.playerData.playerId, this.copyHandCards);
            //battleDataMgr.setPlayerTerrainDatas(this.playerData.playerId, this.copyAreas);
          } else {
            //出牌失败
            console.log("-------->失败");
            this.copyHandCards = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).CopyProto((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerHandCards(this.playerData.playerId), (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardData); //structuredClone(battleDataMgr.getPlayerHandCards(this.playerData.playerId));

            this.copyAreas = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).CopyProto((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainDatas(this.playerData.playerId), (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomTerrainPlayerData); //structuredClone(battleDataMgr.getPlayerTerrainDatas(this.playerData.playerId));

            this.curEnergy = this.playerData.roundEnergy[this.round - 1].finalValue;

            for (var index = 0; index < this.copyAreas.length; index++) {
              this.scene.FlushAreaCrads(true, index, this.copyAreas[index]);
            }

            this.scene.FlushHandCard(this.copyHandCards);
            this.cancelEditor();
          } //this.exit();

        }

        onConfirmOpInputPush(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).BattleRoomConfirmOpInputPush.decode(data);
          var playerIdB = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerId(false);
          var playerIdA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerId(true);
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

        onBattleroomcancelopinput(data) {
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["battle.protocol.battleroomcancelopinput"].decode(data);
          if (this.roomId != result.roomId) return;

          if (result.res.code == 200) {
            //取消成功
            this.isCandEdit = true;
            this.isSend = false;
          } else {}
        }

        updateRoundState() {
          this.curState = this.isCanCancel ? (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).CancelRound : (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).EndRound;
          this.scene.FlushRoundBtnStrState(this.curState);
        }

        getEditCardData(instId) {
          for (var data of this.editGridList) {
            if (data.cardData.instId == instId) return data;
          }
        } //更新出牌状态


        updatePlayState() {
          this.isHaveEnergyPlay = true;
          var num = 0;

          for (var index = 0; index < this.copyHandCards.length; index++) {
            var cardData = this.copyHandCards[index];

            if (this.curEnergy >= cardData.cost.finalValue) {
              num++;
              break;
            }
          }

          this.isHaveEnergyPlay = num > 0;
          this.updateRoundState();
        }

        updateHandState(isCheck) {
          if (isCheck === void 0) {
            isCheck = false;
          }

          var cardState = js.createMap();

          if (isCheck && this.checkLimitPlayHandNum()) {
            for (var cardData of this.copyHandCards) {
              cardState[cardData.instId] = 1;
            }
          }

          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).cardState = cardState;
        }
        /**
         * 检测限制放置卡牌费点
         * @param cardId 
         * @param state 
         * @returns 
         */


        checkLimitDropCardCost(cardId, state) {
          var stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard(cardId);
          var cost = this.areaLimitCardDrop[state];

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


        checkLimitDropCardNum(areaIdx, state) {
          var terrainData = this.copyAreas[areaIdx];
          var haceNum = terrainData.cards.length;
          var cardNum = this.areaLimitCardNum[state];

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


        checkLimitPlayHandNum() {
          var curNum = 0;

          for (var editCardData of this.editGridList) {
            if (editCardData.cardData.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand) {
              curNum++;
            }
          }

          var limitNum = 0;

          for (var _key in this.limitPlayHandNum) {
            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).chekPersistentStateByInstId(this.playerData.instId, Number(_key))) {
              limitNum = this.limitPlayHandNum[_key]; //以限制最少的状态为最终限制

              if (limitNum == this.limitPlayHandNum[(_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomPersistentState.PersistentStatePlaceCount1]) {
                break;
              }
            }
          }

          return limitNum > 0 && curNum >= limitNum;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af5e8fc075287132f3c32b89e156e772a081a7e8.js.map