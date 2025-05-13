System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Node, Second, GameScene, ResMgr, GameLogic, CfgMgr, GameSet, MyNode, _dec, _class, _crd, ccclass, property, TestFight;

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../../module/fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "../../module/fight/GameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Second = _unresolved_2.Second;
    }, function (_unresolved_3) {
      GameScene = _unresolved_3.GameScene;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
    }, function (_unresolved_5) {
      GameLogic = _unresolved_5.GameLogic;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
    }, function (_unresolved_7) {
      GameSet = _unresolved_7.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5824beJf1RGzq60/kNgP/lw", "TestFight", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Canvas', 'Component', 'director', 'EventTouch', 'find', 'geometry', 'Input', 'math', 'Node', 'Scene', 'Tween', 'tween', 'UITransform', 'v3', 'Vec2', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestFight", TestFight = (_dec = ccclass('TestFight'), _dec(_class = class TestFight extends Component {
        constructor(...args) {
          super(...args);
          this.state = 0;
        }

        async onLoad() {
          find("scene").addComponent(_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene);
        }

        async start() {
          // let door = find("scene/enter");
          // let tw = tween(door).to(1, { worldPosition: v3(0, 2, 0) }).call(() => { console.log("end") }).start();
          // tw.tag(123);
          // tw.to(1, { worldPosition: v3(-5, 2, 0) }).call(() => { console.log("end1") }).start();
          // await Second(1);
          // Tween.stopAllByTag(123);
          // console.log(tw.running);
          // tw.start();
          await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).PrevLoad();
          await (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).load();
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0.2);
          (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).getIsntance().Init(); // let handCards = [];
          // for (let i = 0; i < 2; i++) {
          //     let data = base.BattleRoomCardData.create();
          //     handCards.push(data);
          //     data.configId = 1;
          //     data.instId = i + "";
          // }
          //GameLogic.Enter(handCards, [[], [], []], [[], [], []]);
          //GameLogic.Round_New();
          //find("Canvas/endRound").on(Input.EventType.TOUCH_END, this.onEndRound, this);
          //this.state = 1;
        }

        async onEndRound() {
          if (this.state == 1) {
            this.state = 2;
            (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).Round_End();
            await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(2);
            (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).Round_Play();
            await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(2);
            (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).Round_New();
            this.state = 1;
          }
        }

        update(deltaTime) {
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).update(deltaTime);
        }

      }) || _class));

      MyNode = class MyNode extends Node {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05a1daab34142de07c393b367e337f9769cce36e.js.map