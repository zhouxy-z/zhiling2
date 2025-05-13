System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, sp, ResMgr, CfgMgr, GameRoot, _dec, _class, _crd, ccclass, property, TestUI;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRoot(extras) {
    _reporterNs.report("GameRoot", "../../manager/GameRoot", _context.meta, extras);
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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      GameRoot = _unresolved_4.GameRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "605f0kmFFRHu7X8ZOTfbS2G", "TestUI", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Canvas', 'Component', 'director', 'find', 'Input', 'instantiate', 'Layers', 'Node', 'path', 'Prefab', 'Rect', 'RenderRoot2D', 'RenderTexture', 'sp', 'Sprite', 'SpriteFrame', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestUI", TestUI = (_dec = ccclass('TestUI'), _dec(_class = class TestUI extends Component {
        constructor(...args) {
          super(...args);
          this.cameras = [];
        }

        async start() {
          await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).PrevLoad();
          await (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).load();
          new (_crd && GameRoot === void 0 ? (_reportPossibleCrUseOfGameRoot({
            error: Error()
          }), GameRoot) : GameRoot)(find("Canvas"));
          let sk = find("Canvas/Node").getComponent(sp.Skeleton);
          sk.skeletonData = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(`spine/card_0026/card_0026`, sp.SkeletonData);
          sk.setAnimation(0, "idle", true);
        }

        onTouch() {
          console.log("onTouch");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b05b86e8ef68ab6eb3316aa8ea7a8bac262a5ed.js.map