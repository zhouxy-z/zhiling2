System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, path, SpriteFrame, folder_head_round, ResMgr, EventMgr, Evt_UserInfoChange, CfgMgr, HeadItem, _crd;

  function _reportPossibleCrUseOffolder_head_round(extras) {
    _reporterNs.report("folder_head_round", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_UserInfoChange(extras) {
    _reporterNs.report("Evt_UserInfoChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("HeadItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      path = _cc.path;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      folder_head_round = _unresolved_2.folder_head_round;
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
      Evt_UserInfoChange = _unresolved_3.Evt_UserInfoChange;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3546a7gJb5ASpcqtKMChFNK", "HeadItem", undefined);

      __checkObsolete__(['Component', 'Sprite', 'Node', 'path', 'SpriteFrame', 'Button']);

      _export("HeadItem", HeadItem = class HeadItem extends Component {
        constructor() {
          super(...arguments);
          this.headBg = void 0;
          this.icon = void 0;
          this.favorite = void 0;
          this.use = void 0;
          this.isInit = false;
          this._data = void 0;
        }

        onLoad() {
          this.headBg = this.node.getChildByName("headBg");
          this.icon = this.node.getChildByPath("Mask/icon").getComponent(Sprite);
          this.favorite = this.node.getChildByName("favorite");
          this.use = this.node.getChildByName("use");
          this.isInit = true;
          this.updateShow();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_UserInfoChange === void 0 ? (_reportPossibleCrUseOfEvt_UserInfoChange({
            error: Error()
          }), Evt_UserInfoChange) : Evt_UserInfoChange, this.onUserInfoChange, this);
        }

        onUserInfoChange(data) {
          if (!this.node.activeInHierarchy) return;
          if (this._data.playerId != data.playerId) return;
          this._data = data;
          this.updateShow();
        }

        SetData(data) {
          this._data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this._data) return;
          this.favorite.active = false;
          this.use.active = false;
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(Number(this._data.avatarUrl ? this._data.avatarUrl : 1) || 4);

          if (std) {
            var headUrl = path.join(_crd && folder_head_round === void 0 ? (_reportPossibleCrUseOffolder_head_round({
              error: Error()
            }), folder_head_round) : folder_head_round, std.Icon, "spriteFrame");
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(headUrl, SpriteFrame, res => {
              this.icon.spriteFrame = res;
            });
          }
        }

        get data() {
          return this._data;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a4d18eda17010574ad027f635dc2d8ba81e8120.js.map