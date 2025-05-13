System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, Component, Input, Label, Slider, Sprite, UITransform, path, sp, MsgTypeSend, Session, PlayerData, ResMgr, quality_color, SelectHeroPanel, CfgMgr, StdCommonType, ToFixed, Tips, GameSet, FriendHelpItem, _crd;

  function _reportPossibleCrUseOfMsgTypeSend(extras) {
    _reporterNs.report("MsgTypeSend", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGetAgentInfo(extras) {
    _reporterNs.report("SGetAgentInfo", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataRole(extras) {
    _reporterNs.report("SPlayerDataRole", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSRoleAssistData(extras) {
    _reporterNs.report("SRoleAssistData", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfquality_color(extras) {
    _reporterNs.report("quality_color", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectHeroPanel(extras) {
    _reporterNs.report("SelectHeroPanel", "../common/SelectHeroPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCommonType(extras) {
    _reporterNs.report("StdCommonType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdRole(extras) {
    _reporterNs.report("StdRole", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToFixed(extras) {
    _reporterNs.report("ToFixed", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../GameSet", _context.meta, extras);
  }

  _export("FriendHelpItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Input = _cc.Input;
      Label = _cc.Label;
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      path = _cc.path;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      MsgTypeSend = _unresolved_2.MsgTypeSend;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.default;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
      quality_color = _unresolved_5.quality_color;
    }, function (_unresolved_6) {
      SelectHeroPanel = _unresolved_6.SelectHeroPanel;
    }, function (_unresolved_7) {
      CfgMgr = _unresolved_7.CfgMgr;
      StdCommonType = _unresolved_7.StdCommonType;
    }, function (_unresolved_8) {
      ToFixed = _unresolved_8.ToFixed;
    }, function (_unresolved_9) {
      Tips = _unresolved_9.Tips;
    }, function (_unresolved_10) {
      GameSet = _unresolved_10.GameSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16879IDd6xAMIjJQ4po+9QI", "FriendHelpItem", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'EventTouch', 'Input', 'Label', 'Node', 'Slider', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'UITransform', 'Vec3', 'instantiate', 'path', 'sp', 'v3']);

      _export("FriendHelpItem", FriendHelpItem = class FriendHelpItem extends Component {
        constructor(...args) {
          super(...args);
          this.help_num = void 0;
          this.quality = void 0;
          this.addBtn = void 0;
          this.spine = void 0;
          this.lock = void 0;
          this.lv = void 0;
          this.unlockNode = void 0;
          this.cost_num = void 0;
          this.Slider = void 0;
          this.progress = void 0;
          this.cost_consumeNum = void 0;
          this.cost_hasNum = void 0;
          this.confirmBtn = void 0;
          this.left = void 0;
          this.right = void 0;
          this.income_num = void 0;
          this.lockNode = void 0;
          this.unlock_cost = void 0;
          this.unlockBtn = void 0;
          this.tips = void 0;
          //助战配置
          this.cfgData = void 0;
          this.select_fee = 0;
          this.maxCount = 0;
          this.minCount = 0;
          this.all_unlock_coun = 0;
          this.role = void 0;
          this.time = void 0;
          this.dt = 0.01;
          this.touchIndex = 0;
          this.touchTime = 0;
          this.pos = void 0;
          this.unlock_cost_num = 0;
          this.info = void 0;
          this.complete = void 0;
          this.hasLoad = false;
          this.$loadSub = void 0;
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }

        onLoad() {
          var _this$complete;

          // let tittle = this.node.getChildByPath("frame/tittle_bg/tittle").getComponent(Label);
          // let help = this.node.getChildByPath("frame/tittle_bg/lblNode/help").getComponent(Label);
          this.help_num = this.node.getChildByPath("frame/tittle_bg/lblNode/help_num").getComponent(Label);
          this.quality = this.node.getChildByPath("frame/Node/quality").getComponent(Sprite);
          this.addBtn = this.node.getChildByPath("frame/Node/addBtn");
          this.spine = this.node.getChildByPath("frame/Node/spine").getComponent(sp.Skeleton);
          this.lock = this.node.getChildByPath("frame/Node/lock");
          this.lv = this.node.getChildByPath("frame/Node/lv").getComponent(Label);
          this.unlockNode = this.node.getChildByPath("frame/unlockNode");
          this.cost_num = this.node.getChildByPath("frame/unlockNode/help_cost_bg/bg/cost_bg/cost_num").getComponent(Label);
          this.income_num = this.node.getChildByPath("frame/unlockNode/help_cost_bg/incomeNode/income_num").getComponent(Label);
          this.Slider = this.node.getChildByPath("frame/unlockNode/page1/Slider").getComponent(Slider);
          this.progress = this.node.getChildByPath("frame/unlockNode/page1/Slider/progress");
          this.confirmBtn = this.node.getChildByPath("frame/unlockNode/page1/confirmBtn").getComponent(Button);
          this.left = this.node.getChildByPath("frame/unlockNode/page1/left");
          this.right = this.node.getChildByPath("frame/unlockNode/page1/right");
          this.lockNode = this.node.getChildByPath("frame/lockNode");
          this.unlock_cost = this.node.getChildByPath("frame/lockNode/bg/incomeNode/unlock_cost").getComponent(Label);
          this.unlockBtn = this.node.getChildByPath("frame/lockNode/unlockBtn");
          this.tips = this.node.getChildByPath("frame/lockNode/tips"); // this.addBtn.on(Input.EventType.TOUCH_START, this.onSelsectHero, this);

          this.node.getChildByPath("frame/Node").on(Input.EventType.TOUCH_END, this.onSelsectHero, this);
          this.Slider.node.on('slide', this.onSlider, this);
          this.left.on(Input.EventType.TOUCH_END, this.onDel, this);
          this.right.on(Input.EventType.TOUCH_END, this.onAdd, this);
          this.left.on(Input.EventType.TOUCH_START, () => {
            this.onTouchStart(1);
          }, this);
          this.right.on(Input.EventType.TOUCH_START, () => {
            this.onTouchStart(2);
          }, this);
          this.confirmBtn.node.on("click", this.onConfirmBtn, this);
          this.unlockBtn.on("click", this.onUnlockBtn, this);
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }
        /**好友列表数据 */


        async setData(data, info) {
          if (!this.hasLoad) await this.loadSub;
          this.maxCount = 0;
          this.info = info;

          if (this.time) {
            clearInterval(this.time);
          } else {
            this.time = setInterval(this.updateLayer.bind(this), 20);
          }

          this.pos = data.assistInfo.slot;
          let is_lock = data.islock;
          this.addBtn.active = is_lock;
          this.lock.active = !is_lock;
          this.unlockNode.active = is_lock;
          this.lockNode.active = !is_lock;

          if (info && info.assist_roles_slots < data.all_unlock_coun) {
            this.tips.active = true;
            this.unlockBtn.active = false;
          } else {
            this.tips.active = false;
            this.unlockBtn.active = true;
          }

          this.spine.node.active = false;
          let _cost_num = 0;
          let _daily_income = 0;

          if (is_lock) {
            let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCommon((_crd && StdCommonType === void 0 ? (_reportPossibleCrUseOfStdCommonType({
              error: Error()
            }), StdCommonType) : StdCommonType).Friend);
            this.spine.node.active = false;
            this.quality.color = new Color().fromHEX((_crd && quality_color === void 0 ? (_reportPossibleCrUseOfquality_color({
              error: Error()
            }), quality_color) : quality_color)[0]);

            if (data.role) {
              this.minCount = cfg.CostRangeMin[data.role.quality - 1];
              this.maxCount = cfg.CostRangeMax[data.role.quality - 1];
              this.spine.node.active = true;
              this.setRole(data.role);
              _cost_num = data.assistInfo.usage_fee;
              _daily_income = data.assistInfo.daily_income;
            } else {
              _cost_num = 0;
              _daily_income = 0;
            } //助战费用配置


            this.cost_num.string = _cost_num + "";
            this.select_fee = _cost_num; //今日收益

            let shownum = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
              error: Error()
            }), ToFixed) : ToFixed)(_daily_income, 2);
            this.income_num.string = shownum;
          } else {
            this.unlock_cost.string = data.lockCost + "";
            this.unlock_cost_num = data.lockCost;
          }

          this.all_unlock_coun = data.all_unlock_coun;
          this.help_num.string = data.assistInfo.daily_assist_count + "";
          this.Slider.enabled = this.maxCount > 0;
          this.updateCostProgress();
        }

        onSelsectHero() {
          if (this.spine.node.active) {
            let data = {
              type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                error: Error()
              }), MsgTypeSend) : MsgTypeSend).SetAssistRoleRequest,
              data: {
                role_id: "",
                slot: this.pos,
                fee: 0
              }
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(data);
          } else if (this.addBtn.active) {
            let roles = [];

            for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetRoles()) {
              if (!iterator.is_assisting) {
                roles.push(iterator);
              }
            }

            (_crd && SelectHeroPanel === void 0 ? (_reportPossibleCrUseOfSelectHeroPanel({
              error: Error()
            }), SelectHeroPanel) : SelectHeroPanel).SelectHelp(roles, [], 1, this.setHeroIcon.bind(this));
          }
        }
        /**设置助战英雄 */


        async setHeroIcon(data) {
          if (data && data.length > 0) {
            let role_data = {
              type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                error: Error()
              }), MsgTypeSend) : MsgTypeSend).SetAssistRoleRequest,
              data: {
                role_id: data[0].id,
                slot: this.pos,
                fee: this.select_fee
              }
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(role_data);
          }
        }

        async setRole(role_data) {
          if (!role_data) return;
          let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetRole()[role_data.type];
          this.quality.color = new Color().fromHEX((_crd && quality_color === void 0 ? (_reportPossibleCrUseOfquality_color({
            error: Error()
          }), quality_color) : quality_color)[role_data.quality]); // this.spine.node.off(Input.EventType.TOUCH_START);
          // this.spine.node.on(Input.EventType.TOUCH_START, this.onResetHero, this);

          this.spine.node.active = true;
          let scale = std.Scale || 1;
          this.spine.node.setScale(0.4 * scale, 0.4 * scale);
          this.spine.skeletonData = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("spine/role_p", std.Prefab, std.Prefab), sp.SkeletonData);
          this.spine.setAnimation(0, `Idle`, true);
          this.lv.node.active = true;
          this.lv.string = "Lv" + role_data.level;
          this.role = role_data;
        }

        onDel(event) {
          this.select_fee -= this.minCount;

          if (this.select_fee < this.minCount) {
            this.select_fee = this.minCount;
          }

          this.updateCostProgress();

          if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onAdd(event) {
          this.select_fee += this.minCount;

          if (this.select_fee > this.maxCount) {
            this.select_fee = this.maxCount;
          }

          this.updateCostProgress();

          if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
          }
        }

        onSlider(e) {
          this.select_fee = this.maxCount * this.Slider.progress;

          if (this.select_fee < this.minCount) {
            this.select_fee = this.minCount;
          }

          this.touchIndex = 0;
          this.touchTime = 0;
          this.updateCostProgress();
        }

        onConfirmBtn() {
          if (!this.role || !this.role.id) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("无助战英雄");
            return;
          }

          let feeData = {
            type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
              error: Error()
            }), MsgTypeSend) : MsgTypeSend).SetAssistRoleUsageFeeRequest,
            data: {
              role_id: this.role.id,
              usage_fee: this.select_fee
            }
          };
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(feeData);
        }

        updateCostProgress() {
          if (this.select_fee == 0) return;
          this.select_fee = Math.floor(this.select_fee * 100) / 100;
          this.cost_num.string = this.select_fee + "";

          if (this.maxCount == 0) {
            this.Slider.progress = 0;
          } else {
            this.Slider.progress = this.select_fee / this.maxCount;
          }

          let size = this.Slider.node.getComponent(UITransform).contentSize;
          this.progress.getComponent(UITransform).setContentSize(this.Slider.progress * size.width, 28);
        }

        onUnlockBtn() {
          let hasitem = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.currency;

          if (hasitem < this.unlock_cost_num) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).GetMoneyName() + "不足");
            return;
          }

          let unlockData = {
            type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
              error: Error()
            }), MsgTypeSend) : MsgTypeSend).UnlockAssistRoleSlotRequest,
            data: {
              new_slot_count: this.all_unlock_coun + 1
            }
          };
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(unlockData);
        }

        onTouchStart(index) {
          this.touchIndex = index;
        }

        updateLayer() {
          if (this.touchIndex != 0) {
            this.touchTime += this.dt;

            if (this.touchTime >= 0.3) {
              this.touchTime = 0.28;

              switch (this.touchIndex) {
                case 1:
                  this.onDel();
                  break;

                case 2:
                  this.onAdd();
                  break;
              }
            }
          }
        }

        clearTime() {
          clearInterval(this.time);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=920ba4c8f08a5f71272678edf2a0efefff76d474.js.map