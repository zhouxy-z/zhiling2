import { Component, Label, path, Sprite, SpriteFrame } from "cc";
import { folder_icon, ResMgr } from "../../manager/ResMgr";
import { CfgMgr } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import { DateUtils } from "../../utils/DateUtils";

export class VSSatrElementFightLogItem extends Component {
    private head: Sprite;
    private resultImg: Sprite;
    private timeLab: Label;
    private pointLab: Label;
    private data: any;
    private isInit: boolean = false;
    protected onLoad(): void {
        this.head = this.node.getChildByPath("head").getComponent(Sprite);
        this.resultImg = this.node.getChildByPath("resultImg").getComponent(Sprite);
        this.timeLab = this.node.getChildByPath("timeLab").getComponent(Label);
        this.pointLab = this.node.getChildByPath("pointLab").getComponent(Label);
       this.isInit = true;
       if (this.data) this.updateShow();
    }

    
    SetData(data: any): void {
        this.data = data;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        let dates: string[] = DateUtils.TimestampToDate(this.data.timestamp * 1000, true);
        this.timeLab.string = `${dates[0]}-${dates[1]}-${dates[2]}  ${dates[3]}:${dates[4]}:${dates[5]}`;
        let playerData: any = this.data.battlePlayers[PlayerData.UserInfo.playerId];
        let cfg = CfgMgr.GetHead(playerData.deckAttrs.avatarId);
        if(cfg){
            let headIconUrl = cfg.icon
            ResMgr.LoadResAbSub(path.join(folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
                this.head.spriteFrame =  res;
            });
        }

        let imgStr: string;
        if (this.data.result == "win") {
            imgStr = "win";
        } else if (this.data.result == "lost") {
            imgStr = "lost";
        }else if (this.data.result == "draw") {
            imgStr = "draw";
        }
        ResMgr.LoadResAbSub(path.join("sheets/vs", imgStr, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.resultImg.spriteFrame = res;
        });
        this.pointLab.string = this.data.pointChange >= 0 ? `+${this.data.pointChange}` : `-${this.data.pointChange}`;
    }
    
}