import proto, { Req, Ret, Route } from "../../../net/Protocol";
import { Session } from "../../../net/Session";
import { DateUtils } from "../../../utils/DateUtils";
import { BattleBaseComp } from "../../battle/BattleBaseComp";
import { battleDataMgr } from "../../battle/BattleDataMgr";
import { PlayerData } from "../../player/PlayerData";

/**
 * 等待客户端表现完毕
 */
export class Out_WaitPlayerShow extends BattleBaseComp<proto.base.IBattleRoomOpOutput_WaitPlayerShow> {

    protected start(): void {
        Session.on(Route["battle.protocol.battleroomroundshowend"], this.onBattleroomroundshowend, this);
        let server: proto.pb.IServer = proto.pb.Server.create();
        server.id = battleDataMgr.creatRoomData.serverId;
        let data = new Req["battle.protocol.battleroomroundshowend"]();
        data.server = server;
        data.roomId = battleDataMgr.roomData.roomId;
        Session.Send(Route["battle.protocol.battleroomroundshowend"], data);
    }

    protected reset(): void {
        Session.off(Route["battle.protocol.battleroomroundshowend"], this.onBattleroomroundshowend, this);
    }

    protected onUpdate(dt: number): void {
        if (DateUtils.ServerTime >= this.data.timeout) {
            this.exit();
        }
    }

    private onBattleroomroundshowend(data: any): void {
        let result = Ret["battle.protocol.battleroomroundshowend"].decode(data);
        if (this.roomId != result.roomId) return;
        if (result.res.code == 200) this.exit();
    }

}