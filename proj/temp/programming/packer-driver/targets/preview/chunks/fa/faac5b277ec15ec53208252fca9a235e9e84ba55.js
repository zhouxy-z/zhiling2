System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TestSkill, _dec, _dec2, _class, _crd, disallowMultiple, ccclass, property, EffectScene;

  function _reportPossibleCrUseOfTestSkill(extras) {
    _reporterNs.report("TestSkill", "../../module/fight/display/TestSkill", _context.meta, extras);
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
    }, function (_unresolved_2) {
      TestSkill = _unresolved_2.TestSkill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56c35REH6NNFIRdnlHYBOOF", "EffectScene", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'Component', 'director', 'find', 'Node', 'sp']);

      ({
        disallowMultiple,
        ccclass,
        property
      } = _decorator);

      _export("EffectScene", EffectScene = (_dec = ccclass('EffectScene'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class EffectScene extends Component {
        start() {
          var skills = this.node.parent.getComponentsInChildren(_crd && TestSkill === void 0 ? (_reportPossibleCrUseOfTestSkill({
            error: Error()
          }), TestSkill) : TestSkill);

          for (var skill of skills) {
            skill.Test();
            skill.node.on("tigger", (tigger, affect) => {
              console.log("tigger", tigger, affect);
            });
          }
        }

        update(deltaTime) {}

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=faac5b277ec15ec53208252fca9a235e9e84ba55.js.map