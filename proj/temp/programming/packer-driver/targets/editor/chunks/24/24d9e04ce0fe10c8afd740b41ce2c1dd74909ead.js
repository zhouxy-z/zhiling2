System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Label, VList, Panel, PlayerData, LocalStorage, FightLogItem, Req, Route, Session, EventMgr, Evt_BattleLogGet, Evt_BattleLogInfo, MsgPanel, FightLogPanel, _crd;

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLogItem(extras) {
    _reporterNs.report("FightLogItem", "./FightLogItem", _context.meta, extras);
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

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleLogGet(extras) {
    _reporterNs.report("Evt_BattleLogGet", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleLogInfo(extras) {
    _reporterNs.report("Evt_BattleLogInfo", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  _export("FightLogPanel", void 0);

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
      VList = _unresolved_2.VList;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      LocalStorage = _unresolved_5.default;
    }, function (_unresolved_6) {
      FightLogItem = _unresolved_6.FightLogItem;
    }, function (_unresolved_7) {
      Req = _unresolved_7.Req;
      Route = _unresolved_7.Route;
    }, function (_unresolved_8) {
      Session = _unresolved_8.Session;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_BattleLogGet = _unresolved_9.Evt_BattleLogGet;
      Evt_BattleLogInfo = _unresolved_9.Evt_BattleLogInfo;
    }, function (_unresolved_10) {
      MsgPanel = _unresolved_10.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e351855ADRAApUmcEl+4eaM", "FightLogPanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'Label', 'Node']);

      _export("FightLogPanel", FightLogPanel = class FightLogPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/fight/FightLogPanel";
          this.logList = void 0;
          this.btn = void 0;
          this.closeBtn = void 0;
          this.editBox = void 0;
          this.logInfoCont = void 0;
          this.maxRoundLab = void 0;
          this.versionLab = void 0;
          this.completeLab = void 0;
          this.roomIdLab = void 0;
          this.waitSecondLab = void 0;
          this.aiWaitSecondLab = void 0;
          this.areaIdLab = void 0;
          this.buildInfoLab = void 0;
          this.infoBtn = void 0;
          this.logicInfoBtn = void 0;
          this.infoCloseBtn = void 0;
          this.playList = void 0;
          this.logDatas = void 0;
          this.curSelectData = void 0;
          this.selectPlayer = void 0;
        }

        onLoad() {
          this.logList = this.find("logList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);

          this.logList.updateCell = (cell, cellInfo) => {
            let logData = this.logDatas[cellInfo.index];
            let cellItem = cell.getComponent(_crd && FightLogItem === void 0 ? (_reportPossibleCrUseOfFightLogItem({
              error: Error()
            }), FightLogItem) : FightLogItem) || cell.addComponent(_crd && FightLogItem === void 0 ? (_reportPossibleCrUseOfFightLogItem({
              error: Error()
            }), FightLogItem) : FightLogItem);
            cellItem.SetData(logData);
          };

          this.btn = this.find("btn", Button);
          this.closeBtn = this.find("closeBtn", Button);
          this.editBox = this.find("editBox", EditBox);
          this.logInfoCont = this.find("logInfoCont");
          this.maxRoundLab = this.find("logInfoCont/maxRoundLab", Label);
          this.versionLab = this.find("logInfoCont/versionLab", Label);
          this.completeLab = this.find("logInfoCont/completeLab", Label);
          this.roomIdLab = this.find("logInfoCont/roomIdLab", EditBox);
          this.waitSecondLab = this.find("logInfoCont/waitSecondLab", Label);
          this.aiWaitSecondLab = this.find("logInfoCont/aiWaitSecondLab", Label);
          this.areaIdLab = this.find("logInfoCont/areaIdLab", Label);
          this.buildInfoLab = this.find("logInfoCont/buildInfoLab", Label);
          this.infoBtn = this.find("logInfoCont/infoBtn", Button);
          this.logicInfoBtn = this.find("logInfoCont/logicInfoBtn", Button);
          this.infoCloseBtn = this.find("logInfoCont/infoCloseBtn", Button);
          this.playList = this.find("logInfoCont/playList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);

          this.playList.updateCell = (cell, cellInfo) => {
            let playerData = this.curSelectData.createContext.players[cellInfo.index];
            cell.getChildByName("playerIdLab").getComponent(Label).string = "玩家id：" + playerData.playerId;
            cell.getChildByName("playerIdNameLab").getComponent(Label).string = "玩家名称：" + playerData.name;
            cell.getChildByName("levelLab").getComponent(Label).string = "玩家等级：" + playerData.level;
            cell.getChildByName("isAiLab").getComponent(Label).string = "是否AI：" + playerData.isAi + " AIId：" + playerData.aiGroupId;
            cell.getChildByName("deckIdLab").getComponent(Label).string = "卡组id：" + playerData.playerId;
            let cardIdStr = "卡牌id：";

            for (let index = 0; index < playerData.cards.length; index++) {
              const card = playerData.cards[index];
              cardIdStr += card.cardId;
              cardIdStr += "、";
            }

            cell.getChildByName("cardIdLab").getComponent(Label).string = "卡组id：" + cardIdStr;
            cell.getChildByName("select").active = cellInfo.isSelect;

            if (cellInfo.isSelect) {
              this.selectPlayer = this.curSelectData.createContext.players[cellInfo.index];
            }
          };

          this.playList.selectCell = (cell, cellInfo, lastCell, lastInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            this.selectPlayer = this.curSelectData.createContext.players[cellInfo.index];
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
          };

          this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.infoBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.infoCloseBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.logicInfoBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        flush(...args) {
          this.editBox.string = "";
          this.logInfoCont.active = false;
          this.selectPlayer = null;
          this.curSelectData = null;
        }

        onShow() {
          this.logDatas = [];
          this.logList.cellCount = 0;
          let key = `battleLog_${(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId}`;
          let datas = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetObject(key);

          if (datas) {
            for (let index = 0; index < datas.length; index++) {
              const element = datas[index];
              this.logDatas.push({
                roomId: element.roomId,
                createTime: (element == null ? void 0 : element.createTime) || 0,
                playerId: (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).player.playerId
              });
            }
          }

          this.logDatas.sort((a, b) => {
            return b.createTime - a.createTime;
          });
          this.logList.cellCount = this.logDatas.length; // let data = new Req["battle_mgr.protocol.getbattlerecentrecords"]();
          // data.count = 1;
          //Session.Send(data);

          console.log("发送获取战报记录---->");
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_BattleLogGet === void 0 ? (_reportPossibleCrUseOfEvt_BattleLogGet({
            error: Error()
          }), Evt_BattleLogGet) : Evt_BattleLogGet, this.onUpdateBattleLog, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_BattleLogInfo === void 0 ? (_reportPossibleCrUseOfEvt_BattleLogInfo({
            error: Error()
          }), Evt_BattleLogInfo) : Evt_BattleLogInfo, this.onBattleLogInfo, this);
        }

        onHide(...args) {}

        onUpdateBattleLog(list) {
          this.logDatas = list;
          this.logList.cellCount = this.logDatas.length;
        }

        onBattleLogInfo(logData) {
          for (const key in logData) {
            this.curSelectData = logData[key];
            break;
          }

          if (!this.curSelectData) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("战报异常");
            return;
          }

          this.logInfoCont.active = true;
          this.maxRoundLab.string = `最大回合数：${this.curSelectData.roundTotal}`;
          this.versionLab.string = `回放版本号：${this.curSelectData.version}`;
          this.completeLab.string = `是否正常结束：${this.curSelectData.isComplete}`;
          this.roomIdLab.string = `${this.curSelectData.createContext.roomId}`;
          this.waitSecondLab.string = `等待输入时长：${this.curSelectData.createContext.waitSecond}`;
          this.aiWaitSecondLab.string = `AI等待输入时长：${this.curSelectData.createContext.aiWaitSecond}`;
          this.areaIdLab.string = `地形配置id：${this.curSelectData.createContext.areaIds}`;
          this.buildInfoLab.string = `构建信息：${this.curSelectData.buildInfo}`;
          this.playList.cellCount = this.curSelectData.createContext.players.length;
          this.playList.selectIndex(0);
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.closeBtn:
              this.Hide();
              break;

            case this.btn:
              let roomId;

              if (this.editBox.string && this.editBox.string.length > 0) {
                roomId = this.editBox.string;
                let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["battle_mgr.protocol.getbattlereplayroom"]();
                data.roomId = [roomId];
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["battle_mgr.protocol.getbattlereplayroom"], data);
                console.log("发送获取战报详情---->");
              }

              break;

            case this.infoBtn:
              if (this.curSelectData && this.selectPlayer) {
                let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["battle_mgr.protocol.createbattlereplayroom"]();
                data.replayRoomId = this.curSelectData.createContext.roomId;
                data.beginRound = 1;
                data.viewPlayerId = this.selectPlayer.playerId;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["battle_mgr.protocol.createbattlereplayroom"], data);
                console.log("以玩家" + data.viewPlayerId + "视角创建战报房间---->" + data.replayRoomId);
              }

              break;

            case this.logicInfoBtn:
              if (this.curSelectData && this.selectPlayer) {
                let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)["battle_mgr.protocol.createbattlereplayroom"]();
                data.replayRoomId = this.curSelectData.createContext.roomId;
                data.beginRound = 1;
                data.logicReplay = true;
                data.viewPlayerId = this.selectPlayer.playerId;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)["battle_mgr.protocol.createbattlereplayroom"], data);
                console.log("以玩家" + data.viewPlayerId + "视角创建战报房间---->" + data.replayRoomId);
              }

              break;

            case this.infoCloseBtn:
              this.logInfoCont.active = false;
              break;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24d9e04ce0fe10c8afd740b41ce2c1dd74909ead.js.map