import { Button, Label, Layout, Node, NodeEventType, RichText, Sprite, SpriteFrame, UITransform, Vec3, easing, path, sp, tween, v3 } from "cc";
import proto, { Req, Route } from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { Session } from "../../net/Session";
import { Panel } from "../../manager/GameRoot";
import { Battle_End_Round, Battle_Exit, Battle_PlayNewRoundEffect, Battle_RoomUnusual, Battle_ShowSettlement, Battle_UpdateTerrain, EventMgr, Evt_BattleDoubleUpdate, Evt_BattlePlayHandTime as Evt_BattlePlayHandTime, Evt_SectionSettle, Evt_ShowBattleDoubleEffect, Evt_StarElementSettle } from "../../manager/EventMgr";
import { folder_icon, ResMgr } from "../../manager/ResMgr";
import { CfgMgr, StdArea} from "../../manager/CfgMgr";
import { Tips } from "../common/Tips";
import { GameSet } from "../../manager/GameSet";
import { SeasonSettlePanel } from "./SeasonSettlePanel";
import { Shake } from "../../utils/Shake";
import { Goto } from "../../DL";
import { RewardTips } from "../common/RewardTips";
export class FightUI extends Panel {
    protected prefab: string = "prefabs/fight/FightUI";
    private doubleEffect: sp.Skeleton;
    protected roundStartCont: Node;
    protected roundNumLab: Label;
    protected roundStartEffect: sp.Skeleton;
    protected playHandTimeEffect: sp.Skeleton;
    protected settlementCont: Node;
    protected settlementEffect: sp.Skeleton;
    protected areaCont: Node;
    protected unusualCont: Node;
    protected unusualOkBtn: Button;
    protected unusualLab: RichText;
    private settlementData: proto.base.BattleRoomOpOutput_Settlement;
    private settlementPlayerId: string;
    private sectionSettleDataMap: {[key: string]: proto.pb.PlayerPvpRankBattleSettlePush};
    private starElementSettleDataMap: {[key: string]: proto.pb.PlayerPvpStarBattleSettlePush};
    private isSettlementEnd: boolean;//是否结算完毕
    private roomData: proto.base.IBattleRoomSummary;
    protected onLoad(): void {
        this.roundStartCont = this.find("roundStartCont");
        this.roundStartEffect = this.find("roundStartCont/effect", sp.Skeleton);
        this.playHandTimeEffect = this.find("defCont/playHandTimeEffect", sp.Skeleton);
        this.doubleEffect = this.find("defCont/doubleEffect", sp.Skeleton);
        this.roundNumLab = this.find("roundStartCont/effect/roundNumLab", Label);

        this.settlementCont = this.find("settlementCont");
        this.settlementEffect = this.find("settlementCont/effect", sp.Skeleton);
        this.areaCont = this.find("terrainCont");
        this.unusualCont = this.find("unusualCont");
        this.unusualOkBtn = this.find("unusualCont/unusualOkBtn", Button);
        this.unusualLab = this.find("unusualCont/unusualLab", RichText);
        this.unusualOkBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.settlementCont.on(NodeEventType.TOUCH_END, this.onExit, this);
    }
    protected update(dt: number): void {

    }

    protected async onTerrain(data: proto.base.IBattleRoomTerrainData[], round?: proto.base.IBattleRoomGamePlayData) {
        if (!this.hasLoad) await this.initSub;
        this.updateArea(data, round);
    }

    /**更新区域 */
    protected updateArea(datas: proto.base.IBattleRoomTerrainData[], round?: proto.base.IBattleRoomGamePlayData) {
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            let area = this.areaCont.children[data ? data.area : i];
            let cont: Node = area.getChildByName("cont");
            let contTrans: UITransform = cont.getComponent(UITransform);
            if (!data) {
                area.active = false;
            } else {
                area.active = true;
                // let icon = area.getChildByName("icon").getComponent(Sprite);
                let descLab: RichText = cont.getChildByName("descLab").getComponent(RichText);
                let icon: Sprite = cont.getChildByName("icon").getComponent(Sprite);
                let nameLab: Label = cont.getChildByName("nameLab").getComponent(Label);
                let iconName: string = "area_icon_none";
                descLab.string = "";
                nameLab.string = "未揭示";
                switch (data.terrainState) {
                    case proto.base.BattleRoomInTerrainState.TerrainStateUnknown: 
                        if (round && round.levelData.reveal[i] != undefined) {
                            descLab.string = "第" + round.levelData.reveal[i] + "回合开启";
                        } else descLab.string = "未知";
                        break;
                    case proto.base.BattleRoomInTerrainState.TerrainStateHide:
                        if (round && round.levelData.reveal[i] != undefined) {
                            descLab.string = "第" + round.levelData.reveal[i] + "回合开启";
                        } else descLab.string = "未揭示";
                        break;
                    case proto.base.BattleRoomInTerrainState.TerrainStateShow:
                        let std: StdArea = CfgMgr.getArea(data.configId);
                        descLab.string = std.AffectText;
                        iconName = std.Icon;
                        nameLab.string = std.AreaName;
                        break;
                    case proto.base.BattleRoomInTerrainState.TerrainStateDestroy:
                        descLab.string = "已销毁";
                        break
                    default:
                        if (round && round.levelData.reveal[i] != undefined) {
                            descLab.string = "第" + round.levelData.reveal[i] + "回合开启";
                        } else descLab.string = "未揭示";
                }
                ResMgr.LoadResAbSub(path.join(folder_icon, `areaIcon/${iconName}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                    icon.spriteFrame = res;
                });
                let labTrans: UITransform = descLab.node.getComponent(UITransform);
                contTrans.height = Math.max(60, labTrans.height);
            }
        }
        this.areaCont.getComponent(Layout).updateLayout();
    }

    protected onShow(): void {
        this.playHandTimeEffect.node.active = false;
        this.doubleEffect.node.active = false;
        this.roundStartCont.active = false;
        this.settlementCont.active = false;
        this.unusualCont.active = false;
        this.sectionSettleDataMap = null;
        this.settlementData = null;
        this.isSettlementEnd = false;
        EventMgr.on(Battle_UpdateTerrain, this.onTerrain, this);
        EventMgr.on(Battle_PlayNewRoundEffect, this.onPlayRoundSatrt, this);
        EventMgr.on(Battle_ShowSettlement, this.onShowSettlement, this);
        EventMgr.on(Battle_RoomUnusual, this.onShowUnusual, this);
        EventMgr.on(Evt_SectionSettle, this.onSectionSettle, this);
        EventMgr.on(Evt_BattlePlayHandTime, this.onPlayHandTiemEnd, this);
        EventMgr.on(Evt_ShowBattleDoubleEffect, this.onShowBattleDoubleEffect, this);
        EventMgr.on(Evt_StarElementSettle, this.onStarElementSettle, this);
    }

    /**
     * 刷新战斗ui
     * @param data 
     */
    public flush(roomData: proto.base.IBattleRoomSummary) {
        this.roomData = roomData;
        this.updateArea([null, null, null]);
    }

    protected onHide(...args: any[]): void {
        this.roomData = null;
        EventMgr.off(Battle_UpdateTerrain, this.onTerrain, this);
        EventMgr.off(Battle_PlayNewRoundEffect, this.onPlayRoundSatrt, this);
        EventMgr.off(Battle_ShowSettlement, this.onShowSettlement, this);
        EventMgr.off(Battle_RoomUnusual, this.onShowUnusual, this);
        EventMgr.off(Evt_SectionSettle, this.onSectionSettle, this);
        EventMgr.off(Evt_BattlePlayHandTime, this.onPlayHandTiemEnd, this);
        EventMgr.off(Evt_ShowBattleDoubleEffect, this.onShowBattleDoubleEffect, this);
        EventMgr.off(Evt_StarElementSettle, this.onStarElementSettle, this);
    }

    private onPlayHandTiemEnd(): void {
        this.playHandTimeEffect.node.active = true;
        this.playHandTimeEffect.clearAnimation();
        this.playHandTimeEffect.setAnimation(0, "animation", false);
        this.playHandTimeEffect.setCompleteListener(() => {
            this.playHandTimeEffect.node.active = false;
        });
    }

    private onShowBattleDoubleEffect(worldPos: Vec3): void {
        let showPos: Vec3 = GameSet.mainCamera.convertToUINode(worldPos, this.node);
        this.doubleEffect.node.position = showPos;
        this.doubleEffect.node.active = true;
        this.doubleEffect.clearAnimation();
        this.doubleEffect.setAnimation(0, "animation", false);
        this.doubleEffect.setCompleteListener(() => {
            this.doubleEffect.node.active = false;
        });

        Shake.Start(10, 1);
    }

    private onShowSettlement(roomId: string, playerAId: string, data: proto.base.BattleRoomOpOutput_Settlement): void {
        this.settlementData = data;
        this.settlementPlayerId = playerAId;
        this.playSettlementEffect();
        this.sendLeaveRoom();
    }

    private onSectionSettle(data: proto.pb.PlayerPvpRankBattleSettlePush): void {
        if (!this.sectionSettleDataMap) this.sectionSettleDataMap = {};
        this.sectionSettleDataMap[data.rankRecord.roomId] = data;
        if (this.isSettlementEnd && this.roomData.modeInfo.mode == proto.base.BattleMode.BattleModeRank) {
            this.showSectionSettle();
        }
    }

    private onStarElementSettle(data: proto.pb.PlayerPvpStarBattleSettlePush): void {
        if (!this.starElementSettleDataMap) this.starElementSettleDataMap = {};
        this.starElementSettleDataMap[data.starRecord.roomId] = data;
        if (this.isSettlementEnd && this.roomData.modeInfo.mode == proto.base.BattleMode.BattleModeStar) {
            this.showSatrElement();
        }
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.unusualOkBtn:
                this.exitFight();
                break;
        }
    }

    private onExit(): void {
        if (this.isSettlementEnd) {
            this.exitFight();
        }
    }

    private exitFight(): void {
        this.Hide();
        EventMgr.emit(Battle_Exit);
    }

    private sendLeaveRoom(): void {
        let server: proto.pb.IServer = proto.pb.Server.create();
        server.id = this.roomData.serverId;
        let data = new Req["battle.protocol.battleroomleave"]();
        data.server = server;
        data.roomId = this.roomData.roomId;
        Session.Send(Route["battle.protocol.battleroomleave"], data);
        console.log("无玩家主动退出房间 发送离开房间---->")
    }

    private onPlayRoundSatrt(curRound: number, maxRound: number): void {
        this.roundStartCont.active = true;
        this.roundStartEffect.clearAnimation();
        this.roundNumLab.string = `${curRound}/${maxRound}`;
        this.roundStartEffect.setAnimation(0, "animation", false);
        this.roundStartEffect.setCompleteListener(() => {
            EventMgr.emit(Battle_End_Round);
            this.roundStartCont.active = false;
        })
    }

    private onShowUnusual(str: string): void {
        this.unusualCont.active = true;
        this.unusualLab.string = str;
    }

    private playSettlementEffect(): void {
        this.settlementCont.active = true;
        this.settlementEffect.clearAnimation();
        let effectName: string;
        if (this.settlementData.tie) {
            effectName = "ui_result_draw";
        } else if (this.settlementPlayerId == this.settlementData.winnerPlayerId) {
            effectName = "ui_result_win";
        } else {
            if (this.settlementPlayerId == this.settlementData.leavePlayerId) {
                effectName = "ui_result_run";
            } else if (this.settlementData.leavePlayerId) {
                Tips.Show("对方逃跑!");
                effectName = "ui_result_win";
            } else {
                effectName = "ui_result_lost";
            } 
        }
        ResMgr.LoadResAbSub(`spine/${effectName}/${effectName}`, sp.SkeletonData, (res: sp.SkeletonData) => {
            this.settlementEffect.skeletonData = res;
            this.settlementEffect.setAnimation(0, "show", false);
            this.settlementEffect.setCompleteListener(() => {
                this.settlementEffect.setAnimation(0, "loop", true);
                this.isSettlementEnd = true;
                if (this.roomData.isReplay) {
                    
                } else {
                    if (this.roomData.modeInfo.mode == proto.base.BattleMode.BattleModeRank) {
                        this.showSectionSettle();    
                    } else if(this.roomData.modeInfo.mode == proto.base.BattleMode.BattleModeStar) {
                        this.showSatrElement();
                    }
                    
                }
            });
        });
    }

    //排位赛结算
    private showSectionSettle(): void {
        let data: proto.pb.PlayerPvpRankBattleSettlePush = this.sectionSettleDataMap ? this.sectionSettleDataMap[this.roomData.roomId] : null;
        if (data) {
            this.isSettlementEnd = false;
            Goto("SeasonSettlePanel", data, this.settlementPlayerId, () => {
                this.settlementCont.active = false;
            }, () => {
                this.isSettlementEnd = true;
                this.onExit();
            });
        }
    }

    //星元对战结算
    private showSatrElement(): void {
        let data: proto.pb.PlayerPvpStarBattleSettlePush = this.starElementSettleDataMap ? this.starElementSettleDataMap[this.roomData.roomId] : null;
        if (data && data.rewardThings  && data.rewardThings.length) {
            this.isSettlementEnd = false;
            RewardTips.Show(data.rewardThings, null, () => {
                this.settlementCont.active = false;
            }, () => {
                this.isSettlementEnd = true;
                this.onExit();
            });
        }
    }
}