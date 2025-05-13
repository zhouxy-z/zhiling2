import { Node, Label, path, Sprite, SpriteFrame } from "cc";
import { CfgMgr, StdPvpLevel, StdPVPSnatch } from "../../manager/CfgMgr";
import { Panel } from "../../manager/GameRoot";
import { CellInfo, VList } from "../../component/VList";
import { PlayerData } from "../player/PlayerData";
import { DateUtils } from "../../utils/DateUtils";
import proto, { Req, Route } from "../../net/Protocol";
import { folder_icon, ResMgr } from "../../manager/ResMgr";
import { CardGroupCoverItem } from "../common/CardGroupCoverItem";
import { Session } from "../../net/Session";
import { EventMgr, Evt_SeasonFightLog } from "../../manager/EventMgr";
import { VSSectionFightLogItem } from "./VSSectionFightLogItem";
import { VSFightLogCardItem } from "./VSFightLogCardItem";

export class VSSeasonFightLogPanel extends Panel {
    protected prefab: string = "prefabs/vs/VSSeasonFightLogPanel";
    private logList: VList;
    private nameImg: Sprite;
    private timeLab: Label;
    private curStdPVPSnatch: StdPVPSnatch;
    private curStdPvpLv: StdPvpLevel;
    private seasonData: proto.pb.PlayerPvpInfoPush;
    private playerHeadA: Sprite;
    private playerNameA: Label;
    private playerHeadB: Sprite;
    private playerNameB: Label;
    private resultImg: Sprite;
    private pointLab: Label;
    private cardGroupA: CardGroupCoverItem;
    private cardListA: VList;
    private cardGroupB: CardGroupCoverItem;
    private cardListB: VList;
    private logDatas: proto.base.IPlayerPvpRankRecord[];
    private playerDataA: proto.base.IPlayerBattleContext;
    private playerDataB: proto.base.IPlayerBattleContext;
    protected onLoad() {
        this.logList = this.find("logList", VList);
        this.logList.updateCell = this.updateCellLog.bind(this);
        this.logList.selectCell = this.selectCellLog.bind(this);
        this.logList.clickCell = this.clickCellLog.bind(this);
        this.nameImg = this.find("nameImg", Sprite);
        this.timeLab = this.find("timeCont/timeLab", Label);
        this.playerHeadA = this.find("vsCont/topCont/playerContA/head", Sprite);
        this.playerNameA = this.find("vsCont/topCont/playerContA/nameLab", Label);
        this.playerHeadB = this.find("vsCont/topCont/playerContB/head", Sprite);
        this.playerNameB = this.find("vsCont/topCont/playerContB/nameLab", Label);
        this.resultImg = this.find("vsCont/topCont/resultImg", Sprite);
        this.pointLab = this.find("vsCont/topCont/pointLab", Label);
        this.cardGroupA = this.find("vsCont/cardGroupCoverItemA").addComponent(CardGroupCoverItem);
        this.cardListA = this.find("vsCont/cardListA", VList);
        this.cardListA.updateCell = this.updateCellCardA.bind(this);
        this.cardListA.clickCell = this.clickCellCardA.bind(this);
        this.cardGroupB = this.find("vsCont/cardGroupCoverItemB").addComponent(CardGroupCoverItem);
        this.cardListB = this.find("vsCont/cardListB", VList);
        this.cardListB.updateCell = this.updateCellCardB.bind(this);
        this.cardListB.clickCell = this.clickCellCardB.bind(this);
        this.CloseBy("closeBtn");
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

    public flush(): void {
        this.updateSection();
    }

    protected onShow(): void {
        this.onLogUpdate();
        let sendData = new Req["pvp.protocol.getpvprankbattlerecords"]();
        sendData.start = 0;
        sendData.limit = 20;
        Session.Send(Route["pvp.protocol.getpvprankbattlerecords"], sendData);
        EventMgr.on(Evt_SeasonFightLog, this.onLogUpdate, this);
    }

    protected onHide(): void {
        EventMgr.on(Evt_SeasonFightLog, this.onLogUpdate, this);
    }

    private onLogUpdate(logList?: proto.base.IPlayerPvpRankRecord[]): void {
        this.logDatas = logList || [];
        this.logList.cellCount = this.logDatas.length;

    }

    private updateSection(): void {
        this.seasonData = PlayerData.CurSeasonData;
        this.curStdPVPSnatch = CfgMgr.GetStdPVPSnatch(this.seasonData.currentSeasonId);
        this.curStdPvpLv = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.seasonData.currentRankInfo.rankPoints);
        
        
        ResMgr.LoadResAbSub(path.join("sheets/sectionIcon", this.curStdPvpLv.LevelNameImg, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.nameImg.spriteFrame = res;
        });
        
    }

    private clickCellLog(cell: Node, cellInfo: CellInfo): void {
        
    }

    private updateCellLog(cell: Node, cellInfo: CellInfo): void {
        let logData: proto.base.IPlayerPvpRankRecord = this.logDatas[cellInfo.index];
        cell.getChildByPath("select").active = cellInfo.isSelect;
        let logItem: VSSectionFightLogItem = cell.getComponent(VSSectionFightLogItem) || cell.addComponent(VSSectionFightLogItem);
        logItem.SetData(logData);
    }

    private selectCellLog(cell: Node, cellInfo: CellInfo, lastCell: Node, lastInfo: CellInfo): void {
        if (cell) {
            cell.getChildByPath("select").active = cellInfo.isSelect;
        }
        if (lastCell && lastInfo) {
            lastCell.getChildByPath("select").active = lastInfo.isSelect;
        } 
        this.selectLog(this.logDatas[cellInfo.index]);
    }

    private updateCellCardA(cell: Node, cellInfo: CellInfo): void {
        let cardData: proto.base.IBattleCard = this.playerDataA.cards[cellInfo.index];
        let logCardItem: VSFightLogCardItem = cell.getComponent(VSFightLogCardItem) || cell.addComponent(VSFightLogCardItem);
        logCardItem.SetData(cardData);
    }

    private clickCellCardA(cell: Node, cellInfo: CellInfo): void {
        
    }

    private updateCellCardB(cell: Node, cellInfo: CellInfo): void {
        let cardData: proto.base.IBattleCard = this.playerDataB.cards[cellInfo.index];
        let logCardItem: VSFightLogCardItem = cell.getComponent(VSFightLogCardItem) || cell.addComponent(VSFightLogCardItem);
        logCardItem.SetData(cardData);
    }

    private clickCellCardB(cell: Node, cellInfo: CellInfo): void {
        
    }

    private selectLog(data: proto.base.IPlayerPvpRankRecord): void {
        for (let key in data.battlePlayers) {
            let playerData: proto.base.IPlayerBattleContext = data.battlePlayers[key];
            if (playerData.playerId == PlayerData.UserInfo.playerId) {
                this.playerDataA = playerData;
            } else {
                this.playerDataB = playerData;
            }
        }
        
        this.pointLab.string = data.pointChange >= 0 ? `+${data.pointChange}` : `-${data.pointChange}`;
        let imgStr: string;
        if (data.result == proto.base.PvpResult.PvpResultWin) {
            imgStr = "win";
        } else if (data.result == proto.base.PvpResult.PvpResultLost) {
            imgStr = "lost";
        }else if (data.result == proto.base.PvpResult.PvpResultTie) {
            imgStr = "draw";
        }
        ResMgr.LoadResAbSub(path.join("sheets/vs", imgStr, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.resultImg.spriteFrame = res;
        });
        this.updatePlayerData(this.playerDataA, this.playerNameA, this.playerHeadA, this.cardGroupA, this.cardListA);
        this.updatePlayerData(this.playerDataB, this.playerNameB, this.playerHeadB, this.cardGroupB, this.cardListB);
    }

    private updatePlayerData(playerData: proto.base.IPlayerBattleContext, nameLab: Label, head: Sprite, cardGroupItem: CardGroupCoverItem, cardList: VList): void {
        let cfg = CfgMgr.GetHead(playerData.deckAttrs.avatarId);
        let headIconUrl: string;
        if(cfg){
            headIconUrl = cfg.icon;
            ResMgr.LoadResAbSub(path.join(folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
                head.spriteFrame =  res;
            });
        }
        nameLab.string = playerData.name;
        cardGroupItem.SetData(playerData.deckAttrs, false);
        cardList.cellCount = playerData.cards.length;
    }
}