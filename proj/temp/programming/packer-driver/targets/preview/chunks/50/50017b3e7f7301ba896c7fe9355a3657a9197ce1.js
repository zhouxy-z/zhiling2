System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, easing, Input, instantiate, Label, path, Sprite, SpriteFrame, tween, UITransform, v3, Vec3, folder_item, ResMgr, GameSet, PlaneView, Second, Utils, Transform3d, AsyncComponent, PlayerData, CfgMgr, EventMgr, Evt_MainTaskChange, Panel, MsgPanel, Goto, proto, MainUI3D, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
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

        static prevLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.loadSub) {
              _this.loadSub = new Promise((resolve, reject) => {
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).GetResources("prefabs/main/MainUI3D", prefab => {
                  var node = instantiate(prefab);
                  MainUI3D._instance = node.addComponent(MainUI3D);
                  resolve(MainUI3D._instance);
                });
              });
              return _this.loadSub;
            }

            return _this.loadSub;
          })();
        }
        /**
         * 显示
         */


        static Show(node) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2._instance) yield _this2.prevLoad();
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera.node.addChild(_this2._instance.node);
            var d = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).TestUIHigh(720 * (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).PixelSize, (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera);

            MainUI3D._instance.node.setPosition(0, 0, -d);

            _this2.canvas = node;

            _this2.canvas.on(Input.EventType.TOUCH_START, _this2._instance.onTouchStart, _this2._instance);

            _this2.canvas.on(Input.EventType.TOUCH_END, _this2._instance.onTouchEnd, _this2._instance);

            _this2._instance.Init();
          })();
        }

        static Hide() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3._instance) yield _this3.prevLoad();

            if (_this3._instance && _this3._instance.node.parent) {
              _this3._instance.node.parent.removeChild(_this3._instance.node);
            }

            if (_this3.canvas) {
              _this3.canvas.off(Input.EventType.TOUCH_START, _this3._instance.onTouchStart, _this3._instance);

              _this3.canvas.off(Input.EventType.TOUCH_END, _this3._instance.onTouchEnd, _this3._instance);
            }
          })();
        }

        onLoad() {
          var _superprop_getOnLoad = () => super.onLoad,
              _this4 = this;

          return _asyncToGenerator(function* () {
            MainUI3D._instance = _this4;
            _this4.fightBtn = _this4.node.getChildByPath("ui/battleNode/fight");
            _this4.saijiBtn = _this4.node.getChildByPath("ui/battleNode/saiji");
            _this4.txzItem = _this4.node.getChildByPath("ui/left/txzItem");

            var left = _this4.node.getChildByPath("ui/left");

            _this4.taskClone = left.getChildByPath("item0");
            left.removeChild(_this4.taskClone);

            _this4.taskPool.push(left.getChildByPath("item1"));

            _this4.taskPool.push(left.getChildByPath("item2"));

            left.removeChild(_this4.taskPool[0]);
            left.removeChild(_this4.taskPool[1]);
            _this4.leftStartY = left.getChildByPath("txzItem").position.y;

            var right = _this4.node.getChildByPath("ui/right");

            _this4.rightStartY = right.getChildByPath("hdItem").position.y;

            _this4.taskItems.push(_this4.node.getChildByPath("ui/taskItem/item0"));

            _this4.taskItems.push(_this4.node.getChildByPath("ui/taskItem/item1"));

            _this4.taskItems.push(_this4.node.getChildByPath("ui/taskItem/item2"));

            _this4.right_taskStartX = _this4.node.getChildByPath("ui/taskItem/item0").position.x;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).on(_crd && Evt_MainTaskChange === void 0 ? (_reportPossibleCrUseOfEvt_MainTaskChange({
              error: Error()
            }), Evt_MainTaskChange) : Evt_MainTaskChange, _this4.updateLeftData, _this4);

            _superprop_getOnLoad().call(_this4);
          })();
        }

        Init() {
          var hdItem = this.node.getChildByPath("ui/right/hdItem");
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(hdItem, e => {
            var ut = hdItem.getComponent(UITransform);
            if (this.rightView.checkTouch(e, hdItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.txzItem, e => {
            var ut = this.txzItem.getComponent(UITransform);
            if (this.leftView.checkTouch(e, this.txzItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          var tileItem = this.node.getChildByPath("ui/left/tileItem");
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(tileItem, e => {
            var ut = tileItem.getComponent(UITransform);
            if (this.leftView.checkTouch(e, tileItem, ut.contentSize.width, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.fightBtn, e => {
            var ut = this.fightBtn.getComponent(UITransform);
            if (this.battleView.checkTouch(e, this.fightBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).AddTouchEffect(this.saijiBtn, e => {
            var ut = this.saijiBtn.getComponent(UITransform);
            if (this.battleView.checkTouch(e, this.saijiBtn, ut.contentSize.width / 2, ut.contentSize.height / 2)) return true;
            return false;
          }, this, MainUI3D.canvas);
        }

        start() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5.planeView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
              error: Error()
            }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, _this5.node.getChildByPath("ui"), Vec3.UNIT_Z);
            _this5.leftView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
              error: Error()
            }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, _this5.node.getChildByPath("ui/left"));
            _this5.rightView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
              error: Error()
            }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, _this5.node.getChildByPath("ui/right"));
            _this5.battleView = new (_crd && PlaneView === void 0 ? (_reportPossibleCrUseOfPlaneView({
              error: Error()
            }), PlaneView) : PlaneView)((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera, _this5.node.getChildByPath("ui/battleNode"));

            _this5.updateLeftData();

            var children = _this5.node.getChildByPath("ui/left").children;

            _this5.layoutV(_this5.leftView.localLeftDown.x, _this5.leftStartY, children);

            _this5.startTween(0, children);

            children = _this5.node.getChildByPath("ui/right").children;

            _this5.layoutV(_this5.rightView.localRightDown.x, _this5.rightStartY, children);

            _this5.startTween(1, children);

            _this5.setTween();
          })();
        }

        setTween() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            // let poster = this.node.getChildByPath("poster");
            // poster.getComponent(UIOpacity).opacity = 0;
            // poster.setScale(new Vec3(poster.scale.x * 0.5, poster.scale.y * 0.5, 1));
            // tween(poster)
            //     .to(0.6, { scale: new Vec3(poster.scale.x * 2, poster.scale.y * 2, 1) }, { easing: easing.circOut })
            //     .start();
            var battleNode = _this6.node.getChildByPath("ui/battleNode");

            var battleNode_pos = battleNode.getPosition();
            battleNode.setPosition(new Vec3(battleNode_pos.x, battleNode_pos.y - 20, battleNode_pos.z));
            tween(battleNode).to(1.2, {
              position: new Vec3(battleNode_pos.x, battleNode_pos.y, battleNode_pos.z)
            }, {
              easing: easing.circOut
            }).start(); // // await Second(0.2)
            // tween(poster.getComponent(UIOpacity))
            //     .to(1, { opacity: 255 }, { easing: easing.circOut })
            //     .start()
          })();
        }

        startTween(left_right, items) {
          return _asyncToGenerator(function* () {
            var endPos = [];

            for (var index = 0; index < items.length; index++) {
              var element = items[index];
              var pos = element.getPosition();
              endPos.push(pos);

              if (left_right == 1) {
                element.setPosition(new Vec3(pos.x + 100, pos.y, pos.z));
              } else {
                element.setPosition(new Vec3(pos.x - 100, pos.y, pos.z));
              }
            }

            for (var _index = 0; _index < items.length; _index++) {
              var _element = items[_index];
              tween(_element).to(1, {
                position: endPos[_index]
              }, {
                easing: easing.circOut
              }).start();
              yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(0.05);
            }
          })();
        }

        layoutV(x, starty, items) {
          var h = 0;

          for (var _i = 0; _i < items.length; _i++) {
            var _item = items[_i];
            h += _item.getComponent(_crd && Transform3d === void 0 ? (_reportPossibleCrUseOfTransform3d({
              error: Error()
            }), Transform3d) : Transform3d).height;
          }

          var startx = x;
          var startz = 0;
          var out = v3();
          var mat = this.node.getWorldMatrix().invert();

          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var trans = item.getComponent(_crd && Transform3d === void 0 ? (_reportPossibleCrUseOfTransform3d({
              error: Error()
            }), Transform3d) : Transform3d);
            Vec3.transformMat4(out, item.worldPosition, mat);
            var v = item.position;
            item.setPosition(startx, starty, startz);
            starty -= trans.height;
          }
        }
        /**
         * 更新左边任务栏
         * @param datas 
         */


        updateLeftData() {
          var _this7 = this;

          var datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetShowMianTask();
          var left = this.node.getChildByPath("ui/left");

          var _loop = function _loop() {
            var data = datas[i];

            if (!data) {
              var item = _this7.leftItems[i];
              left.removeChild(item);

              _this7.taskPool.push(item);

              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).DelTouchEffect(item, MainUI3D.canvas);
            } else {
              var _item2 = _this7.leftItems[i];

              if (!_item2) {
                _item2 = _this7.taskPool.length ? _this7.taskPool.pop() : instantiate(_this7.taskClone);
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).DelTouchEffect(_item2, MainUI3D.canvas);
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).AddTouchEffect(_item2, e => {
                  var ut = _item2.getComponent(UITransform);

                  if (_this7.leftView.checkTouch(e, _item2, ut.contentSize.width, ut.contentSize.height / 2)) return true;
                  return false;
                }, _this7, MainUI3D.canvas);

                _this7.leftItems.push(_item2);

                left.addChild(_item2);
              }

              var cfg_task = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTaskByData(data);
              console.log(cfg_task);
              var icon = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(cfg_task.RewardID[0]).Icon;
              var num = cfg_task.RewardNumber[0];
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, icon, "spriteFrame"), SpriteFrame, res => {
                _item2.getChildByName("icon").getComponent(Sprite).spriteFrame = res;
              });
              _item2.getChildByPath("icon/num").getComponent(Label).string = num + "";
              _item2.getChildByPath("icon/label").getComponent(Label).string = cfg_task.Description;
              var state = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetTaskState(data);
              _item2.getChildByName("select").active = state == 2;
              _item2["data"] = cfg_task;
            }
          };

          for (var i = 0, len = Math.max(datas.length, this.leftItems.length); i < len; i++) {
            _loop();
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


        updateRighTaskItem() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var data = [];
            data = data.concat(...(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).change_task_list);
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).change_task_list = [];
            _this8.startTaskTween = false;
            var item_count = _this8.taskItems.length;
            var count = Math.ceil(data.length / item_count);

            for (var index = 0; index < count; index++) {
              var time = index == count - 1 ? 3 : 0.6;

              var _loop2 = function* _loop2() {
                var element = data[index * item_count + i];
                console.log(element, data.length, index, item_count, i);
                var item = _this8.taskItems[i];

                if (!element) {
                  item.active = false;
                } else {
                  item.active = true;
                  var cfg_task = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).GetTaskByData(element.data);

                  var _count = element.data.value > cfg_task.CompletionNum ? cfg_task.CompletionNum : element.data.value;

                  var str = "(" + _count + "/" + cfg_task.CompletionNum + ")";
                  item.getChildByName("label").getComponent(Label).string = "完成" + cfg_task.Description + str;
                }

                tween(item).to(0.5, {
                  position: new Vec3(_this8.right_taskStartX - 4.1, item.position.y, item.position.z)
                }).delay(time).call(() => {
                  item.active = false;
                }).to(0.01, {
                  position: new Vec3(_this8.right_taskStartX, item.position.y, item.position.z)
                }).call(() => {
                  item.active = true;
                }).start();
              };

              for (var i = 0; i < item_count; i++) {
                yield* _loop2();
              }

              yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(1.11);
            }
          })();
        }

        onTouchStart(e) {}
        /**
         * 点击事件
         * @param e 
         * @returns 
         */


        onTouchEnd(e) {
          var ut = this.saijiBtn.getComponent(UITransform);

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


          var tileItem = this.node.getChildByPath("ui/left/tileItem");
          ut = tileItem.getComponent(UITransform);

          if (this.leftView.checkTouch(e, tileItem, ut.contentSize.width, ut.contentSize.height)) {
            console.log(tileItem.name);
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("TaskPanel");
            return;
          }

          for (var item of this.leftItems) {
            if (item.parent) {
              ut = item.getComponent(UITransform);

              if (this.leftView.checkTouch(e, item, ut.contentSize.width, ut.contentSize.height)) {
                var cfg = item["data"];
                console.log(cfg);
                var type = 0;

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