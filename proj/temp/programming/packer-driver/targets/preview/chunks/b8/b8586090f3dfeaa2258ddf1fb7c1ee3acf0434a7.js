System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Battle_ShowSettlement, EventMgr, proto, DateUtils, LocalStorage, PlayerData, BattleRoomInstType, PanelDefine, FightData, CfgMgr, BattleDataMgr, _crd, OperateFailReason, battleDataMgr;

  function _reportPossibleCrUseOfBattle_ShowSettlement(extras) {
    _reporterNs.report("Battle_ShowSettlement", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleOpData(extras) {
    _reporterNs.report("BattleOpData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePackData(extras) {
    _reporterNs.report("BattlePackData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleRoomInstType(extras) {
    _reporterNs.report("BattleRoomInstType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardLocation(extras) {
    _reporterNs.report("CardLocation", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelDefine(extras) {
    _reporterNs.report("PanelDefine", "../../PanelDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../fight/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("BattleDataMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Battle_ShowSettlement = _unresolved_2.Battle_ShowSettlement;
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      DateUtils = _unresolved_4.DateUtils;
    }, function (_unresolved_5) {
      LocalStorage = _unresolved_5.default;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      BattleRoomInstType = _unresolved_7.BattleRoomInstType;
    }, function (_unresolved_8) {
      PanelDefine = _unresolved_8.PanelDefine;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }, function (_unresolved_10) {
      CfgMgr = _unresolved_10.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ff11Y8nW9Aia66hqQzB5Ok", "BattleDataMgr", undefined);

      /**
       * 战斗数据管理
       */
      _export("BattleDataMgr", BattleDataMgr = class BattleDataMgr {
        constructor() {
          //当前创建房间数据
          this._creatRoomData = void 0;
          //房间数据
          this._roomData = void 0;
          //玩家数据
          this._playerDatas = void 0;
          //地形列表
          this._terrains = void 0;
          //当前回合
          this._currentRound = void 0;
          this._doubleData = void 0;
          //战斗数据包列表
          this._battlePackList = [];
          //第一人称视觉玩家
          this._playerA = new Map();
          this._curRoundRevealPlayerId = "";
        }

        //设置创建的房间数据
        setCreatRoomData(roomData) {
          this._creatRoomData = roomData;
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).cardBack = {};

          for (var key in this._creatRoomData.players) {
            var playerData = this._creatRoomData.players[key];
            var cardGroupData = playerData.deckAttr;
            var stdCardBack = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardBackCfgById(cardGroupData == null ? void 0 : cardGroupData.cardBackId);
            var cardBackName = stdCardBack ? stdCardBack.icon1 : "bg_1";
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).cardBack[playerData.playerId] = cardBackName;
          }
        } //设置房间加倍数据


        setRoomDouble(roomId, data) {
          this._doubleData = data;
        }
        /**
         * 获取当前加倍次数
         * @returns 
         */


        getRoomDoubleNum(addCont) {
          if (addCont === void 0) {
            addCont = 0;
          }

          var base = 1;
          var doubleCont = 0;

          for (var key in this._doubleData) {
            var doubleData = this._doubleData[key];
            doubleCont += doubleData.doubleCount;
          }

          doubleCont += addCont;
          return base * Math.pow(2, doubleCont);
        }
        /**获取玩家剩余可加倍次数 */


        getPlayerDoubleResidue(playerId) {
          var doubleData = this._doubleData[playerId];
          return (doubleData == null ? void 0 : doubleData.doubleCount) || 0;
        }
        /**
         * 获取创建的房间数据
         */


        get creatRoomData() {
          return this._creatRoomData;
        }
        /**
         * 添加战斗数据
         */


        addBattleData(roomId, packList) {
          if (!this._creatRoomData) {
            console.warn("\u672A\u521B\u5EFA\u6218\u6597\u623F\u95F4");
            return;
          }

          if (this._creatRoomData.roomId != roomId) {
            console.warn("\u6536\u5230\u9519\u8BEF\u623F\u95F4\u6570\u636E--->" + roomId + "\u5F53\u524D\u623F\u95F4----->" + this._creatRoomData.roomId);
            return;
          }

          for (var data of packList) {
            this.analysisBattleData(roomId, data);
          }
        }

        getInstType(instId) {
          var str = instId.split(":")[0];
          var type;

          switch (str) {
            case "card":
              type = (_crd && BattleRoomInstType === void 0 ? (_reportPossibleCrUseOfBattleRoomInstType({
                error: Error()
              }), BattleRoomInstType) : BattleRoomInstType).RoomInstCard;
              break;

            case "terr":
              type = (_crd && BattleRoomInstType === void 0 ? (_reportPossibleCrUseOfBattleRoomInstType({
                error: Error()
              }), BattleRoomInstType) : BattleRoomInstType).RoomInstTerrain;
              break;

            case "player":
              type = (_crd && BattleRoomInstType === void 0 ? (_reportPossibleCrUseOfBattleRoomInstType({
                error: Error()
              }), BattleRoomInstType) : BattleRoomInstType).RoomInstPlayer;
              break;
          }

          return type;
        }
        /**
         * 解析战斗数据包
         * @param data 
         */


        analysisBattleData(roomId, data) {
          console.log("战斗房间id-------->" + this._creatRoomData.roomId + "------------>" + roomId);
          var packData;
          var comp;
          var changeDataCall; // console.dir(data);

          switch (data.opType) {
            //新的回合0
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_NewRound:
              packData = data.newRound;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_NewRound;
              this.setBattleRoomData(data.newRound.gamePlayData);
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //卡牌由卡组最前到手牌末尾1

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_CardDeckFrontToHandTail:
              packData = data.cardDeckTopToHandTail;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_CardDeckFrontToHandTail;
              changeDataCall = this.changeCardDeckFrontToHandTail;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //等待客户端玩家操作2

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_WaitPlayerInput:
              packData = data.waitPlayerInput;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_WaitPlayerInput;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //等待客户端表现完毕3

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_WaitPlayerShow:
              packData = data.waitPlayerShow;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_WaitPlayerShow;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //结算4

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_Settlement:
              packData = data.settlement;
              var isGiveUp = data.settlement.leavePlayerId && data.settlement.leavePlayerId != "";

              if (isGiveUp) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit(_crd && Battle_ShowSettlement === void 0 ? (_reportPossibleCrUseOfBattle_ShowSettlement({
                  error: Error()
                }), Battle_ShowSettlement) : Battle_ShowSettlement, this._roomData.roomId, this.getPlayerId(true), data.settlement);
              } else {
                comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                  error: Error()
                }), PanelDefine) : PanelDefine).Out_Settlement;
              }

              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //卡牌数据修改5

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_CardDataChange:
              console.log("100002_Out_CardDataChange", data);
              packData = data.cardDataChange;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_CardDataChange;
              changeDataCall = this.changeCardData;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //删除区域的卡回到手卡6

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_DelToHand:
              packData = data.delToHand;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_DelToHand;
              changeDataCall = this.changeDelToHand;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //复制一张卡7

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_CopyCard:
              packData = data.copyCard;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_CopyCard;
              changeDataCall = this.changeCopyCard;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //从手牌上场8

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_HandToTerrain:
              packData = data.handToTerrain;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_HandToTerrain;
              changeDataCall = this.changeHandToTerrain;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //从手牌区到弃卡区9

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_HandToDrop:
              packData = data.handToDrop;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_HandToDrop;
              changeDataCall = this.changeHandToDrop;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //从手卡区到删除区10

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_HandToDel:
              packData = data.handToDel;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_HandToDel;
              changeDataCall = this.changeHandToDel;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //从地形区域到删除区11

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_TerrainToDel:
              packData = data.terrainToDel;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_TerrainToDel;
              changeDataCall = this.changeTerrainToDel;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //从弃牌区到手牌12

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_DropToHand:
              packData = data.dropToHand;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_DropToHand;
              changeDataCall = this.changeDropToHand;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //区域上的卡牌移动13

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_TerrainToTerrain:
              packData = data.terrainToTerrain;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_TerrainToTerrain;
              changeDataCall = this.changeTerrainToTerrain;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //卡组区域到删除区域14

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_DeckToDel:
              packData = data.deckToDel;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_DeckToDel;
              changeDataCall = this.changeDeckToDel;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //卡组区域到弃牌区域15

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_DeckToDrop:
              packData = data.deckToDrop;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_DeckToDrop;
              changeDataCall = this.changeDeckToDrop;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //玩家地形战力变更16

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_PlayerPower:
              packData = data.playerPower;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_PlayerPower;
              changeDataCall = this.changePlayerPower;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //回合数增加17

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_RoundData:
              packData = data.roundData;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_RoundData;
              changeDataCall = this.changeRoundData;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //地形数据变更19

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_TerrainData:
              packData = data.terrainData;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_BattleRoomOpOutput_TerrainData;
              changeDataCall = this.changeTerrainData;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //卡牌在地形上变化20

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_CardTerrainState:
              packData = data.cardTerrainState;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_CardTerrainState;
              changeDataCall = this.changeCardTerrainState;
              this.addBattlePackData(data, packData, comp, changeDataCall); //设置优先揭示卡牌玩家id

              if (this._curRoundRevealPlayerId == "") {
                this.curRoundRevealPlayerId = data.ownerPlayerId;
                console.log("优先揭示卡牌玩家----->" + data.ownerPlayerId);
              }

              break;
            //玩家能量变更21

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_PlayerEnergy:
              packData = data.playerEnergy;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_PlayerEnergy;
              changeDataCall = this.changePlayerEnergy;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //往卡组上添加卡牌22

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_AddCardToDeck:
              packData = data.addCardToDeck;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_AddCardToDeck;
              changeDataCall = this.changeAddCardToDeck;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //往卡组上添加卡牌23

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_AddCardToHand:
              packData = data.addCardToHand;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_AddCardToHand;
              changeDataCall = this.changeAddCardToHand;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //往区域添加卡牌24

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_AddCardToTerrain:
              packData = data.addCardToTerrain;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_AddCardToTerrain;
              changeDataCall = this.changeAddCardToTerrain;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //从场景区域到弃卡区25

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_TerrainToDrop:
              packData = data.terrainToDrop;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_TerrainToDrop;
              changeDataCall = this.changeTerrainToDrop;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //窥视卡牌26

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_Peek:
              packData = data.peek;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_Peek;
              changeDataCall = this.changePeek;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //战斗房间异常27

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_RoomDestroy:
              packData = data.roomDestroy;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_RoomDestroy;
              this.addBattlePackData(data, packData, comp, changeDataCall); //EventMgr.emit(Battle_RoomUnusual, data.roomDestroy.reason);

              break;
            //增加区域持续状态29

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_LockZone:
              packData = data.lockZone;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_LockZone;
              changeDataCall = this.changeLockZone;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //从场上数据选择来源卡牌数据31

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_AddCard:
              packData = data.addCard;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_AddCard;
              changeDataCall = this.changeAddCard;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //移除持续状态32

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_Nullify:
              // console.log("100002_Out_Nullify", data);
              packData = data.nullify;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_Nullify;
              changeDataCall = this.changeNullify;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_HandToDeck:
              packData = data.handToDeck;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_HandToDeck;
              changeDataCall = this.changeHandToDeck;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;
            //技能释放

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_EffectSkill:
              // console.log("100002_Out_EffectSkill", data);
              packData = data.effectSkill;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_EffectSkill;
              changeDataCall = this.applyBuff;
              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_RetransmissionRound:
              packData = data.retransmissionRound.round;
              comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                error: Error()
              }), PanelDefine) : PanelDefine).Out_RetransmissionRound;
              this.setBattleRoomData(data.retransmissionRound.round.gamePlayData);
              this.addBattlePackData(data, packData, comp, changeDataCall); //处于输入状态，重新添加输入包

              if (data.retransmissionRound.waitPlayerInput) {
                var inputData = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomOpOutput.create();
                inputData.ownerPlayerId = data.ownerPlayerId;
                inputData.touchInstId = data.touchInstId;
                inputData.opType = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomOpOutputType.Out_WaitPlayerInput;
                var inputPackData = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomOpOutput_WaitPlayerInput.create();
                inputPackData.timeout = data.retransmissionRound.timeout;
                var inputComp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                  error: Error()
                }), PanelDefine) : PanelDefine).Out_WaitPlayerInput;
                inputPackData["isPlayerInput"] = data.retransmissionRound.isPlayerInput;
                inputPackData["inputs"] = data.retransmissionRound.inputs;
                this.addBattlePackData(inputData, inputPackData, inputComp);
              }

              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomOpOutputType.Out_RetransmissionSettlement:
              packData = data.retransmissionSettlement.settlement;
              var giveUp = data.retransmissionSettlement.settlement.leavePlayerId && data.retransmissionSettlement.settlement.leavePlayerId != "";

              if (giveUp) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit(_crd && Battle_ShowSettlement === void 0 ? (_reportPossibleCrUseOfBattle_ShowSettlement({
                  error: Error()
                }), Battle_ShowSettlement) : Battle_ShowSettlement, this._roomData.roomId, this.getPlayerId(true), data.retransmissionSettlement.settlement);
              } else {
                comp = (_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
                  error: Error()
                }), PanelDefine) : PanelDefine).Out_Settlement;
              }

              this.addBattlePackData(data, packData, comp, changeDataCall);
              break;

            default:
              console.error("\u672A\u5B9A\u4E49\u6218\u6597\u6570\u636E\u5305----->" + data.opType);
              break;
          }

          console.log("battleData push----> round " + this._currentRound + " --->" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomOpOutputType[data.opType], data);
        }

        addBattlePackData(data, packData, comp, changeDataCall) {
          if (packData && comp) {
            var battlePackData = {
              roomId: this._roomData.roomId,
              round: this.curRound,
              ownerPlayerId: data.ownerPlayerId,
              data: packData,
              touchInstId: data.touchInstId
            };
            var battleOpData = {
              packData: battlePackData,
              comp: comp,
              type: data.opType,
              changeDataCell: changeDataCall
            };

            this._battlePackList.push(battleOpData);
          }
        }
        /**
         * 设置当前回合优先揭示玩家id
         */


        set curRoundRevealPlayerId(playerId) {
          this._curRoundRevealPlayerId = playerId;
        }
        /**
         * 获取当前回合优先揭示玩家id
         */


        get curRoundRevealPlayerId() {
          return this._curRoundRevealPlayerId;
        }
        /**
         *设置当前房间数据 
         */


        setBattleRoomData(data) {
          this.curRoundRevealPlayerId = ""; //无房间或者非同一房间，重置第一视觉玩家

          if (!this._roomData || this._roomData.roomId != data.levelData.roomId) {
            this._playerA = new Map();
          }

          this._playerDatas = data.players;
          this._roomData = data.levelData;
          console.log("设置战斗房间id ----->" + this.roomData.roomId);
          this._terrains = data.terrains;
          this._currentRound = data.currentRound;
          this.addBattleLog();

          if (this._creatRoomData.isReplay) {
            this._playerA.set(this._creatRoomData.viewPlayerId, true);

            return;
          } //本局作战设置过第一视觉了则不处理


          var myId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId;

          if (this._playerDatas[myId]) {
            this._playerA.set(myId, true);

            return;
          } //无自己则随便一个玩家作为第一视觉


          for (var key in this._playerDatas) {
            this._playerA.set(key, true);

            break;
          }
        }

        addBattleLog() {
          if (this._creatRoomData.isReplay) return;
          var key = "battleLog_" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId;
          var logDatas = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetObject(key);

          if (!logDatas) {
            logDatas = [];
          }

          var isAdd = true;
          var logData;

          for (var index = 0; index < logDatas.length; index++) {
            logData = logDatas[index];

            if (logData.roomId == this.roomData.roomId) {
              isAdd = false;
              break;
            }
          }

          if (isAdd) {
            var playerIds = [];

            for (var _key in this.playerDatas) {
              var playerData = this.playerDatas[_key];

              if (playerData.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).player.playerId) {
                playerIds[0] = playerData.playerId;
              } else {
                playerIds[1] = playerData.playerId;
              }
            }

            logDatas.push({
              playerList: playerIds,
              roomId: this.roomData.roomId,
              createTime: (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime
            });
          }

          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetObject(key, logDatas);
        }
        /**
         * 获取当前回合数
         */


        get curRound() {
          return this._currentRound;
        }
        /**
         * 获取战斗数据包列表
         */


        get battlePackList() {
          return this._battlePackList;
        }
        /**
         * 获取首个战斗数据包
         */


        getFirstBattlePack() {
          return this._battlePackList.length > 0 ? this._battlePackList.shift() : null;
        }
        /**
         * 获取房间数据
         */


        get roomData() {
          return this._roomData;
        }
        /**
         * 获取地形数据列表
         */


        get terrains() {
          return this._terrains;
        }
        /**
         * 根据地形实体id获取地形数据
         * @param instId 
         * @returns 
         */


        terrainIdData(instId) {
          for (var terrainData of this._terrains) {
            if (terrainData.instId == instId) return terrainData;
          }

          return null;
        }
        /**
         * 根据地形下标获取地形数据
         * @param idx 
         * @returns 
         */


        terrainIndexData(idx) {
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


        getPlayerTerrainFormId(playerId, instId) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain;

          for (var terrainData of terrains) {
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


        getPlayerTerrainFormIdx(playerId, areaIdx) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain[areaIdx];
          return terrains;
        }
        /**
         * 获取玩家区域列表
         * @param playerId 
         * @returns 
         */


        getPlayerTerrainDatas(playerId) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain;
          return terrains;
        }
        /**
         * 获取玩家区域列表
         * @param playerId 
         * @returns 
         */


        setPlayerTerrainDatas(playerId, terrains) {
          var playerData = this.getPlayerData(playerId);
          playerData.terrain = [...terrains];
        }
        /**
         * 获取玩家区域总战力
         * @param playerId 
         * @param areaIdx 
         * @returns 
         */


        getPlayerTerrainTotalPow(playerId, areaIdx) {
          var base = this.getPlayerTerrainBasePow(playerId, areaIdx);
          var cardTotalPower = this.getPlayerTerrainCardTotalPow(playerId, areaIdx);
          return base + cardTotalPower;
        }
        /**
         * 获取玩家区域基础战力
         * @param playerId 
         * @param areaIdx 
         * @returns 
         */


        getPlayerTerrainBasePow(playerId, areaIdx) {
          var playerData = this.getPlayerData(playerId);
          var terrainData = playerData.terrain[areaIdx];
          var count = 0;

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


        getPlayerTerrainCardTotalPow(playerId, areaIdx, isMult) {
          if (isMult === void 0) {
            isMult = true;
          }

          var playerData = this.getPlayerData(playerId);
          var terrainData = playerData.terrain[areaIdx];
          var count = 0;

          if (terrainData) {
            for (var cardData of terrainData.cards) {
              //未揭示不计算战力
              if (cardData.terrainState != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomInCardState.CardStateShow) continue;
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


        getPlayerTerrainCardPowerMul(playerId, areaIdx) {
          var playerData = this.getPlayerData(playerId);
          var terrainData = playerData.terrain[areaIdx];

          if (terrainData) {
            return terrainData.cardMul.finalValue;
          }

          return 1;
        }
        /**
         * 获取玩家数据
         * @param playerId 
         */


        get playerDatas() {
          return this._playerDatas;
        }
        /**
         * 获取玩家数据
         * @param playerId 
         */


        getPlayerData(playerId) {
          return this._playerDatas[playerId];
        }
        /**
         * 获取是否第一人称视觉
         * @param playerId 
         * @returns 
         */


        isPlayerA(playerId) {
          var _this$_playerA$get;

          return (_this$_playerA$get = this._playerA.get(playerId)) != null ? _this$_playerA$get : false;
        }
        /**
         * 获取指定的实体
         * @param instId 
         * @returns 
         */


        getEntityByInstId(instId) {
          for (var _k in this.playerDatas) {
            var player = this.playerDatas[_k];

            if (instId == player.instId) {
              return player;
            }

            var all = [player.deckCards, player.delCards, player.dropCards, player.handCards];

            for (var cards of all) {
              if (cards) {
                for (var card of cards) {
                  if (card.instId == instId) return card;
                }
              }
            }

            var terrain = player.terrain || [];

            for (var i = 0; i < terrain.length; i++) {
              var t = terrain[i];

              if (t.selfInstId == instId) {
                t['area'] = t;
                return t;
              }

              for (var _card of t.cards) {
                if (_card.instId == instId) return _card;
              }
            }
          }
        }
        /**
         * 获取玩家id
         * @param isPlayerA 是否第一视觉玩家 
         * @returns 
         */


        getPlayerId(isPlayerA) {
          if (isPlayerA === void 0) {
            isPlayerA = true;
          }

          for (var key in this.playerDatas) {
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


        getPlayerHandCards(playerId) {
          var playerData = this.getPlayerData(playerId);
          return playerData.handCards;
        }
        /**
         * 设置玩家手牌
         * @param playerId 
         * @returns 
         */


        setPlayerHandCards(playerId, cards) {
          var playerData = this.getPlayerData(playerId);
          playerData.handCards = [...cards];
        }
        /**
         * 获取玩家弃卡
         * @param playerId 
         * @param instId 
         * @returns 
         */


        getPlayerDropCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);

          for (var cardData of playerData.dropCards) {
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


        getPlayerDelCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);

          for (var cardData of playerData.delCards) {
            if (cardData.instId == instId) return cardData;
          }

          return null;
        }
        /**
         * 获取玩家的卡
         * @param playerId 
         * @param cardData 
         */


        getPlayerHandCard(playerId, instId) {
          var cards = this.getPlayerHandCards(playerId);

          for (var cardData of cards) {
            if (cardData.instId == instId) return cardData;
          }

          return null;
        }
        /**
         * 获取玩家卡的能量
         * @param playerId 
         * @param instId 
         */


        getPlayerCardCost(playerId, instId) {
          var _cardData$cost$finalV, _cardData$cost;

          var cardData = this.getPlayerHandCard(playerId, instId);
          cardData != null ? cardData : this.getPlayerTerrainCard(playerId, instId);
          if (cardData) return (_cardData$cost$finalV = (_cardData$cost = cardData.cost) == null ? void 0 : _cardData$cost.finalValue) != null ? _cardData$cost$finalV : 0;
          return 0;
        }
        /**
         * 获取玩家卡的战力
         * @param playerId 
         * @param instId 
         */


        getPlayerCardPower(playerId, instId) {
          var _cardData;

          var cardData = this.getPlayerHandCard(playerId, instId);
          if (!cardData) cardData = this.getPlayerTerrainCard(playerId, instId);
          if (cardData && cardData.terrainState == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomInCardState.CardStateShow) return ((_cardData = cardData) == null || (_cardData = _cardData.power) == null ? void 0 : _cardData.finalValue) || 0;
          return 0;
        }
        /**
         * 获取玩家地形上的卡
         * @param playerId 
         * @param instId 
         * @returns 
         */


        getPlayerTerrainCard(playerId, instId) {
          var terrains = this.getPlayerTerrainDatas(playerId);

          for (var terrainData of terrains) {
            for (var cardData of terrainData.cards) {
              if (cardData.instId == instId) return cardData;
            }
          }

          return null;
        }
        /**
         * 获取玩家身上某一张卡（手卡、地形上的卡）
         * @param playerId 
         * @param instId 
         * @returns 
         */


        getPlayerCard(playerId, instId) {
          if (playerId == "") return null;
          return this.getPlayerHandCard(playerId, instId) || this.getPlayerTerrainCard(playerId, instId) || this.getPlayerDeckCard(playerId, instId) || this.getPlayerDropCard(playerId, instId) || this.getPlayerDelCard(playerId, instId);
        }
        /**
         * 获取对战卡牌
         * @param instId 
         * @returns 
         */


        getCard(instId) {
          var playerIdA = this.getPlayerId();
          var playerIdB = this.getPlayerId(false);
          var cardData = this.getPlayerCard(playerIdA, instId);

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


        getCardByInstId(instId, all) {
          if (all === void 0) {
            all = false;
          }

          for (var terrains of this._terrains) {
            if (terrains.instId == instId) return terrains;
          }

          for (var _k2 in this._playerDatas) {
            var player = this._playerDatas[_k2];
            var card = player.handCards.find(value => value.instId == instId);
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


        getPlayerDeckCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);

          for (var cardData of playerData.deckCards) {
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


        getPlayerCardLocation(playerId, instId) {
          var playerData = this.getPlayerData(playerId);

          for (var cardIdx = 0; cardIdx < playerData.handCards.length; cardIdx++) {
            var cardData = playerData.handCards[cardIdx];

            if (cardData.instId == instId) {
              return {
                areaIdx: -1,
                cardIdx: cardIdx,
                card: cardData
              };
            }
          }

          for (var areaIdx = 0; areaIdx < playerData.terrain.length; areaIdx++) {
            var terrainData = playerData.terrain[areaIdx];

            for (var _cardIdx = 0; _cardIdx < terrainData.cards.length; _cardIdx++) {
              var _cardData2 = terrainData.cards[_cardIdx];

              if (_cardData2.instId == instId) {
                return {
                  areaIdx: areaIdx,
                  cardIdx: _cardIdx,
                  card: _cardData2
                };
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


        getPlayerAreaEmptyCardLocation(playerId, instId) {
          var playerData = this.getPlayerData(playerId);

          for (var areaIdx = 0; areaIdx < playerData.terrain.length; areaIdx++) {
            var terrainData = playerData.terrain[areaIdx];

            if (terrainData.instId == instId) {
              if (terrainData.cards.length < this.roomData.terrainCardMax) {
                return {
                  areaIdx: areaIdx,
                  cardIdx: terrainData.cards.length
                };
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


        getPlayerAreaEmptyCardLocationByIdx(playerId, areaIdx) {
          var playerData = this.getPlayerData(playerId);
          var terrainData = playerData.terrain[areaIdx];

          if (terrainData.cards.length < this.roomData.terrainCardMax) {
            return {
              areaIdx: areaIdx,
              cardIdx: terrainData.cards.length
            };
          }

          return null;
        }
        /**
         * 根据实例id检查实体上获取某种持续状态值
         * @param instId 
         * @param buffType 
         * @returns 
         */


        chekPersistentStateByInstId(instId, buffType) {
          var traget = this.getEntityByInstId(instId);
          if (!traget || !traget.persistentState) return false;
          var state = traget.persistentState[buffType];
          if (!state || !state.base || state.base.length < 1) return false;
          return true;
        }
        /**
         * 根据实例id检查实体上获取某种持续状态值
         * @param instId 
         * @param buffType 
         * @returns 
         */


        getPersistentStateListByInstId(instId, buffType) {
          var traget = this.getEntityByInstId(instId);
          if (!traget || !traget.persistentState) return null;
          var state = traget.persistentState[buffType];
          if (!state || !state.base || state.base.length < 1) return null;
          return state.base;
        }

        clearCurBattlePack() {
          for (var data of this._battlePackList) {
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


        checkIsStopBattlePack(type) {
          if (type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomOpOutputType.Out_Settlement) {
            return true;
          } else if (type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomOpOutputType.Out_RoomDestroy) {
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


        addCardToPlayerLocation(playerId, cardLocation, card) {
          switch (cardLocation) {
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand:
              this.addPlayerHandCard(playerId, card);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain:
              this.addCardToTerrainByIdx(playerId, card.area, card);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Deck:
              this.addPlayerDeckCard(playerId, card);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Del:
              this.addPlayerDelCard(playerId, card);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Drop:
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


        delPlayerLocationCard(playerId, cardLocation, instId) {
          switch (cardLocation) {
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand:
              this.delPlayerHandCard(playerId, instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Deck:
              this.delPlayerDeckCard(playerId, instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Drop:
              this.delPlayerDropCard(playerId, instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Del:
              this.delPlayerDelCard(playerId, instId);
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain:
              this.delTerrainCard(playerId, instId);
              break;
          }
        }
        /**
         * 清理战场数据
         */


        clearBattleData() {
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


        changeCardDeckFrontToHandTail(playerId, data) {
          if (!this._roomData) return;

          for (var cardData of data.cards) {
            this.delPlayerDeckCard(playerId, cardData.instId);
            this.addPlayerHandCard(playerId, cardData);
          }
        }
        /**
         * 从手卡出牌到地形
         * @param data 
         */


        changeHandToTerrain(playerId, data) {
          if (!this._roomData) return;
          this.addCardToTerrainByInstId(data.toTerrainPlayerId, data.toTerrainInstId, data.card);
          this.delPlayerHandCard(data.toTerrainPlayerId, data.card.instId);
        }
        /**
         * 修改玩家手卡到移除
         * @param playerId 
         * @param data 
         */


        changeHandToDrop(playerId, data) {
          if (!this._roomData) return;
          this.addPlayerDropCard(playerId, data.card);
          this.delPlayerHandCard(playerId, data.card.instId);
        }
        /**
         * 修改玩家手卡到删除区
         * @param playerId 
         * @param data 
         */


        changeHandToDel(playerId, data) {
          if (!this._roomData) return;
          this.addPlayerDelCard(playerId, data.card);
          this.delPlayerHandCard(playerId, data.card.instId);
        }
        /**
         * 修改从地形区到删除区
         * @param playerId 
         * @param data 
         */


        changeTerrainToDel(playerId, data) {
          if (!this._roomData) return;
          this.delTerrainCard(playerId, data.card.instId);
          this.addPlayerDelCard(playerId, data.card);
        }
        /**
         * 修改从地形区到删除区
         * @param playerId 
         * @param data 
         */


        changeTerrainToDrop(playerId, data) {
          if (!this._roomData) return;
          this.delTerrainCard(playerId, data.card.instId);
          this.addPlayerDropCard(playerId, data.card);
        }
        /**
         * 修改从弃卡区到手卡区
         * @param playerId 
         * @param data 
         */


        changeDropToHand(playerId, data) {
          if (!this._roomData) return;
          this.delPlayerDropCard(playerId, data.card.instId);
          this.addPlayerHandCard(playerId, data.card);
        }
        /**
         * 修改玩家战力
         * @param data 
         */


        changePlayerPower(playerId, data) {
          if (!this._roomData) return;
          var powerData;

          for (var key in data.terrainPower) {
            powerData = data.terrainPower[key];
            var playerData = this.getPlayerData(key);

            for (var index = 0; index < powerData.basePower.length; index++) {
              playerData.terrain[index].basePower = powerData.basePower[index];
              playerData.terrain[index].cardMul = powerData.cardMul[index];
            }
          }
        }
        /**
         * 改变地形数据
         * @param data 
         */


        changeTerrainData(playerId, data) {
          if (!this._roomData) return;
          this.resetTerrainData(data.terrainData);
        }
        /**
         * 改变卡牌在地形上的变化
         */


        changeCardTerrainState(playerId, data) {
          if (!this._roomData) return;
          this.resetTerrainCard(playerId, data.instId, data.card);
        }
        /**
         * 改变玩家能量
         * @param playerId 
         * @param energys 
         */


        changePlayerEnergy(playerId, data) {
          if (!this._roomData) return;
          var playerData = this.getPlayerData(data.playerId);
          playerData.roundEnergy = data.energy;
        }
        /**
         * 改变地形上卡牌移动
         */


        changeTerrainToTerrain(playerId, data) {
          if (!this._roomData) return;
          this.delCardFromTerrain(data.fromTerrainPlayerId, data.fromTerrainInstId, data.card);
          this.addCardToTerrainByInstId(data.toTerrainPlayerId, data.toTerrainInstId, data.card);
        }
        /**
         * 从删除区增加一张卡到手牌去
         */


        changeDelToHand(playerId, data) {
          if (!this._roomData) return;
          this.delPlayerDelCard(playerId, data.card.instId);
          this.addPlayerHandCard(playerId, data.card);
        }
        /**
         * 改变卡组区到删除区
         */


        changeDeckToDel(playerId, data) {
          if (!this._roomData) return;
          this.delPlayerDeckCard(playerId, data.card.instId);
          this.addPlayerDelCard(playerId, data.card);
        }
        /**
        * 改变卡组区到弃卡区
        */


        changeDeckToDrop(playerId, data) {
          if (!this._roomData) return;
          this.delPlayerDeckCard(playerId, data.card.instId);
          this.addPlayerDropCard(playerId, data.card);
        }
        /**
        * 改变添加卡牌到卡组区域
        */


        changeAddCardToDeck(playerId, data) {
          if (!this._roomData) return;
          this.addPlayerDeckCard(playerId, data.card);
        }
        /**
         * 改变往添加卡牌到手卡区
         */


        changeAddCardToHand(playerId, data) {
          if (!this._roomData) return;
          this.delPlayerLocationCard(data.fromPlayerId, data.fromLocation, data.card.instId);
          var playerData = this.getPlayerData(data.card.playerId);
          playerData.handCards.push(data.card);
        }
        /**
         * 改变往添加卡牌到地形区
         */


        changeAddCardToTerrain(playerId, data) {
          if (!this._roomData) return;
          this.delPlayerLocationCard(data.fromPlayerId, data.fromLocation, data.card.instId);
          this.addCardToPlayerLocation(data.card.playerId, data.card.location, data.card);
        }
        /**改变卡牌数据 */


        changeCardData(playerId, data) {
          if (!this._roomData) return;
          var playerData = this.getPlayerData(playerId);

          if (data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Hand) {
            //修改手卡
            for (var index = 0; index < playerData.handCards.length; index++) {
              if (playerData.handCards[index].instId == data.card.instId) {
                playerData.handCards[index] = data.card;
                break;
              }
            }
          } else if (data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Deck) {
            //修改卡组
            for (var _index = 0; _index < playerData.deckCards.length; _index++) {
              if (playerData.deckCards[_index].instId == data.card.instId) {
                playerData.deckCards[_index] = data.card;
                break;
              }
            }
          } else if (data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Drop) {
            //修改弃卡
            for (var _index2 = 0; _index2 < playerData.dropCards.length; _index2++) {
              if (playerData.dropCards[_index2].instId == data.card.instId) {
                playerData.dropCards[_index2] = data.card;
                break;
              }
            }
          } else if (data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Del) {
            //修改删除卡
            for (var _index3 = 0; _index3 < playerData.delCards.length; _index3++) {
              if (playerData.delCards[_index3].instId == data.card.instId) {
                playerData.delCards[_index3] = data.card;
                break;
              }
            }
          } else if (data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
            //修改地形卡
            var terrainData = playerData.terrain[data.card.area];

            for (var _index4 = 0; _index4 < terrainData.cards.length; _index4++) {
              if (terrainData.cards[_index4].instId == data.card.instId) {
                terrainData.cards[_index4] = data.card;
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


        changeCopyCard(playerId, data) {
          if (!this._roomData) return;
          this.addCardToPlayerLocation(data.card.playerId, data.card.location, data.card);
        }
        /**
         * 改变回合数增加数据
         * @param playerId 
         * @param data 
         */


        changeRoundData(playerId, data) {
          if (!this._roomData) return;

          if (battleDataMgr.isPlayerA(playerId)) {
            this.addRoundNum();
            this.resetPlayerEnergy(playerId, data.roundEnergy);
          }
        }
        /**
         * 修改窥视卡牌
         */


        changePeek(playerId, data) {
          if (!this._roomData) return; //只有地形有持续效果固只修改地形即可

          if (data.terrainData) {
            for (var key in data.terrainData) {
              this.resetTerrainData(data.terrainData[key]);
            }
          }
        }
        /**
         * 改变区域持续状体数据
         * @param playerId 
         * @param data 
         */


        changeLockZone(playerId, data) {
          if (!this._roomData) return;
          var traget = this.getEntityByInstId(data.toInstId);
          if (!traget) return;

          if (!traget.persistentState) {
            traget.persistentState = {};
          }

          for (var state of data.state) {
            var stateValue = traget.persistentState[state];

            if (!stateValue) {
              stateValue = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomAttrValue.create();
              stateValue.base = [];
              traget.persistentState[state] = stateValue;
            }

            traget.persistentState[state] = stateValue;

            var _base = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BaseAddMul.create();

            _base.from = data.fromInstId;
            _base.source = data.fromSkillId.toString();
            stateValue.base.push(_base);
            stateValue.finalValue = stateValue.base.length;
          }
        }

        changeAddCard(playerId, data) {
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


        applyBuff(playerId, data) {}
        /**
         * 改变移除玩家buff数据
         * @param playerId 
         * @param data 
         */


        changeNullify(playerId, data) {
          if (!this._roomData) return;
          var traget = this.getEntityByInstId(data.toInstId);
          if (!traget || !traget.persistentState) return;
          if (!data.state) return;

          for (var state of data.state) {
            var stateValue = traget.persistentState[state];

            if (stateValue && stateValue.base && stateValue.base.length) {
              for (var index = 0; index < stateValue.base.length; index++) {
                var _base2 = stateValue.base[index];

                if (_base2.from == data.fromInstId && Number(_base2.source) == data.fromSkillId) {
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

        changeHandToDeck(playerId, data) {
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


        addCardToTerrainByInstId(playerId, instId, cardData) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain;

          for (var terrainData of terrains) {
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


        addCardToTerrainByIdx(playerId, areaIdx, cardData) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain;
          var terrainData = terrains[areaIdx];

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


        delCardFromTerrain(playerId, instId, cardData) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain;
          var tempCardData;
          var isDel = false;

          for (var terrainData of terrains) {
            if (terrainData.instId == instId) {
              for (var cardIdx = 0; cardIdx < terrainData.cards.length; cardIdx++) {
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


        delTerrainCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain;
          var cardData;
          var isDel = false;

          for (var terrainData of terrains) {
            for (var cardIdx = 0; cardIdx < terrainData.cards.length; cardIdx++) {
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


        resetTerrainCard(playerId, instId, cardData) {
          var playerData = this.getPlayerData(playerId);
          var terrains = playerData.terrain;
          var result = false;

          for (var terrainData of terrains) {
            if (terrainData.instId == instId) {
              for (var index = 0; index < terrainData.cards.length; index++) {
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


        resetTerrainData(terrainData) {
          var terrains = this.terrains;

          for (var index = 0; index < terrains.length; index++) {
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


        delPlayerHandCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);
          var cardData;

          for (var index = 0; index < playerData.handCards.length; index++) {
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


        addPlayerDropCard(playerId, cardData) {
          var playerData = this.getPlayerData(playerId);
          playerData.dropCards.push(cardData);
        }
        /**
         * 增加一张卡牌到玩家弃牌区
         * @param playerId 
         * @param instId 
         */


        delPlayerDropCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);
          var cardData;

          for (var index = 0; index < playerData.dropCards.length; index++) {
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


        addPlayerHandCard(playerId, cardData) {
          var playerData = this.getPlayerData(playerId);
          playerData.handCards.push(cardData);
        }
        /**
         * 从玩家卡组中删除一张卡牌
         * @param playerId 玩家id
         * @param instId 卡牌实例id
         */


        delPlayerDeckCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);
          var cardData;

          for (var index = 0; index < playerData.deckCards.length; index++) {
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


        addPlayerDeckCard(playerId, cardData) {
          var playerData = this.getPlayerData(playerId);
          playerData.deckCards.push(cardData);
        }
        /**
         * 从玩家删除区中删除一张卡牌
         * @param playerId 
         * @param instId 
         */


        delPlayerDelCard(playerId, instId) {
          var playerData = this.getPlayerData(playerId);
          var cardData;

          for (var index = 0; index < playerData.delCards.length; index++) {
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


        addPlayerDelCard(playerId, cardData) {
          var playerData = this.getPlayerData(playerId);
          playerData.delCards.push(cardData);
        }
        /**
         * 增加回合数
         * @param num 
         */


        addRoundNum(num) {
          if (num === void 0) {
            num = 1;
          }

          this.roomData.roundMax.finalValue++;
        }
        /**
         * 重置玩家回合能量
         * @param playerId 
         * @param num 
         */


        resetPlayerEnergy(playerId, energys) {
          var playerData = this.getPlayerData(playerId);
          playerData.roundEnergy = energys;
        }

      });
      /**
       * 操作失败原因
       */


      _export("OperateFailReason", OperateFailReason = /*#__PURE__*/function (OperateFailReason) {
        OperateFailReason[OperateFailReason["none"] = 0] = "none";
        OperateFailReason[OperateFailReason["undefine"] = 1] = "undefine";
        OperateFailReason[OperateFailReason["mustLast"] = 2] = "mustLast";
        OperateFailReason[OperateFailReason["areaLock"] = 3] = "areaLock";
        OperateFailReason[OperateFailReason["areaDestroy"] = 4] = "areaDestroy";
        OperateFailReason[OperateFailReason["limit"] = 5] = "limit";
        OperateFailReason[OperateFailReason["duplicate"] = 6] = "duplicate";
        OperateFailReason[OperateFailReason["handToHandArea"] = 7] = "handToHandArea";
        OperateFailReason[OperateFailReason["terrainToTerrainArea"] = 8] = "terrainToTerrainArea";
        OperateFailReason[OperateFailReason["confirmInput"] = 9] = "confirmInput";
        OperateFailReason[OperateFailReason["areaHaveNoPutBuff"] = 10] = "areaHaveNoPutBuff";
        OperateFailReason[OperateFailReason["areaHaveMoveBuff"] = 11] = "areaHaveMoveBuff";
        OperateFailReason[OperateFailReason["error"] = 12] = "error";
        return OperateFailReason;
      }({}));

      _export("battleDataMgr", battleDataMgr = new BattleDataMgr());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8586090f3dfeaa2258ddf1fb7c1ee3acf0434a7.js.map