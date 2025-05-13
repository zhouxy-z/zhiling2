import { Input, Label, Node, Sprite, SpriteFrame, Toggle, path } from "cc";
import { Panel, UILay } from "../../manager/GameRoot";
import proto, { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { PlayerData } from "../player/PlayerData";
import { CfgMgr } from "../../manager/CfgMgr";
import { ResMgr, cardBack, folder_icon } from "../../manager/ResMgr";
import { CardGroupHead } from "./CardGroupHead";

export class cardGroupSettingTips extends Panel {
    protected prefab: string = "prefabs/cards/cardGroupSettingTips";
    private tile: Label;
    private btn1: Node;
    private btn2: Node;
    private select:Toggle
    private backItem:Node;
    private headItem:CardGroupHead;

    private headData:proto.base.IAvatarInfo
    private cardBackdata:proto.base.CardBackInfo
   

    /**1是头像 2是卡背 */
    private type:number

    protected onLoad(): void {
        this.tile = this.find("tile", Label);
        this.btn1 = this.find("btn1");
        this.btn2 = this.find("btn2");
        this.btn1.on(Input.EventType.TOUCH_END, this.onSet, this);
        this.btn2.on(Input.EventType.TOUCH_END, this.onAllCardGroup, this);
        this.CloseBy("mask");
        this.find("closeBtn").on(Input.EventType.TOUCH_END, this.Hide, this);
        this.select = this.find("select", Toggle)
        this.backItem = this.find("backitem");
        this.headItem = this.find("headitem").addComponent(CardGroupHead);
    }

    protected onShow(): void {

    }
    async flush(type: number, data:proto.base.IAvatarInfo | proto.base.CardBackInfo) {
        this.type = type;
        let msg = ""
        this.headItem.node.active = false;
        this.backItem.active = false;
        let str_name :string = ""
        let cardGroupData = PlayerData.getCardGroupDataById(PlayerData.cur_id)
        if(type == 1){
            msg = "头像设置"
            this.headData = data as proto.base.IAvatarInfo;
            let cfg_head_data = CfgMgr.GetHead(this.headData.avatarId)
            let is_use = cardGroupData.avatarId == this.headData.avatarId;
            this.headItem.SetData(this.headData.avatarId, data.like, is_use)
            str_name = cfg_head_data.name;
            this.headItem.node.active = true;
        }else{
            msg = "卡背设置"
            this.cardBackdata = data as proto.base.CardBackInfo
            this.backItem.getChildByName("favorite").active = data.like;
            this.backItem.getChildByName("use").active = cardGroupData.cardBackId == this.cardBackdata.cardBackId;
            let icon = this.backItem.getChildByName("icon").getComponent(Sprite);
            let cfg_card_back_data = CfgMgr.GetCardBackCfgById(this.cardBackdata.cardBackId)
            ResMgr.LoadResAbSub(path.join(cardBack, cfg_card_back_data.icon, "spriteFrame"), SpriteFrame, res => {
                icon.spriteFrame =  res;
            });
            str_name = cfg_card_back_data.name;
            this.backItem.active = true;
        }
        this.find("namelabel").getComponent(Label).string = str_name
        this.tile.string = msg;
        this.select.isChecked = data.like
    }

    private onSet() {
        let data = PlayerData.getCardGroupDataById(PlayerData.cur_id);
        if(this.type == 1){
            //装备到卡组
            data.avatarId = this.headData.avatarId
            let Change_name = new Req["logic.protocol.setdeckattrs"]();
            Change_name.attrs = data;
            Session.Send(Route["logic.protocol.setdeckattrs"], Change_name)
        }else{
            //装备到卡组
            data.cardBackId = this.cardBackdata.cardBackId
            let Change_name = new Req["logic.protocol.setdeckattrs"]();
            Change_name.attrs = data;
            Session.Send(Route["logic.protocol.setdeckattrs"], Change_name)

        }

        this.Hide();
    }
    private onAllCardGroup() {
        if(this.type == 1){
            //装备到卡组
            for (const iterator of PlayerData.cardNameList) {  
                iterator.avatarId = this.headData.avatarId   
                let Change_name = new Req["logic.protocol.setdeckattrs"]();
                Change_name.attrs = iterator;
                Session.Send(Route["logic.protocol.setdeckattrs"], Change_name)
            }
        }else{
            //装备到卡组
            for (const iterator of PlayerData.cardNameList) {      
                iterator.cardBackId = this.cardBackdata.cardBackId
                let Change_name = new Req["logic.protocol.setdeckattrs"]();
                Change_name.attrs = iterator;
                Session.Send(Route["logic.protocol.setdeckattrs"], Change_name)
            }
        }
        this.Hide();
    }

    private setLike(){
        let is_like = this.select.isChecked
        if(this.type == 1){
            this.headData.like = is_like;     
            //设为最爱
            let setHeadData = new Req["logic.protocol.setavatarinfos"]()
            setHeadData.infos = [this.headData];
            Session.Send(Route["logic.protocol.setavatarinfos"], setHeadData)
            
        }else{
            this.cardBackdata.like = is_like 
            //设为最爱
            let setCardBackData = new Req["logic.protocol.setcardbackinfos"]()
            setCardBackData.infos = [this.cardBackdata];
            Session.Send(Route["logic.protocol.setcardbackinfos"], setCardBackData)
            
        }
    }

    protected onHide(...args: any[]): void {
        this.setLike();
   
    }
}