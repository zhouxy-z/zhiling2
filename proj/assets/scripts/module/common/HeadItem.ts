import { Component, Sprite, Node, path, SpriteFrame, Button} from "cc";
import { folder_head, folder_head_round, ResMgr } from "../../manager/ResMgr";
import { EventMgr, Evt_UserInfoChange } from "../../manager/EventMgr";
import { Session } from "../../net/Session";
import { PlayerData } from "../player/PlayerData";
import { CfgMgr, StdHead, StdItem } from "../../manager/CfgMgr";
import proto from "../../net/Protocol";

export class HeadItem extends Component {
    private headBg:Node;
    private icon:Sprite;
    private favorite:Node;
    private use:Node;
    private isInit:boolean = false;
    private _data:proto.base.IPlayerShowInfo;
    protected onLoad(): void {
        this.headBg = this.node.getChildByName("headBg");
        this.icon = this.node.getChildByPath("Mask/icon").getComponent(Sprite);
        this.favorite = this.node.getChildByName("favorite");
        this.use = this.node.getChildByName("use");
        this.isInit = true;
        this.updateShow();
        EventMgr.on(Evt_UserInfoChange, this.onUserInfoChange, this);
    }

    private onUserInfoChange(data:proto.base.IPlayerShowInfo):void{
        if(!this.node.activeInHierarchy) return;
        if(this._data.playerId != data.playerId) return;
        this._data = data;
        this.updateShow();
    }

    SetData(data:proto.base.IPlayerShowInfo) {
        this._data = data;
        this.updateShow();
    }

    private updateShow():void{
        if(!this.isInit || !this._data) return;
        this.favorite.active = false;
        this.use.active = false;
        let std:StdItem = CfgMgr.Getitem(Number(this._data.avatarUrl ? this._data.avatarUrl : 1) || 4);
        if(std){
            let headUrl = path.join(folder_head_round, std.Icon, "spriteFrame");
            ResMgr.LoadResAbSub(headUrl, SpriteFrame, res => {
                this.icon.spriteFrame = res;
            });
        }
    }

    get data():proto.base.IPlayerShowInfo{
        return this._data;
    }
}