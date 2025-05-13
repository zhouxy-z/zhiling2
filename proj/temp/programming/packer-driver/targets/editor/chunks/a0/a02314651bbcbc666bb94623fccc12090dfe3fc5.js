System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Sprite, SpriteFrame, _decorator, path, CfgMgr, ThingType, ThingTypeName, ResMgr, folder_card, folder_item, folder_money, Utils, AsyncComponent, _dec, _dec2, _class, _crd, ccclass, property, disallowMultiple, requireComponent, BagItem;

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

      _cclegacy._RF.push({}, "331a8C5R8pI579lSkdgHY5W", "BagItem%20copy", undefined);

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
        constructor(...args) {
          super(...args);
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

        async setThing(data) {
          if (!this.hasLoad) await this.loadSub;
          this.thing = data;

          if (this.thing.item) {
            let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(this.thing.item.id);
            this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + stdItem.Quality + "/spriteFrame", SpriteFrame);
            this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame);
            this.label.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).formatNumber(this.thing.item.count);
            this.nameLab.string = stdItem.ItemName;
          } else if (this.thing.card) {
            let stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(this.thing.card.cardId);
            this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + data.card.quality + "/spriteFrame", SpriteFrame);
            this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_card === void 0 ? (_reportPossibleCrUseOffolder_card({
              error: Error()
            }), folder_card) : folder_card, stdCard.CardBody, "spriteFrame"), SpriteFrame);
            this.label.string = stdCard.CardName;
            this.nameLab.string = "";
          }
        }

        async setItem(itemType, itemId, count) {
          if (!this.hasLoad) await this.loadSub;
          let url;

          if (!itemType) {
            this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality1/spriteFrame", SpriteFrame);
            url = path.join(_crd && folder_money === void 0 ? (_reportPossibleCrUseOffolder_money({
              error: Error()
            }), folder_money) : folder_money, "货币0" + itemId, "spriteFrame");
            this.nameLab.string = "";
          } else if (itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
            error: Error()
          }), ThingType) : ThingType).item || itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
            error: Error()
          }), ThingType) : ThingType).equipment || itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
            error: Error()
          }), ThingType) : ThingType).playerexp) {
            let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(itemId);
            this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + std.Quality + "/spriteFrame", SpriteFrame);
            url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, std.Icon, "spriteFrame");
            this.nameLab.string = std.ItemName;
          } else if (itemType == (_crd && ThingType === void 0 ? (_reportPossibleCrUseOfThingType({
            error: Error()
          }), ThingType) : ThingType).battlecard) {
            let deliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetBattleCardDeliver(itemId);
            let stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(deliver.CardID);
            this.bg.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + deliver.CardQuality + "/spriteFrame", SpriteFrame);
            this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_card === void 0 ? (_reportPossibleCrUseOffolder_card({
              error: Error()
            }), folder_card) : folder_card, stdCard.CardBody, "spriteFrame"), SpriteFrame);
            this.label.string = stdCard.CardName;
            this.nameLab.string = "";
          }

          this.icon.spriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
          this.label.string = count.toString();
          _crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName;
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a02314651bbcbc666bb94623fccc12090dfe3fc5.js.map