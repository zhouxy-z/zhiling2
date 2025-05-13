System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Toggle, MsgPanel, UserEditInfoPanel, Panel, HeadItem, PlayerData, UserHeadPanel, UserInfoPanel, _crd;

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserEditInfoPanel(extras) {
    _reporterNs.report("UserEditInfoPanel", "./UserEditInfoPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadItem(extras) {
    _reporterNs.report("HeadItem", "../common/HeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserHeadPanel(extras) {
    _reporterNs.report("UserHeadPanel", "./UserHeadPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("UserInfoPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      MsgPanel = _unresolved_2.MsgPanel;
    }, function (_unresolved_3) {
      UserEditInfoPanel = _unresolved_3.UserEditInfoPanel;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      HeadItem = _unresolved_5.HeadItem;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      UserHeadPanel = _unresolved_7.UserHeadPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9468NIKf9FHaQByo2FFFgv", "UserInfoPanel", undefined);

      __checkObsolete__(['Button', 'Label', 'Sprite', 'Toggle']);

      _export("UserInfoPanel", UserInfoPanel = class UserInfoPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/userInfo/UserInfoPanel";
          this.head = void 0;
          this.changeHeadBtn = void 0;
          this.nameLab = void 0;
          this.editNameBtn = void 0;
          this.uidLab = void 0;
          this.copyUidBtn = void 0;
          this.hideToggle = void 0;
          this.weiXinNumLab = void 0;
          this.weiXinBtn = void 0;
          this.weiXinBtnLab = void 0;
          this.qqNumLab = void 0;
          this.qqBtn = void 0;
          this.qqBtnLab = void 0;
          this._playerData = void 0;
        }

        onLoad() {
          this.head = this.find('HeadItem').addComponent(_crd && HeadItem === void 0 ? (_reportPossibleCrUseOfHeadItem({
            error: Error()
          }), HeadItem) : HeadItem);
          this.changeHeadBtn = this.find("changeHeadBtn", Button);
          this.nameLab = this.find("nameCont/nameLab", Label);
          this.editNameBtn = this.find("nameCont/editNameBtn", Button);
          this.uidLab = this.find("UIDCont/uidLab", Label);
          this.copyUidBtn = this.find("UIDCont/copyUidBtn", Button);
          this.hideToggle = this.find("hideToggle", Toggle);
          this.weiXinNumLab = this.find("weiXinCont/weiXinNumLab", Label);
          this.weiXinBtn = this.find("weiXinCont/weiXinBtn", Button);
          this.weiXinBtnLab = this.find("weiXinCont/weiXinBtn/weiXinBtnLab", Label);
          this.qqNumLab = this.find("qqCont/qqNumLab", Label);
          this.qqBtn = this.find("qqCont/qqBtn", Button);
          this.qqBtnLab = this.find("qqCont/qqBtn/qqBtnLab", Label);
          this.CloseBy("mask");
          this.changeHeadBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.editNameBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.copyUidBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.weiXinBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.qqBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.hideToggle.node.on(Toggle.EventType.TOGGLE, this.onToggleChange, this);
        }

        flush(playerData) {
          if (playerData === void 0) {
            playerData = null;
          }

          this._playerData = playerData;
          this.updateData(); // this.head.SetData(this._playerData);

          this.updateView();
        }

        onShow() {// EventMgr.on(Evt_PlayerBaseInfoChange, this.onUserDataChange, this);
        }

        onHide() {// EventMgr.off(Evt_PlayerBaseInfoChange, this.onUserDataChange, this);
        }

        updateData() {
          if (!this._playerData || this.isOwn) {// this._playerData = {
            //     playerId:PlayerData.player.playerId,
            //     nickName: PlayerData.user.info.nickName,
            //     contactWechat: PlayerData.user.info.contactWechat,
            //     contactQq: PlayerData.user.info.contactQq,
            // };
          }
        }

        onUserDataChange() {
          if (!this.node.activeInHierarchy) return;
          (_crd && UserEditInfoPanel === void 0 ? (_reportPossibleCrUseOfUserEditInfoPanel({
            error: Error()
          }), UserEditInfoPanel) : UserEditInfoPanel).Hide();
          this.updateData();
          this.updateView();
        }

        onToggleChange(t) {
          this.hideToggle.isChecked = false;
          (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
            error: Error()
          }), MsgPanel) : MsgPanel).Show("暂不支持隐藏显示");
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.changeHeadBtn:
              (_crd && UserHeadPanel === void 0 ? (_reportPossibleCrUseOfUserHeadPanel({
                error: Error()
              }), UserHeadPanel) : UserHeadPanel).Show(); // if(this.isOwn){
              //     MsgPanel.Show("功能暂未开启");
              //     return;
              // }

              break;

            case this.editNameBtn:
              (_crd && UserEditInfoPanel === void 0 ? (_reportPossibleCrUseOfUserEditInfoPanel({
                error: Error()
              }), UserEditInfoPanel) : UserEditInfoPanel).Show(1);
              break;

            case this.copyUidBtn:
              // let uidStr:string = this.uidLab.string;
              // CopyToClip(uidStr, (desc: string) => {
              //     if (desc != undefined || desc != null) {
              //         MsgPanel.Show("已复制到粘贴板");
              //     }
              // });
              break;

            case this.weiXinBtn:
              (_crd && UserEditInfoPanel === void 0 ? (_reportPossibleCrUseOfUserEditInfoPanel({
                error: Error()
              }), UserEditInfoPanel) : UserEditInfoPanel).Show(2);
              break;

            case this.qqBtn:
              (_crd && UserEditInfoPanel === void 0 ? (_reportPossibleCrUseOfUserEditInfoPanel({
                error: Error()
              }), UserEditInfoPanel) : UserEditInfoPanel).Show(3);
              break;
          }
        }

        updateView() {
          var weiXinStr = "未设置";
          var qqStr = "未设置";
          var isHide = true; //是否隐藏联系方式
          //查看自己

          if (this.isOwn) {
            isHide = true;
            this.hideToggle.node.active = true;
            this.hideToggle.isChecked = false;
            this.editNameBtn.node.active = true;
            this.changeHeadBtn.node.active = true;
            this.hideToggle.interactable = true;
            var myWeChat = this._playerData.contactWechat || "";
            var myQQ = this._playerData.contactQq || "";

            if (myWeChat) {
              weiXinStr = myWeChat;
            }

            if (myQQ) {
              qqStr = myQQ;
            }

            this.weiXinBtnLab.string = "编辑";
            this.qqBtnLab.string = "编辑";
            this.weiXinBtn.node.active = true;
            this.qqBtn.node.active = true;
          } else {
            isHide = true;
            this.hideToggle.node.active = false;
            this.editNameBtn.node.active = false;
            this.weiXinBtnLab.string = "复制";
            this.qqBtnLab.string = "复制";

            if (isHide) {
              qqStr = "********";
              weiXinStr = "********";
              this.weiXinBtn.node.active = false;
              this.qqBtn.node.active = false;
            } else {
              this.weiXinBtn.node.active = true;
              this.qqBtn.node.active = true;
            }

            this.changeHeadBtn.node.active = false;
            this.hideToggle.interactable = false;
          }

          this.nameLab.string = this._playerData.nickName;
          this.uidLab.string = this._playerData.playerId.toString();
          if (this._playerData.contactWechat) weiXinStr = this._playerData.contactWechat;
          if (this._playerData.contactQq) qqStr = this._playerData.contactQq;
          this.weiXinNumLab.string = weiXinStr;
          this.qqNumLab.string = qqStr;
        }
        /**
         * 是否自己
         */


        get isOwn() {
          return this._playerData.playerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86621742ed6d9c5b1067789df667b8cde2c0f9a1.js.map