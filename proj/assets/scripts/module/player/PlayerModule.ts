import { Session } from "../../net/Session";
import { PlayerData } from "./PlayerData";
import { MainPanel } from "../main/MainPanel";
import { LoginPanel } from "../login/LoginPanel";
import { Tips } from "../common/Tips";
import proto, { Req, Ret, Route } from "../../net/Protocol";
import { EventMgr, Evt_Box_Update, Evt_Card_Add, Evt_Card_Chage, Evt_Card_Del, Evt_Player_Exp_Update, Evt_Player_Level_Update, Evt_PlayerDataInit, Evt_SeasonFightLog, Evt_SectionAwardInit, Evt_SectionAwardUpdate, Evt_SectionSettle, Evt_SectionUpdate, Evt_StarElementSettle, Evt_StarElementUpdate, Evt_Upgrade_Award_Update, Evt_User_Info_Update } from "../../manager/EventMgr";
import { MsgPanel } from "../common/MsgPanel";
import { CfgMgr, StdPVPSnatch } from "../../manager/CfgMgr";
import { ServerPanel } from "../login/ServerPanel";

export class PlayerModule {
    constructor() {
        Session.on(Route["user.protocol.getuserinfo"], this.onGetuserinfo, this);
        Session.on(Route["player.protocol.getplayerdata"], this.onGetPlayerData, this);
        Session.on(Route.PlayerBattleCardChangePush, this.onChangeCardData, this);
        Session.on(Route["user.protocol.passwordset"], this.onResetPasswordValid, this);
        Session.on(Route.RiskLevelPush, this.onRiskLevelPush, this);
        Session.on(Route["logic.protocol.battlecardupgrade"], this.onBattleCardUpgrade, this);
        Session.on(Route["PlayerLevelExpChangedPush"], this.onPlayerLevelExpChangedPush, this);
        Session.on(Route["logic.protocol.playerlevelrewardclaim"], this.onPlayerLevelRewardClaim, this);
        Session.on(Route["logic.protocol.getplayerlevelrewards"], this.onGetPlayerLevelRewards, this);
        Session.on(Route["logic.protocol.getprocessboxrewards"], this.onGetProcessBoxRewards, this);
        Session.on(Route["logic.protocol.processboxopen"], this.onProcessBoxOpen, this);
        Session.on(Route["PlayerPvpInfoPush"], this.onPlayerPvpInfoPush, this);
        Session.on(Route["pvp.protocol.getranklevelreward"], this.onGetranklevelreward, this);
        Session.on(Route["pvp.protocol.ranklevelrewardclaim"], this.onRanklevelrewardclaim, this);
        Session.on(Route["PlayerPvpRankBattleSettlePush"], this.onPlayerPvpRankBattleSettlePush, this);
        Session.on(Route["PvpRankSeasonChangedPush"], this.onPvpRankSeasonChangedPush, this);
        Session.on(Route["pvp.protocol.getpvprankinfo"], this.onGetpvprankinfo, this);
        Session.on(Route["UserInfoChangePush"], this.onUserInfoChangePush, this);
        Session.on(Route["pvp.protocol.getpvprankbattlerecords"], this.onGetpvprankbattlerecords, this);
        Session.on(Route["PlayerPvpStarInfoPush"], this.onPlayerPvpStarInfoPush, this);
        Session.on(Route["PvpStarSeasonChangedPush"], this.onPvpStarSeasonChangedPush, this);
        Session.on(Route["PlayerPvpStarBattleSettlePush"], this.onPlayerPvpStarBattleSettlePush, this);

    }
    protected onGetuserinfo(data: any) {
        PlayerData.user = Ret["user.protocol.getuserinfo"].decode(data);
        console.log("onGetuserinfo", PlayerData.user);
    }
    protected async onGetPlayerData(data: any) {
        let info = Ret["player.protocol.getplayerdata"].decode(data);
        console.log("onGetPlayerData", info);
        PlayerData.Setplayer(info.data);       
        ServerPanel.Hide();
        LoginPanel.Hide();
        await MainPanel.Show();
        EventMgr.emit(Evt_PlayerDataInit);
    }
    protected onChangeCardData(data: any) {
        let info = Ret.PlayerBattleCardChangePush.decode(data);
        console.log("PlayerBattleCardChangePush", info);
        switch (info.change) {
            case 1:
                PlayerData.AddCardData(info.card);
                EventMgr.emit(Evt_Card_Add, info.card);
                break;
            case 2:
                let oledCardData: proto.base.IBattleCard = PlayerData.GetCardDataById(info.card.id);
                let changeNum: number = oledCardData ? info.card.quality - oledCardData.quality : 0;
                PlayerData.UpdateCardData(info.card);
                EventMgr.emit(Evt_Card_Chage, info.card, changeNum);
                break;
            case 3:
                PlayerData.DelCardData(info.card);
                Session.Send(Route["logic.protocol.getplayerdecks"]);
                EventMgr.emit(Evt_Card_Del, info.card);
                break;
        }


    }

    private onResetPasswordValid(data: any): void {
        let passwordData = Ret["user.protocol.passwordset"].decode(data);
        if (passwordData.res.code > 0) {
            Tips.Show(passwordData.res.msg);
            return;
        }
        // SettingPasswordSuccessPanel.Show();
        // SettingPasswordPanel.Hide();
        PlayerData.user.info.passwordSet = true;
    }

    private onRiskLevelPush(data: any) {
        let RiskLevel = Ret.RiskLevelPush.decode(data);
        console.log(RiskLevel);
    }

    private onBattleCardUpgrade(data: any): void {
        let result = Ret["logic.protocol.battlecardupgrade"].decode(data);
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
            return;
        }


    }

    private onPlayerLevelExpChangedPush(data: any): void {
        let result = Ret["PlayerLevelExpChangedPush"].decode(data);
        if (result.levelAfter != result.levelBefore) {
            PlayerData.player.level = result.levelAfter;
            EventMgr.emit(Evt_Player_Level_Update, result);
        }
        if (result.levelExpAfter != result.levelExpBefore) {
            PlayerData.player.levelExp = result.levelExpAfter;
            EventMgr.emit(Evt_Player_Exp_Update, result);
        }
    }

    private onPlayerLevelRewardClaim(data: any): void {
        let result = Ret["logic.protocol.playerlevelrewardclaim"].decode(data);
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
            return;
        }
        PlayerData.AddUpgradeAward(result.levelReward);
        EventMgr.emit(Evt_Upgrade_Award_Update, result.rewardThing);
    }

    private onGetPlayerLevelRewards(data: any): void {
        let result = Ret["logic.protocol.getplayerlevelrewards"].decode(data);
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
            return;
        }
        PlayerData.InitUpgradeAward(result.levelRewards);
        EventMgr.emit(Evt_Upgrade_Award_Update);
    }

    private onGetProcessBoxRewards(data: any): void {
        let result = Ret["logic.protocol.getprocessboxrewards"].decode(data);
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
            return;
        }
        PlayerData.InitBoxProcessList(result.rewards);
        EventMgr.emit(Evt_Box_Update);
    }

    private onProcessBoxOpen(data: any): void {
        let result = Ret["logic.protocol.processboxopen"].decode(data);
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
            return;
        }
        PlayerData.UpdateBoxProcessData(result.boxReward);
        EventMgr.emit(Evt_Box_Update, result.rewardThings);
    }

    private onPlayerPvpInfoPush(data: any): void {
        let result = Ret["PlayerPvpInfoPush"].decode(data);
        PlayerData.SetSeasonData(result);
        EventMgr.emit(Evt_SectionUpdate);
        let sendData = new Req["pvp.protocol.getranklevelreward"]();
        sendData.seasonId = result.currentSeasonId;
        Session.Send(Route["pvp.protocol.getranklevelreward"], sendData);

    }

    private onGetranklevelreward(data: any): void {
        let result = Ret["pvp.protocol.getranklevelreward"].decode(data);
        if (result.res.code == 200) {
            PlayerData.SetSectionAwardData(result.levelReward);
            EventMgr.emit(Evt_SectionAwardInit);
        } else {
            MsgPanel.Show(result.res.msg);
        }
    }

    private onRanklevelrewardclaim(data: any): void {
        let result = Ret["pvp.protocol.ranklevelrewardclaim"].decode(data);
        if (result.res.code == 200) {
            PlayerData.ChangeSectionAwardData(result.reward);
            EventMgr.emit(Evt_SectionAwardUpdate, result.reward);
        } else {
            MsgPanel.Show(result.res.msg);
        }
    }

    private onPlayerPvpRankBattleSettlePush(data: any): void {
        let result = Ret["PlayerPvpRankBattleSettlePush"].decode(data);
        if (PlayerData.CurSeasonData) {
            if (result.rankRecord.seasonId == PlayerData.CurSeasonData.currentSeasonId) {
                let newData: proto.pb.PlayerPvpInfoPush = PlayerData.CurSeasonData;
                //newData.currentRankInfo.rankLevelId = result.rankRecord.rankLevelId;
                newData.currentRankInfo.rankPoints = result.rankRecord.pointAfter;
                console.log("排位结算---->" + result.rankRecord);
                PlayerData.SetSeasonData(newData);
            }
        }
        EventMgr.emit(Evt_SectionSettle, result);
    }

    private onPvpRankSeasonChangedPush(data: any): void {
        let result = Ret["PvpRankSeasonChangedPush"].decode(data);
        let newData: proto.pb.PlayerPvpInfoPush = PlayerData.CurSeasonData;
        newData.currentSeasonId = result.currentSeasonId;
        let stdPVPSnatch: StdPVPSnatch[] = CfgMgr.GetStdPVPSnatchList();
        let seasonIds: number[] = [];
        for (let std of stdPVPSnatch) {
            seasonIds.push(std.MatchID);
        }
        let sendData = new Req["pvp.protocol.getpvprankinfo"]();
        sendData.seasonIds = seasonIds;
        Session.Send(Route["pvp.protocol.getpvprankinfo"], sendData);
        PlayerData.SetSeasonData(newData);
    }

    private onGetpvprankinfo(data: any): void {
        let result = Ret["pvp.protocol.getpvprankinfo"].decode(data);
        if (result.res.code == 200) {
            let newData: proto.pb.PlayerPvpInfoPush = PlayerData.CurSeasonData;
            newData.currentRankInfo = result.seasonRankInfo[newData.currentSeasonId];
            PlayerData.SetSeasonData(newData);
            EventMgr.emit(Evt_SectionUpdate);
            //赛季变更重更新拉取一下段位奖励数据
            let sendData = new Req["pvp.protocol.getranklevelreward"]();
            sendData.seasonId = newData.currentSeasonId;
            Session.Send(Route["pvp.protocol.getranklevelreward"], sendData);
        } else {
            MsgPanel.Show(result.res.msg);
        }
    }

    private onUserInfoChangePush(data: any): void {
        let result = Ret["UserInfoChangePush"].decode(data);
        PlayerData.SetUserInfo(result.info);
        EventMgr.emit(Evt_User_Info_Update);
    }

    private onGetpvprankbattlerecords(data: any): void {
        let result = Ret["pvp.protocol.getpvprankbattlerecords"].decode(data);
        if (result.res.code != 200) {
            MsgPanel.Show(result.res.msg);
        }
        EventMgr.emit(Evt_SeasonFightLog, result.records || []);

    }
    private onPlayerPvpStarInfoPush(data: any): void {
        let result = Ret["PlayerPvpStarInfoPush"].decode(data);
        PlayerData.SetSatrElementData(result);
        EventMgr.emit(Evt_StarElementUpdate);
    }
    private onPvpStarSeasonChangedPush(data: any): void {
        let result = Ret["PvpStarSeasonChangedPush"].decode(data);
        PlayerData.SetSatrElementData(result);
        EventMgr.emit(Evt_StarElementUpdate);
    }

    private onPlayerPvpStarBattleSettlePush(data: any): void {
        let result = Ret["PlayerPvpStarBattleSettlePush"].decode(data);
        EventMgr.emit(Evt_StarElementSettle, result);
    }

}