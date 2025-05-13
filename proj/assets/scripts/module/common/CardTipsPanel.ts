import { Button, easing, Label, RichText, tween, v3 } from "cc";
import { Panel } from "../../manager/GameRoot";
import { Card } from "../cards/Card";
import proto from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { CfgMgr, StdCard } from "../../manager/CfgMgr";

export class CardTipsPanel extends Panel {
    protected prefab: string = "prefabs/common/CardTipsPanel";
    private maskBtn: Button;
    private closeBtn: Button;
    private card: Card;
    private skillDescLab: Label;
    private cardData: proto.base.IBattleCard;
    protected onLoad(): void {
        this.card = this.find("Cards").addComponent(Card);
        this.skillDescLab = this.find("skillDescLab", Label);
        this.maskBtn = this.find("mask", Button);
        this.closeBtn = this.find("closeBtn", Button);
        this.maskBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }
    protected onShow(): void {
        
    }

    public flush(cardCfgId: number, cardId: string = null): void {
        let cardData: proto.base.IBattleCard = PlayerData.GetCardDataById(cardId);
        if (cardData) {
            this.cardData = cardData;
        } else {
            this.cardData = PlayerData.CreateCardData(cardCfgId);
        }
        
        let skillDesc: string = CfgMgr.GetCardSkillDesc(cardCfgId);
        this.skillDescLab.string = skillDesc;
        this.showCard();
    }

    protected onHide(): void {
        
    }

    private onBtnClick(btn: Button): void {
        switch(btn) {
            case this.maskBtn:
            case this.closeBtn:
                this.Hide();
                break;
        }
    }

    private showCard(): void {
        this.maskBtn.interactable = false;
        this.closeBtn.node.active = false;
        this.skillDescLab.node.active = false;
        this.card.SetData(this.cardData);
        this.card.node.scale = v3(0.5, 0.5, 0.5);
        tween(this.card.node)
        .to(0.5,{scale:v3(2, 2, 2)}, { easing: easing.backOut })
        .call(() => {
            this.maskBtn.interactable = true;
            this.closeBtn.node.active = true;
            this.skillDescLab.node.active = true;
        })
        .start();
    }
}