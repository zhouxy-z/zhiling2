System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "cc/env", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Attr, AttrFight, CfgMgr, FishBombRoundState, FishRoundState, FishTradeRoundState, GuildPostType, ItemSubType, ItemType, OneOffRedPointId, ResourceType, ShopGroupId, ShopType, StdSysId, ThingItemId, ThingType, maxx, ReplaceStr, BuildingType, DateUtils, EventMgr, Evt_ChannelMsgUpdate, Evt_FishHeroUpdate, Evt_Item_Change, Evt_LoginRedPointUpdate, Evt_Role_Del, BeforeGameUtils, game, js, LocalStorage, GameSet, DEV, DL, BuildingState, GuildEventType, RoleStateType, STaskState, PlayerData, _crd;

  /**
   * 计算战力
   * @param roleType 
   * @param level 
   * @returns 
   */
  function CountPower(roleType, level, role) {
    // console.log("CountPower*******************************", roleType, level);
    if (role && role.battle_power) return role.battle_power;
    var power = 0;
    var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetRole()[roleType];

    for (var type of std.Attr) {
      power = power + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
        error: Error()
      }), CfgMgr) : CfgMgr).GetAttr()[type].Power * (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
        error: Error()
      }), DL) : DL).GetAttrValue(type, std);
    }

    for (var _type of std.AttrFight) {
      power = power + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
        error: Error()
      }), CfgMgr) : CfgMgr).GetFightAttr()[_type].Power * (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
        error: Error()
      }), DL) : DL).GetFightAttrValue(_type, std);
    }

    var stdlv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetRoleLevel(roleType, level);

    if (stdlv) {
      for (var _type2 of stdlv.Attr) {
        power = power + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
          error: Error()
        }), CfgMgr) : CfgMgr).GetAttr()[_type2].Power * (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
          error: Error()
        }), DL) : DL).GetAttrValue(_type2, stdlv);
      }

      for (var _type3 of stdlv.AttrFight) {
        power = power + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
          error: Error()
        }), CfgMgr) : CfgMgr).GetFightAttr()[_type3].Power * (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
          error: Error()
        }), DL) : DL).GetFightAttrValue(_type3, stdlv);
      }
    }

    return Math.floor(power);
  }
  /**
   * 角色计算战力（纯卡计算/计算角色本身）
   * @param roleType 角色类型 
   * @param roleQual 角色品质
   * @param roleLv 角色等级
   * @param role 角色数据
   * @returns 
   */


  function RoleCardPower(roleType, roleQual, roleLv, role) {
    if (roleQual === void 0) {
      roleQual = 1;
    }

    if (roleLv === void 0) {
      roleLv = 1;
    }

    if (role === void 0) {
      role = null;
    }

    var val = 0;

    var countPower = (attrList, valList, attrGroup) => {
      var count = 0;
      var attrType;
      var attrVal;

      for (var i = 0; i < attrList.length; i++) {
        attrType = attrList[i];
        attrVal = valList && i < valList.length ? valList[i] : 0;
        count += attrGroup[attrType].Power * attrVal;
      }

      return count;
    };

    var attrGroup = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetAttr();
    var fightAttrGroup = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetFightAttr(); //角色等级属性

    var stdlv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetRoleLevel(roleType, roleLv);

    if (stdlv) {
      if (stdlv.Attr && stdlv.Attr.length) {
        val += countPower(stdlv.Attr, stdlv.AttrValue, attrGroup);
      }

      if (stdlv.AttrFight && stdlv.AttrFight.length) {
        val += countPower(stdlv.AttrFight, stdlv.AttrFightValue, fightAttrGroup);
      }
    } //计算主动技能


    var countMainSkill = (skillId, skillLv) => {
      //主动技能属性计算
      var stdMainSkill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
        error: Error()
      }), CfgMgr) : CfgMgr).GetActiveSkill(skillId, skillLv);

      if (stdMainSkill) {
        if (stdMainSkill.Attr && stdMainSkill.Attr.length) {
          val += countPower(stdMainSkill.Attr, stdMainSkill.AttrValue, attrGroup);
        }

        if (stdMainSkill.AttrFight && stdMainSkill.AttrFight.length) {
          val += countPower(stdMainSkill.AttrFight, stdMainSkill.AttrFightValue, fightAttrGroup);
        }
      }
    }; //计算被动技能


    var countPassiveSkill = (skillId, skillLv) => {
      var passiveSkill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
        error: Error()
      }), CfgMgr) : CfgMgr).GetPassiveSkill(skillId, skillLv);

      if (passiveSkill) {
        if (passiveSkill.Attr && passiveSkill.Attr.length) {
          val += countPower(passiveSkill.Attr, passiveSkill.AttrValue, attrGroup);
        }

        if (passiveSkill.AttrFight && passiveSkill.AttrFight.length) {
          val += countPower(passiveSkill.AttrFight, passiveSkill.AttrFightValue, fightAttrGroup);
        }
      }
    }; //角色类型属性


    var stdRole = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetRole()[roleType];

    if (stdRole) {
      if (stdRole.Attr && stdRole.Attr.length) {
        val += countPower(stdRole.Attr, stdRole.AttrValue, attrGroup);
      }

      if (stdRole.AttrFight && stdRole.AttrFight.length) {
        val += countPower(stdRole.AttrFight, stdRole.AttrFightValue, fightAttrGroup);
      }

      if (role) {
        var skillLvIndex;
        var skillData;

        for (skillLvIndex = 0; skillLvIndex < role.active_skills.length; skillLvIndex++) {
          skillData = role.active_skills[skillLvIndex];
          countMainSkill(skillData.skill_id, skillData.level);
        }

        for (skillLvIndex = 0; skillLvIndex < role.passive_skills.length; skillLvIndex++) {
          skillData = role.passive_skills[skillLvIndex];
          countPassiveSkill(skillData.skill_id, skillData.level);
        }
      } else {
        var skillId;

        for (var n = 1;; n++) {
          skillId = stdRole["Skill" + n];
          if (skillId == undefined) break;
          countMainSkill(skillId, 1);
        }

        var passiveSkillIds = []; //被动技能初始天赋1

        if (stdRole.PassiveGife) {
          passiveSkillIds.push(stdRole.PassiveGife);
        } //被动技能职业天赋1


        if (stdRole.PassiveJob) {
          passiveSkillIds.push(stdRole.PassiveJob);
        }

        for (var passiveSkillId of passiveSkillIds) {
          countPassiveSkill(passiveSkillId, 1);
        }
      }
    } //角色品质属性


    var stdQuality = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetRoleQuality(roleType, roleQual);

    if (stdQuality) {
      if (stdQuality.Attr && stdQuality.Attr.length) {
        val += countPower(stdQuality.Attr, stdQuality.AttrValue, attrGroup);
      }

      if (stdQuality.AttrFight && stdQuality.AttrFight.length) {
        val += countPower(stdQuality.AttrFight, stdQuality.AttrFightValue, fightAttrGroup);
      }
    }

    return Math.floor(val);
  }
  /**
   * 计算战力
   * @param BuildingId 
   * @param level 
   * @returns 
   */


  function CountBuildPower(BuildingId, level) {
    var power = 0;
    var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
      error: Error()
    }), CfgMgr) : CfgMgr).GetBuildingLv(BuildingId, level);

    for (var type of std.Attr) {
      power = power + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
        error: Error()
      }), CfgMgr) : CfgMgr).GetAttr()[type].Power * (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
        error: Error()
      }), DL) : DL).GetAttrValue(type, std);
    }

    for (var _type4 of std.AttrFight) {
      power = power + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
        error: Error()
      }), CfgMgr) : CfgMgr).GetFightAttr()[_type4].Power * (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
        error: Error()
      }), DL) : DL).GetFightAttrValue(_type4, std);
    }

    return power;
  }
  /**兵种生产推送 */


  function _reportPossibleCrUseOfAttr(extras) {
    _reporterNs.report("Attr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttrFight(extras) {
    _reporterNs.report("AttrFight", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishBombRoundState(extras) {
    _reporterNs.report("FishBombRoundState", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishRoundState(extras) {
    _reporterNs.report("FishRoundState", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishTradeRoundState(extras) {
    _reporterNs.report("FishTradeRoundState", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuildPostType(extras) {
    _reporterNs.report("GuildPostType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemSubType(extras) {
    _reporterNs.report("ItemSubType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOneOffRedPointId(extras) {
    _reporterNs.report("OneOffRedPointId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceType(extras) {
    _reporterNs.report("ResourceType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopGroupId(extras) {
    _reporterNs.report("ShopGroupId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopType(extras) {
    _reporterNs.report("ShopType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdAdvister(extras) {
    _reporterNs.report("StdAdvister", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdAttr(extras) {
    _reporterNs.report("StdAttr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityCard(extras) {
    _reporterNs.report("StdEquityCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityCardTab(extras) {
    _reporterNs.report("StdEquityCardTab", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityId(extras) {
    _reporterNs.report("StdEquityId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityList(extras) {
    _reporterNs.report("StdEquityList", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityListType(extras) {
    _reporterNs.report("StdEquityListType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdFishCommon(extras) {
    _reporterNs.report("StdFishCommon", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdFishEquipSoltType(extras) {
    _reporterNs.report("StdFishEquipSoltType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdFishRod(extras) {
    _reporterNs.report("StdFishRod", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdFishTradeCommon(extras) {
    _reporterNs.report("StdFishTradeCommon", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdGuildEquity(extras) {
    _reporterNs.report("StdGuildEquity", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdGuildEvent(extras) {
    _reporterNs.report("StdGuildEvent", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdGuildRole(extras) {
    _reporterNs.report("StdGuildRole", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdGuildType(extras) {
    _reporterNs.report("StdGuildType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdLootRank(extras) {
    _reporterNs.report("StdLootRank", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMerge(extras) {
    _reporterNs.report("StdMerge", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMessag(extras) {
    _reporterNs.report("StdMessag", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdProduction(extras) {
    _reporterNs.report("StdProduction", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdRole(extras) {
    _reporterNs.report("StdRole", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdRoleLevel(extras) {
    _reporterNs.report("StdRoleLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopGroup(extras) {
    _reporterNs.report("StdShopGroup", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdSysId(extras) {
    _reporterNs.report("StdSysId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdSystemOpen(extras) {
    _reporterNs.report("StdSystemOpen", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdWorldBossComm(extras) {
    _reporterNs.report("StdWorldBossComm", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdWorldBossLv(extras) {
    _reporterNs.report("StdWorldBossLv", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingItemId(extras) {
    _reporterNs.report("ThingItemId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingType(extras) {
    _reporterNs.report("ThingType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmaxx(extras) {
    _reporterNs.report("maxx", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplaceStr(extras) {
    _reporterNs.report("ReplaceStr", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionSub(extras) {
    _reporterNs.report("ConditionSub", "../common/AttrSub", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingType(extras) {
    _reporterNs.report("BuildingType", "../home/HomeStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSLastSeasonInfo(extras) {
    _reporterNs.report("SLastSeasonInfo", "../home/HomeStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ChannelMsgUpdate(extras) {
    _reporterNs.report("Evt_ChannelMsgUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_FishHeroUpdate(extras) {
    _reporterNs.report("Evt_FishHeroUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_LoginRedPointUpdate(extras) {
    _reporterNs.report("Evt_LoginRedPointUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Role_Del(extras) {
    _reporterNs.report("Evt_Role_Del", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "../../utils/BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDL(extras) {
    _reporterNs.report("DL", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingState(extras) {
    _reporterNs.report("BuildingState", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightState(extras) {
    _reporterNs.report("FightState", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuildEventType(extras) {
    _reporterNs.report("GuildEventType", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNoticeData(extras) {
    _reporterNs.report("NoticeData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleStateType(extras) {
    _reporterNs.report("RoleStateType", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSAdvister(extras) {
    _reporterNs.report("SAdvister", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSBattleRole(extras) {
    _reporterNs.report("SBattleRole", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSBenefit(extras) {
    _reporterNs.report("SBenefit", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSChannelMsgData(extras) {
    _reporterNs.report("SChannelMsgData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCrossOrderData(extras) {
    _reporterNs.report("SCrossOrderData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCurrentSeasonInfo(extras) {
    _reporterNs.report("SCurrentSeasonInfo", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingBombFishPoolData(extras) {
    _reporterNs.report("SFishingBombFishPoolData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingBombStageInfo(extras) {
    _reporterNs.report("SFishingBombStageInfo", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingBombStateData(extras) {
    _reporterNs.report("SFishingBombStateData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingHeroData(extras) {
    _reporterNs.report("SFishingHeroData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingHeroPartData(extras) {
    _reporterNs.report("SFishingHeroPartData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingHeroSkillEffect(extras) {
    _reporterNs.report("SFishingHeroSkillEffect", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingItem(extras) {
    _reporterNs.report("SFishingItem", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingLakeData(extras) {
    _reporterNs.report("SFishingLakeData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingMatchInfoRet(extras) {
    _reporterNs.report("SFishingMatchInfoRet", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingRoundInfo(extras) {
    _reporterNs.report("SFishingRoundInfo", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingShopGetContentRet(extras) {
    _reporterNs.report("SFishingShopGetContentRet", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingStateData(extras) {
    _reporterNs.report("SFishingStateData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingTradeRoundInfo(extras) {
    _reporterNs.report("SFishingTradeRoundInfo", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingTradeShipData(extras) {
    _reporterNs.report("SFishingTradeShipData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFishingTradeStateData(extras) {
    _reporterNs.report("SFishingTradeStateData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGuild(extras) {
    _reporterNs.report("SGuild", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGuildApplication(extras) {
    _reporterNs.report("SGuildApplication", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGuildEvent(extras) {
    _reporterNs.report("SGuildEvent", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGuildMember(extras) {
    _reporterNs.report("SGuildMember", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSLootSeasonApplyInfo(extras) {
    _reporterNs.report("SLootSeasonApplyInfo", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSLuckyContent(extras) {
    _reporterNs.report("SLuckyContent", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMatchPlayerData(extras) {
    _reporterNs.report("SMatchPlayerData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOneOffRedPoint(extras) {
    _reporterNs.report("SOneOffRedPoint", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOonViewData(extras) {
    _reporterNs.report("SOonViewData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOrderData(extras) {
    _reporterNs.report("SOrderData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerData(extras) {
    _reporterNs.report("SPlayerData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataBuilding(extras) {
    _reporterNs.report("SPlayerDataBuilding", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataItem(extras) {
    _reporterNs.report("SPlayerDataItem", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataItemProduction(extras) {
    _reporterNs.report("SPlayerDataItemProduction", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataRole(extras) {
    _reporterNs.report("SPlayerDataRole", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataSkill(extras) {
    _reporterNs.report("SPlayerDataSkill", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataSoldierProduction(extras) {
    _reporterNs.report("SPlayerDataSoldierProduction", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerMailData(extras) {
    _reporterNs.report("SPlayerMailData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPvpShopGetContentRet(extras) {
    _reporterNs.report("SPvpShopGetContentRet", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSShopContent(extras) {
    _reporterNs.report("SShopContent", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSShopIndexContent(extras) {
    _reporterNs.report("SShopIndexContent", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskState(extras) {
    _reporterNs.report("STaskState", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSWorldBossData(extras) {
    _reporterNs.report("SWorldBossData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSWorldBossRankData(extras) {
    _reporterNs.report("SWorldBossRankData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSWorldBossRankItemData(extras) {
    _reporterNs.report("SWorldBossRankItemData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSWorldBossStateData(extras) {
    _reporterNs.report("SWorldBossStateData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsType(extras) {
    _reporterNs.report("TipsType", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTodayNoTipsId(extras) {
    _reporterNs.report("TodayNoTipsId", "./PlayerStruct", _context.meta, extras);
  }

  _export({
    CountPower: CountPower,
    RoleCardPower: RoleCardPower,
    CountBuildPower: CountBuildPower
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      js = _cc.js;
    }, function (_unresolved_2) {
      Attr = _unresolved_2.Attr;
      AttrFight = _unresolved_2.AttrFight;
      CfgMgr = _unresolved_2.CfgMgr;
      FishBombRoundState = _unresolved_2.FishBombRoundState;
      FishRoundState = _unresolved_2.FishRoundState;
      FishTradeRoundState = _unresolved_2.FishTradeRoundState;
      GuildPostType = _unresolved_2.GuildPostType;
      ItemSubType = _unresolved_2.ItemSubType;
      ItemType = _unresolved_2.ItemType;
      OneOffRedPointId = _unresolved_2.OneOffRedPointId;
      ResourceType = _unresolved_2.ResourceType;
      ShopGroupId = _unresolved_2.ShopGroupId;
      ShopType = _unresolved_2.ShopType;
      StdSysId = _unresolved_2.StdSysId;
      ThingItemId = _unresolved_2.ThingItemId;
      ThingType = _unresolved_2.ThingType;
    }, function (_unresolved_3) {
      maxx = _unresolved_3.maxx;
      ReplaceStr = _unresolved_3.ReplaceStr;
    }, function (_unresolved_4) {
      BuildingType = _unresolved_4.BuildingType;
    }, function (_unresolved_5) {
      DateUtils = _unresolved_5.DateUtils;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
      Evt_ChannelMsgUpdate = _unresolved_6.Evt_ChannelMsgUpdate;
      Evt_FishHeroUpdate = _unresolved_6.Evt_FishHeroUpdate;
      Evt_Item_Change = _unresolved_6.Evt_Item_Change;
      Evt_LoginRedPointUpdate = _unresolved_6.Evt_LoginRedPointUpdate;
      Evt_Role_Del = _unresolved_6.Evt_Role_Del;
    }, function (_unresolved_7) {
      BeforeGameUtils = _unresolved_7.BeforeGameUtils;
    }, function (_unresolved_8) {
      LocalStorage = _unresolved_8.default;
    }, function (_unresolved_9) {
      GameSet = _unresolved_9.GameSet;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }, function (_unresolved_10) {
      DL = _unresolved_10.DL;
    }, function (_unresolved_11) {
      BuildingState = _unresolved_11.BuildingState;
      GuildEventType = _unresolved_11.GuildEventType;
      RoleStateType = _unresolved_11.RoleStateType;
      STaskState = _unresolved_11.STaskState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24899fGY9JIja6xCH+6rjlO", "PlayerData", undefined);

      __checkObsolete__(['game', 'js']);

      PlayerData = class PlayerData {
        constructor() {
          this.init();
        }

        init() {}

        static SyncServerTime(time) {
          if (!this.serverTime) {
            // 暂时以天为循环
            PlayerData.CycleTimeMap[24 * 3600] = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).GetTodaySecond();
          }

          this.serverTime = time;
          var localTimestamp = Date.now() / 1000;
          this.server_offset = this.serverTime - localTimestamp; // LocalStorage.SetNumber('timeDifference', this.server_offset);
        }
        /**
         * 获取服务器时间
         * @returns 
         */


        static GetServerTime() {
          // 获取保存的时间偏差
          // const timeDifference = LocalStorage.GetNumber('timeDifference') || 0;
          // 计算当前服务器时间
          var serverTime = Date.now() / 1000 + this.server_offset;
          return serverTime;
        }

        static GetServerDate() {
          this._serverDate.setTime(this.GetServerTime() * 1000);

          return this._serverDate;
        }
        /**
         * 倒计时 同步服务器时间
         * @param timestamp 秒时间戳
         */


        static countDown(timestamp) {
          // 计算剩余时间
          var leftTime = timestamp - PlayerData.GetServerTime();
          if (leftTime <= 0) return "00:00:00"; // 计算剩余时间的各个单位

          var leftH = Math.floor(leftTime / 60 / 60);
          var leftM = Math.floor(leftTime / 60 % 60);
          var leftS = Math.floor(leftTime % 60); // 将剩余时间拼接成字符串，如'12:34:56'，并返回

          return leftH.toString()['padStart'](2, '0') + ":" + leftM.toString()['padStart'](2, '0') + ":" + leftS.toString()['padStart'](2, '0');
        }
        /**获取当前时间到未来某一时间的倒计时 */


        static countDown2(timestamp) {
          var leftTime = timestamp - PlayerData.GetServerTime(); // 计算剩余时间的各个单位

          var leftD = Math.floor(leftTime / 60 / 60 / 24);
          var leftH = Math.floor(leftTime / 60 / 60 % 24);
          var leftM = Math.floor(leftTime / 60 % 60);
          var leftS = Math.floor(leftTime % 60);
          return {
            d: leftD,
            h: leftH,
            m: leftM,
            s: leftS
          };
        }
        /**
         * 获取当天凌晨时间戳(单位秒)
         * @param timeZone 时区 默认北京时间
         * @returns 
         */


        static WeeHoursTime(timeZone) {
          if (timeZone === void 0) {
            timeZone = 8;
          }

          var serverTime = PlayerData.GetServerTime();
          var offsetTime = serverTime % 86400; // + (timeZone * 3600);

          var curTime = serverTime - offsetTime; //let dates:string[] = DateUtils.TimestampToDate(curTime * 1000, true);
          //console.log(`凌晨时间戳----------------->${dates[0]}-${dates[1]}-${dates[2]}  ${dates[3]}:${dates[4]}:${dates[5]}`);

          return curTime;
        }
        /**
         * 初始玩家数据
         * @param playerInfo 
         */


        static SetPlayerInfo(playerInfo) {
          playerInfo.item_productions = playerInfo.item_productions || [];
          playerInfo.soldiers = playerInfo.soldiers || [];
          playerInfo.soldier_productions = playerInfo.soldier_productions || [];
          playerInfo.roles = playerInfo.roles || [];
          playerInfo.defense_lineup = playerInfo.defense_lineup || [];
          playerInfo.attack_lineup = playerInfo.attack_lineup || [];
          playerInfo.boss_lineup = playerInfo.boss_lineup || [];
          playerInfo.config_data = playerInfo.config_data || {};
          playerInfo.tasks = playerInfo.tasks || {};
          playerInfo.items = playerInfo.items || [];
          playerInfo.contact_wechat = playerInfo.contact_wechat || "";
          playerInfo.contact_qq = playerInfo.contact_qq || "";
          playerInfo.name_changed_times = playerInfo.name_changed_times || 0;
          /*  if (!this.playerInfo) {
               this.playerInfo = playerInfo;
               
           }  */

          this.playerInfo = playerInfo;
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_1)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_1,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_2)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_2,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_3)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_3,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_6)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_6,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_7)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_7,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_8)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_8,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_9)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_9,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_74)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_74,
            count: 0
          });
          if (!this.GetItem((_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
            error: Error()
          }), ThingItemId) : ThingItemId).ItemId_202)) playerInfo.items.push({
            id: (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId).ItemId_202,
            count: 0
          });

          for (var role of playerInfo.roles) {
            role.battle_power = CountPower(role.type, role.level, role);
          }

          this.UpdateSpecialItems();
        }
        /**
         * 更新特殊道具
         */


        static UpdateSpecialItems(eimt) {
          if (eimt === void 0) {
            eimt = true;
          }

          var items = PlayerData.items;
          var info = this.playerInfo;

          for (var i = 0; i < PlayerData.items.length; i++) {
            var item = PlayerData.items[i];

            switch (item.id) {
              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_1:
                if (item.count != info.currency) {
                  item.count = Math.max(0, info.currency);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_2:
                if (item.count != info.currency2) {
                  item.count = Math.max(0, info.currency2);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_3:
                if (item.count != info.currency3) {
                  item.count = Math.max(0, info.currency3);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_6:
                if (item.count != info.resources.wood) {
                  item.count = Math.max(0, info.resources.wood);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_7:
                if (item.count != info.resources.rock) {
                  item.count = Math.max(0, info.resources.rock);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_8:
                if (item.count != info.resources.water) {
                  item.count = Math.max(0, info.resources.water);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_9:
                if (item.count != info.resources.seed) {
                  item.count = Math.max(0, info.resources.seed);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_74:
                if (item.count != info.currency_74) {
                  item.count = Math.max(0, info.currency_74);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;

              case (_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
                error: Error()
              }), ThingItemId) : ThingItemId).ItemId_202:
                if (item.count != info.currency_77) {
                  item.count = Math.max(0, info.currency_77);
                  if (eimt) (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
                    error: Error()
                  }), Evt_Item_Change) : Evt_Item_Change);
                }

                break;
            }
          }
        } // 角色信息


        static get roleInfo() {
          return this.playerInfo;
        } // 资源数据


        static get resources() {
          return this.playerInfo.resources;
        } // 道具列表


        static get items() {
          return this.playerInfo.items;
        }

        static get pveData() {
          return this.playerInfo.pve_data;
        }
        /**playerIdKey */


        static get playerIdKey() {
          return "PlayerId_" + this.roleInfo.player_id;
        }
        /**
         * 根据道具类型获取道具列表
         * @param itemType 
         * @returns 
         */


        static GetitemByType(itemType) {
          var items = [];

          for (var item of this.playerInfo.items) {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(item.id);

            if (std && std.Itemtpye == itemType) {
              items.push(item);
            }
          }

          return items;
        }
        /**
         * 根据页签获取道具列表
         * @param subType 
         * @returns 
         */


        static GetitemBySubType(subType) {
          var items = [];

          for (var item of this.playerInfo.items) {
            if (item.count > 0) {
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(item.id);

              if (std && std.SubType == subType) {
                items.push(item);
              }
            }
          }

          return items;
        }
        /**获取展示任务 */


        static getActiveTask() {
          var stdTasks = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskType(3);

          for (var task of stdTasks) {
            //已经完成的主线
            if (task.ShowTask == 1) {
              if (PlayerData.roleInfo.tasks[task.TaskId] && PlayerData.roleInfo.tasks[task.TaskId].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
                error: Error()
              }), STaskState) : STaskState).unFinsh) {
                if (task.CompletionNum <= PlayerData.roleInfo.tasks[task.TaskId].v) return task;
              }
            }
          }

          var stdAllTasks = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTask();

          for (var _task of stdAllTasks) {
            //已经完成的任务
            if (_task.Show != 4 && _task.Show != 5) {
              if (PlayerData.roleInfo.tasks[_task.TaskId] && PlayerData.roleInfo.tasks[_task.TaskId].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
                error: Error()
              }), STaskState) : STaskState).unFinsh) {
                if (_task.CompletionNum <= PlayerData.roleInfo.tasks[_task.TaskId].v) return _task;
              }
            }
          }

          for (var _task2 of stdTasks) {
            //未完成主线
            if (_task2.ShowTask == 1) {
              if (PlayerData.roleInfo.tasks[_task2.TaskId] && PlayerData.roleInfo.tasks[_task2.TaskId].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
                error: Error()
              }), STaskState) : STaskState).unFinsh) {
                return _task2;
              }
            }
          }

          for (var _task3 of stdAllTasks) {
            //未完成任务
            if (_task3.Show != 4 && _task3.Show != 5) {
              if (PlayerData.roleInfo.tasks[_task3.TaskId] && PlayerData.roleInfo.tasks[_task3.TaskId].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
                error: Error()
              }), STaskState) : STaskState).unFinsh) {
                return _task3;
              }
            }
          }

          return stdTasks[0];
        }

        /**交易所根据页签获取资源 */
        static GetResBySubType(subType) {
          var datas = [];

          if (subType == 0) {
            //道具
            for (var item of this.playerInfo.items) {
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(item.id);

              if (std && (std.SubType == (_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
                error: Error()
              }), ItemSubType) : ItemSubType).cost || std.SubType == (_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
                error: Error()
              }), ItemSubType) : ItemSubType).shard || std.Items == 3)) {
                var data = {
                  type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                    error: Error()
                  }), ThingType) : ThingType).ThingTypeItem,
                  item: {
                    id: item.id,
                    count: item.count
                  }
                };
                datas.push(data);
              }
            }
          } else if (subType == 1) {
            //角色
            var roleData = this.roleInfo.roles;
            roleData.forEach(data => {
              var stateList = PlayerData.GetRoleStateList(data);

              if (stateList.length == 0 && !data.is_assisting && !data.is_in_main_building && data.level == 1 && data.ownership_type != 1) {
                var role_data = {
                  type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                    error: Error()
                  }), ThingType) : ThingType).ThingTypeRole,
                  role: data
                };
                datas.push(role_data);
              }
            });
          } else if (subType == 2) {
            //资源
            var data1 = {
              type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeResource,
              resource: {
                wood: this.roleInfo.resources.wood
              }
            };
            datas.push(data1);
            var data2 = {
              type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeResource,
              resource: {
                water: this.roleInfo.resources.water
              }
            };
            datas.push(data2);
            var data3 = {
              type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeResource,
              resource: {
                seed: this.roleInfo.resources.seed
              }
            };
            datas.push(data3);
            var data4 = {
              type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType).ThingTypeResource,
              resource: {
                rock: this.roleInfo.resources.rock
              }
            };
            datas.push(data4);
          } else if (subType == 3) {//装备
          }

          return datas;
        }
        /**交易所订单数据排除空数据 */


        static getOrderListData(data) {
          var datas = [];

          if (data) {
            for (var index = 0; index < data.length; index++) {
              var element = data[index];

              if (element && element.player_id && element.things) {
                datas.push(element);
              }
            }
          }

          return datas;
        }
        /**世界交易所订单数据排除空数据 */


        static getCrossOrderListData(data) {
          var datas = [];

          if (data) {
            for (var index = 0; index < data.length; index++) {
              var element = data[index];

              if (element && element.player_id && element.bourse_id) {
                datas.push(element);
              }
            }
          }

          return datas;
        }
        /**世界交易所订单通过viewid判断是否锁定 true 锁定 false未锁定 */


        static getOrderIsLockByViewId(view_id) {
          for (var index = 0; index < this.tradeViewData.order_list.length; index++) {
            var element = this.tradeViewData.order_list[index];

            if (element.view_id == view_id && this.tradeViewData.order_state_list[index] != "open") {
              return true;
            }
          }

          return false;
        } // 角色列表


        static GetRoles() {
          return this.playerInfo.roles.concat();
        }

        static GetRoleNum() {
          return this.playerInfo.roles.length;
        }
        /**
         * 获取角色
         * @param type
         * @returns 
         */


        static GetPlayerByType(type) {
          var result = [];

          for (var role of this.playerInfo.roles) {
            if (role.type == type) result.push(role);
          }

          return result;
        }
        /**
         * 获取玩家总战力
         * @returns 
         */


        static GetPlayerPower() {
          var totalPower = 0;

          for (var role of this.playerInfo.roles) {
            if (!role.battle_power) {
              role.battle_power = CountPower(role.type, role.level, role);
            }

            totalPower += role.battle_power;
          }

          return totalPower;
        }
        /**
         * 增加角色
         * @param data 
         * @returns 
         */


        static AddRole(data) {
          data.battle_power = CountPower(data.type, data.level, data);

          for (var i = 0; i < this.playerInfo.roles.length; i++) {
            var role = this.playerInfo.roles[i];

            if (role.id == data.id) {
              this.playerInfo.roles[i] = data;
              return;
            }
          }

          this.playerInfo.roles.push(data);
        }
        /**
         * 删除角色
         * @param id 
         * @returns 
         */


        static DelRole(id) {
          for (var i = 0; i < this.playerInfo.roles.length; i++) {
            var role = this.playerInfo.roles[i];

            if (role.id == id) {
              this.playerInfo.roles.splice(i, 1);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(_crd && Evt_Role_Del === void 0 ? (_reportPossibleCrUseOfEvt_Role_Del({
                error: Error()
              }), Evt_Role_Del) : Evt_Role_Del, role, i);
              return;
            }
          }
        } // 出战英雄列表


        static get attackRoles() {
          return this.roleInfo.attack_lineup || [];
        } // 世界boss出战英雄列表


        static get worldBossAttackRoles() {
          return this.roleInfo.boss_lineup || [];
        } //主建筑配置


        static get homelands() {
          return this.roleInfo.homelands;
        }

        static get nowhomeLand() {
          return this.GetHomeLand(this.RunHomeId);
        }
        /**获取指定家园 */


        static GetHomeLand(homeId) {
          if (!this.roleInfo) return undefined;

          for (var homeland of this.roleInfo.homelands) {
            if (homeland.id == homeId) return homeland;
          }

          return undefined;
        }
        /**
         * 获取道具id
         * @param id 
         * @returns 
         */


        static GetItem(id) {
          var items = this.roleInfo.items;

          for (var item of items) {
            if (item.id == id) {
              return item;
            }
          }
        }
        /**
         * 获取道具数量
         * @param id 
         * @returns 
         */


        static GetItemCount(id) {
          var item = this.GetItem(id);
          if (!item) return 0;
          return item.count;
        }
        /**
         * 根据物品类型获取物品列表数据
         * @param type 
         * @returns 
         */


        static GetItemTypeDatas(type) {
          var stdItem;
          var items = this.roleInfo.items;
          var newItems = [];

          for (var item of items) {
            stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(item.id);

            if (stdItem && stdItem.Type == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeItem && stdItem.Itemtpye == type) {
              newItems.push(item);
            }
          }

          return newItems;
        }
        /**获取建筑状态 */


        static GetBuilding(buildingId, homeId) {
          if (homeId != undefined) {
            var homeLand = this.GetHomeLand(homeId);
            if (!homeLand) return undefined;

            for (var building of homeLand.buildings) {
              if (building.id == buildingId) {
                this.flushWorkers(building.id, building);
                building.state = this.GetBuildingState(building.id);
                return building;
              }
            }
          } else if (this.roleInfo) {
            for (var homeland of this.roleInfo.homelands) {
              for (var _building of homeland.buildings) {
                if (_building.id == buildingId) {
                  this.flushWorkers(_building.id, _building);
                  _building.state = this.GetBuildingState(_building.id);
                  return _building;
                }
              }
            }
          }

          return undefined;
        }

        static GetBuildings(homeId) {
          if (homeId == undefined) homeId = this.RunHomeId;
          var homeLand = this.GetHomeLand(homeId);
          if (!homeLand) return undefined;
          var bulidings = {};

          for (var building of homeLand.buildings) {
            this.flushWorkers(building.id, building);
            building.state = this.GetBuildingState(building.id);
            bulidings[building.id] = building;
          }

          return bulidings;
        }

        static GetBuildingByType(buildType, homeId) {
          var buildings = [];
          var homeLand = this.GetHomeLand(homeId);
          if (!homeLand) return undefined;

          for (var building of homeLand.buildings) {
            if ((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetBuildingUnLock(building.id).BuildingType == buildType) {
              this.flushWorkers(building.id, building);
              building.state = this.GetBuildingState(building.id);
              buildings.push(building);
            }
          }

          return buildings;
        }
        /**
         * 获取指定建筑的工人列表
         * @param buildingId 
         * @returns 
         */


        static flushWorkers(buildingId, building) {
          if (!this.roleInfo) return [];
          if (!building.workerIdArr) building.workerIdArr = [];
          building.workerIdArr.length = 0;
          var works = building.workerIdArr;
          var roles = this.roleInfo.roles;

          if (buildingId && (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId).BuildingType == (_crd && BuildingType === void 0 ? (_reportPossibleCrUseOfBuildingType({
            error: Error()
          }), BuildingType) : BuildingType).cheng_qiang) {// let ls = this.roleInfo.defense_lineup || [];
            // for (let defense of ls) {
            //     if (defense) {
            //         for (let role of roles) {
            //             if (role.id == defense.role_id) {
            //城墙走防御列表
            //works.push(role);
            //             }
            //         }
            //     }
            // }
          } else if (buildingId) {
            for (var role of roles) {
              if (role.building_id == buildingId || role.is_in_main_building && role.main_building_id == buildingId) {
                works.push(role);
              }
            }
          }

          return works;
        }

        static GetWorkerNum(buildingId) {
          if (!this.roleInfo || !buildingId) return 0;
          var num = 0;
          var roles = this.playerInfo.roles;

          for (var role of roles) {
            if (role.building_id == buildingId) {
              num++;
            }
          }

          return num;
        }
        /**
         * 检测角色是否空闲
         * @param role 
         * @returns 
         */


        static CheckRoleFree(role) {
          if (role.building_id) return false;

          for (var battle of this.roleInfo.defense_lineup) {
            if (battle && battle.role_id == role.id) return false;
          }

          for (var _battle of this.roleInfo.attack_lineup) {
            if (_battle && _battle.role_id == role.id) return false;
          }
        }
        /**获取角色状态列表 */


        static GetRoleStateList(role) {
          var typeList = [(_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Work, (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Attack, (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Defend, (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Assist, (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_NFT];
          var stateList = [];

          for (var index = 0; index < typeList.length; index++) {
            var state = this.GetRoleState(role, typeList[index]);

            if (state > (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
              error: Error()
            }), RoleStateType) : RoleStateType).State_None) {
              stateList.push(state);
            }
          }

          return stateList;
        }

        static GetRoleState(roleId, stateType) {
          if (stateType == (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Work) {
            for (var home of this.roleInfo.homelands) {
              for (var build of home.buildings) {
                if (build.workerIdArr && build.workerIdArr.length) {
                  for (var role of build.workerIdArr) {
                    if (role.id == roleId.id) return stateType;
                  }
                }
              }
            }
          } else if (stateType == (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Attack) {
            for (var _role of this.attackRoles) {
              if (_role && roleId.id == _role.role_id) return stateType;
            }
          } else if (stateType == (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Defend) {
            for (var _role2 of this.roleInfo.defense_lineup) {
              if (roleId.id == _role2.role_id) return stateType;
            }
          } else if (stateType == (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_Assist) {
            if (roleId.is_assisting) return stateType;
          } else if (stateType == (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_NFT) {
            if (roleId.nft_lock_expires != 0) {
              console.log(roleId.nft_lock_expires, PlayerData.GetServerTime());
            }

            if (roleId.nft_lock_expires != 0 && roleId.nft_lock_expires - PlayerData.GetServerTime() > 0) return stateType;
          }

          return (_crd && RoleStateType === void 0 ? (_reportPossibleCrUseOfRoleStateType({
            error: Error()
          }), RoleStateType) : RoleStateType).State_None;
        }
        /**是否拥有该建筑 */


        static checkBuilding(buildingId) {
          var buildDefaine = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId);
          var homeLand = this.GetHomeLand(buildDefaine.HomeId);

          for (var building of homeLand.buildings) {
            if (building.id == buildingId) return true;
          }

          return false;
        }
        /**
         * 获取建筑状态
         * @param building 
         */


        static GetBuildingState(buildingId) {
          var buildDefaine = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId);
          var homeLand = this.GetHomeLand(buildDefaine.HomeId);

          for (var building of homeLand.buildings) {
            if (building.id == buildingId) {
              if (building.is_upgrading) {
                return (_crd && BuildingState === void 0 ? (_reportPossibleCrUseOfBuildingState({
                  error: Error()
                }), BuildingState) : BuildingState).Building;
              } else if (building.upgrade_time > new Date().getTime() / 1000 || building.level == 0) {
                return (_crd && BuildingState === void 0 ? (_reportPossibleCrUseOfBuildingState({
                  error: Error()
                }), BuildingState) : BuildingState).CanUnLock;
              } else {
                return (_crd && BuildingState === void 0 ? (_reportPossibleCrUseOfBuildingState({
                  error: Error()
                }), BuildingState) : BuildingState).Complete;
              }
            }
          }

          return (_crd && BuildingState === void 0 ? (_reportPossibleCrUseOfBuildingState({
            error: Error()
          }), BuildingState) : BuildingState).Lock;
        }
        /**解锁建筑 */


        static UnLockBuilding(buildingId, upgrade_time) {
          var buildDefaine = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId);
          var homeLand = this.GetHomeLand(buildDefaine.HomeId);

          for (var building of homeLand.buildings) {
            if (building.id == buildingId) {
              building.is_upgrading = true;
              building.level = 0;
              building.upgrade_time = upgrade_time;
              this.flushWorkers(building.id, building);
              building.state = (_crd && BuildingState === void 0 ? (_reportPossibleCrUseOfBuildingState({
                error: Error()
              }), BuildingState) : BuildingState).Building;
              return building;
            }
          }

          var buliding = {
            id: buildingId,
            level: 0,
            is_upgrading: true,
            upgrade_time: upgrade_time,
            state: (_crd && BuildingState === void 0 ? (_reportPossibleCrUseOfBuildingState({
              error: Error()
            }), BuildingState) : BuildingState).Building
          };
          homeLand.buildings.push(buliding);
          return buliding;
        }

        static OpenBuilding(buildingId) {
          var buildDefaine = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId);
          var homeLand = this.GetHomeLand(buildDefaine.HomeId);

          for (var building of homeLand.buildings) {
            if (building.id == buildingId) {
              building.is_upgrading = false;
              building.level = 1;
              building.upgrade_time = 0;
              return building;
            }
          }

          var buliding = {
            id: buildingId,
            level: 1,
            is_upgrading: false,
            upgrade_time: 0
          };
          homeLand.buildings.push(buliding);
          return buliding;
        }
        /**建筑升级 */


        static UpGradeBuilding(buildingId, UpgradeCompleteTime, level) {
          var buildDefaine = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId);
          var homeLand = this.GetHomeLand(buildDefaine.HomeId);

          for (var building of homeLand.buildings) {
            if (building.id == buildingId) {
              if (level != undefined) building.level = level;
              building.is_upgrading = UpgradeCompleteTime > PlayerData.GetServerTime();
              building.upgrade_time = UpgradeCompleteTime;

              if ((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId).BuildingSubType == 1 && level != undefined) {
                homeLand.level = level;
              }

              if (level != undefined) building.level = level;
              building.state = this.GetBuildingState(buildingId); // Logger.log('建筑信息更新-------', building);

              return building;
            }
          }
        }
        /**
         * 获取建筑等级
         * @param buildingId 
         * @returns 
         */


        static GetBuildingLevel(buildingId) {
          var buildDefaine = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingUnLock(buildingId);
          var homeLand = this.GetHomeLand(buildDefaine.HomeId);

          for (var building of homeLand.buildings) {
            if (building.id == buildingId) return building.level;
          }

          return 0;
        }
        /**
         * 获取建筑等级
         * @param homeId 
         * @param type 
         * @returns 
         */


        static GetBuildingLv(homeId, type, index) {
          if (index === void 0) {
            index = 0;
          }

          var stdDef = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBuildingDefine(homeId, type)[index];
          var homeLand = this.GetHomeLand(homeId);

          for (var building of homeLand.buildings) {
            if (building.id == stdDef.BuildingId) return building.level;
          }

          return 0;
        }
        /**
         * 添加建筑角色
         * @param info 
         * @returns 
         */


        static AddBuildRoles(info) {
          for (var index = 0; index < this.roleInfo.roles.length; index++) {
            var role = this.roleInfo.roles[index];

            if (role.id == info.role_id) {
              //主建筑的特殊处理
              if (info.building_id != 1) {
                role.building_id = info.building_id;
                role.is_in_building = true;
                role.battle_power = CountPower(role.type, role.level, role);
                return role.building_id;
              } else {
                role.main_building_id = 1;
                role.is_in_main_building = true;
                return role.main_building_id;
              }
            }
          }
        }
        /**
         * 移除建筑角色
         * @param info 
         * @returns 
         */


        static RemoveBuildRoles(info) {
          for (var index = 0; index < this.roleInfo.roles.length; index++) {
            var role = this.roleInfo.roles[index];

            if (role.id == info.role_id) {
              if (info.building_id == 1) {
                role.main_building_id = 0;
                role.is_in_main_building = false;
                return role.main_building_id;
              } else {
                role.building_id = 0;
                role.is_in_building = false;
                return role.building_id;
              }
            }
          }
        }
        /**更新当前合成次数 */


        static updateCompoundCount(count) {
          this.roleInfo.resource_exchange_uses = count;
        }

        static GetRoleByPid(roleId) {
          for (var index = 0; index < this.roleInfo.roles.length; index++) {
            var role = this.roleInfo.roles[index];

            if (role.id == roleId) {
              if (!role.battle_power) role.battle_power = CountPower(role.type, role.level);
              return role;
            }
          }

          return null;
        }
        /**
         * 获取指定角色
         * @param id 
         * @returns 
         */


        static GetRoleById(id) {
          for (var role of this.roleInfo.roles) {
            if (role.id == id) {
              if (!role.battle_power) role.battle_power = CountPower(role.type, role.level);
              return role;
            }
          }
        }
        /**通过type lv quality 获取角色*/


        static GetRoleByTypeAndLvAndQuality(type, lv, quality) {
          for (var role of this.roleInfo.roles) {
            if (role.type == type && role.level == lv && role.quality == quality) {
              return role;
            }
          }

          return null;
        }
        /**通过type获取该角色最高品质*/


        static getMaxQualityByType(type) {
          var max_quality = 0;
          var quality_role;

          for (var role of this.roleInfo.roles) {
            if (role.type == type && role.quality > max_quality) {
              max_quality = role.quality;
              quality_role = role;
            }
          }

          return quality_role;
        }
        /**通过type获取该角色最高战力*/


        static getMaxFightingByType(type) {
          var max_battle_power = 0;
          var quality_role;

          for (var role of this.roleInfo.roles) {
            if (role.type == type && role.battle_power > max_battle_power) {
              max_battle_power = role.quality;
              quality_role = role;
            }
          }

          return quality_role;
        }
        /**
         * 判断生产条件是否符合
         * @param homeId 
         * @param conditionId 
         * @param conditionValue 
         * @returns 
         */


        static CheckCondition(homeId, conditionId, conditionValue) {
          for (var i = 0; i < conditionId.length; i++) {
            var _id = conditionId[i];

            switch (_id) {
              case 1:
                var objs = this.GetBuildingByType((_crd && BuildingType === void 0 ? (_reportPossibleCrUseOfBuildingType({
                  error: Error()
                }), BuildingType) : BuildingType).ji_di, homeId);

                for (var obj of objs) {
                  if (obj.level < conditionValue[i]) return false;
                }

            }
          }

          return true;
        }
        /**
         * 更新生产
         * @param data 
         * @returns 
         */


        static UpdateItemProduction(data) {
          var ls = this.roleInfo.item_productions;
          var isCheck = false;

          for (var i = 0; i < ls.length; i++) {
            var obj = ls[i];

            if (obj.id == data.id) {
              ls[i] = data;
              isCheck = true;
              break;
            }
          }

          if (!isCheck) ls.push(data);
        }
        /**
         * 获取指定id的生产状态
         * @param id 
         * @returns 
         */


        static GetProductionState(id) {
          var ls = this.roleInfo.item_productions;

          for (var obj of ls) {
            if (obj.id == id) return obj;
          }
        }
        /**获取指定建筑的生产列表 */


        static GetProductionIds(buildingId, finsish) {
          if (finsish === void 0) {
            finsish = true;
          }

          var ids = [];
          var ls = this.roleInfo.item_productions;

          for (var obj of ls) {
            if (buildingId == undefined || buildingId == (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetProduction(obj.id).BuildingId) {
              if (!finsish || this.GetServerTime() >= obj.finish_time) ids.push(obj.id);
            }
          }

          return ids;
        }
        /**
         * 生产完成
         * @param index 
         * @returns 
         */


        static FinishItemProduction(id) {
          for (var index = 0; index < id.length; index++) {
            var element = id[index];

            for (var i = 0; i < this.roleInfo.item_productions.length; i++) {
              if (this.roleInfo.item_productions[i].id == element) {
                this.roleInfo.item_productions.splice(i, 1);
                break;
              }
            }
          }
        }

        static IndexOfProduction(id) {
          var ls = this.roleInfo.item_productions;

          for (var i = 0; i < ls.length; i++) {
            if (ls[i].id == id) return i;
          }

          return -1;
        }
        /**当前的战斗状态 */


        /**
         * 获取兵种库存
         * @param soliderId 
         * @returns 
         */
        static GetSoldier(soliderId) {
          for (var obj of this.roleInfo.soldiers) {
            if (obj.id == soliderId) {
              return obj;
            }
          }
        }
        /**
         * 获取招募
         * @param soliderId 
         * @param buildingId 
         * @returns 
         */


        static GetSoldierProduction(soliderId, buildingId) {
          for (var obj of this.roleInfo.soldier_productions) {
            if (obj.building_id == buildingId && obj.id == soliderId) {
              return obj;
            }
          }
        }
        /**
         * 新增招募
         * @param data 
         */


        static AddSoldierProduction(data) {
          var isCheck = false;

          for (var obj of this.roleInfo.soldier_productions) {
            if (obj.building_id == data.building_id && obj.id == data.id) {
              obj.count = data.count;
              obj.start_time = data.start_time;
              isCheck = true;
              break;
            }
          }

          if (!isCheck) this.roleInfo.soldier_productions.push(data);
        }
        /**
         * 更新兵营招募进度
         * @param data 
         */


        static UpdateSoldier(data) {
          for (var i = 0; i < this.roleInfo.soldier_productions.length; i++) {
            var production = this.roleInfo.soldier_productions[i];

            if (production.id == data.soldier_id && production.building_id == data.building_id) {
              var add = (_crd && maxx === void 0 ? (_reportPossibleCrUseOfmaxx({
                error: Error()
              }), maxx) : maxx)(0, data.count);
              production.count -= data.count;
              var lv = this.GetBuildingLevel(data.building_id);
              var [num, time, cost] = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetSoldierProductionByType(data.building_id, lv, data.soldier_id); // Logger.log("UpdateSoldier", production.start_time, time * add, production.start_time + (num * add));

              production.start_time += time * add;
              if (production.count <= 0) this.roleInfo.soldier_productions.splice(i, 1);
              break;
            }
          }

          for (var soldier of this.roleInfo.soldiers) {
            if (soldier.id == data.soldier_id) {
              soldier.add = data.total_count - soldier.count;
              soldier.count = data.total_count;
              return;
            }
          }

          this.roleInfo.soldiers.push({
            id: data.soldier_id,
            count: data.total_count,
            building_id: data.building_id,
            add: data.total_count
          });
        }
        /**
         * 更新兵营招募时间
         * @param data 
         */


        static UpdateSoldierProdTime(id, time) {
          for (var i = 0; i < this.roleInfo.soldier_productions.length; i++) {
            var production = this.roleInfo.soldier_productions[i];

            if (production.id == id) {
              production.start_time = time;
              break;
            }
          }
        }

        static AllocateSolider(data) {
          for (var i = 0; i < data.length; i++) {
            var role = this.GetRoleByPid(data[i].role_id);
            var ship = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRoleAttr(role.type, role.level, (_crd && Attr === void 0 ? (_reportPossibleCrUseOfAttr({
              error: Error()
            }), Attr) : Attr).LeaderShip);
          }
        }

        static updataPveData(pve_data) {
          if (pve_data.progress || pve_data.progress == 0) this.playerInfo.pve_data = pve_data;
        }

        static updateSoldiers(data) {
          if (data) this.playerInfo.soldiers = data;
        }
        /**当前页邮件列表 */


        static resetMail() {
          this.mails = [];
          this.mailmap = {};
        }

        static getMailReward(data) {
          var datas = [];

          for (var index = 0; index < data.length; index++) {
            var element = data[index];

            if (element.resource) {
              var thing = {
                type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType).ThingTypeResource,
                resource: {}
              };

              if (element.resource.rock) {
                thing = {
                  type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                    error: Error()
                  }), ThingType) : ThingType).ThingTypeResource,
                  resource: {}
                };
                thing.resource.rock = element.resource.rock;
                datas.push(thing);
              }

              if (element.resource.wood) {
                thing = {
                  type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                    error: Error()
                  }), ThingType) : ThingType).ThingTypeResource,
                  resource: {}
                };
                thing.resource.wood = element.resource.wood;
                datas.push(thing);
              }

              if (element.resource.water) {
                thing = {
                  type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                    error: Error()
                  }), ThingType) : ThingType).ThingTypeResource,
                  resource: {}
                };
                thing.resource.water = element.resource.water;
                datas.push(thing);
              }

              if (element.resource.seed) {
                thing = {
                  type: (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                    error: Error()
                  }), ThingType) : ThingType).ThingTypeResource,
                  resource: {}
                };
                thing.resource.seed = element.resource.seed;
                datas.push(thing);
              }
            }

            if (!element.resource) {
              datas.push(element);
            }
          }

          return datas;
        }
        /**钓鱼数据 */


        /**设置钓鱼角色id */
        static SetFishingHeroId(id) {
          this._fishHeroId = id;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_FishHeroUpdate === void 0 ? (_reportPossibleCrUseOfEvt_FishHeroUpdate({
            error: Error()
          }), Evt_FishHeroUpdate) : Evt_FishHeroUpdate);
        }
        /**获取钓鱼角色id */


        static GetFishingHeroId() {
          return this._fishHeroId;
        }
        /**
         * 获取是否热门湖泊
         * @param id 
         * @returns 
         */


        static GetHotLake(id) {
          var feedNum = 0;
          var maxId = 0;

          if (this.fishData && this.fishData.lakes && this.fishData.lakes.length) {
            for (var lakeData of this.fishData.lakes) {
              if (feedNum == 0) {
                if (lakeData.cost > 0) {
                  feedNum = lakeData.cost;
                  maxId = lakeData.lake_id;
                }
              } else {
                if (lakeData.cost > feedNum) {
                  feedNum = lakeData.cost;
                  maxId = lakeData.lake_id;
                }
              }
            }
          }

          return maxId == id;
        }
        /**
         * 获取湖泊数据
         * @param id 
         * @returns 
         */


        static GetLakeData(id) {
          if (this.fishData && this.fishData.lakes && this.fishData.lakes.length) {
            for (var lakeData of this.fishData.lakes) {
              if (id == lakeData.lake_id) return lakeData;
            }
          }

          return null;
        }
        /**获取钓鱼当前最新回合数 */


        static get CurFishRoundInfo() {
          if (this.fishData && this.fishData.round_info) {
            return this.fishData.round_info;
          }

          return null;
        }
        /**获取当前钓鱼场次是否地狱模式 */


        static get FishSessionIsHell() {
          if (!this.fishData.session_info) return false;
          if (this.fishData.session_info.kill_type != 1 && this.fishData.session_info.kill_type_end != 1) return true;
          return false;
        }
        /**获取当前回合状态 */


        static get GetFishRoundState() {
          if (!this.CurFishRoundInfo) return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
            error: Error()
          }), FishRoundState) : FishRoundState).No; //没有回合

          if (this.CurFishRoundInfo.end_time < this.GetServerTime()) return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
            error: Error()
          }), FishRoundState) : FishRoundState).No; //回合超时

          if (!this.CurFishRoundInfo.is_open) return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
            error: Error()
          }), FishRoundState) : FishRoundState).NoStart; //回合未开始
          //已结算

          if (this.CurFishRoundInfo.is_settlement) {
            //已经选择湖并且已投入鱼饵
            if (this.fishData.settlement && this.fishData.player.lake_id > 0 && this.fishData.player.round_cost > 0) {
              return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
                error: Error()
              }), FishRoundState) : FishRoundState).Settle; //结算时刻 
            }

            return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
              error: Error()
            }), FishRoundState) : FishRoundState).NoFishing; //本回合未参与垂钓
          } //垂钓时刻


          if (this.CurFishRoundInfo.is_frozen) {
            //已经选择湖并且已投入鱼饵
            if (this.fishData.player.lake_id > 0 && this.fishData.player.round_cost > 0) {
              return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
                error: Error()
              }), FishRoundState) : FishRoundState).LiftRod; //提杆时刻
            }

            return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
              error: Error()
            }), FishRoundState) : FishRoundState).NoFishing; //本回合未参与垂钓
          }

          if (this.fishData.player.lake_id > 0) {
            return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
              error: Error()
            }), FishRoundState) : FishRoundState).Select; //已选湖泊
          } else {
            return (_crd && FishRoundState === void 0 ? (_reportPossibleCrUseOfFishRoundState({
              error: Error()
            }), FishRoundState) : FishRoundState).NoSelect; //未选湖泊
          }
        }
        /**自己选的湖泊是否被冰封了 */


        static get FishMyLakeIsIced() {
          if (this.CurFishRoundInfo) {
            if (this.fishData.player.lake_id > 0) {
              var lakeData = this.GetLakeData(this.fishData.player.lake_id);
              if (lakeData && lakeData.is_frozen) return true;
            }
          }

          return false;
        }
        /**冰封湖泊id */


        static get FishIcedLakeIds() {
          var newList = [];

          if (this.CurFishRoundInfo) {
            if (this.fishData && this.fishData.lakes && this.fishData.lakes.length) {
              for (var lakeData of this.fishData.lakes) {
                if (lakeData.is_frozen) {
                  newList.push(lakeData.lake_id);
                }
              }
            }
          }

          return newList;
        }
        /**获取当前鱼竿类型*/


        static get FishRodType() {
          if (this.fishData) {
            var num = this.fishData.player.round_cost;
            var stdRodList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetFishRodTypeList(1);
            var std;

            for (var index = stdRodList.length - 1; index > -1; index--) {
              std = stdRodList[index];

              if (num >= std.MinValue && num <= std.MaxValue) {
                return index;
              }
            }
          }

          return 0;
        }

        static FishItemAdd(list) {
          if (this.fishItems) {
            this.fishItems = this.fishItems.concat(list);
          }
        }

        static FishItemRemove(list) {
          if (this.fishItems) {
            var fishItem;

            for (var index = 0; index < list.length; index++) {
              fishItem = list[index];
              var findIndex = this.fishItems.findIndex(item => item.id == fishItem.id);

              if (findIndex > -1) {
                this.fishItems.splice(findIndex, 1);
              }
            }
          }
        }

        static GetFishItem(id) {
          if (!this.fishItems) return null;
          var fishItem;

          for (var index = 0; index < this.fishItems.length; index++) {
            fishItem = this.fishItems[index];
            if (fishItem.id == id) return fishItem;
          }

          return null;
        }
        /**获取钓鱼赛季是否开启 */


        static GetFishRaceIsOpen() {
          //非精英服不开放入口
          if (!DEV && !(_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).Server_cfg.Mark) return false;
          var openLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetFishCommon.OpenLevel;
          var buildings = this.GetBuildingByType((_crd && BuildingType === void 0 ? (_reportPossibleCrUseOfBuildingType({
            error: Error()
          }), BuildingType) : BuildingType).ji_di, 101);

          if (buildings && buildings.length > 0 && buildings[0].level >= openLv) {
            if (this.fishingMatch && (this.fishingMatch.current_match || this.fishingMatch.next_match)) {
              if (this.fishingMatch.current_match && this.GetServerTime() > this.fishingMatch.current_match.StartTime && this.GetServerTime() < this.fishingMatch.current_match.CloseTime) {
                return true;
              } else if (this.fishingMatch.next_match && this.GetServerTime() > this.fishingMatch.next_match.StartTime && this.GetServerTime() < this.fishingMatch.next_match.CloseTime) {
                return true;
              }
            }
          }

          return false;
        }
        /**获取钓鱼角色数据 */


        static GetFishingEquipHero(id) {
          if (!this.fishHeros) return null;
          var fishHero;

          for (var index = 0; index < this.fishHeros.length; index++) {
            fishHero = this.fishHeros[index];
            if (fishHero.id == id) return fishHero;
          }

          return null;
        }
        /**获取钓鱼角色装备数据 */


        static GetFishingEquipData(id, slotId) {
          var fishHero = this.GetFishingEquipHero(id);
          if (!fishHero || !fishHero.parts) return null;
          var equipData;

          for (var index = 0; index < fishHero.parts.length; index++) {
            equipData = fishHero.parts[index];
            if (equipData.slot_id == slotId) return equipData;
          }

          return null;
        }
        /**获取钓鱼角色装备数据 */


        static GetFishingEquipSkill(id, slotId) {
          var fishHero = this.GetFishingEquipHero(id);
          if (!fishHero || !fishHero.effective_skills) return null;
          return fishHero.effective_skills[slotId];
        }

        /**获取运鱼当前最新回合数 */
        static get CurFishTradeRoundInfo() {
          if (this.fishTradeData && this.fishTradeData.round_info) {
            return this.fishTradeData.round_info;
          }

          return null;
        }
        /**
         * 获取是否热门渔船
         * @param id 
         * @returns 
         */


        static GetHotShip(id) {
          var weightNum = 0;
          var maxId = 0;

          if (this.fishTradeData && this.fishTradeData.ship && this.fishTradeData.ship.length) {
            for (var shipData of this.fishTradeData.ship) {
              if (weightNum == 0) {
                if (shipData.cost > 0) {
                  weightNum = shipData.cost;
                  maxId = shipData.ship_id;
                }
              } else {
                if (shipData.cost > weightNum) {
                  weightNum = shipData.cost;
                  maxId = shipData.ship_id;
                }
              }
            }
          }

          return maxId == id;
        }

        static GetFishTradShipState(shipId) {
          if (this.fishTradeData && this.fishTradeData.ship && this.fishTradeData.ship.length) {
            var tempList = this.fishTradeData.ship.concat();
            tempList.sort((a, b) => {
              return a.cost - b.cost;
            });
            var shipData;

            for (var index = 0; index < tempList.length; index++) {
              shipData = tempList[index];

              if (shipData.ship_id == shipId) {
                if (shipData.cost < 1) return 0;
                return index + 1;
              }
            }
          }

          return 0;
        }
        /**
         * 获取运鱼船只数据
         * @param id 
         * @returns 
         */


        static GetShipData(id) {
          if (this.fishTradeData && this.fishTradeData.ship && this.fishTradeData.ship.length) {
            for (var shipData of this.fishTradeData.ship) {
              if (id == shipData.ship_id) return shipData;
            }
          }

          return null;
        }
        /**获取当前回合状态 */


        static get GetFishTradeRoundState() {
          if (!this.CurFishTradeRoundInfo) return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
            error: Error()
          }), FishTradeRoundState) : FishTradeRoundState).No; //没有回合

          if (!this.CurFishTradeRoundInfo.is_open) return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
            error: Error()
          }), FishTradeRoundState) : FishTradeRoundState).No; //回合未开始

          if (this.CurFishTradeRoundInfo.end_time < this.GetServerTime()) return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
            error: Error()
          }), FishTradeRoundState) : FishTradeRoundState).No; //回合超时
          //已结算

          if (this.CurFishTradeRoundInfo.is_settlement) {
            //已经选择气球并且已装鱼
            if (this.fishTradeData.settlement && this.fishTradeData.player.ship_id > 0 && this.fishTradeData.player.round_cost > 0) {
              return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
                error: Error()
              }), FishTradeRoundState) : FishTradeRoundState).Settle; //结算时刻 
            }

            return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
              error: Error()
            }), FishTradeRoundState) : FishTradeRoundState).NoFishTrade; //本回合未参与运鱼
          } //气球飞阶段


          if (this.CurFishTradeRoundInfo.is_departure) {
            //已经选气球并且已投入鱼饵
            if (this.fishTradeData.player.ship_id > 0 && this.fishTradeData.player.round_cost > 0) {
              return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
                error: Error()
              }), FishTradeRoundState) : FishTradeRoundState).Departure; //提杆时刻
            }

            return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
              error: Error()
            }), FishTradeRoundState) : FishTradeRoundState).NoFishTrade; //本回合未参与垂钓
          }

          if (this.fishTradeData.player.ship_id > 0) {
            return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
              error: Error()
            }), FishTradeRoundState) : FishTradeRoundState).Select; //已选湖泊
          } else {
            return (_crd && FishTradeRoundState === void 0 ? (_reportPossibleCrUseOfFishTradeRoundState({
              error: Error()
            }), FishTradeRoundState) : FishTradeRoundState).NoSelect; //未选湖泊
          }
        }
        /**当前赛季掠夺信息 */


        /**获取任务奖励 */
        static GetLootBaseAwardThing(data) {
          var thing = {
            type: data.RewardType
          };

          switch (thing.type) {
            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeItem:
              thing.item = {
                id: data.RewardID,
                count: data.RewardNumber
              };
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeCurrency:
              thing.currency = {
                type: 0,
                value: data.RewardNumber
              };
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeGold:
              thing.gold = {
                value: data.RewardNumber
              };
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeEquipment:
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeRole:
              thing.role = {
                id: null,
                type: data.RewardNumber,
                quality: 1,
                level: null,
                experience: null,
                soldier_num: null,
                active_skills: null,
                passive_skills: null,
                is_in_building: null,
                building_id: null,
                battle_power: null,
                skills: null,
                is_assisting: false,
                is_in_attack_lineup: false,
                is_in_defense_lineup: false,
                trade_cd: 0
              };
              break;

            case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeResource:
              switch (data.RewardID) {
                case (_crd && ResourceType === void 0 ? (_reportPossibleCrUseOfResourceType({
                  error: Error()
                }), ResourceType) : ResourceType).rock:
                  thing.resource = {
                    rock: data.RewardNumber
                  };
                  break;

                case (_crd && ResourceType === void 0 ? (_reportPossibleCrUseOfResourceType({
                  error: Error()
                }), ResourceType) : ResourceType).seed:
                  thing.resource = {
                    seed: data.RewardNumber
                  };
                  break;

                case (_crd && ResourceType === void 0 ? (_reportPossibleCrUseOfResourceType({
                  error: Error()
                }), ResourceType) : ResourceType).water:
                  thing.resource = {
                    water: data.RewardNumber
                  };
                  break;

                case (_crd && ResourceType === void 0 ? (_reportPossibleCrUseOfResourceType({
                  error: Error()
                }), ResourceType) : ResourceType).wood:
                  thing.resource = {
                    wood: data.RewardNumber
                  };
                  break;
              }

              break;
          }

          return thing;
        }
        /**获取玩家赛季排行配置 */


        static GetLootRankCfg(seasonData, season_id) {
          if (!seasonData.rank) return;
          var list_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getPVPById(season_id);
          if (!list_data) return;
          var list_id = list_data.JackpotType;
          var stdRank = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("RankList");
          var top_rank = 0;
          stdRank.forEach(curData => {
            if (curData.ListModeID == list_id && curData.ListType == 1) {
              if (curData.Ranking[0] == 1) {
                top_rank++;
              }
            }
          });
          var data;
          stdRank.forEach(curData => {
            if (curData.ListModeID == list_id && curData.ListType == 1) {
              if (seasonData.rank == -1) {
                return;
              }

              if (seasonData.rank <= top_rank) {
                if (seasonData.rank == curData.Ranking[1]) {
                  data = curData;
                }
              } else {
                if (curData.Ranking[0] != 1 && seasonData.rank <= curData.Ranking[1] * seasonData.all_player) {
                  data = curData;
                }
              }
            }
          });
          return data;
        } //商城组信息（包含商城页签）


        /**
         * 设置商店数据
         * @param datas 
         */
        static SetShopData(datas) {
          if (!this.shopMap) this.shopMap = js.createMap();

          for (var shopData of datas) {
            this.shopMap[shopData.shop_index_id] = shopData;
          }
        }
        /**
         * 获取商店数据
         * @param shopId 商店id
         * @returns 
         */


        static GetShopData(shopId) {
          return this.shopMap ? this.shopMap[shopId] : null;
        }
        /**
         * 获取通用商品数据
         * @param shopId 
         * @param shopItemId 
         * @returns 
         */


        static GetCommShopData(shopId) {
          var shopData = this.GetShopData(shopId);
          return shopData ? shopData.shop : null;
        }
        /**
         * 获取抽奖商店数据
         * @param shopId 商店id
         * @returns 
         */


        static GetShopLuckyData(shopId) {
          var shopData = this.GetShopData(shopId);
          return shopData == null ? void 0 : shopData.lucky;
        }

        /**
         * 设置公告数据
         * @param list 
         * @returns 返回是否有更新
         */
        static SetNoticeDatas(list, unLogin) {
          if (unLogin === void 0) {
            unLogin = false;
          }

          this.noticeDatas = [];
          var newData;
          var newKeyVal = "";
          var oldKeyVal = unLogin ? "undefined" : (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetPlayerData(PlayerData.playerIdKey, "NoticeCheckCode");

          for (var index = 0; index < list.length; index++) {
            newData = list[index];
            newKeyVal += newData.id.toString();

            if (index < list.length - 1) {
              newKeyVal += "_";
            }

            this.noticeDatas[index] = newData;
          }

          if (unLogin) return true;

          if (newKeyVal != "" && oldKeyVal != newKeyVal) {
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).SetPlayerData(PlayerData.playerIdKey, "NoticeCheckCode", newKeyVal);
            return true;
          }

          return false;
        }
        /**
         * 获取公告数据
         * @returns 
         */


        static GetNoticeDatas() {
          return this.noticeDatas;
        }
        /**运鱼入口红点 */


        static CheckFishTradeEnterRead() {
          if (this.CheckFishTradeIsOpen()) return true;
          return false;
        }

        /**
         * 检测钓鱼活动是否开启
         */
        static CheckFishIsOpen() {
          var data = this.GetOneOffRedPoint((_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
            error: Error()
          }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_FishOpen);
          if (data.isCheck) return data.redPointVal;

          if (!this.fishOpenTimeCfg) {
            this.fishOpenTimeCfg = [];
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetFishCommon;

            for (var index = 0; index < std.Opentime.length; index++) {
              var openTiem = std.Opentime[index];
              var timearr = openTiem.replace(" ", ":").replace(/\:/g, "-").split("-");
              this.fishOpenTimeCfg[index] = {
                startHour: Number(timearr[0]),
                startMinute: Number(timearr[1]),
                endHour: Number(timearr[2]),
                endMinute: Number(timearr[3])
              };
              console.log(timearr);
            }
          }

          var isRedPoint = false;
          var serverTime = this.GetServerTime();

          for (var _index = 0; _index < this.fishOpenTimeCfg.length; _index++) {
            var timeData = this.fishOpenTimeCfg[_index];
            var startS = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).weeHoursTime(serverTime) + (timeData.startHour * 60 + timeData.startMinute) * 60;
            var endS = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).weeHoursTime(serverTime) + (timeData.endHour * 60 + timeData.endMinute) * 60;

            if (serverTime >= startS && serverTime < endS) {
              isRedPoint = true;
              break;
            }
          }

          data.isCheck = true;
          data.redPointVal = isRedPoint;
          return isRedPoint;
        }
        /**
         * 检测鱼商店是否可出售鱼
         */


        static CheckFishShopIsSell() {
          if (!this.fishItems) return false;
          var data = this.GetOneOffRedPoint((_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
            error: Error()
          }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_FishSell);
          if (data.isCheck) return data.redPointVal;
          data.redPointVal = PlayerData.fishItems && PlayerData.fishItems.length > 0;
          data.isCheck = true;
          return data.redPointVal;
        }

        /**
         * 检测运鱼活动是否开启
         */
        static CheckFishTradeIsOpen() {
          var data = this.GetOneOffRedPoint((_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
            error: Error()
          }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_FishTradeOpen);
          if (data.isCheck) return data.redPointVal;

          if (!this.fishTradeOpenTimeCfg) {
            this.fishTradeOpenTimeCfg = [];
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetFishTradeCommon;

            for (var index = 0; index < std.Opentime.length; index++) {
              var openTiem = std.Opentime[index];
              var timearr = openTiem.replace(" ", ":").replace(/\:/g, "-").split("-");
              this.fishTradeOpenTimeCfg[index] = {
                startHour: Number(timearr[0]),
                startMinute: Number(timearr[1]),
                endHour: Number(timearr[2]),
                endMinute: Number(timearr[3])
              };
              console.log(timearr);
            }
          }

          var isRedPoint = false;
          var serverTime = this.GetServerTime();

          for (var _index2 = 0; _index2 < this.fishTradeOpenTimeCfg.length; _index2++) {
            var timeData = this.fishTradeOpenTimeCfg[_index2];
            var startS = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).weeHoursTime(serverTime) + (timeData.startHour * 60 + timeData.startMinute) * 60;
            var endS = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).weeHoursTime(serverTime) + (timeData.endHour * 60 + timeData.endMinute) * 60;

            if (serverTime >= startS && serverTime < endS) {
              isRedPoint = true;
              break;
            }
          }

          data.isCheck = true;
          data.redPointVal = isRedPoint;
          return isRedPoint;
        }
        /**
         * 检测是否有角色可升级 roleId不为空时检测指定角色 否则检测全部
         */


        static CheckRoleIsCanUp(roleId) {
          var maxLv;
          var curLv;
          var nextLv;
          var items = PlayerData.GetItemTypeDatas((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).exp);
          var totlaExp = items.reduce((count, item) => {
            var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(item.id);
            return count + stdItem.ItemEffect1 * item.count;
          }, 0);

          var checkRole = role => {
            if (!role) return false;
            maxLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRoleMaxLevel(role.type);
            curLv = role.level;
            if (curLv >= maxLv) return false;
            nextLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRoleExpMaxLevel(role.type, curLv, role.experience + totlaExp);

            if (nextLv) {
              if (nextLv.Level > curLv) return true;

              if (nextLv.ConditionId && nextLv.ConditionId) {
                var condData = (_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
                  error: Error()
                }), DL) : DL).FormatCondition(nextLv.ConditionId[0], nextLv.ConditionLv[0]);

                if (condData.fail) {
                  return false;
                }
              } //突破


              if (nextLv.BreakItem && nextLv.BreakItem.length > 0) {
                var myMoney = PlayerData.roleInfo.currency;

                if (myMoney < nextLv.Cost) {
                  return false;
                }

                for (var index = 0; index < nextLv.BreakItem.length; index++) {
                  var itemId = nextLv.BreakItem[index];
                  var itemNum = nextLv.BreakCost[index];
                  var have = PlayerData.GetItemCount(itemId);
                  if (have < itemNum) return false;
                }

                return true;
              }
            }

            return false;
          };

          if (roleId != undefined) {
            return checkRole(this.GetRoleById(roleId));
          } else {
            for (var index = 0; index < this.roleInfo.roles.length; index++) {
              if (checkRole(this.roleInfo.roles[index])) {
                return true;
              }
            }
          }

          return false;
        }
        /**生产工坊是否可生产,有id时检测单个，没有id时检测所有 */


        static CheckProductionRed(item_id) {
          //可生产的道具
          var building_id;
          var homeLand = this.GetHomeLand(this.RunHomeId);
          if (!homeLand) return undefined;

          for (var building of homeLand.buildings) {
            if ((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetBuildingUnLock(building.id).BuildingType == (_crd && BuildingType === void 0 ? (_reportPossibleCrUseOfBuildingType({
              error: Error()
            }), BuildingType) : BuildingType).sheng_chan) {
              building_id = building.id;
              break;
            }
          }

          if (!building_id) return;
          var max_count = Number.MAX_SAFE_INTEGER;
          var stdlst = [];
          var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetProductions(building_id);

          for (var std of cfg) {
            var homeId = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("homeland_building")[std.BuildingId].HomeId;

            if (PlayerData.CheckCondition(homeId, std.ConditionID, std.ConditionValue)) {
              if (item_id) {
                if (std.ItemID == item_id) {
                  stdlst.push(std);
                  break;
                }
              } else {
                stdlst.push(std);
              }
            }
          }

          if (stdlst) {
            for (var index = 0; index < stdlst.length; index++) {
              var element = stdlst[index];
              var ids = element.CostItemID;
              var num = element.Num;
              var costList = void 0;
              var nums = void 0;

              if (typeof ids == "number") {
                costList = [ids];
                nums = [num];
              } else {
                costList = ids;
                nums = num;
              }

              for (var i = 0; i < costList.length; i++) {
                if (costList[i]) {
                  var has = PlayerData.GetItemCount(costList[i]);
                  var count = Math.floor(has / nums[i]); //能合成的最大数量

                  max_count = count > max_count ? max_count : count;
                }
              }
            }
          }

          return max_count > 0;
        }
        /**
         * 检测角色合成碎片
         * @returns 
         */


        static CheckRoleChip() {
          var datas = PlayerData.GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
            error: Error()
          }), ItemSubType) : ItemSubType).shard);

          for (var item of datas) {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(item.id);

            if (std.Type == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeItem && std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).shard) {
              if (item.count >= std.ItemEffect3) return true;
            }
          }

          return false;
        }
        /**
         * 检测角色合成碎片
         * @param itemId 
         * @returns 
         */


        static CheckBagBox() {
          var datas = PlayerData.GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
            error: Error()
          }), ItemSubType) : ItemSubType).cost);

          for (var item of datas) {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(item.id);

            if (std.Type == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).ThingTypeItem && std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).box) {
              return true;
            }
          }

          return false;
        }
        /**
         * 检测掠夺红点
         * @returns 
         */


        static CheckLoop() {
          if (!this.GetSysIsOpen((_crd && StdSysId === void 0 ? (_reportPossibleCrUseOfStdSysId({
            error: Error()
          }), StdSysId) : StdSysId).Sys_7)) return false;
          if (!this.LootPlayerData) return false;
          if (this.LootPlayerData.match_count > 0) return true;

          if (this.LootPlayerData.paid_refresh_count > 0) {
            if (this.LootSeasonInfo) {
              var seasonData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).getPVPById(this.LootSeasonInfo.season_id);
              var haveNum = PlayerData.GetItemCount(seasonData.ConsumeItem);
              if (haveNum > seasonData.ConsumeNumber) return true;
            }
          }

          return false;
        }
        /**频道消息列表 */


        /**重置频道消息 */
        static ResetChannelMsg() {
          this.channelMsg = [];
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_ChannelMsgUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ChannelMsgUpdate({
            error: Error()
          }), Evt_ChannelMsgUpdate) : Evt_ChannelMsgUpdate);
        }

        /**设置广告数据*/
        static SetAdvisterData(data) {
          this.advisterCount = js.createMap();

          for (var _key in data) {
            var _id2 = Number(_key);

            var val = Number(data[_key]);
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetAdvister(_id2);
            this.advisterCount[_id2] = {
              id: _id2,
              count: Math.max(std.Max_numb - val, 0),
              cdEndTime: 0
            };
          }
        }
        /**更新广告次数 */


        static UpdateAdvisterData(id, newCount) {
          var advisterData = this.advisterCount[id];
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetAdvister(id);

          if (std) {
            var count = 0;

            if (!advisterData) {
              advisterData = {
                id: id,
                count: std.Max_numb,
                cdEndTime: 0
              };
            } else {
              advisterData.count = Math.max(std.Max_numb - newCount, 0);
            }

            this.advisterCount[id] = advisterData;
          }
        }
        /**
         * 获取广告数据
         * @param id 
         * @returns 
         */


        static GetAdvisterData(id) {
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetAdvister(id);
          if (!std) return;
          var advisterData = this.advisterCount[id];

          if (!advisterData) {
            advisterData = {
              id: std.Ad_ID,
              count: std.Max_numb,
              cdEndTime: 0
            };
            this.advisterCount[id] = advisterData;
          }

          return advisterData;
        }
        /**设置广告cd */


        static SetAdvisterCd(id) {
          var adData = this.GetAdvisterData(id);
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetAdvister(id);
          adData.cdEndTime = game.totalTime + std.Ad_CD * 1000;
        }
        /**增加频道消息 */


        static AddChannelMsg(id) {
          var msg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetMessag(id);

          if (msg) {
            for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
              arg[_key2 - 1] = arguments[_key2];
            }

            var formatCont = (_crd && ReplaceStr === void 0 ? (_reportPossibleCrUseOfReplaceStr({
              error: Error()
            }), ReplaceStr) : ReplaceStr)(msg.Content, ...arg);
            var msdData = {
              title: "系统",
              cont: formatCont
            };
            this.channelMsg.unshift(msdData);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_ChannelMsgUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ChannelMsgUpdate({
              error: Error()
            }), Evt_ChannelMsgUpdate) : Evt_ChannelMsgUpdate);
          }
        }
        /**增加频道消息 */


        static AddServerChannelMsg(data) {
          var msdData = {
            title: "系统",
            cont: data.content
          };
          this.channelMsg.unshift(msdData);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_ChannelMsgUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ChannelMsgUpdate({
            error: Error()
          }), Evt_ChannelMsgUpdate) : Evt_ChannelMsgUpdate);
        }
        /**获取频道消息列表 */


        static GetChannelMsgList() {
          return this.channelMsg;
        }
        /**检测是否有加速道具 */


        static CheckAddTimeItem() {
          var itemDatas = this.GetItemTypeDatas((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).speed);
          return itemDatas && itemDatas.length > 0;
        }
        /**
         * 检测系统是否开启
         * @param id 
         * @returns 
         */


        static GetSysIsOpen(id) {
          var stdSysOpen = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetSysOpenCfg(id);

          if (stdSysOpen) {
            for (var n = 1;; n++) {
              var types = stdSysOpen['ConditionId' + n];
              var values = stdSysOpen['ConditionValue' + n];
              if (types == undefined || values == undefined) break;

              for (var i = 0; i < types.length; i++) {
                var type = types[i];
                var value = values[i];

                if ((_crd && DL === void 0 ? (_reportPossibleCrUseOfDL({
                  error: Error()
                }), DL) : DL).Check(type, value)) {
                  return false;
                }
              }
            }
          }

          return true;
        } //一次性检测的红点id


        /**
         * 重置一次性红点
         */
        static ResetOneOffRedPoint() {
          if (!this.oneOffRedPoint) {
            this.oneOffRedPoint = js.createMap();
          }

          var id;
          var data;

          for (var index = 0; index < this.oneOffRedPointCondIds.length; index++) {
            id = this.oneOffRedPointCondIds[index];
            data = this.oneOffRedPoint[id];

            if (!data) {
              data = {
                id: id,
                isCheck: false,
                redPointVal: false
              };
            } else {
              data.isCheck = false;
              data.redPointVal = false;
            }

            this.oneOffRedPoint[id] = data;
          }
        } //设置一次性点击红点点击


        static SetOneOffRedPoint(id, redPointValue) {
          if (redPointValue === void 0) {
            redPointValue = false;
          }

          var data = this.oneOffRedPoint[id];

          if (data && data.isCheck) {
            data.redPointVal = redPointValue;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_LoginRedPointUpdate === void 0 ? (_reportPossibleCrUseOfEvt_LoginRedPointUpdate({
              error: Error()
            }), Evt_LoginRedPointUpdate) : Evt_LoginRedPointUpdate, id);
          }
        }
        /**获取一次性红点数据 */


        static GetOneOffRedPoint(id) {
          return this.oneOffRedPoint[id];
        }

        //我的公会数据
        static ResetMyGuildData() {
          this.MyGuild = null;
        } //获取我的公会权限


        static GetMyGuildLimit() {
          if (!this.MyGuild) return null;
          var memberData = this.MyGuild.members[this.roleInfo.player_id];
          if (!memberData) return null;
          return (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetGuildRole(memberData.role);
        }
        /**获取我是否有审核权限 */


        static GetMyGuildApply() {
          var stdRole = this.GetMyGuildLimit();
          if (!stdRole) return false;
          return stdRole && stdRole.PermissionApplication > 0;
        }
        /**获取我是否有修改行会信息权限 */


        static GetMyGuildChange() {
          var stdRole = this.GetMyGuildLimit();
          if (!stdRole) return false;
          if (stdRole.PermissioneName > 0) return true;
          if (stdRole.PermissionLogo > 0) return true;
          if (stdRole.PermissionJoin > 0) return true;
          if (stdRole.PermissionEditAnnouncement > 0) return true;
          return false;
        }
        /**获取公会成员是否满足莫一项公会职位*/


        static GetGuildMeetPost(playerId, postId) {
          if (!this.MyGuild) return false;
          var memberData = this.MyGuild.members[playerId];
          if (!memberData) return false;
          return memberData.role == postId;
        }
        /**获取公会职位人数 */


        static GetGuildPostNum(id) {
          if (!this.MyGuild) return 0;
          var num = 0;
          var memberData;

          for (var _key3 in this.MyGuild.members) {
            memberData = this.MyGuild.members[_key3];

            if (memberData.role == id) {
              num++;
            }
          }

          return num;
        }
        /**获取公会是否已申请过*/


        static GetGuildIsHaveApply(guildId, list) {
          var applyData;
          var applyTime = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetGuildComm().ApplicationsExpirationTime;

          for (var index = 0; index < list.length; index++) {
            applyData = list[index];
            if (applyData.guild_id == guildId && this.GetServerTime() < applyData.time + applyTime) return true;
          }

          return false;
        }
        /**获取公会事件内容*/


        static GetGuildEventCont(guildEventData) {
          var stdGuildEvent = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetGuildEvent(guildEventData.event_type);
          var result = stdGuildEvent.Content;

          if (stdGuildEvent) {
            if (guildEventData.event_args) {
              for (var index = 0; index < guildEventData.event_args.length; index++) {
                result = this.GetGuildEventStr(result, stdGuildEvent.ID, index, guildEventData.event_args[index]);
              }
            }
          }

          return result;
        }

        static GetGuildEventStr(cont, eventId, index, val) {
          var key = "{" + index + "}";
          var newVal;

          switch (eventId) {
            case (_crd && GuildEventType === void 0 ? (_reportPossibleCrUseOfGuildEventType({
              error: Error()
            }), GuildEventType) : GuildEventType).EventType_4:
              if (index == 1) {
                var stdGuildRole = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetGuildRole(Number(val));

                if (stdGuildRole) {
                  newVal = stdGuildRole.Name;
                }
              }

              break;
          }

          return cont.replace(key, newVal || val);
        }
        /**根据公会类型获取公会权益列表 */


        static GetGuildPostPrivilegeList(guildType, guildPost) {
          var list = [];
          var stdGuildType = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetGuildType(guildType);
          var idList = stdGuildType["Equity_list" + guildPost];
          if (!idList) return list;
          var stdEquity;

          for (var i = 0; i < idList.length; i++) {
            stdEquity = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetGuildEquity(idList[i]);

            if (stdEquity) {
              list.push(stdEquity);
            }
          }

          return list;
        }
        /**获取我的公会权益列表 */


        static GetMyGuildPrivilegeList() {
          if (!this.MyGuild) return [];
          var myPost = this.GetMyGuildLimit();
          if (!myPost) return [];
          return this.GetGuildPostPrivilegeList(this.MyGuild.type, myPost.ID);
        }
        /**根据传入id获取我的公会权益 没有此权益则返回null */


        static GetMyGuildPrivilegeById(id) {
          var list = this.GetMyGuildPrivilegeList();

          for (var std of list) {
            if (std.ID == id) return std;
          }

          return null;
        }
        /**根据传入id获取我的公会权益值 没有则返回0*/


        static GetMyGuildPrivilegeByIdToValue(id) {
          var myStd = PlayerData.GetMyGuildLimit();
          if (!myStd) return 0;
          var std = this.GetMyGuildPrivilegeById(id);
          if (!std) return 0;

          for (var index = 0; index < std.GuildRole.length; index++) {
            if (myStd.ID == std.GuildRole[index]) {
              return std.RewardType[index];
            }
          }

          return 0;
        }
        /**获取我在公会是否有管理权限 */


        static GetMyGuildAuthority(myData, targetData) {
          if (targetData.player_id == PlayerData.roleInfo.player_id) return;
          var myStd = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetGuildRole(myData.role);
          var targetStd = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetGuildRole(targetData.role); //return myStd.PermissionRoleAppointment > targetStd.PermissionRoleAppointment || myStd.PermissionKickPlayer > targetStd.PermissionKickPlayer;

          switch (myStd.ID) {
            case (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
              error: Error()
            }), GuildPostType) : GuildPostType).President:
              if (targetStd.ID == (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
                error: Error()
              }), GuildPostType) : GuildPostType).VicePresident || targetStd.ID == (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
                error: Error()
              }), GuildPostType) : GuildPostType).Member) {
                return true;
              }

              break;

            case (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
              error: Error()
            }), GuildPostType) : GuildPostType).VicePresident:
              if (targetStd.ID == (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
                error: Error()
              }), GuildPostType) : GuildPostType).Officer || targetStd.ID == (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
                error: Error()
              }), GuildPostType) : GuildPostType).Member) {
                return true;
              }

              break;

            case (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
              error: Error()
            }), GuildPostType) : GuildPostType).Officer:
              if (targetStd.ID == (_crd && GuildPostType === void 0 ? (_reportPossibleCrUseOfGuildPostType({
                error: Error()
              }), GuildPostType) : GuildPostType).Member) {
                return true;
              }

              break;
          }

          return false;
        }
        /**搜素公会成员 */


        static SearchGuildMember(queryStr, datas) {
          var regex = new RegExp(queryStr.split('').join('.*?'), 'i');
          var list = js.createMap();
          var sGuildMember;

          for (var _key4 in datas) {
            sGuildMember = datas[_key4];

            if (regex.test(sGuildMember.name) || regex.test(sGuildMember.player_id)) {
              list[_key4] = sGuildMember;
            }
          }

          return list;
        }
        /**权益卡数据 */


        /**是否激活权益 */
        static GetIsActivateRights(equityId) {
          if (!PlayerData.rightsData || !PlayerData.rightsData.all_equities) return false;
          var val = PlayerData.rightsData.all_equities[equityId] || false;
          return val;
        }
        /**获取可繁育主卡数据 */


        static getFanyuMainRole() {
          var stds = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("role_quality");
          var roles = [];

          for (var std of stds) {
            for (var role of this.playerInfo.roles) {
              var isdefense = false;

              if (this.playerInfo.defense_lineup) {
                for (var defense of this.playerInfo.defense_lineup) {
                  if (defense.role_id == role.id) {
                    isdefense = true;
                    break;
                  }
                }
              }

              var isattack = false;

              if (this.playerInfo.attack_lineup) {
                for (var _defense of this.playerInfo.attack_lineup) {
                  if (_defense && _defense.role_id == role.id) {
                    isattack = true;
                    break;
                  }
                }
              }

              if (!isattack && !isdefense && role.type == std.Roleid && role.quality + 1 === std.RoleQuailty && role.building_id == 0 && !role.is_assisting && role.passive_skills && !role.is_in_main_building) {
                // console.log("mainCard**********",role.id,role.building_id);
                roles.push(role);
              }
            }
          }

          var curRoles = [];
          curRoles = roles.filter((item, index) => roles.indexOf(item) === index);
          curRoles.sort((a, b) => {
            if (a.passive_skills.length == b.passive_skills.length) {
              return b.battle_power - a.battle_power;
            } else {
              return b.passive_skills.length - a.passive_skills.length;
            }
          });
          return curRoles;
        }
        /**获取可繁育副卡数据 */


        static getFanyuOrtherRole(mainRole, std) {
          var roles = [];

          for (var role of this.playerInfo.roles) {
            var isdefense = false;

            if (this.playerInfo.defense_lineup) {
              for (var defense of this.playerInfo.defense_lineup) {
                if (defense.role_id == role.id) {
                  isdefense = true;
                  break;
                }
              }
            }

            var isattack = false;

            if (this.playerInfo.attack_lineup) {
              for (var _defense2 of this.playerInfo.attack_lineup) {
                if (_defense2 && _defense2.role_id == role.id) {
                  isattack = true;
                  break;
                }
              }
            }

            var need_1 = !isattack && !isdefense && std.OtherRoleid.indexOf(role.type) != -1 && mainRole.quality === role.quality;
            var need_2 = role.building_id == 0 && !role.is_assisting && role.passive_skills && !role.is_in_main_building;

            if (need_1 && need_2 && role.ownership_type == mainRole.ownership_type) {
              roles.push(role);
            }
          }

          var curRoles = [];
          curRoles = roles.filter((item, index) => roles.indexOf(item) === index);
          curRoles.sort((a, b) => {
            if (a.passive_skills.length == b.passive_skills.length) {
              return b.battle_power - a.battle_power;
            } else {
              return b.passive_skills.length - a.passive_skills.length;
            }
          });
          return curRoles;
        }
        /**获取可进化的角色 */


        static getJinHuaRole() {
          var stds = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("role_quality");
          var roles = [];

          for (var std of stds) {
            for (var role of this.playerInfo.roles) {
              var isdefense = false;

              if (this.playerInfo.defense_lineup) {
                for (var defense of this.playerInfo.defense_lineup) {
                  if (defense.role_id == role.id) {
                    isdefense = true;
                    break;
                  }
                }
              }

              var isattack = false;

              if (this.playerInfo.attack_lineup) {
                for (var _defense3 of this.playerInfo.attack_lineup) {
                  if (_defense3 && _defense3.role_id == role.id) {
                    isattack = true;
                    break;
                  }
                }
              }

              var is_work = !isattack && !isdefense && role.building_id == 0 && !role.is_in_main_building;
              var is_can = role.type == std.Roleid && !role.is_assisting && role.passive_skills && role.level == 1;

              if (is_work && is_can && std.RoleTypeQual != 2) {
                // console.log("mainCard**********",role.id,role.building_id);
                roles.push(role);
              }
            }
          }

          var curRoles = [];
          curRoles = roles.filter((item, index) => roles.indexOf(item) === index);
          curRoles.sort((a, b) => {
            if (a.passive_skills.length == b.passive_skills.length) {
              return b.battle_power - a.battle_power;
            } else {
              return b.passive_skills.length - a.passive_skills.length;
            }
          });
          return curRoles;
        }
        /**获取可洗练的角色 */


        static getXiLianRole() {
          var roles = [];

          for (var role of this.playerInfo.roles) {
            var isdefense = false;

            if (this.playerInfo.defense_lineup) {
              for (var defense of this.playerInfo.defense_lineup) {
                if (defense.role_id == role.id) {
                  isdefense = true;
                  break;
                }
              }
            }

            var isattack = false;

            if (this.playerInfo.attack_lineup) {
              for (var _defense4 of this.playerInfo.attack_lineup) {
                if (_defense4 && _defense4.role_id == role.id) {
                  isattack = true;
                  break;
                }
              }
            }

            var is_has = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRoleSkillClearCfg(role.type, role.quality);
            var is_work = !isattack && !isdefense && role.building_id == 0 && !role.is_in_main_building;
            var is_can = role.quality != 1 && !role.is_assisting && role.passive_skills && is_has;

            if (is_work && is_can) {
              // console.log("mainCard**********",role.id,role.building_id);
              roles.push(role);
            }
          }

          var curRoles = [];
          curRoles = roles.filter((item, index) => roles.indexOf(item) === index);
          curRoles.sort((a, b) => {
            if (a.passive_skills.length == b.passive_skills.length) {
              return b.battle_power - a.battle_power;
            } else {
              return b.passive_skills.length - a.passive_skills.length;
            }
          });
          return curRoles;
        }
        /**获取上阵角色战力 */


        static GetShangZhenBattlePower() {
          var val = 0;
          var szRoleData;
          var list = this.attackRoles;
          var roleData;

          for (var index = 0; index < list.length; index++) {
            szRoleData = list[index];
            if (!szRoleData) continue;
            roleData = this.GetRoleById(szRoleData.role_id);

            if (roleData) {
              val = val.add(roleData.battle_power);
            }
          }

          return val;
        }
        /**修正权益卡时间为凌晨00点 */


        static CorrectionRightsCardTime(data) {
          if (data && data.benefit_card && data.benefit_card.cards) {
            for (var _key5 in data.benefit_card.cards) {
              var time = data.benefit_card.cards[_key5];
              var newTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).weeHoursTime(time);
              console.log("权益卡时间修正---->offset " + (time - newTime));
              data.benefit_card.cards[_key5] = newTime;
            }
          }

          return data;
        }
        /**获取权益卡激活剩余时间 */


        static GetEquityCardResidueTime(cardId) {
          if (!this.rightsData || !this.rightsData.benefit_card || !this.rightsData.benefit_card.cards) return 0;
          var endTime = this.rightsData.benefit_card.cards[cardId];
          if (!endTime) return 0;
          return endTime - this.GetServerTime();
        }
        /**获取权益卡是否可领奖*/


        static GetEquityCardIsCanGetAward(cardId) {
          if (this.GetEquityCardResidueTime(cardId) < 1) return false;
          if (!this.rightsData.benefit_card_can_claim || !this.rightsData.benefit_card_can_claim[cardId]) return false;
          return true;
        }
        /**通过权益类型获取权益卡列表 */


        static GetEquityByTypeGetCardList(type, isActivate) {
          if (isActivate === void 0) {
            isActivate = false;
          }

          var cardList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetEquityCardList();
          var stdCard;
          var stdEquity;
          var typeCardList = [];

          for (var index = 0; index < cardList.length; index++) {
            stdCard = cardList[index];

            for (var i = 0; i < stdCard.Equity_list.length; i++) {
              stdEquity = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).getEquityListById(stdCard.Equity_list[i]);
              if (!stdEquity) continue;

              if (stdEquity.Equity_Type == type) {
                if (isActivate && this.GetEquityCardResidueTime(stdCard.Equity_CardID) < 1) continue;
                typeCardList.push(stdCard);
              }
            }
          }

          return typeCardList;
        }
        /**
         * 通过权益类型获取权益总值
         * @param type 权益类型
         * @param isActivate 是否只计算激活的
         * @returns 
         */


        static GetEquityByTypeTotalValue(type, isActivate) {
          if (isActivate === void 0) {
            isActivate = true;
          }

          var cardList = this.GetEquityByTypeGetCardList(type, isActivate);
          var stdEquity;
          var stdEquityCard;
          var value = 0;

          for (var index = 0; index < cardList.length; index++) {
            stdEquityCard = cardList[index]; //过期未激活不计算

            if (isActivate && this.GetEquityCardResidueTime(stdEquityCard.Equity_CardID) < 1) continue;

            for (var j = 0; j < stdEquityCard.Equity_list.length; j++) {
              stdEquity = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).getEquityListById(stdEquityCard.Equity_list[j]);

              if (stdEquity && stdEquity.Equity_Type == type) {
                value = value.add(stdEquity.Value);
              }
            }
          }

          return value;
        }
        /**根据权益卡获取权益值 */


        static GetEquityCardByTypeValue(cardId, type, isActivate) {
          if (isActivate === void 0) {
            isActivate = true;
          }

          var stdEquityCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getEquityCardById(cardId);
          var stdEquity;
          var value = 0;

          if (stdEquityCard) {
            //过期未激活不计算
            if (isActivate && this.GetEquityCardResidueTime(stdEquityCard.Equity_CardID) > 0) {
              for (var i = 0; i < stdEquityCard.Equity_list.length; i++) {
                stdEquity = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).getEquityListById(stdEquityCard.Equity_list[i]);

                if (stdEquity && stdEquity.Equity_Type == type) {
                  value = stdEquity.Value;
                  break;
                }
              }
            }
          }

          return value;
        }
        /**根据主基地劳动工人获取所有产出勋章 */


        static GetAllWorkMedal() {
          var workerRate_medal = 0;
          var info = PlayerData.GetBuilding((_crd && BuildingType === void 0 ? (_reportPossibleCrUseOfBuildingType({
            error: Error()
          }), BuildingType) : BuildingType).ji_di);

          if (!info) {
            return workerRate_medal;
          }

          for (var index = 0; index < info.workerIdArr.length; index++) {
            var roleData = info.workerIdArr[index];
            var cfg_medal = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetProduceMedal(roleData.type, roleData.quality);

            if (!cfg_medal) {
              debugger;
            }

            workerRate_medal = workerRate_medal + cfg_medal.produce_medal;
          }

          return workerRate_medal;
        }
        /**权益卡入口红点 */


        static CheckEquityRead() {
          var cardList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetEquityCardTabList();
          var stdCardTab;

          for (var index = 0; index < cardList.length; index++) {
            stdCardTab = cardList[index];

            for (var j = 0; j < stdCardTab.EquityCardIds.length; j++) {
              if (this.CheckEquityMiniTabRead(stdCardTab.EquityCardIds[j])) {
                return true;
              }
            }
          }

          return false;
        }

        static CheckEquityMaxTabRead(tabId) {
          var stdTab = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetEquityCardTab(tabId);

          for (var j = 0; j < stdTab.EquityCardIds.length; j++) {
            if (this.CheckEquityMiniTabRead(stdTab.EquityCardIds[j])) {
              return true;
            }
          }

          return false;
        }

        static CheckEquityMiniTabRead(cardId) {
          if (!PlayerData.GetEquityCardIsCanGetAward(cardId)) {
            return false;
          }

          return true;
        } //设置今日不再提示时间


        static SetTodayTips(tipsId) {
          var time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).nextDayHoursTime(this.GetServerTime());
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetNumber(this.roleInfo.player_id + "_TodayNoTips_" + tipsId, time);
        } //是否显示今日不再提示


        static GetIsShowTodayTips(tipsId) {
          var oleTime = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetNumber(this.roleInfo.player_id + "_TodayNoTips_" + tipsId) || 0;

          if (oleTime > 0) {
            return this.GetServerTime() > oleTime;
          }

          return true;
        }
        /**炸鱼数据 */


        /**获取炸鱼当前最新回合数 */
        static get CurFishBombSatgeInfo() {
          if (this.fishBombData && this.fishBombData.round_info) {
            return this.fishBombData.round_info.stages[this.fishBombData.round_info.stage_index];
          }

          return null;
        } //获取炸鱼当前回合状态


        static GetFishBombRoundState() {
          if (!this.fishBombData || !this.fishBombData.session_info) return (_crd && FishBombRoundState === void 0 ? (_reportPossibleCrUseOfFishBombRoundState({
            error: Error()
          }), FishBombRoundState) : FishBombRoundState).NoOpen; //活动未开启

          if (!this.fishBombData.session_info.is_open || this.GetServerTime() >= this.fishBombData.session_info.end_time) return (_crd && FishBombRoundState === void 0 ? (_reportPossibleCrUseOfFishBombRoundState({
            error: Error()
          }), FishBombRoundState) : FishBombRoundState).NoOpen; //活动未开启

          if (!this.CurFishBombSatgeInfo) return (_crd && FishBombRoundState === void 0 ? (_reportPossibleCrUseOfFishBombRoundState({
            error: Error()
          }), FishBombRoundState) : FishBombRoundState).NoRound; //没有回合进行中
          //已结算

          /* if(this.fishBombData.round_info.stage_index == this.fishBombData.round_info.stage_type){
              if (this.fishBombData.settlement) {
                  return FishBombRoundState.RoundSettle;//大回合结算
              }else if(this.GetServerTime() >= this.CurFishBombSatgeInfo.ignite_time + 3){
                  return FishBombRoundState.StageSettle;//小回合结算
              }
          }else{
              if (this.GetServerTime() >= this.CurFishBombSatgeInfo.settlement_time) {
                  return FishBombRoundState.StageSettle;//小回合结算
              }
          } */

          if (this.fishBombData.settlement) {
            return (_crd && FishBombRoundState === void 0 ? (_reportPossibleCrUseOfFishBombRoundState({
              error: Error()
            }), FishBombRoundState) : FishBombRoundState).RoundSettle; //大回合结算
          } else if (this.GetServerTime() >= this.CurFishBombSatgeInfo.ignite_time + 1) {
            return (_crd && FishBombRoundState === void 0 ? (_reportPossibleCrUseOfFishBombRoundState({
              error: Error()
            }), FishBombRoundState) : FishBombRoundState).StageSettle; //小回合结算
          }

          if (this.GetServerTime() >= this.CurFishBombSatgeInfo.ignite_time) {
            return (_crd && FishBombRoundState === void 0 ? (_reportPossibleCrUseOfFishBombRoundState({
              error: Error()
            }), FishBombRoundState) : FishBombRoundState).BombBlasts; //炸弹爆炸
          }

          return (_crd && FishBombRoundState === void 0 ? (_reportPossibleCrUseOfFishBombRoundState({
            error: Error()
          }), FishBombRoundState) : FishBombRoundState).CanCastBomb;
        } //获取自己炸鱼当前回合总投入


        static GetFishBombSelfCurRoundCost() {
          var val = 0;

          if (this.fishBombData && this.fishBombData.player) {
            for (var _key6 in this.fishBombData.player.round_cost) {
              var cost = this.fishBombData.player.round_cost[_key6];
              val = val.add(cost);
            }
          }

          return val;
        } //获取炸鱼当前选择池塘id


        static GetFishBombCurPondId() {
          var pondId = 0;

          if (this.fishBombData && this.fishBombData.player && this.fishBombData.round_info) {
            if (this.fishBombData.round_info.stage_index > 0) {
              pondId = this.fishBombData.player.fish_pool_id[this.fishBombData.round_info.stage_index];
            }
          }

          return pondId;
        }
        /**获取炸鱼是否参与炸鱼了 */


        static GetFishBombJoin() {
          if (!this.CurFishRoundInfo) return false; //第一个回合未投入视为未参加

          var selectId = this.fishBombData.player.fish_pool_id[1];
          var costNum = this.fishBombData.player.round_cost[1];

          if (selectId > 0 && costNum > 0) {
            return true;
          }

          return false;
        }
        /**获取当前炸鱼炸弹类型*/


        static FishBombType(cost) {
          var stdRodList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetFishRodTypeList(2);
          var std;

          for (var index = stdRodList.length - 1; index > -1; index--) {
            std = stdRodList[index];

            if (cost >= std.MinValue && cost <= std.MaxValue) {
              return std.TypeId;
            }
          }

          return 1;
        }
        /**获取炸鱼死的回合数 */


        static GetFishBombDieRoundNum() {
          var dieRound = 0;
          var pondId;

          if (this.fishBombData.round_info && this.fishBombData.player && this.fishBombData.player.fish_pool_id) {
            for (var _key7 in this.fishBombData.player.fish_pool_id) {
              pondId = this.fishBombData.player.fish_pool_id[_key7];

              if (pondId > 0) {
                var stageInfo = this.fishBombData.round_info.stages[_key7];

                if (stageInfo && stageInfo.fish_pool[pondId].is_kill) {
                  dieRound = Number(_key7);
                  break;
                }
              }
            }
          }

          return dieRound;
        }
        /**
         * 获取是否热门池塘
         * @param id 
         * @returns 
         */


        static GetHotPond(id) {
          var costNum = 0;
          var maxId = 0;

          if (this.CurFishBombSatgeInfo && this.CurFishBombSatgeInfo.fish_pool) {
            var pondData;

            for (var _key8 in this.CurFishBombSatgeInfo.fish_pool) {
              pondData = this.CurFishBombSatgeInfo.fish_pool[_key8];

              if (costNum == 0) {
                if (pondData.cost > 0) {
                  costNum = pondData.cost;
                  maxId = pondData.fish_pool_id;
                }
              } else {
                if (pondData.cost > costNum) {
                  costNum = pondData.cost;
                  maxId = pondData.fish_pool_id;
                }
              }
            }
          }

          return maxId == id;
        } //世界boss数据


        static SetWorldBossDataData(data) {
          if (data == null || !data.base || data.base.boss_type < 1) {
            this.worldBossData = null;
            return;
          }

          var bossIndex = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetWorldBossComm.BossType.indexOf(data.base.boss_type);

          if (bossIndex > -1) {
            var endNum = data.base.boss_type % 2000 * 1000;
            var stdLvId = 2000000 + endNum + data.base.boss_lv;
            var stdRoleType = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRole()[data.base.boss_type];
            var skillList = [];
            var attrList = [];
            var attrValueList = [];
            var maxHp = 0;

            if (stdRoleType) {
              for (var _id3 = 1;; _id3++) {
                var skillId = stdRoleType["Skill" + _id3];
                if (skillId == undefined) break;
                skillList.push(skillId);
              }

              var stdAttrTypeList = stdRoleType.AttrFight.concat();
              var stdAttrValueList = stdRoleType.AttrFightValue.concat();
              var bossLvList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetWorldBossLvList();
              var bossLvInfo;
              var curBossLv;

              for (var index = 0; index < bossLvList.length; index++) {
                bossLvInfo = bossLvList[index];

                if (stdLvId == bossLvInfo.ID) {
                  curBossLv = bossLvInfo;
                  break;
                }
              }

              var attrType;
              var attrVal;
              var attrTypeName;
              var newAttrValue;

              for (var attrIndex = 0; attrIndex < stdAttrTypeList.length; attrIndex++) {
                attrType = stdAttrTypeList[attrIndex];
                attrVal = stdAttrValueList[attrIndex];
                newAttrValue = attrVal;

                if (curBossLv) {
                  attrTypeName = (_crd && AttrFight === void 0 ? (_reportPossibleCrUseOfAttrFight({
                    error: Error()
                  }), AttrFight) : AttrFight)[attrType];

                  if (attrTypeName) {
                    newAttrValue = newAttrValue.add(curBossLv[attrTypeName]);
                  }
                }

                if ((_crd && AttrFight === void 0 ? (_reportPossibleCrUseOfAttrFight({
                  error: Error()
                }), AttrFight) : AttrFight).HPMax == attrType) {
                  maxHp = maxHp.add(newAttrValue);
                }

                attrList.push(attrType);
                attrValueList.push(newAttrValue);
              }
            }

            this.worldBossData = {
              terminator: data.base.terminator,
              settle: data.base.settle,
              start: data.base.start,
              end: data.base.end,
              boss_type: data.base.boss_type,
              boss_lv: data.base.boss_lv,
              HP: data.base.HP,
              max_Hp: data.base.max_HP,
              reward_status: data.reward_status,
              roundId: data.base.r,
              name: stdRoleType.Name,
              icon: stdRoleType.Icon,
              model: stdRoleType.Prefab,
              skillList: skillList,
              attrTypeList: attrList,
              attrValueList: attrValueList,
              desc: stdRoleType.Synopsis
            };
          }
        }

        static SetWorldBossRankData(data) {
          if (!data) {
            this.worldBossRankData = null;
            return;
          }

          var tempRankList = this.worldBossRankData ? this.worldBossRankData.rank_data_list.concat() : [];
          var newRankList = data.rank_data_list ? data.rank_data_list : [];
          var rankData;
          var changeIdList = [];

          for (var index = 0; index < newRankList.length; index++) {
            rankData = newRankList[index];
            changeIdList[index] = rankData.id;
            tempRankList[index] = rankData;
          }

          var endLen = changeIdList.length;
          var changeId; //根据改变的id去重

          for (var j = 0; j < endLen; j++) {
            changeId = changeIdList[j];

            for (var i = endLen; i < tempRankList.length; i++) {
              rankData = tempRankList[i];

              if (rankData.id == changeId) {
                tempRankList.splice(i, 1);
                break;
              }
            }
          }

          data.rank_data_list = tempRankList;
          this.worldBossRankData = data;
        }
        /**获取世界boss是否可挑战 */


        static GetWorldIsCanChallenge() {
          if (!this.worldBossData) return false;
          if (this.worldBossData.terminator != "") return false;
          if (this.GetServerTime() >= this.worldBossData.end) return false;
          if (this.worldBossData.HP < 1) return false;
          return true;
        }

        /**检测世界boss是否临近开启 */
        static CheckWorldBossNearOpneTime() {
          if (!this.worldBossOpenTimeList) {
            this.InitWorldBossOpenTime();
          }

          var isNear = false;
          var serverTime = this.GetServerTime();

          for (var index = 0; index < this.worldBossOpenTimeList.length; index++) {
            var timeData = this.worldBossOpenTimeList[index];
            var time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).weeHoursTime(serverTime) + (timeData.startHour * 60 + timeData.startMinute) * 60;
            var startS = time - 6000; //世界boss开始前十分钟

            var endS = time + 1000; //世界boss开始后1分钟

            if (serverTime >= startS && serverTime <= endS) {
              isNear = true;
              break;
            }
          }

          return isNear;
        }

        static GetWorldOpenTimeList() {
          if (!this.worldBossOpenTimeList) {
            this.InitWorldBossOpenTime();
          }

          return this.worldBossOpenTimeList;
        }

        static InitWorldBossOpenTime() {
          this.worldBossOpenTimeList = [];
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetWorldBossComm;

          for (var index = 0; index < std.Opentime.length; index++) {
            var openTiem = std.Opentime[index];
            var timearr = openTiem.replace(" ", ":").replace(/\:/g, "-").split("-");
            this.worldBossOpenTimeList[index] = {
              startHour: Number(timearr[0]),
              startMinute: Number(timearr[1]),
              endHour: Number(timearr[2]),
              endMinute: Number(timearr[3])
            };
          }
        }

      };
      PlayerData.isHideUI = false;
      //是否隐藏ui中
      PlayerData.serverTime = 0;
      PlayerData.server_offset = 0;
      PlayerData._serverDate = new Date();
      PlayerData.RunHomeId = void 0;
      PlayerData.rankTime = {};

      /**
       * 循环刷新的map
       */
      PlayerData.CycleTimeMap = {};
      PlayerData.playerInfo = void 0;
      PlayerData.tradeViewData = {
        code: 0,
        query_type: 0,
        query_args: {},
        page_index: 0,
        page_size: 0,
        page_last_index: 0,
        order_list: [],
        order_state_list: [],
        total_count: 0
      };
      PlayerData.tradeAllBalances = {
        jy: 0,
        hc: 0,
        score: 0,
        serverid: "",
        unionid: ""
      };
      PlayerData.fightState = 0;
      PlayerData.mails = [];
      PlayerData.mailmap = {};
      PlayerData.mails_log = [];
      PlayerData.fishData = void 0;
      PlayerData.fishItems = void 0;
      PlayerData.fishHeros = [];
      PlayerData.fishShop = void 0;
      PlayerData.fishingMatch = void 0;
      PlayerData._fishHeroId = 0;
      PlayerData.fishTradeData = void 0;
      PlayerData.LootSeasonInfo = {
        season_id: 0,
        //玩家ID
        status: "",
        //赛季状态
        is_settled: false,
        //
        currency: 0,
        //当前
        currency_74: 0,
        wood: 0,
        //木头
        water: 0,
        //水
        rock: 0,
        //石头
        seed: 0,
        //种子
        start_time: 0,
        //开始时间
        end_time: 0,
        //结束时间
        score: 0,
        //分数
        rank: 0,
        //排行
        all_player: 0,
        //总人数
        rank_list: [] //赛季排行信息

      };
      PlayerData.LootSeasonApplyInfo = null;

      /**上一赛季家园掠夺信息 */
      PlayerData.LootLastSeasonInfo = {
        seasonId: 0,
        //玩家ID
        currency: 0,
        //当前
        currency_74: 0,
        wood: 0,
        //木头
        water: 0,
        //水
        rock: 0,
        //石头
        seed: 0,
        //种子
        rank: 0,
        //排行
        all_player: 0,
        //总人数
        rank_list: [] //赛季排行信息

      };
      PlayerData.LootPlayerData = {
        player_id: "",
        //玩家ID
        match_count: 0,
        //匹配次数
        paid_refresh_count: 0,
        //刷新次数
        remaining_defense_count: 0,
        //防守次数
        match_duration: [],
        //匹配次数
        match_cd_end_time: 0,
        //匹配cd剩余时间
        has_shield: false,
        //是否有盾
        shield_end_time: 0,
        //盾结束时间
        score: 0,
        //分数
        defense_end_time: 0,
        //分数
        is_use_item: false //是否使用道具

      };
      PlayerData.PvpShopData = null;
      PlayerData.LootMatchList = [];
      PlayerData.TipsList = [];
      PlayerData.ShopGroupInfo = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
        error: Error()
      }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj( //基础商店
      (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
        error: Error()
      }), ShopGroupId) : ShopGroupId).BaseShop, [{
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).BaseShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).LuckyShop,
        TabSort: 0,
        ShopName: "抽奖商城"
      }, {
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).BaseShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).DayShop,
        TabSort: 0,
        ShopName: "每日商城"
      }, {
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).BaseShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).TempShop,
        TabSort: 0,
        ShopName: "临时商店"
      }, {
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).BaseShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).WeekShop,
        TabSort: 0,
        ShopName: "特殊商店"
      }], //pvp商店
      (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
        error: Error()
      }), ShopGroupId) : ShopGroupId).GemShop, [{
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).GemShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).GemConversion,
        TabSort: 0,
        ShopName: "宝石积分提取"
      }, {
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).GemShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).GemShop,
        TabSort: 0,
        ShopName: "宝石商城"
      }], //pvp商店
      (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
        error: Error()
      }), ShopGroupId) : ShopGroupId).PvpShop, [{
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).PvpShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).PvpShop,
        TabSort: 0,
        ShopName: "勋章商城"
      }], //世界boss商店
      (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
        error: Error()
      }), ShopGroupId) : ShopGroupId).WorldBossShop, [{
        ShopGroupId: (_crd && ShopGroupId === void 0 ? (_reportPossibleCrUseOfShopGroupId({
          error: Error()
        }), ShopGroupId) : ShopGroupId).WorldBossShop,
        ShopType: (_crd && ShopType === void 0 ? (_reportPossibleCrUseOfShopType({
          error: Error()
        }), ShopType) : ShopType).WorldBossShop,
        TabSort: 0,
        ShopName: "Boss商城"
      }]);
      PlayerData.shopMap = void 0;
      PlayerData.noticeDatas = [];
      PlayerData.fishOpenTimeCfg = void 0;
      PlayerData.fishTempDate = new Date();
      PlayerData.fishTradeOpenTimeCfg = void 0;
      PlayerData.channelMsg = [];
      PlayerData.advisterCount = js.createMap();
      PlayerData.oneOffRedPointCondIds = [(_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
        error: Error()
      }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_FishOpen, (_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
        error: Error()
      }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_FishShopBuy, (_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
        error: Error()
      }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_FishSell, (_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
        error: Error()
      }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_RolePassiveSkill, (_crd && OneOffRedPointId === void 0 ? (_reportPossibleCrUseOfOneOffRedPointId({
        error: Error()
      }), OneOffRedPointId) : OneOffRedPointId).OffRedPoint_FishTradeOpen];
      //一次性红点记录
      PlayerData.oneOffRedPoint = js.createMap();
      PlayerData.MyGuild = null;
      PlayerData.rightsData = null;
      PlayerData.fishBombData = void 0;
      PlayerData.worldBossData = null;
      PlayerData.worldBossRankData = null;
      PlayerData.worldBossOpenTimeList = void 0;

      _export("default", PlayerData);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f98fe63e5a5e2994a2f6f0e2d88fa660b62f63e.js.map