System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, director, find, GameSet, _dec, _class, _class2, _crd, ccclass, property, GameScene;

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "./GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneCard(extras) {
    _reporterNs.report("SceneCard", "../module/fight/display/SceneCard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      director = _cc.director;
      find = _cc.find;
    }, function (_unresolved_2) {
      GameSet = _unresolved_2.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "237535mst9JO6aN0MoDv1IU", "GameScene", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'Director', 'director', 'find', 'instantiate', 'Node', 'Scene', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameScene", GameScene = (_dec = ccclass('GameScene'), _dec(_class = (_class2 = class GameScene extends Component {
        onLoad() {
          if (GameScene.instance) {
            GameScene.instance.destroy();
            console.error("场景实例不能重复创建！");
          }

          GameScene.instance = this;
          GameScene.scene = director.getScene();
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera = find("MainCamera").getComponent(Camera);
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).SceneHight = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.node.position.y;
        }

        start() {}

        update(deltaTime) {}

        static Init() {
          this.Reset();
        }

        static addCard(node) {}

        static Reset() {
          for (var k in this.cards) {
            var card = this.cards[k];
            card.receive();
          }

          this.cards = {};
        }

      }, _class2.instance = void 0, _class2.scene = void 0, _class2.cards = {}, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b0658e2413eb1f95fb45e6746b01eb0f57949e7.js.map