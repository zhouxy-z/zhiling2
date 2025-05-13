import { find } from "cc";
import { PlayerData } from "../module/player/PlayerData";
import LocalStorage from "../utils/LocalStorage";
import { EventMgr } from "./EventMgr";
import { battleDataMgr } from "../module/battle/BattleDataMgr";

export class ConditionMgr {

    static init() {
        EventMgr.AddChan('condition_check', this.Check, this);
    }

    /**
     * 检测条件
     * @param ConditionId 
     * @param values 
     * @returns 
     */
    static Check(ConditionId: number, ...values: any[]) {
        if (ConditionId == undefined || !values?.length) return false;
        switch (ConditionId) {
            case Condition.Lock:
                return "未开放";

            case Condition.HasCard:// 判断是否有指定品质的卡
                let cards = PlayerData.GetCardDataByCfgId(values[0])
                if (cards?.length) {
                    let quality = values[1] || 0, count = values[2] || 1;
                    for (let card of cards) {
                        if (card && (!quality || card.quality >= quality)) {
                            count--;
                        }
                    }
                    return count <= 0;
                }
                return false;

            case Condition.Collect:
                break;

            case Condition.Level:
                if (PlayerData.player.level < values[0]) return false;
                break;

            case Condition.Item:
                if (PlayerData.GetItemCount(values[0]) < (values[1] || 1)) return false;
                break;

            case Condition.Guide:
                if (!LocalStorage.GetNumber("guide" + values[0], 0)) return false;
                break;

            case Condition.UI:
                if (!values[0] || !String(values[0])) return false;
                let target = find(values[0].toString());
                if (!target || !target.activeInHierarchy) return false;
                break;

            case Condition.UNUI:
                if (!values[0] || !String(values[0])) return false;
                let target1 = find(values[0].toString());
                if (target1 && target1.activeInHierarchy) return false;
                break;

            case Condition.Round:
                if (!battleDataMgr.roomData || battleDataMgr.curRound != Number(values[0])) return false;
                break;
        }
        return true;
    }
}

/**
 * 条件枚举
 */
export enum Condition {
    Lock,             //不可用
    HasCard,          //是否拥有指定卡，如果配置的value为数组，value:[卡id，品质不小于的值，卡数量(不填默认0)]
    Collect,          //收藏星数不小于指定值
    Level,            //玩家等级不小于指定值
    Item,             //是否拥有指定道具,如果配置的value为数组，value:[道具id，数量不小于的值]
    Guide,            //指定的引导已完成
    UI,               //指定ui是否出现
    UNUI,             //指定ui是否隐藏
    Round,            //指定回合触发
    Settlement,       //战斗结算
}