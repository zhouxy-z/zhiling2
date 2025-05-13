System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, Layout, Sprite, SpriteFrame, Toggle, UIOpacity, instantiate, path, CardQuality, CfgMgr, ItemType, ResMgr, folder_quality, Second, Tips, OpenBoxPage, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCardQuality(extras) {
    _reporterNs.report("CardQuality", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_quality(extras) {
    _reporterNs.report("folder_quality", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  _export("OpenBoxPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      UIOpacity = _cc.UIOpacity;
      instantiate = _cc.instantiate;
      path = _cc.path;
    }, function (_unresolved_2) {
      CardQuality = _unresolved_2.CardQuality;
      CfgMgr = _unresolved_2.CfgMgr;
      ItemType = _unresolved_2.ItemType;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      folder_quality = _unresolved_3.folder_quality;
    }, function (_unresolved_4) {
      Second = _unresolved_4.Second;
    }, function (_unresolved_5) {
      Tips = _unresolved_5.Tips;
    }, function (_unresolved_6) {}],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3a4bJL4V1MwayIyv1VE2my", "OpenBoxPage", undefined);

      __checkObsolete__(['Component', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate', 'path']);

      _export("OpenBoxPage", OpenBoxPage = class OpenBoxPage extends Component {
        constructor() {
          super(...arguments);
          this.Layout = void 0;
          this.item = void 0;
          this.isSelect = void 0;
          this.maxCount = void 0;
          this.limit = void 0;
          this.callBack = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          var _this$complete;

          this.Layout = this.node.getChildByName("Layout").getComponent(Layout);
          this.item = this.node.getChildByPath("Layout/item");
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          var thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
        }
        /**
         * 刷新道具数据
         * @param data 
         */


        SetData(data, count, limit, is_select, callback) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.hasLoad) yield _this.loadSub;
            _this.callBack = callback;

            _this.Layout.node.removeAllChildren();

            _this.updateItem(data);

            _this.maxCount = count;
            _this.limit = limit;
            _this.isSelect = is_select;
          })();
        }

        updateItem(data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            for (var index = 0; index < data.length; index++) {
              var item = instantiate(_this2.item);
              var bg = item.getChildByName("bg").getComponent(Sprite);
              var icon = item.getChildByPath("bg/icon").getComponent(Sprite);
              var num = item.getChildByPath("bg/num").getComponent(Label);
              var mask = item.getChildByPath("mask").getComponent(UIOpacity);
              var maskBg = item.getChildByPath("bg/maskBg").getComponent(Sprite);
              var max_num = item.getChildByPath("mask/max_num").getComponent(Label);
              var id = item.getChildByName("id").getComponent(Label);
              var toggle = item.getComponent(Toggle);
              toggle.node.on("toggle", _this2.onSelect, _this2);
              toggle.isChecked = false;
              bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(data[index].resData.iconBgUrl, SpriteFrame);
              icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(data[index].resData.iconUrl, SpriteFrame);

              if (data[index].item) {
                var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem(data[index].item.id);

                if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                  error: Error()
                }), ItemType) : ItemType).shard) {
                  maskBg.node.active = true;
                  maskBg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_quality === void 0 ? (_reportPossibleCrUseOffolder_quality({
                    error: Error()
                  }), folder_quality) : folder_quality, (_crd && CardQuality === void 0 ? (_reportPossibleCrUseOfCardQuality({
                    error: Error()
                  }), CardQuality) : CardQuality)[std.ItemEffect2] + "_bag_mask", "spriteFrame"), SpriteFrame);
                } else {
                  maskBg.node.active = false;
                }

                id.string = data[index].item.id + "";
                num.string = (data[index].item.count ? data[index].item.count : "") + "";
              } else {
                num.string = "1";
              }

              max_num.string = _this2.maxCount + "";
              mask.opacity = _this2.isSelect ? 0 : 255;
              toggle.interactable = _this2.isSelect;

              _this2.Layout.node.addChild(item);
            }
          })();
        }

        onSelect(toggle) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.limit || !_this3.isSelect) return;
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0);
            var selects = [];
            var chidlren = _this3.Layout.node.children;
            var num = 0;

            for (var child of chidlren) {
              var isSelect = child.getComponent(Toggle).isChecked;

              if (isSelect) {
                num++;

                if (_this3.isSelect) {}

                {
                  child.getChildByName("mask").getComponent(UIOpacity).opacity = 255;
                }
                selects.push(child.getSiblingIndex());
              } else {
                child.getChildByName("mask").getComponent(UIOpacity).opacity = 0;
              }
            }

            if (num > _this3.limit) {
              toggle.isChecked = false;
              toggle.node.getChildByName("mask").getComponent(UIOpacity).opacity = 0;
              var index = selects.indexOf(toggle.node.getSiblingIndex());

              if (index > -1) {
                selects.splice(index, 1);
              }

              (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                error: Error()
              }), Tips) : Tips).Show("只能选择" + _this3.limit + "个");
            }

            _this3.callBack(selects);
          })();
        }

        setSelectNum(count, is_select) {
          var chidlren = this.Layout.node.children;

          for (var child of chidlren) {
            var isSelect = child.getComponent(Toggle).isChecked;

            if (isSelect && is_select) {
              child.getChildByName("mask").getComponent(UIOpacity).opacity = 255;
            }

            child.getChildByPath("mask/max_num").getComponent(Label).string = count + "";
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cbb375594bbaf585aaed7ef87738b85d5d5dd21.js.map