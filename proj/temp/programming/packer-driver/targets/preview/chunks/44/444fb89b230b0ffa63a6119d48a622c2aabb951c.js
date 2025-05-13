System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Second, Panel, UILay, Tips, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILay(extras) {
    _reporterNs.report("UILay", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("Tips", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Second = _unresolved_2.Second;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
      UILay = _unresolved_3.UILay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92833PBasBG+Ik5dpUaKWva", "Tips%20copy", undefined);

      __checkObsolete__(['Input', 'Label', 'Node']);

      _export("Tips", Tips = class Tips extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/common/Tips";
          this.label = void 0;
          this.btn1 = void 0;
          this.btn2 = void 0;
          this.okCallback = void 0;
          this.noCallback = void 0;
          this.closeLoop = 0;
          this.$lockLay = (_crd && UILay === void 0 ? (_reportPossibleCrUseOfUILay({
            error: Error()
          }), UILay) : UILay).Modal;
        }

        onLoad() {
          this.label = this.find("Label", Label);
          this.btn1 = this.find("btn1");
          this.btn2 = this.find("btn2");
          this.btn1.on(Input.EventType.TOUCH_END, this.onOk, this);
          this.btn2.on(Input.EventType.TOUCH_END, this.onNo, this);
          this.CloseBy("mask");
          this.find("closeBtn").on(Input.EventType.TOUCH_END, this.Hide, this);
        }

        onShow() {}

        flush(msg, okCallBack, noCallBack, autoClose) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.label.string = msg;
            _this.okCallback = okCallBack;
            _this.noCallback = noCallBack;

            if (okCallBack) {
              _this.btn1.active = true;
              _this.btn2.active = true;
            } else {
              _this.btn1.active = false;
              _this.btn2.active = false;
            }

            if (autoClose) {
              _this.closeLoop++;
              var loop = _this.closeLoop;
              yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(autoClose);
              if (loop != _this.closeLoop) return;

              _this.Hide();
            }
          })();
        }

        onHide() {
          this.okCallback = undefined;
          this.noCallback = undefined;
          this.closeLoop++;
        }

        onOk() {
          this.okCallback && this.okCallback();
          this.Hide();
        }

        onNo() {
          this.noCallback && this.noCallback();
          this.Hide();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=444fb89b230b0ffa63a6119d48a622c2aabb951c.js.map