System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, find, Input, instantiate, Label, math, Node, ParticleSystem, path, Rect, sp, Sprite, SpriteFrame, tween, UITransform, v3, Vec3, view, GameSet, CardState, SceneCard, PlaneView, Second, TimeStamp, Utils, folder_icon, ResMgr, Skill, Battle_End_Round, EventMgr, Evt_BattleDoubleUpdate, Evt_ShowBattleDoubleEffect, Session, proto, Req, Ret, Route, PlayerData, battleDataMgr, BattleRoundOperationState, SkillUtils, CfgMgr, EffectTarget, MsgPanel, ShowArea, FightData, GameObj, SpriteLabel, AudioMgr, AudioDefine, _dec, _class, _class2, _crd, ccclass, property, GameScene;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function cardLoca(node, isMy) {
    var area = -1;
    if (node instanceof (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
      error: Error()
    }), SceneCard) : SceneCard)) area = node.cardData.area;
    return {
      isMy: isMy,
      card: node,
      area: area,
      index: -1
    };
  }

  function TouchInstId(data) {
    if (data.fromInstId && data['touchInstId'] && data.fromInstId != data['touchInstId']) return data['touchInstId'];
    return undefined;
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardState(extras) {
    _reporterNs.report("CardState", "./display/SceneCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneCard(extras) {
    _reporterNs.report("SceneCard", "./display/SceneCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaneView(extras) {
    _reporterNs.report("PlaneView", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeStamp(extras) {
    _reporterNs.report("TimeStamp", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "./display/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_End_Round(extras) {
    _reporterNs.report("Battle_End_Round", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleDoubleUpdate(extras) {
    _reporterNs.report("Evt_BattleDoubleUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ShowBattleDoubleEffect(extras) {
    _reporterNs.report("Evt_ShowBattleDoubleEffect", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleRoundOperationState(extras) {
    _reporterNs.report("BattleRoundOperationState", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUtils(extras) {
    _reporterNs.report("SkillUtils", "./SkillUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTarget(extras) {
    _reporterNs.report("EffectTarget", "./display/TestSkill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowArea(extras) {
    _reporterNs.report("ShowArea", "./display/ShowArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteLabel(extras) {
    _reporterNs.report("SpriteLabel", "../../component/SpriteLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../manager/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioDefine(extras) {
    _reporterNs.report("AudioDefine", "../../define/AudioDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      find = _cc.find;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      math = _cc.math;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
      path = _cc.path;
      Rect = _cc.Rect;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      GameSet = _unresolved_2.GameSet;
    }, function (_unresolved_3) {
      CardState = _unresolved_3.CardState;
      SceneCard = _unresolved_3.SceneCard;
    }, function (_unresolved_4) {
      PlaneView = _unresolved_4.PlaneView;
      Second = _unresolved_4.Second;
      TimeStamp = _unresolved_4.TimeStamp;
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      folder_icon = _unresolved_5.folder_icon;
      ResMgr = _unresolved_5.ResMgr;
    }, function (_unresolved_6) {
      Skill = _unresolved_6.Skill;
    }, function (_unresolved_7) {
      Battle_End_Round = _unresolved_7.Battle_End_Round;
      EventMgr = _unresolved_7.EventMgr;
      Evt_BattleDoubleUpdate = _unresolved_7.Evt_BattleDoubleUpdate;
      Evt_ShowBattleDoubleEffect = _unresolved_7.Evt_ShowBattleDoubleEffect;
    }, function (_unresolved_8) {
      Session = _unresolved_8.Session;
    }, function (_unresolved_9) {
      proto = _unresolved_9.default;
      Req = _unresolved_9.Req;
      Ret = _unresolved_9.Ret;
      Route = _unresolved_9.Route;
    }, function (_unresolved_10) {
      PlayerData = _unresolved_10.PlayerData;
    }, function (_unresolved_11) {
      battleDataMgr = _unresolved_11.battleDataMgr;
    }, function (_unresolved_12) {
      BattleRoundOperationState = _unresolved_12.BattleRoundOperationState;
    }, function (_unresolved_13) {
      SkillUtils = _unresolved_13.SkillUtils;
    }, function (_unresolved_14) {
      CfgMgr = _unresolved_14.CfgMgr;
    }, function (_unresolved_15) {
      EffectTarget = _unresolved_15.EffectTarget;
    }, function (_unresolved_16) {
      MsgPanel = _unresolved_16.MsgPanel;
    }, function (_unresolved_17) {
      ShowArea = _unresolved_17.ShowArea;
    }, function (_unresolved_18) {
      FightData = _unresolved_18.FightData;
    }, function (_unresolved_19) {
      GameObj = _unresolved_19.GameObj;
    }, function (_unresolved_20) {
      SpriteLabel = _unresolved_20.SpriteLabel;
    }, function (_unresolved_21) {
      AudioMgr = _unresolved_21.AudioMgr;
    }, function (_unresolved_22) {
      AudioDefine = _unresolved_22.AudioDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66ea8+luyZHo4bqD1F7iuA7", "GameScene", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'director', 'EventTouch', 'find', 'geometry', 'Input', 'instantiate', 'Label', 'math', 'MeshRenderer', 'Node', 'ParticleSystem', 'path', 'Prefab', 'Rect', 'Scene', 'sp', 'Sprite', 'SpriteFrame', 'Terrain', 'tween', 'UITransform', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameScene", GameScene = (_dec = ccclass('GameScene'), _dec(_class = (_class2 = class GameScene extends Component {
        constructor() {
          super(...arguments);
          // 参数相关
          this.handCenter = v3();
          //手卡中点
          this.handRotation = v3();
          //手卡角度
          this.myCardEnterV = v3();
          //自己飞入手卡的起始位置
          this.adCardEnterV = v3();
          //对手飞入手卡的起始位置
          this.PeekHandV = void 0;
          this.handQuat = void 0;
          //手牌角度
          // 布局节点相关
          this.areaList = [];
          //区域节点列表
          this.areaSize = [];
          //区域碰撞检测数据
          this.adTeamLayout = [];
          //对方布局
          this.myTeamLayout = [];
          //自己布局
          this.cardMap = {};
          // 场景中所有卡的相对路由
          this.selectEffects = [];
          // 操作相关
          this.handCards = [];
          //自己手卡列表
          this.selectedCard = void 0;
          //选中的手牌或自己区域里的牌
          this.areaTarget = void 0;
          //操作过程选中放置卡牌的目标区域
          this.canvas = void 0;
          //2d画布
          this.areaCardLay = void 0;
          this.handCardLay = void 0;
          this.peekCardLay = void 0;
          //窥视卡显示层
          this.uiView = void 0;
          this.handView = void 0;
          this.ui = void 0;
          this.myDeck = void 0;
          this.myHand = void 0;
          this.myDrop = void 0;
          this.myDel = void 0;
          this.myEnergy = void 0;
          this.adDeck = void 0;
          this.adHand = void 0;
          this.adDrop = void 0;
          this.adDel = void 0;
          this.adEnergy = void 0;
          this.revealCard = void 0;
          this.showArea = void 0;
          //ui
          this.myhead = void 0;
          this.myNameLab = void 0;
          this.myRevealEffect = void 0;
          this.adhead = void 0;
          this.adNameLab = void 0;
          this.adRevealEffect = void 0;
          this.ruondBtn = void 0;
          this.roundBtnLab = void 0;
          this.progress = void 0;
          this.jshhEffect = void 0;
          this.qxjshhEffect = void 0;
          this.notTimeEffect = void 0;
          this.roundBtnMaskBg = void 0;
          this.exitBtn = void 0;
          this.energyLab = void 0;
          this.doubleBtn = void 0;
          this.doubleLab = void 0;
          this.isWaitInput = false;
          this.mask = void 0;
          this.zero = void 0;
          this.dropToHand = void 0;
          this.canMove = void 0;
          this.canDrop = void 0;
          this.operateHandle = void 0;
          this.roundProgress = "";
          this.roundState = "";
        }

        static get isntance() {
          return this._instance;
        }

        static prevLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this._instance) {
              var loadSub = new Promise((resolve, reject) => {
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).GetResources("prefabs/fight/FightScene", prefab => {
                  var node = instantiate(prefab);
                  GameScene._instance = node.addComponent(GameScene);
                  resolve(GameScene._instance);
                });
              });
              return loadSub;
            }

            return Promise.resolve();
          })();
        }

        static Show() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2._instance) yield _this2.prevLoad();
            director.getScene().addChild(_this2._instance.node);
            _this2._instance.node.active = true;
            if (!_this2.hasLoad) yield _this2.sub;

            _this2._instance.onShow();
          })();
        }

        static Hide() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.hasLoad) yield _this3.sub;
            (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).RemoveAll();

            _this3._instance.Reset();

            _this3._instance.onHide();

            _this3._instance.node.parent && _this3._instance.node.parent.removeChild(_this3._instance.node);
          })();
        }

        onShow() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).StopChannel((_crd && AudioDefine === void 0 ? (_reportPossibleCrUseOfAudioDefine({
              error: Error()
            }), AudioDefine) : AudioDefine).Channels["audio/bgm/*"].channel);
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Play("audio/bgm/MainTheme", 0, 0.3);

            _this4.Reset();

            _this4.FlushRoundBtnStrState((_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).EndRound);

            _this4.FlushRevealPlayer(null);

            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).AddTouchEffect(_this4.ruondBtn, e => {
              if (_this4.selectedCard || _this4.areaTarget) return false;
              var [w, h] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).TestSize(_this4.ruondBtn, true);
              if (!_this4.uiView.checkTouch(e, _this4.ruondBtn, w * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize, h * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize)) return false;
              if (!_this4.isWaitInput) return false;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(_crd && Battle_End_Round === void 0 ? (_reportPossibleCrUseOfBattle_End_Round({
                error: Error()
              }), Battle_End_Round) : Battle_End_Round);

              var clickEffect = _this4.ruondBtn.getChildByName("clickEffect").getComponent(sp.Skeleton);

              clickEffect.node.active = true;
              clickEffect.clearAnimation();
              clickEffect.setAnimation(0, "animation", false);
              clickEffect.setCompleteListener(() => {
                clickEffect.node.active = false;
              });
              return true;
            }, _this4, _this4.canvas);
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).AddTouchEffect(_this4.doubleBtn, e => {
              var _ref;

              if (_this4.selectedCard || _this4.areaTarget) return false;
              var [w, h] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).TestSize(_this4.doubleBtn, true);
              w -= 300, h -= 450;
              if (!_this4.uiView.checkTouch(e, _this4.doubleBtn, w * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize, h * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize)) return false;

              if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).roomData) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("房间不存在了");
                return;
              }

              if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerDoubleResidue((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).getPlayerId(true))) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("加倍次数不足");
                return;
              }

              var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).pb.Server.create();
              server.id = ((_ref = _crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr) == null || (_ref = _ref.creatRoomData) == null ? void 0 : _ref.serverId) || "";
              var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)['battle.protocol.battleroomdouble']();
              data.server = server;
              data.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).roomData.roomId;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)['battle.protocol.battleroomdouble'], data);
              console.log("发送加倍---->");
              return true;
            }, _this4, _this4.canvas);
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).AddTouchEffect(_this4.exitBtn, e => {
              var _ref2, _ref3, _ref4;

              if (_this4.selectedCard || _this4.areaTarget) return false;
              var [w, h] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).TestSize(_this4.exitBtn, true);
              if (!_this4.uiView.checkTouch(e, _this4.exitBtn, w * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize, h * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).PixelSize)) return false;
              var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).pb.Server.create();
              server.id = ((_ref2 = _crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr) == null || (_ref2 = _ref2.creatRoomData) == null ? void 0 : _ref2.serverId) || "";
              var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)['battle.protocol.battleroomleave']();
              data.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).server;
              data.roomId = ((_ref3 = _crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr) == null || (_ref3 = _ref3.roomData) == null ? void 0 : _ref3.roomId) || ((_ref4 = _crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr) == null || (_ref4 = _ref4.creatRoomData) == null ? void 0 : _ref4.roomId);
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)['battle.protocol.battleroomleave'], data);
              console.log("发送离开房间---->");
              return true;
            }, _this4, _this4.canvas);
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)['battle.protocol.battleroomping'], _this4.onBattleroomping, _this4);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).on(_crd && Evt_BattleDoubleUpdate === void 0 ? (_reportPossibleCrUseOfEvt_BattleDoubleUpdate({
              error: Error()
            }), Evt_BattleDoubleUpdate) : Evt_BattleDoubleUpdate, _this4.onBattleDoubleUpdate, _this4);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).on("op_start", _this4.hideViewCard, _this4);

            _this4.onBattleDoubleUpdate(0, false);
          })();
        }

        onHide() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).StopChannel((_crd && AudioDefine === void 0 ? (_reportPossibleCrUseOfAudioDefine({
            error: Error()
          }), AudioDefine) : AudioDefine).Channels["audio/bgm/*"].channel);
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).debug = false;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).off((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)['battle.protocol.battleroomping'], this.onBattleroomping, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_BattleDoubleUpdate === void 0 ? (_reportPossibleCrUseOfEvt_BattleDoubleUpdate({
            error: Error()
          }), Evt_BattleDoubleUpdate) : Evt_BattleDoubleUpdate, this.onBattleDoubleUpdate, this);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).DelTouchEffect(this.ruondBtn, this.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).DelTouchEffect(this.doubleBtn, this.canvas);
        }

        onBattleDoubleUpdate(addCont, isUpdate) {
          if (addCont === void 0) {
            addCont = 0;
          }

          if (isUpdate === void 0) {
            isUpdate = true;
          }

          var num = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getRoomDoubleNum(addCont);
          var oldNum = Number(this.doubleLab.string);
          this.doubleLab.string = "" + num;

          if (isUpdate && num > oldNum) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_ShowBattleDoubleEffect === void 0 ? (_reportPossibleCrUseOfEvt_ShowBattleDoubleEffect({
              error: Error()
            }), Evt_ShowBattleDoubleEffect) : Evt_ShowBattleDoubleEffect, this.doubleBtn.worldPosition);
          }
        }
        /**
         * 结算区域战力
         */


        Settlement() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            for (var _area of _this5.areaList) {
              var myPower = Number(_area.getChildByName("power1").getComponent(Label).string);
              var adPower = Number(_area.getChildByName("power2").getComponent(Label).string);
              _area.getChildByName("mywin01").active = false;
              _area.getChildByName("adwin01").active = false;

              var mywin = _area.getChildByName("mywin02");

              var adwin = _area.getChildByName("adwin02");

              if (myPower > adPower) {
                mywin.active = true;
                adwin.active = false;
                yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                  error: Error()
                }), Second) : Second)(0.5);
              } else if (myPower < adPower) {
                mywin.active = false;
                adwin.active = true;
                yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                  error: Error()
                }), Second) : Second)(0.5);
              } else {
                mywin.active = false;
                adwin.active = false;
              }
            }
          })();
        } //房间ping结果返回


        onBattleroomping(data) {
          return;
          var result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)['battle.protocol.battleroomping'].decode(data);

          if (result.res.code !== 200) {//房间不存在了
          }
        }

        onBattleroomdouble() {}

        onLoad() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0);
            _this6.areaCardLay = _this6.node.getChildByName("areaCardLay");
            _this6.handCardLay = _this6.node.getChildByName("myHand");
            _this6.peekCardLay = _this6.node.getChildByName("peekCardLay");
            _this6.mask = _this6.node.getChildByName("mask");
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).SceneHight = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera.node.position.y;
            var ls = ["ui", "myDeck", "myHand", "myDrop", "myDel", "costmodel/myEnergy", "adDeck", "adHand", "adDrop", "adDel", "ui/adEnergy"];

            for (var s of ls) {
              var k = s.split("/").pop();
              _this6[k] = _this6.node.getChildByPath(s);
              _this6[k].active = true;
            }

            _this6.canvas = find("Canvas");
            var forward = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera.node.forward.negative();
            var [rx, ry, rz] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).EulerAngles(v3(0, 1, 0), forward);

            _this6.myHand.setWorldRotationFromEuler(rx, ry, rz);

            _this6.ui.setWorldRotationFromEuler(rx, ry, rz);

            var child = _this6.myHand.children[0];
            _this6.handView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
              error: Error()
            }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, _this6.myHand, Vec3.UNIT_Y);
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).HandPlane = _this6.handView.plane;
            _this6.handQuat = child.getWorldRotation();
            var v = _this6.handView.localRightDown,
                handCenter = v3();
            handCenter.set(v.x - 1, v.y, v.z - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardHide / 4);
            Vec3.transformMat4(_this6.handCenter, handCenter, _this6.handView.mat);

            _this6.myHand.getWorldRotation().getEulerAngles(_this6.handRotation);

            _this6.myDeck.getWorldPosition(_this6.myCardEnterV);

            _this6.adDeck.getWorldPosition(_this6.adCardEnterV);

            var _loop = function* _loop() {
              var area = _this6.node.getChildByName("area" + i);

              var frameSelect = area.getChildByName("frame_select");
              var p = frameSelect.worldPosition.clone();

              _this6.node.addChild(frameSelect);

              frameSelect.setPosition(p.x, p.y, p.z);
              frameSelect.setSiblingIndex(3);

              _this6.selectEffects.push(frameSelect);

              _this6.areaList.push(area);

              var layout = [];
              var children = area.getChildByPath("team1").children.concat();

              for (var _child of children) {
                layout.push(_child);
              }

              var sk = area.getChildByName("filed").getComponent(sp.Skeleton);
              sk.setCompleteListener(() => {
                var _sk$getCurrent;

                if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).CheckAnimation(sk, "idle") && (sk == null || (_sk$getCurrent = sk.getCurrent(0)) == null ? void 0 : _sk$getCurrent.animation.name) != "idle") sk.setAnimation(0, "idle", true);
              });
              var hitTest1 = area.getChildByName("hitTest1");
              var hitTest2 = area.getChildByName("hitTest2");
              hitTest1.name = hitTest1.name + "_" + area.name;
              hitTest2.name = hitTest2.name + "_" + area.name;
              var hitSize = hitTest1.getComponent(UITransform).contentSize;
              var rect = new Rect(hitTest1.worldPosition.x, 5, hitSize.width, 20);
              _this6.areaSize[i] = rect;
              _this6.myTeamLayout[i] = layout;
              area['hitTest1'] = hitTest1;
              area['hitTest2'] = hitTest2;
              var p1 = hitTest1.worldPosition.clone();
              var p2 = hitTest2.worldPosition.clone();

              _this6.node.addChild(hitTest1);

              _this6.node.addChild(hitTest2);

              hitTest1.setSiblingIndex(4);
              hitTest2.setSiblingIndex(4);
              hitTest1.setWorldPosition(p1);
              hitTest2.setWorldPosition(p2);
              layout = [];
              children = area.getChildByPath("team2").children.concat();

              for (var _child2 of children) {
                layout.push(_child2);
              }

              _this6.adTeamLayout[i] = layout;
            };

            for (var i = 0; i < 3; i++) {
              yield* _loop();
            }

            _this6.PeekHandV = v3(...(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ScreenToPlane((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).viewSize.width / 2, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).viewSize.height / 2, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).HandPlane));
            _this6.uiView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
              error: Error()
            }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, _this6.ui, Vec3.UNIT_Y);

            _this6.uiView.setLocalLeftDown(_this6.ui.getChildByName("my"), 2.5, 4);

            _this6.uiView.setLocalRightUp(_this6.ui.getChildByName("ad"), 2.7, 2.5); // this.uiView.setLocalLeftUp(this.ui.getChildByName("double"), 9, 5);


            console.log("**************", _this6.ui.getChildByName("double").position.toString()); // this.uiView.setLocalRightDown(this.ui.getChildByName("myEnergy"), 10, 13);

            _this6.ruondBtn = _this6.ui.getChildByName("roundBtn");
            _this6.roundBtnLab = _this6.ui.getChildByPath("roundBtn/btnLab").getComponent(Label);
            _this6.jshhEffect = _this6.ui.getChildByPath("roundBtn/jshhEffect");
            _this6.qxjshhEffect = _this6.ui.getChildByPath("roundBtn/qxjshhEffect");
            _this6.notTimeEffect = _this6.ui.getChildByPath("roundBtn/notTimeEffect");
            _this6.roundBtnMaskBg = _this6.ui.getChildByPath("roundBtn/maskBg");
            _this6.progress = _this6.ui.getChildByPath("roundBtn/progress").getComponent(Sprite);

            _this6.uiView.setLocalRightDown(_this6.ruondBtn, 2, 8.5);

            _this6.exitBtn = _this6.ui.getChildByPath("exitBtn");

            _this6.uiView.setLocalLeftDown(_this6.exitBtn, 2, 8.5);

            _this6.myhead = _this6.ui.getChildByPath("my/myhead").getComponent(Sprite);
            _this6.myNameLab = _this6.ui.getChildByPath("my/myNameLab").getComponent(Label);
            _this6.myRevealEffect = _this6.ui.getChildByPath("my/revealEffect").getComponent(sp.Skeleton);
            _this6.adhead = _this6.ui.getChildByPath("ad/adhead").getComponent(Sprite);
            _this6.adNameLab = _this6.ui.getChildByPath("ad/adNameLab").getComponent(Label);
            _this6.adRevealEffect = _this6.ui.getChildByPath("ad/revealEffect").getComponent(sp.Skeleton);
            _this6.doubleBtn = _this6.ui.getChildByPath("double");
            _this6.doubleLab = _this6.ui.getChildByPath("double/effect/doubleLab").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
              error: Error()
            }), SpriteLabel) : SpriteLabel);
            _this6.doubleLab.font = "sheets/numberImg/num2";
            _this6.energyLab = _this6.node.getChildByPath("costmodel/myEnergy").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
              error: Error()
            }), SpriteLabel) : SpriteLabel);
            _this6.energyLab.font = "sheets/numberImg/num3";
            var size = view.getVisibleSizeInPixel();
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ShowPoint = v3(...(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ScreenToPlane(size.width / 2, size.height / 2, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ScenePlane, 22));
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ScreamRotation = math.quat();
            var out = v3();

            _this6.myHand.getWorldRotation().getEulerAngles(out);

            math.Quat.fromEuler((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ScreamRotation, out.x, 0, 0);

            _this6.myHand.children.forEach(value => {
              value.parent.removeChild(value);
              value.destroy();
            });

            _this6.myHand.removeAllChildren();

            _this6.zero = _this6.node.worldPosition.clone();
            _this6.zero.y += 6;
            _this6.revealCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            _this6.showArea = (_crd && ShowArea === void 0 ? (_reportPossibleCrUseOfShowArea({
              error: Error()
            }), ShowArea) : ShowArea).Create();
            if (!GameScene._instance) GameScene._instance = _this6;
            GameScene.hasLoad = true;
            if (GameScene.loadHandle) GameScene.loadHandle();
          })();
        }

        skillTarget(isMy, attacker, targets, myarea, adarea) {
          if (myarea === void 0) {
            myarea = [0, 1, 2];
          }

          if (adarea === void 0) {
            adarea = [0, 1, 2];
          }

          var myAreas = [],
              adAreas = [];

          for (var idx of myarea) {
            var _area2 = this.areaList[idx];
            if (idx >= 0 && _area2 != undefined) myAreas.push(_area2['hitTest1']); //area.getChildByName("hitTest1_" + area.name));
          }

          for (var _idx of adarea) {
            var _area3 = this.areaList[_idx];
            if (_idx >= 0 && _area3 != undefined) adAreas.push(_area3['hitTest2']); //area.getChildByName("hitTest2_" + area.name));
          }

          var loca = [];

          if (isMy) {
            loca = [myAreas, this.myDeck, this.myHand, this.myDrop, this.myDel, this.myEnergy, adAreas, this.adDeck, this.adHand, this.adDrop, this.adDel, this.adEnergy];
          } else {
            loca = [adAreas, this.adDeck, this.adHand, this.adDrop, this.adDel, this.adEnergy, myAreas, this.myDeck, this.myHand, this.myDrop, this.myDel, this.myEnergy];
          }

          return new (_crd && EffectTarget === void 0 ? (_reportPossibleCrUseOfEffectTarget({
            error: Error()
          }), EffectTarget) : EffectTarget)(attacker, targets, ...loca);
        }
        /**
         * 停止所有动作
         */


        EndAllAction() {
          (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill).EndAll();

          for (var card of this.handCards) {
            var _card$action;

            card == null || (_card$action = card.action) == null || _card$action.end();
          }

          for (var k in this.cardMap) {
            var _obj$card, _obj$card2;

            var obj = this.cardMap[k];
            if (obj != null && (_obj$card = obj.card) != null && (_obj$card = _obj$card.action) != null && _obj$card.running) obj == null || (_obj$card2 = obj.card) == null || (_obj$card2 = _obj$card2.action) == null || _obj$card2.end();
          }
        }
        /**
         * 开始操作
         * @param canMove 
         * @param canDrop 
         * @param playHandCard 
         */


        StartOperate(canMove, canDrop, playHandCard) {
          this.canMove = canMove;
          this.canDrop = canDrop;
          this.operateHandle = playHandCard;
          this.canvas.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.canvas.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.canvas.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
        /**
         * 结束操作
         */


        EndOperate() {
          this.UnSelect();
          this.canvas.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.canvas.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.canvas.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.canvas.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
        /**
         * 中断选卡操作
         */


        UnSelect() {
          if (this.selectedCard) {
            this.selectedCard.StopDrag();
            this.LayoutAllHandCards();
            this.LayoutAllArea();
            this.selectedCard = undefined;
          }
        }
        /**点击 */


        onTouchStart(e) {
          if (this.mask.active) return;
          var pt = e.getLocation(); //先计算是否点击到手牌

          var [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ScreenToPlane(pt.x, pt.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).HandPlane);

          for (var card of this.handCards) {
            if (card.State == (_crd && CardState === void 0 ? (_reportPossibleCrUseOfCardState({
              error: Error()
            }), CardState) : CardState).Handing && card.HitTest(x, y, z)) {
              var msg = this.canMove(card.instId);

              if (msg) {
                // MsgPanel.Show(msg);
                continue;
              } //if (this.selectedCard == undefined) this.flushSelectEffect(true);


              this.selectedCard = card;
              this.selectedCard['isHandCard'] = true;
              this.flushSelectEffect(true); // this.selectedCard.parent.removeChild(this.selectedCard);
              // this.node.addChild(this.selectedCard);

              this.canvas.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
              return;
            }
          } //再计算是否点击到自己的区域牌


          [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ScreenToPlane(pt.x, pt.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).ScenePlane);

          for (var k in this.cardMap) {
            var obj = this.cardMap[k];

            var _card = obj == null ? void 0 : obj.card;

            if (obj != null && obj.isMy && _card && _card.HitTest && _card.HitTest(x, y, z)) {
              var _area4 = obj == null ? void 0 : obj.area;

              var _msg = this.canMove(_card.instId, _area4);

              if (_msg) {
                // MsgPanel.Show(msg);
                continue;
              }

              this.selectedCard = _card;
              this.selectedCard['isHandCard'] = false;
              this.node.addChild(this.selectedCard);
              this.canvas.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
              return;
            }
          }
        }
        /**拖动操作 */


        onTouchMove(e) {
          var p = e.getLocation();

          if (this.selectedCard) {
            // 拖动中
            this.selectedCard.Drag(p.x, p.y);
            var x, y, z;
            this.dropToHand = false;
            this.areaTarget = undefined;

            if (this.selectedCard['isHandCard']) {
              // 拖动的是手牌
              [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).ScreenToPlane(p.x, p.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).ScenePlane);

              for (var i = 0; i < this.areaSize.length; i++) {
                var rect = this.areaSize[i];

                if (Math.abs(x - rect.x) <= rect.width / 2 && Math.abs(z - rect.y) <= rect.height / 2) {
                  // this.flushSelectEffect(i);
                  if (!this.canDrop(this.selectedCard.instId, i)) {
                    this.areaTarget = i;
                  } else {// console.log("cannotDrop", this.canDrop(this.selectedCard.instId, i));
                  }

                  break;
                }
              }

              if (this.areaTarget == undefined) {// this.flushSelectEffect();
              } else return;
            } // 计算是否触碰到手牌区域


            [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ScreenToPlane(p.x, p.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).HandPlane);
            var out = v3();
            Vec3.transformMat4(out, v3(x, y, z), this.handView.invertMat);

            if (Math.abs(out.z) >= 9.8) {
              this.dropToHand = true;
              return;
            }
          }
        }
        /**松手后的计算 */


        onTouchEnd(e) {
          this.canvas.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.flushSelectEffect();

          if (this.selectedCard != undefined) {
            var _instId = this.selectedCard.Id;

            if (!this.selectedCard.isDragging && this.selectedCard.cardData) {
              this.viewCard(this.selectedCard.cardData, this.selectedCard.getWorldPosition());
            }

            this.selectedCard.StopDrag(); // 处理场景区域操作

            if (this.areaTarget != undefined) {
              var _this$selectedCard;

              var failType = this.operateHandle(_instId, this.areaTarget, this == null || (_this$selectedCard = this.selectedCard) == null ? void 0 : _this$selectedCard.state);
              this.areaTarget = undefined;
              this.selectedCard = undefined;

              if (failType) {}
            } else if (this.dropToHand) {
              var _this$selectedCard2;

              this.dropToHand = undefined;

              var _failType = this.operateHandle(_instId, undefined, this == null || (_this$selectedCard2 = this.selectedCard) == null ? void 0 : _this$selectedCard2.state);

              this.selectedCard = undefined;
              this.areaTarget = undefined;

              if (_failType) {}
            } else {
              this.LayoutAllHandCards();
              this.LayoutAllArea();
              this.selectedCard = undefined;
              this.areaTarget = undefined;
            }
          } else if (this.mask.active) {
            this.hideViewCard();
          } else {
            var pt = e.getLocation();
            var [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ScreenToPlane(pt.x, pt.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).HandPlane);

            for (var card of this.handCards) {
              if (card.cardData && card.HitTest(x, y, z)) {
                this.viewCard(card.cardData, card.getWorldPosition());
                return;
              }
            } //再计算是否点击到自己的区域牌


            [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ScreenToPlane(pt.x, pt.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).ScenePlane);

            for (var k in this.cardMap) {
              var obj = this.cardMap[k];

              var _card2 = obj == null ? void 0 : obj.card;

              if (_card2 != null && _card2.cardData && _card2 != null && _card2.HitTest(x, y, z)) {
                this.viewCard(_card2.cardData, _card2.getWorldPosition());
                return;
              }
            } //计算是否触碰地形区域
            // for (let area of this.areaList) {
            //     let icon = area.getChildByName("hitTest");
            //     let p = icon.worldPosition;
            //     let size = icon.getComponent(UITransform).contentSize;
            //     // console.log("hitTest", Math.abs(p.x - x), size.width * icon.scale.x, Math.abs(p.z - z), size.height * icon.scale.y);
            //     if (Math.abs(p.x - x) < size.width * icon.scale.x && Math.abs(p.z - z) <= size.height * icon.scale.y) {
            //         this.viewCard(area);
            //         return;
            //     }
            // }

          }
        }
        /**
         * 展示详细信息
         * @param data 
         * @param pos 
         */


        viewCard(data, pos) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (data instanceof Node) {
              var _area5 = data;

              _this7.revealCard.EndViewCard();

              _this7.mask.active = true;

              _this7.node.addChild(_this7.showArea);

              var filed = _area5.getChildByName("filed");

              var sd = filed.active ? filed.getComponent(sp.Skeleton).skeletonData : undefined;

              var desc = _area5.getChildByName("desc").getComponent(Label).string;

              var myPower = _area5.getChildByName("power1").getComponent(Label).string;

              var adPower = _area5.getChildByName("power2").getComponent(Label).string;

              _this7.showArea.View(sd, desc, myPower, adPower, _area5.worldPosition);
            } else {
              _this7.showArea.Hide();

              var cardData = data;

              _this7.node.addChild(_this7.revealCard);

              _this7.revealCard.active = true;
              yield _this7.revealCard.InitData(true, cardData);

              if (!_this7.mask.active) {
                _this7.mask.active = true;
                if (!pos) pos = _this7.zero;

                _this7.revealCard.setWorldPosition(pos);

                _this7.revealCard.ViewCard();
              }
            }
          })();
        }

        hideViewCard() {
          this.mask.active = false;
          this.showArea.Hide();
          this.revealCard.EndViewCard();
          this.revealCard.active = false;
        }
        /**区域选中效果 */


        flushSelectEffect(value) {
          if (value === void 0) {
            value = false;
          }

          //,area?: number) {
          for (var i = 0; i < this.areaList.length; i++) {
            var _this$selectedCard3;

            var isFull = !this.canDrop((_this$selectedCard3 = this.selectedCard) == null ? void 0 : _this$selectedCard3.instId, i); // this.areaList[i].getChildByName("frame_select").active = value && isFull;//i == area;

            this.selectEffects[i].active = value && isFull;
          }
        }
        /**刷新对战玩家信息 */


        FlushPlayerInfo(isPlayerA, data) {
          var _data$deckAttr;

          var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetHead(data == null || (_data$deckAttr = data.deckAttr) == null ? void 0 : _data$deckAttr.avatarId);
          var headName = "";

          if (cfg) {
            headName = cfg.icon;
          } else {
            this.myhead.node.active = false;
          }

          this.myhead.node.active = true;

          if (isPlayerA) {
            this.myNameLab.string = data.name;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "head/", headName, "spriteFrame"), SpriteFrame, res => {
              this.myhead.spriteFrame = res;
            });
          } else {
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "head/", headName, "spriteFrame"), SpriteFrame, res => {
              this.adhead.spriteFrame = res;
            });
            this.adNameLab.string = data.name;
          }
        }
        /**刷新回合数 */


        FlushRound(curRoundNum, maxRound) {
          this.progress.color.set(192, 40, 255, 140);
          this.progress.fillRange = 0;
          this.progress.node.active = false;
          this.roundProgress = "  " + curRoundNum + "/" + maxRound;
          this.roundBtnLab.string = this.roundState + "\n" + this.roundProgress;
        }

        /**刷新回合按钮文本状态 */
        FlushRoundBtnStrState(state) {
          switch (state) {
            case (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).EndRound:
              this.roundState = "\u7ED3\u675F\u56DE\u5408...";
              this.roundBtnLab.string = this.roundState + "\n" + this.roundProgress;
              break;

            case (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).PlaceRound:
              this.roundState = "\u653E\u7F6E\u4E2D...";
              break;

            case (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).CancelRound:
              this.roundState = "\u53D6\u6D88\u7ED3\u675F\u56DE\u5408";
              this.roundBtnLab.string = this.roundState;
              break;
          }
        }
        /**
         * 刷新优先揭示卡牌玩家特效
         * @param isPlayerA 
         */


        FlushRevealPlayer(isPlayerA) {
          if (isPlayerA == null) {
            this.myRevealEffect.node.active = false;
            this.adRevealEffect.node.active = false;
            return;
          }

          if (isPlayerA) {
            this.myRevealEffect.node.active = true;
            this.myRevealEffect.clearAnimation();
            this.myRevealEffect.setAnimation(0, "blue", false);
            this.myRevealEffect.setCompleteListener(() => {
              this.myRevealEffect.node.active = false;
            });
            this.adRevealEffect.node.active = false;
          } else {
            this.myRevealEffect.node.active = false;
            this.adRevealEffect.node.active = true;
            this.adRevealEffect.clearAnimation();
            this.adRevealEffect.setAnimation(0, "red", false);
            this.adRevealEffect.setCompleteListener(() => {
              this.adRevealEffect.node.active = false;
            });
          }
        }
        /**刷新回合按钮文本 */


        FlushRoundTime(time, isHaveEnergy, roundState, totalTime) {
          if (totalTime === void 0) {
            totalTime = 30;
          }

          this.progress.node.active = true;
          var rote = time / totalTime;
          this.progress.fillRange = rote;
          var b = rote * 255;
          this.progress.color.set(192, 40, b, 140);
          this.roundBtnMaskBg.active = false; //出牌阶段

          if (roundState == (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).EndRound) {
            this.qxjshhEffect.active = false; //出牌能量不足只出强制结束回合特效

            if (!isHaveEnergy) {
              this.jshhEffect.active = true;
              this.notTimeEffect.active = false;
            } else {
              this.jshhEffect.active = false;

              if (time > 0 && time <= 5) {
                this.notTimeEffect.active = true;
              } else {
                this.notTimeEffect.active = false;
              }
            }

            return;
          } //可取消阶段


          if (roundState == (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).CancelRound) {
            this.qxjshhEffect.active = true;
            this.jshhEffect.active = false;
            this.notTimeEffect.active = false;
            return;
          } //放置阶段


          if (roundState == (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).PlaceRound) {
            this.qxjshhEffect.active = false;
            this.jshhEffect.active = false;
            this.notTimeEffect.active = false;
            this.roundBtnMaskBg.active = true;
            return;
          }
        }
        /**刷新能量 */


        FlushEnergy(num, data) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).Energy = num;
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            if (data && data.fromSkillId) {
              var attacker = _this8.findCard(data.fromInstId);

              var target = _this8.findCard(TouchInstId(data));

              var tag = _this8.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, true);
            }

            _this8.energyLab.string = "" + num;
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }

        update(dt) {
          if (!GameScene.hasLoad) return;
          var sorts = [];
          var children = this.areaCardLay.children;

          for (var child of children) {
            sorts.push({
              index: child.getSiblingIndex(),
              node: child
            });
          }

          sorts.sort((a, b) => a.node.position.z - b.node.position.z);

          for (var i = 0; i < sorts.length; i++) {
            var obj = sorts[i];

            if (obj.index != i) {
              obj.node.setSiblingIndex(i);
            }
          }
        }
        /**
         * 从卡组发牌到手卡
         * @param data 
         * @returns 
         */


        AddHandCard(data) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            if (data.fromSkillId) {
              var attacker = _this9.findCard(data.fromInstId);

              var target = _this9.findCard(TouchInstId(data)) || attacker;
              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, _this9.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card]));
            }

            var cards = data.cards; // 排除相同的

            var _loop2 = function* _loop2(card) {
              var index = cards.findIndex(value => value.instId == card.instId);

              if (index != -1) {
                card.FlushData(true, cards[index]);
                cards.splice(index, 1);
              }
            };

            for (var card of _this9.handCards) {
              yield* _loop2(card);
            } // 刷新一下已有手牌的布局，为飞进来的卡牌让出位置


            var p = Vec3.clone(_this9.handCenter);
            var total = (_this9.handCards.length + cards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
            p.x = _this9.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide / 2;

            for (var i = 0; i < _this9.handCards.length; i++) {
              var _card3 = _this9.handCards[i];

              _this9.handCardLay.addChild(_card3);

              _card3.LayoutHands(p, _this9.handQuat);

              p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide;
            } // 开始飞入


            var promises = [];

            for (var _i = 0; _i < cards.length; _i++) {
              var cardData = cards[_i];
              var newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              newCard.InitData(true, cardData, _this9.handRotation); // this.node.addChild(newCard);

              _this9.handCards.push(newCard);

              var promise = newCard.SendToHand(_this9.myCardEnterV, p, _this9.handQuat);

              _this9.handCardLay.addChild(newCard);

              promises.push(promise); // this.handCards.push(newCard);

              p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide;
            }

            yield Promise.all(promises);
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 刷新所有手牌布局
         * @returns 
         */


        LayoutAllHandCards() {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            // 刷新一下已有手牌的布局，为飞进来的卡牌让出位置
            var p = Vec3.clone(_this10.handCenter);
            var total = (_this10.handCards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
            p.x = _this10.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide / 2;
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            var ps = [];

            for (var i = 0; i < _this10.handCards.length; i++) {
              var card = _this10.handCards[i];
              ps.push(card.LayoutHands(p, _this10.handQuat));
              p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide;
            }

            yield Promise.all(ps);
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 从任意位置飞到不可视位置
         * @param isPlayerA 
         * @param data 
         * @param fromData 
         */


        CopyCardToUnVisible(isPlayerA, data, fromData) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            var _fromCard;

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            var fromCard = _this11.findCard(fromData.instId);

            if (!fromCard && data['fromLocation']) fromCard = cardLoca(_this11.fileLocation(isPlayerA, data['fromLocation']), isPlayerA);

            if (data.fromSkillId) {
              var attacker = _this11.findCard(data.fromInstId);

              var _target = _this11.findCard(TouchInstId(data)) || fromCard;

              var tag = _this11.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [_target == null ? void 0 : _target.card], [attacker.area], [_target == null ? void 0 : _target.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, isPlayerA);
            }

            var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(isPlayerA, data.card, _this11.zero);

            var target = _this11.fileLocation(isPlayerA, data.card.location, data.card.area);

            _this11.handCardLay.addChild(card);

            card.setWorldPosition(((_fromCard = fromCard) == null ? void 0 : _fromCard.card.worldPosition) || _this11.zero);
            yield card.MoveTo(target.worldPosition);
            card.receive();
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 更新手牌
         */


        FlushHandCard(datas) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            var ls = {};

            _this12.handCards.forEach(value => ls[value.instId] = value);

            _this12.handCards.length = 0;

            for (var i = 0; i < datas.length; i++) {
              var data = datas[i];

              if (ls[data.instId]) {
                ls[data.instId].FlushData(true, datas[i]);

                _this12.handCards.push(ls[data.instId]);

                delete ls[data.instId];
              } else {
                var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                  error: Error()
                }), SceneCard) : SceneCard).Create();
                card.InitData(true, data, _this12.handRotation);

                _this12.handCardLay.addChild(card);

                if (_this12.selectedCard) card.setWorldPosition(_this12.selectedCard.worldPosition);

                _this12.handCards.push(card);
              }
            }

            for (var k in ls) {
              ls[k].receive();
              delete ls[k];
            }

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            var ps = [];
            var p = Vec3.clone(_this12.handCenter);
            var total = Math.max(0, _this12.handCards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
            p.x = _this12.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide / 2;

            for (var _i2 = 0; _i2 < _this12.handCards.length; _i2++) {
              var _card4 = _this12.handCards[_i2];
              ps.push(_card4.LayoutHands(p, _this12.handQuat));
              p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide;
            }

            yield Promise.all(ps);
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 出牌到区域
         * @param cardData 
         * @param area 
         * @param index 
         */


        SendMyCardToArea(cardData, area, index) {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            if (_this13.cardMap[cardData.instId]) {
              var _obj$card3;

              var obj = _this13.cardMap[cardData.instId];
              console.error("场景中已有相同id的卡 area:" + obj.area + " index:" + obj.index);
              (_obj$card3 = obj.card) == null || _obj$card3.receive == null || _obj$card3.receive();
              delete _this13.cardMap[cardData.instId];
            }

            var newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            if (_this13.selectedCard) newCard.setWorldPosition(_this13.selectedCard.worldPosition); // this.node.addChild(newCard);

            _this13.areaCardLay.addChild(newCard);

            _this13.cardMap[cardData.instId] = {
              isMy: true,
              card: newCard,
              area: area,
              index: index
            };
            newCard.InitData(true, cardData, _this13.handRotation);
            var set = _this13.myTeamLayout[area][index];
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            yield newCard.PlayToMyArea(set.worldPosition, set.rotation); // this.areaCardLay.addChild(newCard);

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 添加对手牌
         * @param cardData 
         * @param area 
         * @param index 
         */


        SendAdCardToArea(cardData, area, index) {
          var _this14 = this;

          return _asyncToGenerator(function* () {
            if (_this14.cardMap[cardData.instId]) {
              var _obj$card4;

              var obj = _this14.cardMap[cardData.instId];
              console.error("场景中已有相同id的卡 area:" + obj.area + " index:" + obj.index);
              (_obj$card4 = obj.card) == null || _obj$card4.receive == null || _obj$card4.receive();
              delete _this14.cardMap[cardData.instId];
            }

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            var newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create(); // this.node.addChild(newCard);

            _this14.areaCardLay.addChild(newCard);

            newCard.setWorldPosition(_this14.adCardEnterV.x, _this14.adCardEnterV.y, _this14.adCardEnterV.z);
            _this14.cardMap[cardData.instId] = {
              isMy: false,
              card: newCard,
              area: area,
              index: index
            };
            newCard.InitData(false, cardData, _this14.handRotation);
            var set = _this14.adTeamLayout[area][index];
            yield newCard.PlayToAdArea(set.worldPosition); // this.areaCardLay.addChild(newCard);

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 刷新区域状态
         * @param data 
         */


        FlushTerrain(ispLayerA, data, ownerPlayerId) {
          var _this15 = this;

          return _asyncToGenerator(function* () {
            var terrainDatas;
            var Reveal = []; //第几回合开启

            var TerrainInstIds = []; //地形实际的instId

            if (data instanceof (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomGamePlayData) {
              terrainDatas = data.terrains;
              Reveal = data.levelData.reveal;

              for (var k in data.players) {
                var player = data.players[k];
                var isMy = player.playerId == ownerPlayerId;

                for (var i = 0; i < player.terrain.length; i++) {
                  if (!TerrainInstIds[i]) TerrainInstIds[i] = {
                    my: "",
                    ad: ""
                  };

                  if (isMy) {
                    TerrainInstIds[i].my = player.terrain[i].selfInstId;
                  } else {
                    TerrainInstIds[i].ad = player.terrain[i].selfInstId;
                  }
                }
              }
            } else {
              terrainDatas = data;
            }

            for (var _i3 = 0; _i3 < terrainDatas.length; _i3++) {
              var terrain = terrainDatas[_i3];
              var _area6 = _this15.areaList[terrain.area];

              if (!_this15.cardMap[terrain.instId]) {
                var card = _area6.getChildByName("hitTest");

                card['instId'] = terrain.instId;
                _this15.cardMap[terrain.instId] = {
                  isMy: true,
                  card: card,
                  area: undefined,
                  index: undefined
                };
              }

              if (TerrainInstIds[_i3]) {
                var instId1 = TerrainInstIds[_i3].my,
                    instId2 = TerrainInstIds[_i3].ad;

                if (!_this15.cardMap[instId1]) {
                  var _card5 = _area6['hitTest1']; //area.getChildByName("hitTest1_area" + i);

                  _card5['instId'] = instId1;
                  _this15.cardMap[instId1] = {
                    isMy: true,
                    card: _card5,
                    area: _i3,
                    index: undefined
                  };
                }

                if (!_this15.cardMap[instId2]) {
                  var _card6 = _area6['hitTest2']; //area.getChildByName("hitTest2_area" + i);

                  _card6['instId'] = instId2;
                  _this15.cardMap[instId2] = {
                    isMy: false,
                    card: _card6,
                    area: _i3,
                    index: undefined
                  };
                }
              }

              _area6["instId"] = terrain.instId;

              var desc = _area6.getChildByName('desc').getComponent(Label),
                  mask = _area6.getChildByName('mask'),
                  destory = _area6.getChildByName('destory'),
                  filed = _area6.getChildByName("filed").getComponent(sp.Skeleton);

              desc.node.active = false;
              mask.active = false;
              destory.active = false;
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Get("Area")[terrain.configId];
              var filedUrl = std ? "spine/" + std.AreaIcon + "/" + std.AreaIcon : "spine/filed_0000/filed_0000";
              var ainmName = void 0,
                  loop = false;
              desc.node.active = false;

              switch (terrain.terrainState) {
                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateUnknown:
                  // area.getChildByName('mask').active = true;
                  desc.string = "未知";
                  break;

                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateHide:
                  if (terrain.peek && terrain.peek.indexOf(ownerPlayerId) > -1) {
                    ainmName = "idle";
                    loop = true; // desc.node.active = true;

                    desc.string = std.AffectText;
                  } else {
                    ainmName = "idle";
                    loop = true; // desc.node.active = true;

                    if (Reveal[_i3]) {
                      if (Reveal[_i3] - (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                        error: Error()
                      }), FightData) : FightData).currentRound == 1) {
                        desc.string = "下回合揭示";
                      } else {
                        desc.string = "第" + Reveal[_i3] + "回合揭示";
                      }

                      desc.node.active = true;
                    } else {
                      desc.string = "未揭示";
                    }
                  }

                  break;

                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateShow:
                  ainmName = "show";

                  if (desc.string != std.AffectText) {
                    // desc.node.active = true;
                    desc.string = std.AffectText;
                    var scale = desc.node.scale.x;
                    tween(desc.node).to(0.1, {
                      scale: v3(scale * 1.5, scale * 1.5, scale * 1.5)
                    }).to(0.1, {
                      scale: v3(scale, scale, scale)
                    }).start();
                    yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                      error: Error()
                    }), Second) : Second)(0.2); // for (let k in this.cardMap) {
                    //     let obj = this.cardMap[k];
                    //     if (obj.area == terrain.area) {
                    //         obj.card.Shake(2.5);
                    //     }
                    // }
                  }

                  break;

                case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomInTerrainState.TerrainStateDestroy:
                  _area6.getChildByName('destory').active = true;
                  break;
              }

              if (ainmName) {
                filed.node.active = true;

                if (filedUrl && filed['filedUrl'] != filedUrl) {
                  filed['filedUrl'] = filedUrl;
                  filed.skeletonData = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub(filedUrl, sp.SkeletonData);
                  filed.setAnimation(0, ainmName, loop);
                }
              } else {
                filed.node.active = false;
              }
            }
          })();
        }
        /**
         * 锁定
         * @param isPlayerA 
         * @param data 
         */


        LockTerrain(isPlayerA, data) {
          var _this16 = this;

          return _asyncToGenerator(function* () {
            var attacker = _this16.findCard(data.fromInstId);

            var cardLoca = _this16.findCard(data.toInstId);

            if (data.fromSkillId) {
              var tag = _this16.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [cardLoca == null ? void 0 : cardLoca.card], [cardLoca == null ? void 0 : cardLoca.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, isPlayerA);
            }
          })();
        }
        /**
         * 刷新战力
         * @param isPlayerA 
         * @param area 
         * @param power 
         */


        FlushAreaPower(isPlayerA, area, power) {
          var areaNode = this.areaList[area];
          var apower, bpower, aeffect, beffect;

          if (isPlayerA) {
            apower = areaNode.getChildByName("power1").getComponent(Label);
            bpower = areaNode.getChildByName("power2").getComponent(Label);
            aeffect = areaNode.getChildByName("mywin01").getComponent(ParticleSystem);
            beffect = areaNode.getChildByName("adwin01").getComponent(ParticleSystem);
          } else {
            apower = areaNode.getChildByName("power2").getComponent(Label);
            bpower = areaNode.getChildByName("power1").getComponent(Label);
            aeffect = areaNode.getChildByName("adwin01").getComponent(ParticleSystem);
            beffect = areaNode.getChildByName("mywin01").getComponent(ParticleSystem);
          }

          if (apower.string) {
            var old = Number(apower.string);

            if (old < power) {}
          }

          apower.string = power + "";

          if (power > Number(bpower.string) || 0) {
            aeffect.node.active = true;
            beffect.node.active = false;
          } else if (power < Number(bpower.string) || 0) {
            aeffect.node.active = false;
            beffect.node.active = true;
          } else {
            aeffect.node.active = false;
            beffect.node.active = false;
          }
        }
        /**
         * 刷新指定阵营状态
         * @param isPlayerA 
         * @param area 
         * @param terrains 
         */


        FlushAreaCrads(isPlayerA, area, terrains) {
          var _this17 = this;

          return _asyncToGenerator(function* () {
            var datas = terrains.cards; //先清理数据不同步的卡牌

            var _loop3 = function* _loop3() {
              var obj = _this17.cardMap[k];

              if (obj.card instanceof (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
                error: Error()
              }), GameObj) : GameObj) && obj.area == area && obj.isMy == isPlayerA && datas.findIndex(value => value.instId == obj.card.instId) == -1) {
                var _obj$card7;

                (_obj$card7 = obj.card) == null || _obj$card7.receive == null || _obj$card7.receive();
                obj.card = undefined;
                delete _this17.cardMap[k];
              }
            };

            for (var k in _this17.cardMap) {
              yield* _loop3();
            }

            for (var i = 0; i < datas.length; i++) {
              var data = datas[i];
              var obj = _this17.cardMap[data.instId];

              if (!obj) {
                var _obj$card5;

                var newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                  error: Error()
                }), SceneCard) : SceneCard).Create();

                _this17.areaCardLay.addChild(newCard);

                obj = {
                  isMy: isPlayerA,
                  card: newCard,
                  area: area,
                  index: i
                };
                _this17.cardMap[data.instId] = obj;
                (_obj$card5 = obj.card) == null || _obj$card5.InitData == null || _obj$card5.InitData(isPlayerA, data, _this17.handRotation);
              } else {
                var _obj$card6;

                obj.area = area;
                obj.index = i;
                (_obj$card6 = obj.card) == null || _obj$card6.FlushData == null || _obj$card6.FlushData(isPlayerA, data);
              }
            }

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            yield _this17.LayoutAllArea();
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 刷新布局
         */


        LayoutAllArea() {
          var _this18 = this;

          return _asyncToGenerator(function* () {
            for (var k in _this18.cardMap) {
              var obj = _this18.cardMap[k];

              if (obj.card && obj.area != undefined && obj.index != undefined) {
                var _obj$card8;

                var layout = obj.isMy ? _this18.myTeamLayout[obj.area][obj.index] : _this18.adTeamLayout[obj.area][obj.index];

                if (!layout) {
                  console.error("找不到地形上的卡片：" + (obj == null ? void 0 : obj.area) + "," + (obj == null ? void 0 : obj.index));
                }

                if (obj.card && obj.card.parent != _this18.areaCardLay) _this18.areaCardLay.addChild(obj.card);

                if (!((_obj$card8 = obj.card) != null && _obj$card8.CheckMatrix != null && _obj$card8.CheckMatrix(layout.worldPosition))) {
                  var _obj$card9;

                  yield (_obj$card9 = obj.card) == null || _obj$card9.LayoutArea == null ? void 0 : _obj$card9.LayoutArea(layout.worldPosition);
                }
              }
            }
          })();
        }
        /**
         * 盖牌
         * @param datas 
         */


        CloseCard(data) {
          var _this19 = this;

          return _asyncToGenerator(function* () {
            var obj = _this19.cardMap[data.instId];

            if (obj) {
              var _obj$card10;

              yield (_obj$card10 = obj.card) == null || _obj$card10.TurnBack == null ? void 0 : _obj$card10.TurnBack();
            }
          })();
        }
        /**
         * 显示卡
         * @param datas 
         */


        ShowCard(data) {
          var _this20 = this;

          return _asyncToGenerator(function* () {
            var _obj$card11, _obj$card12;

            var obj = _this20.cardMap[data.instId];
            if (!obj) return 0; // if (obj.card.parent) obj.card.setSiblingIndex(obj.card.parent.children.length - 1)
            // this.node.addChild(obj.card);

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            (_obj$card11 = obj.card) == null || _obj$card11.FlushData == null || _obj$card11.FlushData(obj.isMy, data);
            yield (_obj$card12 = obj.card) == null || _obj$card12.Open == null ? void 0 : _obj$card12.Open();

            _this20.areaCardLay.addChild(obj.card); // for (let k in this.cardMap) {
            //     let other = this.cardMap[k];
            //     if (other != obj && other.card.state == CardState.Fightting && other.card.isMy != obj.card.isMy && other.area == obj.area) {
            //         other.card.Shake(2.5);
            //     }
            // }


            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**获取位置 */


        fileLocation(isPlayerA, location, area, idx) {
          if (area === void 0) {
            area = 0;
          }

          switch (location) {
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand:
              return isPlayerA ? this.myHand : this.adHand;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Deck:
              return isPlayerA ? this.myDeck : this.adDeck;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Drop:
              return isPlayerA ? this.myDrop : this.adDrop;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Del:
              return isPlayerA ? this.myDel : this.adDel;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain:
              if (idx != undefined) {
                return isPlayerA ? this.myTeamLayout[area][idx] : this.myTeamLayout[area][idx];
              }

              var areaName = isPlayerA ? "hitTest1" : "hitTest2";
              var areaNode = this.areaList[area];
              if (areaNode) return area[areaName];
            //areaNode.getChildByName(areaName + "_" + areaNode.name);
          }

          return undefined;
        }
        /**
         * 播放技能
         * @param isPlayerA 
         * @param data 
         */


        PlaySkill(isPlayerA, data) {
          var _this21 = this;

          return _asyncToGenerator(function* () {
            // 如果当前回合已起效则跳过,count<0表示未起效
            if (!data.instId || !data.count.length || data.count[(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).curRound] == undefined) return;
            if (data.count[(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).curRound] == -1 || data.count[(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).curRound] < -2) return;
            var attacker = _this21.cardMap[data.instId];
            if (!attacker) _this21.handCards.find(value => value.Id == data.instId);
            var targets = [],
                self = _this21,
                myAreas = [],
                adAreas = [];
            data.targets.forEach(value => {
              targets.push(_this21.findCard(value.instId) || self.fileLocation(isPlayerA, value.location));

              if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
                error: Error()
              }), battleDataMgr) : battleDataMgr).isPlayerA(value.playerId)) {
                myAreas.push(value.area);
              } else {
                adAreas.push(value.area);
              }
            });
            var tag;

            if (!targets.length && attacker) {
              tag = _this21.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, targets);

              if (!(_crd && SkillUtils === void 0 ? (_reportPossibleCrUseOfSkillUtils({
                error: Error()
              }), SkillUtils) : SkillUtils).TryToFindTarget(isPlayerA, attacker == null ? void 0 : attacker.card, tag, data)) {
                tag = _this21.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, targets, [attacker.area]);
              }
            } else if (attacker) {
              tag = _this21.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, targets, [attacker.area]);
            } else {
              return;
            }

            var output = {
              fromInstId: data.instId,
              fromSkillId: data.skillId
            };
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(output, tag, isPlayerA, undefined, true);
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 删除技能
         * @param isPlayerA 
         * @param data 
         */


        RemoveSkill(isPlayerA, data) {
          (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill).Stop(data.toPlayerId, data.toSkillId, data.toInstId);
        }
        /**
         * 卡数据变更
         * @param isPlayerA 
         * @param data 
         * @returns 
         */


        CardDataChange(isPlayerA, data) {
          var _this22 = this;

          return _asyncToGenerator(function* () {
            var _changeCard$card;

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            var attacker = _this22.findCard(data.fromInstId);

            var changeCard = _this22.findCard(data.card.instId);

            var target = _this22.findCard(TouchInstId(data)) || changeCard;

            if (data.fromSkillId) {
              var tag = _this22.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, isPlayerA);
            }

            changeCard == null || (_changeCard$card = changeCard.card) == null || _changeCard$card.FlushData == null || _changeCard$card.FlushData(isPlayerA, data.card);
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0.25);
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 查找卡
         * @param instId 
         * @returns 
         */


        findCard(instId) {
          if (!instId) return undefined;
          var card = this.handCards.find(value => value.instId == instId);

          if (card) {
            return {
              isMy: true,
              card: card,
              area: -1,
              index: -1
            };
          } else {
            return this.cardMap[instId];
          }
        }
        /**
         * 从场景移除一张卡片到指定区域
         * @param isPlayerA 
         * @param data 
         * @param loca 
         * @returns 
         */


        RmoveCardFormArea(isPlayerA, data, loca) {
          var _this23 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            var removeTag = _this23.cardMap[data.card.instId];

            var attacker = _this23.findCard(data.fromInstId);

            var target = _this23.findCard(TouchInstId(data)) || removeTag;

            if (removeTag) {
              var _removeTag$card, _removeTag$card2;

              if (data.fromSkillId) {
                var tag = _this23.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target.card], [attacker == null ? void 0 : attacker.area], [target.area]);

                yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                  error: Error()
                }), Skill) : Skill).Play(data, tag, isPlayerA);
              }

              delete _this23.cardMap[data.card.instId];

              var delLoca = _this23.fileLocation(isPlayerA, loca);

              if (delLoca) yield (_removeTag$card = removeTag.card) == null || _removeTag$card.MoveTo == null ? void 0 : _removeTag$card.MoveTo(delLoca.worldPosition);
              (_removeTag$card2 = removeTag.card) == null || _removeTag$card2.receive == null || _removeTag$card2.receive();
            }

            _this23.LayoutAllArea();

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 移除手牌上的一张卡到指定位置
         * @param isPlayerA 
         * @param data 
         * @param loca 
         * @returns 
         */


        RemoveCardFormHand(isPlayerA, data, loca) {
          var _this24 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            var obj;

            if (isPlayerA) {
              var index = _this24.handCards.findIndex(value => value.instId == data.card.instId);

              obj = _this24.handCards[index];

              _this24.handCards.splice(index, 1);
            } else {
              obj = _this24.adHand;
            }

            if (data.fromSkillId) {
              var attacker = _this24.findCard(data.fromInstId);

              var target = _this24.findCard(TouchInstId(data)) || cardLoca(obj, isPlayerA);

              var tag = _this24.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, isPlayerA);
            }

            var locaNode = _this24.fileLocation(isPlayerA, loca);

            if (isPlayerA) {
              if (obj instanceof (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard)) {
                yield obj.MoveTo(locaNode.worldPosition);
                obj.receive();
              } else {
                console.warn("找不到可移除的手牌" + data.card.instId);
              }
            } else {
              var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              card.InitData(isPlayerA, data.card);
              card.setWorldRotation(_this24.handQuat);

              _this24.handCardLay.addChild(card);

              card.setWorldPosition(_this24.adHand.worldPosition);
              yield card.MoveTo(locaNode.worldPosition, _this24.handQuat);
              card.receive();
            }

            _this24.LayoutAllHandCards();

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 非可视区域的卡牌飞到场景区域上
         * @param formIsPlayerA 卡牌来源是否第一视觉玩家
         * @param toIsPlayerA 卡牌目标是否第一视觉玩家
         * @param areaIdx 添加卡牌的目标区域下标
         * @param cardIdx 添加卡牌的目标下标
         * @param data 添加卡牌数据
         */


        CardBackToArea(isPlayerA, formIsPlayerA, toIsPlayerA, areaIdx, cardIdx, data) {
          var _this25 = this;

          return _asyncToGenerator(function* () {
            var _fromNode, _obj$card13;

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            var fromNode = _this25.fileLocation(formIsPlayerA, data.fromLocation);

            if (data.fromSkillId) {
              var attacker = _this25.findCard(data.fromInstId); //定位此技能的发起卡牌


              var target = _this25.findCard(TouchInstId(data));

              if (!fromNode) fromNode = target == null ? void 0 : target.card;

              var tag = _this25.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, isPlayerA);
            }

            var layout = (toIsPlayerA ? _this25.myTeamLayout : _this25.adTeamLayout)[areaIdx][cardIdx];
            var obj = _this25.cardMap[data.card.instId];

            if (!obj) {
              var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              card.InitData(isPlayerA, data.card, _this25.zero);

              _this25.areaCardLay.addChild(card);

              obj = {
                isMy: toIsPlayerA,
                card: card,
                area: areaIdx,
                index: cardIdx
              };
              _this25.cardMap[data.card.instId] = obj;
            }

            obj.card.setWorldPosition(((_fromNode = fromNode) == null ? void 0 : _fromNode.worldPosition) || _this25.zero);
            yield (_obj$card13 = obj.card) == null || _obj$card13.MoveTo == null ? void 0 : _obj$card13.MoveTo(layout.worldPosition); //await obj.card?.Open?.();

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 复制对方的卡或者把对方的卡挪过来用
         * @param isPlayerA 是否自己
         * @param data 
         */


        AddCard(isPlayerA, data) {
          var _this26 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            var fromCard = _this26.findCard(data.sourceInstId);

            if (!fromCard) fromCard = cardLoca(_this26.fileLocation(isPlayerA, data.sourceLocation), isPlayerA);

            if (data.fromSkillId) {
              var _fromCard2;

              var attacker = _this26.findCard(data.fromInstId); // this.cardMap[data.fromInstId];


              var tager = _this26.findCard(TouchInstId(data)) || fromCard;

              var tag = _this26.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [tager == null ? void 0 : tager.card], [attacker == null ? void 0 : attacker.area], [(_fromCard2 = fromCard) == null ? void 0 : _fromCard2.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag);
            }

            var sourceCard, target; // 处理来源

            if (data.sourceLocation == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Hand) {
              // 来源卡位于自己手牌
              var index = _this26.handCards.findIndex(value => value.instId == data.sourceInstId);

              if (index != -1) {
                sourceCard = _this26.handCards[index];

                if (data.isMove) {
                  _this26.handCards.splice(index, 1);

                  _this26.LayoutAllHandCards();
                }
              }
            } else if (data.sourceLocation == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
              // 来源卡位于场景上
              fromCard = _this26.cardMap[data.sourceInstId];

              if (fromCard) {
                if (data.isMove) delete _this26.cardMap[data.sourceInstId];
                sourceCard = fromCard.card;
              }
            }

            if (data.isMove) target = sourceCard;

            if (!target) {
              target = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              target.InitData(isPlayerA, data.card);
              target.setWorldPosition(target.worldPosition);
            }

            switch (data.card.location) {
              case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Hand:
                if (isPlayerA) {
                  _this26.handCardLay.addChild(target);

                  _this26.handCards.push(target);

                  yield _this26.LayoutAllHandCards();
                } else {
                  yield target.MoveTo(_this26.adHand.worldPosition, _this26.handQuat);
                }

                break;

              case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Terrain:
                _this26.areaCardLay.addChild(target);

                var idx = 0;

                for (var k in _this26.cardMap) {
                  if (_this26.cardMap[k].area == data.card.area && _this26.cardMap[k].isMy == isPlayerA) {
                    if (_this26.cardMap[k].index != undefined) {
                      idx = Math.max(_this26.cardMap[k].index + 1, idx);
                    }
                  }
                }

                _this26.cardMap[data.card.instId] = {
                  isMy: isPlayerA,
                  card: target,
                  area: data.card.area,
                  index: idx
                };
                yield _this26.LayoutAllArea();
                yield target.Open();
                break;

              default:
                _this26.areaCardLay.addChild(target);

                var loca = _this26.fileLocation(isPlayerA, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleRoomCardLocation.Deck);

                yield target.MoveTo(loca.worldPosition);
                target.receive();
            }

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 从各个地方飞向指定区域
         * @param isPlayerA 
         * @param data 
         * @param fromData 
         * @param targetIdx 
         */


        AddCardToArea(isPlayerA, data, fromData, area, targetIdx) {
          var _this27 = this;

          return _asyncToGenerator(function* () {
            var _obj$card14, _fromCard4, _obj$card15, _obj$card16;

            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            var fromCard = _this27.findCard(fromData == null ? void 0 : fromData.instId);

            if (!fromCard && data['fromLocation'] != undefined) fromCard = cardLoca(_this27.fileLocation(isPlayerA, data['fromLocation']), isPlayerA);

            if (data.fromSkillId) {
              var _fromCard3;

              var attacker = _this27.findCard(data.fromInstId); // this.cardMap[data.fromInstId];


              var _target2 = _this27.findCard(TouchInstId(data)) || fromCard;

              var tag = _this27.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [_target2 == null ? void 0 : _target2.card], [attacker == null ? void 0 : attacker.area], [area || ((_fromCard3 = fromCard) == null ? void 0 : _fromCard3.area)]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag);
            }

            var obj = _this27.cardMap[data.card.instId];

            if (obj) {
              obj.area = data.card.area;
              obj.index = targetIdx;
              obj.isMy = isPlayerA;
            } else {
              var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              card.InitData(data.card, v3());

              _this27.handCardLay.addChild(card);

              obj = {
                isMy: isPlayerA,
                card: card,
                area: data.card.area,
                index: targetIdx
              };
              _this27.cardMap[data.card.instId] = obj;
            }

            var target = _this27.fileLocation(isPlayerA, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain, data.card.area, targetIdx);

            (_obj$card14 = obj.card) == null || _obj$card14.setWorldPosition(((_fromCard4 = fromCard) == null || (_fromCard4 = _fromCard4.card) == null ? void 0 : _fromCard4.worldPosition) || _this27.zero);
            yield (_obj$card15 = obj.card) == null || _obj$card15.MoveTo == null ? void 0 : _obj$card15.MoveTo(target.worldPosition);
            if (obj.card.state != (_crd && CardState === void 0 ? (_reportPossibleCrUseOfCardState({
              error: Error()
            }), CardState) : CardState).Showing) yield (_obj$card16 = obj.card) == null || _obj$card16.Open == null ? void 0 : _obj$card16.Open();
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 手牌自动出牌
         * @param cardData 
         * @param area 
         * @param cardIdx 
         * @returns 
         */


        AutoPlayHand(cardData, area, cardIdx) {
          var _this28 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            var card;

            for (var index = 0; index < _this28.handCards.length; index++) {
              if (_this28.handCards[index].instId == cardData.instId) {
                card = _this28.handCards[index];

                _this28.handCards.splice(index, 1);
              }
            }

            if (card) {
              var obj = {
                isMy: true,
                card: card,
                area: area,
                index: cardIdx
              };
              _this28.cardMap[cardData.instId] = obj;
              card.parent = _this28.areaCardLay;

              var target = _this28.fileLocation(true, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Terrain, cardData.area, cardIdx);

              yield card.MoveTo(target.worldPosition);
              yield card.PlayToMyArea(target.worldPosition, target.rotation);
            }

            _this28.LayoutAllHandCards();

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 非可视区域卡牌转变
         * （例：弃牌区到删除区、卡组区到弃牌区）
         * @param isPlayerA 是否第一视觉玩家
         * @param data 卡牌数据
         */


        RemoveDeckToUnVisible(isPlayerA, data, loca) {
          var _this29 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            var attacker = _this29.findCard(data.fromInstId); //定位发起技能的卡牌


            var delNode = isPlayerA ? _this29.myDeck : _this29.adDeck;
            var target = _this29.findCard(TouchInstId(data)) || cardLoca(delNode, isPlayerA);

            var tag = _this29.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], []);

            if (data.fromSkillId) yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, isPlayerA);
            var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(isPlayerA, data.card);

            _this29.node.addChild(card);

            var tagNode = _this29.fileLocation(isPlayerA, loca);

            if (tagNode) {
              card.setWorldPosition(tagNode.worldPosition.x, tagNode.worldPosition.y, tagNode.worldPosition.z);
            } else {
              card.setWorldPosition(_this29.zero);
            }

            yield card.MoveTo(delNode.worldPosition);
            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 非可视区域添加卡牌
         * （例：复制一张卡到卡组区域、系统发卡牌到卡组区域）
         * @param isPlayerA 是否第一视觉玩家
         * @param data 卡牌数据
         */


        AddCardToDeck(isPlayerA, targetPlayer, data) {
          var _this30 = this;

          return _asyncToGenerator(function* () {
            var attacker = _this30.findCard(data.fromInstId); //尝试定位发起技能的卡牌
            // let head = data.card.area ? this.node.getChildByPath("ui/my") : this.node.getChildByPath("ui/ad");


            var head = _this30.fileLocation(targetPlayer, data.card.location);

            var tag = _this30.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [head]);

            if (data.fromSkillId) yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag);
            if (data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Deck) return; //不可见的地方用特效

            var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(isPlayerA, data.card);

            _this30.node.addChild(card);

            var tagObj = _this30.findCard(data.fromPlayerId); //this.fileLocation(isPlayerA, proto.base.BattleRoomCardLocation.Drop);


            if (tagObj) {
              card.setWorldPosition(tagObj.card.worldPosition);
            } else {
              var tagNode = _this30.fileLocation(isPlayerA, data.fromLocation);

              if (tagNode) {
                card.setWorldPosition(tagNode.worldPosition);
              } else {
                card.setWorldPosition(_this30.zero);
              }
            }

            yield card.MoveTo(head.worldPosition);
            card.receive();
          })();
        }
        /**
         * 从各个方向添加卡牌到手牌上
         * @param isPlayerA 
         * @param data 
         * @param fromLocation 
         * @param fromCard 
         */


        AddCardToHand(isPlayerA, data, fromLocation, fromCard) {
          var _this31 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();
            var fromLoca;
            if (fromCard) fromLoca = _this31.findCard(fromCard.instId);
            if (!fromLoca) fromLoca = cardLoca(_this31.fileLocation(isPlayerA, data['fromLocation'] || fromLocation), isPlayerA); // if (!fromNode) fromNode = this.findCard(TouchInstId(data));

            var target = _this31.findCard(TouchInstId(data)) || fromLoca;

            if (data.fromSkillId) {
              var attacker = _this31.findCard(data.fromInstId); //this.cardMap[data.fromInstId];


              var tag = _this31.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag);
            }

            if (isPlayerA) {
              if (!_this31.handCards.find(value => value.instId == data.card.instId)) {
                var _fromLoca;

                var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                  error: Error()
                }), SceneCard) : SceneCard).Create();
                card.InitData(isPlayerA, data.card, v3());

                _this31.handCards.push(card);

                _this31.handCardLay.addChild(card);

                card.setWorldPosition(((_fromLoca = fromLoca) == null || (_fromLoca = _fromLoca.card) == null ? void 0 : _fromLoca.worldPosition) || _this31.zero);
                var v = Vec3.clone(_this31.handCenter);
                var total = _this31.handCards.length * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                  error: Error()
                }), GameSet) : GameSet).CardWide;
                v.x = _this31.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                  error: Error()
                }), GameSet) : GameSet).CardWide / 2;
                v.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                  error: Error()
                }), GameSet) : GameSet).CardWide * _this31.handCards.length;
                yield card.MoveTo(v, _this31.handQuat);
              }
            } else {
              var _card7 = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();

              _card7.InitData(isPlayerA, data.card, v3());

              _card7.setWorldPosition(_this31.zero);

              yield _card7.MoveTo(_this31.adHand.worldPosition, _this31.handQuat);
            }

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 卡牌在区域上移动
         * @param isPlayerA 移动目的地的玩家是否第一视觉玩家
         * @param areaIdx 移动目的地的区域下标
         * @param cardIdx 移动目的地的卡牌下标
         * @param data 
         */


        CardAreaMove(isPlayerA, areaIdx, cardIdx, data) {
          var _this32 = this;

          return _asyncToGenerator(function* () {
            var tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)();

            var attacker = _this32.findCard(data.fromInstId);

            var obj = _this32.cardMap[data.card.instId];
            var target = _this32.findCard(TouchInstId(data)) || obj;

            if (data.fromSkillId) {
              var tag = _this32.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, isPlayerA);
            }

            if (obj) {
              var _obj$card17, _obj$card18;

              obj.isMy = isPlayerA;
              obj.area = areaIdx;
              obj.index = cardIdx;
              var targetNode = isPlayerA ? _this32.myTeamLayout[areaIdx][cardIdx] : _this32.adTeamLayout[areaIdx][cardIdx];
              (_obj$card17 = obj.card) == null || _obj$card17.FlushData == null || _obj$card17.FlushData(isPlayerA, data.card);
              yield (_obj$card18 = obj.card) == null || _obj$card18.MoveTo == null ? void 0 : _obj$card18.MoveTo(targetNode.worldPosition);
            } else {
              _this32.AddCardToArea(isPlayerA, data, undefined, areaIdx, cardIdx);
            }

            return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
              error: Error()
            }), TimeStamp) : TimeStamp)(tt);
          })();
        }
        /**
         * 窥视区域
         * @param data 
         */


        PeekTerrain(isplayerA, data, playerIdA) {
          var _this33 = this;

          return _asyncToGenerator(function* () {
            var attacker = _this33.findCard(data.fromInstId);

            var target = _this33.findCard(TouchInstId(data)) || attacker;
            var terrains = [];

            for (var k in data.terrainData) {
              terrains.push(data.terrainData[k]);
            }

            if (data.fromSkillId) {
              var areas = [];

              for (var _k in data.terrainData) {
                var terrain = data.terrainData[_k]; // let target = this.fileLocation(false, proto.base.BattleRoomCardLocation.Terrain, terrain.area);
                // if (target) areas.push(target);

                areas.push(terrain.area);
              }

              var tag = _this33.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], areas);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag);
            }

            yield _this33.FlushTerrain(isplayerA, terrains, playerIdA);
          })();
        }
        /**
         * 窥视卡片
         * @param data 
         * @param loca 
         */


        PeekHandCards(data, loca) {
          var _this34 = this;

          return _asyncToGenerator(function* () {
            if (loca === void 0) {
              loca = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Hand;
            }

            var attacker = _this34.findCard(data.fromInstId);

            if (data.fromSkillId) {
              // let target = this.fileLocation(false, loca);
              var target = _this34.findCard(TouchInstId(data)) || cardLoca(_this34.fileLocation(false, loca), true);

              var tag = _this34.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);

              yield (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag);
            }

            var head = _this34.node.getChildByPath("ui/ad");

            var cards = [];

            for (var k in data.handCards) {
              var cardData = data.handCards[k];
              var card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              card.InitData(false, cardData, _this34.handQuat);

              _this34.handCardLay.addChild(card);

              card.setWorldPosition(head.worldPosition.x, head.worldPosition.y, head.worldPosition.z);
              cards.push(card);
            }

            var ps = [];
            var v = Vec3.clone(_this34.PeekHandV);
            var total = Math.max(0, cards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
            v.x = _this34.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide / 2;

            for (var i = 0; i < cards.length; i++) {
              var _card8 = cards[i];
              ps.push(_card8.LayoutHands(v, _this34.handQuat));
              v.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide;
            }

            yield Promise.all(ps);
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(3);
            ps.length = 0;

            for (var _i4 = 0; _i4 < cards.length; _i4++) {
              var _card9 = cards[_i4];
              ps.push(_card9.MoveTo(_this34.adHand.worldPosition, _this34.handQuat));
            }

            yield Promise.all(ps);

            while (cards.length) {
              cards.pop().receive();
            }
          })();
        }
        /**
         * 重置
         */


        Reset() {
          if (this.myNameLab) {
            this.myNameLab.string = "";
            this.adNameLab.string = ""; // this.roundLab.string = "";
          }

          this.doubleLab.string = "1";
          this.roundBtnMaskBg.active = true;
          this.progress.fillRange = 0;
          this.isWaitInput = false;
          this.qxjshhEffect.active = false;
          this.notTimeEffect.active = false;
          this.jshhEffect.active = false;

          for (var k in this.cardMap) {
            var _obj$card19, _obj$card20;

            var obj = this.cardMap[k];
            ((_obj$card19 = obj.card) == null ? void 0 : _obj$card19.receive) && ((_obj$card20 = obj.card) == null ? void 0 : _obj$card20.receive());
          }

          this.cardMap = {};

          for (var _area7 of this.areaList) {
            _area7.getChildByName("mywin01").active = false;
            _area7.getChildByName("mywin02").active = false;
            _area7.getChildByName("adwin01").active = false;
            _area7.getChildByName("adwin02").active = false;
            _area7.getChildByName("desc").getComponent(Label).string = "";
            _area7.getChildByName("power1").getComponent(Label).string = "";
            _area7.getChildByName("power2").getComponent(Label).string = "";
          }

          while (this.handCards.length) {
            var card = this.handCards.pop();
            card.receive();
          }
        }

      }, _class2._instance = void 0, _class2.hasLoad = false, _class2.loadHandle = void 0, _class2.sub = new Promise((resolve, reject) => {
        _class2.loadHandle = resolve;
      }), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a20b025fb28d3bf96d30b2bb67a9d4c29a57c6c.js.map