System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Sprite, Toggle, Panel, AutoScroller, GatePass, RightsConvert, RightsPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGatePass(extras) {
    _reporterNs.report("GatePass", "./GatePass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightsConvert(extras) {
    _reporterNs.report("RightsConvert", "./RightsConvert", _context.meta, extras);
  }

  _export("RightsPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      GatePass = _unresolved_4.GatePass;
    }, function (_unresolved_5) {
      RightsConvert = _unresolved_5.RightsConvert;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e72ddKsiyxG26yVfBcZunvF", "RightsPanel%20copy", undefined);

      __checkObsolete__(['Button', 'Input', 'Node', 'Sprite', 'Toggle']);

      _export("RightsPanel", RightsPanel = class RightsPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/rights/RightsPanel";
          this.bg = void 0;
          this.help = void 0;
          this.scroller = void 0;
          this.GatePass = void 0;
          this.RightsConvert = void 0;
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.CloseBy("backBtn");

            _this.bg = _this.find("bg", Sprite);
            _this.help = _this.find("help", Button);
            _this.scroller = _this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
              error: Error()
            }), AutoScroller) : AutoScroller);

            _this.scroller.SetHandle(_this.updateItem.bind(_this));

            _this.scroller.node.on('select', _this.onSelect, _this);

            _this.GatePass = _this.find("GatePass").addComponent(_crd && GatePass === void 0 ? (_reportPossibleCrUseOfGatePass({
              error: Error()
            }), GatePass) : GatePass);
            _this.RightsConvert = _this.find("RightsConvert").addComponent(_crd && RightsConvert === void 0 ? (_reportPossibleCrUseOfRightsConvert({
              error: Error()
            }), RightsConvert) : RightsConvert);

            _this.help.node.on(Button.EventType.CLICK, _this.onHelp, _this);
          })();
        }

        onShow() {}

        flush() {
          this.scroller.UpdateDatas([0, 1, 2, 3, 4, 5]);
          this.scroller.SelectFirst();
        }

        onPage(page) {
          console.log(page);

          switch (page) {
            case 0:
              this.GatePass.node.active = true;
              var data;
              this.GatePass.Show(data);
              break;

            default:
              break;
          }
        }

        updateItem(item, data, index) {}

        onSelect(index, item, data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            item.getComponent(Toggle).isChecked = true;

            _this2.onPage(index);
          })();
        }

        onHelp() {}

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dd0a538920632c292c045d9a66b28734575f9a71.js.map