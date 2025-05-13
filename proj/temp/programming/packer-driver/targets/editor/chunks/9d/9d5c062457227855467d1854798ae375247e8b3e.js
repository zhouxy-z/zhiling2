System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, Label, Toggle, js, EventMgr, Evt_Currency_Updtae, Evt_Hide_Scene, Evt_Show_Scene, FriendListPanel, FriendBindOrUnbindPanel, FriendBindType, DateUtils, Panel, FriendPanel, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Currency_Updtae(extras) {
    _reporterNs.report("Evt_Currency_Updtae", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Hide_Scene(extras) {
    _reporterNs.report("Evt_Hide_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Show_Scene(extras) {
    _reporterNs.report("Evt_Show_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendListPanel(extras) {
    _reporterNs.report("FriendListPanel", "./FriendListPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendBindOrUnbindPanel(extras) {
    _reporterNs.report("FriendBindOrUnbindPanel", "./FriendBindOrUnbindPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendBindType(extras) {
    _reporterNs.report("FriendBindType", "./FriendBindOrUnbindPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGetAgentInfo(extras) {
    _reporterNs.report("SGetAgentInfo", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGetIncomes(extras) {
    _reporterNs.report("SGetIncomes", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGetUplineInfo(extras) {
    _reporterNs.report("SGetUplineInfo", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSUplineInfo(extras) {
    _reporterNs.report("SUplineInfo", "../player/PlayerStruct", _context.meta, extras);
  }

  _export("FriendPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Input = _cc.Input;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
      js = _cc.js;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_Currency_Updtae = _unresolved_2.Evt_Currency_Updtae;
      Evt_Hide_Scene = _unresolved_2.Evt_Hide_Scene;
      Evt_Show_Scene = _unresolved_2.Evt_Show_Scene;
    }, function (_unresolved_3) {
      FriendListPanel = _unresolved_3.FriendListPanel;
    }, function (_unresolved_4) {
      FriendBindOrUnbindPanel = _unresolved_4.FriendBindOrUnbindPanel;
      FriendBindType = _unresolved_4.FriendBindType;
    }, function (_unresolved_5) {
      DateUtils = _unresolved_5.DateUtils;
    }, function (_unresolved_6) {
      Panel = _unresolved_6.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b64dkv4+VGBLUs/Jxgv5zw", "FriendPanel", undefined);

      __checkObsolete__(['Button', 'Input', 'Label', 'Node', 'Toggle', 'UIOpacity', 'js', 'sp']);

      _export("FriendPanel", FriendPanel = class FriendPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/friend/FriendPanel";
          // private itemNode: Node[];
          this.item = void 0;
          this.currency3 = void 0;
          this.currency = void 0;
          this.friendInfoPage = void 0;
          this.invitePage = void 0;
          this.addNode = void 0;
          this.infoNode = void 0;
          this.navBtns = void 0;
          this.lookFriendBtn = void 0;
          this.lookIncomBtn = void 0;
          this.helpFightBtn = void 0;
          this.inviteBtn = void 0;
          this.friendNum = void 0;
          this.incomeNum = void 0;
          this.friend_name = void 0;
          this.friend_time = void 0;
          this.friend_lv = void 0;
          this.friend_power = void 0;
          this.addBtn = void 0;
          this.unbind = void 0;
          this.unGetIncome = void 0;
          this.value = void 0;
          this.qipao_bg = void 0;
          this.heleBtn = void 0;
          this.filtrateBtn = void 0;
          this.page = void 0;
          this.FriendData = void 0;
          this.friendIncomeData = void 0;
          this.uplineFriendInfo = void 0;
          this.totalIncome = void 0;
          //累计收益
          this.maxFriendNum = void 0;
        }

        onLoad() {
          this.CloseBy("closeBtn");
          this.heleBtn = this.find("page/frame/helpBtn"); // this.itemNode = this.find("itemNode").children.concat();

          this.item = this.find("item");
          this.currency3 = this.find("topLayout/currency3/Label", Label);
          this.currency = this.find("topLayout/currency/Label", Label);
          this.friendInfoPage = this.find("page/frame/friendInfoPage");
          this.invitePage = this.find("page/frame/invitePage");
          this.addNode = this.find("page/frame/invitePage/addNode");
          this.infoNode = this.find("page/frame/invitePage/infoNode");
          this.lookFriendBtn = this.find("page/frame/friendInfoPage/frined_bg/lookFriendBtn", Button);
          this.lookIncomBtn = this.find("page/frame/friendInfoPage/incom_bg/lookIncomBtn", Button);
          this.helpFightBtn = this.find("page/frame/helpFightBtn", Button);
          this.inviteBtn = this.find("page/frame/inviteBtn", Button);
          this.friendNum = this.find("page/frame/friendInfoPage/frined_bg/friendNum", Label);
          this.incomeNum = this.find("page/frame/friendInfoPage/incom_bg/Layout/incomeNum", Label);
          this.friend_name = this.find("page/frame/invitePage/infoNode/invite_bg/friend_name", Label);
          this.friend_time = this.find("page/frame/invitePage/infoNode/invite_bg/friend_time", Label);
          this.friend_lv = this.find("page/frame/invitePage/infoNode/juese/friend_lv", Label);
          this.friend_power = this.find("page/frame/invitePage/infoNode/invite_bg/friend_power", Label);
          this.addBtn = this.find("page/frame/invitePage/addNode/addBtn", Button);
          this.unbind = this.find("page/frame/invitePage/infoNode/invite_bg/unbind", Button);
          this.unGetIncome = this.find("page/unGetIncome");
          this.qipao_bg = this.find("page/unGetIncome/qipao_bg");
          this.value = this.find("page/unGetIncome/qipao_bg/value", Label);
          this.filtrateBtn = this.find("page/frame/filtrateBtn", Button); // this.filtrateBtn.node.on("click", this.onFiltrate, this);

          this.navBtns = this.find("page/navBar").children.concat();

          for (let btn of this.navBtns) {
            btn.on('toggle', this.onPage, this);
          }

          this.lookFriendBtn.node.on("click", this.onLookFriend, this); // this.lookIncomBtn.node.on("click", this.onLookIncom, this);
          // this.helpFightBtn.node.on("click", this.onHelpFight, this);
          // this.inviteBtn.node.on("click", this.onInvite, this);

          this.addBtn.node.on("click", this.onAdd, this); // this.unbind.node.on("click", this.onUnbind, this);

          this.qipao_bg.on(Input.EventType.TOUCH_END, this.onGet, this); // this.heleBtn.on(Input.EventType.TOUCH_END, this.onHelpBtn, this);
          // EventMgr.on(Evt_GetIncommons, this.updateIncomeData, this)
          // EventMgr.on(Evt_GetUPLineInfo, this.updateUpLineData, this)

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Currency_Updtae === void 0 ? (_reportPossibleCrUseOfEvt_Currency_Updtae({
            error: Error()
          }), Evt_Currency_Updtae) : Evt_Currency_Updtae, this.onCurrencyUpdate, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Hide_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Hide_Scene({
            error: Error()
          }), Evt_Hide_Scene) : Evt_Hide_Scene, js.getClassName(this)); // AudioMgr.playScene("friend_fountain", true);
        }

        async flush(...args) {
          // AdaptBgTop(this.node.getChildByPath("di"));
          this.onCurrencyUpdate();
          this.SetPage(0);
        }

        async SetPage(page) {
          if (!this.$hasLoad) await this.initSub;
          if (!this.navBtns[page]) return;
          this.page = undefined;
          this.navBtns[page].getComponent(Toggle).isChecked = true;
          this.onPage(this.navBtns[page].getComponent(Toggle));
        }

        onPage(toggle) {
          let page = this.navBtns.indexOf(toggle.node);
          if (page < 0 || page == this.page) return;
          this.page = page;
          this.friendInfoPage.active = false;
          this.invitePage.active = false;
          this.unGetIncome.active = false;

          switch (this.page) {
            case 0:
              // let incomeData = {
              //     type: MsgTypeSend.GetIncomesRequest,
              //     data: {},
              // }
              // Session.Send(incomeData);
              // let friendData = {
              //     type: MsgTypeSend.GetAgentInfoRequest,
              //     data: {},
              // }
              // Session.Send(friendData);
              this.friendInfoPage.active = true;
              break;

            case 1:
              // this.navBtns[page].getComponent(Toggle).isChecked = false;
              // MsgPanel.Show("功能暂未开启")
              // this.SetPage(0)
              // return;
              this.invitePage.active = true; // if (this.FriendData && this.FriendData.upline_id) {
              //     // let upLineData = {
              //     //     type: MsgTypeSend.GetUplineInfoRequest,
              //     //     data: {},
              //     // }
              //     // Session.Send(upLineData);
              // } else {

              let info = {
                player_id: "",
                name: "",
                icon_url: "",
                level: 0,
                last_offline_time: 0,
                battle_power: 0,
                is_online: false
              };
              let upline_data = {
                has_upline: false,
                upline: info
              };
              this.updateUpLineData(upline_data); // }

              break;

            default:
              break;
          }
        } // /**刷新收益信息 */
        // private updateIncomeData(data: SGetIncomes | SGetAgentInfo) {
        //     // if(data){
        //     //     if ((data as SGetIncomes).incomes) {
        //     //         let Income: SGetIncomes = (data as SGetIncomes);
        //     //         this.friendIncomeData = Income;
        //     //         this.friendNum.string = Income.total_downlines + "";
        //     //         this.maxFriendNum = Income.total_downlines;
        //     //         let datas: SIncomesInfo[] = Income.incomes;
        //     //         let anmindex = ["animation1", "animation2", "animation3"]
        //     //         if (Income.incomes.length != 0) {
        //     //             for (let index = 0; index < this.itemNode.length; index++) {
        //     //                 if (datas[index] && datas[index].amount != 0) {
        //     //                     this.itemNode[index].getComponent(sp.Skeleton).setAnimation(0, anmindex[randomI(0, 2)], true)
        //     //                     let item = this.itemNode[index].getChildByPath("item");
        //     //                     let value = this.itemNode[index].getChildByPath("item/value").getComponent(Label);
        //     //                     let name = this.itemNode[index].getChildByPath("item/name").getComponent(Label);
        //     //                     value.string = ToFixed(datas[index].amount, 4) + "";
        //     //                     name.string = datas[index].name;
        //     //                     item.getComponent(UIOpacity).opacity = 255;
        //     //                     item.off(Input.EventType.TOUCH_END, this.onGet, this);
        //     //                     item.on(Input.EventType.TOUCH_END, this.onGet, this);
        //     //                 }
        //     //             }
        //     //         } else {
        //     //             for (let index = 0; index < this.itemNode.length; index++) {
        //     //                 this.itemNode[index].getComponent(sp.Skeleton).setAnimation(0, anmindex[randomI(0, 2)], true)
        //     //                 let item = this.itemNode[index].getChildByPath("item");
        //     //                 item.getComponent(UIOpacity).opacity = 0;
        //     //                 item.off(Input.EventType.TOUCH_END, this.onGet, this);
        //     //             }
        //     //         }
        //     //         if (this.page == 0 && Income.total_unclaimed > 0 && datas.length >= 10) {
        //     //             this.unGetIncome.active = true;
        //     //         } else {
        //     //             this.unGetIncome.active = false;
        //     //         }
        //     //         // this.unGetIncome.active = (Income.total_unclaimed > 0 && datas.length >=10);
        //     //         this.value.string = ToFixed(Income.total_unclaimed, 4);
        //     //     } else {
        //     //         let agentInfo: SGetAgentInfo = (data as SGetAgentInfo);
        //     //         this.incomeNum.string = ToFixed((data as SGetAgentInfo).daily_income, 4);
        //     //         this.totalIncome = (data as SGetAgentInfo).total_income;
        //     //         this.FriendData = agentInfo;
        //     //     }
        //     // }
        // }

        /**刷新上线信息 */


        updateUpLineData(data) {
          this.uplineFriendInfo = data.upline;
          this.addNode.active = !data.has_upline;
          this.infoNode.active = data.has_upline;

          if (data.has_upline) {
            this.friend_name.string = data.upline.name;

            if (!data.upline.is_online) {
              if (data.upline.last_offline_time != 0) {
                let time_data = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).timeElapsedSince(data.upline.last_offline_time * 1000);

                if (time_data.days) {
                  this.friend_time.string = time_data.days + "天前";
                } else if (time_data.hours) {
                  this.friend_time.string = time_data.hours + "小时前";
                } else if (time_data.minutes) {
                  this.friend_time.string = time_data.minutes + "分钟前";
                }
              } else {// let day = CfgMgr.GetCommon(StdCommonType.Friend).UnboundDays;
                // this.friend_time.string = day + "天前";
              }
            } else {
              this.friend_time.string = "在线";
            }

            this.friend_lv.string = "Lv" + data.upline.level;
            this.friend_power.string = data.upline.battle_power + "";
          }
        }

        onCurrencyUpdate() {// this.currency3.string = ToFixed(PlayerData.roleInfo.currency3, 4);
          // this.currency.string = ToFixed(PlayerData.roleInfo.currency, 4);
        }
        /**领取收益 */


        onGet() {// AudioMgr.playSound("friend_get_income", false);
          // let data = {
          //     type: MsgTypeSend.IncomeRequest,
          //     data: {},
          // }
          // Session.Send(data);
        } //查看好友


        onLookFriend() {
          (_crd && FriendListPanel === void 0 ? (_reportPossibleCrUseOfFriendListPanel({
            error: Error()
          }), FriendListPanel) : FriendListPanel).Show(this.maxFriendNum);
        } // //查看收益记录
        // private onLookIncom() {
        //     FriendIncomeListPanel.Show(this.totalIncome);
        // }
        // /**协助 */
        // private onHelpFight() {
        //     FriendHelpPanel.Show(this.FriendData);
        // }
        // /**邀请 */
        // private onInvite() {
        //     Goto(PANEL_TYPE.FriendInviteListPanel);
        // }
        //添加绑定好友


        onAdd() {
          // MsgPanel.Show("功能暂未开启");
          (_crd && FriendBindOrUnbindPanel === void 0 ? (_reportPossibleCrUseOfFriendBindOrUnbindPanel({
            error: Error()
          }), FriendBindOrUnbindPanel) : FriendBindOrUnbindPanel).Show((_crd && FriendBindType === void 0 ? (_reportPossibleCrUseOfFriendBindType({
            error: Error()
          }), FriendBindType) : FriendBindType).bind);
        } // //解绑
        // private onUnbind() {
        //     FriendBindOrUnbindPanel.Show(FriendBindType.unbind, this.uplineFriendInfo);
        // }
        // private onHelpBtn() {
        //     Tips2.Show(Tips2ID.Friend);
        // }
        // private onFiltrate() {
        //     // let server = GameSet.Server_cfg;
        //     // if(server && server.Mark){
        //         // CallApp({api:Api_Share}); 
        //     // }else{
        //     //     MsgPanel.Show("功能暂未开启")
        //     //     return;
        //     // }
        //     // // FriendSharePanel.Show();
        //     // MsgPanel.Show("功能暂未开启")
        //     // return;
        //     CallApp({api:Api_Share,appid:GameSet.Server_cfg.AppId});
        // }


        onHide(...args) {
          // AudioMgr.stopScene("friend_fountain")
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_Show_Scene === void 0 ? (_reportPossibleCrUseOfEvt_Show_Scene({
            error: Error()
          }), Evt_Show_Scene) : Evt_Show_Scene, js.getClassByName(this));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d5c062457227855467d1854798ae375247e8b3e.js.map