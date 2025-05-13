import { Http } from "../../net/Http";
import { Session } from "../../net/Session";
import { Second, Utils } from "../../utils/Utils";
import { LoginPanel } from "./LoginPanel";
import { PlayerData } from "../player/PlayerData";
import { Req, Ret, Route } from "../../net/Protocol";
import { CfgMgr, ItemType } from "../../manager/CfgMgr";
import { EventMgr } from "../../manager/EventMgr";
import { DateUtils } from "../../utils/DateUtils";
import { GameSet } from "../../manager/GameSet";
import { ServerPanel } from "./ServerPanel";

export class LoginModule {
    constructor() {
        Session.on(Route.PlayerLoginPush, this.onPlayerLoginPush, this);
        if (GameSet.globalCfg) {
            ServerPanel.Show(this.onLogin.bind(this));
        } else {
            LoginPanel.Show(this.onLogin.bind(this));
        }
    }

    protected onPlayerLoginPush(data: any) {
        let info = Ret.PlayerLoginPush.decode(data);
        PlayerData.server = info.server;
        PlayerData.player = info.data;
        for (const key in info.data.itemCounts) {
            if (Object.hasOwnProperty.call(info.data.itemCounts, key)) {
                let std = CfgMgr.Getitem(parseInt(key))
                if (std && std.Itemtpye == ItemType.money) {
                    PlayerData.items[key] = info.data.itemCounts[key] / 10000;
                }
            }
        }
        console.log("onPlayerLoginPush", info);
        PlayerData.cards = info.data.battleCards || [];
        Session.Send(Route["user.protocol.getuserinfo"]);

        let player_data = new Req["player.protocol.getplayerdata"]();
        player_data.server = PlayerData.server;
        Session.Send(Route["player.protocol.getplayerdata"], player_data);

        Session.Send(Route["logic.protocol.getplayerlevelrewards"]);
        Session.Send(Route["logic.protocol.getprocessboxrewards"]);
        EventMgr.Call("reset_guide");
    }

    protected async onLogin(loginHost: string, server: string, post: number, user: string) {
        console.log("登录账号", loginHost, server, post, user);
        let result = await Http.Post(loginHost, { code: user });
        if (result?.code == 200) {
            let data = result.data;
            console.log("登录返回", data.token, data.waiting_nums);
            if (data.waiting_nums) {
                await Second(2);
                this.onLogin(loginHost, server, post, user);
            } else if (data.token) {
                // if (EDITOR) ProtocolInit();
                let uuid = (new Date().getTime()) + "";
                console.log("连接socket", uuid);
                await Session.Build(server, post, "/", uuid, user, data.token);
                this.syncServerTime();
            }
        }
    }


    private intervalSync: any;
    private loop = 0;
    protected syncServerTime() {
        if (this.intervalSync) {
            clearInterval(this.intervalSync);
        }
        this.intervalSync = setInterval(this.sendServerTimeSync.bind(this), 1000);
        Session.off(Route["gate.protocol.servertime"], this.onServertime, this);
        Session.on(Route["gate.protocol.servertime"], this.onServertime, this);
        Session.Send(Route["gate.protocol.servertime"]);
    }
    //发送服务器时间同步
    protected sendServerTimeSync(): void {
        DateUtils.ServerTime++;
        this.loop++;
        if (this.loop >= 10) {
            Session.Send(Route["gate.protocol.servertime"]);
            this.loop = 0;
        }
    }
    //服务器时间同步下发
    protected onServertime(data: any): void {
        let result = Ret["gate.protocol.servertime"].decode(data);
        if (result.res.code != 200) return;
        DateUtils.ServerTime = Math.floor(result.timestamp);
        console.log("onServerTime", DateUtils.ServerTime)
    }
}