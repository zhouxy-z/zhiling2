System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Sprite, SpriteFrame, _decorator, path, CfgMgr, ThingType, ThingTypeName, ResMgr, folder_card, folder_item, folder_money, Utils, AsyncComponent, _dec, _dec2, _class, _crd, ccclass, property, disallowMultiple, requireComponent, BagItem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingType(extras) {
    _reporterNs.report("ThingType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_card(extras) {
    _reporterNs.report("folder_card", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_money(extras) {
    _reporterNs.report("folder_money", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncComponent(extras) {
    _reporterNs.report("AsyncComponent", "../common/AsyncComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
      path = _cc.path;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
      ThingType = _unresolved_2.ThingType;
      ThingTypeName = _unresolved_2.ThingTypeName;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
      folder_card = _unresolved_3.folder_card;
      folder_item = _unresolved_3.folder_item;
      folder_money = _unresolved_3.folder_money;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      AsyncComponent = _unresolved_5.AsyncComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1fdfjezANOp51kP4QIFdoA", "BagItem", undefined);

      __checkObsolete__(['Component', 'Label', 'Sprite', 'SpriteFrame', '_decorator', 'path']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);

      _export("BagItem", BagItem = (_dec = ccclass('BagItem'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class BagItem extends (_crd && AsyncComponent === void 0 ? (_reportPossibleCrUseOfAsyncComponent({
        error: Error()
      }), AsyncComponent) : AsyncComponent) {
        constructor() {
          super(...arguments);
          this.bg = void 0;
          this.icon = void 0;
          this.label = void 0;
          this.nameLab = void 0;
          this.thing = void 0;
        }

        onLoad() {
          this.hasLoad = true;
          this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
          this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
          this.label = this.node.getChildByPath("label").getComponent(Label);
          this.nameLab = this.node.getChildByPath("nameLab").getComponent(Label);

          if (this.icon.node.scale.x == 1) {
            this.icon.node.setScale(0.6, 0.6, 0.6);
          }

          super.onLoad();
        }

        setThing(data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.hasLoad) yield _this.loadSub;
            _this.thing = data;

            if (_this.thing.item) {
              var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(_this.thing.item.id);
              _this.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + stdItem.Quality + "/spriteFrame", SpriteFrame);
              _this.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame);
              _this.label.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(_this.thing.item.count);
              _this.nameLab.string = stdItem.ItemName;
            } else if (_this.thing.card) {
              var stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(_this.thing.card.cardId);
              _this.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + data.card.quality + "/spriteFrame", SpriteFrame);
              _this.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_card === void 0 ? (_reportPossibleCrUseOffolder_card({
                error: Error()
              }), folder_card) : folder_card, stdCard.CardBody, "spriteFrame"), SpriteFrame);
              _this.label.string = stdCard.CardName;
              _this.nameLab.string = "";
            }
          })();
        }

        setItem(itemType, itemId, count) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.hasLoad) yield _this2.loadSub;
            var url;

            if (!itemType) {
              _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality1/spriteFrame", SpriteFrame);
              url = path.join(_crd && folder_money === void 0 ? (_reportPossibleCrUseOffolder_money({
                error: Error()
              }), folder_money) : folder_money, "货币0" + itemId, "spriteFrame");
              _this2.nameLab.string = "";
            } else if (itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).item || itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).equipment || itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).playerexp) {
              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(itemId);
              _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + std.Quality + "/spriteFrame", SpriteFrame);
              url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, std.Icon, "spriteFrame");
              _this2.nameLab.string = std.ItemName;
            } else if (itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
              error: Error()
            }), ThingType) : ThingType).battlecard) {
              var deliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetBattleCardDeliver(itemId);
              var stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(deliver.CardID);
              _this2.bg.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + deliver.CardQuality + "/spriteFrame", SpriteFrame);
              _this2.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_card === void 0 ? (_reportPossibleCrUseOffolder_card({
                error: Error()
              }), folder_card) : folder_card, stdCard.CardBody, "spriteFrame"), SpriteFrame);
              _this2.label.string = stdCard.CardName;
              _this2.nameLab.string = "";
            }

            _this2.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            _this2.label.string = count.toString();
            _crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName;
          })();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd4d786af589db685137669117e0c042870c491b.js.map