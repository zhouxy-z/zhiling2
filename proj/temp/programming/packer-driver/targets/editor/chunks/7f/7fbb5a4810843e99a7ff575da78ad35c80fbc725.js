System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, Toggle, path, Panel, BagItem, PlayerData, AutoScroller, CardQuality, CfgMgr, ConditionType, ItemSubType, ItemType, JobName, StdCommonType, ThingItemId, ThingType, FormatCondition, ResMgr, folder_icon, ComboBox, GetMoreWin, ComposePanel, EventMgr, Evt_Item_Change, Goto, MsgPanel, ToFixed, OpenBoxPanel, Tips, DateUtils, BuildingType, rightsTips, CheckCondition, PANEL_TYPE, BagPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "./BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataItem(extras) {
    _reporterNs.report("SPlayerDataItem", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../utils/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardQuality(extras) {
    _reporterNs.report("CardQuality", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionType(extras) {
    _reporterNs.report("ConditionType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemSubType(extras) {
    _reporterNs.report("ItemSubType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJobName(extras) {
    _reporterNs.report("JobName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCommonType(extras) {
    _reporterNs.report("StdCommonType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingItemId(extras) {
    _reporterNs.report("ThingItemId", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingType(extras) {
    _reporterNs.report("ThingType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormatCondition(extras) {
    _reporterNs.report("FormatCondition", "../common/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionSub(extras) {
    _reporterNs.report("ConditionSub", "../common/AttrSub", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComboBox(extras) {
    _reporterNs.report("ComboBox", "../../utils/ComboBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetMoreWin(extras) {
    _reporterNs.report("GetMoreWin", "./GetMoreWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComposePanel(extras) {
    _reporterNs.report("ComposePanel", "./ComposePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToFixed(extras) {
    _reporterNs.report("ToFixed", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenBoxPanel(extras) {
    _reporterNs.report("OpenBoxPanel", "./OpenBoxPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingType(extras) {
    _reporterNs.report("BuildingType", "../home/HomeStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrightsTips(extras) {
    _reporterNs.report("rightsTips", "../rights/rightsTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckCondition(extras) {
    _reporterNs.report("CheckCondition", "../../manager/ConditionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPANEL_TYPE(extras) {
    _reporterNs.report("PANEL_TYPE", "../../manager/PANEL_TYPE", _context.meta, extras);
  }

  _export("BagPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      path = _cc.path;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      BagItem = _unresolved_3.BagItem;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.default;
    }, function (_unresolved_5) {
      AutoScroller = _unresolved_5.AutoScroller;
    }, function (_unresolved_6) {
      CardQuality = _unresolved_6.CardQuality;
      CfgMgr = _unresolved_6.CfgMgr;
      ConditionType = _unresolved_6.ConditionType;
      ItemSubType = _unresolved_6.ItemSubType;
      ItemType = _unresolved_6.ItemType;
      JobName = _unresolved_6.JobName;
      StdCommonType = _unresolved_6.StdCommonType;
      ThingItemId = _unresolved_6.ThingItemId;
      ThingType = _unresolved_6.ThingType;
    }, function (_unresolved_7) {
      FormatCondition = _unresolved_7.FormatCondition;
    }, function (_unresolved_8) {
      ResMgr = _unresolved_8.ResMgr;
      folder_icon = _unresolved_8.folder_icon;
    }, function (_unresolved_9) {
      ComboBox = _unresolved_9.ComboBox;
    }, function (_unresolved_10) {
      GetMoreWin = _unresolved_10.GetMoreWin;
    }, function (_unresolved_11) {
      ComposePanel = _unresolved_11.ComposePanel;
    }, function (_unresolved_12) {
      EventMgr = _unresolved_12.EventMgr;
      Evt_Item_Change = _unresolved_12.Evt_Item_Change;
      Goto = _unresolved_12.Goto;
    }, function (_unresolved_13) {
      MsgPanel = _unresolved_13.MsgPanel;
    }, function (_unresolved_14) {
      ToFixed = _unresolved_14.ToFixed;
    }, function (_unresolved_15) {
      OpenBoxPanel = _unresolved_15.OpenBoxPanel;
    }, function (_unresolved_16) {
      Tips = _unresolved_16.Tips;
    }, function (_unresolved_17) {
      DateUtils = _unresolved_17.DateUtils;
    }, function (_unresolved_18) {
      BuildingType = _unresolved_18.BuildingType;
    }, function (_unresolved_19) {
      rightsTips = _unresolved_19.rightsTips;
    }, function (_unresolved_20) {
      CheckCondition = _unresolved_20.CheckCondition;
    }, function (_unresolved_21) {
      PANEL_TYPE = _unresolved_21.PANEL_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe45EzKnlL3qqWqhSTmZ4Y", "BagPanel", undefined);

      __checkObsolete__(['Button', 'Component', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'path', 'sp', 'tween']);

      _export("BagPanel", BagPanel = class BagPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/panel/bag/BagPanel";
          this.page = void 0;
          this.page1 = void 0;
          this.scroller1 = void 0;
          this.page2 = void 0;
          this.scroller2 = void 0;
          this.page3 = void 0;
          this.scroller3 = void 0;
          this.combo1 = void 0;
          this.combo2 = void 0;
          this.item = void 0;
          this.selectName = void 0;
          this.selectDesc = void 0;
          this.selectHas = void 0;
          this.empty = void 0;
          this.useBtns = void 0;
          this.navBtns = void 0;
          this.scroller = void 0;
          this.selectData = void 0;
          this.datas = void 0;
          this.chipJobSort = void 0;
          this.chipQualSort = void 0;
          this._curSelectIndex = void 0;
        }

        onLoad() {
          this.CloseBy("layout/closeBtn");
          this.CloseBy("mask");
          this.page1 = this.find("layout/page1");
          this.scroller1 = this.page1.getChildByPath("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller1.SetHandle(this.updateBagItem.bind(this));
          this.scroller1.node.on('select', this.SelectItem, this);
          this.page2 = this.find("layout/page2");
          this.scroller2 = this.page2.getChildByPath("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller2.SetHandle(this.updateBagItem.bind(this));
          this.scroller2.node.on('select', this.SelectItem, this);
          this.combo1 = this.find("layout/page2/selectJob", _crd && ComboBox === void 0 ? (_reportPossibleCrUseOfComboBox({
            error: Error()
          }), ComboBox) : ComboBox);
          this.combo1.Init([1, 2, 3, 4], this.updateJobItem.bind(this), this.updateHead1.bind(this));
          this.combo1.node.on('select', this.onSelectJob, this);
          this.combo2 = this.find("layout/page2/selectQuality", _crd && ComboBox === void 0 ? (_reportPossibleCrUseOfComboBox({
            error: Error()
          }), ComboBox) : ComboBox);
          this.combo2.Init([1, 2, 3, 4, 5], this.updatequalityItem.bind(this), this.updateHead2.bind(this));
          this.combo2.node.on('select', this.onSelectquality, this);
          this.page3 = this.find("layout/page3");
          this.scroller3 = this.page3.getChildByPath("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller3.SetHandle(this.updateBagItem.bind(this));
          this.scroller3.node.on('select', this.SelectItem, this);
          this.item = this.find("layout/infoBar/item").addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          this.selectName = this.find("layout/infoBar/name", Label);
          this.selectDesc = this.find("layout/infoBar/desc", Label);
          this.selectHas = this.find("layout/infoBar/has", Label);
          this.empty = this.find("layout/infoBar/empty");
          this.useBtns = this.find("layout/infoBar/layout").children.concat();
          this.useBtns[0].on(Input.EventType.TOUCH_END, this.openJiaoyi, this);
          this.useBtns[1].on(Input.EventType.TOUCH_END, this.openHecheng, this);
          this.useBtns[2].on(Input.EventType.TOUCH_END, this.openUse, this);
          this.useBtns[3].on(Input.EventType.TOUCH_END, this.openGet, this);
          this.navBtns = this.find("layout/nav").children.concat();

          for (let btn of this.navBtns) {
            btn.on('toggle', this.onPage, this);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        async SetPage(page, isOperat = true) {
          if (!this.$hasLoad) await this.initSub;
          if (!this.navBtns[page]) return;
          this.page = undefined;
          this.navBtns[page].getComponent(Toggle).isChecked = true;
          this.onPage(this.navBtns[page].getComponent(Toggle), isOperat);
        }

        onShow() {
          this.chipJobSort = 0;
          this.chipQualSort = 0;
          this.SetPage(0);
        }

        flush(...args) {}

        async onHide(...args) {
          if (!this.$hasLoad) await this.initSub;
          this.combo1.HideList();
          this.combo2.HideList();
          this.scroller = undefined;
          this.datas = undefined;
        }

        onItemChange() {
          if (!this.node.parent) return;
          this.SetPage(this.page, false);
        }

        openJiaoyi() {
          let buildings = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetBuildingByType((_crd && BuildingType === void 0 ? (_reportPossibleCrUseOfBuildingType({
            error: Error()
          }), BuildingType) : BuildingType).ji_di, 101);
          let building = buildings ? buildings[0] : undefined;
          let open_lv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetSysOpenCfg(3).ConditionValue1[0];

          if (building && building.level >= open_lv) {
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)((_crd && PANEL_TYPE === void 0 ? (_reportPossibleCrUseOfPANEL_TYPE({
              error: Error()
            }), PANEL_TYPE) : PANEL_TYPE).TradePanel);
          } else {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("生命树等级不足");
          }
        }

        openHecheng() {
          let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.selectData.id);

          if (std.SubType == (_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
            error: Error()
          }), ItemSubType) : ItemSubType).shard) {
            (_crd && ComposePanel === void 0 ? (_reportPossibleCrUseOfComposePanel({
              error: Error()
            }), ComposePanel) : ComposePanel).showByItemId(std.Items);
          }
        }

        openUse() {
          let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.selectData.id);
          let condIds = std.ConditionId;
          let condDatas = [];

          if (condIds && condIds.length) {
            let condVals = std.ConditionId;
            let condId;
            let condVal;

            for (let i = 0; i < condIds.length; i++) {
              condId = condIds[i];
              condVal = condVals[i];
              let data = (_crd && FormatCondition === void 0 ? (_reportPossibleCrUseOfFormatCondition({
                error: Error()
              }), FormatCondition) : FormatCondition)(condId, condVal);
              if (data) condDatas.push(data);
            }

            for (const cond of condDatas) {
              if (cond.fail) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show(cond.fail);
                return;
              }
            }
          }

          switch (std.Itemtpye) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).box:
              //使用宝箱
              (_crd && OpenBoxPanel === void 0 ? (_reportPossibleCrUseOfOpenBoxPanel({
                error: Error()
              }), OpenBoxPanel) : OpenBoxPanel).Show(std);
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).shield:
              let needLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCommon((_crd && StdCommonType === void 0 ? (_reportPossibleCrUseOfStdCommonType({
                error: Error()
              }), StdCommonType) : StdCommonType).PVP).PVPOpenLevel;
              let msg = (_crd && CheckCondition === void 0 ? (_reportPossibleCrUseOfCheckCondition({
                error: Error()
              }), CheckCondition) : CheckCondition)((_crd && ConditionType === void 0 ? (_reportPossibleCrUseOfConditionType({
                error: Error()
              }), ConditionType) : ConditionType).Home_1, needLv);

              if (msg) {
                (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                  error: Error()
                }), Tips) : Tips).Show(msg);
                return;
              }

              let shield_date = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).SecondsToDetailedTime(std.ItemEffect1);
              let shield_end_time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).LootPlayerData.shield_end_time;
              let time1 = "使用后会重置防护时间为" + shield_date;
              (_crd && rightsTips === void 0 ? (_reportPossibleCrUseOfrightsTips({
                error: Error()
              }), rightsTips) : rightsTips).Show(std, shield_end_time, time1);
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).rights:
              let rights_date = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).SecondsToDetailedTime(std.ItemEffect2);
              let cards_time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).rightsData.benefit_card.cards[std.ItemEffect1];
              let rights_tips = "使用后增加权益时长" + rights_date;
              (_crd && rightsTips === void 0 ? (_reportPossibleCrUseOfrightsTips({
                error: Error()
              }), rightsTips) : rightsTips).Show(std, cards_time, rights_tips);
              break;

            default:
              break;
          }
        }

        openGet() {
          let get_path = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.selectData.id).SkipGet;
          (_crd && GetMoreWin === void 0 ? (_reportPossibleCrUseOfGetMoreWin({
            error: Error()
          }), GetMoreWin) : GetMoreWin).Show(get_path);
        }

        updateHead1(item, data) {
          item.getChildByName("label").getComponent(Label).string = this.chipJobSort == data ? "职业" : (_crd && JobName === void 0 ? (_reportPossibleCrUseOfJobName({
            error: Error()
          }), JobName) : JobName)[data];
        }

        async updateJobItem(item, job) {
          let icon = item.getChildByName("icon").getComponent(Sprite);
          icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
            error: Error()
          }), folder_icon) : folder_icon, "job/" + job, "spriteFrame"), SpriteFrame);
        }

        onSelectJob(value) {
          this.chipJobSort = this.chipJobSort == value ? 0 : value;
          this.chipSort();
          this._curSelectIndex = 0;
          this.updateListData(true);
        }

        updateHead2(item, data) {
          item.getChildByName("label").getComponent(Label).string = this.chipQualSort == data ? "品质" : (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
            error: Error()
          }), CardQuality) : CardQuality)[data];
        }

        async updatequalityItem(item, quality) {
          let icon = item.getChildByName("icon").getComponent(Sprite);
          icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
            error: Error()
          }), folder_icon) : folder_icon, "quality/" + (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
            error: Error()
          }), CardQuality) : CardQuality)[quality], "spriteFrame"), SpriteFrame);
        }

        onSelectquality(value) {
          this.chipQualSort = this.chipQualSort == value ? 0 : value;
          this.chipSort();
          this._curSelectIndex = 0;
          this.updateListData(true);
        }

        onPage(t, isOperat = true) {
          if (!t.isChecked) return;
          if (isOperat) this._curSelectIndex = 0;
          let page = this.navBtns.indexOf(t.node);
          if (page < 0 || page == this.page) return;
          this.page1.active = false;
          this.page2.active = false;
          this.page3.active = false; // console.log("onPage", page);

          switch (page) {
            case 0:
              // 交易
              this.datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
                error: Error()
              }), ItemSubType) : ItemSubType).material);
              this.datas.sort(this.commSort);
              this.page1.active = true;
              this.scroller = this.scroller1;
              break;

            case 1:
              // 碎片
              this.chipSort();
              this.page2.active = true;
              this.scroller = this.scroller2;
              break;

            case 2:
              // 道具
              this.datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
                error: Error()
              }), ItemSubType) : ItemSubType).cost);
              this.datas.sort(this.commSort);
              this.page3.active = true;
              this.scroller = this.scroller3;
              break;

            case 3:
              //装备
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("功能未开启");
              this.SetPage(this.page, false); //return 

              break;

            default:
              this.datas.length = 0;
          }

          this.page = page;
          this.updateListData(isOperat);
        }

        updateListData(isOperat) {
          if (this.scroller && this.datas) {
            this.scroller.UpdateDatas(this.datas);
            this.SelectItem(this._curSelectIndex, isOperat);
          } else {
            this._curSelectIndex = 0;
          }
        }

        resetSelect() {
          let cont = this.scroller.node.getChildByPath("view/content");
          let selectIndex = -1;
          let defSelect;

          for (let index = 0; index < cont.children.length; index++) {
            let node = cont.children[index];
            let itemIndex = node["$$index"];
            if (itemIndex == 0) defSelect = node;

            if (itemIndex == this._curSelectIndex) {
              selectIndex = this._curSelectIndex;
              node.getChildByName("select").active = true;
            } else {
              node.getChildByName("select").active = false;
            }
          }

          if (selectIndex < 0) {
            selectIndex = 0;

            if (defSelect) {
              defSelect.getChildByName("select").active = true;
            }
          }

          this._curSelectIndex = selectIndex;
        }

        commSort(a, b) {
          let stdA = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(a.id);
          let stdB = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(b.id);
          return stdB.Sort - stdA.Sort;
        }

        chipSort() {
          this.datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
            error: Error()
          }), ItemSubType) : ItemSubType).shard);

          if (this.chipJobSort < 1 && this.chipQualSort < 1) {
            this.datas.sort(this.commSort);
          } else {
            this.chipFilter();
          }
        }

        chipFilter() {
          let tempData;
          let std;
          let tempList = [];
          let job;

          for (let index = 0; index < this.datas.length; index++) {
            tempData = this.datas[index];
            std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(tempData.id);
            job = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetRole()[std.ItemEffect1].PositionType;

            if (this.chipJobSort > 0) {
              if (this.chipJobSort == job) {
                if (this.chipQualSort > 0) {
                  if (this.chipQualSort == std.Quality) {
                    tempList.push(tempData);
                  }
                } else {
                  tempList.push(tempData);
                }
              }
            } else {
              if (this.chipQualSort > 0) {
                if (this.chipQualSort == std.Quality) {
                  tempList.push(tempData);
                }
              }
            }
          }

          this.datas = tempList.sort(this.commSort);
        }

        updateBagItem(item, data, index) {
          let bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!bagItem) bagItem = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.setIsShowSelect(false);
          bagItem.setIsShowRedPoint(true);
          bagItem.SetData(data);
          item.getChildByName("select").active = index == this._curSelectIndex;
          console.log("updateBagItem===", data);
        }
        /**
         * 选中道具
         * @param index 
         */


        async SelectItem(index, isOperat = true) {
          if (!this.$hasLoad) await this.initSub;
          this._curSelectIndex = index;
          this.resetSelect();
          if (this._curSelectIndex == 0 && isOperat) this.scroller.ScrollToHead();
          let data = this.datas[this._curSelectIndex];
          this.selectData = data;

          if (data) {
            this.empty.active = false;
            this.item.node.getComponent(Toggle).interactable = false;
            this.item.SetData(data);
            let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(data.id);
            this.selectName.string = std.ItemName;
            this.selectDesc.string = std.Remark;
            this.selectHas.string = `已拥有：${(_crd && ThingItemId === void 0 ? (_reportPossibleCrUseOfThingItemId({
              error: Error()
            }), ThingItemId) : ThingItemId)[std.Items] ? this.setResCount(data.count) : data.count}`;
            let btnNode;
            let redNode;

            for (let i = 0; i < this.useBtns.length; i++) {
              btnNode = this.useBtns[i];

              if (std.Button.indexOf(i + 1) != -1) {
                btnNode.active = true;
                redNode = btnNode.getChildByName("red_point");

                if (redNode) {
                  if (i == 1) {
                    //碎片红点
                    if (std.Type == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                      error: Error()
                    }), ThingType) : ThingType).ThingTypeItem && std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                      error: Error()
                    }), ItemType) : ItemType).shard) {
                      redNode.active = data.count >= std.ItemEffect3;
                    } else {
                      redNode.active = false;
                    }
                  } else if (i == 2) {
                    //宝箱红点
                    if (std.Type == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
                      error: Error()
                    }), ThingType) : ThingType).ThingTypeItem && std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                      error: Error()
                    }), ItemType) : ItemType).box) {
                      redNode.active = true;
                    } else {
                      redNode.active = false;
                    }
                  }
                }
              } else {
                btnNode.active = false;
              }
            }
          } else {
            this.empty.active = true;
          }
        }
        /**资源和货币的数量展示 */


        setResCount(count) {
          //判断是否是小数
          let str = count.toString();

          if (str.indexOf(".") != -1) {
            str = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
              error: Error()
            }), ToFixed) : ToFixed)(count, 2);
          } else {
            str = str + ".00";
          }

          return str;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7fbb5a4810843e99a7ff575da78ad35c80fbc725.js.map