import { Node, Button, Component, instantiate } from "cc";
import { CardGroupCoverItem } from "../common/CardGroupCoverItem";
import proto from "../../net/Protocol";
import { EventMgr, Evt_Set_Battle_Card_Group_Update } from "../../manager/EventMgr";
import { PlayerData } from "../player/PlayerData";
import { Goto } from "../../DL";
import { MsgPanel } from "../common/MsgPanel";
import { CfgMgr } from "../../manager/CfgMgr";
import { HaveItem } from "../common/HaveItem";
import { CostItem } from "../common/CostItem";
import { DateUtils } from "../../utils/DateUtils";

export class VSStarElementPage extends Component {
    private helpBtn: Button;
    private battleLogBtn: Button;
    private shopBtn: Button;
    private costItem: CostItem;
    private vsBtn: Button;
    private cardGroupBtn: Button;
    private cardGroupCoverItem: CardGroupCoverItem;
    private haveItemCont: Node;
    private tempHaveItem: Node;
    private cardGroupData: proto.base.IDeckAttrs;
    protected onLoad() {
        this.helpBtn = this.node.getChildByPath("btnCont/helpBtn").getComponent(Button);
        this.battleLogBtn = this.node.getChildByPath("btnCont/battleLogBtn").getComponent(Button);
        this.shopBtn = this.node.getChildByPath("btnCont/shopBtn").getComponent(Button);
        this.costItem = this.node.getChildByPath("costCont/CostItem").addComponent(CostItem);
        this.vsBtn = this.node.getChildByPath("vsBtn").getComponent(Button);
        this.cardGroupBtn = this.node.getChildByPath("cardGroupBtn").getComponent(Button);
        this.cardGroupCoverItem = this.node.getChildByPath("cardGroupBtn/CardGroupCoverItem").addComponent(CardGroupCoverItem);
        this.haveItemCont = this.node.getChildByPath("haveItemCont");
        this.tempHaveItem = this.haveItemCont.children.shift();

        this.battleLogBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.shopBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.cardGroupBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.vsBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.helpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }

    protected onEnable(): void {
        EventMgr.on(Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
    }

    protected onDisable(): void {
        EventMgr.off(Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
    }

    public Show(): void {
        this.node.active = true;
        this.initHaveItem();
        this.updateCardGroup();
    }

    public Hide(): void {
        this.node.active = false;
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.battleLogBtn:
                Goto("VSStarElementFightLogPanel");
                break;
            case this.shopBtn:
                
                break;
            case this.cardGroupBtn:
                Goto("VSCardGroupPanel");
                break;
            case this.vsBtn:
                if (!this.cardGroupData) {
                    MsgPanel.Show("未设置战斗卡组不可对战")
                    return;
                }
                if (this.cardGroupData.size < CfgMgr.CardGuroupComm.DeckFullSize) {
                    MsgPanel.Show(`卡组卡牌数量不足${CfgMgr.CardGuroupComm.DeckFullSize}张`);
                    return;
                }
                if (!PlayerData.SatrElementData || PlayerData.SatrElementData.currentSeasonId == 0) {
                    MsgPanel.Show("暂时没有星元对战进行中");
                    return;
                }
                if (DateUtils.ServerTime > PlayerData.GetCurSatrElementEndTime()) {
                    MsgPanel.Show("星元对战已结束");
                    return;
                }
                
                Goto("VSPanel", proto.base.BattleMode.BattleModeStar);
                break;
            case this.helpBtn:
                break;
            default:
                break;
        }
    }

    private onSetCardGroup(): void {
        this.updateCardGroup();
    }
    
    private updateCardGroup(): void {
        this.cardGroupData = PlayerData.CurFightCardGroup;
        this.cardGroupCoverItem.SetData(this.cardGroupData, false);
    }

    private initHaveItem(): void {
        let itemIds: number[] = [];
        let itemMap: {[key: number]: number} = {};
        /* if (this.upgradeList) {
            for (let std of this.upgradeList) {
                if (std.CostItemIds) {
                    for (let id of std.CostItemIds) {
                        if (!itemMap[id]) {
                            itemIds.push(id);
                            itemMap[id] = id;
                        }
                    } 
                }
                
            }
        } */
        let maxLen: number = Math.max(this.haveItemCont.children.length, itemIds.length);
        let node: Node;
        let haveItem: HaveItem;
        for (let index = 0; index < maxLen; index++) {
            node = this.haveItemCont.children[index];
            if (!node) {
                node = instantiate(this.tempHaveItem);
                node.parent = this.haveItemCont;
            }
            if (index < itemIds.length){
                node.active = true;
                haveItem = node.getComponent(HaveItem) || node.addComponent(HaveItem);
                haveItem.SetData(itemIds[index]);
            } else {
                node.active = false;
            }
            
        }
        
    }
}