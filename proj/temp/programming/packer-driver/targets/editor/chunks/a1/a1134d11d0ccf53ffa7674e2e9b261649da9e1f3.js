System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, find, instantiate, Node, ParticleSystem, Prefab, RenderRoot2D, sp, Sprite, UIMeshRenderer, AffectType, EffectSet, TargetType, Second, ResMgr, EffectTarget, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, requireComponent, TestSkill;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAffectType(extras) {
    _reporterNs.report("AffectType", "./EffectSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectSet(extras) {
    _reporterNs.report("EffectSet", "./EffectSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTargetSet(extras) {
    _reporterNs.report("TargetSet", "./EffectSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTargetType(extras) {
    _reporterNs.report("TargetType", "./EffectSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneEntry(extras) {
    _reporterNs.report("ISceneEntry", "./SceneCard", _context.meta, extras);
  }

  _export("EffectTarget", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
      Prefab = _cc.Prefab;
      RenderRoot2D = _cc.RenderRoot2D;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      UIMeshRenderer = _cc.UIMeshRenderer;
    }, function (_unresolved_2) {
      AffectType = _unresolved_2.AffectType;
      EffectSet = _unresolved_2.EffectSet;
      TargetType = _unresolved_2.TargetType;
    }, function (_unresolved_3) {
      Second = _unresolved_3.Second;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "245e5siCJZDMpBtsdG6FhRk", "TestSkill", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'find', 'instantiate', 'Node', 'ParticleSystem', 'Prefab', 'RenderRoot2D', 'sp', 'Sprite', 'UIMeshRenderer']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("TestSkill", TestSkill = (_dec = ccclass('TestSkill'), _dec2 = requireComponent(RenderRoot2D), _dec3 = property({
        type: Prefab,
        tooltip: "设置预制体进行多发测试"
      }), _dec4 = property({
        type: CCFloat,
        tooltip: "多发延迟",

        visible() {
          return this.prefab != undefined;
        }

      }), _dec5 = property({
        type: [Node],
        tooltip: "测试多目标",

        visible() {
          return this.prefab != undefined;
        }

      }), _dec6 = property({
        tooltip: "循环测试"
      }), _dec(_class = _dec2(_class = (_class2 = (_class3 = class TestSkill extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefab", _descriptor, this);

          _initializerDefineProperty(this, "multipleDelay", _descriptor2, this);

          _initializerDefineProperty(this, "multipleTarget", _descriptor3, this);

          _initializerDefineProperty(this, "loop", _descriptor4, this);

          this.efflist = void 0;
          this.attacker = void 0;
          this.eventProxy = void 0;
          this.hasLoop = false;
          this.lastSet = void 0;
          this.$targetSet = void 0;
        }

        async onLoad() {
          // 处理2d组件在3d场景的深度渲染问题
          let comps = this.getComponentsInChildren(Component);

          for (let i = 0, len = comps.length; i < len; i++) {
            let comp = comps[i];

            if (comp instanceof sp.Skeleton || comp instanceof Sprite) {
              if (!comp.customMaterial || comp.customMaterial.uuid != (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).depth_material_uuid) {
                comp.customMaterial = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).getDepthMaterial();
              } // if(!comp.getComponent(RenderRoot2D))comp.addComponent(RenderRoot2D);

            } else if (comp instanceof ParticleSystem) {
              if (!comp.node.getComponent(UIMeshRenderer)) {
                comp.node.addComponent(UIMeshRenderer);
              }
            }
          }

          this.node.on("tigger", this.onTigger, this);
        }

        onTigger(...args) {
          if (!this.node.parent) return; // this.node.parent.emit("tigger", ...args);
        }

        get testTargetSet() {
          // if (!this.$targetSet || !this.$targetSet.length) {
          const my = ["FightScene/myDeck", "FightScene/myHand", "FightScene/myDrop", "FightScene/myDel", "FightScene/ui/myEnergy"];
          const ad = ["FightScene/adDeck", "FightScene/adHand", "FightScene/adDrop", "FightScene/adDel", "FightScene/ui/adEnergy"];
          let area1 = [find("FightScene/area0")['hitTest1'], find("FightScene/area1")['hitTest1'], find("FightScene/area2")['hitTest1']];
          let area2 = [find("FightScene/area0")['hitTest2'], find("FightScene/area1")['hitTest2'], find("FightScene/area2")['hitTest2']];
          let mytag = [area1],
              adtag = [area2];

          for (let i = 0; i < my.length; i++) {
            mytag.push(find(my[i]));
            adtag.push(find(ad[i]));
          }

          let params = mytag.concat(adtag);

          if (this.multipleTarget && this.multipleTarget.length) {
            this.$targetSet = new EffectTarget(find("attacker"), this.multipleTarget, ...params);
          } else {
            this.$targetSet = new EffectTarget(find("attacker"), TestSkill.testEnemys.concat(), ...params);
          } // }


          return this.$targetSet;
        }

        get isLoop() {
          return this.hasLoop;
        }

        start() {
          this.GetEffects();
        }

        Play(attackers, targets) {}

        async Test(e) {
          if (e) await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0.5);

          while (TestSkill.skillpool.length) {
            TestSkill.skillpool.pop().node.destroy();
          }

          let len = this.testTargetSet.length;

          if (this.prefab && len > 1) {
            let queue = [this];
            let parent = this.node.parent;

            for (let i = 0; i < len; i++) {
              let skill = queue.pop();
              let copy = false;

              if (!skill) {
                copy = true;
                skill = instantiate(this.prefab).getComponent(TestSkill);
                TestSkill.skillpool.push(skill);
                skill.loop = false;
                parent.addChild(skill.node);
                console.log("instantiate", skill);
              }

              let target = this.testTargetSet.pop(1);
              let list = skill.GetEffects();

              for (let set of list) {
                if (set && set.root) {
                  if (set.last) set.times = 1;

                  if (set.last && i == len - 1) {
                    set.Play(this.Test.bind(this), target, 0, copy);
                  } else {
                    set.Play(undefined, target, 0, copy);
                  }
                }
              }

              if (this.multipleDelay > 0) await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(this.multipleDelay);
            }
          } else {
            let targets = this.testTargetSet.pop(1);
            this.GetEffects();
            let sets = [];

            for (let set of this.efflist) {
              if (set) {
                set.Reset();
                if (set.last) set.times = 1;

                if (set.root) {
                  sets.push(set);
                }
              }
            }

            for (let set of sets) {
              set.Play(this.Test.bind(this), targets);
            }
          }
        }

        GetEffects(parent) {
          if (this.efflist) return this.efflist;
          this.efflist = [];
          let children = this.node.children;
          let hasTigger = false;
          let sets = {};
          this.lastSet = undefined;
          children.forEach(value => {
            let set = value.getComponent(_crd && EffectSet === void 0 ? (_reportPossibleCrUseOfEffectSet({
              error: Error()
            }), EffectSet) : EffectSet);
            if (parent) set.parent = parent;

            if (set.root) {
              var _set$nextEffects;

              sets[set.node.uuid] = set;
              let lst = ((_set$nextEffects = set.nextEffects) == null || _set$nextEffects.concat == null ? void 0 : _set$nextEffects.concat()) || [];

              while (lst.length) {
                set = lst.shift().getComponent(_crd && EffectSet === void 0 ? (_reportPossibleCrUseOfEffectSet({
                  error: Error()
                }), EffectSet) : EffectSet);

                if (set && !sets[set.node.uuid]) {
                  var _set;

                  sets[set.node.uuid] = set;
                  if ((_set = set) != null && (_set = _set.nextEffects) != null && _set.length) lst.push(...set.nextEffects);
                }
              }
            }
          });

          for (let k in sets) {
            let set = sets[k]; //child.getComponent(EffectSet);

            if (set) {
              var _set$nextEffects2;

              if (set.isLoop) this.hasLoop = true;

              if (set.tigger && set.tiggerType) {
                hasTigger = true;
              }

              if (!this.lastSet) {
                this.lastSet = set;
              } else if (!this.lastSet && !((_set$nextEffects2 = set.nextEffects) != null && _set$nextEffects2.length)) {
                this.lastSet = set;
              }

              this.efflist.push(set);
            }
          }

          if (!hasTigger) {
            if (this.lastSet) {
              this.lastSet.tigger = true;
              this.lastSet.tiggerType = (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                error: Error()
              }), TargetType) : TargetType).all;
              this.lastSet.tiggerAffect = (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
                error: Error()
              }), AffectType) : AffectType).All;
            } else {
              console.error("必须指定结束特效！");
            }
          } // if (!hasTigger && lastSet) {
          //     let node = new Node();
          //     lastSet.node.parent.addChild(node);
          //     let lastSet = node.addComponent(EffectSet);
          //     lastSet.tigger = true;
          //     lastSet.last = true;
          //     if (!lastSet.nextEffects) lastSet.nextEffects = [];
          //     lastSet.nextEffects.push(lastSet.node);
          // }


          return this.efflist;
        }

        update(deltaTime) {}

      }, _class3.testEnemys = void 0, _class3.skillpool = [], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return undefined;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "multipleDelay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "multipleTarget", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class) || _class));
      /**
       * 技能目标定义
       */


      _export("EffectTarget", EffectTarget = class EffectTarget {
        clone() {
          return new EffectTarget(this.attacker, this.targets, this.myArea, this.myDeck, this.myHand, this.myDrop, this.myDel, this.myEnergy, this.adArea, this.adDeck, this.adHand, this.adDrop, this.adDel, this.adEnergy);
        }

        constructor(attacker, targets, myArea, myDeck, myHand, myDrop, myDel, myEnergy, adArea, adDeck, adHand, adDrop, adDel, adEnergy) {
          this.attacker = void 0;
          this.targets = void 0;
          this.myArea = void 0;
          this.myDeck = void 0;
          this.myHand = void 0;
          this.myDrop = void 0;
          this.myDel = void 0;
          this.myEnergy = void 0;
          this.adArea = void 0;
          this.adDeck = void 0;
          this.adHand = void 0;
          this.adDrop = void 0;
          this.adDel = void 0;
          this.adEnergy = void 0;
          this.attacker = attacker;
          this.targets = targets;
          this.myArea = myArea;
          this.myDeck = myDeck;
          this.myHand = myHand;
          this.myDrop = myDrop;
          this.myDel = myDel;
          this.myEnergy = myEnergy;
          this.adArea = adArea;
          this.adDeck = adDeck;
          this.adHand = adHand;
          this.adDrop = adDrop;
          this.adDel = adDel;
          this.adEnergy = adEnergy;
        }

        get length() {
          let len = Math.max(this.targets.length, 0);
          if (len) return len;
          return Math.min(this.myArea.length, this.adArea.length, 1);
        }

        pop(skillId) {
          let myArea = this.myArea.length ? this.myArea.shift() : undefined;
          let adArea = this.adArea.length ? this.adArea.shift() : undefined;
          let target = this.targets.length ? this.targets.shift() : undefined;
          return {
            route: this.route(skillId, this.attacker),
            attacker: this.attacker,
            target: target,
            myArea: myArea,
            myDeck: this.myDeck,
            myHand: this.myHand,
            myDrop: this.myDrop,
            myDel: this.myDel,
            myEnergy: this.myEnergy,
            adArea: adArea,
            adDeck: this.adDeck,
            adHand: this.adHand,
            adDrop: this.adDrop,
            adDel: this.adDel,
            adEnergy: this.adEnergy
          };
        }

        route(...args) {
          EffectTarget.seed++;
          let key = args[0];

          for (let i = 1; i < args.length; i++) {
            let obj = args[i];

            if (obj != undefined && typeof obj == "object") {
              key = key + "_" + (obj.instId || obj.name);
            } else {
              key = key + "_" + obj;
            }
          }

          return key + "_" + EffectTarget.seed;
        }

      });

      EffectTarget.seed = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1134d11d0ccf53ffa7674e2e9b261649da9e1f3.js.map