System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, path, Sprite, SpriteFrame, CfgMgr, Panel, VList, PlayerData, folder_icon, ResMgr, CardGroupCoverItem, VSSectionFightLogItem, VSFightLogCardItem, VSStarElementFightLogPanel, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "../common/CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSSectionFightLogItem(extras) {
    _reporterNs.report("VSSectionFightLogItem", "./VSSectionFightLogItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSFightLogCardItem(extras) {
    _reporterNs.report("VSFightLogCardItem", "./VSFightLogCardItem", _context.meta, extras);
  }

  _export("VSStarElementFightLogPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      VList = _unresolved_4.VList;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      folder_icon = _unresolved_6.folder_icon;
      ResMgr = _unresolved_6.ResMgr;
    }, function (_unresolved_7) {
      CardGroupCoverItem = _unresolved_7.CardGroupCoverItem;
    }, function (_unresolved_8) {
      VSSectionFightLogItem = _unresolved_8.VSSectionFightLogItem;
    }, function (_unresolved_9) {
      VSFightLogCardItem = _unresolved_9.VSFightLogCardItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf813XB8rFPvotHsLkcMw7Y", "VSStarElementFightLogPanel", undefined);

      __checkObsolete__(['Node', 'Label', 'path', 'Sprite', 'SpriteFrame']);

      _export("VSStarElementFightLogPanel", VSStarElementFightLogPanel = class VSStarElementFightLogPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/vs/VSStarElementFightLogPanel";
          this.logList = void 0;
          this.playerHeadA = void 0;
          this.playerNameA = void 0;
          this.playerHeadB = void 0;
          this.playerNameB = void 0;
          this.resultImg = void 0;
          this.pointLab = void 0;
          this.cardGroupA = void 0;
          this.cardListA = void 0;
          this.cardGroupB = void 0;
          this.cardListB = void 0;
          this.logDatas = void 0;
          this.playerDataA = void 0;
          this.playerDataB = void 0;
        }

        onLoad() {
          this.logList = this.find("logList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.logList.updateCell = this.updateCellLog.bind(this);
          this.logList.selectCell = this.selectCellLog.bind(this);
          this.logList.clickCell = this.clickCellLog.bind(this);
          this.playerHeadA = this.find("vsCont/topCont/playerContA/head", Sprite);
          this.playerNameA = this.find("vsCont/topCont/playerContA/nameLab", Label);
          this.playerHeadB = this.find("vsCont/topCont/playerContB/head", Sprite);
          this.playerNameB = this.find("vsCont/topCont/playerContB/nameLab", Label);
          this.resultImg = this.find("vsCont/topCont/resultImg", Sprite);
          this.pointLab = this.find("vsCont/topCont/pointLab", Label);
          this.cardGroupA = this.find("vsCont/cardGroupCoverItemA").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.cardListA = this.find("vsCont/cardListA", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardListA.updateCell = this.updateCellCardA.bind(this);
          this.cardListA.clickCell = this.clickCellCardA.bind(this);
          this.cardGroupB = this.find("vsCont/cardGroupCoverItemB").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.cardListB = this.find("vsCont/cardListB", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardListB.updateCell = this.updateCellCardB.bind(this);
          this.cardListB.clickCell = this.clickCellCardB.bind(this);
          this.CloseBy("closeBtn");
        }

        update(dt) {}

        flush() {}

        onShow() {
          this.onLogUpdate();
        }

        onHide() {}

        onLogUpdate(logList) {
          this.logDatas = logList || [];
          this.logList.cellCount = this.logDatas.length;
        }

        clickCellLog(cell, cellInfo) {}

        updateCellLog(cell, cellInfo) {
          var logData = this.logDatas[cellInfo.index];
          cell.getChildByPath("select").active = cellInfo.isSelect;
          var logItem = cell.getComponent(_crd && VSSectionFightLogItem === void 0 ? (_reportPossibleCrUseOfVSSectionFightLogItem({
            error: Error()
          }), VSSectionFightLogItem) : VSSectionFightLogItem) || cell.addComponent(_crd && VSSectionFightLogItem === void 0 ? (_reportPossibleCrUseOfVSSectionFightLogItem({
            error: Error()
          }), VSSectionFightLogItem) : VSSectionFightLogItem);
          logItem.SetData(logData);
        }

        selectCellLog(cell, cellInfo, lastCell, lastInfo) {
          if (cell) {
            cell.getChildByPath("select").active = cellInfo.isSelect;
          }

          if (lastCell && lastInfo) {
            lastCell.getChildByPath("select").active = lastInfo.isSelect;
          }

          this.selectLog(this.logDatas[cellInfo.index]);
        }

        updateCellCardA(cell, cellInfo) {
          var cardData = this.playerDataA.cards[cellInfo.index];
          var logCardItem = cell.getComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem) || cell.addComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem);
          logCardItem.SetData(cardData);
        }

        clickCellCardA(cell, cellInfo) {}

        updateCellCardB(cell, cellInfo) {
          var cardData = this.playerDataB.cards[cellInfo.index];
          var logCardItem = cell.getComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem) || cell.addComponent(_crd && VSFightLogCardItem === void 0 ? (_reportPossibleCrUseOfVSFightLogCardItem({
            error: Error()
          }), VSFightLogCardItem) : VSFightLogCardItem);
          logCardItem.SetData(cardData);
        }

        clickCellCardB(cell, cellInfo) {}

        selectLog(data) {
          for (var key in data.battlePlayers) {
            var playerData = data.battlePlayers[key];

            if (playerData.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).UserInfo.playerId) {
              this.playerDataA = playerData;
            } else {
              this.playerDataB = playerData;
            }
          }

          this.pointLab.string = data.pointChange >= 0 ? "+" + data.pointChange : "-" + data.pointChange;
          var imgStr;

          if (data.result == "win") {
            imgStr = "win";
          } else if (data.result == "lost") {
            imgStr = "lost";
          } else if (data.result == "draw") {
            imgStr = "draw";
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/vs", imgStr, "spriteFrame"), SpriteFrame, res => {
            this.resultImg.spriteFrame = res;
          });
          this.updatePlayerData(this.playerDataA, this.playerNameA, this.playerHeadA, this.cardGroupA, this.cardListA);
          this.updatePlayerData(this.playerDataB, this.playerNameB, this.playerHeadB, this.cardGroupB, this.cardListB);
        }

        updatePlayerData(playerData, nameLab, head, cardGroupItem, cardList) {
          var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetHead(playerData.deckAttrs.avatarId);
          var headIconUrl;

          if (cfg) {
            headIconUrl = cfg.icon;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
              head.spriteFrame = res;
            });
          }

          nameLab.string = playerData.name;
          cardGroupItem.SetData(playerData.deckAttrs, false);
          cardList.cellCount = playerData.cards.length;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0aa508ad0748e8bbff2e95224a7e0557c32552eb.js.map