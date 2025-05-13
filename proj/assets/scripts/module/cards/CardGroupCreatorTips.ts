import { Input, Label, Node, Sprite, SpriteFrame, Toggle, Tween, Vec3, easing, path, sp, tween } from "cc";
import { Panel, UILay } from "../../manager/GameRoot";
import proto, { Req, Route } from "../../net/Protocol";
import { PlayerData } from "../player/PlayerData";
import { CardSotrType1, CfgMgr } from "../../manager/CfgMgr";
import { AutoScroller } from "../../component/AutoScroller";
import { Card } from "./Card";
import { CardsSortOrFiltrate } from "./CardsSortOrFiltrate";
import { EventMgr, Evt_Add_Card_Group_update } from "../../manager/EventMgr";

export class CardGroupCreatorTips extends Panel {
    protected prefab: string = "prefabs/cards/CardGroupCreatorTips";
    private title: Label;
    private cardGroupName: Label;
    private btn1: Node;
    private btn2: Node;
    private cardClassList:AutoScroller
    private EffNode:Node;
    private infoCont:Node;
  
   
    private callBack1:Function;
    private callBack2:Function;

    protected onLoad(): void {
        this.CloseBy("mask");
        this.infoCont = this.find("infoCont");
        this.EffNode = this.find("effNode");
        this.title = this.find("infoCont/title", Label);
        this.cardGroupName = this.find("infoCont/groupName", Label);
        this.cardClassList = this.find("infoCont/cardClassList", AutoScroller);
        this.cardClassList.SetHandle(this.updateCardItem.bind(this));
        this.btn1 = this.find("infoCont/btn1");
        this.btn2 = this.find("infoCont/btn2");
        this.btn1.on(Input.EventType.TOUCH_END, this.onGotoCardGroup, this);
        this.btn2.on(Input.EventType.TOUCH_END, this.onSetDefult, this);
    }

    protected onShow(): void {
        EventMgr.on(Evt_Add_Card_Group_update, this.updateScorll, this)
        this.EffNode.active = true;
        this.infoCont.active = false;
        let spine = this.EffNode.children[0].getComponent(sp.Skeleton)
        let self = this;
        tween(spine)
        .call(()=>{
            spine.clearAnimation();
            spine.setAnimation(0, "animation", false);
        })
        .delay(1)
        .call(()=>{
            spine.setCompleteListener(() => {   
            self.EffNode.active = false;  
            })
            this.infoCont.active = true;
            Tween.stopAllByTarget(this.infoCont);
            this.infoCont.setScale(0.3, 0.3, 1);;
            tween(this.infoCont)
            .to(1, { scale: new Vec3(1, 1, 1) }, { easing: easing.elasticOut})
            .start();
        })
        .start() 

    }
    async flush(select_id:number, card_list:proto.base.IBattleCard[], callback1:Function, callback2:Function) {
        this.callBack1 = callback1;
        this.callBack2 = callback2;
        let select_cfg = CfgMgr.GetCard(select_id);
        this.title.string = "用"+ select_cfg.CardName + "生成的自定义卡组"
        CardsSortOrFiltrate.getCostSort(card_list, CardSotrType1.Up)
        this.cardClassList.UpdateDatas(card_list)
    }

    private updateScorll(){
        let name = PlayerData.getCardGroupDataById(PlayerData.cur_id).name
        this.cardGroupName.string = name;
    }

    private updateCardItem(item:Node, data:proto.base.IBattleCard){
        let card = item.getChildByName("Cards").getComponent(Card);
        if (!card) card = item.getChildByName("Cards").addComponent(Card);
        card.SetData(data);
    }

    private onGotoCardGroup(){
        if(this.callBack1){
            this.callBack1();
            this.callBack1 = undefined;
        }
        this.Hide()
    }

    private onSetDefult(){
        if(this.callBack2){
            this.callBack2();
            this.callBack2 = undefined;
        }
        this.Hide()
    }

    protected onHide(...args: any[]): void {
        EventMgr.off(Evt_Add_Card_Group_update, this.updateScorll, this)
    }
}