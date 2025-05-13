import { Label, Sprite, SpriteFrame, path } from "cc";
import proto from "../net/Protocol";
import { ResMgr, folder_card, folder_item } from "../manager/ResMgr";
import { CfgMgr, ItemType, StdShopCommodity } from "../manager/CfgMgr";

export class CostUtils {
    /**
     * 格式化消耗显示
     * @param icon 
     * @param lab 
     * @param thing 
     */
    static async FormatCostItem(icon: Sprite, lab: Label, stdcost: StdShopCommodity) {
        let url = path.join(folder_item, CfgMgr.Getitem(stdcost.CostID[0]).Icon, "spriteFrame");
        icon.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);
        lab.string = stdcost.CostNumber[0].toString();
    }

    /**
     * 格式化thing图标
     * @param icon 
     * @param thing 
     */
    static async FormatIcon(icon: Sprite, thing: proto.base.Thing) {
        // "item": 道具, "equipment": 装备, "battlecard": 卡牌, "playerexp": 玩家经验
        let url = "";
        switch (thing.type) {
            case "item":
                url = path.join(folder_item, CfgMgr.Getitem(thing.item.id).Icon, "spriteFrame");
                break;
            case "equipment":
                url = "sheets/default/_/spriteFrame";
                break;
            case "battlecard":
                url = path.join(folder_card, CfgMgr.GetCard(thing.card.cardId).CardBody, "spriteFrame");
                break;
            case "playerexp":
                url = "sheets/default/_/spriteFrame";
                break;
        }
        icon.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);
    }
}