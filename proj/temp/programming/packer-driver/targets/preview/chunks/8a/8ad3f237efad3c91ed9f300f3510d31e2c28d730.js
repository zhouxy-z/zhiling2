System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, Tween, TweenSystem, UITransform, tween, CfgMgr, ThingTypeName, Session, AutoScroller, STaskType, Req, Route, PlayerData, ItemUtil, BagItem, Goto, Utils, TaskItem, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataTask(extras) {
    _reporterNs.report("SPlayerDataTask", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskType(extras) {
    _reporterNs.report("STaskType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  _export("TaskItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Tween = _cc.Tween;
      TweenSystem = _cc.TweenSystem;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
      ThingTypeName = _unresolved_2.ThingTypeName;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      AutoScroller = _unresolved_4.AutoScroller;
    }, function (_unresolved_5) {
      STaskType = _unresolved_5.STaskType;
    }, function (_unresolved_6) {
      Req = _unresolved_6.Req;
      Route = _unresolved_6.Route;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }, function (_unresolved_8) {
      ItemUtil = _unresolved_8.ItemUtil;
    }, function (_unresolved_9) {
      BagItem = _unresolved_9.BagItem;
    }, function (_unresolved_10) {
      Goto = _unresolved_10.Goto;
    }, function (_unresolved_11) {
      Utils = _unresolved_11.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4bb362IsQxHz6dv4bF98lzZ", "TaskItem", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'EventKeyboard', 'Label', 'Layout', 'Node', 'Tween', 'TweenSystem', 'UITransform', 'tween']);

      _export("TaskItem", TaskItem = class TaskItem extends Component {
        constructor() {
          super(...arguments);
          this.nameLab = void 0;
          this.proLab = void 0;
          this.proLab2 = void 0;
          this.progress = void 0;
          this.awardList = void 0;
          this.goBtn = void 0;
          this.getBtn = void 0;
          this.activeNumLab = void 0;
          this.getdLab = void 0;
          this.timelab = void 0;
          this.isInit = false;
          this.std = void 0;
          this.data = void 0;
          this.awList = [];
        }

        onLoad() {
          this.nameLab = this.node.getChildByPath("unLockNode/nameLab").getComponent(Label);
          this.proLab = this.node.getChildByPath("unLockNode/Node/proLab").getComponent(Label);
          this.proLab2 = this.node.getChildByPath("unLockNode/Node/lab").getComponent(Label);
          this.awardList = this.node.getChildByPath("unLockNode/awardList").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.goBtn = this.node.getChildByPath("unLockNode/goBtn").getComponent(Button);
          this.getBtn = this.node.getChildByPath("unLockNode/getBtn").addComponent(Button);
          this.activeNumLab = this.node.getChildByPath("unLockNode/activeNumLab").getComponent(Label);
          this.getdLab = this.node.getChildByPath("unLockNode/getdLab");
          this.timelab = this.node.getChildByPath("lockNode/timelab").getComponent(Label);
          this.progress = this.node.getChildByPath("unLockNode/taskProgress/progress");
          this.awardList.SetHandle(this.updateAwardItem.bind(this));
          this.awardList.node.on('select', this.onSelect, this);
          this.goBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.getBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.isInit = true;
          this.updateShow();
        }

        SetData(data) {
          this.data = data;
          this.updateShow();
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.goBtn:
              if (this.std.Win) {
                var fetchs = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Get("fetch");
                var stdFetch = fetchs[this.std.Win];

                if (stdFetch.Param) {
                  (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                    error: Error()
                  }), Goto) : Goto)(stdFetch.Win, ...stdFetch.Param);
                } else {
                  (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                    error: Error()
                  }), Goto) : Goto)(stdFetch.Win);
                }
              }

              break;

            case this.getBtn:
              var send_task = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["player.protocol.completetask"]();
              send_task.taskId = this.std.TaskId;
              send_task.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).server;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["player.protocol.completetask"], send_task);
              break;
          }
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.goBtn.node.active = false;
          this.getBtn.node.active = false;
          this.activeNumLab.node.active = false;
          this.getdLab.active = false;
          this.timelab.node.parent.active = false;
          this.goBtn.node.parent.active = false;
          this.std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskByData(this.data);
          this.nameLab.string = this.std.Description;
          var task_state = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetTaskState(this.data);
          var value = this.data.value ? this.data.value > this.std.CompletionNum ? this.std.CompletionNum : this.data.value : 0;

          if (task_state == 2 || task_state == 1) {
            value = this.std.CompletionNum;
          }

          this.proLab.string = value + "/";
          this.proLab2.string = "" + this.std.CompletionNum;
          var pro = value / this.std.CompletionNum;
          var max_width = this.progress.parent.getComponent(UITransform).width;
          this.progress.getComponent(UITransform).width = max_width * (pro > 1 ? 1 : pro);

          if (task_state == 1) {
            this.getdLab.active = true;
          } else if (task_state == 2) {
            this.getBtn.node.active = true;
          } else {
            this.goBtn.node.active = true;
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).SetNodeGray(this.goBtn.node, !this.std.Win);
          }

          if (this.std.TaskType == (_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
            error: Error()
          }), STaskType) : STaskType).season) {
            var open_time = 0;
            var lv = 0;

            for (var index = 0; index < this.std.ConditionId.length; index++) {
              var element = this.std.ConditionId[index];

              if (element == 2) {
                open_time = this.std.ConditionValue[index] - 1;
              } else if (element == 1) {
                lv = this.std.ConditionValue[index];
              }
            }

            var day;
            var hour;
            var str = "";
            var seasontime = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCurSeasonPastTTime();
            var time = open_time * 86400 - seasontime;

            if (time > 3600) {
              day = Math.floor(time / (3600 * 24));
              hour = Math.floor(time % (3600 * 24) / 3600);
              str = "在" + day + "天" + hour + "小时" + "后解锁";
            }

            var cur_lv = 100000;

            if (cur_lv < lv) {
              if (str.length > 0) {
                str = str + "并且收藏等级不小于" + lv;
              } else {
                str = str + "收藏等级不小于" + lv;
              }
            }

            if (time < 3600 && time > 0) {
              var m = Math.floor(time / 60);
              var s = Math.floor(time % 60);
              str = "在" + m + "分" + s + "秒" + "后解锁";

              if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.timelab) > 0) {
                Tween.stopAllByTarget(this.timelab);
              }

              tween(this.timelab).repeatForever(tween().delay(1).call(() => {
                if (time - 1 <= 0) {
                  Tween.stopAllByTarget(this.timelab);
                } else {
                  time = time - 1;

                  var _m = Math.floor(time / 60);

                  var _s = Math.floor(time % 60);

                  str = "在" + _m + "分" + _s + "秒" + "后解锁";
                  this.timelab.string = str;
                }
              })).start();
            }

            if (str != "") {
              //不开放
              this.timelab.node.parent.active = true;
              this.timelab.string = str;
            } else {
              //开放
              this.goBtn.node.parent.active = true;
            }
          } else {
            this.goBtn.node.parent.active = true;
          }

          var list = [];

          if (typeof this.std.ActiveTaskValue == "number" && this.std.ActiveTaskValue > 0) {
            var a = {
              type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item,
              item: {
                id: 202,
                count: this.std.ActiveTaskValue
              }
            };
            list.push(a);
          }

          if (typeof this.std.WeekActiveTaskValue == "number" && this.std.WeekActiveTaskValue > 0) {
            var _a = {
              type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item,
              item: {
                id: 203,
                count: this.std.WeekActiveTaskValue
              }
            };
            list.push(_a);
          }

          if (this.std.TaskTypeData[1]) {
            var _a2 = {
              type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item,
              item: {
                id: 201,
                count: this.std.TaskTypeData[1]
              }
            };
            list.push(_a2);
          }

          this.awList = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).GetSThingList(this.std.RewardType, this.std.RewardID, this.std.RewardNumber);
          list = list.concat(...this.awList);
          this.awardList.UpdateDatas(list);
        }

        updateAwardItem(item, data) {
          var awardItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!awardItem) awardItem = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          awardItem.setThing(data);
        }

        onSelect(index, item) {// let selectData = this.awList[index];
          // if(selectData){
          //     ItemTips.Show(selectData);
          // }

          return _asyncToGenerator(function* () {})();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ad3f237efad3c91ed9f300f3510d31e2c28d730.js.map