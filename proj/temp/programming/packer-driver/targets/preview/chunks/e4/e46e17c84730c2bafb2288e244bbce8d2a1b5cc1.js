System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, OrderStateType, SOrderType, SQuerySortItemType, SQuerySortCardType, SFriendSortType, STaskState, STaskShowType, STaskType, Tips2ID, BattleRoomInstType, BattleRoundOperationState, CardInfoStateType;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "58081eIjA9Phbl2YyaMosSl", "PlayerStruct", undefined);

      //交易所相关数据

      /**订单状态 */
      _export("OrderStateType", OrderStateType = /*#__PURE__*/function (OrderStateType) {
        OrderStateType["active"] = "active";
        OrderStateType["cancelled"] = "cancelled";
        OrderStateType["done"] = "done";
        return OrderStateType;
      }({}));
      /**订单类型 */


      _export("SOrderType", SOrderType = /*#__PURE__*/function (SOrderType) {
        SOrderType[SOrderType["SELL"] = 0] = "SELL";
        SOrderType[SOrderType["BUY"] = 1] = "BUY";
        return SOrderType;
      }({}));
      /**订单道具排序枚举 */


      _export("SQuerySortItemType", SQuerySortItemType = /*#__PURE__*/function (SQuerySortItemType) {
        SQuerySortItemType["PriceUp"] = "price:asc";
        SQuerySortItemType["PriceDow"] = "price:desc";
        SQuerySortItemType["TotalPriceUp"] = "total_price:asc";
        SQuerySortItemType["TotalPriceDown"] = "total_price:desc";
        SQuerySortItemType["CountUp"] = "quantity_remaining:asc";
        SQuerySortItemType["CountDown"] = "quantity_remaining:desc";
        return SQuerySortItemType;
      }({}));
      /**订单卡牌排序枚举 */


      _export("SQuerySortCardType", SQuerySortCardType = /*#__PURE__*/function (SQuerySortCardType) {
        SQuerySortCardType["PriceUp"] = "price:asc";
        SQuerySortCardType["PriceDow"] = "price:desc";
        SQuerySortCardType["CardRarityUp"] = "card_rarity:asc";
        SQuerySortCardType["CardRarityDown"] = "card_rarity:desc";
        SQuerySortCardType["QualityUp"] = "card.quality:asc";
        SQuerySortCardType["QualityDown"] = "card.quality:desc";
        return SQuerySortCardType;
      }({}));
      /**道具数据 */

      /**事物定义资源类 */

      /**事物列表 */

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
        STaskType[STaskType["frien"] = 5] = "frien";
        STaskType[STaskType["dayActive"] = 6] = "dayActive";
        STaskType[STaskType["weekActive"] = 7] = "weekActive";
        STaskType[STaskType["season"] = 8] = "season";
        STaskType[STaskType["seasonChapter"] = 9] = "seasonChapter";
        return STaskType;
      }({}));
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
      }({})); //商品数结构
      //抽奖商店数据结构
      //商店数据

      /**查询返回数据类型 */

      /**订单物品信息 */

      /******************************战斗相关数据结构定义******************************/

      /**
       * 战斗数据包
       */

      /**
       * 映射卡的位置
       */

      /**
       * 战斗out op_type处理包 
       */


      /**
       * 战斗房间实例类型
       */
      _export("BattleRoomInstType", BattleRoomInstType = /*#__PURE__*/function (BattleRoomInstType) {
        BattleRoomInstType[BattleRoomInstType["RoomInstCard"] = 0] = "RoomInstCard";
        BattleRoomInstType[BattleRoomInstType["RoomInstTerrain"] = 1] = "RoomInstTerrain";
        BattleRoomInstType[BattleRoomInstType["RoomInstPlayer"] = 2] = "RoomInstPlayer";
        return BattleRoomInstType;
      }({}));
      /**
       * 战斗回合操作状态
       * */


      _export("BattleRoundOperationState", BattleRoundOperationState = /*#__PURE__*/function (BattleRoundOperationState) {
        BattleRoundOperationState[BattleRoundOperationState["EndRound"] = 0] = "EndRound";
        BattleRoundOperationState[BattleRoundOperationState["PlaceRound"] = 1] = "PlaceRound";
        BattleRoundOperationState[BattleRoundOperationState["CancelRound"] = 2] = "CancelRound";
        return BattleRoundOperationState;
      }({}));
      /******************************战斗相关数据结构定义******************************/


      _export("CardInfoStateType", CardInfoStateType = /*#__PURE__*/function (CardInfoStateType) {
        CardInfoStateType[CardInfoStateType["Creator"] = 0] = "Creator";
        CardInfoStateType[CardInfoStateType["Add"] = 1] = "Add";
        CardInfoStateType[CardInfoStateType["Del"] = 2] = "Del";
        CardInfoStateType[CardInfoStateType["Fill"] = 3] = "Fill";
        CardInfoStateType[CardInfoStateType["Change"] = 4] = "Change";
        return CardInfoStateType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e46e17c84730c2bafb2288e244bbce8d2a1b5cc1.js.map