import proto from "../../net/Protocol";
import { BattleBaseComp } from "../battle/BattleBaseComp";

//交易所相关数据

/**订单状态 */
export enum OrderStateType {
    /**激活*/
    active = "active",
    /**取消 */
    cancelled = "cancelled",
    /**已成交 */
    done = "done",
}

/**订单类型 */
export enum SOrderType {
    SELL, //出售商品订单
    BUY, //购买商品订单
}

/**订单道具排序枚举 */
export enum SQuerySortItemType {
    /**单价升序 */
    PriceUp = "price:asc",
    /**单价升序 */
    PriceDow = "price:desc",
    /**总价升序 */
    TotalPriceUp = "total_price:asc",
    /**总价降序 */
    TotalPriceDown = "total_price:desc",
    /**数量升序 */
    CountUp = "quantity_remaining:asc",
    /**数量降序 */
    CountDown = "quantity_remaining:desc",
}

/**订单卡牌排序枚举 */
export enum SQuerySortCardType {
    /**单价升序 */
    PriceUp = "price:asc",
    /**单价升序 */
    PriceDow = "price:desc",
    /**总价升序 */
    CardRarityUp = "card_rarity:asc",
    /**总价降序 */
    CardRarityDown = "card_rarity:desc",
    /**数量升序 */
    QualityUp = "card.quality:asc",
    /**数量降序 */
    QualityDown = "card.quality:desc",
}



/**道具数据 */
export type SThingItem = {
    id: number;
    count: number;
}
/**事物定义资源类 */
export type SThingRes = {
    name: string;//事物资源名称
    count: number;//事物资源数量
    iconUrl: string;//事物资源icon路径
    iconBgUrl: string;//事物资源icon背景||品质路径
    roleMaskBg?: string;//角色碎片背景
    roleMask?: string;//角色碎片背景
    qual?: number,//品质
}
/**事物列表 */
export type SThings = {
    data: proto.base.IThing[];
}

/**邮件数据 */
export type SPlayerMailData = proto.base.IPlayerMailData & {
    lock_time?: number;//是否有倒计时
    is_last?: boolean;//是否最后一个
}
//--------------------------好友----------------------
/**好友数据 */
export type SGetAgentInfo = {
    upline_id: string,
    total_income: number,
    daily_income: number,
    assist_roles_slots: number,
    total_assist_income: number,
    assist_roles: SRoleAssistData[]
}

export type SRoleAssistData = {
    role_id: string,
    player_id: string,
    slot: number,
    usage_fee: number,
    battle_power: number,
    daily_assist_count: number,
    daily_income: number,
}

/**收益数据 */
export type SIncomesInfo = {
    player_id: string,
    name: string,
    icon_url: string,
    amount: number,
}

/**好友收益 */
export type SGetIncomes = {
    total_downlines: number,
    total_unclaimed: number,
    incomes: SIncomesInfo[],
}

/**上线好友数据 */
export type SUplineInfo = {
    player_id: string,
    name: string,
    icon_url: string,
    level: number,
    battle_power: number,
    last_offline_time: number,
    is_online: boolean,
}

/**上线好友 */
export type SGetUplineInfo = {
    has_upline: boolean,
    upline: SUplineInfo,
}

/**下线好友数据 */
export type SDownlineInfo = proto.base.IPlayerShowInfo & {

}

/**下线好友 */
export type SGetDownlines = proto.pb.IFriendInfo & {

}

/**好友列表排序枚举 */
export enum SFriendSortType {
    /**本日收益从高到低*/
    SortDailyOutputDesc = 1,
    /**本日收益从低到高 */
    SortDailyOutputAsc,
    /**累计收益从高到低 */
    SortTotalOutputDesc,
    /**累计本日收益从低到高 */
    SortTotalOutputAsc,
    /**绑定时间从早到晚 */
    SortBindTimeDesc,
    /**绑定时间从晚到早 */
    SortBindTimeAsc,
    /**活跃度 */
    SortDailyActivityDesc
}

/**好友联系方式数据 */
export type SGetContactInfo = {
    player_id: string,
    name: string,
    wechat_id: string,
    qq_id: string,
}

/**好友收益记录信息 */
export type SIncomeRecordInfo = {
    player_id: string,
    name: string,
    amount: number,
    timestamp: number,
}

/** 收益记录返回数据*/
export type SIncomeRecords = {
    income_records: SIncomeRecordInfo[],
    total: number;
}

/**任务数据类型 */
export type SPlayerDataTask = proto.base.IPlayerDataTask

/**任务状态 */
export enum STaskState {
    unFinsh = 1,
    Finsh,
}

/**任务类型 */
export enum STaskShowType {
    /**每日 */
    dayliy = 1,
    /**每周 */
    week,
    /**成就 */
    archive,
    /**好友 */
    friend,
    /**每日登录 */
    dayliyLogin
}

/**好友的任务类型 */
export enum STaskType {
    /**每日任务 */
    dayTask = 1,
    /**每周任务 */
    weekTask,
    /**成就任务 */
    achieveTask,
    /**每日登录 */
    dayliyLogin,
    /**好友任务 */
    frien,
    /**每日活跃*/
    dayActive,
    /**每周活跃 */
    weekActive,
    /**赛季任务 */
    season = 8,
    /**赛季章节任务 */
    seasonChapter = 9,

}

/**玩法说明对应枚举 */
export enum Tips2ID {
    /** 家园抢夺*/
    HomeLooting = 1,
    /**好友系统 */
    Friend,
    /**探险 */
    Pve,
    /**家园建筑-主基地 */
    HomeJiDi,
    /**家园建筑-兵营 */
    HomeBingYing,
    /**交易所 */
    Trade,
    /**繁育巢 */
    Fanyu,
    /**采集 */
    Collect,
    /**角色 */
    Role,
    /**公会*/
    Guild = 19,
    /**植灵殿堂 */
    Palace = 28,
    /**进化 */
    Jinhua = 29,
    /**洗练 */
    XiLian = 30,
    /**世界boss*/
    WorldBoss = 31,
    /**新春活动说明 */
    newYear = 32,
}

//商品数结构
export type SShopItem = proto.base.IShopItem & {
    original_things: SThings,// 原价
    isAdItem?: boolean;//是否广告商品
}

//抽奖商店数据结构
export type SShopContent = proto.base.IShopContent & {
    manual_count: number,// 手动刷新剩余次数
}

//商店数据
export type TipsType = {
    type: string,
    content: string,
    icon: string,
    speed: number
}

/**查询返回数据类型 */
export type SSerchData = {
    code: number,
    order_list: [],
    order_state_list: []
}

export type SOrderThings = {
    data: SOrderThing[];
}

/**订单物品信息 */
export type SOrderThing = {
    item?: proto.base.IThingItem,
    type: number
}

/******************************战斗相关数据结构定义******************************/

/**
 * 战斗数据包
 */
export type BattlePackData = {
    roomId: string; //当前房间id
    round: number; //当前回合数
    ownerPlayerId: string; //发送此操作玩家ID，可能为空字符串，意味着是系统
    data: any; //战斗数据
    touchInstId: string;
}
/**
 * 映射卡的位置
 */
export type CardLocation = {
    areaIdx: number; //区域下标
    cardIdx: number; //卡的下标
    card?: proto.base.IBattleRoomCardData;

}

/**
 * 战斗out op_type处理包 
 */
export type BattleOpData = {
    packData: BattlePackData;//战斗数据包
    comp: string; //处理数据的脚本
    type: proto.base.BattleRoomOpOutputType;//脚本类型
    changeDataCell?: (playerId: string, data: any) => void;//改变数据回调
}

/**
 * 战斗房间实例类型
 */
export enum BattleRoomInstType {
    RoomInstCard = 0,//卡牌实例前缀
    RoomInstTerrain = 1,//地形实例前缀
    RoomInstPlayer = 2,//玩家实例前缀
}

/**
 * 战斗回合操作状态
 * */
export enum BattleRoundOperationState {
    EndRound,    // 结束回合
    PlaceRound,  // 放置中
    CancelRound, //取消回合
}



/******************************战斗相关数据结构定义******************************/

export enum CardInfoStateType {
    Creator, //生成卡组
    Add, //添加至
    Del,//移除卡组
    Fill,//卡组已满
    Change,//替换卡组
}