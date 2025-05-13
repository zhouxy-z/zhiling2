import { Node, Button, Label, sp, path, RichText, EditBox, js } from "cc";
import { Panel } from "../../manager/GameRoot";
import { Session } from "../../net/Session";
import { PlayerData } from "../player/PlayerData";
import { EventMgr, Evt_BattleCreatRoomResult } from "../../manager/EventMgr";
import { battleDataMgr } from "../battle/BattleDataMgr";
import { MsgPanel } from "../common/MsgPanel";
import { FightLogPanel } from "../fight/FightLogPanel";
import { CfgMgr, StdAIGroup, StdArea, StdCard, StdSkill } from "../../manager/CfgMgr";
import { CellInfo, VList } from "../../component/VList";
import { ResMgr } from "../../manager/ResMgr";
import LocalStorage from "../../utils/LocalStorage";
import proto, { Req, Route } from "../../net/Protocol";
export class RoomPanel extends Panel {
    protected prefab: string = "prefabs/room/RoomPanel";
    private terrainCont: Node;
    private terrainBtn: Button;
    private terrainList: VList;
    private selectTerrainList: VList;
    private setAreaBtn: Button;
    private areaLab: Label;
    private setAiIdBtn: Button;
    private aiIdLab: Label;
    private aiIdCont: Node;
    private aiIdBtn: Button;
    private aiIdList: VList;
    private selectAiIndx: number = 0;
    private setAiCardBtn: Button;
    private aiCardLab: Label;
    private cardCont: Node;
    private cardList: VList;
    private selecCardList: VList;
    private seekLab: EditBox;
    private seekBtn: Button;
    private seekBtnLab: Label;
    private isClearSeek: boolean;
    private cardBtn: Button;
    private setMyCardBtn: Button;
    private myCardLab: Label;
    private btn: Button;//创建房间
    private btnLab: Label;
    private closeBtn: Button;
    private fightLogBtn: Button;
    private defTerrainId: number[] = [];
    private defAiCardId: number[] = [];
    private defMyCardId: number[] = [];
    private defAiId: number;
    private aiList: StdAIGroup[];
    private areaList: StdArea[];
    private stdCardList: StdCard[];
    private curCardList: StdCard[];
    private setCardType: number;
    protected onLoad() {
        this.areaList = [];
        let temoAreaList: StdArea[] = CfgMgr.AreaList;
        for (let std of temoAreaList) {
            if (std.IsOpen) {
                this.areaList.push(std);
            }
        }
        this.aiList = CfgMgr.AIGroupList;
        this.stdCardList = []
        let tempCardList: StdCard [] = CfgMgr.CardList;
        for (let std of tempCardList) {
            if (std.IsOpen) {
                this.stdCardList.push(std);
            }
        }

        this.setAreaBtn = this.find("setAreaBtn", Button);
        this.areaLab = this.find("areaLab", Label);
        this.terrainCont = this.find("terrainCont");
        this.terrainList = this.find("terrainCont/terrainList", VList);
        this.selectTerrainList = this.find("terrainCont/selectTerrainList", VList);
        this.terrainBtn = this.find("terrainCont/terrainBtn", Button);

        this.setAiIdBtn = this.find("setAiIdBtn", Button);
        this.aiIdLab = this.find("aiIdLab", Label);
        this.aiIdCont = this.find("aiIdCont");
        this.aiIdList = this.find("aiIdCont/aiIdList", VList);
        this.aiIdBtn = this.find("aiIdCont/aiIdBtn", Button);

        this.setAiCardBtn = this.find("setAiCardBtn", Button);
        this.aiCardLab = this.find("aiCardLab", Label);
        this.setMyCardBtn = this.find("setMyCardBtn", Button);
        this.myCardLab = this.find("myCardLab", Label);
        this.cardCont = this.find("cardCont");
        this.cardList = this.find("cardCont/cardList", VList);
        this.selecCardList = this.find("cardCont/selectCardList", VList);
        this.cardBtn = this.find("cardCont/cardBtn", Button);
        this.seekLab = this.find("cardCont/seekLab", EditBox);
        this.seekBtn = this.find("cardCont/seekBtn", Button);
        this.seekBtnLab = this.find("cardCont/seekBtn/btnLab", Label);
        let defAiId = LocalStorage.GetNumber("test_ai", undefined);
        if (defAiId) {
            let tepmAiId: number = undefined;
            for (let index = 0; index < CfgMgr.AIGroupList.length; index++) {
                let aiGrop = CfgMgr.AIGroupList[index];
                if (defAiId == aiGrop.AIGroupID) {
                    tepmAiId = defAiId;
                    break;
                }
            }
            this.defAiId = tepmAiId;
        }
        if (this.defAiId == undefined) this.defAiId = CfgMgr.AIGroupList[0].AIGroupID;

        let areas = LocalStorage.GetString("test_area", undefined);
        if (areas) {
            let tepmAreasIds: number [] = [];
            let localData:number [] = JSON.parse(areas);
            for (let index = 0; index < localData.length; index++) {
                let areaId = localData[index];
                let stdArea: StdArea = CfgMgr.getArea(areaId);
                if (stdArea && stdArea.IsOpen) {
                    tepmAreasIds.push(areaId);
                }
            }
            this.defTerrainId = tepmAreasIds;
        } else {
            this.defTerrainId = [];
            let stds = CfgMgr.Get("Area");
            for (let k in stds) {
                let stdArea: StdArea = stds[k];
                if (stdArea.IsOpen) this.defTerrainId.push(Number(k));
                if (this.defTerrainId.length >= 3) break;
            }
        }
        let ads = LocalStorage.GetString("test_ads", undefined);
        if (ads) {
            let tepmAdCardIds: number [] = [];
            let localData: number[] = JSON.parse(ads);
            for (let index = 0; index < localData.length; index++) {
                let cardId = localData[index];
                let std: StdCard = CfgMgr.GetCard(cardId);
                if (std && std.IsOpen) {
                    tepmAdCardIds.push(cardId);
                }
            }
            this.defAiCardId = tepmAdCardIds;
        } else {
            this.defAiCardId = [];
            let stds = CfgMgr.Get("Card");
            for (let k in stds) {
                let std: StdCard = stds[k];

                if (std.IsOpen) this.defAiCardId.push(Number(k));
                if (this.defAiCardId.length > 6) break;
            }
        }
        let mys = LocalStorage.GetString("test_mys", undefined);
        if (mys) {
            let tepmMyCardIds: number [] = [];
            let localData:number[] = JSON.parse(mys);
            for (let index = 0; index < localData.length; index++) {
                let cardId = localData[index];
                let stdCard: StdCard = CfgMgr.GetCard(cardId);
                if (stdCard && stdCard.IsOpen) {
                    tepmMyCardIds.push(cardId);
                }
            }
            this.defMyCardId = tepmMyCardIds;
        } else {
            this.defMyCardId = [];
            let stds = CfgMgr.Get("Card");
            for (let k in stds) {
                let stdCard: StdCard = stds[k];
                if (stdCard.IsOpen) this.defMyCardId.push(Number(k));
                if (this.defMyCardId.length > 6) break;
            }
        }

        this.terrainList.updateCell = (cell: Node, cellInfo: CellInfo) => {
            let std: StdArea = this.areaList[cellInfo.index];
            cell.getChildByName("idLab").getComponent(Label).string = std.AreaID.toString();
            cell.getChildByName("nameLab").getComponent(Label).string = std.AreaName;
            let skillDesc: string = "";
            for (let index = 0; index < std.AreaAffect.length; index++) {
                let skill = CfgMgr.GetCardSkill(std.AreaAffect[index]);
                if (skill) {
                    skillDesc += `${skill.SkillId}-->` + skill.Desc;
                    if (index < std.AreaAffect.length) {
                        skillDesc += "\n";
                    }
                }

            }
            cell.getChildByName("descLab").getComponent(RichText).string = skillDesc;
        }
        this.terrainList.clickCell = (cell: Node, cellInfo: CellInfo) => {
            if (this.defTerrainId.length >= 3) {
                MsgPanel.Show("最多只能选则3个地形")
                return;
            }
            let std: StdArea = this.areaList[cellInfo.index];
            this.defTerrainId.push(std.AreaID);
            this.selectTerrainList.cellCount = this.defTerrainId.length;
            this.updateArea();
        }
        this.terrainList.cellCount = this.areaList.length;
        this.selectTerrainList.updateCell = (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo) => {
            let std: StdArea = CfgMgr.getArea(this.defTerrainId[cellInfo.index]);
            cell.getChildByName("idLab").getComponent(Label).string = std.AreaID.toString();
            cell.getChildByName("nameLab").getComponent(Label).string = std.AreaName;
            let skillDesc: string = "";
            for (let index = 0; index < std.AreaAffect.length; index++) {
                let skill = CfgMgr.GetCardSkill(std.AreaAffect[index]);
                if (skill) {
                    skillDesc += `${skill.SkillId}-->` + skill.Desc;
                    if (index < std.AreaAffect.length) {
                        skillDesc += "\n";
                    }
                }

            }
            cell.getChildByName("descLab").getComponent(RichText).string = skillDesc;
        }
        this.selectTerrainList.clickCell = (cell: Node, cellInfo: CellInfo) => {
            this.defTerrainId.splice(cellInfo.index, 1);
            this.selectTerrainList.cellCount = this.defTerrainId.length;
            this.updateArea();
        }

        this.aiIdList.updateCell = (cell: Node, cellInfo: CellInfo) => {
            let std: StdAIGroup = this.aiList[cellInfo.index];
            cell.getChildByName("idLab").getComponent(Label).string = std.AIGroupID.toString();
            cell.getChildByName("select").active = cellInfo.isSelect;
        }
        this.aiIdList.selectCell = (cell: Node, cellInfo: CellInfo, lastCell?: Node, lastInfo?: CellInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
            let std: StdAIGroup = this.aiList[cellInfo.index];
            this.selectAiId(cellInfo.index);
        }
        this.aiIdList.cellCount = this.aiList.length;

        this.cardList.updateCell = (cell: Node, cellInfo: CellInfo) => {
            let std: StdCard = this.curCardList[cellInfo.index];
            cell.getChildByPath("cost/label").getComponent(Label).string = std.Cost.toString();
            cell.getChildByPath("power/label").getComponent(Label).string = std.Power.toString();
            cell.getChildByPath("nameframe/name").getComponent(Label).string = std.CardName;
            cell.getChildByPath("idLab").getComponent(Label).string = std.ID.toString();
            let skillDesc: string = "";
            for (let index = 0; index < std.SkillID.length; index++) {
                let skill = CfgMgr.GetCardSkill(std.SkillID[index]);
                if (skill) {
                    skillDesc += `${skill.SkillId}-->` + skill.Desc;
                    if (index < std.SkillID.length) {
                        skillDesc += "\n";
                    }
                }

            }

            cell.getChildByPath("descLab").getComponent(RichText).string = skillDesc;

            let body: sp.Skeleton = cell.getChildByPath("body_card").getComponent(sp.Skeleton);
            ResMgr.LoadResAbSub(path.join("spine", std.CardBody, std.CardBody), sp.SkeletonData, (res: sp.SkeletonData) => {
                body.skeletonData = res;
                body.setAnimation(0, "Idle", true);
            });

        }
        this.cardList.clickCell = (cell: Node, cellInfo: CellInfo) => {
            let list: number[] = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;
            if (list.length >= 12) {
                MsgPanel.Show("添加卡牌超出12张")
                return;
            }
            let addCard: StdCard = this.curCardList[cellInfo.index];
            list.push(addCard.ID);
            this.selecCardList.cellCount = list.length;
            this.updateCard();
        }
        

        this.selecCardList.updateCell = (cell: Node, cellInfo: CellInfo) => {
            let list: number[] = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;
            let std: StdCard = CfgMgr.GetCard(list[cellInfo.index]);
            cell.getChildByPath("cost/label").getComponent(Label).string = std.Cost.toString();
            cell.getChildByPath("power/label").getComponent(Label).string = std.Power.toString();
            cell.getChildByPath("nameframe/name").getComponent(Label).string = std.CardName;
            cell.getChildByPath("idLab").getComponent(Label).string = std.ID.toString();
            let skillDesc: string = "";
            for (let index = 0; index < std.SkillID.length; index++) {
                let skill = CfgMgr.GetCardSkill(std.SkillID[index]);
                if (skill) {
                    skillDesc += `${skill.SkillId}-->` + skill.Desc;
                    if (index < std.SkillID.length) {
                        skillDesc += "\n";
                    }
                }

            }

            cell.getChildByPath("descLab").getComponent(RichText).string = skillDesc;
            let body: sp.Skeleton = cell.getChildByPath("body_card").getComponent(sp.Skeleton);
            ResMgr.LoadResAbSub(path.join("spine", std.CardBody, std.CardBody), sp.SkeletonData, (res: sp.SkeletonData) => {
                body.skeletonData = res;
                body.setAnimation(0, "Idle", true);
            });

        }
        this.selecCardList.clickCell = (cell: Node, cellInfo: CellInfo) => {
            let list: number[] = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;
            list.splice(cellInfo.index, 1);
            this.selecCardList.cellCount = list.length;
            this.updateCard();
        }

        this.btn = this.find("btn", Button);
        this.btnLab = this.find("btn/btnLab", Label);
        this.closeBtn = this.find("closeBtn", Button);
        this.fightLogBtn = this.find("fightLogBtn", Button);
        this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.fightLogBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.setAreaBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.terrainBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.setAiIdBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.aiIdBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.setAiCardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.cardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.setMyCardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.seekBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.terrainCont.active = false;
        this.aiIdCont.active = false;
        this.cardCont.active = false;
    }
    public flush(...args: any[]): void {
        this.btnLab.string = "创建房间"
        this.btn.node.active = true;
        //Session.Send(Protocol.getplayerdecks);
    }

    protected onShow(): void {

        EventMgr.on(Evt_BattleCreatRoomResult, this.onCreatRoomResult, this);
        this.updateArea();
        this.selectAiId(this.selectAiIndx);
        this.updateCard();
    }

    protected onHide(...args: any[]): void {
        EventMgr.off(Evt_BattleCreatRoomResult, this.onCreatRoomResult, this);

        LocalStorage.SetNumber("test_ai", this.defAiId);
        LocalStorage.SetString("test_area", JSON.stringify(this.defTerrainId));
        LocalStorage.SetString("test_ads", JSON.stringify(this.defAiCardId));
        LocalStorage.SetString("test_mys", JSON.stringify(this.defMyCardId));

    }

    private updateArea(): void {
        let idStr: string = "";
        for (let index = 0; index < this.defTerrainId.length; index++) {
            idStr += this.defTerrainId[index] + "";
            if (index < this.defTerrainId.length - 1) {
                idStr += "、"
            }
        }
        this.areaLab.string = idStr;
    }

    private selectAiId(index: number): void {
        this.selectAiIndx = index;
        let std: StdAIGroup = this.aiList[this.selectAiIndx];
        this.defAiId = std.AIGroupID;
        this.aiIdLab.string = this.defAiId.toString();
    }


    private showCard(): void {
        this.curCardList = this.stdCardList;
        this.cardCont.active = true;
        this.cardList.cellCount = this.curCardList.length;
        this.isClearSeek = false;
        this.seekBtnLab.string = "";
        this.updateSeekState();
        let list: number[] = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;
        this.cardCont.getChildByName("titleLab").getComponent(Label).string = this.setCardType == 1 ? "设置AI卡牌" : "设置我方卡牌"
        this.selecCardList.cellCount = list.length;
    }

    private seekCard(str: string): void {
        let regex = new RegExp(str.split('').join('.*?'), 'i');
        let list: StdCard[] = [];
        for (let std of this.stdCardList) {
            if (regex.test(std.CardName) || regex.test(std.ID.toString())) {
                list.push(std);
            } else {
                for (let skillId of std.SkillID) {
                    if (regex.test(skillId.toString())) {
                        list.push(std);
                    }
                }
            }
        }

        if (list.length < 1) {
            MsgPanel.Show(`所搜不到包含${str}的卡牌`)
            return;
        }
        this.isClearSeek = true;
        this.curCardList = list;
        this.cardList.cellCount = this.curCardList.length;
        this.updateSeekState();
    }

    private updateSeekState(): void{
        this.seekBtnLab.string = this.isClearSeek ? "清空搜索" : "搜索";
    }

    private updateCard(): void {
        let list: number[] = this.defAiCardId;
        let idStr: string = "";
        for (let index = 0; index < list.length; index++) {
            idStr += list[index] + "";
            if (index < list.length - 1) {
                idStr += "、"
            }
        }
        this.aiCardLab.string = idStr.length > 0 ? idStr : "无";

        idStr = "";
        list = this.defMyCardId;
        for (let index = 0; index < list.length; index++) {
            idStr += list[index] + "";
            if (index < list.length - 1) {
                idStr += "、"
            }
        }
        this.myCardLab.string = idStr.length > 0 ? idStr : "无";
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.btn:
                this.onCreatRoom();
                break;
            case this.closeBtn:
                this.Hide();
                break;
            case this.fightLogBtn:
                FightLogPanel.Show();
                break;
            case this.setAreaBtn:
                this.showArea();
                break;
            case this.terrainBtn:
                this.terrainCont.active = false;
                break;
            case this.setAiIdBtn:
                this.aiIdCont.active = true;
                this.aiIdList.selectIndex(this.selectAiIndx);
                break;
            case this.aiIdBtn:
                this.aiIdCont.active = false;
                break;
            case this.setAiCardBtn:
                this.setCardType = 1;
                this.showCard();
                break;
            case this.cardBtn:
                this.cardCont.active = false;
                break;
            case this.setMyCardBtn:
                this.setCardType = 2;
                this.showCard();
                break;
            case this.seekBtn:
                if (this.isClearSeek) {
                    this.isClearSeek = false;
                    this.curCardList = this.stdCardList;
                    this.seekLab.string = "";
                    this.cardList.cellCount = this.curCardList.length;
                    this.updateSeekState();
                    return;
                }
                let seekStr:string = this.seekLab.string;
                if(seekStr == ""){
                    MsgPanel.Show("请输入要搜索的卡牌名称、卡牌id、技能id");
                    return;
                }
                this.seekCard(seekStr);
                break;
            default:
                break;
        }
    }

    private showArea(): void {
        this.terrainCont.active = true;
        this.selectTerrainList.cellCount = this.defTerrainId.length;
    }

    private onCreatRoomResult(): void {
        this.btnLab.string = "进入房间";
    }

    private onCreatRoom(): void {
        if (!battleDataMgr.creatRoomData) {
            if (this.defTerrainId.length < 3) {
                MsgPanel.Show("地形数据量不足3个")
                return;
            }
            if (this.defAiCardId.length < 4) {
                MsgPanel.Show("AI卡牌不足4张")
                return;
            }
            if (this.defMyCardId.length < 4) {
                MsgPanel.Show("我方卡牌不足4张")
                return;
            }
            let data = new Req["battle_mgr.protocol.createbattlemgruserroom"]();
            data.context = proto.base.BattleRoomContext.create();
            data.context.ignoreShuffle = true;
            data.context.aiWaitSecond = 1;
            data.context.areaIds = this.defTerrainId;
            data.context.roomId = "110";
            data.context.players = this.getPlayerData(2);
            data.context.waitSecond = 3600;

            Session.Send(Route["battle_mgr.protocol.createbattlemgruserroom"],data);
        } else {
            let enterRoom = new Req["battle.protocol.battleroomenter"]();
            enterRoom.roomId = battleDataMgr.creatRoomData.roomId;
            let server: proto.pb.IServer = proto.pb.Server.create();
            server.id = battleDataMgr.creatRoomData.serverId;
            enterRoom.server = server;
            Session.Send(Route["battle.protocol.battleroomenter"],enterRoom);
        }

    }

    private getPlayerData(num: number): proto.base.BattleRoomPlayerContext[] {
        let playerList: proto.base.BattleRoomPlayerContext[] = [];
        let player: proto.base.BattleRoomPlayerContext;
        for (let index = 0; index < num; index++) {
            player = proto.base.BattleRoomPlayerContext.create();
            player.playerId = index == 0 ? PlayerData.player.playerId : (1000 * (index + 1)) + "";
            player.level = 1;
            player.isAi = index == 0 ? false : true;
            player.name = "test_" + player.playerId;
            if (player.isAi) {
                player.aiGroupId = this.defAiId;
                player.cards = this.getCardData(this.defAiCardId, 1000 * index);
            } else {
                player.cards = this.getCardData(this.defMyCardId, 1000 * index);
                // player.cards = this.getCardData([600003,600002,600003,600003,600003,600003,600003], 1000 * index);
                //player.deckId = PlayerData.curSelectDeckId;
            }
            playerList[index] = player;
        }
        return playerList;
    }

    private getCardData(ids: number[], cardId: number): proto.base.BattleCard[] {
        let cardList: proto.base.BattleCard[] = [];
        let card: proto.base.BattleCard;
        for (let index = 0; index < ids.length; index++) {
            card = proto.base.BattleCard.create();
            card.cardId = ids[index];
            card.exp = 1;
            card.id = (cardId * index) + "";
            card.level = 1;
            card.nftLockExpires = 1;
            card.tradeCd = 0;
            card.quality = 1;
            card.ownershipType = 1;
            cardList[index] = card;
        }
        return cardList;
    }
}