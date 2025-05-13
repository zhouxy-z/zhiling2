import { Button, Input, Label, Node, Slider, Sprite, SpriteFrame, Toggle, Tween, UITransform, Widget, instantiate, path, size, sp, tween } from "cc";
import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { BagItem } from "../bag/BagItem";
import { SOrderType } from "../player/PlayerStruct";
import { CfgMgr, ItemType, StdMarketCard, StdMarketItem, ThingTypeName } from "../../manager/CfgMgr";
import { Second, Utils } from "../../utils/Utils";
import { PlayerData } from "../player/PlayerData";
import { ResMgr, folder_item } from "../../manager/ResMgr";
import { Tips2 } from "../common/Tips2";
import { Tips } from "../common/Tips";
import { Session } from "../../net/Session";
import { EventMgr, Evt_Item_Change } from "../../manager/EventMgr";
import proto, { Req, Route } from "../../net/Protocol";
import { Card } from "../cards/Card";
import { DateUtils } from "../../utils/DateUtils";
import { TopUI } from "../main/TopUI";


export class TradeCreateOrderPanel extends Panel {
    protected prefab: string = "prefabs/Trade/TradeCreateOrderPanel";

    private page: number;
    private page1: Node;
    private scroller1: AutoScroller;
    private page2: Node;
    private scroller2: AutoScroller;

    private navBtns: Node[];
    private scroller: AutoScroller;
    private itemName: Label;
    private cost_slider: Slider;
    private cost_progress: Node;
    private cost_consumeNum: Label;
    private cost_hasNum: Label;

    private num_slider: Slider;
    private num_consumeNum: Label;
    private num_hasNum: Label;
    private num_progress: Node;

    private description: Label;

    private buyNum: Label;
    private sellNum: Label;
    private cost_num: Label;
    private btnCreate: Button;
    private buyNode: Node;
    private sellNode: Node;
    private num_slider_node: Node;
    private num_left_btn: Node;
    private num_right_btn: Node;
    private orderNode: Node;
    private noneListCont: Node;
    private arry_num: Label;
    private btnLabel: Label;
    private cdTime: Label

    private sortBtn: Node;
    private sortNode: Node;
    private sortNav: Node[];
    private bg: Node;


    private iconNode: Node[] = []

    private Data: proto.base.IThing[];
    private selectData: proto.base.IThing;

    private tradeData: StdMarketItem | StdMarketCard;//交易商品配置
    private cost_count = 0;
    private num_count = 0;
    private type: SOrderType;
    private max_num_count: number;//最大交易数量；
    private touchIndex = 0;
    private touchTime = 0;

    private select_index: number;
    private sort_type = 0
    private data_list: proto.base.IThing[] = [];

    protected onLoad() {
        this.CloseBy("mask");
        this.CloseBy("layout/closeBtn");
        this.bg = this.find("layout/orderNode/bg");
        this.page1 = this.find("layout/page1");
        this.scroller1 = this.page1.getChildByName("ScrollView").getComponent(AutoScroller);
        this.scroller1.SetHandle(this.UpdateBagItem.bind(this));
        this.scroller1.node.on('select', this.SelectItem, this);

        this.page2 = this.find("layout/page2");
        this.scroller2 = this.page2.getChildByName("ScrollView").getComponent(AutoScroller);
        this.scroller2.SetHandle(this.UpdateCardItem.bind(this));
        this.scroller2.node.on('select', this.SelectItem, this);

        this.orderNode = this.find("layout/orderNode");
        this.noneListCont = this.find("layout/noneListCont");
        this.itemName = this.find("layout/orderNode/name", Label);
        this.sellNum = this.find("layout/orderNode/sellNode/sellNum", Label);
        this.cost_num = this.find("layout/orderNode/sellNode/cost_num", Label);
        this.buyNum = this.find("layout/orderNode/buyNode/buyNum", Label);
        this.cost_slider = this.find("layout/orderNode/layout/page1/Slider", Slider);
        this.cost_progress = this.find("layout/orderNode/layout/page1/Slider/progress");
        this.cost_consumeNum = this.find("layout/orderNode/layout/page1/consumeNum", Label);
        this.cost_hasNum = this.find("layout/orderNode/layout/page1/hasNum", Label);
        this.num_slider_node = this.find("layout/orderNode/layout/page2");
        this.num_slider = this.find("layout/orderNode/layout/page2/Slider", Slider);
        this.num_progress = this.find("layout/orderNode/layout/page2/Slider/progress");
        this.num_consumeNum = this.find("layout/orderNode/layout/page2/consumeNum", Label);
        this.num_hasNum = this.find("layout/orderNode/layout/page2/hasNum", Label);
        this.btnCreate = this.find("layout/orderNode/btnCreate", Button);
        this.buyNode = this.find("layout/orderNode/buyNode");
        this.sellNode = this.find("layout/orderNode/sellNode");
        this.arry_num = this.find("layout/orderNode/arryNode/arry_num", Label);
        this.btnLabel = this.find("layout/orderNode/btnCreate/Label", Label);
        this.description = this.find("layout/orderNode/description", Label);
        this.cdTime = this.find("layout/orderNode/time", Label)
        this.sortBtn = this.find("layout/page2/sortBtn")
        this.sortNode = this.find("layout/sortNode")
        this.sortNav = this.find("layout/sortNode/bg/nav").children.concat();
        let icon_1 = this.find("layout/orderNode/sellNode/neddItem");

        let icon_3 = this.find("layout/orderNode/sellNode/neddItem2");
        let icon_4 = this.find("layout/orderNode/buyNode/neddItem");
        this.iconNode.push(icon_1);
        this.iconNode.push(icon_3);
        this.iconNode.push(icon_4);


        this.num_left_btn = this.find("layout/orderNode/layout/page2/left");
        this.num_right_btn = this.find("layout/orderNode/layout/page2/right");
        this.find("layout/orderNode/layout/page1/right").on(Input.EventType.TOUCH_END, this.onAddCost, this);
        this.find("layout/orderNode/layout/page1/left").on(Input.EventType.TOUCH_END, this.onDelCost, this);
        this.find("layout/orderNode/layout/page1/right").on(Input.EventType.TOUCH_CANCEL, this.onAddCost, this);
        this.find("layout/orderNode/layout/page1/left").on(Input.EventType.TOUCH_CANCEL, this.onDelCost, this);
        this.find("layout/orderNode/layout/page1/right").on(Input.EventType.TOUCH_START, () => { this.onTouchStart(1) }, this);
        this.find("layout/orderNode/layout/page1/left").on(Input.EventType.TOUCH_START, () => { this.onTouchStart(2) }, this);
        this.cost_slider.node.on('slide', this.onSlideCost, this);
        this.num_slider.node.on('slide', this.onSlideNum, this);
        this.btnCreate.node.on("click", this.onCreate, this)
        this.navBtns = this.find("layout/nav").children.concat();
        for (let btn of this.navBtns) {
            btn.off('toggle', this.onPage, this);
            btn.on('toggle', this.onPage, this);
        }
        this.sortBtn.on(Input.EventType.TOUCH_END, this.onShowSortNode, this);
        this.sortNode.on(Input.EventType.TOUCH_END, this.onCloseSortNode, this);
        this.sortNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
                node.getComponent(Toggle).isChecked = true;
                this.sort_type = index;
                this.setCardSort();
            }, this)
        })
        EventMgr.on(Evt_Item_Change, this.onItemChange, this);
    }
    async SetPage(page: number) {
        if (!this.$hasLoad) await this.initSub;
        if (!this.navBtns[page]) return;
        this.page = undefined;
        this.navBtns[page].getComponent(Toggle).isChecked = true;
        this.onPage(this.navBtns[page].getComponent(Toggle));
    }
    protected onShow(...args: any[]): void {
        TopUI.Hide();
        this.SetPage(0);
        this.SelectItem(0, null);
    }
    public flush(...args: any[]): void {
        this.type = args[0];
        this.sellNode.active = this.type == SOrderType.SELL;
        this.buyNode.active = this.type == SOrderType.BUY;
        this.btnLabel.string = this.type == SOrderType.SELL ? "上架" : "发布求购"
        this.sortNode.active = false;
    }


    protected onItemChange() {
        if (!this.node.parent) return;
        this.SetPage(this.page);
    }



    protected async onPage(t: Toggle, ...arg: any[]) {
        if (!t.isChecked) return;
        await Second(0)
        let page = this.navBtns.indexOf(t.node);
        if (page < 0 || page == this.page) return;
        this.page = page;
        this.page1.active = false;
        this.page2.active = false;
        this.num_slider_node.active = true;
        let cur_page
        let datas = []
        this.num_left_btn.parent.active = true;
        if (this.type == SOrderType.BUY) {
            this.Data = CfgMgr.GetTradeAllData(this.page);
        } else {
            this.Data = PlayerData.GetResBySubType(page);
        }
        switch (page) {
            case 0: // 道具
            this.bg.getComponent(UITransform).setContentSize(496,234)
                this.Data.forEach((data) => {
                    if (this.type == SOrderType.BUY) {
                        if (CfgMgr.GetTradeData(data)) {
                            let role_data: proto.base.IThing = {
                                type: ThingTypeName.Item,
                                item: data.item,
                            }
                            datas.push(role_data)
                        }
                    } else {
                        if (data.item.count > 0 && CfgMgr.GetTradeData(data)) {
                            let role_data: proto.base.IThing = {
                                type: ThingTypeName.Item,
                                item: data.item,
                            }
                            datas.push(role_data)
                        }
                    }
                });
                this.Data = datas;
                cur_page = this.page1
                this.scroller = this.scroller1;
                break;
            case 1:
                this.bg.getComponent(UITransform).setContentSize(496,186)
                this.num_left_btn.parent.active = false;
                this.Data.forEach((data) => {
                    if (this.type == SOrderType.BUY) {
                        if (CfgMgr.GetTradeData(data)) {
                            let card_data: proto.base.IThing = {
                                type: ThingTypeName.BattleCard,
                                card: data.card,
                            }
                            datas.push(card_data)
                        }
                    } else {
                        if (data.card && CfgMgr.GetTradeData(data)) {
                            let card_data: proto.base.IThing = {
                                type: ThingTypeName.BattleCard,
                                card: data.card,
                            }
                            datas.push(card_data)
                        }
                    }
                });
                this.Data = datas;
                this.data_list = JSON.parse(JSON.stringify(this.Data));//structuredClone(this.Data);
                cur_page = this.page2
                this.scroller = this.scroller2;
                break;
            default:
                this.Data.length = 0;
        }



        if (!this.Data || this.Data.length == 0) {
            this.orderNode.active = false;
            cur_page.active = false;
            this.noneListCont.active = true;
            return;
        } else {
            this.orderNode.active = true;
            cur_page.active = true;
            this.noneListCont.active = false;
        }
        if (this.scroller && this.Data) {
            this.scroller.UpdateDatas(this.Data);
            if (this.Data.length) {
                this.scroller.SelectFirst();
            } else {
                this.SelectItem(0, null);
            }
        }
    }
    /**
     * 选中道具
     * @param index 
     */
    protected async SelectItem(index: number, item: Node) {
        if (!this.$hasLoad) await this.initSub;
        if (!this.Data || !this.Data[index]) return;
        let type = this.Data[index].item ? 1 : 2
        for (let i = 0; i < this.scroller.children.length; i++) {
            const element = this.scroller.children[i];
            if (type == 1) {
                if (index == element["$$index"]) {
                    element.getChildByName("select").active = true;
                    this.select_index = element["$$index"];
                } else {
                    element.getChildByName("select").active = false;
                }
            } else if (type == 2) {
                if (index == element["$$index"]) {
                    element.getComponent(Card).setSelect(true);
                    this.select_index = element["$$index"];
                } else {
                    element.getComponent(Card).setSelect(false);
                }
            }
        }
        let data = this.Data[index];
        this.selectData = data;
        this.max_num_count = 1;
        if (data.item) {
            this.max_num_count = data.item.count;
        }
        this.updateOrderInfo(data)
    }

    private updateOrderInfo(data: proto.base.IThing) {
        Tween.stopAllByTarget(this.cdTime);
        this.cdTime.node.active = false;
        Utils.SetNodeGray(this.btnCreate.node, false)
        if (data.item) {
            let std = CfgMgr.Getitem(data.item.id);
            this.itemName.string = std.ItemName;
            this.description.string = std.Remark
        } else if (data.card) {
            let card = CfgMgr.GetCard(data.card.cardId);
            this.itemName.string = card.CardName;
            this.description.string = card.SkillDesc;
            if (data.card.tradeCd - DateUtils.ServerTime > 0) {
                Utils.SetNodeGray(this.btnCreate.node, true)
                this.cdTime.string = `${DateUtils.FormatTime(data.card.tradeCd - DateUtils.ServerTime)}后可上架`;
                this.cdTime.node.active = true;
                tween(this.cdTime).repeatForever(tween().delay(1).call(() => {
                    if (data.card.tradeCd - DateUtils.ServerTime > 0) {
                        this.cdTime.string = `${DateUtils.FormatTime(data.card.tradeCd - DateUtils.ServerTime)}后可上架`;
                    } else {
                        this.cdTime.node.active = false;
                        Utils.SetNodeGray(this.btnCreate.node, false)
                        Tween.stopAllByTarget(this.cdTime);
                    }
                })).start();
            }
        }

        this.tradeData = CfgMgr.GetTradeData(data);

        for (let index = 0; index < this.iconNode.length; index++) {
            const element = this.iconNode[index];
            ResMgr.LoadResAbSub(path.join(folder_item,  this.tradeData.Currencies[0].toString(), "spriteFrame"), SpriteFrame, res=>{
                element.getComponent(Sprite).spriteFrame = res
            });
        }
        this.setIsCanCreate()
    }

    private setIsCanCreate() {
        if (!this.tradeData) {
            Tips2.Show("缺少配置");
            return;
        }
        let GroupSize = this.tradeData.GroupSize ? this.tradeData.GroupSize : 1
        let GrouplimitMax = this.tradeData.GrouplimitMax ? this.tradeData.GrouplimitMax : 1
        let GrouplimitMin = this.tradeData.GrouplimitMin ? this.tradeData.GrouplimitMin : 1

        let _max_num_count = Math.floor(this.max_num_count / GroupSize)
        this.max_num_count = _max_num_count > GrouplimitMax ? GrouplimitMax : _max_num_count;
        if (this.type == SOrderType.BUY) {
            this.max_num_count = GrouplimitMax;
        }
        this.arry_num.string = GroupSize + "个";
        this.num_hasNum.string = "/" + this.max_num_count;
        this.cost_count = this.getLowestPrice();
        let _highestPrice = this.getHighestPrice();
        this.cost_hasNum.string = "/" + _highestPrice / 10000;
        this.num_count = GrouplimitMin > this.max_num_count ? 0 : GrouplimitMin;
        if (this.max_num_count == 0) {
            Utils.SetNodeGray(this.btnCreate.node, true)
            this.btnCreate.enabled = false
            this.num_slider.enabled = false;
            this.num_left_btn.off(Input.EventType.TOUCH_END, this.onDelNum, this);
            this.num_left_btn.off(Input.EventType.TOUCH_CANCEL, this.onDelNum, this);
            this.num_left_btn.off(Input.EventType.TOUCH_START);
            this.num_right_btn.off(Input.EventType.TOUCH_END, this.onAddNum, this);
            this.num_right_btn.off(Input.EventType.TOUCH_CANCEL, this.onAddNum, this);
            this.num_right_btn.off(Input.EventType.TOUCH_START);
            this.num_slider.progress = 0;
            this.sellNum.string = 0 + "";
            this.cost_num.string = 0 + "";
            return;
        } else {
            Utils.SetNodeGray(this.btnCreate.node, false)
            this.btnCreate.enabled = true
            this.num_slider.enabled = true;
            this.num_left_btn.on(Input.EventType.TOUCH_END, this.onDelNum, this);
            this.num_left_btn.on(Input.EventType.TOUCH_CANCEL, this.onDelNum, this);
            this.num_left_btn.on(Input.EventType.TOUCH_START, () => { this.onTouchStart(4) }, this);
            this.num_right_btn.on(Input.EventType.TOUCH_END, this.onAddNum, this);
            this.num_right_btn.on(Input.EventType.TOUCH_CANCEL, this.onAddNum, this);
            this.num_right_btn.on(Input.EventType.TOUCH_START, () => { this.onTouchStart(3) }, this);
        }
        this.updateCostProgress();
        this.updateNumProgress();

    }

    private onCreate() {
        if (this.type == SOrderType.BUY) {
            let id = this.tradeData.Currencies[0]
            let currency = PlayerData.GetItemCount(id);

            let cfg = CfgMgr.Getitem(id)
            let rate = 1
            if (cfg.Itemtpye == ItemType.money) {
                rate = 10000
            }
            let need_cost = this.cost_count / rate * this.num_count;
            if (currency < need_cost) {
                Tips.Show("货币不足")
                return;
            }
        } else {

            if (this.tradeData.GrouplimitMin && this.num_count < this.tradeData.GrouplimitMin) {
                Tips.Show("数量不可低于" + this.tradeData.GrouplimitMin)
                return;
            }

            if (this.num_count > this.max_num_count) {
                Tips.Show("数量不足")
                return;
            }
        }
        this.callBack();
    }
    private callBack() {
        if (this.page == 0) {
            if (this.type == SOrderType.SELL) {
                let orderData = new Req["market.protocol.makeitemorder"]();
                orderData.orderType = "sell";
                orderData.itemId = this.selectData.item.id;
                orderData.itemGroup = this.num_count;
                orderData.currency = this.tradeData.Currencies[0];
                orderData.price = this.cost_count;
                orderData.totalPrice = null;
                Session.Send(Route["market.protocol.makeitemorder"], orderData);

            } else {
                let orderData = new Req["market.protocol.makeitemorder"]();
                orderData.orderType = "buy";
                orderData.itemId = this.selectData.item.id;
                orderData.itemGroup = this.num_count;
                orderData.currency = this.tradeData.Currencies[0];;
                orderData.price = this.cost_count;
                orderData.totalPrice = null;
                Session.Send(Route["market.protocol.makeitemorder"], orderData)
            }
        } else if (this.page == 1) {
            let _tradeData = this.tradeData as StdMarketCard
            if (this.type == SOrderType.SELL) {
                let orderData = new Req["market.protocol.makecardsellorder"]();
                orderData.cardUnionId = this.selectData.card.id;
                orderData.currency = this.tradeData.Currencies[0];
                orderData.price = this.cost_count;
                Session.Send(Route["market.protocol.makecardsellorder"], orderData);

            } else {
                let orderData = new Req["market.protocol.makecardbuyorder"]();
                orderData.cardId = _tradeData.CardID
                orderData.currency = _tradeData.Currencies[0];;
                orderData.price = this.cost_count;
                orderData.quality = _tradeData.CardQuality
                Session.Send(Route["market.protocol.makecardbuyorder"], orderData)
            }
        }

    }
    private onTouchStart(index: number) {
        this.touchIndex = index;
    }
    private onAddCost(event?) {
        if (!this.tradeData) return;
        this.cost_count += 100;
        let _highestPrice = this.getHighestPrice();
        if (this.cost_count > _highestPrice) {
            this.cost_count = _highestPrice;
        }
        this.updateCostProgress();
        if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
        }
    }
    private onDelCost(event?) {
        if (!this.tradeData) return;
        this.cost_count -= 100;
        let _lowestPrice = this.getLowestPrice();
        if (this.cost_count < _lowestPrice) {
            this.cost_count = _lowestPrice;
        }
        this.updateCostProgress();
        if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
        }
    }
    private onSlideCost(e?: Slider) {
        if (!this.tradeData) return;
        let _highestPrice = this.getHighestPrice();
        this.cost_count = Math.ceil(_highestPrice * (Math.ceil((this.cost_slider.progress * 100)) / 100));

        let _lowestPrice = this.getLowestPrice();
        if (this.cost_count <= _lowestPrice) {
            this.cost_count = _lowestPrice;
        }
        this.touchIndex = 0;
        this.touchTime = 0;
        this.updateCostProgress();
    }
    private onAddNum(event?) {
        if (!this.tradeData) return;
        this.num_count++;
        if (this.num_count > this.max_num_count) {
            this.num_count = this.max_num_count
        }
        this.updateNumProgress();
        if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
        }
    }
    private onDelNum(event?) {
        if (!this.tradeData) return;
        this.num_count--;
        if ((this.num_count < this.tradeData.GrouplimitMin) && (this.tradeData.GrouplimitMin <= this.max_num_count)) {
            this.num_count = this.tradeData.GrouplimitMin;
        }
        if (this.max_num_count < this.tradeData.GrouplimitMin) {
            this.num_count = 0;
        }
        this.updateNumProgress();
        if (event) {
            this.touchIndex = 0;
            this.touchTime = 0;
        }
    }
    private onSlideNum(e?: Slider) {
        if (!this.tradeData) return;
        this.num_count = Math.ceil(this.max_num_count * this.num_slider.progress);
        if ((this.num_count < this.tradeData.GrouplimitMin) && (this.tradeData.GrouplimitMin <= this.max_num_count)) {
            this.num_count = this.tradeData.GrouplimitMin;
        }
        if (this.max_num_count < this.tradeData.GrouplimitMin) {
            this.num_count = 0;
        }
        this.touchIndex = 0;
        this.touchTime = 0;
        this.updateNumProgress();
    }
    private updateCostProgress() {
        this.cost_consumeNum.string = Utils.ToFixed(this.cost_count / 10000, 2);
        let _highestPrice = this.getHighestPrice();
        this.cost_slider.progress = this.cost_count / _highestPrice;
        this.updateCount();
    }
    private updateNumProgress() {
        this.num_consumeNum.string = this.num_count + "";
        let progress_num = this.tradeData.GrouplimitMin;
        if (this.selectData) {
            progress_num = this.num_count / this.max_num_count;
        }
        this.num_slider.progress = progress_num;
        this.updateCount();
    }
    private updateCount() {
        let total_sell = this.cost_count * this.num_count / 10000;
        let server_cost = this.cost_count * this.num_count * this.tradeData.Fees / 10000 / 10000;
        this.sellNum.string = Utils.ToFixed((total_sell - server_cost - this.tradeData.AddFees / 10000), 2);
        this.cost_num.string = Utils.ToFixed(server_cost + this.tradeData.AddFees / 10000, 2);
        this.buyNum.string = Utils.ToFixed(total_sell, 2);
    }

    private UpdateBagItem(item: Node, data: proto.base.IThing, index: number) {
        item.getChildByName("select").active = index == this.select_index;
        let bagItem = item.getComponent(BagItem);
        if (!bagItem) bagItem = item.addComponent(BagItem);
        bagItem.setThing(data);
    }

    private UpdateCardItem(item: Node, data: proto.base.IThing, index: number) {
        let cardItem = item.getComponent(Card);
        if (!cardItem) cardItem = item.addComponent(Card);
        cardItem.setSelect(index == this.select_index)
        cardItem.setCardEffectState(false);
        cardItem.SetData(data.card);
        if (data.card.tradeCd - DateUtils.ServerTime > 0) {
            cardItem.setCardTradeCd(true)
        }
        tween(item).repeatForever(tween().delay(1).call(() => {
            if (data.card.tradeCd - DateUtils.ServerTime <= 0) {
                cardItem.setCardTradeCd(false)
                Tween.stopAllByTarget(item);
            }
        })).start();

    }

    private onShowSortNode() {
        this.sortNode.active = true;
    }

    private onCloseSortNode() {
        this.sortNode.active = false;
    }

    protected update(dt: number): void {
        let size = this.cost_slider.node.getComponent(UITransform).contentSize;
        this.cost_progress.getComponent(UITransform).setContentSize(this.cost_slider.progress * size.width, 12);
        this.num_progress.getComponent(UITransform).setContentSize(this.num_slider.progress * size.width, 12);
        if (this.touchIndex != 0) {
            this.touchTime += dt;
            if (this.touchTime >= 0.5) {
                this.touchTime = 0.47;
                switch (this.touchIndex) {
                    case 1:
                        this.onAddCost()
                        break;
                    case 2:
                        this.onDelCost();
                        break;
                    case 3:
                        this.onAddNum();
                        break;
                    case 4:
                        this.onDelNum();
                        break;
                }
            }
        }
    }

    /**每组最高值 */
    private getHighestPrice() {
        let _highestPrice = 0
        let _tradeData = this.tradeData
        _highestPrice = this.type == 0 ? _tradeData.SellGroupPriceMax : _tradeData.BuyGroupPriceMax;
        return _highestPrice;
    }

    /***每组最低值 */
    private getLowestPrice() {
        let _lowestPrice = 0
        let _tradeData = this.tradeData
        _lowestPrice = this.type == 0 ? _tradeData.SellGroupPriceMin : _tradeData.BuyGroupPriceMin;
        return _lowestPrice;
    }

    protected onHide(...args: any[]) {
        this.scroller = undefined;
        this.Data = undefined;
        TopUI.Show();
    }


    private setCardSort() {

        if (this.sort_type != 0) {
            this.Data = []
            for (const iterator of this.data_list) {
                let car_cfg = CfgMgr.GetCard(iterator.card.cardId)
                if (car_cfg.ProfessionType == this.sort_type) {
                    this.Data.push(iterator)
                }
            }
            this.Data.sort((a: proto.base.IThing, b: proto.base.IThing) => {
                let a_car_cfg = CfgMgr.GetCard(a.card.cardId)
                let b_car_cfg = CfgMgr.GetCard(b.card.cardId)
                if (a_car_cfg.CardRarity == b_car_cfg.CardRarity) {
                    return a_car_cfg.ID - b_car_cfg.ID
                }
                return a_car_cfg.CardRarity - b_car_cfg.CardRarity
            })
        } else {
            this.Data = this.data_list
        }
        this.scroller.UpdateDatas(this.Data);
        if (this.Data.length) {
            this.scroller.SelectFirst();
        } else {
            this.SelectItem(0, null);
        }
    }
}
