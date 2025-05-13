import { js } from 'cc';
import {StdBattleCardDelivery, StdCard, StdCommonType, StdEquityCard, StdItem, StdPVPBattle, StdPVPSnatch, StdTask, StdTaskSeason, ThingTypeName } from '../../manager/CfgMgr';
import { CfgMgr, ItemGive, ItemType, StdCardUpgrade, StdGenerateCardGroup, StdProcessBox, StdProcessBoxType, ThingName, ThingType } from '../../manager/CfgMgr';
import { SPlayerMailData, SShopContent, STaskType } from './PlayerStruct';
import { DateUtils } from '../../utils/DateUtils';
import proto from '../../net/Protocol';
export class PlayerData {
    static user: proto.pb.IGetUserInfoRes;
    static server: proto.pb.IServer;
    static player: proto.base.IPlayerData;

    // 道具列表
    public static get items() { return this.player.itemCounts; }
    // 卡片列表
    // public static get cards() { return this.player.battleCards;}

    static cards: proto.base.IBattleCard[] = [];
    /**卡组列表 */
    static cardNameList: proto.base.IDeckAttrs[] = []
    /**头像列表 */
    static cardHeadList: {[k: string]: proto.base.IAvatarInfo} = {}
    /**卡背列表 */
    static cardBackList: {[k: string]: proto.base.ICardBackInfo} = {}
    /**当前卡组id */
    static cur_id: string;
    private static _userInfo: proto.base.IPlayerShowInfo;
    public static SetUserInfo(info: proto.base.IPlayerShowInfo): void {
        this._userInfo = info;
    }
    public static get UserInfo(): proto.base.IPlayerShowInfo {
       return this._userInfo;
    }
    /**
     * 初始玩家数据
     * @param player 
     */
    public static Setplayer(player: proto.base.IPlayerData) {
        player.battleCards = player.battleCards || [];
        player.benefitCard = player.benefitCard || {};
        player.itemProductions = player.itemProductions || [];
        player.tasks = player.tasks || {};
        player.itemCounts = player.itemCounts || {};
        this.player = player;
    }

    /**
     * 获取卡牌数据
     * @param id 卡牌唯一id
     * @returns 
     */
    static GetCardDataById(id: string): proto.base.IBattleCard {
        for (let card of this.cards) {
            if (id == card.id) {
                return card;
            }
        }
        return null;
    }

    /**
     * 创建一个cardData
     * @param cardCfgId 
     * @param quality 
     * @returns 
     */
    static CreateCardData(cardCfgId: number, quality: number = 1, cardId: string = null): proto.base.IBattleCard {
        let cardData: proto.base.IBattleCard = proto.base.BattleCard.create();
        cardData.cardId = cardCfgId;
        cardData.quality = quality;
        cardData.id = cardId;
        cardData.level = 1;
        cardData.exp = 0;
        return cardData;
    }

    /**
     * 根据卡牌配置id获取卡牌列表数据
     * @param cardId 卡牌配置id
     * @returns 
     */
    static GetCardDataByCfgId(cardId: number): proto.base.IBattleCard[] {
        let datas: proto.base.IBattleCard[] = [];
        for (let card of this.cards) {
            if (cardId == card.cardId) {
                datas[datas.length] = card;
            }
        }
        return datas;
    }
    /**
     * 根据卡牌道具id（粉尘）获取一个卡牌数据
     * @param id 
     * @returns 
     */
    static GetCardDataByItemId(id: number, cardDatas: proto.base.IBattleCard[]): proto.base.IBattleCard {
        let getCardData: proto.base.IBattleCard;
        let stdItem: StdItem = CfgMgr.Getitem(id);
        if (stdItem && stdItem.Itemtpye == ItemType.piece && stdItem.ItemEffect1) {
            let map: { [key: number]: StdCard } = CfgMgr.GetCardMap();
            let checkCard: StdCard;
            for (let key in map) {
                let stdCard: StdCard = map[key];
                if (stdCard.Classid == stdItem.ItemEffect1) {
                    checkCard = stdCard;
                    break;
                }
            }
            
            if (checkCard) {
                for (let cardData of cardDatas) {
                    if (cardData.cardId == checkCard.ID) {
                        getCardData = cardData;
                        break;
                    }
                }
                if (!getCardData) {
                    getCardData = this.CreateCardData(checkCard.ID, 1);
                }
            }
        }
        return getCardData;
    }

    /**更新卡牌数据 */
    static UpdateCardData(cardData: proto.base.IBattleCard): void {
        let isChange: boolean = false;
        for (let index = 0; index < this.cards.length; index++) {
            if (this.cards[index].id == cardData.id) {
                this.cards[index] = cardData;
                isChange = true;
                break;
            }
        }
        if (!isChange) {
            //console.error(`更新卡牌数据失败不存在卡牌id--->${cardData.id}`);
        }
    }

    /**增加卡牌*/
    static AddCardData(cardData: proto.base.IBattleCard): void {
        let isAdd: boolean = true;
        for (let index = 0; index < this.cards.length; index++) {
            if (this.cards[index].id == cardData.id) {
                isAdd = false;
                //console.error(`添加卡牌错误已存在卡牌id--->${cardData.id}`);
                break;
            }
        }
        if (isAdd) {
            this.cards[this.cards.length] = cardData;
        }
    }

    /**删除卡牌 */
    static DelCardData(cardData: proto.base.IBattleCard): void {
        let delIdx: number = -1;
        for (let index = 0; index < this.cards.length; index++) {
            if (this.cards[index].id == cardData.id) {
                delIdx = index;
                break;
            }
        }
        if (delIdx > -1) {
            this.cards.splice(delIdx, 1);
        } else {
            //console.error(`删除卡牌错误不存在卡牌id--->${cardData.id}`);
        }
    }

    /**通过头像id查询头像是否使用 */
    static checkHeadIsUseById(id){
        let is_use = false;
        for (const iterator of PlayerData.cardNameList) {
            if(iterator.avatarId == id){
                is_use = true;
                break;
            }    
        }
        return is_use;
    }

    /**通过卡背id查询是否使用 */
    static checkCardBackIsUseById(id){
        let is_use = false;
        for (const iterator of PlayerData.cardNameList) {
            if(iterator.cardBackId == id){
                is_use = true;
                break;
            }    
        }
        return is_use;
    }

    /**通过卡组id查询卡组数据 */
    static getCardGroupDataById(id){
        for (const iterator of PlayerData.cardNameList) {
            if(iterator.id == id){
                return iterator;
            }    
        }
        return 
    }

    /**档期战斗卡组 */
    static get CurFightCardGroup(): proto.base.IDeckAttrs {
        for (let data of this.cardNameList) {
            if (data.isDefault) {
                return data;
            }
        }
        return null;
    }

    /**
     * 获取道具id
     * @param id 
     * @returns 
     */
    static GetItem(id: number) {
        let items = this.items;
        for (const key in items) {
            if (Object.hasOwnProperty.call(items, key)) {
                if (key == id.toString()) {
                    return items
                }
            }
        }
        return null;
    }

    /**
     * 获取道具数量
     * @param id 
     * @returns 
     */
    static GetItemCount(id: number) {
        let items = this.items;
        for (const key in items) {
            if (Object.hasOwnProperty.call(items, key)) {
                if (key == id.toString()) {
                    return items[key]
                }
            }
        }
        return 0;
    }

    /**
    * 根据页签获取道具列表
    * @param subType 
    * @returns 
    */
    static GetitemBySubType(subType: number) {
        let items: proto.base.IThing[] = [];
        for (const key in this.items) {
            const element = this.items[key];
            const _id: number = parseInt(key)
            if (element > 0) {
                let std = CfgMgr.Getitem(_id);
                if (std && (subType == 0 || std.SubType == subType)) {
                    let item = { type: "item", item: { id: std.Items, count: element, std: std } }
                    items.push(item);
                }
            }
        }
        return items;
    }

    private static _boxProcessDatas: proto.base.IProcessBoxReward[] = [];
    /**设置宝箱数据 */
    static InitBoxProcessList(datas: proto.base.IProcessBoxReward[]): void {
        this._boxProcessDatas = datas;
    }
    /**更新宝箱数据 */
    static UpdateBoxProcessData(data: proto.base.IProcessBoxReward): void {
        let isAdd: boolean = true;
        for (let index = 0; index < this._boxProcessDatas.length; index++) {
            let boxData = this._boxProcessDatas[index];
            if (boxData.boxId == data.boxId) {
                this._boxProcessDatas[index] = data;
                isAdd = false;
                break;
            }
        }
        if (isAdd) {
            this._boxProcessDatas.push(data);
        }
    }

    /*** 获取宝箱数据*/
    static GetBoxProcessData(boxId: number): proto.base.IProcessBoxReward {
        for (let data of this._boxProcessDatas) {
            if (data.boxId == boxId) {
                return data;
            }
        }
        return null;
    }

    /*** 获取当前宝箱数据列表*/
    static GetBoxProcessDatas(): proto.base.IProcessBoxReward[] {
        return this._boxProcessDatas;
    }

    /**
     * 获取下一个限时宝箱
     * @returns 
     */
    static GetNextLimitBoxProcess(): StdProcessBox {
        let cfgLimitList: StdProcessBox[] = CfgMgr.GetBoxTypeList(StdProcessBoxType.LimitBox);
        let stdLimitBox: StdProcessBox;
        let endTime: number;
        for (let index = 0; index < cfgLimitList.length; index++) {
            stdLimitBox = cfgLimitList[index];
            endTime = DateUtils.DateStringToTime(stdLimitBox.EndTime);
            if (DateUtils.ServerTime < endTime) {
                return stdLimitBox;
            }
        }
        return null;
    }
    /*** 获取当前进行中的宝箱*/
    static GetCurStdBoxProcess(): StdProcessBox {
        let cfgLimitList: StdProcessBox[];
        let stdBox: StdProcessBox;
        let stdLimitBox: StdProcessBox;
        let stdNextLimitBox: StdProcessBox;
        let boxData: proto.base.IProcessBoxReward;
        let startTime: number;
        let endTime: number;
        let isGetLimitBox: boolean = false;//是否领取过限时宝箱了，领取过就不能领取新手宝箱
        cfgLimitList = CfgMgr.GetBoxTypeList(StdProcessBoxType.LimitBox);
        for (let index = 0; index < cfgLimitList.length; index++) {
            stdBox = cfgLimitList[index];
            boxData = this.GetBoxProcessData(stdBox.ID);
            if (boxData && !isGetLimitBox) {
                isGetLimitBox = true;
            }
            startTime = DateUtils.DateStringToTime(stdBox.EndTime);
            endTime = DateUtils.DateStringToTime(stdBox.EndTime);
            if (!stdLimitBox) {
                if (DateUtils.ServerTime >= startTime && DateUtils.ServerTime < endTime) {
                    stdLimitBox = stdBox;
                }
            }
            if (!stdNextLimitBox) {
                if (DateUtils.ServerTime < endTime) {
                    stdNextLimitBox = stdBox;
                }
            }
        }
        let stdNewbieBox: StdProcessBox;
        //没有参加过限时宝箱
        if (!isGetLimitBox) {
            let getNum: number;
            let cfgList: StdProcessBox[] = CfgMgr.GetBoxTypeList(StdProcessBoxType.NewbieBox);
            for (let index = 0; index < cfgList.length; index++) {
                stdBox = cfgList[index];
                boxData = this.GetBoxProcessData(stdBox.ID);
                if (!boxData) {
                    stdNewbieBox = stdBox;
                    break;
                }
                getNum = 0;
                for (let index = 0; index < stdBox.RewardTypes.length; index++) {
                    for (let rewardData of boxData.rewards) {
                        if (rewardData.rewardIndex == index) {
                            getNum++;
                        }
                    }
                }
                if (getNum < stdBox.RewardTypes.length) {
                    stdNewbieBox = stdBox;
                    break;
                }
            }
        }
        return stdNewbieBox || stdLimitBox || stdNextLimitBox || cfgLimitList[cfgLimitList.length - 1];
    }

    private static _upgradeAward: { [key: string]: proto.base.IPlayerLevelRewardCache };
    /**设置等级奖励领取数据 */
    static InitUpgradeAward(data: { [key: string]: proto.base.IPlayerLevelRewardCache }): void {
        this._upgradeAward = data;
    }
    /**设置等级奖励领取数据 */
    static AddUpgradeAward(data: proto.base.IPlayerLevelRewardCache): void {
        if (!this._upgradeAward) {
            this._upgradeAward = {};
        }
        this._upgradeAward[data.level] = data;
    }
    /**获取等级奖励领取数据 */
    static GetUpgradeAward(qual: number): proto.base.IPlayerLevelRewardCache {
        if (this._upgradeAward) {
            return this._upgradeAward[qual];
        }
        return null;
    }
    /**
     * 检测卡牌是否可升级
     * @param id 
     * @returns 
     */
    static CheckCardIsCanUpgrade(id: string): boolean {
        let cardData: proto.base.IBattleCard = this.GetCardDataById(id);
        if (!cardData) return false;
        let upgradeList: StdCardUpgrade[] = CfgMgr.GetCardUpgradeList(cardData.cardId);
        let nextUpgrade: StdCardUpgrade = upgradeList[cardData.quality];
        if (!nextUpgrade) return false;
        for (let index = 0; index < nextUpgrade.CostItemIds.length; index++) {
            let itemId: number = nextUpgrade.CostItemIds[index];
            let itemNum: number = nextUpgrade.CostItemNums[index];
            let haveNum: number = PlayerData.GetItemCount(itemId);
            if (haveNum < itemNum) return false;
        }
        return true;
    }

    private static _seasonData: proto.pb.PlayerPvpInfoPush;
    /**设置赛季数据 */
    static SetSeasonData(data: proto.pb.PlayerPvpInfoPush): void {
        this._seasonData = data;
    }
    /**获取赛季数据 */
    static get CurSeasonData(): proto.pb.PlayerPvpInfoPush {
        return this._seasonData;
    }

    private static _sectionAward: {[key: string]: proto.base.IPlayerRankLevelReward};
    /**设置段位奖励数据 */
    static SetSectionAwardData(data: {[key: string]: proto.base.IPlayerRankLevelReward}): void {
        this._sectionAward = data;
    }
    static GetSectionAwardData(id: number): proto.base.IPlayerRankLevelReward {
        return this._sectionAward[id];
    }
    static ChangeSectionAwardData(data: proto.base.IPlayerRankLevelReward): void {
        this._sectionAward[data.rankLevelId] = data;
    }

    /**当前赛季开始时间戳 */
    static GetCurSeasonOpenTime(): number {
        if (!this.CurSeasonData || this.CurSeasonData.currentSeasonId == 0) return 0;
        let stdPVPSnatch: StdPVPSnatch = CfgMgr.GetStdPVPSnatch(this.CurSeasonData.currentSeasonId);
        return DateUtils.DateStringToTime(stdPVPSnatch.MatchStartTime);
    }

    /**当前赛季结束时间戳 */
    static GetCurSeasonEndTime(): number {
        if (!this.CurSeasonData || this.CurSeasonData.currentSeasonId == 0) return 0;
        let stdPVPSnatch: StdPVPSnatch = CfgMgr.GetStdPVPSnatch(this.CurSeasonData.currentSeasonId);
        return DateUtils.DateStringToTime(stdPVPSnatch.MatchEddTime);
    }

    /**当前赛季过去时长 */
    static GetCurSeasonPastTTime(): number {
        if (!this.CurSeasonData) return 0;
        let openTime: number = this.GetCurSeasonOpenTime();
        return DateUtils.ServerTime - openTime;
    }

    /**星元对战数据 */
    private static _satrElementData: proto.pb.PlayerPvpInfoPush;
    static SetSatrElementData(data: proto.pb.PlayerPvpStarInfoPush): void {
        this._satrElementData = data;
    }
    static get SatrElementData(): proto.pb.PlayerPvpStarInfoPush {
        return this._satrElementData;
    }

    /**当前星元对战结束时间戳 */
    static GetCurSatrElementEndTime(): number {
        if (!this.SatrElementData || this.SatrElementData.currentSeasonId == 0) return 0;
        let stdPVPSnatch: StdPVPBattle = CfgMgr.GetStdPVPBattle(this.SatrElementData.currentSeasonId);
        return DateUtils.DateStringToTime(stdPVPSnatch.MatchEddTime);
    }

    //******************************************************邮件相关start************************************
    /**当前页邮件列表 */
    static mails: SPlayerMailData[] = [];
    static mailmap: { [id: string]: SPlayerMailData } = {};
    static mails_log: SPlayerMailData[] = [];
    static mail_start_id: string[] = [];

    static resetMail() {
        this.mails = []
        this.mailmap = {}
    }

    static getMailReward(data: proto.base.IThing[]): proto.base.IThing[] {
        let datas: proto.base.IThing[] = []
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            datas.push(element);
        }
        return datas;
    }

    /**
     * 获取可赠送道具配置
     * @param id 
     * @returns 
     */
    static GetCanSenditem(): ItemGive[] {
        let item_list: ItemGive[] = CfgMgr.Get("ItemGive");
        let cfg = []
        for (const iterator of item_list) {
            if (this.GetItemCount(iterator.Items) > 0) {
                cfg.push(iterator);
            }
        }
        return cfg;
    }
    //******************************************************邮件相关end************************************
    //******************************************************商店相关start************************************
    private static shopMap: { [key: string]: proto.base.IShopIndexContent };
    private static shopIndexDatas: proto.base.IShopIndexContent[];
    /**
     * 获取商店数据
     */
    static GetShopIndexs() {
        return this.shopIndexDatas;
    }
    static GetShopByID(ID: number) {
        for (let index of this.shopIndexDatas) {
            if (index.shopIndexId == ID) return index;
        }
    }
    static GetShopByIndexType(indexType: number) {
        for (let index of this.shopIndexDatas) {
            if (index.shopIndexType == indexType) return index;
        }
    }
    static GetShopByShopType(shopType: number) {
        for (let index of this.shopIndexDatas) {
            if (index.shopType == shopType) return index;
        }
    }
    /**
     * 设置商店数据
     * @param datas 
     */
    static SetShopData(datas: proto.base.IShopIndexContent[]): void {
        this.shopIndexDatas = datas;
        if (!this.shopMap) this.shopMap = js.createMap();
        for (const shopData of datas) {
            this.shopMap[shopData.shopIndexId] = shopData;
        }
    }
    static UpdateShopData(content: proto.base.IShopIndexContent) {
        let index = this.shopIndexDatas.findIndex(value => value.shopIndexId == content.shopIndexId);
        if (index != -1) {
            this.shopIndexDatas[index] = content;
        } else {
            this.shopIndexDatas.push(content);
        }
    }
    /**
     * 获取商店数据
     * @param shopId 商店id
     * @returns 
     */
    static GetShopData(shopId: number): proto.base.IShopIndexContent {
        return this.shopMap ? this.shopMap[shopId] : null;
    }
    /**
     * 获取通用商品数据
     * @param shopId 
     * @param shopItemId 
     * @returns 
     */
    static GetCommShopData(shopId: number): proto.base.IShopContent {
        let shopData = this.GetShopData(shopId);
        return shopData ? shopData.shop : null;
    }
    /**
     * 获取抽奖商店数据
     * @param shopId 商店id
     * @returns 
     */
    static GetShopLuckyData(shopId: number): proto.base.ILuckyContent {
        let shopData = this.GetShopData(shopId);
        return shopData?.lucky;
    }
    //***********************************************商店相关end**********************************************
    //**************************************************交易所相关********************************
    /**道具订单数据 */
    static tradeViewData: proto.base.IMarketItemOrder[] = [];
    static tradeCardViewData: proto.base.IMarketCardOrder[] = [];
    static tradeMyOrderData:(proto.base.IMarketItemOrder | proto.base.IMarketCardOrder)[] = []
    /**当前筛选的类型数据总量 */
    static total: number = 0;
    /**订单列表前两页的最后一个订单的id（用于支持后端从哪个id开始查询--即翻页）该数组长度为3
     * eg:["2", "4", "5"]"5"：代表当前页，"4": 代表当前页的前一页的最后一个订单id， "2"：代表当前页的前两页最后一个订单id
     * 第一页时id默认空字符""；
      */
    static startId: string[] = [];

    static tradeAllBalances = {
        jy: 0,
        hc: 0,
        score: 0,
        serverid: "",
        unionid: "",
    }

    /**交易所根据页签获取资源 */
    static GetResBySubType(subType: number) {
        let datas: proto.base.IThing[] = [];
        if (subType == 0) {
            //道具
            for (const key in this.items) {
                if (Object.hasOwnProperty.call(this.items, key)) {
                    const element = this.items[key];
                    let std = CfgMgr.Getitem(parseInt(key));
                    if (std) {
                        let data: proto.base.IThing = {
                            type: ThingTypeName.Item,
                            item: { id: parseInt(key), count: element }
                        }
                        datas.push(data)
                    }
                }
            }
        } else if (subType == 1) {
            //卡牌
            for (const iterator of this.cards) {
                let card = CfgMgr.GetCard(iterator.cardId);
                if (card) {
                    let data: proto.base.IThing = {
                        type: ThingTypeName.BattleCard,
                        card: iterator
                    }
                    datas.push(data)
                }
            }
        }
        return datas;
    }

    //**************************************************交易所相关end********************************
    //**********************************************卡牌列表相关start**********************************************

    private static GetCardByCfg(max: number, card_id_list: number[], select_card_cfg:StdCard) {
        let card_group = [];
        let limit = 0;
        if (select_card_cfg && card_id_list.indexOf(select_card_cfg.Classid) != -1) {
            let index = this.cards.findIndex(card => card.cardId == select_card_cfg.ID)
            if (index != -1) {
                card_group.push(this.cards[index])
                limit += 1;
            }
        }

        for (let i = 0; i < card_id_list.length; i++) {
            const element = card_id_list[i];
            //同类型的卡跳过
            if (select_card_cfg && element == select_card_cfg.Classid) {
                continue;
            }
            //是否
            if (limit >= max) {
                break;
            } else {
                //获取该类型的所有卡牌
                let card_cfg = CfgMgr.GetCardListByClassID(element)
                //取出最高等级的卡
                let quality = 0
                let card = null;
                for (let index = 0; index < card_cfg.length; index++) {
                    const card_element = card_cfg[index];
                    //不开放的卡牌跳过
                    if (card_element.IsOpen != 1) {
                        continue;
                    }

                    for (const iterator of this.cards) {
                        let cfg = CfgMgr.GetCard(iterator.cardId)
                        if(cfg.Classid == element && iterator.quality > quality){                    
                            quality = iterator.quality;
                            card = iterator;
                        }
                    }  
                }

                if (card) {
                    card_group.push(card)
                    limit += 1;
                }
            }
        }
        // console.log(card_group)
        return card_group
    }

    /**通过配置生成卡组 */
    static GetGenerateCardGroup(card_id) {
        let card_group = [];
        let card_cfg = null;
        if(card_id){
            card_cfg = CfgMgr.GetCard(card_id)
            if (card_cfg.IsOpen != 1) return card_group;
        }
        let cfg_list: StdGenerateCardGroup[] = CfgMgr.Get("Generate_CardGroup");
        let cfg:StdGenerateCardGroup = null;
        if(card_cfg){
            for (const iterator of cfg_list) {
                if (iterator.Classid.indexOf(card_cfg.Classid) != -1) {    
                    cfg = iterator;
                    break;
                }
            }
        }else{
            let id = CfgMgr.GetLogic("CardGroup").GenerateID
            for (const iterator of cfg_list) {
                if (iterator.GenerateID == id) {    
                    cfg = iterator;
                    break;
                }
            }
        }
        if(cfg){
            card_group.push(...this.GetCardByCfg(cfg.CardNumber, cfg.Classid1, card_cfg))   
            card_group.push(...this.GetCardByCfg(cfg.CardNumber1, cfg.Classid2, card_cfg))
            card_group.push(...this.GetCardByCfg(cfg.CardNumber2, cfg.Classid3, card_cfg))
            card_group.push(...this.GetCardByCfg(cfg.CardNumber3, cfg.Classid4, card_cfg))
            card_group.push(...this.GetCardByCfg(cfg.CardNumber4, cfg.Classid5, card_cfg))
            card_group.push(...this.GetCardByCfg(cfg.CardNumber5, cfg.Classid6, card_cfg))
        }
                
        
        return card_group;
    }

    /**通过id获取同类型的变体 */
    static GetCardVariantCfg(id: number) {
        let cfg = CfgMgr.GetCard(id);
        let list = [];
        for (const iterator of CfgMgr.CardList) {
            let index = this.cards.findIndex(item => item.cardId == iterator.ID);
            if (iterator.Classid == cfg.Classid) {
                if (index != -1) {
                    list.push(this.cards[index])
                } else {
                    let card_data: proto.base.IBattleCard = new proto.base.BattleCard();
                    card_data.cardId = iterator.ID;
                    card_data.createdAt = "";
                    card_data.id = "";
                    card_data.exp = 0;
                    card_data.level = 1;
                    card_data.nftLockExpires = false;
                    card_data.ownershipType = 0;
                    card_data.quality = 1;
                    card_data.tradeCd = 0;
                    card_data.updateId = 0;
                    list.push(card_data);
                }
            }
        }
        return list;
    }

    //------------------------------------------------任务相关-----------------------------------
    static change_task_list = [];
    static taskRefreshCount = 0;//手动刷新的次数
    /**获取主界面展示的任务列表 */
    static GetShowMianTask(){
        let task_list:proto.base.IPlayerDataTask[] = []
        let tyroTaskList = this.filtrTyroTask();
        let dayTaskList = this.filtrDayTask();
        let seasonTaskList = this.filtrSeasonTask();
        let max = 3
        if(tyroTaskList.length > 0){
            max = max - tyroTaskList.length
        }
        if( max > 0 && dayTaskList.length > 0){
            max = max - tyroTaskList.length
        }
        let season_num = max > 0 ? max : 1;
        
        //加入赛季任务
        for (let index = 0; index < seasonTaskList.length; index++) {
            const element = seasonTaskList[index];
            if(element){
                let task_cfg = CfgMgr.GetTaskByData(element);
                let task_state = this.GetTaskState(element);
                let seasontime = this.GetCurSeasonPastTTime();
                let open_time
                for (let index = 0; index < task_cfg.ConditionId.length; index++) {
                    const element = task_cfg.ConditionId[index];
                    if(element == 2){
                        open_time = task_cfg.ConditionValue[index] - 1;
                    }
                }
                let is_lock = open_time * 86400 - seasontime  <= 0
                if(task_cfg.TaskType != STaskType.seasonChapter && task_state != 1 && is_lock && task_cfg.isMainShow == 1){
                    if(season_num <= task_list.length){
                        break;
                    }
                    task_list.push(element)
                }
            }
        }

        let tyro_num = 3 - task_list.length;
        //加入新手任务
        let tyro_add = 0;
        for (let index = 0; index < tyroTaskList.length; index++) {
            const element = tyroTaskList[index];
            if(element){
                let task_cfg = CfgMgr.GetTaskByData(element);
                let task_state = this.GetTaskState(element);
                if(task_state != 1 && task_cfg.isMainShow == 1){
                    task_list.unshift(element)
                    tyro_add++
                    if(tyro_add >= tyro_num){
                        break;
                    }
                }
            }
        }

        //加入日常任务
        if(task_list.length < 3){
            let day_num = 3 - task_list.length;
            for (let index = 0; index < day_num; index++) {
                const element = dayTaskList[index];       
                if(element){
                    let task_cfg = CfgMgr.GetTaskByData(element);
                    let task_state = this.GetTaskState(element);
                    if(task_state != 1 && task_cfg.isMainShow == 1){
                        task_list.unshift(element)
                        if(task_list.length >= 3){
                            break;
                        }
                    }
                }
            }
        }
        return task_list
    }
    static filtrTyroTask(){
       //获取新手任务
       let tyroTaskList:proto.base.IPlayerDataTask[] = []
       let cfg_tyro = CfgMgr.GetTaskByShowType(2);
       //先遍历出要展示的数据
       for (const iterator of cfg_tyro) {
           //同组只展示一个
           let index = tyroTaskList.findIndex(data=> data && data.id == iterator.TopTask)
           if(index == -1){
               let data:proto.base.IPlayerDataTask = {id:iterator.TopTask, start:null, end:null, value:0}
               tyroTaskList.push(data)
           }
       }

       //替换数据
       for (let _iterator of tyroTaskList) {
           let taskData = this.player.tasks[_iterator.id];
           if(taskData){
               _iterator.id = taskData.id ? taskData.id : null;
               _iterator.start = taskData.start ? taskData.start : null;
               _iterator.end = taskData.end ? taskData.end : null;
               _iterator.value = taskData.value ? taskData.value : null;
           }
       }
       this.dataSort(tyroTaskList);
       this.deleTask(tyroTaskList);
       return tyroTaskList;
    }

    //筛选每日任务 
    static filtrDayTask(){
        let taskData:proto.base.IPlayerDataTask;
        let stdTask:StdTask;
        let dayTaskList:proto.base.IPlayerDataTask[] = [];  
        for (let key in PlayerData.player.tasks) {
            taskData = PlayerData.player.tasks[key];
            stdTask = CfgMgr.GetTaskByData(taskData);
            if (stdTask) {
                //只展示多少条任务不做状态处理
                if(stdTask.TaskType == STaskType.dayTask){      
                    dayTaskList.push(taskData);
                }
            }
        }
        this.dataSort(dayTaskList);
        this.deleTask(dayTaskList);
        return dayTaskList;
    }

    //筛选赛季任务
    static filtrSeasonTask(){

        let seasonTaskList:proto.base.IPlayerDataTask[] = []
        let cfg_season = CfgMgr.GetTaskByShowType(3);
        //先遍历出要展示的数据
        for (const iterator of cfg_season) {
            //同组只展示一个
            let index = seasonTaskList.findIndex(data=> data && data.id == iterator.TopTask)
            if(index == -1){
                let data:proto.base.IPlayerDataTask = {id:iterator.TopTask, start:null, end:null, value:0}
                seasonTaskList.push(data)
            }
        }
 
        //替换数据
        for (let _iterator of seasonTaskList) {
            let taskData = this.player.tasks[_iterator.id];
            if(taskData){
                _iterator.id = taskData.id ? taskData.id : null;
                _iterator.start = taskData.start ? taskData.start : null;
                _iterator.end = taskData.end ? taskData.end : null;
                _iterator.value = taskData.value ? taskData.value : null;
            }
        }
        this.dataSort(seasonTaskList);
        return seasonTaskList;
    }

    static dataSort(data:proto.base.IPlayerDataTask[]){
        data.sort((a,b)=>{
            let a_state = this.GetTaskState(a);
            let b_state = this.GetTaskState(b);
            return a_state - b_state
        })
    }

    static deleTask(data:proto.base.IPlayerDataTask[]){
         //数据排序 并 删除已完成的
         for (let index = data.length - 1; index >= 0; index--) {
            const element = data[index];
            if(element.end){
                let is_last = CfgMgr.GetTaskGroupLast(element)
                if(is_last){
                    data.splice(index, 1)
                }
            }  
        }
    }

    /**获取当前任务的状态 1 已领取 2可领取 3不可领取*/
    static GetTaskState(data:proto.base.IPlayerDataTask){
        let state = 3;
        if(data.end && data.start && data.end == data.start){
            state = 1;
            let is_end = CfgMgr.GetTaskGroupLast(data);
            if(!is_end){
                let cfg = CfgMgr.GetTaskByData(data)    
                state = data.value >= cfg.CompletionNum ? 2 : 3
            }
        }else{
            if((!data.end && !data.start) || (data.end == 0 && data.start == 0) || ((data.start && data.start == 0) && !data.end)){
                state = 3;
            }else if(data.end != data.start){
                state = 2     
            }
        }
        return state;
    }

    /**获取赛季所有章节 */
    static GetSeasonTaskAllChapter() {
        let stdTask: StdTask[] = CfgMgr.Get("task");
        let chapterList: StdTaskSeason[] = []
        for (const iterator of stdTask) {
            if (iterator.TaskType == STaskType.season) {
                let index = chapterList.findIndex(data => iterator.TaskTypeData && data.ID == iterator.TaskTypeData[0]);
                if (index == -1) {
                    let taskSeason = CfgMgr.GetTaskChapterCfg(iterator.TaskTypeData[0])
                    if(this.CurSeasonData && taskSeason.SeasonID == this.CurSeasonData.currentSeasonId){
                        chapterList.push(CfgMgr.GetTaskChapterCfg(iterator.TaskTypeData[0]));
                    }
                }
            }
        }
        return chapterList
    }

    /**获取任务奖励 */
    static getTaskRewardThings(id: number): proto.base.IThing[] {
        let stdTask = CfgMgr.GetTaskById(id);
        let things: proto.base.IThing[] = [];
        if (stdTask) {
            for (let index = 0; index < stdTask.RewardType.length; index++) {
                let thing: proto.base.IThing = {};
                thing.type = ThingType[stdTask.RewardType[0]];
                switch (stdTask.RewardType[0]) {
                    case ThingType.item:
                        let item: proto.base.IThingItem = proto.base.ThingItem.create();
                        item.id = stdTask.RewardID[index];
                        item.count = stdTask.RewardNumber[index];
                        thing.item = item;
                        things.push(thing);
                        break;
                    case ThingType.battlecard:
                        let stdCardDeliver: StdBattleCardDelivery = CfgMgr.GetBattleCardDeliver(stdTask.RewardID[index]);
                        if (stdCardDeliver) {
                            let cardData: proto.base.IBattleCard = this.CreateCardData(stdCardDeliver.CardID, stdCardDeliver.CardQuality);
                            thing.card = cardData;
                            things.push(thing);
                        }
                    break;
                }
            }
        }
        return things;
    }

    //************************************************权益相关****************************************************** */
    static equities:{[k:number]:number} = {};
    static benefit_cards:{[k:number]:number} = {};

    /**获取玩家拥有的权益卡列表 */
    static getPlayerHasEuqityList(){
        let equity_cfg:StdEquityCard[] = CfgMgr.Get("EquityCard");
        let open_lsit:StdEquityCard[] = [];    
        for (let index = 0; index < equity_cfg.length; index++) {
            const element = equity_cfg[index];
            if(this.equities[element.EquityCardID] && this.equities[element.EquityCardID] > DateUtils.ServerTime){
                open_lsit.push(element)
            }
        }
        return open_lsit;
    }


   
}