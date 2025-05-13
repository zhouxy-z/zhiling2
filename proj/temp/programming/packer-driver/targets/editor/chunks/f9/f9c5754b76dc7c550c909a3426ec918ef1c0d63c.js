System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, ProgressBar, Sprite, SpriteFrame, UIOpacity, _decorator, AsyncComponent, AutoScroller, CfgMgr, ThingType, ResMgr, BagItem, proto, ItemUtil, GatePassBuyPanel, Card, SpriteLabel, _dec, _dec2, _class, _crd, ccclass, property, disallowMultiple, requireComponent, GatePass;

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityCard(extras) {
    _reporterNs.report("StdEquityCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdSeaGatepass(extras) {
    _reporterNs.report("StdSeaGatepass", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdSeaGatepassLvReward(extras) {
    _reporterNs.report("StdSeaGatepassLvReward", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingType(extras) {
    _reporterNs.report("ThingType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemUtil(extras) {
    _reporterNs.report("ItemUtil", "../../utils/ItemUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGatePassBuyPanel(extras) {
    _reporterNs.report("GatePassBuyPanel", "./GatePassBuyPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteLabel(extras) {
    _reporterNs.report("SpriteLabel", "../../component/SpriteLabel", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AsyncComponent = _unresolved_2.AsyncComponent;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
      ThingType = _unresolved_4.ThingType;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
    }, function (_unresolved_6) {
      BagItem = _unresolved_6.BagItem;
    }, function (_unresolved_7) {
      proto = _unresolved_7.default;
    }, function (_unresolved_8) {
      ItemUtil = _unresolved_8.ItemUtil;
    }, function (_unresolved_9) {
      GatePassBuyPanel = _unresolved_9.GatePassBuyPanel;
    }, function (_unresolved_10) {
      Card = _unresolved_10.Card;
    }, function (_unresolved_11) {
      SpriteLabel = _unresolved_11.SpriteLabel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9e5cNEp6ZCtbYxaGdjcmB5", "GatePass", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'Label', 'Node', 'ProgressBar', 'Sprite', 'SpriteFrame', 'UIOpacity', '_decorator', 'path']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);

      _export("GatePass", GatePass = (_dec = ccclass('GatePass'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class GatePass extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor(...args) {
          super(...args);
          this.bg = void 0;
          this.icon = void 0;
          this.title = void 0;
          this.sesson_time = void 0;
          this.Lv = void 0;
          this.proBar = void 0;
          this.curProgress = void 0;
          this.allProgress = void 0;
          this.oneKeyBtn = void 0;
          this.buyBtn = void 0;
          this.ScrollView = void 0;
          this.item = void 0;
          this.baseRewardList = void 0;
          this.heighRewardList = void 0;
          this.old_index = 0;
          this.cur_show_index = 0;
        }

        onLoad() {
          this.bg = this.node.getChildByName("bg").getComponent(Sprite);
          this.icon = this.node.getChildByName("icon").getComponent(Sprite);
          this.title = this.node.getChildByName("title").getComponent(Sprite);
          this.Lv = this.node.getChildByPath("lvBg/lv").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
            error: Error()
          }), SpriteLabel) : SpriteLabel);
          this.Lv.font = "sheets/numberImg/num2";
          this.Lv.string = "0";
          this.Lv.spacingX = -5;
          this.sesson_time = this.node.getChildByPath("sesson/sesson_time").getComponent(Label);
          this.proBar = this.node.getChildByName("proBar").getComponent(ProgressBar);
          this.curProgress = this.node.getChildByPath("expNode/curProgress").getComponent(Label);
          this.allProgress = this.node.getChildByPath("expNode/allProgress").getComponent(Label);
          this.oneKeyBtn = this.node.getChildByName("oneKeyBtn").getComponent(Button);
          this.buyBtn = this.node.getChildByName("buyBtn").getComponent(Button);
          this.ScrollView = this.node.getChildByName("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.ScrollView.SetHandle(this.updateItem.bind(this));
          this.ScrollView.node.on('select', this.onSelect, this);
          this.item = this.node.getChildByName("item");
          this.oneKeyBtn.node.on(Button.EventType.CLICK, this.onOneKey, this);
          this.buyBtn.node.on(Button.EventType.CLICK, this.onBuy, this);
          this.hasLoad = true;
          super.onLoad();
        }

        async Show(data) {
          if (!this.hasLoad) await this.loadSub;
          let cur_lv = 21;
          this.Lv.string = cur_lv + "";
          let seaid = data.SeaId;
          let cur_exp = 0;
          let max_exp = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getSeaGatepassNextExp(cur_lv);
          this.curProgress.string = cur_exp + "/";
          this.allProgress.string = max_exp + "";
          this.proBar.progress = cur_exp / max_exp;
          let seapass = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getSeaGatepass(seaid);
          let BgTexture = seapass[0].BgTexture ? seapass[0].BgTexture : "rightsBg1";
          let BigPrizeIcon = seapass[0].BigPrizeIcon ? seapass[0].BigPrizeIcon : "icon";
          let TitleIcon = seapass[0].TitleIcon ? seapass[0].TitleIcon : "nameIcon_10001";
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/bg/" + BgTexture + "/spriteFrame", SpriteFrame, res => {
            this.bg.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/rights/icon/" + BigPrizeIcon + "/spriteFrame", SpriteFrame, res => {
            this.icon.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/rights/icon/" + TitleIcon + "/spriteFrame", SpriteFrame, res => {
            this.title.spriteFrame = res;
          });
          let lv_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getSeaGatepassReward(seaid);

          for (let i = 0; i < seapass.length; i++) {
            const element = seapass[i];

            if (element.Grate == 1) {
              this.baseRewardList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).getSeaGatepassReward(element.ID);
            }

            if (element.Grate == 2) {
              this.heighRewardList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).getSeaGatepassReward(element.ID);
            }
          }

          this.baseRewardList.sort((a, b) => {
            return a.Lv - b.Lv;
          });
          this.heighRewardList.sort((a, b) => {
            return a.Lv - b.Lv;
          });
          this.ScrollView.UpdateDatas(this.baseRewardList);
        }

        updateItem(item, data, index) {
          let cur_show_index = 0;

          if (index > this.old_index) {
            cur_show_index = Math.ceil((index + 1) / 10) * 10;
          } else {
            cur_show_index = Math.ceil((index + 8) / 10) * 10;
          }

          if (cur_show_index != this.cur_show_index) {
            this.cur_show_index = cur_show_index;
            let cur_data_index = this.cur_show_index <= this.baseRewardList.length ? this.cur_show_index - 1 : this.baseRewardList.length - 1;
            this.setStageReward(this.item, this.baseRewardList[cur_data_index], cur_data_index);
          }

          this.old_index = index;
          let lv = item.getChildByName("lv").getComponent(Label);
          let base_node = item.getChildByName("free");
          let height_node1 = item.getChildByPath("no_free/Node1");
          let height_node2 = item.getChildByPath("no_free/Node2");
          let card_node = item.getChildByPath("no_free/card");
          lv.string = "Lv." + data.Lv;
          let reward_lsit = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).GetSThingList(data.RewardType, data.RewardID, data.RewardNum);
          this.setItem(base_node, reward_lsit[0], 0);
          let heigh_data = this.heighRewardList[index];
          let is_has_card = heigh_data.RewardType.indexOf((_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
            error: Error()
          }), ThingType) : ThingType).battlecard);
          height_node1.active = is_has_card == -1;
          height_node2.active = is_has_card == -1;
          card_node.active = is_has_card != -1;

          if (is_has_card == -1) {
            let height_reward_lsit = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).GetSThingList(heigh_data.RewardType, heigh_data.RewardID, heigh_data.RewardNum);
            this.setItem(height_node1, height_reward_lsit[0], 0);

            if (height_reward_lsit[1]) {
              this.setItem(height_node2, height_reward_lsit[1], 0);
              height_node2.active = true;
            } else {
              height_node2.active = false;
            }
          } else {
            let card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetBattleCardDeliver(heigh_data.RewardID[is_has_card]);
            let card_data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleCard();
            card_data.cardId = card_cfg.CardID;
            card_data.createdAt = "";
            card_data.id = "";
            card_data.exp = 0;
            card_data.level = 1;
            card_data.nftLockExpires = false;
            card_data.ownershipType = 0;
            card_data.quality = card_cfg.CardQuality;
            card_data.tradeCd = 0;
            card_data.updateId = 0;
            this.setCard(card_node, card_data, 0);
          }
        }

        setItem(item, reward, is_state) {
          let base_item = item.getChildByName("item");
          let mask = item.getChildByName("mask").getComponent(Sprite);
          let mask_opac = item.getChildByName("mask").getComponent(UIOpacity);
          let select = item.getChildByName("select");
          let lock = item.getChildByName("lock");
          let bagItem = base_item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem) || base_item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.setThing(reward);
          is_state = 0;

          let _color = is_state ? "#EDF5FE" : "#000000";

          mask.color.fromHEX(_color);

          let _opacity = is_state ? 255 : 179;

          mask_opac.opacity = _opacity;
          select.active = is_state ? true : false;

          if (lock) {
            lock.active = is_state ? true : false;
          }
        }

        setCard(item, reward, is_state) {
          let card = item.getChildByName("Cards");
          let mask = item.getChildByName("mask").getComponent(Sprite);
          let mask_opac = item.getChildByName("mask").getComponent(UIOpacity);
          let select = item.getChildByName("select");
          let lock = item.getChildByName("lock");
          let cards = card.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card) || card.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          cards.SetData(reward);
          is_state = 0;

          let _color = is_state ? "#EDF5FE" : "#000000";

          mask.color.fromHEX(_color);

          let _opacity = is_state ? 255 : 179;

          mask_opac.opacity = _opacity;
          select.active = is_state ? true : false;
          lock.active = is_state ? true : false;
        }

        setStageReward(item, data, index) {
          let lv = item.getChildByName("lv").getComponent(Label);
          let base_node = item.getChildByName("free");
          let height_node1 = item.getChildByPath("no_free/Node1");
          let height_node2 = item.getChildByPath("no_free/Node2");
          let card_node = item.getChildByPath("no_free/card");
          lv.string = "Lv." + data.Lv;
          let reward_lsit = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
            error: Error()
          }), ItemUtil) : ItemUtil).GetSThingList(data.RewardType, data.RewardID, data.RewardNum);
          this.setItem(base_node, reward_lsit[0], 0);
          let heigh_data = this.heighRewardList[index];
          let is_has_card = heigh_data.RewardType.indexOf((_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
            error: Error()
          }), ThingType) : ThingType).battlecard);
          height_node1.active = is_has_card == -1;
          height_node2.active = is_has_card == -1;
          card_node.active = is_has_card != -1;

          if (is_has_card == -1) {
            let height_reward_lsit = (_crd && ItemUtil === void 0 ? (_reportPossibleCrUseOfItemUtil({
              error: Error()
            }), ItemUtil) : ItemUtil).GetSThingList(heigh_data.RewardType, heigh_data.RewardID, heigh_data.RewardNum);
            this.setItem(height_node1, height_reward_lsit[0], 0);

            if (height_reward_lsit[1]) {
              this.setItem(height_node2, height_reward_lsit[1], 0);
              height_node2.active = true;
            } else {
              height_node2.active = false;
            }
          } else {
            let card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetBattleCardDeliver(heigh_data.RewardID[is_has_card]);
            let card_data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleCard();
            card_data.cardId = card_cfg.CardID;
            card_data.createdAt = "";
            card_data.id = "";
            card_data.exp = 0;
            card_data.level = 1;
            card_data.nftLockExpires = false;
            card_data.ownershipType = 0;
            card_data.quality = card_cfg.CardQuality;
            card_data.tradeCd = 0;
            card_data.updateId = 0;
            this.setCard(card_node, card_data, 0);
          }
        }

        onSelect(index, item, data) {
          console.log("领奖");
        }

        onBuy() {
          (_crd && GatePassBuyPanel === void 0 ? (_reportPossibleCrUseOfGatePassBuyPanel({
            error: Error()
          }), GatePassBuyPanel) : GatePassBuyPanel).Show();
        }

        onOneKey() {}

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9c5754b76dc7c550c909a3426ec918ef1c0d63c.js.map