import { AudioDefine } from "../define/AudioDefine";
import { BagModule } from "../module/bag/BagModule";
import { BattleModule } from "../module/battle/BattleModule";
import { CardsMode } from "../module/cards/CardsMode";
import { GameScene } from "../module/fight/GameScene";
import { FrienModule } from "../module/friend/FriendModule";
import { LoginModule } from "../module/login/LoginModule";
import { MailModule } from "../module/mail/MailModule";
import { PlayerModule } from "../module/player/PlayerModule";
import { ShopModule } from "../module/shop/ShopModule";
import { AudioMgr } from "./AudioMgr";
import { CfgMgr, StdGuide } from "./CfgMgr";
import { FightUI } from "../module/fight/FightUI";
import { TradeModule } from "../module/trade/TradeModule";
import { DEV, HTML5 } from "cc/env";
import { Session } from "../net/Session";
import { Guide, GuideSub, PointTo } from "./Guide";
import { Req } from "../net/Protocol";
import { TaskModule } from "../module/task/TaskModule";
import { RegisterClass } from "../RegisterClass";
import { CheckCondition, DL } from "../DL";
import { ConditionMgr } from "./ConditionMgr";
import { EventMgr } from "./EventMgr";
import { Layers, find } from "cc";
import { GameSet } from "./GameSet";
import LocalStorage from "../utils/LocalStorage";
import { Shake } from "../utils/Shake";
import { RightsModule } from "../module/rights/RightsModule";

export class App {
    private static instance: App;
    constructor() {
        if (App.instance) throw "App只允许一个实例！";
        App.instance = this;
        this.init();
        if (DEV && HTML5) {
            window['proto'] = Req;
            window['send'] = function (route: string, data: any) {
                Session.Send(route, data);
            }
            window['resetGuide'] = function () {
                let cfgs: StdGuide[] = CfgMgr.Get('guide');
                for (let cfg of cfgs) {
                    LocalStorage.RemoveItem("guide" + cfg.ID);
                }
                EventMgr.Call("reset_guide");
            }
            window['testStep'] = function (url: string, msg: string = "", angle = 90, modal = true, offset = [0, 0], msgAngle?: number, msgOffset = [0, 0], msgSize?: number[], duration?: number) {
                let btn = find(url);
                if (!btn) return;
                let pointer: PointTo = PointTo.Create();
                pointer.Target(btn, angle, msg, modal, offset, msgAngle, msgOffset, msgSize, duration ? duration : undefined);
                pointer.on('end', () => {
                    pointer.receive();
                }, this);
            }
            window['testCondition'] = function (conditionId: number, ...values) {
                console.log(CheckCondition(conditionId, ...values));
            }
            window['cleanLocal'] = function () {
                LocalStorage.Clear();
            }
            window['cleanGuide'] = function () {
                let guides = CfgMgr.Get('guide');
                for (let guide of guides) {
                    LocalStorage.SetNumber("guide" + guide.ID, 1);
                }
            }
            window['shake'] = Shake.Start.bind(Shake);
        }
    }
    async init() {
        AudioMgr.init(AudioDefine.Channels);
        await CfgMgr.load();
        await FightUI.load();
        await GameScene.prevLoad();

        new RegisterClass();
        new Guide();// 系统开启和引导系统
        new DL();
        new LoginModule();
        new PlayerModule();
        new MailModule();
        new FrienModule();
        new BattleModule();
        new BagModule();
        new ShopModule();
        new CardsMode();
        new TradeModule();
        new TaskModule();
        new RightsModule()

        ConditionMgr.init();
    }


}