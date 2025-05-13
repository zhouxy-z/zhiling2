System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, ThingTypeName, CfgMgr, ItemType, StdProcessBoxType, ThingType, STaskType, DateUtils, proto, PlayerData, _crd;

  function _reportPossibleCrUseOfStdBattleCardDelivery(extras) {
    _reporterNs.report("StdBattleCardDelivery", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityCard(extras) {
    _reporterNs.report("StdEquityCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPBattle(extras) {
    _reporterNs.report("StdPVPBattle", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTaskSeason(extras) {
    _reporterNs.report("StdTaskSeason", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemGive(extras) {
    _reporterNs.report("ItemGive", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCardUpgrade(extras) {
    _reporterNs.report("StdCardUpgrade", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdGenerateCardGroup(extras) {
    _reporterNs.report("StdGenerateCardGroup", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdProcessBox(extras) {
    _reporterNs.report("StdProcessBox", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdProcessBoxType(extras) {
    _reporterNs.report("StdProcessBoxType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingType(extras) {
    _reporterNs.report("ThingType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerMailData(extras) {
    _reporterNs.report("SPlayerMailData", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskType(extras) {
    _reporterNs.report("STaskType", "./PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("PlayerData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      ThingTypeName = _unresolved_2.ThingTypeName;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
      ItemType = _unresolved_3.ItemType;
      StdProcessBoxType = _unresolved_3.StdProcessBoxType;
      ThingType = _unresolved_3.ThingType;
    }, function (_unresolved_4) {
      STaskType = _unresolved_4.STaskType;
    }, function (_unresolved_5) {
      DateUtils = _unresolved_5.DateUtils;
    }, function (_unresolved_6) {
      proto = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e629zpLyxHvZT4jNg4wwsP", "PlayerData", undefined);

      __checkObsolete__(['js']);

      _export("PlayerData", PlayerData = class PlayerData {
        // 道具列表
        static get items() {
          return this.player.itemCounts;
        } // 卡片列表
        // public static get cards() { return this.player.battleCards;}


        static SetUserInfo(info) {
          this._userInfo = info;
        }

        static get UserInfo() {
          return this._userInfo;
        }
        /**
         * 初始玩家数据
         * @param player 
         */


        static Setplayer(player) {
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


        static GetCardDataById(id) {
          for (var card of this.cards) {
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


        static CreateCardData(cardCfgId, quality, cardId) {
          if (quality === void 0) {
            quality = 1;
          }

          if (cardId === void 0) {
            cardId = null;
          }

          var cardData = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleCard.create();
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


        static GetCardDataByCfgId(cardId) {
          var datas = [];

          for (var card of this.cards) {
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


        static GetCardDataByItemId(id, cardDatas) {
          var getCardData;
          var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(id);

          if (stdItem && stdItem.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).piece && stdItem.ItemEffect1) {
            var map = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardMap();
            var checkCard;

            for (var _key in map) {
              var stdCard = map[_key];

              if (stdCard.Classid == stdItem.ItemEffect1) {
                checkCard = stdCard;
                break;
              }
            }

            if (checkCard) {
              for (var cardData of cardDatas) {
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


        static UpdateCardData(cardData) {
          var isChange = false;

          for (var index = 0; index < this.cards.length; index++) {
            if (this.cards[index].id == cardData.id) {
              this.cards[index] = cardData;
              isChange = true;
              break;
            }
          }

          if (!isChange) {//console.error(`更新卡牌数据失败不存在卡牌id--->${cardData.id}`);
          }
        }
        /**增加卡牌*/


        static AddCardData(cardData) {
          var isAdd = true;

          for (var index = 0; index < this.cards.length; index++) {
            if (this.cards[index].id == cardData.id) {
              isAdd = false; //console.error(`添加卡牌错误已存在卡牌id--->${cardData.id}`);

              break;
            }
          }

          if (isAdd) {
            this.cards[this.cards.length] = cardData;
          }
        }
        /**删除卡牌 */


        static DelCardData(cardData) {
          var delIdx = -1;

          for (var index = 0; index < this.cards.length; index++) {
            if (this.cards[index].id == cardData.id) {
              delIdx = index;
              break;
            }
          }

          if (delIdx > -1) {
            this.cards.splice(delIdx, 1);
          } else {//console.error(`删除卡牌错误不存在卡牌id--->${cardData.id}`);
          }
        }
        /**通过头像id查询头像是否使用 */


        static checkHeadIsUseById(id) {
          var is_use = false;

          for (var iterator of PlayerData.cardNameList) {
            if (iterator.avatarId == id) {
              is_use = true;
              break;
            }
          }

          return is_use;
        }
        /**通过卡背id查询是否使用 */


        static checkCardBackIsUseById(id) {
          var is_use = false;

          for (var iterator of PlayerData.cardNameList) {
            if (iterator.cardBackId == id) {
              is_use = true;
              break;
            }
          }

          return is_use;
        }
        /**通过卡组id查询卡组数据 */


        static getCardGroupDataById(id) {
          for (var iterator of PlayerData.cardNameList) {
            if (iterator.id == id) {
              return iterator;
            }
          }

          return;
        }
        /**档期战斗卡组 */


        static get CurFightCardGroup() {
          for (var data of this.cardNameList) {
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


        static GetItem(id) {
          var items = this.items;

          for (var _key2 in items) {
            if (Object.hasOwnProperty.call(items, _key2)) {
              if (_key2 == id.toString()) {
                return items;
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


        static GetItemCount(id) {
          var items = this.items;

          for (var _key3 in items) {
            if (Object.hasOwnProperty.call(items, _key3)) {
              if (_key3 == id.toString()) {
                return items[_key3];
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


        static GetitemBySubType(subType) {
          var items = [];

          for (var _key4 in this.items) {
            var element = this.items[_key4];

            var _id = parseInt(_key4);

            if (element > 0) {
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(_id);

              if (std && (subType == 0 || std.SubType == subType)) {
                var item = {
                  type: "item",
                  item: {
                    id: std.Items,
                    count: element,
                    std: std
                  }
                };
                items.push(item);
              }
            }
          }

          return items;
        }

        /**设置宝箱数据 */
        static InitBoxProcessList(datas) {
          this._boxProcessDatas = datas;
        }
        /**更新宝箱数据 */


        static UpdateBoxProcessData(data) {
          var isAdd = true;

          for (var index = 0; index < this._boxProcessDatas.length; index++) {
            var boxData = this._boxProcessDatas[index];

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


        static GetBoxProcessData(boxId) {
          for (var data of this._boxProcessDatas) {
            if (data.boxId == boxId) {
              return data;
            }
          }

          return null;
        }
        /*** 获取当前宝箱数据列表*/


        static GetBoxProcessDatas() {
          return this._boxProcessDatas;
        }
        /**
         * 获取下一个限时宝箱
         * @returns 
         */


        static GetNextLimitBoxProcess() {
          var cfgLimitList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBoxTypeList((_crd && StdProcessBoxType === void 0 ? (_reportPossibleCrUseOfStdProcessBoxType({
            error: Error()
          }), StdProcessBoxType) : StdProcessBoxType).LimitBox);
          var stdLimitBox;
          var endTime;

          for (var index = 0; index < cfgLimitList.length; index++) {
            stdLimitBox = cfgLimitList[index];
            endTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).DateStringToTime(stdLimitBox.EndTime);

            if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime < endTime) {
              return stdLimitBox;
            }
          }

          return null;
        }
        /*** 获取当前进行中的宝箱*/


        static GetCurStdBoxProcess() {
          var cfgLimitList;
          var stdBox;
          var stdLimitBox;
          var stdNextLimitBox;
          var boxData;
          var startTime;
          var endTime;
          var isGetLimitBox = false; //是否领取过限时宝箱了，领取过就不能领取新手宝箱

          cfgLimitList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetBoxTypeList((_crd && StdProcessBoxType === void 0 ? (_reportPossibleCrUseOfStdProcessBoxType({
            error: Error()
          }), StdProcessBoxType) : StdProcessBoxType).LimitBox);

          for (var index = 0; index < cfgLimitList.length; index++) {
            stdBox = cfgLimitList[index];
            boxData = this.GetBoxProcessData(stdBox.ID);

            if (boxData && !isGetLimitBox) {
              isGetLimitBox = true;
            }

            startTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).DateStringToTime(stdBox.EndTime);
            endTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).DateStringToTime(stdBox.EndTime);

            if (!stdLimitBox) {
              if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime >= startTime && (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime < endTime) {
                stdLimitBox = stdBox;
              }
            }

            if (!stdNextLimitBox) {
              if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime < endTime) {
                stdNextLimitBox = stdBox;
              }
            }
          }

          var stdNewbieBox; //没有参加过限时宝箱

          if (!isGetLimitBox) {
            var getNum;
            var cfgList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetBoxTypeList((_crd && StdProcessBoxType === void 0 ? (_reportPossibleCrUseOfStdProcessBoxType({
              error: Error()
            }), StdProcessBoxType) : StdProcessBoxType).NewbieBox);

            for (var _index = 0; _index < cfgList.length; _index++) {
              stdBox = cfgList[_index];
              boxData = this.GetBoxProcessData(stdBox.ID);

              if (!boxData) {
                stdNewbieBox = stdBox;
                break;
              }

              getNum = 0;

              for (var _index2 = 0; _index2 < stdBox.RewardTypes.length; _index2++) {
                for (var rewardData of boxData.rewards) {
                  if (rewardData.rewardIndex == _index2) {
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

        /**设置等级奖励领取数据 */
        static InitUpgradeAward(data) {
          this._upgradeAward = data;
        }
        /**设置等级奖励领取数据 */


        static AddUpgradeAward(data) {
          if (!this._upgradeAward) {
            this._upgradeAward = {};
          }

          this._upgradeAward[data.level] = data;
        }
        /**获取等级奖励领取数据 */


        static GetUpgradeAward(qual) {
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


        static CheckCardIsCanUpgrade(id) {
          var cardData = this.GetCardDataById(id);
          if (!cardData) return false;
          var upgradeList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardUpgradeList(cardData.cardId);
          var nextUpgrade = upgradeList[cardData.quality];
          if (!nextUpgrade) return false;

          for (var index = 0; index < nextUpgrade.CostItemIds.length; index++) {
            var itemId = nextUpgrade.CostItemIds[index];
            var itemNum = nextUpgrade.CostItemNums[index];
            var haveNum = PlayerData.GetItemCount(itemId);
            if (haveNum < itemNum) return false;
          }

          return true;
        }

        /**设置赛季数据 */
        static SetSeasonData(data) {
          this._seasonData = data;
        }
        /**获取赛季数据 */


        static get CurSeasonData() {
          return this._seasonData;
        }

        /**设置段位奖励数据 */
        static SetSectionAwardData(data) {
          this._sectionAward = data;
        }

        static GetSectionAwardData(id) {
          return this._sectionAward[id];
        }

        static ChangeSectionAwardData(data) {
          this._sectionAward[data.rankLevelId] = data;
        }
        /**当前赛季开始时间戳 */


        static GetCurSeasonOpenTime() {
          if (!this.CurSeasonData || this.CurSeasonData.currentSeasonId == 0) return 0;
          var stdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.CurSeasonData.currentSeasonId);
          return (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).DateStringToTime(stdPVPSnatch.MatchStartTime);
        }
        /**当前赛季结束时间戳 */


        static GetCurSeasonEndTime() {
          if (!this.CurSeasonData || this.CurSeasonData.currentSeasonId == 0) return 0;
          var stdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.CurSeasonData.currentSeasonId);
          return (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).DateStringToTime(stdPVPSnatch.MatchEddTime);
        }
        /**当前赛季过去时长 */


        static GetCurSeasonPastTTime() {
          if (!this.CurSeasonData) return 0;
          var openTime = this.GetCurSeasonOpenTime();
          return (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime - openTime;
        }
        /**星元对战数据 */


        static SetSatrElementData(data) {
          this._satrElementData = data;
        }

        static get SatrElementData() {
          return this._satrElementData;
        }
        /**当前星元对战结束时间戳 */


        static GetCurSatrElementEndTime() {
          if (!this.SatrElementData || this.SatrElementData.currentSeasonId == 0) return 0;
          var stdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPBattle(this.SatrElementData.currentSeasonId);
          return (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).DateStringToTime(stdPVPSnatch.MatchEddTime);
        } //******************************************************邮件相关start************************************

        /**当前页邮件列表 */


        static resetMail() {
          this.mails = [];
          this.mailmap = {};
        }

        static getMailReward(data) {
          var datas = [];

          for (var index = 0; index < data.length; index++) {
            var element = data[index];
            datas.push(element);
          }

          return datas;
        }
        /**
         * 获取可赠送道具配置
         * @param id 
         * @returns 
         */


        static GetCanSenditem() {
          var item_list = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("ItemGive");
          var cfg = [];

          for (var iterator of item_list) {
            if (this.GetItemCount(iterator.Items) > 0) {
              cfg.push(iterator);
            }
          }

          return cfg;
        } //******************************************************邮件相关end************************************
        //******************************************************商店相关start************************************


        /**
         * 获取商店数据
         */
        static GetShopIndexs() {
          return this.shopIndexDatas;
        }

        static GetShopByID(ID) {
          for (var index of this.shopIndexDatas) {
            if (index.shopIndexId == ID) return index;
          }
        }

        static GetShopByIndexType(indexType) {
          for (var index of this.shopIndexDatas) {
            if (index.shopIndexType == indexType) return index;
          }
        }

        static GetShopByShopType(shopType) {
          for (var index of this.shopIndexDatas) {
            if (index.shopType == shopType) return index;
          }
        }
        /**
         * 设置商店数据
         * @param datas 
         */


        static SetShopData(datas) {
          this.shopIndexDatas = datas;
          if (!this.shopMap) this.shopMap = js.createMap();

          for (var shopData of datas) {
            this.shopMap[shopData.shopIndexId] = shopData;
          }
        }

        static UpdateShopData(content) {
          var index = this.shopIndexDatas.findIndex(value => value.shopIndexId == content.shopIndexId);

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
        } //***********************************************商店相关end**********************************************
        //**************************************************交易所相关********************************

        /**道具订单数据 */


        /**交易所根据页签获取资源 */
        static GetResBySubType(subType) {
          var datas = [];

          if (subType == 0) {
            //道具
            for (var _key5 in this.items) {
              if (Object.hasOwnProperty.call(this.items, _key5)) {
                var element = this.items[_key5];
                var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem(parseInt(_key5));

                if (std) {
                  var data = {
                    type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                      error: Error()
                    }), ThingTypeName) : ThingTypeName).Item,
                    item: {
                      id: parseInt(_key5),
                      count: element
                    }
                  };
                  datas.push(data);
                }
              }
            }
          } else if (subType == 1) {
            //卡牌
            for (var iterator of this.cards) {
              var card = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(iterator.cardId);

              if (card) {
                var _data = {
                  type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                    error: Error()
                  }), ThingTypeName) : ThingTypeName).BattleCard,
                  card: iterator
                };
                datas.push(_data);
              }
            }
          }

          return datas;
        } //**************************************************交易所相关end********************************
        //**********************************************卡牌列表相关start**********************************************


        static GetCardByCfg(max, card_id_list, select_card_cfg) {
          var card_group = [];
          var limit = 0;

          if (select_card_cfg && card_id_list.indexOf(select_card_cfg.Classid) != -1) {
            var index = this.cards.findIndex(card => card.cardId == select_card_cfg.ID);

            if (index != -1) {
              card_group.push(this.cards[index]);
              limit += 1;
            }
          }

          for (var i = 0; i < card_id_list.length; i++) {
            var element = card_id_list[i]; //同类型的卡跳过

            if (select_card_cfg && element == select_card_cfg.Classid) {
              continue;
            } //是否


            if (limit >= max) {
              break;
            } else {
              //获取该类型的所有卡牌
              var card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCardListByClassID(element); //取出最高等级的卡

              var quality = 0;
              var card = null;

              for (var _index3 = 0; _index3 < card_cfg.length; _index3++) {
                var card_element = card_cfg[_index3]; //不开放的卡牌跳过

                if (card_element.IsOpen != 1) {
                  continue;
                }

                for (var iterator of this.cards) {
                  var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).GetCard(iterator.cardId);

                  if (cfg.Classid == element && iterator.quality > quality) {
                    quality = iterator.quality;
                    card = iterator;
                  }
                }
              }

              if (card) {
                card_group.push(card);
                limit += 1;
              }
            }
          } // console.log(card_group)


          return card_group;
        }
        /**通过配置生成卡组 */


        static GetGenerateCardGroup(card_id) {
          var card_group = [];
          var card_cfg = null;

          if (card_id) {
            card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(card_id);
            if (card_cfg.IsOpen != 1) return card_group;
          }

          var cfg_list = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("Generate_CardGroup");
          var cfg = null;

          if (card_cfg) {
            for (var iterator of cfg_list) {
              if (iterator.Classid.indexOf(card_cfg.Classid) != -1) {
                cfg = iterator;
                break;
              }
            }
          } else {
            var _id2 = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetLogic("CardGroup").GenerateID;

            for (var _iterator2 of cfg_list) {
              if (_iterator2.GenerateID == _id2) {
                cfg = _iterator2;
                break;
              }
            }
          }

          if (cfg) {
            card_group.push(...this.GetCardByCfg(cfg.CardNumber, cfg.Classid1, card_cfg));
            card_group.push(...this.GetCardByCfg(cfg.CardNumber1, cfg.Classid2, card_cfg));
            card_group.push(...this.GetCardByCfg(cfg.CardNumber2, cfg.Classid3, card_cfg));
            card_group.push(...this.GetCardByCfg(cfg.CardNumber3, cfg.Classid4, card_cfg));
            card_group.push(...this.GetCardByCfg(cfg.CardNumber4, cfg.Classid5, card_cfg));
            card_group.push(...this.GetCardByCfg(cfg.CardNumber5, cfg.Classid6, card_cfg));
          }

          return card_group;
        }
        /**通过id获取同类型的变体 */


        static GetCardVariantCfg(id) {
          var _this = this;

          var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard(id);
          var list = [];

          var _loop = function _loop(iterator) {
            var index = _this.cards.findIndex(item => item.cardId == iterator.ID);

            if (iterator.Classid == cfg.Classid) {
              if (index != -1) {
                list.push(_this.cards[index]);
              } else {
                var card_data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).base.BattleCard();
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
          };

          for (var iterator of (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).CardList) {
            _loop(iterator);
          }

          return list;
        } //------------------------------------------------任务相关-----------------------------------


        //手动刷新的次数

        /**获取主界面展示的任务列表 */
        static GetShowMianTask() {
          var task_list = [];
          var tyroTaskList = this.filtrTyroTask();
          var dayTaskList = this.filtrDayTask();
          var seasonTaskList = this.filtrSeasonTask();
          var max = 3;

          if (tyroTaskList.length > 0) {
            max = max - tyroTaskList.length;
          }

          if (max > 0 && dayTaskList.length > 0) {
            max = max - tyroTaskList.length;
          }

          var season_num = max > 0 ? max : 1; //加入赛季任务

          for (var index = 0; index < seasonTaskList.length; index++) {
            var element = seasonTaskList[index];

            if (element) {
              var task_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskByData(element);
              var task_state = this.GetTaskState(element);
              var seasontime = this.GetCurSeasonPastTTime();
              var open_time = void 0;

              for (var _index4 = 0; _index4 < task_cfg.ConditionId.length; _index4++) {
                var _element = task_cfg.ConditionId[_index4];

                if (_element == 2) {
                  open_time = task_cfg.ConditionValue[_index4] - 1;
                }
              }

              var is_lock = open_time * 86400 - seasontime <= 0;

              if (task_cfg.TaskType != (_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
                error: Error()
              }), STaskType) : STaskType).seasonChapter && task_state != 1 && is_lock && task_cfg.isMainShow == 1) {
                if (season_num <= task_list.length) {
                  break;
                }

                task_list.push(element);
              }
            }
          }

          var tyro_num = 3 - task_list.length; //加入新手任务

          var tyro_add = 0;

          for (var _index5 = 0; _index5 < tyroTaskList.length; _index5++) {
            var _element2 = tyroTaskList[_index5];

            if (_element2) {
              var _task_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskByData(_element2);

              var _task_state = this.GetTaskState(_element2);

              if (_task_state != 1 && _task_cfg.isMainShow == 1) {
                task_list.unshift(_element2);
                tyro_add++;

                if (tyro_add >= tyro_num) {
                  break;
                }
              }
            }
          } //加入日常任务


          if (task_list.length < 3) {
            var day_num = 3 - task_list.length;

            for (var _index6 = 0; _index6 < day_num; _index6++) {
              var _element3 = dayTaskList[_index6];

              if (_element3) {
                var _task_cfg2 = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetTaskByData(_element3);

                var _task_state2 = this.GetTaskState(_element3);

                if (_task_state2 != 1 && _task_cfg2.isMainShow == 1) {
                  task_list.unshift(_element3);

                  if (task_list.length >= 3) {
                    break;
                  }
                }
              }
            }
          }

          return task_list;
        }

        static filtrTyroTask() {
          //获取新手任务
          var tyroTaskList = [];
          var cfg_tyro = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskByShowType(2); //先遍历出要展示的数据

          var _loop2 = function _loop2(iterator) {
            //同组只展示一个
            var index = tyroTaskList.findIndex(data => data && data.id == iterator.TopTask);

            if (index == -1) {
              var data = {
                id: iterator.TopTask,
                start: null,
                end: null,
                value: 0
              };
              tyroTaskList.push(data);
            }
          };

          for (var iterator of cfg_tyro) {
            _loop2(iterator);
          } //替换数据


          for (var _iterator of tyroTaskList) {
            var taskData = this.player.tasks[_iterator.id];

            if (taskData) {
              _iterator.id = taskData.id ? taskData.id : null;
              _iterator.start = taskData.start ? taskData.start : null;
              _iterator.end = taskData.end ? taskData.end : null;
              _iterator.value = taskData.value ? taskData.value : null;
            }
          }

          this.dataSort(tyroTaskList);
          this.deleTask(tyroTaskList);
          return tyroTaskList;
        } //筛选每日任务 


        static filtrDayTask() {
          var taskData;
          var stdTask;
          var dayTaskList = [];

          for (var _key6 in PlayerData.player.tasks) {
            taskData = PlayerData.player.tasks[_key6];
            stdTask = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetTaskByData(taskData);

            if (stdTask) {
              //只展示多少条任务不做状态处理
              if (stdTask.TaskType == (_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
                error: Error()
              }), STaskType) : STaskType).dayTask) {
                dayTaskList.push(taskData);
              }
            }
          }

          this.dataSort(dayTaskList);
          this.deleTask(dayTaskList);
          return dayTaskList;
        } //筛选赛季任务


        static filtrSeasonTask() {
          var seasonTaskList = [];
          var cfg_season = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskByShowType(3); //先遍历出要展示的数据

          var _loop3 = function _loop3(iterator) {
            //同组只展示一个
            var index = seasonTaskList.findIndex(data => data && data.id == iterator.TopTask);

            if (index == -1) {
              var data = {
                id: iterator.TopTask,
                start: null,
                end: null,
                value: 0
              };
              seasonTaskList.push(data);
            }
          };

          for (var iterator of cfg_season) {
            _loop3(iterator);
          } //替换数据


          for (var _iterator of seasonTaskList) {
            var taskData = this.player.tasks[_iterator.id];

            if (taskData) {
              _iterator.id = taskData.id ? taskData.id : null;
              _iterator.start = taskData.start ? taskData.start : null;
              _iterator.end = taskData.end ? taskData.end : null;
              _iterator.value = taskData.value ? taskData.value : null;
            }
          }

          this.dataSort(seasonTaskList);
          return seasonTaskList;
        }

        static dataSort(data) {
          data.sort((a, b) => {
            var a_state = this.GetTaskState(a);
            var b_state = this.GetTaskState(b);
            return a_state - b_state;
          });
        }

        static deleTask(data) {
          //数据排序 并 删除已完成的
          for (var index = data.length - 1; index >= 0; index--) {
            var element = data[index];

            if (element.end) {
              var is_last = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskGroupLast(element);

              if (is_last) {
                data.splice(index, 1);
              }
            }
          }
        }
        /**获取当前任务的状态 1 已领取 2可领取 3不可领取*/


        static GetTaskState(data) {
          var state = 3;

          if (data.end && data.start && data.end == data.start) {
            state = 1;
            var is_end = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetTaskGroupLast(data);

            if (!is_end) {
              var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskByData(data);
              state = data.value >= cfg.CompletionNum ? 2 : 3;
            }
          } else {
            if (!data.end && !data.start || data.end == 0 && data.start == 0 || data.start && data.start == 0 && !data.end) {
              state = 3;
            } else if (data.end != data.start) {
              state = 2;
            }
          }

          return state;
        }
        /**获取赛季所有章节 */


        static GetSeasonTaskAllChapter() {
          var _this2 = this;

          var stdTask = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("task");
          var chapterList = [];

          var _loop4 = function _loop4(iterator) {
            if (iterator.TaskType == (_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
              error: Error()
            }), STaskType) : STaskType).season) {
              var index = chapterList.findIndex(data => iterator.TaskTypeData && data.ID == iterator.TaskTypeData[0]);

              if (index == -1) {
                var taskSeason = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetTaskChapterCfg(iterator.TaskTypeData[0]);

                if (_this2.CurSeasonData && taskSeason.SeasonID == _this2.CurSeasonData.currentSeasonId) {
                  chapterList.push((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).GetTaskChapterCfg(iterator.TaskTypeData[0]));
                }
              }
            }
          };

          for (var iterator of stdTask) {
            _loop4(iterator);
          }

          return chapterList;
        }
        /**获取任务奖励 */


        static getTaskRewardThings(id) {
          var stdTask = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskById(id);
          var things = [];

          if (stdTask) {
            for (var index = 0; index < stdTask.RewardType.length; index++) {
              var thing = {};
              thing.type = (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                error: Error()
              }), ThingType) : ThingType)[stdTask.RewardType[0]];

              switch (stdTask.RewardType[0]) {
                case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType).item:
                  var item = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                    error: Error()
                  }), proto) : proto).base.ThingItem.create();
                  item.id = stdTask.RewardID[index];
                  item.count = stdTask.RewardNumber[index];
                  thing.item = item;
                  things.push(thing);
                  break;

                case (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                  error: Error()
                }), ThingType) : ThingType).battlecard:
                  var stdCardDeliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).GetBattleCardDeliver(stdTask.RewardID[index]);

                  if (stdCardDeliver) {
                    var cardData = this.CreateCardData(stdCardDeliver.CardID, stdCardDeliver.CardQuality);
                    thing.card = cardData;
                    things.push(thing);
                  }

                  break;
              }
            }
          }

          return things;
        } //************************************************权益相关****************************************************** */


        /**获取玩家拥有的权益卡列表 */
        static getPlayerHasEuqityList() {
          var equity_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("EquityCard");
          var open_lsit = [];

          for (var index = 0; index < equity_cfg.length; index++) {
            var element = equity_cfg[index];

            if (this.equities[element.EquityCardID] && this.equities[element.EquityCardID] > (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime) {
              open_lsit.push(element);
            }
          }

          return open_lsit;
        }

      });

      PlayerData.user = void 0;
      PlayerData.server = void 0;
      PlayerData.player = void 0;
      PlayerData.cards = [];

      /**卡组列表 */
      PlayerData.cardNameList = [];

      /**头像列表 */
      PlayerData.cardHeadList = {};

      /**卡背列表 */
      PlayerData.cardBackList = {};

      /**当前卡组id */
      PlayerData.cur_id = void 0;
      PlayerData._userInfo = void 0;
      PlayerData._boxProcessDatas = [];
      PlayerData._upgradeAward = void 0;
      PlayerData._seasonData = void 0;
      PlayerData._sectionAward = void 0;
      PlayerData._satrElementData = void 0;
      PlayerData.mails = [];
      PlayerData.mailmap = {};
      PlayerData.mails_log = [];
      PlayerData.mail_start_id = [];
      PlayerData.shopMap = void 0;
      PlayerData.shopIndexDatas = void 0;
      PlayerData.tradeViewData = [];
      PlayerData.tradeCardViewData = [];
      PlayerData.tradeMyOrderData = [];

      /**当前筛选的类型数据总量 */
      PlayerData.total = 0;

      /**订单列表前两页的最后一个订单的id（用于支持后端从哪个id开始查询--即翻页）该数组长度为3
       * eg:["2", "4", "5"]"5"：代表当前页，"4": 代表当前页的前一页的最后一个订单id， "2"：代表当前页的前两页最后一个订单id
       * 第一页时id默认空字符""；
        */
      PlayerData.startId = [];
      PlayerData.tradeAllBalances = {
        jy: 0,
        hc: 0,
        score: 0,
        serverid: "",
        unionid: ""
      };
      PlayerData.change_task_list = [];
      PlayerData.taskRefreshCount = 0;
      PlayerData.equities = {};
      PlayerData.benefit_cards = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=505126810b70eb394a15dc9f1881d06b5c3ea8dd.js.map