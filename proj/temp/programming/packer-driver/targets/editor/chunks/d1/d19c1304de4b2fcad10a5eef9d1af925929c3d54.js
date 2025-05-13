System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, DragDropMgr, BattleBaseComp, battleLogicMgr, BattleCardGrid, BattleTerrainArea, BattleCard, DecodeReq, Protocol, PlayerData, Session, DateUtils, battleDataMgr, base, Out_WaitPlayerInput, _crd;

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

  _export("Out_WaitPlayerInput", void 0);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b6560bqVdBaq/fdOKnHqwW", "Out_WaitPlayerInput", undefined);

      __checkObsolete__(['Button', 'Node']);

      /**
       * 等待客户端玩家操作
       */
      _export("Out_WaitPlayerInput", Out_WaitPlayerInput = class Out_WaitPlayerInput extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        constructor(...args) {
          super(...args);
          //编辑中的卡牌列表
          this.editCardList = void 0;
          //编辑中的格子信息
          this.editGridList = [];
          this.isInit = false;
          this.isSend = false;
        }

        start() {
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).dragLayer.active = true;
          this.registerDragDrop();
          this.editCardList = [];
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
          let offset = this.data.timeout - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
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
            this.sendRoundConfirm();
          }
        }

        reset() {
          (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).dragLayer.active = false;
          this.isInit = false;
          this.editCardList = null;
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

        endOp(isSucceed = false) {
          //出牌失败把格子打回手牌区
          if (!isSucceed) {
            console.error("出牌失败");
            let terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).terraninAreaListA;
            let grid;

            for (let terrainArea of terrainAreaList) {
              for (let index = 0; index < terrainArea.gridList.length; index++) {
                grid = terrainArea.gridList[index];

                if (grid.cardData && grid.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                  error: Error()
                }), base) : base).BattleRoomCardLocation.Hand) {
                  for (let editGrid of this.editGridList) {
                    if (editGrid.cardData.instId == grid.cardData.instId) {
                      let sourceGrid = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                        error: Error()
                      }), battleLogicMgr) : battleLogicMgr).handGridList[editGrid.gridIdx];
                      sourceGrid.setData(grid.cardData);
                      grid.setData(null);
                      break;
                    }
                  }
                }
              }
            }
          }

          this.exit();
          console.log("-------->出牌完毕");
        }

        onBattleroomconfirmopinput(data) {
          let result = (_crd && DecodeReq === void 0 ? (_reportPossibleCrUseOfDecodeReq({
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
          if (this.editCardList) {
            let inputs = [];
            let input;

            for (let index = 0; index < this.editCardList.length; index++) {
              input = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomOpInput.create();
              input.opType = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomOpInputType.In_HandToTerrain;
              input.HandToTerrain = this.editCardList[index];
              inputs.push(input);
            }

            let data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
              error: Error()
            }), Protocol) : Protocol).battleroomconfirmopinput();
            data.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).server;
            data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).roomData.roomId;
            data.inputs = inputs;
            console.log("发送出牌数据---->" + inputs);
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(data);
            this.isSend = true;
          }
        } //注册拖拽节点


        registerDragDrop() {
          let handCardList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).handGridList;

          for (let handCard of handCardList) {
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDragNode(handCard.node);
          }

          let terrainAreaList = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).terraninAreaListA;

          for (let terrainArea of terrainAreaList) {
            (_crd && DragDropMgr === void 0 ? (_reportPossibleCrUseOfDragDropMgr({
              error: Error()
            }), DragDropMgr) : DragDropMgr).addDropNode(terrainArea.node);

            for (let cardGrid of terrainArea.gridList) {
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
          let battleGrid = node.getComponent(_crd && BattleCardGrid === void 0 ? (_reportPossibleCrUseOfBattleCardGrid({
            error: Error()
          }), BattleCardGrid) : BattleCardGrid);
          let cardData = battleGrid.cardData;
          if (!cardData) return false; //拖动的卡原来是手卡上去的

          if (cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
            error: Error()
          }), base) : base).BattleRoomCardLocation.Hand) {
            let tempCardData = this.editCardList[this.editCardList.length - 1];
            if (tempCardData && tempCardData.cardInstId == cardData.instId) return true; //手卡牌卡

            if (battleGrid.areaIdx < 0) return true;
          }

          return false;
        }

        creatDragNode(node) {
          let battleGrid = node.getComponent(_crd && BattleCardGrid === void 0 ? (_reportPossibleCrUseOfBattleCardGrid({
            error: Error()
          }), BattleCardGrid) : BattleCardGrid);
          let dragNode = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
            error: Error()
          }), battleLogicMgr) : battleLogicMgr).fromPoolCard;
          let dragGrid = dragNode.getComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
            error: Error()
          }), BattleCard) : BattleCard) || dragNode.addComponent(_crd && BattleCard === void 0 ? (_reportPossibleCrUseOfBattleCard({
            error: Error()
          }), BattleCard) : BattleCard);
          dragGrid.setData(battleGrid.cardData);
          dragNode.active = true;
          let dradData = {
            areaIdx: battleGrid.areaIdx,
            gridIdx: battleGrid.gridIdx,
            terrainInstId: battleGrid.terrainInstId,
            cardData: battleGrid.cardData
          };
          let dragData = {
            dragNode: dragNode,
            data: dradData,
            isAgent: true
          };
          return dragData;
        }

        onDrag(dragData) {}

        onDrop(dropNode, dragData) {
          let dropResult = false;

          if (dropNode) {
            dropResult = this.toDrop(dropNode, dragData);
          } //放下失败


          if (!dropResult) {
            (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).putCardToPool(dragData.dragNode);
          } else {
            let grid;

            if (dragData.data.areaIdx < 0) {
              grid = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).handGridList[dragData.data.gridIdx];
            } else {
              let area = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).terraninAreaListA[dragData.data.areaIdx];
              grid = area.gridList[dragData.data.gridIdx];
            }

            grid.setData(null);
            (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
              error: Error()
            }), battleLogicMgr) : battleLogicMgr).putCardToPool(dragData.dragNode);
          }
        }

        toDrop(dropNode, dragData) {
          let battleTerrainArea = dropNode.getComponent(_crd && BattleTerrainArea === void 0 ? (_reportPossibleCrUseOfBattleTerrainArea({
            error: Error()
          }), BattleTerrainArea) : BattleTerrainArea); //手牌区拖拽到地形区域

          if (battleTerrainArea) {
            //原来就是手牌区的牌拖拽到地形区
            if (dragData.data.cardData.location == (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
              error: Error()
            }), base) : base).BattleRoomCardLocation.Hand) {
              for (let index = 0; index < this.editCardList.length; index++) {
                if (this.editGridList[index].cardData.instId == dragData.data.cardData.instId) {
                  return false;
                }
              }
            }

            let dropGrid;
            let terrainInstId = battleTerrainArea.terrainData.instId;
            let cardGrid;

            for (let index = 0; index < battleTerrainArea.gridList.length; index++) {
              cardGrid = battleTerrainArea.gridList[index];

              if (!cardGrid.cardData) {
                dropGrid = cardGrid;
                break;
              }
            }

            if (terrainInstId && dropGrid) {
              let handToTerrain = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleRoomOpInput_HandToTerrain.create();
              handToTerrain.terrainInstId = terrainInstId;
              handToTerrain.cardInstId = dragData.data.cardData.instId;
              this.editCardList.push(handToTerrain);
              this.editGridList.push(dragData.data);
              dropGrid.setData(dragData.data.cardData);
              return true;
            }
          } else {
            //从地形区域移回手牌
            let tempCardData = this.editCardList[this.editCardList.length - 1];

            if (tempCardData && tempCardData.cardInstId == dragData.data.cardData.instId) {
              this.editCardList.pop();
              let dragGrid = this.editGridList.pop();
              let dropGrid = (_crd && battleLogicMgr === void 0 ? (_reportPossibleCrUseOfbattleLogicMgr({
                error: Error()
              }), battleLogicMgr) : battleLogicMgr).handGridList[dragGrid.gridIdx];
              dropGrid.setData(dragData.data.cardData);
              return true;
            }

            return false;
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d19c1304de4b2fcad10a5eef9d1af925929c3d54.js.map