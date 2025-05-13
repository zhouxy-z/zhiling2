System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, Out_AddCardToHand, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleBaseComp(extras) {
    _reporterNs.report("BattleBaseComp", "../../battle/BattleBaseComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  _export("Out_AddCardToHand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BattleBaseComp = _unresolved_2.BattleBaseComp;
    }, function (_unresolved_3) {
      battleDataMgr = _unresolved_3.battleDataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2054cBA1qJKloOThpWfBRcB", "Out_AddCardToHand", undefined);

      /**
       * 添加卡牌到手卡
       */
      _export("Out_AddCardToHand", Out_AddCardToHand = class Out_AddCardToHand extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
        error: Error()
      }), BattleBaseComp) : BattleBaseComp) {
        constructor() {
          super(...arguments);
          this.isAddCardEnd = false;
        }

        //是否添加手牌结束
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var fromIsPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.fromPlayerId);
            var toIsPlayerA = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(_this.data.card.playerId);
            var tt = yield _this.scene.AddCardToHand(toIsPlayerA, _this.data);
            if (_this.isExit) return; // switch (this.data.fromLocation) {
            //     //非可视区域卡牌添加到手卡
            //     case base.BattleRoomCardLocation.Deck:
            //     case base.BattleRoomCardLocation.Drop:
            //     case base.BattleRoomCardLocation.Del:
            //         if ((fromIsPlayerA && toIsPlayerA) || (!fromIsPlayerA && !toIsPlayerA)) {
            //             //来源区域与目标区域都是第一视觉玩家 或者 来源区域与目标区域都是第二视觉玩家 
            //             this.scene.AddCardFormHeadToHand(toIsPlayerA, this.data);
            //         } else if (fromIsPlayerA && !toIsPlayerA) {
            //             //来源区域是第一视觉玩家目标区域是第二视觉玩家 
            //             this.scene.AddCardFormMyHeadToAdHand(this.data.fromInstId, this.data.fromSkillId, this.data.card);
            //         } else if (!fromIsPlayerA && toIsPlayerA) {
            //             //来源区域是第二视觉玩家目标区域是第第一视觉玩家 
            //             this.scene.AddCardFormAdHeadToMyHand(this.data.fromInstId, this.data.fromSkillId, this.data.card);
            //         }
            //         break;
            //     case base.BattleRoomCardLocation.Unknown://凭空出现的卡（系统发卡， 或者技能生产一张卡）
            //         this.scene.AddCardFormHeadToHand(toIsPlayerA, this.data);
            //         break;
            //     //地形上的添加到手卡区
            //     case base.BattleRoomCardLocation.Terrain:
            //         this.scene.AddCardFormAreaToHand(toIsPlayerA, this.data.fromInstId, this.data.fromSkillId, this.data.card);
            //         break;
            // }
            // if (0.5 - tt > 0) await Second(0.5 - tt);

            _this.exit();
          })();
        }

        onUpdate(dt) {
          if (!this.isAddCardEnd) return; //全部动作完成退出播放

          this.exit();
        }

        reset() {
          this.isAddCardEnd = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f39a4386ac2374365edc7d12dd1a96a9b146c16.js.map