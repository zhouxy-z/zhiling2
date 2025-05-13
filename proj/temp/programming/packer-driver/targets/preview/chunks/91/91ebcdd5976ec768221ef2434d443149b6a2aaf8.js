System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PlayerDataMap, RoleStateType, FightState, BuildingState, BoostType, SortType, SOrderType, SQueryType, SQuerySortType, SFriendSortType, STaskState, STaskShowType, STaskType, Tips2ID, SRankType, ApplicationStatus, GuildEventType, LootSeasonApplyState, TodayNoTipsId;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f049fjAnONEtqAIAIfQ4ACS", "PlayerStruct", undefined);

      /**配置数据枚举 */
      _export("PlayerDataMap", PlayerDataMap = /*#__PURE__*/function (PlayerDataMap) {
        PlayerDataMap[PlayerDataMap["PrevHomeId"] = 1] = "PrevHomeId";
        PlayerDataMap[PlayerDataMap["BattleSpeed"] = 2] = "BattleSpeed";
        PlayerDataMap[PlayerDataMap["BattleAuto"] = 3] = "BattleAuto";
        PlayerDataMap[PlayerDataMap["Guide"] = 4] = "Guide";
        PlayerDataMap[PlayerDataMap["PveChapter"] = 5] = "PveChapter";
        return PlayerDataMap;
      }({}));
      /**角色状态类型 */


      _export("RoleStateType", RoleStateType = /*#__PURE__*/function (RoleStateType) {
        RoleStateType[RoleStateType["State_None"] = 0] = "State_None";
        RoleStateType[RoleStateType["State_Work"] = 1] = "State_Work";
        RoleStateType[RoleStateType["State_Attack"] = 2] = "State_Attack";
        RoleStateType[RoleStateType["State_Defend"] = 3] = "State_Defend";
        RoleStateType[RoleStateType["State_Assist"] = 4] = "State_Assist";
        RoleStateType[RoleStateType["State_NFT"] = 5] = "State_NFT";
        return RoleStateType;
      }({})); /////////////////////////////////////////////////////////////////////////////
      // 数据结构
      /////////////////////////////////////////////////////////////////////////////

      /**战斗状态 */


      _export("FightState", FightState = /*#__PURE__*/function (FightState) {
        FightState[FightState["None"] = 0] = "None";
        FightState[FightState["Home"] = 1] = "Home";
        FightState[FightState["PvP"] = 2] = "PvP";
        FightState[FightState["PvE"] = 3] = "PvE";
        FightState[FightState["Replay"] = 4] = "Replay";
        FightState[FightState["WorldBoss"] = 5] = "WorldBoss";
        return FightState;
      }({}));
      /**建筑状态 */


      _export("BuildingState", BuildingState = /*#__PURE__*/function (BuildingState) {
        BuildingState[BuildingState["Lock"] = 0] = "Lock";
        BuildingState[BuildingState["CanUnLock"] = 1] = "CanUnLock";
        BuildingState[BuildingState["Building"] = 2] = "Building";
        BuildingState[BuildingState["Complete"] = 3] = "Complete";
        return BuildingState;
      }({}));
      /**资源 */

      /**道具 */

      /**角色数据 */

      /**技能定义 */

      /**建筑数据 */

      /**家园数据 */

      /**角色简单数据 */

      /**角色数据 */

      /**生产道具 */

      /**兵种库存 */

      /**生产中的兵种 */


      /**通用加速*/
      _export("BoostType", BoostType = /*#__PURE__*/function (BoostType) {
        BoostType[BoostType["BoostTypeUnknown"] = 0] = "BoostTypeUnknown";
        BoostType[BoostType["BoostTypeBuildingUpgrade"] = 1] = "BoostTypeBuildingUpgrade";
        BoostType[BoostType["BoostTypeSoldierProduce"] = 2] = "BoostTypeSoldierProduce";
        BoostType[BoostType["BoostTypeItemProduction"] = 3] = "BoostTypeItemProduction";
        return BoostType;
      }({}));
      /**
       * 通用加速返回数据
       */


      /**
       * 通用加速返回数据
       */
      _export("SortType", SortType = /*#__PURE__*/function (SortType) {
        SortType[SortType["priceUp"] = 0] = "priceUp";
        SortType[SortType["priceDown"] = 1] = "priceDown";
        SortType[SortType["totalUp"] = 2] = "totalUp";
        SortType[SortType["totalDown"] = 3] = "totalDown";
        SortType[SortType["countUp"] = 4] = "countUp";
        SortType[SortType["countDown"] = 5] = "countDown";
        return SortType;
      }({})); //交易所相关数据

      /**请求交易所列表返回数据 */

      /**单个订单数据 */

      /**世界交易所单个订单数据 */

      /**订单物品信息 */

      /**查询返回数据类型 */

      /**查询返回数据类型 */


      /**订单类型 */
      _export("SOrderType", SOrderType = /*#__PURE__*/function (SOrderType) {
        SOrderType[SOrderType["SELL"] = 0] = "SELL";
        SOrderType[SOrderType["BUY"] = 1] = "BUY";
        return SOrderType;
      }({}));
      /**检索订单类型 */


      _export("SQueryType", SQueryType = /*#__PURE__*/function (SQueryType) {
        SQueryType[SQueryType["Global"] = 0] = "Global";
        SQueryType[SQueryType["PlayerID"] = 1] = "PlayerID";
        SQueryType[SQueryType["ItemType"] = 2] = "ItemType";
        SQueryType[SQueryType["ThingType"] = 3] = "ThingType";
        SQueryType[SQueryType["RoleType"] = 4] = "RoleType";
        return SQueryType;
      }({}));
      /**订单排序枚举 */


      _export("SQuerySortType", SQuerySortType = /*#__PURE__*/function (SQuerySortType) {
        SQuerySortType[SQuerySortType["OpenTime"] = 0] = "OpenTime";
        SQuerySortType[SQuerySortType["UnitPrice"] = 1] = "UnitPrice";
        SQuerySortType[SQuerySortType["TotalPrice"] = 2] = "TotalPrice";
        SQuerySortType[SQuerySortType["UnitCount"] = 3] = "UnitCount";
        return SQuerySortType;
      }({}));
      /**原石数量 */

      /**彩虹体数量 */

      /**金币数量 */

      /**资源数据 */

      /**道具数据 */

      /**事物定义 */

      /**事物定义资源类 */

      /**事物列表 */

      /**邮件数据 */

      /**邮件数据 */
      //--------------------------好友----------------------

      /**好友数据 */

      /**收益数据 */

      /**好友收益 */

      /**上线好友数据 */

      /**上线好友 */

      /**下线好友数据 */

      /**下线好友 */


      /**好友列表排序枚举 */
      _export("SFriendSortType", SFriendSortType = /*#__PURE__*/function (SFriendSortType) {
        SFriendSortType[SFriendSortType["SortDailyOutputDesc"] = 1] = "SortDailyOutputDesc";
        SFriendSortType[SFriendSortType["SortDailyOutputAsc"] = 2] = "SortDailyOutputAsc";
        SFriendSortType[SFriendSortType["SortTotalOutputDesc"] = 3] = "SortTotalOutputDesc";
        SFriendSortType[SFriendSortType["SortTotalOutputAsc"] = 4] = "SortTotalOutputAsc";
        SFriendSortType[SFriendSortType["SortBindTimeDesc"] = 5] = "SortBindTimeDesc";
        SFriendSortType[SFriendSortType["SortBindTimeAsc"] = 6] = "SortBindTimeAsc";
        SFriendSortType[SFriendSortType["SortDailyActivityDesc"] = 7] = "SortDailyActivityDesc";
        return SFriendSortType;
      }({}));
      /**好友联系方式数据 */

      /**好友收益记录信息 */

      /** 收益记录返回数据*/

      /** 角色助战返回数据*/

      /**任务数据类型 */


      /**任务状态 */
      _export("STaskState", STaskState = /*#__PURE__*/function (STaskState) {
        STaskState[STaskState["unFinsh"] = 1] = "unFinsh";
        STaskState[STaskState["Finsh"] = 2] = "Finsh";
        return STaskState;
      }({}));
      /**任务类型 */


      _export("STaskShowType", STaskShowType = /*#__PURE__*/function (STaskShowType) {
        STaskShowType[STaskShowType["dayliy"] = 1] = "dayliy";
        STaskShowType[STaskShowType["week"] = 2] = "week";
        STaskShowType[STaskShowType["archive"] = 3] = "archive";
        STaskShowType[STaskShowType["friend"] = 4] = "friend";
        STaskShowType[STaskShowType["dayliyLogin"] = 5] = "dayliyLogin";
        return STaskShowType;
      }({}));
      /**好友的任务类型 */


      _export("STaskType", STaskType = /*#__PURE__*/function (STaskType) {
        STaskType[STaskType["dayTask"] = 1] = "dayTask";
        STaskType[STaskType["weekTask"] = 2] = "weekTask";
        STaskType[STaskType["achieveTask"] = 3] = "achieveTask";
        STaskType[STaskType["dayliyLogin"] = 4] = "dayliyLogin";
        STaskType[STaskType["invite"] = 5] = "invite";
        STaskType[STaskType["dayActive"] = 6] = "dayActive";
        STaskType[STaskType["weekActive"] = 7] = "weekActive";
        STaskType[STaskType["assistHelp"] = 8] = "assistHelp";
        STaskType[STaskType["fanyuHelp"] = 9] = "fanyuHelp";
        return STaskType;
      }({})); //钓鱼场次数据
      //钓鱼湖泊数据
      // 玩家钓鱼数据
      // 最近的回合信息(包括当前回合和下一回合)

      /**钓鱼状态 */

      /**钓到的鱼*/
      // 钓鱼结果奖励信息
      // 玩家回合记录

      /**钓鱼冰封日志数据 */

      /**钓鱼回合湖泊记录 */

      /**钓鱼回合记录 */

      /**历史排行榜数据 */

      /**钓鱼赛季榜单记录 */
      //钓鱼日志数据

      /**商品数据 */

      /**钓鱼商品数据返回 */
      // 出售鱼类商品

      /**出售鱼类商品返回 */

      /**钓鱼排行榜数据 */

      /**钓鱼排行榜数据 */

      /**钓鱼赛季排行榜*/

      /**钓鱼赛季排行榜数据 */

      /**钓鱼角色数据 */

      /**钓鱼角色装备数据 */

      /**钓鱼装备技能 */

      /**运鱼状态 */
      //运鱼数据

      /**运鱼场次 */

      /**运鱼最新回合数据 */
      // 运鱼奖励信息

      /**运鱼渔船数据 */
      // 运鱼回合结算记录 (全局状态)
      // 运鱼玩家结算记录
      // 掠夺玩家信息
      // 掠夺玩家信息
      // 掠夺记录玩家信息
      // 掠夺记录战斗信息
      // 掠夺记录战斗信息
      //掠夺记录信息
      //商品数结构
      //抽奖商店数据结构
      //抽奖商店数据结构
      //商店数据
      //商店数据

      /**
       * 公告数据
       */

      /**
       * 玩家本地数据
       */

      /**
       * 系统频道数据
       */


      /**玩法说明对应枚举 */
      _export("Tips2ID", Tips2ID = /*#__PURE__*/function (Tips2ID) {
        Tips2ID[Tips2ID["HomeLooting"] = 1] = "HomeLooting";
        Tips2ID[Tips2ID["Friend"] = 2] = "Friend";
        Tips2ID[Tips2ID["Pve"] = 3] = "Pve";
        Tips2ID[Tips2ID["HomeJiDi"] = 4] = "HomeJiDi";
        Tips2ID[Tips2ID["HomeBingYing"] = 5] = "HomeBingYing";
        Tips2ID[Tips2ID["Trade"] = 6] = "Trade";
        Tips2ID[Tips2ID["Fanyu"] = 7] = "Fanyu";
        Tips2ID[Tips2ID["Collect"] = 8] = "Collect";
        Tips2ID[Tips2ID["Role"] = 9] = "Role";
        Tips2ID[Tips2ID["Guild"] = 19] = "Guild";
        Tips2ID[Tips2ID["Palace"] = 28] = "Palace";
        Tips2ID[Tips2ID["Jinhua"] = 29] = "Jinhua";
        Tips2ID[Tips2ID["XiLian"] = 30] = "XiLian";
        Tips2ID[Tips2ID["WorldBoss"] = 31] = "WorldBoss";
        Tips2ID[Tips2ID["newYear"] = 32] = "newYear";
        return Tips2ID;
      }({}));
      /**
       * 设置数据
       */

      /**一次性记录条件数据 */

      /**权益卡数据 */

      /**权益卡 */


      /**玩法说明对应枚举 */
      _export("SRankType", SRankType = /*#__PURE__*/function (SRankType) {
        SRankType[SRankType["Fight"] = 1] = "Fight";
        SRankType[SRankType["Level"] = 2] = "Level";
        SRankType[SRankType["CustomsPass"] = 3] = "CustomsPass";
        SRankType[SRankType["Role"] = 4] = "Role";
        return SRankType;
      }({}));
      /**
       * 排行数据
       */

      /**公会成员信息 */

      /**公会公告 */
      // 公会申请审批条件

      /**公会数据 */

      /**公会事件数据 */


      _export("ApplicationStatus", ApplicationStatus = /*#__PURE__*/function (ApplicationStatus) {
        ApplicationStatus["pending"] = "pending";
        ApplicationStatus["approved"] = "approved";
        ApplicationStatus["rejected"] = "rejected";
        return ApplicationStatus;
      }({}));
      /**公会事件类型定义 */


      _export("GuildEventType", GuildEventType = /*#__PURE__*/function (GuildEventType) {
        GuildEventType[GuildEventType["EventType_1"] = 1] = "EventType_1";
        GuildEventType[GuildEventType["EventType_2"] = 2] = "EventType_2";
        GuildEventType[GuildEventType["EventType_3"] = 3] = "EventType_3";
        GuildEventType[GuildEventType["EventType_4"] = 4] = "EventType_4";
        GuildEventType[GuildEventType["EventType_5"] = 5] = "EventType_5";
        GuildEventType[GuildEventType["EventType_6"] = 6] = "EventType_6";
        GuildEventType[GuildEventType["EventType_7"] = 7] = "EventType_7";
        return GuildEventType;
      }({}));
      /**公会申请数据 */

      /**公会银行储蓄数据 */

      /**公会银行数据 */

      /**查看玩家数据 */


      /**掠夺赛季报名状态*/
      _export("LootSeasonApplyState", LootSeasonApplyState = /*#__PURE__*/function (LootSeasonApplyState) {
        LootSeasonApplyState[LootSeasonApplyState["Type_0"] = 0] = "Type_0";
        LootSeasonApplyState[LootSeasonApplyState["Type_1"] = 1] = "Type_1";
        LootSeasonApplyState[LootSeasonApplyState["Type_2"] = 2] = "Type_2";
        LootSeasonApplyState[LootSeasonApplyState["Type_3"] = 3] = "Type_3";
        LootSeasonApplyState[LootSeasonApplyState["Type_4"] = 4] = "Type_4";
        return LootSeasonApplyState;
      }({}));
      /**掠夺赛季申请信息 */

      /**pvp商品数据返回 */

      /**pvp商品数据 */

      /**流水数据 */

      /**个人银行数据 */

      /**个人银行数据 */


      /**今日不在提示id定义 */
      _export("TodayNoTipsId", TodayNoTipsId = /*#__PURE__*/function (TodayNoTipsId) {
        TodayNoTipsId[TodayNoTipsId["BattleUnder"] = 1] = "BattleUnder";
        TodayNoTipsId[TodayNoTipsId["ZidongShangbing"] = 2] = "ZidongShangbing";
        return TodayNoTipsId;
      }({})); // 玩家炸鱼数据
      //炸鱼场次数据
      //炸鱼池塘数据
      //炸鱼小回合信息
      //炸鱼当前回合信息
      //炸鱼决算信息

      /**炸鱼状态 */
      //炸鱼玩家日志
      //炸鱼子回个日志
      //炸鱼结算记录 (全局状态)
      //炸鱼日志数据

      /**世界boss伤害玩家数据 */

      /**世界boss伤害前三玩家数据 */
      //世界Boss基础数据
      //世界boss数据
      //世界Boss排行item榜数据
      //世界Boss排行榜数据

      /**世界boss挑战结束 */

      /**世界boss个人伤害记录*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91ebcdd5976ec768221ef2434d443149b6a2aaf8.js.map