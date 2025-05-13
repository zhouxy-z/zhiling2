System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, instantiate, Label, NodePool, BattleCardGrid, BattleTerrainGrid, battleDataMgr, BattleTerrainArea, battleCompMgr, Protocol, PlayerData, Session, BattleLogicMgr, _crd, battleLogicMgr;

  function _reportPossibleCrUseOfBattleCardGrid(extras) {
    _reporterNs.report("BattleCardGrid", "./BattleCardGrid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainGrid(extras) {
    _reporterNs.report("BattleTerrainGrid", "./BattleTerrainGrid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "./BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleTerrainArea(extras) {
    _reporterNs.report("BattleTerrainArea", "./BattleTerrainArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleCompMgr(extras) {
    _reporterNs.report("battleCompMgr", "./BattleCompMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "./BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleOpData(extras) {
    _reporterNs.report("BattleOpData", "../player/PlayerStruct", _context.meta, extras);
  }

  _export("BattleLogicMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      BattleCardGrid = _unresolved_2.BattleCardGrid;
    }, function (_unresolved_3) {
      BattleTerrainGrid = _unresolved_3.BattleTerrainGrid;
    }, function (_unresolved_4) {
      battleDataMgr = _unresolved_4.battleDataMgr;
    }, function (_unresolved_5) {
      BattleTerrainArea = _unresolved_5.BattleTerrainArea;
    }, function (_unresolved_6) {
      battleCompMgr = _unresolved_6.battleCompMgr;
    }, function (_unresolved_7) {
      Protocol = _unresolved_7.Protocol;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      Session = _unresolved_9.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78e7belTmVMJIzAK6bfPjlB", "BattleLogicMgr", undefined);

      __checkObsolete__(['Button', 'EventTouch', 'instantiate', 'Label', 'Node', 'NodePool']);

      _export("BattleLogicMgr", BattleLogicMgr = class BattleLogicMgr {
        constructor() {
          this.root = void 0;
          //ui根节点
          this.terraninAreaListB = [];
          //第二视觉玩家格子区域
          this.terrainGrildList = [];
          //地形格子列表
          this.terraninAreaListA = [];
          //第一视觉玩家格子区域
          this.handGridCont = void 0;
          //手牌区
          this.handGridList = [];
          //手牌格子列表
          this.showCardLayer = void 0;
          //补卡层
          this.dragLayer = void 0;
          //拖拽层
          this.exitBtn = void 0;
          //退出战斗
          this.roundBtn = void 0;
          //回合按钮
          this.roundBtnLab = void 0;
          //回合按钮文本
          this.roundLab = void 0;
          //回合数
          this.energyA = void 0;
          //能量A
          this.energyLabA = void 0;
          //能量A
          this.energyB = void 0;
          //能量B
          this.energyLabB = void 0;
          //能量B
          this.tempBattleCard = void 0;
          this.cardPool = new NodePool();
          //卡池
          this.isInit = false;
          this.isRun = false;
        }

        //是否有在跑战斗包
        init(root) {
          var loop; //玩家b格子

          var terraninAreaContB = root.getChildByName("terraninAreaContB");
          loop = 0;

          for (var node of terraninAreaContB.children) {
            var com = node.addComponent(_crd && BattleTerrainArea === void 0 ? (_reportPossibleCrUseOfBattleTerrainArea({
              error: Error()
            }), BattleTerrainArea) : BattleTerrainArea);
            com.setAreaId(loop);
            loop++;
            this.terraninAreaListB.push(com);
          } //地形格子


          var terrainCont = root.getChildByName("terrainCont");
          loop = 0;

          for (var _node of terrainCont.children) {
            var _com = _node.addComponent(_crd && BattleTerrainGrid === void 0 ? (_reportPossibleCrUseOfBattleTerrainGrid({
              error: Error()
            }), BattleTerrainGrid) : BattleTerrainGrid);

            _com.setTerrainId(loop);

            loop++;
            this.terrainGrildList.push(_com);
          } //玩家A格子


          var terraninAreaContA = root.getChildByName("terraninAreaContA");
          loop = 0;

          for (var _node2 of terraninAreaContA.children) {
            var _com2 = _node2.addComponent(_crd && BattleTerrainArea === void 0 ? (_reportPossibleCrUseOfBattleTerrainArea({
              error: Error()
            }), BattleTerrainArea) : BattleTerrainArea);

            _com2.setAreaId(loop);

            loop++;
            this.terraninAreaListA.push(_com2);
          } //玩家A手牌格子


          this.handGridCont = root.getChildByName("handGridCont");
          loop = 0;

          for (var _node3 of this.handGridCont.children) {
            var _com3 = _node3.addComponent(_crd && BattleCardGrid === void 0 ? (_reportPossibleCrUseOfBattleCardGrid({
              error: Error()
            }), BattleCardGrid) : BattleCardGrid);

            _com3.setGridIdx(loop);

            loop++;
            this.handGridList.push(_com3);
          }

          this.dragLayer = root.getChildByName("dragLayer");
          this.showCardLayer = root.getChildByName("showCardLayer");
          this.roundLab = root.getChildByName("roundLab").getComponent(Label);
          this.exitBtn = root.getChildByName("exitBtn").getComponent(Button);
          this.roundBtn = root.getChildByName("roundBtn").getComponent(Button);
          this.roundBtnLab = root.getChildByPath("roundBtn/roundBtnLab").getComponent(Label);
          this.energyA = root.getChildByPath("energyA");
          this.energyLabA = root.getChildByPath("energyA/energyLabA").getComponent(Label);
          this.energyB = root.getChildByPath("energyB");
          this.energyLabB = root.getChildByPath("energyB/energyLabB").getComponent(Label);
          this.tempBattleCard = root.getChildByName("tempBattleCard");
          this.exitBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          setTimeout(() => {
            this.isInit = true;
          }, 200);
        }

        update(dt) {
          (_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
            error: Error()
          }), battleCompMgr) : battleCompMgr).update(dt); ///if (!this.isInit) return;
          //if (!this.isRun) this.runBattle();
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.exitBtn:
              var data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                error: Error()
              }), Protocol) : Protocol).battleroomleave();
              data.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).server;
              data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).roomData.roomId;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send(data);
              console.log("发送离开房间---->");
              break;

            default:
              break;
          }
        }
        /**
         * 跑战斗数据包
         */


        runBattle() {
          var battleOpData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getFirstBattlePack();

          if (battleOpData) {
            this.isRun = true;
            var comp = (_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
              error: Error()
            }), battleCompMgr) : battleCompMgr).addComp(battleOpData.comp, 0);

            comp.exitCall = (roomId, round, playerId) => {
              (_crd && battleCompMgr === void 0 ? (_reportPossibleCrUseOfbattleCompMgr({
                error: Error()
              }), battleCompMgr) : battleCompMgr).removeComp(comp);
              this.isRun = false;
            };

            comp.enter(battleOpData.packData);
          }
        }
        /**
         * 创建卡牌节点
         * @returns 
         */


        get fromPoolCard() {
          return this.cardPool.get() || instantiate(this.tempBattleCard);
        }
        /**
         * 将卡牌节点回收到池子
         * @param node 
         */


        putCardToPool(node) {
          this.cardPool.put(node);
        }

      });

      _export("battleLogicMgr", battleLogicMgr = new BattleLogicMgr());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f85b535509808a5a18a3bf365190ddda51513d01.js.map