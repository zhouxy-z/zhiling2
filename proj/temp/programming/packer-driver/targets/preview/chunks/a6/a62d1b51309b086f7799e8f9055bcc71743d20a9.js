System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Panel, VList, SectionAwardItem, CfgMgr, PlayerData, EventMgr, Evt_SectionAwardInit, Evt_SectionAwardUpdate, RewardTips, SectionAwardPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSectionAwardItem(extras) {
    _reporterNs.report("SectionAwardItem", "./SectionAwardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPvpLevel(extras) {
    _reporterNs.report("StdPvpLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionAwardInit(extras) {
    _reporterNs.report("Evt_SectionAwardInit", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionAwardUpdate(extras) {
    _reporterNs.report("Evt_SectionAwardUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  _export("SectionAwardPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      VList = _unresolved_3.VList;
    }, function (_unresolved_4) {
      SectionAwardItem = _unresolved_4.SectionAwardItem;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
      Evt_SectionAwardInit = _unresolved_7.Evt_SectionAwardInit;
      Evt_SectionAwardUpdate = _unresolved_7.Evt_SectionAwardUpdate;
    }, function (_unresolved_8) {
      RewardTips = _unresolved_8.RewardTips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "499daQxS+ZNB52+p6tvGToJ", "SectionAwardPanel", undefined);

      __checkObsolete__(['Node']);

      _export("SectionAwardPanel", SectionAwardPanel = class SectionAwardPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/season/SectionAwardPanel";
          this.awardList = void 0;
          this.stdPvpLevelList = void 0;
          this.curStdPVPSnatch = void 0;
          this.seasonData = void 0;
        }

        onLoad() {
          this.awardList = this.find("cont/awardList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.awardList.updateCell = this.updateSeasonAwarCell.bind(this);
          this.CloseBy("cont/closeBtn");
          this.CloseBy("mask");
        }

        flush() {
          this.updateShow();
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SectionAwardInit === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardInit({
            error: Error()
          }), Evt_SectionAwardInit) : Evt_SectionAwardInit, this.onAwardDataInit, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SectionAwardUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardUpdate({
            error: Error()
          }), Evt_SectionAwardUpdate) : Evt_SectionAwardUpdate, this.onGetAward, this);
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_SectionAwardInit === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardInit({
            error: Error()
          }), Evt_SectionAwardInit) : Evt_SectionAwardInit, this.onAwardDataInit, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_SectionAwardUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionAwardUpdate({
            error: Error()
          }), Evt_SectionAwardUpdate) : Evt_SectionAwardUpdate, this.onGetAward, this);
        }

        onAwardDataInit() {
          this.updateShow();
        }

        onGetAward(data) {
          if (data && data.things && data.things.length) {
            (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
              error: Error()
            }), RewardTips) : RewardTips).Show(data.things);
          }
        }

        updateShow() {
          this.seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;
          this.curStdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.seasonData.currentSeasonId);
          this.stdPvpLevelList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPvpLvCfgList(this.curStdPVPSnatch.RankGroupID);
          var curStdPvpLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.seasonData.currentRankInfo.rankPoints);
          var defIndex = 0;

          for (var index = 0; index < this.stdPvpLevelList.length; index++) {
            var std = this.stdPvpLevelList[index];

            if (std.LevelID == curStdPvpLv.LevelID) {
              defIndex = index;
              break;
            }
          }

          this.awardList.cellCount = this.stdPvpLevelList.length;
          this.awardList.scrollToIndex(defIndex);
        }

        updateSeasonAwarCell(cell, cellInfo) {
          var cellCom = cell.getComponent(_crd && SectionAwardItem === void 0 ? (_reportPossibleCrUseOfSectionAwardItem({
            error: Error()
          }), SectionAwardItem) : SectionAwardItem) || cell.addComponent(_crd && SectionAwardItem === void 0 ? (_reportPossibleCrUseOfSectionAwardItem({
            error: Error()
          }), SectionAwardItem) : SectionAwardItem);
          cellCom.SetData(this.stdPvpLevelList[cellInfo.index]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a62d1b51309b086f7799e8f9055bcc71743d20a9.js.map