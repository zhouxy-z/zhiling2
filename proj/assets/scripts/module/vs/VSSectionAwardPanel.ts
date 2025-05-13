import { Panel } from "../../manager/GameRoot";
import { CellInfo, VList } from "../../component/VList";
import { Node} from "cc";
import { CfgMgr, StdPvpLevel, StdPVPSnatch } from "../../manager/CfgMgr";
import proto from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { EventMgr, Evt_SectionAwardInit, Evt_SectionAwardUpdate } from "../../manager/EventMgr";
import { VSSectionAwardItem } from "./VSSectionAwardItem";
import { Goto } from "../../DL";
export class VSSectionAwardPanel extends Panel {
    protected prefab: string = "prefabs/vs/VSSectionAwardPanel";
    private awardList: VList;
    private stdPvpLevelList: StdPvpLevel[];
    private curStdPVPSnatch: StdPVPSnatch;
    private seasonData: proto.pb.PlayerPvpInfoPush;
    protected onLoad() {
        
        this.awardList = this.find("cont/awardList", VList);
        this.awardList.updateCell = this.updateSeasonAwarCell.bind(this);
        this.CloseBy("cont/closeBtn");
        this.CloseBy("mask");
        
    }

    public flush(): void {
        this.updateShow();
    }

    protected onShow(): void {
        EventMgr.on(Evt_SectionAwardInit, this.onAwardDataInit, this);
        EventMgr.on(Evt_SectionAwardUpdate, this.onGetAward, this);
    }

    protected onHide(): void {
        EventMgr.off(Evt_SectionAwardInit, this.onAwardDataInit, this);
        EventMgr.off(Evt_SectionAwardUpdate, this.onGetAward, this);
    }


    private onAwardDataInit(): void {
        this.updateShow();
    }

    private onGetAward(data: proto.base.IPlayerRankLevelReward): void {
        if (data && data.things && data.things.length) {
            Goto("RewardTips", data.things);
        }
    }

    private updateShow(): void {
        this.seasonData = PlayerData.CurSeasonData;
        this.curStdPVPSnatch = CfgMgr.GetStdPVPSnatch(this.seasonData.currentSeasonId);
        this.stdPvpLevelList = CfgMgr.GetStdPvpLvCfgList(this.curStdPVPSnatch.RankGroupID);
        let curStdPvpLv = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.seasonData.currentRankInfo.rankPoints);
        let defIndex: number = 0;
        for (let index = 0; index < this.stdPvpLevelList.length; index++) {
            let std: StdPvpLevel = this.stdPvpLevelList[index];
            if (std.LevelID == curStdPvpLv.LevelID) {
                defIndex = index;
                break;
            }
        }
        this.awardList.cellCount = this.stdPvpLevelList.length;
        this.awardList.scrollToIndex(defIndex);
    }

    private updateSeasonAwarCell(cell: Node, cellInfo: CellInfo): void {
        let cellCom: VSSectionAwardItem = cell.getComponent(VSSectionAwardItem) || cell.addComponent(VSSectionAwardItem);
        cellCom.SetData(this.stdPvpLevelList[cellInfo.index]);
    }
}