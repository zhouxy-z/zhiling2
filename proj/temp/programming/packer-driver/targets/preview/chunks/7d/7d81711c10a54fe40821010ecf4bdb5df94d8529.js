System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, UITransform, Slider, path, Button, Toggle, ResMgr, folder_item, Panel, UILay, Session, BoxType, CfgMgr, ThingName, AutoScroller, PlayerData, BagItem, Tips, Second, EventMgr, Evt_GetReward, Evt_Item_Change, Req, Route, OpenBoxPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILay(extras) {
    _reporterNs.report("UILay", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxType(extras) {
    _reporterNs.report("BoxType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardBox(extras) {
    _reporterNs.report("RewardBox", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingName(extras) {
    _reporterNs.report("ThingName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "./BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
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

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  _export("OpenBoxPanel", void 0);

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
      UITransform = _cc.UITransform;
      Slider = _cc.Slider;
      path = _cc.path;
      Button = _cc.Button;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
      UILay = _unresolved_3.UILay;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      BoxType = _unresolved_5.BoxType;
      CfgMgr = _unresolved_5.CfgMgr;
      ThingName = _unresolved_5.ThingName;
    }, function (_unresolved_6) {
      AutoScroller = _unresolved_6.AutoScroller;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }, function (_unresolved_8) {
      BagItem = _unresolved_8.BagItem;
    }, function (_unresolved_9) {
      Tips = _unresolved_9.Tips;
    }, function (_unresolved_10) {
      Second = _unresolved_10.Second;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
      Evt_GetReward = _unresolved_11.Evt_GetReward;
      Evt_Item_Change = _unresolved_11.Evt_Item_Change;
    }, function (_unresolved_12) {
      Req = _unresolved_12.Req;
      Route = _unresolved_12.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5ae2VdbqhGEp95tCJP7aiy", "OpenBoxPanel", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'UITransform', 'Slider', 'path', 'Button', 'tween', 'v3', 'PageView', 'instantiate', 'Layout', 'Toggle']);

      _export("OpenBoxPanel", OpenBoxPanel = class OpenBoxPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/bag/OpenBoxPanel";
          this.$lockLay = (_crd && UILay === void 0 ? (_reportPossibleCrUseOfUILay({
            error: Error()
          }), UILay) : UILay).Modal;
          this.Slider = void 0;
          this.progress = void 0;
          this.nameLab = void 0;
          this.icon = void 0;
          this.cardBg = void 0;
          this.numLab = void 0;
          this.scroller = void 0;
          this.valueLab = void 0;
          this.maxLab = void 0;
          this.consLab = void 0;
          this.consumeNum = void 0;
          this.openBtn = void 0;
          this.BoxData = void 0;
          this.maxItemcount = void 0;
          this.selects = void 0;
          this.curSelectCount = void 0;
          this.itemData = void 0;
        }

        onLoad() {
          this.CloseBy("right/closeBtn");
          this.nameLab = this.find("left/nameLab", Label);
          this.icon = this.find("left/icon", Sprite);
          this.cardBg = this.find("left/cardBg", Sprite);
          this.numLab = this.find("left/num", Label);
          this.consLab = this.find("right/label", Label);
          this.consumeNum = this.find("right/consumeNum", Label);
          this.scroller = this.find("right/ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.valueLab = this.find("right/value", Label);
          this.maxLab = this.find("right/max", Label);
          this.Slider = this.find("right/Slider", Slider);
          this.progress = this.find("right/Slider/progress");
          this.Slider.node.on('slide', this.onSlide, this);
          this.scroller.SetHandle(this.updateItem.bind(this));
          this.scroller.node.on('select', this.onSelect, this);
          this.openBtn = this.find("right/openBtn", Button);
          this.find("right/del").on(Input.EventType.TOUCH_END, this.onDel, this);
          this.find("right/add").on(Input.EventType.TOUCH_END, this.onAdd, this);
          this.find("right/openBtn").on(Input.EventType.TOUCH_END, this.onOpen, this);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.ItemChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_GetReward === void 0 ? (_reportPossibleCrUseOfEvt_GetReward({
            error: Error()
          }), Evt_GetReward) : Evt_GetReward, this.resetData, this);
        }

        ItemChange() {
          var count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.itemData.Items);
          this.numLab.string = count + "";

          if (count <= 0) {
            this.Hide();
          }
        }

        resetData() {
          this.Hide();

          if (this.maxItemcount <= 0) {
            return;
          }

          this.flush(this.itemData);
        }

        flush(itemData) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!itemData) return;
            _this.itemData = itemData;
            _this.selects = [];
            _this.curSelectCount = 1;
            _this.nameLab.string = itemData.ItemName;
            var count = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(itemData.Items);
            _this.numLab.string = count + "";
            _this.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, itemData.Icon, "spriteFrame"), SpriteFrame);
            _this.cardBg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("sheet/bag/box/Quality" + itemData.Quality + "/spriteFrame", SpriteFrame);
            _this.BoxData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetBoxData(itemData.Items);
            _this.maxItemcount = count > _this.BoxData.Limit ? _this.BoxData.Limit : count;
            _this.maxLab.string = _this.maxItemcount + "";
            var is_select = _this.BoxData.Boxtype == (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
              error: Error()
            }), BoxType) : BoxType).select; // this.openBtn.enabled = !is_select;
            // this.openBtn.node.getComponent(Sprite).grayscale = is_select;

            _this.scroller.CanSelect(is_select);

            _this.updateProgress();

            for (var child of _this.scroller.children) {
              var toggle = child.getComponent(Toggle);
              if (toggle) toggle.isChecked = false;
            }

            _this.scroller.SelectFirst();
          })();
        }

        updateScroller() {
          var cardatas = [];

          for (var i = 0; i < this.BoxData.Items.length; i++) {
            var id = this.BoxData.Items[i];
            var type = this.BoxData.Types[i];

            if (type == (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
              error: Error()
            }), ThingName) : ThingName).battlecard) {
              var deliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetBattleCardDeliver(id);
              if (deliver) cardatas.push({
                card: {
                  cardId: deliver.CardID,
                  quality: deliver.CardQuality
                }
              });
            } else {
              // let awardList = ItemUtil.CreateThing(ItemUtil.SthingType[type], id, num);
              // cardatas.push(awardList)
              var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(id);

              if (stdItem) {
                cardatas.push({
                  item: {
                    id: id,
                    count: this.curSelectCount * (this.BoxData.ItemsNum[i] || 1)
                  }
                });
              }
            }
          }

          this.scroller.UpdateDatas(cardatas);
        }

        updateItem(item, data, index) {
          var bagItem = item.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem) || item.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem) : BagItem);
          bagItem.setThing(data);
          var toggle = bagItem.getComponent(Toggle);
          if (!toggle) return;
          toggle.isChecked = this.selects.indexOf(index) != -1;
        }

        onSelect(index, item, data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (_this2.BoxData.Boxtype != (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
              error: Error()
            }), BoxType) : BoxType).select) return;
            var toggle = item.getComponent(Toggle);
            if (!toggle) return;
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0);

            if (toggle.isChecked) {
              if (_this2.selects.length >= _this2.BoxData.RewardNum) {
                (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                  error: Error()
                }), Tips) : Tips).Show("只能选择" + _this2.BoxData.RewardNum + "个");
                toggle.isChecked = false;
                return;
              }

              if (_this2.selects.indexOf(index) == -1) {
                _this2.selects.push(index);

                _this2.selects.sort((a, b) => a - b);
              }
            } else {
              var idx = _this2.selects.indexOf(index);

              if (idx != -1) _this2.selects.splice(idx, 1);
            }

            _this2.updateProgress();
          })();
        }

        onHide() {}

        update(dt) {
          var size = this.Slider.node.getComponent(UITransform).contentSize;
          this.progress.getComponent(UITransform).setContentSize(this.Slider.progress * size.width, 13.448);
        }

        onAdd(e) {
          if (this.curSelectCount >= this.maxItemcount) return;
          this.curSelectCount++; //超出拥有数量

          if (this.curSelectCount > this.maxItemcount) {
            this.curSelectCount = this.maxItemcount;
          }

          this.updateProgress();
        }

        onDel(e) {
          if (this.curSelectCount < 1) return;
          this.curSelectCount--;

          if (this.curSelectCount < 1) {
            this.curSelectCount = 1;
          }

          this.updateProgress();
        }

        onSlide(e) {
          this.curSelectCount = Math.max(Math.ceil(this.maxItemcount * this.Slider.progress), 1);
          this.updateProgress();
        }

        updateProgress() {
          this.Slider.progress = this.curSelectCount / this.maxItemcount;
          this.valueLab.string = this.curSelectCount + "";
          this.consumeNum.string = "";

          switch (this.BoxData.Boxtype) {
            case 3:
              this.consLab.string = "获得以下全部道具";
              break;

            case 1:
              this.consLab.string = "随机获得以下道具";
              break;

            case 2:
              this.consLab.string = "选择获得以下道具";
              this.consumeNum.string = this.selects.length + "/" + this.BoxData.RewardNum;
              break;
          }

          this.updateScroller();
        }

        onOpen() {
          var list = this.selects;

          if (this.BoxData.Boxtype == 2 && this.selects.length < this.BoxData.RewardNum) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("\u8BF7\u9009\u62E9" + this.BoxData.RewardNum + "\u4E2A\u9053\u5177\uFF01");
            return;
          }

          if (this.BoxData.Boxtype != (_crd && BoxType === void 0 ? (_reportPossibleCrUseOfBoxType({
            error: Error()
          }), BoxType) : BoxType).select) {
            list = null;
          }

          var open_box = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["player.protocol.openbox"]();
          open_box.boxId = this.BoxData.ItemID;
          open_box.count = this.curSelectCount;
          open_box.selectedItems = list;
          open_box.server = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).server;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["player.protocol.openbox"], open_box);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7d81711c10a54fe40821010ecf4bdb5df94d8529.js.map