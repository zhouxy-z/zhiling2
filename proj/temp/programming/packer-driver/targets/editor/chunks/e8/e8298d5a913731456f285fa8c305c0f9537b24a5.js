System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Button, Input, Label, Layers, Node, Sprite, SpriteFrame, Tween, UITransform, Widget, easing, find, game, instantiate, js, math, path, sp, tween, v3, view, EventMgr, PanelDefine, GameSet, CfgMgr, Tips, CheckCondition, Goto, ResMgr, folder_common, GameObj, Panel, Utils, Snapshot, LocalStorage, PlayerData, Guide, SystenDoor, GuideLay, GuideSub, PointTo, PlayVideo, _crd;

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


        async Init() {
          var _player;

          await GuideLay.ShowTop();

          while (this.systems.length) {
            let door = this.systems.pop();
            door.destory();
          }

          let stdDoors = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("SystemOpen");

          for (let std of stdDoors) {
            let door = new SystenDoor(std);
            this.systems.push(door);
          }

          while (this.guides.length) {
            let guide = this.guides.pop();
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

          let stdGuids = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("guide");

          for (let stdGuide of stdGuids) {
            if (!(_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).GetNumber("guide" + stdGuide.ID, 0)) {
              this.guides.push(new GuideSub(stdGuide));
            }
          }
        }
        /**
         * 打开界面
         * @param link 
         * @param params 
         * @returns 
         */


        fetch(link, ...params) {
          let route = link.split(".");

          if ((_crd && PanelDefine === void 0 ? (_reportPossibleCrUseOfPanelDefine({
            error: Error()
          }), PanelDefine) : PanelDefine)[route[0]]) {
            let classz = js.getClassByName(route.shift());
            if (!classz) return;

            if (route.length) {
              for (let h of route) {
                classz = classz[h];
              }

              classz(...params);
            } else {
              classz.Show(...params);
            }
          } else {
            let target = find(route[0]);

            if (target && target.activeInHierarchy && params) {
              target.emit(params.shift(), ...params);
            }
          }
        }

        update(dt) {
          this.updateLoop += dt;

          if (this.updateLoop >= 0.25) {
            this.updateLoop = 0;

            for (let door of this.systems) {
              door.update();
            }

            let i = 0;

            while (i < this.guides.length) {
              let guide = this.guides[i];
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
          // 判断触发条件
          let seed = true;

          for (let n = 1;; n++) {
            let types = this.std['ConditionId' + n];
            let values = this.std['ConditionValue' + n];
            if (types == undefined || types.length == 0 || values == undefined) break;

            for (let i = 0; i < types.length; i++) {
              let type = types[i];
              let value = values[i];
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

          let uis = this.std.UI;
          let types = this.std.HideType;

          for (let i = 0; i < uis.length; i++) {
            let url = uis[i];
            let target = find(url);
            if (!target) continue; // 系统入口开启或隐藏样式

            switch (types[i]) {
              case 0:
                target.active = this.open;
                break;

              case 1:
                if (this.open) {
                  this.resetBtn(target);
                } else {
                  if (target.getChildByName(`lock`)) {
                    target.getChildByName(`lock`).active = true;
                  } else {
                    let lock = new Node("lock");
                    let sprite = lock.addComponent(Sprite);
                    target.addChild(lock);
                    (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                      error: Error()
                    }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_common === void 0 ? (_reportPossibleCrUseOffolder_common({
                      error: Error()
                    }), folder_common) : folder_common, "lock/spriteFrame"), SpriteFrame, sf => {
                      sprite.spriteFrame = sf;
                    });
                  }

                  this.maskTouch(target);
                }

                break;

              default:
                target.active = this.open;
            }
          }
        }

        maskTouch(target) {
          if (!target['$$mask']) {
            let size = target.getComponent(UITransform).contentSize;
            let sx = target.getScale().x,
                sy = target.getScale().y;
            let mask = new Node('mask');
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
          let target = e.currentTarget['$$target'];
          let btn = target.getComponent(Button);

          if (btn) {
            if (e.type == Input.EventType.TOUCH_END) {
              btn['_pressed'] = false;
              btn['_updateState']();
            } else {
              let evt = instantiate(e);
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
          if (target.getChildByName(`lock`)) target.getChildByName(`lock`).active = false;

          if (target['$$mask']) {
            let mask = target['$$mask'];
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
          let uis = this.std.UI;
          if (!uis) return;

          for (let i = 0; i < uis.length; i++) {
            let url = uis[i];
            let target = find(url);
            if (!target) continue;
            target.active = true;
            this.resetBtn(target);
          }
        }

      };

      _export("GuideLay", GuideLay = class GuideLay extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/guide/GuideLay";
        }

        onShow() {}

        flush(...args) {}

        onHide(...args) {}

        static async Add(node) {
          if (!this.$instance) await this.ShowTop();
          this.$instance.node.addChild(node);
        }

        static async Del(node) {
          if (!this.$instance) await this.$loading;
          this.$instance.node.removeChild(node);
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
            let result = true;

            for (let n = 1;; n++) {
              let cs = this.cfg["ConditionId" + n];
              if (cs == undefined || !cs.length) break;
              let vs = this.cfg["ConditionValue" + n];

              for (let i = 0; i < cs.length; i++) {
                let values = vs[i];
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
            let result = false;

            for (let n = 1;; n++) {
              let cs = this.cfg["EndConditionId" + n];
              if (cs == undefined || !cs.length) break;
              let vs = this.cfg["EndConditionValue" + n];

              for (let i = 0; i < cs.length; i++) {
                let values = vs[i];
                if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).IsArray(values)) values = [values];

                if ((_crd && CheckCondition === void 0 ? (_reportPossibleCrUseOfCheckCondition({
                  error: Error()
                }), CheckCondition) : CheckCondition)(cs[i], ...values)) {
                  result = true;
                  break;
                }
              }
            }

            if (result) {
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

        async next(e) {
          if (this.progress + 1 <= this.cfg.Steps.length) {
            var _cfg$Type, _cfg$Type2, _cfg$Angle, _cfg$Tips, _cfg$Offset, _cfg$TipsAngle, _cfg$TipsOffset, _cfg$TipsSize, _cfg$ClickSize, _cfg$ClickSize2;

            if (e && this.cfg.OpenUI[this.progress]) {
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)(this.cfg.OpenUI[this.progress]);
            }

            if (this.pointTo) {
              this.pointTo.receive();
              this.pointTo = undefined;
            }

            if (this.video) {
              this.video.receive();
              this.video = undefined;
            }

            this.currentTarget = undefined;
            let i = this.progress + 1,
                cfg = this.cfg;

            if (!cfg.Type[i] && cfg.OverTime[i] == undefined) {
              this.progress++;
              return this.next();
            }

            let step = cfg.Steps[i];

            if ((cfg == null || (_cfg$Type = cfg.Type) == null ? void 0 : _cfg$Type[i]) == 3) {
              var _cfg$OverTime;

              if (!cfg.Prefabs[i]) return this.next();
              this.video = PlayVideo.Create("prefabs/guide/" + cfg.Prefabs[i]);
              this.video.on("end", this.next, this);
              this.video.Play((cfg == null || (_cfg$OverTime = cfg.OverTime) == null ? void 0 : _cfg$OverTime[i]) || 0);
              this.progress++;
              this.currentTarget = this.video;
              return;
            }

            this.currentTarget = step ? find(step) : undefined;

            if (!this.currentTarget || !this.currentTarget.activeInHierarchy) {
              this.currentTarget = undefined;
              return;
            }

            let modal = false;

            if (((_cfg$Type2 = cfg.Type) == null ? void 0 : _cfg$Type2[i]) == 0) {
              modal = true;
            } else {
              var _cfg$Type3;

              modal = ((_cfg$Type3 = cfg.Type) == null ? void 0 : _cfg$Type3[i]) == 2;
            }

            this.pointTo = PointTo.Create();
            this.pointTo.on("end", this.next, this);
            console.log("Step--->", step, this.currentTarget);
            this.pointTo.Target(this.currentTarget, (_cfg$Angle = cfg.Angle) == null ? void 0 : _cfg$Angle[i], (_cfg$Tips = cfg.Tips) == null ? void 0 : _cfg$Tips[i], modal, (_cfg$Offset = cfg.Offset) == null ? void 0 : _cfg$Offset[i], (_cfg$TipsAngle = cfg.TipsAngle) == null ? void 0 : _cfg$TipsAngle[i], (_cfg$TipsOffset = cfg.TipsOffset) == null ? void 0 : _cfg$TipsOffset[i], (_cfg$TipsSize = cfg.TipsSize) == null ? void 0 : _cfg$TipsSize[i], cfg.OverTime[i] ? cfg.OverTime[i] : undefined);
            this.pointTo.clickSzie = [(cfg == null || (_cfg$ClickSize = cfg.ClickSize) == null ? void 0 : _cfg$ClickSize[0]) || 100, (cfg == null || (_cfg$ClickSize2 = cfg.ClickSize) == null ? void 0 : _cfg$ClickSize2[1]) || 100];
            this.progress++;
          } else {
            this.end();
          }
        }

        checkTarget() {
          var _this$cfg, _this$cfg$Type, _cfg$Angle2, _cfg$Tips2, _cfg$Offset2, _cfg$TipsAngle2, _cfg$TipsOffset2, _cfg$TipsSize2, _cfg$ClickSize3, _cfg$ClickSize4;

          let cfg = this.cfg;
          let step = this.cfg.Steps[this.progress];
          if (((_this$cfg = this.cfg) == null || (_this$cfg = _this$cfg.Type) == null ? void 0 : _this$cfg[this.progress]) == 3) return;
          let target = step ? find(step) : undefined;
          if (!this.currentTarget || this.currentTarget == target) return;
          let modal = false;

          if (((_this$cfg$Type = this.cfg.Type) == null ? void 0 : _this$cfg$Type[this.progress]) == 0) {
            modal = true;
          } else {
            var _this$cfg$Type2;

            modal = ((_this$cfg$Type2 = this.cfg.Type) == null ? void 0 : _this$cfg$Type2[this.progress]) == 2;
          }

          let i = this.progress;
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
            for (let id of this.cfg.Childs) {
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
        constructor(...args) {
          super(...args);
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
          let widget = this.addComponent(Widget);
          widget.isAlignLeft = widget.isAlignRight = widget.isAlignBottom = widget.isAlignTop = true;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
          let size = view.getVisibleSize();
          let ut = this.getComponent(UITransform);
          ut.setContentSize(size);
          this.modalMask = this.find("mask");
          this.pointer = this.find("pointer");
          this.finger = this.pointer.getChildByName("finger");
          this.tips = this.find("tips");
          this.label = this.find("tips/label").getComponent(Label);
          this.tipsSize = this.tips.getComponent(UITransform).contentSize.clone();
        }

        async Stop() {
          if (!this.$hasLoad) await this.loadSub;
          this.active = false;
        }

        async Target(node, angle, msg = "", modal = false, offset, msgAngle, msgOffset, msgSize, duration) {
          GuideLay.Add(this);
          this.clickSzie = [];
          this.overTime = duration;
          this.pointerAngle = angle;
          this.modal = modal;
          if (!this.$hasLoad) await this.loadSub; // this.modalMask.active = modal;

          if (!msgSize) msgSize = [this.tipsSize.x, this.tipsSize.y];
          this.offset = offset || [0, 0];
          this.msgAngle = msgAngle;
          this.msgOffset = msgOffset || [0, 0];
          this.tips.getComponent(UITransform).setContentSize(msgSize[0], msgSize[1]);
          this.label.string = msg;
          this.tips.active = msg != "";
          this.target = node;

          if (this.modal) {
            this.img = (_crd && Snapshot === void 0 ? (_reportPossibleCrUseOfSnapshot({
              error: Error()
            }), Snapshot) : Snapshot).Add(this.target);
            this.prefabNode.addChild(this.img);
            this.img.setSiblingIndex(1);
            this.img.name = msg;
            this.img.on(Input.EventType.TOUCH_START, this.onModalTouch, this);
          } else {
            if (this.target.layer & Layers.Enum['SCENE']) {
              find("Canvas").on(Input.EventType.TOUCH_START, this.onTouchCanvas, this);
            } else {
              this.target.once(Input.EventType.TOUCH_START, this.onTouch, this);
            }
          }

          this.pointSub();
          this.update(1);
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
          let out = v3();
          (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
            error: Error()
          }), GameSet) : GameSet).mainCamera.worldToScreen(this.target.worldPosition, out);
          let p = e.getLocation();
          let w = this.clickSzie[0] || 100,
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
            let out = v3();

            if (this.target.layer & Layers.Enum['SCENE']) {
              (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).mainCamera.worldToScreen(this.target.worldPosition, out);
              let p = e.getLocation();
              let w = this.clickSzie[0] || 100,
                  h = this.clickSzie[1] || 100;

              if (Math.abs(p.x - out.x) <= w && Math.abs(p.y - out.y) <= h) {} else return;
            } else {
              (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).UICamera.worldToScreen(this.target.worldPosition, out);
              let p = e.getLocation();
              let w = 100,
                  h = 100;

              if (this.clickSzie[0] != undefined && this.clickSzie[1] != undefined) {
                w = this.clickSzie[0], h = this.clickSzie[1];
              }

              if (Math.abs(p.x - out.x) <= w && Math.abs(p.y - out.y) <= h) {} else return;
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
          let offset = this.offset;

          if (this.target.layer & Layers.Enum['SCENE']) {
            let out = v3();
            (_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
              error: Error()
            }), GameSet) : GameSet).mainCamera.convertToUINode(this.target.worldPosition, find("Canvas"), out);
            this.pointer.setPosition(out.x + (Number(offset[0]) || 0), out.y + Number(offset[1] || 0));
          } else {
            let [x, y] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).Convert(0, 0, this.target, this.prefabNode);
            let box = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).GetBoundingBoxTo(this.target, this.pointer.parent);
            let w = Math.max(Math.abs(box.xMin - x), Math.abs(box.xMax - x));
            let h = Math.max(Math.abs(box.yMin - y), Math.abs(box.yMax - y));
            w = Math.max(w, h) * Math.cos(math.toRadian(this.pointerAngle));
            h = Math.min(w, h) * Math.sin(math.toRadian(this.pointerAngle));
            this.pointer.setPosition(x + w + (Number(offset[0]) || 0), y + h + Number(offset[1] || 0));
          }

          this.pointer.setRotationFromEuler(0, 0, this.pointerAngle);
          let rad = math.toRadian(this.pointerAngle);
          if (this.msgAngle) rad = this.msgAngle;
          let fingerSize = this.finger.getComponent(UITransform).contentSize;
          let fingerWide = Math.max(fingerSize.width, fingerSize.height);
          let size = this.tips.getComponent(UITransform).contentSize;
          let a = Math.max(size.width, size.height) / 2 + this.sub + fingerWide;
          let b = Math.min(size.width, size.height) / 2 + this.sub + fingerWide;
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

        async receive() {
          if (!this.$hasLoad) await this.loadSub;

          if (this.target) {
            this.target.off(Input.EventType.TOUCH_START, this.onTouch, this);
            (_crd && Snapshot === void 0 ? (_reportPossibleCrUseOfSnapshot({
              error: Error()
            }), Snapshot) : Snapshot).Remove(this.target);
          }

          this.off("end");
          this.Stop();

          if (this.img) {
            this.img.off(Input.EventType.TOUCH_START, this.onModalTouch, this);
            this.img.parent && this.img.parent.removeChild(this.img);
            this.img.off(Input.EventType.TOUCH_END);
          }

          this.img = undefined;

          if (this.target) {
            if (this.target.isValid) this.target.off(Input.EventType.TOUCH_END, this.onTouch, this);
            this.target = undefined;
          }

          find("Canvas").off(Input.EventType.TOUCH_START, this.onTouchCanvas, this);
          Tween.stopAllByTarget(this.pointer);
          super.receive();
        }

      });

      PlayVideo = class PlayVideo extends (_crd && GameObj === void 0 ? (_reportPossibleCrUseOfGameObj({
        error: Error()
      }), GameObj) : GameObj) {
        constructor(...args) {
          super(...args);
          this.$prefab = void 0;
          this.targetUrl = void 0;
          this.duration = void 0;
          this.startTick = void 0;
        }

        async Play(duration) {
          GuideLay.Add(this);
          if (!this.$hasLoad) await this.loadSub;
          let ls = this.prefabNode.children;

          for (let child of ls) {
            child.active = false;
          }

          this.duration = duration || 0.1;
          this.startTick = game.totalTime / 1000;
        }

        update(dt) {
          let t = game.totalTime / 1000 - this.startTick;

          if (t >= this.duration) {
            this.end();
            if (this.parent) this.parent.removeChild(this);
            return;
          }

          let list = this.prefabNode.children;
          let index = Math.floor(t / this.duration * list.length);

          for (let i = 0; i < list.length; i++) {
            let child = list[i];

            if (i == index) {
              if (!child.active) {
                child.active = true;
                let sk = child.getComponent(sp.Skeleton);

                if (sk) {
                  var _sk$getCurrent;

                  let action = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).GetSkeAciton(sk);
                  sk.setAnimation(0, action, false);
                  let duration = ((_sk$getCurrent = sk.getCurrent(0)) == null || (_sk$getCurrent = _sk$getCurrent.animation) == null ? void 0 : _sk$getCurrent.duration) || 0;
                  let scale = Math.min(1, this.duration / duration);
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