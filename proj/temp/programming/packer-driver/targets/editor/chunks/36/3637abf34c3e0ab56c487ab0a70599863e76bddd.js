System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MsgTypeRet, CfgMgr, EventMgr, Evt_ConfigData_Update, Evt_FightChange, Evt_Passive_Skill_Update, Evt_PlayerBaseInfoChange, Evt_Role_Upgrade, SyncGameData, Session, BeforeGameUtils, Second, GameSet, MsgPanel, RewardTips, ShowHeroPanel, CardType, Tips, RoleTuPoResultPanel, SettingPasswordPanel, SettingPasswordSuccessPanel, UserInfoPanel, PlayerData, PlayerModule, _crd, ChangeBaseInfoErrorCodeType;

  function _reportPossibleCrUseOfMsgTypeRet(extras) {
    _reporterNs.report("MsgTypeRet", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdRoleLevel(extras) {
    _reporterNs.report("StdRoleLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ConfigData_Update(extras) {
    _reporterNs.report("Evt_ConfigData_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_FightChange(extras) {
    _reporterNs.report("Evt_FightChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Passive_Skill_Update(extras) {
    _reporterNs.report("Evt_Passive_Skill_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_PlayerBaseInfoChange(extras) {
    _reporterNs.report("Evt_PlayerBaseInfoChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Role_Upgrade(extras) {
    _reporterNs.report("Evt_Role_Upgrade", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSyncGameData(extras) {
    _reporterNs.report("SyncGameData", "../../net/MsgProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "../../utils/BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowHeroPanel(extras) {
    _reporterNs.report("ShowHeroPanel", "../common/ShowHeroPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../home/panel/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleTuPoResultPanel(extras) {
    _reporterNs.report("RoleTuPoResultPanel", "../role/RoleTuPoResultPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingPasswordPanel(extras) {
    _reporterNs.report("SettingPasswordPanel", "../setting/SettingPasswordPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingPasswordSuccessPanel(extras) {
    _reporterNs.report("SettingPasswordSuccessPanel", "../setting/SettingPasswordSuccessPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfoPanel(extras) {
    _reporterNs.report("UserInfoPanel", "../userInfo/UserInfoPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataItem(extras) {
    _reporterNs.report("SPlayerDataItem", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataRole(extras) {
    _reporterNs.report("SPlayerDataRole", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerViewInfo(extras) {
    _reporterNs.report("SPlayerViewInfo", "./PlayerStruct", _context.meta, extras);
  }

  _export("PlayerModule", void 0);

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
      Evt_ConfigData_Update = _unresolved_4.Evt_ConfigData_Update;
      Evt_FightChange = _unresolved_4.Evt_FightChange;
      Evt_Passive_Skill_Update = _unresolved_4.Evt_Passive_Skill_Update;
      Evt_PlayerBaseInfoChange = _unresolved_4.Evt_PlayerBaseInfoChange;
      Evt_Role_Upgrade = _unresolved_4.Evt_Role_Upgrade;
    }, function (_unresolved_5) {
      SyncGameData = _unresolved_5.SyncGameData;
    }, function (_unresolved_6) {
      Session = _unresolved_6.Session;
    }, function (_unresolved_7) {
      BeforeGameUtils = _unresolved_7.BeforeGameUtils;
    }, function (_unresolved_8) {
      Second = _unresolved_8.Second;
    }, function (_unresolved_9) {
      GameSet = _unresolved_9.GameSet;
    }, function (_unresolved_10) {
      MsgPanel = _unresolved_10.MsgPanel;
    }, function (_unresolved_11) {
      RewardTips = _unresolved_11.RewardTips;
    }, function (_unresolved_12) {
      ShowHeroPanel = _unresolved_12.ShowHeroPanel;
    }, function (_unresolved_13) {
      CardType = _unresolved_13.CardType;
    }, function (_unresolved_14) {
      Tips = _unresolved_14.Tips;
    }, function (_unresolved_15) {
      RoleTuPoResultPanel = _unresolved_15.RoleTuPoResultPanel;
    }, function (_unresolved_16) {
      SettingPasswordPanel = _unresolved_16.SettingPasswordPanel;
    }, function (_unresolved_17) {
      SettingPasswordSuccessPanel = _unresolved_17.SettingPasswordSuccessPanel;
    }, function (_unresolved_18) {
      UserInfoPanel = _unresolved_18.UserInfoPanel;
    }, function (_unresolved_19) {
      PlayerData = _unresolved_19.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "871436lQZtFI7dHnP7P8t+Y", "PlayerModule", undefined); // ItemChangePush


      /**修改玩家基础信息错误码类型*/
      ChangeBaseInfoErrorCodeType = /*#__PURE__*/function (ChangeBaseInfoErrorCodeType) {
        ChangeBaseInfoErrorCodeType[ChangeBaseInfoErrorCodeType["ErrorInvalidNameLength"] = 100] = "ErrorInvalidNameLength";
        ChangeBaseInfoErrorCodeType[ChangeBaseInfoErrorCodeType["ErrorInvalidContactWechat"] = 101] = "ErrorInvalidContactWechat";
        ChangeBaseInfoErrorCodeType[ChangeBaseInfoErrorCodeType["ErrorInvalidContactQQ"] = 102] = "ErrorInvalidContactQQ";
        ChangeBaseInfoErrorCodeType[ChangeBaseInfoErrorCodeType["ErrorNameExists"] = 103] = "ErrorNameExists";
        ChangeBaseInfoErrorCodeType[ChangeBaseInfoErrorCodeType["ErrorNameSuspect"] = 104] = "ErrorNameSuspect";
        ChangeBaseInfoErrorCodeType[ChangeBaseInfoErrorCodeType["ErrorContactWechatSuspect"] = 105] = "ErrorContactWechatSuspect";
        return ChangeBaseInfoErrorCodeType;
      }(ChangeBaseInfoErrorCodeType || {});

      _export("PlayerModule", PlayerModule = class PlayerModule {
        constructor() {
          this.tick = 0;
          this.changeBaseInfoErrorStr = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj(ChangeBaseInfoErrorCodeType.ErrorInvalidNameLength, "名字长度不合法", ChangeBaseInfoErrorCodeType.ErrorInvalidContactWechat, "微信号码不合法", ChangeBaseInfoErrorCodeType.ErrorInvalidContactQQ, "QQ号码不合法", ChangeBaseInfoErrorCodeType.ErrorNameExists, "名字已经存在", ChangeBaseInfoErrorCodeType.ErrorNameSuspect, "名字包含敏感词", ChangeBaseInfoErrorCodeType.ErrorContactWechatSuspect, "微信号包含敏感词");
          this.fightChangeOff = false;
          this.timeNumber = null;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).TotalBattlePowerChangePush, this.onPlayerPower, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).UpgradeRoleRet, this.onUpgradeRoleRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).SetConfigDataRet, this.onUpdateRoleCfg, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).UpgradePassiveSkillRet, this.onUpgradePassiveSkill, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).GetPlayerViewInfoRet, this.onGetPlayerViewInfoRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).ChangeNameRet, this.onChangeNameRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).ChangeContactQQRet, this.onChangeContactQQRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).ChangeContactWechatRet, this.onChangeContactWechatRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).ResetRoleRet, this.onResetRoleRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).RoleTypeMaxSumBattlePowerChangePush, this.onRoleTypeMaxSumBattlePowerChange, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).ResetPasswordSendRet, this.onResetPasswordSendRet, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).ResetPasswordValidRet, this.onResetPasswordValidRet, this);
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).RegisterUpdate(this.update, this);
        }

        async onPlayerPower(data) {
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.battle_power = data.total_battle_power;
          if (this.fightChangeOff) return;
          this.fightChangeOff = true;
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0.1);
          this.fightChangeOff = false;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_FightChange === void 0 ? (_reportPossibleCrUseOfEvt_FightChange({
            error: Error()
          }), Evt_FightChange) : Evt_FightChange);
        }

        onRoleTypeMaxSumBattlePowerChange(data) {
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.role_type_max_sum_battle_power = data.role_type_max_sum_battle_power;
        }

        onUpgradeRoleRet(data) {
          let old = JSON.parse(JSON.stringify((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetRoleById(data.role.id)));
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).AddRole(data.role);
          let isUpgrade = false; //升级或突破

          if (data.role.level > old.level) {
            let stdLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRoleLevel(old.type, old.level); //突破

            if (stdLv && stdLv.BreakItem && stdLv.BreakItem.length > 0) {
              (_crd && RoleTuPoResultPanel === void 0 ? (_reportPossibleCrUseOfRoleTuPoResultPanel({
                error: Error()
              }), RoleTuPoResultPanel) : RoleTuPoResultPanel).Show(data.role.id, true);
            } else {
              isUpgrade = true;
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Role_Upgrade === void 0 ? (_reportPossibleCrUseOfEvt_Role_Upgrade({
            error: Error()
          }), Evt_Role_Upgrade) : Evt_Role_Upgrade, data.role.id, isUpgrade);
        }

        onUpdateRoleCfg(data) {
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.config_data = data.config_data;
          if ((_crd && SyncGameData === void 0 ? (_reportPossibleCrUseOfSyncGameData({
            error: Error()
          }), SyncGameData) : SyncGameData)(data.config_data)) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_ConfigData_Update === void 0 ? (_reportPossibleCrUseOfEvt_ConfigData_Update({
            error: Error()
          }), Evt_ConfigData_Update) : Evt_ConfigData_Update);
        }

        onUpgradePassiveSkill(data) {
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).AddRole(data.role);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Passive_Skill_Update === void 0 ? (_reportPossibleCrUseOfEvt_Passive_Skill_Update({
            error: Error()
          }), Evt_Passive_Skill_Update) : Evt_Passive_Skill_Update, data.role.id);
        }

        onGetPlayerViewInfoRet(data) {
          if (data.code == 0) {
            (_crd && UserInfoPanel === void 0 ? (_reportPossibleCrUseOfUserInfoPanel({
              error: Error()
            }), UserInfoPanel) : UserInfoPanel).Show(data.player_view_info);
          }
        }

        update(dt) {
          this.tick += dt;

          if (this.tick >= 1) {
            this.tick = 0;
            const timeMap = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CycleTimeMap;
            if (!timeMap) return;
            let now = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).serverTime;

            for (let k in timeMap) {
              let t = Number(k);
              let start = timeMap[k];

              if (now - start >= t) {
                timeMap[k] = now; // 此处运行更新数据,t表示时间间隔(秒)
              }
            }
          }
        }

        onChangeNameRet(data) {
          if (data.code) {
            this.showChangeInfoErrorCode(data.code);
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.name = data.name;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.name_changed_times = data.name_changed_times;
          this.onChangeBaseInfo();
        }

        onChangeContactQQRet(data) {
          if (data.code) {
            this.showChangeInfoErrorCode(data.code);
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.contact_qq = data.contact_qq;
          this.onChangeBaseInfo();
        }

        onChangeContactWechatRet(data) {
          if (data.code) {
            this.showChangeInfoErrorCode(data.code);
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.contact_wechat = data.contact_wechat;
          this.onChangeBaseInfo();
        }

        onResetRoleRet(data) {
          if (!data.role) return;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).AddRole(data.role);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Role_Upgrade === void 0 ? (_reportPossibleCrUseOfEvt_Role_Upgrade({
            error: Error()
          }), Evt_Role_Upgrade) : Evt_Role_Upgrade, data.role.id);
          (_crd && ShowHeroPanel === void 0 ? (_reportPossibleCrUseOfShowHeroPanel({
            error: Error()
          }), ShowHeroPanel) : ShowHeroPanel).Show(data.role, null, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).ResetRoleLv, () => {
            if (data.return_items && data.return_items.length) {
              (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
                error: Error()
              }), RewardTips) : RewardTips).Show(data.return_items);
            }
          });
        }

        onResetPasswordSendRet(data) {
          if (data.code > 0) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(data.msg);
            return;
          }

          (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("验证码已下发");
        }

        onResetPasswordValidRet(data) {
          if (data.code > 0) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(data.msg);
            return;
          }

          (_crd && SettingPasswordSuccessPanel === void 0 ? (_reportPossibleCrUseOfSettingPasswordSuccessPanel({
            error: Error()
          }), SettingPasswordSuccessPanel) : SettingPasswordSuccessPanel).Show();
          (_crd && SettingPasswordPanel === void 0 ? (_reportPossibleCrUseOfSettingPasswordPanel({
            error: Error()
          }), SettingPasswordPanel) : SettingPasswordPanel).Hide();
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.is_password = true;
        }

        showChangeInfoErrorCode(code) {
          let errorStr = this.changeBaseInfoErrorStr[code];

          if (errorStr) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(errorStr);
          }
        }

        onChangeBaseInfo() {
          this.clearTime();
          this.timeNumber = setTimeout(() => {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show(`修改成功！`);
            this.clearTime();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_PlayerBaseInfoChange === void 0 ? (_reportPossibleCrUseOfEvt_PlayerBaseInfoChange({
              error: Error()
            }), Evt_PlayerBaseInfoChange) : Evt_PlayerBaseInfoChange);
          }, 200);
        }

        clearTime() {
          if (this.timeNumber) {
            clearTimeout(this.timeNumber);
            this.timeNumber = null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3637abf34c3e0ab56c487ab0a70599863e76bddd.js.map