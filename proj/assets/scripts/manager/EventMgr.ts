import { Component, Node, NodeEventType, __private, isValid } from "cc";

/** 事件回调函数类型 */
export type EventHandler = (...params) => void;

/**
 * 事件派发与监听
 */
export class EventMgr {
    private static _instance: EventMgr;
    private static dispatcher: Node = new Node();

    /** 添加监听 */
    static on(type: string | NodeEventType, callback: __private.__types_globals__AnyFunction, target?: unknown, useCapture?: any): void {
        this.dispatcher.on(type, callback, target, useCapture);
    }

    /** 派发监听 */
    static emit(type: string, arg0?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void {
        this.dispatcher.emit(type, arg0, arg1, arg2, arg3, arg4);
    }

    /** 是否已存在监听 */
    static hasEventListener(type: string, callback?: __private.__types_globals__AnyFunction, target?: unknown): any {
        this.dispatcher.hasEventListener(type, callback, target);
    }

    /** 执行单次监听，派发后移除监听 */
    static once(type: string, callback: __private.__types_globals__AnyFunction, target?: unknown, useCapture?: any): void {
        this.dispatcher.once(type, callback, target, useCapture);
    }

    /** 移除监听 */
    static off(type: string, callback?: __private.__types_globals__AnyFunction, target?: unknown, useCapture?: any): void {
        this.dispatcher.off(type, callback, target, useCapture);
    }

    /** 根据Target移除监听 */
    static removeByTarget(target: string | unknown): void {
        this.dispatcher.targetOff(target);
    }

    protected static chan: { [type: string]: { func: Function, thisObj: any } } = {};
    static AddChan(type: string, listener: Function, thisObj: any) {
        if (this.chan[type]) throw "事件通道每个事件只允许注册一个侦听接口";
        this.chan[type] = { func: listener, thisObj: thisObj };
    }
    static DelChan(type: string) {
        delete this.chan[type];
    }
    static Call(type: string, ...datas: any[]) {
        let obj = this.chan[type];
        if (!obj) return;
        return obj.func.apply(obj.thisObj, datas);
    }
}


/**隐藏场景 */
export const Evt_Hide_Scene = "Evt_Hide_Scene";
/**显示场景 */
export const Evt_Show_Scene = "Evt_Show_Scene";

/**隐藏场景 */
export const Evt_Hide_Home_Ui = "Evt_Hide_Home_Ui";
/**显示场景 */
export const Evt_Show_Home_Ui = "Evt_Show_Home_Ui";


/**重新登录 */
export const Evt_ReLogin = "Evt_ReLogin";

/**重新连接 */
export const Evt_ReConnect = "Evt_ReConnect";

/**风控 */
export const Evt_Fengkong = "Evt_Fengkong";

/**重连成功 */
export const Evt_ReConnect_Success = "Evt_ReConnect_Success";

/**刘海屏 */
export const Evt_Layout_Status_Bar = "Evt_Layout_Status_Bar";

/**彩虹体数量变更 */
export const Evt_Currency_Updtae = "Evt_Currency_Updtae";
/**资源数量变更 */
export const Evt_Res_Update = "Evt_Res_Update";
export const Evt_Collect_Update = "Evt_Collect_Update";
/**添加状态栏到场景 */
export const Evt_Add_Entity_Bar = "Evt_Add_Entity_Bar";

/**地图切块加载完毕 */
export const Evt_Map_Tile_Complete = "Evt_Map_Tile_Complete";

/**地图移动 */
export const Evt_Map_Moving = "Evt_Map_Moving";
/**地图停止移动 */
export const Evt_Map_StopMove = "Evt_Map_StopMove";





/**道具变更 */
export const Evt_Item_Change = "Evt_Item_Change";




/**合成 */
export const Evt_Compose = "Evt_Compose";





/**获得奖励 */
export const Evt_GetReward = "Evt_GetReward";

/**被动技能更新 */
export const Evt_Passive_Skill_Update = "Evt_Passive_Skill_Update";

/**前端保存数据更新 */
export const Evt_ConfigData_Update = "Evt_ConfigData_Update";
export const Evt_ResetConfig = "Evt_ResetConfig";

/**刷新获取收益详情 */
export const Evt_GetIncommons = "Evt_GetIncommons";

/**刷新获取上线好友信息 */
export const Evt_GetUPLineInfo = "Evt_GetUPLineInfo";

/**刷新获取下线好友信息 */
export const Evt_GetDownLineInfo = "Evt_GetDownLineInfo"

/**刷新获取好友联系信息 */
export const Evt_GetContactInfo = "Evt_GetContactInfo"

/**刷新收益记录信息 */
export const Evt_GetIncomeRecords = "Evt_GetIncomeRecords"

/**刷新繁育协助列表信息 */
export const Evt_GetRandomDownline = "Evt_GetRandomDownline"

/**进化结果 */
export const Evt_Jinghua_Role = "Evt_Jinghua_Role";

/**关闭好友绑定界面 */
export const Evt_CloseFriendBindOrUnbindPanel = "Evt_CloseFriendBindOrUnbindPanel"

/**刷新好友协作界面 */
export const Evt_SetAssistRole = "Evt_SetAssistRole"

/**刷新好友角色助战界面 */
export const Evt_UpdateFriendAssistRole = "Evt_UpdateFriendAssistRole"

/**任务信息更改 */
export const Evt_TaskChange = "Evt_TaskChange"
/**任务手动刷新数据变更 */
export const Evt_RefreshTaskChange = "Evt_RefreshTaskChange"
/**主界面任务数据变更 */
export const Evt_MainTaskChange = "Evt_MainTaskChange"
/**任务领取奖励 */
export const Evt_TaskGetReward = "Evt_TaskGetReward"





/**是否展示奖励 */
export const Evt_OpenBoxGetRewardPanel = "Evt_OpenBoxGetRewardPanel"
/**商城刷新 */
export const Evt_ShopUpdate = "Evt_ShopUpdate";
/**商城抽奖获得 */
export const Evt_ShopLuckyGet = "Evt_ShopLuckyGet";


/**跨天事件 */
export const Evt_NextDay = "Evt_NextDay";
/**却换背景音*/
export const Evt_Change_Scene_Bgm = "Evt_Change_Scene_Bgm";
/**广告次数刷新 */
export const Evt_AdvisterUpdate = "Evt_AdvisterUpdate";




/**任务宝箱显示*/
export const Evt_TaskShowBoxTips = "Evt_TaskShowBoxTips";
/**本次登录红点改变*/
export const Evt_LoginRedPointUpdate = "Evt_LoginRedPointUpdate";
/**用户信息改变*/
export const Evt_UserInfoChange = "Evt_UserInfoChange";

/*******************************************************************新加************************************** */

/**战斗房间创建结果*/
export const Evt_BattleCreatRoomResult = "Evt_BattleCreatRoomResult";

/**加入战斗房间结果*/
export const Evt_BattleRoomEnterResult = "Evt_BattleRoomEnterResult";

/**战斗记录下发*/
export const Evt_BattleLogGet = "Evt_BattleLogGet";

/**战斗记录详情下发 */
export const Evt_BattleLogInfo = "Evt_BattleLogInfo";

/**战斗加倍数据下发 */
export const Evt_BattleDoubleUpdate = "Evt_BattleDoubleUpdate";

/**显示加倍加倍特效*/
export const Evt_ShowBattleDoubleEffect = "Evt_ShowBattleDoubleEffect";

/**战斗表情数据下发 */
export const Evt_BattleExpressionUpdate = "Evt_BattleExpressionUpdate";

/**战斗出牌时间到 */
export const Evt_BattlePlayHandTime = "Evt_BattlePlayHandTime";

/**玩家触发结束回合 */
export const Battle_End_Round = "Battle_End_Round";

/**更新区域状态 */
export const Battle_UpdateTerrain = "Battle_UpdateTerrain";

/**手牌打到到区域 */
export const Battle_HandCard_To_Area: string = "Battle_HandCard_To_Area";

/**区域回到手牌 */
export const Battle_Area_to_HandCard: string = "Battle_Area_to_HandCard";

/**播放回合开始特效 */
export const Battle_PlayNewRoundEffect: string = "Battle_PlayNewRoundEffect";

/**结束回合开始特效 */
export const Battle_EndNewRoundEffect: string = "Battle_EndNewRoundEffect";

/**战斗结算展示 */
export const Battle_ShowSettlement: string = "Battle_ShowSettlement";

/**退出战斗*/
export const Battle_Exit: string = "Battle_Exit";

/**战斗房间异常 */
export const Battle_RoomUnusual: string = "Battle_RoomUnusual";

/**卡牌根据名字查询 */
export const Evt_Card_Check_By_Name: string = "Evt_Card_Check_By_Name";

/**卡牌刷新卡组 */
export const Evt_Card_Group_Update: string = "Evt_Card_Group_Update";

/**主界面刷新卡组 */
export const Evt_Main_Panel_Card_Group_Update: string = "Evt_Main_Panel_Card_Group_Update";

/**主界设置出战卡组返回 */
export const Evt_Set_Battle_Card_Group_Update: string = "Evt_Set_Battle_Card_Group_Update";

/**开始匹配 */
export const Evt_Start_Match: string = "Evt_Start_Match";

/**取消匹配*/
export const Evt_Cancel_Match: string = "Evt_Cancel_Match";

/**匹配成功 */
export const Evt_Match_Complete: string = "Evt_Match_Complete";

/**添加空卡组成功返回 */
export const Evt_Add_Card_Group_update: string = "Evt_Add_Card_Group_update";

/**刷新玩家信息 */
export const Evt_PlayerDataInfo_Update: string = "Evt_PlayerDataInfo_Update";

/**新增邮件 */
export const Evt_Mail_Add = "Evt_Mail_Add";

/**邮件更新 */
export const Evt_Mail_Update = "Evt_Mail_Update";

/**读取邮件 */
export const Evt_ReadMail = "Evt_ReadMail";

/**删除邮件 */
export const Evt_DelMail = "Evt_DelMail";

/**发送邮件 */
export const Evt_SendMail = "Evt_SendMail";

/**领取邮件 */
export const Evt_Get_Mail_Reward_Updata = "Evt_Get_Mail_Reward_Updata";

/**邮件流水 */
export const Evt_Get_Mail_Log_Updata = "Evt_Get_Mail_Log_Updata";

/**卡牌数据改变 */
export const Evt_Card_Chage: string = "Evt_Card_Chage";

/**添加卡牌 */
export const Evt_Card_Add: string = "Evt_Card_Add";

/**删除卡牌 */
export const Evt_Card_Del: string = "Evt_Card_Del";

/**宝箱数据更新 */
export const Evt_Box_Update: string = "Evt_Box_Update";

/**玩家经验变更*/
export const Evt_Player_Exp_Update: string = "Evt_Player_Exp_Update";

/**玩家等级变更*/
export const Evt_Player_Level_Update: string = "Evt_Player_Level_Update";

/**升级奖励更新*/
export const Evt_Upgrade_Award_Update: string = "Evt_Upgrade_Award_Update";

/**进入战斗*/
export const Evt_EnterFight: string = "Evt_EnterFight";

/**段位数据变更*/
export const Evt_SectionUpdate: string = "Evt_SectionUpdate";

/**段位奖励更新*/
export const Evt_SectionAwardUpdate: string = "Evt_SectionAwardUpdate";

/**段位奖励初始化*/
export const Evt_SectionAwardInit: string = "Evt_SectionAwardInit";

/**结算段位 */
export const Evt_SectionSettle: string = "Evt_SectionSettle";

/**赛季战斗日志 */
export const Evt_SeasonFightLog: string = "Evt_SeasonFightLog";

/**卡牌头像刷新 */
export const Evt_Card_Head_Update: string = "Evt_Card_Head_Update";

/**卡牌卡背刷新 */
export const Evt_Card_Back_Update: string = "Evt_Card_Back_Update";

/**用户数据变更 */
export const Evt_User_Info_Update: string = "Evt_User_Info_Update";

/**玩家数据初始化 */
export const Evt_PlayerDataInit: string = "Evt_PlayerDataInit";

/**星元对战数据变更*/
export const Evt_StarElementUpdate: string = "Evt_StarElementUpdate";

/**星元对战结算 */
export const Evt_StarElementSettle: string = "Evt_StarElementSettle";