System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, Toggle, instantiate, path, Panel, AutoScroller, PlayerData, CfgMgr, BagItem, ResMgr, folder_item, EventMgr, Evt_GetReward, Evt_Item_Change, Tips, Goto, BagPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "./BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_GetReward(extras) {
    _reporterNs.report("Evt_GetReward", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("BagPanel", void 0);

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
      Toggle = _cc.Toggle;
      instantiate = _cc.instantiate;
      path = _cc.path;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
    }, function (_unresolved_6) {
      BagItem = _unresolved_6.BagItem;
    }, function (_unresolved_7) {
      ResMgr = _unresolved_7.ResMgr;
      folder_item = _unresolved_7.folder_item;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
      Evt_GetReward = _unresolved_8.Evt_GetReward;
      Evt_Item_Change = _unresolved_8.Evt_Item_Change;
    }, function (_unresolved_9) {
      Tips = _unresolved_9.Tips;
    }, function (_unresolved_10) {
      Goto = _unresolved_10.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe45EzKnlL3qqWqhSTmZ4Y", "BagPanel", undefined);

      __checkObsolete__(['EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'instantiate', 'path']);

      _export("BagPanel", BagPanel = class BagPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/bag/BagPanel";
          this.infoView = void 0;
          this.itemShow = void 0;
          this.empty = void 0;
          this.scroller = void 0;
          this.navBtns = [];
          this.currentPage = void 0;
          this.selector = void 0;
        }

        async onLoad() {
          this.CloseBy("backBtn");
          this.infoView = this.find("infoView");
          this.itemShow = this.find("itemShow");
          this.empty = this.find("empty");
          this.scroller = this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.updateItem.bind(this));
          this.scroller.node.on('select', this.onSelect, this);
          let nav = this.find("nav");
          nav.children.forEach((item, index) => {
            this.navBtns.push(item.getComponent(Toggle));
            item.on(Input.EventType.TOUCH_END, e => {
              this.onPage(index);
            }, this);
          });
          this.find("infoView/useBtn").on(Input.EventType.TOUCH_END, this.onUse, this);
          this.find("infoView/tradeBtn").on(Input.EventType.TOUCH_END, this.ontrade, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.flush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_GetReward === void 0 ? (_reportPossibleCrUseOfEvt_GetReward({
            error: Error()
          }), Evt_GetReward) : Evt_GetReward, this.flush, this);
        }

        flush(...args) {
          this.SetPage(this.currentPage || 0);
        }

        onHide(...args) {}

        async SetPage(page) {
          if (!this.$hasLoad) await this.initSub;
          let btn = this.navBtns[page];
          if (btn) btn.isChecked = true;
          this.onPage(page);
        }

        onPage(page) {
          let reflush = this.currentPage != page;
          this.currentPage = page;
          let items = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetitemBySubType(page);

          for (let i = items.length - 1; i >= 0; i--) {
            if (items[i].item['std'].HideBag) {
              items.splice(i, 1);
            }
          }

          this.scroller.UpdateDatas(items);

          if (items.length <= 0) {
            this.empty.active = true;
            this.infoView.active = this.itemShow.active = false;
          } else {
            this.empty.active = false;
            this.infoView.active = this.itemShow.active = true;
          }

          if (reflush && items != null && items.length) {
            this.scroller.SelectFirst();
            this.onSelect(undefined, undefined, items[0]);
          }
        }

        updateItem(item, data, index) {
          let bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem) || item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.setThing(data);
        }

        async onSelect(index, item, data) {
          var _this$selector, _this$selector2;

          this.empty.active = false;
          this.infoView.active = this.itemShow.active = true;
          let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(data.item.id);
          this.selector = stdItem;
          this.itemShow.getChildByName("bg").getComponent(Sprite).spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality_" + stdItem.Quality + "/spriteFrame", SpriteFrame);
          this.itemShow.getChildByName("icon").getComponent(Sprite).spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame);
          let fetchs = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("fetch");
          this.infoView.getChildByPath("nameLab").getComponent(Label).string = stdItem.ItemName;
          this.infoView.getChildByPath("numLab").getComponent(Label).string = data.item.count;
          this.infoView.getChildByPath("descLab").getComponent(Label).string = stdItem.Remark;
          let layout = this.infoView.getChildByPath("layout");

          for (let i = 0, len = Math.max(((_stdItem$SkipGet = stdItem.SkipGet) == null ? void 0 : _stdItem$SkipGet.length) || 0, layout.children.length); i < len; i++) {
            var _stdItem$SkipGet, _stdItem$SkipGet2;

            let child = layout.children[i];

            if (!child) {
              child = instantiate(layout.children[0]);
              layout.addChild(child);
            }

            let stdFetch = fetchs[stdItem == null || (_stdItem$SkipGet2 = stdItem.SkipGet) == null ? void 0 : _stdItem$SkipGet2[i]];
            child.getChildByName("goto").off(Input.EventType.TOUCH_END);

            if (stdFetch) {
              child.active = true;
              child['fetch'] = stdFetch.Win;
              child.getChildByName("descLab").getComponent(Label).string = stdFetch.Desc;
              child.getChildByName("goto").on(Input.EventType.TOUCH_END, this.goto, child);
            } else {
              child.active = false;
            }
          }

          this.find("infoView/useBtn").active = false;
          this.find("infoView/tradeBtn").active = false;

          if (((_this$selector = this.selector) == null || (_this$selector = _this$selector.Button) == null ? void 0 : _this$selector.indexOf(3)) != -1) {
            this.find("infoView/useBtn").active = true;
          }

          if (((_this$selector2 = this.selector) == null || (_this$selector2 = _this$selector2.Button) == null ? void 0 : _this$selector2.indexOf(1)) != -1) {
            this.find("infoView/tradeBtn").active = true;
          }
        }

        goto(e) {
          let win = this['fetch'];
          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)(win);
        }

        onUse() {
          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)("OpenBoxPanel", this.selector);
        }

        ontrade() {
          (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
            error: Error()
          }), Tips) : Tips).Show("暂未开启");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c063a147e8d49608a6a5ce7bff7eee9b9bd1b1a5.js.map