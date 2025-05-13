System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, easing, instantiate, js, Label, path, RichText, sp, Sprite, SpriteFrame, tween, UIOpacity, v3, Panel, EventMgr, Evt_Card_Add, Evt_Card_Chage, Evt_Hide_Scene, Evt_Player_Level_Update, Evt_Show_Scene, CardInfoStateType, CfgMgr, PlayerData, VList, CardClassItem, card_quality, ResMgr, roleimage, CostItem, Req, Route, Session, CardAwardItem, ItemUtil, Card, HaveItem, Goto, MsgPanel, CardInfoPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Add(extras) {
    _reporterNs.report("Evt_Card_Add", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Chage(extras) {
    _reporterNs.report("Evt_Card_Chage", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Hide_Scene(extras) {
    _reporterNs.report("Evt_Hide_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Player_Level_Update(extras) {
    _reporterNs.report("Evt_Player_Level_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Show_Scene(extras) {
    _reporterNs.report("Evt_Show_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardInfoStateType(extras) {
    _reporterNs.report("CardInfoStateType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdBattleCardDelivery(extras) {
    _reporterNs.report("StdBattleCardDelivery", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCardUpgrade(extras) {
    _reporterNs.report("StdCardUpgrade", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCardUpgradeShow(extras) {
    _reporterNs.report("StdCardUpgradeShow", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPlayerLevelAward(extras) {
    _reporterNs.report("StdPlayerLevelAward", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardClassItem(extras) {
    _reporterNs.report("CardClassItem", "./CardClassItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcard_quality(extras) {
    _reporterNs.report("card_quality", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroleimage(extras) {
    _reporterNs.report("roleimage", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostItem(extras) {
    _reporterNs.report("CostItem", "../common/CostItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardAwardItem(extras) {
    _reporterNs.report("CardAwardItem", "./CardAwardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHaveItem(extras) {
    _reporterNs.report("HaveItem", "../common/HaveItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  _export("CardInfoPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      easing = _cc.easing;
      instantiate = _cc.instantiate;
      js = _cc.js;
      Label = _cc.Label;
      path = _cc.path;
      RichText = _cc.RichText;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
      Evt_Card_Add = _unresolved_3.Evt_Card_Add;
      Evt_Card_Chage = _unresolved_3.Evt_Card_Chage;
      Evt_Hide_Scene = _unresolved_3.Evt_Hide_Scene;
      Evt_Player_Level_Update = _unresolved_3.Evt_Player_Level_Update;
      Evt_Show_Scene = _unresolved_3.Evt_Show_Scene;
    }, function (_unresolved_4) {
      CardInfoStateType = _unresolved_4.CardInfoStateType;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      VList = _unresolved_7.VList;
    }, function (_unresolved_8) {
      CardClassItem = _unresolved_8.CardClassItem;
    }, function (_unresolved_9) {
      card_quality = _unresolved_9.card_quality;
      ResMgr = _unresolved_9.ResMgr;
      roleimage = _unresolved_9.roleimage;
    }, function (_unresolved_10) {
      CostItem = _unresolved_10.CostItem;
    }, function (_unresolved_11) {
      Req = _unresolved_11.Req;
      Route = _unresolved_11.Route;
    }, function (_unresolved_12) {
      Session = _unresolved_12.Session;
    }, function (_unresolved_13) {
      CardAwardItem = _unresolved_13.CardAwardItem;
    }, function (_unresolved_14) {
      ItemUtil = _unresolved_14.ItemUtil;
    }, function (_unresolved_15) {
      Card = _unresolved_15.Card;
    }, function (_unresolved_16) {
      HaveItem = _unresolved_16.HaveItem;
    }, function (_unresolved_17) {
      Goto = _unresolved_17.Goto;
    }, function (_unresolved_18) {
      MsgPanel = _unresolved_18.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b681UFIBNByLuBbG4mG8VQ", "CardInfoPanel", undefined);

      __checkObsolete__(['Button', 'easing', 'EventTouch', 'Input', 'instantiate', 'js', 'Label', 'Node', 'path', 'RichText', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'v3']);

      _export("CardInfoPanel", CardInfoPanel = class CardInfoPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/cards/CardInfoPanel";
          this.quility = void 0;
          this.roleImg = void 0;
          this.creatorBtn = void 0;
          this.addBtn = void 0;
          this.delBtn = void 0;
          this.fillBtn = void 0;
          this.changeBtn = void 0;
          this.upLevelBtn = void 0;
          this.buyBtn = void 0;
          this.classNameLab = void 0;
          this.cardClassList = void 0;
          this.descLab = void 0;
          this.frameNameLab = void 0;
          this.frameDescLab = void 0;
          this.frameIcon = void 0;
          this.upgradeCont = void 0;
          this.upgradeHaveItemCont = void 0;
          this.upgradeTempHaveItem = void 0;
          this.notLvCont = void 0;
          this.lvCont = void 0;
          this.qualLab = void 0;
          this.addExpLab = void 0;
          this.lastBtn = void 0;
          this.nextBtn = void 0;
          this.costCont = void 0;
          this.upgradeBtn = void 0;
          this.upgradeMaksBtn = void 0;
          this.upgradeCloseBtn = void 0;
          this.tipsLab = void 0;
          this.awardCardList = void 0;
          this.upgradeResultCont = void 0;
          this.upgradeResultMaskBtn = void 0;
          this.upgradeResultCard = void 0;
          this.upgradeResultEffect = void 0;
          this.stdCard = void 0;
          this.upgradeList = void 0;
          this.selectCardData = void 0;
          this.cardClassDatas = void 0;
          this.awardCardDatas = void 0;
          this.targetQual = void 0;
          this.callback = void 0;
          this.type = void 0;
          this.consumeIdList = void 0;
          this.consumeNumList = void 0;
          this.curLvResult = void 0;
        }

        onLoad() {
          this.creatorBtn = this.find("bodyCont/creatorBtn", Button);
          this.addBtn = this.find("bodyCont/addBtn", Button);
          this.delBtn = this.find("bodyCont/delBtn", Button);
          this.fillBtn = this.find("bodyCont/fillBtn", Button);
          this.changeBtn = this.find("bodyCont/changeBtn", Button);
          this.upLevelBtn = this.find("bodyCont/upLevelBtn", Button);
          this.buyBtn = this.find("bodyCont/buyBtn", Button);
          this.quility = this.find("bodyCont/quility", Sprite);
          this.roleImg = this.find("bodyCont/roleImg", Sprite);
          this.classNameLab = this.find("infoCont/classNameLab", Label);
          this.cardClassList = this.find("infoCont/cardClassList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardClassList.updateCell = this.updateCardCalssCell.bind(this);
          this.cardClassList.selectCondCheck = this.selectCondCheck.bind(this);
          this.cardClassList.selectCell = this.selectCardCalssCell.bind(this);
          this.descLab = this.find("infoCont/cardDescCont/descLab", RichText);
          this.frameIcon = this.find("infoCont/frameCont/frameIcon", Sprite);
          this.frameNameLab = this.find("infoCont/frameCont/frameNameLab", Label);
          this.frameDescLab = this.find("infoCont/frameCont/frameDescLab", RichText);
          this.upgradeCont = this.find("upgradeCont");
          this.upgradeHaveItemCont = this.find("upgradeCont/haveItemCont");
          this.upgradeTempHaveItem = this.upgradeHaveItemCont.children.shift();
          this.upgradeCloseBtn = this.find("upgradeCont/cont/closeBtn", Button);
          this.upgradeMaksBtn = this.find("upgradeCont/mask", Button);
          this.notLvCont = this.find("upgradeCont/cont/notLvCont");
          this.lvCont = this.find("upgradeCont/cont/lvCont");
          this.qualLab = this.find("upgradeCont/cont/lvCont/qualLab", Label);
          this.addExpLab = this.find("upgradeCont/cont/lvCont/expCont/addExpLab", Label);
          this.lastBtn = this.find("upgradeCont/cont/lvCont/lastBtn", Button);
          this.nextBtn = this.find("upgradeCont/cont/lvCont/nextBtn", Button);
          this.costCont = this.find("upgradeCont/cont/lvCont/costCont");
          this.upgradeBtn = this.find("upgradeCont/cont/lvCont/upgradeBtn", Button);
          this.tipsLab = this.find("upgradeCont/cont/awardCont/tipsLab", RichText);
          this.awardCardList = this.find("upgradeCont/cont/awardCont/awardCardList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.awardCardList.updateCell = this.updateAwardCardCell.bind(this);
          this.awardCardList.clickCell = this.awardCardClick.bind(this);
          this.upgradeResultCont = this.find("upgradeResultCont");
          this.upgradeResultMaskBtn = this.find("upgradeResultCont/mask", Button);
          this.upgradeResultCard = this.find("upgradeResultCont/Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.upgradeResultEffect = this.find("upgradeResultCont/effect").getComponent(sp.Skeleton);
          this.creatorBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.addBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.delBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.fillBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.changeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.upLevelBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.buyBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.upgradeMaksBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.upgradeCloseBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.lastBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.nextBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.upgradeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.upgradeResultMaskBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.CloseBy("mask");
          this.CloseBy("closeBtn");
          this.upgradeCont.active = false;
          this.upgradeResultCont.active = false;
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Hide_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Hide_Scene({
            error: Error()
          }), Evt_Hide_Scene) : Evt_Hide_Scene, js.getClassName(this));
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Chage === void 0 ? (_reportPossibleCrUseOfEvt_Card_Chage({
            error: Error()
          }), Evt_Card_Chage) : Evt_Card_Chage, this.onUpdateCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Add === void 0 ? (_reportPossibleCrUseOfEvt_Card_Add({
            error: Error()
          }), Evt_Card_Add) : Evt_Card_Add, this.onAddCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Player_Level_Update === void 0 ? (_reportPossibleCrUseOfEvt_Player_Level_Update({
            error: Error()
          }), Evt_Player_Level_Update) : Evt_Player_Level_Update, this.onLevelUpdate, this); // Session.Send(Protocol.getplayerdecks)
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Show_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Show_Scene({
            error: Error()
          }), Evt_Show_Scene) : Evt_Show_Scene, js.getClassByName(this));
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Chage === void 0 ? (_reportPossibleCrUseOfEvt_Card_Chage({
            error: Error()
          }), Evt_Card_Chage) : Evt_Card_Chage, this.onUpdateCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Add === void 0 ? (_reportPossibleCrUseOfEvt_Card_Add({
            error: Error()
          }), Evt_Card_Add) : Evt_Card_Add, this.onAddCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Player_Level_Update === void 0 ? (_reportPossibleCrUseOfEvt_Player_Level_Update({
            error: Error()
          }), Evt_Player_Level_Update) : Evt_Player_Level_Update, this.onLevelUpdate, this);
        }

        flush(data, type, callback, isShowUp) {
          if (isShowUp === void 0) {
            isShowUp = false;
          }

          this.upgradeCont.active = isShowUp;
          this.type = type;
          this.callback = callback;
          this.initCardClass(data.id, data.cardId);
        }

        onLevelUpdate(result) {
          this.curLvResult = result;
        }

        onUpdateCard(cardData, change) {
          this.scheduleOnce(() => {
            if (this.selectCardData.id == cardData.id) {
              this.initCardClass(this.selectCardData.id, this.selectCardData.cardId);
              this.showUpgradeResult(cardData, change);
            }
          }, 0.1);
        }

        onAddCard(cardData) {
          if (!this.awardCardDatas) return;
          var isUpdate = false;

          for (var data of this.awardCardDatas) {
            if (data.cardId == cardData.cardId) {
              isUpdate = true;
              break;
            }
          }

          if (isUpdate) {
            this.initAwardCard();
          }
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.upLevelBtn:
              this.onShowUpgrade();
              break;

            case this.buyBtn:
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("TradePanel");
              this.Hide();
              break;

            case this.creatorBtn:
              this.callback(this.selectCardData);
              this.Hide();
              break;

            case this.addBtn:
              this.callback();
              this.Hide();
              break;

            case this.delBtn:
              this.callback();
              this.Hide();
              break;

            case this.fillBtn:
              break;

            case this.changeBtn:
              break;

            case this.upgradeMaksBtn:
            case this.upgradeCloseBtn:
              this.upgradeCont.active = false;
              this.targetQual = this.selectCardData.quality;
              this.updateQual();
              break;

            case this.lastBtn:
              this.targetQual--;
              this.updateShowQual();
              break;

            case this.nextBtn:
              this.targetQual++;
              this.updateShowQual();
              break;

            case this.upgradeBtn:
              this.toUpgrade();
              break;

            case this.upgradeResultMaskBtn:
              this.closeUpgradeResult();
              break;

            default:
              break;
          }
        }

        toUpgrade() {
          if (!(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CheckThingConsumes(null, this.consumeIdList, this.consumeNumList, true)) {
            return;
          }

          if (this.selectCardData.quality < this.upgradeList.length) {
            this.curLvResult = null;
            var nextLv = this.upgradeList[this.selectCardData.quality];
            var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["logic.protocol.battlecardupgrade"]();
            data.cardId = this.selectCardData.id;
            data.targetQuality = this.targetQual;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.battlecardupgrade"], data);
            console.log("发送卡牌升级----id" + this.selectCardData.id + " cardId--->" + this.selectCardData.cardId + " quality---->" + nextLv.Quality);
          }
        }

        closeUpgradeResult() {
          this.upgradeResultCont.active = false;

          if (this.curLvResult) {
            //有升级
            if (this.curLvResult.levelAfter > this.curLvResult.levelBefore) {
              var lvAwardList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetPlayerLevelArwardList();

              for (var lvAward of lvAwardList) {
                if (lvAward.stdPlayerLevel.Level > this.curLvResult.levelBefore && lvAward.stdPlayerLevel.Level <= this.curLvResult.levelAfter) {
                  (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                    error: Error()
                  }), Goto) : Goto)("CardCollectPanel", this.curLvResult);
                  break;
                }
              }
            }
          }
        }

        initCardClass(id, cardId) {
          this.cardClassDatas = [];
          var cards = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardClassList(cardId);
          var getCards = [];
          var notCards = [];

          for (var std of cards) {
            var cardClassCardDatas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCardDataByCfgId(std.ID);
            var isGet = false;

            for (var data of cardClassCardDatas) {
              getCards[getCards.length] = data;
              isGet = true;
            }

            if (!isGet) {
              var cardClassData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CreateCardData(std.ID);
              notCards[notCards.length] = cardClassData;
            }
          }

          getCards.sort((a, b) => {
            return a.cardId - b.cardId;
          });
          notCards.sort((a, b) => {
            return a.cardId - b.cardId;
          });
          this.cardClassDatas = getCards.concat(notCards);
          var selectIndex = 0;
          var classInfo;

          for (var index = 0; index < this.cardClassDatas.length; index++) {
            classInfo = this.cardClassDatas[index];

            if (classInfo.id == id && cardId) {
              selectIndex = index;
              break;
            }
          }

          this.cardClassList.cellCount = this.cardClassDatas.length;
          this.cardClassList.selectIndex(selectIndex);
        }

        updateCardCalssCell(cell, cellInfo) {
          var cellCom = cell.getComponent(_crd && CardClassItem === void 0 ? (_reportPossibleCrUseOfCardClassItem({
            error: Error()
          }), CardClassItem) : CardClassItem) || cell.addComponent(_crd && CardClassItem === void 0 ? (_reportPossibleCrUseOfCardClassItem({
            error: Error()
          }), CardClassItem) : CardClassItem);
          cell.getChildByPath("select").active = cellInfo.isSelect;
          var scale = cellInfo.isSelect ? 1 : 0.8;
          cell.setScale(scale, scale, 1);
          cellCom.SetData(this.cardClassDatas[cellInfo.index]);
        }

        selectCondCheck(cell, cellInfo) {
          var data = this.cardClassDatas[cellInfo.index];
          if (data.id) return true;
          if (cell) (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("暂未获得此卡");
          return false;
        }

        selectCardCalssCell(cell, cellInfo, lastCell, lastInfo) {
          if (cell) {
            cell.getChildByPath("select").active = cellInfo.isSelect;
            var scale = cellInfo.isSelect ? 1 : 0.8;
            cell.setScale(scale, scale, 1);
          }

          if (lastCell && lastInfo) {
            lastCell.getChildByPath("select").active = lastInfo.isSelect;

            var _scale = lastInfo.isSelect ? 1 : 0.8;

            lastCell.setScale(_scale, _scale, 1);
          }

          this.selectCard(this.cardClassDatas[cellInfo.index]);
        }

        selectCard(data) {
          this.selectCardData = data;
          this.upgradeList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardUpgradeList(this.selectCardData.cardId);
          var curUpgrade = this.upgradeList[this.selectCardData.quality - 1];
          this.stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard(this.selectCardData.cardId);
          this.targetQual = curUpgrade ? curUpgrade.Quality : 1;
          this.descLab.string = this.stdCard.SkillDesc || ""; // this.classNameLab.string = this.stdCard.ClassName;

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && roleimage === void 0 ? (_reportPossibleCrUseOfroleimage({
            error: Error()
          }), roleimage) : roleimage, this.stdCard.CardView, "spriteFrame"), SpriteFrame, res => {
            this.roleImg.spriteFrame = res;
          });
          this.updateQual();
          this.updateBtnState();

          if (this.upgradeCont.active) {
            this.onShowUpgrade();
          }
        }

        updateQual() {
          var stdQual = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardUpgradeShow(this.targetQual);
          this.frameNameLab.string = stdQual.Title;
          this.frameDescLab.string = stdQual.FrameDesc;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
            error: Error()
          }), card_quality) : card_quality, stdQual.Picture, "spriteFrame"), SpriteFrame, res => {
            this.frameIcon.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
            error: Error()
          }), card_quality) : card_quality, "bodyframe_" + this.targetQual, "spriteFrame"), SpriteFrame, res => {
            this.quility.spriteFrame = res;
          });
          this.qualLab.string = stdQual.Title;
        }

        updateBtnState() {
          this.addBtn.node.active = false;
          this.changeBtn.node.active = false;
          this.creatorBtn.node.active = false;
          this.delBtn.node.active = false;
          this.fillBtn.node.active = false;
          this.upLevelBtn.node.active = this.selectCardData.id != "";
          this.buyBtn.node.active = this.selectCardData.id != "";

          if (this.selectCardData.id != "") {
            switch (this.type) {
              case (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                error: Error()
              }), CardInfoStateType) : CardInfoStateType).Add:
                this.addBtn.node.active = true;
                break;

              case (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                error: Error()
              }), CardInfoStateType) : CardInfoStateType).Change:
                this.changeBtn.node.active = true;
                break;

              case (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                error: Error()
              }), CardInfoStateType) : CardInfoStateType).Creator:
                this.creatorBtn.node.active = true;
                break;

              case (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                error: Error()
              }), CardInfoStateType) : CardInfoStateType).Del:
                this.delBtn.node.active = true;
                break;

              case (_crd && CardInfoStateType === void 0 ? (_reportPossibleCrUseOfCardInfoStateType({
                error: Error()
              }), CardInfoStateType) : CardInfoStateType).Fill:
                this.fillBtn.node.active = true;
                break;

              default:
                break;
            }
          }
        }

        onShowUpgrade() {
          this.upgradeCont.active = true;
          var nextUpgrade = this.upgradeList[this.selectCardData.quality]; //满级

          if (!nextUpgrade) {
            this.lvCont.active = false;
            this.notLvCont.active = true;
          } else {
            this.lvCont.active = true;
            this.notLvCont.active = false;
            this.targetQual += 1;
            this.updateShowQual();
          }

          this.initUpgradeHaveItem();
          this.initAwardCard();
        }

        initUpgradeHaveItem() {
          var itemIds = [];
          var itemMap = {};

          if (this.upgradeList) {
            for (var std of this.upgradeList) {
              if (std.CostItemIds) {
                for (var id of std.CostItemIds) {
                  if (!itemMap[id]) {
                    itemIds.push(id);
                    itemMap[id] = id;
                  }
                }
              }
            }
          }

          var maxLen = Math.max(this.upgradeHaveItemCont.children.length, itemIds.length);
          var node;
          var haveItem;

          for (var index = 0; index < maxLen; index++) {
            node = this.upgradeHaveItemCont.children[index];

            if (!node) {
              node = instantiate(this.upgradeTempHaveItem);
              node.parent = this.upgradeHaveItemCont;
            }

            if (index < itemIds.length) {
              node.active = true;
              haveItem = node.getComponent(_crd && HaveItem === void 0 ? (_reportPossibleCrUseOfHaveItem({
                error: Error()
              }), HaveItem) : HaveItem) || node.addComponent(_crd && HaveItem === void 0 ? (_reportPossibleCrUseOfHaveItem({
                error: Error()
              }), HaveItem) : HaveItem);
              haveItem.SetData(itemIds[index]);
            } else {
              node.active = false;
            }
          }
        }

        updateAwardCardCell(cell, cellInfo) {
          var cellCom = cell.getComponent(_crd && CardAwardItem === void 0 ? (_reportPossibleCrUseOfCardAwardItem({
            error: Error()
          }), CardAwardItem) : CardAwardItem) || cell.addComponent(_crd && CardAwardItem === void 0 ? (_reportPossibleCrUseOfCardAwardItem({
            error: Error()
          }), CardAwardItem) : CardAwardItem);
          cellCom.SetData(this.awardCardDatas[cellInfo.index]);
        }

        awardCardClick(cell, cellInfo) {
          var data = this.awardCardDatas[cellInfo.index];

          if (data.id) {
            this.initCardClass(data.id, data.cardId);
            this.onShowUpgrade();
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("暂未获得此卡");
          }
        }

        initAwardCard() {
          this.awardCardDatas = [];
          var stdEndUpgrade = this.upgradeList[this.upgradeList.length - 1];
          var awardCardId = [];

          if (stdEndUpgrade && stdEndUpgrade.RewardTypes) {
            for (var index = 0; index < stdEndUpgrade.RewardTypes.length; index++) {
              if (stdEndUpgrade.RewardTypes[index] == 3) {
                var stdCardDeliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetBattleCardDeliver(stdEndUpgrade.RewardIds[index]);
                if (stdCardDeliver) awardCardId[awardCardId.length] = stdCardDeliver.CardID;
              }
            }
          }

          if (awardCardId.length) {
            this.tipsLab.node.active = true;
            this.tipsLab.string = stdEndUpgrade.show;
          } else {
            this.tipsLab.node.active = false;
          }

          for (var _index = 0; _index < awardCardId.length; _index++) {
            var cardId = awardCardId[_index];
            var cardDatas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCardDataByCfgId(cardId);

            if (cardDatas.length) {
              for (var data of cardDatas) {
                this.awardCardDatas[this.awardCardDatas.length] = data;
              }
            } else {
              var cardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CreateCardData(cardId);
              this.awardCardDatas[this.awardCardDatas.length] = cardData;
            }
          }

          this.awardCardList.cellCount = this.awardCardDatas.length;
        }

        updateShowQual() {
          if (this.targetQual <= this.selectCardData.quality + 1) {
            this.targetQual = this.selectCardData.quality + 1;
            this.lastBtn.node.active = false;
          } else {
            this.lastBtn.node.active = true;
          }

          if (this.targetQual >= this.upgradeList.length) {
            this.targetQual = this.upgradeList.length;
            this.nextBtn.node.active = false;
          } else {
            this.nextBtn.node.active = true;
          }

          this.updateQual();
          this.consumeIdList = [];
          this.consumeNumList = [];
          var itemIdMap = {};
          var addExp = 0;
          var curQual = this.selectCardData.quality;
          var stdUpgrade;

          for (var index = 0; index < this.upgradeList.length; index++) {
            stdUpgrade = this.upgradeList[index];

            if (stdUpgrade.Quality > curQual && stdUpgrade.Quality <= this.targetQual) {
              for (var j = 0; j < stdUpgrade.CostItemIds.length; j++) {
                var id = stdUpgrade.CostItemIds[j];
                var num = stdUpgrade.CostItemNums[j];
                var itemData = itemIdMap[id];

                if (itemData) {
                  itemData.num = itemData.num + num;
                } else {
                  itemData = {
                    index: j,
                    num: num
                  };
                  itemIdMap[id] = itemData;
                }

                this.consumeIdList[itemData.index] = id;
                this.consumeNumList[itemData.index] = itemData.num;
              }

              addExp += stdUpgrade.exp;
            }
          }

          this.addExpLab.string = "+" + addExp;
          var costItem;
          var node;

          for (var _index2 = 0; _index2 < this.costCont.children.length; _index2++) {
            node = this.costCont.children[_index2];

            if (_index2 < this.consumeIdList.length) {
              node.active = true;
              costItem = node.getComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
                error: Error()
              }), CostItem) : CostItem) || node.addComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
                error: Error()
              }), CostItem) : CostItem);
              costItem.SetData(this.consumeIdList[_index2], this.consumeNumList[_index2], "#D64532");
            } else {
              node.active = false;
            }
          }
        }

        showUpgradeResult(cardData, change) {
          var oldCardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CreateCardData(cardData.cardId, cardData.quality - change, cardData.id);
          this.upgradeResultCont.active = true;
          this.upgradeResultMaskBtn.interactable = false;
          this.upgradeResultEffect.node.active = false;
          this.upgradeResultCard.SetData(oldCardData);
          var maskOpacity = this.upgradeResultMaskBtn.node.getComponent(UIOpacity);
          maskOpacity.opacity = 0;
          this.upgradeResultCard.node.scale = v3(0.5, 0.5);
          tween(maskOpacity).to(0.33, {
            opacity: 127.5
          }).start();
          tween(this.upgradeResultCard.node).to(0.5, {
            scale: v3(1.5, 1.5)
          }, {
            easing: easing.backOut
          }).call(() => {
            var animNam = "LVUP_" + cardData.quality;
            this.upgradeResultEffect.node.active = true;
            this.upgradeResultEffect.clearAnimation();
            this.upgradeResultEffect.setAnimation(0, animNam, false);
          }).start();
          this.scheduleOnce(() => {
            this.upgradeResultCard.SetData(cardData);
          }, 2.5);
          tween(this.upgradeResultCard.node).delay(2.5).to(0.75, {
            scale: v3(2, 2)
          }, {
            easing: easing.backOut
          }).to(0.75, {
            scale: v3(1.5, 1.5)
          }, {
            easing: easing.backOut
          }).call(() => {
            this.upgradeResultMaskBtn.interactable = true;
          }).start();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b030e027d1c573d3119633e94ce1db0ecfc87f20.js.map