System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Label, LocalStorage, MsgPanel, Panel, PlayerData, UserEditInfoPanel, _crd, EditType;

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("UserEditInfoPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      LocalStorage = _unresolved_2.default;
    }, function (_unresolved_3) {
      MsgPanel = _unresolved_3.MsgPanel;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc5e0eZmGtBAK3qgCnnWuaB", "UserEditInfoPanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'Label']);

      EditType = /*#__PURE__*/function (EditType) {
        EditType[EditType["Edit_Name"] = 1] = "Edit_Name";
        EditType[EditType["Edit_WeChat"] = 2] = "Edit_WeChat";
        EditType[EditType["Edit_QQ"] = 3] = "Edit_QQ";
        return EditType;
      }(EditType || {});

      ;

      _export("UserEditInfoPanel", UserEditInfoPanel = class UserEditInfoPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/userInfo/UserEditInfoPanel";
          this.titleLab = void 0;
          this.editBox = void 0;
          this.btn = void 0;
          this.btnLab = void 0;
          // private consumeItem:ConsumeItem;
          this.curType = void 0;
        }

        // private stdPlayerChangeName:StdPlayerChangeName;
        onLoad() {
          this.titleLab = this.find("titleLab", Label);
          this.editBox = this.find("editBox", EditBox);
          this.btn = this.find("btn", Button);
          this.btnLab = this.find("btn/cont/btnLab", Label); // this.consumeItem = this.find("btn/cont/consumeItem").addComponent(ConsumeItem);

          this.CloseBy("mask");
          this.CloseBy("closeBtn");
          this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        flush(type) {
          this.curType = type;
          this.updateView();
        }

        onShow() {}

        onHide(...args) {}

        onBtnClick(btn) {
          let inputStr = this.editBox.string;

          if (this.curType == EditType.Edit_Name) {
            if (inputStr.length > 7 || inputStr.length < 2) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("请输入2-7字符的名字");
              return;
            } // if (!ItemUtil.CheckThingConsumes(this.stdPlayerChangeName.CostType, this.stdPlayerChangeName.CostID, this.stdPlayerChangeName.CostCount, true)) {
            //     return;
            // }
            // Session.Send({type: MsgTypeSend.ChangeName, data: {name:inputStr}});

          } else if (this.curType == EditType.Edit_WeChat) {
            let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");

            if (reg.test(inputStr)) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("微信号输入有误");
              return;
            } // Session.Send({type: MsgTypeSend.ChangeContactWechat, data: {contact_wechat:inputStr}});

          } else if (this.curType == EditType.Edit_QQ) {
            let qqReg = new RegExp(/^[1-9]\d{4,9}$/);

            if (!qqReg.test(inputStr)) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("QQ号输入有误");
              return;
            } // Session.Send({type: MsgTypeSend.ChangeContactQQ, data: {contact_qq:inputStr}});

          }
        }

        updateView() {
          // this.consumeItem.node.active = false;
          if (this.curType == EditType.Edit_Name) {
            // let num:number = (PlayerData.roleInfo.name_changed_times || 0) + 1;
            // this.stdPlayerChangeName = CfgMgr.GetPlayerChangeName(num);
            // let consumeList:SThing[] = ItemUtil.GetSThingList(this.stdPlayerChangeName.CostType, this.stdPlayerChangeName.CostID, this.stdPlayerChangeName.CostCount);
            // if(consumeList && consumeList.length > 0){
            //     this.consumeItem.node.active = true;
            //     this.consumeItem.SetData(consumeList[0]);
            // }
            this.titleLab.string = "改名";
            this.editBox.string = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).user.info.nickName;
          } else if (this.curType == EditType.Edit_WeChat) {
            this.titleLab.string = "编辑微信号";
            this.editBox.placeholder = "请输入微信号";
            let myWeChat = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetPlayerData(`Player_${(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId}`, "UserWeChat");

            if (myWeChat) {
              this.editBox.string = myWeChat.toString();
            } else {
              this.editBox.string = "";
            }
          } else if (this.curType == EditType.Edit_QQ) {
            this.titleLab.string = "编辑QQ号";
            this.editBox.placeholder = "请输入QQ号";
            let myQQ = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetPlayerData(`Player_${(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId}`, "UserQQ");

            if (myQQ) {
              this.editBox.string = myQQ;
            } else {
              this.editBox.string = "";
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4dddfdbd067a58d605a0f5005529d930bcc3fae6.js.map