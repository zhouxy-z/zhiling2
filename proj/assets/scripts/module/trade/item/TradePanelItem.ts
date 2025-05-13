import { _decorator, Color, Component, find, Input, Label, Node, path, Size, Sprite, SpriteFrame, System, Tween, tween, TweenSystem, UITransform, Widget } from 'cc';
import { ResMgr, folder_common, folder_item } from '../../../manager/ResMgr';
import { Session } from '../../../net/Session';
import { OrderStateType, SOrderType } from '../../player/PlayerStruct';
import { PlayerData } from '../../player/PlayerData';
import { BuyPanel } from '../BuyPanel';
import { CfgMgr, ThingTypeName } from '../../../manager/CfgMgr';
import { Utils } from '../../../utils/Utils';
import { TradeCreateOrderPanel } from '../TradeCreateOrderPanel';
import { DateUtils } from '../../../utils/DateUtils';
import proto, { Req, Route } from '../../../net/Protocol';
import { Card } from '../../cards/Card';
import { BagItem } from '../../bag/BagItem';
import { Goto } from '../../../DL';

const { ccclass, property } = _decorator;

@ccclass('TradePanelItem')
export class TradePanelItem extends Component {
    start() {

    }

    update(deltaTime: number) {

    }

    public SetData(_data: proto.base.IMarketItemOrder | proto.base.IMarketCardOrder, selectType: number, select_thing_type:ThingTypeName) {
        let item = this.node;
        let bagItem = item.getChildByName(`BagItem`);
        let msgNode = item.getChildByName(`msgItem`);
        let cardItem = item.getChildByName(`Cards`);
        let cardBg = item.getChildByName(`cardBg`);
        let priceBg = find(`priceBg`, msgNode)
        let layout = find(`priceBg/layout`, msgNode)

        let name = find(`priceBg/Name`, msgNode).getComponent(Label);
        let count = find(`priceBg/layout/CountLayout/Count`, msgNode).getComponent(Label);
        let playerName = find(`playerName`, msgNode).getComponent(Label);
        let icon = find(`icon`, msgNode).getComponent(Sprite);
        let time = find(`time`, msgNode).getComponent(Label);

        let priceicon = find(`priceBg/layout/PriceLayout/caizuan`, msgNode).getComponent(Sprite);
        let price = find(`priceBg/layout/PriceLayout/Price`, msgNode).getComponent(Label);
        let btnBuy = item.getChildByName(`BtnBuy`);
        let btnSell = item.getChildByName(`BtnSell`);
        btnBuy.off(Input.EventType.TOUCH_END);
        btnSell.off(Input.EventType.TOUCH_END);
        bagItem.active = false
        cardItem.active = false;
        cardBg.active = false;
        let num = 1
        let width1 = 500
        let width2 = 356
        count.node.parent.active = true;
        if(select_thing_type == ThingTypeName.Item){   
            let data: proto.base.IMarketItemOrder = _data as proto.base.IMarketItemOrder;
            if (!data) return;
            bagItem.active = true;
            num = data.quantityRemaining / (data.quantity / data.groupNum) //剩余总数量 / （总数量/总组数） = 剩余组数
            let itemData: proto.base.IThing = { type: ThingTypeName.Item, item: { id: data.itemId, count: data.quantityRemaining } };
            let item_data = bagItem.getComponent(BagItem);
            item_data = item_data ? item_data : bagItem.addComponent(BagItem);
            item_data.setThing(itemData);
            let itemCfg = CfgMgr.Getitem(itemData.item.id);
            name.string = itemCfg.ItemName;
            price.string = `${Utils.ToFixed(data.price / 10000, 2)}`;
        }else if(select_thing_type == ThingTypeName.BattleCard){
            cardItem.active = true;
            cardBg.active = true;
            count.node.parent.active = false;
            let data: proto.base.IMarketCardOrder = _data as proto.base.IMarketCardOrder;
            if (!data) return;
            
            num = data.status == OrderStateType.active ? 1 : 0 //只有激活状态可以购买
            let card_data = cardItem.getComponent(Card);
            card_data = card_data ? card_data : cardItem.addComponent(Card);
            card_data.SetData(data.card);    
            let itemCfg = CfgMgr.GetCard(data.card.cardId);
            name.string = itemCfg.CardName;
            price.string = `${Utils.ToFixed(data.price / 10000, 2)}`;
            width1 = 340;
            width2 = 320;
        }
        btnBuy.getComponent(UITransform).setContentSize(width1, 58)
        btnBuy.children[0].getComponent(Widget).updateAlignment();

        btnSell.getComponent(UITransform).setContentSize(width1, 58)
        btnSell.children[0].getComponent(Widget).updateAlignment();

        priceBg.getComponent(UITransform).setContentSize(width2, 46)
        priceBg.getComponent(Widget).updateAlignment();
        name.node.getComponent(Widget).updateAlignment();
        layout.setPosition(name.node.position.x, layout.position.y)
        
        
        let btnspr= (_data.makerId == PlayerData.player.playerId || num == 0) ? "btn2" : "btn1"
        ResMgr.LoadResAbSub("sheets/trade/" + btnspr + "/spriteFrame", SpriteFrame,res=>{
            btnBuy.getComponent(Sprite).spriteFrame = res;
            btnSell.getComponent(Sprite).spriteFrame = res
        } );  
        let labelcolorValue = (_data.makerId == PlayerData.player.playerId || num == 0) ? "#000000" : "#ffffff"
        btnBuy.getChildByName("Label").getComponent(Label).color = (new Color()).fromHEX(labelcolorValue); 
        btnSell.getChildByName("Label").getComponent(Label).color = (new Color()).fromHEX(labelcolorValue); 
        if (_data.orderType == `sell`) {
            btnBuy.active = true;
            btnSell.active = false;
            btnBuy.on(Input.EventType.TOUCH_END, () => {
                //打开购买页面
                if (_data.makerId != PlayerData.player.playerId && num != 0) {
                    console.log(_data)
                    Goto("BuyPanel", SOrderType.BUY, _data);
                }
            })
        } else {
            btnBuy.active = false;
            btnSell.active = true;
            btnSell.on(Input.EventType.TOUCH_END, () => {
                //打开出售页面
                if (_data.makerId != PlayerData.player.playerId && num != 0) {
                    Goto("BuyPanel", SOrderType.SELL, _data);
                }
            })
        }
        count.string = `${num}`;     
        let item_icon =  CfgMgr.Getitem(_data.currency).Icon   
        ResMgr.LoadResAbSub(path.join(folder_item, item_icon, "spriteFrame"), SpriteFrame, res=>{
            priceicon.spriteFrame = res;
        });;
        ResMgr.LoadResAbSub(path.join("sheets/trade", _data.orderType, "spriteFrame"), SpriteFrame, res=>{
            icon.spriteFrame = res
        });
        playerName.string = _data.makerId;
        time.string = `剩余时间：${DateUtils.FormatTime(_data.expiresAt - DateUtils.ServerTime)}`;
        if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(item) > 0) {
            Tween.stopAllByTarget(item);
        }
        tween(item).repeatForever(tween().delay(1).call(() => {
            if(_data.expiresAt - DateUtils.ServerTime <= 0){
                Tween.stopAllByTarget(item);
                ResMgr.LoadResAbSub("sheets/trade/btn2/spriteFrame", SpriteFrame,res=>{
                    btnBuy.getComponent(Sprite).spriteFrame = res;
                    btnSell.getComponent(Sprite).spriteFrame = res
                } ); 
            }else{
                time.string = `剩余时间：${DateUtils.FormatTime(_data.expiresAt - DateUtils.ServerTime)}`;
            }
        })).start();
    }

    public SetOrderData(_data: proto.base.IMarketItemOrder | proto.base.IMarketCardOrder, selectType: number) {
        let item = this.node;
        let empty = item.getChildByName(`empty`);
        let bagItem = item.getChildByName(`BagItem`);
        let cardBg = item.getChildByName(`cardBg`);
        let cardItem = item.getChildByName("Cards");
        let msgNode = item.getChildByName(`msgItem`);
        
        if (_data) {
            empty.active = false;
            bagItem.active = false;
            cardItem.active = false;
            cardBg.active = false
            msgNode.active = true;
            let order_type:ThingTypeName;
            if((_data as proto.base.IMarketCardOrder).card){
                order_type = ThingTypeName.BattleCard
                cardBg.active = true;
                cardItem.active = true;
            }else{
                order_type = ThingTypeName.Item
                bagItem.active = true;
            }

            let name = find(`name`, msgNode).getComponent(Label);
            let count = find(`countLayout/count`, msgNode).getComponent(Label);
            let time = find(`time`, msgNode).getComponent(Label);
            let price = find(`sellNode/priceLayout/Price`, msgNode).getComponent(Label);
            let code = find(`code`, msgNode).getComponent(Label);
            let copyCodeBtn = find(`copyCodeBtn`, msgNode);
            let cost = find(`costNode/costLayout/cost`, msgNode).getComponent(Label);
            let costTitle = find(`costNode/costTitle`, msgNode);
            let removeBtn = find(`removeBtn`, msgNode);
            removeBtn.off(Input.EventType.TOUCH_END);

            let data = _data
            if (!data) return;
            let num = 1;
            let itemData: proto.base.IThing
            if(order_type == ThingTypeName.Item){
                let item_order_data = data as proto.base.IMarketItemOrder
                num = item_order_data.quantityRemaining / (item_order_data.quantity / item_order_data.groupNum) //剩余总数量 / （总数量/总组数） = 剩余组数
                itemData = { type: ThingTypeName.Item, item: { id: item_order_data.itemId, count: item_order_data.quantity } };
                let item_data = bagItem.getComponent(BagItem);
                item_data = item_data ? item_data : bagItem.addComponent(BagItem);
                item_data.setThing(itemData);
                let itemCfg = CfgMgr.Getitem(itemData.item.id);
                name.string = itemCfg.ItemName;
            }else{
                let card_order_data = data as proto.base.IMarketCardOrder
                itemData = { type: ThingTypeName.BattleCard, card: card_order_data.card};
                let card_data = cardItem.getComponent(Card);
                card_data = card_data ? card_data : cardItem.addComponent(Card);
                card_data.SetData(itemData.card);
                let url = path.join("sheets/cardframe/", "card_bg" + itemData.card.quality, "spriteFrame")
                ResMgr.LoadResAbSub(url, SpriteFrame,res=>{
                    cardBg.getComponent(Sprite).spriteFrame = res;
                })
                let cardCfg = CfgMgr.GetCard(itemData.card.cardId);
                name.string = cardCfg.CardName;
            }
           

            count.string = `${num}`;
            this.setPayItemIcon(_data, msgNode)
            price.string = `${Utils.ToFixed(data.price / 10000, 2)}`;
            removeBtn.on(Input.EventType.TOUCH_END, () => {
                if(order_type == ThingTypeName.Item){
                    let sessionData = new Req['market.protocol.cancelitemorder']();
                    sessionData.orderId = data.orderId;
                    Session.Send(Route['market.protocol.cancelitemorder'], sessionData);
                }else if(order_type == ThingTypeName.BattleCard){
                    let cancelcardData = new Req['market.protocol.cancelcardorder']();
                    cancelcardData.orderId = data.orderId;
                    Session.Send(Route['market.protocol.cancelcardorder'], cancelcardData);
                }
            })  
            code.string = `${_data.orderId}`
            if (_data.orderType == `sell`) {
                let cfg = CfgMgr.GetTradeData(itemData)
                costTitle.getComponent(Label).string = "损耗";   
                cost.string = `${Utils.ToFixed(num * data.price / 10000 * cfg.Fees / 10000 + cfg.AddFees / 10000, 2)}`          
            } else {
                costTitle.getComponent(Label).string = "剩余预付"
                cost.string = `${Utils.ToFixed(num * data.price / 10000, 2)}`
            }

            // copyCodeBtn.on(Input.EventType.TOUCH_END, () => {
            //     // Goto("TradePanel.ins.SetCopyCode",_data.orderId);
            //     CopyToClip(_data.orderId, (desc: string) => {
            //         if (desc == _data.orderId) {
            //             MsgPanel.Show("已复制到粘贴板");
            //         }
            //     });
            // })

            time.string = `订单倒计时${DateUtils.FormatTime(data.expiresAt - DateUtils.ServerTime)}`;
            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(item) > 0) {
                Tween.stopAllByTarget(item);
            }
            tween(item).repeatForever(tween().delay(1).call(() => {
                time.string = `订单倒计时${DateUtils.FormatTime(data.expiresAt - DateUtils.ServerTime)}`;
            })).start();
        } else {
            empty.active = true;
            bagItem.active = false;
            msgNode.active = false;
            empty.off(Input.EventType.TOUCH_END);
            empty.on(Input.EventType.TOUCH_END, (() => {
                console.log("打开订单页面>>>", selectType);
                TradeCreateOrderPanel.Show(selectType);
            }))
        }
    }

    private async setPayItemIcon(_data: proto.base.IMarketItemOrder | proto.base.IMarketCardOrder, msgNode: Node) {
        let item_icon =  CfgMgr.Getitem(_data.currency).Icon
        let spr_icon: SpriteFrame = await ResMgr.LoadResAbSub(path.join(folder_item, item_icon, "spriteFrame"), SpriteFrame);
        let icon1 = find(`sellNode/priceLayout/caizuan`, msgNode).getComponent(Sprite);
        let icon2 = find(`costNode/costLayout/caizuan`, msgNode).getComponent(Sprite);
        if (icon1) icon1.spriteFrame = spr_icon;
        if (icon2) icon2.spriteFrame = spr_icon;
    }
}


