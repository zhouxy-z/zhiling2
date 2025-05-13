import { Button, Component, EditBox, Input, Label, Layout, Node, RichText, ScrollView, Sprite, SpriteFrame, Toggle, find, js, path} from "cc";
import { Session } from "../../net/Session";
import { AutoScroller } from "../../component/AutoScroller";
import { ResMgr, folder_item } from "../../manager/ResMgr";
import { CfgMgr, ItemGive, ItemType, StdItem, ThingName, ThingTypeName } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import { Tips } from "../common/Tips";
import { BagItem } from "../bag/BagItem";
import { ItemUtil } from "../../utils/ItemUtils";
import proto, { Req, Route } from "../../net/Protocol";
import { EventMgr, Evt_Item_Change } from "../../manager/EventMgr";
import { Utils } from "../../utils/Utils";
import { MsgPanel } from "../common/MsgPanel";


export class MailSendContent extends Component {

    private close: Button;
    protected head: Node;
    protected nameLab: Label;
    protected playerGuide: Label;
    protected EditBox: EditBox;
    protected giftBtn: Node;
    private haveLabel: Label;
    private costLabel: Label;
    private allLabel: Label;
    private surePanel: Node;
    private surePanelLabel: RichText;
    private inputPassword:EditBox;
    private tipsLab: Label;
    private item:Node;
    private item_name: Label
  
    private open_btn: Button;
    private ListScrollView: AutoScroller;
  
    private cost_price_icon: Sprite;
    private all_price_icon: Sprite;
    private sureBtn: Button;
    private closeBtn: Button;

    
    private data:proto.base.IPlayerShowInfo
    
    private select_id:number;
    private cfg_item: ItemGive;
    private reg: RegExp = new RegExp(/^[0-9]*$/); //判断是否是数字。
    private closeCallBack:Function;
    
    private itemData: StdItem;
    private cost_item_cfg:StdItem
    
    //发送给后端的数量
    private sendCount = 0;
    //手续费
    private MailCost = 0;
    //最小手续费
    private minCost = 0;
    //货币比率
    private rate = 1;
    //道具比率
    private item_rate = 1;

    protected $loadSub: Promise<any>;
    protected complete: Function;
    protected hasLoad = false;

    protected get loadSub() {
        if (this.$loadSub) return this.$loadSub;
        let thisObj = this;
        this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
        });
        return this.$loadSub;
    }

    protected onLoad() {
        this.hasLoad = true;
        this.close = this.node.getChildByPath(`titleBg/Close`).getComponent(Button);
        this.head = this.node.getChildByPath(`playerNode/headInfo`);
        this.item = this.node.getChildByName(`item`);
        this.nameLab = this.node.getChildByPath(`playerNode/role_name`).getComponent(Label);
        this.playerGuide = this.node.getChildByPath(`playerNode/playerGuide`).getComponent(Label);
        this.giftBtn = this.node.getChildByName(`giftBtn`);
        this.haveLabel = this.node.getChildByName(`Price`).getComponent(Label);
        this.costLabel = this.node.getChildByPath(`cost/Price`).getComponent(Label);
        this.cost_price_icon = this.node.getChildByPath(`cost/money_icon`).getComponent(Sprite);
        this.item_name = this.node.getChildByName(`item_name`).getComponent(Label);
        this.allLabel = this.node.getChildByPath(`all/Price`).getComponent(Label);
        this.all_price_icon = this.node.getChildByPath(`all/money_icon`).getComponent(Sprite);
        this.EditBox = this.node.getChildByPath(`editboxBg/EditBox`).getComponent(EditBox);   
        this.tipsLab = this.node.getChildByName(`tipsLab`).getComponent(Label);  
        this.ListScrollView = this.node.getChildByPath(`playerNode/Node/ListScrollView`).getComponent(AutoScroller);
        this.ListScrollView.SetHandle(this.updateItem.bind(this));
        this.ListScrollView.node.on('select', this.onSelectItem, this)

        this.surePanel = this.node.getChildByName(`surePanel`)
        this.surePanelLabel = this.node.getChildByPath(`surePanel/spriteFrame/lab`).getComponent(RichText);
        this.inputPassword = this.node.getChildByPath(`surePanel/spriteFrame/inputBg/inputPassword`).getComponent(EditBox);
        this.sureBtn = this.node.getChildByPath(`surePanel/spriteFrame/sureBtn`).getComponent(Button);
        this.closeBtn = this.node.getChildByPath(`surePanel/spriteFrame/closeBtn`).getComponent(Button);
        this.onBntEvent()
    }

    private onBntEvent() {
        this.close.node.on(Button.EventType.CLICK, this.onHide, this);
        this.giftBtn.on(Button.EventType.CLICK, this.onShowSurePanel, this);
        this.sureBtn.node.on(Button.EventType.CLICK, this.onSendGift, this);
        this.closeBtn.node.on(Button.EventType.CLICK, () => { this.surePanel.active = false }, this);
        this.EditBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
        this.EditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onTextChanged, this);
        EventMgr.off(Evt_Item_Change, this.updateItemCount, this)
        EventMgr.on(Evt_Item_Change, this.updateItemCount, this)
    }

    public async onShow(data: proto.base.IPlayerShowInfo, close_back:Function) {
        if (!this.hasLoad) await this.loadSub;
        this.data = data
        this.nameLab.string = data.nickName;
        this.playerGuide.string = "公会：无";
        this.closeCallBack = close_back;
        this.costLabel.string = `${0}`;
        this.allLabel.string = `${0}`;
        this.EditBox.string = ``;
        this.ListScrollView.Clean();
        let list_item_data = PlayerData.GetCanSenditem();
        this.ListScrollView.UpdateDatas(list_item_data)
        this.ListScrollView.SelectFirst();
        this.surePanel.active = false  
    }

    private updateItemCount(){
        let list_item_data = PlayerData.GetCanSenditem();
        this.ListScrollView.UpdateDatas(list_item_data)
        this.updateItemInfo()
    }

    private updateItem(item: Node, data: ItemGive) {
        if(!data) return
        let cfg = CfgMgr.Getitem(data.Items);
        let count = PlayerData.GetItemCount(cfg.Items)
        let bag_item = item.getComponent(BagItem)
        if(!bag_item) bag_item = item.addComponent(BagItem)
        let item_data = ItemUtil.CreateThing(ThingTypeName.Item, cfg.Items, count)
        item["data"] = data;
        bag_item.setThing(item_data)
    }

    private onSelectItem(index: number, item: Node){
        let item_data:ItemGive = item["data"];
        this.select_id = item_data.Items;
        this.cfg_item = item_data;
        this.updateItemInfo();
        this.EditBox.string = "";
    }

    private updateItemInfo(){  
        let item = CfgMgr.Getitem(this.select_id);
        this.cost_item_cfg = CfgMgr.Getitem(this.cfg_item.FeeItemID);
        this.itemData = item;
        this.rate = 1;
        this.tipsLab.string = "最小赠送数量：" + (this.itemData.Itemtpye == ItemType.money ? this.cfg_item.GiveLimitMin / 10000 : this.cfg_item.GiveLimitMin);
        if(this.cost_item_cfg.Itemtpye == ItemType.money && this.itemData.Itemtpye != ItemType.money){
            this.rate = 10000;
        }
        this.MailCost = this.cfg_item.GiveFeeRate / this.cfg_item.GiveFeeBase / this.rate;

        this.item_name.string = item.ItemName
        let item_count = PlayerData.GetItemCount(this.select_id);
        this.haveLabel.string = "已拥有" + item_count; 
       
        this.costLabel.string = this.MailCost + "";
        this.allLabel.string = 0 + "";
        this.EditBox.string = "";
        ResMgr.LoadResAbSub(path.join(folder_item, this.cost_item_cfg.Icon, "spriteFrame"),SpriteFrame,res=>{
            // this.have_price_icon.spriteFrame = res;
            this.all_price_icon.spriteFrame = res;
            this.cost_price_icon.spriteFrame = res;
        })

      
        let bag_item = this.item.getComponent(BagItem)
        if(!bag_item) bag_item = this.item.addComponent(BagItem)
        let item_data = ItemUtil.CreateThing(ThingTypeName.Item, item.Items, 0)
        bag_item.setThing(item_data)

    }


    private onEditEnd() {
        if(this.EditBox.string == "") return;
        this.sendCount = Number(this.EditBox.string);
        let cost = this.sendCount * this.MailCost
        if(this.itemData.Itemtpye == ItemType.money){
            this.sendCount =  this.sendCount * 10000;
            cost = this.sendCount * this.MailCost / 10000
        }
        this.minCost = cost > this.cfg_item.GiveFeeMin / 10000 ? cost : this.cfg_item.GiveFeeMin / 10000
        this.costLabel.string = `${this.MailCost}`;
        this.allLabel.string = `${Utils.ToFixed(this.minCost, 4)}`;
        
    }

    private onTextChanged() {
        // let count = Number(this.keepNumbersAndOneDot(this.EditBox.string));
        // console.log(this.reg.test(this.EditBox.string), this.EditBox.string)
        if(!this.reg.test(this.EditBox.string)){
            MsgPanel.Show("输入有误")
            this.EditBox.string = ""
            return 
        }
        // this.EditBox.string = `${Math.ceil(parseFloat(this.EditBox.string))}`;
    }

    // private keepNumbersAndOneDot(str) {
    //     // 使用正则表达式来提取所有数字和小数点
    //     let result = str.replace(/[^0-9.]/g, '');

    //     // 找到第一个小数点的位置
    //     let firstDotIndex = result.indexOf('.');

    //     // 如果找到了小数点，移除其后的所有小数点
    //     if (firstDotIndex !== -1) {
    //         result = result.substring(0, firstDotIndex + 1) + result.substring(firstDotIndex + 1).replace(/\./g, '');
    //     }

    //     return result;
    // }

    private onShowSurePanel() {
        this.inputPassword.string = "";
        let cost_item_num =  PlayerData.GetItemCount(this.cfg_item.FeeItemID)
        let name = this.itemData.ItemName

        // if(!PlayerData.roleInfo.is_password){
        //     SettingPasswordPanel.Show();
        //     return;
        // }
        let rate = 1
        if(this.itemData.Itemtpye == ItemType.money){
            rate = 10000
        }
        let count = this.sendCount;
        if (!count || count < 1) {
            return Tips.Show(`请输入要赠送的物品数量！`);
        }
        if (count < this.cfg_item.GiveLimitMin) {
            return Tips.Show(`未达最小起赠值，最少赠送${ this.cfg_item.GiveLimitMin / rate}，请检查后重试！`);
        }
        if (count > this.cfg_item.GiveLimitMax) {
            return Tips.Show(`要赠送的超过上限，最多赠送${ this.cfg_item.GiveLimitMax / rate}，请检查后重试！`);
        }
        if(this.minCost > cost_item_num){
            return Tips.Show("手续费不足");
        }

        if(this.cfg_item.FeeItemID == this.cfg_item.Items){
            if (count / rate + this.minCost > cost_item_num) {
                return Tips.Show(name +`不足,请检查后重试！`);
            }
        }else{
            let has_count = PlayerData.GetItemCount(this.cfg_item.Items)
            if(this.cost_item_cfg.Itemtpye == ItemType.money){
                if (count / rate > has_count) {
                    return Tips.Show(name +`不足,请检查后重试！`);
                }
                
            }else{
                if (count > has_count) {
                    return Tips.Show(name +`不足,请检查后重试！`);
                }
            }
        }

        this.surePanel.active = true;
        this.surePanelLabel.string = `将发送<color=#C36316 >${this.EditBox.string}</color>个${name}给玩家<color=#5A74AF>${this.data.nickName}</color>\n是否确认赠送？`;
    }


    private onSendGift() {
        let items_list: { [key: string]: number } = js.createMap();
        let id = this.cfg_item.Items.toString()
        this.sendCount = Number(this.EditBox.string);
        if(this.itemData.Itemtpye == ItemType.money){
            this.sendCount = Number(this.EditBox.string) * 10000;
        }
        items_list[id] =  this.sendCount
        let data = new Req["logic.protocol.sendgivemail"]();
        data.items = items_list
        data.receiverId = this.data.playerId;
        Session.Send(Route["logic.protocol.sendgivemail"], data)

    }


    private onHide(...args: any[]): void {
        // EventMgr.off(Evt_SendMail, this.Hide, this);
        if(this.closeCallBack){
            this.closeCallBack();
            this.closeCallBack = null;
        }
    }

}
