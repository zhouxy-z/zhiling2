System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Input, Layout, ScrollView, instantiate, CfgMgr, Session, Panel, PlayerData, Card, Protocol, SettingCardsGroupPanel, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../net/Protocol", _context.meta, extras);
  }

  _export("SettingCardsGroupPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Layout = _cc.Layout;
      ScrollView = _cc.ScrollView;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      Card = _unresolved_6.Card;
    }, function (_unresolved_7) {
      Protocol = _unresolved_7.Protocol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8dd09pV0XBKQLAh5NP+k74R", "SettingCardsGroupPanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate']);

      _export("SettingCardsGroupPanel", SettingCardsGroupPanel = class SettingCardsGroupPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/cards/SettingCardsGroupPanel";
          this.tile = void 0;
          this.scroller = void 0;
          this.noneListCont = void 0;
          this.okBtn = void 0;
          this.setName = void 0;
          this.clone_item = void 0;
          this.limit = 0;
          this.datas = void 0;
          this.selects = [];
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.noneListCont = this.find("noneListCont");
          this.scroller = this.find("ScrollView", ScrollView);
          this.clone_item = this.find("ScrollView/view/content/Cards");
          this.scroller.node.on('select', this.onSelect, this);
          this.setName = this.find("setName", EditBox);
          this.find("okBtn", Button).node.on(Button.EventType.CLICK, this.onOk, this);
        }

        flush() {
          this.datas = [];

          for (var iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cards) {
            this.datas.push(iterator);
          }

          this.datas.sort((a, b) => {
            var a_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId).Cost;
            var b_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId).Cost;
            return a_cost - b_cost;
          });
          this.scroller.content.removeAllChildren();

          for (var _iterator of this.datas) {
            var card = instantiate(this.clone_item);
            card.on(Input.EventType.TOUCH_END, this.onSelect, this);
            this.updateCardItem(card, _iterator);
            this.scroller.content.addChild(card);
          }

          var layout = this.scroller.content.getComponent(Layout);
          layout.enabled = false;
          layout.enabled = true;
          layout.updateLayout();
          this.scroller.scrollToTop(0.01);
          this.scroller.content.children.forEach(item => {
            console.log(item.getPosition());
          });
        }

        onShow() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).getplayerdecks);
        }

        updateCardItem(item, data) {
          var card = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          if (!card) card = item.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          card.SetData(data);
        }

        onOk() {
          if (this.setName.string != "") {
            var add = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
              error: Error()
            }), Protocol) : Protocol).setdeckattrs();
            add.attrs = {
              id: (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cur_id,
              name: this.setName.string,
              type: null
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(add);
            this.setName.string = "";
          }

          var send_data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).setdeckcards();
          send_data.cardIds = this.selects;
          send_data.deckId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(send_data);
          this.selects = [];
          this.scroller.content.children.forEach(item => {
            item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card).setSelect(false);
          });
        }

        onSelect(event) {
          var item = event.getCurrentTarget();
          var index = item.getSiblingIndex();
          var cards = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          var is_select = cards.getSelectState();
          cards.setSelect(!is_select);

          if (!is_select) {
            this.selects.push(this.datas[index].id);
          } else {
            this.selects.splice(this.selects.indexOf(this.datas[index].id), 1);
          }
        }

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c78d5174a79962b0eb648a6687df78d44a021ea2.js.map