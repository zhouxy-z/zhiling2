System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Layers, RenderRoot2D, Sprite, SpriteFrame, Tween, UITransform, Vec3, easing, math, path, randomRange, sp, tween, v2, v3, GameObj, card_quality, ResMgr, GameSet, Second, Utils, CfgMgr, CardLayout, CardMoveTo, CardFlyToHand, CardFlyToArea, CardTurnBack, CardTurnFront, $Back_Quat, $Front_Quat, CardShowBig, SampleEffect, proto, FightData, AnimationUtils, SceneCard, _crd, CardState;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "../../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcard_quality(extras) {
    _reporterNs.report("card_quality", "../../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardLayout(extras) {
    _reporterNs.report("CardLayout", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardMoveTo(extras) {
    _reporterNs.report("CardMoveTo", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardFlyToHand(extras) {
    _reporterNs.report("CardFlyToHand", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardFlyToArea(extras) {
    _reporterNs.report("CardFlyToArea", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardTurnBack(extras) {
    _reporterNs.report("CardTurnBack", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardTurnFront(extras) {
    _reporterNs.report("CardTurnFront", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICardAction(extras) {
    _reporterNs.report("ICardAction", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOf$Back_Quat(extras) {
    _reporterNs.report("$Back_Quat", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOf$Front_Quat(extras) {
    _reporterNs.report("$Front_Quat", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardShowBig(extras) {
    _reporterNs.report("CardShowBig", "./CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSampleEffect(extras) {
    _reporterNs.report("SampleEffect", "./Effect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationUtils(extras) {
    _reporterNs.report("AnimationUtils", "../../../utils/AnimationUtils", _context.meta, extras);
  }

  _export("SceneCard", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Label = _cc.Label;
      Layers = _cc.Layers;
      RenderRoot2D = _cc.RenderRoot2D;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Tween = _cc.Tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      easing = _cc.easing;
      math = _cc.math;
      path = _cc.path;
      randomRange = _cc.randomRange;
      sp = _cc.sp;
      tween = _cc.tween;
      v2 = _cc.v2;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GameObj = _unresolved_2.GameObj;
    }, function (_unresolved_3) {
      card_quality = _unresolved_3.card_quality;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      GameSet = _unresolved_4.GameSet;
    }, function (_unresolved_5) {
      Second = _unresolved_5.Second;
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
    }, function (_unresolved_7) {
      CardLayout = _unresolved_7.CardLayout;
      CardMoveTo = _unresolved_7.CardMoveTo;
      CardFlyToHand = _unresolved_7.CardFlyToHand;
      CardFlyToArea = _unresolved_7.CardFlyToArea;
      CardTurnBack = _unresolved_7.CardTurnBack;
      CardTurnFront = _unresolved_7.CardTurnFront;
      $Back_Quat = _unresolved_7.$Back_Quat;
      $Front_Quat = _unresolved_7.$Front_Quat;
      CardShowBig = _unresolved_7.CardShowBig;
    }, function (_unresolved_8) {
      SampleEffect = _unresolved_8.SampleEffect;
    }, function (_unresolved_9) {
      proto = _unresolved_9.default;
    }, function (_unresolved_10) {
      FightData = _unresolved_10.FightData;
    }, function (_unresolved_11) {
      AnimationUtils = _unresolved_11.AnimationUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34173Xga7ZCyZN0ulypzwrJ", "SceneCard", undefined);

      __checkObsolete__(['Color', 'Component', 'IVec3Like', 'Label', 'Layers', 'Layout', 'MeshRenderer', 'Node', 'ParticleSystem', 'RenderRoot2D', 'Sprite', 'SpriteFrame', 'Tween', 'UITransform', 'Vec2', 'Vec3', 'easing', 'game', 'labelAssembler', 'math', 'path', 'random', 'randomRange', 'sp', 'tween', 'v2', 'v3']);

      /***
       * 卡片状态
       */
      _export("CardState", CardState = /*#__PURE__*/function (CardState) {
        CardState[CardState["None"] = 0] = "None";
        CardState[CardState["Sending"] = 1] = "Sending";
        CardState[CardState["Layout"] = 2] = "Layout";
        CardState[CardState["Handing"] = 3] = "Handing";
        CardState[CardState["Playing"] = 4] = "Playing";
        CardState[CardState["Covering"] = 5] = "Covering";
        CardState[CardState["Showing"] = 6] = "Showing";
        CardState[CardState["Fightting"] = 7] = "Fightting";
        CardState[CardState["Shaking"] = 8] = "Shaking";
        CardState[CardState["Del"] = 9] = "Del";
        return CardState;
      }({}));

      /**
       * 场景卡片
       */
      _export("SceneCard", SceneCard = class SceneCard extends (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
        error: Error()
      }), GameObj) : GameObj) {
        constructor() {
          super();
          this.$prefab = "prefabs/fight/SceneCard";
          this.cardData = void 0;
          this.instId = void 0;
          // 卡片id
          this.frame = void 0;
          // 外框
          this.cardBack = void 0;
          //卡背
          this.cost = void 0;
          this.mask = void 0;
          this.power = void 0;
          this.nameframe = void 0;
          this.nameLab = void 0;
          this.myBattle = void 0;
          this.myName = void 0;
          this.myPower = void 0;
          this.adBattle = void 0;
          this.adName = void 0;
          this.adPower = void 0;
          this.costEffect = void 0;
          this.powerEffect = void 0;
          this.ctrl = void 0;
          // 控制点
          this.ctrlZero = void 0;
          // 初始位置
          this.body = void 0;
          // 卡片动画
          this.body_card = void 0;
          this.debugNode = void 0;
          this.descLab = void 0;
          this.skillDesc = void 0;
          this.cardIdLab = void 0;
          this.$state = void 0;
          // 当前状态
          this.wide = void 0;
          // 卡牌宽度
          this.hide = void 0;
          // 卡牌高度
          this.dragPoint = void 0;
          // 拖动点
          this.twHandle = void 0;
          this.action = void 0;
          this.infoPage = void 0;
          this.top = void 0;
          this.std = void 0;
          this.skills = void 0;
          this.locking = false;
          this.isMy = true;
          this.pbV3 = void 0;
          this.pbQt = void 0;
          this.bodyV3 = void 0;
          this.bodyQt = void 0;
          this.bodyShakePower = void 0;
          this.bodyShakeQt = math.quat();
          this.pbShakePower = void 0;
          this.pbShakeQt = math.quat();
          this.layer = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).Lay_Scene;
        }

        get state() {
          return this.$state;
        }

        set state(value) {
          if (value == CardState.None) {
            console.log("sate", value);
          }

          this.$state = value;

          if (this.cardData) {
            this.cardData['playState'] = value;
          }
        }

        onLoad() {
          var rendder = this.$proxy.getComponent(RenderRoot2D);
          if (rendder) rendder.destroy();
          this.addComponent(RenderRoot2D);
          this.infoPage = this.find("infoPage");
          this.frame = this.find("infoPage/frame", sp.Skeleton);
          this.cardBack = this.find("infoPage/cardBack", Sprite);
          this.body = this.find("body", sp.Skeleton);
          var body = this.body;
          this.body.setCompleteListener(() => {
            var _body$getCurrent;

            if ((body == null || (_body$getCurrent = body.getCurrent(0)) == null ? void 0 : _body$getCurrent.animation.name) != "idle" && body != null && body.skeletonData) {
              body.setAnimation(0, "idle", true);
            }
          });
          this.addChild(this.body.node);
          this.bodyV3 = this.body.node.position.clone();
          this.bodyQt = this.body.node.rotation.clone();
          this.pbV3 = this.prefabNode.position.clone();
          this.pbQt = this.prefabNode.rotation.clone();
          this.body.node.active = false;
          this.body_card = this.find("infoPage/body_card", sp.Skeleton);
          this.body_card.node.active = false;
          this.mask = this.find("infoPage/cardmask");
          this.top = this.find("infoPage/top", Sprite);
          this.cost = this.find("infoPage/cost/label", Label);
          this.costEffect = this.find("infoPage/cost/icon_cost").getComponent(sp.Skeleton);
          this.power = this.find("infoPage/power/label", Label);
          this.powerEffect = this.find("infoPage/power/icon_power").getComponent(sp.Skeleton);
          this.nameframe = this.find("infoPage/nameframe").getComponent(Sprite);
          this.nameLab = this.find("infoPage/nameframe/label").getComponent(Label);
          this.myBattle = this.find("infoPage/myBattle");
          this.myName = this.find("infoPage/myBattle/label", Label);
          this.myPower = this.find("infoPage/myBattle/power/label", Label);
          this.adBattle = this.find("infoPage/adBattle");
          this.adName = this.find("infoPage/adBattle/label", Label);
          this.adPower = this.find("infoPage/adBattle/power/label", Label);
          this.addChild(this.myBattle);
          this.addChild(this.adBattle);
          var self = this;
          this.costEffect.setCompleteListener(() => {
            if (self.costEffect.animation != "idle") self.costEffect.setAnimation(0, "idle", true);
          });
          this.powerEffect.setCompleteListener(() => {
            if (self.powerEffect.animation != "idle") self.powerEffect.setAnimation(0, "idle", true);
          });
          this.debugNode = this.find("infoPage/debugNode");
          this.descLab = this.find("infoPage/desc", Label);
          this.skillDesc = this.find("infoPage/debugNode/skillDesc", Label);
          this.cardIdLab = this.find("infoPage/debugNode/cardIdLab", Label);
          this.ctrl = this.frame.findBone("MoveCtrl");
          this.ctrlZero = v2(this.ctrl.x, this.ctrl.y);
          this.wide = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardWide;
          this.hide = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).CardHide;
        }
        /**卡牌id */


        get Id() {
          return this.instId;
        }
        /**卡牌宽度 */


        get Wide() {
          return this.wide;
        }
        /**卡牌状态 */


        get State() {
          return this.state;
        }
        /**是否背向 */


        get isBack() {
          return this.eulerAngles.z == 180;
        }
        /**
         * 检测位置变动
         * @param p 
         * @param q 
         * @returns 
         */


        CheckMatrix(p, q) {
          if (!this.worldPosition.equals(p)) return false;
          if (q && !this.worldRotation.equals(q)) return false;
        }
        /**
         * 新卡牌
         * @param data
         */


        InitData(isMy, data, rotation) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _std$ID, _data$power, _std$Power, _data$cost, _std$Cost, _this$cardData;

            if (rotation === void 0) {
              rotation = Vec3.ZERO;
            }

            _this.cardData = data;
            _this.instId = data.instId;
            _this.locking = false;

            if (!data) {
              _this.std = undefined;
              _this.state = CardState.Covering;

              _this.setInfoVisible();

              return;
            }

            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(data.configId);
            _this.std = std;
            _this.skills = data.skills;
            _this.name = (std == null || (_std$ID = std.ID) == null ? void 0 : _std$ID.toString()) || _this.uuid;
            rotation && _this.setWorldRotationFromEuler(rotation.x, rotation.y, rotation.z);

            _this.setScale(1, 1, 1);

            if (_this.cardData['playState'] != undefined) {
              _this.state = _this.cardData['playState'];
            } else {
              if (std && data.area >= 0) {
                _this.state = CardState.Fightting;
              } else {
                _this.state = CardState.None;
              }
            }

            if (!_this.$hasLoad) yield _this.loadSub;
            _this.isMy = isMy;

            _this.pbShakeQt.set(_this.pbQt);

            _this.bodyShakeQt.set(_this.bodyQt);

            _this.pbShakePower = _this.bodyShakePower = 0;
            var stdQuality = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardUpgradeShow(_this.cardData.quality);
            _this.myName.color = new Color().fromHEX((stdQuality == null ? void 0 : stdQuality.QualityColor) || "#FFFFFF");
            _this.adName.color = new Color().fromHEX((stdQuality == null ? void 0 : stdQuality.QualityColor) || "#FFFFFF");
            _this.top.color = new Color().fromHEX((stdQuality == null ? void 0 : stdQuality.QualityColor) || "#FFFFFF");
            _this.adName.string = _this.myName.string = _this.nameLab.string = (std == null ? void 0 : std.CardName) || "未知";
            _this.adPower.string = _this.myPower.string = _this.power.string = (data == null || (_data$power = data.power) == null || (_data$power = _data$power.finalValue) == null ? void 0 : _data$power.toString()) || (std == null || (_std$Power = std.Power) == null ? void 0 : _std$Power.toString()) || "";
            _this.cost.string = (data == null || (_data$cost = data.cost) == null || (_data$cost = _data$cost.finalValue) == null ? void 0 : _data$cost.toString()) || (std == null || (_std$Cost = std.Cost) == null ? void 0 : _std$Cost.toString()) || "";
            _this.body.node.active = false;
            _this.body_card.node.active = false;

            if (std != null && std.CardBody) {
              var url = "spine/" + (std == null ? void 0 : std.SceneBody) + "/" + (std == null ? void 0 : std.SceneBody);
              (_crd && AnimationUtils === void 0 ? (_reportPossibleCrUseOfAnimationUtils({
                error: Error()
              }), AnimationUtils) : AnimationUtils).Play(url, _this.body, "idle", true); // if (this.body['spUrl'] != url) {
              //     this.body['spUrl'] = url;
              //     this.body.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
              // }
              // console.log("url", url);
              // try {
              //     if (this.body.skeletonData) this.body.setAnimation(0, "idle", true);
              // } catch (e) { }

              url = "spine/" + (std == null ? void 0 : std.CardBody) + "/" + (std == null ? void 0 : std.CardBody);
              (_crd && AnimationUtils === void 0 ? (_reportPossibleCrUseOfAnimationUtils({
                error: Error()
              }), AnimationUtils) : AnimationUtils).Play(url, _this.body_card, "idle", true); // if (this.body_card['spUrl'] != url) {
              //     console.log("url", url);
              //     this.body_card['spUrl'] = url;
              //     this.body_card.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
              // }
              // if (this.body_card.skeletonData) this.body_card.setAnimation(0, "idle", true);

              _this.body.node.active = false;
              _this.body_card.node.active = true;
            }

            var quality = data.quality || 1;
            var spUrl = path.join("spine", "cardbg_000" + quality, "cardbg_000" + quality);
            _this.frame['spUrl'] = spUrl;
            _this.frame.skeletonData = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(spUrl, sp.SkeletonData);

            _this.frame.setAnimation(0, "idle", true);

            _this.nameframe.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
              error: Error()
            }), card_quality) : card_quality, "nameframe_" + quality, "spriteFrame"), SpriteFrame);
            _this.skillDesc.string = "";
            _this.descLab.string = "";
            var skillId = _this == null || (_this$cardData = _this.cardData) == null || (_this$cardData = _this$cardData.skills[0]) == null ? void 0 : _this$cardData.skillId;

            if (skillId != undefined) {
              var stdSkill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCardSkill(skillId);

              if (stdSkill) {
                _this.debugNode.active = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                  error: Error()
                }), GameSet) : GameSet).debug;
                _this.skillDesc.string = skillId + ":" + stdSkill.Desc;
              }
            } else _this.debugNode.active = false;

            _this.cardIdLab.string = _this.instId;

            _this.updateCardBack();

            _this.setInfoVisible();
          })();
        }
        /**
         * 更新手卡
         * @param data 
         */


        FlushData(isMy, data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _data$power2, _data$power3, _data$cost2, _data$cost3, _this2$cardData;

            _this2.isMy = isMy;
            if (!_this2.$hasLoad) yield _this2.loadSub;
            _this2.cardData = data;
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(data.configId);
            _this2.std = std;

            if (_this2.state != CardState.Covering && Number(_this2.power.string) < (data == null || (_data$power2 = data.power) == null ? void 0 : _data$power2.finalValue)) {
              _this2.powerEffect.setAnimation(0, "change", false);

              Tween.stopAllByTarget(_this2.power.node);
              tween(_this2.power.node).to(0.25, {
                scale: v3(4, 4, 4)
              }, {
                easing: easing.cubicOut
              }).delay(0.2).to(0.25, {
                scale: v3(1, 1, 1)
              }).start();
            }

            _this2.adPower.string = _this2.myPower.string = _this2.power.string = (data == null || (_data$power3 = data.power) == null || (_data$power3 = _data$power3.finalValue) == null ? void 0 : _data$power3.toString()) || "";

            if (_this2.state != CardState.Covering && Number(_this2.cost.string) < (data == null || (_data$cost2 = data.cost) == null ? void 0 : _data$cost2.finalValue)) {
              _this2.costEffect.setAnimation(0, "change", false);

              Tween.stopAllByTarget(_this2.cost.node);
              tween(_this2.cost.node).to(0.25, {
                scale: v3(4, 4, 4)
              }, {
                easing: easing.cubicOut
              }).delay(0.2).to(0.25, {
                scale: v3(1, 1, 1)
              }).start();
            }

            _this2.cost.string = (data == null || (_data$cost3 = data.cost) == null || (_data$cost3 = _data$cost3.finalValue) == null ? void 0 : _data$cost3.toString()) || "";
            _this2.skills = data.skills;
            var stdQuality = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardUpgradeShow(_this2.cardData.quality);
            _this2.myName.color = new Color().fromHEX((stdQuality == null ? void 0 : stdQuality.QualityColor) || "#FFFFFF");
            _this2.adName.color = new Color().fromHEX((stdQuality == null ? void 0 : stdQuality.QualityColor) || "#FFFFFF");
            _this2.top.color = new Color().fromHEX((stdQuality == null ? void 0 : stdQuality.QualityColor) || "#FFFFFF");
            _this2.adName.string = _this2.myName.string = _this2.nameLab.string = (std == null ? void 0 : std.CardName) || "未知";

            if (std != null && std.CardBody) {
              var url = "spine/" + (std == null ? void 0 : std.SceneBody) + "/" + (std == null ? void 0 : std.SceneBody);
              (_crd && AnimationUtils === void 0 ? (_reportPossibleCrUseOfAnimationUtils({
                error: Error()
              }), AnimationUtils) : AnimationUtils).Play(url, _this2.body, "idle", true); // if (this.body['spUrl'] != url) {
              //     this.body['spUrl'] = url;
              //     this.body.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
              //     console.log("skeletonData", url);
              //     if (this.body.skeletonData) this.body.setAnimation(0, "idle", true);
              // }

              url = "spine/" + (std == null ? void 0 : std.CardBody) + "/" + (std == null ? void 0 : std.CardBody);
              (_crd && AnimationUtils === void 0 ? (_reportPossibleCrUseOfAnimationUtils({
                error: Error()
              }), AnimationUtils) : AnimationUtils).Play(url, _this2.body_card, "idle", true); // if (this.body_card['spUrl'] != url) {
              //     this.body_card['spUrl'] = url;
              //     this.body_card.skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
              //     if (this.body_card.skeletonData) this.body_card.setAnimation(0, "idle", true);
              //     this.body_card.node.active = true;
              // }
            }

            var quality = data.quality || 1;
            var spUrl = path.join("spine", "cardbg_000" + quality, "cardbg_000" + quality);

            if (_this2.frame['spUrl'] != spUrl) {
              _this2.frame.skeletonData = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(spUrl, sp.SkeletonData);

              _this2.frame.setAnimation(0, "idle", true);
            }

            _this2.nameframe.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
              error: Error()
            }), card_quality) : card_quality, "nameframe_" + quality, "spriteFrame"), SpriteFrame);
            _this2.skillDesc.string = "";
            _this2.descLab.string = "";
            var skillId = _this2 == null || (_this2$cardData = _this2.cardData) == null || (_this2$cardData = _this2$cardData.skills[0]) == null ? void 0 : _this2$cardData.skillId;

            if (skillId != undefined) {
              var stdSkill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCardSkill(skillId);

              if (stdSkill) {
                _this2.debugNode.active = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                  error: Error()
                }), GameSet) : GameSet).debug;
                _this2.skillDesc.string = skillId + ":" + stdSkill.Desc;
              }
            } else _this2.debugNode.active = false;

            _this2.cardIdLab.string = _this2.instId;

            if (_this2.cardData['playState'] != undefined) {
              _this2.state = _this2.cardData['playState'];
            } else if (std && data.area >= 0 && _this2.state <= CardState.Showing) {
              _this2.state = CardState.Fightting;
            }

            _this2.updateCardBack();

            _this2.setInfoVisible();
          })();
        }

        updateCardBack() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var cardBackName = _this3.cardData ? (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).cardBack[_this3.cardData.playerId] : "bg_1";
            _this3.cardBack.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
              error: Error()
            }), card_quality) : card_quality, cardBackName, "spriteFrame"), SpriteFrame);
          })();
        }
        /**
         * 碰撞检测
         * @param x 
         * @param y 
         * @param z 
         * @returns 
         */


        HitTest(x, y, z) {
          if (Math.abs(this.worldPosition.x - x) <= this.wide / 2 && Math.abs(this.worldPosition.z - z) <= this.hide / 2) {
            return true;
          }

          return false;
        }
        /**
         * 拖动
         * @param tx 
         * @param ty 
         */


        Drag(tx, ty) {
          Tween.stopAllByTarget(this);
          var [x, y, z] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).ScreenToPlane(tx, ty, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).HandPlane, 20);
          this.dragPoint = {
            x: x,
            y: y,
            z: z
          };
        }

        get isDragging() {
          return this.dragPoint != undefined;
        }

        /**
         * 停止拖动
         */
        StopDrag() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (!_this4.$hasLoad) yield _this4.loadSub;

            _this4.setInfoVisible();

            _this4.dragPoint = undefined;
            _this4.ctrl.x = _this4.ctrlZero.x;
            _this4.ctrl.y = _this4.ctrlZero.y;
          })();
        }
        /**轮训 */


        update(dt) {
          if (this.dragPoint) {
            this.mask.active = true;
            var dx = this.dragPoint.x - this.worldPosition.x;
            var dy = this.dragPoint.y - this.worldPosition.y;
            var dz = this.dragPoint.z - this.worldPosition.z;
            this.setWorldPosition(this.worldPosition.x + dx / 6, this.worldPosition.y + dy / 6, this.worldPosition.z + dz / 6); // console.log("Drag",dx,dy,dz,this.worldPosition.toString());

            if (!this.hasLoad) return;
            var offset = 200;
            this.ctrl.x = Math.sign(dx) * Math.min(Math.abs(dx) * 100, offset);
            this.ctrl.y = Math.sign(dy) * Math.min(Math.abs(dy) * 100, offset);
          }

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).BattleRoomOpOutputType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleRoomOpOutputType.Out_WaitPlayerShow) {
            this.mask.active = false;
          } else if (this.state == CardState.Handing) {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).Energy < Number(this.cost.string)) {
              this.mask.active = true;
            } else {
              var states = this.cardData.persistentState || {};

              if (states[(_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleRoomPersistentState.PersistentStatePlace] || (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).cardState[this.cardData.instId]) {
                this.mask.active = true;
                return;
              }

              this.mask.active = false;
            }
          }
        }
        /**缓动结束 */


        onActionEnd() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (_this5.ctrl) {
              _this5.ctrl.x = _this5.ctrlZero.x;
              _this5.ctrl.y = _this5.ctrlZero.y;
            }

            var h = _this5.twHandle;
            _this5.twHandle = undefined;
            h && h();
            _this5.action = undefined;
          })();
        }

        setAction(act) {
          if (this.action) {
            this.action = this.action.merge(act);
          } else {
            this.action = act;
          }

          return this.action.run();
        }
        /**展示卡片 */


        ViewCard() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var _this6$std;

            if (!_this6.$hasLoad) yield _this6.loadSub;
            _this6.active = true;
            _this6.state = CardState.None;

            _this6.setInfoVisible();

            _this6.descLab.string = "";
            _this6.debugNode.active = false;

            _this6.$proxy.node.setPosition(0, 0, -_this6.descLab.getComponent(UITransform).contentSize.height * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).PixelSize / 2);

            yield _this6.setAction(new (_crd && CardShowBig === void 0 ? (_reportPossibleCrUseOfCardShowBig({
              error: Error()
            }), CardShowBig) : CardShowBig)(_this6));

            if (_this6 != null && (_this6$std = _this6.std) != null && _this6$std.SkillDesc) {
              _this6.descLab.string = _this6.std.SkillDesc;
            } else {
              _this6.descLab.string = "";
            }

            _this6.onActionEnd();
          })();
        }

        EndViewCard() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var _this7$std;

            if (!_this7.$hasLoad) yield _this7.loadSub;
            if (_this7.action && _this7.action.running) _this7.action.end();
            _this7.active = false;

            if (_this7 != null && (_this7$std = _this7.std) != null && _this7$std.SkillDesc) {
              _this7.debugNode.active = false;
            } else {
              _this7.debugNode.active = (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).debug;
            }
          })();
        }
        /**
         * 发牌
         * @param end
         * @param q 
         * @returns 
         */


        SendToHand(start, end, q) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            _this8.setInfoVisible();

            _this8.state = CardState.Sending;
            yield _this8.setAction(new (_crd && CardFlyToHand === void 0 ? (_reportPossibleCrUseOfCardFlyToHand({
              error: Error()
            }), CardFlyToHand) : CardFlyToHand)(_this8, start, end, q));
            _this8.state = CardState.Handing;

            _this8.onActionEnd();
          })();
        }
        /**
         * 手牌排布
         * @param p
         */


        LayoutHands(p, q) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            _this9.setInfoVisible();

            _this9.state = CardState.Layout;
            yield _this9.setAction(new (_crd && CardLayout === void 0 ? (_reportPossibleCrUseOfCardLayout({
              error: Error()
            }), CardLayout) : CardLayout)(_this9, p, q));
            _this9.state = CardState.Handing;

            _this9.onActionEnd();
          })();
        }
        /**
         * 出牌动作
         * @param v 
         * @param q 
         * @returns 
         */


        PlayToMyArea(v, q) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            if (_this10.state < CardState.Fightting) _this10.state = CardState.Playing;

            _this10.setInfoVisible();

            yield _this10.setAction(new (_crd && CardFlyToArea === void 0 ? (_reportPossibleCrUseOfCardFlyToArea({
              error: Error()
            }), CardFlyToArea) : CardFlyToArea)(_this10, v, q));
            var effect = (_crd && SampleEffect === void 0 ? (_reportPossibleCrUseOfSampleEffect({
              error: Error()
            }), SampleEffect) : SampleEffect).Create("prefabs/particle/smoke");
            effect.PlayOnce(v.x, v.y, v.z);

            _this10.onActionEnd();
          })();
        }
        /**
         * 对方出牌
         * @param v 
         * @param q 
         */


        PlayToAdArea(v) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            _this11.state = CardState.Covering;
            if (!_this11.$hasLoad) yield _this11.loadSub;

            _this11.setInfoVisible();

            _this11.setWorldRotation(_crd && $Back_Quat === void 0 ? (_reportPossibleCrUseOf$Back_Quat({
              error: Error()
            }), $Back_Quat) : $Back_Quat);

            yield _this11.setAction(new (_crd && CardFlyToArea === void 0 ? (_reportPossibleCrUseOfCardFlyToArea({
              error: Error()
            }), CardFlyToArea) : CardFlyToArea)(_this11, v, _crd && $Back_Quat === void 0 ? (_reportPossibleCrUseOf$Back_Quat({
              error: Error()
            }), $Back_Quat) : $Back_Quat));

            _this11.onActionEnd();
          })();
        }
        /**
         * 回到手牌
         * @param x 
         * @param y 
         * @param z 
         */


        BackToHand(p, q) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            _this12.state = CardState.Handing;

            _this12.setInfoVisible();

            yield _this12.setAction(new (_crd && CardMoveTo === void 0 ? (_reportPossibleCrUseOfCardMoveTo({
              error: Error()
            }), CardMoveTo) : CardMoveTo)(_this12, p, q));

            _this12.onActionEnd();
          })();
        }
        /**
         * 盖牌
         * @returns 
         */


        TurnBack() {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            _this13.state = CardState.Covering;
            yield _this13.setAction(new (_crd && CardTurnBack === void 0 ? (_reportPossibleCrUseOfCardTurnBack({
              error: Error()
            }), CardTurnBack) : CardTurnBack)(_this13));

            _this13.setInfoVisible();

            _this13.onActionEnd();
          })();
        }
        /**
         * 转向
         */


        Open(showAnimation) {
          var _this14 = this;

          return _asyncToGenerator(function* () {
            if (showAnimation === void 0) {
              showAnimation = true;
            }

            _this14.state = CardState.Showing;

            _this14.setInfoVisible();

            var effect = (_crd && SampleEffect === void 0 ? (_reportPossibleCrUseOfSampleEffect({
              error: Error()
            }), SampleEffect) : SampleEffect).Create("prefabs/particle/Fx_area_summon");
            effect.PlayOnce(_this14.worldPosition.x, _this14.worldPosition.y, _this14.worldPosition.z);

            if (showAnimation) {
              yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(0.6);
              yield _this14.setAction(new (_crd && CardTurnFront === void 0 ? (_reportPossibleCrUseOfCardTurnFront({
                error: Error()
              }), CardTurnFront) : CardTurnFront)(_this14));
            }

            _this14.state = CardState.Fightting;
            yield _this14.setInfoVisible();
          })();
        }
        /**
         * 立即打开
         */


        OpenSync() {
          this.state = CardState.Fightting;
          this.setInfoVisible();
        }
        /**
         * 普通移动
         * @param v 
         * @param q 
         */


        MoveTo(v, q) {
          var _this15 = this;

          return _asyncToGenerator(function* () {
            _this15.setInfoVisible();

            if (!q) {
              if (_this15.isMy && _this15.state != CardState.Covering) q = _crd && $Front_Quat === void 0 ? (_reportPossibleCrUseOf$Front_Quat({
                error: Error()
              }), $Front_Quat) : $Front_Quat;else q = _this15.state >= CardState.Fightting ? _crd && $Front_Quat === void 0 ? (_reportPossibleCrUseOf$Front_Quat({
                error: Error()
              }), $Front_Quat) : $Front_Quat : _crd && $Back_Quat === void 0 ? (_reportPossibleCrUseOf$Back_Quat({
                error: Error()
              }), $Back_Quat) : $Back_Quat;
            }

            yield _this15.setAction(new (_crd && CardMoveTo === void 0 ? (_reportPossibleCrUseOfCardMoveTo({
              error: Error()
            }), CardMoveTo) : CardMoveTo)(_this15, v, q));

            _this15.onActionEnd();
          })();
        }
        /**
         * 区域布局
         */


        LayoutArea(v, q) {
          var _this16 = this;

          return _asyncToGenerator(function* () {
            if (_this16.state < CardState.Playing) _this16.state = CardState.Playing;

            if (!q) {
              if (_this16.isMy && _this16.state != CardState.Covering) q = _crd && $Front_Quat === void 0 ? (_reportPossibleCrUseOf$Front_Quat({
                error: Error()
              }), $Front_Quat) : $Front_Quat;else q = _this16.state >= CardState.Fightting ? _crd && $Front_Quat === void 0 ? (_reportPossibleCrUseOf$Front_Quat({
                error: Error()
              }), $Front_Quat) : $Front_Quat : _crd && $Back_Quat === void 0 ? (_reportPossibleCrUseOf$Back_Quat({
                error: Error()
              }), $Back_Quat) : $Back_Quat;
            }

            yield _this16.setAction(new (_crd && CardMoveTo === void 0 ? (_reportPossibleCrUseOfCardMoveTo({
              error: Error()
            }), CardMoveTo) : CardMoveTo)(_this16, v, q));

            _this16.onActionEnd();

            _this16.setInfoVisible();
          })();
        }
        /**异步 */


        createTwSub() {
          this.twHandle && this.twHandle();
          var self = this;
          return new Promise((resolve, reject) => {
            self.twHandle = resolve;
          });
        }

        setPrefabNodeVisible(value) {
          this.infoPage.active = value;
          this.find("card").active = value;
        }

        PlaySkill(action) {
          var _this17 = this;

          return _asyncToGenerator(function* () {
            if (!_this17.$hasLoad) yield _this17.loadSub;
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).CheckAnimation(_this17.body, action) && _this17.body.skeletonData) _this17.body.setAnimation(0, action, false);
          })();
        }

        setInfoVisible() {
          var _this18 = this;

          return _asyncToGenerator(function* () {
            if (!_this18.$hasLoad) yield _this18.loadSub;
            _this18.power.node.parent.active = true;
            _this18.cost.node.parent.active = true;

            if (_this18.state == CardState.Covering) {
              _this18.power.node.parent.active = false;
              _this18.cost.node.parent.active = false;

              _this18.setPrefabNodeVisible(true);

              _this18.body.node.active = false;
              _this18.myBattle.active = _this18.adBattle.active = false;
            } else if (_this18.state == CardState.Showing) {
              _this18.setPrefabNodeVisible(true);

              _this18.body.node.active = false;
              _this18.myBattle.active = _this18.adBattle.active = false;
            } else if (_this18.state >= CardState.Fightting) {
              if (!_this18.body.node.active) {
                _this18.body.node.active = true;
                if (_this18.body.skeletonData) _this18.body.setAnimation(0, "show", false);
                yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                  error: Error()
                }), Second) : Second)(1);
              }

              _this18.myBattle.active = _this18.isMy;
              _this18.adBattle.active = !_this18.isMy;

              _this18.setPrefabNodeVisible(false);
            } else {
              _this18.body.node.active = false;
              _this18.myBattle.active = _this18.adBattle.active = false;

              _this18.setPrefabNodeVisible(true);
            }
          })();
        }

        Shake(power, qt) {
          var _this19 = this;

          return _asyncToGenerator(function* () {
            if (!_this19.$hasLoad) yield _this19.loadSub;

            if (qt == undefined) {
              _this19.randomQt(_this19.bodyShakeQt);

              _this19.randomQt(_this19.pbShakeQt);

              _this19.bodyShakePower = Math.max(_this19.bodyShakePower, power);
              _this19.pbShakePower = Math.max(_this19.pbShakePower, power / 2);
            } else {}

            var bodyV3 = _this19.bodyV3.clone();

            bodyV3.y += _this19.bodyShakePower;

            var pbV3 = _this19.pbV3.clone();

            pbV3.y += _this19.pbShakePower;
            Tween.stopAllByTarget(_this19.body.node);
            Tween.stopAllByTarget(_this19.prefabNode);
            var dt = randomRange(0.15, 0.25);
            tween(_this19.body.node).to(dt, {
              position: bodyV3,
              rotation: _this19.bodyShakeQt
            }, {
              easing: easing.expoOut
            }).to(dt, {
              position: _this19.bodyV3,
              rotation: _this19.pbShakeQt
            }, {
              easing: easing.expoIn
            }).call(_this19.EndShake.bind(_this19)).start();
            tween(_this19.prefabNode).to(dt * 0.65, {
              position: pbV3,
              rotation: _this19.pbShakeQt
            }, {
              easing: easing.expoOut
            }).to(dt * 0.65, {
              position: _this19.pbV3,
              rotation: _this19.pbQt
            }, {
              easing: easing.expoIn
            }).start();
          })();
        }

        EndShake() {
          var _this20 = this;

          return _asyncToGenerator(function* () {
            if (!_this20.$hasLoad) yield _this20.loadSub;
            Tween.stopAllByTarget(_this20.body.node);
            Tween.stopAllByTarget(_this20.prefabNode);
            _this20.bodyShakePower = _this20.pbShakePower = 0;

            _this20.bodyShakeQt.set(_this20.bodyQt);

            _this20.pbShakeQt.set(_this20.pbQt);

            _this20.body.node.setRotation(_this20.bodyQt);

            _this20.body.node.setPosition(_this20.bodyV3);

            _this20.prefabNode.setRotation(_this20.pbQt);

            _this20.prefabNode.setPosition(_this20.pbV3);
          })();
        }

        randomQt(qt) {
          var rx = Math.random() * 30 - 15;
          var rz = Math.random() * 30 - 15;
          var out = v3();
          qt.getEulerAngles(out);
          out.x += rx;
          out.z += rz;
          math.Quat.fromEuler(qt, out.x, out.y, out.z);
        }

        receive() {
          if (this.$hasLoad) {
            this.name = "";
            this.body_card.node.active = false;
            this.power.string = "0";
            this.cost.string = "0";
            this.body.node.active = false;
            this.myBattle.active = false;
            this.adBattle.active = false;
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).MapChildrenFor(this, value => {
              value.layer = Layers.Enum['SCENE'];
            });
          }

          this.locking = false;
          this.onActionEnd();
          Tween.stopAllByTarget(this);
          Tween.stopAllByTarget(this.prefabNode);
          super.receive();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf228eedcaae7d4598440641b3abaf90b37be564.js.map