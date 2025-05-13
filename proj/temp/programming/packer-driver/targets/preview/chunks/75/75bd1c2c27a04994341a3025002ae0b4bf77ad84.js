System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Button, Sprite, Label, path, SpriteFrame, Layout, UITransform, UIOpacity, Card, CfgMgr, ThingName, Req, Route, PlayerData, card_quality, folder_item, ResMgr, Session, MsgPanel, EventMgr, Evt_SectionAwardUpdate, DateUtils, SectionAwardItem, _crd;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPvpLevel(extras) {
    _reporterNs.report("StdPvpLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingName(extras) {
    _reporterNs.report("ThingName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcard_quality(extras) {
    _reporterNs.report("card_quality", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionAwardUpdate(extras) {
    _reporterNs.report("Evt_SectionAwardUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  _export("SectionAwardItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      path = _cc.path;
      SpriteFrame = _cc.SpriteFrame;
      Layout = _cc.Layout;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      Card = _unresolved_2.Card;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
      ThingName = _unresolved_3.ThingName;
    }, function (_unresolved_4) {
      Req = _unresolved_4.Req;
      Route = _unresolved_4.Route;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      card_quality = _unresolved_6.card_quality;
      folder_item = _unresolved_6.folder_item;
      ResMgr = _unresolved_6.ResMgr;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }, function (_unresolved_8) {
      MsgPanel = _unresolved_8.MsgPanel;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_SectionAwardUpdate = _unresolved_9.Evt_SectionAwardUpdate;
    }, function (_unresolved_10) {
      DateUtils = _unresolved_10.DateUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51b9fTRoSRFRJ0zPdvh91DC", "SectionAwardItem", undefined);

      __checkObsolete__(['Node', 'Component', 'Button', 'Sprite', 'Label', 'path', 'SpriteFrame', 'Layout', 'UITransform', 'UIOpacity']);

      _export("SectionAwardItem", SectionAwardItem = class SectionAwardItem extends Component {
        constructor() {
          super(...arguments);
          this.starCont = void 0;
          this.lineCont = void 0;
          this.awardCont = void 0;
          this.btn = void 0;
          this.bg1 = void 0;
          this.bg2 = void 0;
          this.cardBg = void 0;
          this.card = void 0;
          this.itemCont = void 0;
          this.itemIcon = void 0;
          this.itemNameLab = void 0;
          this.getImg = void 0;
          this.sectionCont = void 0;
          this.sectionIcon = void 0;
          this.sectionNameImg = void 0;
          this.canGetEffect = void 0;
          this.stdPvpLevel = void 0;
          this.isInit = false;
          this.data = void 0;
          this.resNum = 0;
        }

        onLoad() {
          this.starCont = this.node.getChildByPath("starCont");
          this.lineCont = this.node.getChildByPath("starCont/lineCont");
          this.awardCont = this.node.getChildByPath("awardCont");
          this.btn = this.node.getChildByPath("awardCont").getComponent(Button);
          this.bg1 = this.node.getChildByPath("awardCont/bg1");
          this.bg2 = this.node.getChildByPath("awardCont/bg2");
          this.cardBg = this.node.getChildByPath("awardCont/cardBg").getComponent(Sprite);
          this.card = this.node.getChildByPath("awardCont/Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.itemCont = this.node.getChildByPath("awardCont/itemCont");
          this.itemIcon = this.node.getChildByPath("awardCont/itemCont/itemIcon").getComponent(Sprite);
          this.getImg = this.node.getChildByPath("awardCont/getImg");
          this.canGetEffect = this.node.getChildByPath("awardCont/canGetEffect");
          this.itemNameLab = this.node.getChildByPath("awardCont/itemCont/itemNumLab").getComponent(Label);
          this.sectionCont = this.node.getChildByName("sectionCont");
          this.sectionIcon = this.node.getChildByPath("sectionCont/sectionIcon").getComponent(Sprite);
          this.sectionNameImg = this.node.getChildByPath("sectionCont/sectionNameImg").getComponent(Sprite);
          this.isInit = true;
          if (this.stdPvpLevel) this.updateShow();
        }

        onEnable() {
          this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SectionAwardUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardUpdate({
            error: Error()
          }), Evt_SectionAwardUpdate) : Evt_SectionAwardUpdate, this.onAwardDataUpdate, this);
        }

        onDisable() {
          this.btn.node.off(Button.EventType.CLICK, this.onBtnClick, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_SectionAwardUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardUpdate({
            error: Error()
          }), Evt_SectionAwardUpdate) : Evt_SectionAwardUpdate, this.onAwardDataUpdate, this);
        }

        onAwardDataUpdate(data) {
          if (data.rankLevelId == this.stdPvpLevel.LevelID) {
            this.updateShow();
          }
        }

        onBtnClick(btn) {
          var seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;

          if (seasonData.currentRankInfo.rankPoints < this.stdPvpLevel.LevelPoints) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("\u8FBE\u5230" + this.stdPvpLevel.LevelName + "\u53EF\u9886\u53D6");
            return;
          }

          if (this.data) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("奖励已领取");
            return;
          }

          if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime > (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCurSeasonEndTime()) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("暂时没有赛季已结束");
            return;
          }

          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["pvp.protocol.ranklevelrewardclaim"]();
          data.seasonId = seasonData.currentSeasonId;
          data.rankLevelId = this.stdPvpLevel.LevelID;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.ranklevelrewardclaim"], data);
        }

        SetData(data) {
          this.stdPvpLevel = data;
          this.updateShow();
          this.updateStar();
        }

        updateShow() {
          if (!this.isInit || !this.stdPvpLevel) return;
          this.resNum++;
          this.data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetSectionAwardData(this.stdPvpLevel.LevelID);
          this.updateAward();
          var curNum = this.resNum;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/sectionIcon", this.stdPvpLevel.LevelIcon, "spriteFrame"), SpriteFrame, res => {
            if (curNum == this.resNum) this.sectionIcon.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/sectionIcon", this.stdPvpLevel.LevelNameImg, "spriteFrame"), SpriteFrame, res => {
            if (curNum == this.resNum) this.sectionNameImg.spriteFrame = res;
          });
        }

        updateStar() {
          var seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;

          if (this.stdPvpLevel.Star > 1) {
            this.starCont.active = true;
            var starNum = this.stdPvpLevel.Star - 1;
            var node;
            var updateSize = [];
            var point = 0;

            for (var index = 0; index < this.lineCont.children.length; index++) {
              node = this.lineCont.children[index];

              if (index < starNum) {
                point = this.stdPvpLevel.LevelPoints + this.stdPvpLevel.StarPoints * (index + 1);
                node.active = true;
                var line = node.getChildByName("line");
                line.active = point <= seasonData.currentRankInfo.rankPoints;
                updateSize.push(node);
              } else {
                node.active = false;
              }
            }

            this.lineCont.getComponent(Layout).updateLayout();

            for (var _node of updateSize) {
              var width = _node.getComponent(UITransform).width;

              var _line = _node.getChildByName("line");

              _line.getComponent(UITransform).width = width;

              var bg = _node.getChildByName("lineBg");

              bg.getComponent(UITransform).width = width;
            }
          } else {
            this.starCont.active = false;
          }
        }

        updateAward() {
          var iconStr;
          var numStr = "";
          this.getImg.active = false;
          this.bg2.active = false;
          this.card.node.active = false;
          this.cardBg.node.active = false;
          this.canGetEffect.active = false;

          if (this.data) {
            this.getImg.active = true;
            iconStr = null;
            var thing = this.data.things[0];

            if (thing.card) {
              this.cardBg.node.active = true;
              this.card.node.active = true;
              this.card.SetData(thing.card);
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
                error: Error()
              }), card_quality) : card_quality, "card_bg" + thing.card.quality, "spriteFrame"), SpriteFrame, res => {
                this.itemIcon.spriteFrame = res;
              });
            } else if (thing.item) {
              var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(thing.item.id);
              iconStr = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, stdItem.Icon, "spriteFrame");
              numStr = stdItem.ItemName + "x" + thing.item.count;
            }
          } else {
            if (this.stdPvpLevel.LevelRewardTypes[0] == (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
              error: Error()
            }), ThingName) : ThingName).battlecard) {
              iconStr = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, "randomCard", "spriteFrame");
              numStr = "未知卡牌";
            } else if (this.stdPvpLevel.LevelRewardTypes[0] == (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
              error: Error()
            }), ThingName) : ThingName).item) {
              var _stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(this.stdPvpLevel.LevelRewardIds[0]);

              iconStr = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, _stdItem.Icon, "spriteFrame");
              numStr = _stdItem.ItemName + "x" + this.stdPvpLevel.LevelRewardNums[0];
            }
          }

          if (iconStr) {
            this.itemCont.active = true;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(iconStr, SpriteFrame, res => {
              this.itemIcon.spriteFrame = res;
            });
            this.itemNameLab.string = numStr ? numStr.toString() : "";
          } else {
            this.itemCont.active = false;
          }

          var seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData; //seasonData.rankInfo.rankPoints = 53

          if (this.data || seasonData.currentRankInfo.rankPoints >= this.stdPvpLevel.LevelPoints) {
            this.itemNameLab.color.fromHEX("#77E6EA");
            this.bg1.active = true;
            this.cardBg.getComponent(UIOpacity).opacity = 255;
            this.itemCont.getComponent(UIOpacity).opacity = 255;
            this.sectionCont.getComponent(UIOpacity).opacity = 255;

            if (!this.data) {
              this.canGetEffect.active = true;
            }
          } else {
            this.cardBg.getComponent(UIOpacity).opacity = 127;
            this.itemCont.getComponent(UIOpacity).opacity = 168;
            this.sectionCont.getComponent(UIOpacity).opacity = 168;
            this.bg2.active = true;
            this.itemNameLab.color.fromHEX("#FFFFFF");
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75bd1c2c27a04994341a3025002ae0b4bf77ad84.js.map