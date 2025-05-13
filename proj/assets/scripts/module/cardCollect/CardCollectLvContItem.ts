import { Button, Color, Component, instantiate, Label, Layout, Node, path, Sprite, SpriteFrame, UIOpacity, UITransform, v3, Vec3 } from "cc";
import { Card } from "../cards/Card";
import { CfgMgr, ItemType, StdBattleCardDelivery, StdItem, StdPlayerLevel, StdPlayerLevelAward, ThingName } from "../../manager/CfgMgr";
import { card_quality, folder_icon, folder_item, ResMgr } from "../../manager/ResMgr";
import { PlayerData } from "../player/PlayerData";
import proto, { Req, Route } from "../../net/Protocol";
import { MsgPanel } from "../common/MsgPanel";
import { Session } from "../../net/Session";

export class CardCollectLvContItem extends Component {
    private sectionCont: Node;
    private lineCont: Node;
    private cont: Node;
    private btn: Button;
    private bg1: Node;
    private bg2: Node;
    private cardBg: Sprite;
    private card: Card;
    private fenchenBg: Node;
    private itemCont: Node;
    private itemIcon: Sprite;
    private itemNameLab: Label;
    private getImg: Node;
    private line: Node;
    private linePos: Vec3;
    private lvBg1: Node;
    private lvBg2: Node;
    private lvBg3: Node;
    private lvLab1: Label;
    private lvLab2: Label;
    private lvLab3: Label;
    private lock: Node;
    private canGetEffect: Node;
    private curLv: number;
    private isInit: boolean = false;
    private data: StdPlayerLevelAward;
    private awardData: proto.base.IPlayerLevelRewardCache;
    private index: number;
    protected onLoad(): void {
        this.sectionCont = this.node.getChildByPath("sectionCont");
        this.lineCont = this.node.getChildByPath("sectionCont/lineCont");
        this.cont = this.node.getChildByPath("cont");
        this.btn = this.node.getChildByPath("cont").getComponent(Button);
        this.bg1 = this.node.getChildByPath("cont/bg1");
        this.bg2 = this.node.getChildByPath("cont/bg2");
        this.cardBg = this.node.getChildByPath("cont/cardBg").getComponent(Sprite);
        this.card = this.node.getChildByPath("cont/Cards").addComponent(Card);
        this.fenchenBg = this.node.getChildByPath("cont/fenchenBg");
        this.itemCont = this.node.getChildByPath("cont/itemCont");
        this.itemIcon = this.node.getChildByPath("cont/itemCont/itemIcon").getComponent(Sprite);
        this.itemNameLab = this.node.getChildByPath("cont/itemCont/itemNumLab").getComponent(Label);
        this.line = this.node.getChildByPath("line");
        this.lvBg1 = this.node.getChildByPath("lvCont/lvBg1");
        this.lvBg2 = this.node.getChildByPath("lvCont/lvBg2");
        this.lvBg3 = this.node.getChildByPath("lvCont/lvBg3");
        this.lvLab1 = this.node.getChildByPath("lvCont/lvLab1").getComponent(Label);
        this.lvLab2 = this.node.getChildByPath("lvCont/lvLab2").getComponent(Label);
        this.lvLab3 = this.node.getChildByPath("lvCont/lvLab3").getComponent(Label);
        this.getImg = this.node.getChildByPath("cont/getImg");
        this.canGetEffect = this.node.getChildByPath("cont/canGetEffect");
        this.lock = this.node.getChildByPath("cont/lock");
        this.canGetEffect.active = false;
        this.isInit = true;
        this.updateShow();
    }
    protected onEnable(): void {
        this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }
    protected onDisable(): void {
        this.btn.node.off(Button.EventType.CLICK, this.onBtnClick, this);
    }

    private onBtnClick(btn: Button): void {
        switch(btn) {
            case this.btn:
                this.toSendUp();
            break;
        }
    }

    private toSendUp(): void {
        if (this.curLv < this.data.stdPlayerLevel.Level) {
            MsgPanel.Show("未达到领取等级");
            return;
        }
        if (PlayerData.GetUpgradeAward(this.data.stdPlayerLevel.Level)) {
            MsgPanel.Show("不可重复领取");
            return;
        }
        let data = new Req['logic.protocol.playerlevelrewardclaim']();
        data.level = this.data.stdPlayerLevel.Level;
        Session.Send(Route['logic.protocol.playerlevelrewardclaim'], data);
        console.log(`发送领取---->${data.level}级奖励`);
    }

    SetData(data: StdPlayerLevelAward, curLv: number, index: number): void {
        this.data = data;
        this.curLv = curLv;
        this.index = index;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        this.updateLine();
        this.awardData = PlayerData.GetUpgradeAward(this.data.stdPlayerLevel.Level);
        this.updateAward();
        this.updateDire();
        this.updateLv();
    }

    private updateLine(): void {
        if (this.data.sectionList != null) {
            this.sectionCont.active = true;
            let lineNum: number = this.data.sectionList.length + 1;
            let node: Node;
            let updateSize: Node[] = [];
            for (let index = 0; index < this.lineCont.children.length; index++) {
                node = this.lineCont.children[index];
                if (index < lineNum) {
                    node.active = true;
                    let line: Node = node.getChildByName("line");
                    let targetLv: number = this.data.stdPlayerLevel.Level + (index + 1);
                    line.active = this.curLv >= targetLv;
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
            this.sectionCont.active = false;
        }
    }

    private updateAward(): void {
        let iconStr: string;
        let numStr: string = "";
        this.getImg.active = this.awardData != undefined;
        this.bg2.active = this.awardData != undefined;
        this.card.node.active = false;
        this.cardBg.node.active = false;
        this.canGetEffect.active = false;
        this.fenchenBg.active = false;
        this.lock.active = true;
        if (this.data.stdPlayerLevel.RewardPool > 0) {
            //已领取
            if (this.awardData) {
                this.lock.active = false;
                this.bg2.active = true;
                iconStr = null;
                if (this.awardData.rewardType == ThingName.battlecard) {
                    let stdCardDeliver: StdBattleCardDelivery = CfgMgr.GetBattleCardDeliver(this.awardData.rewardId);
                    if (stdCardDeliver) {
                        this.cardBg.node.active = true;
                        this.card.node.active = true;
                        this.cardBg.getComponent(UIOpacity).opacity = 127;
                        this.card.getComponent(UIOpacity).opacity = 168;
                        //this.card.setCardMask(true);
                        let cardData: proto.base.IBattleCard = PlayerData.CreateCardData(stdCardDeliver.CardID, stdCardDeliver.CardQuality);
                        this.card.SetData(cardData);
                        
                        ResMgr.LoadResAbSub(path.join(folder_icon, `card_bg${cardData.quality}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                            this.itemIcon.spriteFrame = res;
                        });
                    }
                } else if (this.awardData.rewardType == ThingName.item) {
                    let stdItem: StdItem = CfgMgr.Getitem(this.awardData.rewardId);
                    iconStr = path.join(folder_item, stdItem.Icon, "spriteFrame");
                    numStr = `${stdItem.ItemName}x${this.awardData.rewardNum}`;
                    this.fenchenBg.active = stdItem.Itemtpye == ItemType.piece;
                    this.fenchenBg.getComponent(UIOpacity).opacity = 168;
                    this.itemCont.getComponent(UIOpacity).opacity = 168;
                }
                
            } else {
                iconStr = path.join(folder_item, this.data.stdPlayerLevel.icon, "spriteFrame");
                numStr = this.data.stdPlayerLevel.randomName;
                this.itemCont.getComponent(UIOpacity).opacity = 255;
                if (this.curLv >= this.data.stdPlayerLevel.Level) {
                    this.lock.active = false;
                }
            } 
            
        } else {
            if (this.data.stdPlayerLevel.RewardID > 0) {
                let stdItem: StdItem = CfgMgr.Getitem(this.data.stdPlayerLevel.RewardID);
                if (stdItem) {
                    iconStr = path.join(folder_item, stdItem.Icon, "spriteFrame");
                    numStr = `${stdItem.ItemName} x ${this.data.stdPlayerLevel.RewardNumber}`;
                }
                
            }
            if (this.awardData) {
                this.lock.active = false;
                this.itemCont.getComponent(UIOpacity).opacity = 168;
            } else {
                this.itemCont.getComponent(UIOpacity).opacity = 255;
                if (this.curLv >= this.data.stdPlayerLevel.Level) {
                    this.lock.active = false;
                }
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
        if (this.curLv >= this.data.stdPlayerLevel.Level && !PlayerData.GetUpgradeAward(this.data.stdPlayerLevel.Level)) {
            this.canGetEffect.active = true;    
        }
        
    }

    private updateDire(): void {
        let isTop: boolean = (this.index % 2) == 0;
        if (isTop) {
            this.cont.position = v3(this.cont.position.x, 140, 0);
            this.line.position = v3(this.line.position.x, 22, 0);
        } else {
            this.cont.position = v3(this.cont.position.x, -132, 0);
            this.line.position = v3(this.line.position.x, -22, 0);
        }
    }

    private updateLv(): void {
        this.lvLab1.node.active = false;
        this.lvLab2.node.active = false;
        this.lvLab3.node.active = false;
        if (this.data.stdPlayerLevel.Level < this.curLv) {
            this.lvLab2.node.active = true;
            this.lvBg1.active = true;
            this.lvBg2.active = false;
            this.lvBg3.active = false;
        } else if (this.data.stdPlayerLevel.Level == this.curLv) {
            this.lvLab3.node.active = true;
            this.lvBg1.active = false;
            this.lvBg2.active = true;
            this.lvBg3.active = false;
        } else if (this.data.stdPlayerLevel.Level > this.curLv) {
            this.lvLab1.node.active = true;
            this.lvBg1.active = false;
            this.lvBg2.active = false;
            this.lvBg3.active = true;
        }
        let lvStr: string = this.data.stdPlayerLevel.Level.toString();
        this.lvLab1.string = lvStr;
        this.lvLab2.string = lvStr;
        this.lvLab3.string = lvStr;

    }

    public playUpEffect(delay: number, curLv: number): number {
        let playTime: number = 0;
        playTime += delay;
        this.scheduleOnce(() => {
            this.updateAward();
            this.updateLv();
        }, delay);
        playTime += 0.05;
        if (this.data.sectionList != null) {
            let node: Node;
            let lineNum: number = this.data.sectionList.length + 1;
            for (let index = 0; index < this.lineCont.children.length; index++) {
                if (index < lineNum) {
                    node = this.lineCont.children[index];
                    let line: Node = node.getChildByName("line");
                    if (!line.active) {
                        let targetLv: number = this.data.stdPlayerLevel.Level + (index + 1);
                        if (curLv >= targetLv) {
                            //playNodeList.push(line);
                            this.scheduleOnce(() => {
                                line.active = true;
                            }, playTime);
                            playTime += 0.05;
                        }
                    }
                }
                
            }
        }
        this.curLv = curLv;
        return playTime;
    }

}