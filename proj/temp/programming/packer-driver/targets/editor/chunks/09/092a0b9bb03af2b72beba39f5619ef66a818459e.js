System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, instantiate, CardGroupCoverItem, proto, EventMgr, Evt_Set_Battle_Card_Group_Update, PlayerData, Goto, MsgPanel, CfgMgr, HaveItem, CostItem, DateUtils, VSStarElementPage, _crd;

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "../common/CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Set_Battle_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHaveItem(extras) {
    _reporterNs.report("HaveItem", "../common/HaveItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostItem(extras) {
    _reporterNs.report("CostItem", "../common/CostItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  _export("VSStarElementPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      CardGroupCoverItem = _unresolved_2.CardGroupCoverItem;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_Set_Battle_Card_Group_Update = _unresolved_4.Evt_Set_Battle_Card_Group_Update;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      Goto = _unresolved_6.Goto;
    }, function (_unresolved_7) {
      MsgPanel = _unresolved_7.MsgPanel;
    }, function (_unresolved_8) {
      CfgMgr = _unresolved_8.CfgMgr;
    }, function (_unresolved_9) {
      HaveItem = _unresolved_9.HaveItem;
    }, function (_unresolved_10) {
      CostItem = _unresolved_10.CostItem;
    }, function (_unresolved_11) {
      DateUtils = _unresolved_11.DateUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40b61gq4nlFT6UE9dJTiFEz", "VSStarElementPage", undefined);

      __checkObsolete__(['Node', 'Button', 'Component', 'instantiate']);

      _export("VSStarElementPage", VSStarElementPage = class VSStarElementPage extends Component {
        constructor(...args) {
          super(...args);
          this.helpBtn = void 0;
          this.battleLogBtn = void 0;
          this.shopBtn = void 0;
          this.costItem = void 0;
          this.vsBtn = void 0;
          this.cardGroupBtn = void 0;
          this.cardGroupCoverItem = void 0;
          this.haveItemCont = void 0;
          this.tempHaveItem = void 0;
          this.cardGroupData = void 0;
        }

        onLoad() {
          this.helpBtn = this.node.getChildByPath("btnCont/helpBtn").getComponent(Button);
          this.battleLogBtn = this.node.getChildByPath("btnCont/battleLogBtn").getComponent(Button);
          this.shopBtn = this.node.getChildByPath("btnCont/shopBtn").getComponent(Button);
          this.costItem = this.node.getChildByPath("costCont/CostItem").addComponent(_crd && CostItem === void 0 ? (_reportPossibleCrUseOfCostItem({
            error: Error()
          }), CostItem) : CostItem);
          this.vsBtn = this.node.getChildByPath("vsBtn").getComponent(Button);
          this.cardGroupBtn = this.node.getChildByPath("cardGroupBtn").getComponent(Button);
          this.cardGroupCoverItem = this.node.getChildByPath("cardGroupBtn/CardGroupCoverItem").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.haveItemCont = this.node.getChildByPath("haveItemCont");
          this.tempHaveItem = this.haveItemCont.children.shift();
          this.battleLogBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.shopBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.cardGroupBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.vsBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.helpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Set_Battle_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update({
            error: Error()
          }), Evt_Set_Battle_Card_Group_Update) : Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Set_Battle_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update({
            error: Error()
          }), Evt_Set_Battle_Card_Group_Update) : Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
        }

        Show() {
          this.node.active = true;
          this.initHaveItem();
          this.updateCardGroup();
        }

        Hide() {
          this.node.active = false;
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.battleLogBtn:
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSStarElementFightLogPanel");
              break;

            case this.shopBtn:
              break;

            case this.cardGroupBtn:
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSCardGroupPanel");
              break;

            case this.vsBtn:
              if (!this.cardGroupData) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("未设置战斗卡组不可对战");
                return;
              }

              if (this.cardGroupData.size < (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).CardGuroupComm.DeckFullSize) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show(`卡组卡牌数量不足${(_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).CardGuroupComm.DeckFullSize}张`);
                return;
              }

              if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).SatrElementData || (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).SatrElementData.currentSeasonId == 0) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("暂时没有星元对战进行中");
                return;
              }

              if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime > (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCurSatrElementEndTime()) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("星元对战已结束");
                return;
              }

              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSPanel", (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleMode.BattleModeStar);
              break;

            case this.helpBtn:
              break;

            default:
              break;
          }
        }

        onSetCardGroup() {
          this.updateCardGroup();
        }

        updateCardGroup() {
          this.cardGroupData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurFightCardGroup;
          this.cardGroupCoverItem.SetData(this.cardGroupData, false);
        }

        initHaveItem() {
          let itemIds = [];
          let itemMap = {};
          /* if (this.upgradeList) {
              for (let std of this.upgradeList) {
                  if (std.CostItemIds) {
                      for (let id of std.CostItemIds) {
                          if (!itemMap[id]) {
                              itemIds.push(id);
                              itemMap[id] = id;
                          }
                      } 
                  }
                  
              }
          } */

          let maxLen = Math.max(this.haveItemCont.children.length, itemIds.length);
          let node;
          let haveItem;

          for (let index = 0; index < maxLen; index++) {
            node = this.haveItemCont.children[index];

            if (!node) {
              node = instantiate(this.tempHaveItem);
              node.parent = this.haveItemCont;
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=092a0b9bb03af2b72beba39f5619ef66a818459e.js.map