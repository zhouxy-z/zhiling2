System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, GameScene, battleDataMgr, FightData, BattleCompMgr, _crd, battleCompMgr;

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleOpData(extras) {
    _reporterNs.report("BattleOpData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "./BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "./BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../fight/FightData", _context.meta, extras);
  }

  _export("BattleCompMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      GameScene = _unresolved_2.GameScene;
    }, function (_unresolved_3) {
      battleDataMgr = _unresolved_3.battleDataMgr;
    }, function (_unresolved_4) {
      FightData = _unresolved_4.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44ebeWJCh9MYbVp7jqFN+TY", "BattleCompMgr", undefined);

      __checkObsolete__(['js']);

      _export("BattleCompMgr", BattleCompMgr = class BattleCompMgr {
        constructor() {
          //当前正在运行的脚本列表
          this.runCompList = [];
          //脚本池子
          this.compPool = new Map();
          this.isRun = false;
        }

        /**
         * 添加处理战斗包脚本
         * @param className 
         * @returns 
         */
        addComp(className, type) {
          let comps = this.compPool.get(type) || [];
          let comp = comps.pop();

          if (!comp) {
            let ctor = js.getClassByName(className);
            comp = new ctor();
            this.compPool.set(type, comps);
          }

          if (this.runCompList.length > 0) {
            console.error("------>激活脚本错误");
          } else {
            this.runCompList.push(comp);
          }

          return comp;
        }
        /**
         * 移除战斗脚本
         * @param comp 
         */


        removeComp(comp) {
          let activateIndex = this.runCompList.indexOf(comp);

          if (activateIndex > -1) {
            this.runCompList.splice(activateIndex, 1);
          }

          let comps = this.compPool.get(comp.type) || [];
          comps.push(comp);
          this.compPool.set(comp.type, comps);
        }
        /**
         * 停止/终止正在跑的脚本
         */


        stopComp() {
          for (let index = 0; index < this.runCompList.length; index++) {
            let comp = this.runCompList[index]; // if (checkCondCall(comp.type)) continue;

            comp.exit();
          }
        }

        update(dt) {
          for (let comp of this.runCompList) {
            comp.update(dt);
          }

          if (!this.isRun) this.runBattle();
        }
        /**
         * 跑战斗数据包
         */


        runBattle() {
          let battleOpData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getFirstBattlePack();

          if (battleOpData) {
            var _battleOpData$changeD;

            console.log("*****************************runBattle:" + battleOpData.type);
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).BattleRoomOpOutputType = battleOpData.type;
            this.isRun = true;
            let self = this;
            let comp = this.addComp(battleOpData.comp, battleOpData.type);

            comp.exitCall = (roomId, round, playerId) => {
              this.removeComp(comp);
              self.isRun = false;
            };

            comp.changeDataCell = battleOpData == null || (_battleOpData$changeD = battleOpData.changeDataCell) == null ? void 0 : _battleOpData$changeD.bind(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr);
            comp.enter(battleOpData.packData, (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
              error: Error()
            }), GameScene) : GameScene).isntance, battleOpData.type);
          }
        }

      });

      _export("battleCompMgr", battleCompMgr = new BattleCompMgr());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=886536a21372cf5777d363229ce6ac2d8751e846.js.map