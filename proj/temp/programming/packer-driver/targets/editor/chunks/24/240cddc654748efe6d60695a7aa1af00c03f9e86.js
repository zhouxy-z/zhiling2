System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Session, Panel, Protocol, CardsGroupChangeNamePanel, _crd;

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../net/Protocol", _context.meta, extras);
  }

  _export("CardsGroupChangeNamePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      Protocol = _unresolved_4.Protocol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a6f0uKIIFL/abvxG1aW/T8", "CardsGroupChangeNamePanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity']);

      _export("CardsGroupChangeNamePanel", CardsGroupChangeNamePanel = class CardsGroupChangeNamePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cards/CardsGroupChangeNamePanel";
          this.tile = void 0;
          this.oldName = void 0;
          this.newName = void 0;
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.oldName = this.find("oldName", EditBox);
          this.newName = this.find("newName", EditBox);
          this.find("okBtn", Button).node.on(Button.EventType.CLICK, this.onOk, this);
        }

        flush(...args) {}

        onShow() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).getplayerdecks);
        }

        onOk() {// let new_name = this.newName.string;
          // let old_name = this.oldName.string;
          // if(!old_name){
          //     MsgPanel.Show("输入旧名称");
          //     return
          // }
          // if(PlayerData.cardNameList.indexOf(new_name) != -1){
          //     MsgPanel.Show("新名字已占用");
          //     this.newName.string = "";
          //     return;
          // }
          // let renamedeck = new Protocol.renamedeck();
          // renamedeck.oldName = old_name
          // renamedeck.newName = new_name;
          // Session.Send(renamedeck)
        }

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=240cddc654748efe6d60695a7aa1af00c03f9e86.js.map