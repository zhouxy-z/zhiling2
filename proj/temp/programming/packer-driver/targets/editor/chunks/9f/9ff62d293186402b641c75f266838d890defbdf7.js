System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, path, sp, Panel, PlayerData, RoleCardPower, Attr, CardQuality, CfgMgr, ItemSubType, JobName, FormatCardRoleAttr, ResMgr, folder_icon, folder_item, Tips, Logger, MsgTypeRet, MsgTypeSend, Session, EventMgr, Evt_Compose, formatNumber, SetLabelColor, CLICKLOCK, BeforeGameUtils, AudioMgr, Audio_GetReward, _dec, _class, _crd, ComposePanel;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleCardPower(extras) {
    _reporterNs.report("RoleCardPower", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttr(extras) {
    _reporterNs.report("Attr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardQuality(extras) {
    _reporterNs.report("CardQuality", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemSubType(extras) {
    _reporterNs.report("ItemSubType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJobName(extras) {
    _reporterNs.report("JobName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormatCardRoleAttr(extras) {
    _reporterNs.report("FormatCardRoleAttr", "../common/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttrSub(extras) {
    _reporterNs.report("AttrSub", "../common/AttrSub", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../utils/Logger", _context.meta, extras);
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

  function _reportPossibleCrUseOfEvt_Compose(extras) {
    _reporterNs.report("Evt_Compose", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSetLabelColor(extras) {
    _reporterNs.report("SetLabelColor", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCLICKLOCK(extras) {
    _reporterNs.report("CLICKLOCK", "../common/Drcorator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "../../utils/BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../manager/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudio_GetReward(extras) {
    _reporterNs.report("Audio_GetReward", "../../manager/AudioMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      path = _cc.path;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.default;
      RoleCardPower = _unresolved_3.RoleCardPower;
    }, function (_unresolved_4) {
      Attr = _unresolved_4.Attr;
      CardQuality = _unresolved_4.CardQuality;
      CfgMgr = _unresolved_4.CfgMgr;
      ItemSubType = _unresolved_4.ItemSubType;
      JobName = _unresolved_4.JobName;
    }, function (_unresolved_5) {
      FormatCardRoleAttr = _unresolved_5.FormatCardRoleAttr;
    }, function (_unresolved_6) {
      ResMgr = _unresolved_6.ResMgr;
      folder_icon = _unresolved_6.folder_icon;
      folder_item = _unresolved_6.folder_item;
    }, function (_unresolved_7) {
      Tips = _unresolved_7.Tips;
    }, function (_unresolved_8) {
      Logger = _unresolved_8.default;
    }, function (_unresolved_9) {
      MsgTypeRet = _unresolved_9.MsgTypeRet;
      MsgTypeSend = _unresolved_9.MsgTypeSend;
    }, function (_unresolved_10) {
      Session = _unresolved_10.Session;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
      Evt_Compose = _unresolved_11.Evt_Compose;
    }, function (_unresolved_12) {
      formatNumber = _unresolved_12.formatNumber;
      SetLabelColor = _unresolved_12.SetLabelColor;
    }, function (_unresolved_13) {
      CLICKLOCK = _unresolved_13.CLICKLOCK;
    }, function (_unresolved_14) {
      BeforeGameUtils = _unresolved_14.BeforeGameUtils;
    }, function (_unresolved_15) {
      AudioMgr = _unresolved_15.AudioMgr;
      Audio_GetReward = _unresolved_15.Audio_GetReward;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2400iAWXpAoZhibkKVd8do", "ComposePanel", undefined);

      __checkObsolete__(['Button', 'Component', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'path', 'sp', 'tween']);

      _export("ComposePanel", ComposePanel = (_dec = (_crd && CLICKLOCK === void 0 ? (_reportPossibleCrUseOfCLICKLOCK({
        error: Error()
      }), CLICKLOCK) : CLICKLOCK)(1), (_class = class ComposePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/panel/bag/ComposePanel";
          this.level = void 0;
          this.body = void 0;
          this.targetName = void 0;
          this.quality = void 0;
          this.jobIcon = void 0;
          this.jobName = void 0;
          this.count = void 0;
          this.power = void 0;
          this.composeBtn = void 0;
          this.icon = void 0;
          this.collectAttrCont = void 0;
          this.collectAttrIcon = void 0;
          this.collectAttrValLab = void 0;
          this.Item = void 0;
          this.attrIconInfo = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
            error: Error()
          }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj((_crd && Attr === void 0 ? (_reportPossibleCrUseOfAttr({
            error: Error()
          }), Attr) : Attr).CollectEfficiency, "quanneng", (_crd && Attr === void 0 ? (_reportPossibleCrUseOfAttr({
            error: Error()
          }), Attr) : Attr).WoodCollectEfficiency, "mucai", (_crd && Attr === void 0 ? (_reportPossibleCrUseOfAttr({
            error: Error()
          }), Attr) : Attr).WaterCollectEfficiency, "shui", (_crd && Attr === void 0 ? (_reportPossibleCrUseOfAttr({
            error: Error()
          }), Attr) : Attr).RockCollectEfficiency, "shitou", (_crd && Attr === void 0 ? (_reportPossibleCrUseOfAttr({
            error: Error()
          }), Attr) : Attr).SeedCollectEfficiency, "zhongzi");
          this.isClick = false;
        }

        // private it
        onLoad() {
          this.CloseBy("Main/closeBtn");
          this.CloseBy("mask");
          this.level = this.find(`Main/level`, Label);
          this.count = this.find(`Main/composeBtn/layout/value`, Label);
          this.targetName = this.find(`Main/name`, Label);
          this.body = this.find(`Main/body`, sp.Skeleton);
          this.quality = this.find(`Main/quality`, Sprite);
          this.jobIcon = this.find(`Main/jobLayout/jobIcon`, Sprite);
          this.jobName = this.find(`Main/jobLayout/jobName`, Label);
          this.power = this.find(`Main/power`, Label);
          this.icon = this.find(`Main/composeBtn/layout/icon`, Sprite);
          this.collectAttrCont = this.find("Main/collectAttrCont");
          this.collectAttrIcon = this.find("Main/collectAttrCont/icon", Sprite);
          this.collectAttrValLab = this.find("Main/collectAttrCont/attrLab", Label);
          this.composeBtn = this.find(`Main/composeBtn`);
          this.composeBtn.on(Input.EventType.TOUCH_END, this.onClickCompose, this);
        }

        static showByItemId(ItemID) {
          this.Show(ItemID);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Compose === void 0 ? (_reportPossibleCrUseOfEvt_Compose({
            error: Error()
          }), Evt_Compose) : Evt_Compose, this.onCompose, this);
        }

        onHide(...args) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Compose === void 0 ? (_reportPossibleCrUseOfEvt_Compose({
            error: Error()
          }), Evt_Compose) : Evt_Compose);
        }

        async flush(ItemID) {
          this.Item = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(ItemID);

          if (!this.Item || this.Item.SubType != (_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
            error: Error()
          }), ItemSubType) : ItemSubType).shard) {
            this.Hide();
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("物品类型错误，没有该物品或者该物品不能合成！");
          }

          this.level.string = `Lv.1`;
          let role = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetRole()[this.Item.ItemEffect1];
          let prefab = role.Prefab;
          let scale = role.Scale || 1;
          this.body.node.setScale(0.3 * scale, 0.3 * scale);
          this.body.skeletonData = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("spine/role", prefab, prefab), sp.SkeletonData);
          this.body.setAnimation(0, `Idle`, true);
          this.targetName.string = `${role.Name}`;
          let url = path.join((_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
            error: Error()
          }), folder_icon) : folder_icon) + "quality", (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
            error: Error()
          }), CardQuality) : CardQuality)[this.Item.ItemEffect2], "spriteFrame");
          this.quality.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
          this.jobIcon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
            error: Error()
          }), folder_icon) : folder_icon, "pos" + role.PositionType, "spriteFrame"), SpriteFrame);
          this.jobName.string = `${(_crd && JobName === void 0 ? (_reportPossibleCrUseOfJobName({
            error: Error()
          }), JobName) : JobName)[role.PositionType]}`; //let oldPower:number = CountPower(role.RoleType, 1);

          let newPower = (_crd && RoleCardPower === void 0 ? (_reportPossibleCrUseOfRoleCardPower({
            error: Error()
          }), RoleCardPower) : RoleCardPower)(role.RoleType, this.Item.ItemEffect2);
          this.power.string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
            error: Error()
          }), formatNumber) : formatNumber)(newPower, 2);
          this.count.string = `${(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(ItemID)}/${this.Item.ItemEffect3}`;
          (_crd && SetLabelColor === void 0 ? (_reportPossibleCrUseOfSetLabelColor({
            error: Error()
          }), SetLabelColor) : SetLabelColor)(this.count, (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(ItemID), this.Item.ItemEffect3);
          this.composeBtn.getComponent(Sprite).grayscale = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.Item.Items) < this.Item.ItemEffect3;
          this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, this.Item.Icon, "spriteFrame"), SpriteFrame);
          this.collectAttrCont.active = false;
          let attrList = (_crd && FormatCardRoleAttr === void 0 ? (_reportPossibleCrUseOfFormatCardRoleAttr({
            error: Error()
          }), FormatCardRoleAttr) : FormatCardRoleAttr)(role.RoleType, this.Item.ItemEffect2);

          for (let attr of attrList) {
            if (this.attrIconInfo[attr.id]) {
              this.collectAttrCont.active = true;
              let url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, this.attrIconInfo[attr.id], "spriteFrame");
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
                this.collectAttrIcon.spriteFrame = res;
              });
              this.collectAttrValLab.string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                error: Error()
              }), formatNumber) : formatNumber)(attr.value, 2);
              break;
            }
          }
        }

        onClickCompose() {
          if (!this.checkClick) return;

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.Item.Items) >= this.Item.ItemEffect3) {
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).PlayOnce(_crd && Audio_GetReward === void 0 ? (_reportPossibleCrUseOfAudio_GetReward({
              error: Error()
            }), Audio_GetReward) : Audio_GetReward);
            let data = {
              type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
                error: Error()
              }), MsgTypeSend) : MsgTypeSend).SynthesizeRoleRequest,
              data: {
                item_id: this.Item.Items,
                role_type: this.Item.ItemEffect1
              }
            };
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send(data, (_crd && MsgTypeRet === void 0 ? (_reportPossibleCrUseOfMsgTypeRet({
              error: Error()
            }), MsgTypeRet) : MsgTypeRet).SynthesizeRoleRet);
          } else {
            return (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show(`碎片不足！`);
          }
        }

        onCompose(data) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).log("onCompose>>>", data);
          this.flush(this.Item.Items);
          this.Hide();
        }

        checkClick() {
          if (this.isClick) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).log('Click too fast, please wait.');
            return false;
          }

          this.isClick = true;
          this.scheduleOnce(() => {
            this.isClick = false;
          }, .5);
          return true;
        }

      }, (_applyDecoratedDescriptor(_class.prototype, "onClickCompose", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "onClickCompose"), _class.prototype)), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ff62d293186402b641c75f266838d890defbdf7.js.map