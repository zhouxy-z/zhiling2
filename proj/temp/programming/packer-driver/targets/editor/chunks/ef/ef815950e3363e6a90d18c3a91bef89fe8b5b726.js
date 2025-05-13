System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, path, Sprite, SpriteFrame, proto, folder_icon, ResMgr, CfgMgr, PlayerData, DateUtils, VSSectionFightLogItem, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  _export("VSSectionFightLogItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      folder_icon = _unresolved_3.folder_icon;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      DateUtils = _unresolved_6.DateUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c82bd1wLc9H1odjr0gVYf7y", "VSSectionFightLogItem", undefined);

      __checkObsolete__(['Component', 'Label', 'path', 'Sprite', 'SpriteFrame']);

      _export("VSSectionFightLogItem", VSSectionFightLogItem = class VSSectionFightLogItem extends Component {
        constructor(...args) {
          super(...args);
          this.head = void 0;
          this.resultImg = void 0;
          this.timeLab = void 0;
          this.pointLab = void 0;
          this.data = void 0;
          this.isInit = false;
        }

        onLoad() {
          this.head = this.node.getChildByPath("head").getComponent(Sprite);
          this.resultImg = this.node.getChildByPath("resultImg").getComponent(Sprite);
          this.timeLab = this.node.getChildByPath("timeLab").getComponent(Label);
          this.pointLab = this.node.getChildByPath("pointLab").getComponent(Label);
          this.isInit = true;
          if (this.data) this.updateShow();
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          let dates = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).TimestampToDate(this.data.timestamp * 1000, true);
          this.timeLab.string = `${dates[0]}-${dates[1]}-${dates[2]}  ${dates[3]}:${dates[4]}:${dates[5]}`;
          let playerData = this.data.battlePlayers[(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).UserInfo.playerId];
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetHead(playerData.deckAttrs.avatarId);

          if (cfg) {
            let headIconUrl = cfg.icon;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
              error: Error()
            }), folder_icon) : folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
              this.head.spriteFrame = res;
            });
          }

          let imgStr;

          if (this.data.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultWin) {
            imgStr = "win";
          } else if (this.data.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultLost) {
            imgStr = "lost";
          } else if (this.data.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultTie) {
            imgStr = "draw";
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/vs", imgStr, "spriteFrame"), SpriteFrame, res => {
            this.resultImg.spriteFrame = res;
          });
          this.pointLab.string = this.data.pointChange >= 0 ? `+${this.data.pointChange}` : `-${this.data.pointChange}`;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef815950e3363e6a90d18c3a91bef89fe8b5b726.js.map