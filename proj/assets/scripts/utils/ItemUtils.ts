import { Label, Sprite, js, path } from "cc";
import { MsgPanel } from "../module/common/MsgPanel";
import { folder_icon, folder_item, folder_money } from "../manager/ResMgr";
import { BeforeGameUtils } from "./BeforeGameUtils";
import { CardQuality, CfgMgr, ItemType, StdItem, ThingName, ThingTypeName } from "../manager/CfgMgr";
import { PlayerData } from "../module/player/PlayerData";
import proto from "../net/Protocol";

export class ItemUtil {
    static SthingType: { [key: number]: string } = BeforeGameUtils.toHashMapObj(
        ThingName.item, ThingTypeName.Item,
        ThingName.battlecard, ThingTypeName.BattleCard,
    );

    /**
     * 通过配置转换SThing列表结构
     * @param itemTypeList 事物类型列表
     * @param itemIdList 事物id列表
     * @param itemNumList 事物数量列表
     */
    static GetSThingList(itemTypeList: number[] | string[], itemIdList: number[], itemNumList?: number[]): proto.base.IThing[] {
        let list: proto.base.IThing[] = [];
        let itemType: string;
        let itemId: number;
        let itemNum: number;
        let data: proto.base.IThing;
        let is_number_str: boolean;
        if (typeof itemTypeList[0] == "number") {
            is_number_str = false
        } else {
            is_number_str = true
        }
        for (let index = 0; index < itemTypeList.length; index++) {
            itemType = is_number_str ? itemTypeList[index] : this.SthingType[itemTypeList[index]];
            itemId = itemIdList[index];
            itemNum = itemNumList ? itemNumList[index] : PlayerData.GetItemCount(itemId);
            data = {};
            data.type = itemType;
            switch (itemType) {
                case ThingTypeName.Item:
                    data.item = { id: itemId, count: itemNum };
                    break;
                default:
                    break;
            }
            list.push(data);
        }
        return list;
    }
    /**
     * 创建单一事物结构体
     * @param itemType 
     * @param itemNum 
     * @param itemId 
     * @returns 
     */
    static CreateThing(itemType: number | string, itemId: number = 0, itemNum: number = 0): proto.base.IThing {
        let _itemType: number[] | string[]
        if (typeof itemType == "number") {
            _itemType = [itemType]
        } else {
            _itemType = [itemType]
        }
        let thingList: proto.base.IThing[] = this.GetSThingList(_itemType, [itemId], [itemNum]);
        return thingList && thingList.length ? thingList[0] : null;
    }

    /**
     * 合并数量
     * @param thing 
     * @param count 
     */
    static MergeThings(thing: proto.base.IThing, count: number) {
        switch (thing.type) {
            case ThingTypeName.Item:
                thing.item.count += count;
                break;
        }
    }

    /**
     * 单一事物结构检测是否拥有足够数量
     * @param itemType 
     * @param itemNum 
     * @param itemId 
     * @returns 
     */
    static CheckItemIsHave(itemType: number | string, itemNum: number, itemId: number = 0): boolean {
        let _itemType: number[] | string[]
        if (typeof itemType == "number") {
            _itemType = [itemType]
        } else {
            _itemType = [itemType]
        }
        return this.CheckThingConsumes(_itemType, [itemId], [itemNum]);
    }

    /**
     * 检测事物消耗是否满足
     * @param itemTypeList 事物类型列表
     * @param itemIdList 事物id列表
     * @param itemNumList 事物数量列表
     * @param isShowTips 事物不足时是否飘字
     * @param isShowGetWay 事物不足时是否显示获取途径
     * @param tipsStr 事物不足提示内容
     */
    static CheckThingConsumes(itemTypeList: number[] | string[], itemIdList: number[], itemNumList: number[], isShowTips: boolean = false, isShowGetWay: boolean = false, tipsStr: string = ""): boolean {
        let itemType: string;
        let itemId: number;
        let itemNum: number;
        let haveNum: number;
        let itemName: string;
        let is_number_str: boolean;
        let moneyItemNum: number;
        if (!itemTypeList) {
            let type_list = []
            for (let index = 0; index < itemIdList.length; index++) {
                type_list.push("item");
            }
            itemTypeList = type_list;
        }
        if (itemTypeList.length > 0 && typeof itemTypeList[0] == "number") {
            is_number_str = false
        } else {
            is_number_str = true
        }
        for (let index = 0; index < itemTypeList.length; index++) {
            itemType = is_number_str ? itemTypeList[index] : this.SthingType[itemTypeList[index]];
            itemId = itemIdList[index];
            itemNum = itemNumList[index];
            haveNum = 0;
            itemName = "";
            switch (itemType) {
                case ThingTypeName.Item:
                    if (!itemId) return;
                    let stdItem: StdItem = CfgMgr.Getitem(itemId);
                    itemName = stdItem ? stdItem.ItemName : itemId.toString();
                    haveNum = PlayerData.GetItemCount(itemId);
                    if (stdItem.Itemtpye == ItemType.money) {
                        itemNum = itemNumList[index] / 10000
                    }
                    break;
                default:
                    break;
            }
            if (haveNum < itemNumList[index]) {
                if (isShowTips) MsgPanel.Show(tipsStr != "" ? tipsStr : `所需${itemName}数量不足${itemNum}个`);
                if (isShowGetWay) {
                    //TODO 打开获取途径
                }
                return false;
            }
        }
        return true;
    }

    /**
     * 货币类型显示单位转换
     */
    static MoneyChange(money: number) {
        //货币单位为万分比
        return money / 10000
    }

    static ChangeItem(data: proto.base.IThing) {
        let change_data: proto.base.IThing = { item: { id: 0, count: 0 } };
        if (data.item) {
            let cfg = CfgMgr.Getitem(data.item.id);
            change_data.item.id = data.item.id;
            change_data.item.count = data.item.count;
            if (cfg.Itemtpye == ItemType.money) {
                change_data.item.count = this.MoneyChange(data.item.count)
            }
            return change_data;
        } else {
            return data
        }
    }


    static FormatCost(icon: Sprite, lab: Label, type: number, id: number, value: number) {
        let url: string = "", name = 0;
        switch (type) {
            case ItemType.money: // 货币
                url = path.join(folder_money, id.toString(), "spriteFrame");
                break;
            case ItemType.box:   // 宝箱

            case ItemType.item:  // 无特殊类型的道具
            case ItemType.exp:   // 经验道具
            case ItemType.shard: // 角色碎片
            case ItemType.speed: // 玩法门票（未生效）旧：加速道具
            case ItemType.rights://权益卡
            case ItemType.shield:// 玩法次数增加类道具 旧：防护罩
            case ItemType.piece: //英雄粉尘（ItemEffect1填对应classid）
                break;
        }
    }
}