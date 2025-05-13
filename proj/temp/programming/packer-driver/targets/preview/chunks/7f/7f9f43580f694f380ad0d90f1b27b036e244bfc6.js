System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, ResMgr, GameRoot, App, GameSet, _dec, _class, _class2, _crd, ccclass, property, Luanch;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRoot(extras) {
    _reporterNs.report("GameRoot", "../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApp(extras) {
    _reporterNs.report("App", "../manager/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../manager/GameSet", _context.meta, extras);
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
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      GameRoot = _unresolved_3.GameRoot;
    }, function (_unresolved_4) {
      App = _unresolved_4.App;
    }, function (_unresolved_5) {
      GameSet = _unresolved_5.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95c18TQzQZGLJW1vQYc6sMp", "Luanch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Luanch", Luanch = (_dec = ccclass('Luanch'), _dec(_class = (_class2 = class Luanch extends Component {
        start() {
          return _asyncToGenerator(function* () {
            console.log("Luanch onLoad");

            if (Luanch.instance) {
              Luanch.instance.destroy();
            }

            yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).PrevLoad(); //加载ab包

            new (_crd && GameRoot === void 0 ? (_reportPossibleCrUseOfGameRoot({
              error: Error()
            }), GameRoot) : GameRoot)(find("Canvas"));
            new (_crd && App === void 0 ? (_reportPossibleCrUseOfApp({
              error: Error()
            }), App) : App)();
          })();
        }

        update(deltaTime) {
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).update(deltaTime);
        }

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f9f43580f694f380ad0d90f1b27b036e244bfc6.js.map