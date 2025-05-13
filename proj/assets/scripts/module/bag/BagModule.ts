
import { CfgMgr, ItemType, ThingTypeName } from "../../manager/CfgMgr";
import { EventMgr, Evt_Compose, Evt_GetReward, Evt_Item_Change } from "../../manager/EventMgr";
import { Session } from "../../net/Session";
import { RewardTips } from "../common/RewardTips";
import { PlayerData } from "../player/PlayerData";
import { Ret, Route } from "../../net/Protocol";



export class BagModule {
    constructor() {
        Session.on(Route.PlayerItemsChangedPush, this.onItemsChange, this);
        Session.on(Route["player.protocol.openbox"], this.getOpenBoxReward, this);  
    }


    onItemsChange(data: any) {
        let item_data = Ret.PlayerItemsChangedPush.decode(data);
        console.log("道具变更后端数据推送",item_data);
        let changeMap: {[key: number]: number} = {};
        for (const item of item_data.list) {
            if (item.countAfter > 0) {  
                let type = CfgMgr.Getitem(item.itemId).Itemtpye
                if(type == ItemType.money){
                    PlayerData.items[item.itemId] = item.countAfter / 10000;
                }else{
                    PlayerData.items[item.itemId] = item.countAfter;
                }
            } else {
                delete PlayerData.items[item.itemId];
            }
            
            if (!changeMap[item.itemId]) {
                changeMap[item.itemId] = item.count;
            } 
        }
        console.log(PlayerData.items)
        EventMgr.emit(Evt_Item_Change, changeMap);
    }

    getOpenBoxReward(data: any) {
        let open_box_data = Ret["player.protocol.openbox"].decode(data);
        console.log(open_box_data)
        if (open_box_data.things && open_box_data.things) {
            RewardTips.Show(open_box_data.things)
            EventMgr.emit(Evt_GetReward, data);
        }
    }
}