System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Panel, AutoScroller, FriendInviteListPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataTask(extras) {
    _reporterNs.report("SPlayerDataTask", "../player/PlayerStruct", _context.meta, extras);
  }

  _export("FriendInviteListPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "758815Y7ZJNHrZNBAiZ+g69", "FriendInviteListPanel", undefined);

      __checkObsolete__(['Button', 'Color', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate', 'path', 'v3']);

      _export("FriendInviteListPanel", FriendInviteListPanel = class FriendInviteListPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/friend/FriendInviteListPanel";
          this.filtrateBtn = void 0;
          this.ScrollView = void 0;
          this.incomeNum = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("frame/closeBtn");
          this.incomeNum = this.find("frame/get/incomeNum").getComponent(Label);
          this.filtrateBtn = this.find("frame/filtrateBtn", Button);
          this.filtrateBtn.node.on("click", this.onFiltrate, this);
          this.ScrollView = this.find("frame/ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.ScrollView.SetHandle(this.updateItem.bind(this)); // EventMgr.on(Evt_TaskChange, this.flush, this);
          // EventMgr.on(Evt_GetReward, this.onGetReward, this);
        }

        onShow() {}

        async flush(...args) {// let datas: SPlayerDataTask[] = []
          // let task_data = PlayerData.roleInfo.tasks;
          // let allNum = 0;
          // for (const key in task_data) {
          //     if (Object.prototype.hasOwnProperty.call(task_data, key)) {
          //         const element = task_data[key];
          //         let stdTask = CfgMgr.GetTaskById(element.id);
          //         if (stdTask && stdTask.Show == STaskShowType.friend && stdTask.TaskType == STaskType.invite) {
          //             if (element.s == STaskState.Finsh) {
          //                 allNum += stdTask.RewardNumber[0];
          //             }
          //             datas.push(element);
          //         }
          //     }
          // }
          // datas.sort((a, b) => a.s - b.s)
          // this.ScrollView.UpdateDatas(datas);
          // this.incomeNum.string = allNum + "";
        }

        onGetReward(id) {// let datas = CfgMgr.getTaskRewardThings(id);
          // RewardTips.Show(datas);
        }

        async updateItem(item, data, index) {// let cfg = CfgMgr.GetTaskById(data.id);
          // let tittle = item.getChildByPath("frame/tittleNode/tittle").getComponent(Label);
          // tittle.string = cfg.TaskName;
          // let tittleNum = item.getChildByPath("frame/tittleNode/tittleNum").getComponent(Label);
          // let num = data.v > cfg.CompletionNum ? cfg.CompletionNum : data.v;
          // tittleNum.string = "(" + num + "/" + cfg.CompletionNum + ")";
          // let icon = item.getChildByPath("frame/income/icon").getComponent(Sprite);
          // let icon_url = "yuanshi";
          // icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, icon_url + "", "spriteFrame"), SpriteFrame);
          // let incomeNum = item.getChildByPath("frame/income/incomeNum").getComponent(Label);
          // incomeNum.string = cfg.RewardNumber[0] + "";
          // let getBtn = item.getChildByPath("frame/getBtn").getComponent(Button);
          // getBtn.node.off("click");
          // getBtn.node.on("click", () => {
          //     let info = {
          //         type: MsgTypeSend.CompleteTask,
          //         data: {
          //             task_id: data.id
          //         }
          //     }
          //     Session.Send(info, MsgTypeRet.CompleteTaskRet);
          // });
          // let unGet = item.getChildByPath("frame/unGet")
          // getBtn.node.active = data.v >= cfg.CompletionNum && data.s != STaskState.Finsh;
          // unGet.active = data.v < cfg.CompletionNum;
          // tittleNum.color = data.v < cfg.CompletionNum ? new Color().fromHEX('a55615') : new Color().fromHEX('71B12C');
          // let geted = item.getChildByPath("frame/geted").getComponent(Sprite);
          // geted.node.active = data.s == STaskState.Finsh;
        }

        onFiltrate() {// // let server = GameSet.Server_cfg;
          // // if(server && server.Mark){
          // //     CallApp({api:Api_Share}); 
          // // }else{
          // //     MsgPanel.Show("功能暂未开启")
          // //     return;
          // // }
          // // // FriendSharePanel.Show();
          // MsgPanel.Show("功能暂未开启")
          // return;
          // // CallApp({api:Api_Share,appid:GameSet.Server_cfg.AppId});
        }

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0472f5cc08acfd5b19ad3d70c77f07d2a25cae64.js.map