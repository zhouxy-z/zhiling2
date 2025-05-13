System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Input, Label, Sprite, SpriteFrame, find, path, sp, Panel, TradeHeroPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("TradeHeroPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Input = _cc.Input;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
      path = _cc.path;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ad5fcDTYxOi5Z7HlIsYyBO", "TradeHeroPanel", undefined);

      __checkObsolete__(['Color', 'Input', 'Label', 'Node', 'Slider', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'UIOpacity', 'UITransform', 'find', 'game', 'path', 'sp', 'tween', 'v3']);

      _export("TradeHeroPanel", TradeHeroPanel = class TradeHeroPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/Trade/TradeHeroPanel";
          this.role = void 0;
          this.body = void 0;
          this.midScroller = void 0;
          this.skillLayout = void 0;
          this.Power = void 0;
          this.PowerLabel = void 0;
          this.light = void 0;
          this.level = void 0;
        }

        onLoad() {
          this.body = this.find("body", sp.Skeleton);
          this.midScroller = this.find("midLayout", AutoScroller);
          this.skillLayout = this.find("skillLayout", AutoScroller);
          this.Power = this.find("Power");
          this.level = this.find("level", Label);
          this.PowerLabel = this.Power.getChildByName("label").addComponent(SpriteLabel);
          this.light = this.find("light", Sprite);
          this.CloseBy("close");
          this.node.on(Input.EventType.TOUCH_START, this.Hide, this);
          this.midScroller.SetHandle(this.updateItem.bind(this));
          this.skillLayout.SetHandle(this.onUpdateSkill.bind(this));
        }

        static ShowMerge(role) {
          this.Show(role);
        }

        flush(role) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.role = role;
            _this.level.string = "Lv." + role.level;
            var prefab = CfgMgr.GetRole()[role.type].Prefab;
            _this.body.skeletonData = yield ResMgr.LoadResAbSub(path.join("spine/role_p", prefab, prefab), sp.SkeletonData);

            _this.body.setAnimation(0, "Idle", true);

            var ls = [5, 7, 9, 11];
            var spr = ["mucai", "shui", "shitou", "zhongzi"];
            var datas = [];
            var index = 0;

            for (var _id of ls) {
              var data = FormatAttr(_id, false);
              var value = GetAttrValueByIndex(_this.role, _id);

              if (value != 0) {
                data.icon = path.join(folder_item, spr[index], "spriteFrame");
                value = SetPerValue(data, value);
                data.value = value;
                datas.push(data);
              }

              index++;
            }

            console.log(datas);
            var datas2 = [];
            var AttrFightData = FormatRoleFightAttr(role);
            var attr_data_list = [];
            var id = [AttrFight.AttackVal, AttrFight.HPMax];

            for (var i = 0; i < id.length; i++) {
              for (var _index = 0; _index < AttrFightData.length; _index++) {
                var element = AttrFightData[_index];

                if (element.id == id[i]) {
                  attr_data_list.push(element);
                }
              }
            } // 附加属性


            var data1 = {
              icon: null,
              name: "兵力数量",
              value: GetAttrValueByIndex(role, Attr.LeaderShip),
              next: 0,
              per: ""
            };
            datas2.push(data1);
            var data2 = {
              icon: null,
              name: "攻击力",
              value: attr_data_list[0].value,
              next: 0,
              per: ""
            };
            datas2.push(data2); // let data3: AttrSub = {
            //     icon: null,
            //     name: "生命值",
            //     value: attr_data_list[1].value,
            //     next: 0,
            //     per: ""
            // }
            // datas2.push(data3); 

            datas2 = datas2.concat(datas);

            _this.midScroller.UpdateDatas(datas2);

            _this.skillLayout.UpdateDatas(role.passive_skills);

            var battlePower = CountPower(_this.role.type, _this.role.quality, _this.role);
            _this.PowerLabel.font = "sheets/common/number/font2";
            _this.PowerLabel.string = "" + battlePower;
            var light = path.join("sheets/fanyu", CardQuality[role.quality], "spriteFrame");
            _this.light.spriteFrame = yield ResMgr.LoadResAbSub(light, SpriteFrame);
          })();
        }

        updateItem(item, data) {
          return _asyncToGenerator(function* () {
            var _item$getChildByName, _item$getChildByName2, _item$getChildByName3;

            var name = (_item$getChildByName = item.getChildByName("name")) == null ? void 0 : _item$getChildByName.getComponent(Label);
            var now = (_item$getChildByName2 = item.getChildByName("nowValue")) == null ? void 0 : _item$getChildByName2.getComponent(Label);
            var icon = (_item$getChildByName3 = item.getChildByName("iconJP")) == null ? void 0 : _item$getChildByName3.getComponent(Sprite);

            if (data.icon) {
              icon.node.active = true;
              icon.spriteFrame = yield ResMgr.LoadResAbSub(data.icon, SpriteFrame);
            } else {
              icon.node.active = false;
            }

            if (name) name.string = data.name;
            now.string = data.value + data.per;
          })();
        }

        onUpdateSkill(item, data) {
          if (data) {
            var stdSkill = CfgMgr.GetPassiveSkill(data.skill_id, data.level);
            var bg = find("bg", item).getComponent(Sprite);
            var icon = find("Mask/icon", item).getComponent(Sprite);
            var name = find("skill_name", item).getComponent(Label);
            var skillLV = find("lvCont/lvLab", item).getComponent(Label);

            if (stdSkill) {
              name.string = "" + stdSkill.Name;
              skillLV.string = "" + stdSkill.Level;
              name.color = new Color().fromHEX(skill_quality_color[stdSkill.RareLevel]);
              var iconUrl = path.join(folder_skill, stdSkill.Icon.toString(), "spriteFrame");
              ResMgr.LoadResAbSub(iconUrl, SpriteFrame, res => {
                icon.spriteFrame = res;
              });
              var qualityUrl = path.join(folder_quality, "p_skill_bg_" + stdSkill.RareLevel.toString(), "spriteFrame");
              ResMgr.LoadResAbSub(qualityUrl, SpriteFrame, res => {
                bg.spriteFrame = res;
              });
            }
          }
        }

        onShow() {}

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ee9a78ef463fc9095e9184d6d79f0e6e56b6817.js.map