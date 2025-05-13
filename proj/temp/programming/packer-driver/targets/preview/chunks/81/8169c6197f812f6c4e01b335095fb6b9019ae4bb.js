System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, path, Sprite, SpriteFrame, Panel, PlayerData, CfgMgr, ResMgr, SeasonTipsPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("SeasonTipsPanel", void 0);

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
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2474I0ApZD86OFCxe48cR3", "SeasonTipsPanel", undefined);

      __checkObsolete__(['Label', 'path', 'Sprite', 'SpriteFrame']);

      _export("SeasonTipsPanel", SeasonTipsPanel = class SeasonTipsPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/season/SeasonTipsPanel";
          this.icon = void 0;
          this.nameLab = void 0;
          this.seasonData = void 0;
        }

        onLoad() {
          this.icon = this.find("icon", Sprite);
          this.nameLab = this.find("nameLab", Label);
          this.CloseBy("closeBtn");
        }

        flush() {
          this.seasonData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData;
          this.setSeasonInfo();
        }

        onShow() {}

        onHide() {}

        setSeasonInfo() {
          var curStdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.seasonData.currentSeasonId);

          if (!curStdPVPSnatch) {
            this.Hide();
            return;
          }

          this.nameLab.string = curStdPVPSnatch.MatchName;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/season", "icon_" + curStdPVPSnatch.MatchID, "spriteFrame"), SpriteFrame, res => {
            this.icon.spriteFrame = res;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8169c6197f812f6c4e01b335095fb6b9019ae4bb.js.map