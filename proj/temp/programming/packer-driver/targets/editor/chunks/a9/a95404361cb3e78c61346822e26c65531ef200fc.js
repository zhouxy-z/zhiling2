System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, RenderRoot2D, director, game, CfgMgr, GameObj, AffectType, TargetType, TestSkill, battleDataMgr, GameSet, Skill, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "../../../manager/GameRoot", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfEffectTarget(extras) {
    _reporterNs.report("EffectTarget", "./TestSkill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestSkill(extras) {
    _reporterNs.report("TestSkill", "./TestSkill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../../manager/GameSet", _context.meta, extras);
  }

  _export("Skill", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      RenderRoot2D = _cc.RenderRoot2D;
      director = _cc.director;
      game = _cc.game;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      GameObj = _unresolved_3.GameObj;
    }, function (_unresolved_4) {
      AffectType = _unresolved_4.AffectType;
      TargetType = _unresolved_4.TargetType;
    }, function (_unresolved_5) {
      TestSkill = _unresolved_5.TestSkill;
    }, function (_unresolved_6) {
      battleDataMgr = _unresolved_6.battleDataMgr;
    }, function (_unresolved_7) {
      GameSet = _unresolved_7.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90b0aWlyBlO7adn4Uhwtm8T", "Skill", undefined);

      __checkObsolete__(['Node', 'RenderRoot2D', 'UITransform', 'director', 'game']);

      _export("Skill", Skill = class Skill extends (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
        error: Error()
      }), GameObj) : GameObj) {
        constructor() {
          super();
          this.$prefab = void 0;
          this.callback = void 0;
          this.effects = void 0;
          this.isLoop = false;
          this.startTick = 0;
          this.endHandle = void 0;
          this.layer = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).Lay_Scene;
          this.$addComponent(RenderRoot2D);
        }

        onLoad() {
          let skill = this.getComponent(_crd && TestSkill === void 0 ? (_reportPossibleCrUseOfTestSkill({
            error: Error()
          }), TestSkill) : TestSkill);
          let root = skill.getComponent(RenderRoot2D);
          if (root) root.destroy();
          this.effects = skill.GetEffects(this);
          skill.eventProxy = this;
        }

        update(dt) {
          if (this.startTick && this.endHandle) {
            if (game.totalTime - this.startTick > 3000) {
              let has = false;

              for (let effectSet of this.effects) {
                if (effectSet.isRunning && effectSet.isLoop) {
                  has = true;
                  break;
                } else if (effectSet.isRunning && effectSet.last && !effectSet.isLoop) {
                  console.error("Skill Error!");
                  this.endHandle(effectSet.attacker, effectSet.target, (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
                    error: Error()
                  }), AffectType) : AffectType).All);
                  return;
                }
              }

              if (!has) {
                console.error("Skill Error!");
                this.endHandle(undefined, undefined, (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
                  error: Error()
                }), AffectType) : AffectType).All);
              }
            }
          }
        }

        async play(targetset) {
          this.startTick = game.totalTime;
          if (!this.$hasLoad) await this.loadSub;
          this.isLoop = true;

          for (let set of this.effects) {
            if (set) {
              set.Reset();

              if (set.root) {
                set.Play(this.receive.bind(this), targetset);
              }

              if (this.isLoop && set.last && !set.isLoop) this.isLoop = false;
            }
          }
        }

        async receive() {
          if (!this.$hasLoad) await this.loadSub;
          let h = this.endHandle;
          this.endHandle = undefined;

          if (h) {
            var _this$effects$, _this$effects$2;

            h((_this$effects$ = this.effects[0]) == null ? void 0 : _this$effects$.attacker, (_this$effects$2 = this.effects[0]) == null ? void 0 : _this$effects$2.target, (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
              error: Error()
            }), AffectType) : AffectType).All);
          }

          for (let k in Skill.runningls) {
            let skills = Skill.runningls[k];

            for (let i = 0; i < skills.length; i++) {
              let skill = skills[i];

              if (skill == this) {
                skills.splice(i, 1);
                if (!skills.length) delete Skill.runningls[k];
                break;
              }
            }
          }

          super.receive();
          this.startTick = 0;

          if (this.effects) {
            for (let effectSet of this.effects) {
              effectSet.Reset();

              if (effectSet.node.parent != this.prefabNode) {
                this.prefabNode.addChild(effectSet.node);
              }
            }
          }

          this.callback = undefined;
        }

        onTigger(effectSet, targetType, affect) {
          let attacker = effectSet == null ? void 0 : effectSet.attacker;
          let target = effectSet == null ? void 0 : effectSet.target;
          let h = this.endHandle;
          this.endHandle = undefined;
          h && h(attacker, target, affect);
        }
        /**
         * 播放技能
         * @param cardId    释放此技能的卡片,如果不是卡片释放此项则传空
         * @param skillId   技能id
         * @param attacker  攻击者节点
         * @param areas    友军节点
         * @param targets   目标节点
         * @param callback  回调，attacker攻击者节点，目标节点，效果类型枚举值
         * @returns 
         */


        static async Play(output, targets, isMy = true, callback, onlyBuff = false) {
          let cardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).getCardByInstId(output.fromInstId);
          let prefab;
          let stdSkill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardSkill(output.fromSkillId);

          if (cardData) {
            let stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(cardData.configId);
            if (!stdCard) stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetTerrain(cardData.configId);

            if (stdCard && stdCard.SkillID) {
              let index = stdCard.SkillID.indexOf(output.fromSkillId);
              prefab = stdCard.SkillPrefabs[index];
            }

            if (!prefab) {
              prefab = stdSkill.SkillPrefabs[isMy ? 0 : 1] || stdSkill.SkillPrefabs[0];
            }
          } else {
            if (isMy) {
              prefab = stdSkill == null ? void 0 : stdSkill.SkillPrefabs[0];
            } else {
              prefab = (stdSkill == null ? void 0 : stdSkill.SkillPrefabs[1]) || (stdSkill == null ? void 0 : stdSkill.SkillPrefabs[0]);
            }
          }

          if (!prefab) {
            callback && callback(targets.attacker, targets.targets[0], (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
              error: Error()
            }), AffectType) : AffectType)[stdSkill.EffectType]);
            return undefined;
          } // if (prefab.indexOf("defaultSkill") != -1) return;//暂时屏蔽默认特效


          let handle;
          let sub = new Promise((resolve, reject) => {
            handle = resolve;
          });
          let url = "prefabs/particle/" + prefab;
          let len = targets.length,
              num = 0;

          for (let i = 0; i < len; i++) {
            // if (this.hasSkill(tag.route)) continue;
            let skill = this.Create(url);
            let tag = targets.pop(output.fromSkillId);
            skill.name = prefab;
            skill.callback = callback;

            if (this.runningls[tag.route]) {
              if (skill.isLoop) {
                skill.onTigger();
                skill.receive();
                continue;
              }
            } else {
              this.runningls[tag.route] = [];
            }

            skill['skillId'] = output.fromInstId;
            let skills = this.runningls[tag.route];
            console.log("Skill.Play", output.fromSkillId, url);
            skills.push(skill);
            director.getScene().addChild(skill);
            skill.endHandle = handle;
            skill.on("tigger", skill.onTigger, skill);
            skill.play(tag);

            if (onlyBuff) {
              if (!skill.$hasLoad) await skill.loadSub;

              if (!skill.isLoop) {
                skill.receive();
                continue;
              }
            }

            num++;
          }

          if (num <= 0) handle(targets.attacker, undefined, (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
            error: Error()
          }), AffectType) : AffectType).All);
          return sub;
        }

        /**
         * 移除所有技能特效
         */
        static RemoveAll() {
          for (let k in this.runningls) {
            while (this.runningls[k].length) {
              this.runningls[k].pop().receive();
            }
          }

          this.runningls = {};
        }
        /**
         * 停止所有
         */


        static EndAll() {
          for (let k in this.runningls) {
            let skills = this.runningls[k];

            for (let skill of skills) {
              for (let effectSet of skill.effects) {
                if (effectSet.tigger && effectSet.last) {
                  skill.onTigger(effectSet, (_crd && TargetType === void 0 ? (_reportPossibleCrUseOfTargetType({
                    error: Error()
                  }), TargetType) : TargetType).all, (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
                    error: Error()
                  }), AffectType) : AffectType).All);
                  break;
                }
              }

              skill.receive();
            }
          }

          this.runningls = {};
        }
        /**
         * 删除技能特效
         * @param key 
         */


        static async Stop(playerId, skillId, instId) {
          let route = skillId + "_" + instId;

          for (let key in this.runningls) {
            if (key.indexOf(route) == 0) {
              let skills = this.runningls[key];

              if (skills.length) {
                var _skills$;

                if (!((_skills$ = skills[0]) != null && (_skills$ = _skills$.getComponent(_crd && TestSkill === void 0 ? (_reportPossibleCrUseOfTestSkill({
                  error: Error()
                }), TestSkill) : TestSkill)) != null && _skills$.isLoop)) return;
                let skill = skills.shift();
                skill.receive();
                if (!skills.length) delete this.runningls[key];
              }
            }
          }
        }
        /**
         * 检测是否已有持续性技能运行
         * @param route 
         */


        static hasSkill(route) {
          let buffid = route.replace(/\_[^_]*$/, "");

          for (let key in this.runningls) {
            let skills = this.runningls[key];

            for (let skill of skills) {
              if (skill != null && skill.isLoop && key.indexOf(buffid) == 0) return true;
            }
          }

          return false;
        }

      });

      Skill.runningls = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a95404361cb3e78c61346822e26c65531ef200fc.js.map