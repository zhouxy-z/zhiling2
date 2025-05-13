import { Node, Button, Label, Sprite, UITransform, path, SpriteFrame, Rect, v2, Vec3, ScrollView, Vec2, sp, tween, v3, easing, RichText, Widget} from "cc";
import { SpriteLabel } from "../../component/SpriteLabel";
import { CellInfo, RollViewDir, VList } from "../../component/VList";
import { Panel } from "../../manager/GameRoot";
import { CfgMgr, StdBattleCardDelivery, StdCardUpgradeShow, StdItem, StdPlayerLevel, StdPlayerLevelAward, StdProcessBox, StdProcessBoxType, ThingName } from "../../manager/CfgMgr";
import { CardCollectLvContItem } from "./CardCollectLvContItem";
import { folder_item, ResMgr } from "../../manager/ResMgr";
import { PlayerData } from "../player/PlayerData";
import { EventMgr, Evt_Box_Update, Evt_Item_Change, Evt_Player_Level_Update, Evt_Upgrade_Award_Update } from "../../manager/EventMgr";
import { CardCollectBoxCardItem } from "./CardCollectBoxCardItem";
import proto, { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { MsgPanel } from "../common/MsgPanel";
import { DateUtils } from "../../utils/DateUtils";
import { ItemUtil } from "../../utils/ItemUtils";
import { CardCollectQualItem } from "./CardCollectQualItem";
import { Goto } from "../../DL";

export class CardCollectPanel extends Panel {
    protected prefab: string = "prefabs/cardCollect/CardCollectPanel";
    private lvLab: SpriteLabel;
    private helpBtn: Button;
    private lvList: VList;
    private awardIcon: Sprite;
    private awardLvLab: Label;
    private awardBtn: Button;
    private boxCont: Node;
    private boxIcon: Sprite;
    private boxNameImg: Sprite;
    private boxItemIcon: Sprite;
    private boxItemNumLab: Label;
    private boxBtn: Button;
    private limitTimeCont: Node;
    private limitTimeLab: Label;
    private awardCardList: VList;
    private hlepCont: Node;
    private hlepCloseBtn: Button;
    private hlepMask: Button;
    private qualList: VList;
    private panelMsk: Node;
    private addExpEffect: sp.Skeleton;
    private addExpNumLab: SpriteLabel;
    private lvAwardList: StdPlayerLevelAward[];
    private curLv: number = 0;
    private curBigPrizePreview: StdPlayerLevel;
    private boxData: proto.base.IProcessBoxReward;
    private boxCfg: StdProcessBox;
    private boxEndTime: number;
    private awardCardDatas: {cardData: proto.base.IBattleCard, isGet: boolean}[];
    private upgradeShowCfgList: StdCardUpgradeShow[];
    private curLvResult: proto.pb.PlayerLevelExpChangedPush;
    protected onLoad() {
        this.lvLab = this.find("topLvCont/lvCont/lvLab").addComponent(SpriteLabel);
        this.lvLab.font = "sheets/numberImg/num1";
        this.helpBtn = this.find("topLvCont/helpBtn", Button);
        this.lvList = this.find("lvList", VList);
        this.lvList.initVisible = this.initVisbleLvList.bind(this);
        this.lvList.updateCell = this.updateLvCell.bind(this);
        this.awardIcon = this.find("bigPrizeCont/awardIcon", Sprite);
        this.awardBtn = this.find("bigPrizeCont/awardIcon", Button);
        this.awardLvLab = this.find("bigPrizeCont/awardLvLab", Label);

        this.boxCont = this.find("boxCont");
        this.boxBtn = this.find("boxCont/box/boxBtn", Button);
        this.boxIcon = this.find("boxCont/box/boxBtn/boxIcon", Sprite);
        this.boxNameImg = this.find("boxCont/box/boxBtn/boxNameImg", Sprite);
        this.boxItemIcon = this.find("boxCont/box/boxItemCont/boxItemIcon", Sprite);
        this.boxItemNumLab = this.find("boxCont/box/boxItemCont/boxItemNumLab", Label);
        this.limitTimeCont = this.find("boxCont/box/limitTimeCont");
        this.limitTimeLab = this.find("boxCont/box/limitTimeCont/limitTimeLab", Label);
        
        this.awardCardList = this.find("boxCont/awardCardList", VList);
        this.awardCardList.updateCell = this.updateCardCell.bind(this);
        this.awardCardList.clickCell = this.awardCellClick.bind(this);
        this.awardCardList.initVisible = this.awardCardInitView.bind(this);
        this.hlepCont = this.find("hlepCont");
        this.hlepCloseBtn = this.find("hlepCont/cont/closeBtn", Button);
        this.hlepMask = this.find("hlepCont/mask", Button);
        this.qualList = this.find("hlepCont/cont/qualList", VList);
        this.qualList.updateCell = this.updateQualCell.bind(this);
        this.panelMsk = this.find("panelMsk");
        this.hlepCont.active = false;

        this.addExpEffect = this.find("addExpEffect", sp.Skeleton);
        this.addExpNumLab = this.find("addExpEffect/addExpNumLab").addComponent(SpriteLabel);
        this.addExpNumLab.font = "sheets/numberImg/num2";
        this.addExpNumLab.string = "10";
        this.addExpEffect.node.active = false;
        
        this.boxBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.helpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.hlepCloseBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.hlepMask.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.CloseBy("closeBtn");
        this.lvAwardList = CfgMgr.GetPlayerLevelArwardList();
        let qualCfgList: StdCardUpgradeShow[] = CfgMgr.GetCardUpgradeShowList();
        this.upgradeShowCfgList = qualCfgList.slice(1, qualCfgList.length);
        this.qualList.cellCount = this.upgradeShowCfgList.length;
    }

    protected onShow(): void {
       EventMgr.on(Evt_Item_Change, this.onItemChange, this);
       EventMgr.on(Evt_Box_Update, this.onUpdateBox, this);
       EventMgr.on(Evt_Upgrade_Award_Update, this.onUpgradeAwardUpdate, this);
       this.lvList.node.on(ScrollView.EventType.SCROLLING, this.onLvListScrolling, this);
    }

    protected onHide(): void {
        EventMgr.off(Evt_Item_Change, this.onItemChange, this);
        EventMgr.off(Evt_Box_Update, this.onUpdateBox, this);
        EventMgr.off(Evt_Upgrade_Award_Update, this.onUpgradeAwardUpdate, this);
        this.lvList.node.off(ScrollView.EventType.SCROLLING, this.onLvListScrolling, this);
    }

    public flush(curLvResult: proto.pb.PlayerLevelExpChangedPush = null): void {
        this.curLvResult = curLvResult;
        this.hlepCont.active = false;
        if (this.curLvResult) {
            //升级结果跳转过来的有动画表现，防止动画进行中操纵滚动条
            this.panelMsk.active = true;
            this.updateLvCont(this.curLvResult.levelBefore);
            this.addExpEffect.node.active = true;
            this.addExpNumLab.string = `+${this.curLvResult.levelExpChanged}`;
            this.addExpEffect.clearAnimation();
            this.addExpEffect.setAnimation(0, "animation", false);
            this.addExpEffect.setCompleteListener(() => {
                this.addExpEffect.node.active = false;
                this.lvLab.string = this.curLvResult.levelAfter.toString();
                this.showUpEffect();
            });
        } else {
            this.panelMsk.active = false;
            this.updateLvCont(0);
        }
        let defRollIndex: number = 0;
        let miniLv: number;
        let maxLv: number;
        for (let index = 0; index < this.lvAwardList.length; index++) {
            let stdPlayerLevelAward: StdPlayerLevelAward = this.lvAwardList[index];
            let stdMini: StdPlayerLevel = stdPlayerLevelAward.stdPlayerLevel;
            let stdMax: StdPlayerLevel;
            if (stdPlayerLevelAward.sectionList && stdPlayerLevelAward.sectionList.length) {
                stdMax = stdPlayerLevelAward.sectionList[stdPlayerLevelAward.sectionList.length - 1];
            }
            miniLv = stdMini.Level;
            maxLv = stdMax ? stdMax.Level : stdMini.Level;
            if (this.curLv >= miniLv && this.curLv <= maxLv) {
                defRollIndex = index;
                break;
            }
        }
        this.lvList.scrollToIndex(defRollIndex);
        this.updateBox();
        
    }

    protected update(dt: number): void {
        if (this.boxEndTime > 0) {
            let time: number = this.boxEndTime - DateUtils.ServerTime;
            if (time > 0) {
                let day: number = Math.floor(time / 86400);
                if (day >= 1) {
                    this.limitTimeLab.string = `${day}天` + DateUtils.FormatTime(time - day * 86400, "%{hh}:%{mm}:%{ss}");
                } else {
                    this.limitTimeLab.string = DateUtils.FormatTime(time, "%{hh}:%{mm}:%{ss}");
                }
            }else {
                this.limitTimeLab.string = "活动结束";
                if (PlayerData.GetNextLimitBoxProcess()) this.updateBox();
            }
        }
    }

    private onBtnClick(btn: Button): void {
        switch(btn) {
            case this.boxBtn:
                this.openBox();
                break;
            case this.helpBtn:
                this.hlepCont.active = true;
                break;
            case this.hlepCloseBtn:
            case this.hlepMask:
                this.hlepCont.active = false;
                break;
        }
    }

    private onItemChange(changeMap:{[key: string]: number}): void {
        if (this.boxCfg){
            for (let index = 0; index < this.boxCfg.CostIDs.length; index++) {
                if (changeMap[this.boxCfg.CostIDs[index]]) {
                    this.updateBox();
                    break;
                }
                
            }
            
        }
    }

    private awardCellClick(cell: Node, cellInfo: CellInfo): void {
        let awardData: {cardData: proto.base.IBattleCard, isGet: boolean} = this.awardCardDatas[cellInfo.index];
        Goto("CardTipsPanel", awardData.cardData.cardId);
    }

    private awardCardInitView(): void {
        let bg: Node = this.awardCardList.node.getChildByName("awardCardBg");
        let widget: Widget = bg.getComponent(Widget);
        let cont: Node = this.awardCardList.node.getChildByPath("view/content");
        let contTrans: UITransform = cont.getComponent(UITransform);
        let contR: Rect = contTrans.getBoundingBoxToWorld();
        let trans: UITransform = this.node.getComponent(UITransform);
        widget.right = trans.width - contR.xMax - 30;
    }

    private onLvListScrolling(rollDir: RollViewDir, isBouncing: boolean): void {
        
        console.log("滚动方向----》" + RollViewDir[rollDir] + " 是否回弹" + isBouncing)
        if (isBouncing) {
            return;
        }
        this.findCentreLvCell(rollDir);
    }

    private onUpgradeAwardUpdate(getAward: proto.base.IThing): void {
        if (getAward) {
            Goto("RewardTips", [getAward]);
        }
        this.updateLvCont();
    }

    private updateLvCont(lv: number = 0): void{
        this.curLv = lv || PlayerData.player.level;
        this.lvList.cellCount = this.lvAwardList.length;
        this.lvLab.string = this.curLv.toString();
    }

    private onUpdateBox(getAwardList: proto.base.IThing[]): void {
        if (getAwardList && getAwardList.length) {
            Goto("RewardTips", getAwardList);
        }
        this.updateBox();
    }

    private initVisbleLvList(): void {
        this.findCentreLvCell(RollViewDir.Left);
    }

    private showUpEffect(): void {
        let cellNameList: string[] = []
        let cellIinfoList: CellInfo[] = this.lvList.visibleCellInfoList;
        for (let cellInfo of cellIinfoList) {
            let stdPlayerAwardLevel: StdPlayerLevelAward = this.lvAwardList[cellInfo.index];
            if (stdPlayerAwardLevel.stdPlayerLevel.Level >= this.curLvResult.levelBefore && stdPlayerAwardLevel.stdPlayerLevel.Level <= this.curLvResult.levelAfter) {
                cellNameList.push(cellInfo.cellName);
            } else {
                let lineNum: number = stdPlayerAwardLevel.sectionList ? stdPlayerAwardLevel.sectionList.length + 1 : 0;
                for (let index = 0; index < lineNum; index++) {
                    let targetLv: number = stdPlayerAwardLevel.stdPlayerLevel.Level + (index + 1);
                    if (this.curLvResult.levelBefore == targetLv) {
                        cellNameList.push(cellInfo.cellName);
                    }
                }
            }
            
            
            
        }
        
        
        let cellNodeList: Node[] = this.lvList.visibleCellList;
        let time: number = 0;
        for (let index = 0; index < cellNameList.length; index++) {
            for (let cell of cellNodeList) {
                if (cell.name == cellNameList[index]) {
                    let lvCom: CardCollectLvContItem = cell.getComponent(CardCollectLvContItem);
                    time = lvCom.playUpEffect(time, this.curLvResult.levelAfter);
                    console.log("播放升级特效---->" + cell.name + "----->" + time)
                }
            }
            
        }
        this.scheduleOnce(()=>{
            this.panelMsk.active = false;
            this.curLv = this.curLvResult.levelAfter;
            this.curLvResult = null;
            //this.updateLvCont();
        }, time);
        
    }

    private lvCellClick(cell: Node, cellInfo: CellInfo): void {
        let stdPlayerAwardLevel = this.lvAwardList[cellInfo.index];
        let awardData = PlayerData.GetUpgradeAward(stdPlayerAwardLevel.stdPlayerLevel.Level);
        let stdCardDeliver: StdBattleCardDelivery;
        //点击已获取
        if (awardData) {
            if (awardData.rewardType == ThingName.battlecard) {
                stdCardDeliver = CfgMgr.GetBattleCardDeliver(awardData.rewardId);
                if (stdCardDeliver) {
                    Goto("CardTipsPanel", stdCardDeliver.CardID);
                }
                
            }
        }
    }

    private updateLvCell(cell: Node, cellInfo: CellInfo): void {
        let stdPlayerAwardLevel: StdPlayerLevelAward = this.lvAwardList[cellInfo.index];
        let lvContItem: CardCollectLvContItem = cell.getComponent(CardCollectLvContItem) || cell.addComponent(CardCollectLvContItem);
        lvContItem.SetData(stdPlayerAwardLevel, this.curLv, cellInfo.index);
        //this.lvPreview();
    }

    private findCentreLvCell(rollDir: RollViewDir = RollViewDir.None): void {
        let lvListCenterWorld: Vec3 = this.lvList.node.worldPosition;
        let cellNodeList: Node[] = this.lvList.visibleCellList;
        let centreCell: Node = null;
        let minDistance = Infinity;
        for (let cell of cellNodeList) {
            let cellWorldPos = cell.worldPosition;
            let distance = Math.abs(cellWorldPos.x - lvListCenterWorld.x);
            if (distance < minDistance) {
                minDistance = distance;
                centreCell = cell;
            }
        }
        if (centreCell) {
            let checkIndex: number = -1;
            let cellIinfo: CellInfo[] = this.lvList.visibleCellInfoList;
            for (let index = 0; index < cellIinfo.length; index++) {
                if (cellIinfo[index].cellName == centreCell.name) {
                    checkIndex = cellIinfo[index].index;
                    break;
                }
                
            }
            if (checkIndex > -1) {
                let lvBigPrize: StdPlayerLevel;
                if (rollDir == RollViewDir.None) {
                    let centreCellWorldPos = centreCell.worldPosition;
                    if (centreCellWorldPos.x < lvListCenterWorld.x) {
                        rollDir = RollViewDir.Left;
                    } else {
                        rollDir = RollViewDir.Right;
                    }
                }
                
                if (rollDir == RollViewDir.Left) {
                    lvBigPrize = this.findRightBigPrize(checkIndex);
                    if (!lvBigPrize) {
                        lvBigPrize = this.findLeftBigPrize(checkIndex);
                    }
                } else if (rollDir == RollViewDir.Right) {
                    lvBigPrize = this.findLeftBigPrize(checkIndex);
                    if (!lvBigPrize) {
                        lvBigPrize = this.findRightBigPrize(checkIndex);
                    }
                    
                }
                if (lvBigPrize) this.bigPrizePreview(lvBigPrize);   
            }
        }
    }

    private findLeftBigPrize(checkIndex: number): StdPlayerLevel {
        let curLv: StdPlayerLevel;
        for (let index = checkIndex; index >= 0; index--) {
            curLv = this.lvAwardList[index].stdPlayerLevel;
            if (curLv.Grandprize == 1) {
                return curLv;
            }
        }
        return null;
    }

    private findRightBigPrize(checkIndex: number): StdPlayerLevel {
        let curLv: StdPlayerLevel;
        for (let index = checkIndex; index < this.lvAwardList.length; index++) {
            curLv = this.lvAwardList[index].stdPlayerLevel;
            if (curLv.Grandprize == 1) {
                return curLv;
            }
        }
        return null;
    }

    //大奖预览
    private bigPrizePreview(stdPlayerLevel: StdPlayerLevel): void {
        if (!this.curBigPrizePreview || this.curBigPrizePreview.Level != stdPlayerLevel.Level) {
            this.curBigPrizePreview = stdPlayerLevel;
            let iconStr: string;
            let numNum: number;
            
            if (this.curBigPrizePreview.RewardPool > 0) {
                iconStr = path.join("sheets/cardCollect", this.curBigPrizePreview.icon, "spriteFrame");
            } else {
                if (this.curBigPrizePreview.RewardID > 0) {
                    let stdItem: StdItem = CfgMgr.Getitem(this.curBigPrizePreview.RewardID);
                    if (stdItem) {
                        iconStr = path.join(folder_item, stdItem.Icon, "spriteFrame");
                        numNum = this.curBigPrizePreview.RewardNumber[0];
                    }
                    
                }
            }
            this.awardLvLab.string = `${this.curBigPrizePreview.Level}级可获得`;
            if (iconStr) {
                this.awardIcon.node.active = true;
                this.awardLvLab.node.active = true;
                ResMgr.LoadResAbSub(iconStr, SpriteFrame, (res: SpriteFrame) => {
                    this.awardIcon.spriteFrame = res;
                });
                
            } else {
                this.awardIcon.node.active = false;
                
            }

        }
    }

    private updateCardCell(cell: Node, cellInfo: CellInfo): void {
        let boxCardItem: CardCollectBoxCardItem = cell.getComponent(CardCollectBoxCardItem) || cell.addComponent(CardCollectBoxCardItem);
        boxCardItem.SetData(this.awardCardDatas[cellInfo.index]);
    }

    private updateBox(isGet: boolean = false): void {
        this.boxCfg = PlayerData.GetCurStdBoxProcess();
        this.boxEndTime = 0;
        if (this.boxCfg) {
            this.boxCont.active = true;
            this.boxData = PlayerData.GetBoxProcessData(this.boxCfg.ID);
            ResMgr.LoadResAbSub(path.join("sheets/cardCollect", `boxIcon${this.boxCfg.ShowType}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                this.boxIcon.spriteFrame = res;
            });
            ResMgr.LoadResAbSub(path.join("sheets/cardCollect", `boxName${this.boxCfg.ShowType}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                this.boxNameImg.spriteFrame = res;
            });
            let stdItem: StdItem = CfgMgr.Getitem(this.boxCfg.CostIDs[0]);
            ResMgr.LoadResAbSub(path.join(folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame, (res) => {
                this.boxItemIcon.spriteFrame = res;
            });
            
            this.boxItemNumLab.string = `${PlayerData.GetItemCount(this.boxCfg.CostIDs[0])}`;
            if (this.boxCfg.BoxType == StdProcessBoxType.LimitBox) {
                this.boxEndTime = DateUtils.DateStringToTime(this.boxCfg.EndTime);
                this.limitTimeLab.color.fromHEX("#C22424");
            } else {
                this.limitTimeLab.color.fromHEX("#432809");
                this.limitTimeLab.string = "不限时";
            }
            this.awardCardDatas = [];
            for (let index = 0; index < this.boxCfg.RewardIDs.length; index++) {
                let stdCardDeliver: StdBattleCardDelivery = CfgMgr.GetBattleCardDeliver(this.boxCfg.RewardIDs[index]);
                if (stdCardDeliver) {
                    let cardData: proto.base.IBattleCard = PlayerData.CreateCardData(stdCardDeliver.CardID, stdCardDeliver.CardQuality);
                    let isGet: boolean = false;
                    if (this.boxData) {
                        for (let rewardData of this.boxData.rewards) {
                            if (rewardData.rewardIndex == index) {
                                isGet = true;
                                break;
                            }
                        }
                    }
                    this.awardCardDatas.push({cardData: cardData, isGet: isGet});
                }
                
            }
            this.awardCardList.cellCount = this.awardCardDatas.length;
            //this.awardCardInitView();
        } else {
            this.boxCfg = null;
            this.boxCont.active = false;
        }
    }

    private updateQualCell(cell: Node, cellInfo: CellInfo): void {
        let qualItem: CardCollectQualItem = cell.getComponent(CardCollectQualItem) || cell.addComponent(CardCollectQualItem);
        qualItem.SetData(this.upgradeShowCfgList[cellInfo.index]);
    }

    private openBox(): void {
        if (this.boxData) {
            let getNum: number = 0;
            for (let index = 0; index < this.boxCfg.RewardIDs.length; index++) {
                for (let rewardData of this.boxData.rewards) {
                    if (rewardData.rewardIndex == index) getNum ++;
                }
            }
            if (getNum >= this.boxCfg.RewardIDs.length) {
                MsgPanel.Show("已全部领取");
                return;
            }
        }
        if (this.boxCfg.BoxType == StdProcessBoxType.LimitBox) {
            let startTime: number = DateUtils.DateStringToTime(this.boxCfg.StartTime);
            if (DateUtils.ServerTime < startTime) {
                MsgPanel.Show("宝箱开启时间未到");
                return;
            }
            let endTime = DateUtils.DateStringToTime(this.boxCfg.EndTime);
            if (DateUtils.ServerTime >= endTime) {
                MsgPanel.Show("宝箱开启时间已结束");
                return;
            }
        } 
        if(!ItemUtil.CheckThingConsumes(null, this.boxCfg.CostIDs, this.boxCfg.CostNums, true)){
            return;
        }
        let data = new Req['logic.protocol.processboxopen']();
        data.boxId = this.boxCfg.ID;
        Session.Send(Route['logic.protocol.processboxopen'], data);
        console.log(`发送开启箱子---->${data.boxId}`);
    }
}