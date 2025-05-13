import { Node, Button, Component, EditBox, Label, ProgressBar, Sprite, path, SpriteFrame, v3 } from "cc";
import { CardGroupCoverItem } from "../common/CardGroupCoverItem";
import { CfgMgr, StdPvpLevel, StdPVPSnatch } from "../../manager/CfgMgr";
import proto from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { DateUtils } from "../../utils/DateUtils";
import { EventMgr, Evt_SectionUpdate, Evt_Set_Battle_Card_Group_Update } from "../../manager/EventMgr";
import { MsgPanel } from "../common/MsgPanel";
import { ResMgr } from "../../manager/ResMgr";
import { Goto } from "../../DL";

export class VSSeasonPage extends Component {
    private battleLogBtn: Button;
    private awardBtn: Button;
    private sectionIcon: Sprite;
    private sectionNameImg: Sprite;
    private starCont: Node;
    private maxStarCont: Node;
    private maxStarNumLab: Label;
    private expNumCont: Node;
    private expLineBg: Node;
    private curNumLab: Label;
    private maxNumLab: Label;
    private pro: ProgressBar;
    private vsBtn: Button;
    private cardGroupBtn: Button;
    private cardGroupCoverItem: CardGroupCoverItem;
    private nameImg: Sprite;
    private timeLab: Label;
    private curStdPVPSnatch: StdPVPSnatch;
    private curStdPvpLv: StdPvpLevel;
    private seasonData: proto.pb.PlayerPvpInfoPush;
    private curStar: number;
    private maxStar: number;
    private cardGroupData: proto.base.IDeckAttrs;
    private changeBtn: Button;
    private addBtn: Button;
    private subBtn: Button;
    private EditBox: EditBox;
    protected onLoad() {
        this.battleLogBtn = this.node.getChildByPath("btnCont/battleLogBtn").getComponent(Button);
        this.awardBtn = this.node.getChildByPath("btnCont/awardBtn").getComponent(Button);
        this.sectionIcon = this.node.getChildByPath("sectionCont/sectionIcon").getComponent(Sprite);
        this.sectionNameImg = this.node.getChildByPath("sectionCont/sectionNameImg").getComponent(Sprite);
        this.expNumCont = this.node.getChildByPath("sectionCont/expCont");
        this.expLineBg = this.node.getChildByPath("sectionCont/expCont/expLineBg");
        this.curNumLab = this.node.getChildByPath("sectionCont/expCont/numCont/curNumLab").getComponent(Label);
        this.maxNumLab = this.node.getChildByPath("sectionCont/expCont/numCont/maxNumLab").getComponent(Label);
        this.starCont = this.node.getChildByPath("sectionCont/starCont");
        this.maxStarCont = this.node.getChildByPath("sectionCont/maxStarCont");
        this.maxStarNumLab = this.node.getChildByPath("sectionCont/maxStarCont/maxStarNumLab").getComponent(Label);
        this.pro = this.node.getChildByPath("sectionCont/pro").getComponent(ProgressBar);
        this.vsBtn = this.node.getChildByPath("vsBtn").getComponent(Button);
        this.cardGroupBtn = this.node.getChildByPath("cardGroupBtn").getComponent(Button);
        this.cardGroupCoverItem = this.node.getChildByPath("cardGroupBtn/CardGroupCoverItem").addComponent(CardGroupCoverItem);
        this.changeBtn = this.node.getChildByPath("changeBtn").getComponent(Button);
        this.addBtn = this.node.getChildByPath("addBtn").getComponent(Button);
        this.subBtn = this.node.getChildByPath("subBtn").getComponent(Button);
        this.EditBox = this.node.getChildByPath("EditBox").getComponent(EditBox);
        this.nameImg = this.node.getChildByPath("topRightCont/nameImg").getComponent(Sprite);
        this.timeLab = this.node.getChildByPath("topRightCont/timeCont/timeLab").getComponent(Label);
        
        this.battleLogBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.awardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.cardGroupBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.vsBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.changeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.addBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.subBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }

    protected onEnable(): void {
        EventMgr.on(Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
        EventMgr.on(Evt_SectionUpdate, this.onSectionUpdate, this);
    }

    protected onDisable(): void {
        EventMgr.off(Evt_Set_Battle_Card_Group_Update, this.onSetCardGroup, this);
        EventMgr.off(Evt_SectionUpdate, this.onSectionUpdate, this);
    }

    protected update(dt: number): void {
        if (this.curStdPVPSnatch) {
            let openTime: number = PlayerData.GetCurSeasonOpenTime();
            if (openTime > 0) {
                let endTime: number = PlayerData.GetCurSeasonEndTime();
                if (endTime > 0) {
                    let residueTime: number = endTime - DateUtils.ServerTime;
                    let day: number = Math.floor(residueTime / 86400);
                    if (day >= 1) {
                        this.timeLab.string = `${day}天` + DateUtils.FormatTime(residueTime - day * 86400, "%{hh}:%{mm}:%{ss}");
                    } else {
                        if (residueTime > 0) {
                            this.timeLab.string = DateUtils.FormatTime(residueTime, "%{hh}:%{mm}:%{ss}");
                        } else {
                            this.timeLab.string = "赛季已结束";
                        }
                    }
                    
                } else {
                    this.timeLab.string = "赛季未开启";
                }
                
            } else {
                this.timeLab.string = "赛季未开启";
            }
        }
    }

    public Show(): void {
        this.node.active = true;
        this.initShow();
    }
    
    public Hide(): void {
        this.node.active = false;
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.battleLogBtn:
                Goto("VSSeasonFightLogPanel");
                break;
            case this.awardBtn:
                Goto("VSSectionAwardPanel");
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
                if (!PlayerData.CurSeasonData || PlayerData.CurSeasonData.currentSeasonId == 0) {
                    MsgPanel.Show("暂时没有赛季进行中");
                    return;
                }
                if (DateUtils.ServerTime > PlayerData.GetCurSeasonEndTime()) {
                    MsgPanel.Show("赛季已结束");
                    return;
                }
                Goto("VSPanel", proto.base.BattleMode.BattleModeRank);
                break;
            case this.changeBtn:
                let num: number = Number(this.EditBox.string);
                if (isNaN(num)) return;
                this.seasonData.currentRankInfo.rankPoints = num;
                this.updateSection();
                break;
            case this.addBtn:
                let num1: number = this.seasonData.currentRankInfo.rankPoints + 1;
                this.seasonData.currentRankInfo.rankPoints = num1;
                this.updateSection();
                break
            case this.subBtn:
                let num2: number = this.seasonData.currentRankInfo.rankPoints - 1;
                this.seasonData.currentRankInfo.rankPoints = num2;
                this.updateSection();
                break;
            default:
                break;
        }
    }

    private onSetCardGroup(): void {
        this.updateCardGroup();
    }

    private onSectionUpdate(): void {
        this.updateSection();
    }

    private updateCardGroup(): void {
        this.cardGroupData = PlayerData.CurFightCardGroup;
        this.cardGroupCoverItem.SetData(this.cardGroupData, false);
    }

    private initShow(): void {
        this.updateCardGroup();
        this.updateSection();
    }

    private updateSection(): void {
        this.seasonData = PlayerData.CurSeasonData;
        if (this.seasonData) {
            this.curStdPVPSnatch = CfgMgr.GetStdPVPSnatch(this.seasonData.currentSeasonId);
            if (!this.curStdPVPSnatch) {
                
                return;
            }
            ResMgr.LoadResAbSub(path.join("sheets/vs", `${this.curStdPVPSnatch.View}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                this.nameImg.spriteFrame = res;
            });
        } else {
            
            return;
        }
        this.EditBox.string = this.seasonData.currentRankInfo.rankPoints.toString();
        this.curStdPvpLv = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.seasonData.currentRankInfo.rankPoints);
        let point: number = Math.max(this.seasonData.currentRankInfo.rankPoints - this.curStdPvpLv.LevelPoints, 0);
        this.curStar = Math.floor( point / this.curStdPvpLv.StarPoints);
        this.maxStar = this.curStdPvpLv.Star -1;
        if (this.curStdPvpLv.Star == 1) {
            this.starCont.active = false;
            this.expLineBg.active = false;
            this.maxStarCont.active = true;
            this.maxStarNumLab.string = `x ${this.curStar}`;
            this.expNumCont.position = v3(296, -268, 0);
            let starNode: Node = this.maxStarCont.getChildByName("star");
            let bright: Node = starNode.getChildByName("bright");
            bright.active = this.curStar > 0;
        } else {
            this.maxStarCont.active = false;
            this.expLineBg.active = true;
            this.starCont.active = true;
            this.expNumCont.position = v3(0, -194, 0);
            
            for (let index = 0; index < this.starCont.children.length; index++) {
                let starNode: Node = this.starCont.children[index];
                if (index < this.maxStar) {
                    starNode.active = true;
                    let bright: Node = starNode.getChildByName("bright");
                    bright.active = this.curStar > index;
                } else {
                    starNode.active = false;
                }
                
            }
        }
        
        ResMgr.LoadResAbSub(path.join("sheets/sectionIcon", this.curStdPvpLv.LevelIcon, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.sectionIcon.spriteFrame = res;
        });
        ResMgr.LoadResAbSub(path.join("sheets/sectionIcon", this.curStdPvpLv.LevelNameImg, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.sectionNameImg.spriteFrame = res;
        });
        let curExp: number = point % this.curStdPvpLv.StarPoints;
        let mapExp: number = this.curStdPvpLv.StarPoints;
        this.curNumLab.string = curExp.toString();
        this.maxNumLab.string = mapExp.toString();
        this.pro.progress = curExp / mapExp;
    }
}