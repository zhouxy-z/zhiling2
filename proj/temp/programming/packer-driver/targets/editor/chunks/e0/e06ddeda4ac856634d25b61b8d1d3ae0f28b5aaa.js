System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, path, Sprite, SpriteFrame, CfgMgr, cardBack, folder_icon, ResMgr, PlayerData, Route, Session, CardGroupItem, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcardBack(extras) {
    _reporterNs.report("cardBack", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  _export("CardGroupItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      cardBack = _unresolved_3.cardBack;
      folder_icon = _unresolved_3.folder_icon;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      Route = _unresolved_5.Route;
    }, function (_unresolved_6) {
      Session = _unresolved_6.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3ae34B1YRP3rS1bkaCLjnf", "CardGroupItem", undefined);

      __checkObsolete__(['Button', 'Component', 'Input', 'Label', 'Node', 'path', 'sp', 'Sprite', 'SpriteFrame']);

      _export("CardGroupItem", CardGroupItem = class CardGroupItem extends Component {
        constructor(...args) {
          super(...args);
          this.add = void 0;
          this.cardNode = void 0;
          this.bg = void 0;
          this.cardSpr = void 0;
          this.warning = void 0;
          this.nameLab = void 0;
          this.useLab = void 0;
          this.headIcon = void 0;
          this.getBtn = void 0;
          this.data = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          var _this$complete;

          this.add = this.node.getChildByName("add");
          this.cardNode = this.node.getChildByName("cardNode");
          this.bg = this.node.getChildByPath("cardNode/bg").getComponent(Sprite);
          this.cardSpr = this.node.getChildByPath("cardNode/cardSpr").getComponent(Sprite);
          this.warning = this.node.getChildByPath("cardNode/warning");
          this.nameLab = this.node.getChildByPath("cardNode/nameLab").getComponent(Label);
          this.useLab = this.node.getChildByPath("cardNode/useLab");
          this.headIcon = this.node.getChildByPath("cardNode/headIcon").getComponent(Sprite);
          this.getBtn = this.node.getChildByPath("cardNode/getBtn").getComponent(Button);
          this.getBtn.node.on(Button.EventType.CLICK, this.onGet, this);
          this.getBtn.node.active = false;
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
        /**
         * 设置角色数据
         * @param data 
         */


        async SetData(data, is_hide_use) {
          if (!this.hasLoad) await this.loadSub;
          this.data = data;
          this.add.active = false;
          this.cardNode.active = true;

          if (typeof data == "string") {
            this.add.active = true;
            this.cardNode.active = false;
            return;
          }

          if (!data) return;
          this.nameLab.string = data.name;
          this.warning.active = !data.size || data.size < 12;
          let url = !data.size || data.size < 12 ? path.join("sheets/cards/red", "spriteFrame") : path.join("sheets/cards/blue", "spriteFrame");
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
            this.bg.spriteFrame = res;
          });
          this.getBtn.node.active = data.id == "";
          this.useLab.active = !is_hide_use && (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurFightCardGroup && data.id == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurFightCardGroup.id;
          let avatarId = data.avatarId ? data.avatarId : (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetLogic("InitDeck").HeadID;
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetHead(avatarId);

          if (cfg) {
            let headIconUrl = cfg.icon;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
              this.headIcon.spriteFrame = res;
            });
          } else {
            console.log("配置错误");
          }

          let cardBackcfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardBackCfgById(data.cardBackId);

          if (cardBackcfg) {
            let callBackIcon = cardBackcfg.icon;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && cardBack === void 0 ? (_reportPossibleCrUseOfcardBack({
              error: Error()
            }), cardBack) : cardBack, "card_back_" + callBackIcon, "spriteFrame"), SpriteFrame, res => {
              this.cardSpr.spriteFrame = res;
            });
          } else {
            console.log("配置错误");
          }
        }

        onGet() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.noobcardsclaim"]);
        }

        getData() {
          return this.data;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e06ddeda4ac856634d25b61b8d1d3ae0f28b5aaa.js.map