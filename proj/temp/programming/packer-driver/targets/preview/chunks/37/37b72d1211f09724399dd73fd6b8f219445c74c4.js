System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, proto, _crd, Route, Req, Ret;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "./proto/proto.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "103b96nsz1GQonznlXsPCFg", "Protocol", undefined);

      __checkObsolete__(['js']);

      _export("Route", Route = {
        /** 查询服务器时间(网关服务当前时间戳)*/
        ["gate.protocol.servertime"]: "gate.protocol.servertime",

        /** 查询用户信息*/
        ["user.protocol.getuserinfo"]: "user.protocol.getuserinfo",

        /** 搜索用户信息*/
        ["user.protocol.searchuser"]: "user.protocol.searchuser",

        /** 修改昵称*/
        ["user.protocol.modifynickname"]: "user.protocol.modifynickname",

        /** 绑定好友*/
        ["user.protocol.bindfriend"]: "user.protocol.bindfriend",

        /** 查询好友列表（测试用，详细信息）*/
        ["user.protocol.getfriends"]: "user.protocol.getfriends",

        /** 查询好友列表（正式用，缓存性能高）*/
        ["user.protocol.getfriendsinfos"]: "user.protocol.getfriendsinfos",

        /** 设置密码（游戏二级密码）*/
        ["user.protocol.passwordset"]: "user.protocol.passwordset",

        /** 验证密码（游戏二级密码）*/
        ["user.protocol.passwordvalidate"]: "user.protocol.passwordvalidate",

        /** 查询玩家数据（这个后面要删除）*/
        ["player.protocol.getplayerdata"]: "player.protocol.getplayerdata",

        /** 查询玩家道具数据*/
        ["player.protocol.getplayeritems"]: "player.protocol.getplayeritems",

        /** 查询玩家任务数据*/
        ["player.protocol.getplayertasks"]: "player.protocol.getplayertasks",

        /** 查询玩家卡牌数据*/
        ["player.protocol.getplayerbattlecards"]: "player.protocol.getplayerbattlecards",

        /** 查询玩家权益卡数据*/
        ["player.protocol.getplayerbenefitcards"]: "player.protocol.getplayerbenefitcards",

        /** 完成任务*/
        ["player.protocol.completetask"]: "player.protocol.completetask",

        /** 道具生产*/
        ["player.protocol.itemproduction"]: "player.protocol.itemproduction",

        /** 道具生产完成*/
        ["player.protocol.itemproductionfinish"]: "player.protocol.itemproductionfinish",

        /** 道具合成*/
        ["player.protocol.itemsynthesize"]: "player.protocol.itemsynthesize",

        /** 玩家道具流水查询*/
        ["player.protocol.getitemrecords"]: "player.protocol.getitemrecords",

        /** 查询邮件列表*/
        ["mail.protocol.getmails"]: "mail.protocol.getmails",

        /** 邮件标记已读*/
        ["mail.protocol.readmail"]: "mail.protocol.readmail",

        /** 邮件删除（批量）*/
        ["mail.protocol.deletemails"]: "mail.protocol.deletemails",

        /** 邮件领取附件（单个）*/
        ["mail.protocol.claimmailattachment"]: "mail.protocol.claimmailattachment",

        /** 邮件领取附件（批量）*/
        ["mail.protocol.claimmailsattachment"]: "mail.protocol.claimmailsattachment",

        /** 开盒子*/
        ["logic.protocol.itemboxopen"]: "logic.protocol.itemboxopen",

        /** 发送赠送邮件（道具）*/
        ["logic.protocol.sendgivemail"]: "logic.protocol.sendgivemail",

        /** 卡牌升级（品质）*/
        ["logic.protocol.battlecardupgrade"]: "logic.protocol.battlecardupgrade",

        /** 卡组新增*/
        ["logic.protocol.adddeck"]: "logic.protocol.adddeck",

        /** 查询卡组*/
        ["logic.protocol.getplayerdecks"]: "logic.protocol.getplayerdecks",

        /** 查询卡组卡牌数据*/
        ["logic.protocol.getdeckcards"]: "logic.protocol.getdeckcards",

        /** 设置卡组卡牌（可同时设置卡组属性）*/
        ["logic.protocol.setdeckcards"]: "logic.protocol.setdeckcards",

        /** 卡组修改（属性）*/
        ["logic.protocol.setdeckattrs"]: "logic.protocol.setdeckattrs",

        /** 设置默认卡组*/
        ["logic.protocol.setdeckdefault"]: "logic.protocol.setdeckdefault",

        /** 删除卡组*/
        ["logic.protocol.deletedeck"]: "logic.protocol.deletedeck",

        /** 启程宝匣奖励查询*/
        ["logic.protocol.getprocessboxrewards"]: "logic.protocol.getprocessboxrewards",

        /** 启程宝匣开启*/
        ["logic.protocol.processboxopen"]: "logic.protocol.processboxopen",

        /** 玩家等级奖励领取*/
        ["logic.protocol.playerlevelrewardclaim"]: "logic.protocol.playerlevelrewardclaim",

        /** 玩家等级奖励查询*/
        ["logic.protocol.getplayerlevelrewards"]: "logic.protocol.getplayerlevelrewards",

        /** 手动刷新每日任务*/
        ["logic.protocol.refreshdailytask"]: "logic.protocol.refreshdailytask",

        /** 获取手动已刷新每日任务次数*/
        ["logic.protocol.getrefreshdailytasktimes"]: "logic.protocol.getrefreshdailytasktimes",

        /** 查询头像列表*/
        ["logic.protocol.getavatarinfos"]: "logic.protocol.getavatarinfos",

        /** 设置头像信息*/
        ["logic.protocol.setavatarinfos"]: "logic.protocol.setavatarinfos",

        /** 查询卡背列表*/
        ["logic.protocol.getcardbackinfos"]: "logic.protocol.getcardbackinfos",

        /** 设置卡背信息*/
        ["logic.protocol.setcardbackinfos"]: "logic.protocol.setcardbackinfos",

        /** 领取初始卡组*/
        ["logic.protocol.noobcardsclaim"]: "logic.protocol.noobcardsclaim",

        /** 商城购买道具*/
        ["shop.protocol.buyitem"]: "shop.protocol.buyitem",

        /** 商城幸运抽奖*/
        ["shop.protocol.dolucky"]: "shop.protocol.dolucky",

        /** 商城查询索引*/
        ["shop.protocol.getindex"]: "shop.protocol.getindex",

        /** 交易行查询挂单（道具）*/
        ["market.protocol.getmakeritemorders"]: "market.protocol.getmakeritemorders",

        /** 交易行搜索订单（道具）*/
        ["market.protocol.searchitemorders"]: "market.protocol.searchitemorders",

        /** 交易行上架订单（道具）*/
        ["market.protocol.makeitemorder"]: "market.protocol.makeitemorder",

        /** 交易行成交订单（道具）*/
        ["market.protocol.takeitemorder"]: "market.protocol.takeitemorder",

        /** 交易行取消订单（道具）*/
        ["market.protocol.cancelitemorder"]: "market.protocol.cancelitemorder",

        /** 交易行查询挂单吃单（卡牌）*/
        ["market.protocol.getcardorders"]: "market.protocol.getcardorders",

        /** 交易行搜索订单（卡牌）*/
        ["market.protocol.searchcardorders"]: "market.protocol.searchcardorders",

        /** 交易行上架求购订单（卡牌）*/
        ["market.protocol.makecardbuyorder"]: "market.protocol.makecardbuyorder",

        /** 交易行上架出售订单（卡牌）*/
        ["market.protocol.makecardsellorder"]: "market.protocol.makecardsellorder",

        /** 交易行成交订单（卡牌）*/
        ["market.protocol.takecardorder"]: "market.protocol.takecardorder",

        /** 交易行取消订单（卡牌）*/
        ["market.protocol.cancelcardorder"]: "market.protocol.cancelcardorder",

        /** 匹配发起*/
        ["match.protocol.matchmaking"]: "match.protocol.matchmaking",

        /** 匹配取消*/
        ["match.protocol.matchcancel"]: "match.protocol.matchcancel",

        /** 查询排位赛战斗记录（最近20场）*/
        ["pvp.protocol.getpvprankbattlerecords"]: "pvp.protocol.getpvprankbattlerecords",

        /** 查询星元对战战斗记录（最近20场）*/
        ["pvp.protocol.getpvpstarbattlerecords"]: "pvp.protocol.getpvpstarbattlerecords",

        /** 查询排位赛排行榜*/
        ["pvp.protocol.getpvpranking"]: "pvp.protocol.getpvpranking",

        /** 查询排位信息*/
        ["pvp.protocol.getpvprankinfo"]: "pvp.protocol.getpvprankinfo",

        /** 查询排位等级奖励记录*/
        ["pvp.protocol.getranklevelreward"]: "pvp.protocol.getranklevelreward",

        /** 领取排位等级奖励*/
        ["pvp.protocol.ranklevelrewardclaim"]: "pvp.protocol.ranklevelrewardclaim",

        /** 创建用户自定义房间*/
        ["battle_mgr.protocol.createbattlemgruserroom"]: "battle_mgr.protocol.createbattlemgruserroom",

        /** 获取回放信息*/
        ["battle_mgr.protocol.getbattlereplayroom"]: "battle_mgr.protocol.getbattlereplayroom",

        /** 获取玩家最近战斗记录*/
        ["battle_mgr.protocol.getbattlerecentrecords"]: "battle_mgr.protocol.getbattlerecentrecords",

        /** 创建回放房间*/
        ["battle_mgr.protocol.createbattlereplayroom"]: "battle_mgr.protocol.createbattlereplayroom",

        /** 尝试退出之前任何房间以解除状态锁定*/
        ["battle_mgr.protocol.leaveallbattleroom"]: "battle_mgr.protocol.leaveallbattleroom",

        /** 获取最后有效的房间摘要*/
        ["battle_mgr.protocol.getlastbattleroomsummary"]: "battle_mgr.protocol.getlastbattleroomsummary",

        /** 房间保活*/
        ["battle.protocol.battleroomping"]: "battle.protocol.battleroomping",

        /** 加入房间*/
        ["battle.protocol.battleroomenter"]: "battle.protocol.battleroomenter",

        /** 离开房间*/
        ["battle.protocol.battleroomleave"]: "battle.protocol.battleroomleave",

        /** 加倍*/
        ["battle.protocol.battleroomdouble"]: "battle.protocol.battleroomdouble",

        /** 战斗房间确认操作输入*/
        ["battle.protocol.battleroomconfirmopinput"]: "battle.protocol.battleroomconfirmopinput",

        /** 战斗房间取消操作输入*/
        ["battle.protocol.battleroomcancelopinput"]: "battle.protocol.battleroomcancelopinput",

        /** 战斗房间客户端表演结束*/
        ["battle.protocol.battleroomroundshowend"]: "battle.protocol.battleroomroundshowend",

        /** 客户端通知服务器结算播报完成*/
        ["battle.protocol.battleroomsettlementend"]: "battle.protocol.battleroomsettlementend",

        /** 客户端通知服务器重传当前回合数据*/
        ["battle.protocol.battleroomroundretransmission"]: "battle.protocol.battleroomroundretransmission",

        /** 用户信息变更推送*/
        ["UserInfoChangePush"]: "UserInfoChangePush",

        /** 登录玩家数据推送*/
        ["PlayerLoginPush"]: "PlayerLoginPush",

        /** 道具数量变更推送*/
        ["PlayerItemsChangedPush"]: "PlayerItemsChangedPush",

        /** 任务变更推送*/
        ["PlayerTasksChangedPush"]: "PlayerTasksChangedPush",

        /** 玩家卡牌变更推送*/
        ["PlayerBattleCardChangePush"]: "PlayerBattleCardChangePush",

        /** 玩家收藏经验变更推送*/
        ["PlayerLevelExpChangedPush"]: "PlayerLevelExpChangedPush",

        /** 权益信息推送*/
        ["PlayerBenefitInfoPush"]: "PlayerBenefitInfoPush",

        /** 有新邮件提醒推送*/
        ["NewMailPush"]: "NewMailPush",

        /** 玩家风控等级推送*/
        ["RiskLevelPush"]: "RiskLevelPush",

        /** 跑马灯消息推送*/
        ["MarqueeMsgsPush"]: "MarqueeMsgsPush",

        /** 交易行挂单（道具）消息推送*/
        ["MarketItemOrderMakePush"]: "MarketItemOrderMakePush",

        /** 交易行吃单（道具）消息推送*/
        ["MarketItemOrderTakePush"]: "MarketItemOrderTakePush",

        /** 交易行取消挂单（道具）消息推送*/
        ["MarketItemOrderCancelledPush"]: "MarketItemOrderCancelledPush",

        /** 交易行挂单（卡牌）消息推送*/
        ["MarketCardOrderMakePush"]: "MarketCardOrderMakePush",

        /** 交易行吃单（卡牌）消息推送*/
        ["MarketCardOrderTakePush"]: "MarketCardOrderTakePush",

        /** 交易行取消挂单（卡牌）消息推送*/
        ["MarketCardOrderCancelledPush"]: "MarketCardOrderCancelledPush",

        /** 玩家默认卡组消息推送*/
        ["PlayerDefaultDeckPush"]: "PlayerDefaultDeckPush",

        /** 玩家每日任务刷新次数变更消息推送*/
        ["PlayerDailyTaskRefreshTimesChangePush"]: "PlayerDailyTaskRefreshTimesChangePush",

        /** 玩家新头像取得消息推送*/
        ["PlayerNewAvatarPush"]: "PlayerNewAvatarPush",

        /** 玩家新卡背取得消息推送*/
        ["PlayerNewCardBackPush"]: "PlayerNewCardBackPush",

        /** 匹配结果消息推送*/
        ["MatchMakingPush"]: "MatchMakingPush",

        /** 玩家登录时PVP消息推送*/
        ["PlayerPvpInfoPush"]: "PlayerPvpInfoPush",

        /** 玩家登录时PVP星元对战消息推送*/
        ["PlayerPvpStarInfoPush"]: "PlayerPvpStarInfoPush",

        /** PVP排位赛战斗结算消息推送*/
        ["PlayerPvpRankBattleSettlePush"]: "PlayerPvpRankBattleSettlePush",

        /** PVP星元对战战斗结算消息推送*/
        ["PlayerPvpStarBattleSettlePush"]: "PlayerPvpStarBattleSettlePush",

        /** PVP排位赛季切换消息推送*/
        ["PvpRankSeasonChangedPush"]: "PvpRankSeasonChangedPush",

        /** PVP星元对战赛季切换消息推送*/
        ["PvpStarSeasonChangedPush"]: "PvpStarSeasonChangedPush",

        /** 战斗房间操作输出推送*/
        ["BattleRoomOpOutputPush"]: "BattleRoomOpOutputPush",

        /** 战斗房间确认状态推送*/
        ["BattleRoomConfirmOpInputPush"]: "BattleRoomConfirmOpInputPush",

        /** 房间内推送玩家非游戏信息*/
        ["BattleRoomPlayersPush"]: "BattleRoomPlayersPush",

        /** 房间内推送玩家发送的表情*/
        ["BattleRoomExpressionPush"]: "BattleRoomExpressionPush",

        /** 推送自己加入房间*/
        ["BattleRoomEnterPush"]: "BattleRoomEnterPush",

        /** 推送自己离开房间*/
        ["BattleRoomLeavePush"]: "BattleRoomLeavePush"
      });

      _export("Req", Req = {
        /** 搜索用户信息*/
        ["user.protocol.searchuser"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SearchUserReq,

        /** 修改昵称*/
        ["user.protocol.modifynickname"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserModifyNicknameReq,

        /** 绑定好友*/
        ["user.protocol.bindfriend"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserBindFriendReq,

        /** 查询好友列表（测试用，详细信息）*/
        ["user.protocol.getfriends"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetFriendsReq,

        /** 查询好友列表（正式用，缓存性能高）*/
        ["user.protocol.getfriendsinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetFriendsInfosReq,

        /** 设置密码（游戏二级密码）*/
        ["user.protocol.passwordset"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserPasswordSetReq,

        /** 验证密码（游戏二级密码）*/
        ["user.protocol.passwordvalidate"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserPasswordValidReq,

        /** 查询玩家数据（这个后面要删除）*/
        ["player.protocol.getplayerdata"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerDataReq,

        /** 查询玩家道具数据*/
        ["player.protocol.getplayeritems"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerDataReq,

        /** 查询玩家任务数据*/
        ["player.protocol.getplayertasks"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerDataReq,

        /** 查询玩家卡牌数据*/
        ["player.protocol.getplayerbattlecards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerDataReq,

        /** 查询玩家权益卡数据*/
        ["player.protocol.getplayerbenefitcards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerDataReq,

        /** 完成任务*/
        ["player.protocol.completetask"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CompleteTaskReq,

        /** 道具生产*/
        ["player.protocol.itemproduction"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerItemProductionReq,

        /** 道具生产完成*/
        ["player.protocol.itemproductionfinish"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerItemProductionFinishReq,

        /** 道具合成*/
        ["player.protocol.itemsynthesize"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerItemSynthesizeReq,

        /** 玩家道具流水查询*/
        ["player.protocol.getitemrecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerItemRecordsReq,

        /** 查询邮件列表*/
        ["mail.protocol.getmails"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetMailsReq,

        /** 邮件标记已读*/
        ["mail.protocol.readmail"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ReadMailReq,

        /** 邮件删除（批量）*/
        ["mail.protocol.deletemails"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.DeleteMailsReq,

        /** 邮件领取附件（单个）*/
        ["mail.protocol.claimmailattachment"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ClaimMailAttachmentReq,

        /** 邮件领取附件（批量）*/
        ["mail.protocol.claimmailsattachment"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ClaimMailsAttachmentReq,

        /** 开盒子*/
        ["logic.protocol.itemboxopen"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerOpenBoxReq,

        /** 发送赠送邮件（道具）*/
        ["logic.protocol.sendgivemail"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SendGiveMailReq,

        /** 卡牌升级（品质）*/
        ["logic.protocol.battlecardupgrade"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleCardUpgradeReq,

        /** 卡组新增*/
        ["logic.protocol.adddeck"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckAttrsReq,

        /** 查询卡组卡牌数据*/
        ["logic.protocol.getdeckcards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetDeckCardsReq,

        /** 设置卡组卡牌（可同时设置卡组属性）*/
        ["logic.protocol.setdeckcards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckCardsReq,

        /** 卡组修改（属性）*/
        ["logic.protocol.setdeckattrs"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckAttrsReq,

        /** 设置默认卡组*/
        ["logic.protocol.setdeckdefault"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckDefaultReq,

        /** 删除卡组*/
        ["logic.protocol.deletedeck"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.DelDeckReq,

        /** 启程宝匣开启*/
        ["logic.protocol.processboxopen"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ProcessBoxOpenReq,

        /** 玩家等级奖励领取*/
        ["logic.protocol.playerlevelrewardclaim"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerLevelRewardClaimReq,

        /** 设置头像信息*/
        ["logic.protocol.setavatarinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerSetAvatarInfosReq,

        /** 设置卡背信息*/
        ["logic.protocol.setcardbackinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerSetCardBackInfosReq,

        /** 商城购买道具*/
        ["shop.protocol.buyitem"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ShopBuyItemReq,

        /** 商城幸运抽奖*/
        ["shop.protocol.dolucky"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ShopDoLuckyReq,

        /** 商城查询索引*/
        ["shop.protocol.getindex"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ShopGetIndexReq,

        /** 交易行查询挂单（道具）*/
        ["market.protocol.getmakeritemorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetMakerItemOrdersReq,

        /** 交易行搜索订单（道具）*/
        ["market.protocol.searchitemorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SearchMarketItemOrdersReq,

        /** 交易行上架订单（道具）*/
        ["market.protocol.makeitemorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MakeItemOrderReq,

        /** 交易行成交订单（道具）*/
        ["market.protocol.takeitemorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.TakeItemOrderReq,

        /** 交易行取消订单（道具）*/
        ["market.protocol.cancelitemorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CancelItemOrderReq,

        /** 交易行查询挂单吃单（卡牌）*/
        ["market.protocol.getcardorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetCardOrdersReq,

        /** 交易行搜索订单（卡牌）*/
        ["market.protocol.searchcardorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SearchMarketCardOrdersReq,

        /** 交易行上架求购订单（卡牌）*/
        ["market.protocol.makecardbuyorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MakeCardBuyOrderReq,

        /** 交易行上架出售订单（卡牌）*/
        ["market.protocol.makecardsellorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MakeCardSellOrderReq,

        /** 交易行成交订单（卡牌）*/
        ["market.protocol.takecardorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.TakeCardOrderReq,

        /** 交易行取消订单（卡牌）*/
        ["market.protocol.cancelcardorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CancelCardOrderReq,

        /** 匹配发起*/
        ["match.protocol.matchmaking"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MatchMakingReq,

        /** 查询排位赛战斗记录（最近20场）*/
        ["pvp.protocol.getpvprankbattlerecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankBattleRecordsReq,

        /** 查询星元对战战斗记录（最近20场）*/
        ["pvp.protocol.getpvpstarbattlerecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpStarBattleRecordsReq,

        /** 查询排位赛排行榜*/
        ["pvp.protocol.getpvpranking"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankingReq,

        /** 查询排位信息*/
        ["pvp.protocol.getpvprankinfo"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankInfoReq,

        /** 查询排位等级奖励记录*/
        ["pvp.protocol.getranklevelreward"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankLevelRewardReq,

        /** 领取排位等级奖励*/
        ["pvp.protocol.ranklevelrewardclaim"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PvpRankLevelRewardClaimReq,

        /** 创建用户自定义房间*/
        ["battle_mgr.protocol.createbattlemgruserroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CreateBattleMgrUserRoomReq,

        /** 获取回放信息*/
        ["battle_mgr.protocol.getbattlereplayroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetBattleReplayRoomReq,

        /** 获取玩家最近战斗记录*/
        ["battle_mgr.protocol.getbattlerecentrecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetBattleRecentRecordsReq,

        /** 创建回放房间*/
        ["battle_mgr.protocol.createbattlereplayroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CreateBattleReplayRoomReq,

        /** 尝试退出之前任何房间以解除状态锁定*/
        ["battle_mgr.protocol.leaveallbattleroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.LeaveAllBattleRoomReq,

        /** 获取最后有效的房间摘要*/
        ["battle_mgr.protocol.getlastbattleroomsummary"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetLastBattleRoomSummaryReq,

        /** 房间保活*/
        ["battle.protocol.battleroomping"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomPingReq,

        /** 加入房间*/
        ["battle.protocol.battleroomenter"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomEnterReq,

        /** 离开房间*/
        ["battle.protocol.battleroomleave"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomLeaveReq,

        /** 加倍*/
        ["battle.protocol.battleroomdouble"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomDoubleReq,

        /** 战斗房间确认操作输入*/
        ["battle.protocol.battleroomconfirmopinput"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomConfirmOpInputReq,

        /** 战斗房间取消操作输入*/
        ["battle.protocol.battleroomcancelopinput"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomCancelOpInputReq,

        /** 战斗房间客户端表演结束*/
        ["battle.protocol.battleroomroundshowend"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomRoundShowEndReq,

        /** 客户端通知服务器结算播报完成*/
        ["battle.protocol.battleroomsettlementend"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomSettlementEndReq,

        /** 客户端通知服务器重传当前回合数据*/
        ["battle.protocol.battleroomroundretransmission"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomRoundRetransmissionReq
      });

      _export("Ret", Ret = {
        /** 查询服务器时间(网关服务当前时间戳)*/
        ["gate.protocol.servertime"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ServerTimeRes,

        /** 查询用户信息*/
        ["user.protocol.getuserinfo"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetUserInfoRes,

        /** 搜索用户信息*/
        ["user.protocol.searchuser"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SearchUserRes,

        /** 修改昵称*/
        ["user.protocol.modifynickname"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserModifyNicknameRes,

        /** 绑定好友*/
        ["user.protocol.bindfriend"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserBindFriendRes,

        /** 查询好友列表（测试用，详细信息）*/
        ["user.protocol.getfriends"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetFriendsRes,

        /** 查询好友列表（正式用，缓存性能高）*/
        ["user.protocol.getfriendsinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetFriendsInfosRes,

        /** 设置密码（游戏二级密码）*/
        ["user.protocol.passwordset"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserPasswordSetRes,

        /** 验证密码（游戏二级密码）*/
        ["user.protocol.passwordvalidate"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserPasswordValidRes,

        /** 查询玩家数据（这个后面要删除）*/
        ["player.protocol.getplayerdata"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerDataRes,

        /** 查询玩家道具数据*/
        ["player.protocol.getplayeritems"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerItemsRes,

        /** 查询玩家任务数据*/
        ["player.protocol.getplayertasks"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerTasksRes,

        /** 查询玩家卡牌数据*/
        ["player.protocol.getplayerbattlecards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerBattleCardsRes,

        /** 查询玩家权益卡数据*/
        ["player.protocol.getplayerbenefitcards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerBenefitCardsRes,

        /** 完成任务*/
        ["player.protocol.completetask"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CompleteTaskRes,

        /** 道具生产*/
        ["player.protocol.itemproduction"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerItemProductionRes,

        /** 道具生产完成*/
        ["player.protocol.itemproductionfinish"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerItemProductionFinishRes,

        /** 道具合成*/
        ["player.protocol.itemsynthesize"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerItemSynthesizeRes,

        /** 玩家道具流水查询*/
        ["player.protocol.getitemrecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerItemRecordsRes,

        /** 查询邮件列表*/
        ["mail.protocol.getmails"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetMailsRes,

        /** 邮件标记已读*/
        ["mail.protocol.readmail"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ReadMailRes,

        /** 邮件删除（批量）*/
        ["mail.protocol.deletemails"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.DeleteMailRes,

        /** 邮件领取附件（单个）*/
        ["mail.protocol.claimmailattachment"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ClaimMailAttachmentRes,

        /** 邮件领取附件（批量）*/
        ["mail.protocol.claimmailsattachment"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ClaimMailsAttachmentRes,

        /** 开盒子*/
        ["logic.protocol.itemboxopen"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerOpenBoxRes,

        /** 发送赠送邮件（道具）*/
        ["logic.protocol.sendgivemail"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SendGiveMailRes,

        /** 卡牌升级（品质）*/
        ["logic.protocol.battlecardupgrade"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleCardUpgradeRes,

        /** 卡组新增*/
        ["logic.protocol.adddeck"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckAttrsRes,

        /** 查询卡组*/
        ["logic.protocol.getplayerdecks"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerDecksRes,

        /** 查询卡组卡牌数据*/
        ["logic.protocol.getdeckcards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetDeckCardsRes,

        /** 设置卡组卡牌（可同时设置卡组属性）*/
        ["logic.protocol.setdeckcards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckCardsRes,

        /** 卡组修改（属性）*/
        ["logic.protocol.setdeckattrs"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckAttrsRes,

        /** 设置默认卡组*/
        ["logic.protocol.setdeckdefault"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SetDeckDefaultRes,

        /** 删除卡组*/
        ["logic.protocol.deletedeck"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.DelDeckRes,

        /** 启程宝匣奖励查询*/
        ["logic.protocol.getprocessboxrewards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetProcessBoxRewardsRes,

        /** 启程宝匣开启*/
        ["logic.protocol.processboxopen"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ProcessBoxOpenRes,

        /** 玩家等级奖励领取*/
        ["logic.protocol.playerlevelrewardclaim"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerLevelRewardClaimRes,

        /** 玩家等级奖励查询*/
        ["logic.protocol.getplayerlevelrewards"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPlayerLevelRewardsRes,

        /** 手动刷新每日任务*/
        ["logic.protocol.refreshdailytask"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.RefreshDailyTaskRes,

        /** 获取手动已刷新每日任务次数*/
        ["logic.protocol.getrefreshdailytasktimes"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetRefreshDailyTaskTimesRes,

        /** 查询头像列表*/
        ["logic.protocol.getavatarinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerGetAvatarInfosRes,

        /** 设置头像信息*/
        ["logic.protocol.setavatarinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerSetAvatarInfosRes,

        /** 查询卡背列表*/
        ["logic.protocol.getcardbackinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerGetCardBackInfosRes,

        /** 设置卡背信息*/
        ["logic.protocol.setcardbackinfos"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerSetCardBackInfosRes,

        /** 领取初始卡组*/
        ["logic.protocol.noobcardsclaim"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerNoobCardsClaimRes,

        /** 商城购买道具*/
        ["shop.protocol.buyitem"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ShopBuyItemRes,

        /** 商城幸运抽奖*/
        ["shop.protocol.dolucky"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ShopDoLuckyRes,

        /** 商城查询索引*/
        ["shop.protocol.getindex"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.ShopGetIndexRes,

        /** 交易行查询挂单（道具）*/
        ["market.protocol.getmakeritemorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetMakerItemOrdersRes,

        /** 交易行搜索订单（道具）*/
        ["market.protocol.searchitemorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SearchMarketItemOrdersRes,

        /** 交易行上架订单（道具）*/
        ["market.protocol.makeitemorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MakeItemOrderRes,

        /** 交易行成交订单（道具）*/
        ["market.protocol.takeitemorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.TakeItemOrderRes,

        /** 交易行取消订单（道具）*/
        ["market.protocol.cancelitemorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CancelItemOrderRes,

        /** 交易行查询挂单吃单（卡牌）*/
        ["market.protocol.getcardorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetCardOrdersRes,

        /** 交易行搜索订单（卡牌）*/
        ["market.protocol.searchcardorders"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.SearchMarketCardOrdersRes,

        /** 交易行上架求购订单（卡牌）*/
        ["market.protocol.makecardbuyorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MakeCardOrderRes,

        /** 交易行上架出售订单（卡牌）*/
        ["market.protocol.makecardsellorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MakeCardOrderRes,

        /** 交易行成交订单（卡牌）*/
        ["market.protocol.takecardorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.TakeCardOrderRes,

        /** 交易行取消订单（卡牌）*/
        ["market.protocol.cancelcardorder"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CancelCardOrderRes,

        /** 匹配发起*/
        ["match.protocol.matchmaking"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MatchMakingRes,

        /** 匹配取消*/
        ["match.protocol.matchcancel"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MatchCancelRes,

        /** 查询排位赛战斗记录（最近20场）*/
        ["pvp.protocol.getpvprankbattlerecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankBattleRecordsRes,

        /** 查询星元对战战斗记录（最近20场）*/
        ["pvp.protocol.getpvpstarbattlerecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpStarBattleRecordsRes,

        /** 查询排位赛排行榜*/
        ["pvp.protocol.getpvpranking"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankingRes,

        /** 查询排位信息*/
        ["pvp.protocol.getpvprankinfo"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankInfoRes,

        /** 查询排位等级奖励记录*/
        ["pvp.protocol.getranklevelreward"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetPvpRankLevelRewardRes,

        /** 领取排位等级奖励*/
        ["pvp.protocol.ranklevelrewardclaim"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PvpRankLevelRewardClaimRes,

        /** 创建用户自定义房间*/
        ["battle_mgr.protocol.createbattlemgruserroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CreateBattleMgrUserRoomRes,

        /** 获取回放信息*/
        ["battle_mgr.protocol.getbattlereplayroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetBattleReplayRoomRes,

        /** 获取玩家最近战斗记录*/
        ["battle_mgr.protocol.getbattlerecentrecords"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetBattleRecentRecordsRes,

        /** 创建回放房间*/
        ["battle_mgr.protocol.createbattlereplayroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.CreateBattleReplayRoomRes,

        /** 尝试退出之前任何房间以解除状态锁定*/
        ["battle_mgr.protocol.leaveallbattleroom"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.LeaveAllBattleRoomRes,

        /** 获取最后有效的房间摘要*/
        ["battle_mgr.protocol.getlastbattleroomsummary"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.GetLastBattleRoomSummaryRes,

        /** 房间保活*/
        ["battle.protocol.battleroomping"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomPingRes,

        /** 加入房间*/
        ["battle.protocol.battleroomenter"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomEnterRes,

        /** 离开房间*/
        ["battle.protocol.battleroomleave"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomLeaveRes,

        /** 加倍*/
        ["battle.protocol.battleroomdouble"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomDoubleRes,

        /** 战斗房间确认操作输入*/
        ["battle.protocol.battleroomconfirmopinput"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomConfirmOpInputRes,

        /** 战斗房间取消操作输入*/
        ["battle.protocol.battleroomcancelopinput"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomCancelOpInputRes,

        /** 战斗房间客户端表演结束*/
        ["battle.protocol.battleroomroundshowend"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomRoundShowEndRes,

        /** 客户端通知服务器结算播报完成*/
        ["battle.protocol.battleroomsettlementend"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomSettlementEndRes,

        /** 客户端通知服务器重传当前回合数据*/
        ["battle.protocol.battleroomroundretransmission"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomRoundRetransmissionRes,

        /** 用户信息变更推送*/
        ["UserInfoChangePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.UserInfoChangePush,

        /** 登录玩家数据推送*/
        ["PlayerLoginPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerLoginPush,

        /** 道具数量变更推送*/
        ["PlayerItemsChangedPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerItemsChangedPush,

        /** 任务变更推送*/
        ["PlayerTasksChangedPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerTasksChangedPush,

        /** 玩家卡牌变更推送*/
        ["PlayerBattleCardChangePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerBattleCardChangePush,

        /** 玩家收藏经验变更推送*/
        ["PlayerLevelExpChangedPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerLevelExpChangedPush,

        /** 权益信息推送*/
        ["PlayerBenefitInfoPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerBenefitInfoPush,

        /** 有新邮件提醒推送*/
        ["NewMailPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.NewMailPush,

        /** 玩家风控等级推送*/
        ["RiskLevelPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.RiskLevelPush,

        /** 跑马灯消息推送*/
        ["MarqueeMsgsPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MarqueeMsgsPush,

        /** 交易行挂单（道具）消息推送*/
        ["MarketItemOrderMakePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MarketItemOrderMakePush,

        /** 交易行吃单（道具）消息推送*/
        ["MarketItemOrderTakePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MarketItemOrderTakePush,

        /** 交易行取消挂单（道具）消息推送*/
        ["MarketItemOrderCancelledPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MarketItemOrderCancelledPush,

        /** 交易行挂单（卡牌）消息推送*/
        ["MarketCardOrderMakePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MarketCardOrderMakePush,

        /** 交易行吃单（卡牌）消息推送*/
        ["MarketCardOrderTakePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MarketCardOrderTakePush,

        /** 交易行取消挂单（卡牌）消息推送*/
        ["MarketCardOrderCancelledPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MarketCardOrderCancelledPush,

        /** 玩家默认卡组消息推送*/
        ["PlayerDefaultDeckPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerDefaultDeckPush,

        /** 玩家每日任务刷新次数变更消息推送*/
        ["PlayerDailyTaskRefreshTimesChangePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerDailyTaskRefreshTimesChangePush,

        /** 玩家新头像取得消息推送*/
        ["PlayerNewAvatarPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerNewAvatarPush,

        /** 玩家新卡背取得消息推送*/
        ["PlayerNewCardBackPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerNewCardBackPush,

        /** 匹配结果消息推送*/
        ["MatchMakingPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.MatchMakingPush,

        /** 玩家登录时PVP消息推送*/
        ["PlayerPvpInfoPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerPvpInfoPush,

        /** 玩家登录时PVP星元对战消息推送*/
        ["PlayerPvpStarInfoPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerPvpStarInfoPush,

        /** PVP排位赛战斗结算消息推送*/
        ["PlayerPvpRankBattleSettlePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerPvpRankBattleSettlePush,

        /** PVP星元对战战斗结算消息推送*/
        ["PlayerPvpStarBattleSettlePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PlayerPvpStarBattleSettlePush,

        /** PVP排位赛季切换消息推送*/
        ["PvpRankSeasonChangedPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PvpRankSeasonChangedPush,

        /** PVP星元对战赛季切换消息推送*/
        ["PvpStarSeasonChangedPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.PvpStarSeasonChangedPush,

        /** 战斗房间操作输出推送*/
        ["BattleRoomOpOutputPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomOpOutputPush,

        /** 战斗房间确认状态推送*/
        ["BattleRoomConfirmOpInputPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomConfirmOpInputPush,

        /** 房间内推送玩家非游戏信息*/
        ["BattleRoomPlayersPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomPlayersPush,

        /** 房间内推送玩家发送的表情*/
        ["BattleRoomExpressionPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomExpressionPush,

        /** 推送自己加入房间*/
        ["BattleRoomEnterPush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomEnterPush,

        /** 推送自己离开房间*/
        ["BattleRoomLeavePush"]: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
          error: Error()
        }), proto) : proto).pb.BattleRoomLeavePush
      });

      _export("default", _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37b72d1211f09724399dd73fd6b8f219445c74c4.js.map