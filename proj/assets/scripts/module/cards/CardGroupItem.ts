import { Button, Component, Input, Label, Node, path, sp, Sprite, SpriteFrame } from "cc";
import { CfgMgr } from "../../manager/CfgMgr";
import { cardBack, folder_icon, ResMgr } from "../../manager/ResMgr";
import { PlayerData } from "../player/PlayerData";
import proto, { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";

export class CardGroupItem extends Component {
    private add: Node;
    private cardNode: Node;
    private bg: Sprite;
    private cardSpr: Sprite;
    private warning: Node;
    private nameLab: Label;
    private useLab:Node;
    private headIcon: Sprite;
    private getBtn: Button;
  

    private data:any
    protected $loadSub: Promise<any>;
    protected complete: Function;
    protected hasLoad = false;


    protected onLoad(): void {
        this.add = this.node.getChildByName("add");
        this.cardNode = this.node.getChildByName("cardNode");
        this.bg = this.node.getChildByPath("cardNode/bg").getComponent(Sprite);
        this.cardSpr = this.node.getChildByPath("cardNode/cardSpr").getComponent(Sprite);
        this.warning = this.node.getChildByPath("cardNode/warning")
        this.nameLab = this.node.getChildByPath("cardNode/nameLab").getComponent(Label);
        this.useLab = this.node.getChildByPath("cardNode/useLab");
        this.headIcon = this.node.getChildByPath("cardNode/headIcon").getComponent(Sprite);
        this.getBtn = this.node.getChildByPath("cardNode/getBtn").getComponent(Button);
        this.getBtn.node.on(Button.EventType.CLICK, this.onGet, this)
        this.getBtn.node.active = false;
        this.hasLoad = true;
        this.complete?.();
    }

    protected get loadSub() {
        if (this.$loadSub) return this.$loadSub;
        let thisObj = this;
        this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
        });
        return this.$loadSub;
    }


    /**
     * 设置角色数据
     * @param data 
     */
    async SetData(data: proto.base.IDeckAttrs, is_hide_use?:boolean) {
        if (!this.hasLoad) await this.loadSub;
        this.data = data;
        this.add.active = false ;
        this.cardNode.active = true; 
        if(typeof data == "string"){
            this.add.active = true ;
            this.cardNode.active = false;
            return
        }
        if(!data)return;
        this.nameLab.string = data.name;
        this.warning.active = !data.size || data.size < 12;
        let url = !data.size || data.size < 12 ? path.join("sheets/cards/red", "spriteFrame") : path.join("sheets/cards/blue", "spriteFrame")
        ResMgr.LoadResAbSub(url, SpriteFrame, res => {
            this.bg.spriteFrame = res;
        });
        this.getBtn.node.active = data.id == "";
        this.useLab.active = !is_hide_use && PlayerData.CurFightCardGroup && data.id == PlayerData.CurFightCardGroup.id;
       
        let avatarId = data.avatarId ? data.avatarId :  CfgMgr.GetLogic("InitDeck").HeadID
        let cfg = CfgMgr.GetHead(avatarId)
        if(cfg){
            let headIconUrl = cfg.icon
            ResMgr.LoadResAbSub(path.join(folder_icon, "head/", headIconUrl, "spriteFrame"), SpriteFrame, res => {
                this.headIcon.spriteFrame =  res;
            });
        }else{
            console.log("配置错误")
        }

        let cardBackcfg = CfgMgr.GetCardBackCfgById(data.cardBackId)
        if(cardBackcfg){
            let callBackIcon = cardBackcfg.icon
            ResMgr.LoadResAbSub(path.join(cardBack, "card_back_" + callBackIcon, "spriteFrame"), SpriteFrame, res => {
                this.cardSpr.spriteFrame =  res;
            });
        }else{
            console.log("配置错误")
        }
    }

    private onGet(){
        Session.Send(Route["logic.protocol.noobcardsclaim"])
    }

    getData(){
        return this.data
    }

  
}