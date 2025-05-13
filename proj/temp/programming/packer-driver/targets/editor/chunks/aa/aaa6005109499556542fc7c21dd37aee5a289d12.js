System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, path, RichText, Sprite, SpriteFrame, UITransform, CfgMgr, Panel, Card, PlayerData, EventMgr, Evt_Card_Chage, HaveItem, CostItem, card_quality, ResMgr, Req, Route, Session, VList, CardTitleItem, base, ClickTipsPanel, CardUpgradePanel, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Chage(extras) {
    _reporterNs.report("Evt_Card_Chage", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHaveItem(extras) {
    _reporterNs.report("HaveItem", "../common/HaveItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostItem(extras) {
    _reporterNs.report("CostItem", "../common/CostItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcard_quality(extras) {
    _reporterNs.report("card_quality", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardTitleItem(extras) {
    _reporterNs.report("CardTitleItem", "./CardTitleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClickTipsPanel(extras) {
    _reporterNs.report("ClickTipsPanel", "../common/ClickTipsPanel", _context.meta, extras);
  }

  _export("CardUpgradePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      path = _cc.path;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      Card = _unresolved_4.Card;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
      Evt_Card_Chage = _unresolved_6.Evt_Card_Chage;
    }, function (_unresolved_7) {
      HaveItem = _unresolved_7.HaveItem;
    }, function (_unresolved_8) {
      CostItem = _unresolved_8.CostItem;
    }, function (_unresolved_9) {
      card_quality = _unresolved_9.card_quality;
      ResMgr = _unresolved_9.ResMgr;
    }, function (_unresolved_10) {
      Req = _unresolved_10.Req;
      Route = _unresolved_10.Route;
    }, function (_unresolved_11) {
      Session = _unresolved_11.Session;
    }, function (_unresolved_12) {
      VList = _unresolved_12.VList;
    }, function (_unresolved_13) {
      CardTitleItem = _unresolved_13.CardTitleItem;
    }, function (_unresolved_14) {
      base = _unresolved_14.default;
    }, function (_unresolved_15) {
      ClickTipsPanel = _unresolved_15.ClickTipsPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7daceuNYm9FNqo6Uhmtutxh", "CardUpgradePanel", undefined);

      __checkObsolete__(['Button', 'Label', 'Node', 'path', 'RichText', 'Sprite', 'SpriteFrame', 'UITransform']);

      _export("CardUpgradePanel", CardUpgradePanel = class CardUpgradePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cards/CardUpgradePanel";
          this.skillDescLab = void 0;
          this.frameIcon = void 0;
          this.frameNameLab = void 0;
          this.haveItemCont = void 0;
          this.card = void 0;
          this.upgradeCont = void 0;
          this.notNextLvCont = void 0;
          this.expLab = void 0;
          this.qualLab = void 0;
          this.upLvBtn = void 0;
          this.nextLvBtn = void 0;
          this.upgradeBtn = void 0;
          this.costCont = void 0;
          this.cardClassList = void 0;
          this.awardCardList = void 0;
          this.notCardTips = void 0;
          this.tipsLab = void 0;
          this.upgradeList = void 0;
          this.curUpgrade = void 0;
          this.selectCardData = void 0;
          this.cardClassDatas = void 0;
          this.awardCardDatas = void 0;
        }

        onLoad() {
          this.skillDescLab = this.find("baseInfoCont/skillDescLab", RichText);
          this.frameIcon = this.find("baseInfoCont/frameCont/frameIcon", Sprite);
          this.frameNameLab = this.find("baseInfoCont/frameCont/frameNameLab", Label);
          this.card = this.find("curCardCont/Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.upgradeCont = this.find("curCardCont/upgradeCont");
          this.expLab = this.find("curCardCont/upgradeCont/addExp/expLab", Label);
          this.qualLab = this.find("curCardCont/upgradeCont/qualLab", Label);
          this.haveItemCont = this.find("haveItemCont");
          this.upLvBtn = this.find("curCardCont/upgradeCont/upLvBtn", Button);
          this.nextLvBtn = this.find("curCardCont/upgradeCont/nextLvBtn", Button);
          this.upgradeBtn = this.find("curCardCont/upgradeCont/upgradeBtn", Button);
          this.costCont = this.find("curCardCont/upgradeCont/upgradeBtn/costCont");
          this.notNextLvCont = this.find("curCardCont/notNextLvCont");
          this.cardClassList = this.find("cardCont/cardClassList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardClassList.updateCell = this.updateCardCalssCell.bind(this);
          this.cardClassList.selectCondCheck = this.selectCondCheck.bind(this);
          this.cardClassList.selectCell = this.selectCardCalssCell.bind(this);
          this.awardCardList = this.find("cardCont/awardCardList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.awardCardList.updateCell = this.updateAwardCardCell.bind(this);
          this.awardCardList.clickCell = this.awardCardClick.bind(this);
          this.notCardTips = this.find("notCardTips");
          this.tipsLab = this.find("notCardTips/tipsLab", Label);
          this.upLvBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.nextLvBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.upgradeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.CloseBy("mask");
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Chage === void 0 ? (_reportPossibleCrUseOfEvt_Card_Chage({
            error: Error()
          }), Evt_Card_Chage) : Evt_Card_Chage, this.onUpdateCard, this);
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Card_Chage === void 0 ? (_reportPossibleCrUseOfEvt_Card_Chage({
            error: Error()
          }), Evt_Card_Chage) : Evt_Card_Chage, this.onUpdateCard, this);
        }

        flush(id, cardId) {
          this.initCardClass(id, cardId);
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.upLvBtn:
              break;

            case this.nextLvBtn:
              break;

            case this.upgradeBtn:
              this.toUpgrade();
              break;

            default:
              break;
          }
        }

        selectCard(data) {
          this.selectCardData = data;
          this.upgradeList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardUpgradeList(this.selectCardData.cardId);
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCard(this.selectCardData.cardId);
          this.skillDescLab.string = cfg.SkillDesc || "";
          this.initHaveItem();
          this.curUpgrade = this.upgradeList[this.selectCardData.quality - 1];
          this.card.SetData(this.selectCardData);
          this.updateShow();
          this.initAwardCard();
        }

        toUpgrade() {
          if (this.selectCardData.quality < this.upgradeList.length) {
            let nextLv = this.upgradeList[this.selectCardData.quality];
            let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["logic.protocol.battlecardupgrade"]();
            data.cardId = this.selectCardData.id;
            data.targetQuality = nextLv.Quality;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.battlecardupgrade"], data);
            console.log("发送卡牌升级----id" + this.selectCardData.id + " cardId--->" + this.selectCardData.cardId + " quality---->" + nextLv.Quality);
          }
        }

        onUpdateCard() {
          if (this.selectCardData) {
            this.flush(this.selectCardData.id, this.selectCardData.cardId);
          }
        }

        updateShow() {
          let stdQual = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardUpgradeShow(this.curUpgrade.Quality);
          this.frameNameLab.string = stdQual.Title;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && card_quality === void 0 ? (_reportPossibleCrUseOfcard_quality({
            error: Error()
          }), card_quality) : card_quality, stdQual.Picture, "spriteFrame"), SpriteFrame, res => {
            this.frameIcon.spriteFrame = res;
          });
          let nextUpgrade = this.upgradeList[this.selectCardData.quality]; //满级

          if (!nextUpgrade) {
            this.upgradeCont.active = false;
            this.notNextLvCont.active = true;
          } else {
            this.upgradeCont.active = true;
            this.notNextLvCont.active = false;
            this.updateCost(nextUpgrade.CostItemIds, nextUpgrade.CostItemNums);
            let nextQual = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardUpgradeShow(nextUpgrade.Quality);
            this.qualLab.string = nextQual.Title;
            this.expLab.string = `+${nextUpgrade.exp}`;
          }
        }

        initHaveItem() {
          let haveItemIds = [];
          let map = {};

          for (let std of this.upgradeList) {
            for (let id of std.CostItemIds) {
              if (!map[id]) {
                haveItemIds[haveItemIds.length] = id;
              }
            }
          }

          let node;
          let haveItem;

          for (let index = 0; index < this.haveItemCont.children.length; index++) {
            node = this.haveItemCont.children[index];

            if (index < haveItemIds.length) {
              node.active = true;
              haveItem = node.getComponent(_crd && HaveItem === void 0 ? (_reportPossibleCrUseOfHaveItem({
                error: Error()
              }), HaveItem) : HaveItem) || node.addComponent(_crd && HaveItem === void 0 ? (_reportPossibleCrUseOfHaveItem({
                error: Error()
              }), HaveItem) : HaveItem);
              haveItem.SetData(haveItemIds[index]);
            } else {
              node.active = false;
            }
          }
        }

        updateCost(itemIds, itemNums) {
          let node;
          let costItem;

          for (let index = 0; index < this.costCont.children.length; index++) {
            node = this.costCont.children[index];

            if (index < itemIds.length) {
              node.active = true;
              costItem = node.getComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
                error: Error()
              }), CostItem) : CostItem) || node.addComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
                error: Error()
              }), CostItem) : CostItem);
              costItem.SetData(itemIds[index], itemNums[index], "#D64532");
            } else {
              node.active = false;
            }
          }
        }

        initAwardCard() {
          this.awardCardDatas = [];
          let stdEndUpgrade = this.upgradeList[this.upgradeList.length - 1];
          let awardCardId = [];

          if (stdEndUpgrade.RewardTypes) {
            for (let index = 0; index < stdEndUpgrade.RewardTypes.length; index++) {
              if (stdEndUpgrade.RewardTypes[index] == 3) {
                awardCardId[awardCardId.length] = stdEndUpgrade.RewardIds[index];
              }
            }
          }

          for (let index = 0; index < awardCardId.length; index++) {
            let cardDatas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCardDataByCfgId(awardCardId[index]);

            if (cardDatas.length) {
              for (let data of cardDatas) {
                this.awardCardDatas[this.awardCardDatas.length] = data;
              }
            } else {
              let cardData = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleCard.create();
              cardData.cardId = stdEndUpgrade.CardID;
              cardData.quality = 1, cardData.level = 1;
              cardData.exp = 0;
              this.awardCardDatas[this.awardCardDatas.length] = cardData;
            }
          }

          this.awardCardList.cellCount = this.awardCardDatas.length;
        }

        initCardClass(id, cardId) {
          this.cardClassDatas = [];
          let cards = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardClassList(cardId);
          let getCards = [];
          let notCards = [];

          for (let std of cards) {
            let cardClassCardDatas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCardDataByCfgId(std.ID);
            let isGet = false;

            for (let data of cardClassCardDatas) {
              getCards[getCards.length] = data;
              isGet = true;
            }

            if (!isGet) {
              let cardClassData = (_crd && base === void 0 ? (_reportPossibleCrUseOfbase({
                error: Error()
              }), base) : base).BattleCard.create();
              cardClassData.cardId = std.ID;
              cardClassData.quality = 1, cardClassData.level = 1;
              cardClassData.exp = 0;
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
          let selectIndex = 0;
          let classInfo;

          for (let index = 0; index < this.cardClassDatas.length; index++) {
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
          let cellCom = cell.getComponent(_crd && CardTitleItem === void 0 ? (_reportPossibleCrUseOfCardTitleItem({
            error: Error()
          }), CardTitleItem) : CardTitleItem) || cell.addComponent(_crd && CardTitleItem === void 0 ? (_reportPossibleCrUseOfCardTitleItem({
            error: Error()
          }), CardTitleItem) : CardTitleItem);
          cell.getChildByPath("Cards/cardNode/select").active = cellInfo.isSelect;
          cellCom.SetData(this.cardClassDatas[cellInfo.index]);
        }

        selectCondCheck(cell, cellInfo) {
          let data = this.cardClassDatas[cellInfo.index];
          if (data.id) return true;
          this.tipsLab.string = "暂未获得此卡";
          if (cell) this.onShowNotCardTips(cell);
          return false;
        }

        selectCardCalssCell(cell, cellInfo, lastCell, lastInfo) {
          if (cell) {
            cell.getChildByPath("Cards/cardNode/select").active = cellInfo.isSelect;
          }

          if (lastCell && lastInfo) {
            lastCell.getChildByPath("Cards/cardNode/select").active = lastInfo.isSelect;
          }

          this.selectCard(this.cardClassDatas[cellInfo.index]);
        }

        updateAwardCardCell(cell, cellInfo) {
          let cellCom = cell.getComponent(_crd && CardTitleItem === void 0 ? (_reportPossibleCrUseOfCardTitleItem({
            error: Error()
          }), CardTitleItem) : CardTitleItem) || cell.addComponent(_crd && CardTitleItem === void 0 ? (_reportPossibleCrUseOfCardTitleItem({
            error: Error()
          }), CardTitleItem) : CardTitleItem);
          cellCom.SetData(this.awardCardDatas[cellInfo.index], "渡劫卡");
        }

        awardCardClick(cell, cellInfo) {
          let data = this.awardCardDatas[cellInfo.index];

          if (data.id) {
            this.flush(data.id, data.cardId);
          } else {
            let stdEndUpgrade = this.upgradeList[this.upgradeList.length - 1];
            this.tipsLab.string = stdEndUpgrade.show;
            this.onShowNotCardTips(cell);
          }
        }

        onShowNotCardTips(node) {
          let showPos = node.worldPosition.clone();
          showPos.y += node.getComponent(UITransform).height / 2;
          (_crd && ClickTipsPanel === void 0 ? (_reportPossibleCrUseOfClickTipsPanel({
            error: Error()
          }), ClickTipsPanel) : ClickTipsPanel).Show(this.notCardTips, this.node, node, showPos);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aaa6005109499556542fc7c21dd37aee5a289d12.js.map