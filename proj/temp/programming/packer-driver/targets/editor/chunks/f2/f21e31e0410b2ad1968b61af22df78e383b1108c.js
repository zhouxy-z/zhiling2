System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Sprite, skill_quality_color, Pageitem, _crd;

  function _reportPossibleCrUseOfskill_quality_color(extras) {
    _reporterNs.report("skill_quality_color", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("Pageitem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      skill_quality_color = _unresolved_2.skill_quality_color;
    }, function (_unresolved_3) {}],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4aed9jUFklKeq8CIblMsfuj", "Pageitem", undefined);

      __checkObsolete__(['Color', 'Component', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate', 'path']);

      _export("Pageitem", Pageitem = class Pageitem extends Component {
        onLoad() {}
        /**
         * 刷新道具数据
         * @param data 
         */


        async SetData(data) {
          this.node.getComponent(Sprite).color = new Color().fromHEX((_crd && skill_quality_color === void 0 ? (_reportPossibleCrUseOfskill_quality_color({
            error: Error()
          }), skill_quality_color) : skill_quality_color)[data]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f21e31e0410b2ad1968b61af22df78e383b1108c.js.map