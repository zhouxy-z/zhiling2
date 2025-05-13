System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Input, Label, ProgressBar, Sprite, SpriteFrame, Vec3, PlayerData, Req, Route, Session, EventMgr, Evt_TaskShowBoxTips, DateUtils, ResMgr, SeasonActiveTaskCont, _crd;

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataTask(extras) {
    _reporterNs.report("SPlayerDataTask", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_TaskShowBoxTips(extras) {
    _reporterNs.report("Evt_TaskShowBoxTips", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("SeasonActiveTaskCont", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Input = _cc.Input;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.PlayerData;
    }, function (_unresolved_3) {
      Req = _unresolved_3.Req;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_TaskShowBoxTips = _unresolved_5.Evt_TaskShowBoxTips;
    }, function (_unresolved_6) {
      DateUtils = _unresolved_6.DateUtils;
    }, function (_unresolved_7) {
      ResMgr = _unresolved_7.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fce5fQH8eVBS7RP/IyDy7fw", "SeasonActiveTaskCont", undefined);

      __checkObsolete__(['Button', 'Component', 'Input', 'instantiate', 'Label', 'Node', 'ProgressBar', 'Sprite', 'SpriteFrame', 'UITransform', 'v3', 'Vec3']);

      _export("SeasonActiveTaskCont", SeasonActiveTaskCont = class SeasonActiveTaskCont extends Component {
        constructor(...args) {
          super(...args);
          this.proBar = void 0;
          this.tips_lab = void 0;
          this.lv = void 0;
          this.time = void 0;
          this.expNum = void 0;
          this.maxExp = void 0;
          this.proNum = void 0;
          this.boxItemTemp = void 0;
          this.box = void 0;
          this.isInit = void 0;
          this.datas = void 0;
          this.curNum = void 0;
          this.maxNum = void 0;
          this.chapt_cfg_data = void 0;
        }

        onLoad() {
          this.proBar = this.node.getChildByName("proBar").getComponent(ProgressBar);
          this.tips_lab = this.node.getChildByPath("tipsCont/lab").getComponent(Label);
          this.lv = this.node.getChildByName("lv").getComponent(Label);
          this.time = this.node.getChildByName("time").getComponent(Label);
          this.expNum = this.node.getChildByPath("expNode/expNum").getComponent(Label);
          this.maxExp = this.node.getChildByPath("expNode/maxExp").getComponent(Label);
          this.box = this.node.getChildByPath("boxItemTemp/box").getComponent(Sprite);
          this.proNum = this.node.getChildByPath("boxItemTemp/check/progreed/proNum").getComponent(Label);
          this.boxItemTemp = this.node.getChildByName("boxItemTemp");
          this.boxItemTemp.on(Input.EventType.TOUCH_END, this.onBtnClick, this);
          this.isInit = true;
          this.updateShow();
        }
        /**
         * 设置角色数据
         * @param roleId 
         */


        SetData(datas, name, chapt_cfg_data) {
          let count = 0;

          for (let index = 0; index < datas.length; index++) {
            const element = datas[index];

            if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetTaskState(element) == 1) {
              count++;
            }
          }

          this.datas = datas || [];
          1111;
          this.tips_lab.string = name;
          this.curNum = count;
          this.maxNum = datas.length;
          this.chapt_cfg_data = chapt_cfg_data;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.datas) return;
          let taskData;
          let stsTask;
          let lv = 0;
          let exp = 0;
          let max_exp = 100;
          this.expNum.string = exp + "/";
          this.maxExp.string = max_exp + "";
          this.lv.string = "Lv." + lv + "";
          let tempNum = this.curNum;

          if (this.curNum > this.maxNum) {
            tempNum = this.maxNum;
          }

          this.proNum.string = tempNum + "/" + this.maxNum;
          this.proBar.progress = exp / max_exp;
          let data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.tasks[this.chapt_cfg_data.TopTask];
          let task_state = 3;

          if (data) {
            task_state = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetTaskState(data);
          }

          console.log((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCurSeasonEndTime());
          let time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCurSeasonEndTime() - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime;

          if (time > 86400) {
            this.time.string = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).FormatTime(time, {
              S: "%{s}秒",
              M: "%{m}分%{s}秒",
              H: "%{h}时%{m}分%{s}秒",
              D: "%{d}天"
            });
          }

          let url = "sheets/task/seasonBox/spriteFrame";

          if (task_state == 1) {
            url = "sheets/task/box_open/spriteFrame";
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
            this.box.spriteFrame = res;
          });
        }

        onBtnClick() {
          let data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.tasks[this.chapt_cfg_data.TopTask];
          let task_state = 3;

          if (data) {
            task_state = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetTaskState(data);
          }

          if (task_state == 2) {
            let send_task = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["player.protocol.completetask"]();
            send_task.taskId = this.chapt_cfg_data.TaskId;
            send_task.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).server;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["player.protocol.completetask"], send_task);
          } else {
            let tipsW = 382;
            let itemPos = this.boxItemTemp.worldPosition.clone();
            let showPos;
            let offset = tipsW / 2 + itemPos.x;

            if (offset > 1450) {
              offset = 1450 - tipsW / 2;
            } else {
              offset = itemPos.x;
            }

            showPos = new Vec3(offset, itemPos.y - 197, 0);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit(_crd && Evt_TaskShowBoxTips === void 0 ? (_reportPossibleCrUseOfEvt_TaskShowBoxTips({
              error: Error()
            }), Evt_TaskShowBoxTips) : Evt_TaskShowBoxTips, this.chapt_cfg_data, showPos, this.boxItemTemp);
          }
        }

        update(dt) {
          let endTime = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCurSeasonEndTime();
          let time = endTime - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime;

          if (time < 86400) {
            if (time >= 0) {
              this.time.string = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).FormatTime(time, "%{hh}:%{mm}:%{ss}");
            } else {
              this.time.string = "";
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d3bcd41429bf38fd7a38133634f6db002064696.js.map