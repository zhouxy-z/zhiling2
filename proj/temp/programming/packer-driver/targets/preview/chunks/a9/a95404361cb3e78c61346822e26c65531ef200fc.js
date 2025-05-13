System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, RenderRoot2D, director, game, CfgMgr, GameObj, AffectType, TargetType, TestSkill, battleDataMgr, GameSet, Skill, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var skill = this.getComponent(_crd && TestSkill === void 0 ? (_reportPossibleCrUseOfTestSkill({
            error: Error()
          }), TestSkill) : TestSkill);
          var root = skill.getComponent(RenderRoot2D);
          if (root) root.destroy();
          this.effects = skill.GetEffects(this);
          skill.eventProxy = this;
        }

        update(dt) {
          if (this.startTick && this.endHandle) {
            if (game.totalTime - this.startTick > 3000) {
              var has = false;

              for (var effectSet of this.effects) {
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

        play(targetset) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.startTick = game.totalTime;
            if (!_this.$hasLoad) yield _this.loadSub;
            _this.isLoop = true;

            for (var set of _this.effects) {
              if (set) {
                set.Reset();

                if (set.root) {
                  set.Play(_this.receive.bind(_this), targetset);
                }

                if (_this.isLoop && set.last && !set.isLoop) _this.isLoop = false;
              }
            }
          })();
        }

        receive() {
          var _superprop_getReceive = () => super.receive,
              _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.$hasLoad) yield _this2.loadSub;
            var h = _this2.endHandle;
            _this2.endHandle = undefined;

            if (h) {
              var _this2$effects$, _this2$effects$2;

              h((_this2$effects$ = _this2.effects[0]) == null ? void 0 : _this2$effects$.attacker, (_this2$effects$2 = _this2.effects[0]) == null ? void 0 : _this2$effects$2.target, (_crd && AffectType === void 0 ? (_reportPossibleCrUseOfAffectType({
                error: Error()
              }), AffectType) : AffectType).All);
            }

            for (var k in Skill.runningls) {
              var skills = Skill.runningls[k];

              for (var i = 0; i < skills.length; i++) {
                var skill = skills[i];

                if (skill == _this2) {
                  skills.splice(i, 1);
                  if (!skills.length) delete Skill.runningls[k];
                  break;
                }
              }
            }

            _superprop_getReceive().call(_this2);

            _this2.startTick = 0;

            if (_this2.effects) {
              for (var effectSet of _this2.effects) {
                effectSet.Reset();

                if (effectSet.node.parent != _this2.prefabNode) {
                  _this2.prefabNode.addChild(effectSet.node);
                }
              }
            }

            _this2.callback = undefined;
          })();
        }

        onTigger(effectSet, targetType, affect) {
          var attacker = effectSet == null ? void 0 : effectSet.attacker;
          var target = effectSet == null ? void 0 : effectSet.target;
          var h = this.endHandle;
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


        static Play(output, targets, isMy, callback, onlyBuff) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (isMy === void 0) {
              isMy = true;
            }

            if (onlyBuff === void 0) {
              onlyBuff = false;
            }

            var cardData = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).getCardByInstId(output.fromInstId);
            var prefab;
            var stdSkill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardSkill(output.fromSkillId);

            if (cardData) {
              var stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(cardData.configId);
              if (!stdCard) stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTerrain(cardData.configId);

              if (stdCard && stdCard.SkillID) {
                var index = stdCard.SkillID.indexOf(output.fromSkillId);
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


            var handle;
            var sub = new Promise((resolve, reject) => {
              handle = resolve;
            });
            var url = "prefabs/particle/" + prefab;
            var len = targets.length,
                num = 0;

            for (var i = 0; i < len; i++) {
              // if (this.hasSkill(tag.route)) continue;
              var skill = _this3.Create(url);

              var tag = targets.pop(output.fromSkillId);
              skill.name = prefab;
              skill.callback = callback;

              if (_this3.runningls[tag.route]) {
                if (skill.isLoop) {
                  skill.onTigger();
                  skill.receive();
                  continue;
                }
              } else {
                _this3.runningls[tag.route] = [];
              }

              skill['skillId'] = output.fromInstId;
              var skills = _this3.runningls[tag.route];
              console.log("Skill.Play", output.fromSkillId, url);
              skills.push(skill);
              director.getScene().addChild(skill);
              skill.endHandle = handle;
              skill.on("tigger", skill.onTigger, skill);
              skill.play(tag);

              if (onlyBuff) {
                if (!skill.$hasLoad) yield skill.loadSub;

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
          })();
        }

        /**
         * 移除所有技能特效
         */
        static RemoveAll() {
          for (var k in this.runningls) {
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
          for (var k in this.runningls) {
            var skills = this.runningls[k];

            for (var skill of skills) {
              for (var effectSet of skill.effects) {
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


        static Stop(playerId, skillId, instId) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var route = skillId + "_" + instId;

            for (var _key in _this4.runningls) {
              if (_key.indexOf(route) == 0) {
                var skills = _this4.runningls[_key];

                if (skills.length) {
                  var _skills$;

                  if (!((_skills$ = skills[0]) != null && (_skills$ = _skills$.getComponent(_crd && TestSkill === void 0 ? (_reportPossibleCrUseOfTestSkill({
                    error: Error()
                  }), TestSkill) : TestSkill)) != null && _skills$.isLoop)) return;
                  var skill = skills.shift();
                  skill.receive();
                  if (!skills.length) delete _this4.runningls[_key];
                }
              }
            }
          })();
        }
        /**
         * 检测是否已有持续性技能运行
         * @param route 
         */


        static hasSkill(route) {
          var buffid = route.replace(/\_[^_]*$/, "");

          for (var _key2 in this.runningls) {
            var skills = this.runningls[_key2];

            for (var skill of skills) {
              if (skill != null && skill.isLoop && _key2.indexOf(buffid) == 0) return true;
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