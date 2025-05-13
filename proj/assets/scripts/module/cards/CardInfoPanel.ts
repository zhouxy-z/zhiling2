import { Button, easing, EventTouch, Input, instantiate, js, Label, Node, path, RichText, sp, Sprite, SpriteFrame, tween, UIOpacity, v3 } from "cc";
import { Panel } from "../../manager/GameRoot";
import { EventMgr, Evt_Card_Add, Evt_Card_Chage, Evt_Hide_Scene, Evt_Player_Level_Update, Evt_Show_Scene } from "../../manager/EventMgr";
import { CardInfoStateType } from "../player/PlayerStruct";
import { CfgMgr, StdBattleCardDelivery, StdCard, StdCardUpgrade, StdCardUpgradeShow, StdPlayerLevelAward } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import { CellInfo, VList } from "../../component/VList";
import { CardClassItem } from "./CardClassItem";
import { card_quality, ResMgr, roleimage } from "../../manager/ResMgr";
import { CostItem } from "../common/CostItem";
import proto, { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { CardAwardItem } from "./CardAwardItem";
import { ItemUtil } from "../../utils/ItemUtils";
import { Card } from "./Card";
import { HaveItem } from "../common/HaveItem";
import { Goto } from "../../DL";
import { MsgPanel } from "../common/MsgPanel";

export class CardInfoPanel extends Panel {
    protected prefab: string = "prefabs/cards/CardInfoPanel";
    private quility: Sprite;
    private roleImg: Sprite;
    private creatorBtn: Button;
    private addBtn: Button;
    private delBtn: Button;
    private fillBtn: Button;
    private changeBtn: Button;
    private upLevelBtn: Button;
    private buyBtn: Button;
    private classNameLab: Label;
    private cardClassList: VList;
    private descLab: RichText;
    private frameNameLab: Label;
    private frameDescLab: RichText;
    private frameIcon: Sprite;
    private upgradeCont: Node;
    private upgradeHaveItemCont: Node;
    private upgradeTempHaveItem: Node;
    private notLvCont: Node;
    private lvCont: Node;
    private qualLab: Label;
    private addExpLab: Label;
    private lastBtn: Button;
    private nextBtn: Button;
    private costCont: Node;
    private upgradeBtn: Button;
    private upgradeMaksBtn: Button;
    private upgradeCloseBtn: Button;
    private tipsLab: RichText;
    private awardCardList: VList;
    private upgradeResultCont: Node;
    private upgradeResultMaskBtn: Button;
    private upgradeResultCard: Card;
    private upgradeResultEffect: sp.Skeleton;
    private stdCard: StdCard;
    private upgradeList: StdCardUpgrade[];
    private selectCardData: proto.base.IBattleCard;
    private cardClassDatas: proto.base.IBattleCard[];
    private awardCardDatas: proto.base.IBattleCard[];
    private targetQual: number;
    private callback: Function;
    private type: CardInfoStateType;
    private consumeIdList: number[];
    private consumeNumList: number[];
    private curLvResult: proto.pb.PlayerLevelExpChangedPush;
    protected onLoad() {
        this.creatorBtn = this.find("bodyCont/creatorBtn", Button);
        this.addBtn = this.find("bodyCont/addBtn", Button);
        this.delBtn = this.find("bodyCont/delBtn", Button);
        this.fillBtn = this.find("bodyCont/fillBtn", Button);
        this.changeBtn = this.find("bodyCont/changeBtn", Button);
        this.upLevelBtn = this.find("bodyCont/upLevelBtn", Button);
        this.buyBtn = this.find("bodyCont/buyBtn", Button);
        this.quility = this.find("bodyCont/quility", Sprite);
        this.roleImg = this.find("bodyCont/roleImg", Sprite);
        this.classNameLab = this.find("infoCont/classNameLab", Label);
        this.cardClassList = this.find("infoCont/cardClassList", VList);
        this.cardClassList.updateCell = this.updateCardCalssCell.bind(this);
        this.cardClassList.selectCondCheck = this.selectCondCheck.bind(this);
        this.cardClassList.selectCell = this.selectCardCalssCell.bind(this);
        this.descLab = this.find("infoCont/cardDescCont/descLab", RichText);
        this.frameIcon = this.find("infoCont/frameCont/frameIcon", Sprite);
        this.frameNameLab = this.find("infoCont/frameCont/frameNameLab", Label);
        this.frameDescLab = this.find("infoCont/frameCont/frameDescLab", RichText);
        this.upgradeCont = this.find("upgradeCont");
        this.upgradeHaveItemCont = this.find("upgradeCont/haveItemCont");
        this.upgradeTempHaveItem = this.upgradeHaveItemCont.children.shift();
        this.upgradeCloseBtn = this.find("upgradeCont/cont/closeBtn", Button);
        this.upgradeMaksBtn = this.find("upgradeCont/mask", Button);
        this.notLvCont = this.find("upgradeCont/cont/notLvCont");
        this.lvCont = this.find("upgradeCont/cont/lvCont");
        this.qualLab = this.find("upgradeCont/cont/lvCont/qualLab", Label);
        this.addExpLab = this.find("upgradeCont/cont/lvCont/expCont/addExpLab", Label);
        this.lastBtn = this.find("upgradeCont/cont/lvCont/lastBtn", Button);
        this.nextBtn = this.find("upgradeCont/cont/lvCont/nextBtn", Button);
        this.costCont = this.find("upgradeCont/cont/lvCont/costCont");
        this.upgradeBtn = this.find("upgradeCont/cont/lvCont/upgradeBtn", Button);
        this.tipsLab = this.find("upgradeCont/cont/awardCont/tipsLab", RichText);
        this.awardCardList = this.find("upgradeCont/cont/awardCont/awardCardList", VList);
        this.awardCardList.updateCell = this.updateAwardCardCell.bind(this);
        this.awardCardList.clickCell = this.awardCardClick.bind(this);
        this.upgradeResultCont = this.find("upgradeResultCont");
        this.upgradeResultMaskBtn = this.find("upgradeResultCont/mask", Button);
        this.upgradeResultCard = this.find("upgradeResultCont/Cards").addComponent(Card);
        this.upgradeResultEffect = this.find("upgradeResultCont/effect").getComponent(sp.Skeleton);
        this.creatorBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.addBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.delBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.fillBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.changeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.upLevelBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.buyBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.upgradeMaksBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.upgradeCloseBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.lastBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.nextBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.upgradeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.upgradeResultMaskBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.CloseBy("mask");
        this.CloseBy("closeBtn");
        this.upgradeCont.active = false;
        this.upgradeResultCont.active = false;
    }

    protected onShow(): void {
        EventMgr.emit(Evt_Hide_Scene, js.getClassName(this));
        EventMgr.on(Evt_Card_Chage, this.onUpdateCard, this);
        EventMgr.on(Evt_Card_Add, this.onAddCard, this);
        EventMgr.on(Evt_Player_Level_Update, this.onLevelUpdate, this);
        // Session.Send(Protocol.getplayerdecks)
    }

    protected onHide(...args: any[]): void {
        EventMgr.emit(Evt_Show_Scene, js.getClassByName(this));
        EventMgr.off(Evt_Card_Chage, this.onUpdateCard, this);
        EventMgr.off(Evt_Card_Add, this.onAddCard, this);
        EventMgr.off(Evt_Player_Level_Update, this.onLevelUpdate, this);
    }
    
    public flush(data: proto.base.IBattleCard, type: CardInfoStateType, callback: Function, isShowUp: boolean = false): void {
        this.upgradeCont.active = isShowUp;
        this.type = type;
        this.callback = callback;
        this.initCardClass(data.id, data.cardId);
    }

    private onLevelUpdate(result: proto.pb.PlayerLevelExpChangedPush): void {
        this.curLvResult = result;
    }

    private onUpdateCard(cardData: proto.base.IBattleCard, change: number): void {
        this.scheduleOnce(()=>{
            if (this.selectCardData.id == cardData.id) {
                this.initCardClass(this.selectCardData.id, this.selectCardData.cardId);
                this.showUpgradeResult(cardData, change);
            }
        }, 0.1)
       
    }

    private onAddCard(cardData: proto.base.IBattleCard): void {
        if (!this.awardCardDatas) return;
        let isUpdate: boolean = false;
        for (let data of this.awardCardDatas) {
            if (data.cardId == cardData.cardId) {
                isUpdate = true;
                break;
            }
        }
        if (isUpdate) {
            this.initAwardCard();
        }
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.upLevelBtn:  
                this.onShowUpgrade();
                break;
            case this.buyBtn:
               Goto("TradePanel");
               this.Hide();
                break;
            case this.creatorBtn:
                this.callback(this.selectCardData);
                this.Hide();
                break;
            case this.addBtn:
                this.callback();
                this.Hide();
                break;
            case this.delBtn:
                this.callback();
                this.Hide();
                break;
            case this.fillBtn:
                
                break;
            case this.changeBtn:
    
                break;
            case this.upgradeMaksBtn:
            case this.upgradeCloseBtn:
                this.upgradeCont.active = false;
                this.targetQual = this.selectCardData.quality;
                this.updateQual();
                break;
            case this.lastBtn:
                this.targetQual--;
                this.updateShowQual();
                break;
            case this.nextBtn:
                this.targetQual++;
                this.updateShowQual();
                break;
            case this.upgradeBtn:
                this.toUpgrade();
                break;
            case this.upgradeResultMaskBtn:
                this.closeUpgradeResult();
                break;
            default:
                break;
        }
    }

    private toUpgrade(): void {
        if (!ItemUtil.CheckThingConsumes(null, this.consumeIdList, this.consumeNumList, true)) {
            return;
        }
        if (this.selectCardData.quality < this.upgradeList.length) {
            this.curLvResult = null;
            let nextLv: StdCardUpgrade = this.upgradeList[this.selectCardData.quality];
            let data = new Req["logic.protocol.battlecardupgrade"]();
            data.cardId = this.selectCardData.id;
            data.targetQuality = this.targetQual;
            Session.Send(Route["logic.protocol.battlecardupgrade"], data);
            console.log("发送卡牌升级----id" + this.selectCardData.id + " cardId--->" + this.selectCardData.cardId + " quality---->" + nextLv.Quality);
        }
    }

    private closeUpgradeResult(): void {
        this.upgradeResultCont.active = false;
        if (this.curLvResult) {
            //有升级
            if (this.curLvResult.levelAfter > this.curLvResult.levelBefore) {
                let lvAwardList: StdPlayerLevelAward[]  = CfgMgr.GetPlayerLevelArwardList();
                for (let lvAward of lvAwardList) {
                    if (lvAward.stdPlayerLevel.Level > this.curLvResult.levelBefore && lvAward.stdPlayerLevel.Level <= this.curLvResult.levelAfter) {
                       Goto("CardCollectPanel", this.curLvResult);
                        break;
                    }
                }
                
            }
        }
    }


    private initCardClass(id: string, cardId: number): void {
        this.cardClassDatas = [];
        let cards: StdCard[] = CfgMgr.GetCardClassList(cardId);
        let getCards: proto.base.IBattleCard[] = [];
        let notCards: proto.base.IBattleCard[] = [];
        
        for (let std of cards) {
            let cardClassCardDatas: proto.base.IBattleCard[] = PlayerData.GetCardDataByCfgId(std.ID);
            let isGet: boolean = false;
            for (let data of cardClassCardDatas) {
                getCards[getCards.length] = data;
                isGet = true;
            }
            if (!isGet) {
                let cardClassData: proto.base.IBattleCard = PlayerData.CreateCardData(std.ID);
                notCards[notCards.length] = cardClassData;
            }
        }
        getCards.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            return a.cardId - b.cardId;
        });
        notCards.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            return a.cardId - b.cardId;
        });
        this.cardClassDatas = getCards.concat(notCards);
        let selectIndex: number = 0;
        let classInfo: proto.base.IBattleCard;
        for (let index = 0; index < this.cardClassDatas.length; index++) {
            classInfo = this.cardClassDatas[index];
            if (classInfo.id == id && cardId) {
                selectIndex = index;
                break;
            }
        }
        this.cardClassList.cellCount = this.cardClassDatas.length;
        this.cardClassList.selectIndex(selectIndex);
    }
    
    private updateCardCalssCell(cell: Node, cellInfo: CellInfo): void {
        let cellCom: CardClassItem = cell.getComponent(CardClassItem) || cell.addComponent(CardClassItem);
        cell.getChildByPath("select").active = cellInfo.isSelect;
        let scale = cellInfo.isSelect ? 1 : 0.8
        cell.setScale(scale, scale, 1 )
        cellCom.SetData(this.cardClassDatas[cellInfo.index]);
    }
    
    private selectCondCheck(cell: Node, cellInfo: CellInfo): boolean {
        let data: proto.base.IBattleCard = this.cardClassDatas[cellInfo.index];
        if (data.id) return true;
        if (cell)  MsgPanel.Show( "暂未获得此卡");
        return false;
    }

    private selectCardCalssCell(cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo): void {
        if (cell) {
            cell.getChildByPath("select").active = cellInfo.isSelect;
            let scale = cellInfo.isSelect ? 1 : 0.8
            cell.setScale(scale, scale, 1 )
        }
        if (lastCell && lastInfo) {
            lastCell.getChildByPath("select").active = lastInfo.isSelect;
            let scale = lastInfo.isSelect ? 1 : 0.8
            lastCell.setScale(scale, scale, 1 )
        } 
        this.selectCard(this.cardClassDatas[cellInfo.index]);
        
    }

    private selectCard(data: proto.base.IBattleCard): void {
        this.selectCardData = data;
        this.upgradeList = CfgMgr.GetCardUpgradeList(this.selectCardData.cardId);
        let curUpgrade = this.upgradeList[this.selectCardData.quality - 1];
        this.stdCard = CfgMgr.GetCard(this.selectCardData.cardId);
        this.targetQual = curUpgrade ? curUpgrade.Quality : 1;
        this.descLab.string = this.stdCard.SkillDesc || "";
        // this.classNameLab.string = this.stdCard.ClassName;
        ResMgr.LoadResAbSub(path.join(roleimage, this.stdCard.CardView, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.roleImg.spriteFrame = res;
        });
        this.updateQual();
        this.updateBtnState();
        if (this.upgradeCont.active) {
            this.onShowUpgrade();
        }
    }   

    private updateQual(): void {
        let stdQual: StdCardUpgradeShow = CfgMgr.GetCardUpgradeShow(this.targetQual);
        this.frameNameLab.string = stdQual.Title;
        this.frameDescLab.string = stdQual.FrameDesc;
        ResMgr.LoadResAbSub(path.join(card_quality, stdQual.Picture, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.frameIcon.spriteFrame = res;
        });
        ResMgr.LoadResAbSub(path.join(card_quality, "bodyframe_" + this.targetQual, "spriteFrame"), SpriteFrame, res =>{
            this.quility.spriteFrame = res;
        });
        
        this.qualLab.string = stdQual.Title;
        
        
    }

    private updateBtnState(): void {
        this.addBtn.node.active = false;
        this.changeBtn.node.active = false; 
        this.creatorBtn.node.active = false; 
        this.delBtn.node.active = false; 
        this.fillBtn.node.active = false; 
        this.upLevelBtn.node.active = this.selectCardData.id != "";
        this.buyBtn.node.active = this.selectCardData.id != "";
        if(this.selectCardData.id != ""){
            switch (this.type) {
                case CardInfoStateType.Add:
                    this.addBtn.node.active = true      
                    break;
                case CardInfoStateType.Change:
                    this.changeBtn.node.active = true    
                    break;
                case CardInfoStateType.Creator:
                    this.creatorBtn.node.active = true    
                    break;
                case CardInfoStateType.Del:
                    this.delBtn.node.active = true    
                    break;
                case CardInfoStateType.Fill:
                    this.fillBtn.node.active = true    
                    break;
                default:
                    break;
            }
        }
    }


    private onShowUpgrade(): void {
        this.upgradeCont.active = true;
        let nextUpgrade: StdCardUpgrade = this.upgradeList[this.selectCardData.quality];
        //满级
        if (!nextUpgrade) {
            this.lvCont.active = false;
            this.notLvCont.active = true;
        } else {
            this.lvCont.active = true;
            this.notLvCont.active = false;
            this.targetQual += 1;
            this.updateShowQual();
        }
        this.initUpgradeHaveItem();
        this.initAwardCard();
    }

    private initUpgradeHaveItem(): void {
        let itemIds: number[] = [];
        let itemMap: {[key: number]: number} = {};
        if (this.upgradeList) {
            for (let std of this.upgradeList) {
                if (std.CostItemIds) {
                    for (let id of std.CostItemIds) {
                        if (!itemMap[id]) {
                            itemIds.push(id);
                            itemMap[id] = id;
                        }
                    } 
                }
                
            }
        }
        let maxLen: number = Math.max(this.upgradeHaveItemCont.children.length, itemIds.length);
        let node: Node;
        let haveItem: HaveItem;
        for (let index = 0; index < maxLen; index++) {
            node = this.upgradeHaveItemCont.children[index];
            if (!node) {
                node = instantiate(this.upgradeTempHaveItem);
                node.parent = this.upgradeHaveItemCont;
            }
            if (index < itemIds.length){
                node.active = true;
                haveItem = node.getComponent(HaveItem) || node.addComponent(HaveItem);
                haveItem.SetData(itemIds[index]);
            } else {
                node.active = false;
            }
            
        }
        
    }

    private updateAwardCardCell(cell: Node, cellInfo: CellInfo): void {
        let cellCom: CardAwardItem = cell.getComponent(CardAwardItem) || cell.addComponent(CardAwardItem);
        cellCom.SetData(this.awardCardDatas[cellInfo.index]);
    }

    private awardCardClick(cell: Node, cellInfo: CellInfo): void {
        let data: proto.base.IBattleCard = this.awardCardDatas[cellInfo.index];
        if (data.id) {
            this.initCardClass(data.id, data.cardId);
            this.onShowUpgrade();
        } else {
            MsgPanel.Show("暂未获得此卡");
        }
    }

    private initAwardCard(): void {
        this.awardCardDatas = [];
        let stdEndUpgrade: StdCardUpgrade = this.upgradeList[this.upgradeList.length - 1];
        
        let awardCardId: number[] = [];
        if (stdEndUpgrade && stdEndUpgrade.RewardTypes){
            for (let index = 0; index < stdEndUpgrade.RewardTypes.length; index++) {
                if (stdEndUpgrade.RewardTypes[index] == 3) {
                    let stdCardDeliver: StdBattleCardDelivery = CfgMgr.GetBattleCardDeliver(stdEndUpgrade.RewardIds[index]);
                    if (stdCardDeliver) awardCardId[awardCardId.length] = stdCardDeliver.CardID;
                }
                
            }
        }
        if (awardCardId.length) {
            this.tipsLab.node.active = true;
            this.tipsLab.string = stdEndUpgrade.show;
        } else {
            this.tipsLab.node.active = false;
        }
        
        for (let index = 0; index < awardCardId.length; index++) {
            let cardId: number = awardCardId[index];
            let cardDatas: proto.base.IBattleCard[] = PlayerData.GetCardDataByCfgId(cardId);
            if (cardDatas.length) {
                for (let data of cardDatas) {
                    this.awardCardDatas[this.awardCardDatas.length] = data;
                }
            } else {
                let cardData: proto.base.IBattleCard = PlayerData.CreateCardData(cardId);
                this.awardCardDatas[this.awardCardDatas.length] = cardData;
            }
            
        }
        
        this.awardCardList.cellCount = this.awardCardDatas.length;
    }

    private updateShowQual(): void {
        if (this.targetQual <= this.selectCardData.quality + 1) {
            this.targetQual = this.selectCardData.quality + 1;
            this.lastBtn.node.active = false;
        } else {
            this.lastBtn.node.active = true;
        }

        if (this.targetQual >= this.upgradeList.length) {
            this.targetQual = this.upgradeList.length;
            this.nextBtn.node.active = false;
        } else {
            this.nextBtn.node.active = true;
        }
        
        this.updateQual();
        this.consumeIdList = [];
        this.consumeNumList = [];
        let itemIdMap:{[key: number]: {index: number, num: number}} = {};
        let addExp: number = 0;
        let curQual: number = this.selectCardData.quality;
        let stdUpgrade: StdCardUpgrade;
        for (let index = 0; index < this.upgradeList.length; index++) {
            stdUpgrade = this.upgradeList[index]; 
            if (stdUpgrade.Quality > curQual && stdUpgrade.Quality <= this.targetQual) {
                for (let j = 0; j < stdUpgrade.CostItemIds.length; j++) {
                    let id: number = stdUpgrade.CostItemIds[j];
                    let num: number = stdUpgrade.CostItemNums[j];
                    let itemData:{index: number, num: number} = itemIdMap[id];
                    if (itemData) {
                        itemData.num = itemData.num + num;
                    } else {
                        itemData = {index: j, num: num};
                        itemIdMap[id] = itemData;
                    }
                    this.consumeIdList[itemData.index] = id;
                    this.consumeNumList[itemData.index] = itemData.num;
                }
                addExp += stdUpgrade.exp;
            }
        }
        
        this.addExpLab.string = `+${addExp}`;

        let costItem: CostItem;
        let node: Node;
        for (let index = 0; index < this.costCont.children.length; index++) {
            node = this.costCont.children[index];
            if (index < this.consumeIdList.length) {
                node.active = true;
                costItem = node.getComponent(CostItem) || node.addComponent(CostItem);
                costItem.SetData(this.consumeIdList[index], this.consumeNumList[index], "#D64532");
            } else {
                node.active = false;
            }
        }
    }

    private showUpgradeResult(cardData: proto.base.IBattleCard, change: number): void {
        let oldCardData: proto.base.IBattleCard = PlayerData.CreateCardData(cardData.cardId, cardData.quality - change, cardData.id);
        this.upgradeResultCont.active = true;
        this.upgradeResultMaskBtn.interactable = false;
        this.upgradeResultEffect.node.active = false;
        this.upgradeResultCard.SetData(oldCardData);
        let maskOpacity: UIOpacity = this.upgradeResultMaskBtn.node.getComponent(UIOpacity);
        maskOpacity.opacity = 0;
        this.upgradeResultCard.node.scale = v3(0.5, 0.5);
        tween(maskOpacity)
        .to(0.33,{opacity:127.5})
        .start();
        tween(this.upgradeResultCard.node)
        .to(0.5,{scale:v3(1.5, 1.5)}, { easing: easing.backOut })
        .call(() => {
            let animNam: string = `LVUP_${cardData.quality}`;
            this.upgradeResultEffect.node.active = true;
            this.upgradeResultEffect.clearAnimation();
            this.upgradeResultEffect.setAnimation(0, animNam, false);
        })
        .start();

        this.scheduleOnce(() => {
            this.upgradeResultCard.SetData(cardData);   
        }, 2.5);

        tween(this.upgradeResultCard.node)
        .delay(2.5)
        .to(0.75,{scale:v3(2, 2)}, { easing: easing.backOut })
        .to(0.75,{scale:v3(1.5, 1.5)}, { easing: easing.backOut })
        .call(() => {
            this.upgradeResultMaskBtn.interactable = true;
        })
        .start();
    }
}