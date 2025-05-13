
import { Button, easing, Label, sp, Tween, tween, UITransform, v3 } from "cc";
import { Panel } from "../../manager/GameRoot";
import { MsgPanel } from "../common/MsgPanel";
import { EventMgr, Evt_Cancel_Match, Evt_EnterFight, Evt_Match_Complete, Evt_Start_Match } from "../../manager/EventMgr";
import proto, { Req, Route } from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { Session } from "../../net/Session";
import { DateUtils } from "../../utils/DateUtils";
import { VsPlayerItem } from "./VsPlayerItem";
import { TopUI } from "../main/TopUI";

export class VSPanel extends Panel {
    protected prefab: string = "prefabs/vs/VSPanel";
    private closeBtn: Button;
    private effect1: sp.Skeleton;
    private timeLab: Label;
    private VsPlayerItemA: VsPlayerItem;
    private VsPlayerItemB: VsPlayerItem;
    private isStartVs: boolean;
    private isVsWin: boolean;
    private sendOverTime: number;
    private battleMode: proto.base.BattleMode;
    protected onLoad() {
        this.effect1 = this.find("effect1", sp.Skeleton);
        this.VsPlayerItemA = this.find("playerCont/VsPlayerItemA").addComponent(VsPlayerItem);
        this.VsPlayerItemB = this.find("playerCont/VsPlayerItemB").addComponent(VsPlayerItem);
        this.timeLab = this.find("timeLab", Label);
        this.closeBtn = this.find("closeBtn", Button);
        this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }

    protected update(dt: number): void {
        
    }

    public flush(battleMode: proto.base.BattleMode): void {
        this.battleMode = battleMode;
        this.sendOverTime = 0;
        this.closeBtn.node.active = false;
        this.timeLab.string = "";
        this.isVsWin = false;
        this.isStartVs = false;
        this.VsPlayerItemA.SetData(PlayerData.UserInfo.nickName, PlayerData.CurFightCardGroup, true);
        this.VsPlayerItemB.SetData(null, null);
        this.playStartVsEffect();
        this.effect1.clearAnimation();
        this.effect1.setAnimation(0, "start", false);
        this.effect1.setCompleteListener(() => {
            
        });
        
    }

    protected onShow(): void {
        EventMgr.on(Evt_Start_Match, this.onStartVs, this);
        EventMgr.on(Evt_Cancel_Match, this.onCancelVs, this);
        EventMgr.on(Evt_Match_Complete, this.onVsComplete, this);
        EventMgr.on(Evt_EnterFight, this.onEnterFight, this);
        
    }

    protected onHide(): void {
       
        EventMgr.off(Evt_Start_Match, this.onStartVs, this);
        EventMgr.off(Evt_Cancel_Match, this.onCancelVs, this);
        EventMgr.off(Evt_Match_Complete, this.onVsComplete, this);
        EventMgr.off(Evt_EnterFight, this.onEnterFight, this);
    }

    private playStartVsEffect(): void {
        Tween.stopAllByTarget(this.VsPlayerItemA);
        Tween.stopAllByTarget(this.VsPlayerItemB);
        let itemW: number = this.VsPlayerItemA.node.getComponent(UITransform).width;
        let totalW: number = this.node.getComponent(UITransform).width;
        let offsetX: number = totalW * 0.5  + itemW * 0.5; 
        this.VsPlayerItemA.node.position = v3(-offsetX, 0 , 0);
        this.VsPlayerItemB.node.position = v3(offsetX, 0 , 0);
        tween(this.VsPlayerItemA.node)
        .to(1, { position: v3(-380, 0, 0) }, { easing: easing.quintIn })
        .start();

        tween(this.VsPlayerItemB.node)
        .to(1, { position: v3(380, 0, 0) }, { easing: easing.quintIn })
        .call(() => {
            this.sendStartVs();
        })
        .start();
    }

    private playEndVsEffect(): void {
        Tween.stopAllByTarget(this.VsPlayerItemA);
        Tween.stopAllByTarget(this.VsPlayerItemB);
        let itemW: number = this.VsPlayerItemA.node.getComponent(UITransform).width;
        let totalW: number = this.node.getComponent(UITransform).width;
        let offsetX: number = totalW * 0.5  + itemW * 0.5; 
        this.VsPlayerItemA.node.position = v3(-380, 0 , 0);
        this.VsPlayerItemB.node.position = v3(380, 0 , 0);
        tween(this.VsPlayerItemA.node)
        .to(0.5, { position: v3(-offsetX, 0, 0) }, { easing: easing.quintIn })
        .start();

        tween(this.VsPlayerItemB.node)
        .to(0.5, { position: v3(offsetX, 0, 0) }, { easing: easing.quintIn })
        .start();
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.closeBtn:
                if (this.isStartVs) {
                    if (this.isVsWin) {
                        MsgPanel.Show("正在进入战斗场景，不可取消");
                        return;
                    }
                    this.sendCancelVs();
                } else {
                    if (DateUtils.ServerTime > this.sendOverTime) {
                        //this.Hide();
                    }
                }
                break;
            default:
                break;
        }
    }

    private sendStartVs(): void {
        this.effect1.setAnimation(0, "loop", true);
        this.closeBtn.node.active = true;
        this.sendOverTime = DateUtils.ServerTime + 3;
        let startBattle = new Req["match.protocol.matchmaking"]();
        startBattle.deckId = PlayerData.CurFightCardGroup.id;
        startBattle.battleMode = this.battleMode;
        Session.Send(Route["match.protocol.matchmaking"],startBattle); 
    }

    private sendCancelVs(): void {
        Session.Send(Route["match.protocol.matchcancel"]); 
    }

    private onStartVs(result: boolean): void {
        if (result) {
            this.startVs();
        } else {
            this.Hide();
        }
    }

    private onCancelVs(result: boolean): void {
        if (result) this.Hide();
    }

    private onVsComplete(result: boolean, curRoom: proto.base.IBattleRoomSummary): void {
        if (result) {
            this.shoVsInfo(curRoom);
            this.vsWin();
        } else {
            this.Hide();
        }
    }

    private onEnterFight(): void {
        this.scheduleOnce(() => {
            this.exitVs();
        }, 1);
        
    }

    private startVs(): void {
        this.isStartVs = true;
        
    }

    private vsWin(): void {
        this.isVsWin = true;
        this.effect1.setAnimation(0, "loop2", true);
        
    }

    private shoVsInfo(curRoom: proto.base.IBattleRoomSummary): void {
        let playerDataB: proto.base.IPlayerData = proto.base.PlayerData.create();
        let playerName: string;
        let cardData: proto.base.IDeckAttrs;
        for (let key in curRoom.players) {
            let playerData: proto.base.IBattleRoomSummaryPlayer = curRoom.players[key];
            if (playerData.playerId != PlayerData.player.playerId) {
                cardData = playerData.deckAttr;
                playerName = playerData.name;
                break;
            }
        }
        this.VsPlayerItemB.SetData(playerName, cardData);
    }

    private exitVs(): void {
        this.playEndVsEffect();
        this.effect1.setAnimation(0, "end", false);
        this.effect1.setCompleteListener(() => {
            this.Hide();
        });
    }
}