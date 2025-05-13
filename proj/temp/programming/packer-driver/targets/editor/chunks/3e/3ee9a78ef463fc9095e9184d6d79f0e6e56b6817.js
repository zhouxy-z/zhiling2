System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Input, Label, Sprite, SpriteFrame, find, path, sp, Panel, TradeHeroPanel, _crd;

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
        constructor(...args) {
          super(...args);
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
          this.midScroller = this.find(`midLayout`, AutoScroller);
          this.skillLayout = this.find(`skillLayout`, AutoScroller);
          this.Power = this.find(`Power`);
          this.level = this.find("level", Label);
          this.PowerLabel = this.Power.getChildByName(`label`).addComponent(SpriteLabel);
          this.light = this.find("light", Sprite);
          this.CloseBy("close");
          this.node.on(Input.EventType.TOUCH_START, this.Hide, this);
          this.midScroller.SetHandle(this.updateItem.bind(this));
          this.skillLayout.SetHandle(this.onUpdateSkill.bind(this));
        }

        static ShowMerge(role) {
          this.Show(role);
        }

        async flush(role) {
          this.role = role;
          this.level.string = "Lv." + role.level;
          let prefab = CfgMgr.GetRole()[role.type].Prefab;
          this.body.skeletonData = await ResMgr.LoadResAbSub(path.join("spine/role_p", prefab, prefab), sp.SkeletonData);
          this.body.setAnimation(0, `Idle`, true);
          const ls = [5, 7, 9, 11];
          let spr = ["mucai", "shui", "shitou", "zhongzi"];
          let datas = [];
          let index = 0;

          for (let id of ls) {
            let data = FormatAttr(id, false);
            let value = GetAttrValueByIndex(this.role, id);

            if (value != 0) {
              data.icon = path.join(folder_item, spr[index], "spriteFrame");
              value = SetPerValue(data, value);
              data.value = value;
              datas.push(data);
            }

            index++;
          }

          console.log(datas);
          let datas2 = [];
          let AttrFightData = FormatRoleFightAttr(role);
          let attr_data_list = [];
          let id = [AttrFight.AttackVal, AttrFight.HPMax];

          for (let i = 0; i < id.length; i++) {
            for (let index = 0; index < AttrFightData.length; index++) {
              const element = AttrFightData[index];

              if (element.id == id[i]) {
                attr_data_list.push(element);
              }
            }
          } // 附加属性


          let data1 = {
            icon: null,
            name: "兵力数量",
            value: GetAttrValueByIndex(role, Attr.LeaderShip),
            next: 0,
            per: ""
          };
          datas2.push(data1);
          let data2 = {
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
          this.midScroller.UpdateDatas(datas2);
          this.skillLayout.UpdateDatas(role.passive_skills);
          let battlePower = CountPower(this.role.type, this.role.quality, this.role);
          this.PowerLabel.font = "sheets/common/number/font2";
          this.PowerLabel.string = `${battlePower}`;
          let light = path.join("sheets/fanyu", CardQuality[role.quality], "spriteFrame");
          this.light.spriteFrame = await ResMgr.LoadResAbSub(light, SpriteFrame);
        }

        async updateItem(item, data) {
          var _item$getChildByName, _item$getChildByName2, _item$getChildByName3;

          let name = (_item$getChildByName = item.getChildByName("name")) == null ? void 0 : _item$getChildByName.getComponent(Label);
          let now = (_item$getChildByName2 = item.getChildByName("nowValue")) == null ? void 0 : _item$getChildByName2.getComponent(Label);
          let icon = (_item$getChildByName3 = item.getChildByName("iconJP")) == null ? void 0 : _item$getChildByName3.getComponent(Sprite);

          if (data.icon) {
            icon.node.active = true;
            icon.spriteFrame = await ResMgr.LoadResAbSub(data.icon, SpriteFrame);
          } else {
            icon.node.active = false;
          }

          if (name) name.string = data.name;
          now.string = data.value + data.per;
        }

        onUpdateSkill(item, data) {
          if (data) {
            let stdSkill = CfgMgr.GetPassiveSkill(data.skill_id, data.level);
            let bg = find(`bg`, item).getComponent(Sprite);
            let icon = find(`Mask/icon`, item).getComponent(Sprite);
            let name = find(`skill_name`, item).getComponent(Label);
            let skillLV = find(`lvCont/lvLab`, item).getComponent(Label);

            if (stdSkill) {
              name.string = `${stdSkill.Name}`;
              skillLV.string = `${stdSkill.Level}`;
              name.color = new Color().fromHEX(skill_quality_color[stdSkill.RareLevel]);
              let iconUrl = path.join(folder_skill, stdSkill.Icon.toString(), "spriteFrame");
              ResMgr.LoadResAbSub(iconUrl, SpriteFrame, res => {
                icon.spriteFrame = res;
              });
              let qualityUrl = path.join(folder_quality, "p_skill_bg_" + stdSkill.RareLevel.toString(), "spriteFrame");
              ResMgr.LoadResAbSub(qualityUrl, SpriteFrame, res => {
                bg.spriteFrame = res;
              });
            }
          }
        }

        onShow() {}

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ee9a78ef463fc9095e9184d6d79f0e6e56b6817.js.map