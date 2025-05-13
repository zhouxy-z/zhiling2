System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, path, Sprite, SpriteFrame, CfgMgr, ItemType, folder_item, folder_money, ResMgr, PlayerData, EventMgr, Evt_Item_Change, AsyncComponent, CostItem, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_money(extras) {
    _reporterNs.report("folder_money", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "./AsyncComponent", _context.meta, extras);
  }

  _export("CostItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
      ItemType = _unresolved_2.ItemType;
    }, function (_unresolved_3) {
      folder_item = _unresolved_3.folder_item;
      folder_money = _unresolved_3.folder_money;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_Item_Change = _unresolved_5.Evt_Item_Change;
    }, function (_unresolved_6) {
      AsyncComponent = _unresolved_6.AsyncComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8af2ectp6lEEr2y9PUixro2", "CostItem", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'Label', 'path', 'Sprite', 'SpriteFrame']);

      /**
       * 消耗道具展示
       */
      _export("CostItem", CostItem = class CostItem extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor() {
          super(...arguments);
          this.icon = void 0;
          this.numLab = void 0;
          this.itemId = void 0;
          this.itemNum = void 0;
          this.defNumColor = void 0;
          this.notNumColor = void 0;
          this.isShowHave = void 0;
          this.std = void 0;
        }

        onLoad() {
          this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
          this.numLab = this.node.getChildByPath("numLab").getComponent(Label);
          this.defNumColor = this.numLab.color.clone();
          this.updateShow();
          super.onLoad();
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        onItemChange(changeMap) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.hasLoad) yield _this.loadSub;

            if (changeMap[_this.itemId] != undefined) {
              _this.updateNum();
            }
          })();
        }

        SetData(itemId, itemNum, notNumColor, isShowHave) {
          this.itemId = itemId;
          this.itemNum = itemNum;
          this.notNumColor = notNumColor;
          this.isShowHave = isShowHave;
          this.updateShow();
        }

        SetItem(itemType, itemId, count) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var url;

            if (itemType == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).money) {
              url = path.join(_crd && folder_money === void 0 ? (_reportPossibleCrUseOffolder_money({
                error: Error()
              }), folder_money) : folder_money, "货币0" + itemId, "spriteFrame");
            } else {
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(itemId);
              url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, std.Icon, "spriteFrame");
            }

            _this2.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            _this2.numLab.string = count.toString();
          })();
        }

        updateShow() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.hasLoad) yield _this3.loadSub;

            if (!_this3.std || _this3.std && _this3.itemId != _this3.std.Items) {
              _this3.std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(_this3.itemId);
            }

            if (_this3.std) {
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, _this3.std.Icon, "spriteFrame"), SpriteFrame, res => {
                _this3.icon.spriteFrame = res;
              });

              _this3.updateNum();
            }
          })();
        }

        updateNum() {
          var haveNum = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetItemCount(this.itemId);
          this.numLab.string = this.isShowHave ? haveNum + "/" + this.itemNum : "" + this.itemNum;

          if (this.notNumColor) {
            var newColor = this.defNumColor.clone();

            if (haveNum < this.itemNum) {
              newColor = newColor.fromHEX(this.notNumColor);
            }

            this.numLab.color = newColor;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c718506b5b207ed481f15d9cb9dc94cab068b152.js.map