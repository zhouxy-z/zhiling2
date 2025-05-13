System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Sprite, SpriteFrame, ResMgr, UserHeadItem, _crd;

  function _reportPossibleCrUseOfStdHead(extras) {
    _reporterNs.report("StdHead", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("UserHeadItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a09d61gtsJEa664BFEhZBN9", "UserHeadItem", undefined);

      __checkObsolete__(['Component', 'Sprite', 'Node', 'path', 'SpriteFrame']);

      _export("UserHeadItem", UserHeadItem = class UserHeadItem extends Component {
        constructor() {
          super(...arguments);
          this.headBg = void 0;
          this.frameBg = void 0;
          this.icon = void 0;
          this.frame = void 0;
          this.lock = void 0;
          this.select = void 0;
          this.limt = void 0;
          this.isInit = false;
          this.std = void 0;
        }

        onLoad() {
          this.headBg = this.node.getChildByName("headBg");
          this.frameBg = this.node.getChildByName("frameBg");
          this.icon = this.node.getChildByPath("Mask/icon").getComponent(Sprite);
          this.frame = this.node.getChildByName("frame").getComponent(Sprite);
          this.lock = this.node.getChildByName("lock");
          this.select = this.node.getChildByName("select");
          this.select.active = false;
          this.limt = this.node.getChildByName("limit");
          this.isInit = true;
          this.updateShow();
        }

        SetData(data) {
          this.std = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.std) return;
          var headUrl; // if(this.std.HeadType == StdHeadType.Head){
          //     this.headBg.active = true;
          //     this.frameBg.active = false;
          //     this.frame.node.active = false;
          //     headUrl = path.join(folder_head_round, this.std.IconRes, "spriteFrame");
          // }else if(this.std.HeadType == StdHeadType.HeadFrame){
          //     this.headBg.active = false;
          //     this.frameBg.active = true;
          //     this.frame.node.active = true;
          //     headUrl = path.join(folder_head_round, "01", "spriteFrame");
          //     let frameUrl = path.join(folder_head, `frame/${this.std.IconRes}`, "spriteFrame");
          //     ResMgr.LoadResAbSub(frameUrl, SpriteFrame, res => {
          //         this.frame.spriteFrame = res;
          //     });
          // } 

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(headUrl, SpriteFrame, res => {
            this.icon.spriteFrame = res;
          });
          this.limt.active = this.std.LimitTime > 0;

          if (this.std.ConditionId && this.std.ConditionId.length) {
            this.lock.active = true;
          } else {
            this.lock.active = false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=08dacdbbf17c3ab0a35a4b55362b3c1797a4f7d9.js.map