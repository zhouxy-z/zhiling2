System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, VList, Panel, Req, Route, PlayerData, VSCardGruopItem, Session, VSCardGroupPanel, _crd;

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
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

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVSCardGruopItem(extras) {
    _reporterNs.report("VSCardGruopItem", "./VSCardGruopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  _export("VSCardGroupPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      VList = _unresolved_2.VList;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      Req = _unresolved_4.Req;
      Route = _unresolved_4.Route;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      VSCardGruopItem = _unresolved_6.VSCardGruopItem;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "095b7idXTlLU7yaWnE+HJNM", "VSCardGroupPanel", undefined);

      __checkObsolete__(['Node']);

      _export("VSCardGroupPanel", VSCardGroupPanel = class VSCardGroupPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/vs/VSCardGroupPanel";
          this.cardGroupList = void 0;
          this.cardGroupDataList = void 0;
        }

        onLoad() {
          this.cardGroupList = this.find("cont/cardGroupList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardGroupList.updateCell = this.updateCardGroupCell.bind(this);
          this.cardGroupList.clickCell = this.cardGroupClick.bind(this);
          this.CloseBy("mask");
          this.CloseBy("cont/closeBtn");
        }

        flush() {
          this.cardGroupDataList = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardNameList;
          this.cardGroupList.cellCount = this.cardGroupDataList.length;
        }

        onShow() {}

        onHide() {}

        updateCardGroupCell(cell, cellInfo) {
          var cellCom = cell.getComponent(_crd && VSCardGruopItem === void 0 ? (_reportPossibleCrUseOfVSCardGruopItem({
            error: Error()
          }), VSCardGruopItem) : VSCardGruopItem) || cell.addComponent(_crd && VSCardGruopItem === void 0 ? (_reportPossibleCrUseOfVSCardGruopItem({
            error: Error()
          }), VSCardGruopItem) : VSCardGruopItem);
          cellCom.SetData(this.cardGroupDataList[cellInfo.index]);
        }

        cardGroupClick(cell, cellInfo) {
          var cardGroupData = this.cardGroupDataList[cellInfo.index];
          /* if (cardGroupData.size < CfgMgr.CardGuroupComm.DeckFullSize) {
              MsgPanel.Show(`卡组卡牌数量不足${CfgMgr.CardGuroupComm.DeckFullSize}张无法出战`);
              return;
          } */

          var set = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["logic.protocol.setdeckdefault"]();
          set.deckId = cardGroupData.id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setdeckdefault"], set);
          this.Hide();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c367faddb255ae1de0f664f48ee9cf182b1fc10.js.map