import { JsonAsset, assetManager } from "cc";
import { ResMgr } from "./ResMgr";
import { Utils } from "../utils/Utils";
import proto from "../net/Protocol";
import { DateUtils } from "../utils/DateUtils";

export class CfgMgr {
    private static data: any;
    static async load() {
        let resAb = assetManager.getBundle("res");
        let asset = await ResMgr.LoadResAbSub("config/cfg", JsonAsset);
        this.data = asset.json;

        this.aryToMap("Card", "ID");
        this.aryToMap("ShopCommodity", "Id");
        this.aryToMap("ShopLuckyPool", "RewardPools");
        this.aryToMap("battle_terrain", "ID");
        this.aryToMap("Area", "AreaID");
        this.aryToMap("fetch", "Shortcut");

        this.formatGuide();
    }

    protected static formatGuide() {
        let cfgs: StdGuide[] = this.Get("guide");
        let groups = {};
        let connectAry = function (ary1, ary2) {
            if (!ary1 || !ary1.length) ary1 = [undefined];
            if (!ary2 || !ary2.length) ary2 = [undefined];
            return ary1.concat(ary2);
        }
        for (let i = 0; i < cfgs.length;) {
            let std = cfgs[i];
            if (!groups[std.GuideGroup]) {
                groups[std.GuideGroup] = std;
                (<unknown>std)['Childs'] = [];
                if (!std.OpenUI) (<unknown>std)['OpenUI'] = [];
                i++;
            } else {
                let group = groups[std?.GuideGroup];
                group.Childs.push(std.ID);
                group.Steps = connectAry(group.Steps, std.Steps);
                group.Type = connectAry(group.Type, std.Type);
                group.OverTime = connectAry(group.OverTime, std.OverTime);
                group.Angle = connectAry(group.Angle, std.Angle);
                group.Offset = connectAry(group.Offset, std.Offset);
                group.Tips = connectAry(group.Tips, std.Tips);
                group.TipsAngle = connectAry(group.TipsAngle, std.TipsAngle);
                group.TipsSize = connectAry(group.TipsSize, std.TipsSize);
                group.TipsOffset = connectAry(group.TipsOffset, std.TipsOffset);
                group.Auto = connectAry(group.Auto, std.Auto);
                group.Prefabs = connectAry(group.Prefabs, std.Prefabs);
                group.EndPanel = connectAry(group.EndPanel, std.OpenUI);

                if (group?.Audio) group.Audio = connectAry(group.Audio, std.Audio);
                cfgs.splice(i, 1);
            }
        }
    }


    /**转map */
    private static aryToMap(name: string, key: string) {
        let cfg = this.data[name];
        if (!Utils.IsArray(cfg)) {
            console.warn("目标配置已经是map => " + name);
        } else {
            let obj = {};
            for (let i = 0; i < cfg.length; i++) {
                let child = cfg[i];
                let k = child[key];
                if (k == undefined) throw "找不到指定键值 " + name + "->" + key + i;
                if (!k) continue;
                if (obj[k]) console.warn("检测到重复键值 " + name + "->" + k);
                obj[k] = child;
            }
            this.data[name] = obj;
        }
    }

    /**获取指定配置 */
    static Get(name: string): any {
        return this.data[name];
    }

    /**
     * 获取技能配置
     * @param skillId 
     * @returns 
     */
    static GetCardSkill(skillId: number) {
        if (skillId == undefined) return undefined;
        let stds: StdSkill[] = this.data["battle_card_skill"];
        return stds.find(value => value.SkillId == skillId);
    }

    static GetCardMap(): { [key: number]: StdCard } {
        return this.Get("Card");
    }

    /**获取卡牌 */
    static GetCard(id: number): StdCard {
        return this.GetCardMap()[id];
    }

    static GetCardSkillDesc(id: number): string {
        let std: StdCard = this.GetCard(id);
        let skillDesc: string = "";
        if (std) {
            for (let index = 0; index < std.SkillID.length; index++) {
                let skill = CfgMgr.GetCardSkill(std.SkillID[index]);
                if (skill) {
                    skillDesc += skill.Desc;
                    if (index < std.SkillID.length - 1) {
                        skillDesc += "、";
                    }
                }

            }
        }
        return skillDesc;
    }

    /**获取卡牌变形列表 */
    static GetCardClassList(id: number): StdCard[] {
        let map: { [key: number]: StdCard } = this.GetCardMap();
        let std: StdCard = map[id];
        let list: StdCard[] = [];
        let classId: number = std ? std.Classid : null;
        if (classId != null || classId != undefined) {
            let calssCard: StdCard;
            for (let key in map) {
                calssCard = map[key];
                if (calssCard.Classid == classId) {
                    list[list.length] = calssCard;
                }
            }
        }

        return list;
    }

    /**通过classid获取卡牌列表 */
    static GetCardListByClassID(class_id: number): StdCard[] {
        let map: { [key: number]: StdCard } = this.GetCardMap();
        let list: StdCard[] = [];
        let calssCard: StdCard;
        for (let key in map) {
            calssCard = map[key];
            if (calssCard.Classid == class_id) {
                list[list.length] = calssCard;
            }
        }
        return list;
    }


    private static canFightCards: Object;
    static GetCanFightCard() {
        if (!this.canFightCards) this.canFightCards = {};
        let cards = this.Get("Card");
        for (let k in cards) {
            if (cards[k].IsOpen) this.canFightCards[k] = cards[k];
        }
        return this.canFightCards;
    }

    /**获取卡牌列表 */
    static get CardList(): StdCard[] {
        let list: StdCard[] = [];
        let map: { [key: string]: StdCard } = this.Get("Card");
        for (let key in map) {
            if (map[key].IsOpen) list.push(map[key]);
        }
        return list
    }

    static GetTerrain(id: number): StdTerrain {
        return this.Get("battle_terrain")[id];
    }

    /**
* 获取道具配置
* @param id 
* @returns 
*/
    static Getitem(id: number): StdItem {
        let cfg = this.Get("Item");
        let item = null;
        for (let index in cfg) {
            if (cfg[index].Items == id) {
                item = cfg[index];
                break;
            }
        }
        return item;
    }

    /**获取头像配置 */
    static GetHead(id: number): StdHead {
        if (id == undefined) return undefined;
        let cfg: StdHead[] = CfgMgr.Get("head");
        for (let std of cfg) {
            if (std.ID == id) return std;
        }
        return;
    }

    /**获取卡背配置 */
    static GetCardBackCfgById(id: number): StdCardBack {
        let cfg: StdCardBack[] = CfgMgr.Get("backpacker");
        for (let std of cfg) {
            if (std.ID == id) return std;
        }
        return;
    }

    static GetTaskById(id: number): StdTask {
        let stdTask: StdTask[] = this.Get(`task`);
        for (let task of stdTask) {
            if (task.TaskId == id) {
                return task;
            }
        }
        return null;
    }

    /**通过展示页面获取该类型的任务 */
    static GetTaskByShowType(type: number): StdTask[] {
        let stdTask: StdTask[] = this.Get(`task`);
        let task_list: StdTask[] = []
        for (let task of stdTask) {
            if (task.Show == type) {
                task_list.push(task)
            }
        }
        return task_list;
    }

    /**通过任务类型获取任务 */
    static GetTaskByTaskType(task_type: number): StdTask[] {
        let stdTask: StdTask[] = this.Get(`task`);
        let task: StdTask[] = []
        for (let _task of stdTask) {
            if (_task.TaskType == task_type) {
                task.push(_task);
            }
        }
        task.sort((a, b) => {
            return a.CompletionNum - b.CompletionNum
        })
        return task;
    }

    /**通过任务数据获取配置的唯一id */
    static GetTaskByData(data: proto.base.IPlayerDataTask): StdTask {

        let task_list: StdTask = null;

        //是否是每日任务
        if (data) {
            let stdTask: StdTask[] = this.Get(`task`);
            let task_group_list: StdTask[] = [];
            for (let task of stdTask) {
                //同组数据    
                if (data.id == task.TopTask) {
                    task_group_list.push(task);
                }
            }

            if (task_group_list.length > 1) {
                task_group_list.sort((a, b) => {
                    return a.TaskId - b.TaskId
                })
                let cfg = null
                //没有任何领取拿该组第一个
                if (!data.end) {
                    let num = Number.MAX_SAFE_INTEGER;
                    for (let task of task_group_list) {
                        if (task.CompletionNum < num) {
                            num = task.CompletionNum
                            cfg = task
                        }
                    }
                    task_list = cfg;
                } else {

                    for (let index = 0; index < task_group_list.length; index++) {
                        const element = task_group_list[index];
                        if (element.TaskId == data.end) {
                            if (index == task_group_list.length - 1) {
                                task_list = element
                            } else {
                                task_list = task_group_list[index + 1]
                            }
                            break;
                        }
                    }
                }
            } else {
                task_list = task_group_list[0]
            }
        }

        return task_list;
    }

    /**是否是同组最后一条数据 */
    static GetTaskGroupLast(data: proto.base.IPlayerDataTask) {
        let stdTask: StdTask[] = this.Get(`task`);
        let task_group_list: StdTask[] = [];
        for (let task of stdTask) {
            //同组数据    
            if (data.id == task.TopTask) {
                task_group_list.push(task);
            }
        }
        task_group_list.sort((a, b) => {
            return a.CompletionNum - b.CompletionNum
        })
        let last = task_group_list[task_group_list.length - 1]
        return data.end == last.TaskId
    }

    /**获取赛季章节任务信息 */
    static GetTaskChapterCfg(id: number) {
        let seasonTask: StdTaskSeason[] = this.Get(`taskSeason`);
        let cfg: StdTaskSeason = null
        for (const iterator of seasonTask) {
            if (iterator.ID == id) {
                cfg = iterator
            }
        }
        return cfg
    }

    /**通过章节id获取赛季章节任务 */
    static GetSeasonTaskByChapterID(id: number) {
        let stdTask: StdTask[] = this.Get(`task`);
        let chapterList: StdTask[] = []
        for (const iterator of stdTask) {
            if (iterator.TaskTypeData[0] == id) {
                chapterList.push(iterator);
            }
        }
        return chapterList
    }

    /**获取宝箱数据 */
    static GetBoxData(id: number) {
        let cfg: RewardBox[] = CfgMgr.Get("RewardBox");
        for (let std of cfg) {
            if (std.ItemID == id) {
                return std;
            }
        }
    }

    /**
     * 获取商城页签配置
     * @param shopGroupId
     * @param shopType
     * @returns 
     */
    static GetShopIndex(shopGroupId: string, shopType: number): StdShopIndex {
        let indexList: StdShopIndex[] = this.getShopIndexList();
        for (let stdShopIndex of indexList) {
            if (stdShopIndex.Panel == shopGroupId && stdShopIndex.ShopType == shopType) {
                return stdShopIndex;
            }
        }
    }
    /**
     * 获取商城配置列表
     * @param panel 
     * @returns 
     */
    static GetShopsByPanel(panel: string) {
        let map: StdShopIndex[][] = [];
        let indexList: StdShopIndex[] = this.getShopIndexList();
        for (let stdShopIndex of indexList) {
            if (stdShopIndex.Panel == panel) {
                if (!map[stdShopIndex.TabSort]) {
                    map[stdShopIndex.TabSort] = [stdShopIndex];
                } else {
                    map[stdShopIndex.TabSort].push(stdShopIndex);
                }
            }
        }
        // let shops = Array.from(map.values());
        // shops.sort((a, b) => a.TabSort - b.TabSort);
        let shops: StdShopIndex[][] = [];
        for (let group of map) {
            if (group) shops.push(group);
        }
        return shops;
    }

    static GetShopIndexById(ID: number): StdShopIndex {
        let indexList: StdShopIndex[] = this.getShopIndexList();
        for (let stdShopIndex of indexList) {
            if (stdShopIndex.ID == ID) {
                return stdShopIndex;
            }
        }
    }

    /**
     * 获取商城配置列表
     * @returns 
     */
    private static getShopIndexList(): StdShopIndex[] {
        return this.Get(`ShopIndex`);
    }

    static GetShop(id: number): StdShop {
        for (let std of this.GetShopList()) {
            if (std.ID == id) return std;
        }
        return null;
    }

    static GetShopList(): StdShop[] {
        return this.Get("Shop");
    }

    /**
     * 获取通用商品配置
     * @param id 
     * @returns 
     */
    static GetCommShopItem(id: number): StdShopCommodity {
        return this.Get(`ShopCommodity`)[id];
    }

    /**
     * 获取商城抽奖配置
     * @param id 
     * @returns 
     */
    static GetShopLucky(id: number): StdShopLucky {
        let list: StdShopLucky[] = this.getShopLuckuyList();
        for (const std of list) {
            if (std.CardpoolId == id) return std;
        }
    }

    /**
     * 获取商城配置列表
     * @returns 
     */
    private static getShopLuckuyList(): StdShopLucky[] {
        return this.Get(`ShopLucky`);
    }

    /**
     * 获取抽奖商店池子配置列表
     * @param shopGroupId
     * @param shopType
     * @returns 
     */
    static GetLuckyDatas(shopGroupId: string, shopType: number): StdLuckyShop[] {
        let indexList: StdShopIndex[] = this.getShopIndexList();
        let list: StdShopLucky[] = this.getShopLuckuyList();
        let newList: StdLuckyShop[] = [];
        for (let stdShopIndex of indexList) {
            if (stdShopIndex.SystemOpen > 0 && stdShopIndex.Panel == shopGroupId && stdShopIndex.ShopType == shopType) {
                for (let stdShopLucky of list) {
                    if (stdShopLucky.RewardPools == stdShopIndex.LuckyID) {
                        newList.push({ shopId: stdShopIndex.ID, shopStd: stdShopLucky });
                    }
                }
            }
        }
        return newList;
    }

    /**
     * 获取抽奖商城池子
     * @param id 
     */
    public static GetShopLuckyPool(id: number): StdShopLuckyPool {
        console.log(this.Get(`ShopLuckyPool`))
        return this.Get(`ShopLuckyPool`)[id];
    }

    /**获取卡片 */
    static GetBattleCardDeliver(id: number): StdBattleCardDelivery {
        let list = this.Get("battle_card_delivery");
        for (let std of list) {
            if (std.ID == id) return std;
        }
        return null
    }

    /**获取交易所商品配置 */
    static GetTradeAllCfgData(type: number) {
        if (type == 0) {
            let cfg: StdMarketItem[] = CfgMgr.Get("market_item")
            let datas: StdMarketItem[] = [];
            for (const iterator of cfg) {
                datas.push(iterator)
            }
            return datas;
        } else if (type == 1) {
            let cfg: StdMarketCard[] = CfgMgr.Get("market_card")
            let datas: StdMarketCard[] = [];
            for (const iterator of cfg) {
                datas.push(iterator)
            }
            return datas;
        }
    }

    /**获取交易所卡牌商品配置 */
    static GetTradeAllCardCfgData(type: number) {
        let cfg: StdMarketCard[] = CfgMgr.Get("market_card")
        let datas: StdMarketCard[] = [];
        for (const iterator of cfg) {
            datas.push(iterator)
        }
        return datas;
    }

    /**获取所有交易商品 */
    static GetTradeAllData(type: number) {
        if (type == 0) {
            let cfg: StdMarketItem[] = CfgMgr.Get("market_item")
            let datas: proto.base.IThing[] = [];
            for (const iterator of cfg) {
                //道具
                let data: proto.base.IThing = {
                    type: ThingTypeName.Item,
                    item: { id: iterator.ItemId, count: 0 }
                }
                datas.push(data)
            }
            return datas;
        } else if (type == 1) {
            let cfg: StdMarketCard[] = CfgMgr.Get("market_card")
            let datas: proto.base.IThing[] = [];
            for (const iterator of cfg) {
                //卡牌
                let data: proto.base.IThing = {
                    type: ThingTypeName.Equipment,
                    card: {
                        id: "", cardId: iterator.CardID, level: 1, quality: iterator.CardQuality,
                        exp: 0, ownershipType: 0, updateId: 0, tradeCd: 0, nftLockExpires: 0, createdAt: 0
                    }
                }
                datas.push(data)
            }
            return datas;
        }
    }

    /**获取交易商品配置
   * buyOrSell ture代表
   */
    static GetTradeData(data: proto.base.IThing) {
        if (data.item) {
            let cfg: StdMarketItem[] = CfgMgr.Get("market_item")
            for (const iterator of cfg) {
                if (data.item && iterator.ItemId == data.item.id) {
                    return iterator;
                }
            }
        } else if (data.card) {
            let cfg: StdMarketCard[] = CfgMgr.Get("market_card")
            for (const iterator of cfg) {
                if (data.card && iterator.CardID == data.card.cardId) {
                    return iterator;
                }
            }
        }
    }
    /**
     * 获取ai列表
     * @returns 
     */
    static get AIGroupList(): StdAIGroup[] {
        let aiList: StdAIGroup[] = CfgMgr.Get("Ai_Group");
        return aiList;
    }

    /**
     * 获取地形
     * @param id 
     * @returns 
     */
    static getArea(id: number): StdArea {
        return CfgMgr.Get("Area")[id];
    }

    private static canFightArea: Object;
    static getCanFightArea() {
        if (!this.canFightArea) this.canFightArea = {};
        let areas = this.Get("Area");
        for (let k in areas) {
            if (areas[k].IsOpen) this.canFightArea[k] = areas[k];
        }
        return this.canFightArea;
    }

    /**
     * 获取地形列表
     */
    static get AreaList(): StdArea[] {
        let list: StdArea[] = [];
        let map: { [key: string]: StdArea } = CfgMgr.Get("Area");
        for (let key in map) {
            if (map[key].IsOpen) list.push(map[key]);
        }
        return list;
    }




    /**通过类型获取该类型的所有卡牌*/
    static GetCardCfgByType(data: proto.base.IBattleCard[], type) {
        let card_id_list = []
        if (type == 0) {
            return data;
        }
        for (const iterator of data) {
            let cfg = this.GetCard(iterator.cardId)
            if (cfg && cfg.Type.indexOf(type) != -1) {
                card_id_list.push(iterator)
            }
        }
        return card_id_list;
    }

    static GetInstructionsById(id: number): string {
        let language: StdInstructions[] = CfgMgr.Get("instructions");
        for (const iterator of language) {
            if (iterator.ID == id) {
                return iterator.Desc;
            }
        }
        return "";
    }

    private static cardUpgradeMap: Map<number, StdCardUpgrade[]>;
    //获取卡牌等级列表
    static GetCardUpgradeList(cardId: number): StdCardUpgrade[] {
        if (!this.cardUpgradeMap) {
            this.cardUpgradeMap = new Map();
            let list: StdCardUpgrade[] = this.Get("CardUpgrade");
            let carUpgradeList: StdCardUpgrade[];
            for (let std of list) {
                carUpgradeList = this.cardUpgradeMap.get(std.CardID);
                if (!carUpgradeList) {
                    carUpgradeList = [];
                    this.cardUpgradeMap.set(std.CardID, carUpgradeList);
                }
                carUpgradeList.push(std);
            }
        }
        return this.cardUpgradeMap.get(cardId) || [];
    }

    /**获取卡牌等级配置 */
    static GetCardUpgrade(cardId: number, qual: number): StdCardUpgrade {
        let list: StdCardUpgrade[] = this.GetCardUpgradeList(cardId);
        for (let std of list) {
            if (std.Quality == qual) {
                return std;
            }
        }
        return null;
    }

    /**获取卡牌等级显示列表 */
    static GetCardUpgradeShowList(): StdCardUpgradeShow[] {
        return CfgMgr.Get("CardUpgradeShow");
    }

    /**获取卡牌等级显示配置 */
    static GetCardUpgradeShow(qual: number): StdCardUpgradeShow {
        let list: StdCardUpgradeShow[] = this.GetCardUpgradeShowList();
        for (let std of list) {
            if (std.CardQuality == qual) {
                return std;
            }
        }
        return null;
    }

    private static playerLevelAwardList: StdPlayerLevelAward[];
    /**
     * 获取收藏等级奖励列表
     * @returns 
     */
    static GetPlayerLevelArwardList(): StdPlayerLevelAward[] {
        if (this.playerLevelAwardList) return this.playerLevelAwardList;
        this.playerLevelAwardList = [];
        let list: StdPlayerLevel[] = this.GetPlayerLevelList();
        let std: StdPlayerLevel;
        let awardLv: StdPlayerLevelAward;

        for (let index = 0; index < list.length; index++) {
            std = list[index];
            if (std.RewardID > 0 || std.RewardPool > 0) {
                awardLv = {
                    stdPlayerLevel: std,
                    sectionList: index < list.length - 1 ? [] : null
                };
                this.playerLevelAwardList.push(awardLv);
            } else {
                if (awardLv && awardLv.sectionList) {
                    awardLv.sectionList.push(std);
                }
            }

        }
        return this.playerLevelAwardList;
    }

    /**
     * 获取收藏等级列表
     * @returns 
     */
    static GetPlayerLevelList(): StdPlayerLevel[] {
        return this.Get("PlayerLevel");
    }

    /**
     * 获取收藏最大等级
     * @returns 
     */
    static GetMaxPlayerLevel(): StdPlayerLevel {
        let list: StdPlayerLevel[] = this.GetPlayerLevelList();
        return list[list.length - 1];
    }

    /**获取宝箱配置列表 */
    static GetProcessBoxList(): StdProcessBox[] {
        return this.Get("Processbox");
    }

    /**获取宝箱配置 */
    static GetProcessBox(boxId: number): StdProcessBox {
        let list: StdProcessBox[] = this.GetProcessBoxList();
        for (let std of list) {
            if (std.ID == boxId) {
                return std;
            }
        }
        return null;
    }

    /**获取新手宝箱类型列表 */
    static GetBoxTypeList(type: StdProcessBoxType): StdProcessBox[] {
        let list: StdProcessBox[] = this.GetProcessBoxList();
        let newList: StdProcessBox[] = [];
        for (let std of list) {
            if (std.BoxType == type) {
                newList.push(std);
            }
        }
        newList.sort((a: StdProcessBox, b: StdProcessBox) => {
            return a.ID - b.ID;
        });
        return newList;
    }

    /**
     * 通过id获取通用配置
     */
    static GetCommon(id: number) {
        let stdList: StdCommon[] = CfgMgr.Get("Common");
        for (const iterator of stdList) {
            if (iterator.ModuleId == id && iterator.ConfigValues) {
                return iterator.ConfigValues;
            }
        }
        return null;
    }

    /**获取卡组通用配置 */
    static get CardGuroupComm(): StdCardGroupBase {
        return this.GetCommon(StdCommonType.CardBase);
    }

    /**
     * 通过id获取通用配置
     */
    static GetLogic(id: string) {
        let stdList: StdLogic[] = CfgMgr.Get("Logic");
        for (const iterator of stdList) {
            if (iterator.ModuleKey == id && iterator.ConfigValues) {
                return iterator.ConfigValues;
            }
        }
        return null;
    }

    static GetStdPVPSnatchList(): StdPVPSnatch[] {
        let stdPVPSnatchList: StdPVPSnatch[] = CfgMgr.Get("PVPSnatch");
        return stdPVPSnatchList;
    }
    /**获取赛季配置 */
    static GetStdPVPSnatch(id: number): StdPVPSnatch {
        let stdPVPSnatchList: StdPVPSnatch[] = this.GetStdPVPSnatchList();
        for (let std of stdPVPSnatchList) {
            if (std.MatchID == id) {
                return std;
            }
        }
        return null;
    }

    /**获取段位配置列表 */
    static GetStdPvpLvCfgList(groupId: number): StdPvpLevel[] {
        let list: StdPvpLevel[] = CfgMgr.Get("pvp_level");
        let newList: StdPvpLevel[] = [];
        for (let index = 0; index < list.length; index++) {
            let std = list[index];
            if (std.GroupID == groupId) {
                newList.push(std);
            }
        }
        return list;
    }

    /**获取段位配置 */
    static GetStdPvpLv(groupId: number, id: number): StdPvpLevel {
        let list: StdPvpLevel[] = this.GetStdPvpLvCfgList(groupId);
        id = id || list[0].LevelID;
        for (let std of list) {
            if (std.GroupID == groupId && std.LevelID == id) {
                return std;
            }
        }
        return null;
    }

    /**获取段位配置 */
    static GetStdPvpLvByPoint(groupId: number, point: number): StdPvpLevel {
        let list: StdPvpLevel[] = this.GetStdPvpLvCfgList(groupId);
        let checkStd: StdPvpLevel;
        for (let index = list.length - 1; index >= 0; index--) {
            let std: StdPvpLevel = list[index];
            if (point >= std.LevelPoints) {
                checkStd = std;
                break;
            };
        }
        return checkStd || list[0];
    }

    /**获取段位区间配置 */
    static GetStdPvpLvListByPoint(groupId: number, startPoint: number, endPoint: number): StdPvpLevel[] {
        let list: StdPvpLevel[] = this.GetStdPvpLvCfgList(groupId);
        let newList: StdPvpLevel[] = [];
        for (let index = list.length - 1; index >= 0; index--) {
            let std: StdPvpLevel = list[index];
            if (endPoint >= std.LevelPoints && std.LevelPoints >= startPoint) {
                newList.unshift(std);
            };
        }
        return newList;
    }

    /**错误码 */
    static GetErrorCfgByCode(code: number) {
        let cfg: StdErrorMessage[] = this.Get("ErrorMessage");
        for (let index = 0; index < cfg.length; index++) {
            const element = cfg[index];
            if (element.code == code) {
                return element.alert;
            }
        }
        return "code" + code;
    }

    /**************************************************权益相关************************************** */
    /**赛季通行证配置 */
    static getSeaGatepass(seaid){
        let cfg:StdSeaGatepass[] = this.Get("SeaGatepass");
        let list = []
        for (let index = 0; index < cfg.length; index++) {
            const element = cfg[index];
            if (element.SeaId == seaid) {
                list.push(element);
            }
        }
        return list
    }

    /**获取赛季通行证等级配置 */
    static getSeaGatepassLv(){
        let cfg:StdSeaGatepassLv[] = this.Get("SeaGatepassLv");
        return cfg
    }
    /**根据等级获取当前赛季通行证下一级经验 */
    static getSeaGatepassNextExp(lv:number){
        let lv_cfg:StdSeaGatepassLv[] = this.getSeaGatepassLv();
        let max_lv = lv_cfg.length
        let next_lv = max_lv <= lv ? max_lv : lv + 1;
        let next_exp = 0
        for (let index = 0; index < lv_cfg.length; index++) {
            const element = lv_cfg[index];
            if (element.Lv == next_lv) {
                next_exp = element.Exp;
            }
        }
        return next_exp
    }

    /**获取当前赛季通行证奖励 */
    static getSeaGatepassReward(id:number){     
        let lv_cfg:StdSeaGatepassLvReward[] = this.Get("SeaGatepassLvReward");
        let reward_lsit:StdSeaGatepassLvReward[] = [];
        for (let k = 0; k < lv_cfg.length; k++) {
            const element = lv_cfg[k];
            if (id == element.SeaGatepassID) {
                reward_lsit.push(element)
            }
        }
        return reward_lsit
    }

    /**获取当前赛季不同等级不同级别的奖励 */
    static getSeaGatepassRewardByLvAndGrate(lv:number, id:number){
        let lv_cfg:StdSeaGatepassLvReward[] = this.Get("SeaGatepassLvReward");    
        let reward_lsit:StdSeaGatepassLvReward;   
        for (let index = 0; index < lv_cfg.length; index++) {
            const element = lv_cfg[index];
            if(element.SeaGatepassID == id && element.Lv == lv){
                reward_lsit = element
            } 
        }
        return reward_lsit
    }

    /**获取权益开放配置 */
    static getEquityOpenCfg(seaid:number){
        let equity_cfg:StdEquityCard[] = this.Get("EquityCard");
        let time = DateUtils.ServerTime;
        let _lsit:number[] = [];
        let open_lsit:StdEquityCard[] = [];
        for (let index = 0; index < equity_cfg.length; index++) {
            const element = equity_cfg[index];
            let open_time = DateUtils.DateStringToTime(element.ShowStartTime)
            let end_time = DateUtils.DateStringToTime(element.ExchangeEndTime)
            if(element.CardType == 1 && typeof element.SeaId != "string"){              
                if(element.SeaId == seaid && _lsit.indexOf(element.SeaId) == -1){
                    open_lsit.push(element)
                    _lsit.push(element.SeaId);
                }
            }else{
                if(open_time <= time && end_time > time){
                    open_lsit.push(element) 
                } 
            }
        }
        return open_lsit
    }

    /**获取权益展示 */
    static getEquityShowList(id_list:number[]){
        let list:StdEquityList[] = this.Get("EquityList");
        let des_list:string[] = [];
        let reward_list = [];
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if( id_list.indexOf(element.EquityID) != -1){
                if(element.EquityType != 2){
                    des_list.push(element.describe)
                }else{
                    reward_list.push(element.RewardType, element.RewardID, element.RewardNumber);
                }
            }
        }

        return [des_list, reward_list]
    }
    /***********************************************权益相关end********************************************** */

    static GetStdPVPBattleList(): StdPVPBattle[] {
        let cfg:StdPVPBattle[] = this.Get("PVPBattle");
        return cfg;
    }
    /**获取赛季配置 */
    static GetStdPVPBattle(id: number): StdPVPBattle {
        let stdPVPBattleList: StdPVPBattle[] = this.GetStdPVPBattleList();
        for (let std of stdPVPBattleList) {
            if (std.MatchID == id) {
                return std;
            }
        }
        return null;
    }
}


/**背包页签类型 */
export enum ItemSubType {
    all,       // 全部
    prop,      // 材料，资源
    factor,    // 经验道具，宝箱道具等可消耗
    currency,  // 碎片，合成
}

export enum ThingName {
    item = 1,
    weapon,
    battlecard
}

/**事物大类枚举 */
export class ThingTypeName {
    static readonly Item = "item";  // 道具
    static readonly Equipment = "equipment"; //装备
    static readonly BattleCard = "battlecard"; //卡牌
}

export enum ThingType {
    item = 1, // 道具
    equipment, // 装备
    battlecard, // 卡牌 
    playerexp, // 玩家经验
}

/**道具类型枚举 */
export enum ItemType {
    money = 1, // 货币
    box,       // 宝箱
    item,       // 无特殊类型的道具
    exp,       // 经验道具
    shard,     // 角色碎片
    speed,     // 玩法门票（未生效）旧：加速道具
    rights = 7,     //权益卡
    shield = 8,    // 玩法次数增加类道具 旧：防护罩
    piece,      //英雄粉尘（ItemEffect1填对应classid）
}

/**卡牌枚举 */
export enum CardQuality {
    N = 1,
    R,
    sR,
    ssR,
    UR
}

/**
 * 系统开启配置
 */
export type StdUIOpen = {
    readonly ConditionId1: number[];//条件1
    readonly ConditionValue1: number[];//条件1值
    readonly ConditionId2: number[];//条件2
    readonly ConditionValue2: number[];//条件2值
    readonly Panel: string[];//界面组
    readonly UI: string[];//入口1
    readonly HideType: number[];//隐藏类型0(空)消失1锁图标
    readonly Tips: string;
}

/**道具配置 */
export type StdItem = {
    readonly Items: number;           // 道具id
    readonly ItemName: string;        // 道具名字
    readonly ItemValue: number;       // 道具价值
    readonly HideBag: number;         // 背包里是否隐藏
    readonly Itemtpye: number;        // 道具类型
    readonly ItemEffect1: number;     // 道具效果1
    readonly ItemEffect2: number;     // 道具效果2
    readonly ItemEffect3: number;     // 道具效果3
    readonly Quality: number;         // 道具品质
    readonly Icon: string;            // 道具图标
    readonly LockTime: number          // 交易冷却时间
    readonly StackLimit: number;      // 堆叠上限
    readonly SubType: number;         // 切页分类
    readonly Remark: string;          // 说明
    readonly SkipGet: any[];          // 获取途径
    readonly Tradetype: number;       // 是否可交易
    readonly Sort: number;            // 排序
    readonly SpecialDisplay: number;  // 特殊展示
    readonly ConditionId: any[];      // 道具使用前置
    readonly ConditionLv: number[];   // 道具使用提交
    readonly Button: any[];           // 道具按钮
}

/**卡牌配置 */
export type StdCard = {
    readonly ID: number; // 卡牌ID
    readonly Classid: number;//组详情id
    readonly ClassName: string;//组名称
    readonly CardName: string; // 卡片名
    readonly IsOpen: number;//是否开放
    readonly Type: number[];//卡归属卡组类型
    readonly EthnicType: number; // 种族类型
    readonly ProfessionType: number; // 职业
    readonly Cost: number; // 能量
    readonly Power: number; // 战力
    readonly SkillID: number[]; // 技能id列表
    readonly SkillPrefabs: string[];//特效预制
    readonly PlacementLevel: number; // 放置层级
    readonly CardBody: string;
    readonly CardView: string;//立绘资源
    readonly SceneBody: string;
    readonly Cover: string; // 卡片封面
    readonly SkillAnimation: string; // 卡片特效
    readonly CardRarity: number; // 稀有度
    readonly ProducePeriods: number; //期数
    readonly SkillDesc: string; // 描述
}

export type StdTerrain = {
    readonly ID: number;
    readonly AreaSkillID: number[];
    readonly SkillPrefabs: string[];
    readonly Type: number;
    readonly Value: number;
    readonly AreaAffect: number;
    readonly AffectText: string;
    readonly ValueFirst: number;
    readonly ValueSecond: number;
    readonly CardID: number[];
    readonly CardValue: number[];
    readonly Cover: string;
    readonly SkillAnimation: string;

}

/**
 * 技能配置
 */
export type StdSkill = {
    readonly SkillId: number;
    readonly Desc: string
    readonly SkillPrefabs: string[];
    readonly EffectsLevel: number;
    readonly TimingLocation: number[];
    readonly EffectTake: string[];
    readonly EffectType: string;
    readonly EffectParam: string[];
    readonly EffectParam2: any[];
    readonly TargetType: string;
    readonly TargetParam1: any[];
    readonly TargetParam2: any[];
    readonly ConditionType: string;
    readonly ConditionParam1: string[];
    readonly ConditionParam2: any[];
    readonly ConditionParam4: any[];
    readonly SkillAnimation: string;
}

/**
 * 技能效果枚举
 */
export type StdEffect = {
    readonly CardSkill1: string;
    readonly SkillName1: string;
    readonly Desc1: string;
    readonly PramDesc1: string;
}

/**头像 配置*/
export type StdHead = {
    readonly ID: number,
    readonly icon: string,
    readonly name: string,
    readonly headTheme: number,
    readonly headThemeName: string,
    readonly cardView: string,
}

/**卡背配置*/
export type StdCardBack = {
    readonly ID: number,
    readonly icon: string,
    readonly icon1: string,
    readonly name: string,
    readonly backpackerTheme: number,
    readonly backpackerThemeName: string,
}

/**任务配置 */
export type StdTask = {
    TaskId: number,//任务ID
    TopTask: number,
    isMainShow: number,
    TaskType: number,//任务类型
    TaskTypeData: number[],//任务类型数据
    Show: number,//显示界面
    CompletionConditions: number,//完成条件
    CompletionValue: number[],//完成条件值（英雄ID配0表示不对英雄ID有要求）；用于满足日常任务-升级建筑、升级英雄等泛任务
    CompletionEqual: number[],
    CompletionNum: number,//完成次数
    Extend: number
    TaskName: string,//任务名称
    Description: string,//描述
    ConditionId: number[],//接受条件
    ConditionValue: number[],//接受条件值
    TasksGroup: number,//任务组
    CompletionType: number,//完成方式（1自动，2手动）
    ProgressDisplay: number,//进度显示
    RewardType: number[],//奖励大类
    RewardID: number[],//任务奖励
    RewardNumber: number[],//奖励数量
    RronyRewardNum: number,//贡献奖励详情（原石）
    WeekActiveTaskValue: number,//周活跃度
    ActiveTaskValue: number,//活跃度
    Win: string,//前往id
    Param: any[],//前往id
    DataClean: number
    TaskWeight: number
    ResetType: number,//重置类型 1每日2每周3每月4成就
}

/**章节任务配置 */
export type StdTaskSeason = {
    ID: number;
    SeasonChapterName: string;
    SeasonID: number;
    OpenTime: number;
}

/**宝箱类型 */
export enum BoxType {
    random = 1,
    select,
    all,
}

/**宝箱配置 */
export type RewardBox = {
    readonly ItemID: number;
    readonly Boxtype: number;
    readonly Repeat: number;
    readonly RewardNum: number;
    readonly Types: number[];
    readonly Items: number[];
    readonly ItemsNum: number[];
    readonly Probability: number[];
    readonly Limit: number;
    readonly Text: string;
    readonly SpecialDisplay: number[];
}

/**道具配置 */
export type ItemGive = {
    readonly Items: number;             // 道具id
    readonly GiveLimitMin: number;      // 赠送数量限制（最小）
    readonly GiveLimitMax: number;      //赠送数量限制（最大）
    readonly GiveLimitDaily: number;    // 每日赠送数量限制
    readonly FeeItemID: number;           // 扣除物品id
    readonly GiveFeeRate: number;           // 赠送手续费（万分位）
    readonly GiveFeeBase: number;           // 扣除物品id
    readonly GiveFeeMin: number;           //最小赠送手续费（万分位）

}

/**
 * 系统开启配置
 */
export type StdSystemDoor = {
    readonly ID: number;
    readonly ConditionId1: number[];
    readonly ConditionValue1: number[];
    readonly ConditionId2: number[];
    readonly ConditionValue2: number[];
    readonly Panel: string[];
    readonly UI: string[];
    readonly HideType: number[];
    readonly Tips: string;
}

/**
 * 引导配置
 */
export type StdGuide = {
    readonly ID: number;
    readonly Childs: number[];
    readonly GuideGroup: number;
    readonly ConditionId1: number[];
    readonly ConditionValue1: number[];
    readonly EndConditionId1: number[];
    readonly EndConditionValue1: number[];
    readonly OverTime: number[];
    readonly Steps: string[];
    readonly Type: number[];
    readonly Angle: number[]
    readonly Offset: number[][];
    readonly Tips: string[];
    readonly TipsAngle: number[];
    readonly TipsSize: number[][];
    readonly TipsOffset: number[][];
    readonly Prefabs: string[];
    readonly Auto: number[];
    readonly Audio: string[];
    readonly ClickSize: number[][];
    readonly OpenUI: string[];

}

//商城组自定义配置
export type StdShopGroup = {
    ShopGroupId: string,//商城组id
    ShopType: ShopType,//商城页签类型
    TabSort: number,//页签排序
    ShopName: string,//商城页签名字
}

/**商店类型*/
export enum ShopType {
    DayShop = 1,//每日商城
    WeekShop,//每周商城
    LuckyShop,//抽奖商城
    GemShop,//宝石商城
    PvpShop,//pvp商城
    TempShop,//临时商店
    WorldBossShop,//世界boss商店
    GemConversion = 9999,//前端自定义商店类型
}

/**商店组id*/
export enum ShopGroupId {
    BaseShop = 1,//基础商城
    festivalShop, //节日商城
    PvpShop, //Pvp商城
    WorldBossShop, //世界boss商城
}

//商城配置
export type StdShopIndex = {
    readonly ID: number,//商城id
    readonly Panel: string,//商城组id
    readonly ShopType: number,//商城类型
    readonly TabSort: number,//页签排序权重小->大
    readonly ShopIndexType: number,//商城索引类型
    readonly ShopName: string,//商城页签名称
    readonly ShopID: number,//普通商店ID (Shop表)
    readonly LuckyID: number,//抽奖商店ID （ShopLucky表）
    readonly TitleImgRes: string, //商城标签资源
    readonly MoneyType: number[];//商城所用到的消耗大类
    readonly MoneyID: number[];//商城所用到的消耗小类
    readonly SystemOpen: number;//商城是否开启
}
//通用商城配置
export type StdShop = {
    readonly ID: number,//商城id
    readonly OpenTime: number,//持续时间
    readonly RefreshCondition: number,//刷新类型 (0=不刷新,1=定时刷新,2=手动刷新)
    readonly RefreshTimeType: number,//刷新基准 (0=日内刷新，1=周内刷新)
    readonly RefreshTimeValue: number,//自动刷新参数 （基于刷新基准的时分）
    readonly IsCanManualRefresh: number,//是否可以手动刷新 
    readonly AdId: number,
    readonly RefreshThingType: number[],//手动刷新物品类型
    readonly RefreshThingId: number[],//手动刷新消耗
    readonly RefreshThingCount: number[],//手动刷新消耗
    readonly GoodsPoolId: number,//商品库id
    readonly GoodsLimit: number,//商品数量上限
}
//抽奖商城配置
export type StdShopLucky = {
    readonly CardpoolId: number,//奖池id
    readonly OpenTime: number,//持续时间
    readonly Sequence: number,//奖池显示顺序
    readonly CardPoolName: string,//奖池名字
    readonly AdTime: number,//激励广告id
    readonly Banner: string,//奖池banner
    readonly RewardPools: number,//卡池ID
    readonly FreetimesX1: number,//单次抽卡免费次数
    readonly FreetimesX1RefreshTimeType: number,//免费次数(单抽)刷新基准 (0仅初始化，1=日内刷新，2=周内刷新)
    readonly FreetimesX1RefreshTimeValue: string[],//免费次数(单抽)自动刷新参数 （基于刷新基准的时分）
    readonly FreetimesX10: number,//十抽免费次数
    readonly FreetimesX10RefreshTimeType: number,//免费次数(十抽)刷新基准 (0仅初始化，1=日内刷新，2=周内刷新)
    readonly FreetimesX10RefreshTimeValue: string[],//免费次数(十抽)自动刷新参数 （基于刷新基准的时分）
    readonly ADTimes: number,//广告次数
    readonly ADTimesRefreshTimeType: number,//广告次数刷新基准 (0仅初始化，1=日内刷新，2=周内刷新)
    readonly ADTimesRefreshTimeValue: string[],//广告次数刷新基准 （基于刷新基准的时分）
    readonly ConsumeX1ItemId: number[],//单次抽消耗道具id
    readonly ConsumeX1Cost: number[],//单次抽消耗道具数量
    readonly ConvertToConsumeItemId: number[],//转换到抽卡卡池消耗道具id
    readonly ConvertToConsumeCost: number[],//转换到抽卡卡池消耗道具数量
    readonly Frequency: number,//每日抽奖次数
    readonly FrequencyRefreshTimeType: number,//每日抽奖次数刷新基准 (0仅初始化，1=日内刷新，2=周内刷新)
    readonly FrequencyRefreshTimeValue: string[],//每日抽奖次数自动刷新参数 （基于刷新基准的时分）
    readonly GlobalFrequency: number,//全服每日抽奖次数
    readonly GlobalFrequencyRefreshTimeType: number,//全服每日抽奖次数刷新基准 (0仅初始化，1=日内刷新，2=周内刷新)
    readonly GlobalFrequencyRefreshTimeValue: string[],//全服每日抽奖次数自动刷新参数 （基于刷新基准的时分）
    readonly LuckyBgRes: string,//背景资源
    readonly LuckyTitleRes: string,//标题资源
    readonly PoolQual: number,//奖池品质
    readonly ConsumeX100Type: number,//是否可以100抽
}
//抽奖商城奖池配置
export type StdShopLuckyPool = {
    readonly RewardPools: number,//卡池ID
    readonly RewardType: number[],//奖池奖励类型
    readonly RewardId: number[],//奖池奖励id
    readonly RewardNumber: number[],//奖池奖励数量
    readonly Probability: number[],//奖品概率
    readonly GetNumber: number,//必出次数
    readonly Target: number[],//标记奖品位置(从0开始)
    readonly TargetProbability: number[],//标记奖品概率
    readonly Instructions: number,//说明帮助id
}
//通用商品配置
export type StdShopCommodity = {
    readonly Id: number;//商品id
    readonly Goodstype: number[],//商品内容类型
    readonly GoodsID: number[],//商品内容id
    readonly GoodsNum: number[],//商品内容数量
    readonly CostType: number[],//商品对应消耗类型
    readonly CostID: number[],//商品对应消耗id
    readonly CostNumber: number[],//商品对应消耗数量
    readonly GoodAmount: number,//商品限购数量
    readonly Order: number,//商品排序
    readonly Discount: number,//商品折扣
    readonly LimitBuyTime: number,//限购时间(秒)
}

//抽奖商城自定义配置
export type StdLuckyShop = {
    shopId: number,//商城id
    shopStd: StdShopLucky,//商城配置
}

//卡片投放表
export type StdBattleCardDelivery = {
    readonly ID: number;//卡片投放ID
    readonly CardID: number,//卡片ID
    readonly CardQuality: number,//卡片品质
}

/**交易所道具配置 */
export type StdMarketItem = {
    readonly Id: number; //商品id
    readonly Name: string;//商品名字
    readonly Group: number;
    readonly GroupName: string
    readonly ShowID: number;//展示筛选条件
    readonly ItemId: number; //道具id
    readonly SellGroupPriceMin: number; //上架最低组单价
    readonly SellGroupPriceMax: number; //上架最高组单价
    readonly BuyGroupPriceMin: number; //求购最低组单价
    readonly BuyGroupPriceMax: number; //求购最高组单价
    readonly GrouplimitMin: number; //上架最少组数量
    readonly GrouplimitMax: number; //上架最大组数量
    readonly GroupSize: number; //每组数量
    readonly Currencies: number[]; //结算道具ID
    readonly Fees: number; //交易手续费比例值（万分比）
    readonly AddFees: number;//交易手续费固定值
}

/**交易所道具配置 */
export type StdMarketCard = {
    readonly Id: number; //商品id
    readonly Name: string;//商品名字
    readonly Group: number;
    readonly GroupName: string
    readonly ShowID: number;//展示筛选条件
    readonly CardID: number; //卡id
    readonly CardQuality: number; //卡品质
    readonly SellGroupPriceMin: number; //上架最低组单价
    readonly SellGroupPriceMax: number; //上架最高组单价
    readonly BuyGroupPriceMin: number; //求购最低组单价
    readonly BuyGroupPriceMax: number; //求购最高组单价
    readonly GrouplimitMin: number; //上架最少组数量
    readonly GrouplimitMax: number; //上架最大组数量
    readonly GroupSize: number; //每组数量
    readonly Currencies: number[]; //结算道具ID
    readonly Fees: number; //交易手续费比例值（万分比）
    readonly AddFees: number;//交易手续费固定值
}

/**ai配置 */
export type StdAIGroup = {
    readonly AIGroupID: number; //ai组id
    readonly AILevel: string;//ai等级
}

/**地形配置 */
export type StdArea = {
    readonly AreaID: number;//地形id
    readonly AreaName: string;//地形名称
    readonly Icon: string;//地形图标
    readonly IsOpen: number;//地形是否开放 
    readonly AreaIcon: string;//地形icon
    readonly Type: number;//地形类型
    readonly Value: number;//场地默认权值
    readonly AreaAffect: number[];//地形场地效果
    readonly AffectText: string;//地形场地效果描述

}

/**生成卡组的配置 */
export type StdGenerateCardGroup = {
    readonly GenerateID: number;
    readonly Classid: number[];
    readonly CardNumber: number;
    readonly Classid1: number[];
    readonly CardNumber1: number;
    readonly Classid2: number[];
    readonly CardNumber2: number;
    readonly Classid3: number[];
    readonly CardNumber3: number;
    readonly Classid4: number[];
    readonly CardNumber4: number;
    readonly Classid5: number[];
    readonly CardNumber5: number;
    readonly Classid6: number[];
}

/**卡牌等级边框的配置 */
export type StdCardUpgradeShow = {
    readonly CardQuality: number;
    readonly Picture: string;
    readonly Title: string;
    readonly FrameDesc: string;
    readonly QualityName: string;
    readonly AddExp: number;
    readonly QualityColor: string;
}

/**变体类型描述配置 */
export type StdCardVariantType = {
    readonly Image_Type: number;
    readonly Variant_name: string;
}

export enum skillType {
    undefined,
    reveal,//揭示
    sustainwu,//持续
    unspecificness,//无特殊效果
    discard, //丢弃
    move,//移动
    delete,//删去
}

export enum CardSotrType1 {
    Down,//降序
    Up,//升序
}

export enum CardSotrType2 {
    Name,//名字排序
    Cost,//能量排序
    Power,//战力排序
    New, //最新排序
    Quality,//品质排序
    UpLevel,//可升级排序
}

/**描述配置 */
export type StdInstructions = {
    readonly ID: number;
    readonly Location: string;
    readonly Desc: string;
}

/**卡牌升级配置*/
export type StdCardUpgrade = {
    readonly ID: number;
    readonly CardID: number;//卡牌id
    readonly Quality: number;//卡牌品质
    readonly CostItemIds: number[];//消耗道具id
    readonly CostItemNums: number[];//消耗道具数量
    readonly exp: number;//获取经验值
    readonly RewardTypes: number[];//奖励物品类型
    readonly RewardIds: number[];//奖励物品id
    readonly RewardNums: number[];
    readonly show: string;//奖励说明文本
}

/**收藏等级配置*/
export type StdPlayerLevel = {
    readonly Level: number;
    readonly Name: string;
    readonly ExpCondition: number;//卡牌品质
    readonly Grandprize: number;//是否大奖
    readonly CostItemNums: number[];//消耗道具数量
    readonly icon: string;//奖励图标
    readonly randomName: string;
    readonly RewardType: number;//奖励物品类型
    readonly RewardID: number;//奖励物品id
    readonly RewardNumber: number;//奖励物品数量
    readonly RewardPool: number;//奖励池子id
}

/**收藏等级配置*/
export type StdPlayerLevelAward = {
    readonly stdPlayerLevel: StdPlayerLevel;
    readonly sectionList?: StdPlayerLevel[];
}

/**宝箱配置*/
export type StdProcessBox = {
    readonly ID: number;
    readonly Name: string;
    readonly ShowType: number;//宝箱显示类型
    readonly BoxType: number;//宝箱类型
    readonly StartTime: string;//开启时间
    readonly EndTime: string;//关闭时间
    readonly CostIDs: number[];//开启宝箱消耗物品id
    readonly CostNums: number[];//开启宝箱消耗物品数量
    readonly RewardTypes: number[];//奖励物品id
    readonly RewardIDs: number[];//奖励物品数量
    readonly RewardNums: number;//奖励池子id
}

export enum StdProcessBoxType {
    NewbieBox = 1,//新手宝箱
    LimitBox = 2,//限时宝箱
}

/**交易所卡牌筛选配置 */
export type StdMarketChoose = {
    Id: number,
    Group: number,
    GroupName: string,
    Type: number,
    TypeName: string,
}
/**通用配置id定义 */
export enum StdCommonType {
    CardBase = 1,//卡组基础配置
    DailyTask = 20,//日常任务
    CardGroup = 21,//卡组

}
/**公用配置 */
export type StdCommon = {
    readonly ModuleId: number;
    readonly ModuleKey: string;
    readonly ModuleName: string;
    readonly ConfigValues: any;
}

/**公用配置 */
export type StdLogic = {
    readonly ModuleKey: string;
    readonly ModuleName: string;
    readonly ConfigValues: any;
}


/**卡组配置 */
export type StdCardGroupBase = {
    readonly MinCost: number,//卡牌费点最小值
    readonly MaxCost: number,//卡牌费点最大值
    readonly MaxHandNumber: number,//手牌上限
    readonly DeckFullSize: number,//卡组满卡数量
    readonly DeckNumMax: number,//卡组最大数量
    readonly AreaNum: number,//区域数量
    readonly ReplayVersion: number,//
}

/**赛季配置 */
export type StdPVPSnatch = {
    readonly MatchID: number;//赛季模式ID
    readonly View: string;//
    readonly MatchName: string;//赛季名称
    readonly MatchStartTime: string;//赛季开启日期（决定有效赛季）
    readonly MatchEddTime: string;//赛季结束时间/D
    readonly MatchCloseTime: string;//赛季结算时间
    readonly RankGroupID: number;//段位组ID
    readonly MultipleLimit: number;//
}

/**段位 配置*/
export type StdPvpLevel = {
    readonly GroupID: number,
    readonly LevelID: number,
    readonly LevelType: number,
    readonly LevelIcon: string,
    readonly LevelNameImg: string,
    readonly MainName: string,
    readonly LevelName: string,
    readonly Star: number,
    readonly StarPoints: number,
    readonly LevelPoints: number,
    readonly VictoryPartReward: number[],
    readonly DefeatPartReward: number[],
    readonly LevelRewardTypes: number[],
    readonly LevelRewardIds: number[],
    readonly LevelRewardNums: number[],
}

/**错误码 配置*/
export type StdErrorMessage = {
    readonly code: number,
    readonly msg: string,
    readonly alert: string,
}

export type StdNoobCardGroup = {
    readonly GenerateID: number;
    readonly CardNumber: number;
    readonly CardID: number[];
    readonly CardNumber1: number;
    readonly CardID1: number[];
    readonly CardNumber2: number;
    readonly CardID2: number[];
    readonly CardNumber3: number;
    readonly CardID3: number[];
    readonly CardNumber4: number;
    readonly CardID4: number[];
    readonly CardNumber5: number;
    readonly CardID5: number[];
    readonly CardGroupName: string;
    readonly CardGroupHead: number;
    readonly CardGroupBack: number;
    readonly DeliveryItems: number[];
}

/**通行证 */
export type StdSeaGatepass = {
    readonly ID: number;//通行证编号
    readonly SeaId: number;//所属赛季
    readonly Grate: number;//通行证级别
    readonly Name: string;//基础通行证名称
    readonly MaxLv: number;//通行证最大等级
    readonly ItemId: number[];//通行证激活消耗道具编号跟数量
    readonly ItemNum: number[];//通行证激活消耗道具编号跟数量
    readonly EquityCardId: number;//获得权益
    readonly BgTexture: string;//通行证主页背景
    readonly BigPrizeIcon: string;//通行证主页大奖图
    readonly TitleIcon: string;//通行证主页赛季标题资源
    readonly Icon: string;//通行证图标（主页）
    readonly Des: string;//大奖文字描述
    readonly BuyDes: string[];//通行证购买描述
}

/**通行证等级配置 */
export type StdSeaGatepassLv = {
    readonly Lv: number;//等级
    readonly Exp: number;//升级到该级需要经验
}

/**通行证等级配置 */
export type StdSeaGatepassLvReward = {
    readonly Id: number;
    readonly SeaGatepassID: number;//赛季通行证编号
    readonly Lv: number;//等级
    readonly RewardType: number[];//奖励类型
    readonly RewardID: number[];//奖励编号
    readonly RewardNum: number[];//奖励数值
}

/**权益 */
export type StdEquityCard = {
    readonly EquityCardID: number;//权益卡编号
    readonly ItemId: number;//权益兑换道具道具
    readonly name: string;//
    readonly EquityList: number[];//权益ID
    readonly ShowStartTime: string;//权益展示开始时间
    readonly ExchangeStartTime: string;//权益可兑换开始时间
    readonly ExchangeEndTime: string;//权益下架时间-0表示永久
    readonly LimitNum: number;//单次可兑换次数
    readonly RepeatExchange: number;
    readonly keepDuration: number;//权益持续时间
    readonly bind_benefit: number;//是否激活上级好友绑定次数
    readonly TabIcon: string;//页签图标
    readonly TabName: string;//权益卡tab按钮名称
    readonly CardType: number;//权益卡类型
    readonly SeaId: number;//赛季通行证所属赛季
    readonly RewardType: number[];//权益开通马上获得奖励类型
    readonly RewardID: number[];//权益开通马上获得奖励编号
    readonly RewardNumber: number[];//权益开通马上获得奖励数量
    readonly BgTxture: string;//权益界面背景图
    readonly GetEquityIcon: string;//权益logo图
    readonly EffectShow: string;//权益展示特效
    readonly NameIcon:string;
}

/**权益列表 */
export type StdEquityList = {
    readonly EquityID: number;//权益编号
    readonly EquityType: number;//权益类型
    readonly EquityName: string;//权益类型名称
    readonly Function: string;//关联功能
    readonly Param: string;//关联参数
    readonly ParamValue: number;//参数详情
    readonly Icon: string;//图标
    readonly describe: string;//文本
    readonly RewardType: number[];//奖励类型
    readonly RewardID: number[];//奖励编号
    readonly RewardNumber: number[];//奖励数量
    readonly RronyRewardNum: number;//好友收益
    readonly TImeType: number;//持续时间
    readonly isHeroGallery: number;//
}


/**星元对战配置 */
export type StdPVPBattle = {
    readonly MatchID: number;//对战模式ID
    readonly View: string;//
    readonly MatchName: string;//玩法名称
    readonly MatchStartTime: string;//玩法开启日期
    readonly MatchEddTime: string;//玩法结束时间/D
    readonly expendID: number[];//对战消耗道具Id
    readonly expendNumber: number[];//对战消耗道具数量
    readonly rewardID: number[];//对战获得道具id
    readonly rewardNumber: number[];//对战获得道具数量

}

