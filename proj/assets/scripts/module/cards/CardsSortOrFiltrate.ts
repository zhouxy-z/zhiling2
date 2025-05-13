import { EditBox, Label, Node, Toggle } from "cc";
import { CardSotrType1, CardSotrType2, CfgMgr, StdCard, skillType } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import proto from "../../net/Protocol";

export class CardsSortOrFiltrate {

    static setCardSort(type1, type2, card_list) {
        switch (type2) {
            case CardSotrType2.Name:
                this.getNameSort(card_list, type1,);
                break;
            case CardSotrType2.Cost:
                this.getCostSort(card_list, type1,);
                break;
            case CardSotrType2.Power:
                this.getPowerSort(card_list, type1,);
                break;
            case CardSotrType2.New:
                this.getNewSort(card_list, type1,);
                break;
            case CardSotrType2.Quality:
                this.getQulitySort(card_list, type1,);
                break;
            case CardSotrType2.UpLevel:
                this.getCanUpSort(card_list, type1,);
                break;
            default:
                break;
        }
        return card_list
    }

    /**名字排序 */
    static getNameSort(data, type) {
        data.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            let a_data = CfgMgr.GetCard(a.cardId);
            let b_data = CfgMgr.GetCard(b.cardId);
            if (type == CardSotrType1.Up) {
                if (a_data.CardName == b_data.CardName) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return a_data.CardName.localeCompare(b_data.CardName);
            } else {
                if (a_data.CardName == b_data.CardName) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return b_data.CardName.localeCompare(a_data.CardName);
            }
        })

    }

    /**能量排序 */
    static getCostSort(data, type) {
        data.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            let a_data = CfgMgr.GetCard(a.cardId);
            let b_data = CfgMgr.GetCard(b.cardId);
            return this.defaultSort(type, a_data, b_data)
        })

    }

    /**战力排序 */
    static getPowerSort(data, type) {
       data.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            let a_data = CfgMgr.GetCard(a.cardId);
            let b_data = CfgMgr.GetCard(b.cardId);
            if (type == CardSotrType1.Up) {
                if (a_data.Power == b_data.Power) {
                    if (a_data.Cost == b_data.Cost) {
                        return a_data.ID - b_data.ID
                    }
                    return a_data.Cost - b_data.Cost;
                }
                return a_data.Power - b_data.Power
            } else {
                if (a_data.Power == b_data.Power) {
                    if (a_data.Cost == b_data.Cost) {
                        return b_data.ID - a_data.ID
                    }
                    return b_data.Cost - a_data.Cost;
                }
                return b_data.Power - a_data.Power
            }
        })
    }

    /**最新排序 */
    static getNewSort(data, type) {
        data.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            let a_data = CfgMgr.GetCard(a.cardId);
            let b_data = CfgMgr.GetCard(b.cardId);
            if (type == CardSotrType1.Up) {
                if (a.createdAt == b.createdAt) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return a.createdAt - b.createdAt;
            } else {
                if (a.createdAt == b.createdAt) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return b.createdAt - a.createdAt;
            }
        })
    }

    /**品质排序 */
    static getQulitySort(data, type) {
        data.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            let a_data = CfgMgr.GetCard(a.cardId);
            let b_data = CfgMgr.GetCard(b.cardId);
            if (type == CardSotrType1.Up) {
                if (a.quality == b.quality) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return a.quality - b.quality;
            } else {
                if (a.quality == b.quality) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return b.quality - a.quality;
            }
        })
    }

    /**可升级排序 */
    static getCanUpSort(data, type) {
        data.sort((a: proto.base.IBattleCard, b: proto.base.IBattleCard) => {
            let a_up = PlayerData.CheckCardIsCanUpgrade(a.id) ? 1 : 2;
            let b_up = PlayerData.CheckCardIsCanUpgrade(b.id) ? 1 : 2;
            let a_data = CfgMgr.GetCard(a.cardId);
            let b_data = CfgMgr.GetCard(b.cardId);
            if (type == CardSotrType1.Up) {
                if (a_up == b_up) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return a_up - b_up;
            } else {
                if (a_up == b_up) {
                    return this.defaultSort(type, a_data, b_data)
                }
                return b_up - a_up;
            }
        })

    }

    /**默认规则 */
    static defaultSort(type, a: StdCard, b: StdCard) {
        if (type == CardSotrType1.Up) {
            if (a.Cost == b.Cost) {
                if (a.Power == b.Power) {
                    return a.ID - b.ID
                }
                return a.Power - b.Power
            }
            return a.Cost - b.Cost;
        } else {
            if (a.Cost == b.Cost) {
                if (a.Power == b.Power) {
                    return b.ID - a.ID
                }
                return b.Power - a.Power
            }
            return b.Cost - a.Cost;
        }
    }


    
    //——————————————————————————————————————————————————————————————————————筛选相关————————————————————————————————————————————————————————

    //搜索后的卡牌
    static onEditEnd(editBox:EditBox, searchStrList, nodeList, search_card_list, selectSkillType, costType, showType) {
        let list = []
        search_card_list = this.setSearch(search_card_list, selectSkillType, costType, showType)
        // this.setSearch(search_card_list, selectSkillType, costType, showType)
        if (editBox.string) {
            searchStrList.unshift(editBox.string)
            if (searchStrList.length > 4) {
                searchStrList.splice(4, 1)
            }
            nodeList.children.forEach(item => {
                item.children[0].getComponent(Label).string = searchStrList[item.getSiblingIndex()]
            })

            for (let index = 0; index < searchStrList.length; index++) {
                nodeList.children[index].active = true;
            }
            for (const iterator of search_card_list) {
                let cfg = CfgMgr.GetCard(iterator.cardId)
                if (cfg.CardName.includes(editBox.string) || (cfg.SkillDesc && cfg.SkillDesc.includes(editBox.string))) {
                    list.push(iterator)
                }
            }

        } else {
            list = search_card_list
        }
        return list
    }

    //筛选特殊技能效果的卡牌
    static skillSearch(editBox, nodeList, selectSkillList, selectSkillType, costType, showType) {
        editBox.string = "";
        selectSkillType = skillType.undefined
        nodeList.children.forEach((node, index) => {
            if (node.getComponent(Toggle).isChecked) {
                selectSkillType = index + 1
            }
        })

        selectSkillList = this.setSearch(selectSkillList, selectSkillType, costType, showType)
        return [selectSkillList, selectSkillType]
    }

    //筛选能量消耗的卡牌
    static costSearch(editBox, nodeList, costTypeList, selectSkillType, costType, showType) {
        editBox.string = "";
        costType = [];
        nodeList.children.forEach((node, index) => {
            if (node.getComponent(Toggle).isChecked) {
                costType.push(index)
            }
        })
        costTypeList = this.setSearch(costTypeList, selectSkillType, costType, showType)
        return [costTypeList, costType]
    }

    //筛选自定义展示的卡牌
    static showSearch(editBox, nodeList, showTypeList, selectSkillType, costType, showType) {
        editBox.string = "";
        showType = false;
        nodeList.children.forEach((node, index) => {
            if (node.getComponent(Toggle).isChecked) {
                showType = true
            }
        })
        console.log(showType)
        showTypeList = this.setSearch(showTypeList, selectSkillType, costType, showType)
        return [showTypeList, showType]
    }

    static setSearch(list, selectSkillType, costType, showType) {
        list = []
        if (showType) {
            list = this.onSetSearchShow();
        }
        if (list.length == 0) {
            for (let index = 0; index < PlayerData.cards.length; index++) {
                const element = PlayerData.cards[index];
                list.push(element)   
            }
        }
        //加入特殊效果的条件
        if (selectSkillType) {
            list = CfgMgr.GetCardCfgByType(list, selectSkillType)
        }
        list = this.onSetSearchCost(list, costType)
        return list
    }

    static onSetSearchShow() {
        let list = []
        for (const iterator of CfgMgr.CardList) {
            let index = PlayerData.cards.findIndex(item => item.cardId == iterator.ID);
            if (index != -1) {
                list.push(PlayerData.cards[index])
            } else {
                let card_data: proto.base.IBattleCard = new proto.base.BattleCard();
                card_data.cardId = iterator.ID;
                card_data.createdAt = "";
                card_data.id = "";
                card_data.exp = 0;
                card_data.level = 1;
                card_data.nftLockExpires = false;
                card_data.ownershipType = 0;
                card_data.quality = 1;
                card_data.tradeCd = 0;
                card_data.updateId = 0;
                list.push(card_data);
            }
        }
        return list
    }

    static onSetSearchCost(data: proto.base.IBattleCard[], type_list: number[]) {
        let list = []
        if (type_list.length <= 0) {
            return data;
        }
        for (let index = 0; index < type_list.length; index++) {
            const type = type_list[index];
            if (type != undefined) {
                data.forEach((item, index) => {
                    let card_cfg = CfgMgr.GetCard(item.cardId)
                    if (type == 0) {
                        if (card_cfg.Cost <= 1) {
                            list.push(item)
                        }
                    } else {
                        if (card_cfg.Cost == type + 1) {
                            list.push(item)
                        }
                    }
                })
            }
        }
        return list
    }



}