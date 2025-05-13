System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, ScrollView, Sprite, SpriteFrame, _decorator, instantiate, CfgMgr, ResMgr, folder_item, AsyncComponent, AutoScroller, BagItem, ItemUtil, MsgPanel, PlayerData, _dec, _dec2, _class, _crd, ccclass, property, disallowMultiple, requireComponent, RightsConvert;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityCard(extras) {
    _reporterNs.report("StdEquityCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      folder_item = _unresolved_3.folder_item;
    }, function (_unresolved_4) {
      AsyncComponent = _unresolved_4.AsyncComponent;
    }, function (_unresolved_5) {
      AutoScroller = _unresolved_5.AutoScroller;
    }, function (_unresolved_6) {
      BagItem = _unresolved_6.BagItem;
    }, function (_unresolved_7) {
      ItemUtil = _unresolved_7.ItemUtil;
    }, function (_unresolved_8) {
      MsgPanel = _unresolved_8.MsgPanel;
    }, function (_unresolved_9) {
      PlayerData = _unresolved_9.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac715I10dtNHKxvwioIHmhw", "RightsConvert", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Widget', '_decorator', 'instantiate', 'path']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);

      _export("RightsConvert", RightsConvert = (_dec = ccclass('RightsConvert'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class RightsConvert extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor(...args) {
          super(...args);
          this.bg = void 0;
          this.ScrollView = void 0;
          this.rewardScrollView = void 0;
          this.getBtn = void 0;
          this.Limit = void 0;
          this.icon = void 0;
          this.name_icon = void 0;
          this.buyBtn = void 0;
          this.unLock = void 0;
          this.time = void 0;
          this.item_icon = void 0;
          this.buyNum = void 0;
          this.clone_item = void 0;
          this.data = void 0;
        }

        onLoad() {
          this.bg = this.node.getChildByName("bg").getComponent(Sprite);
          this.ScrollView = this.node.getChildByPath("general/ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.ScrollView.SetHandle(this.updateDesItem.bind(this));
          this.rewardScrollView = this.node.getChildByPath("general/rewardScrollView").getComponent(ScrollView);
          this.clone_item = this.node.getChildByPath("general/rewardScrollView/view/content/Node");
          this.getBtn = this.node.getChildByPath("general/getBtn").getComponent(Button);
          this.Limit = this.node.getChildByPath("general/limit_time").getComponent(Label);
          this.icon = this.node.getChildByName("icon").getComponent(Sprite);
          this.name_icon = this.node.getChildByName("name_icon").getComponent(Sprite);
          this.buyBtn = this.node.getChildByName("buyBtn").getComponent(Button);
          this.unLock = this.node.getChildByName("unLock");
          this.time = this.node.getChildByName("time").getComponent(Label);
          this.item_icon = this.node.getChildByPath("buyBtn/icon").getComponent(Sprite);
          this.buyNum = this.node.getChildByPath("buyBtn/buyNum").getComponent(Label);
          this.getBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.buyBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.hasLoad = true;
          super.onLoad();
        }

        async Show(data) {
          if (!this.hasLoad) await this.loadSub;
          this.data = data;
          this.unLock.active = false;
          let show_list = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getEquityShowList(data.EquityList);
          let des_list = show_list[0];
          this.ScrollView.UpdateDatas(des_list);
          let reward_list = [];

          if (show_list[1].length > 0 && show_list[1][0].length > 0) {
            reward_list = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).GetSThingList(show_list[1][0], show_list[1][1], show_list[1][2]);
          }

          this.rewardScrollView.content.removeAllChildren();

          for (let index = 0; index < reward_list.length; index++) {
            const element = reward_list[index];
            let item = instantiate(this.clone_item);
            this.updateItem(item, element, index);
            this.rewardScrollView.content.addChild(item);
          }

          let bg_url = data.BgTxture ? data.BgTxture : "rightsBg2";
          this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/bg/" + bg_url + "/spriteFrame", SpriteFrame);
          let icon_url = data.GetEquityIcon ? data.GetEquityIcon : "icon201";
          this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/rights/icon/" + icon_url + "/spriteFrame", SpriteFrame);
          let name_icon_url = data.NameIcon ? data.NameIcon : "nameIcon201";
          this.name_icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/rights/icon/" + name_icon_url + "/spriteFrame", SpriteFrame);
          let item_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.ItemId);

          if (item_data && item_data.Icon) {
            this.item_icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub((_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item) + item_data.Icon + "/spriteFrame", SpriteFrame);
          }

          this.rewardScrollView.content.setPosition(0, 0, 0);
          this.updatePanel();
        }

        updatePanel() {
          let num = 0;
          this.buyNum.string = num + "/" + this.data.LimitNum;
        }

        updateItem(item, data, index) {
          let reward = item.getChildByName("item");
          let reward_item = reward.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem) || reward.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          reward_item.setThing(data);
        }

        updateDesItem(item, data, index) {
          let des = item.getChildByName("TipsLabel").getComponent(Label);
          des.string = data;
        }

        onClick(e) {
          let name = e.name;

          switch (name) {
            case "getBtn":
              let is_can_get = false;

              if (is_can_get) {} else {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("不可领取");
              }

              break;

            case "buyBtn":
              let item_num = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetItemCount(this.data.ItemId);
              let buyNum = 0;
              let is_can_buy = item_num > 1 && buyNum > 0 && buyNum <= this.data.LimitNum;

              if (is_can_buy) {} else {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("无法兑换");
              }

              break;

            default:
              break;
          }
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=38f218865e350e65f24629d290d7cd7722fa3bbf.js.map