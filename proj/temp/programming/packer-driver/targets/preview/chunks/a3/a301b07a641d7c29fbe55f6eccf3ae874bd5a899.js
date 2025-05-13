System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Sprite, SpriteFrame, Toggle, path, Panel, OrderAgainConfirmPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  _export("OrderAgainConfirmPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      path = _cc.path;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d67afH070xAE50WNUV+TC03", "OrderAgainConfirmPanel", undefined);

      __checkObsolete__(['Button', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'path']);

      _export("OrderAgainConfirmPanel", OrderAgainConfirmPanel = class OrderAgainConfirmPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/Trade/OrderAgainConfirmPanel";
          this.item_name = void 0;
          this.tittle = void 0;
          this.item_price = void 0;
          this.item_count = void 0;
          this.str_name = void 0;
          this.all_price = void 0;
          this.toggle = void 0;
          this.Btn = void 0;
          this.item = void 0;
          this.iconNode = [];
          this.cfg = void 0;
          this.callback = void 0;
          this.page = void 0;
          this.num_count = void 0;
          this.cost_count = void 0;
          this.type = void 0;
          this.single = void 0;
          this.num = void 0;
          // private roleTipsLbl:Label
          // private jumpNode:Node
          this.booth_price = void 0;
          this.min_booth_num = 0;
          this.selectData = void 0;
          this.isworldTrade = false;
          //ture代表世界交易所
          this.tradeData = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("spriteFrame/Close");
          this.Btn = this.find("spriteFrame/Btn", Button);
          this.item_name = this.find("spriteFrame/item_name", Label);
          this.tittle = this.find("spriteFrame/numBg/tittle", Label);
          this.item_price = this.find("spriteFrame/MidBg/PriceLayout/item_price", Label);
          this.item_count = this.find("spriteFrame/MidBg/item_count", Label);
          this.str_name = this.find("spriteFrame/MidBg/str_name", Label);
          this.all_price = this.find("spriteFrame/MidBg/allPrice/all_price", Label);
          this.toggle = this.find("spriteFrame/jumpNode/toggle", Toggle);
          this.item = this.find("spriteFrame/MidBg/BagItem");
          this.num = this.find("spriteFrame/MidBg/num", Label); // this.roleTipsLbl = this.find("spriteFrame/roleTipsLbl",Label);
          // this.jumpNode = this.find("spriteFrame/jumpNode");

          this.Btn.node.on("click", this.onBtn, this);
          this.booth_price = this.find("spriteFrame/MidBg/boothPrice/booth_price", Label);
          var icon_1 = this.find("spriteFrame/MidBg/PriceLayout/money_icon");
          var icon_2 = this.find("spriteFrame/MidBg/allPrice/money_icon");
          var icon_3 = this.find("spriteFrame/MidBg/boothPrice/money_icon");
          this.iconNode.push(icon_1);
          this.iconNode.push(icon_2);
          this.iconNode.push(icon_3);
        }

        onShow() {}

        flush(type, data, page, tradeData, is_world_trade) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!data) return;
            _this.isworldTrade = is_world_trade;
            _this.tradeData = tradeData;
            var keepPre = 2;

            if (is_world_trade) {
              //**不同服对应不同的货币 */  
              var cross_bours = tradeData;

              if (cross_bours.PayItemID == ThingItemId.ItemId_202) {
                keepPre = CfgMgr.GetCommon(StdCommonType.Gem).KeepPre;
              }

              var item_cfg = CfgMgr.Getitem(cross_bours.PayItemID);
              var spr = item_cfg.Icon == "caizuan" ? "caizuan_hc" : item_cfg.Icon;

              for (var index = 0; index < _this.iconNode.length; index++) {
                var element = _this.iconNode[index];
                element.getComponent(Sprite).spriteFrame = yield ResMgr.LoadResAbSub(path.join(folder_item, spr, "spriteFrame"), SpriteFrame);
              }
            } else {
              for (var _index = 0; _index < _this.iconNode.length; _index++) {
                var _element = _this.iconNode[_index];
                _element.getComponent(Sprite).spriteFrame = yield ResMgr.LoadResAbSub(path.join(folder_item, "caizuan", "spriteFrame"), SpriteFrame);
              }
            }

            _this.type = type;
            _this.cost_count = data.price;
            _this.num_count = data.num;
            _this.toggle.isChecked = false;
            _this.page = page;
            _this.single = tradeData.Single;
            _this.num.string = data.num * _this.single + ""; // this.callback = callBack;
            // this.roleTipsLbl.node.active = false;
            // this.jumpNode.active = true;

            var name = "";

            if (data.selectData) {
              _this.selectData = data.selectData;

              var bagItem = _this.item.getComponent(BagItem);

              if (!bagItem) bagItem = _this.item.addComponent(BagItem);
              bagItem.setIsShowNum(false);
              bagItem.setIsShowSelect(false);
              bagItem.setIsShowTips(true);

              if (data.selectData.item) {
                var cfg = null;
                cfg = CfgMgr.Getitem(data.selectData.item.id);
                bagItem.SetData(data.selectData);
                _this.cfg = cfg;
              } else if (data.selectData.role) {
                // this.roleTipsLbl.node.active = true;
                // this.jumpNode.active = false;
                _this.cfg = null;
                bagItem.SetData(data.selectData);
              } else if (data.selectData.resource) {
                var id;

                if (data.selectData.resource.rock >= 0) {
                  id = 7;
                  name = "石灵";
                } else if (data.selectData.resource.seed >= 0) {
                  id = 9;
                  name = "源种";
                } else if (data.selectData.resource.water >= 0) {
                  id = 8;
                  name = "水宝";
                } else if (data.selectData.resource.wood >= 0) {
                  id = 6;
                  name = "古木";
                }

                ;

                var _item_cfg = CfgMgr.Getitem(id);

                _this.cfg = _item_cfg;
              }

              bagItem.SetData(data.selectData);
            }

            _this.item_name.string = name;
            _this.tittle.string = type == SOrderType.SELL ? "是否确定上架以下道具" : "是否确定上架道具订单";
            _this.item_price.string = ToFixed(data.price, keepPre);
            _this.item_count.string = data.num + "";
            _this.str_name.string = type == SOrderType.SELL ? "提供价:" : "预消耗:";
            _this.all_price.string = ToFixed(data.price * data.num, keepPre);
            var boot_cost = type == SOrderType.SELL ? CfgMgr.GetCommon(StdCommonType.Bourse).stall : CfgMgr.GetCommon(StdCommonType.Bourse).book;

            var _booth_price = data.price * data.num * boot_cost;

            _this.booth_price.string = _booth_price > 0.01 ? ToFixed(_booth_price, keepPre) : _this.min_booth_num + "";
          })();
        }

        onBtn() {
          this.callBack();
          var time = Date.now();
          var id = PlayerData.roleInfo.player_id;

          if (this.toggle.isChecked) {
            LocalStorage.SetNumber("OrderAgainConfirmPanel" + id, time);
          } else {
            LocalStorage.RemoveItem("OrderAgainConfirmPanel" + id);
          }

          this.Hide();
        }

        callBack() {
          if (this.isworldTrade) {
            if (isFengkong()) {
              RiskPanel.Show();
              var thisObj = this;
              CheckRisk(data => {
                RiskPanel.Hide();
                var is_ios = IOS ? 1 : 2;
                var cross_bours = this.tradeData;
                var orderData = {
                  type: MsgTypeSend.CrossExchangesCreateSellOrder,
                  data: {
                    bourse_id: this.tradeData.Id,
                    group_value: this.cost_count,
                    group_count: this.num_count,
                    authorization: data.authorization,
                    rc_token: data.rc_token,
                    client_os: is_ios // sell_items: { type:cross_bours.PaymentType, id:cross_bours.PaymentID, count:this.num_count },

                  }
                };
                Session.Send(orderData);
              });
            } else {
              var is_ios = IOS ? 1 : 2;
              var orderData = {
                type: MsgTypeSend.CrossExchangesCreateSellOrder,
                data: {
                  bourse_id: this.tradeData.Id,
                  group_value: this.cost_count,
                  group_count: this.num_count,
                  authorization: "",
                  rc_token: "",
                  client_os: is_ios // sell_items: { type:cross_bours.PaymentType, id:cross_bours.PaymentID, count:this.num_count },

                }
              };
              Session.Send(orderData);
            }
          } else {
            var getThing = () => {
              var type = [1, 5, 6, 4];
              var num = type[this.page];
              var value;

              switch (num) {
                case ThingType.ThingTypeItem:
                  value = {
                    type: num,
                    item: {
                      id: this.selectData.item.id,
                      count: this.num_count * this.single
                    }
                  };
                  break;

                case ThingType.ThingTypeRole:
                  value = {
                    type: num,
                    role: {
                      id: this.selectData.role.id,
                      type: this.selectData.role.type,
                      level: this.selectData.role.level,
                      quality: this.selectData.role.quality,
                      experience: this.selectData.role.experience,
                      soldier_num: this.selectData.role.soldier_num,
                      active_skills: this.selectData.role.active_skills ? this.selectData.role.active_skills : [],
                      passive_skills: this.selectData.role.passive_skills ? this.selectData.role.passive_skills : [],
                      is_in_building: this.selectData.role.is_in_building,
                      building_id: this.selectData.role.building_id ? this.selectData.role.building_id : 0,
                      battle_power: this.selectData.role.battle_power ? this.selectData.role.battle_power : 0,
                      skills: this.selectData.role.skills ? this.selectData.role.skills : [],
                      is_assisting: this.selectData.role.is_assisting
                    }
                  };
                  break;

                case ThingType.ThingTypeResource:
                  if (this.selectData.resource.rock >= 0) {
                    value = {
                      type: num,
                      resource: {
                        wood: 0,
                        water: 0,
                        rock: this.num_count * this.single,
                        seed: 0
                      }
                    };
                  } else if (this.selectData.resource.seed >= 0) {
                    value = {
                      type: num,
                      resource: {
                        wood: 0,
                        water: 0,
                        rock: 0,
                        seed: this.num_count * this.single
                      }
                    };
                  } else if (this.selectData.resource.water >= 0) {
                    value = {
                      type: num,
                      resource: {
                        wood: 0,
                        water: this.num_count * this.single,
                        rock: 0,
                        seed: 0
                      }
                    };
                  } else if (this.selectData.resource.wood >= 0) {
                    value = {
                      type: num,
                      resource: {
                        wood: this.num_count * this.single,
                        water: 0,
                        rock: 0,
                        seed: 0
                      }
                    };
                  }

                  break;
              }

              return value;
            };

            if (this.type == SOrderType.SELL) {
              if (isFengkong()) {
                RiskPanel.Show();
                CheckRisk(data => {
                  RiskPanel.Hide();
                  var orderData = {
                    type: MsgTypeSend.ExchangesCreateSellOrder,
                    data: {
                      unit_value: this.cost_count,
                      unit_count: this.num_count,
                      sell_things: {
                        data: [getThing()]
                      },
                      authorization: data.authorization,
                      rc_token: data.rc_token,
                      client_os: IOS ? 1 : 2
                    }
                  };
                  Session.Send(orderData);
                });
              } else {
                var _orderData = {
                  type: MsgTypeSend.ExchangesCreateSellOrder,
                  data: {
                    unit_value: this.cost_count,
                    unit_count: this.num_count,
                    sell_things: {
                      data: [getThing()]
                    },
                    authorization: "",
                    rc_token: "",
                    client_os: IOS ? 1 : 2
                  }
                };
                Session.Send(_orderData);
              }
            } else {
              if (isFengkong()) {
                RiskPanel.Show();
                CheckRisk(data => {
                  RiskPanel.Hide();
                  var orderData = {
                    type: MsgTypeSend.ExchangesCreateBuyOrder,
                    data: {
                      unit_value: this.cost_count,
                      unit_count: this.num_count,
                      request_things: {
                        data: [getThing()]
                      },
                      authorization: data.authorization,
                      rc_token: data.rc_token,
                      client_os: IOS ? 1 : 2
                    }
                  };
                  Session.Send(orderData);
                });
              } else {
                var _orderData2 = {
                  type: MsgTypeSend.ExchangesCreateBuyOrder,
                  data: {
                    unit_value: this.cost_count,
                    unit_count: this.num_count,
                    request_things: {
                      data: [getThing()]
                    },
                    authorization: "",
                    rc_token: "",
                    client_os: IOS ? 1 : 2
                  }
                };
                Session.Send(_orderData2);
              }
            }
          }
        }

        onShowTips() {
          if (this.cfg) {
            ItemTips.Show(this.cfg);
          }
        }

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a301b07a641d7c29fbe55f6eccf3ae874bd5a899.js.map