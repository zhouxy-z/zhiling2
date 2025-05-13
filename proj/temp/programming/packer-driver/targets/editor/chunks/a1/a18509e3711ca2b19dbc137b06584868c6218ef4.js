System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, Evt_GetDownLineInfo, Ret, Route, Session, Tips, FrienModule, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_GetDownLineInfo(extras) {
    _reporterNs.report("Evt_GetDownLineInfo", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRet(extras) {
    _reporterNs.report("Ret", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  _export("FrienModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_GetDownLineInfo = _unresolved_2.Evt_GetDownLineInfo;
    }, function (_unresolved_3) {
      Ret = _unresolved_3.Ret;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      Tips = _unresolved_5.Tips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e102cyrVbZPpa2sfcBRKD3Y", "FriendModule", undefined);

      _export("FrienModule", FrienModule = class FrienModule {
        constructor() {
          // Session.on(MsgTypeRet.GetAgentInfoRet, this.GetAgentInfo, this);
          // Session.on(MsgTypeRet.GetIncomesRet, this.GetIncomes, this);
          // Session.on(MsgTypeRet.IncomeRet, this.IncomeResponse, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.getfriends"], this.GetDownlines, this); // Session.on(MsgTypeRet.GetUplineInfoRet, this.GetUplineInfo, this);

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.bindfriend"], this.BindUpline, this); // Session.on(MsgTypeRet.UnbindUplineRet, this.UnbindUpline, this);
          // Session.on(MsgTypeRet.GetContactInfoRet, this.GetContactInfo, this);
          // Session.on(MsgTypeRet.GetIncomeRecordsRet, this.GetIncomeRecords, this);
          // Session.on(MsgTypeRet.SetAssistRoleRet, this.SetAssistRole, this);
          // Session.on(MsgTypeRet.GetAssistRolesRet, this.GetAssistRole, this);
          // Session.on(MsgTypeRet.UnlockAssistRoleSlotRet, this.UnlockAssistRoleSlot, this);
          // Session.on(MsgTypeRet.CollectAssistIncomeRet, this.CollectAssistIncome, this);
          // Session.on(MsgTypeRet.SetAssistRoleUsageFeeRet, this.SetAssistRoleUsageFee, this);
        }
        /**请求数据 */


        GetIncomesReq() {// let incomeData = {
          //     type: MsgTypeSend.GetIncomesRequest,
          //     data: {},
          // }
          // Session.Send(incomeData);
        }

        GetAgentInfoReq() {// let friendData = {
          //     type: MsgTypeSend.GetAgentInfoRequest,
          //     data: {},
          // }
          // Session.Send(friendData);
        } // /**玩家上线好友以收益信息 */
        // private GetAgentInfo(data: SGetAgentInfo) {
        //     let role_data = PlayerData.GetRoles()
        //     if(data.assist_roles && data.assist_roles.length > 0){
        //         for (let index = 0; index < role_data.length; index++) {
        //             let is_has = false
        //             const element  = role_data[index];
        //             for (let index = 0; index < data.assist_roles.length; index++) {
        //                 const assist_roles_element = data.assist_roles[index];
        //                 if(assist_roles_element.role_id == element.id){
        //                     element.is_assisting = true;
        //                     is_has = true;
        //                     break;
        //                 }     
        //             }
        //             if(!is_has){
        //                 element.is_assisting = false;
        //             }
        //         }
        //     }else{
        //         for (let index = 0; index < role_data.length; index++) {          
        //             const element  = role_data[index];          
        //             element.is_assisting = false;
        //         }
        //     }
        //     EventMgr.emit(Evt_GetIncommons, data)
        // }
        // /**收益列表 */
        // private GetIncomes(data: SGetIncomes) {
        //     EventMgr.emit(Evt_GetIncommons, data)
        // }
        // /**领取收益 */
        // private IncomeResponse(data) {
        //     if (data.amount) {
        //         this.GetIncomesReq();
        //         this.GetAgentInfoReq();
        //         let reward: SThing[] = [{ type: ThingType.ThingTypeCurrency, currency: {type: 3, value: data.amount} }]
        //         RewardTips.Show(reward)
        //     }
        // }

        /**获取下线好友 */


        GetDownlines(data) {
          console.log(data);
          let friend_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["user.protocol.getfriends"].decode(data);
          console.log(friend_data);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_GetDownLineInfo === void 0 ? (_reportPossibleCrUseOfEvt_GetDownLineInfo({
            error: Error()
          }), Evt_GetDownLineInfo) : Evt_GetDownLineInfo, friend_data.friends); // if(data.include_role){
          //     //好友的助战角色列表
          //     // EventMgr.emit(Evt_UpdateFriendAssistRole, data);
          // }else{
          //     //好友列表
          //     EventMgr.emit(Evt_GetDownLineInfo, data);
          //     // EventMgr.emit(Evt_GetRandomDownline, data);
          // }
        } // /**上线好友信息 */
        // private GetUplineInfo(data) {
        //     EventMgr.emit(Evt_GetUPLineInfo, data)
        // }

        /**添加上线 */


        BindUpline(data) {
          console.log(data);
          let bind_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["user.protocol.bindfriend"].decode(data);
          console.log(bind_data);

          if (bind_data.res.code == 200) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("添加成功"); // let upLineData = {
            //     type: MsgTypeSend.GetUplineInfoRequest,
            //     data: {},
            // }
            // Session.Send(upLineData);
            // EventMgr.emit(Evt_CloseFriendBindOrUnbindPanel)
          } else {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("添加失败");
          }
        }
        /**解绑上线 */


        UnbindUpline(data) {// let upLineData = {
          //     type: MsgTypeSend.GetUplineInfoRequest,
          //     data: {},
          // }
          // Session.Send(upLineData);
          // EventMgr.emit(Evt_CloseFriendBindOrUnbindPanel)
        } // /**好友联系方式 */
        // private GetContactInfo(data) {
        //     let datas: SGetContactInfo;
        //     if (data.player_id != "") {
        //         datas = data;
        //     } else {
        //         datas = { player_id: "1211", name: "hahah", wechat_id: "110", qq_id: "120", };
        //     }
        //     EventMgr.emit(Evt_GetContactInfo, datas);
        // }
        // /**收益记录 */
        // private GetIncomeRecords(data:SIncomeRecords){
        //     EventMgr.emit(Evt_GetIncomeRecords, data);
        // }
        // /**设置角色助战 */
        // private SetAssistRole(data:{fee:number, role_id:string, slot:number, canceled_role:string}) {
        //     if(data){
        //         this.updeteInfo();
        //         // if(data.role_id && data.canceled_role == ""){
        //         //     let role = PlayerData.GetRoleById(data.role_id)
        //         //     role.is_assisting = true;
        //         // }else{
        //         //     let role = PlayerData.GetRoleById(data.canceled_role)
        //         //     role.is_assisting = false;
        //         // }
        //         EventMgr.emit(Evt_SetAssistRole,data);       
        //     }else{
        //         Tips.Show("助战失败")
        //     }
        // }
        // /**获取助战角色列表 */
        // private GetAssistRole(data:{assistRoles:SAssistRoleInfo[]}) {
        //     console.log("获取助战角色列表", data)
        //     if(data && data.assistRoles){
        //         EventMgr.emit(Evt_UpdateFriendAssistRole, data);
        //     }
        // }
        // /**空位解锁 */
        // private UnlockAssistRoleSlot(data){
        //    this.updeteInfo();
        //     console.log("空位解锁", data)
        // }
        //  /**领取助战奖励 */
        //  private CollectAssistIncome(data){
        //     // let count = parseInt(formatDecimal(data.amount, 2));
        //     let reward: SThing[] = [{ type: ThingType.ThingTypeCurrency, currency: {type: 0, value: data.collected_amount} }]
        //     RewardTips.Show(reward)
        //     console.log("领取助战奖励", reward)
        // }
        // /**设置助战费用 */
        // private SetAssistRoleUsageFee(){
        //     this.updeteInfo();
        // }
        // /**解锁/助战/取消助战 后刷新数据 */
        // private updeteInfo(){
        //     let friendData = {
        //         type: MsgTypeSend.GetAgentInfoRequest,
        //         data: {},
        //     }
        //     Session.Send(friendData);
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a18509e3711ca2b19dbc137b06584868c6218ef4.js.map