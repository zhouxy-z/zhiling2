System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39", "__unresolved_40", "__unresolved_41", "__unresolved_42", "__unresolved_43", "__unresolved_44", "__unresolved_45", "__unresolved_46", "__unresolved_47", "__unresolved_48", "__unresolved_49", "__unresolved_50", "__unresolved_51", "__unresolved_52", "__unresolved_53", "__unresolved_54", "__unresolved_55", "__unresolved_56", "__unresolved_57", "__unresolved_58", "__unresolved_59", "__unresolved_60", "__unresolved_61", "__unresolved_62", "__unresolved_63", "__unresolved_64", "__unresolved_65", "__unresolved_66", "__unresolved_67", "__unresolved_68", "__unresolved_69", "__unresolved_70", "__unresolved_71", "__unresolved_72", "__unresolved_73", "__unresolved_74", "__unresolved_75", "__unresolved_76", "__unresolved_77", "__unresolved_78", "__unresolved_79", "__unresolved_80", "__unresolved_81", "__unresolved_82", "__unresolved_83", "__unresolved_84", "__unresolved_85", "__unresolved_86", "__unresolved_87", "__unresolved_88", "__unresolved_89"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, GuideLay, BagPanel, ComposePanel, OpenBoxPanel, CardCollectPanel, CardGroupCreatorTips, cardGroupSettingTips, CardInfoPanel, CardsPanel, CardTipsPanel, ClickTipsPanel, ItemTips, MsgPanel, RewardTips, Tips, Tips2, Tips3, FightLogPanel, FightUI, SeasonSettlePanel, FriendBindOrUnbindPanel, FriendIncomeListPanel, FriendInfoPanel, FriendInviteListPanel, FriendListPanel, FriendPanel, HomePanel, LoginPanel, ServerPanel, MailDeletePanel, MailPanel, MainPanel, TopUI, GatePassBuyPanel, RightsPanel, RoomPanel, ShopBuyPanel, ShopLuckyBuyPanel, ShopPanel, ShopRefreshPanel, TaskPanel, BuyPanel, SortPanel, TradeCreateOrderPanel, TradePanel, UserEditInfoPanel, UserHeadPanel, UserInfoPanel, VSCardGroupPanel, VSModelPanel, VSPanel, VSSeasonFightLogPanel, VSSeasonTipsPanel, VSSectionAwardPanel, VSStarElementFightLogPanel, Out_AddCard, Out_AddCardToDeck, Out_AddCardToHand, Out_AddCardToTerrain, Out_BattleRoomOpOutput_TerrainData, Out_CardDataChange, Out_CardDeckFrontToHandTail, Out_CardTerrainState, Out_CopyCard, Out_DeckToDel, Out_DeckToDrop, Out_DelToHand, Out_DropToHand, Out_EffectSkill, Out_HandToDeck, Out_HandToDel, Out_HandToDrop, Out_HandToTerrain, Out_LockZone, Out_NewRound, Out_Nullify, Out_Peek, Out_PlayerEnergy, Out_PlayerPower, Out_Protect, Out_RetransmissionRound, Out_RoomDestroy, Out_RoundData, Out_Settlement, Out_TerrainToDel, Out_TerrainToDrop, Out_TerrainToTerrain, Out_WaitPlayerInput, Out_WaitPlayerShow, RegisterClass, _crd;

  function _reportPossibleCrUseOfGuideLay(extras) {
    _reporterNs.report("GuideLay", "./manager/Guide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagPanel(extras) {
    _reporterNs.report("BagPanel", "./module/bag/BagPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComposePanel(extras) {
    _reporterNs.report("ComposePanel", "./module/bag/ComposePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenBoxPanel(extras) {
    _reporterNs.report("OpenBoxPanel", "./module/bag/OpenBoxPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardCollectPanel(extras) {
    _reporterNs.report("CardCollectPanel", "./module/cardCollect/CardCollectPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupCreatorTips(extras) {
    _reporterNs.report("CardGroupCreatorTips", "./module/cards/CardGroupCreatorTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcardGroupSettingTips(extras) {
    _reporterNs.report("cardGroupSettingTips", "./module/cards/cardGroupSettingTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardInfoPanel(extras) {
    _reporterNs.report("CardInfoPanel", "./module/cards/CardInfoPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardsPanel(extras) {
    _reporterNs.report("CardsPanel", "./module/cards/CardsPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardTipsPanel(extras) {
    _reporterNs.report("CardTipsPanel", "./module/common/CardTipsPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClickTipsPanel(extras) {
    _reporterNs.report("ClickTipsPanel", "./module/common/ClickTipsPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTips(extras) {
    _reporterNs.report("ItemTips", "./module/common/ItemTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "./module/common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "./module/common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "./module/common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips2(extras) {
    _reporterNs.report("Tips2", "./module/common/Tips2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips3(extras) {
    _reporterNs.report("Tips3", "./module/common/Tips3", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLogPanel(extras) {
    _reporterNs.report("FightLogPanel", "./module/fight/FightLogPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUI(extras) {
    _reporterNs.report("FightUI", "./module/fight/FightUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSeasonSettlePanel(extras) {
    _reporterNs.report("SeasonSettlePanel", "./module/fight/SeasonSettlePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendBindOrUnbindPanel(extras) {
    _reporterNs.report("FriendBindOrUnbindPanel", "./module/friend/FriendBindOrUnbindPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendIncomeListPanel(extras) {
    _reporterNs.report("FriendIncomeListPanel", "./module/friend/FriendIncomeListPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendInfoPanel(extras) {
    _reporterNs.report("FriendInfoPanel", "./module/friend/FriendInfoPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendInviteListPanel(extras) {
    _reporterNs.report("FriendInviteListPanel", "./module/friend/FriendInviteListPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendListPanel(extras) {
    _reporterNs.report("FriendListPanel", "./module/friend/FriendListPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendPanel(extras) {
    _reporterNs.report("FriendPanel", "./module/friend/FriendPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHomePanel(extras) {
    _reporterNs.report("HomePanel", "./module/home/HomePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginPanel(extras) {
    _reporterNs.report("LoginPanel", "./module/login/LoginPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerPanel(extras) {
    _reporterNs.report("ServerPanel", "./module/login/ServerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailDeletePanel(extras) {
    _reporterNs.report("MailDeletePanel", "./module/mail/MailDeletePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailPanel(extras) {
    _reporterNs.report("MailPanel", "./module/mail/MailPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainPanel(extras) {
    _reporterNs.report("MainPanel", "./module/main/MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopUI(extras) {
    _reporterNs.report("TopUI", "./module/main/TopUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGatePassBuyPanel(extras) {
    _reporterNs.report("GatePassBuyPanel", "./module/rights/GatePassBuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightsPanel(extras) {
    _reporterNs.report("RightsPanel", "./module/rights/RightsPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomPanel(extras) {
    _reporterNs.report("RoomPanel", "./module/room/RoomPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopBuyPanel(extras) {
    _reporterNs.report("ShopBuyPanel", "./module/shop/ShopBuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopLuckyBuyPanel(extras) {
    _reporterNs.report("ShopLuckyBuyPanel", "./module/shop/ShopLuckyBuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopPanel(extras) {
    _reporterNs.report("ShopPanel", "./module/shop/ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopRefreshPanel(extras) {
    _reporterNs.report("ShopRefreshPanel", "./module/shop/ShopRefreshPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskPanel(extras) {
    _reporterNs.report("TaskPanel", "./module/task/TaskPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyPanel(extras) {
    _reporterNs.report("BuyPanel", "./module/trade/BuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSortPanel(extras) {
    _reporterNs.report("SortPanel", "./module/trade/SortPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradeCreateOrderPanel(extras) {
    _reporterNs.report("TradeCreateOrderPanel", "./module/trade/TradeCreateOrderPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradePanel(extras) {
    _reporterNs.report("TradePanel", "./module/trade/TradePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserEditInfoPanel(extras) {
    _reporterNs.report("UserEditInfoPanel", "./module/userInfo/UserEditInfoPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserHeadPanel(extras) {
    _reporterNs.report("UserHeadPanel", "./module/userInfo/UserHeadPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfoPanel(extras) {
    _reporterNs.report("UserInfoPanel", "./module/userInfo/UserInfoPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSCardGroupPanel(extras) {
    _reporterNs.report("VSCardGroupPanel", "./module/vs/VSCardGroupPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSModelPanel(extras) {
    _reporterNs.report("VSModelPanel", "./module/vs/VSModelPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSPanel(extras) {
    _reporterNs.report("VSPanel", "./module/vs/VSPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSSeasonFightLogPanel(extras) {
    _reporterNs.report("VSSeasonFightLogPanel", "./module/vs/VSSeasonFightLogPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSSeasonTipsPanel(extras) {
    _reporterNs.report("VSSeasonTipsPanel", "./module/vs/VSSeasonTipsPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSSectionAwardPanel(extras) {
    _reporterNs.report("VSSectionAwardPanel", "./module/vs/VSSectionAwardPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSStarElementFightLogPanel(extras) {
    _reporterNs.report("VSStarElementFightLogPanel", "./module/vs/VSStarElementFightLogPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_AddCard(extras) {
    _reporterNs.report("Out_AddCard", "./module/fight/opOutput/Out_AddCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_AddCardToDeck(extras) {
    _reporterNs.report("Out_AddCardToDeck", "./module/fight/opOutput/Out_AddCardToDeck", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_AddCardToHand(extras) {
    _reporterNs.report("Out_AddCardToHand", "./module/fight/opOutput/Out_AddCardToHand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_AddCardToTerrain(extras) {
    _reporterNs.report("Out_AddCardToTerrain", "./module/fight/opOutput/Out_AddCardToTerrain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_BattleRoomOpOutput_TerrainData(extras) {
    _reporterNs.report("Out_BattleRoomOpOutput_TerrainData", "./module/fight/opOutput/Out_BattleRoomOpOutput_TerrainData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_CardDataChange(extras) {
    _reporterNs.report("Out_CardDataChange", "./module/fight/opOutput/Out_CardDataChange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_CardDeckFrontToHandTail(extras) {
    _reporterNs.report("Out_CardDeckFrontToHandTail", "./module/fight/opOutput/Out_CardDeckFrontToHandTail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_CardTerrainState(extras) {
    _reporterNs.report("Out_CardTerrainState", "./module/fight/opOutput/Out_CardTerrainState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_CopyCard(extras) {
    _reporterNs.report("Out_CopyCard", "./module/fight/opOutput/Out_CopyCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_DeckToDel(extras) {
    _reporterNs.report("Out_DeckToDel", "./module/fight/opOutput/Out_DeckToDel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_DeckToDrop(extras) {
    _reporterNs.report("Out_DeckToDrop", "./module/fight/opOutput/Out_DeckToDrop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_DelToHand(extras) {
    _reporterNs.report("Out_DelToHand", "./module/fight/opOutput/Out_DelToHand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_DropToHand(extras) {
    _reporterNs.report("Out_DropToHand", "./module/fight/opOutput/Out_DropToHand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_EffectSkill(extras) {
    _reporterNs.report("Out_EffectSkill", "./module/fight/opOutput/Out_EffectSkill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_HandToDeck(extras) {
    _reporterNs.report("Out_HandToDeck", "./module/fight/opOutput/Out_HandToDeck", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_HandToDel(extras) {
    _reporterNs.report("Out_HandToDel", "./module/fight/opOutput/Out_HandToDel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_HandToDrop(extras) {
    _reporterNs.report("Out_HandToDrop", "./module/fight/opOutput/Out_HandToDrop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_HandToTerrain(extras) {
    _reporterNs.report("Out_HandToTerrain", "./module/fight/opOutput/Out_HandToTerrain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_LockZone(extras) {
    _reporterNs.report("Out_LockZone", "./module/fight/opOutput/Out_LockZone", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_NewRound(extras) {
    _reporterNs.report("Out_NewRound", "./module/fight/opOutput/Out_NewRound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_Nullify(extras) {
    _reporterNs.report("Out_Nullify", "./module/fight/opOutput/Out_Nullify", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_Peek(extras) {
    _reporterNs.report("Out_Peek", "./module/fight/opOutput/Out_Peek", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_PlayerEnergy(extras) {
    _reporterNs.report("Out_PlayerEnergy", "./module/fight/opOutput/Out_PlayerEnergy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_PlayerPower(extras) {
    _reporterNs.report("Out_PlayerPower", "./module/fight/opOutput/Out_PlayerPower", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_Protect(extras) {
    _reporterNs.report("Out_Protect", "./module/fight/opOutput/Out_Protect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_RetransmissionRound(extras) {
    _reporterNs.report("Out_RetransmissionRound", "./module/fight/opOutput/Out_RetransmissionRound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_RoomDestroy(extras) {
    _reporterNs.report("Out_RoomDestroy", "./module/fight/opOutput/Out_RoomDestroy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_RoundData(extras) {
    _reporterNs.report("Out_RoundData", "./module/fight/opOutput/Out_RoundData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_Settlement(extras) {
    _reporterNs.report("Out_Settlement", "./module/fight/opOutput/Out_Settlement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_TerrainToDel(extras) {
    _reporterNs.report("Out_TerrainToDel", "./module/fight/opOutput/Out_TerrainToDel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_TerrainToDrop(extras) {
    _reporterNs.report("Out_TerrainToDrop", "./module/fight/opOutput/Out_TerrainToDrop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_TerrainToTerrain(extras) {
    _reporterNs.report("Out_TerrainToTerrain", "./module/fight/opOutput/Out_TerrainToTerrain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_WaitPlayerInput(extras) {
    _reporterNs.report("Out_WaitPlayerInput", "./module/fight/opOutput/Out_WaitPlayerInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOut_WaitPlayerShow(extras) {
    _reporterNs.report("Out_WaitPlayerShow", "./module/fight/opOutput/Out_WaitPlayerShow", _context.meta, extras);
  }

  _export("RegisterClass", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      GuideLay = _unresolved_2.GuideLay;
    }, function (_unresolved_3) {
      BagPanel = _unresolved_3.BagPanel;
    }, function (_unresolved_4) {
      ComposePanel = _unresolved_4.ComposePanel;
    }, function (_unresolved_5) {
      OpenBoxPanel = _unresolved_5.OpenBoxPanel;
    }, function (_unresolved_6) {
      CardCollectPanel = _unresolved_6.CardCollectPanel;
    }, function (_unresolved_7) {
      CardGroupCreatorTips = _unresolved_7.CardGroupCreatorTips;
    }, function (_unresolved_8) {
      cardGroupSettingTips = _unresolved_8.cardGroupSettingTips;
    }, function (_unresolved_9) {
      CardInfoPanel = _unresolved_9.CardInfoPanel;
    }, function (_unresolved_10) {
      CardsPanel = _unresolved_10.CardsPanel;
    }, function (_unresolved_11) {
      CardTipsPanel = _unresolved_11.CardTipsPanel;
    }, function (_unresolved_12) {
      ClickTipsPanel = _unresolved_12.ClickTipsPanel;
    }, function (_unresolved_13) {
      ItemTips = _unresolved_13.ItemTips;
    }, function (_unresolved_14) {
      MsgPanel = _unresolved_14.MsgPanel;
    }, function (_unresolved_15) {
      RewardTips = _unresolved_15.RewardTips;
    }, function (_unresolved_16) {
      Tips = _unresolved_16.Tips;
    }, function (_unresolved_17) {
      Tips2 = _unresolved_17.Tips2;
    }, function (_unresolved_18) {
      Tips3 = _unresolved_18.Tips3;
    }, function (_unresolved_19) {
      FightLogPanel = _unresolved_19.FightLogPanel;
    }, function (_unresolved_20) {
      FightUI = _unresolved_20.FightUI;
    }, function (_unresolved_21) {
      SeasonSettlePanel = _unresolved_21.SeasonSettlePanel;
    }, function (_unresolved_22) {
      FriendBindOrUnbindPanel = _unresolved_22.FriendBindOrUnbindPanel;
    }, function (_unresolved_23) {
      FriendIncomeListPanel = _unresolved_23.FriendIncomeListPanel;
    }, function (_unresolved_24) {
      FriendInfoPanel = _unresolved_24.FriendInfoPanel;
    }, function (_unresolved_25) {
      FriendInviteListPanel = _unresolved_25.FriendInviteListPanel;
    }, function (_unresolved_26) {
      FriendListPanel = _unresolved_26.FriendListPanel;
    }, function (_unresolved_27) {
      FriendPanel = _unresolved_27.FriendPanel;
    }, function (_unresolved_28) {
      HomePanel = _unresolved_28.HomePanel;
    }, function (_unresolved_29) {
      LoginPanel = _unresolved_29.LoginPanel;
    }, function (_unresolved_30) {
      ServerPanel = _unresolved_30.ServerPanel;
    }, function (_unresolved_31) {
      MailDeletePanel = _unresolved_31.MailDeletePanel;
    }, function (_unresolved_32) {
      MailPanel = _unresolved_32.MailPanel;
    }, function (_unresolved_33) {
      MainPanel = _unresolved_33.MainPanel;
    }, function (_unresolved_34) {
      TopUI = _unresolved_34.TopUI;
    }, function (_unresolved_35) {
      GatePassBuyPanel = _unresolved_35.GatePassBuyPanel;
    }, function (_unresolved_36) {
      RightsPanel = _unresolved_36.RightsPanel;
    }, function (_unresolved_37) {
      RoomPanel = _unresolved_37.RoomPanel;
    }, function (_unresolved_38) {
      ShopBuyPanel = _unresolved_38.ShopBuyPanel;
    }, function (_unresolved_39) {
      ShopLuckyBuyPanel = _unresolved_39.ShopLuckyBuyPanel;
    }, function (_unresolved_40) {
      ShopPanel = _unresolved_40.ShopPanel;
    }, function (_unresolved_41) {
      ShopRefreshPanel = _unresolved_41.ShopRefreshPanel;
    }, function (_unresolved_42) {
      TaskPanel = _unresolved_42.TaskPanel;
    }, function (_unresolved_43) {
      BuyPanel = _unresolved_43.BuyPanel;
    }, function (_unresolved_44) {
      SortPanel = _unresolved_44.SortPanel;
    }, function (_unresolved_45) {
      TradeCreateOrderPanel = _unresolved_45.TradeCreateOrderPanel;
    }, function (_unresolved_46) {
      TradePanel = _unresolved_46.TradePanel;
    }, function (_unresolved_47) {
      UserEditInfoPanel = _unresolved_47.UserEditInfoPanel;
    }, function (_unresolved_48) {
      UserHeadPanel = _unresolved_48.UserHeadPanel;
    }, function (_unresolved_49) {
      UserInfoPanel = _unresolved_49.UserInfoPanel;
    }, function (_unresolved_50) {
      VSCardGroupPanel = _unresolved_50.VSCardGroupPanel;
    }, function (_unresolved_51) {
      VSModelPanel = _unresolved_51.VSModelPanel;
    }, function (_unresolved_52) {
      VSPanel = _unresolved_52.VSPanel;
    }, function (_unresolved_53) {
      VSSeasonFightLogPanel = _unresolved_53.VSSeasonFightLogPanel;
    }, function (_unresolved_54) {
      VSSeasonTipsPanel = _unresolved_54.VSSeasonTipsPanel;
    }, function (_unresolved_55) {
      VSSectionAwardPanel = _unresolved_55.VSSectionAwardPanel;
    }, function (_unresolved_56) {
      VSStarElementFightLogPanel = _unresolved_56.VSStarElementFightLogPanel;
    }, function (_unresolved_57) {
      Out_AddCard = _unresolved_57.Out_AddCard;
    }, function (_unresolved_58) {
      Out_AddCardToDeck = _unresolved_58.Out_AddCardToDeck;
    }, function (_unresolved_59) {
      Out_AddCardToHand = _unresolved_59.Out_AddCardToHand;
    }, function (_unresolved_60) {
      Out_AddCardToTerrain = _unresolved_60.Out_AddCardToTerrain;
    }, function (_unresolved_61) {
      Out_BattleRoomOpOutput_TerrainData = _unresolved_61.Out_BattleRoomOpOutput_TerrainData;
    }, function (_unresolved_62) {
      Out_CardDataChange = _unresolved_62.Out_CardDataChange;
    }, function (_unresolved_63) {
      Out_CardDeckFrontToHandTail = _unresolved_63.Out_CardDeckFrontToHandTail;
    }, function (_unresolved_64) {
      Out_CardTerrainState = _unresolved_64.Out_CardTerrainState;
    }, function (_unresolved_65) {
      Out_CopyCard = _unresolved_65.Out_CopyCard;
    }, function (_unresolved_66) {
      Out_DeckToDel = _unresolved_66.Out_DeckToDel;
    }, function (_unresolved_67) {
      Out_DeckToDrop = _unresolved_67.Out_DeckToDrop;
    }, function (_unresolved_68) {
      Out_DelToHand = _unresolved_68.Out_DelToHand;
    }, function (_unresolved_69) {
      Out_DropToHand = _unresolved_69.Out_DropToHand;
    }, function (_unresolved_70) {
      Out_EffectSkill = _unresolved_70.Out_EffectSkill;
    }, function (_unresolved_71) {
      Out_HandToDeck = _unresolved_71.Out_HandToDeck;
    }, function (_unresolved_72) {
      Out_HandToDel = _unresolved_72.Out_HandToDel;
    }, function (_unresolved_73) {
      Out_HandToDrop = _unresolved_73.Out_HandToDrop;
    }, function (_unresolved_74) {
      Out_HandToTerrain = _unresolved_74.Out_HandToTerrain;
    }, function (_unresolved_75) {
      Out_LockZone = _unresolved_75.Out_LockZone;
    }, function (_unresolved_76) {
      Out_NewRound = _unresolved_76.Out_NewRound;
    }, function (_unresolved_77) {
      Out_Nullify = _unresolved_77.Out_Nullify;
    }, function (_unresolved_78) {
      Out_Peek = _unresolved_78.Out_Peek;
    }, function (_unresolved_79) {
      Out_PlayerEnergy = _unresolved_79.Out_PlayerEnergy;
    }, function (_unresolved_80) {
      Out_PlayerPower = _unresolved_80.Out_PlayerPower;
    }, function (_unresolved_81) {
      Out_Protect = _unresolved_81.Out_Protect;
    }, function (_unresolved_82) {
      Out_RetransmissionRound = _unresolved_82.Out_RetransmissionRound;
    }, function (_unresolved_83) {
      Out_RoomDestroy = _unresolved_83.Out_RoomDestroy;
    }, function (_unresolved_84) {
      Out_RoundData = _unresolved_84.Out_RoundData;
    }, function (_unresolved_85) {
      Out_Settlement = _unresolved_85.Out_Settlement;
    }, function (_unresolved_86) {
      Out_TerrainToDel = _unresolved_86.Out_TerrainToDel;
    }, function (_unresolved_87) {
      Out_TerrainToDrop = _unresolved_87.Out_TerrainToDrop;
    }, function (_unresolved_88) {
      Out_TerrainToTerrain = _unresolved_88.Out_TerrainToTerrain;
    }, function (_unresolved_89) {
      Out_WaitPlayerInput = _unresolved_89.Out_WaitPlayerInput;
    }, function (_unresolved_90) {
      Out_WaitPlayerShow = _unresolved_90.Out_WaitPlayerShow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ab55R8X2pMtZAhz5X6oTg4", "RegisterClass", undefined);

      __checkObsolete__(['js']);

      _export("RegisterClass", RegisterClass = class RegisterClass {
        constructor() {
          js.setClassName("GuideLay", _crd && GuideLay === void 0 ? (_reportPossibleCrUseOfGuideLay({
            error: Error()
          }), GuideLay) : GuideLay);
          js.setClassName("BagPanel", _crd && BagPanel === void 0 ? (_reportPossibleCrUseOfBagPanel({
            error: Error()
          }), BagPanel) : BagPanel);
          js.setClassName("ComposePanel", _crd && ComposePanel === void 0 ? (_reportPossibleCrUseOfComposePanel({
            error: Error()
          }), ComposePanel) : ComposePanel);
          js.setClassName("OpenBoxPanel", _crd && OpenBoxPanel === void 0 ? (_reportPossibleCrUseOfOpenBoxPanel({
            error: Error()
          }), OpenBoxPanel) : OpenBoxPanel);
          js.setClassName("CardCollectPanel", _crd && CardCollectPanel === void 0 ? (_reportPossibleCrUseOfCardCollectPanel({
            error: Error()
          }), CardCollectPanel) : CardCollectPanel);
          js.setClassName("CardGroupCreatorTips", _crd && CardGroupCreatorTips === void 0 ? (_reportPossibleCrUseOfCardGroupCreatorTips({
            error: Error()
          }), CardGroupCreatorTips) : CardGroupCreatorTips);
          js.setClassName("cardGroupSettingTips", _crd && cardGroupSettingTips === void 0 ? (_reportPossibleCrUseOfcardGroupSettingTips({
            error: Error()
          }), cardGroupSettingTips) : cardGroupSettingTips);
          js.setClassName("CardInfoPanel", _crd && CardInfoPanel === void 0 ? (_reportPossibleCrUseOfCardInfoPanel({
            error: Error()
          }), CardInfoPanel) : CardInfoPanel);
          js.setClassName("CardsPanel", _crd && CardsPanel === void 0 ? (_reportPossibleCrUseOfCardsPanel({
            error: Error()
          }), CardsPanel) : CardsPanel);
          js.setClassName("CardTipsPanel", _crd && CardTipsPanel === void 0 ? (_reportPossibleCrUseOfCardTipsPanel({
            error: Error()
          }), CardTipsPanel) : CardTipsPanel);
          js.setClassName("ClickTipsPanel", _crd && ClickTipsPanel === void 0 ? (_reportPossibleCrUseOfClickTipsPanel({
            error: Error()
          }), ClickTipsPanel) : ClickTipsPanel);
          js.setClassName("ItemTips", _crd && ItemTips === void 0 ? (_reportPossibleCrUseOfItemTips({
            error: Error()
          }), ItemTips) : ItemTips);
          js.setClassName("MsgPanel", _crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel);
          js.setClassName("RewardTips", _crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
            error: Error()
          }), RewardTips) : RewardTips);
          js.setClassName("Tips", _crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
            error: Error()
          }), Tips) : Tips);
          js.setClassName("Tips2", _crd && Tips2 === void 0 ? (_reportPossibleCrUseOfTips2({
            error: Error()
          }), Tips2) : Tips2);
          js.setClassName("Tips3", _crd && Tips3 === void 0 ? (_reportPossibleCrUseOfTips3({
            error: Error()
          }), Tips3) : Tips3);
          js.setClassName("FightLogPanel", _crd && FightLogPanel === void 0 ? (_reportPossibleCrUseOfFightLogPanel({
            error: Error()
          }), FightLogPanel) : FightLogPanel);
          js.setClassName("FightUI", _crd && FightUI === void 0 ? (_reportPossibleCrUseOfFightUI({
            error: Error()
          }), FightUI) : FightUI);
          js.setClassName("SeasonSettlePanel", _crd && SeasonSettlePanel === void 0 ? (_reportPossibleCrUseOfSeasonSettlePanel({
            error: Error()
          }), SeasonSettlePanel) : SeasonSettlePanel);
          js.setClassName("FriendBindOrUnbindPanel", _crd && FriendBindOrUnbindPanel === void 0 ? (_reportPossibleCrUseOfFriendBindOrUnbindPanel({
            error: Error()
          }), FriendBindOrUnbindPanel) : FriendBindOrUnbindPanel);
          js.setClassName("FriendIncomeListPanel", _crd && FriendIncomeListPanel === void 0 ? (_reportPossibleCrUseOfFriendIncomeListPanel({
            error: Error()
          }), FriendIncomeListPanel) : FriendIncomeListPanel);
          js.setClassName("FriendInfoPanel", _crd && FriendInfoPanel === void 0 ? (_reportPossibleCrUseOfFriendInfoPanel({
            error: Error()
          }), FriendInfoPanel) : FriendInfoPanel);
          js.setClassName("FriendInviteListPanel", _crd && FriendInviteListPanel === void 0 ? (_reportPossibleCrUseOfFriendInviteListPanel({
            error: Error()
          }), FriendInviteListPanel) : FriendInviteListPanel);
          js.setClassName("FriendListPanel", _crd && FriendListPanel === void 0 ? (_reportPossibleCrUseOfFriendListPanel({
            error: Error()
          }), FriendListPanel) : FriendListPanel);
          js.setClassName("FriendPanel", _crd && FriendPanel === void 0 ? (_reportPossibleCrUseOfFriendPanel({
            error: Error()
          }), FriendPanel) : FriendPanel);
          js.setClassName("HomePanel", _crd && HomePanel === void 0 ? (_reportPossibleCrUseOfHomePanel({
            error: Error()
          }), HomePanel) : HomePanel);
          js.setClassName("LoginPanel", _crd && LoginPanel === void 0 ? (_reportPossibleCrUseOfLoginPanel({
            error: Error()
          }), LoginPanel) : LoginPanel);
          js.setClassName("ServerPanel", _crd && ServerPanel === void 0 ? (_reportPossibleCrUseOfServerPanel({
            error: Error()
          }), ServerPanel) : ServerPanel);
          js.setClassName("MailDeletePanel", _crd && MailDeletePanel === void 0 ? (_reportPossibleCrUseOfMailDeletePanel({
            error: Error()
          }), MailDeletePanel) : MailDeletePanel);
          js.setClassName("MailPanel", _crd && MailPanel === void 0 ? (_reportPossibleCrUseOfMailPanel({
            error: Error()
          }), MailPanel) : MailPanel);
          js.setClassName("MainPanel", _crd && MainPanel === void 0 ? (_reportPossibleCrUseOfMainPanel({
            error: Error()
          }), MainPanel) : MainPanel);
          js.setClassName("TopUI", _crd && TopUI === void 0 ? (_reportPossibleCrUseOfTopUI({
            error: Error()
          }), TopUI) : TopUI);
          js.setClassName("GatePassBuyPanel", _crd && GatePassBuyPanel === void 0 ? (_reportPossibleCrUseOfGatePassBuyPanel({
            error: Error()
          }), GatePassBuyPanel) : GatePassBuyPanel);
          js.setClassName("RightsPanel", _crd && RightsPanel === void 0 ? (_reportPossibleCrUseOfRightsPanel({
            error: Error()
          }), RightsPanel) : RightsPanel);
          js.setClassName("RoomPanel", _crd && RoomPanel === void 0 ? (_reportPossibleCrUseOfRoomPanel({
            error: Error()
          }), RoomPanel) : RoomPanel);
          js.setClassName("ShopBuyPanel", _crd && ShopBuyPanel === void 0 ? (_reportPossibleCrUseOfShopBuyPanel({
            error: Error()
          }), ShopBuyPanel) : ShopBuyPanel);
          js.setClassName("ShopLuckyBuyPanel", _crd && ShopLuckyBuyPanel === void 0 ? (_reportPossibleCrUseOfShopLuckyBuyPanel({
            error: Error()
          }), ShopLuckyBuyPanel) : ShopLuckyBuyPanel);
          js.setClassName("ShopPanel", _crd && ShopPanel === void 0 ? (_reportPossibleCrUseOfShopPanel({
            error: Error()
          }), ShopPanel) : ShopPanel);
          js.setClassName("ShopRefreshPanel", _crd && ShopRefreshPanel === void 0 ? (_reportPossibleCrUseOfShopRefreshPanel({
            error: Error()
          }), ShopRefreshPanel) : ShopRefreshPanel);
          js.setClassName("TaskPanel", _crd && TaskPanel === void 0 ? (_reportPossibleCrUseOfTaskPanel({
            error: Error()
          }), TaskPanel) : TaskPanel);
          js.setClassName("BuyPanel", _crd && BuyPanel === void 0 ? (_reportPossibleCrUseOfBuyPanel({
            error: Error()
          }), BuyPanel) : BuyPanel);
          js.setClassName("SortPanel", _crd && SortPanel === void 0 ? (_reportPossibleCrUseOfSortPanel({
            error: Error()
          }), SortPanel) : SortPanel);
          js.setClassName("TradeCreateOrderPanel", _crd && TradeCreateOrderPanel === void 0 ? (_reportPossibleCrUseOfTradeCreateOrderPanel({
            error: Error()
          }), TradeCreateOrderPanel) : TradeCreateOrderPanel);
          js.setClassName("TradePanel", _crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
            error: Error()
          }), TradePanel) : TradePanel);
          js.setClassName("UserEditInfoPanel", _crd && UserEditInfoPanel === void 0 ? (_reportPossibleCrUseOfUserEditInfoPanel({
            error: Error()
          }), UserEditInfoPanel) : UserEditInfoPanel);
          js.setClassName("UserHeadPanel", _crd && UserHeadPanel === void 0 ? (_reportPossibleCrUseOfUserHeadPanel({
            error: Error()
          }), UserHeadPanel) : UserHeadPanel);
          js.setClassName("UserInfoPanel", _crd && UserInfoPanel === void 0 ? (_reportPossibleCrUseOfUserInfoPanel({
            error: Error()
          }), UserInfoPanel) : UserInfoPanel);
          js.setClassName("VSCardGroupPanel", _crd && VSCardGroupPanel === void 0 ? (_reportPossibleCrUseOfVSCardGroupPanel({
            error: Error()
          }), VSCardGroupPanel) : VSCardGroupPanel);
          js.setClassName("VSModelPanel", _crd && VSModelPanel === void 0 ? (_reportPossibleCrUseOfVSModelPanel({
            error: Error()
          }), VSModelPanel) : VSModelPanel);
          js.setClassName("VSPanel", _crd && VSPanel === void 0 ? (_reportPossibleCrUseOfVSPanel({
            error: Error()
          }), VSPanel) : VSPanel);
          js.setClassName("VSSeasonFightLogPanel", _crd && VSSeasonFightLogPanel === void 0 ? (_reportPossibleCrUseOfVSSeasonFightLogPanel({
            error: Error()
          }), VSSeasonFightLogPanel) : VSSeasonFightLogPanel);
          js.setClassName("VSSeasonTipsPanel", _crd && VSSeasonTipsPanel === void 0 ? (_reportPossibleCrUseOfVSSeasonTipsPanel({
            error: Error()
          }), VSSeasonTipsPanel) : VSSeasonTipsPanel);
          js.setClassName("VSSectionAwardPanel", _crd && VSSectionAwardPanel === void 0 ? (_reportPossibleCrUseOfVSSectionAwardPanel({
            error: Error()
          }), VSSectionAwardPanel) : VSSectionAwardPanel);
          js.setClassName("VSStarElementFightLogPanel", _crd && VSStarElementFightLogPanel === void 0 ? (_reportPossibleCrUseOfVSStarElementFightLogPanel({
            error: Error()
          }), VSStarElementFightLogPanel) : VSStarElementFightLogPanel);
          js.setClassName("Out_AddCard", _crd && Out_AddCard === void 0 ? (_reportPossibleCrUseOfOut_AddCard({
            error: Error()
          }), Out_AddCard) : Out_AddCard);
          js.setClassName("Out_AddCardToDeck", _crd && Out_AddCardToDeck === void 0 ? (_reportPossibleCrUseOfOut_AddCardToDeck({
            error: Error()
          }), Out_AddCardToDeck) : Out_AddCardToDeck);
          js.setClassName("Out_AddCardToHand", _crd && Out_AddCardToHand === void 0 ? (_reportPossibleCrUseOfOut_AddCardToHand({
            error: Error()
          }), Out_AddCardToHand) : Out_AddCardToHand);
          js.setClassName("Out_AddCardToTerrain", _crd && Out_AddCardToTerrain === void 0 ? (_reportPossibleCrUseOfOut_AddCardToTerrain({
            error: Error()
          }), Out_AddCardToTerrain) : Out_AddCardToTerrain);
          js.setClassName("Out_BattleRoomOpOutput_TerrainData", _crd && Out_BattleRoomOpOutput_TerrainData === void 0 ? (_reportPossibleCrUseOfOut_BattleRoomOpOutput_TerrainData({
            error: Error()
          }), Out_BattleRoomOpOutput_TerrainData) : Out_BattleRoomOpOutput_TerrainData);
          js.setClassName("Out_CardDataChange", _crd && Out_CardDataChange === void 0 ? (_reportPossibleCrUseOfOut_CardDataChange({
            error: Error()
          }), Out_CardDataChange) : Out_CardDataChange);
          js.setClassName("Out_CardDeckFrontToHandTail", _crd && Out_CardDeckFrontToHandTail === void 0 ? (_reportPossibleCrUseOfOut_CardDeckFrontToHandTail({
            error: Error()
          }), Out_CardDeckFrontToHandTail) : Out_CardDeckFrontToHandTail);
          js.setClassName("Out_CardTerrainState", _crd && Out_CardTerrainState === void 0 ? (_reportPossibleCrUseOfOut_CardTerrainState({
            error: Error()
          }), Out_CardTerrainState) : Out_CardTerrainState);
          js.setClassName("Out_CopyCard", _crd && Out_CopyCard === void 0 ? (_reportPossibleCrUseOfOut_CopyCard({
            error: Error()
          }), Out_CopyCard) : Out_CopyCard);
          js.setClassName("Out_DeckToDel", _crd && Out_DeckToDel === void 0 ? (_reportPossibleCrUseOfOut_DeckToDel({
            error: Error()
          }), Out_DeckToDel) : Out_DeckToDel);
          js.setClassName("Out_DeckToDrop", _crd && Out_DeckToDrop === void 0 ? (_reportPossibleCrUseOfOut_DeckToDrop({
            error: Error()
          }), Out_DeckToDrop) : Out_DeckToDrop);
          js.setClassName("Out_DelToHand", _crd && Out_DelToHand === void 0 ? (_reportPossibleCrUseOfOut_DelToHand({
            error: Error()
          }), Out_DelToHand) : Out_DelToHand);
          js.setClassName("Out_DropToHand", _crd && Out_DropToHand === void 0 ? (_reportPossibleCrUseOfOut_DropToHand({
            error: Error()
          }), Out_DropToHand) : Out_DropToHand);
          js.setClassName("Out_EffectSkill", _crd && Out_EffectSkill === void 0 ? (_reportPossibleCrUseOfOut_EffectSkill({
            error: Error()
          }), Out_EffectSkill) : Out_EffectSkill);
          js.setClassName("Out_HandToDeck", _crd && Out_HandToDeck === void 0 ? (_reportPossibleCrUseOfOut_HandToDeck({
            error: Error()
          }), Out_HandToDeck) : Out_HandToDeck);
          js.setClassName("Out_HandToDel", _crd && Out_HandToDel === void 0 ? (_reportPossibleCrUseOfOut_HandToDel({
            error: Error()
          }), Out_HandToDel) : Out_HandToDel);
          js.setClassName("Out_HandToDrop", _crd && Out_HandToDrop === void 0 ? (_reportPossibleCrUseOfOut_HandToDrop({
            error: Error()
          }), Out_HandToDrop) : Out_HandToDrop);
          js.setClassName("Out_HandToTerrain", _crd && Out_HandToTerrain === void 0 ? (_reportPossibleCrUseOfOut_HandToTerrain({
            error: Error()
          }), Out_HandToTerrain) : Out_HandToTerrain);
          js.setClassName("Out_LockZone", _crd && Out_LockZone === void 0 ? (_reportPossibleCrUseOfOut_LockZone({
            error: Error()
          }), Out_LockZone) : Out_LockZone);
          js.setClassName("Out_NewRound", _crd && Out_NewRound === void 0 ? (_reportPossibleCrUseOfOut_NewRound({
            error: Error()
          }), Out_NewRound) : Out_NewRound);
          js.setClassName("Out_Nullify", _crd && Out_Nullify === void 0 ? (_reportPossibleCrUseOfOut_Nullify({
            error: Error()
          }), Out_Nullify) : Out_Nullify);
          js.setClassName("Out_Peek", _crd && Out_Peek === void 0 ? (_reportPossibleCrUseOfOut_Peek({
            error: Error()
          }), Out_Peek) : Out_Peek);
          js.setClassName("Out_PlayerEnergy", _crd && Out_PlayerEnergy === void 0 ? (_reportPossibleCrUseOfOut_PlayerEnergy({
            error: Error()
          }), Out_PlayerEnergy) : Out_PlayerEnergy);
          js.setClassName("Out_PlayerPower", _crd && Out_PlayerPower === void 0 ? (_reportPossibleCrUseOfOut_PlayerPower({
            error: Error()
          }), Out_PlayerPower) : Out_PlayerPower);
          js.setClassName("Out_Protect", _crd && Out_Protect === void 0 ? (_reportPossibleCrUseOfOut_Protect({
            error: Error()
          }), Out_Protect) : Out_Protect);
          js.setClassName("Out_RetransmissionRound", _crd && Out_RetransmissionRound === void 0 ? (_reportPossibleCrUseOfOut_RetransmissionRound({
            error: Error()
          }), Out_RetransmissionRound) : Out_RetransmissionRound);
          js.setClassName("Out_RoomDestroy", _crd && Out_RoomDestroy === void 0 ? (_reportPossibleCrUseOfOut_RoomDestroy({
            error: Error()
          }), Out_RoomDestroy) : Out_RoomDestroy);
          js.setClassName("Out_RoundData", _crd && Out_RoundData === void 0 ? (_reportPossibleCrUseOfOut_RoundData({
            error: Error()
          }), Out_RoundData) : Out_RoundData);
          js.setClassName("Out_Settlement", _crd && Out_Settlement === void 0 ? (_reportPossibleCrUseOfOut_Settlement({
            error: Error()
          }), Out_Settlement) : Out_Settlement);
          js.setClassName("Out_TerrainToDel", _crd && Out_TerrainToDel === void 0 ? (_reportPossibleCrUseOfOut_TerrainToDel({
            error: Error()
          }), Out_TerrainToDel) : Out_TerrainToDel);
          js.setClassName("Out_TerrainToDrop", _crd && Out_TerrainToDrop === void 0 ? (_reportPossibleCrUseOfOut_TerrainToDrop({
            error: Error()
          }), Out_TerrainToDrop) : Out_TerrainToDrop);
          js.setClassName("Out_TerrainToTerrain", _crd && Out_TerrainToTerrain === void 0 ? (_reportPossibleCrUseOfOut_TerrainToTerrain({
            error: Error()
          }), Out_TerrainToTerrain) : Out_TerrainToTerrain);
          js.setClassName("Out_WaitPlayerInput", _crd && Out_WaitPlayerInput === void 0 ? (_reportPossibleCrUseOfOut_WaitPlayerInput({
            error: Error()
          }), Out_WaitPlayerInput) : Out_WaitPlayerInput);
          js.setClassName("Out_WaitPlayerShow", _crd && Out_WaitPlayerShow === void 0 ? (_reportPossibleCrUseOfOut_WaitPlayerShow({
            error: Error()
          }), Out_WaitPlayerShow) : Out_WaitPlayerShow);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05e92f05b11cad3812f3ab65247926adff1d440e.js.map