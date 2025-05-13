System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, easing, Input, instantiate, Label, path, Sprite, SpriteFrame, tween, UITransform, v3, Vec3, folder_item, ResMgr, GameSet, PlaneView, Second, Utils, Transform3d, AsyncComponent, PlayerData, CfgMgr, EventMgr, Evt_MainTaskChange, Panel, MsgPanel, Goto, proto, MainUI3D, _crd;

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaneView(extras) {
    _reporterNs.report("PlaneView", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransform3d(extras) {
    _reporterNs.report("Transform3d", "../common/Transform3d", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_MainTaskChange(extras) {
    _reporterNs.report("Evt_MainTaskChange", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("MainUI3D", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      easing = _cc.easing;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      folder_item = _unresolved_2.folder_item;
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      GameSet = _unresolved_3.GameSet;
    }, function (_unresolved_4) {
      PlaneView = _unresolved_4.PlaneView;
      Second = _unresolved_4.Second;
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      Transform3d = _unresolved_5.Transform3d;
    }, function (_unresolved_6) {
      AsyncComponent = _unresolved_6.AsyncComponent;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }, function (_unresolved_8) {
      CfgMgr = _unresolved_8.CfgMgr;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_MainTaskChange = _unresolved_9.Evt_MainTaskChange;
    }, function (_unresolved_10) {
      Panel = _unresolved_10.Panel;
    }, function (_unresolved_11) {
      MsgPanel = _unresolved_11.MsgPanel;
    }, function (_unresolved_12) {
      Goto = _unresolved_12.Goto;
    }, function (_unresolved_13) {
      proto = _unresolved_13.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a670fG2rzxII4OIeURBKl+/", "MainUI3D", undefined);

      __checkObsolete__(['Component', 'director', 'easing', 'EventTouch', 'find', 'geometry', 'Input', 'instantiate', 'Label', 'math', 'Node', 'path', 'Prefab', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'UITransform', 'v3', 'Vec3']);

      _export("MainUI3D", MainUI3D = class MainUI3D extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor(...args) {
          super(...args);
          this.planeView = void 0;
          this.leftView = void 0;
          this.rightView = void 0;
          this.battleView = void 0;
          this.fightBtn = void 0;
          this.saijiBtn = void 0;
          this.txzItem = void 0;
          this.leftStartY = void 0;
          this.rightStartY = void 0;
          this.right_taskStartX = void 0;
          this.taskClone = void 0;
          this.noticeClone = void 0;
          this.taskPool = [];
          this.noticePool = [];
          this.leftItems = [];
          this.taskItems = [];
          this.startTaskTween = false;
        }

        static get instance() {
          return this._instance;
        }

        static async prevLoad() {
          if (!this.loadSub) {
            this.loadSub = new Promise((resolve, reject) => {
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).GetResources("prefabs/main/MainUI3D", prefab => {
                let node = instantiate(prefab);
                MainUI3D._instance = node.addComponent(MainUI3D);
                resolve(MainUI3D._instance);
              });
            });
            return this.loadSub;
          }

          return this.loadSub;
        }
        /**
         * 显示
         */


        static async Show(node) {
          if (!this._instance) await this.prevLoad();
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.node.addChild(this._instance.node);
          let d = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).TestUIHigh(720 * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).PixelSize, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera);

          MainUI3D._instance.node.setPosition(0, 0, -d);

          this.canvas = node;
          this.canvas.on(Input.EventType.TOUCH_START, this._instance.onTouchStart, this._instance);
          this.canvas.on(Input.EventType.TOUCH_END, this._instance.onTouchEnd, this._instance);

          this._instance.Init();
        }

        static async Hide() {
          if (!this._instance) await this.prevLoad();

          if (this._instance && this._instance.node.parent) {
            this._instance.node.parent.removeChild(this._instance.node);
          }

          if (this.canvas) {
            this.canvas.off(Input.EventType.TOUCH_START, this._instance.onTouchStart, this._instance);
            this.canvas.off(Input.EventType.TOUCH_END, this._instance.onTouchEnd, this._instance);
          }
        }

        async onLoad() {
          MainUI3D._instance = this;
          this.fightBtn = this.node.getChildByPath("ui/battleNode/fight");
          this.saijiBtn = this.node.getChildByPath("ui/battleNode/saiji");
          this.txzItem = this.node.getChildByPath("ui/left/txzItem");
          let left = this.node.getChildByPath("ui/left");
          this.taskClone = left.getChildByPath("item0");
          left.removeChild(this.taskClone);
          this.taskPool.push(left.getChildByPath("item1"));
          this.taskPool.push(left.getChildByPath("item2"));
          left.removeChild(this.taskPool[0]);
          left.removeChild(this.taskPool[1]);
          this.leftStartY = left.getChildByPath("txzItem").position.y;
          let right = this.node.getChildByPath("ui/right");
          this.rightStartY = right.getChildByPath("hdItem").position.y;
          this.taskItems.push(this.node.getChildByPath("ui/taskItem/item0"));
          this.taskItems.push(this.node.getChildByPath("ui/taskItem/item1"));
          this.taskItems.push(this.node.getChildByPath("ui/taskItem/item2"));
          this.right_taskStartX = this.node.getChildByPath("ui/taskItem/item0").position.x;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_MainTaskChange === void 0 ? (_reportPossibleCrUseOfEvt_MainTaskChange({
            error: Error()
          }), Evt_MainTaskChange) : Evt_MainTaskChange, this.updateLeftData, this);
          super.onLoad();
        }

        Init() {
          let hdItem = this.node.getChildByPath("ui/right/hdItem");
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(hdItem, e => {
            let ut = hdItem.getComponent(UITransform);
            if (this.rightView.checkTouch(e, hdItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.txzItem, e => {
            let ut = this.txzItem.getComponent(UITransform);
            if (this.leftView.checkTouch(e, this.txzItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          let tileItem = this.node.getChildByPath("ui/left/tileItem");
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(tileItem, e => {
            let ut = tileItem.getComponent(UITransform);
            if (this.leftView.checkTouch(e, tileItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.fightBtn, e => {
            let ut = this.fightBtn.getComponent(UITransform);
            if (this.battleView.checkTouch(e, this.fightBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.saijiBtn, e => {
            let ut = this.saijiBtn.getComponent(UITransform);
            if (this.battleView.checkTouch(e, this.saijiBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
        }

        async start() {
          this.planeView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
            error: Error()
          }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, this.node.getChildByPath("ui"), Vec3.UNIT_Z);
          this.leftView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
            error: Error()
          }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, this.node.getChildByPath("ui/left"));
          this.rightView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
            error: Error()
          }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, this.node.getChildByPath("ui/right"));
          this.battleView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
            error: Error()
          }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera, this.node.getChildByPath("ui/battleNode"));
          this.updateLeftData();
          let children = this.node.getChildByPath("ui/left").children;
          this.layoutV(this.leftView.localLeftDown.x, this.leftStartY, children);
          this.startTween(0, children);
          children = this.node.getChildByPath("ui/right").children;
          this.layoutV(this.rightView.localRightDown.x, this.rightStartY, children);
          this.startTween(1, children);
          this.setTween();
        }

        async setTween() {
          // let poster = this.node.getChildByPath("poster");
          // poster.getComponent(UIOpacity).opacity = 0;
          // poster.setScale(new Vec3(poster.scale.x * 0.5, poster.scale.y * 0.5, 1));
          // tween(poster)
          //     .to(0.6, { scale: new Vec3(poster.scale.x * 2, poster.scale.y * 2, 1) }, { easing: easing.circOut })
          //     .start();
          let battleNode = this.node.getChildByPath("ui/battleNode");
          let battleNode_pos = battleNode.getPosition();
          battleNode.setPosition(new Vec3(battleNode_pos.x, battleNode_pos.y - 20, battleNode_pos.z));
          tween(battleNode).to(1.2, {
            position: new Vec3(battleNode_pos.x, battleNode_pos.y, battleNode_pos.z)
          }, {
            easing: easing.circOut
          }).start(); // // await Second(0.2)
          // tween(poster.getComponent(UIOpacity))
          //     .to(1, { opacity: 255 }, { easing: easing.circOut })
          //     .start()
        }

        async startTween(left_right, items) {
          let endPos = [];

          for (let index = 0; index < items.length; index++) {
            const element = items[index];
            let pos = element.getPosition();
            endPos.push(pos);

            if (left_right == 1) {
              element.setPosition(new Vec3(pos.x + 100, pos.y, pos.z));
            } else {
              element.setPosition(new Vec3(pos.x - 100, pos.y, pos.z));
            }
          }

          for (let index = 0; index < items.length; index++) {
            const element = items[index];
            tween(element).to(1, {
              position: endPos[index]
            }, {
              easing: easing.circOut
            }).start();
            await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0.05);
          }
        }

        layoutV(x, starty, items) {
          let h = 0;

          for (let _i = 0; _i < items.length; _i++) {
            let _item = items[_i];
            h += _item.getComponent(_crd && Transform3d === void 0 ? (_reportPossibleCrUseOfTransform3d({
              error: Error()
            }), Transform3d) : Transform3d).height;
          }

          let startx = x;
          let startz = 0;
          let out = v3();
          let mat = this.node.getWorldMatrix().invert();

          for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let trans = item.getComponent(_crd && Transform3d === void 0 ? (_reportPossibleCrUseOfTransform3d({
              error: Error()
            }), Transform3d) : Transform3d);
            Vec3.transformMat4(out, item.worldPosition, mat);
            let v = item.position;
            item.setPosition(startx, starty, startz);
            starty -= trans.height;
          }
        }
        /**
         * 更新左边任务栏
         * @param datas 
         */


        updateLeftData() {
          let datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetShowMianTask();
          let left = this.node.getChildByPath("ui/left");

          for (let i = 0, len = Math.max(datas.length, this.leftItems.length); i < len; i++) {
            let data = datas[i];

            if (!data) {
              let item = this.leftItems[i];
              left.removeChild(item);
              this.taskPool.push(item);
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).DelTouchEffect(item, MainUI3D.canvas);
            } else {
              let item = this.leftItems[i];

              if (!item) {
                item = this.taskPool.length ? this.taskPool.pop() : instantiate(this.taskClone);
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).DelTouchEffect(item, MainUI3D.canvas);
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).AddTouchEffect(item, e => {
                  let ut = item.getComponent(UITransform);
                  if (this.leftView.checkTouch(e, item, ut.contentSize.width, ut.contentSize.height / 2)) return true;
                  return false;
                }, this, MainUI3D.canvas);
                this.leftItems.push(item);
                left.addChild(item);
              }

              let cfg_task = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskByData(data);
              console.log(cfg_task);
              let icon = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(cfg_task.RewardID[0]).Icon;
              let num = cfg_task.RewardNumber[0];
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, icon, "spriteFrame"), SpriteFrame, res => {
                item.getChildByName("icon").getComponent(Sprite).spriteFrame = res;
              });
              item.getChildByPath("icon/num").getComponent(Label).string = num + "";
              item.getChildByPath("icon/label").getComponent(Label).string = cfg_task.Description;
              let state = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetTaskState(data);
              item.getChildByName("select").active = state == 2;
              item["data"] = cfg_task;
            }
          }
        }

        update(dt) {
          if (this.node.parent) {
            if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).change_task_list.length && (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
              error: Error()
            }), Panel) : Panel).GetPanelNum("MainPanel", "TopUI") <= 0) {
              if (!this.startTaskTween) {
                this.startTaskTween = true;
                this.updateRighTaskItem();
              }
            }
          }
        }
        /** 更新右边任务栏 */


        async updateRighTaskItem() {
          let data = [];
          data = data.concat(...(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).change_task_list);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).change_task_list = [];
          this.startTaskTween = false;
          let item_count = this.taskItems.length;
          let count = Math.ceil(data.length / item_count);

          for (let index = 0; index < count; index++) {
            let time = index == count - 1 ? 3 : 0.6;

            for (let i = 0; i < item_count; i++) {
              const element = data[index * item_count + i];
              console.log(element, data.length, index, item_count, i);
              let item = this.taskItems[i];

              if (!element) {
                item.active = false;
              } else {
                item.active = true;
                let cfg_task = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetTaskByData(element.data);
                let count = element.data.value > cfg_task.CompletionNum ? cfg_task.CompletionNum : element.data.value;
                let str = "(" + count + "/" + cfg_task.CompletionNum + ")";
                item.getChildByName("label").getComponent(Label).string = "完成" + cfg_task.Description + str;
              }

              tween(item).to(0.5, {
                position: new Vec3(this.right_taskStartX - 4.1, item.position.y, item.position.z)
              }).delay(time).call(() => {
                item.active = false;
              }).to(0.01, {
                position: new Vec3(this.right_taskStartX, item.position.y, item.position.z)
              }).call(() => {
                item.active = true;
              }).start();
            }

            await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(1.11);
          }
        }

        onTouchStart(e) {}
        /**
         * 点击事件
         * @param e 
         * @returns 
         */


        onTouchEnd(e) {
          let ut = this.saijiBtn.getComponent(UITransform);

          if (this.battleView.checkTouch(e, this.saijiBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) {
            if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CurSeasonData && (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId != 0) {
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSModelPanel", (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleMode.BattleModeRank);
            } else {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("暂时没有赛季进行中");
            }

            return;
          }

          ut = this.fightBtn.getComponent(UITransform);

          if (this.battleView.checkTouch(e, this.fightBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) {
            if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).SatrElementData && (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).SatrElementData.currentSeasonId != 0) {
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSModelPanel", (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleMode.BattleModeStar);
            } else {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("暂时没有星元对战进行中");
            }

            return;
          } //赛季通行证


          ut = this.txzItem.getComponent(UITransform);

          if (this.leftView.checkTouch(e, this.txzItem, ut.contentSize.width, ut.contentSize.height)) {
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("RightsPanel");
            return;
          } //任务


          let tileItem = this.node.getChildByPath("ui/left/tileItem");
          ut = tileItem.getComponent(UITransform);

          if (this.leftView.checkTouch(e, tileItem, ut.contentSize.width, ut.contentSize.height)) {
            console.log(tileItem.name);
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("TaskPanel");
            return;
          }

          for (let item of this.leftItems) {
            if (item.parent) {
              ut = item.getComponent(UITransform);

              if (this.leftView.checkTouch(e, item, ut.contentSize.width, ut.contentSize.height)) {
                let cfg = item["data"];
                console.log(cfg);
                let type = 0;

                if (cfg.TaskTypeData && cfg.TaskTypeData.length > 0) {
                  type = cfg.TaskTypeData[0];
                }

                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)("TaskPanel", cfg.Show - 1, type);
                return;
              }
            }
          }
        }

      });

      MainUI3D._instance = void 0;
      MainUI3D.canvas = void 0;
      MainUI3D.loadSub = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=50017b3e7f7301ba896c7fe9355a3657a9197ce1.js.map