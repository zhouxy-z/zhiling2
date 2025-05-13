System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, GameScene, ResMgr, _dec, _class, _crd, ccclass, property, TestDrag;

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../../module/fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GameScene = _unresolved_2.GameScene;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5824beJf1RGzq60/kNgP/lw", "TestDrag", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Camera', 'Canvas', 'Component', 'director', 'EventTouch', 'find', 'geometry', 'Input', 'instantiate', 'math', 'Node', 'Prefab', 'Scene', 'Tween', 'tween', 'UITransform', 'v3', 'Vec2', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestDrag", TestDrag = (_dec = ccclass('TestDrag'), _dec(_class = class TestDrag extends Component {
        async onLoad() {
          await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).PrevLoad();
          let gamescene = find("FightScene").addComponent(_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=496db128c397413ef4557e9d1e4c0fce072add1f.js.map