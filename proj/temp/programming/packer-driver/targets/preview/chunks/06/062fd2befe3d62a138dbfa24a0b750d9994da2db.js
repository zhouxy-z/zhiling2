System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, TradePanel, BuyPanel, RoleMsgPanel, Panel, BuyFailPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTradePanel(extras) {
    _reporterNs.report("TradePanel", "./TradePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyPanel(extras) {
    _reporterNs.report("BuyPanel", "./BuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleMsgPanel(extras) {
    _reporterNs.report("RoleMsgPanel", "./RoleMsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("BuyFailPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      TradePanel = _unresolved_2.TradePanel;
    }, function (_unresolved_3) {
      BuyPanel = _unresolved_3.BuyPanel;
    }, function (_unresolved_4) {
      RoleMsgPanel = _unresolved_4.RoleMsgPanel;
    }, function (_unresolved_5) {
      Panel = _unresolved_5.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2aeabOlIRLwZyt4PH2X4Ma", "BuyFailPanel", undefined);

      __checkObsolete__(['Button', 'Label']);

      _export("BuyFailPanel", BuyFailPanel = class BuyFailPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/Trade/BuyFailPanel";
          this.updateBtn = void 0;
          this.tittle = void 0;
          this.lbl = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("spriteFrame/Close");
          this.updateBtn = this.find("spriteFrame/updateBtn", Button);
          this.tittle = this.find("spriteFrame/tittle", Label);
          this.lbl = this.find("spriteFrame/lbl", Label);
          this.updateBtn.node.on("click", this.onUpdate, this);
        }

        onShow() {}

        flush(err_type, data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.tittle.string = "订单不足";
            _this.lbl.string = "订单不足，已被他人抢购，请查看其他订单";
          })();
        }

        onUpdate() {
          (_crd && BuyPanel === void 0 ? (_reportPossibleCrUseOfBuyPanel({
            error: Error()
          }), BuyPanel) : BuyPanel).Hide();
          (_crd && RoleMsgPanel === void 0 ? (_reportPossibleCrUseOfRoleMsgPanel({
            error: Error()
          }), RoleMsgPanel) : RoleMsgPanel).Hide();
          (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
            error: Error()
          }), TradePanel) : TradePanel).ins.SendSessionView();
          this.Hide();
        }

        onHide() {// TradePanel.ins.sendSessionView();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=062fd2befe3d62a138dbfa24a0b750d9994da2db.js.map