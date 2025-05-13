import { Button, Color, Component, EditBox, EventTouch, Input, Label, Node, ScrollView, Sprite, SpriteFrame, Toggle, find, instantiate, js, path, sp, tween } from "cc";
import { AutoScroller } from "../../component/AutoScroller";
import { ResMgr, folder_mail } from "../../manager/ResMgr";
import { EventMgr, Evt_DelMail, Evt_Get_Mail_Log_Updata, Evt_Get_Mail_Reward_Updata, Evt_Hide_Scene, Evt_Mail_Add, Evt_Mail_Update, Evt_PlayerDataInfo_Update, Evt_ReadMail, Evt_Show_Scene } from "../../manager/EventMgr";
import { Session } from "../../net/Session";
import { DateUtils } from "../../utils/DateUtils";
import LocalStorage from "../../utils/LocalStorage";
import { Panel } from "../../manager/GameRoot";
import { SPlayerMailData } from "../player/PlayerStruct";
import { PlayerData } from "../player/PlayerData";
import { Tips } from "../common/Tips";
import { MailSendContent } from "./MailSendContent";
import { MailContent } from "./MailContent";
import proto, { Req, Route } from "../../net/Protocol";
import { BagItem } from "../bag/BagItem";
import { CfgMgr, ItemType, ThingTypeName } from "../../manager/CfgMgr";
import { ItemUtil } from "../../utils/ItemUtils";
export class MailPanel extends Panel {
    protected prefab: string = "prefabs/mail/MailPanel";

    private nav: Node;
    private layout: Node;
    private leftNode: Node;
    private MailContent: Node;
    private leftContentNode: Node;
    protected scroller: ScrollView;
    private deletBtn: Node;
    private getAwardBtn: Node;
    private leftEmpty: Node;

    private sendMail: Node;
    private send: Node;
    private editBox: EditBox;
    private playerNode: Node;
    private icon: Sprite;
    private playerName: Label;
    private playerGuide: Label
    private lv: Label;
    private uid: Label;
    private giftBtn: Button;
    private clone_item: Node
    private serchBtn: Node;
    
    private MailSendContent: MailSendContent;
    private playerInfo: proto.base.IPlayerShowInfo;
    protected pageSize = 100;
    private seleteIndex: number = 0;
    private systemList: SPlayerMailData[] = []
    private playerList: SPlayerMailData[] = []
    private logNode: Node;
    private logScroller: AutoScroller;
    private mailLogDatas: SPlayerMailData[] = [];
    private sortType: number;

    protected onLoad() {
        this.CloseBy("closeBtn");
        this.nav = this.find(`nav`);
        this.leftNode = this.find("layout/leftNode");
        this.MailContent = this.find("layout/MailContent");
        this.leftContentNode = this.find("layout/leftNode/leftContentNode");
        this.scroller = this.find("layout/leftNode/leftContentNode/ScrollView", ScrollView);
        this.clone_item = this.find("layout/leftNode/leftContentNode/ScrollView/view/content/item");
        this.deletBtn = this.find("layout/leftNode/leftContentNode/deletBtn");
        this.getAwardBtn = this.find("layout/leftNode/leftContentNode/getAwardBtn");
        this.leftEmpty = this.find("layout/leftNode/leftEmpty");
        this.sendMail = this.find("layout/sendMail");
        this.send = this.find("layout/sendMail/send");
        this.editBox = this.find("layout/sendMail/send/editboxBg/EditBox", EditBox);
        // this.editBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onSerch, this)
        this.playerNode = this.find("layout/sendMail/send/playerNode");
        this.icon = this.find("layout/sendMail/send/icon", Sprite);
        this.playerName = this.find("layout/sendMail/send/playerNode/infoUp/playerName", Label);
        this.playerGuide = this.find("layout/sendMail/send/playerNode/infoUp/playerGuide", Label);
        this.lv = this.find("layout/sendMail/send/playerNode/infoDown/lv", Label);
        this.uid = this.find("layout/sendMail/send/playerNode/infoDown/uid", Label);
        this.giftBtn = this.find(`layout/sendMail/send/playerNode/infoDown/giftBtn`, Button);

        this.MailSendContent = this.find("layout/sendMail/MailSendContent").addComponent(MailSendContent);
        this.serchBtn = this.find("layout/sendMail/send/serchBtn");


        this.logNode = this.find("logNode");
        this.layout = this.find("layout");
        this.logScroller = this.find("logNode/logScrollView", AutoScroller);
        this.logScroller.SetHandle(this.updateMailLogItem.bind(this));
        this.onBntEvent()
    }

    private onBntEvent() {
        this.nav.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => { this.onTouchNav(index) }, this);
        })
        this.giftBtn.node.on(Button.EventType.CLICK, this.onSendGift, this);
        this.serchBtn.on(Input.EventType.TOUCH_END, this.onSerch, this);
        this.deletBtn.on(Input.EventType.TOUCH_END, this.onDeleteAll, this);
        this.getAwardBtn.on(Input.EventType.TOUCH_END, this.onClaimAll, this);

        EventMgr.on(Evt_PlayerDataInfo_Update, this.updatePlayerData, this)
        EventMgr.on(Evt_DelMail, this.flush, this)
        EventMgr.on(Evt_Get_Mail_Log_Updata, this.updateMailLogList, this);
    }


    protected onShow(): void {
        this.scroller.content.removeAllChildren();
        this.sortType = 2;
        this.onTouchNav(0);
        EventMgr.on(Evt_Mail_Add, this.onRefershItem, this);
        EventMgr.on(Evt_Mail_Update, this.updateLeftMailsList, this);
        EventMgr.on(Evt_ReadMail, this.updateMailContent, this)
        EventMgr.emit(Evt_Hide_Scene, js.getClassName(this));
    }

    public flush(...args: any[]): void {
        this.mailLogDatas = [];
        let datas = [];
        if (this.seleteIndex != 3) {
            this.updateLeftMailsList();
            this.updateMailContent(null);
        } else {
            PlayerData.mails_log.forEach((data) => {
                if (data.senderPlayerId && data.senderPlayerId.length >= 1) {
                    datas.push(data)
                    this.mailLogDatas.push(data);
                }
            })
            datas.sort((a: SPlayerMailData, b: SPlayerMailData) => {
                return b.time - a.time;
            })
            this.logScroller.UpdateDatas(datas);
        }

    }

    private onTouchNav(index) {
        PlayerData.mail_start_id = [""]
        this.seleteIndex = index;
        this.nav.children[index].getComponent(Toggle).isChecked = true;
        this.logNode.active = false;
        this.layout.active = true;
        if (index == 3) {//转赠记录
            this.logNode.active = true;
            this.layout.active = false;
            this.onRefershItem();
        } else if (index == 2) {//发件
            this.leftNode.active = false
            this.MailContent.active = false;
            this.scroller.node.active = false;
            this.sendMail.active = true;
            this.send.active = true;
            this.playerNode.active = false;
            this.MailSendContent.node.active = false;
        } else {//个人和系统邮件
            this.leftNode.active = true
            this.MailContent.active = true;
            this.updateMailContent(null);
            this.scroller.node.active = true;
            this.scroller.content.children.forEach((node) => {
                node.getComponent(Toggle).isChecked = false;
            })
            this.sendMail.active = false;
            PlayerData.mails = [];
            PlayerData.mailmap = {};
            this.onRefershItem();
        }
    }


    private onRefershItem() {
        if (this.seleteIndex != 3) {
            let getmails = new Req["mail.protocol.getmails"]();
            getmails.readFlag = 0;
            getmails.start = PlayerData.mail_start_id[PlayerData.mail_start_id.length - 1];
            getmails.limit = this.pageSize;
            getmails.containsMode = 0
            Session.Send(Route["mail.protocol.getmails"], getmails);
        } else {
            let getitem = new Req["player.protocol.getitemrecords"]();
            getitem.fromId = "";
            getitem.itemId = "";
            getitem.limit = 100;
            getitem.server = PlayerData.server;
            getitem.start = "";
            getitem.sources = []
            Session.Send(Route["player.protocol.getitemrecords"], getitem);
        }
    }

    //-----------------------------系统和个人邮件相关---------------------------------------
    private updateLeftMailsList() {
        this.scroller.content.removeAllChildren();
        let datas = [];
        this.systemList = []
        this.playerList = []
        PlayerData.mails.forEach((data) => {
            if (this.seleteIndex == 0) {
                if (!data.senderPlayerId || data.senderPlayerId.length < 1) {
                    datas.push(data)
                    this.systemList.push(data);
                }
            } else {
                if (data.senderPlayerId && data.senderPlayerId.length >= 1) {
                    datas.push(data)
                    this.playerList.push(data);
                }
            }
        })
        datas.sort((a: SPlayerMailData, b: SPlayerMailData) => {
            let a_reward = a.attachments.length > 0 ? 1 : 0
            let b_reward = b.attachments.length > 0 ? 1 : 0

            let a_read = a.isRead ? 0 : 1;
            let b_read = b.isRead ? 0 : 1;

            let a_num = a.isAttachmentClaimed ? 0 : 1;
            let b_num = b.isAttachmentClaimed ? 0 : 1;

            let a_sort = a_reward + a_num
            let b_sort = b_reward + b_num
            if (a_sort == b_sort) {
                if (a_read == b_read) {
                    return b.time - a.time;
                }
                return b_read - a_read
            }
            return b_sort - a_sort;

        })
        this.leftEmpty.active = datas.length <= 0;
        this.leftContentNode.active = datas.length > 0;
        for (const iterator of datas) {
            let item = instantiate(this.clone_item)
            this.updateMailItem(item, iterator);
            this.scroller.content.addChild(item)
        }

    }

    private async updateMailItem(item: Node, data: SPlayerMailData) {
        let title = data.title.length > 10 ? data.title.slice(0, 10) + "..." : data.title
        item.getChildByName(`title`).getComponent(Label).string = title;
        let time = DateUtils.timeElapsedSince(data.time * 1000);
        let str = "";
        if (time.days > 0) {
            str = `${time.days}天前`
        } else if (time.hours > 0) {
            str = `${time.hours}小时前`
        } else if (time.minutes > 0) {
            str = `${time.minutes}分前`
        } else if (time.seconds > 0) {
            str = `${time.seconds}秒前`
        }
        item["mail_id"] = data.id;
        item.getChildByName("time").getComponent(Label).string = `${str}`;
        let mailIcon = item.getChildByName(`mailIcon`).getComponent(Sprite);
        let state = item.getChildByName(`state`).getComponent(Label);
        state.string = "";
        let mask = item.getChildByName("mask");
        mask.active = false;
        let url = path.join(folder_mail, `redIcon`, "spriteFrame");
        if (data.isAttachmentClaimed) {
            state.string = `已领取`;
            mask.active = true;
        } else {
            if (data.attachments && data.attachments.length > 0) {
                state.string = `未领取`;
                state.color = new Color().fromHEX("#27633C")
                if (data.isRead) {
                    url = path.join(folder_mail, `redIcon`, "spriteFrame")
                } else {
                    url = path.join(folder_mail, `unRedIcon`, "spriteFrame")
                }
            } else {
                if (data.isRead) {
                    url = path.join(folder_mail, `redIcon`, "spriteFrame")
                    mask.active = true;
                } else {
                    url = path.join(folder_mail, `unRedIcon`, "spriteFrame")
                }
            }
        }
        mailIcon.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);

        item.off(Input.EventType.TOUCH_END)
        item.on(Input.EventType.TOUCH_END, () => {
            this.onSelect(data.id);
            this.scroller.content.children.forEach((node) => {
                node.getComponent(Toggle).isChecked = false;
            })
            item.getComponent(Toggle).isChecked = true;
        }, this);
        this.checkPage(data);
    }

    protected onSelect(id: string) {
        let info = new Req["mail.protocol.readmail"]();
        info.mailId = id;           // 邮件读取状态筛选条件: 0-所有邮件, 1-已读邮件, 2-未读邮件
        Session.Send(Route["mail.protocol.readmail"], info)
    }

    /**刷新邮件内容 */
    private updateMailContent(data: SPlayerMailData) {
        if (data) {
            this.scroller.content.children.forEach((node) => {
                if (node["mail_id"] == data.id) {
                    this.updateMailItem(node, data)
                }
            })
        }
        let mail_content = this.MailContent.getComponent(MailContent);
        if (!mail_content) mail_content = this.MailContent.addComponent(MailContent);
        mail_content.flush(data)
    }

    private onDeleteAll() {
        let delet_data = new Req["mail.protocol.deletemails"]();
        delet_data.mailIds = [];
        Session.Send(Route["mail.protocol.deletemails"], delet_data);
    }

    private onClaimAll() {
        let get_mail = new Req["mail.protocol.claimmailsattachment"]();
        get_mail.mailIds = [];
        Session.Send(Route["mail.protocol.claimmailsattachment"], get_mail)
    }

    private checkPage(data: SPlayerMailData) {
        let list = []
        if (this.seleteIndex == 3) {
            list = this.mailLogDatas;
        } else if (this.seleteIndex == 0) {
            list = this.systemList;
        } else {
            list = this.playerList;
        }
        if (!data.is_last && list[list.length - 1] == data) {
            data.is_last = true;
            this.onRefershItem()
        }
    }

    //------------------------------发送邮件相关------------------------
    private updatePlayerData(info: proto.base.IPlayerShowInfo) {
        console.log(info)
        this.playerInfo = info;
        this.playerNode.active = true;
        this.playerName.string = info.nickName;
        this.playerGuide.string = "公会：无";
        this.lv.string = info.playerId;
        this.uid.string = info.playerId;
        ResMgr.LoadResAbSub(path.join("sheets/default/icon1", "spriteFrame"), SpriteFrame, res => {
            this.icon.spriteFrame = res;
        })
    }

    /**赠送物品 */
    private onSendGift() {
        this.MailSendContent.node.active = true;
        let mail_send_panel = this.MailSendContent.getComponent(MailSendContent);
        if (!mail_send_panel) mail_send_panel = this.MailSendContent.addComponent(MailSendContent)
        let close_back = () => {
            this.MailSendContent.node.active = false;
            this.send.active = true;
        }
        mail_send_panel.onShow(this.playerInfo, close_back.bind(this))
        this.send.active = false;

    }

    private onSerch() {
        if (this.editBox.string) {
            if (this.editBox.string == PlayerData.player.playerId) return Tips.Show(`无法搜索自己的ID`);
            let data = new Req["user.protocol.searchuser"]();
            data.uid = this.editBox.string;
            // this.editBox.string = ``;
            Session.Send(Route["user.protocol.searchuser"], data);
        } else {
            Tips.Show(`请输入玩家ID！`);
        }
    }

    //----------------------------------------转增记录相关--------------------

    private updateMailLogList(data: proto.base.IPlayerItemRecord[]) {
        this.logScroller.UpdateDatas(data)
    }

    private async updateMailLogItem(item: Node, data: proto.base.IPlayerItemRecord) {
        let bag_item = item.getChildByName("item")
        let is_get = item.getChildByName("is_get").getComponent(Sprite);
        let source = item.getChildByName("source").getComponent(Label);
        let time = item.getChildByName("time").getComponent(Label);
        let incom = item.getChildByName("incom").getComponent(Label);
        let datetime = DateUtils.TimestampToDate(data.time * 1000)
        let m = parseInt(datetime[1]) < 10 ? `0${datetime[1]}` : `${datetime[1]}`;
        let d = parseInt(datetime[2]) < 10 ? `0${datetime[2]}` : `${datetime[2]}`;
        let h = parseInt(datetime[3]) < 10 ? `0${datetime[3]}` : `${datetime[3]}`;
        let min = parseInt(datetime[4]) < 10 ? `0${datetime[4]}` : `${datetime[4]}`;
        let s = parseInt(datetime[5]) < 10 ? `0${datetime[5]}` : `${datetime[5]}`;
        time.string = datetime[0] + "-" + m + "-" + d + "  " + h + ":" + min + ":" + s;
        let cfg_item = CfgMgr.Getitem(data.itemId);
        let rate = cfg_item.Itemtpye == ItemType.money ? 10000 : 1;
        let is_Add = data.source == "GiveRecv"
        source.string = data.playerId;
        incom.string = is_Add ? "+" + data.count / rate : "" + data.count / rate;
        incom.color = is_Add ? new Color().fromHEX("#498127") : new Color().fromHEX("#AD5858")
        let icon_name = is_Add ? "get" : "send"
        is_get.spriteFrame = await ResMgr.LoadResAbSub(path.join("sheets/mails", icon_name, "spriteFrame"), SpriteFrame);
        let itemData = ItemUtil.CreateThing(ThingTypeName.Item, cfg_item.Items, 0)
        let bagItem = bag_item.getComponent(BagItem);
        if (!bagItem) bagItem = bag_item.addComponent(BagItem)
        bagItem.setThing(itemData)

        // this.checkPage(data);
    }


    protected onHide(...args: any[]): void {
        EventMgr.off(Evt_Mail_Add, this.onRefershItem, this);
        EventMgr.emit(Evt_Show_Scene, js.getClassByName(this));
        this.scroller.content.children.forEach((node) => {
            node.getComponent(Toggle).isChecked = false;
        })
    }
}

