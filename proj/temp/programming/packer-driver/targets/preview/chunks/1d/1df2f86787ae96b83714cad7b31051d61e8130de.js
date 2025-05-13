System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, assetManager, ResMgr, Utils, DateUtils, CfgMgr, ThingTypeName, _crd, ItemSubType, ThingName, ThingType, ItemType, CardQuality, BoxType, ShopType, ShopGroupId, skillType, CardSotrType1, CardSotrType2, StdProcessBoxType, StdCommonType;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../utils/DateUtils", _context.meta, extras);
  }

  _export({
    CfgMgr: void 0,
    ThingTypeName: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      DateUtils = _unresolved_4.DateUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f851MDzCBLLazm++lgTqag", "CfgMgr", undefined);

      __checkObsolete__(['JsonAsset', 'assetManager']);

      _export("CfgMgr", CfgMgr = class CfgMgr {
        static load() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var resAb = assetManager.getBundle("res");
            var asset = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("config/cfg", JsonAsset);
            _this.data = asset.json;

            _this.aryToMap("Card", "ID");

            _this.aryToMap("ShopCommodity", "Id");

            _this.aryToMap("ShopLuckyPool", "RewardPools");

            _this.aryToMap("battle_terrain", "ID");

            _this.aryToMap("Area", "AreaID");

            _this.aryToMap("fetch", "Shortcut");

            _this.formatGuide();
          })();
        }

        static formatGuide() {
          var cfgs = this.Get("guide");
          var groups = {};

          var connectAry = function connectAry(ary1, ary2) {
            if (!ary1 || !ary1.length) ary1 = [undefined];
            if (!ary2 || !ary2.length) ary2 = [undefined];
            return ary1.concat(ary2);
          };

          for (var i = 0; i < cfgs.length;) {
            var std = cfgs[i];

            if (!groups[std.GuideGroup]) {
              groups[std.GuideGroup] = std;
              std['Childs'] = [];
              if (!std.OpenUI) std['OpenUI'] = [];
              i++;
            } else {
              var group = groups[std == null ? void 0 : std.GuideGroup];
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
              if (group != null && group.Audio) group.Audio = connectAry(group.Audio, std.Audio);
              cfgs.splice(i, 1);
            }
          }
        }
        /**转map */


        static aryToMap(name, key) {
          var cfg = this.data[name];

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).IsArray(cfg)) {
            console.warn("目标配置已经是map => " + name);
          } else {
            var obj = {};

            for (var i = 0; i < cfg.length; i++) {
              var child = cfg[i];
              var k = child[key];
              if (k == undefined) throw "找不到指定键值 " + name + "->" + key + i;
              if (!k) continue;
              if (obj[k]) console.warn("检测到重复键值 " + name + "->" + k);
              obj[k] = child;
            }

            this.data[name] = obj;
          }
        }
        /**获取指定配置 */


        static Get(name) {
          return this.data[name];
        }
        /**
         * 获取技能配置
         * @param skillId 
         * @returns 
         */


        static GetCardSkill(skillId) {
          if (skillId == undefined) return undefined;
          var stds = this.data["battle_card_skill"];
          return stds.find(value => value.SkillId == skillId);
        }

        static GetCardMap() {
          return this.Get("Card");
        }
        /**获取卡牌 */


        static GetCard(id) {
          return this.GetCardMap()[id];
        }

        static GetCardSkillDesc(id) {
          var std = this.GetCard(id);
          var skillDesc = "";

          if (std) {
            for (var index = 0; index < std.SkillID.length; index++) {
              var skill = CfgMgr.GetCardSkill(std.SkillID[index]);

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


        static GetCardClassList(id) {
          var map = this.GetCardMap();
          var std = map[id];
          var list = [];
          var classId = std ? std.Classid : null;

          if (classId != null || classId != undefined) {
            var calssCard;

            for (var _key in map) {
              calssCard = map[_key];

              if (calssCard.Classid == classId) {
                list[list.length] = calssCard;
              }
            }
          }

          return list;
        }
        /**通过classid获取卡牌列表 */


        static GetCardListByClassID(class_id) {
          var map = this.GetCardMap();
          var list = [];
          var calssCard;

          for (var _key2 in map) {
            calssCard = map[_key2];

            if (calssCard.Classid == class_id) {
              list[list.length] = calssCard;
            }
          }

          return list;
        }

        static GetCanFightCard() {
          if (!this.canFightCards) this.canFightCards = {};
          var cards = this.Get("Card");

          for (var k in cards) {
            if (cards[k].IsOpen) this.canFightCards[k] = cards[k];
          }

          return this.canFightCards;
        }
        /**获取卡牌列表 */


        static get CardList() {
          var list = [];
          var map = this.Get("Card");

          for (var _key3 in map) {
            if (map[_key3].IsOpen) list.push(map[_key3]);
          }

          return list;
        }

        static GetTerrain(id) {
          return this.Get("battle_terrain")[id];
        }
        /**
        * 获取道具配置
        * @param id 
        * @returns 
        */


        static Getitem(id) {
          var cfg = this.Get("Item");
          var item = null;

          for (var index in cfg) {
            if (cfg[index].Items == id) {
              item = cfg[index];
              break;
            }
          }

          return item;
        }
        /**获取头像配置 */


        static GetHead(id) {
          if (id == undefined) return undefined;
          var cfg = CfgMgr.Get("head");

          for (var std of cfg) {
            if (std.ID == id) return std;
          }

          return;
        }
        /**获取卡背配置 */


        static GetCardBackCfgById(id) {
          var cfg = CfgMgr.Get("backpacker");

          for (var std of cfg) {
            if (std.ID == id) return std;
          }

          return;
        }

        static GetTaskById(id) {
          var stdTask = this.Get("task");

          for (var task of stdTask) {
            if (task.TaskId == id) {
              return task;
            }
          }

          return null;
        }
        /**通过展示页面获取该类型的任务 */


        static GetTaskByShowType(type) {
          var stdTask = this.Get("task");
          var task_list = [];

          for (var task of stdTask) {
            if (task.Show == type) {
              task_list.push(task);
            }
          }

          return task_list;
        }
        /**通过任务类型获取任务 */


        static GetTaskByTaskType(task_type) {
          var stdTask = this.Get("task");
          var task = [];

          for (var _task of stdTask) {
            if (_task.TaskType == task_type) {
              task.push(_task);
            }
          }

          task.sort((a, b) => {
            return a.CompletionNum - b.CompletionNum;
          });
          return task;
        }
        /**通过任务数据获取配置的唯一id */


        static GetTaskByData(data) {
          var task_list = null; //是否是每日任务

          if (data) {
            var stdTask = this.Get("task");
            var task_group_list = [];

            for (var task of stdTask) {
              //同组数据    
              if (data.id == task.TopTask) {
                task_group_list.push(task);
              }
            }

            if (task_group_list.length > 1) {
              task_group_list.sort((a, b) => {
                return a.TaskId - b.TaskId;
              });
              var cfg = null; //没有任何领取拿该组第一个

              if (!data.end) {
                var num = Number.MAX_SAFE_INTEGER;

                for (var _task2 of task_group_list) {
                  if (_task2.CompletionNum < num) {
                    num = _task2.CompletionNum;
                    cfg = _task2;
                  }
                }

                task_list = cfg;
              } else {
                for (var index = 0; index < task_group_list.length; index++) {
                  var element = task_group_list[index];

                  if (element.TaskId == data.end) {
                    if (index == task_group_list.length - 1) {
                      task_list = element;
                    } else {
                      task_list = task_group_list[index + 1];
                    }

                    break;
                  }
                }
              }
            } else {
              task_list = task_group_list[0];
            }
          }

          return task_list;
        }
        /**是否是同组最后一条数据 */


        static GetTaskGroupLast(data) {
          var stdTask = this.Get("task");
          var task_group_list = [];

          for (var task of stdTask) {
            //同组数据    
            if (data.id == task.TopTask) {
              task_group_list.push(task);
            }
          }

          task_group_list.sort((a, b) => {
            return a.CompletionNum - b.CompletionNum;
          });
          var last = task_group_list[task_group_list.length - 1];
          return data.end == last.TaskId;
        }
        /**获取赛季章节任务信息 */


        static GetTaskChapterCfg(id) {
          var seasonTask = this.Get("taskSeason");
          var cfg = null;

          for (var iterator of seasonTask) {
            if (iterator.ID == id) {
              cfg = iterator;
            }
          }

          return cfg;
        }
        /**通过章节id获取赛季章节任务 */


        static GetSeasonTaskByChapterID(id) {
          var stdTask = this.Get("task");
          var chapterList = [];

          for (var iterator of stdTask) {
            if (iterator.TaskTypeData[0] == id) {
              chapterList.push(iterator);
            }
          }

          return chapterList;
        }
        /**获取宝箱数据 */


        static GetBoxData(id) {
          var cfg = CfgMgr.Get("RewardBox");

          for (var std of cfg) {
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


        static GetShopIndex(shopGroupId, shopType) {
          var indexList = this.getShopIndexList();

          for (var stdShopIndex of indexList) {
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


        static GetShopsByPanel(panel) {
          var map = [];
          var indexList = this.getShopIndexList();

          for (var stdShopIndex of indexList) {
            if (stdShopIndex.Panel == panel) {
              if (!map[stdShopIndex.TabSort]) {
                map[stdShopIndex.TabSort] = [stdShopIndex];
              } else {
                map[stdShopIndex.TabSort].push(stdShopIndex);
              }
            }
          } // let shops = Array.from(map.values());
          // shops.sort((a, b) => a.TabSort - b.TabSort);


          var shops = [];

          for (var group of map) {
            if (group) shops.push(group);
          }

          return shops;
        }

        static GetShopIndexById(ID) {
          var indexList = this.getShopIndexList();

          for (var stdShopIndex of indexList) {
            if (stdShopIndex.ID == ID) {
              return stdShopIndex;
            }
          }
        }
        /**
         * 获取商城配置列表
         * @returns 
         */


        static getShopIndexList() {
          return this.Get("ShopIndex");
        }

        static GetShop(id) {
          for (var std of this.GetShopList()) {
            if (std.ID == id) return std;
          }

          return null;
        }

        static GetShopList() {
          return this.Get("Shop");
        }
        /**
         * 获取通用商品配置
         * @param id 
         * @returns 
         */


        static GetCommShopItem(id) {
          return this.Get("ShopCommodity")[id];
        }
        /**
         * 获取商城抽奖配置
         * @param id 
         * @returns 
         */


        static GetShopLucky(id) {
          var list = this.getShopLuckuyList();

          for (var std of list) {
            if (std.CardpoolId == id) return std;
          }
        }
        /**
         * 获取商城配置列表
         * @returns 
         */


        static getShopLuckuyList() {
          return this.Get("ShopLucky");
        }
        /**
         * 获取抽奖商店池子配置列表
         * @param shopGroupId
         * @param shopType
         * @returns 
         */


        static GetLuckyDatas(shopGroupId, shopType) {
          var indexList = this.getShopIndexList();
          var list = this.getShopLuckuyList();
          var newList = [];

          for (var stdShopIndex of indexList) {
            if (stdShopIndex.SystemOpen > 0 && stdShopIndex.Panel == shopGroupId && stdShopIndex.ShopType == shopType) {
              for (var stdShopLucky of list) {
                if (stdShopLucky.RewardPools == stdShopIndex.LuckyID) {
                  newList.push({
                    shopId: stdShopIndex.ID,
                    shopStd: stdShopLucky
                  });
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


        static GetShopLuckyPool(id) {
          console.log(this.Get("ShopLuckyPool"));
          return this.Get("ShopLuckyPool")[id];
        }
        /**获取卡片 */


        static GetBattleCardDeliver(id) {
          var list = this.Get("battle_card_delivery");

          for (var std of list) {
            if (std.ID == id) return std;
          }

          return null;
        }
        /**获取交易所商品配置 */


        static GetTradeAllCfgData(type) {
          if (type == 0) {
            var cfg = CfgMgr.Get("market_item");
            var datas = [];

            for (var iterator of cfg) {
              datas.push(iterator);
            }

            return datas;
          } else if (type == 1) {
            var _cfg = CfgMgr.Get("market_card");

            var _datas = [];

            for (var _iterator of _cfg) {
              _datas.push(_iterator);
            }

            return _datas;
          }
        }
        /**获取交易所卡牌商品配置 */


        static GetTradeAllCardCfgData(type) {
          var cfg = CfgMgr.Get("market_card");
          var datas = [];

          for (var iterator of cfg) {
            datas.push(iterator);
          }

          return datas;
        }
        /**获取所有交易商品 */


        static GetTradeAllData(type) {
          if (type == 0) {
            var cfg = CfgMgr.Get("market_item");
            var datas = [];

            for (var iterator of cfg) {
              //道具
              var data = {
                type: ThingTypeName.Item,
                item: {
                  id: iterator.ItemId,
                  count: 0
                }
              };
              datas.push(data);
            }

            return datas;
          } else if (type == 1) {
            var _cfg2 = CfgMgr.Get("market_card");

            var _datas2 = [];

            for (var _iterator2 of _cfg2) {
              //卡牌
              var _data = {
                type: ThingTypeName.Equipment,
                card: {
                  id: "",
                  cardId: _iterator2.CardID,
                  level: 1,
                  quality: _iterator2.CardQuality,
                  exp: 0,
                  ownershipType: 0,
                  updateId: 0,
                  tradeCd: 0,
                  nftLockExpires: 0,
                  createdAt: 0
                }
              };

              _datas2.push(_data);
            }

            return _datas2;
          }
        }
        /**获取交易商品配置
        * buyOrSell ture代表
        */


        static GetTradeData(data) {
          if (data.item) {
            var cfg = CfgMgr.Get("market_item");

            for (var iterator of cfg) {
              if (data.item && iterator.ItemId == data.item.id) {
                return iterator;
              }
            }
          } else if (data.card) {
            var _cfg3 = CfgMgr.Get("market_card");

            for (var _iterator3 of _cfg3) {
              if (data.card && _iterator3.CardID == data.card.cardId) {
                return _iterator3;
              }
            }
          }
        }
        /**
         * 获取ai列表
         * @returns 
         */


        static get AIGroupList() {
          var aiList = CfgMgr.Get("Ai_Group");
          return aiList;
        }
        /**
         * 获取地形
         * @param id 
         * @returns 
         */


        static getArea(id) {
          return CfgMgr.Get("Area")[id];
        }

        static getCanFightArea() {
          if (!this.canFightArea) this.canFightArea = {};
          var areas = this.Get("Area");

          for (var k in areas) {
            if (areas[k].IsOpen) this.canFightArea[k] = areas[k];
          }

          return this.canFightArea;
        }
        /**
         * 获取地形列表
         */


        static get AreaList() {
          var list = [];
          var map = CfgMgr.Get("Area");

          for (var _key4 in map) {
            if (map[_key4].IsOpen) list.push(map[_key4]);
          }

          return list;
        }
        /**通过类型获取该类型的所有卡牌*/


        static GetCardCfgByType(data, type) {
          var card_id_list = [];

          if (type == 0) {
            return data;
          }

          for (var iterator of data) {
            var cfg = this.GetCard(iterator.cardId);

            if (cfg && cfg.Type.indexOf(type) != -1) {
              card_id_list.push(iterator);
            }
          }

          return card_id_list;
        }

        static GetInstructionsById(id) {
          var language = CfgMgr.Get("instructions");

          for (var iterator of language) {
            if (iterator.ID == id) {
              return iterator.Desc;
            }
          }

          return "";
        }

        //获取卡牌等级列表
        static GetCardUpgradeList(cardId) {
          if (!this.cardUpgradeMap) {
            this.cardUpgradeMap = new Map();
            var list = this.Get("CardUpgrade");
            var carUpgradeList;

            for (var std of list) {
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


        static GetCardUpgrade(cardId, qual) {
          var list = this.GetCardUpgradeList(cardId);

          for (var std of list) {
            if (std.Quality == qual) {
              return std;
            }
          }

          return null;
        }
        /**获取卡牌等级显示列表 */


        static GetCardUpgradeShowList() {
          return CfgMgr.Get("CardUpgradeShow");
        }
        /**获取卡牌等级显示配置 */


        static GetCardUpgradeShow(qual) {
          var list = this.GetCardUpgradeShowList();

          for (var std of list) {
            if (std.CardQuality == qual) {
              return std;
            }
          }

          return null;
        }

        /**
         * 获取收藏等级奖励列表
         * @returns 
         */
        static GetPlayerLevelArwardList() {
          if (this.playerLevelAwardList) return this.playerLevelAwardList;
          this.playerLevelAwardList = [];
          var list = this.GetPlayerLevelList();
          var std;
          var awardLv;

          for (var index = 0; index < list.length; index++) {
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


        static GetPlayerLevelList() {
          return this.Get("PlayerLevel");
        }
        /**
         * 获取收藏最大等级
         * @returns 
         */


        static GetMaxPlayerLevel() {
          var list = this.GetPlayerLevelList();
          return list[list.length - 1];
        }
        /**获取宝箱配置列表 */


        static GetProcessBoxList() {
          return this.Get("Processbox");
        }
        /**获取宝箱配置 */


        static GetProcessBox(boxId) {
          var list = this.GetProcessBoxList();

          for (var std of list) {
            if (std.ID == boxId) {
              return std;
            }
          }

          return null;
        }
        /**获取新手宝箱类型列表 */


        static GetBoxTypeList(type) {
          var list = this.GetProcessBoxList();
          var newList = [];

          for (var std of list) {
            if (std.BoxType == type) {
              newList.push(std);
            }
          }

          newList.sort((a, b) => {
            return a.ID - b.ID;
          });
          return newList;
        }
        /**
         * 通过id获取通用配置
         */


        static GetCommon(id) {
          var stdList = CfgMgr.Get("Common");

          for (var iterator of stdList) {
            if (iterator.ModuleId == id && iterator.ConfigValues) {
              return iterator.ConfigValues;
            }
          }

          return null;
        }
        /**获取卡组通用配置 */


        static get CardGuroupComm() {
          return this.GetCommon(StdCommonType.CardBase);
        }
        /**
         * 通过id获取通用配置
         */


        static GetLogic(id) {
          var stdList = CfgMgr.Get("Logic");

          for (var iterator of stdList) {
            if (iterator.ModuleKey == id && iterator.ConfigValues) {
              return iterator.ConfigValues;
            }
          }

          return null;
        }

        static GetStdPVPSnatchList() {
          var stdPVPSnatchList = CfgMgr.Get("PVPSnatch");
          return stdPVPSnatchList;
        }
        /**获取赛季配置 */


        static GetStdPVPSnatch(id) {
          var stdPVPSnatchList = this.GetStdPVPSnatchList();

          for (var std of stdPVPSnatchList) {
            if (std.MatchID == id) {
              return std;
            }
          }

          return null;
        }
        /**获取段位配置列表 */


        static GetStdPvpLvCfgList(groupId) {
          var list = CfgMgr.Get("pvp_level");
          var newList = [];

          for (var index = 0; index < list.length; index++) {
            var std = list[index];

            if (std.GroupID == groupId) {
              newList.push(std);
            }
          }

          return list;
        }
        /**获取段位配置 */


        static GetStdPvpLv(groupId, id) {
          var list = this.GetStdPvpLvCfgList(groupId);
          id = id || list[0].LevelID;

          for (var std of list) {
            if (std.GroupID == groupId && std.LevelID == id) {
              return std;
            }
          }

          return null;
        }
        /**获取段位配置 */


        static GetStdPvpLvByPoint(groupId, point) {
          var list = this.GetStdPvpLvCfgList(groupId);
          var checkStd;

          for (var index = list.length - 1; index >= 0; index--) {
            var std = list[index];

            if (point >= std.LevelPoints) {
              checkStd = std;
              break;
            }

            ;
          }

          return checkStd || list[0];
        }
        /**获取段位区间配置 */


        static GetStdPvpLvListByPoint(groupId, startPoint, endPoint) {
          var list = this.GetStdPvpLvCfgList(groupId);
          var newList = [];

          for (var index = list.length - 1; index >= 0; index--) {
            var std = list[index];

            if (endPoint >= std.LevelPoints && std.LevelPoints >= startPoint) {
              newList.unshift(std);
            }

            ;
          }

          return newList;
        }
        /**错误码 */


        static GetErrorCfgByCode(code) {
          var cfg = this.Get("ErrorMessage");

          for (var index = 0; index < cfg.length; index++) {
            var element = cfg[index];

            if (element.code == code) {
              return element.alert;
            }
          }

          return "code" + code;
        }
        /**************************************************权益相关************************************** */

        /**赛季通行证配置 */


        static getSeaGatepass(seaid) {
          var cfg = this.Get("SeaGatepass");
          var list = [];

          for (var index = 0; index < cfg.length; index++) {
            var element = cfg[index];

            if (element.SeaId == seaid) {
              list.push(element);
            }
          }

          return list;
        }
        /**获取赛季通行证等级配置 */


        static getSeaGatepassLv() {
          var cfg = this.Get("SeaGatepassLv");
          return cfg;
        }
        /**根据等级获取当前赛季通行证下一级经验 */


        static getSeaGatepassNextExp(lv) {
          var lv_cfg = this.getSeaGatepassLv();
          var max_lv = lv_cfg.length;
          var next_lv = max_lv <= lv ? max_lv : lv + 1;
          var next_exp = 0;

          for (var index = 0; index < lv_cfg.length; index++) {
            var element = lv_cfg[index];

            if (element.Lv == next_lv) {
              next_exp = element.Exp;
            }
          }

          return next_exp;
        }
        /**获取当前赛季通行证奖励 */


        static getSeaGatepassReward(id) {
          var lv_cfg = this.Get("SeaGatepassLvReward");
          var reward_lsit = [];

          for (var k = 0; k < lv_cfg.length; k++) {
            var element = lv_cfg[k];

            if (id == element.SeaGatepassID) {
              reward_lsit.push(element);
            }
          }

          return reward_lsit;
        }
        /**获取当前赛季不同等级不同级别的奖励 */


        static getSeaGatepassRewardByLvAndGrate(lv, id) {
          var lv_cfg = this.Get("SeaGatepassLvReward");
          var reward_lsit;

          for (var index = 0; index < lv_cfg.length; index++) {
            var element = lv_cfg[index];

            if (element.SeaGatepassID == id && element.Lv == lv) {
              reward_lsit = element;
            }
          }

          return reward_lsit;
        }
        /**获取权益开放配置 */


        static getEquityOpenCfg(seaid) {
          var equity_cfg = this.Get("EquityCard");
          var time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime;
          var _lsit = [];
          var open_lsit = [];

          for (var index = 0; index < equity_cfg.length; index++) {
            var element = equity_cfg[index];
            var open_time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).DateStringToTime(element.ShowStartTime);
            var end_time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).DateStringToTime(element.ExchangeEndTime);

            if (element.CardType == 1 && typeof element.SeaId != "string") {
              if (element.SeaId == seaid && _lsit.indexOf(element.SeaId) == -1) {
                open_lsit.push(element);

                _lsit.push(element.SeaId);
              }
            } else {
              if (open_time <= time && end_time > time) {
                open_lsit.push(element);
              }
            }
          }

          return open_lsit;
        }
        /**获取权益展示 */


        static getEquityShowList(id_list) {
          var list = this.Get("EquityList");
          var des_list = [];
          var reward_list = [];

          for (var index = 0; index < list.length; index++) {
            var element = list[index];

            if (id_list.indexOf(element.EquityID) != -1) {
              if (element.EquityType != 2) {
                des_list.push(element.describe);
              } else {
                reward_list.push(element.RewardType, element.RewardID, element.RewardNumber);
              }
            }
          }

          return [des_list, reward_list];
        }
        /***********************************************权益相关end********************************************** */


        static GetStdPVPBattleList() {
          var cfg = this.Get("PVPBattle");
          return cfg;
        }
        /**获取赛季配置 */


        static GetStdPVPBattle(id) {
          var stdPVPBattleList = this.GetStdPVPBattleList();

          for (var std of stdPVPBattleList) {
            if (std.MatchID == id) {
              return std;
            }
          }

          return null;
        }

      });
      /**背包页签类型 */


      CfgMgr.data = void 0;
      CfgMgr.canFightCards = void 0;
      CfgMgr.canFightArea = void 0;
      CfgMgr.cardUpgradeMap = void 0;
      CfgMgr.playerLevelAwardList = void 0;

      _export("ItemSubType", ItemSubType = /*#__PURE__*/function (ItemSubType) {
        ItemSubType[ItemSubType["all"] = 0] = "all";
        ItemSubType[ItemSubType["prop"] = 1] = "prop";
        ItemSubType[ItemSubType["factor"] = 2] = "factor";
        ItemSubType[ItemSubType["currency"] = 3] = "currency";
        return ItemSubType;
      }({}));

      _export("ThingName", ThingName = /*#__PURE__*/function (ThingName) {
        ThingName[ThingName["item"] = 1] = "item";
        ThingName[ThingName["weapon"] = 2] = "weapon";
        ThingName[ThingName["battlecard"] = 3] = "battlecard";
        return ThingName;
      }({}));
      /**事物大类枚举 */


      _export("ThingTypeName", ThingTypeName = class ThingTypeName {});

      ThingTypeName.Item = "item";
      // 道具
      ThingTypeName.Equipment = "equipment";
      //装备
      ThingTypeName.BattleCard = "battlecard";

      _export("ThingType", ThingType = /*#__PURE__*/function (ThingType) {
        ThingType[ThingType["item"] = 1] = "item";
        ThingType[ThingType["equipment"] = 2] = "equipment";
        ThingType[ThingType["battlecard"] = 3] = "battlecard";
        ThingType[ThingType["playerexp"] = 4] = "playerexp";
        return ThingType;
      }({}));
      /**道具类型枚举 */


      _export("ItemType", ItemType = /*#__PURE__*/function (ItemType) {
        ItemType[ItemType["money"] = 1] = "money";
        ItemType[ItemType["box"] = 2] = "box";
        ItemType[ItemType["item"] = 3] = "item";
        ItemType[ItemType["exp"] = 4] = "exp";
        ItemType[ItemType["shard"] = 5] = "shard";
        ItemType[ItemType["speed"] = 6] = "speed";
        ItemType[ItemType["rights"] = 7] = "rights";
        ItemType[ItemType["shield"] = 8] = "shield";
        ItemType[ItemType["piece"] = 9] = "piece";
        return ItemType;
      }({}));
      /**卡牌枚举 */


      _export("CardQuality", CardQuality = /*#__PURE__*/function (CardQuality) {
        CardQuality[CardQuality["N"] = 1] = "N";
        CardQuality[CardQuality["R"] = 2] = "R";
        CardQuality[CardQuality["sR"] = 3] = "sR";
        CardQuality[CardQuality["ssR"] = 4] = "ssR";
        CardQuality[CardQuality["UR"] = 5] = "UR";
        return CardQuality;
      }({}));
      /**
       * 系统开启配置
       */

      /**道具配置 */

      /**卡牌配置 */

      /**
       * 技能配置
       */

      /**
       * 技能效果枚举
       */

      /**头像 配置*/

      /**卡背配置*/

      /**任务配置 */

      /**章节任务配置 */


      /**宝箱类型 */
      _export("BoxType", BoxType = /*#__PURE__*/function (BoxType) {
        BoxType[BoxType["random"] = 1] = "random";
        BoxType[BoxType["select"] = 2] = "select";
        BoxType[BoxType["all"] = 3] = "all";
        return BoxType;
      }({}));
      /**宝箱配置 */

      /**道具配置 */

      /**
       * 系统开启配置
       */

      /**
       * 引导配置
       */
      //商城组自定义配置


      /**商店类型*/
      _export("ShopType", ShopType = /*#__PURE__*/function (ShopType) {
        ShopType[ShopType["DayShop"] = 1] = "DayShop";
        ShopType[ShopType["WeekShop"] = 2] = "WeekShop";
        ShopType[ShopType["LuckyShop"] = 3] = "LuckyShop";
        ShopType[ShopType["GemShop"] = 4] = "GemShop";
        ShopType[ShopType["PvpShop"] = 5] = "PvpShop";
        ShopType[ShopType["TempShop"] = 6] = "TempShop";
        ShopType[ShopType["WorldBossShop"] = 7] = "WorldBossShop";
        ShopType[ShopType["GemConversion"] = 9999] = "GemConversion";
        return ShopType;
      }({}));
      /**商店组id*/


      _export("ShopGroupId", ShopGroupId = /*#__PURE__*/function (ShopGroupId) {
        ShopGroupId[ShopGroupId["BaseShop"] = 1] = "BaseShop";
        ShopGroupId[ShopGroupId["festivalShop"] = 2] = "festivalShop";
        ShopGroupId[ShopGroupId["PvpShop"] = 3] = "PvpShop";
        ShopGroupId[ShopGroupId["WorldBossShop"] = 4] = "WorldBossShop";
        return ShopGroupId;
      }({})); //商城配置
      //通用商城配置
      //抽奖商城配置
      //抽奖商城奖池配置
      //通用商品配置
      //抽奖商城自定义配置
      //卡片投放表

      /**交易所道具配置 */

      /**交易所道具配置 */

      /**ai配置 */

      /**地形配置 */

      /**生成卡组的配置 */

      /**卡牌等级边框的配置 */

      /**变体类型描述配置 */


      _export("skillType", skillType = /*#__PURE__*/function (skillType) {
        skillType[skillType["undefined"] = 0] = "undefined";
        skillType[skillType["reveal"] = 1] = "reveal";
        skillType[skillType["sustainwu"] = 2] = "sustainwu";
        skillType[skillType["unspecificness"] = 3] = "unspecificness";
        skillType[skillType["discard"] = 4] = "discard";
        skillType[skillType["move"] = 5] = "move";
        skillType[skillType["delete"] = 6] = "delete";
        return skillType;
      }({}));

      _export("CardSotrType1", CardSotrType1 = /*#__PURE__*/function (CardSotrType1) {
        CardSotrType1[CardSotrType1["Down"] = 0] = "Down";
        CardSotrType1[CardSotrType1["Up"] = 1] = "Up";
        return CardSotrType1;
      }({}));

      _export("CardSotrType2", CardSotrType2 = /*#__PURE__*/function (CardSotrType2) {
        CardSotrType2[CardSotrType2["Name"] = 0] = "Name";
        CardSotrType2[CardSotrType2["Cost"] = 1] = "Cost";
        CardSotrType2[CardSotrType2["Power"] = 2] = "Power";
        CardSotrType2[CardSotrType2["New"] = 3] = "New";
        CardSotrType2[CardSotrType2["Quality"] = 4] = "Quality";
        CardSotrType2[CardSotrType2["UpLevel"] = 5] = "UpLevel";
        return CardSotrType2;
      }({}));
      /**描述配置 */

      /**卡牌升级配置*/

      /**收藏等级配置*/

      /**收藏等级配置*/

      /**宝箱配置*/


      _export("StdProcessBoxType", StdProcessBoxType = /*#__PURE__*/function (StdProcessBoxType) {
        StdProcessBoxType[StdProcessBoxType["NewbieBox"] = 1] = "NewbieBox";
        StdProcessBoxType[StdProcessBoxType["LimitBox"] = 2] = "LimitBox";
        return StdProcessBoxType;
      }({}));
      /**交易所卡牌筛选配置 */


      /**通用配置id定义 */
      _export("StdCommonType", StdCommonType = /*#__PURE__*/function (StdCommonType) {
        StdCommonType[StdCommonType["CardBase"] = 1] = "CardBase";
        StdCommonType[StdCommonType["DailyTask"] = 20] = "DailyTask";
        StdCommonType[StdCommonType["CardGroup"] = 21] = "CardGroup";
        return StdCommonType;
      }({}));
      /**公用配置 */

      /**公用配置 */

      /**卡组配置 */

      /**赛季配置 */

      /**段位 配置*/

      /**错误码 配置*/

      /**通行证 */

      /**通行证等级配置 */

      /**通行证等级配置 */

      /**权益 */

      /**权益列表 */

      /**星元对战配置 */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1df2f86787ae96b83714cad7b31051d61e8130de.js.map