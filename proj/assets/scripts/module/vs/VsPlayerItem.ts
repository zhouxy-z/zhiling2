import { Component, Label, Node, path, Sprite, SpriteFrame, UITransform, v3, Widget } from "cc";
import { CardGroupCoverItem } from "../common/CardGroupCoverItem";
import proto from "../../net/Protocol";
import { ResMgr, roleimage } from "../../manager/ResMgr";
import { CfgMgr } from "../../manager/CfgMgr";

export class VsPlayerItem extends Component {
    private effect: Node;
    private cardView: Sprite;
    private nameBg: Sprite;
    private nameLab: Label;
    private cardGroupCoverItem: CardGroupCoverItem;
    private playerName: string;
    private cardGroupData: proto.base.IDeckAttrs;
    private isMy: boolean;
    private isInit: boolean = false;
    private resNum: number = 0;
    protected onLoad(): void {
        this.effect = this.node.getChildByPath("effect");
        this.cardView = this.node.getChildByPath("playerCont/cardView").getComponent(Sprite);
        this.nameBg = this.node.getChildByPath("playerCont/nameBg").getComponent(Sprite);
        this.nameLab = this.node.getChildByPath("playerCont/nameLab").getComponent(Label);
        this.cardGroupCoverItem = this.node.getChildByPath("playerCont/CardGroupCoverItem").addComponent(CardGroupCoverItem);
        this.isInit = true;
        this.effect.active = false;
        if(this.playerName) this.updateShow();
    }

    SetData(name: string, cardGroupData: proto.base.IDeckAttrs = null, isMy: boolean = false): void {
        this.playerName = name;
        this.isMy = isMy;
        this.cardGroupData = cardGroupData;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit) return;
        this.resNum ++;
        let bgUrl: string;
        if (this.playerName) {
            this.effect.active = false;
            this.nameLab.string = this.playerName;
        } else {
            this.effect.active = true;
            this.nameLab.string = `???`;
        }
        this.cardView.node.active = false;
        if (this.cardGroupData) {
            this.cardGroupCoverItem.node.active = true;
            this.cardGroupCoverItem.SetData(this.cardGroupData, false);
            let cfg = CfgMgr.GetHead(this.cardGroupData.avatarId);
            if(cfg) {
                this.cardView.node.active = true;
                ResMgr.LoadResAbSub(path.join(roleimage, cfg.cardView, "spriteFrame"), SpriteFrame, res => {
                    this.cardView.spriteFrame =  res;
                });
            }
        } else {
            this.cardGroupCoverItem.node.active = false;
        }
        
        if (this.isMy) {
            bgUrl = "nameBg_blue";
        } else {
            bgUrl = "nameBg_red";
        }
        ResMgr.LoadResAbSub(path.join("sheets/vs", bgUrl, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.nameBg.spriteFrame = res;
        });
        
    }
}