System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, CfgMgr, Session, Panel, AutoScroller, PlayerData, Card, Protocol, MsgPanel, SettingCardsGroupPanel, _crd;

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

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
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
      MsgPanel = _unresolved_9.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "555e8/bHmFMtaly34FqUbSN", "SettingCardsGroupPanel%20copy", undefined);

      __checkObsolete__(['Button', 'EditBox', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity']);

      _export("SettingCardsGroupPanel", SettingCardsGroupPanel = class SettingCardsGroupPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cards/SettingCardsGroupPanel";
          this.tile = void 0;
          this.scroller = void 0;
          this.noneListCont = void 0;
          this.okBtn = void 0;
          this.setName = void 0;
          this.limit = 0;
          this.datas = [];
          this.selects = [];
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.noneListCont = this.find("noneListCont");
          this.scroller = this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.updateCardItem.bind(this));
          this.scroller.node.on('select', this.onSelect, this);
          this.setName = this.find("setName", EditBox);
          this.find("okBtn", Button).node.on(Button.EventType.CLICK, this.onOk, this);
        }

        flush(...args) {
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
          this.scroller.UpdateDatas(this.datas);
        }

        onShow() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).getplayerdecks);
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
          let name = this.setName.string ? this.setName.string : "1";

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList.indexOf(name) != -1) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("该名字已拥有");
            this.setName.string = "";
            return;
          }

          let send_data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).setdeckcards();
          send_data.cardIds = this.selects;
          send_data.deckName = name;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(send_data);
        }

        onSelect(index, item) {
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

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22895dd7fb2e3daef675a7ca1f2a86a25a281f46.js.map