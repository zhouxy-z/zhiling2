System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, path, Sprite, SpriteFrame, VList, Panel, PlayerData, MsgPanel, BeforeGameUtils, VSStarElementPage, VSSeasonPage, proto, ResMgr, VSModelPanel, _crd;

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "../../utils/BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSStarElementPage(extras) {
    _reporterNs.report("VSStarElementPage", "./VSStarElementPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSSeasonPage(extras) {
    _reporterNs.report("VSSeasonPage", "./VSSeasonPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("VSModelPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      VList = _unresolved_2.VList;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      MsgPanel = _unresolved_5.MsgPanel;
    }, function (_unresolved_6) {
      BeforeGameUtils = _unresolved_6.BeforeGameUtils;
    }, function (_unresolved_7) {
      VSStarElementPage = _unresolved_7.VSStarElementPage;
    }, function (_unresolved_8) {
      VSSeasonPage = _unresolved_8.VSSeasonPage;
    }, function (_unresolved_9) {
      proto = _unresolved_9.default;
    }, function (_unresolved_10) {
      ResMgr = _unresolved_10.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6283bWPOLxHDIS19SzSPTTr", "VSModelPanel", undefined);

      __checkObsolete__(['Label', 'Node', 'path', 'Sprite', 'SpriteFrame']);

      _export("VSModelPanel", VSModelPanel = class VSModelPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/vs/VSModelPanel";
          this.vsTabList = void 0;
          this.tabDatas = [{
            type: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleMode.BattleModeStar,
            name: "星元对战"
          }, {
            type: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleMode.BattleModeRank,
            name: "排位赛"
          }];
          this.pageMap = void 0;
        }

        onLoad() {
          this.vsTabList = this.find("vsTabList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.vsTabList.updateCell = this.updateCellTab.bind(this);
          this.vsTabList.selectCondCheck = this.selectCondCheckTab.bind(this);
          this.vsTabList.selectCell = this.selectCellTab.bind(this);
          this.vsTabList.cellCount = this.tabDatas.length;
          var starElementPage = this.find("starElementPage").addComponent(_crd && VSStarElementPage === void 0 ? (_reportPossibleCrUseOfVSStarElementPage({
            error: Error()
          }), VSStarElementPage) : VSStarElementPage);
          var seasonPage = this.find("seasonPage").addComponent(_crd && VSSeasonPage === void 0 ? (_reportPossibleCrUseOfVSSeasonPage({
            error: Error()
          }), VSSeasonPage) : VSSeasonPage);
          this.pageMap = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleMode.BattleModeStar, starElementPage, //星元对战
          (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.BattleMode.BattleModeRank, seasonPage //排位赛
          );
          this.CloseBy("closeBtn");
        }

        flush(selectType) {
          if (selectType === void 0) {
            selectType = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleMode.BattleModeStar;
          }

          var selectIndex = 0;
          var tabData;

          for (var index = 0; index < this.tabDatas.length; index++) {
            tabData = this.tabDatas[index];

            if (tabData.type == selectType && this.tabCondCheck(index)) {
              selectIndex = index;
              break;
            }
          }

          this.vsTabList.selectIndex(selectIndex);
        }

        onShow() {}

        onHide() {}

        updateCellTab(cell, cellInfo) {
          var tabInfo = this.tabDatas[cellInfo.index];
          cell.getChildByPath("select").active = cellInfo.isSelect;
          var bg = cell.getChildByPath("bg").getComponent(Sprite);
          var selectImg = cell.getChildByName("select").getComponent(Sprite);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/vs", "vs_mode_tab_def_" + tabInfo.type, "spriteFrame"), SpriteFrame, res => {
            bg.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/vs", "vs_mode_tab_select_" + tabInfo.type, "spriteFrame"), SpriteFrame, res => {
            selectImg.spriteFrame = res;
          });
        }

        selectCellTab(cell, cellInfo, lastCell, lastInfo) {
          if (cell) {
            cell.getChildByPath("select").active = cellInfo.isSelect;
          }

          if (lastCell && lastInfo) {
            lastCell.getChildByPath("select").active = lastInfo.isSelect;
          }

          this.selectTab(cellInfo.index);
        }

        selectCondCheckTab(cell, cellInfo) {
          return this.tabCondCheck(cellInfo.index, true);
        }

        tabCondCheck(index, showTips) {
          if (showTips === void 0) {
            showTips = false;
          }

          var tabInfo = this.tabDatas[index];
          var result = false;

          switch (tabInfo.type) {
            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleMode.BattleModeStar:
              result = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).SatrElementData && (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).SatrElementData.currentSeasonId != 0;
              if (showTips && !result) (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("暂时没有星元对战进行中");
              break;

            case (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleMode.BattleModeRank:
              result = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurSeasonData && (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId != 0;
              if (showTips && !result) (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("暂时没有赛季进行中");
              break;
          }

          return result;
        }

        selectTab(index) {
          var tabInfo = this.tabDatas[index];
          var comp;

          for (var _key in this.pageMap) {
            comp = this.pageMap[_key];

            if (Number(_key) == tabInfo.type) {
              comp.Show();
            } else {
              comp.Hide();
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb4537573d979459b3d9c2aac4a39fe34f70e8a7.js.map