import { Button, CCClass, Event, EventTouch, Input, Label, Layout, Node, PageView, UIOpacity, UITransform, Vec3, _decorator, easing, instantiate, size, tween } from "cc";
import { Panel } from "../../manager/GameRoot";
import { PlayerData } from "../player/PlayerData";
import { Session } from "../../net/Session";
import { EventMgr, Evt_Add_Card_Group_update, Evt_Card_Check_By_Name, Evt_Card_Group_Update, Evt_Item_Change, Evt_Main_Panel_Card_Group_Update, Evt_Match_Complete, Evt_SectionUpdate, Evt_Set_Battle_Card_Group_Update, Evt_Start_Match } from "../../manager/EventMgr";
import { Second, Utils } from "../../utils/Utils";
import { AutoScroller } from "../../component/AutoScroller";
import { CardGroupItem } from "../cards/CardGroupItem";
import { MsgPanel } from "../common/MsgPanel";
import proto, { Req, Route } from "../../net/Protocol";
import { MainUI3D } from "./MainUI3D";
import { CfgMgr } from "../../manager/CfgMgr";
import LocalStorage from "../../utils/LocalStorage";
import { GameSet } from "../../manager/GameSet";
import { CardGroupHead } from "../cards/CardGroupHead";
import { DateUtils } from "../../utils/DateUtils";
import { AudioMgr } from "../../manager/AudioMgr";
import { AudioDefine } from "../../define/AudioDefine";
import { Goto } from "../../DL";

export class MainPanel extends Panel {
    protected prefab: string = 'prefabs/main/MainPanel';

    private creatRoomBtn: Button;
    private userButton: Button;
    private shopButton: Button;
    private battleButton: Button;
    private bottomBtn: Node[];
    private leftTopNode: Node[];
    private bottomNode: Node;
    private rightTopNode: Node;
    private currencyNode: Node;
    private cardNode: Node
    private cardBtn: Button;
    private cardGroupScrollView: AutoScroller;
    private unsatisfied: Node;
    private cardGoup: Node;
    private unCardGroup: Node

    private head: CardGroupHead;

    private matchTime = 0;
    private interval: any;

    protected onLoad(): void {
        this.creatRoomBtn = this.find("creatRoomBtn", Button);
        this.creatRoomBtn.node.on(Button.EventType.CLICK, this.onButton, this);
        this.userButton = this.find("userButton", Button);
        this.userButton.node.on("click", this.onButton, this);
        this.shopButton = this.find("shopButton", Button);
        this.shopButton.node.on("click", this.onButton, this);
        this.cardBtn = this.find("bottomNode/battleButton/cardBtn", Button);
        this.cardBtn.node.on("click", this.onButton, this);
        this.battleButton = this.find("bottomNode/battleButton", Button);
        this.battleButton.node.on("click", this.onButton, this);
        this.bottomNode = this.find("bottomNode");
        this.bottomBtn = this.find("bottomNode/bottomBtn").children.concat();
        this.rightTopNode = this.find("rightTopNode");
        this.currencyNode = this.find("rightTopNode/currencyNode");
        this.cardNode = this.find("cardNode");
        this.cardNode.on(Input.EventType.TOUCH_END, () => { this.cardNode.active = false }, this);
        this.cardGroupScrollView = this.find("cardNode/bg/cardGroupScrollView", AutoScroller);
        this.cardGroupScrollView.SetHandle(this.updateCardGroupItem.bind(this));
        this.cardGroupScrollView.node.on('select', this.onCardGroupSelect, this);
        this.unCardGroup = this.find("bottomNode/battleButton/cardBtn/cardbgNode");
        this.cardGoup = this.find("bottomNode/battleButton/cardBtn/cardGroupItem");
        this.cardGoup.addComponent(CardGroupItem)
        this.head = this.find("userButton/CardGroupHead").addComponent(CardGroupHead)


        for (const btn of this.bottomBtn) {
            btn.on("click", this.onButton, this);
        }
        this.leftTopNode = this.find("leftTopNode").children.concat()
        for (const btn of this.leftTopNode) {
            btn.on("click", this.onButton, this);
        }
        EventMgr.on(Evt_Set_Battle_Card_Group_Update, this.setCardGroupItem, this);
        EventMgr.on(Evt_Card_Check_By_Name, this.updateCardGroupState, this);
        EventMgr.on(Evt_Card_Group_Update, this.setCardGroupItem, this);
        EventMgr.on(Evt_Add_Card_Group_update, this.setCardGroupItem, this);
        EventMgr.on(Evt_Main_Panel_Card_Group_Update, this.setCardGroupItem, this);
        EventMgr.on(Evt_Item_Change, this.updateCurrency, this)
    }

    static Show(...args: any[]): Promise<any> {
        return this.ShowUI(...args);
    }
    static ShowTop(...args: any[]): Promise<any> {
        return this.ShowUI(...args);
    }

    protected onShow(): void {
        AudioMgr.StopChannel(AudioDefine.Channels["audio/bgm/*"].channel);
        AudioMgr.Play("audio/bgm/fighting4", 0, 0.1);
        Session.Send(Route["logic.protocol.getplayerdecks"]);
        MainUI3D.Show(this.node);
        //TopUI.Show();
        this.checkShowSeasonTips();
        EventMgr.on(Evt_SectionUpdate, this.onSectionUpdate, this);
    }
    protected onHide(...args: any[]): void {
        AudioMgr.StopChannel(AudioDefine.Channels["audio/bgm/*"].channel);
        //TopUI.Hide();
        MainUI3D.Hide();
        EventMgr.off(Evt_SectionUpdate, this.onSectionUpdate, this);
    }

    public flush(...args: any[]): void {

        this.setCardGroupItem();
        this.startTween();
        this.updateCurrency();
    }

    private async startTween() {
        tween(this.bottomNode).to(0.6, { position: new Vec3(0, -318) }, { easing: easing.circOut }).start();

        for (let index = 0; index < this.currencyNode.children.length; index++) {
            const element = this.currencyNode.children[index];
            element.getChildByName("icon").setScale(new Vec3(0, 0, 1))
            element.getChildByName("Label").getComponent(UIOpacity).opacity = 0;
        }

        this.userButton.node.getComponent(UIOpacity).opacity = 0;
        for (let index = 0; index < this.leftTopNode.length; index++) {
            const element = this.leftTopNode[index];
            element.setScale(new Vec3(0, 0, 1))
        }

        for (let index = 0; index < this.currencyNode.children.length; index++) {
            const element = this.currencyNode.children[index];
            tween(element.getChildByName("icon"))
                .to(0.3, { scale: new Vec3(1, 1, 1) })
                .start();

            tween(element.getChildByName("Label").getComponent(UIOpacity))
                .to(0.3, { opacity: 255 })
                .start();
            await Second(0.15)
        }
        // this.currencyNode.getComponent(Layout).updateLayout();
        //TopUI.addChild(this.rightTopNode);

        tween(this.userButton.node.getComponent(UIOpacity))
            .to(0.05, { opacity: 255 })
            .start();

        for (let index = 0; index < this.leftTopNode.length; index++) {
            const element = this.leftTopNode[index];
            tween(element)
                .to(0.3, { scale: new Vec3(1, 1, 1) })
                .start();
            await Second(0.11)
        }
        this.leftTopNode[0].parent.getComponent(Layout).updateLayout();
    }


    private onButton(btn: Button) {
        let name = btn.node.name;
        switch (name) {
            case "bagButton":
                Goto("BagPanel");
                break;
            case "mailButton":
                Goto("MailPanel");
                break;
            case "friendButton":
                Goto("FriendPanel");
                break;
            case "creatRoomBtn":
                Goto("RoomPanel");
                break;
            case "userButton":
                // UserInfoPanel.Show();
                break;
            case "shopButton":
                Goto("ShopPanel");
                break;
            case "cardBtn":
                this.cardNode.active = true;
                if (PlayerData.cardNameList.length > 0) {
                    this.cardGroupScrollView.UpdateDatas(PlayerData.cardNameList)
                } else {
                    Goto("CardsPanel");
                }
                break;
            case "tradeButton":
                Goto("TradePanel");
                break;
            case "battleButton":
                if (!PlayerData.CurFightCardGroup) {
                    MsgPanel.Show("未设置战斗卡组不可对战")
                    return;
                }
                if (PlayerData.CurFightCardGroup.size < CfgMgr.CardGuroupComm.DeckFullSize) {
                    MsgPanel.Show(`卡组卡牌数量不足${CfgMgr.CardGuroupComm.DeckFullSize}张`);
                    return;
                }
                if (!PlayerData.CurSeasonData || PlayerData.CurSeasonData.currentSeasonId == 0) {
                    MsgPanel.Show("暂时没有赛季进行中");
                    return;
                }
                if (DateUtils.ServerTime > PlayerData.GetCurSeasonEndTime()) {
                    MsgPanel.Show("暂时没有赛季已结束");
                    return;
                }
                Goto("VSPanel", proto.base.BattleMode.BattleModeRank);
                break;
            case "cardButton":
                Goto("CardsPanel");
                break;
            case "levelButton":
                Goto("CardCollectPanel");
                break;
            case "settingButton":
                MsgPanel.Show(GameSet.Version);
                break;
            default:
                break;
        }

    }

    private async setCardGroupItem() {
        if (!this.$hasLoad) await this.initSub;
        if (PlayerData.CurFightCardGroup) {
            this.cardGoup.active = true;
            this.unCardGroup.active = false;
            let card_group = this.cardGoup.getComponent(CardGroupItem);
            if (!card_group) this.cardGoup.addComponent(CardGroupItem);
            card_group.SetData(PlayerData.CurFightCardGroup, true)
            this.head.SetData(PlayerData.CurFightCardGroup.avatarId, false, false)
        } else {
            this.cardGoup.active = false;
            this.unCardGroup.active = true;
        }
    }

    private updateCardGroupState(data) {

    }


    /**打开设置卡组界面 */
    protected updateCardGroupItem(item: Node, data: proto.base.IDeckAttrs) {
        let card_group_item = item.getComponent(CardGroupItem);
        if (!card_group_item) card_group_item = item.addComponent(CardGroupItem);
        let callback = () => { Goto("CardsPanel", data); this.cardNode.active = false }
        let jump = item.getChildByPath("cardNode/jump").getComponent(Button);
        jump.node.off(Button.EventType.CLICK, callback, this);
        jump.node.on(Button.EventType.CLICK, callback, this);
        card_group_item.SetData(data);
    }

    /**选择卡组设置出战 */
    protected onCardGroupSelect(index: number, item: Node) {
        let data = item.getComponent(CardGroupItem).getData();
        let set = new Req["logic.protocol.setdeckdefault"]();
        set.deckId = data.id;
        Session.Send(Route["logic.protocol.setdeckdefault"], set);

        this.cardNode.active = false;

    }


    private updateCurrency() {
        this.currencyNode.children.forEach((node) => {
            let index = node.getSiblingIndex()
            let lab = node.getChildByName("Label").getComponent(Label);
            lab.string = Utils.BigNumber(PlayerData.GetItemCount(index + 1))
        })
    }

    private onSectionUpdate(): void {
        this.checkShowSeasonTips();
    }

    /**检测是否显示赛季提示 */
    private checkShowSeasonTips(): void {
        if (!PlayerData.CurSeasonData || PlayerData.CurSeasonData.currentSeasonId == 0) {
            return;
        }
        let key: string = `season_tips_is_show_${PlayerData.player.playerId}`;
        let showSeasonTipsDatas: any = LocalStorage.GetObject(key);
        if (!showSeasonTipsDatas) {
            showSeasonTipsDatas = {};
        }
        if (showSeasonTipsDatas[PlayerData.CurSeasonData.currentSeasonId]) return;
        showSeasonTipsDatas[PlayerData.CurSeasonData.currentSeasonId] = PlayerData.CurSeasonData.currentSeasonId;
        LocalStorage.SetObject(key, showSeasonTipsDatas);
        Goto("VSSeasonTipsPanel");
    }
}