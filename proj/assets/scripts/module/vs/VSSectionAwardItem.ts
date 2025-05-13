import { Node, Component, Button, Sprite, Label, path, SpriteFrame, Layout, UITransform, UIOpacity } from "cc";
import { Card } from "../cards/Card";
import { CfgMgr, StdItem, StdPvpLevel, ThingName } from "../../manager/CfgMgr";
import proto, { Req, Route } from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { card_quality, folder_item, ResMgr } from "../../manager/ResMgr";
import { Session } from "../../net/Session";
import { MsgPanel } from "../common/MsgPanel";
import { EventMgr, Evt_SectionAwardUpdate } from "../../manager/EventMgr";
import { DateUtils } from "../../utils/DateUtils";

export class VSSectionAwardItem extends Component {
    private starCont: Node;
    private lineCont: Node;
    private awardCont: Node;
    private btn: Button;
    private bg1: Node;
    private bg2: Node;
    private cardBg: Sprite;
    private card: Card;
    private itemCont: Node;
    private itemIcon: Sprite;
    private itemNameLab: Label;
    private getImg: Node;
    private sectionCont: Node;
    private sectionIcon: Sprite;
    private sectionNameImg: Sprite;
    private canGetEffect: Node;
    private stdPvpLevel: StdPvpLevel;
    private isInit: boolean = false;
    private data: proto.base.IPlayerRankLevelReward;
    private resNum: number = 0;
    protected onLoad(): void {
        this.starCont = this.node.getChildByPath("starCont");
        this.lineCont = this.node.getChildByPath("starCont/lineCont");
        this.awardCont = this.node.getChildByPath("awardCont");
        this.btn = this.node.getChildByPath("awardCont").getComponent(Button);
        this.bg1 = this.node.getChildByPath("awardCont/bg1");
        this.bg2 = this.node.getChildByPath("awardCont/bg2");
        this.cardBg = this.node.getChildByPath("awardCont/cardBg").getComponent(Sprite);
        this.card = this.node.getChildByPath("awardCont/Cards").addComponent(Card);
        this.itemCont = this.node.getChildByPath("awardCont/itemCont");
        this.itemIcon = this.node.getChildByPath("awardCont/itemCont/itemIcon").getComponent(Sprite);
        this.getImg = this.node.getChildByPath("awardCont/getImg");
        this.canGetEffect = this.node.getChildByPath("awardCont/canGetEffect");
        this.itemNameLab = this.node.getChildByPath("awardCont/itemCont/itemNumLab").getComponent(Label);
        this.sectionCont = this.node.getChildByName("sectionCont");
        this.sectionIcon = this.node.getChildByPath("sectionCont/sectionIcon").getComponent(Sprite);
        this.sectionNameImg = this.node.getChildByPath("sectionCont/sectionNameImg").getComponent(Sprite);
        this.isInit = true;
        if (this.stdPvpLevel) this.updateShow();
    }

    protected onEnable(): void {
        this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        EventMgr.on(Evt_SectionAwardUpdate, this.onAwardDataUpdate, this);
    }

    protected onDisable(): void {
        this.btn.node.off(Button.EventType.CLICK, this.onBtnClick, this);  
        EventMgr.off(Evt_SectionAwardUpdate, this.onAwardDataUpdate, this);  
    }

    private onAwardDataUpdate(data: proto.base.IPlayerRankLevelReward): void {
        if (data.rankLevelId == this.stdPvpLevel.LevelID) {
            this.updateShow();
        }
    }

    private onBtnClick(btn: Button): void {
        let seasonData: proto.pb.PlayerPvpInfoPush = PlayerData.CurSeasonData;
        if (seasonData.currentRankInfo.rankPoints < this.stdPvpLevel.LevelPoints) {
            MsgPanel.Show(`达到${this.stdPvpLevel.LevelName}可领取`);
            return;
        }
        if (this.data) {
            MsgPanel.Show("奖励已领取");
            return;
        }
        if (DateUtils.ServerTime > PlayerData.GetCurSeasonEndTime()) {
            MsgPanel.Show("暂时没有赛季已结束");
            return;
        }

        let data = new Req["pvp.protocol.ranklevelrewardclaim"]();
        data.seasonId = seasonData.currentSeasonId;
        data.rankLevelId = this.stdPvpLevel.LevelID;
        Session.Send(Route["pvp.protocol.ranklevelrewardclaim"], data);
    }

    SetData(data: StdPvpLevel): void {
        this.stdPvpLevel = data;
        this.updateShow();
        this.updateStar();
    }

    private updateShow(): void {
        if (!this.isInit || !this.stdPvpLevel) return;
        this.resNum ++;
        this.data = PlayerData.GetSectionAwardData(this.stdPvpLevel.LevelID);
        this.updateAward();
        const curNum: number = this.resNum;
        ResMgr.LoadResAbSub(path.join("sheets/sectionIcon", this.stdPvpLevel.LevelIcon, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            if (curNum == this.resNum) this.sectionIcon.spriteFrame = res;
        });
        ResMgr.LoadResAbSub(path.join("sheets/sectionIcon", this.stdPvpLevel.LevelNameImg, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            if (curNum == this.resNum) this.sectionNameImg.spriteFrame = res;
        });
    }
    private updateStar(): void {
        let seasonData: proto.pb.PlayerPvpInfoPush = PlayerData.CurSeasonData;
        if (this.stdPvpLevel.Star > 1) {
            this.starCont.active = true;
            let starNum: number = this.stdPvpLevel.Star - 1;
            let node: Node;
            let updateSize: Node[] = [];
            let point: number = 0
            for (let index = 0; index < this.lineCont.children.length; index++) {
                node = this.lineCont.children[index];
                if (index < starNum) {
                    point = this.stdPvpLevel.LevelPoints + this.stdPvpLevel.StarPoints * (index + 1);
                    node.active = true;
                    let line: Node = node.getChildByName("line");
                    line.active = point <= seasonData.currentRankInfo.rankPoints;
                    updateSize.push(node);
                } else {
                    node.active = false;
                }
            }
            this.lineCont.getComponent(Layout).updateLayout();
            for (let node of updateSize) {
                let width: number = node.getComponent(UITransform).width;
                let line: Node = node.getChildByName("line");
                line.getComponent(UITransform).width = width;
                let bg: Node = node.getChildByName("lineBg");
                bg.getComponent(UITransform).width = width;
            }
        } else {
            this.starCont.active = false;
        }
    }
    private updateAward(): void {
        let iconStr: string;
        let numStr: string = "";
        this.getImg.active = false;
        this.bg2.active = false;
        this.card.node.active = false;
        this.cardBg.node.active = false;
        this.canGetEffect.active = false;
        if (this.data) {
            this.getImg.active = true;
            iconStr = null;
            let thing: proto.base.IThing = this.data.things[0];
            if (thing.card) {
                this.cardBg.node.active = true;
                this.card.node.active = true;
                this.card.SetData(thing.card);
                
                ResMgr.LoadResAbSub(path.join(card_quality, `card_bg${thing.card.quality}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                    this.itemIcon.spriteFrame = res;
                });
            } else if (thing.item) {
                let stdItem: StdItem = CfgMgr.Getitem(thing.item.id);
                iconStr = path.join(folder_item, stdItem.Icon, "spriteFrame");
                numStr = `${stdItem.ItemName}x${thing.item.count}`;

            }
                
        } else {
            
            if (this.stdPvpLevel.LevelRewardTypes[0] == ThingName.battlecard) {
                iconStr = path.join(folder_item, "randomCard", "spriteFrame");
                numStr = "未知卡牌"; 
            } else if (this.stdPvpLevel.LevelRewardTypes[0] == ThingName.item){
                let stdItem: StdItem = CfgMgr.Getitem(this.stdPvpLevel.LevelRewardIds[0]);
                iconStr = path.join(folder_item, stdItem.Icon, "spriteFrame");
                numStr = `${stdItem.ItemName}x${this.stdPvpLevel.LevelRewardNums[0]}`;
            }
            
        } 
        if (iconStr) {
            this.itemCont.active = true;
            ResMgr.LoadResAbSub(iconStr, SpriteFrame, (res: SpriteFrame) => {
                this.itemIcon.spriteFrame = res;
            });
            this.itemNameLab.string = numStr ? numStr.toString() : "";
        } else {
            this.itemCont.active = false;
        }
        let seasonData: proto.pb.PlayerPvpInfoPush = PlayerData.CurSeasonData;
        //seasonData.rankInfo.rankPoints = 53
        if (this.data || seasonData.currentRankInfo.rankPoints >= this.stdPvpLevel.LevelPoints) {
            this.itemNameLab.color.fromHEX("#77E6EA");
            this.bg1.active = true;
            this.cardBg.getComponent(UIOpacity).opacity = 255;
            this.itemCont.getComponent(UIOpacity).opacity = 255;
            this.sectionCont.getComponent(UIOpacity).opacity = 255;
            if (!this.data) {
                this.canGetEffect.active = true;
            }
        } else {
            this.cardBg.getComponent(UIOpacity).opacity = 127;
            this.itemCont.getComponent(UIOpacity).opacity = 168;
            this.sectionCont.getComponent(UIOpacity).opacity = 168;
            this.bg2.active = true;
            this.itemNameLab.color.fromHEX("#FFFFFF");
        }
    }
}