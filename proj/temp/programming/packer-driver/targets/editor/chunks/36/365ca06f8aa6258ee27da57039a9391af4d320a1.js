System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, Component, Label, Sprite, SpriteFrame, UIOpacity, Vec3, CfgMgr, Session, EventMgr, Evt_TaskShowBoxTips, Req, Route, ResMgr, PlayerData, TaskActiveBoxItem, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdTask(extras) {
    _reporterNs.report("StdTask", "../../manager/CfgMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfSPlayerDataTask(extras) {
    _reporterNs.report("SPlayerDataTask", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  _export("TaskActiveBoxItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_TaskShowBoxTips = _unresolved_4.Evt_TaskShowBoxTips;
    }, function (_unresolved_5) {
      Req = _unresolved_5.Req;
      Route = _unresolved_5.Route;
    }, function (_unresolved_6) {
      ResMgr = _unresolved_6.ResMgr;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "777f2R9L8BCYomDbAS5bSkV", "TaskActiveBoxItem", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'ProgressBar', 'sp', 'Sprite', 'SpriteFrame', 'UIOpacity', 'Vec3']);

      _export("TaskActiveBoxItem", TaskActiveBoxItem = class TaskActiveBoxItem extends Component {
        constructor(...args) {
          super(...args);
          this.activeNumLab = void 0;
          this.btn = void 0;
          this.geted = void 0;
          this.box = void 0;
          this.isInit = void 0;
          this.data = void 0;
          this.std = void 0;
          this.index = void 0;
        }

        onLoad() {
          this.btn = this.node.getComponent(Button);
          this.geted = this.node.getChildByName("geted");
          this.box = this.node.getChildByName("box").getComponent(Sprite);
          this.activeNumLab = this.node.getChildByName("activeNumLab").getComponent(Label);
          this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.isInit = true;
          this.updateShow();
        }

        SetData(data, index) {
          this.data = data;
          this.index = index;
          this.updateShow();
        }

        onBtnClick() {
          if (!this.data || !this.std) return;

          if (this.data.value >= this.std.CompletionNum && (!this.data.end || this.data.start != this.data.end)) {
            let send_task = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
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
          } else {
            let tipsW = 382;
            let itemPos = this.btn.node.worldPosition.clone();
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
            }), Evt_TaskShowBoxTips) : Evt_TaskShowBoxTips, this.std, showPos, this.btn.node);
          }
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetTaskByData(this.data);
          this.activeNumLab.string = this.std.CompletionNum.toString();
          let index = this.index + 1 > 5 ? 5 : this.index + 1;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/task/box_" + index + "/spriteFrame", SpriteFrame, res => {
            this.box.spriteFrame = res;
          });
          this.geted.active = false;

          if (this.data.value >= this.std.CompletionNum) {
            this.box.node.getComponent(UIOpacity).opacity = 255;
            this.activeNumLab.enableOutline = true;
            this.activeNumLab.color = new Color().fromHEX("#55FFF9");
            this.activeNumLab.outlineColor = new Color().fromHEX("#007A8C");

            if (this.data.start == this.data.end) {
              this.geted.active = true;
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub("sheets/task/box_open/spriteFrame", SpriteFrame, res => {
                this.box.spriteFrame = res;
              });
            }
          } else {
            this.box.node.getComponent(UIOpacity).opacity = 180;
            this.activeNumLab.color = new Color().fromHEX("#000000");
            this.activeNumLab.enableOutline = false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=365ca06f8aa6258ee27da57039a9391af4d320a1.js.map