System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Label, CfgMgr, Session, Panel, AutoScroller, PlayerData, Card, Protocol, EventMgr, Evt_Card_Check_By_Name, CardsGroupCheckPanel, _crd;

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

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Check_By_Name(extras) {
    _reporterNs.report("Evt_Card_Check_By_Name", "../../manager/EventMgr", _context.meta, extras);
  }

  _export("CardsGroupCheckPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
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
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_Card_Check_By_Name = _unresolved_9.Evt_Card_Check_By_Name;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4df6HNV59M5J1BJFx8q4/E", "CardsGroupCheckPanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity']);

      _export("CardsGroupCheckPanel", CardsGroupCheckPanel = class CardsGroupCheckPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cards/CardsGroupCheckPanel";
          this.tile = void 0;
          this.scroller = void 0;
          this.cardGroupScrollView = void 0;
          this.noneListCont = void 0;
          this.okBtn = void 0;
          this.setName = void 0;
          this.card_id = void 0;
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.noneListCont = this.find("noneListCont");
          this.scroller = this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.updateCardItem.bind(this));
          this.cardGroupScrollView = this.find("cardGroupScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.cardGroupScrollView.SetHandle(this.updateCardGroupItem.bind(this));
          this.cardGroupScrollView.node.on('select', this.onSelect, this);
          this.setName = this.find("setName", EditBox);
          this.find("okBtn", Button).node.on(Button.EventType.CLICK, this.onOk, this);
          this.find("setDefaultBtn", Button).node.on(Button.EventType.CLICK, this.onSetDefault, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Check_By_Name === void 0 ? (_reportPossibleCrUseOfEvt_Card_Check_By_Name({
            error: Error()
          }), Evt_Card_Check_By_Name) : Evt_Card_Check_By_Name, this.updateCards, this);
        }

        flush(...args) {
          this.scroller.UpdateDatas([]);
          this.cardGroupScrollView.UpdateDatas((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList);
        }

        onShow() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).getplayerdecks);
        }

        updateCards(data) {
          console.log("data", data);
          let list = [];

          for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              const element = data[key];
              list.push(element);
            }
          }

          list.sort((a, b) => {
            let a_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId).Cost;
            let b_cost = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId).Cost;
            return a_cost - b_cost;
          });
          this.scroller.UpdateDatas(list);
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

        updateCardGroupItem(item, data) {
          let card_name = item.getChildByName("name").getComponent(Label);
          card_name.string = data.name;
          let card_id = item.getChildByName("id").getComponent(Label);
          card_id.string = data.id;
        }

        onSelect(index, item) {
          let card_name = item.getChildByName("name").getComponent(Label);
          let card_id = item.getChildByName("id").getComponent(Label);
          console.log(card_name.string, card_id.string);
          this.card_id = card_id.string;
          let getdeckcards = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).getdeckcards();
          getdeckcards.deckId = this.card_id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(getdeckcards);
        }

        onOk() {
          let add = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).setdeckattrs();
          add.attrs = {
            id: this.card_id,
            name: this.setName.string,
            type: null
          };
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(add);
        }

        onSetDefault() {
          let set = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).setdeckdefault();
          set.deckId = this.card_id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(set);
        }

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1db8e7b1adc865d5d64f360aadcc165a7a9a7f6.js.map