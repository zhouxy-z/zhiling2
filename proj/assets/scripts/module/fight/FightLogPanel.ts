import { Button, EditBox, Label, Node } from "cc";
import { CellInfo, VList } from "../../component/VList";
import { Panel } from "../../manager/GameRoot";
import { PlayerData } from "../player/PlayerData";
import LocalStorage from "../../utils/LocalStorage";
import { FightLogItem } from "./FightLogItem";
import proto, { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { EventMgr, Evt_BattleLogGet, Evt_BattleLogInfo } from "../../manager/EventMgr";
import { MsgPanel } from "../common/MsgPanel";

export class FightLogPanel extends Panel {
    protected prefab: string = "prefabs/fight/FightLogPanel";
    private logList: VList;
    private btn: Button;
    private closeBtn: Button;
    private editBox: EditBox;
    private logInfoCont: Node;
    private maxRoundLab: Label;
    private versionLab: Label;
    private completeLab: Label;
    private roomIdLab: EditBox;
    private waitSecondLab: Label;
    private aiWaitSecondLab: Label;
    private areaIdLab: Label;
    private buildInfoLab: Label;
    private infoBtn: Button;
    private logicInfoBtn: Button;
    private infoCloseBtn: Button;
    private playList: VList;
    private logDatas: proto.base.IBattleRecordData[];
    private curSelectData: proto.base.IBattleRoomReplaySummary;
    private selectPlayer: proto.base.IBattleRoomPlayerContext;
    protected onLoad() {
        this.logList = this.find("logList", VList);
        this.logList.updateCell = (cell: Node, cellInfo: CellInfo) => {
            let logData: proto.base.IBattleRecordData = this.logDatas[cellInfo.index];
            let cellItem: FightLogItem = cell.getComponent(FightLogItem) || cell.addComponent(FightLogItem);
            cellItem.SetData(logData);
        }

        this.btn = this.find("btn", Button);
        this.closeBtn = this.find("closeBtn", Button);
        this.editBox = this.find("editBox", EditBox);
        this.logInfoCont = this.find("logInfoCont");
        this.maxRoundLab = this.find("logInfoCont/maxRoundLab", Label);
        this.versionLab = this.find("logInfoCont/versionLab", Label);
        this.completeLab = this.find("logInfoCont/completeLab", Label);
        this.roomIdLab = this.find("logInfoCont/roomIdLab", EditBox);
        this.waitSecondLab = this.find("logInfoCont/waitSecondLab", Label);
        this.aiWaitSecondLab = this.find("logInfoCont/aiWaitSecondLab", Label);
        this.areaIdLab = this.find("logInfoCont/areaIdLab", Label);
        this.buildInfoLab = this.find("logInfoCont/buildInfoLab", Label);
        this.infoBtn = this.find("logInfoCont/infoBtn", Button);
        this.logicInfoBtn = this.find("logInfoCont/logicInfoBtn", Button);
        this.infoCloseBtn = this.find("logInfoCont/infoCloseBtn", Button);
        this.playList = this.find("logInfoCont/playList", VList);
        this.playList.updateCell = (cell: Node, cellInfo: CellInfo) => {
            let playerData: proto.base.IBattleRoomPlayerContext = this.curSelectData.createContext.players[cellInfo.index];
            cell.getChildByName("playerIdLab").getComponent(Label).string = "玩家id：" + playerData.playerId;
            cell.getChildByName("playerIdNameLab").getComponent(Label).string = "玩家名称：" + playerData.name;
            cell.getChildByName("levelLab").getComponent(Label).string = "玩家等级：" + playerData.level;
            cell.getChildByName("isAiLab").getComponent(Label).string = "是否AI：" + playerData.isAi + " AIId：" + playerData.aiGroupId;
            cell.getChildByName("deckIdLab").getComponent(Label).string = "卡组id：" + playerData.playerId;
            let cardIdStr: string = "卡牌id：";
            for (let index = 0; index < playerData.cards.length; index++) {
                const card = playerData.cards[index];
                cardIdStr += card.cardId;
                cardIdStr += "、";
            }
            cell.getChildByName("cardIdLab").getComponent(Label).string = "卡组id：" + cardIdStr;
            cell.getChildByName("select").active = cellInfo.isSelect;
            if (cellInfo.isSelect) {
                this.selectPlayer = this.curSelectData.createContext.players[cellInfo.index];
            }
        }
        this.playList.selectCell = (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            this.selectPlayer = this.curSelectData.createContext.players[cellInfo.index];
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
        }
        this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.infoBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.infoCloseBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.logicInfoBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }

    public flush(...args: any[]): void {
        this.editBox.string = "";
        this.logInfoCont.active = false;
        this.selectPlayer = null;
        this.curSelectData = null;

    }

    protected onShow(): void {
        this.logDatas = [];
        this.logList.cellCount = 0;
        let key: string = `battleLog_${PlayerData.player.playerId}`;
        let datas: any[] = LocalStorage.GetObject(key);
        if (datas) {
            for (let index = 0; index < datas.length; index++) {
                const element = datas[index];
                this.logDatas.push({
                    roomId: element.roomId,
                    createTime: element?.createTime || 0,
                    playerId: PlayerData.player.playerId,
                })
            }

        }
        this.logDatas.sort((a: proto.base.IBattleRecordData, b: proto.base.IBattleRecordData) => {
            return b.createTime - a.createTime;
        });
        this.logList.cellCount = this.logDatas.length;
        // let data = new Req["battle_mgr.protocol.getbattlerecentrecords"]();
        // data.count = 1;
        //Session.Send(data);
        console.log("发送获取战报记录---->");
        EventMgr.on(Evt_BattleLogGet, this.onUpdateBattleLog, this);
        EventMgr.on(Evt_BattleLogInfo, this.onBattleLogInfo, this);
    }

    protected onHide(...args: any[]): void {

    }

    private onUpdateBattleLog(list: proto.base.IBattleRecordData[]): void {
        this.logDatas = list;
        this.logList.cellCount = this.logDatas.length;
    }

    private onBattleLogInfo(logData: proto.base.IBattleRoomReplaySummary): void {
        for (const key in logData) {
            this.curSelectData = logData[key];
            break;
        }
        if (!this.curSelectData) {
            MsgPanel.Show("战报异常")
            return;
        }
        this.logInfoCont.active = true;
        this.maxRoundLab.string = `最大回合数：${this.curSelectData.roundTotal}`;
        this.versionLab.string = `回放版本号：${this.curSelectData.version}`;
        this.completeLab.string = `是否正常结束：${this.curSelectData.isComplete}`;
        this.roomIdLab.string = `${this.curSelectData.createContext.roomId}`;
        this.waitSecondLab.string = `等待输入时长：${this.curSelectData.createContext.waitSecond}`;
        this.aiWaitSecondLab.string = `AI等待输入时长：${this.curSelectData.createContext.aiWaitSecond}`;
        this.areaIdLab.string = `地形配置id：${this.curSelectData.createContext.areaIds}`;
        this.buildInfoLab.string = `构建信息：${this.curSelectData.buildInfo}`;
        this.playList.cellCount = this.curSelectData.createContext.players.length;
        this.playList.selectIndex(0);
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.closeBtn:
                this.Hide();
                break;
            case this.btn:
                let roomId: string;
                if (this.editBox.string && this.editBox.string.length > 0) {
                    roomId = this.editBox.string;
                    let data = new Req["battle_mgr.protocol.getbattlereplayroom"]();
                    data.roomId = [roomId];
                    Session.Send(Route["battle_mgr.protocol.getbattlereplayroom"], data);
                    console.log("发送获取战报详情---->")
                }

                break;
            case this.infoBtn:
                if (this.curSelectData && this.selectPlayer) {
                    let data = new Req["battle_mgr.protocol.createbattlereplayroom"]();
                    data.replayRoomId = this.curSelectData.createContext.roomId;
                    data.beginRound = 1;
                    data.viewPlayerId = this.selectPlayer.playerId;
                    Session.Send(Route["battle_mgr.protocol.createbattlereplayroom"], data);
                    console.log("以玩家" + data.viewPlayerId + "视角创建战报房间---->" + data.replayRoomId);
                }
                break;
            case this.logicInfoBtn:
                if (this.curSelectData && this.selectPlayer) {
                    let data = new Req["battle_mgr.protocol.createbattlereplayroom"]();
                    data.replayRoomId = this.curSelectData.createContext.roomId;
                    data.beginRound = 1;
                    data.logicReplay = true;
                    data.viewPlayerId = this.selectPlayer.playerId;
                    Session.Send(Route["battle_mgr.protocol.createbattlereplayroom"], data);
                    console.log("以玩家" + data.viewPlayerId + "视角创建战报房间---->" + data.replayRoomId);
                }
                break;
            case this.infoCloseBtn:
                this.logInfoCont.active = false;
                break;
        }
    }
}