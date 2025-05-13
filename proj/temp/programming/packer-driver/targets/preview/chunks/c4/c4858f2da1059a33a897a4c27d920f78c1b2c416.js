System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, find, Input, Label, path, Sprite, SpriteFrame, Tween, tween, TweenSystem, UITransform, Widget, ResMgr, folder_item, Session, OrderStateType, SOrderType, PlayerData, CfgMgr, ThingTypeName, Utils, TradeCreateOrderPanel, DateUtils, Req, Route, Card, BagItem, Goto, _dec, _class, _crd, ccclass, property, TradePanelItem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrderStateType(extras) {
    _reporterNs.report("OrderStateType", "../../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOrderType(extras) {
    _reporterNs.report("SOrderType", "../../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradeCreateOrderPanel(extras) {
    _reporterNs.report("TradeCreateOrderPanel", "../TradeCreateOrderPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem", "../../bag/BagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../../DL", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      find = _cc.find;
      Input = _cc.Input;
      Label = _cc.Label;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Tween = _cc.Tween;
      tween = _cc.tween;
      TweenSystem = _cc.TweenSystem;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
      folder_item = _unresolved_2.folder_item;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      OrderStateType = _unresolved_4.OrderStateType;
      SOrderType = _unresolved_4.SOrderType;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
      ThingTypeName = _unresolved_6.ThingTypeName;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      TradeCreateOrderPanel = _unresolved_8.TradeCreateOrderPanel;
    }, function (_unresolved_9) {
      DateUtils = _unresolved_9.DateUtils;
    }, function (_unresolved_10) {
      Req = _unresolved_10.Req;
      Route = _unresolved_10.Route;
    }, function (_unresolved_11) {
      Card = _unresolved_11.Card;
    }, function (_unresolved_12) {
      BagItem = _unresolved_12.BagItem;
    }, function (_unresolved_13) {
      Goto = _unresolved_13.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9236LJTrlHUKXvpitmgjAq", "TradePanelItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'find', 'Input', 'Label', 'Node', 'path', 'Size', 'Sprite', 'SpriteFrame', 'System', 'Tween', 'tween', 'TweenSystem', 'UITransform', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TradePanelItem", TradePanelItem = (_dec = ccclass('TradePanelItem'), _dec(_class = class TradePanelItem extends Component {
        start() {}

        update(deltaTime) {}

        SetData(_data, selectType, select_thing_type) {
          var item = this.node;
          var bagItem = item.getChildByName("BagItem");
          var msgNode = item.getChildByName("msgItem");
          var cardItem = item.getChildByName("Cards");
          var cardBg = item.getChildByName("cardBg");
          var priceBg = find("priceBg", msgNode);
          var layout = find("priceBg/layout", msgNode);
          var name = find("priceBg/Name", msgNode).getComponent(Label);
          var count = find("priceBg/layout/CountLayout/Count", msgNode).getComponent(Label);
          var playerName = find("playerName", msgNode).getComponent(Label);
          var icon = find("icon", msgNode).getComponent(Sprite);
          var time = find("time", msgNode).getComponent(Label);
          var priceicon = find("priceBg/layout/PriceLayout/caizuan", msgNode).getComponent(Sprite);
          var price = find("priceBg/layout/PriceLayout/Price", msgNode).getComponent(Label);
          var btnBuy = item.getChildByName("BtnBuy");
          var btnSell = item.getChildByName("BtnSell");
          btnBuy.off(Input.EventType.TOUCH_END);
          btnSell.off(Input.EventType.TOUCH_END);
          bagItem.active = false;
          cardItem.active = false;
          cardBg.active = false;
          var num = 1;
          var width1 = 500;
          var width2 = 356;
          count.node.parent.active = true;

          if (select_thing_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item) {
            var data = _data;
            if (!data) return;
            bagItem.active = true;
            num = data.quantityRemaining / (data.quantity / data.groupNum); //剩余总数量 / （总数量/总组数） = 剩余组数

            var itemData = {
              type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item,
              item: {
                id: data.itemId,
                count: data.quantityRemaining
              }
            };
            var item_data = bagItem.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            item_data = item_data ? item_data : bagItem.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
              error: Error()
            }), BagItem) : BagItem);
            item_data.setThing(itemData);
            var itemCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(itemData.item.id);
            name.string = itemCfg.ItemName;
            price.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ToFixed(data.price / 10000, 2);
          } else if (select_thing_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).BattleCard) {
            cardItem.active = true;
            cardBg.active = true;
            count.node.parent.active = false;
            var _data2 = _data;
            if (!_data2) return;
            num = _data2.status == (_crd && OrderStateType === void 0 ? (_reportPossibleCrUseOfOrderStateType({
              error: Error()
            }), OrderStateType) : OrderStateType).active ? 1 : 0; //只有激活状态可以购买

            var card_data = cardItem.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            card_data = card_data ? card_data : cardItem.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            card_data.SetData(_data2.card);

            var _itemCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(_data2.card.cardId);

            name.string = _itemCfg.CardName;
            price.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ToFixed(_data2.price / 10000, 2);
            width1 = 340;
            width2 = 320;
          }

          btnBuy.getComponent(UITransform).setContentSize(width1, 58);
          btnBuy.children[0].getComponent(Widget).updateAlignment();
          btnSell.getComponent(UITransform).setContentSize(width1, 58);
          btnSell.children[0].getComponent(Widget).updateAlignment();
          priceBg.getComponent(UITransform).setContentSize(width2, 46);
          priceBg.getComponent(Widget).updateAlignment();
          name.node.getComponent(Widget).updateAlignment();
          layout.setPosition(name.node.position.x, layout.position.y);
          var btnspr = _data.makerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId || num == 0 ? "btn2" : "btn1";
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/trade/" + btnspr + "/spriteFrame", SpriteFrame, res => {
            btnBuy.getComponent(Sprite).spriteFrame = res;
            btnSell.getComponent(Sprite).spriteFrame = res;
          });
          var labelcolorValue = _data.makerId == (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId || num == 0 ? "#000000" : "#ffffff";
          btnBuy.getChildByName("Label").getComponent(Label).color = new Color().fromHEX(labelcolorValue);
          btnSell.getChildByName("Label").getComponent(Label).color = new Color().fromHEX(labelcolorValue);

          if (_data.orderType == "sell") {
            btnBuy.active = true;
            btnSell.active = false;
            btnBuy.on(Input.EventType.TOUCH_END, () => {
              //打开购买页面
              if (_data.makerId != (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).player.playerId && num != 0) {
                console.log(_data);
                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)("BuyPanel", (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
                  error: Error()
                }), SOrderType) : SOrderType).BUY, _data);
              }
            });
          } else {
            btnBuy.active = false;
            btnSell.active = true;
            btnSell.on(Input.EventType.TOUCH_END, () => {
              //打开出售页面
              if (_data.makerId != (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).player.playerId && num != 0) {
                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)("BuyPanel", (_crd && SOrderType === void 0 ? (_reportPossibleCrUseOfSOrderType({
                  error: Error()
                }), SOrderType) : SOrderType).SELL, _data);
              }
            });
          }

          count.string = "" + num;
          var item_icon = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(_data.currency).Icon;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, item_icon, "spriteFrame"), SpriteFrame, res => {
            priceicon.spriteFrame = res;
          });
          ;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/trade", _data.orderType, "spriteFrame"), SpriteFrame, res => {
            icon.spriteFrame = res;
          });
          playerName.string = _data.makerId;
          time.string = "\u5269\u4F59\u65F6\u95F4\uFF1A" + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).FormatTime(_data.expiresAt - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
            error: Error()
          }), DateUtils) : DateUtils).ServerTime);

          if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(item) > 0) {
            Tween.stopAllByTarget(item);
          }

          tween(item).repeatForever(tween().delay(1).call(() => {
            if (_data.expiresAt - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime <= 0) {
              Tween.stopAllByTarget(item);
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub("sheets/trade/btn2/spriteFrame", SpriteFrame, res => {
                btnBuy.getComponent(Sprite).spriteFrame = res;
                btnSell.getComponent(Sprite).spriteFrame = res;
              });
            } else {
              time.string = "\u5269\u4F59\u65F6\u95F4\uFF1A" + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).FormatTime(_data.expiresAt - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime);
            }
          })).start();
        }

        SetOrderData(_data, selectType) {
          var item = this.node;
          var empty = item.getChildByName("empty");
          var bagItem = item.getChildByName("BagItem");
          var cardBg = item.getChildByName("cardBg");
          var cardItem = item.getChildByName("Cards");
          var msgNode = item.getChildByName("msgItem");

          if (_data) {
            empty.active = false;
            bagItem.active = false;
            cardItem.active = false;
            cardBg.active = false;
            msgNode.active = true;
            var order_type;

            if (_data.card) {
              order_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).BattleCard;
              cardBg.active = true;
              cardItem.active = true;
            } else {
              order_type = (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item;
              bagItem.active = true;
            }

            var name = find("name", msgNode).getComponent(Label);
            var count = find("countLayout/count", msgNode).getComponent(Label);
            var time = find("time", msgNode).getComponent(Label);
            var price = find("sellNode/priceLayout/Price", msgNode).getComponent(Label);
            var code = find("code", msgNode).getComponent(Label);
            var copyCodeBtn = find("copyCodeBtn", msgNode);
            var cost = find("costNode/costLayout/cost", msgNode).getComponent(Label);
            var costTitle = find("costNode/costTitle", msgNode);
            var removeBtn = find("removeBtn", msgNode);
            removeBtn.off(Input.EventType.TOUCH_END);
            var data = _data;
            if (!data) return;
            var num = 1;
            var itemData;

            if (order_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
              error: Error()
            }), ThingTypeName) : ThingTypeName).Item) {
              var item_order_data = data;
              num = item_order_data.quantityRemaining / (item_order_data.quantity / item_order_data.groupNum); //剩余总数量 / （总数量/总组数） = 剩余组数

              itemData = {
                type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                  error: Error()
                }), ThingTypeName) : ThingTypeName).Item,
                item: {
                  id: item_order_data.itemId,
                  count: item_order_data.quantity
                }
              };
              var item_data = bagItem.getComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
                error: Error()
              }), BagItem) : BagItem);
              item_data = item_data ? item_data : bagItem.addComponent(_crd && BagItem === void 0 ? (_reportPossibleCrUseOfBagItem({
                error: Error()
              }), BagItem) : BagItem);
              item_data.setThing(itemData);
              var itemCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(itemData.item.id);
              name.string = itemCfg.ItemName;
            } else {
              var card_order_data = data;
              itemData = {
                type: (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                  error: Error()
                }), ThingTypeName) : ThingTypeName).BattleCard,
                card: card_order_data.card
              };
              var card_data = cardItem.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);
              card_data = card_data ? card_data : cardItem.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);
              card_data.SetData(itemData.card);
              var url = path.join("sheets/cardframe/", "card_bg" + itemData.card.quality, "spriteFrame");
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(url, SpriteFrame, res => {
                cardBg.getComponent(Sprite).spriteFrame = res;
              });
              var cardCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(itemData.card.cardId);
              name.string = cardCfg.CardName;
            }

            count.string = "" + num;
            this.setPayItemIcon(_data, msgNode);
            price.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).ToFixed(data.price / 10000, 2);
            removeBtn.on(Input.EventType.TOUCH_END, () => {
              if (order_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).Item) {
                var sessionData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)['market.protocol.cancelitemorder']();
                sessionData.orderId = data.orderId;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)['market.protocol.cancelitemorder'], sessionData);
              } else if (order_type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
                error: Error()
              }), ThingTypeName) : ThingTypeName).BattleCard) {
                var cancelcardData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                  error: Error()
                }), Req) : Req)['market.protocol.cancelcardorder']();
                cancelcardData.orderId = data.orderId;
                (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                  error: Error()
                }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                  error: Error()
                }), Route) : Route)['market.protocol.cancelcardorder'], cancelcardData);
              }
            });
            code.string = "" + _data.orderId;

            if (_data.orderType == "sell") {
              var cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetTradeData(itemData);
              costTitle.getComponent(Label).string = "损耗";
              cost.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).ToFixed(num * data.price / 10000 * cfg.Fees / 10000 + cfg.AddFees / 10000, 2);
            } else {
              costTitle.getComponent(Label).string = "剩余预付";
              cost.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).ToFixed(num * data.price / 10000, 2);
            } // copyCodeBtn.on(Input.EventType.TOUCH_END, () => {
            //     // Goto("TradePanel.ins.SetCopyCode",_data.orderId);
            //     CopyToClip(_data.orderId, (desc: string) => {
            //         if (desc == _data.orderId) {
            //             MsgPanel.Show("已复制到粘贴板");
            //         }
            //     });
            // })


            time.string = "\u8BA2\u5355\u5012\u8BA1\u65F6" + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).FormatTime(data.expiresAt - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
              error: Error()
            }), DateUtils) : DateUtils).ServerTime);

            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(item) > 0) {
              Tween.stopAllByTarget(item);
            }

            tween(item).repeatForever(tween().delay(1).call(() => {
              time.string = "\u8BA2\u5355\u5012\u8BA1\u65F6" + (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).FormatTime(data.expiresAt - (_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime);
            })).start();
          } else {
            empty.active = true;
            bagItem.active = false;
            msgNode.active = false;
            empty.off(Input.EventType.TOUCH_END);
            empty.on(Input.EventType.TOUCH_END, () => {
              console.log("打开订单页面>>>", selectType);
              (_crd && TradeCreateOrderPanel === void 0 ? (_reportPossibleCrUseOfTradeCreateOrderPanel({
                error: Error()
              }), TradeCreateOrderPanel) : TradeCreateOrderPanel).Show(selectType);
            });
          }
        }

        setPayItemIcon(_data, msgNode) {
          return _asyncToGenerator(function* () {
            var item_icon = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Getitem(_data.currency).Icon;
            var spr_icon = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
              error: Error()
            }), folder_item) : folder_item, item_icon, "spriteFrame"), SpriteFrame);
            var icon1 = find("sellNode/priceLayout/caizuan", msgNode).getComponent(Sprite);
            var icon2 = find("costNode/costLayout/caizuan", msgNode).getComponent(Sprite);
            if (icon1) icon1.spriteFrame = spr_icon;
            if (icon2) icon2.spriteFrame = spr_icon;
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4858f2da1059a33a897a4c27d920f78c1b2c416.js.map