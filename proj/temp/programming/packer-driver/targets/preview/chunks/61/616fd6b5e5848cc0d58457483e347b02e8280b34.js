System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCString, Component, easing, Enum, game, Node, ParticleSystem, sp, Sprite, Tween, tween, v3, Vec3, EaseType, Second, Utils, Bezier, EventMgr, GameObj, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _class3, _crd, ccclass, disallowMultiple, property, EffectType, TargetType, AffectType, EffectState, PathType, EffectSet;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "./EaseType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBezier(extras) {
    _reporterNs.report("Bezier", "../../../utils/Bezier", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneEntry(extras) {
    _reporterNs.report("ISceneEntry", "./SceneCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneCard(extras) {
    _reporterNs.report("SceneCard", "./SceneCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "../../../manager/GameRoot", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      CCString = _cc.CCString;
      Component = _cc.Component;
      easing = _cc.easing;
      Enum = _cc.Enum;
      game = _cc.game;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EaseType = _unresolved_2.EaseType;
    }, function (_unresolved_3) {
      Second = _unresolved_3.Second;
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      Bezier = _unresolved_4.Bezier;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      GameObj = _unresolved_6.GameObj;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40bf6KjiOFGqoQunmlklapq", "EffectSet", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCString', 'Component', 'easing', 'Enum', 'game', 'Node', 'ParticleSystem', 'sp', 'Sprite', 'Tween', 'tween', 'v3', 'Vec3']);

      ({
        ccclass,
        disallowMultiple,
        property
      } = _decorator);
      /**效果类型枚举 */

      EffectType = /*#__PURE__*/function (EffectType) {
        EffectType[EffectType["none"] = 0] = "none";
        EffectType[EffectType["sample"] = 1] = "sample";
        EffectType[EffectType["times"] = 2] = "times";
        EffectType[EffectType["bullet"] = 3] = "bullet";
        EffectType[EffectType["autoBullet"] = 4] = "autoBullet";
        return EffectType;
      }(EffectType || {});
      /**目标枚举 */


      _export("TargetType", TargetType = /*#__PURE__*/function (TargetType) {
        TargetType[TargetType["None"] = 0] = "None";
        TargetType[TargetType["all"] = 1] = "all";
        TargetType[TargetType["attacker"] = 2] = "attacker";
        TargetType[TargetType["target"] = 3] = "target";
        TargetType[TargetType["myArea"] = 4] = "myArea";
        TargetType[TargetType["myDeck"] = 5] = "myDeck";
        TargetType[TargetType["myHand"] = 6] = "myHand";
        TargetType[TargetType["myDrop"] = 7] = "myDrop";
        TargetType[TargetType["myDel"] = 8] = "myDel";
        TargetType[TargetType["myEnergy"] = 9] = "myEnergy";
        TargetType[TargetType["adArea"] = 10] = "adArea";
        TargetType[TargetType["adDeck"] = 11] = "adDeck";
        TargetType[TargetType["adHand"] = 12] = "adHand";
        TargetType[TargetType["adDrop"] = 13] = "adDrop";
        TargetType[TargetType["adDel"] = 14] = "adDel";
        TargetType[TargetType["adEnergy"] = 15] = "adEnergy";
        return TargetType;
      }({}));

      /**效果 */
      _export("AffectType", AffectType = /*#__PURE__*/function (AffectType) {
        AffectType[AffectType["None"] = 0] = "None";
        AffectType[AffectType["ChangePower"] = 1] = "ChangePower";
        AffectType[AffectType["ChangeCost"] = 2] = "ChangeCost";
        AffectType[AffectType["Copy"] = 3] = "Copy";
        AffectType[AffectType["CopyPower"] = 4] = "CopyPower";
        AffectType[AffectType["CopyCost"] = 5] = "CopyCost";
        AffectType[AffectType["Transform"] = 6] = "Transform";
        AffectType[AffectType["Nullify"] = 7] = "Nullify";
        AffectType[AffectType["RepeatEffect"] = 8] = "RepeatEffect";
        AffectType[AffectType["Protect"] = 9] = "Protect";
        AffectType[AffectType["Resurrect"] = 10] = "Resurrect";
        AffectType[AffectType["Draw"] = 11] = "Draw";
        AffectType[AffectType["Dis"] = 12] = "Dis";
        AffectType[AffectType["Recycle"] = 13] = "Recycle";
        AffectType[AffectType["Peek"] = 14] = "Peek";
        AffectType[AffectType["ModifyHandCost"] = 15] = "ModifyHandCost";
        AffectType[AffectType["AdjustHandLimit"] = 16] = "AdjustHandLimit";
        AffectType[AffectType["AddToZone"] = 17] = "AddToZone";
        AffectType[AffectType["RemoveZone"] = 18] = "RemoveZone";
        AffectType[AffectType["AdjustZonePower"] = 19] = "AdjustZonePower";
        AffectType[AffectType["ScaleZonePower"] = 20] = "ScaleZonePower";
        AffectType[AffectType["ModifyZoneSkill"] = 21] = "ModifyZoneSkill";
        AffectType[AffectType["MoveBetweenZones"] = 22] = "MoveBetweenZones";
        AffectType[AffectType["LockZone"] = 23] = "LockZone";
        AffectType[AffectType["ClearZone"] = 24] = "ClearZone";
        AffectType[AffectType["DestroyZone"] = 25] = "DestroyZone";
        AffectType[AffectType["AdjustAllZonesPower"] = 26] = "AdjustAllZonesPower";
        AffectType[AffectType["GainEnergy"] = 27] = "GainEnergy";
        AffectType[AffectType["ExtendTurn"] = 28] = "ExtendTurn";
        AffectType[AffectType["All"] = 29] = "All";
        return AffectType;
      }({}));
      /**特效状态 */


      EffectState = /*#__PURE__*/function (EffectState) {
        EffectState[EffectState["idle"] = 0] = "idle";
        EffectState[EffectState["playing"] = 1] = "playing";
        EffectState[EffectState["finish"] = 2] = "finish";
        EffectState[EffectState["buff"] = 3] = "buff";
        return EffectState;
      }(EffectState || {});
      /**路径类型 */


      PathType = /*#__PURE__*/function (PathType) {
        PathType[PathType["liner"] = 0] = "liner";
        PathType[PathType["curve"] = 1] = "curve";
        PathType[PathType["bezier"] = 2] = "bezier";
        return PathType;
      }(PathType || {});

      _export("EffectSet", EffectSet = (_dec = ccclass('EffectSet'), _dec2 = disallowMultiple(true), _dec3 = property({
        type: Enum(EffectType),
        tooltip: "类型"
      }), _dec4 = property({
        tooltip: "起始特效"
      }), _dec5 = property({
        tooltip: "触发器"
      }), _dec6 = property({
        tooltip: "结束特效，此特效播放结束将强制回收所有特效",

        visible() {
          return this.tigger == true;
        }

      }), _dec7 = property({
        type: Enum(TargetType),
        tooltip: "触发对象",

        visible() {
          return this.tigger == true;
        }

      }), _dec8 = property({
        type: Enum(AffectType),
        tooltip: "作用效果,详见battle_card_effect表",

        visible() {
          return this.tigger == true;
        }

      }), _dec9 = property({
        type: CCString,
        tooltip: "buff触发播放",

        visible() {
          return this.tigger == true;
        }

      }), _dec10 = property({
        type: CCFloat,
        tooltip: "(可配暂未实装)震屏"
      }), _dec11 = property({
        type: CCString,
        tooltip: "角色技能动作"
      }), _dec12 = property({
        type: Enum(TargetType),
        tooltip: "发起特效的类型,none表示不展示,all表示任意类型"
      }), _dec13 = property({
        tooltip: "坐标偏差"
      }), _dec14 = property({
        tooltip: "锁定层级-1目标下层,0无锁定,1锁定目标上层"
      }), _dec15 = property({
        type: CCFloat,
        tooltip: "延迟播放的秒数,支持负数"
      }), _dec16 = property({
        type: CCFloat,
        tooltip: "播放的次数,0表示循环播放",

        visible() {
          return this.type == EffectType.times;
        }

      }), _dec17 = property({
        type: CCFloat,
        tooltip: "持续播放秒数",

        visible() {
          return this.type == EffectType.times && this.times == 0;
        }

      }), _dec18 = property({
        type: CCFloat,
        tooltip: "飞行速度(米/秒)",

        visible() {
          return this.type == EffectType.bullet;
        }

      }), _dec19 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType),
        tooltip: "速度类型,详见EaseType",

        visible() {
          return this.type == EffectType.bullet;
        }

      }), _dec20 = property({
        type: Enum(PathType),
        tooltip: "(暂未确定)路径类型:\n  liner(线性)\n   curve(抛物线)\n bezier(贝塞尔曲线)",

        visible() {
          return this.type == EffectType.bullet;
        }

      }), _dec21 = property({
        tooltip: "多发合并,用于合并同时触发多次特效时只播一次的情况"
      }), _dec22 = property({
        tooltip: "子弹是否实时朝向运动方向",

        visible() {
          return this.type == EffectType.bullet;
        }

      }), _dec23 = property({
        type: CCFloat,
        tooltip: "抛物线高度和距离比值",

        visible() {
          return this.pathType == PathType.curve;
        }

      }), _dec24 = property({
        type: [Vec3],
        tooltip: "多阶贝塞尔",

        visible() {
          return this.pathType == PathType.bezier;
        }

      }), _dec25 = property({
        type: Enum(TargetType),
        tooltip: "被攻击目标类型",

        visible() {
          return this.type == EffectType.bullet;
        }

      }), _dec26 = property({
        type: [Node],
        tooltip: "此特效播放完后的下一个特效"
      }), _dec(_class = _dec2(_class = (_class2 = (_class3 = class EffectSet extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "type", _descriptor, this);

          _initializerDefineProperty(this, "root", _descriptor2, this);

          _initializerDefineProperty(this, "tigger", _descriptor3, this);

          _initializerDefineProperty(this, "last", _descriptor4, this);

          _initializerDefineProperty(this, "tiggerType", _descriptor5, this);

          _initializerDefineProperty(this, "tiggerAffect", _descriptor6, this);

          _initializerDefineProperty(this, "buffEvent", _descriptor7, this);

          _initializerDefineProperty(this, "shake", _descriptor8, this);

          _initializerDefineProperty(this, "action", _descriptor9, this);

          _initializerDefineProperty(this, "attackerType", _descriptor10, this);

          _initializerDefineProperty(this, "offset", _descriptor11, this);

          _initializerDefineProperty(this, "lockDepth", _descriptor12, this);

          _initializerDefineProperty(this, "delay", _descriptor13, this);

          _initializerDefineProperty(this, "times", _descriptor14, this);

          _initializerDefineProperty(this, "playDuration", _descriptor15, this);

          _initializerDefineProperty(this, "speed", _descriptor16, this);

          _initializerDefineProperty(this, "ease", _descriptor17, this);

          _initializerDefineProperty(this, "pathType", _descriptor18, this);

          _initializerDefineProperty(this, "merge", _descriptor19, this);

          _initializerDefineProperty(this, "face", _descriptor20, this);

          this.params = [];

          _initializerDefineProperty(this, "curveRatio", _descriptor21, this);

          _initializerDefineProperty(this, "bezierPath", _descriptor22, this);

          _initializerDefineProperty(this, "targetType", _descriptor23, this);

          _initializerDefineProperty(this, "nextEffects", _descriptor24, this);

          this.attacker = undefined;
          this.target = undefined;
          this.parent = void 0;
          this.version = void 0;
          this.par = void 0;
          // 粒子特效
          this.prevState = void 0;
          // 粒子特效状态记录
          this.ske = void 0;
          // 骨骼动画
          this.spr = void 0;
          this.lessTimes = void 0;
          // 剩余播放次数
          this.duration = void 0;
          // 此特效持续时间
          this.status = EffectState.idle;
          // 特效状态
          this.startTick = 0;
          // 记录开始播放时间
          this.cb = void 0;
          // 结束回调
          this.tempV = v3();
          // 位置记录
          this.bezier = void 0;
          this.targetSet = void 0;
        }

        onLoad() {
          this.prevState = false;
          this.par = this.getComponent(ParticleSystem);

          if (this.par) {
            this.par.playOnAwake = false;
            this.par.stop();
            this.par.node.active = false;
          }

          this.ske = this.getComponent(sp.Skeleton);

          if (this.ske) {
            this.ske.node.active = false;
          }

          for (var i = this.nextEffects.length - 1; i >= 0; i--) {
            if (!this.nextEffects[i]) this.nextEffects.splice(i, 1);
          }

          this.spr = this.getComponent(Sprite);
        }

        Reset() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off("buff_event", this.onBuffEvent, this);
          this.version = ++EffectSet.seed;
          this.cb = undefined;
          Tween.stopAllByTarget(this.node);
          this.status = EffectState.idle;
          this.cb = undefined;
          this.startTick = 0;
          this.lessTimes = 0;

          if (this.par && this.par.node) {
            this.par.node.active = false;

            try {
              this.par.stop();
            } catch (e) {}

            this.par.playOnAwake = false;
          }

          if (this.ske) {
            if (this.ske.node) {
              this.ske.node.active = false;
            } else {
              console.error("EffectSet.onDestory", this.node.name);
            }
          }

          if (!this.root) {
            this.node.active = false;
          }
        }

        onDestroy() {
          this.Reset();
        }
        /**
         * 设置坐标
         * @param v
         */


        setPosition(v) {
          if (this.offset && !this.offset.equals(Vec3.ZERO)) {
            this.node.setWorldPosition(v.x + this.offset.x, v.y + this.offset.y, v.z + this.offset.z);
          } else {
            this.node.setWorldPosition(v.x, v.y, v.z);
          } // console.log(this.node.name, v.toString(), this.offset.toString(), this.node.worldPosition.toString());

        }
        /**
         * 是否循环播放
         */


        get isLoop() {
          // if (this.type == EffectType.bullet) return true;
          if (this.times <= 0 && this.type == EffectType.times && this.playDuration <= 0) return true;
          return false;
        }

        get isRunning() {
          return this.status == EffectState.playing;
        }

        /**
         * 开始播放
         * @param callBack 
         * @param targets 
         * @returns 
         */
        Play(callBack, targetSet, delay, copy) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _this$attacker, _this$target, _targetSet$TargetType;

            _this.Reset();

            if (_this.type == EffectType.none) return _this.playNext();
            var $attacker = (_this$attacker = _this.attacker) == null ? void 0 : _this$attacker.worldPosition;
            _this.targetSet = targetSet;

            if (!$attacker) {
              var _this$attacker2;

              _this.attacker = targetSet[TargetType[_this.attackerType]];
              $attacker = ((_this$attacker2 = _this.attacker) == null ? void 0 : _this$attacker2.worldPosition) || Vec3.ZERO;
            }

            _this.cb = callBack;
            _this.status = EffectState.playing;

            if (_this.lockDepth > 0) {
              if (_this.attacker) {
                _this.attacker.addChild(_this.node);

                _this.node.setSiblingIndex(_this.attacker.children.length);
              }
            } else if (_this.lockDepth < 0) {
              if (_this.attacker) {
                _this.attacker.addChild(_this.node);

                _this.node.setSiblingIndex(0);
              }
            }

            _this.setPosition($attacker);

            if (!delay) delay = _this.delay;
            _this.startTick = game.totalTime / 1000 + delay;

            if (delay > 0) {
              yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(delay);

              if (_this.status == EffectState.finish) {
                return _this.playNext();
              }
            }

            if (_this.action) {
              var card = _this.attacker || targetSet[TargetType[TargetType.attacker]];

              if (card) {
                card.PlaySkill(_this.action);
              }
            }

            if (_this.buffEvent) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).on("buff_event", _this.onBuffEvent, _this);
            }

            if (_this.tigger && _this.tiggerType > TargetType.None && _this.tiggerAffect > AffectType.None) {
              if (_this.parent) {
                _this.parent.emit("tigger", _this, _this.attackerType, _this.tiggerAffect);
              } else {
                var parent = _this.node.parent; //,skillRoot: TestSkill;

                while (parent) {
                  parent = parent.parent;
                  if (parent) parent.emit("tigger", _this, _this.attackerType, _this.tiggerAffect);
                  if (parent instanceof (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
                    error: Error()
                  }), GameObj) : GameObj)) break;
                }
              }
            }

            _this.node.active = true;
            var merge = false;
            if (copy && _this.merge) merge = true;
            _this.lessTimes = _this.times;

            if (_this.par) {
              _this.par.node.active = true;
              _this.par.enabled = !merge;
              _this.prevState = true;
              _this.par.loop = _this.isLoop || _this.type == EffectType.bullet;

              _this.par.play();

              if (!_this.isLoop) {
                _this.duration = (_this.par.duration || 0) * (_this.times || 1);
              } else {
                _this.duration = _this.par.duration || 0;
              } // if(this.smoothIn) {
              // this.par.startColor
              // this.par.startColor.color
              // }

            } else if (_this.ske) {
              _this.ske.node.active = !merge;
              var name = _this.ske.getCurrent(0).animation.name || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).GetSkeAciton(_this.ske);

              _this.ske.setAnimation(0, name, _this.isLoop || _this.type == EffectType.bullet);

              if (!_this.isLoop) {
                var _this$ske$getCurrent;

                _this.duration = (((_this$ske$getCurrent = _this.ske.getCurrent(0)) == null || (_this$ske$getCurrent = _this$ske$getCurrent.animation) == null ? void 0 : _this$ske$getCurrent.duration) || 0) * (_this.times || 1);
              } else {
                var _this$ske$getCurrent2;

                _this.duration = ((_this$ske$getCurrent2 = _this.ske.getCurrent(0)) == null || (_this$ske$getCurrent2 = _this$ske$getCurrent2.animation) == null ? void 0 : _this$ske$getCurrent2.duration) || 0;
              }
            } else if (_this.spr) {
              _this.spr.node.active = !merge;
            } else {
              _this.duration = 0;
            }

            switch (_this.type) {
              case EffectType.sample:
              case EffectType.times:
                break;

              case EffectType.bullet:
                var $target = (_this$target = _this.target) == null ? void 0 : _this$target.worldPosition;
                if (!$target) $target = (_targetSet$TargetType = targetSet[TargetType[_this.targetType]]) == null ? void 0 : _targetSet$TargetType.worldPosition;
                if (!$target) return _this.playNext();

                _this.tempV.set($target);

                _this.duration = Vec3.distance($attacker, _this.tempV) / _this.speed; // console.log("buttle", this.duration);

                var update = undefined;
                if (_this.face) (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).FaceToNode(_this.node, $attacker);

                if (_this.pathType != PathType.liner) {
                  if (!_this.bezier) {
                    if (_this.pathType == PathType.curve) {
                      _this.bezier = (_crd && Bezier === void 0 ? (_reportPossibleCrUseOfBezier({
                        error: Error()
                      }), Bezier) : Bezier).craeteCurve($attacker, $target, _this.curveRatio);
                    } else {
                      _this.bezier = (_crd && Bezier === void 0 ? (_reportPossibleCrUseOfBezier({
                        error: Error()
                      }), Bezier) : Bezier).create($attacker, $target, _this.bezierPath);
                    }
                  }

                  var self = _this;

                  update = (target, ratio) => {
                    var v = self.bezier.update(ratio);
                    if (self.face) (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).FaceToNode(self.node, v);
                    self.bezier && self.setPosition(v);
                  };
                }

                tween(_this.node).to(_this.duration, {
                  worldPosition: _this.tempV
                }, {
                  easing: easing[(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                    error: Error()
                  }), EaseType) : EaseType)[_this.ease]],
                  onUpdate: update
                }).start();
                break;

              case EffectType.autoBullet:
                break;
            }

            _this.prevPlayNext(_this.duration);
          })();
        }
        /**
         * 播放下一个
         */


        playNext() {
          if (this.par && this.par.enabled && this.par.node.activeInHierarchy) this.par.stop();
          if (this.ske) this.ske.node.active = false;
          if (this.spr) this.spr.node.active = false;
          this.node.active = false;
          Tween.stopAllByTarget(this.node);

          if (this.bezier) {
            this.bezier.receive();
            this.bezier = undefined;
          }

          if (this.status != EffectState.finish) {
            this.status = EffectState.finish;
          }

          if (this.buffEvent) {
            this.status = EffectState.buff;
          }

          if (this.nextEffects && this.nextEffects.length) {
            for (var i = 0; i < this.nextEffects.length; i++) {
              var effect = this.nextEffects[i];
              if (!effect) continue;
              var set = effect.getComponent(EffectSet);

              if (set && set.status == EffectState.idle) {
                set.Play(this.cb, this.targetSet);
              }
            }
          } else if (this.tigger && this.last && this.cb) {
            this.cb(this);
          }
        }
        /**
         * 预播放
         * @param duration 
         * @returns 
         */


        prevPlayNext(duration) {
          if (!this.nextEffects) return;

          for (var effect of this.nextEffects) {
            var set = effect.getComponent(EffectSet);
            if (!set) continue;

            if (set.delay < 0) {
              set.Play(this.cb, this.targetSet, duration + set.delay);
            }
          }
        }
        /**
         * 轮训判断持续播放时间是否截止
         * @param deltaTime 
         */


        update(deltaTime) {
          if (this.status == EffectState.idle) return;

          if (!this.isLoop || this.type == EffectType.bullet) {
            var tick = game.totalTime / 1000;

            if (this.playDuration && tick - this.startTick >= this.playDuration) {
              this.playNext();
              return;
            }

            var dt = this.duration + 2 / Number(game.frameRate);

            if (tick - this.startTick >= dt) {
              this.playNext();
            }
          } else if (this.isLoop && this.nextEffects.length) {
            var _tick = game.totalTime / 1000;

            var _dt = this.duration + 1 / Number(game.frameRate);

            if (_tick - this.startTick >= _dt) {
              this.startTick = Number.MAX_SAFE_INTEGER;

              for (var i = 0; i < this.nextEffects.length; i++) {
                var effect = this.nextEffects[i];
                if (!effect) continue;
                var set = effect.getComponent(EffectSet);

                if (set && set.status == EffectState.idle) {
                  set.Play(this.cb, this.targetSet);
                }
              }
            }
          }
        }

        onBuffEvent(event) {
          if (this.buffEvent == event.toString()) {
            this.startTick = game.totalTime / 1000;

            if (this.ske) {
              var name = this.ske.getCurrent(0).animation.name || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).GetSkeAciton(this.ske);
              this.ske.node.active = true;
              this.ske.setAnimation(0, name, this.isLoop || this.type == EffectType.bullet);
            }

            if (this.par) {
              this.par.loop = false;
              this.par.node.active = true;
              this.par.play();
            }
          }
        }

      }, _class3.seed = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EffectType.sample;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "root", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tigger", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "last", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tiggerType", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tiggerAffect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buffEvent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "shake", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "action", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "attackerType", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TargetType.attacker;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lockDepth", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "delay", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "times", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "playDuration", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "ease", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "pathType", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "merge", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "face", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "curveRatio", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bezierPath", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(3);
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "targetType", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TargetType.target;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "nextEffects", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=616fd6b5e5848cc0d58457483e347b02e8280b34.js.map