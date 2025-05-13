System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Button, Input, Label, Layers, Node, Sprite, SpriteFrame, Tween, UITransform, Widget, easing, find, game, instantiate, js, math, path, sp, tween, v3, view, EventMgr, PanelDefine, GameSet, CfgMgr, Tips, CheckCondition, Goto, ResMgr, folder_common, GameObj, Panel, Utils, Snapshot, LocalStorage, PlayerData, Guide, SystenDoor, GuideLay, GuideSub, PointTo, PlayVideo, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelDefine(extras) {
    _reporterNs.report("PanelDefine", "../PanelDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "./GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "./CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdGuide(extras) {
    _reporterNs.report("StdGuide", "./CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdUIOpen(extras) {
    _reporterNs.report("StdUIOpen", "./CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../module/common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckCondition(extras) {
    _reporterNs.report("CheckCondition", "../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_common(extras) {
    _reporterNs.report("folder_common", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameObj(extras) {
    _reporterNs.report("GameObj", "./GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "./GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSnapshot(extras) {
    _reporterNs.report("Snapshot", "../utils/Snapshot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../module/player/PlayerData", _context.meta, extras);
  }

  _export({
    Guide: void 0,
    GuideLay: void 0,
    GuideSub: void 0,
    PointTo: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Button = _cc.Button;
      Input = _cc.Input;
      Label = _cc.Label;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Tween = _cc.Tween;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      easing = _cc.easing;
      find = _cc.find;
      game = _cc.game;
      instantiate = _cc.instantiate;
      js = _cc.js;
      math = _cc.math;
      path = _cc.path;
      sp = _cc.sp;
      tween = _cc.tween;
      v3 = _cc.v3;
      view = _cc.view;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      PanelDefine = _unresolved_3.PanelDefine;
    }, function (_unresolved_4) {
      GameSet = _unresolved_4.GameSet;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }, function (_unresolved_6) {
      Tips = _unresolved_6.Tips;
    }, function (_unresolved_7) {
      CheckCondition = _unresolved_7.CheckCondition;
      Goto = _unresolved_7.Goto;
    }, function (_unresolved_8) {
      ResMgr = _unresolved_8.ResMgr;
      folder_common = _unresolved_8.folder_common;
    }, function (_unresolved_9) {
      GameObj = _unresolved_9.GameObj;
      Panel = _unresolved_9.Panel;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.Utils;
    }, function (_unresolved_11) {
      Snapshot = _unresolved_11.Snapshot;
    }, function (_unresolved_12) {
      LocalStorage = _unresolved_12.default;
    }, function (_unresolved_13) {
      PlayerData = _unresolved_13.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0cc4IhnkxItY3AylFrmxq+", "Guide", undefined);

      __checkObsolete__(['BlockInputEvents', 'Button', 'EventTouch', 'Input', 'Label', 'Layers', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'System', 'Tween', 'UITransform', 'Vec2', 'Widget', 'debug', 'director', 'easing', 'find', 'game', 'input', 'instantiate', 'js', 'math', 'path', 'sp', 'tween', 'v2', 'v3', 'view']);

      /**
       * 引导系统
       */
      _export("Guide", Guide = class Guide {
        constructor() {
          this.systems = [];
          this.guides = [];
          this.updateLoop = 0;
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).addTick(this.update, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).AddChan('reset_guide', this.Init, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).AddChan('ui_guide', this.fetch, this);
        }
        /**
         * 初始
         */


        Init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _player;

            yield GuideLay.ShowTop();

            while (_this.systems.length) {
              var door = _this.systems.pop();

              door.destory();
            }

            var stdDoors = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("SystemOpen");

            for (var std of stdDoors) {
              var _door = new SystenDoor(std);

              _this.systems.push(_door);
            }

            while (_this.guides.length) {
              var guide = _this.guides.pop();

              guide.destory();
            }

            if ((_player = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player) != null && _player.statusMark.NoobCardsAdd) {
              (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).SetNumber("guide301", 1);
              (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).SetNumber("guide302", 1);
            }

            var stdGuids = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("guide");

            for (var stdGuide of stdGuids) {
              if (!(_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).GetNumber("guide" + stdGuide.ID, 0)) {
                _this.guides.push(new GuideSub(stdGuide));
              }
            }
          })();
        }
        /**
         * 打开界面
         * @param link 
         * @param params 
         * @returns 
         */


        fetch(link) {
          var route = link.split(".");

          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          if ((_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
            error: Error()
          }), PanelDefine) : PanelDefine)[route[0]]) {
            var classz = js.getClassByName(route.shift());
            if (!classz) return;

            if (route.length) {
              for (var h of route) {
                classz = classz[h];
              }

              classz(...params);
            } else {
              classz.Show(...params);
            }
          } else {
            var target = find(route[0]);

            if (target && target.activeInHierarchy && params) {
              target.emit(params.shift(), ...params);
            }
          }
        }

        update(dt) {
          this.updateLoop += dt;

          if (this.updateLoop >= 0.25) {
            this.updateLoop = 0;

            for (var door of this.systems) {
              door.update();
            }

            var i = 0;

            while (i < this.guides.length) {
              var guide = this.guides[i];
              guide.update();

              if (guide.isEnd) {
                this.guides[i].destory();
                this.guides.splice(i, 1);
              } else {
                i++;
              }
            }
          }
        }

      });
      /**
       * 系统开启
       */


      SystenDoor = class SystenDoor {
        constructor(std) {
          this.std = void 0;
          this.open = true;
          this.msg = void 0;
          this.std = std;
        }

        update() {
          var _this2 = this;

          // 判断触发条件
          var seed = true;

          for (var n = 1;; n++) {
            var _types = this.std['ConditionId' + n];
            var values = this.std['ConditionValue' + n];
            if (_types == undefined || _types.length == 0 || values == undefined) break;

            for (var i = 0; i < _types.length; i++) {
              var type = _types[i];
              var value = values[i];
              if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).IsArray(value)) value = [value];
              if (!(_crd && CheckCondition === void 0 ? (_reportPossibleCrUseOfCheckCondition({
                error: Error()
              }), CheckCondition) : CheckCondition)(type, ...value)) this.msg = this.std.Tips;

              if (this.msg != undefined) {
                seed = false;
                break;
              }
            }

            if (seed) break;
          }

          if (seed) {
            if (!this.open) {
              this.open = true;
            } else {
              return;
            }
          } else if (this.open) {
            this.open = false;
          } else {
            return;
          }

          var uis = this.std.UI;
          var types = this.std.HideType;

          var _loop = function _loop() {
            var url = uis[_i];
            var target = find(url);
            if (!target) return 1; // continue
            // 系统入口开启或隐藏样式

            switch (types[_i]) {
              case 0:
                target.active = _this2.open;
                break;

              case 1:
                if (_this2.open) {
                  _this2.resetBtn(target);
                } else {
                  if (target.getChildByName("lock")) {
                    target.getChildByName("lock").active = true;
                  } else {
                    var lock = new Node("lock");
                    var sprite = lock.addComponent(Sprite);
                    target.addChild(lock);
                    (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                      error: Error()
                    }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_common === void 0 ? (_reportPossibleCrUseOffolder_common({
                      error: Error()
                    }), folder_common) : folder_common, "lock/spriteFrame"), SpriteFrame, sf => {
                      sprite.spriteFrame = sf;
                    });
                  }

                  _this2.maskTouch(target);
                }

                break;

              default:
                target.active = _this2.open;
            }
          };

          for (var _i = 0; _i < uis.length; _i++) {
            if (_loop()) continue;
          }
        }

        maskTouch(target) {
          if (!target['$$mask']) {
            var size = target.getComponent(UITransform).contentSize;
            var sx = target.getScale().x,
                sy = target.getScale().y;
            var mask = new Node('mask');
            mask.addComponent(Sprite);
            mask.addComponent(BlockInputEvents);
            mask.getComponent(UITransform).setContentSize(size.width * sx, size.height * sy);
            target.addChild(mask);
            target['$$mask'] = mask;
            mask['$$target'] = target;
            mask.on(Input.EventType.TOUCH_START, this.breakTouch, this);
            mask.on(Input.EventType.TOUCH_END, this.breakTouch, this);
            mask.on(Input.EventType.TOUCH_CANCEL, this.breakTouch, this);
            target.on(Node.EventType.PARENT_CHANGED, this.onParentChange, this);
          }
        }

        breakTouch(e) {
          var target = e.currentTarget['$$target'];
          var btn = target.getComponent(Button);

          if (btn) {
            if (e.type == Input.EventType.TOUCH_END) {
              btn['_pressed'] = false;
              btn['_updateState']();
            } else {
              var evt = instantiate(e);
              evt.target = btn;
              evt.currentTarget = btn;
              target.dispatchEvent(evt);
            }
          }

          if (e.type == Input.EventType.TOUCH_END) (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
            error: Error()
          }), Tips) : Tips).Show(this.msg);
        }

        onParentChange(target) {
          if (!target || !target['$$mask']) return;

          if (target['$$mask'].parent) {
            target['$$mask'].parent.removeChild(target['$$mask']);
          }
        }

        resetBtn(target) {
          target.active = true;
          if (target.getChildByName("lock")) target.getChildByName("lock").active = false;

          if (target['$$mask']) {
            var mask = target['$$mask'];
            target['$$mask'] = undefined;
            mask.off(Input.EventType.TOUCH_START);
            mask.off(Input.EventType.TOUCH_END);
            mask.off(Input.EventType.TOUCH_CANCEL);
            mask.parent && mask.parent.removeChild(mask);
            mask.destroy();
          }
        }

        get isOpen() {
          return this.open;
        }

        get Std() {
          return this.std;
        }

        destory() {
          if (!this.std) return;
          var uis = this.std.UI;
          if (!uis) return;

          for (var i = 0; i < uis.length; i++) {
            var url = uis[i];
            var target = find(url);
            if (!target) continue;
            target.active = true;
            this.resetBtn(target);
          }
        }

      };

      _export("GuideLay", GuideLay = class GuideLay extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/guide/GuideLay";
        }

        onShow() {}

        flush() {}

        onHide() {}

        static Add(node) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.$instance) yield _this3.ShowTop();

            _this3.$instance.node.addChild(node);
          })();
        }

        static Del(node) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (!_this4.$instance) yield _this4.$loading;

            _this4.$instance.node.removeChild(node);
          })();
        }

      });
      /**
       * 引导
       */


      _export("GuideSub", GuideSub = class GuideSub {
        constructor(cfg) {
          this.state = void 0;
          this.progress = void 0;
          this.cfg = void 0;
          this.pointTo = void 0;
          this.video = void 0;
          this.$currentTarget = void 0;
          this.loop = 0;
          this.cfg = cfg;
          this.progress = 0;
          this.state = 0;
        }

        set currentTarget(value) {
          this.$currentTarget = value;
        }

        get currentTarget() {
          return this.$currentTarget;
        }

        update() {
          if (!this.state) {
            var result = true;

            for (var n = 1;; n++) {
              var cs = this.cfg["ConditionId" + n];
              if (cs == undefined || !cs.length) break;
              var vs = this.cfg["ConditionValue" + n];

              for (var i = 0; i < cs.length; i++) {
                var values = vs[i];
                if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).IsArray(values)) values = [values];

                if (!(_crd && CheckCondition === void 0 ? (_reportPossibleCrUseOfCheckCondition({
                  error: Error()
                }), CheckCondition) : CheckCondition)(cs[i], ...values)) {
                  result = false;
                  break;
                }
              }
            }

            if (result) {
              //开始指引
              this.state = 1;
              this.progress = -1;
              this.next();
            }
          } else if (this.state == 1) {
            var _result = false;

            for (var _n = 1;; _n++) {
              var _cs = this.cfg["EndConditionId" + _n];
              if (_cs == undefined || !_cs.length) break;
              var _vs = this.cfg["EndConditionValue" + _n];

              for (var _i2 = 0; _i2 < _cs.length; _i2++) {
                var _values = _vs[_i2];
                if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).IsArray(_values)) _values = [_values];

                if ((_crd && CheckCondition === void 0 ? (_reportPossibleCrUseOfCheckCondition({
                  error: Error()
                }), CheckCondition) : CheckCondition)(_cs[_i2], ..._values)) {
                  _result = true;
                  break;
                }
              }
            }

            if (_result) {
              this.end();
            } else {
              if (!this.currentTarget) {
                this.next();
              } else {
                this.checkTarget();
              }
            }
          }
        }

        get isRunning() {
          return this.state == 1;
        }

        get isEnd() {
          return this.state == 2;
        }

        next(e) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (_this5.progress + 1 <= _this5.cfg.Steps.length) {
              var _cfg$Type, _cfg$Type2, _cfg$Angle, _cfg$Tips, _cfg$Offset, _cfg$TipsAngle, _cfg$TipsOffset, _cfg$TipsSize, _cfg$ClickSize, _cfg$ClickSize2;

              if (e && _this5.cfg.OpenUI[_this5.progress]) {
                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)(_this5.cfg.OpenUI[_this5.progress]);
              }

              if (_this5.pointTo) {
                _this5.pointTo.receive();

                _this5.pointTo = undefined;
              }

              if (_this5.video) {
                _this5.video.receive();

                _this5.video = undefined;
              }

              _this5.currentTarget = undefined;
              var i = _this5.progress + 1,
                  cfg = _this5.cfg;

              if (!cfg.Type[i] && cfg.OverTime[i] == undefined) {
                _this5.progress++;
                return _this5.next();
              }

              var step = cfg.Steps[i];

              if ((cfg == null || (_cfg$Type = cfg.Type) == null ? void 0 : _cfg$Type[i]) == 3) {
                var _cfg$OverTime;

                if (!cfg.Prefabs[i]) return _this5.next();
                _this5.video = PlayVideo.Create("prefabs/guide/" + cfg.Prefabs[i]);

                _this5.video.on("end", _this5.next, _this5);

                _this5.video.Play((cfg == null || (_cfg$OverTime = cfg.OverTime) == null ? void 0 : _cfg$OverTime[i]) || 0);

                _this5.progress++;
                _this5.currentTarget = _this5.video;
                return;
              }

              _this5.currentTarget = step ? find(step) : undefined;

              if (!_this5.currentTarget || !_this5.currentTarget.activeInHierarchy) {
                _this5.currentTarget = undefined;
                return;
              }

              var modal = false;

              if (((_cfg$Type2 = cfg.Type) == null ? void 0 : _cfg$Type2[i]) == 0) {
                modal = true;
              } else {
                var _cfg$Type3;

                modal = ((_cfg$Type3 = cfg.Type) == null ? void 0 : _cfg$Type3[i]) == 2;
              }

              _this5.pointTo = PointTo.Create();

              _this5.pointTo.on("end", _this5.next, _this5);

              console.log("Step--->", step, _this5.currentTarget);

              _this5.pointTo.Target(_this5.currentTarget, (_cfg$Angle = cfg.Angle) == null ? void 0 : _cfg$Angle[i], (_cfg$Tips = cfg.Tips) == null ? void 0 : _cfg$Tips[i], modal, (_cfg$Offset = cfg.Offset) == null ? void 0 : _cfg$Offset[i], (_cfg$TipsAngle = cfg.TipsAngle) == null ? void 0 : _cfg$TipsAngle[i], (_cfg$TipsOffset = cfg.TipsOffset) == null ? void 0 : _cfg$TipsOffset[i], (_cfg$TipsSize = cfg.TipsSize) == null ? void 0 : _cfg$TipsSize[i], cfg.OverTime[i] ? cfg.OverTime[i] : undefined);

              _this5.pointTo.clickSzie = [(cfg == null || (_cfg$ClickSize = cfg.ClickSize) == null ? void 0 : _cfg$ClickSize[0]) || 100, (cfg == null || (_cfg$ClickSize2 = cfg.ClickSize) == null ? void 0 : _cfg$ClickSize2[1]) || 100];
              _this5.progress++;
            } else {
              _this5.end();
            }
          })();
        }

        checkTarget() {
          var _this$cfg, _this$cfg$Type, _cfg$Angle2, _cfg$Tips2, _cfg$Offset2, _cfg$TipsAngle2, _cfg$TipsOffset2, _cfg$TipsSize2, _cfg$ClickSize3, _cfg$ClickSize4;

          var cfg = this.cfg;
          var step = this.cfg.Steps[this.progress];
          if (((_this$cfg = this.cfg) == null || (_this$cfg = _this$cfg.Type) == null ? void 0 : _this$cfg[this.progress]) == 3) return;
          var target = step ? find(step) : undefined;
          if (!this.currentTarget || this.currentTarget == target) return;
          var modal = false;

          if (((_this$cfg$Type = this.cfg.Type) == null ? void 0 : _this$cfg$Type[this.progress]) == 0) {
            modal = true;
          } else {
            var _this$cfg$Type2;

            modal = ((_this$cfg$Type2 = this.cfg.Type) == null ? void 0 : _this$cfg$Type2[this.progress]) == 2;
          }

          var i = this.progress;
          this.currentTarget = target;
          if (this.pointTo) this.pointTo.receive();
          this.pointTo = PointTo.Create();
          this.pointTo.on("end", this.next, this);
          this.pointTo.Target(this.currentTarget, (_cfg$Angle2 = cfg.Angle) == null ? void 0 : _cfg$Angle2[i], (_cfg$Tips2 = cfg.Tips) == null ? void 0 : _cfg$Tips2[i], modal, (_cfg$Offset2 = cfg.Offset) == null ? void 0 : _cfg$Offset2[i], (_cfg$TipsAngle2 = cfg.TipsAngle) == null ? void 0 : _cfg$TipsAngle2[i], (_cfg$TipsOffset2 = cfg.TipsOffset) == null ? void 0 : _cfg$TipsOffset2[i], (_cfg$TipsSize2 = cfg.TipsSize) == null ? void 0 : _cfg$TipsSize2[i], cfg.OverTime[i] ? cfg.OverTime[i] : undefined);
          this.pointTo.clickSzie = [(cfg == null || (_cfg$ClickSize3 = cfg.ClickSize) == null ? void 0 : _cfg$ClickSize3[0]) || 100, (cfg == null || (_cfg$ClickSize4 = cfg.ClickSize) == null ? void 0 : _cfg$ClickSize4[1]) || 100];
        }

        end() {
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetNumber("guide" + this.cfg.ID, 1);

          if (this.cfg.Childs) {
            for (var id of this.cfg.Childs) {
              (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).SetNumber("guide" + id, 1);
            }
          }

          this.state = 2;
          this.currentTarget = undefined;

          if (this.pointTo) {
            this.pointTo.receive();
            this.pointTo = undefined;
          }

          if (this.video) {
            this.video.receive();
            this.video = undefined;
          }

          if (this.cfg.OpenUI[this.cfg.OpenUI.length - 1]) {
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)(this.cfg.OpenUI[this.cfg.OpenUI.length - 1]);
          }
        }

        destory() {
          this.currentTarget = undefined;

          if (this.pointTo) {
            this.pointTo.receive();
            this.pointTo = undefined;
          }

          if (this.video) {
            this.video.receive();
            this.video = undefined;
          }
        }

      });
      /**
       * 指引
       */


      _export("PointTo", PointTo = class PointTo extends (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
        error: Error()
      }), GameObj) : GameObj) {
        constructor() {
          super(...arguments);
          this.$prefab = "prefabs/guide/PointTo";
          this.cfg = void 0;
          this.modalMask = void 0;
          this.finger = void 0;
          this.pointer = void 0;
          this.tips = void 0;
          this.label = void 0;
          this.target = void 0;
          this.overTime = void 0;
          this.img = void 0;
          this.imgSp = void 0;
          this.sub = 50;
          this.duration = 0.4;
          this.modal = false;
          this.tipsSize = void 0;
          this.pointerAngle = void 0;
          this.offset = void 0;
          this.msgAngle = void 0;
          this.msgOffset = void 0;
          this.clickSzie = [];
          this.secondTick = 0;
        }

        onLoad() {
          var widget = this.addComponent(Widget);
          widget.isAlignLeft = widget.isAlignRight = widget.isAlignBottom = widget.isAlignTop = true;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
          var size = view.getVisibleSize();
          var ut = this.getComponent(UITransform);
          ut.setContentSize(size);
          this.modalMask = this.find("mask");
          this.pointer = this.find("pointer");
          this.finger = this.pointer.getChildByName("finger");
          this.tips = this.find("tips");
          this.label = this.find("tips/label").getComponent(Label);
          this.tipsSize = this.tips.getComponent(UITransform).contentSize.clone();
        }

        Stop() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            if (!_this6.$hasLoad) yield _this6.loadSub;
            _this6.active = false;
          })();
        }

        Target(node, angle, msg, modal, offset, msgAngle, msgOffset, msgSize, duration) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (msg === void 0) {
              msg = "";
            }

            if (modal === void 0) {
              modal = false;
            }

            GuideLay.Add(_this7);
            _this7.clickSzie = [];
            _this7.overTime = duration;
            _this7.pointerAngle = angle;
            _this7.modal = modal;
            if (!_this7.$hasLoad) yield _this7.loadSub; // this.modalMask.active = modal;

            if (!msgSize) msgSize = [_this7.tipsSize.x, _this7.tipsSize.y];
            _this7.offset = offset || [0, 0];
            _this7.msgAngle = msgAngle;
            _this7.msgOffset = msgOffset || [0, 0];

            _this7.tips.getComponent(UITransform).setContentSize(msgSize[0], msgSize[1]);

            _this7.label.string = msg;
            _this7.tips.active = msg != "";
            _this7.target = node;

            if (_this7.modal) {
              _this7.img = (_crd && Snapshot === void 0 ? (_reportPossibleCrUseOfSnapshot({
                error: Error()
              }), Snapshot) : Snapshot).Add(_this7.target);

              _this7.prefabNode.addChild(_this7.img);

              _this7.img.setSiblingIndex(1);

              _this7.img.name = msg;

              _this7.img.on(Input.EventType.TOUCH_START, _this7.onModalTouch, _this7);
            } else {
              if (_this7.target.layer & Layers.Enum['SCENE']) {
                find("Canvas").on(Input.EventType.TOUCH_START, _this7.onTouchCanvas, _this7);
              } else {
                _this7.target.once(Input.EventType.TOUCH_START, _this7.onTouch, _this7);
              }
            }

            _this7.pointSub();

            _this7.update(1);
          })();
        }

        pointSub() {
          if (this.finger.position.x < this.sub) {
            this.finger.setPosition(0, 0, 0);
            tween(this.finger).to(this.duration, {
              position: v3(this.sub, 0, 0)
            }, {
              easing: easing.quadOut
            }).call(this.pointSub.bind(this)).start();
          } else {
            this.finger.setPosition(this.sub, 0, 0);
            tween(this.finger).to(this.duration, {
              position: v3(0, 0, 0)
            }, {
              easing: easing.quadIn
            }).call(this.pointSub.bind(this)).start();
          }
        }

        onTouchCanvas(e) {
          var out = v3();
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.worldToScreen(this.target.worldPosition, out);
          var p = e.getLocation();
          var w = this.clickSzie[0] || 100,
              h = this.clickSzie[1] || 100;

          if (Math.abs(p.x - out.x) <= w && Math.abs(p.y - out.y) <= h) {
            if (this.target) {
              e.type = Input.EventType.TOUCH_END;
              this.target.dispatchEvent(e);
              this.end();
            } else {}
          }
        }

        onModalTouch(e) {
          if (this.target && this.target.isValid) {
            var out = v3();

            if (this.target.layer & Layers.Enum['SCENE']) {
              (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).mainCamera.worldToScreen(this.target.worldPosition, out);
              var p = e.getLocation();
              var w = this.clickSzie[0] || 100,
                  h = this.clickSzie[1] || 100;

              if (Math.abs(p.x - out.x) <= w && Math.abs(p.y - out.y) <= h) {} else return;
            } else {
              (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).UICamera.worldToScreen(this.target.worldPosition, out);

              var _p = e.getLocation();

              var _w = 100,
                  _h = 100;

              if (this.clickSzie[0] != undefined && this.clickSzie[1] != undefined) {
                _w = this.clickSzie[0], _h = this.clickSzie[1];
              }

              if (Math.abs(_p.x - out.x) <= _w && Math.abs(_p.y - out.y) <= _h) {} else return;
            }

            e.type = Input.EventType.TOUCH_END;
            this.target.dispatchEvent(e);
            this.target.emit(Button.EventType.CLICK, this.target.getComponent(Button));
          }

          this.end();
        }

        onTouch(e) {
          if (this.target && this.target.isValid) {
            this.target.off(Input.EventType.TOUCH_START, this.onTouch, this);
          }

          this.end();
        }

        update(dt) {
          if (this.overTime != undefined) {
            this.overTime -= dt;

            if (this.overTime <= 0) {
              // if (this.target && this.target.isValid) {
              //     this.target.dispatchEvent(new EventTouch([], true, Input.EventType.TOUCH_END));
              //     this.target.emit(Button.EventType.CLICK, this.target.getComponent(Button));
              // }
              this.overTime = undefined;
              this.end();
              return;
            }
          }

          this.secondTick += dt;
          if (!this.target || this.secondTick < 0.25) return;
          this.secondTick = 0;

          if (!this.modal && !this.target.activeInHierarchy) {
            this.active = false;
            return;
          }

          this.active = true;
          var offset = this.offset;

          if (this.target.layer & Layers.Enum['SCENE']) {
            var out = v3();
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera.convertToUINode(this.target.worldPosition, find("Canvas"), out);
            this.pointer.setPosition(out.x + (Number(offset[0]) || 0), out.y + Number(offset[1] || 0));
          } else {
            var [x, y] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).Convert(0, 0, this.target, this.prefabNode);
            var box = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).GetBoundingBoxTo(this.target, this.pointer.parent);
            var w = Math.max(Math.abs(box.xMin - x), Math.abs(box.xMax - x));
            var h = Math.max(Math.abs(box.yMin - y), Math.abs(box.yMax - y));
            w = Math.max(w, h) * Math.cos(math.toRadian(this.pointerAngle));
            h = Math.min(w, h) * Math.sin(math.toRadian(this.pointerAngle));
            this.pointer.setPosition(x + w + (Number(offset[0]) || 0), y + h + Number(offset[1] || 0));
          }

          this.pointer.setRotationFromEuler(0, 0, this.pointerAngle);
          var rad = math.toRadian(this.pointerAngle);
          if (this.msgAngle) rad = this.msgAngle;
          var fingerSize = this.finger.getComponent(UITransform).contentSize;
          var fingerWide = Math.max(fingerSize.width, fingerSize.height);
          var size = this.tips.getComponent(UITransform).contentSize;
          var a = Math.max(size.width, size.height) / 2 + this.sub + fingerWide;
          var b = Math.min(size.width, size.height) / 2 + this.sub + fingerWide;
          this.tips.setPosition(this.pointer.position.x + a * Math.cos(rad) + this.msgOffset[0], this.pointer.position.y + b * Math.sin(rad) + this.msgOffset[1]);
        }

        end() {
          if (this.target) {
            this.target.off(Input.EventType.TOUCH_START, this.onTouch, this);
            (_crd && Snapshot === void 0 ? (_reportPossibleCrUseOfSnapshot({
              error: Error()
            }), Snapshot) : Snapshot).Remove(this.target);
          }

          if (this.img) {
            this.img.off(Input.EventType.TOUCH_START, this.onModalTouch, this);
            this.img.parent && this.img.parent.removeChild(this.img);
          }

          find("Canvas").off(Input.EventType.TOUCH_START, this.onTouchCanvas, this);
          this.emit('end', this);
        }

        receive() {
          var _superprop_getReceive = () => super.receive,
              _this8 = this;

          return _asyncToGenerator(function* () {
            if (!_this8.$hasLoad) yield _this8.loadSub;

            if (_this8.target) {
              _this8.target.off(Input.EventType.TOUCH_START, _this8.onTouch, _this8);

              (_crd && Snapshot === void 0 ? (_reportPossibleCrUseOfSnapshot({
                error: Error()
              }), Snapshot) : Snapshot).Remove(_this8.target);
            }

            _this8.off("end");

            _this8.Stop();

            if (_this8.img) {
              _this8.img.off(Input.EventType.TOUCH_START, _this8.onModalTouch, _this8);

              _this8.img.parent && _this8.img.parent.removeChild(_this8.img);

              _this8.img.off(Input.EventType.TOUCH_END);
            }

            _this8.img = undefined;

            if (_this8.target) {
              if (_this8.target.isValid) _this8.target.off(Input.EventType.TOUCH_END, _this8.onTouch, _this8);
              _this8.target = undefined;
            }

            find("Canvas").off(Input.EventType.TOUCH_START, _this8.onTouchCanvas, _this8);
            Tween.stopAllByTarget(_this8.pointer);

            _superprop_getReceive().call(_this8);
          })();
        }

      });

      PlayVideo = class PlayVideo extends (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
        error: Error()
      }), GameObj) : GameObj) {
        constructor() {
          super(...arguments);
          this.$prefab = void 0;
          this.targetUrl = void 0;
          this.duration = void 0;
          this.startTick = void 0;
        }

        Play(duration) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            GuideLay.Add(_this9);
            if (!_this9.$hasLoad) yield _this9.loadSub;
            var ls = _this9.prefabNode.children;

            for (var child of ls) {
              child.active = false;
            }

            _this9.duration = duration || 0.1;
            _this9.startTick = game.totalTime / 1000;
          })();
        }

        update(dt) {
          var t = game.totalTime / 1000 - this.startTick;

          if (t >= this.duration) {
            this.end();
            if (this.parent) this.parent.removeChild(this);
            return;
          }

          var list = this.prefabNode.children;
          var index = Math.floor(t / this.duration * list.length);

          for (var i = 0; i < list.length; i++) {
            var child = list[i];

            if (i == index) {
              if (!child.active) {
                child.active = true;
                var sk = child.getComponent(sp.Skeleton);

                if (sk) {
                  var _sk$getCurrent;

                  var action = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).GetSkeAciton(sk);
                  sk.setAnimation(0, action, false);
                  var duration = ((_sk$getCurrent = sk.getCurrent(0)) == null || (_sk$getCurrent = _sk$getCurrent.animation) == null ? void 0 : _sk$getCurrent.duration) || 0;
                  var scale = Math.min(1, this.duration / duration);
                  sk.timeScale = scale;
                }
              }
            } else {
              child.active = false;
            }
          }
        }

        end() {
          this.emit('end', this);
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8298d5a913731456f285fa8c305c0f9537b24a5.js.map