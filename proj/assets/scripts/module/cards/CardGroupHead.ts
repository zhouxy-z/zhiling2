import { Component, Input, Label, Node, path, sp, Sprite, SpriteFrame } from "cc";
import { CfgMgr, StdHead } from "../../manager/CfgMgr";
import { card_quality, folder_head, folder_icon, ResMgr } from "../../manager/ResMgr";
import { Second, Utils } from "../../utils/Utils";
import proto from "../../net/Protocol";
import { EventMgr, Evt_Card_Chage, Evt_Item_Change } from "../../manager/EventMgr";
import { PlayerData } from "../player/PlayerData";

export class CardGroupHead extends Component {
    private headBg:Node;
    private icon:Sprite;
    private favorite:Node;
    private use:Node;
    private isInit:boolean = false;
    private avatarId:number;
    private is_show_like:boolean;
    private is_show_use:boolean;
    protected onLoad(): void {
        this.headBg = this.node.getChildByName("headBg");
        this.icon = this.node.getChildByPath("Mask/icon").getComponent(Sprite);
        this.favorite = this.node.getChildByName("favorite");
        this.use = this.node.getChildByName("use");
        this.isInit = true;
        this.updateShow();
    }



    SetData(avatarId:number, is_show_like:boolean = false, is_show_use:boolean = false) {
        this.avatarId = avatarId;
        this.is_show_like = is_show_like;
        this.is_show_use = is_show_use;
        this.updateShow();
    }

    private updateShow():void{
        if(!this.isInit || !this.avatarId) return;
        this.favorite.active = this.is_show_like;
        this.use.active = this.is_show_use;
        let std:StdHead = CfgMgr.GetHead(this.avatarId);
        if(std){
            let headUrl = path.join(folder_head, std.icon, "spriteFrame");
            ResMgr.LoadResAbSub(headUrl, SpriteFrame, res => {
                this.icon.spriteFrame = res;
            });
        }
    }
}