System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, instantiate, ResMgr, page1, page2, page3, page4, pageitem, _crd, skill_quality_color;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpage(extras) {
    _reporterNs.report("page1", "./page1", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpage2(extras) {
    _reporterNs.report("page2", "./page2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpage3(extras) {
    _reporterNs.report("page3", "./page3", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpage4(extras) {
    _reporterNs.report("page4", "./page4", _context.meta, extras);
  }

  _export("pageitem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      page1 = _unresolved_3.page1;
    }, function (_unresolved_4) {
      page2 = _unresolved_4.page2;
    }, function (_unresolved_5) {
      page3 = _unresolved_5.page3;
    }, function (_unresolved_6) {
      page4 = _unresolved_6.page4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e91a965qxdJB6vsgWo3/n8P", "pageitem", undefined);

      __checkObsolete__(['Color', 'Component', 'Label', 'Layout', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate', 'path']);

      _export("skill_quality_color", skill_quality_color = [`#ffffff`, `#8AEF4A`, `#8AE9F5`, `#F188F1`, `#F8B034`, `#F17161`, `#ff0000`, `#00ff00`, `#0000ff`]);

      _export("pageitem", pageitem = class pageitem extends Component {
        onLoad() {}
        /**
         * 刷新道具数据
         * @param data 
         */


        async SetData(data) {
          console.log(data);
          let pageName = ["page1", "page2", "page3", "page4", "page5"];
          let prefabs = 'prefabs/' + pageName[data];
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).GetResources(prefabs, prefab => {
            let node = instantiate(prefab);

            switch (data) {
              case 0:
                node.addComponent(_crd && page1 === void 0 ? (_reportPossibleCrUseOfpage({
                  error: Error()
                }), page1) : page1);
                break;

              case 1:
                node.addComponent(_crd && page2 === void 0 ? (_reportPossibleCrUseOfpage2({
                  error: Error()
                }), page2) : page2);
                break;

              case 2:
                node.addComponent(_crd && page3 === void 0 ? (_reportPossibleCrUseOfpage3({
                  error: Error()
                }), page3) : page3);
                break;

              case 3:
                node.addComponent(_crd && page4 === void 0 ? (_reportPossibleCrUseOfpage4({
                  error: Error()
                }), page4) : page4);
                break;

              default:
                break;
            }

            this.node.addChild(node);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5fd8841615544e1fd16ca0a2de8efcc0bb1d781.js.map