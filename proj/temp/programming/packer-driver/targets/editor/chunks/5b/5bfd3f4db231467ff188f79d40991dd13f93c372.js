System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Panel, MailPlayerPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  _export("MailPlayerPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c596gTqnBMuJM4KugvRUYL", "MailPlayerPanel", undefined);

      __checkObsolete__(['Input', 'Label', 'Node']);

      _export("MailPlayerPanel", MailPlayerPanel = class MailPlayerPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/mail/MailPlayerPanel";
          this.head = void 0;
          this.nameLab = void 0;
          this.uidLab = void 0;
          this.guide_name = void 0;
          this.guiidejob_name = void 0;
          this.homlandLab = void 0;
          this.inviteBtn = void 0;
          this.giftBtn = void 0;
          this.data = null;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("spriteFrame/Close");
          this.head = this.find(`spriteFrame/headInfo`);
          this.nameLab = this.find(`spriteFrame/msg/role_name`, Label);
          this.uidLab = this.find(`spriteFrame/msg/uid`, Label);
          this.guide_name = this.find(`spriteFrame/msg/guide_name`, Label);
          this.guiidejob_name = this.find(`spriteFrame/msg/guiidejob_name`, Label);
          this.homlandLab = this.find(`spriteFrame/msg/land`, Label);
          this.inviteBtn = this.find(`spriteFrame/inviteBtn`);
          this.giftBtn = this.find(`spriteFrame/giftBtn`);
          this.onBntEvent(); // EventMgr.on(Evt_Mail_Update, this.flush, this);
        }

        onBntEvent() {
          this.inviteBtn.on(Input.EventType.TOUCH_END, () => {}, this);
          this.giftBtn.on(Input.EventType.TOUCH_END, this.onSendGift, this);
        }

        onSendGift() {// MailSendPanel.Show(this.data);
        }

        onShow() {}

        flush(data) {
          this.data = data;
          this.initMsg();
        }
        /**初始化玩家信息 */


        initMsg() {
          this.nameLab.string = this.data.nickName;
          this.uidLab.string = this.data.playerId;
          let appointed_str = null; // if(this.data.guild_info){
          //     appointed_str = CfgMgr.GetGuildRole(this.data.guild_info.role_type);
          // }
          // this.guide_name.string = this.data.guild_info ? (this.data.guild_info.name != "" ? this.data.guild_info.name : "未加入" ) : "未加入";

          this.guiidejob_name.string = appointed_str ? appointed_str.Name : "无"; // let homeLandMsg = CfgMgr.GetHomeLandInit(this.data.homeland_id);
          // if (homeLandMsg) {
          //     this.homlandLab.string = homeLandMsg.Desc[0];
          // }
        }

        onHide(...args) {// EventMgr.off(Evt_Mail_Update, this.flush, this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5bfd3f4db231467ff188f79d40991dd13f93c372.js.map