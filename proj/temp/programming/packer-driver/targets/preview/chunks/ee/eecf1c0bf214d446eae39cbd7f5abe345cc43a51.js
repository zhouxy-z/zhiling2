System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Sprite, ProgressBar, path, SpriteFrame, v3, EditBox, Panel, CardGroupCoverItem, PlayerData, Req, Route, CfgMgr, MsgPanel, VSPanel, ResMgr, VList, SeasonCardGruopItem, Session, EventMgr, Evt_SectionUpdate, Evt_Set_Battle_Card_Group_Update, SectionAwardPanel, DateUtils, SeasonFightLogPanel, SeasonPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "../common/CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
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

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPvpLevel(extras) {
    _reporterNs.report("StdPvpLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSPanel(extras) {
    _reporterNs.report("VSPanel", "../vs/VSPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSeasonCardGruopItem(extras) {
    _reporterNs.report("SeasonCardGruopItem", "./SeasonCardGruopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
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

  function _reportPossibleCrUseOfSectionAwardPanel(extras) {
    _reporterNs.report("SectionAwardPanel", "./SectionAwardPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSeasonFightLogPanel(extras) {
    _reporterNs.report("SeasonFightLogPanel", "./SeasonFightLogPanel", _context.meta, extras);
  }

  _export("SeasonPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      ProgressBar = _cc.ProgressBar;
      path = _cc.path;
      SpriteFrame = _cc.SpriteFrame;
      v3 = _cc.v3;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      CardGroupCoverItem = _unresolved_3.CardGroupCoverItem;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      Req = _unresolved_5.Req;
      Route = _unresolved_5.Route;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
    }, function (_unresolved_7) {
      MsgPanel = _unresolved_7.MsgPanel;
    }, function (_unresolved_8) {
      VSPanel = _unresolved_8.VSPanel;
    }, function (_unresolved_9) {
      ResMgr = _unresolved_9.ResMgr;
    }, function (_unresolved_10) {
      VList = _unresolved_10.VList;
    }, function (_unresolved_11) {
      SeasonCardGruopItem = _unresolved_11.SeasonCardGruopItem;
    }, function (_unresolved_12) {
      Session = _unresolved_12.Session;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
      Evt_SectionUpdate = _unresolved_13.Evt_SectionUpdate;
      Evt_Set_Battle_Card_Group_Update = _unresolved_13.Evt_Set_Battle_Card_Group_Update;
    }, function (_unresolved_14) {
      SectionAwardPanel = _unresolved_14.SectionAwardPanel;
    }, function (_unresolved_15) {
      DateUtils = _unresolved_15.DateUtils;
    }, function (_unresolved_16) {
      SeasonFightLogPanel = _unresolved_16.SeasonFightLogPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "226d5IXYktMqI1V1fyHvLRT", "SeasonPanel", undefined);

      __checkObsolete__(['Node', 'Button', 'Label', 'Sprite', 'ProgressBar', 'path', 'SpriteFrame', 'v3', 'EditBox']);

      _export("SeasonPanel", SeasonPanel = class SeasonPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/season/SeasonPanel";
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
          this.cardGroupCont = void 0;
          this.cardGroupMask = void 0;
          this.cardGroupCloseBtn = void 0;
          this.cardGroupList = void 0;
          this.nameImg = void 0;
          this.timeLab = void 0;
          this.curStdPVPSnatch = void 0;
          this.curStdPvpLv = void 0;
          this.seasonData = void 0;
          this.curStar = void 0;
          this.maxStar = void 0;
          this.cardGroupData = void 0;
          this.cardGroupDataList = void 0;
          this.changeBtn = void 0;
          this.addBtn = void 0;
          this.subBtn = void 0;
          this.EditBox = void 0;
        }

        onLoad() {
          this.battleLogBtn = this.find("btnCont/battleLogBtn", Button);
          this.awardBtn = this.find("btnCont/awardBtn", Button);
          this.sectionIcon = this.find("sectionCont/sectionIcon", Sprite);
          this.sectionNameImg = this.find("sectionCont/sectionNameImg", Sprite);
          this.expNumCont = this.find("sectionCont/expCont");
          this.expLineBg = this.find("sectionCont/expCont/expLineBg");
          this.curNumLab = this.find("sectionCont/expCont/numCont/curNumLab", Label);
          this.maxNumLab = this.find("sectionCont/expCont/numCont/maxNumLab", Label);
          this.starCont = this.find("sectionCont/starCont");
          this.maxStarCont = this.find("sectionCont/maxStarCont");
          this.maxStarNumLab = this.find("sectionCont/maxStarCont/maxStarNumLab", Label);
          this.pro = this.find("sectionCont/pro", ProgressBar);
          this.vsBtn = this.find("vsBtn", Button);
          this.cardGroupBtn = this.find("cardGroupBtn", Button);
          this.cardGroupCoverItem = this.find("cardGroupBtn/CardGroupCoverItem").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.cardGroupCont = this.find("cardGroupCont");
          this.cardGroupMask = this.find("cardGroupCont/mask", Button);
          this.cardGroupCloseBtn = this.find("cardGroupCont/cont/closeBtn", Button);
          this.cardGroupList = this.find("cardGroupCont/cont/cardGroupList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardGroupList.updateCell = this.updateCardGroupCell.bind(this);
          this.cardGroupList.clickCell = this.cardGroupClick.bind(this);
          this.changeBtn = this.find("changeBtn", Button);
          this.addBtn = this.find("addBtn", Button);
          this.subBtn = this.find("subBtn", Button);
          this.EditBox = this.find("EditBox", EditBox);
          this.nameImg = this.find("topRightCont/nameImg", Sprite);
          this.timeLab = this.find("topRightCont/timeCont/timeLab", Label); //this.cardGroupList.selectCell = this.selectCardGroupCell.bind(this);

          this.CloseBy("closeBtn");
          this.battleLogBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.awardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.cardGroupBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.vsBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.cardGroupCloseBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.cardGroupMask.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.changeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.addBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.subBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
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

        flush() {
          this.cardGroupCont.active = false;
          this.updateCardGroup();
          this.initShow();
        }

        onShow() {
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

        onHide() {
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

        onBtnClick(btn) {
          switch (btn) {
            case this.battleLogBtn:
              (_crd && SeasonFightLogPanel === void 0 ? (_reportPossibleCrUseOfSeasonFightLogPanel({
                error: Error()
              }), SeasonFightLogPanel) : SeasonFightLogPanel).Show();
              break;

            case this.awardBtn:
              (_crd && SectionAwardPanel === void 0 ? (_reportPossibleCrUseOfSectionAwardPanel({
                error: Error()
              }), SectionAwardPanel) : SectionAwardPanel).Show();
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
                }), MsgPanel) : MsgPanel).Show("暂时没有赛季已结束");
                return;
              }

              (_crd && VSPanel === void 0 ? (_reportPossibleCrUseOfVSPanel({
                error: Error()
              }), VSPanel) : VSPanel).Show();
              break;

            case this.cardGroupMask:
            case this.cardGroupCloseBtn:
              this.cardGroupCont.active = false;
              break;

            case this.cardGroupBtn:
              this.showCardGroup();
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
          this.initShow();
        }

        updateCardGroup() {
          this.cardGroupDataList = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList;
          this.cardGroupData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurFightCardGroup;
          this.cardGroupCoverItem.SetData(this.cardGroupData, false);

          if (this.cardGroupCont.active) {
            this.showCardGroup();
          }
        }

        initShow() {
          this.seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;

          if (this.seasonData) {
            this.curStdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.seasonData.currentSeasonId);

            if (!this.curStdPVPSnatch) {
              this.Hide();
              return;
            }

            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/season", "" + this.curStdPVPSnatch.View, "spriteFrame"), SpriteFrame, res => {
              this.nameImg.spriteFrame = res;
            });
          } else {
            this.Hide();
            return;
          }

          this.updateSection();
        }

        updateSection() {
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

        showCardGroup() {
          this.cardGroupCont.active = true;
          this.cardGroupList.cellCount = this.cardGroupDataList.length;
          var defSelectIndex = 0;

          for (var index = 0; index < this.cardGroupDataList.length; index++) {
            var data = this.cardGroupDataList[index];

            if (this.cardGroupData && data.id == this.cardGroupData.id) {
              defSelectIndex = index;
              break;
            }
          }

          this.cardGroupList.selectIndex(defSelectIndex);
        }

        cardGroupClick(cell, cellInfo) {
          var cardGroupData = this.cardGroupDataList[cellInfo.index];
          /* if (cardGroupData.size < CfgMgr.CardGuroupComm.DeckFullSize) {
              MsgPanel.Show(`卡组卡牌数量不足${CfgMgr.CardGuroupComm.DeckFullSize}张无法出战`);
              return;
          } */

          var set = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["logic.protocol.setdeckdefault"]();
          set.deckId = cardGroupData.id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setdeckdefault"], set);
          this.cardGroupCont.active = false;
        }

        updateCardGroupCell(cell, cellInfo) {
          var cellCom = cell.getComponent(_crd && SeasonCardGruopItem === void 0 ? (_reportPossibleCrUseOfSeasonCardGruopItem({
            error: Error()
          }), SeasonCardGruopItem) : SeasonCardGruopItem) || cell.addComponent(_crd && SeasonCardGruopItem === void 0 ? (_reportPossibleCrUseOfSeasonCardGruopItem({
            error: Error()
          }), SeasonCardGruopItem) : SeasonCardGruopItem);
          cellCom.SetData(this.cardGroupDataList[cellInfo.index]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eecf1c0bf214d446eae39cbd7f5abe345cc43a51.js.map