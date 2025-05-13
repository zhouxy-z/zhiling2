System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, path, sp, Sprite, SpriteFrame, CfgMgr, card_quality, ResMgr, Utils, EventMgr, Evt_Card_Chage, Evt_Item_Change, PlayerData, Card, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcard_quality(extras) {
    _reporterNs.report("card_quality", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Chage(extras) {
    _reporterNs.report("Evt_Card_Chage", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("Card", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      path = _cc.path;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      card_quality = _unresolved_3.card_quality;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_Card_Chage = _unresolved_5.Evt_Card_Chage;
      Evt_Item_Change = _unresolved_5.Evt_Item_Change;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3170H2x0pM8LkpNjdwJaDI", "Card%20copy", undefined);

      __checkObsolete__(['Component', 'Input', 'Label', 'Node', 'path', 'sp', 'Sprite', 'SpriteFrame']);

      _export("Card", Card = class Card extends Component {
        constructor(...args) {
          super(...args);
          this.frame = void 0;
          this.nameframe = void 0;
          this.nameLab = void 0;
          this.costLab = void 0;
          this.body_card = void 0;
          this.powerLab = void 0;
          this.select = void 0;
          this.doneNode = void 0;
          this.add = void 0;
          this.cardMask = void 0;
          this.cardNode = void 0;
          this.upEffect = void 0;
          this.tradeCd = void 0;
          this.effectFrame = void 0;
          this.isShowEffect = true;
          this.data = void 0;
          this.addCallBack = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          var _this$complete;

          this.frame = this.node.getChildByPath("cardNode/frame").getComponent(sp.Skeleton);
          this.costLab = this.node.getChildByPath("cardNode/cost/label").getComponent(Label);
          this.powerLab = this.node.getChildByPath("cardNode/power/label").getComponent(Label);
          this.nameframe = this.node.getChildByPath("cardNode/nameframe").getComponent(Sprite);
          this.nameLab = this.node.getChildByPath("cardNode/nameframe/name").getComponent(Label);
          this.body_card = this.node.getChildByPath("cardNode/body_card").getComponent(sp.Skeleton);
          this.select = this.node.getChildByPath("cardNode/select");
          this.effectFrame = this.node.getChildByPath("cardNode/effectFrame").getComponent(sp.Skeleton);
          this.doneNode = this.node.getChildByName("doneNode");
          this.add = this.node.getChildByName("add");
          this.cardMask = this.node.getChildByName("cardMask");
          this.cardNode = this.node.getChildByName("cardNode");
          this.upEffect = this.node.getChildByName("upEffect");
          this.tradeCd = this.node.getChildByName("tradeCd");
          this.cardMask.active = false;
          this.upEffect.active = false;
          this.tradeCd.active = false;
          this.add.active = false;
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Chage === void 0 ? (_reportPossibleCrUseOfEvt_Card_Chage({
            error: Error()
          }), Evt_Card_Chage) : Evt_Card_Chage, this.onUpdateCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Chage === void 0 ? (_reportPossibleCrUseOfEvt_Card_Chage({
            error: Error()
          }), Evt_Card_Chage) : Evt_Card_Chage, this.onUpdateCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        onUpdateCard(cardData) {
          if (this.data && this.data.id == cardData.id) {
            this.SetData(cardData);
          }
        }

        onItemChange() {
          this.updateUpgradeState();
        }
        /**
         * 设置角色数据
         * @param data 
         */


        async SetData(data) {
          if (!this.hasLoad) await this.loadSub;

          if (data == null) {
            this.doneNode.active = true;
            this.cardNode.active = false;
            this.data = null;
            this.upEffect.active = false;
            return;
          } else {
            this.doneNode.active = false;
            this.cardNode.active = true;
          }

          this.body_card.node.active = true;
          this.data = data;
          let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard(data.cardId);
          this.costLab.string = std.Cost + "";
          this.powerLab.string = std.Power + "";
          this.nameLab.string = std.CardName;
          this.body_card.skeletonData = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("spine", std.CardBody, std.CardBody), sp.SkeletonData);
          this.body_card.setAnimation(0, "Idle", true);
          this.frame.clearAnimation();
          this.frame.skeletonData = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("spine", "cardbg_000" + this.data.quality, "cardbg_000" + this.data.quality), sp.SkeletonData);
          this.frame.setAnimation(0, "Idle", true);
          this.effectFrame.clearAnimation();
          this.effectFrame.setAnimation(0, data.quality.toString(), true);
          this.nameframe.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
            error: Error()
          }), card_quality) : card_quality, "nameframe_" + data.quality, "spriteFrame"), SpriteFrame);
          this.updateUpgradeState();
        }

        updateUpgradeState() {
          let isCanUpgrade = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CheckCardIsCanUpgrade(this.data && this.data.id);
          this.upEffect.active = isCanUpgrade && this.isShowEffect;
        }

        async setSelect(is_select) {
          if (!this.hasLoad) await this.loadSub;
          this.select.active = is_select;
        }

        getSelectState() {
          return this.select.active;
        }

        getData() {
          return this.data;
        }

        setGray(is_gray) {
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).SetNodeGray(this.node, is_gray);
        }

        setCardMask(bool) {
          this.cardMask.active = bool;
        }

        async setCardTradeCd(bool) {
          if (!this.hasLoad) await this.loadSub;
          this.tradeCd.active = bool;
        }

        setCardEffectState(bool) {
          this.isShowEffect = bool;
        }

        async setShowAdd(bool, callBack) {
          if (!this.hasLoad) await this.loadSub;
          this.add.active = bool;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1bafd58ccdaee968eb5c70dc7cba59a89869a4b.js.map