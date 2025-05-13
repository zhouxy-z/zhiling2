System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Slider, Sprite, SpriteFrame, Toggle, UITransform, Vec3, instantiate, path, Panel, PlayerData, STaskType, STaskState, STaskShowType, FriendHelpItem, CfgMgr, StdCommonType, Session, MsgTypeRet, MsgTypeSend, EventMgr, Evt_GetIncommons, Evt_SetAssistRole, Evt_TaskChange, GameSet, Convert, ToFixed, AutoScroller, BagItem, Tips, ResMgr, FriendHelpPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskType(extras) {
    _reporterNs.report("STaskType", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGetAgentInfo(extras) {
    _reporterNs.report("SGetAgentInfo", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskState(extras) {
    _reporterNs.report("STaskState", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTaskShowType(extras) {
    _reporterNs.report("STaskShowType", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendHelpItem(extras) {
    _reporterNs.report("FriendHelpItem", "./FriendHelpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCommonType(extras) {
    _reporterNs.report("StdCommonType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgTypeRet(extras) {
    _reporterNs.report("MsgTypeRet", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgTypeSend(extras) {
    _reporterNs.report("MsgTypeSend", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_GetIncommons(extras) {
    _reporterNs.report("Evt_GetIncommons", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SetAssistRole(extras) {
    _reporterNs.report("Evt_SetAssistRole", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_TaskChange(extras) {
    _reporterNs.report("Evt_TaskChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConvert(extras) {
    _reporterNs.report("Convert", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToFixed(extras) {
    _reporterNs.report("ToFixed", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../utils/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("FriendHelpPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      path = _cc.path;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.default;
    }, function (_unresolved_4) {
      STaskType = _unresolved_4.STaskType;
      STaskState = _unresolved_4.STaskState;
      STaskShowType = _unresolved_4.STaskShowType;
    }, function (_unresolved_5) {
      FriendHelpItem = _unresolved_5.FriendHelpItem;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
      StdCommonType = _unresolved_6.StdCommonType;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }, function (_unresolved_8) {
      MsgTypeRet = _unresolved_8.MsgTypeRet;
      MsgTypeSend = _unresolved_8.MsgTypeSend;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_GetIncommons = _unresolved_9.Evt_GetIncommons;
      Evt_SetAssistRole = _unresolved_9.Evt_SetAssistRole;
      Evt_TaskChange = _unresolved_9.Evt_TaskChange;
    }, function (_unresolved_10) {
      GameSet = _unresolved_10.GameSet;
    }, function (_unresolved_11) {
      Convert = _unresolved_11.Convert;
      ToFixed = _unresolved_11.ToFixed;
    }, function (_unresolved_12) {
      AutoScroller = _unresolved_12.AutoScroller;
    }, function (_unresolved_13) {
      BagItem = _unresolved_13.BagItem;
    }, function (_unresolved_14) {
      Tips = _unresolved_14.Tips;
    }, function (_unresolved_15) {
      ResMgr = _unresolved_15.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a2f6/CbXNJk7jP/pN/uyzs", "FriendHelpPanel", undefined);

      __checkObsolete__(['Button', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'Prefab', 'SH', 'ScrollView', 'Slider', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'UITransform', 'Vec3', 'instantiate', 'path', 'v3']);

      _export("FriendHelpPanel", FriendHelpPanel = class FriendHelpPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/panel/friend/FriendHelpPanel";
          this.assistNode = void 0;
          this.Layout = void 0;
          this.item = void 0;
          this.left = void 0;
          this.right = void 0;
          this.page_lbl = void 0;
          this.navBtns = void 0;
          this.page1 = void 0;
          this.Slider = void 0;
          this.itemNode = void 0;
          this.item0 = void 0;
          this.help_num = void 0;
          this.rewardBtn = void 0;
          this.reward_num = void 0;
          this.fanyuNode = void 0;
          this.reward_items = void 0;
          this.scroller = void 0;
          this.progress = void 0;
          this.maxPage = 1;
          this.curPage = 1;
          this.pageSize = 2;
          this.page = void 0;
          this.datas = [];
          this.canGetId = [];
          this.assistIncom = 0;
          this.is_show = false;
          this.info = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("frame/closeBtn");
          this.rewardBtn = this.find("frame/assistNode/banner/rewardBtn");
          this.reward_num = this.node.getChildByPath("frame/assistNode/banner/rewardBtn/reward_num").getComponent(Label);
          this.assistNode = this.find("frame/assistNode");
          this.Layout = this.find("frame/assistNode/Layout");
          this.item = this.find("frame/assistNode/Layout/FriendHelpItem");
          this.left = this.node.getChildByPath("frame/assistNode/pageBg/left");
          this.right = this.node.getChildByPath("frame/assistNode/pageBg/right");
          this.page_lbl = this.node.getChildByPath("frame/assistNode/pageBg/page_lbl").getComponent(Label);
          this.help_num = this.node.getChildByPath("frame/fanyuNode/banner/lblNode/help_num").getComponent(Label);
          this.page1 = this.node.getChildByPath("frame/fanyuNode/ScrollView/view/content/page1");
          this.Slider = this.find("frame/fanyuNode/ScrollView/view/content/page1/Slider", Slider);
          this.progress = this.node.getChildByPath("frame/fanyuNode/ScrollView/view/content/page1/Slider/progress");
          this.fanyuNode = this.find("frame/fanyuNode");
          this.itemNode = this.node.getChildByPath("frame/fanyuNode/ScrollView/view/content/page1/itemNode");
          this.item0 = this.node.getChildByPath("frame/fanyuNode/ScrollView/view/content/page1/itemNode/item0");
          this.reward_items = this.node.getChildByPath("frame/fanyuNode/reward_items");
          this.reward_items.on(Input.EventType.TOUCH_END, this.onScroller, this);
          this.navBtns = this.find("frame/nav").children.concat();

          for (let btn of this.navBtns) {
            btn.on('toggle', this.onPage, this);
          }

          this.left.on(Input.EventType.TOUCH_END, () => {
            if (this.curPage > 1) {
              this.curPage--;
              this.steItemData();
            }
          });
          this.right.on(Input.EventType.TOUCH_END, () => {
            this.curPage++;

            if (this.curPage <= this.maxPage) {
              this.steItemData();
            } else {
              this.curPage--;
            }
          });
          this.rewardBtn.on(Input.EventType.TOUCH_END, this.getReward, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SetAssistRole === void 0 ? (_reportPossibleCrUseOfEvt_SetAssistRole({
            error: Error()
          }), Evt_SetAssistRole) : Evt_SetAssistRole, this.updateItem, this); // Session.on(MsgTypeRet.UnlockAssistRoleSlotRet, this.unlockPos, this);

          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).SetAssistRoleUsageFeeRet, this.SetAssistRoleUsageFee, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange, this.updateFanyuPage, this);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).on((_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
            error: Error()
          }), MsgTypeRet) : MsgTypeRet).CollectAssistIncomeRet, this.updateAssistIncom, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_GetIncommons === void 0 ? (_reportPossibleCrUseOfEvt_GetIncommons({
            error: Error()
          }), Evt_GetIncommons) : Evt_GetIncommons, this.flush, this);
        }

        onShow() {}

        async flush(info) {
          this.info = info;
          let spr_path = "qi_pao";

          if ((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).GetServerMark() == "hc") {
            spr_path = "qi_pao_hc";
          }

          this.rewardBtn.getComponent(Sprite).spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/friend", spr_path, "spriteFrame"), SpriteFrame);
          this.seRoletAssistData();
          this.setFanyuAssistData();
          this.updateAssistLabelCoun();
          this.SetPage(0);
        }

        seRoletAssistData() {
          let info = this.info;
          let assistHelpData = [];
          let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCommon((_crd && StdCommonType === void 0 ? (_reportPossibleCrUseOfStdCommonType({
            error: Error()
          }), StdCommonType) : StdCommonType).Friend);
          let lock = cfg.FieldUnlock;

          for (let i = 0; i < lock.length; i++) {
            let data = {
              islock: false,
              lockCost: 0,
              all_unlock_coun: 0,
              assistInfo: null,
              role: null
            };
            data.all_unlock_coun = i; //解锁

            if (info && info.assist_roles_slots && i < info.assist_roles_slots) {
              for (let index = 0; index < info.assist_roles_slots; index++) {
                //有解锁的数量          
                data.islock = true;

                if (info.assist_roles && info.assist_roles[index] && i == info.assist_roles[index].slot) {
                  //已解锁有角色
                  data.assistInfo = info.assist_roles[index];
                  data.role = info.role_data_list[index];
                  break;
                } else {
                  //已解锁未有角色
                  data.role = null;
                  data.assistInfo = {
                    role_id: "",
                    player_id: "",
                    slot: i,
                    usage_fee: 0,
                    battle_power: 0,
                    daily_assist_count: 0,
                    daily_income: 0
                  };
                }
              }
            } else {
              //未解锁
              data.islock = false;
              data.lockCost = lock[i];
              data.role = null;
              data.assistInfo = {
                role_id: "",
                player_id: "",
                slot: i,
                usage_fee: 0,
                battle_power: 0,
                daily_assist_count: 0,
                daily_income: 0
              };
            }

            assistHelpData.push(data);
          }

          if (!this.datas[0]) {
            this.datas.push(assistHelpData);
          } else {
            this.datas[0] = assistHelpData;
          }
        }

        setFanyuAssistData() {
          let info = this.info;
          let fanyuHelpData = [];
          let task_data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).roleInfo.tasks;

          for (const key in task_data) {
            if (Object.prototype.hasOwnProperty.call(task_data, key)) {
              const element = task_data[key];
              let stdTask = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskById(element.id);

              if (stdTask && stdTask.Show == (_crd && STaskShowType === void 0 ? (_reportPossibleCrUseOfSTaskShowType({
                error: Error()
              }), STaskShowType) : STaskShowType).friend) {
                if (stdTask.TaskType == (_crd && STaskType === void 0 ? (_reportPossibleCrUseOfSTaskType({
                  error: Error()
                }), STaskType) : STaskType).fanyuHelp) {
                  fanyuHelpData.push(element);

                  if (element.v >= stdTask.CompletionNum && element.s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
                    error: Error()
                  }), STaskState) : STaskState).unFinsh) {
                    this.canGetId.push(element.id);
                  }
                }
              }
            }
          }

          if (!this.datas[1]) {
            this.datas.push(fanyuHelpData);
          } else {
            this.datas[1] = fanyuHelpData;
          }
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
          this.assistNode.active = false;
          this.fanyuNode.active = false;

          switch (this.page) {
            case 0:
              this.assistNode.active = true;
              let maxCount = this.datas[0].length;
              this.maxPage = Math.ceil(maxCount / this.pageSize);
              this.page_lbl.string = this.curPage + "/" + (this.maxPage == 0 ? 1 : this.maxPage);
              this.steItemData();
              break;

            case 1:
              this.reward_items.active = this.is_show;
              let SpacingX = 240;
              let data = this.datas[1];
              this.fanyuNode.active = true;
              this.page1.getComponent(UITransform).width = data.length * SpacingX;
              this.Slider.node.getComponent(UITransform).width = data.length * SpacingX;
              if (!data || data.length == 0) return;
              this.help_num.string = data[0].v + "";
              this.itemNode.removeAllChildren();
              let count = data.length;
              let unlock_num = 0;

              for (let index = 0; index < count; index++) {
                let box = instantiate(this.item0);
                box.position = new Vec3(SpacingX * (index + 1) - 20, -80, 0);
                let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetTaskById(data[index].id);
                let CompletionNum = box.getChildByName("CompletionNum").getComponent(Label);
                CompletionNum.string = "已协作" + cfg.CompletionNum + "次";
                let item_unlock = box.getChildByName("unlock");
                let item_get = box.getChildByName("get");
                item_unlock.active = cfg.CompletionNum > data[index].v;

                if (cfg.CompletionNum <= data[index].v) {
                  unlock_num++;
                }

                item_get.active = data[index].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
                  error: Error()
                }), STaskState) : STaskState).Finsh;
                this.itemNode.addChild(box);
              } // let size = this.Slider.getComponent(UITransform).contentSize;


              this.progress.getComponent(UITransform).setContentSize(unlock_num * SpacingX, 28);

              for (let index = 0; index < this.itemNode.children.length; index++) {
                const element = this.itemNode.children[index];
                element.off(Input.EventType.TOUCH_END);
                element.on(Input.EventType.TOUCH_END, this.onItem, this);
              }

              break;

            default:
              break;
          }
        } //---------------------------角色助战相关-------------------------------------


        getReward() {
          if (this.assistIncom) {
            let info = {
              type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                error: Error()
              }), MsgTypeSend) : MsgTypeSend).CollectAssistIncomeRequest,
              data: {
                amount: this.assistIncom
              }
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(info);
          } else {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("暂无奖励领取");
          }
        }

        steItemData() {
          this.page_lbl.string = this.curPage + "/" + (this.maxPage == 0 ? 1 : this.maxPage);
          let data = [];
          let i = this.curPage * this.pageSize;

          for (let index = 0; index < this.pageSize; index++) {
            const element = this.datas[0][--i];

            if (element) {
              data.unshift(element);
            }
          }

          if (data.length > 0) {
            this.Layout.removeAllChildren();

            for (let index = 0; index < data.length; index++) {
              let node = instantiate(this.item);
              let item_node = node.getComponent(_crd && FriendHelpItem === void 0 ? (_reportPossibleCrUseOfFriendHelpItem({
                error: Error()
              }), FriendHelpItem) : FriendHelpItem);
              if (!item_node) item_node = node.addComponent(_crd && FriendHelpItem === void 0 ? (_reportPossibleCrUseOfFriendHelpItem({
                error: Error()
              }), FriendHelpItem) : FriendHelpItem);
              item_node.setData(data[index], this.info);
              this.Layout.addChild(node);
            }
          }
        } //助战或者取消助战后刷新数据


        updateItem(data) {
          if (!this.datas || !this.datas[0]) return;
          let pos = data.slot % 2 == 0 ? 0 : 1;

          for (let index = 0; index < this.datas[0].length; index++) {
            const element = this.datas[0][index];

            if (index == data.slot && element) {
              element.assistInfo.usage_fee = data.fee;
              element.assistInfo.slot = data.slot;

              if (data.role_id) {
                element.role = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).GetRoleById(data.role_id);
              } else {
                element.role = null;
              }

              let node = this.Layout.children[pos];
              let item_node = node.getComponent(_crd && FriendHelpItem === void 0 ? (_reportPossibleCrUseOfFriendHelpItem({
                error: Error()
              }), FriendHelpItem) : FriendHelpItem);
              if (!item_node) item_node = node.addComponent(_crd && FriendHelpItem === void 0 ? (_reportPossibleCrUseOfFriendHelpItem({
                error: Error()
              }), FriendHelpItem) : FriendHelpItem);
              item_node.setData(element, this.info);
            }
          }
        } // //解锁刷新数据
        // private unlockPos(data: { new_slot_count: number }) {
        //     //解锁数量比位置少一
        //     let pos = (data.new_slot_count % 2 == 0) ? 1 : 0
        //     let slot = data.new_slot_count - 1;
        //     for (let index = 0; index < this.datas[0].length; index++) {
        //         const element = this.datas[0][index];
        //         if (element && element.assistInfo.slot == slot) {
        //             element.islock = true;
        //             let node = this.Layout.children[pos];
        //             let item_node = node.getComponent(FriendHelpItem);
        //             if (!item_node) item_node = node.addComponent(FriendHelpItem);
        //             item_node.setData(element);
        //         }
        //     }
        // }

        /**设置助战费用后刷新数据 */


        SetAssistRoleUsageFee(data) {
          for (let index = 0; index < this.datas[0].length; index++) {
            const element = this.datas[0][index];

            if (element && element.assistInfo && element.assistInfo.role_id == data.role_id) {
              element.assistInfo.usage_fee = data.usage_fee;
              break;
            }
          }
        } //---------------------------------
        //-----------------------------繁育相关--------------------------- /


        onItem(event) {
          let node = event.currentTarget;
          let index = node.getSiblingIndex();

          if (node.getChildByName("unlock").active) {
            let p = node.position;
            let [x, y] = (_crd && Convert === void 0 ? (_reportPossibleCrUseOfConvert({
              error: Error()
            }), Convert) : Convert)(p.x, p.y, node.parent, this.fanyuNode);
            this.reward_items.active = true;
            this.reward_items.setPosition(x, y + node.getComponent(UITransform).height / 2);
            let datas = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).getTaskRewardThings(this.datas[1][index].id);
            let itemLayout = this.reward_items.getChildByPath(`Node/ScrollView`).getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
              error: Error()
            }), AutoScroller) : AutoScroller);
            itemLayout.SetHandle(this.UpdateBagItem.bind(this));
            itemLayout.UpdateDatas(datas);
          } else {
            if (this.datas[1][index].s == (_crd && STaskState === void 0 ? (_reportPossibleCrUseOfSTaskState({
              error: Error()
            }), STaskState) : STaskState).unFinsh) {
              let info = {
                type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                  error: Error()
                }), MsgTypeSend) : MsgTypeSend).CompleteTask,
                data: {
                  task_id: this.datas[1][index].id
                }
              };
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send(info, (_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
                error: Error()
              }), MsgTypeRet) : MsgTypeRet).CompleteTaskRet);
            } else {
              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                error: Error()
              }), Tips) : Tips).Show("已领取");
            }
          }
        }

        UpdateBagItem(item, data) {
          let bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          if (!bagItem) bagItem = item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.SetData(data);
          bagItem.setIsShowSelect(false);
          bagItem.setIsShowTips(true);
          item.getComponent(Toggle).enabled = false; // item.getChildByName(`name`).active = false;
        }

        onScroller() {
          this.reward_items.active = false;
        }

        updateFanyuPage() {
          this.setFanyuAssistData();
          this.SetPage(1);
        }

        updateAssistLabelCoun() {
          if (this.info && this.info.total_assist_income) {
            this.assistIncom = this.info.total_assist_income;
          } else {
            this.assistIncom = 0;
          }

          let shownum = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
            error: Error()
          }), ToFixed) : ToFixed)(this.assistIncom, 2);
          this.reward_num.string = shownum;
        }

        updateAssistIncom() {
          this.assistIncom = 0;
          let shownum = (_crd && ToFixed === void 0 ? (_reportPossibleCrUseOfToFixed({
            error: Error()
          }), ToFixed) : ToFixed)(this.assistIncom, 2);
          this.reward_num.string = shownum;
        }

        onHide(...args) {
          this.datas = [];
          this.canGetId = [];
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_TaskChange === void 0 ? (_reportPossibleCrUseOfEvt_TaskChange({
            error: Error()
          }), Evt_TaskChange) : Evt_TaskChange, this.updateFanyuPage, this);

          for (let index = 0; index < this.Layout.children.length; index++) {
            const element = this.Layout.children[index];
            let item_node = element.getComponent(_crd && FriendHelpItem === void 0 ? (_reportPossibleCrUseOfFriendHelpItem({
              error: Error()
            }), FriendHelpItem) : FriendHelpItem);
            item_node.clearTime();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93fc1478335e56c9dfcff56cb8a779a605066fea.js.map