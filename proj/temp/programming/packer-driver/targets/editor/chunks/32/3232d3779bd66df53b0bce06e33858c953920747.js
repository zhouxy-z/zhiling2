System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Toggle, js, Button, Input, instantiate, Sprite, SpriteFrame, path, EventMgr, Evt_NextDay, Evt_RefreshTaskChange, Evt_Show_Scene, Evt_TaskChange, Evt_TaskShowBoxTips, ActiveTaskCont, TaskItem, DateUtils, TaskActiveBoxTipsCont, Panel, AutoScroller, STaskType, CfgMgr, ItemType, StdCommonType, PlayerData, Route, Session, ItemUtil, ClickTipsPanel, MsgPanel, SeasonActiveTaskCont, ResMgr, folder_item, TaskPanel, _crd, TaskTabType;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_NextDay(extras) {
    _reporterNs.report("Evt_NextDay", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_RefreshTaskChange(extras) {
    _reporterNs.report("Evt_RefreshTaskChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Show_Scene(extras) {
    _reporterNs.report("Evt_Show_Scene", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_TaskChange(extras) {
    _reporterNs.report("Evt_TaskChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_TaskShowBoxTips(extras) {
    _reporterNs.report("Evt_TaskShowBoxTips", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActiveTaskCont(extras) {
    _reporterNs.report("ActiveTaskCont", "./ActiveTaskCont", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskItem(extras) {
    _reporterNs.report("TaskItem", "./TaskItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskActiveBoxTipsCont(extras) {
    _reporterNs.report("TaskActiveBoxTipsCont", "./TaskActiveBoxTipsCont", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
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

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCommonType(extras) {
    _reporterNs.report("StdCommonType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTaskSeason(extras) {
    _reporterNs.report("StdTaskSeason", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClickTipsPanel(extras) {
    _reporterNs.report("ClickTipsPanel", "../common/ClickTipsPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSeasonActiveTaskCont(extras) {
    _reporterNs.report("SeasonActiveTaskCont", "./SeasonActiveTaskCont", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("TaskPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
      js = _cc.js;
      Button = _cc.Button;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      path = _cc.path;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_NextDay = _unresolved_2.Evt_NextDay;
      Evt_RefreshTaskChange = _unresolved_2.Evt_RefreshTaskChange;
      Evt_Show_Scene = _unresolved_2.Evt_Show_Scene;
      Evt_TaskChange = _unresolved_2.Evt_TaskChange;
      Evt_TaskShowBoxTips = _unresolved_2.Evt_TaskShowBoxTips;
    }, function (_unresolved_3) {
      ActiveTaskCont = _unresolved_3.ActiveTaskCont;
    }, function (_unresolved_4) {
      TaskItem = _unresolved_4.TaskItem;
    }, function (_unresolved_5) {
      DateUtils = _unresolved_5.DateUtils;
    }, function (_unresolved_6) {
      TaskActiveBoxTipsCont = _unresolved_6.TaskActiveBoxTipsCont;
    }, function (_unresolved_7) {
      Panel = _unresolved_7.Panel;
    }, function (_unresolved_8) {
      AutoScroller = _unresolved_8.AutoScroller;
    }, function (_unresolved_9) {
      STaskType = _unresolved_9.STaskType;
    }, function (_unresolved_10) {
      CfgMgr = _unresolved_10.CfgMgr;
      ItemType = _unresolved_10.ItemType;
      StdCommonType = _unresolved_10.StdCommonType;
    }, function (_unresolved_11) {
      PlayerData = _unresolved_11.PlayerData;
    }, function (_unresolved_12) {
      Route = _unresolved_12.Route;
    }, function (_unresolved_13) {
      Session = _unresolved_13.Session;
    }, function (_unresolved_14) {
      ItemUtil = _unresolved_14.ItemUtil;
    }, function (_unresolved_15) {
      ClickTipsPanel = _unresolved_15.ClickTipsPanel;
    }, function (_unresolved_16) {
      MsgPanel = _unresolved_16.MsgPanel;
    }, function (_unresolved_17) {
      SeasonActiveTaskCont = _unresolved_17.SeasonActiveTaskCont;
    }, function (_unresolved_18) {
      ResMgr = _unresolved_18.ResMgr;
      folder_item = _unresolved_18.folder_item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "784db5nLgNGxbXcyh2q68qu", "TaskPanel", undefined);

      __checkObsolete__(['Label', 'Node', 'Toggle', 'Widget', 'Vec3', 'js', 'Button', 'Input', 'instantiate', 'Sprite', 'SpriteFrame', 'path']);

      TaskTabType = /*#__PURE__*/function (TaskTabType) {
        TaskTabType[TaskTabType["Page_Daily"] = 0] = "Page_Daily";
        TaskTabType[TaskTabType["Page_Tyro"] = 1] = "Page_Tyro";
        TaskTabType[TaskTabType["Page_Season"] = 2] = "Page_Season";
        return TaskTabType;
      }(TaskTabType || {});

      ;

      _export("TaskPanel", TaskPanel = class TaskPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/task/TaskPanel";
          this.navBtns = void 0;
          this.activeTaskCont = void 0;
          //活跃任务
          this.seasonActiveTaskCont = void 0;
          //赛季章节任务
          this.taskList = void 0;
          this.noneListCont = void 0;
          this.timeCont = void 0;
          this.timeLab = void 0;
          this.weektimeLab = void 0;
          this.refreshBtn = void 0;
          this.max = void 0;
          this.content = void 0;
          this.clone_item = void 0;
          this.banner = void 0;
          this.task_count = void 0;
          this.weekActiveTaskList = void 0;
          //每周活跃任务
          this.dayTaskList = void 0;
          //每日任务
          this.tyroTaskList = void 0;
          //新手任务
          this.seasonTaskList = void 0;
          //成就任务
          this.activeBoxTips = void 0;
          this.weekCurAcNum = 0;
          this.weekMaxAcNum = 0;
          this.page = void 0;
          this.max_day_task_limit = 0;
          this.cfg_comm = void 0;
          this.refresh_cost = 0;
          this.selectSeasonChapterId = 0;
          this.SeasonChapterCfg = void 0;
        }

        onLoad() {
          this.navBtns = this.find("panel/navBar/view/content").children.concat();
          this.activeTaskCont = this.find("panel/activeTaskCont").addComponent(_crd && ActiveTaskCont === void 0 ? (_reportPossibleCrUseOfActiveTaskCont({
            error: Error()
          }), ActiveTaskCont) : ActiveTaskCont);
          this.seasonActiveTaskCont = this.find("panel/seasonActiveTaskCont").addComponent(_crd && SeasonActiveTaskCont === void 0 ? (_reportPossibleCrUseOfSeasonActiveTaskCont({
            error: Error()
          }), SeasonActiveTaskCont) : SeasonActiveTaskCont);
          this.taskList = this.find("panel/taskList", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.banner = this.find("panel/banner", Sprite);
          this.noneListCont = this.find("panel/noneListCont");
          this.timeCont = this.find("panel/timeBg/timeCont");
          this.timeLab = this.find("panel/timeBg/timeCont/timeLab", Label);
          this.weektimeLab = this.find("panel/activeTaskCont/time", Label);
          this.activeBoxTips = this.find("panel/activeBoxTips").addComponent(_crd && TaskActiveBoxTipsCont === void 0 ? (_reportPossibleCrUseOfTaskActiveBoxTipsCont({
            error: Error()
          }), TaskActiveBoxTipsCont) : TaskActiveBoxTipsCont);
          this.refreshBtn = this.find("panel/timeBg/refreshBtn");
          this.max = this.find("panel/timeBg/max");
          this.task_count = this.find("panel/timeBg/task_count", Label);
          this.refreshBtn.on(Input.EventType.TOUCH_END, this.onRefresh, this);
          this.taskList.SetHandle(this.updateTaskItem.bind(this));

          for (let btn of this.navBtns) {
            btn.on('toggle', this.onPage, this);
          }

          this.CloseBy("panel/closeBtn");
          this.content = this.find("panel/navBar/view/content/btn3/checkMark/content");
          this.clone_item = this.find("panel/navBar/view/content/btn3/checkMark/content/btn4");
        }

        onShow() {
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getrefreshdailytasktimes"]);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange, this.onUpdateTask, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_NextDay === void 0 ? (_reportPossibleCrUseOfEvt_NextDay({
            error: Error()
          }), Evt_NextDay) : Evt_NextDay, this.onUpdateTask, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_TaskShowBoxTips === void 0 ? (_reportPossibleCrUseOfEvt_TaskShowBoxTips({
            error: Error()
          }), Evt_TaskShowBoxTips) : Evt_TaskShowBoxTips, this.onShowBoxTips, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_RefreshTaskChange === void 0 ? (_reportPossibleCrUseOfEvt_RefreshTaskChange({
            error: Error()
          }), Evt_RefreshTaskChange) : Evt_RefreshTaskChange, this.updateRefresh, this);
        }

        async SetPage(page) {
          if (!this.$hasLoad) await this.initSub;
          if (!this.navBtns[page]) return;
          this.page = undefined;
          this.navBtns[page].getComponent(Toggle).isChecked = true;
          this.onPage(this.navBtns[page].getComponent(Toggle));
        }

        flush(page, seasonChapterId) {
          this.SeasonChapterCfg = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetSeasonTaskAllChapter();
          this.selectSeasonChapterId = 0;

          if (seasonChapterId) {
            this.selectSeasonChapterId = this.SeasonChapterCfg.findIndex(data => data.ID == seasonChapterId);
          }

          this.cfg_comm = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommon((_crd && StdCommonType === void 0 ? (_reportPossibleCrUseOfStdCommonType({
            error: Error()
          }), StdCommonType) : StdCommonType).DailyTask);
          this.max_day_task_limit = this.cfg_comm.DailyTaskNum;
          this.initSortListData();
          this.SetPage(page || TaskTabType.Page_Daily);
        } //初始化赛季列表数据


        initSortListData() {
          let time = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCurSeasonEndTime() - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime;

          if (time > 0) {
            this.navBtns[2].active = true;
            this.content.removeAllChildren();
            let all_tag_data = [];

            for (let index = 0; index < this.SeasonChapterCfg.length; index++) {
              let cfg_data = this.SeasonChapterCfg[index];
              let data = {
                tag: index,
                tagData: cfg_data,
                tagName: cfg_data.SeasonChapterName
              };
              all_tag_data.push(data);
              let item = instantiate(this.clone_item);
              item.name = "item" + index;
              item.setPosition(0, 0);
              item["chapterData"] = cfg_data;
              item["type"] = index;
              item.getChildByPath("defCont/lab").getComponent(Label).string = cfg_data.SeasonChapterName;
              item.getChildByPath("checkMark/lab").getComponent(Label).string = cfg_data.SeasonChapterName;
              let is_lock = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCurSeasonPastTTime() <= (cfg_data.OpenTime - 1) * 86400;
              item.getChildByPath("defCont/lock").active = is_lock;
              item.off(Button.EventType.CLICK, this.openOneTag.bind(this), this);
              item.on(Button.EventType.CLICK, this.openOneTag.bind(this), this);
              this.content.addChild(item);
            }
          } else {
            this.navBtns[2].active = false;
          }
        }

        openOneTag(t) {
          let item = t.target;
          this.selectSeasonChapterId = item.getSiblingIndex();
          console.log(item["chapterData"]);
          let cfg_data = item["chapterData"];
          let seasontime = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetCurSeasonPastTTime();
          let is_lock = seasontime >= (cfg_data.OpenTime - 1) * 86400;
          this.seasonTaskList = [];

          if (is_lock) {
            //获取当前章节的任务
            let datas = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetSeasonTaskByChapterID(cfg_data.ID);
            let chapt_cfg_data;

            for (let index = 0; index < datas.length; index++) {
              const element = datas[index];

              if (element.TaskType != (_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
                error: Error()
              }), STaskType) : STaskType).seasonChapter) {
                let taskData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).player.tasks[element.TopTask];

                if (taskData) {
                  this.seasonTaskList.push(taskData);
                } else {
                  let data = {
                    id: element.TopTask,
                    start: null,
                    end: null,
                    value: 0
                  };
                  this.seasonTaskList.push(data);
                }
              } else {
                chapt_cfg_data = element;
              }
            }

            item.getChildByName("checkMark").active = true;
            let item_list = item.parent.children;
            item_list.forEach(element => {
              if (element["type"] != item["type"]) {
                element.getChildByName("checkMark").active = false;
              }
            });
            this.seasonActiveTaskCont.node.active = true;
            this.seasonActiveTaskCont.SetData(this.seasonTaskList, cfg_data.SeasonChapterName, chapt_cfg_data);
            this.noneListCont.active = this.seasonTaskList.length <= 0;
            this.taskList.UpdateDatas(this.seasonTaskList);
            this.taskList.ScrollToHead();
          } else {
            let day = (cfg_data.OpenTime - 1) * 86400 - seasontime > 86400;
            let time = "";

            if (day) {
              time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).FormatTime((cfg_data.OpenTime - 1) * 86400 - seasontime, "%{d}天%{hh}小时");
            } else {
              time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).FormatTime((cfg_data.OpenTime - 1) * 86400 - seasontime, "%{hh}小时%{mm}分%{ss}秒");
            }

            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("剩余" + time + "开启");
          }
        }

        onPage(t) {
          if (!t.isChecked) return;
          let page = this.navBtns.indexOf(t.node);
          if (page < 0 || page == this.page) return;
          this.page = page;
          this.updateTaskList(true);
        }

        onUpdateTask() {
          this.updateTaskList();
        }

        updateTaskList(isToHead = false) {
          let datas;
          this.activeTaskCont.node.active = false;
          this.seasonActiveTaskCont.node.active = false;
          this.refreshBtn.parent.active = false;
          let index = this.page + 1;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/task/banner" + index + "/spriteFrame", SpriteFrame, res => {
            this.banner.spriteFrame = res;
          });

          switch (this.page) {
            case TaskTabType.Page_Daily:
              // 每日任务
              this.refreshBtn.parent.active = true;
              this.filtrDayTask();
              this.filtrWeekAcivtyTask();
              this.updateRefresh();
              this.activeTaskCont.node.active = true;
              this.activeTaskCont.SetData(1, this.weekActiveTaskList, this.weekCurAcNum, this.weekMaxAcNum);
              datas = this.dayTaskList;
              break;

            case TaskTabType.Page_Tyro:
              // 新手任务
              this.filtrTyroTask();
              datas = this.tyroTaskList;
              break;

            case TaskTabType.Page_Season:
              // 赛季任务
              this.seasonActiveTaskCont.node.active = true;

              if (this.content.children.length != 0 && this.content.children[this.selectSeasonChapterId]) {
                this.openOneTag(this.content.children[this.selectSeasonChapterId].getComponent(Button));
              } else {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("暂无该任务");
              }

              return;
          }

          this.noneListCont.active = datas.length <= 0;
          this.taskList.UpdateDatas(datas);
          if (isToHead) this.taskList.ScrollToHead();
        } //筛选每日任务 


        filtrDayTask() {
          this.dayTaskList = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).filtrDayTask();
        } //新手任务


        filtrTyroTask() {
          this.tyroTaskList = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).filtrTyroTask();
        } //筛选每周活跃任务 


        filtrWeekAcivtyTask() {
          this.weekActiveTaskList = [];
          this.weekMaxAcNum = 0;
          this.weekCurAcNum = 0;
          let list = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskByTaskType((_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
            error: Error()
          }), STaskType) : STaskType).weekActive);
          this.weekMaxAcNum = list[list.length - 1].CompletionNum;

          for (let index = 0; index < list.length; index++) {
            const element = list[index];
            let taskData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.tasks[element.TopTask];

            if (taskData) {
              this.weekActiveTaskList.push(taskData);
            } else {
              let data = {
                id: element.TopTask,
                start: null,
                end: null,
                value: 0
              };
              this.weekActiveTaskList.push(data);
            }
          }

          for (const iterator of this.weekActiveTaskList) {
            if (iterator.value > this.weekCurAcNum) {
              this.weekCurAcNum = iterator.value;
            }
          }
        }

        updateTaskItem(item, data) {
          let taskItem = item.getComponent(_crd && TaskItem === void 0 ? (_reportPossibleCrUseOfTaskItem({
            error: Error()
          }), TaskItem) : TaskItem);
          if (!taskItem) taskItem = item.addComponent(_crd && TaskItem === void 0 ? (_reportPossibleCrUseOfTaskItem({
            error: Error()
          }), TaskItem) : TaskItem);
          taskItem.SetData(data);
        }

        onShowBoxTips(std, showPos, clickTarget) {
          let list = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).GetSThingList(std.RewardType, std.RewardID, std.RewardNumber);
          this.activeBoxTips.SetData(list, std.Description);
          (_crd && ClickTipsPanel === void 0 ? (_reportPossibleCrUseOfClickTipsPanel({
            error: Error()
          }), ClickTipsPanel) : ClickTipsPanel).Show(this.activeBoxTips.node, this.node, clickTarget, showPos, 0);
        }

        onRefresh() {
          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.cfg_comm.DailyTaskRefreshItem) >= this.refresh_cost) {
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.refreshdailytask"]);
          } else {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("资源不足");
          }
        }

        updateRefresh() {
          let item_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.cfg_comm.DailyTaskRefreshItem);
          let price = 1;

          if (item_cfg.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).money) {
            price = 10000;
          }

          let icon = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.cfg_comm.DailyTaskRefreshItem).Icon;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, icon, "spriteFrame"), SpriteFrame, res => {
            this.refreshBtn.getChildByName("icon").getComponent(Sprite).spriteFrame = res;
          });
          let refres_count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).taskRefreshCount;
          let count_list = this.cfg_comm.DailyTaskRefreshItemNum;
          let max = count_list[count_list.length - 1];
          let count = count_list[refres_count] ? count_list[refres_count] : max;
          this.refreshBtn.getChildByName("lab").getComponent(Label).string = count / price + "";
          this.refresh_cost = count / price;

          if (this.dayTaskList) {
            this.refreshBtn.active = this.dayTaskList.length < this.max_day_task_limit;
            this.max.active = this.dayTaskList.length >= this.max_day_task_limit;
            this.task_count.string = this.dayTaskList.length + "/" + this.max_day_task_limit + "个任务";
          }
        }

        update(dt) {
          if (this.page == TaskTabType.Page_Season) {
            this.timeCont.active = false;
          } else {
            this.timeCont.active = true;

            if (this.page == TaskTabType.Page_Daily) {
              let list = this.cfg_comm.DailyTaskRefreshTime;
              let time_list = [24];

              for (let index = 0; index < list.length; index++) {
                const element = list[index];
                time_list.push(element);
              } //最近的时间


              let next_time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).scheduleDailyRefresh(time_list); //距离凌晨前一个的时间点

              let before_time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).scheduleDailyRefresh([list[list.length - 1]]); //第二天凌晨

              let next_day_zero_time = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).nextDayHoursTime((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime);
              let time = next_time - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime;

              if (next_day_zero_time > before_time) {
                this.timeLab.string = `${this.cfg_comm.DailyTaskRefreshMaxNum}个任务将在${(_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                  error: Error()
                }), DateUtils) : DateUtils).FormatTime(time)}后刷新`;
              } else {
                this.timeLab.string = `0点后全部任务重置`;
              }

              let time_lsit = (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).getTimeToNextWeek();
              let day = time_lsit[0];
              let h = time_lsit[1];
              let m = time_lsit[2];
              let s = time_lsit[3];

              if (day <= 0 && h > 0) {
                this.weektimeLab.string = `${h}小时${m}分`;
              } else if (h <= 0 && s > 0) {
                this.weektimeLab.string = `${m}分${s}秒`;
              } else {
                this.weektimeLab.string = `${day}天${h}小时`;
              }
            }
          }
        }

        onHide(...args) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange, this.onUpdateTask, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_NextDay === void 0 ? (_reportPossibleCrUseOfEvt_NextDay({
            error: Error()
          }), Evt_NextDay) : Evt_NextDay, this.onUpdateTask, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_TaskShowBoxTips === void 0 ? (_reportPossibleCrUseOfEvt_TaskShowBoxTips({
            error: Error()
          }), Evt_TaskShowBoxTips) : Evt_TaskShowBoxTips, this.onShowBoxTips, this);
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
//# sourceMappingURL=3232d3779bd66df53b0bce06e33858c953920747.js.map