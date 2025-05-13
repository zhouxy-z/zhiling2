import { Goto } from "../../DL";
import { CfgMgr, ThingTypeName } from "../../manager/CfgMgr";
import { EventMgr, Evt_Add_Card_Group_update, Evt_Card_Back_Update, Evt_Card_Check_By_Name, Evt_Card_Group_Update, Evt_Card_Head_Update, Evt_Main_Panel_Card_Group_Update, Evt_Set_Battle_Card_Group_Update } from "../../manager/EventMgr";
import proto, { Req, Ret, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { MsgPanel } from "../common/MsgPanel";
import { RewardTips } from "../common/RewardTips";
import { PlayerData } from "../player/PlayerData";

export class CardsMode {
    constructor() {
        Session.on(Route["logic.protocol.adddeck"], this.adddeck, this);
        Session.on(Route["logic.protocol.setdeckcards"], this.SetCardsGroup, this);
        Session.on(Route["logic.protocol.getplayerdecks"], this.getPlayerdecks, this)
        Session.on(Route["logic.protocol.setdeckattrs"], this.setdeckattrs, this)
        Session.on(Route["logic.protocol.getdeckcards"], this.getdeckcards, this)
        Session.on(Route["logic.protocol.setdeckdefault"], this.setdeckdefault, this);
        Session.on(Route.PlayerDefaultDeckPush, this.DefaultDeckPush, this)
        Session.on(Route["logic.protocol.deletedeck"], this.deletedeck, this);
        

        Session.on(Route["logic.protocol.getavatarinfos"], this.getavatarinfos, this);
        Session.on(Route["logic.protocol.setavatarinfos"], this.setavatarinfos, this);

        Session.on(Route["logic.protocol.getcardbackinfos"], this.getcardbackinfos, this);
        Session.on(Route["logic.protocol.setcardbackinfos"], this.setcardbackinfos, this);

        Session.on(Route.PlayerNewAvatarPush, this.NewAvatarPush, this)
        Session.on(Route.PlayerNewCardBackPush, this.NewCardBackPush, this)

        Session.on(Route["logic.protocol.noobcardsclaim"], this.noobcardsclaim, this);

    }

    /**添加空卡组 */
    private adddeck(data: any) {
        let setData = Ret["logic.protocol.adddeck"].decode(data);
        console.log(setData)
        if (setData.res.code == 200) {
            PlayerData.cur_id = setData.attrs.id
            PlayerData.cardNameList.push(setData.attrs)
            EventMgr.emit(Evt_Add_Card_Group_update)
        } else {
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(setData.res.code));
        }
    }

    /**修改卡组 */
    private SetCardsGroup(data: any) {
        let setData = Ret["logic.protocol.setdeckcards"].decode(data);
        this.onSetHasCardGroupAttrs(setData);
    }

    /**设置卡组中卡牌的数量为空时的修改返回 */
    private setdeckattrs(data: any) {
        let setData = Ret["logic.protocol.setdeckattrs"].decode(data);
        this.onSetHasCardGroupAttrs(setData);
    }


    private onSetHasCardGroupAttrs(setData) {
        if (setData.res.code == 200) {
            console.log("修改卡组成功", setData);
            // Session.Send(Protocol.getplayerdecks)
            MsgPanel.Show("修改成功");
            let index = PlayerData.cardNameList.findIndex(item => { return item.id == setData.attrs.id })
            if (index != -1) {
                PlayerData.cardNameList[index] = setData.attrs;
            } else {
                PlayerData.cardNameList.push(setData.attrs)
            }
            EventMgr.emit(Evt_Card_Group_Update);
        } else {
             MsgPanel.Show(CfgMgr.GetErrorCfgByCode(setData.res.code));
        }
    }


    /**查询卡组名字 */
    private getPlayerdecks(data: any) {
        let name_data_list = Ret["logic.protocol.getplayerdecks"].decode(data);
        console.log("getPlayerdecks", name_data_list);
        PlayerData.cardNameList = name_data_list.decks;
        EventMgr.emit(Evt_Main_Panel_Card_Group_Update)
    }



    /**查询卡组卡牌数据 */
    private getdeckcards(data: any) {
        let card_data = Ret["logic.protocol.getdeckcards"].decode(data);
        console.log("getdeckcards", card_data);
        EventMgr.emit(Evt_Card_Check_By_Name, card_data.cards)
    }

    /**设置默认 */
    private setdeckdefault(data: any) {
        let set_default = Ret["logic.protocol.setdeckdefault"].decode(data);
        console.log("setdeckdefault", set_default);
        if (set_default.res.code == 200) {
            for (let index = 0; index < PlayerData.cardNameList.length; index++) {
                let cardData = PlayerData.cardNameList[index];
                if (cardData.id == set_default.attrs.id) {
                    cardData.isDefault = set_default.attrs.isDefault;
                    MsgPanel.Show("设置出战成功");
                } else {
                    cardData.isDefault = false;
                }
            }
            
            EventMgr.emit(Evt_Set_Battle_Card_Group_Update);
        } else {
             MsgPanel.Show(CfgMgr.GetErrorCfgByCode(set_default.res.code));
        }

    }


    /**设置默认 */
    private DefaultDeckPush(data: any) {
        let set_default = Ret.PlayerDefaultDeckPush.decode(data);
        console.log("DefaultDeckPush", set_default);
    }

    /**删除卡组 */
    private deletedeck(data: any) {
        let delete_data = Ret["logic.protocol.deletedeck"].decode(data);
        console.log("删除卡组", delete_data);
        if (delete_data.res.code == 200) {
            let index = PlayerData.cardNameList.findIndex(item => { return item.id == delete_data.deckId })
            if (index != -1) {
                PlayerData.cardNameList.splice(index, 1);
            }
            let isReset: boolean = false;
            for (let index = 0; index < PlayerData.cardNameList.length; index++) {
                let cardData = PlayerData.cardNameList[index];
                if (cardData == delete_data.deckId) {
                    PlayerData.cardNameList.splice(index, 1);
                    isReset = cardData.isDefault;
                    break;
                }
            }
            if (isReset && PlayerData.cardNameList.length) {
                let set = new Req["logic.protocol.setdeckdefault"]();
                set.deckId = PlayerData.cardNameList[0].id;
                Session.Send(Route["logic.protocol.setdeckdefault"], set);
            }
            

            EventMgr.emit(Evt_Card_Group_Update);
        } else {
             MsgPanel.Show(CfgMgr.GetErrorCfgByCode(delete_data.res.code));
        }
    }

    /**新头像推送 */
    private NewAvatarPush(data:any){
        let new_head = Ret.PlayerNewAvatarPush.decode(data);
        console.log("NewAvatarPush", new_head);
        PlayerData.cardHeadList[new_head.newAvatar.avatarId] = new_head.newAvatar
    }

    /**查询头像列表返回 */
    private getavatarinfos(data:any){
        let avatar_data = Ret["logic.protocol.getavatarinfos"].decode(data);
        console.log("查询头像列表返回", avatar_data, Object.keys(avatar_data.avatarInfos));
        if(Object.keys(avatar_data.avatarInfos).length > 0){
            PlayerData.cardHeadList = avatar_data.avatarInfos
        }
        EventMgr.emit(Evt_Card_Head_Update)

    }

    /**设置头像列表返回 */
    private setavatarinfos(data:any){
        let avatar_data = Ret["logic.protocol.setavatarinfos"].decode(data);
        console.log("设置头像列表返回", avatar_data);
        EventMgr.emit(Evt_Card_Head_Update)
    }


    /**新卡背推送 */
    private NewCardBackPush(data:any){
        let new_cardBack = Ret.PlayerNewCardBackPush.decode(data);
        PlayerData.cardBackList[new_cardBack.newCardBack.cardBackId] = new_cardBack.newCardBack;
    }

    /**查询卡背列表返回 */
    private getcardbackinfos(data:any){
        let avatar_data = Ret["logic.protocol.getcardbackinfos"].decode(data);
        console.log("查询卡背列表返回", avatar_data);
        if(Object.keys(avatar_data.cardBackInfos).length > 0){
            PlayerData.cardBackList = avatar_data.cardBackInfos
        }
        EventMgr.emit(Evt_Card_Back_Update)       
    }

    /**设置卡背列表返回 */
    private setcardbackinfos(data:any){
        let avatar_data = Ret["logic.protocol.setcardbackinfos"].decode(data);
        console.log("设置卡背列表返回", avatar_data);
        EventMgr.emit(Evt_Card_Back_Update)   

    }

    /**领取卡组 */
    private noobcardsclaim(data:any){
        let getCardData = Ret["logic.protocol.noobcardsclaim"].decode(data);
        console.log(getCardData)
        if(getCardData.res.code == 200){
            let card_list:proto.base.IThing[] = []
            for (const key in getCardData.deckInfo.cards) {
                const element = getCardData.deckInfo.cards[key];
                let thing_data:proto.base.IThing = {type:ThingTypeName.BattleCard,card:null}
                thing_data.type = ThingTypeName.BattleCard;
                thing_data.card = element;
                card_list.push(thing_data)
            }
            PlayerData.cur_id = getCardData.deckInfo.attrs.id;
            PlayerData.player.statusMark.NoobCardsAdd = true;
            PlayerData.cardNameList = [];
            PlayerData.cardNameList.push(getCardData.deckInfo.attrs)
            RewardTips.Show(card_list, getCardData.deckInfo.attrs)
            EventMgr.emit(Evt_Card_Group_Update);
        }else{
            MsgPanel.Show(CfgMgr.GetErrorCfgByCode(getCardData.res.code));
        }
    }

}