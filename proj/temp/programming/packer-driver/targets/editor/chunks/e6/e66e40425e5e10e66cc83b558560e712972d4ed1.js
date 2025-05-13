System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Sprite, page4, _crd, skill_quality_color;

  _export("page4", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "97650ZoyUxKUJrc5B6uGl6g", "page4", undefined);

      __checkObsolete__(['Color', 'Component', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate', 'path']);

      _export("skill_quality_color", skill_quality_color = [`#ffffff`, `#8AEF4A`, `#8AE9F5`, `#F188F1`, `#F8B034`, `#F17161`, `#ff0000`, `#00ff00`, `#0000ff`]);

      _export("page4", page4 = class page4 extends Component {
        onLoad() {}
        /**
         * 刷新道具数据
         * @param data 
         */


        async SetData(data) {
          this.node.getComponent(Sprite).color = new Color().fromHEX(skill_quality_color[data]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e66e40425e5e10e66cc83b558560e712972d4ed1.js.map