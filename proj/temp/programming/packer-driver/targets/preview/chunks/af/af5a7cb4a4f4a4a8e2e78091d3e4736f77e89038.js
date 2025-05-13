System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, easing, Label, sp, Tween, tween, UITransform, v3, Panel, MsgPanel, EventMgr, Evt_Cancel_Match, Evt_EnterFight, Evt_Match_Complete, Evt_Start_Match, proto, Req, Route, PlayerData, Session, DateUtils, VsPlayerItem, VSPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Cancel_Match(extras) {
    _reporterNs.report("Evt_Cancel_Match", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_EnterFight(extras) {
    _reporterNs.report("Evt_EnterFight", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Match_Complete(extras) {
    _reporterNs.report("Evt_Match_Complete", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Start_Match(extras) {
    _reporterNs.report("Evt_Start_Match", "../../manager/EventMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVsPlayerItem(extras) {
    _reporterNs.report("VsPlayerItem", "./VsPlayerItem", _context.meta, extras);
  }

  _export("VSPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      easing = _cc.easing;
      Label = _cc.Label;
      sp = _cc.sp;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      MsgPanel = _unresolved_3.MsgPanel;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_Cancel_Match = _unresolved_4.Evt_Cancel_Match;
      Evt_EnterFight = _unresolved_4.Evt_EnterFight;
      Evt_Match_Complete = _unresolved_4.Evt_Match_Complete;
      Evt_Start_Match = _unresolved_4.Evt_Start_Match;
    }, function (_unresolved_5) {
      proto = _unresolved_5.default;
      Req = _unresolved_5.Req;
      Route = _unresolved_5.Route;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }, function (_unresolved_8) {
      DateUtils = _unresolved_8.DateUtils;
    }, function (_unresolved_9) {
      VsPlayerItem = _unresolved_9.VsPlayerItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b946ecipKZMAp6rpx3k2Cwu", "VSPanel", undefined);

      __checkObsolete__(['Button', 'easing', 'Label', 'sp', 'Tween', 'tween', 'UITransform', 'v3']);

      _export("VSPanel", VSPanel = class VSPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/vs/VSPanel";
          this.closeBtn = void 0;
          this.effect1 = void 0;
          this.timeLab = void 0;
          this.VsPlayerItemA = void 0;
          this.VsPlayerItemB = void 0;
          this.isStartVs = void 0;
          this.isVsWin = void 0;
          this.sendOverTime = void 0;
          this.battleMode = void 0;
        }

        onLoad() {
          this.effect1 = this.find("effect1", sp.Skeleton);
          this.VsPlayerItemA = this.find("playerCont/VsPlayerItemA").addComponent(_crd && VsPlayerItem === void 0 ? (_reportPossibleCrUseOfVsPlayerItem({
            error: Error()
          }), VsPlayerItem) : VsPlayerItem);
          this.VsPlayerItemB = this.find("playerCont/VsPlayerItemB").addComponent(_crd && VsPlayerItem === void 0 ? (_reportPossibleCrUseOfVsPlayerItem({
            error: Error()
          }), VsPlayerItem) : VsPlayerItem);
          this.timeLab = this.find("timeLab", Label);
          this.closeBtn = this.find("closeBtn", Button);
          this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        update(dt) {}

        flush(battleMode) {
          this.battleMode = battleMode;
          this.sendOverTime = 0;
          this.closeBtn.node.active = false;
          this.timeLab.string = "";
          this.isVsWin = false;
          this.isStartVs = false;
          this.VsPlayerItemA.SetData((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).UserInfo.nickName, (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurFightCardGroup, true);
          this.VsPlayerItemB.SetData(null, null);
          this.playStartVsEffect();
          this.effect1.clearAnimation();
          this.effect1.setAnimation(0, "start", false);
          this.effect1.setCompleteListener(() => {});
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Start_Match === void 0 ? (_reportPossibleCrUseOfEvt_Start_Match({
            error: Error()
          }), Evt_Start_Match) : Evt_Start_Match, this.onStartVs, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Cancel_Match === void 0 ? (_reportPossibleCrUseOfEvt_Cancel_Match({
            error: Error()
          }), Evt_Cancel_Match) : Evt_Cancel_Match, this.onCancelVs, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Match_Complete === void 0 ? (_reportPossibleCrUseOfEvt_Match_Complete({
            error: Error()
          }), Evt_Match_Complete) : Evt_Match_Complete, this.onVsComplete, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_EnterFight === void 0 ? (_reportPossibleCrUseOfEvt_EnterFight({
            error: Error()
          }), Evt_EnterFight) : Evt_EnterFight, this.onEnterFight, this);
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Start_Match === void 0 ? (_reportPossibleCrUseOfEvt_Start_Match({
            error: Error()
          }), Evt_Start_Match) : Evt_Start_Match, this.onStartVs, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Cancel_Match === void 0 ? (_reportPossibleCrUseOfEvt_Cancel_Match({
            error: Error()
          }), Evt_Cancel_Match) : Evt_Cancel_Match, this.onCancelVs, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Match_Complete === void 0 ? (_reportPossibleCrUseOfEvt_Match_Complete({
            error: Error()
          }), Evt_Match_Complete) : Evt_Match_Complete, this.onVsComplete, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_EnterFight === void 0 ? (_reportPossibleCrUseOfEvt_EnterFight({
            error: Error()
          }), Evt_EnterFight) : Evt_EnterFight, this.onEnterFight, this);
        }

        playStartVsEffect() {
          Tween.stopAllByTarget(this.VsPlayerItemA);
          Tween.stopAllByTarget(this.VsPlayerItemB);
          var itemW = this.VsPlayerItemA.node.getComponent(UITransform).width;
          var totalW = this.node.getComponent(UITransform).width;
          var offsetX = totalW * 0.5 + itemW * 0.5;
          this.VsPlayerItemA.node.position = v3(-offsetX, 0, 0);
          this.VsPlayerItemB.node.position = v3(offsetX, 0, 0);
          tween(this.VsPlayerItemA.node).to(1, {
            position: v3(-380, 0, 0)
          }, {
            easing: easing.quintIn
          }).start();
          tween(this.VsPlayerItemB.node).to(1, {
            position: v3(380, 0, 0)
          }, {
            easing: easing.quintIn
          }).call(() => {
            this.sendStartVs();
          }).start();
        }

        playEndVsEffect() {
          Tween.stopAllByTarget(this.VsPlayerItemA);
          Tween.stopAllByTarget(this.VsPlayerItemB);
          var itemW = this.VsPlayerItemA.node.getComponent(UITransform).width;
          var totalW = this.node.getComponent(UITransform).width;
          var offsetX = totalW * 0.5 + itemW * 0.5;
          this.VsPlayerItemA.node.position = v3(-380, 0, 0);
          this.VsPlayerItemB.node.position = v3(380, 0, 0);
          tween(this.VsPlayerItemA.node).to(0.5, {
            position: v3(-offsetX, 0, 0)
          }, {
            easing: easing.quintIn
          }).start();
          tween(this.VsPlayerItemB.node).to(0.5, {
            position: v3(offsetX, 0, 0)
          }, {
            easing: easing.quintIn
          }).start();
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.closeBtn:
              if (this.isStartVs) {
                if (this.isVsWin) {
                  (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                    error: Error()
                  }), MsgPanel) : MsgPanel).Show("正在进入战斗场景，不可取消");
                  return;
                }

                this.sendCancelVs();
              } else {
                if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).ServerTime > this.sendOverTime) {//this.Hide();
                }
              }

              break;

            default:
              break;
          }
        }

        sendStartVs() {
          this.effect1.setAnimation(0, "loop", true);
          this.closeBtn.node.active = true;
          this.sendOverTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime + 3;
          var startBattle = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["match.protocol.matchmaking"]();
          startBattle.deckId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurFightCardGroup.id;
          startBattle.battleMode = this.battleMode;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["match.protocol.matchmaking"], startBattle);
        }

        sendCancelVs() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["match.protocol.matchcancel"]);
        }

        onStartVs(result) {
          if (result) {
            this.startVs();
          } else {
            this.Hide();
          }
        }

        onCancelVs(result) {
          if (result) this.Hide();
        }

        onVsComplete(result, curRoom) {
          if (result) {
            this.shoVsInfo(curRoom);
            this.vsWin();
          } else {
            this.Hide();
          }
        }

        onEnterFight() {
          this.scheduleOnce(() => {
            this.exitVs();
          }, 1);
        }

        startVs() {
          this.isStartVs = true;
        }

        vsWin() {
          this.isVsWin = true;
          this.effect1.setAnimation(0, "loop2", true);
        }

        shoVsInfo(curRoom) {
          var playerDataB = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PlayerData.create();
          var playerName;
          var cardData;

          for (var key in curRoom.players) {
            var playerData = curRoom.players[key];

            if (playerData.playerId != (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId) {
              cardData = playerData.deckAttr;
              playerName = playerData.name;
              break;
            }
          }

          this.VsPlayerItemB.SetData(playerName, cardData);
        }

        exitVs() {
          this.playEndVsEffect();
          this.effect1.setAnimation(0, "end", false);
          this.effect1.setCompleteListener(() => {
            this.Hide();
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af5a7cb4a4f4a4a8e2e78091d3e4736f77e89038.js.map