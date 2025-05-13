import { Button, Input, Label, Node, Size, Sprite, SpriteFrame, UITransform, Vec3, instantiate, path} from "cc";
import { EventMgr, Evt_GetDownLineInfo, Evt_GetIncommons } from "../../manager/EventMgr";
import { Session } from "../../net/Session";
import { AutoScroller } from "../../component/AutoScroller";
import { Panel } from "../../manager/GameRoot";
import { SDownlineInfo, SFriendSortType, SGetDownlines } from "../player/PlayerStruct";
import { Req, Route } from "../../net/Protocol";



export class FriendListPanel extends Panel {
    protected prefab: string = "prefabs/friend/FriendListPanel";

    private friendNum: Label;
    private vipNum: Label;
    private filtrateBtn: Button;
    private ScrollView: AutoScroller
    private pageBg: Node
    private pageLabel: Label;
    private left: Node;
    private right: Node;
    private noneListCont:Node;
    private tipsNode:Node;
    private clone_item: Node;

    private maxPage: number
    private curPage: number = 1;
    private pageSize: number = 5;
    private sortType: SFriendSortType;
    private searchPlayerID: string = ""
    private filter_type: number = 0;
    protected onLoad(): void {
        this.CloseBy("mask");
        this.CloseBy("frame/closeBtn");
        this.noneListCont = this.find("frame/noneListCont")
        this.friendNum = this.find("frame/friendInfoPage/friendNum", Label);
        this.vipNum = this.find("frame/friendInfoPage/vipNum", Label);
        this.filtrateBtn = this.find("frame/friendInfoPage/filtrateBtn", Button);
        this.ScrollView = this.find("frame/ScrollView").getComponent(AutoScroller);

        this.pageBg = this.find(`frame/pageBg`);
        this.pageLabel = this.find(`frame/pageBg/Label`, Label);
        this.left = this.find(`frame/pageBg/left`);
        this.right = this.find(`frame/pageBg/right`);
        this.tipsNode = this.find(`frame/tipsNode`);
        this.clone_item = this.find(`frame/tipsNode/layout/item`);

        this.filtrateBtn.node.on("click", this.onFiltrate, this);
        this.ScrollView.SetHandle(this.updateItem.bind(this));
        this.left.on(Input.EventType.TOUCH_END, () => {
            if (this.curPage > 1) {
                this.curPage--;
                this.SendSessionView();
            }
        })

        this.right.on(Input.EventType.TOUCH_END, () => {
            this.curPage++;
            if (this.curPage <= this.maxPage) {
                this.SendSessionView();
            } else {
                this.curPage--;
            }
        })
    }


    protected onShow(): void {
        EventMgr.on(Evt_GetDownLineInfo, this.updateFriendData, this);
        this.sortType = SFriendSortType.SortBindTimeAsc;
        this.filter_type = 0;
        this.SendSessionView();
    }

    async flush(maxFriendNum: number) {
        this.friendNum.string = maxFriendNum + "";
        this.vipNum.string = "暂无";
        this.curPage = 1;

        // let rights_list = CfgMgr.GetEquityCardTab(1);
        // let content = this.tipsNode.getChildByName("layout")
        // content.removeAllChildren()
        // for (let index = 0; index < rights_list.EquityCardIds.length; index++) {
        //     const element = rights_list.EquityCardIds[index];
        //     let cfg = CfgMgr.getEquityCardById(element);
        //     let item = instantiate(this.clone_item);
        //     let item_cfg = CfgMgr.Getitem(cfg.Item_Id)
        //     item.getChildByName("name").getComponent(Label).string = cfg.name;
        //     ResMgr.LoadResAbSub(path.join(folder_item, item_cfg.Icon, "spriteFrame"),SpriteFrame, res=>{
        //         item.getChildByName("icon").getComponent(Sprite).spriteFrame = res;
        //     })
        //     item["card_id"] = element;
        //     content.addChild(item);
        // } 
       
    }

    private updateFriendData(data: SGetDownlines[]) {
        // let count = Math.ceil(data.total_count / this.pageSize);
        // this.maxPage = count == 0 ? 1 : count; 
        // this.pageLabel.string = this.curPage + "/" + this.maxPage;
        // this.noneListCont.active = false;
        // if(!data.downlines || data.downlines.length == 0 ){
        //     this.noneListCont.active = true;
        // }
        this.ScrollView.UpdateDatas( data);

    }

    private updateItem(item: Node, data: SGetDownlines, index: number) {
        // let headItem:HeadItem = item.getChildByPath("frame/HeadItem").addComponent(HeadItem);
        let player_name = item.getChildByPath("frame/player_name").getComponent(Label);
        let friendIncomeNum = item.getChildByPath("frame/friendNode/todayNode/friendIncomeNum").getComponent(Label);
        let friendAllIncomeNum = item.getChildByPath("frame/friendNode/allNode/friendAllIncomeNum").getComponent(Label);
        let friendNode = item.getChildByPath("frame/friendNode")
        let incomeNode = item.getChildByPath("frame/incomeNode")
        // let rightsBtn = item.getChildByPath("frame/rightsBtn")
        // rightsBtn.off(Input.EventType.TOUCH_END)
        // rightsBtn.on(Input.EventType.TOUCH_END,()=>{

            // let cardNodeList: Node[] = this.tipsNode.getChildByName("layout").children;
            // let cardNode: Node;
            // for (let index = 0; index < cardNodeList.length; index++) {
            //     cardNode = cardNodeList[index];
            //     if (data.cards.indexOf(cardNode["card_id"]) > -1) {
            //         SetNodeGray(cardNode, false, false);
            //     } else {
            //         SetNodeGray(cardNode, true, false);
            //     }
            // }

        //     let btnSize: Size = rightsBtn.getComponent(UITransform).contentSize;
        //     let showPos: Vec3 = rightsBtn.worldPosition.clone();
        //     showPos.x = showPos.x;
        //     showPos.y = showPos.y - btnSize.height - this.tipsNode.getComponent(UITransform).height * 0.5 + 30;
        //     // ClickTipsPanel.Show(this.tipsNode, this.node, rightsBtn, showPos, 0, () => {
    
        //     });
        // },this)
        // rightsBtn.active = data.cards && data.cards.length > 0;

        // let viewInfo:SPlayerViewInfo = {player_id: data.player_id};
        // headItem.SetData(viewInfo);

        // friendNode.active = true;
        // incomeNode.active = false;
        // icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_head_round, data.icon_url, "spriteFrame"), SpriteFrame);
        player_name.string = "绑定：" + data.playerInfo.nickName + data.playerInfo.playerId + "被绑定：" + data.playerInfo.inviterId + "层级：" + data.friendLevel
        
        // friendIncomeNum.string =  ToFixed(data.daily_output, 4) + "";
        // friendAllIncomeNum.string = ToFixed(data.total_output, 4) + "";
    }

    private SendSessionView() {
        // let data = {
        //     type: MsgTypeSend.GetDownlinesRequest,
        //     data: { page: this.curPage, page_size: this.pageSize, sort_type: this.sortType, filter_type: this.filter_type,  search_player_id: this.searchPlayerID }
        // }
        // Session.Send(data);

        let friend_data = new Req["user.protocol.getfriends"]();
        // friend_data.uid = "";
        friend_data.level = 1;
        Session.Send(Route["user.protocol.getfriends"],friend_data);
    }

    private callBack(sort_type: SFriendSortType, playerid: string, filter_type: number) {
        this.sortType = sort_type;
        this.searchPlayerID = playerid;
        this.filter_type = filter_type;
        this.curPage = 1;
    }

    private onFiltrate() {
        // FriendSortPanel.Show(this.pageSize, this.callBack.bind(this), this.sortType, this.searchPlayerID, this.filter_type);
    }


    protected onHide(...args: any[]): void {
        this.curPage = 1;
        EventMgr.off(Evt_GetDownLineInfo)
    }
}