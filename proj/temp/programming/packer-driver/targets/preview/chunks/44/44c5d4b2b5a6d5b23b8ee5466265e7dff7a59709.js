System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, EventMgr, _crd, Evt_Hide_Scene, Evt_Show_Scene, Evt_Hide_Home_Ui, Evt_Show_Home_Ui, Evt_ReLogin, Evt_ReConnect, Evt_Fengkong, Evt_ReConnect_Success, Evt_Layout_Status_Bar, Evt_Currency_Updtae, Evt_Res_Update, Evt_Collect_Update, Evt_Add_Entity_Bar, Evt_Map_Tile_Complete, Evt_Map_Moving, Evt_Map_StopMove, Evt_Item_Change, Evt_Compose, Evt_GetReward, Evt_Passive_Skill_Update, Evt_ConfigData_Update, Evt_ResetConfig, Evt_GetIncommons, Evt_GetUPLineInfo, Evt_GetDownLineInfo, Evt_GetContactInfo, Evt_GetIncomeRecords, Evt_GetRandomDownline, Evt_Jinghua_Role, Evt_CloseFriendBindOrUnbindPanel, Evt_SetAssistRole, Evt_UpdateFriendAssistRole, Evt_TaskChange, Evt_RefreshTaskChange, Evt_MainTaskChange, Evt_TaskGetReward, Evt_OpenBoxGetRewardPanel, Evt_ShopUpdate, Evt_ShopLuckyGet, Evt_NextDay, Evt_Change_Scene_Bgm, Evt_AdvisterUpdate, Evt_TaskShowBoxTips, Evt_LoginRedPointUpdate, Evt_UserInfoChange, Evt_BattleCreatRoomResult, Evt_BattleRoomEnterResult, Evt_BattleLogGet, Evt_BattleLogInfo, Evt_BattleDoubleUpdate, Evt_ShowBattleDoubleEffect, Evt_BattleExpressionUpdate, Evt_BattlePlayHandTime, Battle_End_Round, Battle_UpdateTerrain, Battle_HandCard_To_Area, Battle_Area_to_HandCard, Battle_PlayNewRoundEffect, Battle_EndNewRoundEffect, Battle_ShowSettlement, Battle_Exit, Battle_RoomUnusual, Evt_Card_Check_By_Name, Evt_Card_Group_Update, Evt_Main_Panel_Card_Group_Update, Evt_Set_Battle_Card_Group_Update, Evt_Start_Match, Evt_Cancel_Match, Evt_Match_Complete, Evt_Add_Card_Group_update, Evt_PlayerDataInfo_Update, Evt_Mail_Add, Evt_Mail_Update, Evt_ReadMail, Evt_DelMail, Evt_SendMail, Evt_Get_Mail_Reward_Updata, Evt_Get_Mail_Log_Updata, Evt_Card_Chage, Evt_Card_Add, Evt_Card_Del, Evt_Box_Update, Evt_Player_Exp_Update, Evt_Player_Level_Update, Evt_Upgrade_Award_Update, Evt_EnterFight, Evt_SectionUpdate, Evt_SectionAwardUpdate, Evt_SectionAwardInit, Evt_SectionSettle, Evt_SeasonFightLog, Evt_Card_Head_Update, Evt_Card_Back_Update, Evt_User_Info_Update, Evt_PlayerDataInit, Evt_StarElementUpdate, Evt_StarElementSettle;

  _export("EventMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a11ceUzKFRPJqEu589/Frkq", "EventMgr", undefined);

      /** 事件回调函数类型 */
      __checkObsolete__(['Component', 'Node', 'NodeEventType', '__private', 'isValid']);

      /**
       * 事件派发与监听
       */
      _export("EventMgr", EventMgr = class EventMgr {
        /** 添加监听 */
        static on(type, callback, target, useCapture) {
          this.dispatcher.on(type, callback, target, useCapture);
        }
        /** 派发监听 */


        static emit(type, arg0, arg1, arg2, arg3, arg4) {
          this.dispatcher.emit(type, arg0, arg1, arg2, arg3, arg4);
        }
        /** 是否已存在监听 */


        static hasEventListener(type, callback, target) {
          this.dispatcher.hasEventListener(type, callback, target);
        }
        /** 执行单次监听，派发后移除监听 */


        static once(type, callback, target, useCapture) {
          this.dispatcher.once(type, callback, target, useCapture);
        }
        /** 移除监听 */


        static off(type, callback, target, useCapture) {
          this.dispatcher.off(type, callback, target, useCapture);
        }
        /** 根据Target移除监听 */


        static removeByTarget(target) {
          this.dispatcher.targetOff(target);
        }

        static AddChan(type, listener, thisObj) {
          if (this.chan[type]) throw "事件通道每个事件只允许注册一个侦听接口";
          this.chan[type] = {
            func: listener,
            thisObj: thisObj
          };
        }

        static DelChan(type) {
          delete this.chan[type];
        }

        static Call(type) {
          var obj = this.chan[type];
          if (!obj) return;

          for (var _len = arguments.length, datas = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            datas[_key - 1] = arguments[_key];
          }

          return obj.func.apply(obj.thisObj, datas);
        }

      });
      /**隐藏场景 */


      EventMgr._instance = void 0;
      EventMgr.dispatcher = new Node();
      EventMgr.chan = {};

      _export("Evt_Hide_Scene", Evt_Hide_Scene = "Evt_Hide_Scene");
      /**显示场景 */


      _export("Evt_Show_Scene", Evt_Show_Scene = "Evt_Show_Scene");
      /**隐藏场景 */


      _export("Evt_Hide_Home_Ui", Evt_Hide_Home_Ui = "Evt_Hide_Home_Ui");
      /**显示场景 */


      _export("Evt_Show_Home_Ui", Evt_Show_Home_Ui = "Evt_Show_Home_Ui");
      /**重新登录 */


      _export("Evt_ReLogin", Evt_ReLogin = "Evt_ReLogin");
      /**重新连接 */


      _export("Evt_ReConnect", Evt_ReConnect = "Evt_ReConnect");
      /**风控 */


      _export("Evt_Fengkong", Evt_Fengkong = "Evt_Fengkong");
      /**重连成功 */


      _export("Evt_ReConnect_Success", Evt_ReConnect_Success = "Evt_ReConnect_Success");
      /**刘海屏 */


      _export("Evt_Layout_Status_Bar", Evt_Layout_Status_Bar = "Evt_Layout_Status_Bar");
      /**彩虹体数量变更 */


      _export("Evt_Currency_Updtae", Evt_Currency_Updtae = "Evt_Currency_Updtae");
      /**资源数量变更 */


      _export("Evt_Res_Update", Evt_Res_Update = "Evt_Res_Update");

      _export("Evt_Collect_Update", Evt_Collect_Update = "Evt_Collect_Update");
      /**添加状态栏到场景 */


      _export("Evt_Add_Entity_Bar", Evt_Add_Entity_Bar = "Evt_Add_Entity_Bar");
      /**地图切块加载完毕 */


      _export("Evt_Map_Tile_Complete", Evt_Map_Tile_Complete = "Evt_Map_Tile_Complete");
      /**地图移动 */


      _export("Evt_Map_Moving", Evt_Map_Moving = "Evt_Map_Moving");
      /**地图停止移动 */


      _export("Evt_Map_StopMove", Evt_Map_StopMove = "Evt_Map_StopMove");
      /**道具变更 */


      _export("Evt_Item_Change", Evt_Item_Change = "Evt_Item_Change");
      /**合成 */


      _export("Evt_Compose", Evt_Compose = "Evt_Compose");
      /**获得奖励 */


      _export("Evt_GetReward", Evt_GetReward = "Evt_GetReward");
      /**被动技能更新 */


      _export("Evt_Passive_Skill_Update", Evt_Passive_Skill_Update = "Evt_Passive_Skill_Update");
      /**前端保存数据更新 */


      _export("Evt_ConfigData_Update", Evt_ConfigData_Update = "Evt_ConfigData_Update");

      _export("Evt_ResetConfig", Evt_ResetConfig = "Evt_ResetConfig");
      /**刷新获取收益详情 */


      _export("Evt_GetIncommons", Evt_GetIncommons = "Evt_GetIncommons");
      /**刷新获取上线好友信息 */


      _export("Evt_GetUPLineInfo", Evt_GetUPLineInfo = "Evt_GetUPLineInfo");
      /**刷新获取下线好友信息 */


      _export("Evt_GetDownLineInfo", Evt_GetDownLineInfo = "Evt_GetDownLineInfo");
      /**刷新获取好友联系信息 */


      _export("Evt_GetContactInfo", Evt_GetContactInfo = "Evt_GetContactInfo");
      /**刷新收益记录信息 */


      _export("Evt_GetIncomeRecords", Evt_GetIncomeRecords = "Evt_GetIncomeRecords");
      /**刷新繁育协助列表信息 */


      _export("Evt_GetRandomDownline", Evt_GetRandomDownline = "Evt_GetRandomDownline");
      /**进化结果 */


      _export("Evt_Jinghua_Role", Evt_Jinghua_Role = "Evt_Jinghua_Role");
      /**关闭好友绑定界面 */


      _export("Evt_CloseFriendBindOrUnbindPanel", Evt_CloseFriendBindOrUnbindPanel = "Evt_CloseFriendBindOrUnbindPanel");
      /**刷新好友协作界面 */


      _export("Evt_SetAssistRole", Evt_SetAssistRole = "Evt_SetAssistRole");
      /**刷新好友角色助战界面 */


      _export("Evt_UpdateFriendAssistRole", Evt_UpdateFriendAssistRole = "Evt_UpdateFriendAssistRole");
      /**任务信息更改 */


      _export("Evt_TaskChange", Evt_TaskChange = "Evt_TaskChange");
      /**任务手动刷新数据变更 */


      _export("Evt_RefreshTaskChange", Evt_RefreshTaskChange = "Evt_RefreshTaskChange");
      /**主界面任务数据变更 */


      _export("Evt_MainTaskChange", Evt_MainTaskChange = "Evt_MainTaskChange");
      /**任务领取奖励 */


      _export("Evt_TaskGetReward", Evt_TaskGetReward = "Evt_TaskGetReward");
      /**是否展示奖励 */


      _export("Evt_OpenBoxGetRewardPanel", Evt_OpenBoxGetRewardPanel = "Evt_OpenBoxGetRewardPanel");
      /**商城刷新 */


      _export("Evt_ShopUpdate", Evt_ShopUpdate = "Evt_ShopUpdate");
      /**商城抽奖获得 */


      _export("Evt_ShopLuckyGet", Evt_ShopLuckyGet = "Evt_ShopLuckyGet");
      /**跨天事件 */


      _export("Evt_NextDay", Evt_NextDay = "Evt_NextDay");
      /**却换背景音*/


      _export("Evt_Change_Scene_Bgm", Evt_Change_Scene_Bgm = "Evt_Change_Scene_Bgm");
      /**广告次数刷新 */


      _export("Evt_AdvisterUpdate", Evt_AdvisterUpdate = "Evt_AdvisterUpdate");
      /**任务宝箱显示*/


      _export("Evt_TaskShowBoxTips", Evt_TaskShowBoxTips = "Evt_TaskShowBoxTips");
      /**本次登录红点改变*/


      _export("Evt_LoginRedPointUpdate", Evt_LoginRedPointUpdate = "Evt_LoginRedPointUpdate");
      /**用户信息改变*/


      _export("Evt_UserInfoChange", Evt_UserInfoChange = "Evt_UserInfoChange");
      /*******************************************************************新加************************************** */

      /**战斗房间创建结果*/


      _export("Evt_BattleCreatRoomResult", Evt_BattleCreatRoomResult = "Evt_BattleCreatRoomResult");
      /**加入战斗房间结果*/


      _export("Evt_BattleRoomEnterResult", Evt_BattleRoomEnterResult = "Evt_BattleRoomEnterResult");
      /**战斗记录下发*/


      _export("Evt_BattleLogGet", Evt_BattleLogGet = "Evt_BattleLogGet");
      /**战斗记录详情下发 */


      _export("Evt_BattleLogInfo", Evt_BattleLogInfo = "Evt_BattleLogInfo");
      /**战斗加倍数据下发 */


      _export("Evt_BattleDoubleUpdate", Evt_BattleDoubleUpdate = "Evt_BattleDoubleUpdate");
      /**显示加倍加倍特效*/


      _export("Evt_ShowBattleDoubleEffect", Evt_ShowBattleDoubleEffect = "Evt_ShowBattleDoubleEffect");
      /**战斗表情数据下发 */


      _export("Evt_BattleExpressionUpdate", Evt_BattleExpressionUpdate = "Evt_BattleExpressionUpdate");
      /**战斗出牌时间到 */


      _export("Evt_BattlePlayHandTime", Evt_BattlePlayHandTime = "Evt_BattlePlayHandTime");
      /**玩家触发结束回合 */


      _export("Battle_End_Round", Battle_End_Round = "Battle_End_Round");
      /**更新区域状态 */


      _export("Battle_UpdateTerrain", Battle_UpdateTerrain = "Battle_UpdateTerrain");
      /**手牌打到到区域 */


      _export("Battle_HandCard_To_Area", Battle_HandCard_To_Area = "Battle_HandCard_To_Area");
      /**区域回到手牌 */


      _export("Battle_Area_to_HandCard", Battle_Area_to_HandCard = "Battle_Area_to_HandCard");
      /**播放回合开始特效 */


      _export("Battle_PlayNewRoundEffect", Battle_PlayNewRoundEffect = "Battle_PlayNewRoundEffect");
      /**结束回合开始特效 */


      _export("Battle_EndNewRoundEffect", Battle_EndNewRoundEffect = "Battle_EndNewRoundEffect");
      /**战斗结算展示 */


      _export("Battle_ShowSettlement", Battle_ShowSettlement = "Battle_ShowSettlement");
      /**退出战斗*/


      _export("Battle_Exit", Battle_Exit = "Battle_Exit");
      /**战斗房间异常 */


      _export("Battle_RoomUnusual", Battle_RoomUnusual = "Battle_RoomUnusual");
      /**卡牌根据名字查询 */


      _export("Evt_Card_Check_By_Name", Evt_Card_Check_By_Name = "Evt_Card_Check_By_Name");
      /**卡牌刷新卡组 */


      _export("Evt_Card_Group_Update", Evt_Card_Group_Update = "Evt_Card_Group_Update");
      /**主界面刷新卡组 */


      _export("Evt_Main_Panel_Card_Group_Update", Evt_Main_Panel_Card_Group_Update = "Evt_Main_Panel_Card_Group_Update");
      /**主界设置出战卡组返回 */


      _export("Evt_Set_Battle_Card_Group_Update", Evt_Set_Battle_Card_Group_Update = "Evt_Set_Battle_Card_Group_Update");
      /**开始匹配 */


      _export("Evt_Start_Match", Evt_Start_Match = "Evt_Start_Match");
      /**取消匹配*/


      _export("Evt_Cancel_Match", Evt_Cancel_Match = "Evt_Cancel_Match");
      /**匹配成功 */


      _export("Evt_Match_Complete", Evt_Match_Complete = "Evt_Match_Complete");
      /**添加空卡组成功返回 */


      _export("Evt_Add_Card_Group_update", Evt_Add_Card_Group_update = "Evt_Add_Card_Group_update");
      /**刷新玩家信息 */


      _export("Evt_PlayerDataInfo_Update", Evt_PlayerDataInfo_Update = "Evt_PlayerDataInfo_Update");
      /**新增邮件 */


      _export("Evt_Mail_Add", Evt_Mail_Add = "Evt_Mail_Add");
      /**邮件更新 */


      _export("Evt_Mail_Update", Evt_Mail_Update = "Evt_Mail_Update");
      /**读取邮件 */


      _export("Evt_ReadMail", Evt_ReadMail = "Evt_ReadMail");
      /**删除邮件 */


      _export("Evt_DelMail", Evt_DelMail = "Evt_DelMail");
      /**发送邮件 */


      _export("Evt_SendMail", Evt_SendMail = "Evt_SendMail");
      /**领取邮件 */


      _export("Evt_Get_Mail_Reward_Updata", Evt_Get_Mail_Reward_Updata = "Evt_Get_Mail_Reward_Updata");
      /**邮件流水 */


      _export("Evt_Get_Mail_Log_Updata", Evt_Get_Mail_Log_Updata = "Evt_Get_Mail_Log_Updata");
      /**卡牌数据改变 */


      _export("Evt_Card_Chage", Evt_Card_Chage = "Evt_Card_Chage");
      /**添加卡牌 */


      _export("Evt_Card_Add", Evt_Card_Add = "Evt_Card_Add");
      /**删除卡牌 */


      _export("Evt_Card_Del", Evt_Card_Del = "Evt_Card_Del");
      /**宝箱数据更新 */


      _export("Evt_Box_Update", Evt_Box_Update = "Evt_Box_Update");
      /**玩家经验变更*/


      _export("Evt_Player_Exp_Update", Evt_Player_Exp_Update = "Evt_Player_Exp_Update");
      /**玩家等级变更*/


      _export("Evt_Player_Level_Update", Evt_Player_Level_Update = "Evt_Player_Level_Update");
      /**升级奖励更新*/


      _export("Evt_Upgrade_Award_Update", Evt_Upgrade_Award_Update = "Evt_Upgrade_Award_Update");
      /**进入战斗*/


      _export("Evt_EnterFight", Evt_EnterFight = "Evt_EnterFight");
      /**段位数据变更*/


      _export("Evt_SectionUpdate", Evt_SectionUpdate = "Evt_SectionUpdate");
      /**段位奖励更新*/


      _export("Evt_SectionAwardUpdate", Evt_SectionAwardUpdate = "Evt_SectionAwardUpdate");
      /**段位奖励初始化*/


      _export("Evt_SectionAwardInit", Evt_SectionAwardInit = "Evt_SectionAwardInit");
      /**结算段位 */


      _export("Evt_SectionSettle", Evt_SectionSettle = "Evt_SectionSettle");
      /**赛季战斗日志 */


      _export("Evt_SeasonFightLog", Evt_SeasonFightLog = "Evt_SeasonFightLog");
      /**卡牌头像刷新 */


      _export("Evt_Card_Head_Update", Evt_Card_Head_Update = "Evt_Card_Head_Update");
      /**卡牌卡背刷新 */


      _export("Evt_Card_Back_Update", Evt_Card_Back_Update = "Evt_Card_Back_Update");
      /**用户数据变更 */


      _export("Evt_User_Info_Update", Evt_User_Info_Update = "Evt_User_Info_Update");
      /**玩家数据初始化 */


      _export("Evt_PlayerDataInit", Evt_PlayerDataInit = "Evt_PlayerDataInit");
      /**星元对战数据变更*/


      _export("Evt_StarElementUpdate", Evt_StarElementUpdate = "Evt_StarElementUpdate");
      /**星元对战结算 */


      _export("Evt_StarElementSettle", Evt_StarElementSettle = "Evt_StarElementSettle");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44c5d4b2b5a6d5b23b8ee5466265e7dff7a59709.js.map