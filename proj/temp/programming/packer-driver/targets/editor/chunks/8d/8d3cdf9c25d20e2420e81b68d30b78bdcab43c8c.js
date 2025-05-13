System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, sp, Panel, Protocol, PlayerData, Session, MainPanel, GameScene, battleDataMgr, ResMgr, MainUI3D, BattleSettlementPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainPanel(extras) {
    _reporterNs.report("MainPanel", "../main/MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "./BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainUI3D(extras) {
    _reporterNs.report("MainUI3D", "../main/MainUI3D", _context.meta, extras);
  }

  _export("BattleSettlementPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      Protocol = _unresolved_3.Protocol;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      Session = _unresolved_5.Session;
    }, function (_unresolved_6) {
      MainPanel = _unresolved_6.MainPanel;
    }, function (_unresolved_7) {
      GameScene = _unresolved_7.GameScene;
    }, function (_unresolved_8) {
      battleDataMgr = _unresolved_8.battleDataMgr;
    }, function (_unresolved_9) {
      ResMgr = _unresolved_9.ResMgr;
    }, function (_unresolved_10) {
      MainUI3D = _unresolved_10.MainUI3D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99eefKA+BZGq7KdOGApAWAq", "BattleSettlementPanel", undefined);

      __checkObsolete__(['Node', 'Button', 'Label', 'sp']);

      _export("BattleSettlementPanel", BattleSettlementPanel = class BattleSettlementPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/battle/BattleSettlementPanel";
          this.okBtn = void 0;
          this.effect = void 0;
          this.roomId = void 0;
          this.data = void 0;
          this.playerAId = void 0;
        }

        onLoad() {
          this.effect = this.find("effect", sp.Skeleton);
          this.okBtn = this.find("okBtn", Button);
          this.okBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onShow() {}

        flush(roomId, playerAId, data) {
          this.roomId = roomId;
          this.playerAId = playerAId;
          this.data = data;
          this.playEffect();
        }

        onHide(...args) {}

        onBtnClick(btn) {
          switch (btn) {
            case this.okBtn:
              if (!this.data.leavePlayerId || this.data.leavePlayerId.length < 1) {
                let data = new (_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                  error: Error()
                }), Protocol) : Protocol).battleroomleave();
                data.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).server;
                data.roomId = this.roomId;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send(data);
                console.log("无玩家主动退出房间 发送离开房间---->");
              }

              this.Hide();
              (_crd && MainPanel === void 0 ? (_reportPossibleCrUseOfMainPanel({
                error: Error()
              }), MainPanel) : MainPanel).Show();
              (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).clearBattleData();
              (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
                error: Error()
              }), GameScene) : GameScene).Hide();
              (_crd && MainUI3D === void 0 ? (_reportPossibleCrUseOfMainUI3D({
                error: Error()
              }), MainUI3D) : MainUI3D).Show();
              break;

            default:
              break;
          }
        }

        playEffect() {
          this.okBtn.node.active = false;
          let effectName;

          if (this.playerAId == this.data.winnerPlayerId) {
            effectName = "ui_result_win";
          } else {
            if (this.playerAId == this.data.leavePlayerId) {
              effectName = "ui_result_run";
            } else {
              effectName = "ui_result_lost";
            }
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(`spine/${effectName}/${effectName}`, sp.SkeletonData, res => {
            this.effect.skeletonData = res;
            this.effect.setAnimation(0, "show", false);
            this.effect.setCompleteListener(() => {
              if (this.effect.animation == "show") {
                this.effect.setAnimation(0, "loop", true);
                this.okBtn.node.active = true;
              }
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d3cdf9c25d20e2420e81b68d30b78bdcab43c8c.js.map