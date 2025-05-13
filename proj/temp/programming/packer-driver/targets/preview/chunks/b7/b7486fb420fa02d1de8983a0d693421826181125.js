System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Toggle, Panel, LocalStorage, PlayerData, MailDeletePanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("MailDeletePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      LocalStorage = _unresolved_3.default;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2e33idKCBENJFYwqW0Y5mD", "MailDeletePanel", undefined);

      __checkObsolete__(['Button', 'Node', 'Toggle']);

      _export("MailDeletePanel", MailDeletePanel = class MailDeletePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/mail/MailDeletePanel";
          this.callBack = void 0;
          this.deleteBtn = void 0;
          this.toggle = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("spriteFrame/Close");
          this.CloseBy("spriteFrame/Close2");
          this.deleteBtn = this.find("spriteFrame/deleteBtn");
          this.toggle = this.find("spriteFrame/Node/toggle", Toggle);
          this.onBntEvent();
        }

        onBntEvent() {
          this.deleteBtn.on(Button.EventType.CLICK, this.onClickDelete, this);
        }

        onShow() {}

        flush() {
          this.callBack = arguments.length <= 0 ? undefined : arguments[0];
          this.toggle.isChecked = false;
        }

        onHide() {}

        onClickDelete() {
          var time = Date.now();

          if (this.toggle.isChecked) {
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).SetNumber("MailDeletePanel" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId, time);
          } else {
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).RemoveItem("MailDeletePanel" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId);
          }

          if (this.callBack) {
            this.callBack();
          }

          this.Hide();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7486fb420fa02d1de8983a0d693421826181125.js.map