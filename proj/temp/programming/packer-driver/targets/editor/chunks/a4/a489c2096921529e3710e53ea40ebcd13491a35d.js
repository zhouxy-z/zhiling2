System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, Component, Label, Session, AutoScroller, STaskState, CfgMgr, Req, Route, MainTaskCont, _crd;

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataTask(extras) {
    _reporterNs.report("SPlayerDataTask", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskState(extras) {
    _reporterNs.report("STaskState", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  _export("MainTaskCont", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Session = _unresolved_2.Session;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      STaskState = _unresolved_4.STaskState;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }, function (_unresolved_6) {
      Req = _unresolved_6.Req;
      Route = _unresolved_6.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea7c1BINDhJgbB5z4g3wJpu", "MainTaskCont", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'Label', 'Node']);

      _export("MainTaskCont", MainTaskCont = class MainTaskCont extends Component {
        constructor(...args) {
          super(...args);
          this.nameLab = void 0;
          this.proLab = void 0;
          this.goBtn = void 0;
          this.getBtn = void 0;
          this.finsh = void 0;
          this.awardList = void 0;
          this.isInit = void 0;
          this.data = void 0;
          this.std = void 0;
          this.awList = void 0;
        }

        onLoad() {
          this.nameLab = this.node.getChildByPath("titleCont/nameLab").getComponent(Label);
          this.proLab = this.node.getChildByPath("titleCont/proLab").getComponent(Label);
          this.awardList = this.node.getChildByName("awardList").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.goBtn = this.node.getChildByName("goBtn").getComponent(Button);
          this.getBtn = this.node.getChildByName("getBtn").addComponent(Button);
          this.finsh = this.node.getChildByName("finsh");
          this.awardList.SetHandle(this.updateAwardItem.bind(this));
          this.awardList.node.on('select', this.onSelect, this);
          this.goBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.getBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.isInit = true;
          this.updateShow();
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.goBtn:
              // Goto(this.std.Win, ...this.std.Param);
              // Goto("TaskPanel.Hide");
              break;

            case this.getBtn:
              // Session.Send({type:MsgTypeSend.CompleteTask, data:{task_id: this.std.TaskId}}, MsgTypeRet.CompleteTaskRet);
              let send_task = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["player.protocol.completetask"]();
              send_task.taskId = this.std.TaskId;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["player.protocol.completetask"], send_task);
              break;
          }
        }

        updateAwardItem(item, data) {// let awardItem = item.getComponent(AwardItem);
          // if (!awardItem) awardItem = item.addComponent(AwardItem);
          // awardItem.SetData({ itemData: data });
        }

        async onSelect(index, item) {// let selectData = this.awList[index];
          // if(selectData){
          //     ItemTips.Show(selectData);
          // }
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.goBtn.node.active = false;
          this.getBtn.node.active = false;
          this.finsh.active = false;
          this.std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskById(this.data.id);
          this.nameLab.string = this.std.Description;
          this.proLab.string = `（${this.data.value}/${this.std.CompletionNum}）`;
          let colorStr = "#356DC0";

          if (this.data.value >= this.std.CompletionNum) {
            colorStr = "#1D8E32";
            this.getBtn.node.active = true;

            if (this.data.start == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
              error: Error()
            }), STaskState) : STaskState).Finsh) {
              this.finsh.active = true;
            } else {
              this.getBtn.node.active = true;
            }
          } else {
            this.goBtn.node.active = true;
          }

          this.proLab.color = new Color().fromHEX(colorStr); // this.awList = ItemUtil.GetSThingList(this.std.RewardType, this.std.RewardID, this.std.RewardNumber);
          // this.awardList.UpdateDatas(this.awList);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a489c2096921529e3710e53ea40ebcd13491a35d.js.map