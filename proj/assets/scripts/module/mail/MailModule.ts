
import { EventMgr, Evt_DelMail, Evt_Get_Mail_Log_Updata, Evt_Get_Mail_Reward_Updata, Evt_Mail_Add, Evt_Mail_Update, Evt_PlayerDataInfo_Update, Evt_ReadMail, Evt_SendMail } from "../../manager/EventMgr";
import { Session } from "../../net/Session";
import { Tips } from "../common/Tips";
import { PlayerData } from "../player/PlayerData";
import { RewardTips } from "../common/RewardTips";
import { Md5Utils } from "../../utils/Md5Utils";
import { Req, Ret, Route } from "../../net/Protocol";
import { MsgPanel } from "../common/MsgPanel";

export class MailModule {

    constructor() {
        Session.on(Route.NewMailPush, this.onMailPush, this);
        Session.on(Route["mail.protocol.getmails"], this.onReadMailList, this);
        Session.on(Route["mail.protocol.readmail"], this.onReadMail, this);
        Session.on(Route["mail.protocol.claimmailattachment"], this.onClaimMailAttachments, this);
        Session.on(Route["mail.protocol.deletemails"], this.onDeleteMail, this);
        Session.on(Route["mail.protocol.claimmailsattachment"], this.onClaimAllMailAttachments, this);
        Session.on(Route["user.protocol.searchuser"], this.onPlayerInfo, this);
        Session.on(Route["logic.protocol.sendgivemail"], this.onSendCurrency, this);
        Session.on(Route["player.protocol.getitemrecords"], this.ongetitemrecords, this)
    }

    /**
     * 新邮件
     * @param data 
     */
    protected onMailPush(data) {
        let pushData = Ret.NewMailPush.decode(data)
        console.log("推送新邮件",pushData);
        let getmails = new Req["mail.protocol.getmails"]();
        getmails.readFlag = 0;
        getmails.start = "";
        getmails.limit = 9999;
        getmails.containsMode = 0
        Session.Send(Route["mail.protocol.getmails"],getmails);
    }

    /**接收邮件列表 */
    protected onReadMailList(data: any) {
        let data_list = Ret["mail.protocol.getmails"].decode(data)
        console.log("接收邮件列表",data_list)
        if (data_list.mails && data_list.mails.length > 0){           
                for (let mail of data_list.mails) {
                    if (!PlayerData.mailmap[mail.id] && mail.senderPlayerId != PlayerData.player.playerId) {
                        PlayerData.mailmap[mail.id] = mail;
                        PlayerData.mails.push(mail);
                    }else {
                        let curMail = PlayerData.mails.find(item => item.id === mail.id) || null;
                        curMail = mail;
                    }
                }    
                if(data_list.total){
                    PlayerData.mail_start_id = [];
                    PlayerData.mail_start_id.push("")
                }
                if(PlayerData.mail_start_id.findIndex(id => id == data_list.mails[data_list.mails.length -1].id) == -1){
                    PlayerData.mail_start_id.push(data_list.mails[data_list.mails.length -1].id);
                } 
        }
        EventMgr.emit(Evt_Mail_Update);
    }

    /**读取邮件内容 */
    protected onReadMail(data:any) {
        let read_data = Ret["mail.protocol.readmail"].decode(data)
        console.log("读取邮件",read_data)
        this.updateMailsData(read_data, 1)
        
    }

    /**提取附件 */
    protected onClaimMailAttachments(data) {
        let get_data = Ret["mail.protocol.claimmailattachment"].decode(data);
        console.log("提取附件",get_data);
        if(get_data.res.code == 200){
            RewardTips.Show(get_data.mail.attachments);
            this.updateMailsData(get_data, 2)
        }else{
            MsgPanel.Show("邮件领取失败")
        }
    }

    private updateMailsData(mail_data, type){
        for (let i = 0; i < PlayerData.mails.length; i++) {
            let mail = PlayerData.mails[i];
            if (mail.id == mail_data.mail.id) {
                PlayerData.mails[i] = mail_data.mail;
                if(type == 1){
                    PlayerData.mails[i].isRead = true;
                }else if(type == 2){
                    PlayerData.mails[i].isAttachmentClaimed = true;
                }
                PlayerData.mails[i].content = mail_data.mail.content;
                EventMgr.emit(Evt_ReadMail,  PlayerData.mails[i]);
                return;
            }
        }
    }

    /**删除邮件 */
    protected onDeleteMail(data) {
        let delete_data = Ret["mail.protocol.deletemails"].decode(data);
        console.log("删除邮件",delete_data);
        if(delete_data.deletedMailIds.length > 0){
            for (let i = PlayerData.mails.length - 1; i >= 0; i--) {
                let mail = PlayerData.mails[i];
                if (delete_data.deletedMailIds.indexOf(mail.id) != -1) {
                    PlayerData.mails.splice(i, 1);
                    delete PlayerData.mailmap[mail.id];
                    EventMgr.emit(Evt_DelMail);
                }
            }
            MsgPanel.Show("删除成功")
        }else{
            MsgPanel.Show("没有可删除邮件")
        }
        // EventMgr.emit(Evt_ReadMail);
        
    }

    /**提取所有附件 */
    protected onClaimAllMailAttachments(data) {
        let gets_data = Ret["mail.protocol.claimmailsattachment"].decode(data);
        console.log("提取所有附件",gets_data);
        if (gets_data.things && gets_data.things.length > 0) {
            for (let i = 0; i < PlayerData.mails.length; i++) {
                let mail = PlayerData.mails[i];
                mail.isRead = true;
                mail.isAttachmentClaimed = true;
            }
            let reward_data = PlayerData.getMailReward(gets_data.things);
            RewardTips.Show(reward_data);
        } else {
            Tips.Show(`没有可领取邮件!`)
        }
        EventMgr.emit(Evt_DelMail);
    }

    /**邮件玩家查询 */
    protected onPlayerInfo(data) {
        let player_data = Ret["user.protocol.searchuser"].decode(data)
        console.log(player_data)
        if (player_data.info){
            // MailPlayerPanel.Show(player_data.info);
            EventMgr.emit(Evt_PlayerDataInfo_Update, player_data.info)
        }else{
            Tips.Show(`没找到指定玩家，请检查后重试！`);
        }
    }

    /**发送五彩石邮件回调 */
    protected onSendCurrency(data) {
        let send_data = Ret["logic.protocol.sendgivemail"].decode(data);
        console.log(send_data);
        if(send_data.res.code == 1107){
            let setpassword = new Req["user.protocol.passwordset"]();
            setpassword.password = Md5Utils.hash(Md5Utils.hash("1234567"));
            Session.Send(Route["user.protocol.passwordset"], setpassword);
        }else if(send_data.res.code == 200){
            EventMgr.emit(Evt_SendMail);
            Tips.Show(`发送成功`)
        }else if(send_data.res.code == 1304){
            Tips.Show(`发送失败, 超出每日赠送上限`)
        }else{
            Tips.Show(`发送失败`)
        }
    }

    /**邮件赠送接收物品查询返回 */
    private ongetitemrecords(data:any){
        let info_data = Ret["player.protocol.getitemrecords"].decode(data);
        console.log(info_data);
        EventMgr.emit(Evt_Get_Mail_Log_Updata, info_data.records)
    }

}