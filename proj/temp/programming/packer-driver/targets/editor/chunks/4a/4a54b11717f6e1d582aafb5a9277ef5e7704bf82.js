System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, CfgMgr, PlayerData, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/proto/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSLuckyContent(extras) {
    _reporterNs.report("SLuckyContent", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerData(extras) {
    _reporterNs.report("SPlayerData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerMailData(extras) {
    _reporterNs.report("SPlayerMailData", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSShopContent(extras) {
    _reporterNs.report("SShopContent", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSShopIndexContent(extras) {
    _reporterNs.report("SShopIndexContent", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../player/PlayerStruct", _context.meta, extras);
  }

  _export("PlayerData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9edd6nITNJv4y2RqbldmFt", "PlayerData", undefined);

      __checkObsolete__(['js']);

      _export("PlayerData", PlayerData = class PlayerData {
        // 道具列表
        static get items() {
          return this.player.itemCounts;
        }
        /**
         * 初始玩家数据
         * @param player 
         */


        static Setplayer(player) {
          player.battleCards = player.battleCards || [];
          player.benefitCard = player.benefitCard || {};
          player.itemProductions = player.itemProductions || [];
          player.tasks = player.tasks || {};
          player.itemCounts = player.itemCounts || {};
          this.player = player;
        }
        /**
         * 获取道具id
         * @param id 
         * @returns 
         */


        static GetItem(id) {
          let items = this.items;

          for (const key in items) {
            if (Object.hasOwnProperty.call(items, key)) {
              if (key == id.toString()) {
                return items;
              }
            }
          }

          return null;
        }
        /**
         * 获取道具数量
         * @param id 
         * @returns 
         */


        static GetItemCount(id) {
          let items = this.items;

          for (const key in items) {
            if (Object.hasOwnProperty.call(items, key)) {
              if (key == id.toString()) {
                return items[key];
              }
            }
          }

          return 0;
        }
        /**
        * 根据页签获取道具列表
        * @param subType 
        * @returns 
        */


        static GetitemBySubType(subType) {
          let items = [];

          for (const key in this.items) {
            const element = this.items[key];

            const _id = parseInt(key);

            if (element > 0) {
              let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(_id);

              if (std && std.SubType == subType) {
                let item = {
                  type: "item",
                  item: {
                    id: std.Items,
                    count: element
                  }
                };
                items.push(item);
              }
            }
          }

          return items;
        }
        /**当前页邮件列表 */


        static resetMail() {
          this.mails = [];
          this.mailmap = {};
        }

        static getMailReward(data) {
          let datas = [];

          for (let index = 0; index < data.length; index++) {
            const element = data[index];

            if (!element.resource) {
              datas.push(element);
            }
          }

          return datas;
        }

        /**
         * 设置商店数据
         * @param datas 
         */
        static SetShopData(datas) {
          if (!this.shopMap) this.shopMap = js.createMap();

          for (const shopData of datas) {
            this.shopMap[shopData.shop_index_id] = shopData;
          }
        }
        /**
         * 获取商店数据
         * @param shopId 商店id
         * @returns 
         */


        static GetShopData(shopId) {
          return this.shopMap ? this.shopMap[shopId] : null;
        }
        /**
         * 获取通用商品数据
         * @param shopId 
         * @param shopItemId 
         * @returns 
         */


        static GetCommShopData(shopId) {
          let shopData = this.GetShopData(shopId);
          return shopData ? shopData.shop : null;
        }
        /**
         * 获取抽奖商店数据
         * @param shopId 商店id
         * @returns 
         */


        static GetShopLuckyData(shopId) {
          let shopData = this.GetShopData(shopId);
          return shopData == null ? void 0 : shopData.lucky;
        }

      });

      PlayerData.user = void 0;
      PlayerData.server = void 0;
      PlayerData.player = void 0;
      PlayerData.mails = [];
      PlayerData.mailmap = {};
      PlayerData.mails_log = [];
      PlayerData.shopMap = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a54b11717f6e1d582aafb5a9277ef5e7704bf82.js.map