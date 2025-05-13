import { Component, Input, Label, Node, ScrollView, Toggle, UITransform } from "cc";
import { AutoScroller } from "../../component/AutoScroller";
import { Session } from "../../net/Session";
import LocalStorage from "../../utils/LocalStorage";
import { DateUtils } from "../../utils/DateUtils";
import { SPlayerMailData } from "../player/PlayerStruct";
import { PlayerData } from "../player/PlayerData";
import { Utils } from "../../utils/Utils";
import proto, { Req, Route } from "../../net/Protocol";
import { BagItem } from "../bag/BagItem";
import { ItemUtil } from "../../utils/ItemUtils";
import { Card } from "../cards/Card";
import { Goto } from "../../DL";
import { Tips } from "../common/Tips";
export class MailContent extends Component {

    protected title: Label;
    protected time: Label;
    protected desc: Label;
    protected scroller: AutoScroller;
    protected getBtn: Node;
    private delBtn:Node;
    private empty:Node;
    private geted:Node;


    protected mailInfo: SPlayerMailData;
    private time_differ:number;
    private deleteTime:number;
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
        this.title = this.node.getChildByName("title").getComponent(Label);
        this.time = this.node.getChildByName("time").getComponent(Label);
        this.desc = this.node.getChildByPath("ScrollViewLab/view/content/desc").getComponent(Label);
        this.scroller = this.node.getChildByName("ScrollView").getComponent(AutoScroller);
        this.scroller.SetHandle(this.UpdateBagItem.bind(this));
        this.empty = this.node.getChildByName("empty");
        this.getBtn = this.node.getChildByName("getBtn");
        this.delBtn = this.node.getChildByName("delBtn")
        this.delBtn.on(Input.EventType.TOUCH_END, this.onDel, this);
        this.getBtn.on(Input.EventType.TOUCH_END, this.onGet, this);

        this.geted = this.node.getChildByName("geted")
    }

    /**获取附件 */
    protected onGet() {
        let data = new Req["mail.protocol.claimmailattachment"]();
        data.mailId = this.mailInfo.id;
        Session.Send(Route["mail.protocol.claimmailattachment"], data);
    }

    /**删除邮件 */
    protected onDel() {
        if (!this.mailInfo.isAttachmentClaimed) {
           Tips.Show("请先提取附件");
        } else {
            let time = LocalStorage.GetNumber("MailDeletePanel" + PlayerData.player.playerId)
            if (time) {
                let isopen = DateUtils.isSameDay(time)
                if (isopen) {
                    this.onDelMail();
                    return;
                }
            }
            Goto("MailDeletePanel",this.onDelMail.bind(this));
        }
    }

    private onDelMail() {
        let data = new Req["mail.protocol.deletemails"]();
        data.mailIds = [this.mailInfo.id]
        Session.Send(Route["mail.protocol.deletemails"], data);
        // this.Hide();
    }

    /**
     * 更新背包道具item
     * @param item 
     * @param data 
     */
    private UpdateBagItem(itemNode: Node, data: proto.base.IThing) {

        let item = itemNode.getChildByName("item");
        let card = itemNode.getChildByName("Cards");
        item.active = false;
        card.active = false;
        if(data.card){
            card.active = true;
            let card_item = card.getComponent(Card)
            if(!card_item) card_item = card.addComponent(Card)
            card_item.SetData(data.card)
            card_item.setCardMask(false)

        }else{
            item.active = true;
            let bag_item = item.getComponent(BagItem)
            if(!bag_item) bag_item = item.addComponent(BagItem)
             let item_data:proto.base.IThing = ItemUtil.ChangeItem(data);
             bag_item.setThing(item_data)
             item.getChildByName("mask").active = false;
             this.scheduleOnce(() => {
                 item.getComponent(Toggle).enabled = false;
             })
        }
    }

    public async flush(data: SPlayerMailData) {
        if (!this.hasLoad) await this.loadSub;
        this.empty.active = false;
        if(!data){
            this.empty.active = true;
            return;
        }
        this.mailInfo = data;
        this.title.string = data.title.length > 10 ? data.title.slice(0, 10) + "..." :  data.title
        this.time.string = `收件时间：${Utils.formatDate(data.time * 1000, 'yyyy-MM-dd hh:mm:ss')}`;
        this.desc.string = data.content;
        if (data.attachments && data.attachments.length) {
            let reward_data = PlayerData.getMailReward(data.attachments);
            this.scroller.UpdateDatas(reward_data);
            if (data.isAttachmentClaimed) {
                this.getBtn.active = false;
                this.delBtn.active = true;
                this.geted.active = true;
                this.scroller.node.getChildByPath("view/content").children.forEach((node)=>{              
                    node.getChildByPath("Cards/cardMask").active = true;
                    node.getChildByPath("item/mask").active = true;           
                })
            } else {
                this.getBtn.active = true;
                this.delBtn.active = false;  
                this.geted.active = false;
            }
        } else {
            this.scroller.UpdateDatas([]);
            this.getBtn.active = false;
            this.delBtn.active = true;
            this.geted.active = false;   
        }
    }

}
