System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EditBox, Input, Label, Panel, Selector, LocalStorage, CfgMgr, GameSet, ServerPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelector(extras) {
    _reporterNs.report("Selector", "../../component/Selector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  _export("ServerPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      Selector = _unresolved_3.Selector;
    }, function (_unresolved_4) {
      LocalStorage = _unresolved_4.default;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }, function (_unresolved_6) {
      GameSet = _unresolved_6.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6aa7d65GKFOpIvMbiCmAtCW", "ServerPanel", undefined);

      __checkObsolete__(['director', 'EditBox', 'Input', 'Label', 'Node']);

      _export("ServerPanel", ServerPanel = class ServerPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/login/ServerPanel";
          this.selector = void 0;
          this.input = void 0;
          this.loginHost = void 0;
          this.loginServer = void 0;
          this.loginPort = void 0;
          this.callback = void 0;
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _list$;

            _this.selector = _this.find("frame/Selector", _crd && Selector === void 0 ? (_reportPossibleCrUseOfSelector({
              error: Error()
            }), Selector) : Selector);
            _this.input = _this.find("frame/input", EditBox);

            _this.find("enter").on(Input.EventType.TOUCH_END, _this.onLogin, _this);

            _this.loginHost = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetString("loginHost", "http://192.168.0.103:8002/user/v1/login/wec");
            _this.loginServer = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetString("loginServer", "192.168.0.103");
            _this.loginPort = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetNumber("loginPort", 7000);
            var serverlist = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("server_list");
            var list = [];

            for (var server of serverlist) {
              list.push(server);
            }

            _this.selector.string = _this.loginHost || ((_list$ = list[0]) == null ? void 0 : _list$.Login);

            _this.selector.Init(list, (item, data) => {
              var desc = data.Login;
              if (data.Desc) desc = "(" + data.Desc + ")" + data.Login;
              var label = item.getComponent(Label);

              if (!label) {
                item.getComponent(EditBox).string = desc;
              } else {
                label.string = desc;
              }
            });

            _this.selector.node.on('select', _this.onSelect, _this);

            var str = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetString("userCode");

            if (str) {
              _this.input.string = str;
            }
          })();
        }

        onSelect(src, data) {
          this.loginHost = data.Login;
          this.loginServer = data.Server;
          this.loginPort = data.Port;
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetString("loginHost", this.loginHost);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetString("loginServer", this.loginServer);
        }

        onShow() {}

        flush(callBack) {
          this.callback = callBack;
        }

        onHide() {}

        onLogin() {
          if ((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).globalCfg) {
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).globalCfg.Host;
          }

          var userCode = this.input.string;

          if (!userCode) {} else {
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).SetString("userCode", userCode);
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).SetString("loginServer", this.loginServer);
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).SetNumber("loginPort", this.loginPort);
            window['usercode'] = userCode;
            this.callback(this.loginHost, this.loginServer, this.loginPort, userCode);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a76df2d7b5377f335cbf6b95cc825657ca94b851.js.map