System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Sprite, skill_quality_color, Pageitem, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


        SetData(data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.node.getComponent(Sprite).color = new Color().fromHEX((_crd && skill_quality_color === void 0 ? (_reportPossibleCrUseOfskill_quality_color({
              error: Error()
            }), skill_quality_color) : skill_quality_color)[data]);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87aec09c4cd3f87d74938e7556a003bc5c4ab8b9.js.map