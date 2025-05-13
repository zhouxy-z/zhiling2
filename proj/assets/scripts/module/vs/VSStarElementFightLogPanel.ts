import { Node, Label, path, Sprite, SpriteFrame } from "cc";
import { CfgMgr} from "../../manager/CfgMgr";
import { Panel } from "../../manager/GameRoot";
import { CellInfo, VList } from "../../component/VList";
import { PlayerData } from "../player/PlayerData";
import { folder_icon, ResMgr } from "../../manager/ResMgr";
import { CardGroupCoverItem } from "../common/CardGroupCoverItem";
import { VSSectionFightLogItem } from "./VSSectionFightLogItem";
import { VSFightLogCardItem } from "./VSFightLogCardItem";

export class VSStarElementFightLogPanel extends Panel {
    protected prefab: string = "prefabs/vs/VSStarElementFightLogPanel";
    private logList: VList;
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
    private logDatas: any[];
    private playerDataA: any;
    private playerDataB: any;
    protected onLoad() {
        this.logList = this.find("logList", VList);
        this.logList.updateCell = this.updateCellLog.bind(this);
        this.logList.selectCell = this.selectCellLog.bind(this);
        this.logList.clickCell = this.clickCellLog.bind(this);
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
        
    }

    public flush(): void {
        
    }

    protected onShow(): void {
        this.onLogUpdate();
        
    }

    protected onHide(): void {
       
    }

    private onLogUpdate(logList?: any[]): void {
        this.logDatas = logList || [];
        this.logList.cellCount = this.logDatas.length;

    }

    private clickCellLog(cell: Node, cellInfo: CellInfo): void {
        
    }

    private updateCellLog(cell: Node, cellInfo: CellInfo): void {
        let logData: any = this.logDatas[cellInfo.index];
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
        let cardData: any = this.playerDataA.cards[cellInfo.index];
        let logCardItem: VSFightLogCardItem = cell.getComponent(VSFightLogCardItem) || cell.addComponent(VSFightLogCardItem);
        logCardItem.SetData(cardData);
    }

    private clickCellCardA(cell: Node, cellInfo: CellInfo): void {
        
    }

    private updateCellCardB(cell: Node, cellInfo: CellInfo): void {
        let cardData: any = this.playerDataB.cards[cellInfo.index];
        let logCardItem: VSFightLogCardItem = cell.getComponent(VSFightLogCardItem) || cell.addComponent(VSFightLogCardItem);
        logCardItem.SetData(cardData);
    }

    private clickCellCardB(cell: Node, cellInfo: CellInfo): void {
        
    }

    private selectLog(data: any): void {
        for (let key in data.battlePlayers) {
            let playerData: any = data.battlePlayers[key];
            if (playerData.playerId == PlayerData.UserInfo.playerId) {
                this.playerDataA = playerData;
            } else {
                this.playerDataB = playerData;
            }
        }
        
        this.pointLab.string = data.pointChange >= 0 ? `+${data.pointChange}` : `-${data.pointChange}`;
        let imgStr: string;
        if (data.result == "win") {
            imgStr = "win";
        } else if (data.result == "lost") {
            imgStr = "lost";
        }else if (data.result == "draw") {
            imgStr = "draw";
        }
        ResMgr.LoadResAbSub(path.join("sheets/vs", imgStr, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.resultImg.spriteFrame = res;
        });
        this.updatePlayerData(this.playerDataA, this.playerNameA, this.playerHeadA, this.cardGroupA, this.cardListA);
        this.updatePlayerData(this.playerDataB, this.playerNameB, this.playerHeadB, this.cardGroupB, this.cardListB);
    }

    private updatePlayerData(playerData: any, nameLab: Label, head: Sprite, cardGroupItem: CardGroupCoverItem, cardList: VList): void {
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