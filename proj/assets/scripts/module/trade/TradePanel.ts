import { Button, EditBox, EventTouch, Input, Label, Layout, Node, ScrollView, Sprite, SpriteFrame, Toggle, UITransform, Widget, instantiate, js} from "cc";
import { Session } from "../../net/Session";
import { TradePanelItem } from "./item/TradePanelItem";
import { EventMgr, Evt_Hide_Scene, Evt_Show_Scene } from "../../manager/EventMgr";
import { MsgPanel } from "../common/MsgPanel";
import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { PlayerData } from "../player/PlayerData";
import { CfgMgr, ItemType, StdMarketCard, StdMarketChoose, StdMarketItem, ThingTypeName } from "../../manager/CfgMgr";
import { SOrderType} from "../player/PlayerStruct";
import proto, { Req, Route } from "../../net/Protocol";
import { ResMgr } from "../../manager/ResMgr";
import { Goto } from "../../DL";


/*功能页面类型  buy兑换大厅， sell求购大厅， order 上架管理*/
export enum GroupType {
    Buy = 0,
    Sell = 1,
    Order = 2
}

export class TradePanel extends Panel {
    protected prefab: string = "prefabs/Trade/TradePanel";

    static get ins(): TradePanel { return this.$instance; }
    private tradeBanner: Sprite;
    private localNode: Node;
    private toggleOrder: Node = null;
    private btnSort: Node = null;
    private scrollItem: ScrollView = null;
    private scrollOrder: AutoScroller = null;
    private toggleGroup: Node = null;
  
    private selectType: SOrderType = SOrderType.BUY;
    /**selectGroup 代表不同的功能页0交易大厅，1求购大厅，2上架管理 */
    private selectGroup: number = 0;
    private pageLabel: Label = null;
    private left: Node = null;
    private right: Node = null;
    private heleBtn: Node;
    private noneListCont: Node;
  
    private orderAdd:Node

    private combox_item_bg: Node;
    private content: Node;
    private combox_item1: Node;
    private combox_item2: Node;
    private item_3: Node;
    private serch: Node = null;

    private pageSize = 20;
    private curPage = 1;
    private maxPage = 1;

    private start_id = "";

    private select_thing_type:ThingTypeName;
    private clone_item:Node;

    /**能否切换道具（道具有刷新时间限制3是） */
    private is_can_change: boolean = true;
    private time = 0;
    /**卡牌排序类型 */
    private sortType:string = "";
    /**道具卡牌分组类型 */
    private groupType:number;
    /**选择的道具或卡牌id */
    private select_id:number;
    /**卡牌筛选的参数 */
    private searchCardData:{card_rarity:number, quality:number};
    /**订单最大数量 */
    private max_order_num = 20;
    /**自己的订单数量 */
    private my_order_num = 0;

    protected onLoad() {
        this.CloseBy("closeBtn");

        this.tradeBanner = this.find("tradeBanner", Sprite)
        this.noneListCont = this.find("noneListCont")
        this.localNode = this.find(`Main/localNode`);
        this.toggleOrder = this.find(`Main/localNode/ToggleOrder`);
        this.btnSort = this.find(`Main/btnSort`);
        this.scrollItem = this.find(`Main/ScrollView`, ScrollView);
        this.scrollOrder = this.find(`Main/ScrollViewOrder`, AutoScroller);
        this.toggleGroup = this.find(`Main/ToggleGroup`);
        this.pageLabel = this.find(`Main/pageBg/Label`, Label);
        this.left = this.find(`Main/pageBg/left`);
        this.right = this.find(`Main/pageBg/right`);
        this.heleBtn = this.find("Bg/heleBtn");
        this.clone_item = this.find("Main/ScrollView/view/content/item");

        this.combox_item_bg = this.find("combox_item/combox_item_bg");
        this.content = this.find("combox_item/combox_item_bg/ScrollView/view/content");
        this.combox_item1 = this.find("combox_item/combox_item1");
        this.combox_item2 = this.find("combox_item/combox_item2");
        this.item_3 = this.find("combox_item/item_3");
        this.serch = this.find(`Main/serch`);

        this.orderAdd = this.find("Main/orderAdd")
        this.onBtnEvent();
    }

    private onBtnEvent() {
        this.serch.getChildByName(`EditBox`).on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this)
        this.btnSort.on(Input.EventType.TOUCH_END, ()=>{Goto("SortPanel", this.select_thing_type, this.sortType, this.searchCardData)}, this)
        //功能单选
        this.toggleGroup.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
                node.getComponent(Toggle).isChecked = true;
                this.onSetScrollGroupData(index);
            })
        })
        //订单单选
        this.toggleOrder.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
                node.getComponent(Toggle).isChecked = true;
                this.onSetScrollItemData(index);
            })
        })
        this.left.on(Input.EventType.TOUCH_END, () => {
            if (this.curPage > 1) {
                this.curPage--;
                this.start_id = PlayerData.startId[this.curPage - 1];
                this.SendSortOrSerch()
            } else {
                MsgPanel.Show("已是第一页")
            }
        })
        this.right.on(Input.EventType.TOUCH_END, () => {
            if (this.curPage < this.maxPage) {
                this.curPage++;
                this.start_id = PlayerData.startId[this.curPage - 1];
                this.SendSortOrSerch()
            } else {
                MsgPanel.Show("已是最后一页")
            }
        })
        this.orderAdd.on(Input.EventType.TOUCH_END, this.AddOrder, this);
        this.scrollOrder.SetHandle(this.updateOrderItem.bind(this));
    }

    protected onShow(): void {
        EventMgr.emit(Evt_Hide_Scene, js.getClassName(this));
    }

    flush(...args: any[]) {  
        this.selectType = 0;
        this.initSortListData();
        this.onEditBegan();
        this.reset();
    }
    

    /**重置UI和数据 */
    public reset() {
        this.scrollItem.content.removeAllChildren();
        this.scrollOrder.UpdateDatas([]);
        this.onSetScrollGroupData(0)
    }

    /**
     * 页面 交易大厅", "求购大厅", "上架管理 页签切换
     * @param index 
     */
    private onSetScrollGroupData(index) {
        this.pageLabel.string = `1/1`;
        this.curPage = 1;
        this.maxPage = 1;
        PlayerData.startId = [""];
        this.start_id = "";
        this.noneListCont.active = false;
        this.selectGroup = index;
        this.selectType = index != GroupType.Order ? index : 0;
        this.btnSort.active = this.selectGroup != GroupType.Order
        this.combox_item_bg.active = this.selectGroup != GroupType.Order;
        this.serch.active = this.selectGroup != GroupType.Order;
        this.left.parent.active = this.selectGroup != GroupType.Order;
        this.localNode.active = this.selectGroup == GroupType.Order;
        this.orderAdd.active = this.selectGroup == GroupType.Order;
        ResMgr.LoadResAbSub("sheets/bg/trade_banner_" + index + "/spriteFrame", SpriteFrame, res=>{
            this.tradeBanner.spriteFrame = res;
        })
        this.select_thing_type = ThingTypeName.Item
        this.select_id = null;
        this.groupType = null;
        this.removeFiltrateOrSort();
        this.setScrollView();
        this.SendSortOrSerch();
    }

    /**设置当前展示的列表以及页签状态 */
    private setScrollView() {
        if (this.selectGroup == 2) {//订单页面
            this.scrollOrder.node.active = true;
            this.scrollItem.node.active = false;

            this.toggleOrder.children.forEach((node, index) => {
                if (index == this.selectType) {
                    node.getComponent(Toggle).isChecked = true;
                }
            })
        } else {//求购购买页面
            this.scrollOrder.node.active = false;
            this.scrollItem.node.active = true;
        }
        this.toggleGroup.children.forEach((node, i) => {
            if (i == this.selectGroup) {
                node.getComponent(Toggle).isChecked = true;
            }
        })
    }

    /**筛选排序 */
    public SendSortOrSerch() {       
        if (this.selectGroup == GroupType.Order) {
            this.SendOrderType();
        } else {
            this.SendBuyOrSellType();
        }
    }

    /**查询自己的卖或买的订单 */
    public SendOrderType() {
        let orderType =  this.selectType == 0 ? "sell" : "buy";
    
        let item_data = new Req["market.protocol.getmakeritemorders"]();
        item_data.orderType = orderType;
        item_data.itemId = null;
        item_data.itemType = null;
        item_data.limit = this.max_order_num;
        item_data.playerId = PlayerData.player.playerId;
        item_data.status = "active";
        item_data.start = "";
        Session.Send(Route["market.protocol.getmakeritemorders"], item_data)

        let card_data = new Req["market.protocol.getcardorders"]();
        card_data.orderType = orderType;
        card_data.playerDig = 0
        card_data.limit = this.max_order_num;
        card_data.playerId = PlayerData.player.playerId;
        card_data.status = "active";
        card_data.start = "";
        Session.Send(Route["market.protocol.getcardorders"], card_data)
    }

    /**查询所有的买或卖以及筛选订单 */
    public SendBuyOrSellType(searchCardData?:{card_rarity:number, quality:number}) {
        if(this.select_thing_type == ThingTypeName.Item){
            let orderType =  this.selectType == 0 ? "sell" : "buy";
            let data = new Req["market.protocol.searchitemorders"]();
            data.orderType = orderType;
            data.itemId = this.select_id;
            data.itemType = this.groupType;
            data.limit = this.pageSize;
            data.sort = this.sortType;
            data.start = this.start_id;
            Session.Send(Route["market.protocol.searchitemorders"], data)
        }else if(this.select_thing_type == ThingTypeName.BattleCard){
            let card_rarity = null;
            let quality = null;
            if(searchCardData){
                card_rarity = searchCardData.card_rarity;
                quality = searchCardData.quality;
            }
            let orderType =  this.selectType == 0 ? "sell" : "buy";
            let data = new Req["market.protocol.searchcardorders"]();
            data.orderType = orderType;
            data.cardId = this.select_id;
            data.group = this.groupType;
            data.cardRarity = card_rarity;
            data.quality = quality;
            data.limit = this.pageSize;
            data.sort = this.sortType;
            data.start = this.start_id;
            Session.Send(Route["market.protocol.searchcardorders"], data)
        }
    }

    /** 在上架管理中代表订单种类 （头顶小页签）*/
    private onSetScrollItemData(index) {
        this.selectType = index;
        this.SendSortOrSerch()
    }

    protected onHide(...args: any[]): void {
        EventMgr.emit(Evt_Show_Scene, js.getClassByName(this));
    }

    /**刷新数据 */
    onGetViewData() {
        //计算当前页是否是最后一页
        if (PlayerData.total) {
            this.maxPage = Math.ceil(PlayerData.total / this.pageSize);
        }
        this.pageLabel.string = `${this.curPage}/${this.maxPage || 1}`;
        let datas = [];
        datas = this.select_thing_type == ThingTypeName.Item ? PlayerData.tradeViewData : PlayerData.tradeCardViewData 
        this.noneListCont.active = false;
        this.scrollItem.node.active = true;
        if (!datas || datas.length == 0) {
            this.noneListCont.active = true;
            this.scrollItem.node.active = false
            return;
        }

        let item_num = this.scrollItem.content.children.length
        if(datas.length > item_num){
            this.updateConten(datas)
            let no_num = datas.length - item_num
            for (let index = 0; index < no_num; index++) {
                let item = instantiate(this.clone_item);
                this.updateItem(item, datas[item_num + index])
                this.scrollItem.content.addChild(item)
            }
        } else if(datas.length < item_num){
            let delet_item_list = this.scrollItem.content.children.slice(datas.length - 1, item_num-1)
            for (let index = 0; index < delet_item_list.length; index++) {
                const element = delet_item_list[index];
                this.scrollItem.content.removeChild(element)
            }
            this.updateConten(datas)
        }else{
            this.updateConten(datas)
        }
        this.scrollItem.scrollToLeft();
    }

    private updateConten(datas){
        this.scrollItem.content.children.forEach((item, index)=>{
            this.updateItem(item, datas[index])
        })
    }
    
    /**刷新自己的订单数据 */
    updateMyOrderData() {
        let my_order_list:(proto.base.IMarketItemOrder | proto.base.IMarketCardOrder)[] = []
        my_order_list = my_order_list.concat(...PlayerData.tradeCardViewData)
        my_order_list = my_order_list.concat(...PlayerData.tradeViewData)
        this.my_order_num = my_order_list.length;
        let icon = this.selectType == 0 ? "sellOrderBtn" : "buyOrderBtn";
        ResMgr.LoadResAbSub("sheets/trade/" + icon + "/spriteFrame", SpriteFrame, res=>{
            this.orderAdd.getComponent(Sprite).spriteFrame = res
        })
        this.scrollOrder.UpdateDatas(my_order_list);
        this.scrollOrder.ScrollToHead();
    }

    /**
     * 交易道具角色item
     * @param item 
     * @param data 
     */
    private updateItem(item: Node, data: proto.base.IMarketItemOrder, index?: number) {
        let itemScropt = item.getComponent(TradePanelItem);
        itemScropt = itemScropt ? itemScropt : item.addComponent(TradePanelItem);
        itemScropt.SetData(data, this.selectType, this.select_thing_type);
    }

    /**
     * 订单道具角色item
     * @param item 
     * @param data 
     */
    private updateOrderItem(item: Node, data: proto.base.IMarketItemOrder) {
        let itemScropt = item.getComponent(TradePanelItem);
        itemScropt = itemScropt ? itemScropt : item.addComponent(TradePanelItem);
        itemScropt.SetOrderData(data, this.selectType);
    }

    private AddOrder(){
        if(this.my_order_num >= this.max_order_num){
            MsgPanel.Show("已到达上架上限")
        }
        Goto("TradeCreateOrderPanel", this.selectType);
    }

    //-------------------------------------物品查询筛选相关----------------------

    //初始化筛选列表数据
    private initSortListData() {
        //获取商品种类
        this.content.removeAllChildren();
        let all_tag_name = ["道具", "卡牌"];
        let all_tag_data = []
        for (let index = 0; index < all_tag_name.length; index++) {
            let bourseData: StdMarketItem[] | StdMarketCard[] = CfgMgr.GetTradeAllCfgData(index);
            let data = {
                tag: index,
                tagData: bourseData,
                tagName: all_tag_name[index]
            }
            all_tag_data.push(data);
            let item = instantiate(this.combox_item1);
            item.name = "item" + index;
            item.setPosition(0, 0);
            item["bourseData"] = bourseData;
            item["type"] = index;
            item.getChildByPath("layout/input/frame/label").getComponent(Label).string = all_tag_name[index];
            item.getChildByPath("layout/input/frame_select/label").getComponent(Label).string = all_tag_name[index];
            let icon1 = "sheets/trade/icon_" + index + "_1" + "/spriteFrame";
            let icon2 = "sheets/trade/icon_" + index + "_2" + "/spriteFrame";
            ResMgr.LoadResAbSub(icon1, SpriteFrame, res=>{
                item.getChildByPath("layout/input/frame/icon").getComponent(Sprite).spriteFrame = res;
            })
            ResMgr.LoadResAbSub(icon2, SpriteFrame, res=>{
                item.getChildByPath("layout/input/frame_select/icon").getComponent(Sprite).spriteFrame = res;
            })
            item.off(Button.EventType.CLICK, this.openOneTag.bind(this), this)
            item.on(Button.EventType.CLICK, this.openOneTag.bind(this), this)
            this.content.addChild(item);
        }
        let first = this.content.children[0].getComponent(Button)
        this.openOneTag(first)
    }

    //打开1级列表
    private openOneTag(e: Button) {
        let item: Node = e.target;
        this.closeGroupList(item);
        let content = item.getChildByPath("layout/content")
        let type = item["type"]
        this.select_id = null;
        this.groupType = null;
        if(type == 0){
            //道具
            this.select_thing_type = ThingTypeName.Item;
            this.removeFiltrateOrSort()
            this.SendSortOrSerch();
        }else if(type == 1){
            //卡牌
            this.select_thing_type = ThingTypeName.BattleCard;
            this.removeFiltrateOrSort()
            this.SendSortOrSerch();
        }
        if (content.children.length > 0) {
            content.removeAllChildren();
            item.children.forEach(element => {
                element.getComponent(Layout).updateLayout(true);
            })
            item.getChildByPath("layout/input/frame").active = true;
            item.getChildByPath("layout/input/frame_select").active = false;
            return
        }
        content.removeAllChildren();

        let bourseData = item["bourseData"];
        //根据物品的类别细分到不同的组
        let group_id = [];
        let group_list_data = [];

        //一级页签下未分组的物品 加到最后
        let no_group_list_data = []
     
        for (let index = 0; index < bourseData.length; index++) {
            const element = bourseData[index];
            if (group_id.length > 0) {
                if (element.Group != 0) {
                    let i = group_id.indexOf(element.Group);
                    if (i == -1) {
                        group_id.push(element.Group)
                        group_list_data.push([])
                        group_list_data[group_id.length - 1].push(element)
                    } else {
                        group_list_data[i].push(element)
                    }
                } else {
                    no_group_list_data.push(element)
                }
            } else {
                if (element.Group != 0) {
                    group_id.push(element.Group)
                    group_list_data.push([])
                    group_list_data[group_id.length - 1].push(element)
                } else {
                    no_group_list_data.push(element)
                }
            }
        }
       
        if (no_group_list_data.length > 0) {
            group_list_data.push(no_group_list_data)
        }
     

        for (let index = 0; index < group_list_data.length; index++) {
            const element = group_list_data[index];
            if (element[0].Group == 0) {
                for (let index = 0; index < element.length; index++) {
                    const item3 = element[index];
                    let tag_item3 = instantiate(this.item_3);
                    tag_item3.name = "item3" + index;
                    tag_item3.setPosition(0, 0);
                    tag_item3["bourseData3"] = item3;
                    tag_item3["type"] = type;
                    tag_item3.getChildByName("item_name").getComponent(Label).string = item3.Name;
                    tag_item3.getChildByPath("item_select/item_name").getComponent(Label).string = item3.Name;
                    tag_item3.off(Button.EventType.CLICK, this.setectItemName.bind(this), this);
                    tag_item3.on(Button.EventType.CLICK, this.setectItemName.bind(this), this);
                    content.addChild(tag_item3);
                }
            } else {
                let tag_item2 = instantiate(this.combox_item2);
                tag_item2.name = "item2" + index;
                tag_item2.setPosition(0, 0);
                tag_item2["bourseData2"] = element;
                tag_item2["type"] = type;
                tag_item2.getChildByPath("layout/input/frame/label").getComponent(Label).string = element[0].GroupName;
                tag_item2.getChildByPath("layout/input/frame_select/label").getComponent(Label).string = element[0].GroupName;
                let callBack = (item) => {
                    console.log(this.is_can_change)
                    if (!this.is_can_change) {
                        return MsgPanel.Show("点击过快");
                    }
                    this.openTwoTag(item);
                }
                tag_item2.off(Button.EventType.CLICK, callBack, this);
                tag_item2.on(Button.EventType.CLICK, callBack, this);
                content.addChild(tag_item2);
            }
        }
        item.children.forEach(element => {
            element.getComponent(Layout).updateLayout(true);
        });
    }

    //打开2级列表
    private openTwoTag(e: Button) {
        let item = e.target;
        this.closeGroupList(item, 2);
        let content = item.getChildByPath("layout/content")
        let bourseData = item["bourseData2"];
        let type = item["type"]
        this.select_id = null;
        this.groupType = bourseData[0].Group
        if(type == 0){
            //道具
            this.select_thing_type = ThingTypeName.Item;
            this.removeFiltrateOrSort()
            this.SendBuyOrSellType();
        }else if(type == 1){
            //卡牌
            this.select_thing_type = ThingTypeName.BattleCard;
            this.removeFiltrateOrSort()
            this.SendBuyOrSellType();
            console.log("卡牌")
        }
        
        if (content.children.length > 0) {
            content.removeAllChildren();
            item.children.forEach(element => {
                element.getComponent(Layout).updateLayout(true);
            })
            item.getChildByPath("layout/input/frame").active = true;
            item.getChildByPath("layout/input/frame_select").active = false;
            return
        }
        content.removeAllChildren();
        for (let index = 0; index < bourseData.length; index++) {
            const element = bourseData[index];
            let tag_item3 = instantiate(this.item_3);
            tag_item3.setPosition(0, 0);
            tag_item3["bourseData3"] = element;
            tag_item3["type"] = type;
            tag_item3.getChildByName("item_name").getComponent(Label).string = element.Name;
            tag_item3.getChildByPath("item_select/item_name").getComponent(Label).string = element.Name;
            let callBack = (item) => {
                console.log(this.is_can_change)
                if (!this.is_can_change) {
                    return MsgPanel.Show("点击过快");
                }
                this.setectItemName(item);
            }
            tag_item3.off(Input.EventType.TOUCH_END, callBack, this);
            tag_item3.on(Input.EventType.TOUCH_END, callBack, this);
            content.addChild(tag_item3);
        }
        console.log(content.children, content.children.length)
        item.children.forEach(element => {
            element.getComponent(Layout).updateLayout(true);
        });
    }

    /**选中某个物品 */
    private setectItemName(e: Button) {
        let item = e.target;
        item.parent.parent.getChildByPath("input/frame_select").active = false;
        item.parent.parent.getChildByPath("input/frame").active = true;
        let content = item.parent.children;
        for (let index = 0; index < content.length; index++) {
            const element = content[index];
            let _combox_item2 = element.getChildByPath("layout/input/frame_select");
            if (_combox_item2) {
                element.getChildByPath("layout/input/frame_select").active = false;
                element.getChildByPath("layout/input/frame").active = true;
                this.closeTag(element)
            } else {
                element.getChildByName("item_select").active = false;
            }
        }

        let cur_combox_item2 = item.getChildByPath("layout/input/frame_select");
        if (cur_combox_item2) {
            item.getChildByPath("layout/input/frame_select").active = true;
        } else {
            item.getChildByName("item_select").active = true;
        }
        let type = item["type"]
        if(type == 0){
            //道具
            let bourseData: StdMarketItem = item["bourseData3"];
    
            //筛选道具
            this.groupType = bourseData.Group;
            this.select_id = bourseData.ItemId;
            this.removeFiltrateOrSort()
            this.SendBuyOrSellType()
        }else if(type == 1){
            //卡牌
            let bourseData: StdMarketCard = item["bourseData3"];
            this.groupType = null;
            this.select_id = bourseData.CardID;
            console.log("卡牌", bourseData)
            this.removeFiltrateOrSort()
            this.SendBuyOrSellType()
        }
       
    }

    //收起列表
    private closeTag(node) {
        let item: Node = node;
        let content = item.getChildByPath("layout/content")
        content.removeAllChildren();
    }

    /**关闭同组下的其它列表 */
    private closeGroupList(item: Node, tag?: number) {
        if (tag == 2) {
            //该组的上级标签置灰
            item.parent.parent.getChildByPath("input/frame_select").active = false;
            item.parent.parent.getChildByPath("input/frame").active = true;
        }
        //关闭同组下的其它列表
        let item_content = item.parent.children
        for (let index = 0; index < item_content.length; index++) {
            const element = item_content[index];
            let _combox_item2 = element.getChildByPath("layout/input/frame_select");
            if (_combox_item2) {
                element.getChildByPath("layout/input/frame_select").active = false;
                element.getChildByPath("layout/input/frame").active = true;
                if (element.name != item.name) {
                    this.closeTag(element)
                }
            } else {
                element.getChildByName("item_select").active = false;
            }
        }
        //点亮当前标签页
        let cur_combox_item = item.getChildByPath("layout/input/frame_select");
        if (cur_combox_item) {
            item.getChildByPath("layout/input/frame").active = false;
            item.getChildByPath("layout/input/frame_select").active = true;
        } else {
            item.getChildByName("item_select").active = true;
        }
    }

    private onEditBegan() {
        //编辑时文本会发生偏移在输入时刷新一次对齐
        this.serch.children.forEach((node) => {
            if (node.getComponent(Widget)) {
                node.getComponent(Widget).updateAlignment();
            }
        })
    }

    /**搜索栏事件 */
    private onEditEnd() {
        if (this.serch.getComponentInChildren(EditBox).string) {   
            let str = this.serch.getComponentInChildren(EditBox).string;
            let item_cfg: StdMarketItem[] = CfgMgr.Get("market_item")
            for (const iterator of item_cfg) {
                if (iterator.Name == str) {
                    this.groupType = null;  
                    this.select_id = iterator.ItemId  
                    this.select_thing_type = ThingTypeName.Item;            
                    this.SendBuyOrSellType()              
                    this.serch.getComponentInChildren(EditBox).string = ``;
                    return;
                }
            }

            let card_cfg: StdMarketCard[] = CfgMgr.Get("market_card")
            for (const iterator of card_cfg) {
                if (iterator.Name == str) {
                    this.groupType = null;  
                    this.select_id = iterator.CardID  
                    this.select_thing_type = ThingTypeName.BattleCard;            
                    this.SendBuyOrSellType()              
                    this.serch.getComponentInChildren(EditBox).string = ``;
                    return;
                }
            }
        }
    }

    /**筛选排序条件 */
    public onFiltrateOrSort(filtrat_data:StdMarketChoose[], sort_type){    
        this.sortType = sort_type;
        let card_rarity = null;
        let quality = null;
        for (let index = 0; index < filtrat_data.length; index++) {
            const element = filtrat_data[index];
            if(element.Group == 1){
                card_rarity = element.Type;
            }else if(element.Group == 2){
                quality = element.Type;
            }
        }
        this.searchCardData = { card_rarity:card_rarity, quality:quality}
        this.SendBuyOrSellType(this.searchCardData)
    }

    private removeFiltrateOrSort(){
        this.searchCardData = {card_rarity:null, quality:null}
        this.sortType = "";
    }

    protected update(dt: number): void {
        if (!this.is_can_change) {
            this.time += dt;
            if (this.time >= 2) {
                this.is_can_change = true;
                this.time = 0;
            }
        }
    }

}