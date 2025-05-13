System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, Toggle, instantiate, path, Panel, AutoScroller, PlayerData, CfgMgr, BagItem, ResMgr, folder_item, EventMgr, Evt_GetReward, Evt_Item_Change, Tips, Goto, BagPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/bag/BagPanel";
          this.infoView = void 0;
          this.itemShow = void 0;
          this.empty = void 0;
          this.scroller = void 0;
          this.navBtns = [];
          this.currentPage = void 0;
          this.selector = void 0;
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.CloseBy("backBtn");

            _this.infoView = _this.find("infoView");
            _this.itemShow = _this.find("itemShow");
            _this.empty = _this.find("empty");
            _this.scroller = _this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
              error: Error()
            }), AutoScroller) : AutoScroller);

            _this.scroller.SetHandle(_this.updateItem.bind(_this));

            _this.scroller.node.on('select', _this.onSelect, _this);

            var nav = _this.find("nav");

            nav.children.forEach((item, index) => {
              _this.navBtns.push(item.getComponent(Toggle));

              item.on(Input.EventType.TOUCH_END, e => {
                _this.onPage(index);
              }, _this);
            });

            _this.find("infoView/useBtn").on(Input.EventType.TOUCH_END, _this.onUse, _this);

            _this.find("infoView/tradeBtn").on(Input.EventType.TOUCH_END, _this.ontrade, _this);
          })();
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

        flush() {
          this.SetPage(this.currentPage || 0);
        }

        onHide() {}

        SetPage(page) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.$hasLoad) yield _this2.initSub;
            var btn = _this2.navBtns[page];
            if (btn) btn.isChecked = true;

            _this2.onPage(page);
          })();
        }

        onPage(page) {
          var reflush = this.currentPage != page;
          this.currentPage = page;
          var items = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetitemBySubType(page);

          for (var i = items.length - 1; i >= 0; i--) {
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
          var bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem) || item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.setThing(data);
        }

        onSelect(index, item, data) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var _this3$selector, _this3$selector2;

            _this3.empty.active = false;
            _this3.infoView.active = _this3.itemShow.active = true;
            var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(data.item.id);
            _this3.selector = stdItem;
            _this3.itemShow.getChildByName("bg").getComponent(Sprite).spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality_" + stdItem.Quality + "/spriteFrame", SpriteFrame);
            _this3.itemShow.getChildByName("icon").getComponent(Sprite).spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame);
            var fetchs = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("fetch");
            _this3.infoView.getChildByPath("nameLab").getComponent(Label).string = stdItem.ItemName;
            _this3.infoView.getChildByPath("numLab").getComponent(Label).string = data.item.count;
            _this3.infoView.getChildByPath("descLab").getComponent(Label).string = stdItem.Remark;

            var layout = _this3.infoView.getChildByPath("layout");

            for (var i = 0, len = Math.max(((_stdItem$SkipGet = stdItem.SkipGet) == null ? void 0 : _stdItem$SkipGet.length) || 0, layout.children.length); i < len; i++) {
              var _stdItem$SkipGet, _stdItem$SkipGet2;

              var child = layout.children[i];

              if (!child) {
                child = instantiate(layout.children[0]);
                layout.addChild(child);
              }

              var stdFetch = fetchs[stdItem == null || (_stdItem$SkipGet2 = stdItem.SkipGet) == null ? void 0 : _stdItem$SkipGet2[i]];
              child.getChildByName("goto").off(Input.EventType.TOUCH_END);

              if (stdFetch) {
                child.active = true;
                child['fetch'] = stdFetch.Win;
                child.getChildByName("descLab").getComponent(Label).string = stdFetch.Desc;
                child.getChildByName("goto").on(Input.EventType.TOUCH_END, _this3.goto, child);
              } else {
                child.active = false;
              }
            }

            _this3.find("infoView/useBtn").active = false;
            _this3.find("infoView/tradeBtn").active = false;

            if (((_this3$selector = _this3.selector) == null || (_this3$selector = _this3$selector.Button) == null ? void 0 : _this3$selector.indexOf(3)) != -1) {
              _this3.find("infoView/useBtn").active = true;
            }

            if (((_this3$selector2 = _this3.selector) == null || (_this3$selector2 = _this3$selector2.Button) == null ? void 0 : _this3$selector2.indexOf(1)) != -1) {
              _this3.find("infoView/tradeBtn").active = true;
            }
          })();
        }

        goto(e) {
          var win = this['fetch'];
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