System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Tween, Vec3, easing, sp, tween, Panel, PlayerData, CardSotrType1, CfgMgr, AutoScroller, Card, CardsSortOrFiltrate, EventMgr, Evt_Add_Card_Group_update, CardGroupCreatorTips, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardSotrType(extras) {
    _reporterNs.report("CardSotrType1", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardsSortOrFiltrate(extras) {
    _reporterNs.report("CardsSortOrFiltrate", "./CardsSortOrFiltrate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Add_Card_Group_update(extras) {
    _reporterNs.report("Evt_Add_Card_Group_update", "../../manager/EventMgr", _context.meta, extras);
  }

  _export("CardGroupCreatorTips", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      easing = _cc.easing;
      sp = _cc.sp;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }, function (_unresolved_4) {
      CardSotrType1 = _unresolved_4.CardSotrType1;
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      AutoScroller = _unresolved_5.AutoScroller;
    }, function (_unresolved_6) {
      Card = _unresolved_6.Card;
    }, function (_unresolved_7) {
      CardsSortOrFiltrate = _unresolved_7.CardsSortOrFiltrate;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
      Evt_Add_Card_Group_update = _unresolved_8.Evt_Add_Card_Group_update;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "023e2d3YWRIzrlcw4wJWQq2", "CardGroupCreatorTips", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'Vec3', 'easing', 'path', 'sp', 'tween']);

      _export("CardGroupCreatorTips", CardGroupCreatorTips = class CardGroupCreatorTips extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/cards/CardGroupCreatorTips";
          this.title = void 0;
          this.cardGroupName = void 0;
          this.btn1 = void 0;
          this.btn2 = void 0;
          this.cardClassList = void 0;
          this.EffNode = void 0;
          this.infoCont = void 0;
          this.callBack1 = void 0;
          this.callBack2 = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.infoCont = this.find("infoCont");
          this.EffNode = this.find("effNode");
          this.title = this.find("infoCont/title", Label);
          this.cardGroupName = this.find("infoCont/groupName", Label);
          this.cardClassList = this.find("infoCont/cardClassList", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.cardClassList.SetHandle(this.updateCardItem.bind(this));
          this.btn1 = this.find("infoCont/btn1");
          this.btn2 = this.find("infoCont/btn2");
          this.btn1.on(Input.EventType.TOUCH_END, this.onGotoCardGroup, this);
          this.btn2.on(Input.EventType.TOUCH_END, this.onSetDefult, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Add_Card_Group_update === void 0 ? (_reportPossibleCrUseOfEvt_Add_Card_Group_update({
            error: Error()
          }), Evt_Add_Card_Group_update) : Evt_Add_Card_Group_update, this.updateScorll, this);
          this.EffNode.active = true;
          this.infoCont.active = false;
          var spine = this.EffNode.children[0].getComponent(sp.Skeleton);
          var self = this;
          tween(spine).call(() => {
            spine.clearAnimation();
            spine.setAnimation(0, "animation", false);
          }).delay(1).call(() => {
            spine.setCompleteListener(() => {
              self.EffNode.active = false;
            });
            this.infoCont.active = true;
            Tween.stopAllByTarget(this.infoCont);
            this.infoCont.setScale(0.3, 0.3, 1);
            ;
            tween(this.infoCont).to(1, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: easing.elasticOut
            }).start();
          }).start();
        }

        flush(select_id, card_list, callback1, callback2) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.callBack1 = callback1;
            _this.callBack2 = callback2;
            var select_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(select_id);
            _this.title.string = "用" + select_cfg.CardName + "生成的自定义卡组";
            (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
              error: Error()
            }), CardsSortOrFiltrate) : CardsSortOrFiltrate).getCostSort(card_list, (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
              error: Error()
            }), CardSotrType1) : CardSotrType1).Up);

            _this.cardClassList.UpdateDatas(card_list);
          })();
        }

        updateScorll() {
          var name = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id).name;
          this.cardGroupName.string = name;
        }

        updateCardItem(item, data) {
          var card = item.getChildByName("Cards").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          if (!card) card = item.getChildByName("Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          card.SetData(data);
        }

        onGotoCardGroup() {
          if (this.callBack1) {
            this.callBack1();
            this.callBack1 = undefined;
          }

          this.Hide();
        }

        onSetDefult() {
          if (this.callBack2) {
            this.callBack2();
            this.callBack2 = undefined;
          }

          this.Hide();
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Add_Card_Group_update === void 0 ? (_reportPossibleCrUseOfEvt_Add_Card_Group_update({
            error: Error()
          }), Evt_Add_Card_Group_update) : Evt_Add_Card_Group_update, this.updateScorll, this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a14c6b780c499613145dde08e7051b1fb36d257.js.map