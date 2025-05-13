import { Color, Component, Label, Node, path, Sprite, SpriteFrame } from "cc";
import proto from "../../net/Protocol";
import { AsyncComponent } from "./AsyncComponent";
import { cardBack, folder_head, folder_icon, ResMgr } from "../../manager/ResMgr";
import { CfgMgr } from "../../manager/CfgMgr";

/**
 * 卡组封面item
 */
export class CardGroupCoverItem extends Component {
    private bg: Sprite;
    private cardBack: Sprite;
    private notCardGroup: Node;
    private icon: Sprite;
    private mark: Node;
    private userLab: Label;
    private nameLab: Label;
    private data: proto.base.IDeckAttrs;
    private isInit: boolean = false;
    private isShowUser: boolean;
    protected onLoad(): void {
        this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
        this.cardBack = this.node.getChildByPath("cardBack").getComponent(Sprite);
        this.notCardGroup = this.node.getChildByPath("notCardGroup");
        this.icon = this.node.getChildByPath("icon").getComponent(Sprite);
        this.mark = this.node.getChildByPath("mark");
        this.userLab = this.node.getChildByName("userLab").getComponent(Label);
        this.nameLab = this.node.getChildByPath("nameLab").getComponent(Label);
        this.isInit = true;
        this.updateShow();
    }

    SetData(data: proto.base.IDeckAttrs, isShowUser: boolean = true): void {
        this.data = data;
        this.isShowUser = isShowUser;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit) return;
        let haveNum: number = 0;
        let iconUrl: string = "26";
        let name: string = "";
        this.cardBack.node.active = false
        this.icon.node.active = false;
        this.notCardGroup.active = true;
        this.userLab.node.active = false;
        if (this.data) {
            this.cardBack.node.active = true;
            this.icon.node.active = true;
            this.notCardGroup.active = false;
            haveNum = this.data.size;
            name = this.data.name;
            this.userLab.node.active = this.isShowUser && this.data.isDefault;
            this.bg.node.active = true;
            this.nameLab.string = this.data.name;
            this.mark.active = false;
            let cfg = CfgMgr.GetHead(this.data.avatarId);
            if(cfg){
                let headIconUrl = cfg.icon
                ResMgr.LoadResAbSub(path.join(folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
                    this.icon.spriteFrame =  res;
                });
            }
            let cardBackcfg = CfgMgr.GetCardBackCfgById(this.data.cardBackId)
            if(cardBackcfg){
                let callBackIcon = cardBackcfg.icon
                ResMgr.LoadResAbSub(path.join(cardBack, "card_back_" + callBackIcon, "spriteFrame"), SpriteFrame, res => {
                    this.cardBack.spriteFrame =  res;
                });
            }
        } else {
            
            this.bg.node.active = false;
            this.nameLab.string = `???`;
            this.mark.active = true;
        }
        
        let bgUrl: string = "bg_red";
        let nameColor: string = "#FF7D7D";
        if (!this.data || haveNum >= CfgMgr.CardGuroupComm.DeckFullSize) {
            bgUrl = "bg_blue";
            nameColor = "#FFFFFF";
            this.mark.active = false;
        } else {
            this.mark.active = true;
        }
        this.nameLab.string = name;
        this.nameLab.color.fromHEX(nameColor);
        ResMgr.LoadResAbSub(path.join("sheets/cardGroupCover", bgUrl, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.bg.spriteFrame = res;
        });

    }

}