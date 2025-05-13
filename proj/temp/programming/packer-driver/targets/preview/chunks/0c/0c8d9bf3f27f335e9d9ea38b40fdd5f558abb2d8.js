System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, Label, instantiate, Panel, CfgMgr, PlayerData, STaskType, STaskState, BagItem, MsgTypeRet, MsgTypeSend, Session, EventMgr, Evt_TaskChange, SignPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskType(extras) {
    _reporterNs.report("STaskType", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataTask(extras) {
    _reporterNs.report("SPlayerDataTask", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskState(extras) {
    _reporterNs.report("STaskState", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgTypeRet(extras) {
    _reporterNs.report("MsgTypeRet", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgTypeSend(extras) {
    _reporterNs.report("MsgTypeSend", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_TaskChange(extras) {
    _reporterNs.report("Evt_TaskChange", "../../manager/EventMgr", _context.meta, extras);
  }

  _export("SignPanel", void 0);

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
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.default;
    }, function (_unresolved_5) {
      STaskType = _unresolved_5.STaskType;
      STaskState = _unresolved_5.STaskState;
    }, function (_unresolved_6) {
      BagItem = _unresolved_6.BagItem;
    }, function (_unresolved_7) {
      MsgTypeRet = _unresolved_7.MsgTypeRet;
      MsgTypeSend = _unresolved_7.MsgTypeSend;
    }, function (_unresolved_8) {
      Session = _unresolved_8.Session;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_TaskChange = _unresolved_9.Evt_TaskChange;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ead262/7OFG25L5lvHOuuyv", "SignPanel", undefined);

      __checkObsolete__(['Button', 'Component', 'EditBox', 'EventTouch', 'Input', 'Label', 'Node', 'ProgressBar', 'RichText', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'UITransform', 'instantiate', 'path', 'sp', 'tween']);

      _export("SignPanel", SignPanel = class SignPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/task/SignPanel";
          this.layout = void 0;
          this.day7 = void 0;
          this.signBtn = void 0;
          this.label = void 0;
          this.Layout = void 0;
          this.item = void 0;
          this.taskData = void 0;
          this.reward_data = [];
          this.select_index = 1;
          this.day = [];
          this.is_first = false;
          this.first_select_index = 0;
          this.send_index = null;
        }

        onLoad() {
          this.CloseBy("mark");
          this.layout = this.find("layout");
          this.day7 = this.find("day7");
          this.Layout = this.find("day7/Layout");
          this.item = this.find("day7/Layout/item");
          this.label = this.find("label", Label);
          this.signBtn = this.find("signBtn", Button);
          this.signBtn.node.on("click", this.onGetReward, this);
          this.day7.on(Input.EventType.TOUCH_START, this.check, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange, this.flush, this);
        }

        flush(index) {
          var task_all_data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.tasks;
          var task_Data = [];
          this.day = [];
          this.is_first = false;
          var sign_day = 0;

          for (var key in task_all_data) {
            if (Object.prototype.hasOwnProperty.call(task_all_data, key)) {
              var element = task_all_data[key];
              var stdTask = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskById(element.id);

              if (stdTask && stdTask.TaskType == (_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
                error: Error()
              }), STaskType) : STaskType).dayliyLogin) {
                sign_day = element.v;
                task_Data.push(element);
              }
            }
          }

          if (sign_day == 0) {
            sign_day = 1;
          }

          var loop_num = Math.ceil(sign_day / 7);

          if (loop_num >= 5) {
            loop_num = 4;
          }

          this.taskData = [];
          this.reward_data = [];

          for (var _index = 1; _index <= 7; _index++) {
            var day = _index + 7 * (loop_num - 1);
            this.day.push(day);
            var id = 500100 + day;

            for (var iterator of task_Data) {
              if (iterator.id == id) {
                var data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).getTaskRewardThings(id);
                this.reward_data.push(data);
                this.taskData.push(iterator);
              }
            }
          }

          if (this.taskData.length == 0) return;

          for (var _index2 = 0; _index2 < this.layout.children.length; _index2++) {
            var node = this.layout.children[_index2];
            node.off(Input.EventType.TOUCH_END, this.check, this);
            node.on(Input.EventType.TOUCH_END, this.check, this);
            node.getChildByName("label").getComponent(Label).string = "第" + this.day[_index2] + "天";

            if (node) {
              if (this.taskData[_index2].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
                error: Error()
              }), STaskState) : STaskState).Finsh) {
                node.getChildByName("sign").active = true;
                node.getChildByName("sign_mask").active = true;
              } else {
                if (!this.is_first) {
                  this.is_first = true;
                  this.first_select_index = _index2;
                }

                node.getChildByName("sign").active = false;
                node.getChildByName("sign_mask").active = false;
              }

              var item = node.children[0];
              var bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
                error: Error()
              }), BagItem) : BagItem);
              if (!bagItem) bagItem = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
                error: Error()
              }), BagItem) : BagItem);
              bagItem.SetData(this.reward_data[_index2][0]);
              bagItem.setIsShowSelect(false);
              bagItem.setIsShowTips(true);
            }
          }

          this.Layout.removeAllChildren();

          for (var _index3 = 0; _index3 < this.reward_data[6].length; _index3++) {
            var _element = this.reward_data[6][_index3];

            var _item = instantiate(this.item);

            _item.getChildByName("sign").active = this.taskData[6].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
              error: Error()
            }), STaskState) : STaskState).Finsh;

            var _bagItem = _item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);

            if (!_bagItem) _bagItem = _item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);

            _bagItem.SetData(_element);

            _bagItem.setIsShowSelect(false);

            _bagItem.setIsShowTips(true);

            this.Layout.addChild(_item);
          }

          this.day7.getChildByName("sign_mask").active = this.taskData[6].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
            error: Error()
          }), STaskState) : STaskState).Finsh;
          this.day7.getChildByName("label").getComponent(Label).string = "第" + this.day[6] + "天";

          if (!this.is_first) {
            this.first_select_index = 6;
          }

          this.setSelectData(this.first_select_index);
        }

        check(even) {
          var node = even.currentTarget;
          var index = 0;

          switch (node.name) {
            case "day1":
              index = 0;
              break;

            case "day2":
              index = 1;
              break;

            case "day3":
              index = 2;
              break;

            case "day4":
              index = 3;
              break;

            case "day5":
              index = 4;
              break;

            case "day6":
              index = 5;
              break;

            case "day7":
              index = 6;
              break;

            default:
              break;
          }

          this.setSelectData(index);
        }

        setSelectData(index) {
          for (var i = 0; i < this.layout.children.length; i++) {
            this.layout.children[i].getChildByName("select").active = false;
          }

          this.day7.getChildByName("select").active = index == 6;
          this.select_index = index;

          if (index < 6) {
            this.layout.children[index].getChildByName("select").active = true;
          }

          var stdTask = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskById(this.taskData[index].id);

          if (this.taskData[index].v >= stdTask.CompletionNum) {
            if (this.taskData[index].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
              error: Error()
            }), STaskState) : STaskState).unFinsh) {
              this.signBtn.node.active = true;
              this.label.node.active = false;
              this.signBtn.node.getChildByName("Label").getComponent(Label).string = "签到领奖";
            } else {
              this.signBtn.node.active = false;
              this.label.node.active = true;
              this.label.string = "已领取";
            }
          } else {
            this.signBtn.node.active = false;
            this.label.node.active = true;
            var day = this.taskData[index].id - 500100;
            this.label.string = "登录" + day + "天可领取";
          }
        }

        onGetReward(even) {
          // console.log(even)
          // let index = even.currentTarget.getSiblingIndex();
          // console.log(index)
          //     //一键领取
          //     for (let index = 0; index < this.taskData.length; index++) {
          //         const element = this.taskData[index];
          //         let stdTask = CfgMgr.GetTaskById(this.taskData[index].id);
          //         if(this.taskData[index].v >= stdTask.CompletionNum && this.taskData[index].s == STaskState.unFinsh){
          //             let info = {
          //                 type: MsgTypeSend.CompleteTask,
          //                 data: {
          //                     task_id: this.taskData[index].id
          //                 }
          //             }
          //             Session.Send(info, MsgTypeRet.CompleteTaskRet);
          //         }
          //    }
          this.send_index = this.select_index;
          var info = {
            type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
              error: Error()
            }), MsgTypeSend) : MsgTypeSend).CompleteTask,
            data: {
              task_id: this.taskData[this.send_index].id
            }
          };
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(info, (_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).CompleteTaskRet);
        }

        onHide() {
          this.is_first = false;
          this.first_select_index = 0;
          this.send_index = null;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange, this.flush, this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c8d9bf3f27f335e9d9ea38b40fdd5f558abb2d8.js.map