System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CfgMgr, EventMgr, Evt_MainTaskChange, Evt_RefreshTaskChange, Evt_TaskChange, Ret, Route, Session, MsgPanel, RewardTips, PlayerData, TaskModule, _crd, TaskChangeType;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_MainTaskChange(extras) {
    _reporterNs.report("Evt_MainTaskChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_RefreshTaskChange(extras) {
    _reporterNs.report("Evt_RefreshTaskChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_TaskChange(extras) {
    _reporterNs.report("Evt_TaskChange", "../../manager/EventMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardTips(extras) {
    _reporterNs.report("RewardTips", "../common/RewardTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("TaskModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
      Evt_MainTaskChange = _unresolved_3.Evt_MainTaskChange;
      Evt_RefreshTaskChange = _unresolved_3.Evt_RefreshTaskChange;
      Evt_TaskChange = _unresolved_3.Evt_TaskChange;
    }, function (_unresolved_4) {
      Ret = _unresolved_4.Ret;
      Route = _unresolved_4.Route;
    }, function (_unresolved_5) {
      Session = _unresolved_5.Session;
    }, function (_unresolved_6) {
      MsgPanel = _unresolved_6.MsgPanel;
    }, function (_unresolved_7) {
      RewardTips = _unresolved_7.RewardTips;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70bbbTo4tVOTJ8yO5RhqCux", "TaskModule", undefined);

      TaskChangeType = /*#__PURE__*/function (TaskChangeType) {
        TaskChangeType[TaskChangeType["TaskUpdate"] = 0] = "TaskUpdate";
        TaskChangeType[TaskChangeType["TaskDel"] = 1] = "TaskDel";
        return TaskChangeType;
      }(TaskChangeType || {});

      _export("TaskModule", TaskModule = class TaskModule {
        constructor() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerTasksChangedPush, this.onTaskChange, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["player.protocol.completetask"], this.onCompleteTask, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.refreshdailytask"], this.onRefreshDailyTask, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route).PlayerDailyTaskRefreshTimesChangePush, this.onRefreshDailyTaskPush, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getrefreshdailytasktimes"], this.onGetrefreshdailytasktimes, this);
        }

        onTaskChange(data) {
          let task_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerTasksChangedPush.decode(data); // console.log("任务推送", task_data)

          for (const iterator of task_data.list) {
            if (iterator.mode && iterator.mode == TaskChangeType.TaskDel) {
              delete (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).player.tasks[iterator.data.id];
            } else {
              // console.log("任务变更", iterator)
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).player.tasks[iterator.data.id] = iterator.data;
              let task_state = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetTaskState(iterator.data);
              let task_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskByData(iterator.data);

              if (task_state == 3 && task_cfg.isMainShow == 1) {
                (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).change_task_list.push(iterator);
              }
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_MainTaskChange === void 0 ? (_reportPossibleCrUseOfEvt_MainTaskChange({
            error: Error()
          }), Evt_MainTaskChange) : Evt_MainTaskChange);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange);
        }

        onCompleteTask(data) {
          let task_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["player.protocol.completetask"].decode(data); // console.log("完成任务", task_data)

          if (task_data.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("任务领取失败");
            return;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.tasks[task_data.Data.id] = task_data.Data;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.tasks[task_data.Data.id] = task_data.Data;
          let datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getTaskRewardThings(task_data.Data.end);
          (_crd && RewardTips === void 0 ? (_reportPossibleCrUseOfRewardTips({
            error: Error()
          }), RewardTips) : RewardTips).Show(datas);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange);
        }

        onRefreshDailyTask(data) {
          let task_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.refreshdailytask"].decode(data); // console.log(task_data)

          if (task_data.res.code != 200) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("刷新失败");
          }
        }

        onRefreshDailyTaskPush(data) {
          let task_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret).PlayerDailyTaskRefreshTimesChangePush.decode(data); // console.log("手动刷新推送",task_data)

          let change = task_data.change ? task_data.change : 0;
          let changeBefore = task_data.changeBefore ? task_data.changeBefore : 0;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).taskRefreshCount = change + changeBefore;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit(_crd && Evt_RefreshTaskChange === void 0 ? (_reportPossibleCrUseOfEvt_RefreshTaskChange({
            error: Error()
          }), Evt_RefreshTaskChange) : Evt_RefreshTaskChange);
        }

        onGetrefreshdailytasktimes(data) {
          let task_data = (_crd && Ret === void 0 ? (_reportPossibleCrUseOfRet({
            error: Error()
          }), Ret) : Ret)["logic.protocol.getrefreshdailytasktimes"].decode(data); // console.log("次数",task_data)

          if (task_data.res.code == 200) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).taskRefreshCount = task_data.times;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_RefreshTaskChange === void 0 ? (_reportPossibleCrUseOfEvt_RefreshTaskChange({
              error: Error()
            }), Evt_RefreshTaskChange) : Evt_RefreshTaskChange);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62fd56f067eb2b94cd24997988c30eb21014e1dc.js.map