import { Button, Component, EditBox, EventTouch, Input, Label, Layout, Node, ScrollView, Sprite, SpriteFrame, Toggle, UITransform, Vec3, Widget, instantiate, js, size, view } from "cc";
import proto, { Req, Ret, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { EventMgr, Evt_Card_Back_Update, Evt_Card_Group_Update, Evt_Card_Head_Update } from "../../manager/EventMgr";
import { PlayerData } from "../player/PlayerData";
import { ResMgr, cardBack, card_quality, folder_card, folder_head, folder_icon } from "../../manager/ResMgr";
import { Goto } from "../../DL";
import { CfgMgr } from "../../manager/CfgMgr";
import { CardGroupHead } from "./CardGroupHead";
import { AutoScroller } from "../../component/AutoScroller";

export class CardsGroupSetting extends Component {

    private back_btn:Node
    private navBtns: Node[];
    private ornamentNode: Node;
    private sortBtn:Button;
    private sortNode: Node;
    private sortNav: Node[];
    private sortNodeBack:Node;

    private filtrateBtn:Button;
    private filtrateNode: Node;
    private filtrateNav: Node[];
    private filtrateNodeBack:Node;

    private btnList: Node[];
    private headScroller: AutoScroller;
    private backScroller: AutoScroller;
    private noneListCont: Node;

    private card_back: Sprite;
    private headitem:CardGroupHead;
    private namelabel:Label;

    private tag1
    private tag2
    private filtrate_type
    private sort_type
    private callback:Function;
    protected $loadSub: Promise<any>;
    protected complete: Function;
    protected hasLoad = false;

    protected onLoad() {
        this.back_btn = this.node.getChildByName("backBtn");
        this.back_btn.on(Input.EventType.TOUCH_END, this.Hide, this);
        this.navBtns = this.node.getChildByName("nav").children.concat();
        for (let btn of this.navBtns) {
            btn.off('toggle', this.onPage, this);
            btn.on('toggle', this.onPage, this);
        }
        this.ornamentNode = this.node.getChildByName("ornamentNode")
        this.btnList = this.node.getChildByPath("ornamentNode/btnList").children.concat();
        for (let btn of this.btnList) {
            btn.off(Button.EventType.CLICK, this.onBtnPage, this);
            btn.on(Button.EventType.CLICK, this.onBtnPage, this);
        }
        this.noneListCont = this.node.getChildByPath("ornamentNode/noneListCont");
        this.headScroller = this.node.getChildByPath("ornamentNode/cardHeadScrollView").getComponent(AutoScroller);
        this.headScroller.SetHandle(this.updateHeadItem.bind(this));
        this.headScroller.node.on('select', this.onSelectHead, this);

        this.backScroller = this.node.getChildByPath("ornamentNode/cardBackScrollView").getComponent(AutoScroller);
        this.backScroller.SetHandle(this.updateCardBackItem.bind(this));
        this.backScroller.node.on('select', this.onSelectHead, this);

        this.card_back = this.node.getChildByPath("ornamentNode/showNode/card_back").getComponent(Sprite);
        this.headitem = this.node.getChildByPath("ornamentNode/showNode/headitem").addComponent(CardGroupHead);
        this.namelabel = this.node.getChildByPath("ornamentNode/showNode/name_bg/namelabel").getComponent(Label);

        this.sortNode = this.node.getChildByPath("ornamentNode/sortNode");
        this.sortNav = this.node.getChildByPath("ornamentNode/sortNode/bg/nav").children.concat();
        this.sortNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
                node.getComponent(Toggle).isChecked = true;
                this.sort_type = index;
                this.setSort();
            }, this)
        })
       
        this.sortBtn = this.node.getChildByPath("ornamentNode/sortBtn").getComponent(Button);
        this.sortBtn.node.on(Button.EventType.CLICK, this.onClick, this)
        this.sortNodeBack = this.node.getChildByPath("ornamentNode/sortNode/back");
        this.sortNodeBack.on(Input.EventType.TOUCH_END, () => {
            this.sortNode.active = false;
            this.sortBtn.node.getChildByName("close").active = true;
            this.sortBtn.node.getChildByName("open").active = false;
        }, this)

        this.filtrateNode = this.node.getChildByPath("ornamentNode/filtrateNode");
        this.filtrateNav = this.node.getChildByPath("ornamentNode/filtrateNode/bg/nav").children.concat();
        this.filtrateNav.forEach((node, index) => {
            node.on(Toggle.EventType.TOGGLE, () => {
                this.filtrate_type = index;
                this.setFiltrate();
            }, this)
        })
        this.filtrateBtn = this.node.getChildByPath("ornamentNode/filtrateBtn").getComponent(Button);
        this.filtrateBtn.node.on(Button.EventType.CLICK, this.onClick, this)
        this.filtrateNodeBack = this.node.getChildByPath("ornamentNode/filtrateNode/back");
        this.filtrateNodeBack.on(Input.EventType.TOUCH_END, () => {
            this.filtrateNode.active = false;
            this.filtrateBtn.node.getChildByName("close").active = true;
            this.filtrateBtn.node.getChildByName("open").active = false;
        }, this)

        EventMgr.on(Evt_Card_Head_Update, this.setHeadList, this)
        EventMgr.on(Evt_Card_Back_Update, this.setBackList, this)
        EventMgr.on(Evt_Card_Group_Update, this.updateScroll, this);

        this.ornamentNode.active = false
        this.hasLoad = true;
    }

    
    protected get loadSub() {
        if (this.$loadSub) return this.$loadSub;
        let thisObj = this;
        this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
        });
        return this.$loadSub;
    }


    async SetPage(page: number, callBack:Function) {
        if (!this.hasLoad) await this.loadSub;
        if (!this.navBtns[page]) return;
        this.callback = callBack;
        this.tag1 = undefined;
        this.navBtns[page].getComponent(Toggle).isChecked = true;
        this.onPage(this.navBtns[page].getComponent(Toggle));
    }

    private onPage(t: Toggle) {
        let page = this.navBtns.indexOf(t.node);
        if (page < 0 || page == this.tag1) return;
        this.tag1 = page;     
        if (page == 0) {
            this.ornamentNode.active = false;
        } else if (page == 1) {
            this.ornamentNode.active = true;
            this.onBtnPage(this.btnList[0].getComponent(Button))
            this.setRightData()
        }
    }

    private onBtnPage(t: Button) {
        let page = this.btnList.indexOf(t.node);
        if (page < 0 || page == this.tag2) return;
        this.tag2 = page;
        this.updatePage();
       
    }

    private updatePage(){
        for (let index = 0; index < this.btnList.length; index++) {
            const element = this.btnList[index];
            let unCheckmark = element.getChildByName("unCheckmark")
            let Checkmark = element.getChildByName("Checkmark")    
            Checkmark.active = index == this.tag2;
            unCheckmark.active = index != this.tag2  
        }     
        this.headScroller.node.active = false;
        this.backScroller.node.active = false;
        if (this.tag2 == 0) {
            Session.Send(Route["logic.protocol.getavatarinfos"])
            this.headScroller.node.active = true;
        } else if (this.tag2 == 1) {
            Session.Send(Route["logic.protocol.getcardbackinfos"]) 
            this.backScroller.node.active = true;
        }
    }


    /**设置头像 */
    private setHeadList(data_list?:{[key:string]:proto.base.IAvatarInfo}) {
        let data = data_list ? data_list : PlayerData.cardHeadList
        let list = []
        for (const key in data) {
            const element = data[key];
            list.push(element);
        }
        this.headScroller.UpdateDatas(list)
    }

    /**设置卡背 */
    private setBackList(data_list?:{[key:string]:proto.base.ICardBackInfo}) {
        let data = data_list ? data_list : PlayerData.cardBackList
        let list = []
        for (const key in data) {
            const element = data[key];
            list.push(element);
        }
        this.backScroller.UpdateDatas(list)
    }

    protected updateHeadItem(item: Node, data: proto.base.IAvatarInfo) {
        let head = item.getComponent(CardGroupHead);
        if(!head) head = item.addComponent(CardGroupHead)
        let is_use = PlayerData.getCardGroupDataById(PlayerData.cur_id).avatarId == data.avatarId
        head.SetData(data.avatarId, data.like, is_use)
    }

    protected updateCardBackItem(item: Node, data: proto.base.ICardBackInfo) {
        let icon = item.getChildByName("icon").getComponent(Sprite);
        let favorite = item.getChildByName("favorite").getComponent(Sprite);
        let use = item.getChildByName("use").getComponent(Sprite);

        let icon_spr = CfgMgr.GetCardBackCfgById(data.cardBackId).icon
        ResMgr.LoadResAbSub(cardBack + icon_spr + "/spriteFrame", SpriteFrame, res=>{
            icon.spriteFrame = res;
        })
        favorite.node.active = data.like;   
        use.node.active = PlayerData.getCardGroupDataById(PlayerData.cur_id).cardBackId == data.cardBackId
    }

    protected onSelectHead(index: number, item: Node, data: proto.base.IAvatarInfo | proto.base.CardBackInfo) {    
       Goto("cardGroupSettingTips", this.tag2 + 1, data)
    }

    private updateScroll(){
        this.updatePage()
        this.setRightData()
    }

    private setRightData(){
        let data:proto.base.IDeckAttrs = PlayerData.getCardGroupDataById(PlayerData.cur_id);

        if(data){
            let icon_spr = CfgMgr.GetCardBackCfgById(data.cardBackId).icon
            ResMgr.LoadResAbSub(cardBack + icon_spr + "/spriteFrame", SpriteFrame, res=>{
                this.card_back.spriteFrame  = res;
            })

            this.namelabel.string = data.name;
            let head_data:proto.base.IAvatarInfo = null;
            for (const key in PlayerData.cardHeadList) {   
                const element = PlayerData.cardHeadList[key];
                if(element.avatarId == data.avatarId){
                    head_data = element;
                    break;
                }
            }
            this.headitem.SetData(data.avatarId, head_data && head_data.like, true)

        }
        

    }

    private setSort(){
        let lsit = this.SortData();
        let data_list = [];
        if(this.tag2 == 0){
            for (let index = 0; index < lsit.length; index++) {
                const element = lsit[index];
                data_list.push(PlayerData.cardHeadList[element])   
            }
            this.headScroller.UpdateDatas(data_list)
        }else{
            for (let index = 0; index < lsit.length; index++) {
                const element = lsit[index];
                data_list.push(PlayerData.cardBackList[element])   
            }
            this.backScroller.UpdateDatas(data_list)
        }
    }

    private SortData(){
        let list = null;
        let data = null;
        if(this.tag2 == 0){
            list = Object.keys(PlayerData.cardHeadList)
            data = PlayerData.cardHeadList
        }else{
            list = Object.keys(PlayerData.cardBackList)
            data = PlayerData.cardBackList
        }

        switch (this.sort_type) {
            case 0:
                //取消排序
                list.sort((a:string,b:string)=>{
                    return parseInt(a) - parseInt(b)
                })
                break;
            case 1:
                //时间最新
                list.sort((a:string,b:string)=>{
                    let a_data = data[a];
                    let b_data = data[b]
                    return b_data.createdAt - a_data.createdAt
                })
                break;
            case 2:
                //时间最旧
                list.sort((a:string,b:string)=>{
                    let a_data = data[a];
                    let b_data = data[b]
                    return a_data.createdAt - b_data.createdAt
                })
                break;
        
            default:
                break;
        }

        return list
    }

    private setFiltrate(){
        let is_select = this.filtrateNav[this.filtrate_type].getComponent(Toggle).isChecked
        if(this.tag2 == 0){
            let data_list:{[key:string]:proto.base.IAvatarInfo} = {}
            let list = Object.keys(PlayerData.cardHeadList)
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if(is_select){
                    if(PlayerData.cardHeadList[element].like){
                        data_list[element] = PlayerData.cardHeadList[element]
                    }
                }else{
                    if(PlayerData.cardHeadList[element]){
                        data_list[element] = PlayerData.cardHeadList[element]
                    }
                }
            }
            this.setHeadList(data_list)
        }else{
            let data_list:{[key:string]:proto.base.ICardBackInfo} = {}
            let list = Object.keys(PlayerData.cardBackList)
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if(is_select){
                    if(PlayerData.cardBackList[element].like){
                        data_list[element] = PlayerData.cardBackList[element]
                    }
                }else{
                    if(PlayerData.cardBackList[element]){
                        data_list[element] = PlayerData.cardBackList[element]
                    }
                }
            }
            this.setBackList(data_list)
        }
    }


    private onClick(btn: Button) {
        let name = btn.node.name
        switch (name) {
            case "filtrateBtn":
                let is_filtrate_open = this.filtrateBtn.node.getChildByName("open").active
                this.filtrateNode.active = !is_filtrate_open;
                this.filtrateBtn.node.getChildByName("close").active = is_filtrate_open;
                this.filtrateBtn.node.getChildByName("open").active = !is_filtrate_open;
                break;
            case "sortBtn":
                let is_sort_open = this.filtrateBtn.node.getChildByName("open").active
                this.sortNode.active = !is_sort_open;
                this.sortBtn.node.getChildByName("close").active = is_sort_open;
                this.sortBtn.node.getChildByName("open").active = !is_sort_open;
                break;
            default:
                break;
        }
    }


    private Hide(){
        if(this.callback){
            this.callback();
            this.callback = null;
        }
        this.ornamentNode.active = false;
        this.node.active = false
    }

  






}