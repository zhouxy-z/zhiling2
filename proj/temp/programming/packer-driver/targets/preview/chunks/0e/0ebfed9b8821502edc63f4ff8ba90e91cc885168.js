System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, Input, Label, Layout, Sprite, SpriteFrame, UITransform, Widget, instantiate, path, sp, Panel, RoleMsgPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("RoleMsgPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      Input = _cc.Input;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      instantiate = _cc.instantiate;
      path = _cc.path;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ce5222NoBKqp7gnsIRXwt2", "RoleMsgPanel", undefined);

      __checkObsolete__(['Button', 'Color', 'Input', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteFrame', 'UITransform', 'Widget', 'instantiate', 'path', 'sp']);

      _export("RoleMsgPanel", RoleMsgPanel = class RoleMsgPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/Trade/RoleMsgPanel";
          this.figure = void 0;
          this.quality = void 0;
          this.level = void 0;
          this.body = void 0;
          this.role_name = void 0;
          this.jobIcon = void 0;
          this.jobName = void 0;
          this.power = void 0;
          this.SoldierNum = void 0;
          this.okBtn = void 0;
          this.layout = void 0;
          this.value = void 0;
          this.skillLayout = void 0;
          this.skill_item = void 0;
          this.spriteFrame = void 0;
          this.sellNode = void 0;
          this.sellBtn = void 0;
          this.sellVaule = void 0;
          this.get_money_icon = void 0;
          this.costVaule = void 0;
          this.role_tips = void 0;
          this.role = void 0;
          this.roleData = void 0;
          this.type = void 0;
          this.id = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("spriteFrame/Close");
          this.spriteFrame = this.find("spriteFrame");
          this.figure = this.find("spriteFrame/juese/figure", Sprite);
          this.quality = this.find("spriteFrame/juese/quality", Sprite);
          this.level = this.find("spriteFrame/juese/level", Label);
          this.body = this.find("spriteFrame/juese/body", sp.Skeleton);
          this.role_name = this.find("spriteFrame/msg/role_name", Label);
          this.jobIcon = this.find("spriteFrame/msg/jobLayout/jobIcon", Sprite);
          this.jobName = this.find("spriteFrame/msg/jobLayout/jobName", Label);
          this.power = this.find("spriteFrame/msg/power", Label);
          this.SoldierNum = this.find("spriteFrame/msg/SoldierNum", Label);
          this.okBtn = this.find("spriteFrame/mid/okBtn", Button);
          this.layout = this.find("spriteFrame/skillLayout/ScrollView/view/layout", Layout);
          this.value = this.find("spriteFrame/mid/okBtn/layout/value", Label);
          this.skillLayout = this.find("spriteFrame/skillLayout");
          this.skill_item = this.find("spriteFrame/skillLayout/ScrollView/view/layout/item");
          this.sellNode = this.find("spriteFrame/mid/sellNode");
          this.sellBtn = this.find("spriteFrame/mid/sellNode/sellBtn", Button);
          this.sellVaule = this.find("spriteFrame/mid/sellNode/layout/sellVaule", Label);
          this.get_money_icon = this.find("spriteFrame/mid/sellNode/layout/get_money_icon", Sprite);
          this.costVaule = this.find("spriteFrame/mid/sellNode/layout/costVaule", Label);
          this.role_tips = this.find("spriteFrame/mid/sellNode/role_tips", Label);
          this.okBtn.node.on("click", this.onClick, this);
          this.sellBtn.node.on("click", this.onClick, this); // this.sellBtn.node.on("click", this.onSend, this);
        }

        flush(type, roleData) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.type = type;
            _this.roleData = roleData;
            _this.role = roleData.things.data[0].role;
            _this.skillLayout.active = true;
            var soldier_num = _this.role.soldier_num ? _this.role.soldier_num : 0;

            if (type == SOrderType.SELL) {
              // this.role_tips.string = CfgMgr.GetText("fanyu_1")
              _this.role_tips.string = "";
              _this.skillLayout.active = false;
              _this.spriteFrame.getComponent(UITransform).height = 1150 - _this.skillLayout.getComponent(UITransform).height;
              _this.okBtn.node.active = false;
              _this.sellNode.active = true;
              var cost_num = CfgMgr.GetCommon(StdCommonType.Bourse).Fees;
              _this.sellVaule.string = ToFixed(_this.roleData.unit_value - _this.roleData.unit_value * cost_num, 2);
              _this.costVaule.string = "(" + Math.ceil(cost_num * 100 * 100) / 100 + "%损耗)";
              var role = PlayerData.GetRoleByTypeAndLvAndQuality(_this.role.type, _this.role.level, _this.role.quality);

              if (!role) {
                _this.sellBtn.enabled = false;
                _this.sellBtn.node.getComponent(Sprite).grayscale = true;
              } else {
                _this.sellBtn.enabled = true;
                _this.sellBtn.node.getComponent(Sprite).grayscale = false;
              }
            } else {
              _this.okBtn.node.active = true;
              _this.sellNode.active = false;
            }

            _this.spriteFrame.children.forEach(node => {
              if (node.getComponent(Widget)) {
                node.getComponent(Widget).updateAlignment();
              }
            });

            var cfg = CfgMgr.GetRole()[_this.role.type];

            var prefab = cfg.Prefab;
            _this.body.skeletonData = yield ResMgr.LoadResAbSub(path.join("spine/role_p", prefab, prefab), sp.SkeletonData);

            _this.body.setAnimation(0, "Idle", true);

            _this.quality.spriteFrame = yield ResMgr.LoadResAbSub(path.join(folder_icon, "quality", CardQuality[_this.role.quality] + "_big", "spriteFrame"), SpriteFrame);
            _this.level.string = "Lv." + _this.role.level;
            _this.figure.color = new Color().fromHEX(quality_color[_this.role.quality]);
            _this.role_name.string = cfg.Name;
            _this.jobIcon.spriteFrame = yield ResMgr.LoadResAbSub(path.join(folder_icon, "pos" + cfg.PositionType, "spriteFrame"), SpriteFrame);
            _this.jobName.string = JobName[cfg.PositionType];
            _this.power.string = CountPower(_this.role.type, _this.role.level, _this.role) + "";
            _this.SoldierNum.string = GetAttrValueByIndex(_this.role, Attr.LeaderShip) + "";

            _this.layout.node.removeAllChildren();

            if (_this.role.passive_skills && _this.role.passive_skills.length > 0) {
              var _loop = function* _loop() {
                var element = _this.role.passive_skills[index]; //获取被动技能表

                var skill_cfg = CfgMgr.GetPassiveSkill(element.skill_id, element.level);
                var item = instantiate(_this.skill_item);
                item.on(Input.EventType.TOUCH_END, () => {
                  PassiveSkillTipsPanel.Show({
                    skill_id: element.skill_id,
                    level: element.level
                  });
                });

                if (skill_cfg) {
                  item.getChildByPath("lvCont/lvLab").getComponent(Label).string = element.level + "";
                  var iconUrl = path.join(folder_skill, skill_cfg.Icon.toString(), "spriteFrame");
                  ResMgr.LoadResAbSub(iconUrl, SpriteFrame, res => {
                    item.getChildByPath("Mask/icon").getComponent(Sprite).spriteFrame = res;
                  });
                  var quality = path.join(folder_quality, "p_skill_bg_" + skill_cfg.RareLevel, "spriteFrame");
                  ResMgr.LoadResAbSub(quality, SpriteFrame, res => {
                    item.getChildByName("frame").getComponent(Sprite).spriteFrame = res;
                  });

                  _this.layout.node.addChild(item);
                }
              };

              for (var index = 0; index < _this.role.passive_skills.length; index++) {
                yield* _loop();
              }
            }

            _this.value.string = ToFixed(roleData.unit_count * roleData.unit_value, 2);
            _this.value.color = PlayerData.roleInfo.currency > roleData.unit_count * roleData.unit_value ? new Color().fromHEX("#ffffff") : new Color().fromHEX("#ff3f3f");
          })();
        }

        onClick() {
          if (this.type == SOrderType.SELL) {
            var callBack = role => {
              if (role && role[0]) {
                this.id = role[0].id;
                this.onSend();
              }
            };

            var canSelectRoleData = [];
            var roles = PlayerData.GetRoles();

            for (var iterator of roles) {
              var is_show = iterator.trade_cd - PlayerData.GetServerTime() > 0;
              var is_add = iterator.type == this.role.type && iterator.quality == this.role.quality && iterator.level == this.role.level;

              if (is_add && iterator.building_id == 0 && !iterator.is_assisting && !is_show && !iterator.is_in_main_building) {
                canSelectRoleData.push(iterator);
              }
            }

            SelectHeroPanel.Show(canSelectRoleData, [], 1, callBack.bind(this), CardType.Trade);
          } else {
            var currency = PlayerData.roleInfo.currency;

            if (currency < this.roleData.unit_value) {
              Tips.Show("货币不足");
              return;
            }

            this.id = this.role.id;
            this.onSend();
          }
        }

        onSend() {
          if (isFengkong()) {
            RiskPanel.Show();
            CheckRisk(data => {
              RiskPanel.Hide();
              var is_ios = IOS ? 1 : 2;
              var sendData = {
                type: MsgTypeSend.ExchangesTrade,
                data: {
                  order_id: this.roleData.order_id,
                  payment_things: {
                    data: [{
                      type: ThingType.ThingTypeRole,
                      role: {
                        id: this.id,
                        type: this.role.type,
                        level: this.role.level,
                        quality: this.role.quality,
                        experience: this.role.experience ? this.role.experience : 0,
                        soldier_num: this.role.soldier_num ? this.role.soldier_num : 0,
                        active_skills: this.role.active_skills ? this.role.active_skills : [],
                        passive_skills: this.role.passive_skills ? this.role.passive_skills : [],
                        is_in_building: this.role.is_in_building,
                        building_id: this.role.building_id ? this.role.building_id : 0,
                        battle_power: this.role.battle_power ? this.role.battle_power : 0,
                        skills: this.role.skills ? this.role.skills : [],
                        is_assisting: this.role.is_assisting
                      }
                    }]
                  },
                  unit_count: 1,
                  authorization: data.authorization,
                  rc_token: data.rc_token,
                  client_os: is_ios
                }
              };
              Session.Send(sendData);
            });
          } else {
            var is_ios = IOS ? 1 : 2;
            var sendData = {
              type: MsgTypeSend.ExchangesTrade,
              data: {
                order_id: this.roleData.order_id,
                payment_things: {
                  data: [{
                    type: ThingType.ThingTypeRole,
                    role: {
                      id: this.id,
                      type: this.role.type,
                      level: this.role.level,
                      quality: this.role.quality,
                      experience: this.role.experience ? this.role.experience : 0,
                      soldier_num: this.role.soldier_num ? this.role.soldier_num : 0,
                      active_skills: this.role.active_skills ? this.role.active_skills : [],
                      passive_skills: this.role.passive_skills ? this.role.passive_skills : [],
                      is_in_building: this.role.is_in_building,
                      building_id: this.role.building_id ? this.role.building_id : 0,
                      battle_power: this.role.battle_power ? this.role.battle_power : 0,
                      skills: this.role.skills ? this.role.skills : [],
                      is_assisting: this.role.is_assisting
                    }
                  }]
                },
                unit_count: 1,
                authorization: "",
                rc_token: "",
                client_os: is_ios
              }
            };
            Session.Send(sendData);
          }
        }

        onShow() {}

        onHide() {
          this.roleData = undefined;
          this.role = undefined;
          this.spriteFrame.getComponent(UITransform).height = 1150;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ebfed9b8821502edc63f4ff8ba90e91cc885168.js.map