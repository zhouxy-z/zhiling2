System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BattleBaseComp, battleDataMgr, Out_CardDeckFrontToHandTail, _crd;

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

  _export("Out_CardDeckFrontToHandTail", void 0);

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

      _cclegacy._RF.push({}, "47a35Gkg61Nz7McXJzIjHXG", "Out_CardDeckFrontToHandTail", undefined);

      /**
       * 卡牌由卡组最前到手牌末尾
       */
      _export("Out_CardDeckFrontToHandTail", Out_CardDeckFrontToHandTail = class Out_CardDeckFrontToHandTail extends (_crd && BattleBaseComp === void 0 ? (_reportPossibleCrUseOfBattleBaseComp({
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
            if (_this.data.cards && _this.data.cards.length) {
              if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(_this.ownerPlayerId)) {
                yield _this.scene.AddHandCard(_this.data);
                if (_this.isExit) return; // await Second(0.5);
              } else {}

              _this.isAddCardEnd = true;
            } else {
              console.error("补卡数据为空");

              _this.exit();
            }
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
//# sourceMappingURL=13e3547af8db62475e0d11f1ed0c212b0f94afaa.js.map