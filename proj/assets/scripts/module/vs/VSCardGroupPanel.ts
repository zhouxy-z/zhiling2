import { Node } from "cc";
import { CellInfo, VList } from "../../component/VList";
import { Panel } from "../../manager/GameRoot";
import proto, { Req, Route } from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { VSCardGruopItem } from "./VSCardGruopItem";
import { Session } from "../../net/Session";

export class VSCardGroupPanel extends Panel {
    protected prefab: string = "prefabs/vs/VSCardGroupPanel";
    private cardGroupList: VList;
    private cardGroupDataList: proto.base.IDeckAttrs[];
    protected onLoad() {
        this.cardGroupList = this.find("cont/cardGroupList", VList);
        this.cardGroupList.updateCell = this.updateCardGroupCell.bind(this);
        this.cardGroupList.clickCell = this.cardGroupClick.bind(this);
        this.CloseBy("mask");
        this.CloseBy("cont/closeBtn");
    }

    public flush(): void {
        this.cardGroupDataList = PlayerData.cardNameList;
        this.cardGroupList.cellCount = this.cardGroupDataList.length;
    }

    protected onShow(): void {
        
    }

    protected onHide(): void {
       
    }

    private updateCardGroupCell(cell: Node, cellInfo: CellInfo): void {
        let cellCom: VSCardGruopItem = cell.getComponent(VSCardGruopItem) || cell.addComponent(VSCardGruopItem);
        cellCom.SetData(this.cardGroupDataList[cellInfo.index]);
    }

    private cardGroupClick(cell: Node, cellInfo: CellInfo): void {
        let cardGroupData: proto.base.IDeckAttrs = this.cardGroupDataList[cellInfo.index];
        /* if (cardGroupData.size < CfgMgr.CardGuroupComm.DeckFullSize) {
            MsgPanel.Show(`卡组卡牌数量不足${CfgMgr.CardGuroupComm.DeckFullSize}张无法出战`);
            return;
        } */
        let set = new Req["logic.protocol.setdeckdefault"]();
        set.deckId = cardGroupData.id;
        Session.Send(Route["logic.protocol.setdeckdefault"],set);
        this.Hide();
    }
    
}