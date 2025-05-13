System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, DragDropMgr, BattleBaseComp, battleLogicMgr, BattleCardGrid, BattleTerrainArea, BattleCard, DecodeReq, Protocol, PlayerData, Session, DateUtils, battleDataMgr, base, ObjectUtils, MsgPanel, Out_WaitPlayerInput_2d, _crd;

  function _reportPossibleCrUseOfDragDropMgr(extras) {
    _reporterNs.report("DragDropMgr", "../../../manager/DragDropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDragData(extras) {
    _reporterNs.report("IDragData", "../../../manager/DragDropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDragDropEvent(extras) {
    _reporterNs.report("IDragDropEvent", "../../../manager/DragDropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleLogicMgr(extras) {
    _reporterNs.report("battleLogicMgr", "../BattleLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCardGrid(extras) {
    _reporterNs.report("BattleCardGrid", "../BattleCardGrid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainArea(extras) {
    _reporterNs.report("BattleTerrainArea", "../BattleTerrainArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleCard(extras) {
    _reporterNs.report("BattleCard", "../BattleCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecodeReq(extras) {
    _reporterNs.report("DecodeReq", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectUtils(extras) {
    _reporterNs.report("ObjectUtils", "../../../utils/ObjectUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../../common/MsgPanel", _context.meta, extras);
  }

  _export("Out_WaitPlayerInput_2d", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      DragDropMgr = _unresolved_2.DragDropMgr;
    }, function (_unresolved_3) {
      BattleBaseComp = _unresolved_3.BattleBaseComp;
    }, function (_unresolved_4) {
      battleLogicMgr = _unresolved_4.battleLogicMgr;
    }, function (_unresolved_5) {
      BattleCardGrid = _unresolved_5.BattleCardGrid;
    }, function (_unresolved_6) {
      BattleTerrainArea = _unresolved_6.BattleTerrainArea;
    }, function (_unresolved_7) {
      BattleCard = _unresolved_7.BattleCard;
    }, function (_unresolved_8) {
      DecodeReq = _unresolved_8.DecodeReq;
      Protocol = _unresolved_8.Protocol;
    }, function (_unresolved_9) {
      PlayerData = _unresolved_9.PlayerData;
    }, function (_unresolved_10) {
      Session = _unresolved_10.Session;
    }, function (_unresolved_11) {
      DateUtils = _unresolved_11.DateUtils;
    }, function (_unresolved_12) {
      battleDataMgr = _unresolved_12.battleDataMgr;
    }, function (_unresolved_13) {
      base = _unresolved_13.default;
    }, function (_unresolved_14) {
      ObjectUtils = _unresolved_14.ObjectUtils;
    }, function (_unresolved_15) {
      MsgPanel = _unresolved_15.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b6560bqVdBaq/fdOKnHqwW", "Out_WaitPlayerInput_2d", undefined);

      __checkObsolete__(['Button', 'Node']);

      /**
       * 等待客户端玩家操作
       */
      _export("Out_WaitPlayerInput_2d", Out_WaitPlayerInput_2d = class Out_WaitPlayerInput_2d extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        constructor() {
          super(...arguments);
          //编辑中的格子信息
          this.editGridList = [];
          this.copyHandCards = [];
          this.copyAreas = [];
          this.isInit = false;
          this.isSend = false;
          this.playerData = void 0;
          this.curEnergy = void 0;
        }

        //当前编辑剩余能量
        start() {
          var playerId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerId(true);
          this.playerData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerData(playerId);
          this.curEnergy = this.playerData.roundEnergy[this.round - 1].finalValue;
          this.copyHandCards = (_crd && ObjectUtils === void 0 ? (_reportPossibleCrUseOfObjectUtils({
            error: Error()
          }), ObjectUtils) : ObjectUtils).deepCopy((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerHandCards(playerId));
          this.copyAreas = (_crd && ObjectUtils === void 0 ? (_reportPossibleCrUseOfObjectUtils({
            error: Error()
          }), ObjectUtils) : ObjectUtils).deepCopy((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getPlayerTerrainDatas(playerId));
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).dragLayer.active = true;
          this.registerDragDrop();
          this.editGridList = [];
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).roundBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).battleroomconfirmopinput, this.onBattleroomconfirmopinput, this);
          this.isInit = true;
          this.isSend = false;
        }

        onUpdate(dt) {
          if (!this.isInit || !this.data) return;
          var offset = this.data.timeout - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime;

          if (this.isSend) {
            //服务器无响应世界结束
            if (offset < 5) {
              this.endOp();
            }

            return;
          }

          if (offset <= 1) {
            console.log("-------->出牌超时自动出牌");
            this.sendRoundConfirm();
          }
        }

        reset() {
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).dragLayer.active = false;
          this.isInit = false;
          this.curEnergy = null;
          this.editGridList = null;
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).roundBtn.node.off(Button.EventType.CLICK, this.onBtnClick, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).off((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).battleroomconfirmopinput, this.onBattleroomconfirmopinput, this);
          (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
            error: Error()
          }), DragDropMgr) : DragDropMgr).clear();
        }

        endOp(isSucceed) {
          if (isSucceed === void 0) {
            isSucceed = false;
          }

          //出牌失败把格子打回手牌区
          this.editGridList = [];

          if (!isSucceed) {
            console.log("-------->失败");
            this.copyHandCards = (_crd && ObjectUtils === void 0 ? (_reportPossibleCrUseOfObjectUtils({
              error: Error()
            }), ObjectUtils) : ObjectUtils).deepCopy((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerHandCards(this.playerData.playerId));
            this.copyAreas = (_crd && ObjectUtils === void 0 ? (_reportPossibleCrUseOfObjectUtils({
              error: Error()
            }), ObjectUtils) : ObjectUtils).deepCopy((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getPlayerTerrainDatas(this.playerData.playerId));
            this.curEnergy = this.playerData.roundEnergy[this.round - 1].finalValue;
            this.updateAll();
          }

          this.exit();
        }

        onBattleroomconfirmopinput(data) {
          var result = (_crd && DecodeReq === void 0 ? (_reportPossibleCrUseOfDecodeReq({
            error: Error()
          }), DecodeReq) : DecodeReq).battleroomconfirmopinput(data);
          this.endOp(result.res.code == 200);
        }

        onBtnClick(btn) {
          switch (btn) {
            case (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).roundBtn:
              this.sendRoundConfirm();
              break;

            default:
              break;
          }
        }

        sendRoundConfirm() {
          var inputs = [];
          var input;
          var editCardData;
          var terrainData;

          for (var index = 0; index < this.editGridList.length; index++) {
            editCardData = this.editGridList[index];
            terrainData = this.copyAreas[editCardData.curAreaIdx];
            input = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomOpInput.create();

            if (editCardData.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomCardLocation.Hand) {
              input.opType = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomOpInputType.In_HandToTerrain;
              var handToTerrainData = void 0;
              handToTerrainData = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomOpInput_HandToTerrain.create();
              handToTerrainData.terrainInstId = terrainData.instId;
              handToTerrainData.cardInstId = editCardData.cardData.instId;
              input.HandToTerrain = handToTerrainData;
            } else if (editCardData.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomCardLocation.Terrain) {
              input.opType = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomOpInputType.In_TerrainToTerrain;
              var terrainToTerrainData = void 0;
              terrainToTerrainData = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomOpInput_TerrainToTerrain.create();
              terrainToTerrainData.toTerrainInstId = terrainData.instId;
              terrainToTerrainData.cardInstId = editCardData.cardData.instId;
              input.TerrainToTerrain = terrainToTerrainData;
            }

            inputs.push(input);
          }

          var data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).battleroomconfirmopinput();
          data.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).server;
          data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).roomData.roomId;
          data.inputs = inputs;
          console.log("发送出牌数据---->");
          console.dir(data);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(data);
          this.isSend = true;
        } //注册拖拽节点


        registerDragDrop() {
          var handCardList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).handGridList;

          for (var handCard of handCardList) {
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDragNode(handCard.node);
          }

          var terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terraninAreaListA;

          for (var terrainArea of terrainAreaList) {
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDropNode(terrainArea.node);

            for (var cardGrid of terrainArea.gridList) {
              (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
                error: Error()
              }), DragDropMgr) : DragDropMgr).addDragNode(cardGrid.node);
            }
          }

          (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
            error: Error()
          }), DragDropMgr) : DragDropMgr).addDropNode((_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).handGridCont);
          (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
            error: Error()
          }), DragDropMgr) : DragDropMgr).on(this, (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).dragLayer);
        } //检测是否可拖拽


        chekIsCanDrag(node) {
          var battleGrid = node.getComponent(_crd && BattleCardGrid === void 0 ? (_reportPossibleCrUseOfBattleCardGrid({
            error: Error()
          }), BattleCardGrid) : BattleCardGrid);
          var cardData = battleGrid.cardData;
          if (!cardData) return false;
          var editCardData = this.getEditCardData(cardData.instId);

          if (editCardData) {
            //拖拽的是编辑列表的卡 如果是最后一个则可以拖拽 否则不可以
            return editCardData.editIdx == this.editGridList.length - 1;
          } //无编辑卡


          if (cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
            error: Error()
          }), base) : base).BattleRoomCardLocation.Hand) {
            if (this.curEnergy < cardData.cost.finalValue) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("能量不足"); //能量不足

              return false;
            } else {
              return true;
            }
          } else if (cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
            error: Error()
          }), base) : base).BattleRoomCardLocation.Terrain) {
            //拖拽的是地形牌
            return true;
          }

          return false;
        }

        creatDragNode(node) {
          var battleGrid = node.getComponent(_crd && BattleCardGrid === void 0 ? (_reportPossibleCrUseOfBattleCardGrid({
            error: Error()
          }), BattleCardGrid) : BattleCardGrid);
          var dragNode = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).fromPoolCard;
          var dragGrid = dragNode.getComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
            error: Error()
          }), BattleCard) : BattleCard) || dragNode.addComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
            error: Error()
          }), BattleCard) : BattleCard);
          var cardData = (_crd && ObjectUtils === void 0 ? (_reportPossibleCrUseOfObjectUtils({
            error: Error()
          }), ObjectUtils) : ObjectUtils).deepCopy(battleGrid.cardData);
          dragGrid.setData(cardData);
          dragNode.active = true;
          var dradData = {
            dragAreaIdx: battleGrid.areaIdx,
            dragGridIdx: battleGrid.gridIdx,
            cardData: battleGrid.cardData
          };
          var dragData = {
            dragNode: dragNode,
            data: dradData,
            isAgent: true
          };
          return dragData;
        }

        onDrag(dragData) {}

        onDrop(dropNode, dragData) {
          var dropResult = false;

          if (dropNode && !this.isSend) {
            dropResult = this.toDrop(dropNode, dragData);
          }

          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).putCardToPool(dragData.dragNode); //放下成功

          if (dropResult) {
            this.updateAll();
          } else {}
        }

        toDrop(dropNode, dragData) {
          var battleTerrainArea = dropNode.getComponent(_crd && BattleTerrainArea === void 0 ? (_reportPossibleCrUseOfBattleTerrainArea({
            error: Error()
          }), BattleTerrainArea) : BattleTerrainArea);
          var dragCardData = dragData.data;

          if (battleTerrainArea) {
            //在地形区域放下
            var editCardData = this.getEditCardData(dragCardData.cardData.instId);

            if (editCardData) {
              if (dragCardData.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomCardLocation.Hand) {
                //编辑的手牌不可以在地形上放下只能放回手牌区
                return false;
              } else if (dragCardData.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomCardLocation.Terrain) {
                if (battleTerrainArea.areaId != editCardData.formAreaIdx) {
                  //编辑的区域牌只能放回原来区域
                  return false;
                } else {
                  //区域上的卡放回原来区域位置
                  var delIdx = this.editGridList.indexOf(editCardData);
                  var delEditCardData = this.editGridList[delIdx];
                  this.editGridList.splice(delIdx, 1); //this.resetEditCardIndx();

                  console.log("删除编辑---->" + delIdx);
                  var terrainData;
                  terrainData = this.copyAreas[delEditCardData.curAreaIdx]; //从当前区域删除

                  terrainData.cards.splice(delEditCardData.curGridIdx, 1);
                  console.log("从地形上删除---->" + delEditCardData.curAreaIdx + "------>" + delEditCardData.curGridIdx);
                  terrainData = this.copyAreas[delEditCardData.formAreaIdx]; //插入到原来区域

                  terrainData.cards.splice(delEditCardData.formGridIdx, 0, delEditCardData.cardData);
                  console.log("添加到地形---->" + delEditCardData.formAreaIdx + "------>" + delEditCardData.formGridIdx);
                  return true;
                }
              }
            }

            var areaData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).terrainIdData(battleTerrainArea.terrainData.instId);

            if (areaData.terrainState == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomInTerrainState.TerrainStateDestroy) {
              //区域已销毁
              return false;
            }

            var dropGrid;

            for (var cardGrid of battleTerrainArea.gridList) {
              if (!cardGrid.cardData) {
                dropGrid = cardGrid;
                break;
              }
            } //区域已满不可放置


            if (!dropGrid) return false; //原来就在此区域

            if (dragCardData.dragAreaIdx == dropGrid.areaIdx) return false;
            var newEditData = {
              formAreaIdx: dragCardData.dragAreaIdx,
              formGridIdx: dragCardData.dragGridIdx,
              curAreaIdx: dropGrid.areaIdx,
              curGridIdx: dropGrid.gridIdx,
              editIdx: this.editGridList.length,
              cardData: dragCardData.cardData
            };
            this.editGridList.push(newEditData);
            console.log("添加编辑---->" + newEditData.curAreaIdx + "----->" + newEditData.curGridIdx);

            if (dragCardData.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomCardLocation.Hand) {
              this.copyHandCards.splice(dragCardData.dragGridIdx, 1);
              var _terrainData = this.copyAreas[dropGrid.areaIdx];

              _terrainData.cards.push(dragCardData.cardData);

              this.curEnergy -= dragCardData.cardData.cost.finalValue;
            } else if (dragCardData.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomCardLocation.Terrain) {
              var _terrainData2 = this.copyAreas[dragCardData.dragAreaIdx];

              _terrainData2.cards.splice(dragCardData.dragGridIdx, 1);

              _terrainData2 = this.copyAreas[dropGrid.areaIdx];

              _terrainData2.cards.push(dragCardData.cardData);
            }

            return true;
          } else {
            //在手牌区放下
            if (dragCardData.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomCardLocation.Hand) {
              var _editCardData = this.getEditCardData(dragCardData.cardData.instId);

              if (_editCardData && _editCardData.editIdx == this.editGridList.length - 1) {
                this.editGridList.pop();
                this.curEnergy += dragCardData.cardData.cost.finalValue;
                var _terrainData3 = this.copyAreas[dragCardData.dragAreaIdx];

                _terrainData3.cards.splice(dragCardData.dragGridIdx, 1);

                this.copyHandCards.splice(_editCardData.formGridIdx, 0, _editCardData.cardData);
                return true;
              }
            } else {//其它位置的卡牌不能放回手牌区
            }

            return false;
          }
        }

        getEditCardData(instId) {
          for (var data of this.editGridList) {
            if (data.cardData.instId == instId) return data;
          }
        }

        updateAll() {
          //刷新全部格子
          for (var index = 0; index < (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).handGridList.length; index++) {
            var battleCardGrid = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).handGridList[index];
            battleCardGrid.setData(this.copyHandCards[index] || null);
          }

          var terrainArea;
          var grid;
          var terrainData;

          for (var areaIdx = 0; areaIdx < (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terraninAreaListA.length; areaIdx++) {
            terrainArea = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListA[areaIdx];
            terrainData = this.copyAreas[areaIdx];

            for (var cardIdx = 0; cardIdx < terrainArea.gridList.length; cardIdx++) {
              grid = terrainArea.gridList[cardIdx];
              grid.setData(terrainData.cards[cardIdx] || null);
            }
          }

          if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).isPlayerA(this.playerData.playerId)) {
            (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).energyLabA.string = this.curEnergy.toString();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b3329466b9488a494980230f25e69b4370d702b.js.map