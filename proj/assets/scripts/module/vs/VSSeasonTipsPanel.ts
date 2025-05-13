import { Label, path, Sprite, SpriteFrame} from "cc";
import { Panel } from "../../manager/GameRoot";
import { PlayerData } from "../player/PlayerData";
import proto from "../../net/Protocol";
import { CfgMgr, StdPvpLevel, StdPVPSnatch } from "../../manager/CfgMgr";
import { ResMgr } from "../../manager/ResMgr";

export class VSSeasonTipsPanel extends Panel {
    protected prefab: string = "prefabs/vs/VSSeasonTipsPanel";
    private icon: Sprite;
    private nameLab: Label;
    private seasonData: proto.pb.PlayerPvpInfoPush;
    protected onLoad() {
        this.icon = this.find("icon", Sprite);
        this.nameLab = this.find("nameLab", Label);
        this.CloseBy("closeBtn");
    }

    public flush(): void {
        this.seasonData = PlayerData.CurSeasonData;
        this.setSeasonInfo();
    }

    protected onShow(): void {
        
    }

    protected onHide(): void {
        
    }

    private setSeasonInfo(): void {
        let curStdPVPSnatch: StdPVPSnatch = CfgMgr.GetStdPVPSnatch(this.seasonData.currentSeasonId);
        if (!curStdPVPSnatch) {
            this.Hide();
            return;
        }
        this.nameLab.string = curStdPVPSnatch.MatchName;
        ResMgr.LoadResAbSub(path.join("sheets/season", `icon_${curStdPVPSnatch.MatchID}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.icon.spriteFrame = res;
        });
    }
}