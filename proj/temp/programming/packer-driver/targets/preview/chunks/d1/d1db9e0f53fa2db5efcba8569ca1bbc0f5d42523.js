System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Panel, VList, CfgMgr, PlayerData, EventMgr, Evt_SectionAwardInit, Evt_SectionAwardUpdate, VSSectionAwardItem, Goto, VSSectionAwardPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
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

  function _reportPossibleCrUseOfVSSectionAwardItem(extras) {
    _reporterNs.report("VSSectionAwardItem", "./VSSectionAwardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  _export("VSSectionAwardPanel", void 0);

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
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
      Evt_SectionAwardInit = _unresolved_6.Evt_SectionAwardInit;
      Evt_SectionAwardUpdate = _unresolved_6.Evt_SectionAwardUpdate;
    }, function (_unresolved_7) {
      VSSectionAwardItem = _unresolved_7.VSSectionAwardItem;
    }, function (_unresolved_8) {
      Goto = _unresolved_8.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26b54oPStJFhb2/YNpRt9TE", "VSSectionAwardPanel", undefined);

      __checkObsolete__(['Node']);

      _export("VSSectionAwardPanel", VSSectionAwardPanel = class VSSectionAwardPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/vs/VSSectionAwardPanel";
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
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("RewardTips", data.things);
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
          var cellCom = cell.getComponent(_crd && VSSectionAwardItem === void 0 ? (_reportPossibleCrUseOfVSSectionAwardItem({
            error: Error()
          }), VSSectionAwardItem) : VSSectionAwardItem) || cell.addComponent(_crd && VSSectionAwardItem === void 0 ? (_reportPossibleCrUseOfVSSectionAwardItem({
            error: Error()
          }), VSSectionAwardItem) : VSSectionAwardItem);
          cellCom.SetData(this.stdPvpLevelList[cellInfo.index]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1db9e0f53fa2db5efcba8569ca1bbc0f5d42523.js.map