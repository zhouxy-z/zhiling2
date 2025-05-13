System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, proto, EventMgr, BattleBaseComp, _crd;

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePackData(extras) {
    _reporterNs.report("BattlePackData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  _export("BattleBaseComp", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb99d5F0E5Nr7yqshhBMXC9", "BattleBaseComp", undefined);

      __checkObsolete__(['js']);

      /**
       * 战斗表现基类
       */
      _export("BattleBaseComp", BattleBaseComp = class BattleBaseComp {
        constructor() {
          this.type = void 0;
          this.scene = void 0;
          //需要处理的玩家 为空字符时表示系统更新，双方都要更新
          this.ownerPlayerId = void 0;
          //需要处理的玩家 为空字符时表示系统更新，双方都要更新
          this.roomId = void 0;
          //当前房间id
          this.round = void 0;
          //当前回合数
          this.maxTime = void 0;
          //最大(执行最大时间 超时则中断直接刷新全局)
          //脚本数据
          this.data = void 0;
          this.isRun = false;
          //是否开始跑脚本了
          this.isExit = false;
          //是否已退出脚本
          //退出脚本回调
          this.exitCall = void 0;
          this.changeDataCell = void 0;
        }

        /**
         * 进入
         */
        enter(packData, scene, type) {
          this.type = type;
          this.scene = scene;
          this.roomId = packData.roomId;
          this.round = packData.round;
          this.ownerPlayerId = packData.ownerPlayerId;
          this.data = packData.data;
          this.data['touchInstId'] = packData.touchInstId;
          console.log("enter------>" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomOpOutputType[this.type]);
          console.dir(this.data);
          this.isExit = false;
          this.start();
          this.isRun = true;
        }
        /***
         * 退出
         */


        exit() {
          var _this$changeDataCell, _this$exitCall;

          if (this.isExit) return;
          console.log("exit======>" + (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomOpOutputType[this.type]);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("op_start");
          this.isRun = false;
          this.isExit = true;
          this.maxTime = 0;
          this.reset();
          (_this$changeDataCell = this.changeDataCell) == null || _this$changeDataCell.call(this, this.ownerPlayerId, this.data);
          this.changeDataCell = null; // this.data = null;

          (_this$exitCall = this.exitCall) == null || _this$exitCall.call(this, this.roomId, this.round, this.ownerPlayerId);
          this.exitCall = null;
        }
        /**
         * 必须实现脚本初始化
         */

        /**
         * 必须实现脚本重置
         */


        /**
         * 帧更新
         * @param dt 
         */
        update(dt) {
          if (!this.isRun) return; //处理超时逻辑

          if (this.maxTime > 0) {
            return;
          }

          this.onUpdate(dt);
        }
        /**
         * 帧更新
         * @param dt 
         */


        onUpdate(dt) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f4e77f6667a0fa86bfc697e833f8b8af9885ced.js.map