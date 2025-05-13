System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, path, Sprite, SpriteFrame, CfgMgr, Panel, VList, PlayerData, DateUtils, proto, Req, Route, folder_icon, ResMgr, CardGroupCoverItem, Session, EventMgr, Evt_SeasonFightLog, VSSectionFightLogItem, VSFightLogCardItem, VSSeasonFightLogPanel, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPvpLevel(extras) {
    _reporterNs.report("StdPvpLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
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

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "../common/CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SeasonFightLog(extras) {
    _reporterNs.report("Evt_SeasonFightLog", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSSectionFightLogItem(extras) {
    _reporterNs.report("VSSectionFightLogItem", "./VSSectionFightLogItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSFightLogCardItem(extras) {
    _reporterNs.report("VSFightLogCardItem", "./VSFightLogCardItem", _context.meta, extras);
  }

  _export("VSSeasonFightLogPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      VList = _unresolved_4.VList;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      DateUtils = _unresolved_6.DateUtils;
    }, function (_unresolved_7) {
      proto = _unresolved_7.default;
      Req = _unresolved_7.Req;
      Route = _unresolved_7.Route;
    }, function (_unresolved_8) {
      folder_icon = _unresolved_8.folder_icon;
      ResMgr = _unresolved_8.ResMgr;
    }, function (_unresolved_9) {
      CardGroupCoverItem = _unresolved_9.CardGroupCoverItem;
    }, function (_unresolved_10) {
      Session = _unresolved_10.Session;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
      Evt_SeasonFightLog = _unresolved_11.Evt_SeasonFightLog;
    }, function (_unresolved_12) {
      VSSectionFightLogItem = _unresolved_12.VSSectionFightLogItem;
    }, function (_unresolved_13) {
      VSFightLogCardItem = _unresolved_13.VSFightLogCardItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e43feojSmlIJqLgjNKBMV/n", "VSSeasonFightLogPanel", undefined);

      __checkObsolete__(['Node', 'Label', 'path', 'Sprite', 'SpriteFrame']);

      _export("VSSeasonFightLogPanel", VSSeasonFightLogPanel = class VSSeasonFightLogPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/vs/VSSeasonFightLogPanel";
          this.logList = void 0;
          this.nameImg = void 0;
          this.timeLab = void 0;
          this.curStdPVPSnatch = void 0;
          this.curStdPvpLv = void 0;
          this.seasonData = void 0;
          this.playerHeadA = void 0;
          this.playerNameA = void 0;
          this.playerHeadB = void 0;
          this.playerNameB = void 0;
          this.resultImg = void 0;
          this.pointLab = void 0;
          this.cardGroupA = void 0;
          this.cardListA = void 0;
          this.cardGroupB = void 0;
          this.cardListB = void 0;
          this.logDatas = void 0;
          this.playerDataA = void 0;
          this.playerDataB = void 0;
        }

        onLoad() {
          this.logList = this.find("logList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.logList.updateCell = this.updateCellLog.bind(this);
          this.logList.selectCell = this.selectCellLog.bind(this);
          this.logList.clickCell = this.clickCellLog.bind(this);
          this.nameImg = this.find("nameImg", Sprite);
          this.timeLab = this.find("timeCont/timeLab", Label);
          this.playerHeadA = this.find("vsCont/topCont/playerContA/head", Sprite);
          this.playerNameA = this.find("vsCont/topCont/playerContA/nameLab", Label);
          this.playerHeadB = this.find("vsCont/topCont/playerContB/head", Sprite);
          this.playerNameB = this.find("vsCont/topCont/playerContB/nameLab", Label);
          this.resultImg = this.find("vsCont/topCont/resultImg", Sprite);
          this.pointLab = this.find("vsCont/topCont/pointLab", Label);
          this.cardGroupA = this.find("vsCont/cardGroupCoverItemA").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.cardListA = this.find("vsCont/cardListA", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardListA.updateCell = this.updateCellCardA.bind(this);
          this.cardListA.clickCell = this.clickCellCardA.bind(this);
          this.cardGroupB = this.find("vsCont/cardGroupCoverItemB").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.cardListB = this.find("vsCont/cardListB", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardListB.updateCell = this.updateCellCardB.bind(this);
          this.cardListB.clickCell = this.clickCellCardB.bind(this);
          this.CloseBy("closeBtn");
        }

        update(dt) {
          if (this.curStdPVPSnatch) {
            let openTime = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCurSeasonOpenTime();

            if (openTime > 0) {
              let endTime = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCurSeasonEndTime();

              if (endTime > 0) {
                let residueTime = endTime - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).ServerTime;
                let day = Math.floor(residueTime / 86400);

                if (day >= 1) {
                  this.timeLab.string = `${day}天` + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
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
          this.updateSection();
        }

        onShow() {
          this.onLogUpdate();
          let sendData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["pvp.protocol.getpvprankbattlerecords"]();
          sendData.start = 0;
          sendData.limit = 20;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["pvp.protocol.getpvprankbattlerecords"], sendData);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SeasonFightLog === void 0 ? (_reportPossibleCrUseOfEvt_SeasonFightLog({
            error: Error()
          }), Evt_SeasonFightLog) : Evt_SeasonFightLog, this.onLogUpdate, this);
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SeasonFightLog === void 0 ? (_reportPossibleCrUseOfEvt_SeasonFightLog({
            error: Error()
          }), Evt_SeasonFightLog) : Evt_SeasonFightLog, this.onLogUpdate, this);
        }

        onLogUpdate(logList) {
          this.logDatas = logList || [];
          this.logList.cellCount = this.logDatas.length;
        }

        updateSection() {
          this.seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;
          this.curStdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.seasonData.currentSeasonId);
          this.curStdPvpLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.seasonData.currentRankInfo.rankPoints);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/sectionIcon", this.curStdPvpLv.LevelNameImg, "spriteFrame"), SpriteFrame, res => {
            this.nameImg.spriteFrame = res;
          });
        }

        clickCellLog(cell, cellInfo) {}

        updateCellLog(cell, cellInfo) {
          let logData = this.logDatas[cellInfo.index];
          cell.getChildByPath("select").active = cellInfo.isSelect;
          let logItem = cell.getComponent(_crd && VSSectionFightLogItem === void 0 ? (_reportPossibleCrUseOfVSSectionFightLogItem({
            error: Error()
          }), VSSectionFightLogItem) : VSSectionFightLogItem) || cell.addComponent(_crd && VSSectionFightLogItem === void 0 ? (_reportPossibleCrUseOfVSSectionFightLogItem({
            error: Error()
          }), VSSectionFightLogItem) : VSSectionFightLogItem);
          logItem.SetData(logData);
        }

        selectCellLog(cell, cellInfo, lastCell, lastInfo) {
          if (cell) {
            cell.getChildByPath("select").active = cellInfo.isSelect;
          }

          if (lastCell && lastInfo) {
            lastCell.getChildByPath("select").active = lastInfo.isSelect;
          }

          this.selectLog(this.logDatas[cellInfo.index]);
        }

        updateCellCardA(cell, cellInfo) {
          let cardData = this.playerDataA.cards[cellInfo.index];
          let logCardItem = cell.getComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem) || cell.addComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem);
          logCardItem.SetData(cardData);
        }

        clickCellCardA(cell, cellInfo) {}

        updateCellCardB(cell, cellInfo) {
          let cardData = this.playerDataB.cards[cellInfo.index];
          let logCardItem = cell.getComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem) || cell.addComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem);
          logCardItem.SetData(cardData);
        }

        clickCellCardB(cell, cellInfo) {}

        selectLog(data) {
          for (let key in data.battlePlayers) {
            let playerData = data.battlePlayers[key];

            if (playerData.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).UserInfo.playerId) {
              this.playerDataA = playerData;
            } else {
              this.playerDataB = playerData;
            }
          }

          this.pointLab.string = data.pointChange >= 0 ? `+${data.pointChange}` : `-${data.pointChange}`;
          let imgStr;

          if (data.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultWin) {
            imgStr = "win";
          } else if (data.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultLost) {
            imgStr = "lost";
          } else if (data.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultTie) {
            imgStr = "draw";
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/vs", imgStr, "spriteFrame"), SpriteFrame, res => {
            this.resultImg.spriteFrame = res;
          });
          this.updatePlayerData(this.playerDataA, this.playerNameA, this.playerHeadA, this.cardGroupA, this.cardListA);
          this.updatePlayerData(this.playerDataB, this.playerNameB, this.playerHeadB, this.cardGroupB, this.cardListB);
        }

        updatePlayerData(playerData, nameLab, head, cardGroupItem, cardList) {
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetHead(playerData.deckAttrs.avatarId);
          let headIconUrl;

          if (cfg) {
            headIconUrl = cfg.icon;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
              head.spriteFrame = res;
            });
          }

          nameLab.string = playerData.name;
          cardGroupItem.SetData(playerData.deckAttrs, false);
          cardList.cellCount = playerData.cards.length;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7adc6774041c375d38f37c1d9e6161cf7af7f1e9.js.map