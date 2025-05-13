import { Node, Button, Label, ProgressBar, sp, Sprite, v3, path, SpriteFrame, tween, Vec3, easing, UITransform, NodePool, instantiate } from "cc";
import { SpriteLabel } from "../../component/SpriteLabel";
import { Panel } from "../../manager/GameRoot";
import { Card } from "../cards/Card";
import proto from "../../net/Protocol";
import { CfgMgr, ItemType, StdCardUpgrade, StdItem, StdPvpLevel, StdPVPSnatch } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import { folder_item, ResMgr } from "../../manager/ResMgr";
import { Utils } from "../../utils/Utils";
import { Bezier } from "../../utils/Bezier";
import { Goto } from "../../DL";

export class SeasonSettlePanel extends Panel {
    protected prefab: string = "prefabs/fight/SeasonSettlePanel";
    private maskBtn: Button;
    private sectionCont: Node;
    private doubleCont: Node;
    private tempPointImg: Node;
    private doubleNumLab: SpriteLabel;
    private sectionIcon: Sprite;
    private sectionNameImg: Sprite;
    private starCont: Node;
    private maxStarCont: Node;
    private maxStarNumLab: Label;
    private expNumCont: Node;
    private expLineBg: Node;
    private curNumLab: Label;
    private maxNumLab: Label;
    private pro: ProgressBar;
    private resultImg: Sprite;
    private getAwardBtn: Button;
    private bomEffect: sp.Skeleton;

    private awardCont: Node;
    private getEffect: sp.Skeleton;
    private card: Card;
    private cont: Node;
    private itemCont: Node;
    private itemIcon: Sprite;
    private itemCurLab: Label;
    private itemNeedNumLab: Label;
    private cardUpBtn: Button;
    private maxQualLab: Label;
    private upCardData: proto.base.IBattleCard;
    private data: proto.pb.PlayerPvpRankBattleSettlePush;
    private curStdPVPSnatch: StdPVPSnatch;
    private flyPool: NodePool = new NodePool();
    private flyNum: number;
    private hideCallBack: Function;
    private showCallBack: Function;
    private oldStar: number;
    private playerId: string;
    protected onLoad(): void {
        this.maskBtn = this.find("mask", Button);

        this.sectionCont = this.find("sectionCont");
        this.doubleCont = this.find("sectionCont/doubleCont");
        this.doubleNumLab = this.find("sectionCont/doubleCont/effect/doubleNumLab").addComponent(SpriteLabel);
        this.doubleNumLab.font = "sheets/numberImg/num2";
        this.sectionIcon = this.find("sectionCont/sectionCont/sectionIcon", Sprite);
        this.sectionNameImg = this.find("sectionCont/sectionCont/sectionNameImg", Sprite);
        this.expNumCont = this.find("sectionCont/sectionCont/expCont");
        this.expLineBg = this.find("sectionCont/sectionCont/expCont/expLineBg");
        this.curNumLab = this.find("sectionCont/sectionCont/expCont/numCont/curNumLab", Label);
        this.maxNumLab = this.find("sectionCont/sectionCont/expCont/numCont/maxNumLab", Label);
        this.starCont = this.find("sectionCont/sectionCont/starCont");
        this.maxStarCont = this.find("sectionCont/sectionCont/maxStarCont");
        this.maxStarNumLab = this.find("sectionCont/sectionCont/maxStarCont/maxStarNumLab", Label);
        this.pro = this.find("sectionCont/sectionCont/pro", ProgressBar);
        this.resultImg = this.find("sectionCont/resultImg", Sprite);
        this.getAwardBtn = this.find("sectionCont/getAwardBtn", Button);
        this.bomEffect = this.find("sectionCont/bomEffect", sp.Skeleton);
        this.tempPointImg = this.find("tempPointImg");

        this.awardCont = this.find("awardCont");
        
        this.getEffect = this.find("awardCont/getEffect", sp.Skeleton);
        this.card = this.find("awardCont/Cards").addComponent(Card);
        this.cont = this.find("awardCont/cont");
        this.itemCont = this.find("awardCont/cont/itemCont");
        this.itemIcon = this.find("awardCont/cont/itemCont/icon", Sprite);
        this.itemCurLab = this.find("awardCont/cont/itemCont/numCont/curNumLab", Label);
        this.itemNeedNumLab = this.find("awardCont/cont/itemCont/numCont/needNumLab", Label);
        this.cardUpBtn = this.find("awardCont/cont/cardUpBtn", Button);
        this.maxQualLab = this.find("awardCont/cont/maxQualLab", Label);

        this.getAwardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.maskBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        this.cardUpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }

    protected onShow(): void {
        if (this.showCallBack != null) this.showCallBack();
        this.sectionCont.active = false;
        this.awardCont.active = false;
        this.bomEffect.node.active = false;
    }

    protected onHide(...args: any[]): void {
        if (this.hideCallBack != null) this.hideCallBack();
        this.hideCallBack = null;
    }

    /**
     * 刷新战斗ui
     * @param data 
     */
    public flush(data: proto.pb.PlayerPvpRankBattleSettlePush, playerId:string, showCallBack: Function, hideCallBack: Function) {
        this.sectionCont.active = false;
        this.awardCont.active = false;
        this.data = data;
        this.playerId = playerId;
        if (showCallBack != null) showCallBack();
        this.hideCallBack = hideCallBack;
        /* if (!this.data) {
            let newData = proto.pb.PlayerPvpRankBattleSettlePush.create();
            newData.rankRecord = proto.base.PlayerPvpRankRecord.create();
            newData.rankRecord.doublingTimes = 4;
            newData.rankRecord.pointAfter = 850;
            newData.rankRecord.pointBefore = 780;
            newData.rankRecord.seasonId = 10001;
            newData.rankRecord.roomId = "101";
            this.data = newData;
        } */
        this.curStdPVPSnatch = CfgMgr.GetStdPVPSnatch(this.data.rankRecord.seasonId);
        this.showSection();
    }
    
    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.maskBtn: 
                this.Hide();
                break;
            case this.cardUpBtn:
                this.Hide();
                Goto("CardInfoPanel",this.upCardData, null, null, true);
                break;
            case this.getAwardBtn:
                this.showGetAward();
                break;
        }
    }

    private showSection(): void {
        this.sectionCont.active = true;
        this.getAwardBtn.node.active = false;
        this.maskBtn.interactable = false;
        let base: number = 1;
        let doubleCont: number = this.data.rankRecord.doublingTimes;
        base = base * Math.pow(2, doubleCont);
        this.doubleNumLab.string = base.toString();
        let resultStr: string = "";
        if (this.data.rankRecord.result == proto.base.PvpResult.PvpResultTie) {
            resultStr = "draw";
        } else if (this.data.rankRecord.result == proto.base.PvpResult.PvpResultWin) {
            resultStr = "win";
        } else {
            resultStr = "lost";
        }
        ResMgr.LoadResAbSub(path.join("sheets/fight", resultStr, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.resultImg.spriteFrame = res;
        });
        
        this.setSection(this.data.rankRecord.pointBefore);
        let addPoint: number = this.data.rankRecord.pointAfter - this.data.rankRecord.pointBefore;
        if (addPoint > 0) {
            let posA: Vec3 = v3(this.doubleCont.worldPosition.x, this.doubleCont.worldPosition.y + 40);
            let posB: Vec3 = v3(this.pro.barSprite.node.worldPosition.x + this.pro.barSprite.node.getComponent(UITransform).width, this.pro.barSprite.node.worldPosition.y);
            this.creatFlyPoint(posA, posB, addPoint);
            this.bomEffect.node.worldPosition = posB.clone();
            //this.bomEffect.node.active = true;
            this.bomEffect.setCompleteListener(()=>{
                this.bomEffect.node.active = false;
            });
        } else {
            this.sectionShowEnd();
        }
        
    }

    private creatFlyPoint(posA: Vec3, posB: Vec3, num: number): void {
        let pos1: Vec3 = new Vec3(posA.x + 100, posA.y - 200);
        let pos2: Vec3 = new Vec3(posA.x + 200, posA.y + 100);
        let pos3: Vec3 = new Vec3(posA.x + 300, posA.y + 200);
        this.flyNum = num;
        let flyNode: Node;
        for (let index = 0; index < num; index++) {
            flyNode = this.flyPool.get() || instantiate(this.tempPointImg);   
            flyNode.active = true;
            flyNode.parent = this.node;
            flyNode.position = posA;
            this.flyPoint(flyNode, index * 0.05, posA, posB, [pos1, pos2, pos3]);
        }
        
    }

    private flyPoint(node: Node, delay: number, posA: Vec3, posB: Vec3, partPos: Vec3[]): void {
        let bezier = Bezier.create(posA, posB, partPos);
        let update = (target: Node, ratio: number) => {
            if (bezier) {
                let v = bezier.update(ratio);
                bezier && target.setWorldPosition(v);
            }
        }
        tween(node)
        .delay(delay)
        .to(0.2, {}, {onUpdate: update })
        .call(() => {
            this.bomEffect.node.active = true;
            this.bomEffect.clearAnimation();
            this.bomEffect.setAnimation(0, "animation", false);
            this.flyPool.put(node);
            this.flyNum--;
            if (this.flyNum <= 0) {
                
                this.setNewSection();
            }
        })
        .start();
    }

    private setSection(rankPoints: number, isChange: boolean = false): void {
        let curStdPvpLv: StdPvpLevel = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, rankPoints);
        let point: number = Math.max(rankPoints - curStdPvpLv.LevelPoints, 0);
        let curStar: number = Math.floor( point / curStdPvpLv.StarPoints);
        let maxStar: number = curStdPvpLv.Star - 1;
        if (curStdPvpLv.Star == 1) {
            this.starCont.active = false;
            this.expLineBg.active = false;
            this.maxStarCont.active = true;
            this.maxStarNumLab.string = `x ${curStar}`;
            this.expNumCont.position = v3(296, -268, 0);
            let starNode: Node = this.maxStarCont.getChildByName("star");
            let bright: sp.Skeleton = starNode.getChildByName("bright").getComponent(sp.Skeleton);
            let isShowEffect: boolean = isChange && curStar > 0 && curStar > this.oldStar;
            bright.node.active = curStar > 0;
            if (isShowEffect) {
                bright.clearAnimation();
                bright.setAnimation(0, `show`, false);
                bright.setCompleteListener(() => {
                    bright.setAnimation(0, `loop`, true);
                });
            } else {
                bright.setAnimation(0, `loop`, true);
            }
        } else {
            this.maxStarCont.active = false;
            this.expLineBg.active = true;
            this.starCont.active = true;
            this.expNumCont.position = v3(0, -194, 0);
            
            for (let index = 0; index < this.starCont.children.length; index++) {
                let starNode: Node = this.starCont.children[index];
                if (index < maxStar) {
                    starNode.active = true;
                    let bright: sp.Skeleton = starNode.getChildByName("bright").getComponent(sp.Skeleton);
                    let isShowEffect: boolean = isChange && !bright.node.active;
                    bright.node.active = curStar > index;
                    if (isShowEffect) {
                        bright.clearAnimation();
                        bright.setAnimation(0, `show`, false);
                        bright.setCompleteListener(() => {
                            bright.setAnimation(0, `loop`, true);
                        });
                    } else {
                        bright.setAnimation(0, `loop`, true);
                    }
                } else {
                    starNode.active = false;
                }
                
            }
        }
        this.oldStar = curStar;
        ResMgr.LoadResAbSub(path.join("sheets/sectionIcon", curStdPvpLv.LevelIcon, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.sectionIcon.spriteFrame = res;
        });
        ResMgr.LoadResAbSub(path.join("sheets/sectionIcon", curStdPvpLv.LevelNameImg, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.sectionNameImg.spriteFrame = res;
        });
        let curExp: number = point % curStdPvpLv.StarPoints;
        let mapExp: number = curStdPvpLv.StarPoints;
        this.curNumLab.string = curExp.toString();
        this.maxNumLab.string = mapExp.toString();
        this.pro.progress = curExp / mapExp;
    }

    private setNewSection(): void {
        /* this.setSection(this.data.rankRecord.pointAfter);
        this.sectionShowEnd();
        return; */
        
        let addPoint: number = this.data.rankRecord.pointAfter - this.data.rankRecord.pointBefore;
        for (let index = 0; index < addPoint; index++) {
            let point: number = this.data.rankRecord.pointBefore + (index + 1);
            this.changeSection(index * 0.05, point, this.data.rankRecord.pointAfter);
        }
        /* let starStd: StdPvpLevel = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.data.rankRecord.pointBefore);
        let endStd: StdPvpLevel = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.data.rankRecord.pointAfter);
        let stdLvList: StdPvpLevel[] = CfgMgr.GetStdPvpLvListByPoint(this.curStdPVPSnatch.RankGroupID, starStd.LevelPoints, endStd.LevelPoints);
        for (let index = 0; index < stdLvList.length; index++) {
            let std = stdLvList[index];
            
        } */
    }

    private changeSection(d: number, point: number, newPoint: number): void {
        this.scheduleOnce(()=>{
            this.setSection(point, true);
            if (point == newPoint) {
                this.sectionShowEnd();
            }
        }, d)
    }

    private sectionShowEnd(): void {
        if (!this.data.rewardThings || this.data.rewardThings.length < 1) {
            this.maskBtn.interactable = true;
        } else {
            this.getAwardBtn.node.active = true;
        }
    }

    private showGetAward(): void {
        this.awardCont.active = true;
        this.sectionCont.active = false;
        this.maxQualLab.node.active = false;
        this.cardUpBtn.node.active = false;
        this.itemCont.active = false;
        this.upCardData = null;
        this.card.node.active = false;
        this.getEffect.node.active = true;
        this.getEffect.clearAnimation();
        this.getEffect.setAnimation(0, `start`, false);
        this.getEffect.setCompleteListener(() => {
            //this.getEffect.node.active = false;
        });
        this.scheduleOnce(() => {
            this.showAward();
        }, 0.3);
        
    }

    private showAward(): void {
        this.card.node.scale = v3(0.5, 0.5 , 1);
        let awardItem: proto.base.IThingItem = this.data.rewardThings[0].item;
        let stdItem: StdItem = CfgMgr.Getitem(awardItem.id);
        if (stdItem && stdItem.Itemtpye == ItemType.piece) {
            let cardDatas: proto.base.IBattleCard[] = this.data.rankRecord.battlePlayers[this.playerId].cards;
            this.upCardData = PlayerData.GetCardDataByItemId(awardItem.id, cardDatas);
        }
         
        if (this.upCardData) {
            this.card.node.active = true;
            this.card.SetData(this.upCardData);
            let haveNum: number = PlayerData.GetItemCount(awardItem.id);
            let upgradeList: StdCardUpgrade[] = CfgMgr.GetCardUpgradeList(this.upCardData.cardId);
            let nextUpgrade: StdCardUpgrade = upgradeList[this.upCardData.quality];
            let costItemId: number;
            let costItemNum: number;
            if (nextUpgrade) {
                for (let index = 0; index < nextUpgrade.CostItemIds.length; index++) {
                    if (nextUpgrade.CostItemIds[index] == awardItem.id) {
                        costItemId = nextUpgrade.CostItemIds[index];
                        costItemNum = nextUpgrade.CostItemNums[index];
                        break;
                    }   
                }
            }
            if (costItemId) {
                let std: StdItem = CfgMgr.Getitem(costItemId);
                if (std) {
                    ResMgr.LoadResAbSub(path.join(folder_item, std.Icon, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
                        this.itemIcon.spriteFrame = res;
                    });
                    
                }
                this.itemCont.active = true;
                let colorStr: string;
                if (haveNum >= costItemNum) {
                    this.cardUpBtn.node.active = true;
                    colorStr = "#F9DE73";
                } else {
                    colorStr = "#D64532";
                }
                Utils.NumberRool(this.itemCurLab, awardItem.count, haveNum);
                this.itemNeedNumLab.string = `/${costItemNum}`;
            } else {
                this.maxQualLab.node.active = true;
            }
            
        }

        tween(this.card.node)
        .to(0.3, {scale: new Vec3(1.4, 1.4, 1)}, { easing: easing.backOut })
        .call(() => {
            this.cont.active = true;
            this.maskBtn.interactable = true;
        })
        .start();
    }
    
}

