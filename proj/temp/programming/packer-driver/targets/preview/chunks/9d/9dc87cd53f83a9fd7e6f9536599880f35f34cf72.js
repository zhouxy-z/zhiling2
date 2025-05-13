System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SpriteFrame, path, ResMgr, folder_card, folder_item, CfgMgr, CostUtils, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_card(extras) {
    _reporterNs.report("folder_card", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopCommodity(extras) {
    _reporterNs.report("StdShopCommodity", "../manager/CfgMgr", _context.meta, extras);
  }

  _export("CostUtils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      SpriteFrame = _cc.SpriteFrame;
      path = _cc.path;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_card = _unresolved_2.folder_card;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd487L7mEtGq6UO0kOiPvYF", "ThingUtils", undefined);

      __checkObsolete__(['Label', 'Sprite', 'SpriteFrame', 'path']);

      _export("CostUtils", CostUtils = class CostUtils {
        /**
         * 格式化消耗显示
         * @param icon 
         * @param lab 
         * @param thing 
         */
        static FormatCostItem(icon, lab, stdcost) {
          return _asyncToGenerator(function* () {
            var url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(stdcost.CostID[0]).Icon, "spriteFrame");
            icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
            lab.string = stdcost.CostNumber[0].toString();
          })();
        }
        /**
         * 格式化thing图标
         * @param icon 
         * @param thing 
         */


        static FormatIcon(icon, thing) {
          return _asyncToGenerator(function* () {
            // "item": 道具, "equipment": 装备, "battlecard": 卡牌, "playerexp": 玩家经验
            var url = "";

            switch (thing.type) {
              case "item":
                url = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem(thing.item.id).Icon, "spriteFrame");
                break;

              case "equipment":
                url = "sheets/default/_/spriteFrame";
                break;

              case "battlecard":
                url = path.join(_crd && folder_card === void 0 ? (_reportPossibleCrUseOffolder_card({
                  error: Error()
                }), folder_card) : folder_card, (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetCard(thing.card.cardId).CardBody, "spriteFrame");
                break;

              case "playerexp":
                url = "sheets/default/_/spriteFrame";
                break;
            }

            icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9dc87cd53f83a9fd7e6f9536599880f35f34cf72.js.map