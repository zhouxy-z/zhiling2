System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, path, MsgPanel, folder_money, BeforeGameUtils, CfgMgr, ItemType, ThingName, ThingTypeName, PlayerData, ItemUtil, _crd;

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../module/common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_money(extras) {
    _reporterNs.report("folder_money", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeforeGameUtils(extras) {
    _reporterNs.report("BeforeGameUtils", "./BeforeGameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingName(extras) {
    _reporterNs.report("ThingName", "../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../module/player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../net/Protocol", _context.meta, extras);
  }

  _export("ItemUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      path = _cc.path;
    }, function (_unresolved_2) {
      MsgPanel = _unresolved_2.MsgPanel;
    }, function (_unresolved_3) {
      folder_money = _unresolved_3.folder_money;
    }, function (_unresolved_4) {
      BeforeGameUtils = _unresolved_4.BeforeGameUtils;
    }, function (_unresolved_5) {
      CfgMgr = _unresolved_5.CfgMgr;
      ItemType = _unresolved_5.ItemType;
      ThingName = _unresolved_5.ThingName;
      ThingTypeName = _unresolved_5.ThingTypeName;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "005f7Oioy9IbIr4fL28NUHo", "ItemUtils", undefined);

      __checkObsolete__(['Label', 'Sprite', 'js', 'path']);

      _export("ItemUtil", ItemUtil = class ItemUtil {
        /**
         * 通过配置转换SThing列表结构
         * @param itemTypeList 事物类型列表
         * @param itemIdList 事物id列表
         * @param itemNumList 事物数量列表
         */
        static GetSThingList(itemTypeList, itemIdList, itemNumList) {
          let list = [];
          let itemType;
          let itemId;
          let itemNum;
          let data;
          let is_number_str;

          if (typeof itemTypeList[0] == "number") {
            is_number_str = false;
          } else {
            is_number_str = true;
          }

          for (let index = 0; index < itemTypeList.length; index++) {
            itemType = is_number_str ? itemTypeList[index] : this.SthingType[itemTypeList[index]];
            itemId = itemIdList[index];
            itemNum = itemNumList ? itemNumList[index] : (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(itemId);
            data = {};
            data.type = itemType;

            switch (itemType) {
              case (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item:
                data.item = {
                  id: itemId,
                  count: itemNum
                };
                break;

              default:
                break;
            }

            list.push(data);
          }

          return list;
        }
        /**
         * 创建单一事物结构体
         * @param itemType 
         * @param itemNum 
         * @param itemId 
         * @returns 
         */


        static CreateThing(itemType, itemId = 0, itemNum = 0) {
          let _itemType;

          if (typeof itemType == "number") {
            _itemType = [itemType];
          } else {
            _itemType = [itemType];
          }

          let thingList = this.GetSThingList(_itemType, [itemId], [itemNum]);
          return thingList && thingList.length ? thingList[0] : null;
        }
        /**
         * 合并数量
         * @param thing 
         * @param count 
         */


        static MergeThings(thing, count) {
          switch (thing.type) {
            case (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item:
              thing.item.count += count;
              break;
          }
        }
        /**
         * 单一事物结构检测是否拥有足够数量
         * @param itemType 
         * @param itemNum 
         * @param itemId 
         * @returns 
         */


        static CheckItemIsHave(itemType, itemNum, itemId = 0) {
          let _itemType;

          if (typeof itemType == "number") {
            _itemType = [itemType];
          } else {
            _itemType = [itemType];
          }

          return this.CheckThingConsumes(_itemType, [itemId], [itemNum]);
        }
        /**
         * 检测事物消耗是否满足
         * @param itemTypeList 事物类型列表
         * @param itemIdList 事物id列表
         * @param itemNumList 事物数量列表
         * @param isShowTips 事物不足时是否飘字
         * @param isShowGetWay 事物不足时是否显示获取途径
         * @param tipsStr 事物不足提示内容
         */


        static CheckThingConsumes(itemTypeList, itemIdList, itemNumList, isShowTips = false, isShowGetWay = false, tipsStr = "") {
          let itemType;
          let itemId;
          let itemNum;
          let haveNum;
          let itemName;
          let is_number_str;
          let moneyItemNum;

          if (!itemTypeList) {
            let type_list = [];

            for (let index = 0; index < itemIdList.length; index++) {
              type_list.push("item");
            }

            itemTypeList = type_list;
          }

          if (itemTypeList.length > 0 && typeof itemTypeList[0] == "number") {
            is_number_str = false;
          } else {
            is_number_str = true;
          }

          for (let index = 0; index < itemTypeList.length; index++) {
            itemType = is_number_str ? itemTypeList[index] : this.SthingType[itemTypeList[index]];
            itemId = itemIdList[index];
            itemNum = itemNumList[index];
            haveNum = 0;
            itemName = "";

            switch (itemType) {
              case (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item:
                if (!itemId) return;
                let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem(itemId);
                itemName = stdItem ? stdItem.ItemName : itemId.toString();
                haveNum = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).GetItemCount(itemId);

                if (stdItem.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                  error: Error()
                }), ItemType) : ItemType).money) {
                  itemNum = itemNumList[index] / 10000;
                }

                break;

              default:
                break;
            }

            if (haveNum < itemNumList[index]) {
              if (isShowTips) (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show(tipsStr != "" ? tipsStr : `所需${itemName}数量不足${itemNum}个`);

              if (isShowGetWay) {//TODO 打开获取途径
              }

              return false;
            }
          }

          return true;
        }
        /**
         * 货币类型显示单位转换
         */


        static MoneyChange(money) {
          //货币单位为万分比
          return money / 10000;
        }

        static ChangeItem(data) {
          let change_data = {
            item: {
              id: 0,
              count: 0
            }
          };

          if (data.item) {
            let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(data.item.id);
            change_data.item.id = data.item.id;
            change_data.item.count = data.item.count;

            if (cfg.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).money) {
              change_data.item.count = this.MoneyChange(data.item.count);
            }

            return change_data;
          } else {
            return data;
          }
        }

        static FormatCost(icon, lab, type, id, value) {
          let url = "",
              name = 0;

          switch (type) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).money:
              // 货币
              url = path.join(_crd && folder_money === void 0 ? (_reportPossibleCrUseOffolder_money({
                error: Error()
              }), folder_money) : folder_money, id.toString(), "spriteFrame");
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).box: // 宝箱

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).item: // 无特殊类型的道具

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).exp: // 经验道具

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).shard: // 角色碎片

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).speed: // 玩法门票（未生效）旧：加速道具

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).rights: //权益卡

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).shield: // 玩法次数增加类道具 旧：防护罩

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).piece:
              //英雄粉尘（ItemEffect1填对应classid）
              break;
          }
        }

      });

      ItemUtil.SthingType = (_crd && BeforeGameUtils === void 0 ? (_reportPossibleCrUseOfBeforeGameUtils({
        error: Error()
      }), BeforeGameUtils) : BeforeGameUtils).toHashMapObj((_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
        error: Error()
      }), ThingName) : ThingName).item, (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
        error: Error()
      }), ThingTypeName) : ThingTypeName).Item, (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
        error: Error()
      }), ThingName) : ThingName).battlecard, (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
        error: Error()
      }), ThingTypeName) : ThingTypeName).BattleCard);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afe3853fb68bad253e66e35168bd0e71badb9ba5.js.map