import { _decorator, Node, Vec3, path, Button, Label, v3, easing, tween, Sprite, SpriteFrame, Tween, UITransform, sp } from 'cc';
import { folder_item, ResMgr } from '../../manager/ResMgr';
import { CfgMgr, StdItem } from '../../manager/CfgMgr';
import { Panel, UILay } from '../../manager/GameRoot';
import { Card } from '../cards/Card';
import { CellInfo, VList } from '../../component/VList';
import proto from '../../net/Protocol';
import { Utils } from '../../utils/Utils';
import { CardGroupCoverItem } from './CardGroupCoverItem';
import { Goto } from '../../DL';

export class RewardTips extends Panel {
    protected prefab: string = "prefabs/common/RewardTips";
    private showEffect: sp.Skeleton;
    private cardList: VList;
    private itemList: VList;
    private bottomCont: Node;
    private cardGroupCoverItem: CardGroupCoverItem;
    private okBtn: Button;
    private itemDatas: proto.base.IThingItem[];
    private cardDatas: proto.base.IBattleCard[];
    private cardGroupData: proto.base.DeckAttrs;
    private hideCallBack: Function;
    private showCardEnd: boolean;
    private showItemEnd: boolean;
    protected onLoad(): void {
        this.showEffect = this.find("showEffect", sp.Skeleton);
        this.cardList = this.find("cardList", VList);
        this.cardList.initVisible = this.initVisbleCardList.bind(this);
        this.cardList.clickCell = this.clickCellCardList.bind(this);
        this.cardList.updateCell = this.updateCellCard.bind(this);
        this.itemList = this.find("itemList", VList);
        this.itemList.initVisible = this.initVisbleItemList.bind(this);
        this.itemList.updateCell = this.updateCellItem.bind(this);
        this.bottomCont = this.find("bottomCont");
        this.cardGroupCoverItem = this.find("bottomCont/CardGroupCoverItem").addComponent(CardGroupCoverItem);
        this.okBtn = this.find("bottomCont/okBtn", Button);
        this.okBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
    }
    public flush(datas: proto.base.IThing[], cardGroupData?: proto.base.DeckAttrs, showCallBack?: Function, hideCallBack?: Function,): void {
        console.log("获取奖励弹窗----->");
        this.cardList.node.active = false;
        this.itemList.node.active = false;
        this.showEffect.node.active = false;
        this.cardGroupCoverItem.node.active = false;
        if (showCallBack != null) showCallBack();
        this.hideCallBack = hideCallBack;
        this.cardGroupData = cardGroupData;
        this.initData(datas || []);
    }

    protected onShow(): void {

    }

    protected onHide(...args: any[]): void {
        if (this.hideCallBack != null) this.hideCallBack();
    }

    private onBtnClick(btn: Button): void {
        switch (btn) {
            case this.okBtn:
                this.showGet();
                break;
        }
    }

    private initData(datas: proto.base.IThing[]): void {
        this.itemDatas = [];
        this.cardDatas = [];
        for (let data of datas) {
            if (data.card) {
                this.cardDatas.push(data.card);
            }
            if (data.item) {
                this.itemDatas.push(data.item);
            }
        }
        this.itemDatas.sort(this.itemSort.bind(this));
        this.cardDatas.sort(this.cardSort.bind(this));
        this.showCardEnd = false;
        this.showItemEnd = false;
        this.showGet();
    }

    /**排序 */
    private itemSort(a: proto.base.IThingItem, b: proto.base.IThingItem): number {
        let stdA: StdItem = CfgMgr.Getitem(a.id);
        let stdB: StdItem = CfgMgr.Getitem(b.id);
        return stdA.Quality - stdB.Quality;
    }

    /**排序 */
    private cardSort(a: proto.base.IBattleCard, b: proto.base.IBattleCard): number {
        return a.quality - b.quality;
    }

    private showGet(): void {
        if (!this.showCardEnd && this.cardDatas.length > 0) {
            if (this.cardGroupData) {
                this.cardGroupCoverItem.node.active = true;
                this.cardGroupCoverItem.SetData(this.cardGroupData, false);
            }
            this.showGetCard();
            this.showCardEnd = true;
            return;
        }
        this.showCardEnd = true;

        if (!this.showItemEnd && this.itemDatas.length > 0) {
            this.showGetItem();
            this.showItemEnd = true;
            return;
        } 
        this.Hide();
    }

    private showGetCard(): void {
        this.okBtn.node.active = false;
        this.cardList.node.active = true;
        let listTrans: UITransform = this.cardList.node.getComponent(UITransform);
        let viewTrans: UITransform = this.cardList.node.getChildByName("view").getComponent(UITransform);
        let width: number;
        let height: number;
        if (this.cardDatas.length <= 6) {
            width = 164 * this.cardDatas.length;
            height = 214;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
        } else {
            width = 1050;
            height = 450;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
        }
        this.cardList.cellCount = this.cardDatas.length;
    }

    private showGetItem(): void {
        this.okBtn.node.active = false;
        this.cardGroupCoverItem.node.active = false;
        this.cardList.node.active = false;
        this.itemList.node.active = true;
        let listTrans: UITransform = this.itemList.node.getComponent(UITransform);
        let viewTrans: UITransform = this.itemList.node.getChildByName("view").getComponent(UITransform);
        let width: number;
        let height: number;
        if (this.itemDatas.length <= 5) {
            width = 150 * this.itemDatas.length;
            height = 160;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
        } else {
            width = 750;
            height = 398;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
        }
        this.itemList.cellCount = this.itemDatas.length;
    }
    
    private initVisbleItemList(): void {
        let cellList: Node[] = this.itemList.visibleCellList;
        this.toNodeTween(cellList, );
    }

    private toNodeTween(cellList: Node []): void {
        this.showEffect.node.active = true;
        this.showEffect.clearAnimation();
        this.showEffect.setAnimation(0, "start", false);
        let delayTime: number = this.showAwardTween(cellList, 0.2, 0.1);
        this.scheduleOnce(() => {
            this.okBtn.node.active = true;
            this.bottomCont.setScale(0, 0, 0);
            tween(this.bottomCont)
            .to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: easing.backOut })
            .start();
        }, delayTime);
    }

    private updateCellItem(cell: Node, cellInfo: CellInfo): void {
        let itemData: proto.base.IThingItem = this.itemDatas[cellInfo.index];
        let stdItem: StdItem = CfgMgr.Getitem(itemData.id);
        let bg: Sprite = cell.getChildByName("bg").getComponent(Sprite);
        let icon: Sprite = cell.getChildByName("icon").getComponent(Sprite);
        let numLab: Label = cell.getChildByName("numLab").getComponent(Label);
        let nameLab: Label = cell.getChildByName("nameLab").getComponent(Label);
        let effect: Node = cell.getChildByName("effect");
        effect.active = false;
        numLab.string = Utils.formatNumber(itemData.count);
        nameLab.string = stdItem.ItemName;
        ResMgr.LoadResAbSub("sheets/bag/Quality" + stdItem.Quality + "/spriteFrame", SpriteFrame, (res) => {
            bg.spriteFrame = res;
        });
        ResMgr.LoadResAbSub(path.join(folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame, (res) => {
            icon.spriteFrame = res;
        });
        
    }

    private initVisbleCardList(): void {
        let cellList: Node[] = this.cardList.visibleCellList;
        this.toNodeTween(cellList);
    }

    private clickCellCardList(cell: Node, cellInfo: CellInfo): void {
        let cardData: proto.base.IBattleCard = this.cardDatas[cellInfo.index];
        Goto("CardTipsPanel", cardData.cardId);
    }

    private updateCellCard(cell: Node, cellInfo: CellInfo): void {
        let cardData: proto.base.IBattleCard = this.cardDatas[cellInfo.index];
        let card: Node = cell.getChildByName("Cards");
        let cardCom: Card = card.getComponent(Card) || card.addComponent(Card);
        cardCom.setIsShowUpEffect(false);
        cardCom.SetData(cardData);
    }

    private showAwardTween(nodeList: Node[], t: number = 0.2, d: number = 0.05, s: number = 0, e: number = 1): number {
        let node: Node;
        let totalTime: number;
        for (let index = 0; index < nodeList.length; index++) {
            node = nodeList[index];
            Tween.stopAllByTarget(node);
            node.setScale(s, s, s);
            totalTime = (index + 1) * d;
            tween(node)
            .delay((index + 1) * d)
            .to(t, { scale: new Vec3(e, e, e) }, { easing: easing.backOut })
            .call(this.playItemEffect.bind(this, node))
            .start();
        }
        return totalTime += t;
    }

    private playItemEffect(node: Node): void {
        let effect: sp.Skeleton = node.getChildByName("effect")?.getComponent(sp.Skeleton);
        if (effect) {
            effect.node.active = true;
            effect.clearAnimation();
            effect.setAnimation(0, "animation", false);
            effect.setCompleteListener(() => {
                effect.node.active = false;
            })
        }
    }
}


