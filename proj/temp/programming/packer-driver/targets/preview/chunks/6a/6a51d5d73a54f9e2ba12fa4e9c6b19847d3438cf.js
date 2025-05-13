System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, EditBox, Label, ProgressBar, Sprite, path, SpriteFrame, v3, CardGroupCoverItem, CfgMgr, proto, PlayerData, DateUtils, EventMgr, Evt_SectionUpdate, Evt_Set_Battle_Card_Group_Update, MsgPanel, ResMgr, Goto, VSSeasonPage, _crd;

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "../common/CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPvpLevel(extras) {
    _reporterNs.report("StdPvpLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionUpdate(extras) {
    _reporterNs.report("Evt_SectionUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Set_Battle_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  _export("VSSeasonPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      path = _cc.path;
      SpriteFrame = _cc.SpriteFrame;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      CardGroupCoverItem = _unresolved_2.CardGroupCoverItem;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      proto = _unresolved_4.default;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      DateUtils = _unresolved_6.DateUtils;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
      Evt_SectionUpdate = _unresolved_7.Evt_SectionUpdate;
      Evt_Set_Battle_Card_Group_Update = _unresolved_7.Evt_Set_Battle_Card_Group_Update;
    }, function (_unresolved_8) {
      MsgPanel = _unresolved_8.MsgPanel;
    }, function (_unresolved_9) {
      ResMgr = _unresolved_9.ResMgr;
    }, function (_unresolved_10) {
      Goto = _unresolved_10.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1d59NoBO5EYrbAggUmRbdW", "VSSeasonPage", undefined);

      __checkObsolete__(['Node', 'Button', 'Component', 'EditBox', 'Label', 'ProgressBar', 'Sprite', 'path', 'SpriteFrame', 'v3']);

      _export("VSSeasonPage", VSSeasonPage = class VSSeasonPage extends Component {
        constructor() {
          super(...arguments);
          this.battleLogBtn = void 0;
          this.awardBtn = void 0;
          this.sectionIcon = void 0;
          this.sectionNameImg = void 0;
          this.starCont = void 0;
          this.maxStarCont = void 0;
          this.maxStarNumLab = void 0;
          this.expNumCont = void 0;
          this.expLineBg = void 0;
          this.curNumLab = void 0;
          this.maxNumLab = void 0;
          this.pro = void 0;
          this.vsBtn = void 0;
          this.cardGroupBtn = void 0;
          this.cardGroupCoverItem = void 0;
          this.nameImg = void 0;
          this.timeLab = void 0;
          this.curStdPVPSnatch = void 0;
          this.curStdPvpLv = void 0;
          this.seasonData = void 0;
          this.curStar = void 0;
          this.maxStar = void 0;
          this.cardGroupData = void 0;
          this.changeBtn = void 0;
          this.addBtn = void 0;
          this.subBtn = void 0;
          this.EditBox = void 0;
        }

        onLoad() {
          this.battleLogBtn = this.node.getChildByPath("btnCont/battleLogBtn").getComponent(Button);
          this.awardBtn = this.node.getChildByPath("btnCont/awardBtn").getComponent(Button);
          this.sectionIcon = this.node.getChildByPath("sectionCont/sectionIcon").getComponent(Sprite);
          this.sectionNameImg = this.node.getChildByPath("sectionCont/sectionNameImg").getComponent(Sprite);
          this.expNumCont = this.node.getChildByPath("sectionCont/expCont");
          this.expLineBg = this.node.getChildByPath("sectionCont/expCont/expLineBg");
          this.curNumLab = this.node.getChildByPath("sectionCont/expCont/numCont/curNumLab").getComponent(Label);
          this.maxNumLab = this.node.getChildByPath("sectionCont/expCont/numCont/maxNumLab").getComponent(Label);
          this.starCont = this.node.getChildByPath("sectionCont/starCont");
          this.maxStarCont = this.node.getChildByPath("sectionCont/maxStarCont");
          this.maxStarNumLab = this.node.getChildByPath("sectionCont/maxStarCont/maxStarNumLab").getComponent(Label);
          this.pro = this.node.getChildByPath("sectionCont/pro").getComponent(ProgressBar);
          this.vsBtn = this.node.getChildByPath("vsBtn").getComponent(Button);
          this.cardGroupBtn = this.node.getChildByPath("cardGroupBtn").getComponent(Button);
          this.cardGroupCoverItem = this.node.getChildByPath("cardGroupBtn/CardGroupCoverItem").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.changeBtn = this.node.getChildByPath("changeBtn").getComponent(Button);
          this.addBtn = this.node.getChildByPath("addBtn").getComponent(Button);
          this.subBtn = this.node.getChildByPath("subBtn").getComponent(Button);
          this.EditBox = this.node.getChildByPath("EditBox").getComponent(EditBox);
          this.nameImg = this.node.getChildByPath("topRightCont/nameImg").getComponent(Sprite);
          this.timeLab = this.node.getChildByPath("topRightCont/timeCont/timeLab").getComponent(Label);
          this.battleLogBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.awardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.cardGroupBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.vsBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.changeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.addBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.subBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Set_Battle_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update({
            error: Error()
          }), Evt_Set_Battle_Card_Group_Update) : Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SectionUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionUpdate({
            error: Error()
          }), Evt_SectionUpdate) : Evt_SectionUpdate, this.onSectionUpdate, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Set_Battle_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update({
            error: Error()
          }), Evt_Set_Battle_Card_Group_Update) : Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_SectionUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionUpdate({
            error: Error()
          }), Evt_SectionUpdate) : Evt_SectionUpdate, this.onSectionUpdate, this);
        }

        update(dt) {
          if (this.curStdPVPSnatch) {
            var openTime = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCurSeasonOpenTime();

            if (openTime > 0) {
              var endTime = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCurSeasonEndTime();

              if (endTime > 0) {
                var residueTime = endTime - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).ServerTime;
                var day = Math.floor(residueTime / 86400);

                if (day >= 1) {
                  this.timeLab.string = day + "\u5929" + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                    error: Error()
                  }), DateUtils) : DateUtils).FormatTime(residueTime - day * 86400, "%{hh}:%{mm}:%{ss}");
                } else {
                  if (residueTime > 0) {
                    this.timeLab.string = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                      error: Error()
                    }), DateUtils) : DateUtils).FormatTime(residueTime, "%{hh}:%{mm}:%{ss}");
                  } else {
                    this.timeLab.string = "赛季已结束";
                  }
                }
              } else {
                this.timeLab.string = "赛季未开启";
              }
            } else {
              this.timeLab.string = "赛季未开启";
            }
          }
        }

        Show() {
          this.node.active = true;
          this.initShow();
        }

        Hide() {
          this.node.active = false;
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.battleLogBtn:
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSSeasonFightLogPanel");
              break;

            case this.awardBtn:
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSSectionAwardPanel");
              break;

            case this.cardGroupBtn:
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSCardGroupPanel");
              break;

            case this.vsBtn:
              if (!this.cardGroupData) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("未设置战斗卡组不可对战");
                return;
              }

              if (this.cardGroupData.size < (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).CardGuroupComm.DeckFullSize) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("\u5361\u7EC4\u5361\u724C\u6570\u91CF\u4E0D\u8DB3" + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).CardGuroupComm.DeckFullSize + "\u5F20");
                return;
              }

              if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurSeasonData || (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId == 0) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("暂时没有赛季进行中");
                return;
              }

              if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime > (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCurSeasonEndTime()) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("赛季已结束");
                return;
              }

              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSPanel", (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleMode.BattleModeRank);
              break;

            case this.changeBtn:
              var num = Number(this.EditBox.string);
              if (isNaN(num)) return;
              this.seasonData.currentRankInfo.rankPoints = num;
              this.updateSection();
              break;

            case this.addBtn:
              var num1 = this.seasonData.currentRankInfo.rankPoints + 1;
              this.seasonData.currentRankInfo.rankPoints = num1;
              this.updateSection();
              break;

            case this.subBtn:
              var num2 = this.seasonData.currentRankInfo.rankPoints - 1;
              this.seasonData.currentRankInfo.rankPoints = num2;
              this.updateSection();
              break;

            default:
              break;
          }
        }

        onSetCardGroup() {
          this.updateCardGroup();
        }

        onSectionUpdate() {
          this.updateSection();
        }

        updateCardGroup() {
          this.cardGroupData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurFightCardGroup;
          this.cardGroupCoverItem.SetData(this.cardGroupData, false);
        }

        initShow() {
          this.updateCardGroup();
          this.updateSection();
        }

        updateSection() {
          this.seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;

          if (this.seasonData) {
            this.curStdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.seasonData.currentSeasonId);

            if (!this.curStdPVPSnatch) {
              return;
            }

            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/vs", "" + this.curStdPVPSnatch.View, "spriteFrame"), SpriteFrame, res => {
              this.nameImg.spriteFrame = res;
            });
          } else {
            return;
          }

          this.EditBox.string = this.seasonData.currentRankInfo.rankPoints.toString();
          this.curStdPvpLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.seasonData.currentRankInfo.rankPoints);
          var point = Math.max(this.seasonData.currentRankInfo.rankPoints - this.curStdPvpLv.LevelPoints, 0);
          this.curStar = Math.floor(point / this.curStdPvpLv.StarPoints);
          this.maxStar = this.curStdPvpLv.Star - 1;

          if (this.curStdPvpLv.Star == 1) {
            this.starCont.active = false;
            this.expLineBg.active = false;
            this.maxStarCont.active = true;
            this.maxStarNumLab.string = "x " + this.curStar;
            this.expNumCont.position = v3(296, -268, 0);
            var starNode = this.maxStarCont.getChildByName("star");
            var bright = starNode.getChildByName("bright");
            bright.active = this.curStar > 0;
          } else {
            this.maxStarCont.active = false;
            this.expLineBg.active = true;
            this.starCont.active = true;
            this.expNumCont.position = v3(0, -194, 0);

            for (var index = 0; index < this.starCont.children.length; index++) {
              var _starNode = this.starCont.children[index];

              if (index < this.maxStar) {
                _starNode.active = true;

                var _bright = _starNode.getChildByName("bright");

                _bright.active = this.curStar > index;
              } else {
                _starNode.active = false;
              }
            }
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/sectionIcon", this.curStdPvpLv.LevelIcon, "spriteFrame"), SpriteFrame, res => {
            this.sectionIcon.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/sectionIcon", this.curStdPvpLv.LevelNameImg, "spriteFrame"), SpriteFrame, res => {
            this.sectionNameImg.spriteFrame = res;
          });
          var curExp = point % this.curStdPvpLv.StarPoints;
          var mapExp = this.curStdPvpLv.StarPoints;
          this.curNumLab.string = curExp.toString();
          this.maxNumLab.string = mapExp.toString();
          this.pro.progress = curExp / mapExp;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a51d5d73a54f9e2ba12fa4e9c6b19847d3438cf.js.map