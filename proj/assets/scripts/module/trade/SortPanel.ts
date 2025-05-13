import { EventTouch, Input, Label, Layout, Node, Toggle, instantiate} from "cc";
import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { CardQuality, CfgMgr, StdMarketChoose, ThingTypeName } from "../../manager/CfgMgr";
import { SOrderType, SQuerySortCardType, SQuerySortItemType } from "../player/PlayerStruct";
import { TradePanel } from "./TradePanel";

export class SortPanel extends Panel {
    protected prefab: string = "prefabs/Trade/SortPanel";

    static get ins(): SortPanel { return this.$instance; }
    private sortLayout: Layout;
    private cancelSortBtn: Node;
    private cancelFiltrateBtn: Node;
    private filtrateScroll: AutoScroller;
    private nav: Node[];
    private clone_filtrate_item:Node;
    private clone_sort_item:Node

    private old_sort_type:string;
    private old_searchCardData:{card_rarity:number, quality:number};
   

    private sortItemData = [
        { id: SQuerySortItemType.PriceDow, string: `消耗从高到低` },
        { id: SQuerySortItemType.PriceUp, string: `消耗从低到高` },
        { id: SQuerySortItemType.TotalPriceDown, string: `消耗总数从高到低` },
        { id: SQuerySortItemType.TotalPriceUp, string: `消耗总数从低到高` },
        { id: SQuerySortItemType.CountDown, string: `数量从高到低` },
        { id: SQuerySortItemType.CountUp, string: `数量从低到高` },
    ]

    private sortCardData = [
        { id: SQuerySortCardType.PriceDow, string: `消耗从高到低` },
        { id: SQuerySortCardType.PriceUp, string: `消耗从低到高` },
        { id: SQuerySortCardType.CardRarityDown, string: `稀有度从高到低` },
        { id: SQuerySortCardType.CardRarityUp, string: `稀有度从低到高` },
        { id: SQuerySortCardType.QualityDown, string: `品质从高到低` },
        { id: SQuerySortCardType.QualityUp, string: `品质从低到高` },
    ]




    protected onLoad() {
        this.CloseBy("mask");
        this.CloseBy("panel/closeBtn");
        this.filtrateScroll = this.find(`panel/filtrateScroll`,AutoScroller);
        this.filtrateScroll.SetHandle(this.updateItem.bind(this))
        this.sortLayout = this.find(`panel/sortLayout`,Layout)
        this.cancelFiltrateBtn = this.find(`panel/cancelFiltrateBtn`)
        this.cancelFiltrateBtn.on(Input.EventType.TOUCH_END, this.onRemoveFiltrate, this)
        this.cancelSortBtn = this.find(`panel/cancelSortBtn`)
        this.cancelSortBtn.on(Input.EventType.TOUCH_END, this.onRemoveSort, this)

        this.clone_filtrate_item =  this.find("panel/filtrateScroll/view/content/type_node/item_layout/item");

        this.nav = this.find("panel/nav").children.concat();
        for (let btn of this.nav) {
            btn.off('toggle', this.onPage, this);
            btn.on('toggle', this.onPage, this);
        }
       
    }

    protected onShow(): void {

    }

    async flush(type:ThingTypeName, sort_type:string, searchCardData:{card_rarity:number, quality:number}) {
        this.old_sort_type = sort_type;
        this.old_searchCardData = searchCardData;
        let data;
        this.nav[0].active = false
        if(type == ThingTypeName.Item){       
            data = this.sortItemData;
            this.nav[1].getComponent(Toggle).isChecked = true;
        }else{
            this.sortLayout.node.active = false
            this.nav[0].active = true
            data = this.sortCardData;
            this.initCardSerchData();
            this.nav[0].getComponent(Toggle).isChecked = true;
        }

        let clone_item =  this.sortLayout.node.children[0];
        this.sortLayout.node.removeAllChildren();
        for (const iterator of data) {
            let _item = instantiate(clone_item);
            let filtrat_name = _item.getChildByPath("name").getComponent(Label);
            filtrat_name.string = iterator.string;
            _item["data"] = iterator;
            if(iterator.id == this.old_sort_type){
                let item_toggle =  _item.getComponent(Toggle);
                if(!item_toggle) item_toggle = _item.addComponent(Toggle);
                item_toggle.isChecked = true;
            }
            this.sortLayout.node.addChild(_item) 
        }
    }

    private onPage(t: Toggle){
        let index = t.target.getSiblingIndex();
        this.sortLayout.node.active = false
        this.filtrateScroll.node.active = false;
        this.cancelSortBtn.active = false;
        this.cancelFiltrateBtn.active = false;
        if(index == 0){
            this.filtrateScroll.node.active = true;
            this.cancelFiltrateBtn.active = true;
        }else{
            this.sortLayout.node.active = true;
            this.cancelSortBtn.active = true;
        }
    }

    /**初始化筛选排序数据 */
    private initCardSerchData() {
        let selections: StdMarketChoose[] = CfgMgr.Get("market_choose");
        //获取最大组数
        let type_list = []
        let max_group = 0;
        for (const iterator of selections) {
            if(iterator.Group > max_group){
                max_group = iterator.Group
                let cfg: StdMarketChoose[] = []
                type_list.push(cfg)
            }
        }
        for (const iterator of selections) {
            type_list[iterator.Group - 1].push(iterator)
        }
        this.filtrateScroll.UpdateDatas(type_list)
    }


    private updateItem(item: Node, data:StdMarketChoose[]) {
        let title_name = item.getChildByPath("title_bg/title").getComponent(Label);
        let layout = item.getChildByName("item_layout");       
        title_name.string = data[0].GroupName;
        layout.removeAllChildren();
        for (const iterator of data) {
            let _item = instantiate(this.clone_filtrate_item);
            let filtrat_name = _item.getChildByPath("name").getComponent(Label);
            filtrat_name.string = iterator.TypeName;
            _item.name = iterator.TypeName
            _item["data"] = iterator;

            let is_show = false
            if(iterator.Group == 1){
                if(this.old_searchCardData.card_rarity == iterator.Type){
                    is_show = true;
                }
            } else if(iterator.Group == 2){
                if(this.old_searchCardData.quality == iterator.Type){  
                    is_show = true;
                }
            }

            if(is_show){
                let item_toggle =  _item.getComponent(Toggle);
                if(!item_toggle) item_toggle = _item.addComponent(Toggle);
                item_toggle.isChecked = true;
            }
            
            layout.addChild(_item) 
        } 
    }

    private onRemoveSort(){
        for (let i = 0; i < this.sortLayout.node.children.length; i++) {
            const item_element = this.sortLayout.node.children[i];
            item_element.getComponent(Toggle).isChecked = false;
        }


    }

    private onRemoveFiltrate(){
        let content = this.filtrateScroll.node.getChildByPath("view/content")
        for (let index = 0; index < content.children.length; index++) {
            const element = content.children[index];
            let item_layout = element.getChildByName("item_layout")
            for (let i = 0; i < item_layout.children.length; i++) {
                const item_element = item_layout.children[i];
                item_element.getComponent(Toggle).isChecked = false;
            }   
        }

    }

    protected onHide(...args: any[]): void {
        let select_filtrate_list:StdMarketChoose[] = []
        let content = this.filtrateScroll.node.getChildByPath("view/content")
        let is_new = false
        for (let index = 0; index < content.children.length; index++) {
            const element = content.children[index];
            let item_layout = element.getChildByName("item_layout")
            for (let i = 0; i < item_layout.children.length; i++) {
                const item_element = item_layout.children[i];
                if(item_element.getComponent(Toggle).isChecked){
                    let data:StdMarketChoose = item_element["data"]
                    select_filtrate_list.push(data)
                    //有选择
                    if(data.Group == 1){
                        if(this.old_searchCardData.card_rarity != data.Type){
                            is_new = true;
                            break;
                        }
                    }else if(data.Group == 2){
                        if(this.old_searchCardData.quality != data.Type){
                            is_new = true;
                            break;
                        }
                    }
                }
            }
        }

        //没有选择的
        if(!is_new){
            if(select_filtrate_list.length == 1){
               let  is_select1 = this.old_searchCardData.card_rarity != null && select_filtrate_list[0].Group != 1;
               let is_select2 = this.old_searchCardData.quality != null && select_filtrate_list[0].Group != 2
               is_new = is_select1 || is_select2
            } else if(select_filtrate_list.length == 2){
                let is_select1 = this.old_searchCardData.card_rarity != null && select_filtrate_list[0].Group != 1;
                let is_select2 = this.old_searchCardData.quality != null && select_filtrate_list[0].Group != 2 && select_filtrate_list[1].Group != 2
                is_new = is_select1 || is_select2
            }else{
                is_new = this.old_searchCardData.card_rarity != null || this.old_searchCardData.quality != null
            }
        }


        let select_sort_str:string = null;
        for (let i = 0; i < this.sortLayout.node.children.length; i++) {
            const item_element = this.sortLayout.node.children[i];
            if(item_element.getComponent(Toggle).isChecked){
                select_sort_str = item_element["data"].id
                break;
            }
        }

         //没有选择的
         if(!is_new){
            is_new = select_sort_str != this.old_sort_type
        }

        if(is_new){
            TradePanel.ins.onFiltrateOrSort(select_filtrate_list, select_sort_str)
        }

        console.log(select_filtrate_list, select_sort_str)
     
    }
}