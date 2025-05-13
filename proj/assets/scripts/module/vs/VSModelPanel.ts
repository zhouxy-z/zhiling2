import { Label, Node, path, Sprite, SpriteFrame } from "cc";
import { CellInfo, VList } from "../../component/VList";
import { Panel } from "../../manager/GameRoot";
import { PlayerData } from "../player/PlayerData";
import { MsgPanel } from "../common/MsgPanel";
import { BeforeGameUtils } from "../../utils/BeforeGameUtils";
import { VSStarElementPage } from "./VSStarElementPage";
import { VSSeasonPage } from "./VSSeasonPage";
import proto from "../../net/Protocol";
import { ResMgr } from "../../manager/ResMgr";


interface ITabInfo {
    type: proto.base.BattleMode,
    name: string,
}

export class VSModelPanel extends Panel {
    protected prefab: string = "prefabs/vs/VSModelPanel";
    private vsTabList: VList;
    private tabDatas: ITabInfo[] = [
        {
            type: proto.base.BattleMode.BattleModeStar,
            name: "星元对战",
        },
        {
            type: proto.base.BattleMode.BattleModeRank,
            name: "排位赛",
        }
    ];
    private pageMap: { [key: number]: any };
    protected onLoad() {
        this.vsTabList = this.find("vsTabList", VList);
        this.vsTabList.updateCell = this.updateCellTab.bind(this);
        this.vsTabList.selectCondCheck = this.selectCondCheckTab.bind(this);
        this.vsTabList.selectCell = this.selectCellTab.bind(this);
        this.vsTabList.cellCount = this.tabDatas.length;
        let starElementPage: VSStarElementPage =  this.find("starElementPage").addComponent(VSStarElementPage);
        let seasonPage: VSSeasonPage = this.find("seasonPage").addComponent(VSSeasonPage);

        this.pageMap = BeforeGameUtils.toHashMapObj(
            proto.base.BattleMode.BattleModeStar, starElementPage,//星元对战
            proto.base.BattleMode.BattleModeRank, seasonPage,//排位赛
        );
        this.CloseBy("closeBtn");
    }

    public flush(selectType: proto.base.BattleMode = proto.base.BattleMode.BattleModeStar): void {
        let selectIndex: number = 0;
        let tabData: ITabInfo;
        for (let index = 0; index < this.tabDatas.length; index++) {
            tabData = this.tabDatas[index];
            if (tabData.type == selectType && this.tabCondCheck(index)) {
                selectIndex = index;
                break;
            }
        }
        this.vsTabList.selectIndex(selectIndex);
    }

    protected onShow(): void {
        
    }

    protected onHide(): void {
       
    }

    private updateCellTab(cell: Node, cellInfo: CellInfo): void {
        let tabInfo: ITabInfo = this.tabDatas[cellInfo.index];
        cell.getChildByPath("select").active = cellInfo.isSelect;
        let bg: Sprite = cell.getChildByPath("bg").getComponent(Sprite);
        let selectImg: Sprite = cell.getChildByName("select").getComponent(Sprite);
        ResMgr.LoadResAbSub(path.join("sheets/vs", "vs_mode_tab_def_" + tabInfo.type, "spriteFrame"), SpriteFrame, res => {
            bg.spriteFrame =  res;
        });
        ResMgr.LoadResAbSub(path.join("sheets/vs", "vs_mode_tab_select_" + tabInfo.type, "spriteFrame"), SpriteFrame, res => {
            selectImg.spriteFrame =  res;
        });
    }

    private selectCellTab(cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo): void {
        if (cell) {
            cell.getChildByPath("select").active = cellInfo.isSelect;
        }
        if (lastCell && lastInfo) {
            lastCell.getChildByPath("select").active = lastInfo.isSelect;
        } 
        this.selectTab(cellInfo.index);
    }

    private selectCondCheckTab(cell: Node, cellInfo: CellInfo): boolean {
        return this.tabCondCheck(cellInfo.index, true);
    }

    private tabCondCheck(index: number, showTips: boolean = false): boolean {
        let tabInfo: ITabInfo = this.tabDatas[index];
        let result: boolean = false;
        switch(tabInfo.type) {
            case proto.base.BattleMode.BattleModeStar:
                result = PlayerData.SatrElementData && PlayerData.SatrElementData.currentSeasonId != 0;
                if (showTips && !result) MsgPanel.Show("暂时没有星元对战进行中");
                break;
            case proto.base.BattleMode.BattleModeRank:
                result = PlayerData.CurSeasonData && PlayerData.CurSeasonData.currentSeasonId != 0;
                if (showTips && !result) MsgPanel.Show("暂时没有赛季进行中");
                break;
        }
        return result;
    }

    private selectTab(index: number): void {
        let tabInfo: ITabInfo = this.tabDatas[index];
        let comp: VSStarElementPage | VSSeasonPage;
        for (let key in this.pageMap) {
            comp = this.pageMap[key];
            if (Number(key) == tabInfo.type) {
                comp.Show();
            } else {
                comp.Hide();
            }
        }
    }
}