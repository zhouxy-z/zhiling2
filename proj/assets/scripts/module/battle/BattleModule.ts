import { Battle_Exit, Battle_ShowSettlement, EventMgr, Evt_BattleCreatRoomResult, Evt_BattleDoubleUpdate, Evt_BattleLogGet, Evt_BattleLogInfo, Evt_Cancel_Match, Evt_EnterFight, Evt_Match_Complete, Evt_PlayerDataInit, Evt_Start_Match } from "../../manager/EventMgr";
import proto, { Req, Ret, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { MsgPanel } from "../common/MsgPanel";
import { RoomPanel } from "../room/RoomPanel";
import { battleDataMgr } from "./BattleDataMgr";
import { FightUI } from "../fight/FightUI";
import { GameSet } from "../../manager/GameSet";
import { battleCompMgr } from "./BattleCompMgr";
import { GameScene } from "../fight/GameScene";
import { MainPanel } from "../main/MainPanel";
import { LoginPanel } from "../login/LoginPanel";
import { PlayerData } from "../player/PlayerData";
import { FightLogPanel } from "../fight/FightLogPanel";
import { Second, Utils } from "../../utils/Utils";
import { ServerPanel } from "../login/ServerPanel";
import { VSModelPanel } from "../vs/VSModelPanel";

export class BattleModule {
    private roomPingTime: any;
    private curRoom: proto.base.IBattleRoomSummary;
    private isDoubleInt: boolean;
    constructor() {
        Session.on(Route["battle_mgr.protocol.createbattlemgruserroom"], this.onCreatRoomResult, this);
        Session.on(Route["battle.protocol.battleroomenter"], this.onEnterRoomResult, this);
        Session.on(Route.BattleRoomOpOutputPush, this.onBattleRoomOpOutputPush, this);
        Session.on(Route["battle.protocol.battleroomleave"], this.onBattleroomleave, this);
        Session.on(Route["battle_mgr.protocol.getbattlerecentrecords"], this.onGetbattlerecentrecords, this);
        Session.on(Route["battle_mgr.protocol.getbattlereplayroom"], this.onGetbattlereplayroom, this);
        Session.on(Route["battle_mgr.protocol.createbattlereplayroom"], this.onCreatebattlereplayroom, this);
        Session.on(Route["battle.protocol.battleroomdouble"], this.onBattleroomdouble, this);
        Session.on(Route["battle_mgr.protocol.getlastbattleroomsummary"], this.onGetlastbattleroomsummary, this);
        Session.on(Route.BattleRoomPlayersPush, this.onBattleRoomPlayersPush, this);
        Session.on(Route["match.protocol.matchmaking"], this.onMatchmaking, this);
        Session.on(Route["match.protocol.matchcancel"], this.onMatchcancel, this);
        Session.on(Route.MatchMakingPush, this.onMatchMakingPush, this);
        EventMgr.on(Battle_ShowSettlement, this.onBattleSettlement, this);
        EventMgr.on(Battle_Exit, this.onExitFight, this);
        EventMgr.on(Evt_PlayerDataInit, this.onPlayerDataInit, this);
    }

    private onBattleSettlement(roomId: string, playerAId: string, data: proto.base.BattleRoomOpOutput_Settlement): void {
        let isGiveUp: boolean = data.leavePlayerId != null || data.leavePlayerId != "";
        if (isGiveUp) {
            GameScene.isntance.EndAllAction();
            battleCompMgr.stopComp();
            battleDataMgr.clearCurBattlePack();
        }
    }

    private onExitFight(): void {
        GameScene.isntance.EndAllAction();
        GameSet.removeTick(battleCompMgr.update, battleCompMgr);
        battleCompMgr.stopComp();
        battleDataMgr.clearBattleData();
        MainPanel.Show();
        GameScene.Hide();
    }

    private onPlayerDataInit(): void {
        //获取有效战斗房间摘要
        let room = new Req["battle_mgr.protocol.getlastbattleroomsummary"]();
        Session.Send(Route["battle_mgr.protocol.getlastbattleroomsummary"], room);
    }

    private onCreatRoomResult(data: any): void {
        let room = Ret["battle_mgr.protocol.createbattlemgruserroom"].decode(data);
        console.log("onCreatRoomResult", room);
        if (room.res.code == 200) {
            this.curRoom = Utils.CopyProto(room.roomSummary, proto.base.BattleRoomSummary);//structuredClone(room.roomSummary);
            battleDataMgr.setCreatRoomData(room.roomSummary);
            MsgPanel.Show("创建房间成功");
        } else {
            MsgPanel.Show(room.res.msg);
        }
        // GameSet.debug = true;
        EventMgr.emit(Evt_BattleCreatRoomResult);
    }

    private async onEnterRoomResult(data: any) {
        let result = Ret["battle.protocol.battleroomenter"].decode(data);
        console.log("onEnterRoomResult", result);
        if (!battleDataMgr.creatRoomData) return;
        if (battleDataMgr.creatRoomData.roomId != result.roomId) return;
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
            return;
        }
        this.enterRoom(true);
    }

    private onBattleRoomOpOutputPush(data: any): void {
        let result = Ret.BattleRoomOpOutputPush.decode(data);
        battleDataMgr.addBattleData(result.roomId, result.outputs);
    }

    public onBattleroomleave(data: any): void {
        let result = Ret["battle.protocol.battleroomleave"].decode(data);
        if (!battleDataMgr.creatRoomData || battleDataMgr.creatRoomData.roomId != result.roomId) return;
        if (result.res.code == 200) {
            this.clearRoomPing();
            //battleDataMgr.clearCurBattlePack();
            //battleCompMgr.stopComp(battleDataMgr.checkIsStopBattlePack);
            //GameSet.removeTick(battleCompMgr.update, battleCompMgr);
            //GameSet.removeTick(this.onPingRoom, this);
            /* setTimeout(() => {
                battleDataMgr.leaveRoom();
            }, 3); */
        } else {
            MsgPanel.Show(result.res.msg);
        }


    }

    public onGetbattlerecentrecords(data: any): void {
        let result = Ret["battle_mgr.protocol.getbattlerecentrecords"].decode(data);
        if (result.res.code == 200) {
            EventMgr.emit(Evt_BattleLogGet, result.records);
        } else {
            MsgPanel.Show(result.res.msg);
        }

    }

    private onGetbattlereplayroom(data: any): void {
        let result = Ret["battle_mgr.protocol.getbattlereplayroom"].decode(data);
        if (result.res.code == 200) {
            console.log("--------->getbattlereplayroom")
            console.dir(result.replayRoomSummary)
            EventMgr.emit(Evt_BattleLogInfo, result.replayRoomSummary);
        } else {
            MsgPanel.Show(result.res.msg);
        }

    }

    private async onCreatebattlereplayroom(data: any): Promise<void> {
        let result = Ret["battle_mgr.protocol.createbattlereplayroom"].decode(data);
        if (result.res.code == 200) {
            this.curRoom = Utils.CopyProto(result.roomSummary, proto.base.BattleRoomSummary);//structuredClone(result.roomSummary);
            battleDataMgr.setCreatRoomData(result.roomSummary);
            this.enterRoom();
        } else {
            MsgPanel.Show(result.res.msg);
        }
    }

    private onBattleroomdouble(data: any): void {
        let result = Ret["battle.protocol.battleroomdouble"].decode(data);
        if (!battleDataMgr.creatRoomData || battleDataMgr.creatRoomData.roomId != result.roomId) return;
        if (result.res.code == 200) {
            MsgPanel.Show("加倍成功");
        } else {
            MsgPanel.Show(result.res.msg);
        }
    }

    private async onGetlastbattleroomsummary(data: any): Promise<void> {
        let result = Ret["battle_mgr.protocol.getlastbattleroomsummary"].decode(data);
        if (result.res.code == 200) {
            if(result.roomSummary) {

                GameScene.isntance.EndAllAction();
                battleCompMgr.stopComp();
                battleDataMgr.clearBattleData();
                this.curRoom = Utils.CopyProto(result.roomSummary, proto.base.BattleRoomSummary);//structuredClone(result.roomSummary);
                battleDataMgr.setCreatRoomData(result.roomSummary);
                await this.enterRoom();
                let server: proto.pb.IServer = proto.pb.Server.create();
                server.id = this.curRoom.serverId;
                let enterRoom = new Req["battle.protocol.battleroomroundretransmission"]();
                enterRoom.server = server;
                enterRoom.roomId = this.curRoom.roomId;
                Session.Send(Route["battle.protocol.battleroomroundretransmission"], enterRoom);
            }   
        }
    }

    private onBattleRoomPlayersPush(data: any): void {
        let result = Ret.BattleRoomPlayersPush.decode(data);
        if (this.curRoom && this.curRoom.roomId == result.roomId) {
            battleDataMgr.setRoomDouble(result.roomId, result.players);
            console.log("加倍结果--->" + result.players);
            EventMgr.emit(Evt_BattleDoubleUpdate, this.isDoubleInt);
            this.isDoubleInt = true;
        }

    }

    private onPingRoom(): void {
        this.clearRoomPing();
        this.roomPingTime = setInterval(this.sendRoomPing.bind(this), 5000);
    }

    private clearRoomPing(): void {
        if (this.roomPingTime) {
            clearInterval(this.roomPingTime);
            this.roomPingTime = null;
        }
    }

    private sendRoomPing(): void {
        if (!battleDataMgr.roomData) {
            this.clearRoomPing();
            return;
        }
        let server: proto.pb.IServer = proto.pb.Server.create();
        server.id = this.curRoom.serverId;
        let data = new Req["battle.protocol.battleroomping"]();
        data.server = server;
        data.roomId = battleDataMgr.roomData.roomId;
        Session.Send(Route["battle.protocol.battleroomping"], data);
    }

    private onMatchmaking(data: any) {
        let result = Ret["match.protocol.matchmaking"].decode(data);
        console.log("发起匹配", result)
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
        }
        EventMgr.emit(Evt_Start_Match, result.res.code == 200);
    }
    private onMatchcancel(data: any) {
        let result = Ret["match.protocol.matchcancel"].decode(data);
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
        }
        EventMgr.emit(Evt_Cancel_Match, result.cancelled);
    }

    private onMatchMakingPush(data: any) {
        let result = Ret.MatchMakingPush.decode(data);
        console.log("匹配结果推送", result)
        if (result.result.code == 200) {
            MsgPanel.Show("匹配成功");
            this.curRoom = Utils.CopyProto(result.roomSummary, proto.base.BattleRoomSummary);//structuredClone(result.roomSummary);
            battleDataMgr.setCreatRoomData(result.roomSummary);
            let server: proto.pb.IServer = proto.pb.Server.create();
            server.id = battleDataMgr.creatRoomData.serverId;
            let enterRoom = new Req["battle.protocol.battleroomenter"]();
            enterRoom.roomId = battleDataMgr.creatRoomData.roomId;
            enterRoom.server = server;
            Session.Send(Route["battle.protocol.battleroomenter"], enterRoom);
            console.log(`请求进入房间${enterRoom.roomId}`)
        } else {
            MsgPanel.Show(result.result.msg);
        }
        EventMgr.emit(Evt_Match_Complete, result.result.code == 200, this.curRoom);
    }

    private async enterRoom(isVs: boolean = false): Promise<void> {
        this.isDoubleInt = false;
        this.onPingRoom();
        MsgPanel.Show("进入房间");
        RoomPanel.Hide();
        FightUI.ShowUI(this.curRoom);
        ServerPanel.Hide();
        LoginPanel.Hide();
        FightLogPanel.Hide();
        await MainPanel.Hide();
        await GameScene.Show();
        console.log("进入成功");
        VSModelPanel.Hide();
        EventMgr.emit(Evt_EnterFight);
        if (isVs) await Second(2);
        GameSet.addTick(battleCompMgr.update, battleCompMgr);
    }

}