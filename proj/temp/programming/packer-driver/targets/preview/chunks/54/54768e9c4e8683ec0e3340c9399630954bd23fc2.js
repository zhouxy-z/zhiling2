System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Layout, NodeEventType, RichText, Sprite, SpriteFrame, UITransform, path, sp, proto, Req, Route, Session, Panel, Battle_End_Round, Battle_Exit, Battle_PlayNewRoundEffect, Battle_RoomUnusual, Battle_ShowSettlement, Battle_UpdateTerrain, EventMgr, Evt_BattlePlayHandTime, Evt_SectionSettle, Evt_ShowBattleDoubleEffect, Evt_StarElementSettle, folder_icon, ResMgr, CfgMgr, Tips, GameSet, Shake, Goto, RewardTips, FightUI, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_End_Round(extras) {
    _reporterNs.report("Battle_End_Round", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_Exit(extras) {
    _reporterNs.report("Battle_Exit", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_PlayNewRoundEffect(extras) {
    _reporterNs.report("Battle_PlayNewRoundEffect", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_RoomUnusual(extras) {
    _reporterNs.report("Battle_RoomUnusual", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_ShowSettlement(extras) {
    _reporterNs.report("Battle_ShowSettlement", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_UpdateTerrain(extras) {
    _reporterNs.report("Battle_UpdateTerrain", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattlePlayHandTime(extras) {
    _reporterNs.report("Evt_BattlePlayHandTime", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionSettle(extras) {
    _reporterNs.report("Evt_SectionSettle", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ShowBattleDoubleEffect(extras) {
    _reporterNs.report("Evt_ShowBattleDoubleEffect", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_StarElementSettle(extras) {
    _reporterNs.report("Evt_StarElementSettle", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdArea(extras) {
    _reporterNs.report("StdArea", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShake(extras) {
    _reporterNs.report("Shake", "../../utils/Shake", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  _export("FightUI", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Layout = _cc.Layout;
      NodeEventType = _cc.NodeEventType;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      path = _cc.path;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
      Req = _unresolved_2.Req;
      Route = _unresolved_2.Route;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      Battle_End_Round = _unresolved_5.Battle_End_Round;
      Battle_Exit = _unresolved_5.Battle_Exit;
      Battle_PlayNewRoundEffect = _unresolved_5.Battle_PlayNewRoundEffect;
      Battle_RoomUnusual = _unresolved_5.Battle_RoomUnusual;
      Battle_ShowSettlement = _unresolved_5.Battle_ShowSettlement;
      Battle_UpdateTerrain = _unresolved_5.Battle_UpdateTerrain;
      EventMgr = _unresolved_5.EventMgr;
      Evt_BattlePlayHandTime = _unresolved_5.Evt_BattlePlayHandTime;
      Evt_SectionSettle = _unresolved_5.Evt_SectionSettle;
      Evt_ShowBattleDoubleEffect = _unresolved_5.Evt_ShowBattleDoubleEffect;
      Evt_StarElementSettle = _unresolved_5.Evt_StarElementSettle;
    }, function (_unresolved_6) {
      folder_icon = _unresolved_6.folder_icon;
      ResMgr = _unresolved_6.ResMgr;
    }, function (_unresolved_7) {
      CfgMgr = _unresolved_7.CfgMgr;
    }, function (_unresolved_8) {
      Tips = _unresolved_8.Tips;
    }, function (_unresolved_9) {
      GameSet = _unresolved_9.GameSet;
    }, function (_unresolved_10) {
      Shake = _unresolved_10.Shake;
    }, function (_unresolved_11) {
      Goto = _unresolved_11.Goto;
    }, function (_unresolved_12) {
      RewardTips = _unresolved_12.RewardTips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b64auH315Fn4231WcJJ3QH", "FightUI", undefined);

      __checkObsolete__(['Button', 'Label', 'Layout', 'Node', 'NodeEventType', 'RichText', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec3', 'easing', 'path', 'sp', 'tween', 'v3']);

      _export("FightUI", FightUI = class FightUI extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/fight/FightUI";
          this.doubleEffect = void 0;
          this.roundStartCont = void 0;
          this.roundNumLab = void 0;
          this.roundStartEffect = void 0;
          this.playHandTimeEffect = void 0;
          this.settlementCont = void 0;
          this.settlementEffect = void 0;
          this.areaCont = void 0;
          this.unusualCont = void 0;
          this.unusualOkBtn = void 0;
          this.unusualLab = void 0;
          this.settlementData = void 0;
          this.settlementPlayerId = void 0;
          this.sectionSettleDataMap = void 0;
          this.starElementSettleDataMap = void 0;
          this.isSettlementEnd = void 0;
          //是否结算完毕
          this.roomData = void 0;
        }

        onLoad() {
          this.roundStartCont = this.find("roundStartCont");
          this.roundStartEffect = this.find("roundStartCont/effect", sp.Skeleton);
          this.playHandTimeEffect = this.find("defCont/playHandTimeEffect", sp.Skeleton);
          this.doubleEffect = this.find("defCont/doubleEffect", sp.Skeleton);
          this.roundNumLab = this.find("roundStartCont/effect/roundNumLab", Label);
          this.settlementCont = this.find("settlementCont");
          this.settlementEffect = this.find("settlementCont/effect", sp.Skeleton);
          this.areaCont = this.find("terrainCont");
          this.unusualCont = this.find("unusualCont");
          this.unusualOkBtn = this.find("unusualCont/unusualOkBtn", Button);
          this.unusualLab = this.find("unusualCont/unusualLab", RichText);
          this.unusualOkBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.settlementCont.on(NodeEventType.TOUCH_END, this.onExit, this);
        }

        update(dt) {}

        onTerrain(data, round) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.hasLoad) yield _this.initSub;

            _this.updateArea(data, round);
          })();
        }
        /**更新区域 */


        updateArea(datas, round) {
          var _this2 = this;

          var _loop = function _loop() {
            var data = datas[i];
            var area = _this2.areaCont.children[data ? data.area : i];
            var cont = area.getChildByName("cont");
            var contTrans = cont.getComponent(UITransform);

            if (!data) {
              area.active = false;
            } else {
              area.active = true; // let icon = area.getChildByName("icon").getComponent(Sprite);

              var descLab = cont.getChildByName("descLab").getComponent(RichText);
              var icon = cont.getChildByName("icon").getComponent(Sprite);
              var nameLab = cont.getChildByName("nameLab").getComponent(Label);
              var iconName = "area_icon_none";
              descLab.string = "";
              nameLab.string = "未揭示";

              switch (data.terrainState) {
                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateUnknown:
                  if (round && round.levelData.reveal[i] != undefined) {
                    descLab.string = "第" + round.levelData.reveal[i] + "回合开启";
                  } else descLab.string = "未知";

                  break;

                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateHide:
                  if (round && round.levelData.reveal[i] != undefined) {
                    descLab.string = "第" + round.levelData.reveal[i] + "回合开启";
                  } else descLab.string = "未揭示";

                  break;

                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateShow:
                  var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).getArea(data.configId);
                  descLab.string = std.AffectText;
                  iconName = std.Icon;
                  nameLab.string = std.AreaName;
                  break;

                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateDestroy:
                  descLab.string = "已销毁";
                  break;

                default:
                  if (round && round.levelData.reveal[i] != undefined) {
                    descLab.string = "第" + round.levelData.reveal[i] + "回合开启";
                  } else descLab.string = "未揭示";

              }

              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                error: Error()
              }), folder_icon) : folder_icon, "areaIcon/" + iconName, "spriteFrame"), SpriteFrame, res => {
                icon.spriteFrame = res;
              });
              var labTrans = descLab.node.getComponent(UITransform);
              contTrans.height = Math.max(60, labTrans.height);
            }
          };

          for (var i = 0; i < datas.length; i++) {
            _loop();
          }

          this.areaCont.getComponent(Layout).updateLayout();
        }

        onShow() {
          this.playHandTimeEffect.node.active = false;
          this.doubleEffect.node.active = false;
          this.roundStartCont.active = false;
          this.settlementCont.active = false;
          this.unusualCont.active = false;
          this.sectionSettleDataMap = null;
          this.settlementData = null;
          this.isSettlementEnd = false;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_UpdateTerrain === void 0 ? (_reportPossibleCrUseOfBattle_UpdateTerrain({
            error: Error()
          }), Battle_UpdateTerrain) : Battle_UpdateTerrain, this.onTerrain, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_PlayNewRoundEffect === void 0 ? (_reportPossibleCrUseOfBattle_PlayNewRoundEffect({
            error: Error()
          }), Battle_PlayNewRoundEffect) : Battle_PlayNewRoundEffect, this.onPlayRoundSatrt, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_ShowSettlement === void 0 ? (_reportPossibleCrUseOfBattle_ShowSettlement({
            error: Error()
          }), Battle_ShowSettlement) : Battle_ShowSettlement, this.onShowSettlement, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_RoomUnusual === void 0 ? (_reportPossibleCrUseOfBattle_RoomUnusual({
            error: Error()
          }), Battle_RoomUnusual) : Battle_RoomUnusual, this.onShowUnusual, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SectionSettle === void 0 ? (_reportPossibleCrUseOfEvt_SectionSettle({
            error: Error()
          }), Evt_SectionSettle) : Evt_SectionSettle, this.onSectionSettle, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_BattlePlayHandTime === void 0 ? (_reportPossibleCrUseOfEvt_BattlePlayHandTime({
            error: Error()
          }), Evt_BattlePlayHandTime) : Evt_BattlePlayHandTime, this.onPlayHandTiemEnd, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_ShowBattleDoubleEffect === void 0 ? (_reportPossibleCrUseOfEvt_ShowBattleDoubleEffect({
            error: Error()
          }), Evt_ShowBattleDoubleEffect) : Evt_ShowBattleDoubleEffect, this.onShowBattleDoubleEffect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_StarElementSettle === void 0 ? (_reportPossibleCrUseOfEvt_StarElementSettle({
            error: Error()
          }), Evt_StarElementSettle) : Evt_StarElementSettle, this.onStarElementSettle, this);
        }
        /**
         * 刷新战斗ui
         * @param data 
         */


        flush(roomData) {
          this.roomData = roomData;
          this.updateArea([null, null, null]);
        }

        onHide() {
          this.roomData = null;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Battle_UpdateTerrain === void 0 ? (_reportPossibleCrUseOfBattle_UpdateTerrain({
            error: Error()
          }), Battle_UpdateTerrain) : Battle_UpdateTerrain, this.onTerrain, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Battle_PlayNewRoundEffect === void 0 ? (_reportPossibleCrUseOfBattle_PlayNewRoundEffect({
            error: Error()
          }), Battle_PlayNewRoundEffect) : Battle_PlayNewRoundEffect, this.onPlayRoundSatrt, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Battle_ShowSettlement === void 0 ? (_reportPossibleCrUseOfBattle_ShowSettlement({
            error: Error()
          }), Battle_ShowSettlement) : Battle_ShowSettlement, this.onShowSettlement, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Battle_RoomUnusual === void 0 ? (_reportPossibleCrUseOfBattle_RoomUnusual({
            error: Error()
          }), Battle_RoomUnusual) : Battle_RoomUnusual, this.onShowUnusual, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_SectionSettle === void 0 ? (_reportPossibleCrUseOfEvt_SectionSettle({
            error: Error()
          }), Evt_SectionSettle) : Evt_SectionSettle, this.onSectionSettle, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_BattlePlayHandTime === void 0 ? (_reportPossibleCrUseOfEvt_BattlePlayHandTime({
            error: Error()
          }), Evt_BattlePlayHandTime) : Evt_BattlePlayHandTime, this.onPlayHandTiemEnd, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_ShowBattleDoubleEffect === void 0 ? (_reportPossibleCrUseOfEvt_ShowBattleDoubleEffect({
            error: Error()
          }), Evt_ShowBattleDoubleEffect) : Evt_ShowBattleDoubleEffect, this.onShowBattleDoubleEffect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_StarElementSettle === void 0 ? (_reportPossibleCrUseOfEvt_StarElementSettle({
            error: Error()
          }), Evt_StarElementSettle) : Evt_StarElementSettle, this.onStarElementSettle, this);
        }

        onPlayHandTiemEnd() {
          this.playHandTimeEffect.node.active = true;
          this.playHandTimeEffect.clearAnimation();
          this.playHandTimeEffect.setAnimation(0, "animation", false);
          this.playHandTimeEffect.setCompleteListener(() => {
            this.playHandTimeEffect.node.active = false;
          });
        }

        onShowBattleDoubleEffect(worldPos) {
          var showPos = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.convertToUINode(worldPos, this.node);
          this.doubleEffect.node.position = showPos;
          this.doubleEffect.node.active = true;
          this.doubleEffect.clearAnimation();
          this.doubleEffect.setAnimation(0, "animation", false);
          this.doubleEffect.setCompleteListener(() => {
            this.doubleEffect.node.active = false;
          });
          (_crd && Shake === void 0 ? (_reportPossibleCrUseOfShake({
            error: Error()
          }), Shake) : Shake).Start(10, 1);
        }

        onShowSettlement(roomId, playerAId, data) {
          this.settlementData = data;
          this.settlementPlayerId = playerAId;
          this.playSettlementEffect();
          this.sendLeaveRoom();
        }

        onSectionSettle(data) {
          if (!this.sectionSettleDataMap) this.sectionSettleDataMap = {};
          this.sectionSettleDataMap[data.rankRecord.roomId] = data;

          if (this.isSettlementEnd && this.roomData.modeInfo.mode == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleMode.BattleModeRank) {
            this.showSectionSettle();
          }
        }

        onStarElementSettle(data) {
          if (!this.starElementSettleDataMap) this.starElementSettleDataMap = {};
          this.starElementSettleDataMap[data.starRecord.roomId] = data;

          if (this.isSettlementEnd && this.roomData.modeInfo.mode == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleMode.BattleModeStar) {
            this.showSatrElement();
          }
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.unusualOkBtn:
              this.exitFight();
              break;
          }
        }

        onExit() {
          if (this.isSettlementEnd) {
            this.exitFight();
          }
        }

        exitFight() {
          this.Hide();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Battle_Exit === void 0 ? (_reportPossibleCrUseOfBattle_Exit({
            error: Error()
          }), Battle_Exit) : Battle_Exit);
        }

        sendLeaveRoom() {
          var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).pb.Server.create();
          server.id = this.roomData.serverId;
          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["battle.protocol.battleroomleave"]();
          data.server = server;
          data.roomId = this.roomData.roomId;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["battle.protocol.battleroomleave"], data);
          console.log("无玩家主动退出房间 发送离开房间---->");
        }

        onPlayRoundSatrt(curRound, maxRound) {
          this.roundStartCont.active = true;
          this.roundStartEffect.clearAnimation();
          this.roundNumLab.string = curRound + "/" + maxRound;
          this.roundStartEffect.setAnimation(0, "animation", false);
          this.roundStartEffect.setCompleteListener(() => {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Battle_End_Round === void 0 ? (_reportPossibleCrUseOfBattle_End_Round({
              error: Error()
            }), Battle_End_Round) : Battle_End_Round);
            this.roundStartCont.active = false;
          });
        }

        onShowUnusual(str) {
          this.unusualCont.active = true;
          this.unusualLab.string = str;
        }

        playSettlementEffect() {
          this.settlementCont.active = true;
          this.settlementEffect.clearAnimation();
          var effectName;

          if (this.settlementData.tie) {
            effectName = "ui_result_draw";
          } else if (this.settlementPlayerId == this.settlementData.winnerPlayerId) {
            effectName = "ui_result_win";
          } else {
            if (this.settlementPlayerId == this.settlementData.leavePlayerId) {
              effectName = "ui_result_run";
            } else if (this.settlementData.leavePlayerId) {
              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                error: Error()
              }), Tips) : Tips).Show("对方逃跑!");
              effectName = "ui_result_win";
            } else {
              effectName = "ui_result_lost";
            }
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("spine/" + effectName + "/" + effectName, sp.SkeletonData, res => {
            this.settlementEffect.skeletonData = res;
            this.settlementEffect.setAnimation(0, "show", false);
            this.settlementEffect.setCompleteListener(() => {
              this.settlementEffect.setAnimation(0, "loop", true);
              this.isSettlementEnd = true;

              if (this.roomData.isReplay) {} else {
                if (this.roomData.modeInfo.mode == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleMode.BattleModeRank) {
                  this.showSectionSettle();
                } else if (this.roomData.modeInfo.mode == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleMode.BattleModeStar) {
                  this.showSatrElement();
                }
              }
            });
          });
        } //排位赛结算


        showSectionSettle() {
          var data = this.sectionSettleDataMap ? this.sectionSettleDataMap[this.roomData.roomId] : null;

          if (data) {
            this.isSettlementEnd = false;
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("SeasonSettlePanel", data, this.settlementPlayerId, () => {
              this.settlementCont.active = false;
            }, () => {
              this.isSettlementEnd = true;
              this.onExit();
            });
          }
        } //星元对战结算


        showSatrElement() {
          var data = this.starElementSettleDataMap ? this.starElementSettleDataMap[this.roomData.roomId] : null;

          if (data && data.rewardThings && data.rewardThings.length) {
            this.isSettlementEnd = false;
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(data.rewardThings, null, () => {
              this.settlementCont.active = false;
            }, () => {
              this.isSettlementEnd = true;
              this.onExit();
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54768e9c4e8683ec0e3340c9399630954bd23fc2.js.map