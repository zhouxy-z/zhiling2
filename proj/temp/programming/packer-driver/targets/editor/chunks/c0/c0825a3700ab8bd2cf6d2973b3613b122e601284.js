System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MsgTypeRet, CfgMgr, EventMgr, Evt_Compose, Evt_GetReward, Evt_Item_Change, Session, ItemUtil, RewardTips, ShowHeroPanel, HomeUI, PlayerData, BagModule, _crd;

  function _reportPossibleCrUseOfMsgTypeRet(extras) {
    _reporterNs.report("MsgTypeRet", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Compose(extras) {
    _reporterNs.report("Evt_Compose", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_GetReward(extras) {
    _reporterNs.report("Evt_GetReward", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowHeroPanel(extras) {
    _reporterNs.report("ShowHeroPanel", "../common/ShowHeroPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHomeUI(extras) {
    _reporterNs.report("HomeUI", "../home/panel/HomeUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataRole(extras) {
    _reporterNs.report("SPlayerDataRole", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataSkill(extras) {
    _reporterNs.report("SPlayerDataSkill", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  _export("BagModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MsgTypeRet = _unresolved_2.MsgTypeRet;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_Compose = _unresolved_4.Evt_Compose;
      Evt_GetReward = _unresolved_4.Evt_GetReward;
      Evt_Item_Change = _unresolved_4.Evt_Item_Change;
    }, function (_unresolved_5) {
      Session = _unresolved_5.Session;
    }, function (_unresolved_6) {
      ItemUtil = _unresolved_6.ItemUtil;
    }, function (_unresolved_7) {
      RewardTips = _unresolved_7.RewardTips;
    }, function (_unresolved_8) {
      ShowHeroPanel = _unresolved_8.ShowHeroPanel;
    }, function (_unresolved_9) {
      HomeUI = _unresolved_9.HomeUI;
    }, function (_unresolved_10) {
      PlayerData = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94dfaD2O7tEArJl7m2rEFDc", "BagModule", undefined);

      _export("BagModule", BagModule = class BagModule {
        constructor() {
          this.itemChangeOff = false;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).ItemChangePush, this.onItemChange, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).SynthesizeRoleRet, this.onMergeItem, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).OpenBoxRet, this.getOpenBoxReward, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).UseItemRet, this.useItemRet, this);
        }

        onItemChange(data) {
          for (let i = 0; i < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).items.length; i++) {
            let item = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).items[i];

            if (item.id == data.id) {
              let old = item.count;

              if (data.count <= 0) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).items.splice(i, 1);
              } else {
                item.count = data.count;
              }

              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                error: Error()
              }), Evt_Item_Change) : Evt_Item_Change);
              return;
            }
          }

          (_crd && HomeUI === void 0 ? (_reportPossibleCrUseOfHomeUI({
            error: Error()
          }), HomeUI) : HomeUI).Flush();
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).items.push({
            id: data.id,
            count: data.count,
            isNew: true
          });
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change);
        }

        onMergeItem(data) {
          (_crd && ShowHeroPanel === void 0 ? (_reportPossibleCrUseOfShowHeroPanel({
            error: Error()
          }), ShowHeroPanel) : ShowHeroPanel).Show(data.role);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).AddRole(data.role);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Compose === void 0 ? (_reportPossibleCrUseOfEvt_Compose({
            error: Error()
          }), Evt_Compose) : Evt_Compose, data);
        }

        getOpenBoxReward(data) {
          if (data) {
            let reward_data = [];
            let maps = {};
            let count = data.reward_thing_count.length;

            for (let index = 0; index < count; index++) {
              let awardList;
              let type = data.reward_thing_type[index];
              let id = data.reward_thing_id[index];

              if (maps[type + "_" + id]) {
                (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                  error: Error()
                }), ItemUtil) : ItemUtil).MergeThings(maps[type + "_" + id], data.reward_thing_count[index] || 0);
                continue;
              } else if (type == 5) {
                let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetRewardRoleById(id); //添加被动技能

                let passive_skills = [];
                let cfg_role_type = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetRole()[cfg.RoleType];

                if (cfg_role_type && cfg_role_type.PassiveGife) {
                  let passive_skill_data1 = {
                    skill_id: cfg_role_type.PassiveGife,
                    level: 1
                  };
                  passive_skills.push(passive_skill_data1);
                }

                if (cfg_role_type && cfg_role_type.PassiveJob) {
                  let passive_skill_data2 = {
                    skill_id: cfg_role_type.PassiveJob,
                    level: 1
                  };
                  passive_skills.push(passive_skill_data2);
                }

                let cfg_reward_role = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetRewardRoleById(cfg.RoleType);

                if (cfg_reward_role && cfg_reward_role.PassiveId) {
                  let num = cfg_reward_role.PassiveId.length;

                  for (let index = 0; index < num; index++) {
                    const element = cfg_reward_role.PassiveId[index];
                    let passive_skill_data3 = {
                      skill_id: element,
                      level: 1
                    };
                    passive_skills.push(passive_skill_data3);
                  }
                }

                awardList = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                  error: Error()
                }), ItemUtil) : ItemUtil).CreateThing(type, cfg.RoleType, data.reward_thing_count[index]);
                awardList.role = {
                  id: "",
                  type: cfg.RoleType,
                  level: cfg.RoleLevel,
                  experience: 0,
                  soldier_num: 0,
                  active_skills: [],
                  passive_skills: passive_skills,
                  is_in_building: false,
                  building_id: 0,
                  battle_power: 0,
                  quality: cfg.RoleQuality,
                  skills: [],
                  is_assisting: true,
                  is_in_attack_lineup: false,
                  is_in_defense_lineup: false,
                  trade_cd: 0
                };
              } else {
                awardList = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
                  error: Error()
                }), ItemUtil) : ItemUtil).CreateThing(type, id, data.reward_thing_count[index]);
              }

              maps[type + "_" + id] = awardList;
              reward_data.push(awardList);
            } //获取宝箱特效


            let spinetype = 1;

            if (data.item_id) {
              spinetype = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(data.item_id).SpecialDisplay;
            }

            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(reward_data, true, null, spinetype);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_GetReward === void 0 ? (_reportPossibleCrUseOfEvt_GetReward({
              error: Error()
            }), Evt_GetReward) : Evt_GetReward, data);
          }
        }

        useItemRet(data) {
          console.log("useItemRet", data);
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.item_id);

          if (cfg.Items == 37 || cfg.Items == 38 || cfg.Items == 39 || cfg.Items == 40) {
            if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).LootPlayerData.shield_end_time < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetServerTime() + cfg.ItemEffect1) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).LootPlayerData.shield_end_time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetServerTime() + cfg.ItemEffect1;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0825a3700ab8bd2cf6d2973b3613b122e601284.js.map