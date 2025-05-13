System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, find, Input, instantiate, Label, math, Node, ParticleSystem, path, Rect, sp, Sprite, SpriteFrame, tween, UITransform, v3, Vec3, view, GameSet, CardState, SceneCard, PlaneView, Second, TimeStamp, Utils, folder_icon, ResMgr, Skill, Battle_End_Round, EventMgr, Evt_BattleDoubleUpdate, Evt_ShowBattleDoubleEffect, Session, proto, Req, Ret, Route, PlayerData, battleDataMgr, BattleRoundOperationState, SkillUtils, CfgMgr, EffectTarget, MsgPanel, ShowArea, FightData, GameObj, SpriteLabel, AudioMgr, AudioDefine, _dec, _class, _class2, _crd, ccclass, property, GameScene;

  function cardLoca(node, isMy) {
    let area = -1;
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
        constructor(...args) {
          super(...args);
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

        static async prevLoad() {
          if (!this._instance) {
            let loadSub = new Promise((resolve, reject) => {
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).GetResources("prefabs/fight/FightScene", prefab => {
                let node = instantiate(prefab);
                GameScene._instance = node.addComponent(GameScene);
                resolve(GameScene._instance);
              });
            });
            return loadSub;
          }

          return Promise.resolve();
        }

        static async Show() {
          if (!this._instance) await this.prevLoad();
          director.getScene().addChild(this._instance.node);
          this._instance.node.active = true;
          if (!this.hasLoad) await this.sub;

          this._instance.onShow();
        }

        static async Hide() {
          if (!this.hasLoad) await this.sub;
          (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill).RemoveAll();

          this._instance.Reset();

          this._instance.onHide();

          this._instance.node.parent && this._instance.node.parent.removeChild(this._instance.node);
        }

        async onShow() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).StopChannel((_crd && AudioDefine === void 0 ? (_reportPossibleCrUseOfAudioDefine({
            error: Error()
          }), AudioDefine) : AudioDefine).Channels["audio/bgm/*"].channel);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).Play("audio/bgm/MainTheme", 0, 0.3);
          this.Reset();
          this.FlushRoundBtnStrState((_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
            error: Error()
          }), BattleRoundOperationState) : BattleRoundOperationState).EndRound);
          this.FlushRevealPlayer(null);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.ruondBtn, e => {
            if (this.selectedCard || this.areaTarget) return false;
            let [w, h] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).TestSize(this.ruondBtn, true);
            if (!this.uiView.checkTouch(e, this.ruondBtn, w * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).PixelSize, h * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).PixelSize)) return false;
            if (!this.isWaitInput) return false;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Battle_End_Round === void 0 ? (_reportPossibleCrUseOfBattle_End_Round({
              error: Error()
            }), Battle_End_Round) : Battle_End_Round);
            let clickEffect = this.ruondBtn.getChildByName("clickEffect").getComponent(sp.Skeleton);
            clickEffect.node.active = true;
            clickEffect.clearAnimation();
            clickEffect.setAnimation(0, "animation", false);
            clickEffect.setCompleteListener(() => {
              clickEffect.node.active = false;
            });
            return true;
          }, this, this.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.doubleBtn, e => {
            var _ref;

            if (this.selectedCard || this.areaTarget) return false;
            let [w, h] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).TestSize(this.doubleBtn, true);
            w -= 300, h -= 450;
            if (!this.uiView.checkTouch(e, this.doubleBtn, w * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
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

            let server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).pb.Server.create();
            server.id = ((_ref = _crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr) == null || (_ref = _ref.creatRoomData) == null ? void 0 : _ref.serverId) || "";
            let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
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
          }, this, this.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.exitBtn, e => {
            var _ref2, _ref3, _ref4;

            if (this.selectedCard || this.areaTarget) return false;
            let [w, h] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).TestSize(this.exitBtn, true);
            if (!this.uiView.checkTouch(e, this.exitBtn, w * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).PixelSize, h * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).PixelSize)) return false;
            let server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).pb.Server.create();
            server.id = ((_ref2 = _crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr) == null || (_ref2 = _ref2.creatRoomData) == null ? void 0 : _ref2.serverId) || "";
            let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
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
          }, this, this.canvas);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)['battle.protocol.battleroomping'], this.onBattleroomping, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_BattleDoubleUpdate === void 0 ? (_reportPossibleCrUseOfEvt_BattleDoubleUpdate({
            error: Error()
          }), Evt_BattleDoubleUpdate) : Evt_BattleDoubleUpdate, this.onBattleDoubleUpdate, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("op_start", this.hideViewCard, this);
          this.onBattleDoubleUpdate(0, false);
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

        onBattleDoubleUpdate(addCont = 0, isUpdate = true) {
          let num = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getRoomDoubleNum(addCont);
          let oldNum = Number(this.doubleLab.string);
          this.doubleLab.string = `${num}`;

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


        async Settlement() {
          for (let area of this.areaList) {
            let myPower = Number(area.getChildByName("power1").getComponent(Label).string);
            let adPower = Number(area.getChildByName("power2").getComponent(Label).string);
            area.getChildByName("mywin01").active = false;
            area.getChildByName("adwin01").active = false;
            let mywin = area.getChildByName("mywin02");
            let adwin = area.getChildByName("adwin02");

            if (myPower > adPower) {
              mywin.active = true;
              adwin.active = false;
              await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(0.5);
            } else if (myPower < adPower) {
              mywin.active = false;
              adwin.active = true;
              await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(0.5);
            } else {
              mywin.active = false;
              adwin.active = false;
            }
          }
        } //房间ping结果返回


        onBattleroomping(data) {
          return;
          let result = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)['battle.protocol.battleroomping'].decode(data);

          if (result.res.code !== 200) {//房间不存在了
          }
        }

        onBattleroomdouble() {}

        async onLoad() {
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          this.areaCardLay = this.node.getChildByName("areaCardLay");
          this.handCardLay = this.node.getChildByName("myHand");
          this.peekCardLay = this.node.getChildByName("peekCardLay");
          this.mask = this.node.getChildByName("mask");
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).SceneHight = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.node.position.y;
          const ls = ["ui", "myDeck", "myHand", "myDrop", "myDel", "costmodel/myEnergy", "adDeck", "adHand", "adDrop", "adDel", "ui/adEnergy"];

          for (let s of ls) {
            let k = s.split("/").pop();
            this[k] = this.node.getChildByPath(s);
            this[k].active = true;
          }

          this.canvas = find("Canvas");
          let forward = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.node.forward.negative();
          let [rx, ry, rz] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).EulerAngles(v3(0, 1, 0), forward);
          this.myHand.setWorldRotationFromEuler(rx, ry, rz);
          this.ui.setWorldRotationFromEuler(rx, ry, rz);
          let child = this.myHand.children[0];
          this.handView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
            error: Error()
          }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, this.myHand, Vec3.UNIT_Y);
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).HandPlane = this.handView.plane;
          this.handQuat = child.getWorldRotation();
          let v = this.handView.localRightDown,
              handCenter = v3();
          handCenter.set(v.x - 1, v.y, v.z - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardHide / 4);
          Vec3.transformMat4(this.handCenter, handCenter, this.handView.mat);
          this.myHand.getWorldRotation().getEulerAngles(this.handRotation);
          this.myDeck.getWorldPosition(this.myCardEnterV);
          this.adDeck.getWorldPosition(this.adCardEnterV);

          for (let i = 0; i < 3; i++) {
            let area = this.node.getChildByName("area" + i);
            let frameSelect = area.getChildByName("frame_select");
            let p = frameSelect.worldPosition.clone();
            this.node.addChild(frameSelect);
            frameSelect.setPosition(p.x, p.y, p.z);
            frameSelect.setSiblingIndex(3);
            this.selectEffects.push(frameSelect);
            this.areaList.push(area);
            let layout = [];
            let children = area.getChildByPath("team1").children.concat();

            for (let child of children) {
              layout.push(child);
            }

            let sk = area.getChildByName("filed").getComponent(sp.Skeleton);
            sk.setCompleteListener(() => {
              var _sk$getCurrent;

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).CheckAnimation(sk, "idle") && (sk == null || (_sk$getCurrent = sk.getCurrent(0)) == null ? void 0 : _sk$getCurrent.animation.name) != "idle") sk.setAnimation(0, "idle", true);
            });
            let hitTest1 = area.getChildByName("hitTest1");
            let hitTest2 = area.getChildByName("hitTest2");
            hitTest1.name = hitTest1.name + "_" + area.name;
            hitTest2.name = hitTest2.name + "_" + area.name;
            let hitSize = hitTest1.getComponent(UITransform).contentSize;
            let rect = new Rect(hitTest1.worldPosition.x, 5, hitSize.width, 20);
            this.areaSize[i] = rect;
            this.myTeamLayout[i] = layout;
            area['hitTest1'] = hitTest1;
            area['hitTest2'] = hitTest2;
            let p1 = hitTest1.worldPosition.clone();
            let p2 = hitTest2.worldPosition.clone();
            this.node.addChild(hitTest1);
            this.node.addChild(hitTest2);
            hitTest1.setSiblingIndex(4);
            hitTest2.setSiblingIndex(4);
            hitTest1.setWorldPosition(p1);
            hitTest2.setWorldPosition(p2);
            layout = [];
            children = area.getChildByPath("team2").children.concat();

            for (let child of children) {
              layout.push(child);
            }

            this.adTeamLayout[i] = layout;
          }

          this.PeekHandV = v3(...(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
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
          this.uiView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
            error: Error()
          }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, this.ui, Vec3.UNIT_Y);
          this.uiView.setLocalLeftDown(this.ui.getChildByName("my"), 2.5, 4);
          this.uiView.setLocalRightUp(this.ui.getChildByName("ad"), 2.7, 2.5); // this.uiView.setLocalLeftUp(this.ui.getChildByName("double"), 9, 5);

          console.log("**************", this.ui.getChildByName("double").position.toString()); // this.uiView.setLocalRightDown(this.ui.getChildByName("myEnergy"), 10, 13);

          this.ruondBtn = this.ui.getChildByName("roundBtn");
          this.roundBtnLab = this.ui.getChildByPath("roundBtn/btnLab").getComponent(Label);
          this.jshhEffect = this.ui.getChildByPath("roundBtn/jshhEffect");
          this.qxjshhEffect = this.ui.getChildByPath("roundBtn/qxjshhEffect");
          this.notTimeEffect = this.ui.getChildByPath("roundBtn/notTimeEffect");
          this.roundBtnMaskBg = this.ui.getChildByPath("roundBtn/maskBg");
          this.progress = this.ui.getChildByPath("roundBtn/progress").getComponent(Sprite);
          this.uiView.setLocalRightDown(this.ruondBtn, 2, 8.5);
          this.exitBtn = this.ui.getChildByPath("exitBtn");
          this.uiView.setLocalLeftDown(this.exitBtn, 2, 8.5);
          this.myhead = this.ui.getChildByPath("my/myhead").getComponent(Sprite);
          this.myNameLab = this.ui.getChildByPath("my/myNameLab").getComponent(Label);
          this.myRevealEffect = this.ui.getChildByPath("my/revealEffect").getComponent(sp.Skeleton);
          this.adhead = this.ui.getChildByPath("ad/adhead").getComponent(Sprite);
          this.adNameLab = this.ui.getChildByPath("ad/adNameLab").getComponent(Label);
          this.adRevealEffect = this.ui.getChildByPath("ad/revealEffect").getComponent(sp.Skeleton);
          this.doubleBtn = this.ui.getChildByPath("double");
          this.doubleLab = this.ui.getChildByPath("double/effect/doubleLab").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
            error: Error()
          }), SpriteLabel) : SpriteLabel);
          this.doubleLab.font = "sheets/numberImg/num2";
          this.energyLab = this.node.getChildByPath("costmodel/myEnergy").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
            error: Error()
          }), SpriteLabel) : SpriteLabel);
          this.energyLab.font = "sheets/numberImg/num3";
          let size = view.getVisibleSizeInPixel();
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
          let out = v3();
          this.myHand.getWorldRotation().getEulerAngles(out);
          math.Quat.fromEuler((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).ScreamRotation, out.x, 0, 0);
          this.myHand.children.forEach(value => {
            value.parent.removeChild(value);
            value.destroy();
          });
          this.myHand.removeAllChildren();
          this.zero = this.node.worldPosition.clone();
          this.zero.y += 6;
          this.revealCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
            error: Error()
          }), SceneCard) : SceneCard).Create();
          this.showArea = (_crd && ShowArea === void 0 ? (_reportPossibleCrUseOfShowArea({
            error: Error()
          }), ShowArea) : ShowArea).Create();
          if (!GameScene._instance) GameScene._instance = this;
          GameScene.hasLoad = true;
          if (GameScene.loadHandle) GameScene.loadHandle();
        }

        skillTarget(isMy, attacker, targets, myarea = [0, 1, 2], adarea = [0, 1, 2]) {
          let myAreas = [],
              adAreas = [];

          for (let idx of myarea) {
            let area = this.areaList[idx];
            if (idx >= 0 && area != undefined) myAreas.push(area['hitTest1']); //area.getChildByName("hitTest1_" + area.name));
          }

          for (let idx of adarea) {
            let area = this.areaList[idx];
            if (idx >= 0 && area != undefined) adAreas.push(area['hitTest2']); //area.getChildByName("hitTest2_" + area.name));
          }

          let loca = [];

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

          for (let card of this.handCards) {
            var _card$action;

            card == null || (_card$action = card.action) == null || _card$action.end();
          }

          for (let k in this.cardMap) {
            var _obj$card, _obj$card2;

            let obj = this.cardMap[k];
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
          let pt = e.getLocation(); //先计算是否点击到手牌

          let [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ScreenToPlane(pt.x, pt.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).HandPlane);

          for (let card of this.handCards) {
            if (card.State == (_crd && CardState === void 0 ? (_reportPossibleCrUseOfCardState({
              error: Error()
            }), CardState) : CardState).Handing && card.HitTest(x, y, z)) {
              let msg = this.canMove(card.instId);

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

          for (let k in this.cardMap) {
            let obj = this.cardMap[k];
            let card = obj == null ? void 0 : obj.card;

            if (obj != null && obj.isMy && card && card.HitTest && card.HitTest(x, y, z)) {
              let area = obj == null ? void 0 : obj.area;
              let msg = this.canMove(card.instId, area);

              if (msg) {
                // MsgPanel.Show(msg);
                continue;
              }

              this.selectedCard = card;
              this.selectedCard['isHandCard'] = false;
              this.node.addChild(this.selectedCard);
              this.canvas.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
              return;
            }
          }
        }
        /**拖动操作 */


        onTouchMove(e) {
          let p = e.getLocation();

          if (this.selectedCard) {
            // 拖动中
            this.selectedCard.Drag(p.x, p.y);
            let x, y, z;
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

              for (let i = 0; i < this.areaSize.length; i++) {
                let rect = this.areaSize[i];

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
            let out = v3();
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
            let instId = this.selectedCard.Id;

            if (!this.selectedCard.isDragging && this.selectedCard.cardData) {
              this.viewCard(this.selectedCard.cardData, this.selectedCard.getWorldPosition());
            }

            this.selectedCard.StopDrag(); // 处理场景区域操作

            if (this.areaTarget != undefined) {
              var _this$selectedCard;

              let failType = this.operateHandle(instId, this.areaTarget, this == null || (_this$selectedCard = this.selectedCard) == null ? void 0 : _this$selectedCard.state);
              this.areaTarget = undefined;
              this.selectedCard = undefined;

              if (failType) {}
            } else if (this.dropToHand) {
              var _this$selectedCard2;

              this.dropToHand = undefined;
              let failType = this.operateHandle(instId, undefined, this == null || (_this$selectedCard2 = this.selectedCard) == null ? void 0 : _this$selectedCard2.state);
              this.selectedCard = undefined;
              this.areaTarget = undefined;

              if (failType) {}
            } else {
              this.LayoutAllHandCards();
              this.LayoutAllArea();
              this.selectedCard = undefined;
              this.areaTarget = undefined;
            }
          } else if (this.mask.active) {
            this.hideViewCard();
          } else {
            let pt = e.getLocation();
            let [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ScreenToPlane(pt.x, pt.y, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).HandPlane);

            for (let card of this.handCards) {
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

            for (let k in this.cardMap) {
              let obj = this.cardMap[k];
              let card = obj == null ? void 0 : obj.card;

              if (card != null && card.cardData && card != null && card.HitTest(x, y, z)) {
                this.viewCard(card.cardData, card.getWorldPosition());
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


        async viewCard(data, pos) {
          if (data instanceof Node) {
            let area = data;
            this.revealCard.EndViewCard();
            this.mask.active = true;
            this.node.addChild(this.showArea);
            let filed = area.getChildByName("filed");
            let sd = filed.active ? filed.getComponent(sp.Skeleton).skeletonData : undefined;
            let desc = area.getChildByName("desc").getComponent(Label).string;
            let myPower = area.getChildByName("power1").getComponent(Label).string;
            let adPower = area.getChildByName("power2").getComponent(Label).string;
            this.showArea.View(sd, desc, myPower, adPower, area.worldPosition);
          } else {
            this.showArea.Hide();
            let cardData = data;
            this.node.addChild(this.revealCard);
            this.revealCard.active = true;
            await this.revealCard.InitData(true, cardData);

            if (!this.mask.active) {
              this.mask.active = true;
              if (!pos) pos = this.zero;
              this.revealCard.setWorldPosition(pos);
              this.revealCard.ViewCard();
            }
          }
        }

        hideViewCard() {
          this.mask.active = false;
          this.showArea.Hide();
          this.revealCard.EndViewCard();
          this.revealCard.active = false;
        }
        /**区域选中效果 */


        flushSelectEffect(value = false) {
          //,area?: number) {
          for (let i = 0; i < this.areaList.length; i++) {
            var _this$selectedCard3;

            let isFull = !this.canDrop((_this$selectedCard3 = this.selectedCard) == null ? void 0 : _this$selectedCard3.instId, i); // this.areaList[i].getChildByName("frame_select").active = value && isFull;//i == area;

            this.selectEffects[i].active = value && isFull;
          }
        }
        /**刷新对战玩家信息 */


        FlushPlayerInfo(isPlayerA, data) {
          var _data$deckAttr;

          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetHead(data == null || (_data$deckAttr = data.deckAttr) == null ? void 0 : _data$deckAttr.avatarId);
          let headName = "";

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
          this.roundProgress = `  ${curRoundNum}/${maxRound}`;
          this.roundBtnLab.string = this.roundState + "\n" + this.roundProgress;
        }

        /**刷新回合按钮文本状态 */
        FlushRoundBtnStrState(state) {
          switch (state) {
            case (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).EndRound:
              this.roundState = `结束回合...`;
              this.roundBtnLab.string = this.roundState + "\n" + this.roundProgress;
              break;

            case (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).PlaceRound:
              this.roundState = `放置中...`;
              break;

            case (_crd && BattleRoundOperationState === void 0 ? (_reportPossibleCrUseOfBattleRoundOperationState({
              error: Error()
            }), BattleRoundOperationState) : BattleRoundOperationState).CancelRound:
              this.roundState = `取消结束回合`;
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


        FlushRoundTime(time, isHaveEnergy, roundState, totalTime = 30) {
          this.progress.node.active = true;
          let rote = time / totalTime;
          this.progress.fillRange = rote;
          let b = rote * 255;
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


        async FlushEnergy(num, data) {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).Energy = num;
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();

          if (data && data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data));
            let tag = this.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, true);
          }

          this.energyLab.string = `${num}`;
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }

        update(dt) {
          if (!GameScene.hasLoad) return;
          let sorts = [];
          let children = this.areaCardLay.children;

          for (let child of children) {
            sorts.push({
              index: child.getSiblingIndex(),
              node: child
            });
          }

          sorts.sort((a, b) => a.node.position.z - b.node.position.z);

          for (let i = 0; i < sorts.length; i++) {
            let obj = sorts[i];

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


        async AddHandCard(data) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();

          if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data)) || attacker;
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, this.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card]));
          }

          let cards = data.cards; // 排除相同的

          for (let card of this.handCards) {
            let index = cards.findIndex(value => value.instId == card.instId);

            if (index != -1) {
              card.FlushData(true, cards[index]);
              cards.splice(index, 1);
            }
          } // 刷新一下已有手牌的布局，为飞进来的卡牌让出位置


          let p = Vec3.clone(this.handCenter);
          let total = (this.handCards.length + cards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide;
          p.x = this.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide / 2;

          for (let i = 0; i < this.handCards.length; i++) {
            let card = this.handCards[i];
            this.handCardLay.addChild(card);
            card.LayoutHands(p, this.handQuat);
            p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
          } // 开始飞入


          let promises = [];

          for (let i = 0; i < cards.length; i++) {
            let cardData = cards[i];
            let newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            newCard.InitData(true, cardData, this.handRotation); // this.node.addChild(newCard);

            this.handCards.push(newCard);
            let promise = newCard.SendToHand(this.myCardEnterV, p, this.handQuat);
            this.handCardLay.addChild(newCard);
            promises.push(promise); // this.handCards.push(newCard);

            p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
          }

          await Promise.all(promises);
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 刷新所有手牌布局
         * @returns 
         */


        async LayoutAllHandCards() {
          // 刷新一下已有手牌的布局，为飞进来的卡牌让出位置
          let p = Vec3.clone(this.handCenter);
          let total = (this.handCards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide;
          p.x = this.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide / 2;
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let ps = [];

          for (let i = 0; i < this.handCards.length; i++) {
            let card = this.handCards[i];
            ps.push(card.LayoutHands(p, this.handQuat));
            p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
          }

          await Promise.all(ps);
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 从任意位置飞到不可视位置
         * @param isPlayerA 
         * @param data 
         * @param fromData 
         */


        async CopyCardToUnVisible(isPlayerA, data, fromData) {
          var _fromCard;

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let fromCard = this.findCard(fromData.instId);
          if (!fromCard && data['fromLocation']) fromCard = cardLoca(this.fileLocation(isPlayerA, data['fromLocation']), isPlayerA);

          if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data)) || fromCard;
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker.area], [target == null ? void 0 : target.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, isPlayerA);
          }

          let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
            error: Error()
          }), SceneCard) : SceneCard).Create();
          card.InitData(isPlayerA, data.card, this.zero);
          let target = this.fileLocation(isPlayerA, data.card.location, data.card.area);
          this.handCardLay.addChild(card);
          card.setWorldPosition(((_fromCard = fromCard) == null ? void 0 : _fromCard.card.worldPosition) || this.zero);
          await card.MoveTo(target.worldPosition);
          card.receive();
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 更新手牌
         */


        async FlushHandCard(datas) {
          let ls = {};
          this.handCards.forEach(value => ls[value.instId] = value);
          this.handCards.length = 0;

          for (let i = 0; i < datas.length; i++) {
            let data = datas[i];

            if (ls[data.instId]) {
              ls[data.instId].FlushData(true, datas[i]);
              this.handCards.push(ls[data.instId]);
              delete ls[data.instId];
            } else {
              let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              card.InitData(true, data, this.handRotation);
              this.handCardLay.addChild(card);
              if (this.selectedCard) card.setWorldPosition(this.selectedCard.worldPosition);
              this.handCards.push(card);
            }
          }

          for (let k in ls) {
            ls[k].receive();
            delete ls[k];
          }

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let ps = [];
          let p = Vec3.clone(this.handCenter);
          let total = Math.max(0, this.handCards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide;
          p.x = this.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide / 2;

          for (let i = 0; i < this.handCards.length; i++) {
            let card = this.handCards[i];
            ps.push(card.LayoutHands(p, this.handQuat));
            p.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
          }

          await Promise.all(ps);
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 出牌到区域
         * @param cardData 
         * @param area 
         * @param index 
         */


        async SendMyCardToArea(cardData, area, index) {
          if (this.cardMap[cardData.instId]) {
            var _obj$card3;

            let obj = this.cardMap[cardData.instId];
            console.error("场景中已有相同id的卡 area:" + obj.area + " index:" + obj.index);
            (_obj$card3 = obj.card) == null || _obj$card3.receive == null || _obj$card3.receive();
            delete this.cardMap[cardData.instId];
          }

          let newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
            error: Error()
          }), SceneCard) : SceneCard).Create();
          if (this.selectedCard) newCard.setWorldPosition(this.selectedCard.worldPosition); // this.node.addChild(newCard);

          this.areaCardLay.addChild(newCard);
          this.cardMap[cardData.instId] = {
            isMy: true,
            card: newCard,
            area: area,
            index: index
          };
          newCard.InitData(true, cardData, this.handRotation);
          let set = this.myTeamLayout[area][index];
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          await newCard.PlayToMyArea(set.worldPosition, set.rotation); // this.areaCardLay.addChild(newCard);

          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 添加对手牌
         * @param cardData 
         * @param area 
         * @param index 
         */


        async SendAdCardToArea(cardData, area, index) {
          if (this.cardMap[cardData.instId]) {
            var _obj$card4;

            let obj = this.cardMap[cardData.instId];
            console.error("场景中已有相同id的卡 area:" + obj.area + " index:" + obj.index);
            (_obj$card4 = obj.card) == null || _obj$card4.receive == null || _obj$card4.receive();
            delete this.cardMap[cardData.instId];
          }

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
            error: Error()
          }), SceneCard) : SceneCard).Create(); // this.node.addChild(newCard);

          this.areaCardLay.addChild(newCard);
          newCard.setWorldPosition(this.adCardEnterV.x, this.adCardEnterV.y, this.adCardEnterV.z);
          this.cardMap[cardData.instId] = {
            isMy: false,
            card: newCard,
            area: area,
            index: index
          };
          newCard.InitData(false, cardData, this.handRotation);
          let set = this.adTeamLayout[area][index];
          await newCard.PlayToAdArea(set.worldPosition); // this.areaCardLay.addChild(newCard);

          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 刷新区域状态
         * @param data 
         */


        async FlushTerrain(ispLayerA, data, ownerPlayerId) {
          let terrainDatas;
          let Reveal = []; //第几回合开启

          let TerrainInstIds = []; //地形实际的instId

          if (data instanceof (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomGamePlayData) {
            terrainDatas = data.terrains;
            Reveal = data.levelData.reveal;

            for (let k in data.players) {
              let player = data.players[k];
              let isMy = player.playerId == ownerPlayerId;

              for (let i = 0; i < player.terrain.length; i++) {
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

          for (let i = 0; i < terrainDatas.length; i++) {
            let terrain = terrainDatas[i];
            let area = this.areaList[terrain.area];

            if (!this.cardMap[terrain.instId]) {
              let card = area.getChildByName("hitTest");
              card['instId'] = terrain.instId;
              this.cardMap[terrain.instId] = {
                isMy: true,
                card: card,
                area: undefined,
                index: undefined
              };
            }

            if (TerrainInstIds[i]) {
              let instId1 = TerrainInstIds[i].my,
                  instId2 = TerrainInstIds[i].ad;

              if (!this.cardMap[instId1]) {
                let card = area['hitTest1']; //area.getChildByName("hitTest1_area" + i);

                card['instId'] = instId1;
                this.cardMap[instId1] = {
                  isMy: true,
                  card: card,
                  area: i,
                  index: undefined
                };
              }

              if (!this.cardMap[instId2]) {
                let card = area['hitTest2']; //area.getChildByName("hitTest2_area" + i);

                card['instId'] = instId2;
                this.cardMap[instId2] = {
                  isMy: false,
                  card: card,
                  area: i,
                  index: undefined
                };
              }
            }

            area["instId"] = terrain.instId;
            let desc = area.getChildByName('desc').getComponent(Label),
                mask = area.getChildByName('mask'),
                destory = area.getChildByName('destory'),
                filed = area.getChildByName("filed").getComponent(sp.Skeleton);
            desc.node.active = false;
            mask.active = false;
            destory.active = false;
            let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("Area")[terrain.configId];
            let filedUrl = std ? `spine/${std.AreaIcon}/${std.AreaIcon}` : "spine/filed_0000/filed_0000";
            let ainmName,
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

                  if (Reveal[i]) {
                    if (Reveal[i] - (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                      error: Error()
                    }), FightData) : FightData).currentRound == 1) {
                      desc.string = "下回合揭示";
                    } else {
                      desc.string = "第" + Reveal[i] + "回合揭示";
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
                  let scale = desc.node.scale.x;
                  tween(desc.node).to(0.1, {
                    scale: v3(scale * 1.5, scale * 1.5, scale * 1.5)
                  }).to(0.1, {
                    scale: v3(scale, scale, scale)
                  }).start();
                  await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
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
                area.getChildByName('destory').active = true;
                break;
            }

            if (ainmName) {
              filed.node.active = true;

              if (filedUrl && filed['filedUrl'] != filedUrl) {
                filed['filedUrl'] = filedUrl;
                filed.skeletonData = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(filedUrl, sp.SkeletonData);
                filed.setAnimation(0, ainmName, loop);
              }
            } else {
              filed.node.active = false;
            }
          }
        }
        /**
         * 锁定
         * @param isPlayerA 
         * @param data 
         */


        async LockTerrain(isPlayerA, data) {
          let attacker = this.findCard(data.fromInstId);
          let cardLoca = this.findCard(data.toInstId);

          if (data.fromSkillId) {
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [cardLoca == null ? void 0 : cardLoca.card], [cardLoca == null ? void 0 : cardLoca.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, isPlayerA);
          }
        }
        /**
         * 刷新战力
         * @param isPlayerA 
         * @param area 
         * @param power 
         */


        FlushAreaPower(isPlayerA, area, power) {
          let areaNode = this.areaList[area];
          let apower, bpower, aeffect, beffect;

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
            let old = Number(apower.string);

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


        async FlushAreaCrads(isPlayerA, area, terrains) {
          let datas = terrains.cards; //先清理数据不同步的卡牌

          for (let k in this.cardMap) {
            let obj = this.cardMap[k];

            if (obj.card instanceof (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
              error: Error()
            }), GameObj) : GameObj) && obj.area == area && obj.isMy == isPlayerA && datas.findIndex(value => value.instId == obj.card.instId) == -1) {
              var _obj$card5;

              (_obj$card5 = obj.card) == null || _obj$card5.receive == null || _obj$card5.receive();
              obj.card = undefined;
              delete this.cardMap[k];
            }
          }

          for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            let obj = this.cardMap[data.instId];

            if (!obj) {
              var _obj$card6;

              let newCard = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              this.areaCardLay.addChild(newCard);
              obj = {
                isMy: isPlayerA,
                card: newCard,
                area: area,
                index: i
              };
              this.cardMap[data.instId] = obj;
              (_obj$card6 = obj.card) == null || _obj$card6.InitData == null || _obj$card6.InitData(isPlayerA, data, this.handRotation);
            } else {
              var _obj$card7;

              obj.area = area;
              obj.index = i;
              (_obj$card7 = obj.card) == null || _obj$card7.FlushData == null || _obj$card7.FlushData(isPlayerA, data);
            }
          }

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          await this.LayoutAllArea();
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 刷新布局
         */


        async LayoutAllArea() {
          for (let k in this.cardMap) {
            let obj = this.cardMap[k];

            if (obj.card && obj.area != undefined && obj.index != undefined) {
              var _obj$card8;

              let layout = obj.isMy ? this.myTeamLayout[obj.area][obj.index] : this.adTeamLayout[obj.area][obj.index];

              if (!layout) {
                console.error("找不到地形上的卡片：" + (obj == null ? void 0 : obj.area) + "," + (obj == null ? void 0 : obj.index));
              }

              if (obj.card && obj.card.parent != this.areaCardLay) this.areaCardLay.addChild(obj.card);

              if (!((_obj$card8 = obj.card) != null && _obj$card8.CheckMatrix != null && _obj$card8.CheckMatrix(layout.worldPosition))) {
                var _obj$card9;

                await ((_obj$card9 = obj.card) == null || _obj$card9.LayoutArea == null ? void 0 : _obj$card9.LayoutArea(layout.worldPosition));
              }
            }
          }
        }
        /**
         * 盖牌
         * @param datas 
         */


        async CloseCard(data) {
          let obj = this.cardMap[data.instId];

          if (obj) {
            var _obj$card10;

            await ((_obj$card10 = obj.card) == null || _obj$card10.TurnBack == null ? void 0 : _obj$card10.TurnBack());
          }
        }
        /**
         * 显示卡
         * @param datas 
         */


        async ShowCard(data) {
          var _obj$card11, _obj$card12;

          let obj = this.cardMap[data.instId];
          if (!obj) return 0; // if (obj.card.parent) obj.card.setSiblingIndex(obj.card.parent.children.length - 1)
          // this.node.addChild(obj.card);

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          (_obj$card11 = obj.card) == null || _obj$card11.FlushData == null || _obj$card11.FlushData(obj.isMy, data);
          await ((_obj$card12 = obj.card) == null || _obj$card12.Open == null ? void 0 : _obj$card12.Open());
          this.areaCardLay.addChild(obj.card); // for (let k in this.cardMap) {
          //     let other = this.cardMap[k];
          //     if (other != obj && other.card.state == CardState.Fightting && other.card.isMy != obj.card.isMy && other.area == obj.area) {
          //         other.card.Shake(2.5);
          //     }
          // }

          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**获取位置 */


        fileLocation(isPlayerA, location, area = 0, idx) {
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

              let areaName = isPlayerA ? "hitTest1" : "hitTest2";
              let areaNode = this.areaList[area];
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


        async PlaySkill(isPlayerA, data) {
          // 如果当前回合已起效则跳过,count<0表示未起效
          if (!data.instId || !data.count.length || data.count[(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).curRound] == undefined) return;
          if (data.count[(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).curRound] == -1 || data.count[(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).curRound] < -2) return;
          let attacker = this.cardMap[data.instId];
          if (!attacker) this.handCards.find(value => value.Id == data.instId);
          let targets = [],
              self = this,
              myAreas = [],
              adAreas = [];
          data.targets.forEach(value => {
            targets.push(this.findCard(value.instId) || self.fileLocation(isPlayerA, value.location));

            if ((_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).isPlayerA(value.playerId)) {
              myAreas.push(value.area);
            } else {
              adAreas.push(value.area);
            }
          });
          let tag;

          if (!targets.length && attacker) {
            tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, targets);

            if (!(_crd && SkillUtils === void 0 ? (_reportPossibleCrUseOfSkillUtils({
              error: Error()
            }), SkillUtils) : SkillUtils).TryToFindTarget(isPlayerA, attacker == null ? void 0 : attacker.card, tag, data)) {
              tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, targets, [attacker.area]);
            }
          } else if (attacker) {
            tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, targets, [attacker.area]);
          } else {
            return;
          }

          let output = {
            fromInstId: data.instId,
            fromSkillId: data.skillId
          };
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill).Play(output, tag, isPlayerA, undefined, true);
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
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


        async CardDataChange(isPlayerA, data) {
          var _changeCard$card;

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let attacker = this.findCard(data.fromInstId);
          let changeCard = this.findCard(data.card.instId);
          let target = this.findCard(TouchInstId(data)) || changeCard;

          if (data.fromSkillId) {
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, isPlayerA);
          }

          changeCard == null || (_changeCard$card = changeCard.card) == null || _changeCard$card.FlushData == null || _changeCard$card.FlushData(isPlayerA, data.card);
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0.25);
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 查找卡
         * @param instId 
         * @returns 
         */


        findCard(instId) {
          if (!instId) return undefined;
          let card = this.handCards.find(value => value.instId == instId);

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


        async RmoveCardFormArea(isPlayerA, data, loca) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let removeTag = this.cardMap[data.card.instId];
          let attacker = this.findCard(data.fromInstId);
          let target = this.findCard(TouchInstId(data)) || removeTag;

          if (removeTag) {
            var _removeTag$card, _removeTag$card2;

            if (data.fromSkillId) {
              let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target.card], [attacker == null ? void 0 : attacker.area], [target.area]);
              await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
                error: Error()
              }), Skill) : Skill).Play(data, tag, isPlayerA);
            }

            delete this.cardMap[data.card.instId];
            let delLoca = this.fileLocation(isPlayerA, loca);
            if (delLoca) await ((_removeTag$card = removeTag.card) == null || _removeTag$card.MoveTo == null ? void 0 : _removeTag$card.MoveTo(delLoca.worldPosition));
            (_removeTag$card2 = removeTag.card) == null || _removeTag$card2.receive == null || _removeTag$card2.receive();
          }

          this.LayoutAllArea();
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 移除手牌上的一张卡到指定位置
         * @param isPlayerA 
         * @param data 
         * @param loca 
         * @returns 
         */


        async RemoveCardFormHand(isPlayerA, data, loca) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let obj;

          if (isPlayerA) {
            let index = this.handCards.findIndex(value => value.instId == data.card.instId);
            obj = this.handCards[index];
            this.handCards.splice(index, 1);
          } else {
            obj = this.adHand;
          }

          if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId);
            let target = this.findCard(TouchInstId(data)) || cardLoca(obj, isPlayerA);
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, isPlayerA);
          }

          let locaNode = this.fileLocation(isPlayerA, loca);

          if (isPlayerA) {
            if (obj instanceof (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard)) {
              await obj.MoveTo(locaNode.worldPosition);
              obj.receive();
            } else {
              console.warn("找不到可移除的手牌" + data.card.instId);
            }
          } else {
            let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(isPlayerA, data.card);
            card.setWorldRotation(this.handQuat);
            this.handCardLay.addChild(card);
            card.setWorldPosition(this.adHand.worldPosition);
            await card.MoveTo(locaNode.worldPosition, this.handQuat);
            card.receive();
          }

          this.LayoutAllHandCards();
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 非可视区域的卡牌飞到场景区域上
         * @param formIsPlayerA 卡牌来源是否第一视觉玩家
         * @param toIsPlayerA 卡牌目标是否第一视觉玩家
         * @param areaIdx 添加卡牌的目标区域下标
         * @param cardIdx 添加卡牌的目标下标
         * @param data 添加卡牌数据
         */


        async CardBackToArea(isPlayerA, formIsPlayerA, toIsPlayerA, areaIdx, cardIdx, data) {
          var _fromNode, _obj$card13;

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let fromNode = this.fileLocation(formIsPlayerA, data.fromLocation);

          if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId); //定位此技能的发起卡牌

            let target = this.findCard(TouchInstId(data));
            if (!fromNode) fromNode = target == null ? void 0 : target.card;
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, isPlayerA);
          }

          let layout = (toIsPlayerA ? this.myTeamLayout : this.adTeamLayout)[areaIdx][cardIdx];
          let obj = this.cardMap[data.card.instId];

          if (!obj) {
            let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(isPlayerA, data.card, this.zero);
            this.areaCardLay.addChild(card);
            obj = {
              isMy: toIsPlayerA,
              card: card,
              area: areaIdx,
              index: cardIdx
            };
            this.cardMap[data.card.instId] = obj;
          }

          obj.card.setWorldPosition(((_fromNode = fromNode) == null ? void 0 : _fromNode.worldPosition) || this.zero);
          await ((_obj$card13 = obj.card) == null || _obj$card13.MoveTo == null ? void 0 : _obj$card13.MoveTo(layout.worldPosition)); //await obj.card?.Open?.();

          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 复制对方的卡或者把对方的卡挪过来用
         * @param isPlayerA 是否自己
         * @param data 
         */


        async AddCard(isPlayerA, data) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let fromCard = this.findCard(data.sourceInstId);
          if (!fromCard) fromCard = cardLoca(this.fileLocation(isPlayerA, data.sourceLocation), isPlayerA);

          if (data.fromSkillId) {
            var _fromCard2;

            let attacker = this.findCard(data.fromInstId); // this.cardMap[data.fromInstId];

            let tager = this.findCard(TouchInstId(data)) || fromCard;
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [tager == null ? void 0 : tager.card], [attacker == null ? void 0 : attacker.area], [(_fromCard2 = fromCard) == null ? void 0 : _fromCard2.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag);
          }

          let sourceCard, target; // 处理来源

          if (data.sourceLocation == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Hand) {
            // 来源卡位于自己手牌
            let index = this.handCards.findIndex(value => value.instId == data.sourceInstId);

            if (index != -1) {
              sourceCard = this.handCards[index];

              if (data.isMove) {
                this.handCards.splice(index, 1);
                this.LayoutAllHandCards();
              }
            }
          } else if (data.sourceLocation == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Terrain) {
            // 来源卡位于场景上
            fromCard = this.cardMap[data.sourceInstId];

            if (fromCard) {
              if (data.isMove) delete this.cardMap[data.sourceInstId];
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
                this.handCardLay.addChild(target);
                this.handCards.push(target);
                await this.LayoutAllHandCards();
              } else {
                await target.MoveTo(this.adHand.worldPosition, this.handQuat);
              }

              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain:
              this.areaCardLay.addChild(target);
              let idx = 0;

              for (let k in this.cardMap) {
                if (this.cardMap[k].area == data.card.area && this.cardMap[k].isMy == isPlayerA) {
                  if (this.cardMap[k].index != undefined) {
                    idx = Math.max(this.cardMap[k].index + 1, idx);
                  }
                }
              }

              this.cardMap[data.card.instId] = {
                isMy: isPlayerA,
                card: target,
                area: data.card.area,
                index: idx
              };
              await this.LayoutAllArea();
              await target.Open();
              break;

            default:
              this.areaCardLay.addChild(target);
              let loca = this.fileLocation(isPlayerA, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomCardLocation.Deck);
              await target.MoveTo(loca.worldPosition);
              target.receive();
          }

          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 从各个地方飞向指定区域
         * @param isPlayerA 
         * @param data 
         * @param fromData 
         * @param targetIdx 
         */


        async AddCardToArea(isPlayerA, data, fromData, area, targetIdx) {
          var _obj$card14, _fromCard4, _obj$card15, _obj$card16;

          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let fromCard = this.findCard(fromData == null ? void 0 : fromData.instId);
          if (!fromCard && data['fromLocation'] != undefined) fromCard = cardLoca(this.fileLocation(isPlayerA, data['fromLocation']), isPlayerA);

          if (data.fromSkillId) {
            var _fromCard3;

            let attacker = this.findCard(data.fromInstId); // this.cardMap[data.fromInstId];

            let target = this.findCard(TouchInstId(data)) || fromCard;
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [area || ((_fromCard3 = fromCard) == null ? void 0 : _fromCard3.area)]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag);
          }

          let obj = this.cardMap[data.card.instId];

          if (obj) {
            obj.area = data.card.area;
            obj.index = targetIdx;
            obj.isMy = isPlayerA;
          } else {
            let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(data.card, v3());
            this.handCardLay.addChild(card);
            obj = {
              isMy: isPlayerA,
              card: card,
              area: data.card.area,
              index: targetIdx
            };
            this.cardMap[data.card.instId] = obj;
          }

          let target = this.fileLocation(isPlayerA, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Terrain, data.card.area, targetIdx);
          (_obj$card14 = obj.card) == null || _obj$card14.setWorldPosition(((_fromCard4 = fromCard) == null || (_fromCard4 = _fromCard4.card) == null ? void 0 : _fromCard4.worldPosition) || this.zero);
          await ((_obj$card15 = obj.card) == null || _obj$card15.MoveTo == null ? void 0 : _obj$card15.MoveTo(target.worldPosition));
          if (obj.card.state != (_crd && CardState === void 0 ? (_reportPossibleCrUseOfCardState({
            error: Error()
          }), CardState) : CardState).Showing) await ((_obj$card16 = obj.card) == null || _obj$card16.Open == null ? void 0 : _obj$card16.Open());
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 手牌自动出牌
         * @param cardData 
         * @param area 
         * @param cardIdx 
         * @returns 
         */


        async AutoPlayHand(cardData, area, cardIdx) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let card;

          for (let index = 0; index < this.handCards.length; index++) {
            if (this.handCards[index].instId == cardData.instId) {
              card = this.handCards[index];
              this.handCards.splice(index, 1);
            }
          }

          if (card) {
            let obj = {
              isMy: true,
              card: card,
              area: area,
              index: cardIdx
            };
            this.cardMap[cardData.instId] = obj;
            card.parent = this.areaCardLay;
            let target = this.fileLocation(true, (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomCardLocation.Terrain, cardData.area, cardIdx);
            await card.MoveTo(target.worldPosition);
            await card.PlayToMyArea(target.worldPosition, target.rotation);
          }

          this.LayoutAllHandCards();
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 非可视区域卡牌转变
         * （例：弃牌区到删除区、卡组区到弃牌区）
         * @param isPlayerA 是否第一视觉玩家
         * @param data 卡牌数据
         */


        async RemoveDeckToUnVisible(isPlayerA, data, loca) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let attacker = this.findCard(data.fromInstId); //定位发起技能的卡牌

          let delNode = isPlayerA ? this.myDeck : this.adDeck;
          let target = this.findCard(TouchInstId(data)) || cardLoca(delNode, isPlayerA);
          let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], []);
          if (data.fromSkillId) await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill).Play(data, tag, isPlayerA);
          let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
            error: Error()
          }), SceneCard) : SceneCard).Create();
          card.InitData(isPlayerA, data.card);
          this.node.addChild(card);
          let tagNode = this.fileLocation(isPlayerA, loca);

          if (tagNode) {
            card.setWorldPosition(tagNode.worldPosition.x, tagNode.worldPosition.y, tagNode.worldPosition.z);
          } else {
            card.setWorldPosition(this.zero);
          }

          await card.MoveTo(delNode.worldPosition);
          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 非可视区域添加卡牌
         * （例：复制一张卡到卡组区域、系统发卡牌到卡组区域）
         * @param isPlayerA 是否第一视觉玩家
         * @param data 卡牌数据
         */


        async AddCardToDeck(isPlayerA, targetPlayer, data) {
          let attacker = this.findCard(data.fromInstId); //尝试定位发起技能的卡牌
          // let head = data.card.area ? this.node.getChildByPath("ui/my") : this.node.getChildByPath("ui/ad");

          let head = this.fileLocation(targetPlayer, data.card.location);
          let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [head]);
          if (data.fromSkillId) await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill).Play(data, tag);
          if (data.card.location == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomCardLocation.Deck) return; //不可见的地方用特效

          let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
            error: Error()
          }), SceneCard) : SceneCard).Create();
          card.InitData(isPlayerA, data.card);
          this.node.addChild(card);
          let tagObj = this.findCard(data.fromPlayerId); //this.fileLocation(isPlayerA, proto.base.BattleRoomCardLocation.Drop);

          if (tagObj) {
            card.setWorldPosition(tagObj.card.worldPosition);
          } else {
            let tagNode = this.fileLocation(isPlayerA, data.fromLocation);

            if (tagNode) {
              card.setWorldPosition(tagNode.worldPosition);
            } else {
              card.setWorldPosition(this.zero);
            }
          }

          await card.MoveTo(head.worldPosition);
          card.receive();
        }
        /**
         * 从各个方向添加卡牌到手牌上
         * @param isPlayerA 
         * @param data 
         * @param fromLocation 
         * @param fromCard 
         */


        async AddCardToHand(isPlayerA, data, fromLocation, fromCard) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let fromLoca;
          if (fromCard) fromLoca = this.findCard(fromCard.instId);
          if (!fromLoca) fromLoca = cardLoca(this.fileLocation(isPlayerA, data['fromLocation'] || fromLocation), isPlayerA); // if (!fromNode) fromNode = this.findCard(TouchInstId(data));

          let target = this.findCard(TouchInstId(data)) || fromLoca;

          if (data.fromSkillId) {
            let attacker = this.findCard(data.fromInstId); //this.cardMap[data.fromInstId];

            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag);
          }

          if (isPlayerA) {
            if (!this.handCards.find(value => value.instId == data.card.instId)) {
              var _fromLoca;

              let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              card.InitData(isPlayerA, data.card, v3());
              this.handCards.push(card);
              this.handCardLay.addChild(card);
              card.setWorldPosition(((_fromLoca = fromLoca) == null || (_fromLoca = _fromLoca.card) == null ? void 0 : _fromLoca.worldPosition) || this.zero);
              let v = Vec3.clone(this.handCenter);
              let total = this.handCards.length * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide;
              v.x = this.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide / 2;
              v.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).CardWide * this.handCards.length;
              await card.MoveTo(v, this.handQuat);
            }
          } else {
            let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(isPlayerA, data.card, v3());
            card.setWorldPosition(this.zero);
            await card.MoveTo(this.adHand.worldPosition, this.handQuat);
          }

          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 卡牌在区域上移动
         * @param isPlayerA 移动目的地的玩家是否第一视觉玩家
         * @param areaIdx 移动目的地的区域下标
         * @param cardIdx 移动目的地的卡牌下标
         * @param data 
         */


        async CardAreaMove(isPlayerA, areaIdx, cardIdx, data) {
          let tt = (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)();
          let attacker = this.findCard(data.fromInstId);
          let obj = this.cardMap[data.card.instId];
          let target = this.findCard(TouchInstId(data)) || obj;

          if (data.fromSkillId) {
            let tag = this.skillTarget(isPlayerA, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag, isPlayerA);
          }

          if (obj) {
            var _obj$card17, _obj$card18;

            obj.isMy = isPlayerA;
            obj.area = areaIdx;
            obj.index = cardIdx;
            let targetNode = isPlayerA ? this.myTeamLayout[areaIdx][cardIdx] : this.adTeamLayout[areaIdx][cardIdx];
            (_obj$card17 = obj.card) == null || _obj$card17.FlushData == null || _obj$card17.FlushData(isPlayerA, data.card);
            await ((_obj$card18 = obj.card) == null || _obj$card18.MoveTo == null ? void 0 : _obj$card18.MoveTo(targetNode.worldPosition));
          } else {
            this.AddCardToArea(isPlayerA, data, undefined, areaIdx, cardIdx);
          }

          return (_crd && TimeStamp === void 0 ? (_reportPossibleCrUseOfTimeStamp({
            error: Error()
          }), TimeStamp) : TimeStamp)(tt);
        }
        /**
         * 窥视区域
         * @param data 
         */


        async PeekTerrain(isplayerA, data, playerIdA) {
          let attacker = this.findCard(data.fromInstId);
          let target = this.findCard(TouchInstId(data)) || attacker;
          let terrains = [];

          for (let k in data.terrainData) {
            terrains.push(data.terrainData[k]);
          }

          if (data.fromSkillId) {
            let areas = [];

            for (let k in data.terrainData) {
              let terrain = data.terrainData[k]; // let target = this.fileLocation(false, proto.base.BattleRoomCardLocation.Terrain, terrain.area);
              // if (target) areas.push(target);

              areas.push(terrain.area);
            }

            let tag = this.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], areas);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag);
          }

          await this.FlushTerrain(isplayerA, terrains, playerIdA);
        }
        /**
         * 窥视卡片
         * @param data 
         * @param loca 
         */


        async PeekHandCards(data, loca = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).base.BattleRoomCardLocation.Hand) {
          let attacker = this.findCard(data.fromInstId);

          if (data.fromSkillId) {
            // let target = this.fileLocation(false, loca);
            let target = this.findCard(TouchInstId(data)) || cardLoca(this.fileLocation(false, loca), true);
            let tag = this.skillTarget(true, attacker == null ? void 0 : attacker.card, [target == null ? void 0 : target.card], [attacker == null ? void 0 : attacker.area], [target == null ? void 0 : target.area]);
            await (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).Play(data, tag);
          }

          let head = this.node.getChildByPath("ui/ad");
          let cards = [];

          for (let k in data.handCards) {
            let cardData = data.handCards[k];
            let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
              error: Error()
            }), SceneCard) : SceneCard).Create();
            card.InitData(false, cardData, this.handQuat);
            this.handCardLay.addChild(card);
            card.setWorldPosition(head.worldPosition.x, head.worldPosition.y, head.worldPosition.z);
            cards.push(card);
          }

          let ps = [];
          let v = Vec3.clone(this.PeekHandV);
          let total = Math.max(0, cards.length - 1) * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide;
          v.x = this.handCenter.x - total - (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide / 2;

          for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            ps.push(card.LayoutHands(v, this.handQuat));
            v.x += (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).CardWide;
          }

          await Promise.all(ps);
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(3);
          ps.length = 0;

          for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            ps.push(card.MoveTo(this.adHand.worldPosition, this.handQuat));
          }

          await Promise.all(ps);

          while (cards.length) {
            cards.pop().receive();
          }
        }
        /**
         * 重置
         */


        Reset() {
          if (this.myNameLab) {
            this.myNameLab.string = "";
            this.adNameLab.string = ""; // this.roundLab.string = "";
          }

          this.doubleLab.string = `1`;
          this.roundBtnMaskBg.active = true;
          this.progress.fillRange = 0;
          this.isWaitInput = false;
          this.qxjshhEffect.active = false;
          this.notTimeEffect.active = false;
          this.jshhEffect.active = false;

          for (let k in this.cardMap) {
            var _obj$card19, _obj$card20;

            let obj = this.cardMap[k];
            ((_obj$card19 = obj.card) == null ? void 0 : _obj$card19.receive) && ((_obj$card20 = obj.card) == null ? void 0 : _obj$card20.receive());
          }

          this.cardMap = {};

          for (let area of this.areaList) {
            area.getChildByName("mywin01").active = false;
            area.getChildByName("mywin02").active = false;
            area.getChildByName("adwin01").active = false;
            area.getChildByName("adwin02").active = false;
            area.getChildByName("desc").getComponent(Label).string = "";
            area.getChildByName("power1").getComponent(Label).string = "";
            area.getChildByName("power2").getComponent(Label).string = "";
          }

          while (this.handCards.length) {
            let card = this.handCards.pop();
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