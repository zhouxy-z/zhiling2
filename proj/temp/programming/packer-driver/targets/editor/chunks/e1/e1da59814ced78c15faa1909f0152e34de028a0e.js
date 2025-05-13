System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "cc/env", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioDefine, BagModule, BattleModule, CardsMode, GameScene, FrienModule, LoginModule, MailModule, PlayerModule, ShopModule, AudioMgr, CfgMgr, FightUI, TradeModule, DEV, HTML5, Session, Guide, PointTo, Req, TaskModule, RegisterClass, CheckCondition, DL, ConditionMgr, EventMgr, find, LocalStorage, Shake, RightsModule, App, _crd;

  function _reportPossibleCrUseOfAudioDefine(extras) {
    _reporterNs.report("AudioDefine", "../define/AudioDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagModule(extras) {
    _reporterNs.report("BagModule", "../module/bag/BagModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleModule(extras) {
    _reporterNs.report("BattleModule", "../module/battle/BattleModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardsMode(extras) {
    _reporterNs.report("CardsMode", "../module/cards/CardsMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../module/fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrienModule(extras) {
    _reporterNs.report("FrienModule", "../module/friend/FriendModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginModule(extras) {
    _reporterNs.report("LoginModule", "../module/login/LoginModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailModule(extras) {
    _reporterNs.report("MailModule", "../module/mail/MailModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerModule(extras) {
    _reporterNs.report("PlayerModule", "../module/player/PlayerModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopModule(extras) {
    _reporterNs.report("ShopModule", "../module/shop/ShopModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "./CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdGuide(extras) {
    _reporterNs.report("StdGuide", "./CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUI(extras) {
    _reporterNs.report("FightUI", "../module/fight/FightUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradeModule(extras) {
    _reporterNs.report("TradeModule", "../module/trade/TradeModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuide(extras) {
    _reporterNs.report("Guide", "./Guide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPointTo(extras) {
    _reporterNs.report("PointTo", "./Guide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskModule(extras) {
    _reporterNs.report("TaskModule", "../module/task/TaskModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRegisterClass(extras) {
    _reporterNs.report("RegisterClass", "../RegisterClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckCondition(extras) {
    _reporterNs.report("CheckCondition", "../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDL(extras) {
    _reporterNs.report("DL", "../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionMgr(extras) {
    _reporterNs.report("ConditionMgr", "./ConditionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShake(extras) {
    _reporterNs.report("Shake", "../utils/Shake", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightsModule(extras) {
    _reporterNs.report("RightsModule", "../module/rights/RightsModule", _context.meta, extras);
  }

  _export("App", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
    }, function (_unresolved_2) {
      AudioDefine = _unresolved_2.AudioDefine;
    }, function (_unresolved_3) {
      BagModule = _unresolved_3.BagModule;
    }, function (_unresolved_4) {
      BattleModule = _unresolved_4.BattleModule;
    }, function (_unresolved_5) {
      CardsMode = _unresolved_5.CardsMode;
    }, function (_unresolved_6) {
      GameScene = _unresolved_6.GameScene;
    }, function (_unresolved_7) {
      FrienModule = _unresolved_7.FrienModule;
    }, function (_unresolved_8) {
      LoginModule = _unresolved_8.LoginModule;
    }, function (_unresolved_9) {
      MailModule = _unresolved_9.MailModule;
    }, function (_unresolved_10) {
      PlayerModule = _unresolved_10.PlayerModule;
    }, function (_unresolved_11) {
      ShopModule = _unresolved_11.ShopModule;
    }, function (_unresolved_12) {
      AudioMgr = _unresolved_12.AudioMgr;
    }, function (_unresolved_13) {
      CfgMgr = _unresolved_13.CfgMgr;
    }, function (_unresolved_14) {
      FightUI = _unresolved_14.FightUI;
    }, function (_unresolved_15) {
      TradeModule = _unresolved_15.TradeModule;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
      HTML5 = _ccEnv.HTML5;
    }, function (_unresolved_16) {
      Session = _unresolved_16.Session;
    }, function (_unresolved_17) {
      Guide = _unresolved_17.Guide;
      PointTo = _unresolved_17.PointTo;
    }, function (_unresolved_18) {
      Req = _unresolved_18.Req;
    }, function (_unresolved_19) {
      TaskModule = _unresolved_19.TaskModule;
    }, function (_unresolved_20) {
      RegisterClass = _unresolved_20.RegisterClass;
    }, function (_unresolved_21) {
      CheckCondition = _unresolved_21.CheckCondition;
      DL = _unresolved_21.DL;
    }, function (_unresolved_22) {
      ConditionMgr = _unresolved_22.ConditionMgr;
    }, function (_unresolved_23) {
      EventMgr = _unresolved_23.EventMgr;
    }, function (_unresolved_24) {
      LocalStorage = _unresolved_24.default;
    }, function (_unresolved_25) {
      Shake = _unresolved_25.Shake;
    }, function (_unresolved_26) {
      RightsModule = _unresolved_26.RightsModule;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45d22Fpjj5NO6nrYB9P6dWs", "App", undefined);

      __checkObsolete__(['Layers', 'find']);

      _export("App", App = class App {
        constructor() {
          if (App.instance) throw "App只允许一个实例！";
          App.instance = this;
          this.init();

          if (DEV && HTML5) {
            window['proto'] = _crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req;

            window['send'] = function (route, data) {
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send(route, data);
            };

            window['resetGuide'] = function () {
              let cfgs = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Get('guide');

              for (let cfg of cfgs) {
                (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                  error: Error()
                }), LocalStorage) : LocalStorage).RemoveItem("guide" + cfg.ID);
              }

              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Call("reset_guide");
            };

            window['testStep'] = function (url, msg = "", angle = 90, modal = true, offset = [0, 0], msgAngle, msgOffset = [0, 0], msgSize, duration) {
              let btn = find(url);
              if (!btn) return;
              let pointer = (_crd && PointTo === void 0 ? (_reportPossibleCrUseOfPointTo({
                error: Error()
              }), PointTo) : PointTo).Create();
              pointer.Target(btn, angle, msg, modal, offset, msgAngle, msgOffset, msgSize, duration ? duration : undefined);
              pointer.on('end', () => {
                pointer.receive();
              }, this);
            };

            window['testCondition'] = function (conditionId, ...values) {
              console.log((_crd && CheckCondition === void 0 ? (_reportPossibleCrUseOfCheckCondition({
                error: Error()
              }), CheckCondition) : CheckCondition)(conditionId, ...values));
            };

            window['cleanLocal'] = function () {
              (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).Clear();
            };

            window['cleanGuide'] = function () {
              let guides = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Get('guide');

              for (let guide of guides) {
                (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                  error: Error()
                }), LocalStorage) : LocalStorage).SetNumber("guide" + guide.ID, 1);
              }
            };

            window['shake'] = (_crd && Shake === void 0 ? (_reportPossibleCrUseOfShake({
              error: Error()
            }), Shake) : Shake).Start.bind(_crd && Shake === void 0 ? (_reportPossibleCrUseOfShake({
              error: Error()
            }), Shake) : Shake);
          }
        }

        async init() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).init((_crd && AudioDefine === void 0 ? (_reportPossibleCrUseOfAudioDefine({
            error: Error()
          }), AudioDefine) : AudioDefine).Channels);
          await (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).load();
          await (_crd && FightUI === void 0 ? (_reportPossibleCrUseOfFightUI({
            error: Error()
          }), FightUI) : FightUI).load();
          await (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).prevLoad();
          new (_crd && RegisterClass === void 0 ? (_reportPossibleCrUseOfRegisterClass({
            error: Error()
          }), RegisterClass) : RegisterClass)();
          new (_crd && Guide === void 0 ? (_reportPossibleCrUseOfGuide({
            error: Error()
          }), Guide) : Guide)(); // 系统开启和引导系统

          new (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
            error: Error()
          }), DL) : DL)();
          new (_crd && LoginModule === void 0 ? (_reportPossibleCrUseOfLoginModule({
            error: Error()
          }), LoginModule) : LoginModule)();
          new (_crd && PlayerModule === void 0 ? (_reportPossibleCrUseOfPlayerModule({
            error: Error()
          }), PlayerModule) : PlayerModule)();
          new (_crd && MailModule === void 0 ? (_reportPossibleCrUseOfMailModule({
            error: Error()
          }), MailModule) : MailModule)();
          new (_crd && FrienModule === void 0 ? (_reportPossibleCrUseOfFrienModule({
            error: Error()
          }), FrienModule) : FrienModule)();
          new (_crd && BattleModule === void 0 ? (_reportPossibleCrUseOfBattleModule({
            error: Error()
          }), BattleModule) : BattleModule)();
          new (_crd && BagModule === void 0 ? (_reportPossibleCrUseOfBagModule({
            error: Error()
          }), BagModule) : BagModule)();
          new (_crd && ShopModule === void 0 ? (_reportPossibleCrUseOfShopModule({
            error: Error()
          }), ShopModule) : ShopModule)();
          new (_crd && CardsMode === void 0 ? (_reportPossibleCrUseOfCardsMode({
            error: Error()
          }), CardsMode) : CardsMode)();
          new (_crd && TradeModule === void 0 ? (_reportPossibleCrUseOfTradeModule({
            error: Error()
          }), TradeModule) : TradeModule)();
          new (_crd && TaskModule === void 0 ? (_reportPossibleCrUseOfTaskModule({
            error: Error()
          }), TaskModule) : TaskModule)();
          new (_crd && RightsModule === void 0 ? (_reportPossibleCrUseOfRightsModule({
            error: Error()
          }), RightsModule) : RightsModule)();
          (_crd && ConditionMgr === void 0 ? (_reportPossibleCrUseOfConditionMgr({
            error: Error()
          }), ConditionMgr) : ConditionMgr).init();
        }

      });

      App.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1da59814ced78c15faa1909f0152e34de028a0e.js.map