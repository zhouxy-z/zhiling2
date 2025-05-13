System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, Label, Layout, ScrollView, instantiate, CfgMgr, Session, Panel, AutoScroller, PlayerData, Card, Protocol, CardsGroupChangePanel, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
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

  _export("CardsGroupChangePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Input = _cc.Input;
      Label = _cc.Label;
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
      AutoScroller = _unresolved_5.AutoScroller;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      Card = _unresolved_7.Card;
    }, function (_unresolved_8) {
      Protocol = _unresolved_8.Protocol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68654MkiQRGfp52i87t9G9M", "CardsGroupChangePanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate']);

      _export("CardsGroupChangePanel", CardsGroupChangePanel = class CardsGroupChangePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cards/CardsGroupChangePanel";
          this.tile = void 0;
          this.scroller = void 0;
          this.noneListCont = void 0;
          this.okBtn = void 0;
          this.clone_item = void 0;
          this.limit = 0;
          this.datas = void 0;
          this.selects = [];
          this.cardGroupScrollView = void 0;
          this.deckId = void 0;
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.noneListCont = this.find("noneListCont");
          this.scroller = this.find("ScrollView", ScrollView);
          this.clone_item = this.find("ScrollView/view/content/Cards");
          this.scroller.node.on('select', this.onSelect, this);
          this.find("okBtn", Button).node.on(Button.EventType.CLICK, this.onOk, this);
          this.find("deleteBtn", Button).node.on(Button.EventType.CLICK, this.onDelete, this);
          this.cardGroupScrollView = this.find("cardGroupScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.cardGroupScrollView.SetHandle(this.updateCardGroupItem.bind(this));
          this.cardGroupScrollView.node.on('select', this.onSelectCardGroup, this);
        }

        onShow() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).getplayerdecks);
        }

        flush(...args) {
          this.datas = [];

          for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cards) {
            this.datas.push(iterator);
          }

          this.datas.sort((a, b) => {
            let a_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId).Cost;
            let b_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId).Cost;
            return a_cost - b_cost;
          });
          this.scroller.content.removeAllChildren();

          for (const iterator of this.datas) {
            let card = instantiate(this.clone_item);
            card.on(Input.EventType.TOUCH_END, this.onSelect, this);
            this.updateCardItem(card, iterator);
            this.scroller.content.addChild(card);
          }

          const layout = this.scroller.content.getComponent(Layout);
          layout.enabled = false;
          layout.enabled = true;
          layout.updateLayout();
          this.scroller.scrollToTop(0.01);
          this.cardGroupScrollView.UpdateDatas((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList);
        }

        updateCardItem(item, data) {
          let card = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          if (!card) card = item.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          card.SetData(data);
        }

        onOk() {
          let send_data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).setdeckcards();
          send_data.cardIds = this.selects;
          send_data.deckId = this.deckId;
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

        onDelete() {
          let delete_data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).deletedeck();
          delete_data.deckId = this.deckId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(delete_data);
        }

        onSelect(event) {
          let item = event.getCurrentTarget();
          let index = item.getSiblingIndex();
          let cards = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          let is_select = cards.getSelectState();
          cards.setSelect(!is_select);

          if (!is_select) {
            this.selects.push(this.datas[index].id);
          } else {
            this.selects.splice(this.selects.indexOf(this.datas[index].id), 1);
          }
        }

        updateCardGroupItem(item, data) {
          let card_name = item.getChildByName("name").getComponent(Label);
          card_name.string = data.name;
          let card_id = item.getChildByName("id").getComponent(Label);
          card_id.string = data.id;
        }

        onSelectCardGroup(index, item) {
          let card_name = item.getChildByName("name").getComponent(Label);
          let deckId = item.getChildByName("id").getComponent(Label);
          console.log(card_name.string, deckId.string);
          this.deckId = deckId.string; // let getdeckcards = new Protocol.getdeckcards();
          // getdeckcards.deckId = this.card_id;
          // Session.Send(getdeckcards);
        }

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b68e8ce40b3d5ae9b0140a77a4ae84d7afd39da.js.map