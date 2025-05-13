System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Sprite, UITransform, path, SpriteFrame, ScrollView, sp, Widget, SpriteLabel, RollViewDir, VList, Panel, CfgMgr, StdProcessBoxType, ThingName, CardCollectLvContItem, folder_item, ResMgr, PlayerData, EventMgr, Evt_Box_Update, Evt_Item_Change, Evt_Upgrade_Award_Update, CardCollectBoxCardItem, Req, Route, Session, MsgPanel, DateUtils, ItemUtil, CardCollectQualItem, Goto, CardCollectPanel, _crd;

  function _reportPossibleCrUseOfSpriteLabel(extras) {
    _reporterNs.report("SpriteLabel", "../../component/SpriteLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollViewDir(extras) {
    _reporterNs.report("RollViewDir", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdBattleCardDelivery(extras) {
    _reporterNs.report("StdBattleCardDelivery", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCardUpgradeShow(extras) {
    _reporterNs.report("StdCardUpgradeShow", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPlayerLevel(extras) {
    _reporterNs.report("StdPlayerLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPlayerLevelAward(extras) {
    _reporterNs.report("StdPlayerLevelAward", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdProcessBox(extras) {
    _reporterNs.report("StdProcessBox", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdProcessBoxType(extras) {
    _reporterNs.report("StdProcessBoxType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingName(extras) {
    _reporterNs.report("ThingName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardCollectLvContItem(extras) {
    _reporterNs.report("CardCollectLvContItem", "./CardCollectLvContItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Box_Update(extras) {
    _reporterNs.report("Evt_Box_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Upgrade_Award_Update(extras) {
    _reporterNs.report("Evt_Upgrade_Award_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardCollectBoxCardItem(extras) {
    _reporterNs.report("CardCollectBoxCardItem", "./CardCollectBoxCardItem", _context.meta, extras);
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

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardCollectQualItem(extras) {
    _reporterNs.report("CardCollectQualItem", "./CardCollectQualItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  _export("CardCollectPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      path = _cc.path;
      SpriteFrame = _cc.SpriteFrame;
      ScrollView = _cc.ScrollView;
      sp = _cc.sp;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      SpriteLabel = _unresolved_2.SpriteLabel;
    }, function (_unresolved_3) {
      RollViewDir = _unresolved_3.RollViewDir;
      VList = _unresolved_3.VList;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
      StdProcessBoxType = _unresolved_5.StdProcessBoxType;
      ThingName = _unresolved_5.ThingName;
    }, function (_unresolved_6) {
      CardCollectLvContItem = _unresolved_6.CardCollectLvContItem;
    }, function (_unresolved_7) {
      folder_item = _unresolved_7.folder_item;
      ResMgr = _unresolved_7.ResMgr;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_Box_Update = _unresolved_9.Evt_Box_Update;
      Evt_Item_Change = _unresolved_9.Evt_Item_Change;
      Evt_Upgrade_Award_Update = _unresolved_9.Evt_Upgrade_Award_Update;
    }, function (_unresolved_10) {
      CardCollectBoxCardItem = _unresolved_10.CardCollectBoxCardItem;
    }, function (_unresolved_11) {
      Req = _unresolved_11.Req;
      Route = _unresolved_11.Route;
    }, function (_unresolved_12) {
      Session = _unresolved_12.Session;
    }, function (_unresolved_13) {
      MsgPanel = _unresolved_13.MsgPanel;
    }, function (_unresolved_14) {
      DateUtils = _unresolved_14.DateUtils;
    }, function (_unresolved_15) {
      ItemUtil = _unresolved_15.ItemUtil;
    }, function (_unresolved_16) {
      CardCollectQualItem = _unresolved_16.CardCollectQualItem;
    }, function (_unresolved_17) {
      Goto = _unresolved_17.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe24enUc5tCY4Q9s9O6ADV9", "CardCollectPanel", undefined);

      __checkObsolete__(['Node', 'Button', 'Label', 'Sprite', 'UITransform', 'path', 'SpriteFrame', 'Rect', 'v2', 'Vec3', 'ScrollView', 'Vec2', 'sp', 'tween', 'v3', 'easing', 'RichText', 'Widget']);

      _export("CardCollectPanel", CardCollectPanel = class CardCollectPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cardCollect/CardCollectPanel";
          this.lvLab = void 0;
          this.helpBtn = void 0;
          this.lvList = void 0;
          this.awardIcon = void 0;
          this.awardLvLab = void 0;
          this.awardBtn = void 0;
          this.boxCont = void 0;
          this.boxIcon = void 0;
          this.boxNameImg = void 0;
          this.boxItemIcon = void 0;
          this.boxItemNumLab = void 0;
          this.boxBtn = void 0;
          this.limitTimeCont = void 0;
          this.limitTimeLab = void 0;
          this.awardCardList = void 0;
          this.hlepCont = void 0;
          this.hlepCloseBtn = void 0;
          this.hlepMask = void 0;
          this.qualList = void 0;
          this.panelMsk = void 0;
          this.addExpEffect = void 0;
          this.addExpNumLab = void 0;
          this.lvAwardList = void 0;
          this.curLv = 0;
          this.curBigPrizePreview = void 0;
          this.boxData = void 0;
          this.boxCfg = void 0;
          this.boxEndTime = void 0;
          this.awardCardDatas = void 0;
          this.upgradeShowCfgList = void 0;
          this.curLvResult = void 0;
        }

        onLoad() {
          this.lvLab = this.find("topLvCont/lvCont/lvLab").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
            error: Error()
          }), SpriteLabel) : SpriteLabel);
          this.lvLab.font = "sheets/numberImg/num1";
          this.helpBtn = this.find("topLvCont/helpBtn", Button);
          this.lvList = this.find("lvList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.lvList.initVisible = this.initVisbleLvList.bind(this);
          this.lvList.updateCell = this.updateLvCell.bind(this);
          this.awardIcon = this.find("bigPrizeCont/awardIcon", Sprite);
          this.awardBtn = this.find("bigPrizeCont/awardIcon", Button);
          this.awardLvLab = this.find("bigPrizeCont/awardLvLab", Label);
          this.boxCont = this.find("boxCont");
          this.boxBtn = this.find("boxCont/box/boxBtn", Button);
          this.boxIcon = this.find("boxCont/box/boxBtn/boxIcon", Sprite);
          this.boxNameImg = this.find("boxCont/box/boxBtn/boxNameImg", Sprite);
          this.boxItemIcon = this.find("boxCont/box/boxItemCont/boxItemIcon", Sprite);
          this.boxItemNumLab = this.find("boxCont/box/boxItemCont/boxItemNumLab", Label);
          this.limitTimeCont = this.find("boxCont/box/limitTimeCont");
          this.limitTimeLab = this.find("boxCont/box/limitTimeCont/limitTimeLab", Label);
          this.awardCardList = this.find("boxCont/awardCardList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.awardCardList.updateCell = this.updateCardCell.bind(this);
          this.awardCardList.clickCell = this.awardCellClick.bind(this);
          this.awardCardList.initVisible = this.awardCardInitView.bind(this);
          this.hlepCont = this.find("hlepCont");
          this.hlepCloseBtn = this.find("hlepCont/cont/closeBtn", Button);
          this.hlepMask = this.find("hlepCont/mask", Button);
          this.qualList = this.find("hlepCont/cont/qualList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.qualList.updateCell = this.updateQualCell.bind(this);
          this.panelMsk = this.find("panelMsk");
          this.hlepCont.active = false;
          this.addExpEffect = this.find("addExpEffect", sp.Skeleton);
          this.addExpNumLab = this.find("addExpEffect/addExpNumLab").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
            error: Error()
          }), SpriteLabel) : SpriteLabel);
          this.addExpNumLab.font = "sheets/numberImg/num2";
          this.addExpNumLab.string = "10";
          this.addExpEffect.node.active = false;
          this.boxBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.helpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.hlepCloseBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.hlepMask.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.CloseBy("closeBtn");
          this.lvAwardList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetPlayerLevelArwardList();
          let qualCfgList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardUpgradeShowList();
          this.upgradeShowCfgList = qualCfgList.slice(1, qualCfgList.length);
          this.qualList.cellCount = this.upgradeShowCfgList.length;
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Box_Update === void 0 ? (_reportPossibleCrUseOfEvt_Box_Update({
            error: Error()
          }), Evt_Box_Update) : Evt_Box_Update, this.onUpdateBox, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Upgrade_Award_Update === void 0 ? (_reportPossibleCrUseOfEvt_Upgrade_Award_Update({
            error: Error()
          }), Evt_Upgrade_Award_Update) : Evt_Upgrade_Award_Update, this.onUpgradeAwardUpdate, this);
          this.lvList.node.on(ScrollView.EventType.SCROLLING, this.onLvListScrolling, this);
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Box_Update === void 0 ? (_reportPossibleCrUseOfEvt_Box_Update({
            error: Error()
          }), Evt_Box_Update) : Evt_Box_Update, this.onUpdateBox, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Upgrade_Award_Update === void 0 ? (_reportPossibleCrUseOfEvt_Upgrade_Award_Update({
            error: Error()
          }), Evt_Upgrade_Award_Update) : Evt_Upgrade_Award_Update, this.onUpgradeAwardUpdate, this);
          this.lvList.node.off(ScrollView.EventType.SCROLLING, this.onLvListScrolling, this);
        }

        flush(curLvResult = null) {
          this.curLvResult = curLvResult;
          this.hlepCont.active = false;

          if (this.curLvResult) {
            //升级结果跳转过来的有动画表现，防止动画进行中操纵滚动条
            this.panelMsk.active = true;
            this.updateLvCont(this.curLvResult.levelBefore);
            this.addExpEffect.node.active = true;
            this.addExpNumLab.string = `+${this.curLvResult.levelExpChanged}`;
            this.addExpEffect.clearAnimation();
            this.addExpEffect.setAnimation(0, "animation", false);
            this.addExpEffect.setCompleteListener(() => {
              this.addExpEffect.node.active = false;
              this.lvLab.string = this.curLvResult.levelAfter.toString();
              this.showUpEffect();
            });
          } else {
            this.panelMsk.active = false;
            this.updateLvCont(0);
          }

          let defRollIndex = 0;
          let miniLv;
          let maxLv;

          for (let index = 0; index < this.lvAwardList.length; index++) {
            let stdPlayerLevelAward = this.lvAwardList[index];
            let stdMini = stdPlayerLevelAward.stdPlayerLevel;
            let stdMax;

            if (stdPlayerLevelAward.sectionList && stdPlayerLevelAward.sectionList.length) {
              stdMax = stdPlayerLevelAward.sectionList[stdPlayerLevelAward.sectionList.length - 1];
            }

            miniLv = stdMini.Level;
            maxLv = stdMax ? stdMax.Level : stdMini.Level;

            if (this.curLv >= miniLv && this.curLv <= maxLv) {
              defRollIndex = index;
              break;
            }
          }

          this.lvList.scrollToIndex(defRollIndex);
          this.updateBox();
        }

        update(dt) {
          if (this.boxEndTime > 0) {
            let time = this.boxEndTime - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime;

            if (time > 0) {
              let day = Math.floor(time / 86400);

              if (day >= 1) {
                this.limitTimeLab.string = `${day}天` + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).FormatTime(time - day * 86400, "%{hh}:%{mm}:%{ss}");
              } else {
                this.limitTimeLab.string = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).FormatTime(time, "%{hh}:%{mm}:%{ss}");
              }
            } else {
              this.limitTimeLab.string = "活动结束";
              if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetNextLimitBoxProcess()) this.updateBox();
            }
          }
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.boxBtn:
              this.openBox();
              break;

            case this.helpBtn:
              this.hlepCont.active = true;
              break;

            case this.hlepCloseBtn:
            case this.hlepMask:
              this.hlepCont.active = false;
              break;
          }
        }

        onItemChange(changeMap) {
          if (this.boxCfg) {
            for (let index = 0; index < this.boxCfg.CostIDs.length; index++) {
              if (changeMap[this.boxCfg.CostIDs[index]]) {
                this.updateBox();
                break;
              }
            }
          }
        }

        awardCellClick(cell, cellInfo) {
          let awardData = this.awardCardDatas[cellInfo.index];
          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)("CardTipsPanel", awardData.cardData.cardId);
        }

        awardCardInitView() {
          let bg = this.awardCardList.node.getChildByName("awardCardBg");
          let widget = bg.getComponent(Widget);
          let cont = this.awardCardList.node.getChildByPath("view/content");
          let contTrans = cont.getComponent(UITransform);
          let contR = contTrans.getBoundingBoxToWorld();
          let trans = this.node.getComponent(UITransform);
          widget.right = trans.width - contR.xMax - 30;
        }

        onLvListScrolling(rollDir, isBouncing) {
          console.log("滚动方向----》" + (_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
            error: Error()
          }), RollViewDir) : RollViewDir)[rollDir] + " 是否回弹" + isBouncing);

          if (isBouncing) {
            return;
          }

          this.findCentreLvCell(rollDir);
        }

        onUpgradeAwardUpdate(getAward) {
          if (getAward) {
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("RewardTips", [getAward]);
          }

          this.updateLvCont();
        }

        updateLvCont(lv = 0) {
          this.curLv = lv || (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.level;
          this.lvList.cellCount = this.lvAwardList.length;
          this.lvLab.string = this.curLv.toString();
        }

        onUpdateBox(getAwardList) {
          if (getAwardList && getAwardList.length) {
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("RewardTips", getAwardList);
          }

          this.updateBox();
        }

        initVisbleLvList() {
          this.findCentreLvCell((_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
            error: Error()
          }), RollViewDir) : RollViewDir).Left);
        }

        showUpEffect() {
          let cellNameList = [];
          let cellIinfoList = this.lvList.visibleCellInfoList;

          for (let cellInfo of cellIinfoList) {
            let stdPlayerAwardLevel = this.lvAwardList[cellInfo.index];

            if (stdPlayerAwardLevel.stdPlayerLevel.Level >= this.curLvResult.levelBefore && stdPlayerAwardLevel.stdPlayerLevel.Level <= this.curLvResult.levelAfter) {
              cellNameList.push(cellInfo.cellName);
            } else {
              let lineNum = stdPlayerAwardLevel.sectionList ? stdPlayerAwardLevel.sectionList.length + 1 : 0;

              for (let index = 0; index < lineNum; index++) {
                let targetLv = stdPlayerAwardLevel.stdPlayerLevel.Level + (index + 1);

                if (this.curLvResult.levelBefore == targetLv) {
                  cellNameList.push(cellInfo.cellName);
                }
              }
            }
          }

          let cellNodeList = this.lvList.visibleCellList;
          let time = 0;

          for (let index = 0; index < cellNameList.length; index++) {
            for (let cell of cellNodeList) {
              if (cell.name == cellNameList[index]) {
                let lvCom = cell.getComponent(_crd && CardCollectLvContItem === void 0 ? (_reportPossibleCrUseOfCardCollectLvContItem({
                  error: Error()
                }), CardCollectLvContItem) : CardCollectLvContItem);
                time = lvCom.playUpEffect(time, this.curLvResult.levelAfter);
                console.log("播放升级特效---->" + cell.name + "----->" + time);
              }
            }
          }

          this.scheduleOnce(() => {
            this.panelMsk.active = false;
            this.curLv = this.curLvResult.levelAfter;
            this.curLvResult = null; //this.updateLvCont();
          }, time);
        }

        lvCellClick(cell, cellInfo) {
          let stdPlayerAwardLevel = this.lvAwardList[cellInfo.index];
          let awardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetUpgradeAward(stdPlayerAwardLevel.stdPlayerLevel.Level);
          let stdCardDeliver; //点击已获取

          if (awardData) {
            if (awardData.rewardType == (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
              error: Error()
            }), ThingName) : ThingName).battlecard) {
              stdCardDeliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetBattleCardDeliver(awardData.rewardId);

              if (stdCardDeliver) {
                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)("CardTipsPanel", stdCardDeliver.CardID);
              }
            }
          }
        }

        updateLvCell(cell, cellInfo) {
          let stdPlayerAwardLevel = this.lvAwardList[cellInfo.index];
          let lvContItem = cell.getComponent(_crd && CardCollectLvContItem === void 0 ? (_reportPossibleCrUseOfCardCollectLvContItem({
            error: Error()
          }), CardCollectLvContItem) : CardCollectLvContItem) || cell.addComponent(_crd && CardCollectLvContItem === void 0 ? (_reportPossibleCrUseOfCardCollectLvContItem({
            error: Error()
          }), CardCollectLvContItem) : CardCollectLvContItem);
          lvContItem.SetData(stdPlayerAwardLevel, this.curLv, cellInfo.index); //this.lvPreview();
        }

        findCentreLvCell(rollDir = (_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
          error: Error()
        }), RollViewDir) : RollViewDir).None) {
          let lvListCenterWorld = this.lvList.node.worldPosition;
          let cellNodeList = this.lvList.visibleCellList;
          let centreCell = null;
          let minDistance = Infinity;

          for (let cell of cellNodeList) {
            let cellWorldPos = cell.worldPosition;
            let distance = Math.abs(cellWorldPos.x - lvListCenterWorld.x);

            if (distance < minDistance) {
              minDistance = distance;
              centreCell = cell;
            }
          }

          if (centreCell) {
            let checkIndex = -1;
            let cellIinfo = this.lvList.visibleCellInfoList;

            for (let index = 0; index < cellIinfo.length; index++) {
              if (cellIinfo[index].cellName == centreCell.name) {
                checkIndex = cellIinfo[index].index;
                break;
              }
            }

            if (checkIndex > -1) {
              let lvBigPrize;

              if (rollDir == (_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
                error: Error()
              }), RollViewDir) : RollViewDir).None) {
                let centreCellWorldPos = centreCell.worldPosition;

                if (centreCellWorldPos.x < lvListCenterWorld.x) {
                  rollDir = (_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
                    error: Error()
                  }), RollViewDir) : RollViewDir).Left;
                } else {
                  rollDir = (_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
                    error: Error()
                  }), RollViewDir) : RollViewDir).Right;
                }
              }

              if (rollDir == (_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
                error: Error()
              }), RollViewDir) : RollViewDir).Left) {
                lvBigPrize = this.findRightBigPrize(checkIndex);

                if (!lvBigPrize) {
                  lvBigPrize = this.findLeftBigPrize(checkIndex);
                }
              } else if (rollDir == (_crd && RollViewDir === void 0 ? (_reportPossibleCrUseOfRollViewDir({
                error: Error()
              }), RollViewDir) : RollViewDir).Right) {
                lvBigPrize = this.findLeftBigPrize(checkIndex);

                if (!lvBigPrize) {
                  lvBigPrize = this.findRightBigPrize(checkIndex);
                }
              }

              if (lvBigPrize) this.bigPrizePreview(lvBigPrize);
            }
          }
        }

        findLeftBigPrize(checkIndex) {
          let curLv;

          for (let index = checkIndex; index >= 0; index--) {
            curLv = this.lvAwardList[index].stdPlayerLevel;

            if (curLv.Grandprize == 1) {
              return curLv;
            }
          }

          return null;
        }

        findRightBigPrize(checkIndex) {
          let curLv;

          for (let index = checkIndex; index < this.lvAwardList.length; index++) {
            curLv = this.lvAwardList[index].stdPlayerLevel;

            if (curLv.Grandprize == 1) {
              return curLv;
            }
          }

          return null;
        } //大奖预览


        bigPrizePreview(stdPlayerLevel) {
          if (!this.curBigPrizePreview || this.curBigPrizePreview.Level != stdPlayerLevel.Level) {
            this.curBigPrizePreview = stdPlayerLevel;
            let iconStr;
            let numNum;

            if (this.curBigPrizePreview.RewardPool > 0) {
              iconStr = path.join("sheets/cardCollect", this.curBigPrizePreview.icon, "spriteFrame");
            } else {
              if (this.curBigPrizePreview.RewardID > 0) {
                let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem(this.curBigPrizePreview.RewardID);

                if (stdItem) {
                  iconStr = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                    error: Error()
                  }), folder_item) : folder_item, stdItem.Icon, "spriteFrame");
                  numNum = this.curBigPrizePreview.RewardNumber[0];
                }
              }
            }

            this.awardLvLab.string = `${this.curBigPrizePreview.Level}级可获得`;

            if (iconStr) {
              this.awardIcon.node.active = true;
              this.awardLvLab.node.active = true;
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(iconStr, SpriteFrame, res => {
                this.awardIcon.spriteFrame = res;
              });
            } else {
              this.awardIcon.node.active = false;
            }
          }
        }

        updateCardCell(cell, cellInfo) {
          let boxCardItem = cell.getComponent(_crd && CardCollectBoxCardItem === void 0 ? (_reportPossibleCrUseOfCardCollectBoxCardItem({
            error: Error()
          }), CardCollectBoxCardItem) : CardCollectBoxCardItem) || cell.addComponent(_crd && CardCollectBoxCardItem === void 0 ? (_reportPossibleCrUseOfCardCollectBoxCardItem({
            error: Error()
          }), CardCollectBoxCardItem) : CardCollectBoxCardItem);
          boxCardItem.SetData(this.awardCardDatas[cellInfo.index]);
        }

        updateBox(isGet = false) {
          this.boxCfg = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCurStdBoxProcess();
          this.boxEndTime = 0;

          if (this.boxCfg) {
            this.boxCont.active = true;
            this.boxData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetBoxProcessData(this.boxCfg.ID);
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/cardCollect", `boxIcon${this.boxCfg.ShowType}`, "spriteFrame"), SpriteFrame, res => {
              this.boxIcon.spriteFrame = res;
            });
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/cardCollect", `boxName${this.boxCfg.ShowType}`, "spriteFrame"), SpriteFrame, res => {
              this.boxNameImg.spriteFrame = res;
            });
            let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(this.boxCfg.CostIDs[0]);
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame, res => {
              this.boxItemIcon.spriteFrame = res;
            });
            this.boxItemNumLab.string = `${(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(this.boxCfg.CostIDs[0])}`;

            if (this.boxCfg.BoxType == (_crd && StdProcessBoxType === void 0 ? (_reportPossibleCrUseOfStdProcessBoxType({
              error: Error()
            }), StdProcessBoxType) : StdProcessBoxType).LimitBox) {
              this.boxEndTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).DateStringToTime(this.boxCfg.EndTime);
              this.limitTimeLab.color.fromHEX("#C22424");
            } else {
              this.limitTimeLab.color.fromHEX("#432809");
              this.limitTimeLab.string = "不限时";
            }

            this.awardCardDatas = [];

            for (let index = 0; index < this.boxCfg.RewardIDs.length; index++) {
              let stdCardDeliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetBattleCardDeliver(this.boxCfg.RewardIDs[index]);

              if (stdCardDeliver) {
                let cardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).CreateCardData(stdCardDeliver.CardID, stdCardDeliver.CardQuality);
                let isGet = false;

                if (this.boxData) {
                  for (let rewardData of this.boxData.rewards) {
                    if (rewardData.rewardIndex == index) {
                      isGet = true;
                      break;
                    }
                  }
                }

                this.awardCardDatas.push({
                  cardData: cardData,
                  isGet: isGet
                });
              }
            }

            this.awardCardList.cellCount = this.awardCardDatas.length; //this.awardCardInitView();
          } else {
            this.boxCfg = null;
            this.boxCont.active = false;
          }
        }

        updateQualCell(cell, cellInfo) {
          let qualItem = cell.getComponent(_crd && CardCollectQualItem === void 0 ? (_reportPossibleCrUseOfCardCollectQualItem({
            error: Error()
          }), CardCollectQualItem) : CardCollectQualItem) || cell.addComponent(_crd && CardCollectQualItem === void 0 ? (_reportPossibleCrUseOfCardCollectQualItem({
            error: Error()
          }), CardCollectQualItem) : CardCollectQualItem);
          qualItem.SetData(this.upgradeShowCfgList[cellInfo.index]);
        }

        openBox() {
          if (this.boxData) {
            let getNum = 0;

            for (let index = 0; index < this.boxCfg.RewardIDs.length; index++) {
              for (let rewardData of this.boxData.rewards) {
                if (rewardData.rewardIndex == index) getNum++;
              }
            }

            if (getNum >= this.boxCfg.RewardIDs.length) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("已全部领取");
              return;
            }
          }

          if (this.boxCfg.BoxType == (_crd && StdProcessBoxType === void 0 ? (_reportPossibleCrUseOfStdProcessBoxType({
            error: Error()
          }), StdProcessBoxType) : StdProcessBoxType).LimitBox) {
            let startTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).DateStringToTime(this.boxCfg.StartTime);

            if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime < startTime) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("宝箱开启时间未到");
              return;
            }

            let endTime = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).DateStringToTime(this.boxCfg.EndTime);

            if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime >= endTime) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("宝箱开启时间已结束");
              return;
            }
          }

          if (!(_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).CheckThingConsumes(null, this.boxCfg.CostIDs, this.boxCfg.CostNums, true)) {
            return;
          }

          let data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)['logic.protocol.processboxopen']();
          data.boxId = this.boxCfg.ID;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)['logic.protocol.processboxopen'], data);
          console.log(`发送开启箱子---->${data.boxId}`);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7da53957d3702fa7af7db1ffdad0f2cdbec07002.js.map