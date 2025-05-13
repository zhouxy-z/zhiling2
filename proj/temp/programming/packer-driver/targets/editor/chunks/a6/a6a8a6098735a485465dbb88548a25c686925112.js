System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Toggle, CardSotrType1, CardSotrType2, CfgMgr, skillType, PlayerData, proto, CardsSortOrFiltrate, _crd;

  function _reportPossibleCrUseOfCardSotrType(extras) {
    _reporterNs.report("CardSotrType1", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardSotrType2(extras) {
    _reporterNs.report("CardSotrType2", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfskillType(extras) {
    _reporterNs.report("skillType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("CardsSortOrFiltrate", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      CardSotrType1 = _unresolved_2.CardSotrType1;
      CardSotrType2 = _unresolved_2.CardSotrType2;
      CfgMgr = _unresolved_2.CfgMgr;
      skillType = _unresolved_2.skillType;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }, function (_unresolved_4) {
      proto = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "601ebzqdW9Dh5k2Ob4RiF81", "CardsSortOrFiltrate", undefined);

      __checkObsolete__(['EditBox', 'Label', 'Node', 'Toggle']);

      _export("CardsSortOrFiltrate", CardsSortOrFiltrate = class CardsSortOrFiltrate {
        static setCardSort(type1, type2, card_list) {
          switch (type2) {
            case (_crd && CardSotrType2 === void 0 ? (_reportPossibleCrUseOfCardSotrType2({
              error: Error()
            }), CardSotrType2) : CardSotrType2).Name:
              this.getNameSort(card_list, type1);
              break;

            case (_crd && CardSotrType2 === void 0 ? (_reportPossibleCrUseOfCardSotrType2({
              error: Error()
            }), CardSotrType2) : CardSotrType2).Cost:
              this.getCostSort(card_list, type1);
              break;

            case (_crd && CardSotrType2 === void 0 ? (_reportPossibleCrUseOfCardSotrType2({
              error: Error()
            }), CardSotrType2) : CardSotrType2).Power:
              this.getPowerSort(card_list, type1);
              break;

            case (_crd && CardSotrType2 === void 0 ? (_reportPossibleCrUseOfCardSotrType2({
              error: Error()
            }), CardSotrType2) : CardSotrType2).New:
              this.getNewSort(card_list, type1);
              break;

            case (_crd && CardSotrType2 === void 0 ? (_reportPossibleCrUseOfCardSotrType2({
              error: Error()
            }), CardSotrType2) : CardSotrType2).Quality:
              this.getQulitySort(card_list, type1);
              break;

            case (_crd && CardSotrType2 === void 0 ? (_reportPossibleCrUseOfCardSotrType2({
              error: Error()
            }), CardSotrType2) : CardSotrType2).UpLevel:
              this.getCanUpSort(card_list, type1);
              break;

            default:
              break;
          }

          return card_list;
        }
        /**名字排序 */


        static getNameSort(data, type) {
          data.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (type == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
              error: Error()
            }), CardSotrType1) : CardSotrType1).Up) {
              if (a_data.CardName == b_data.CardName) {
                return this.defaultSort(type, a_data, b_data);
              }

              return a_data.CardName.localeCompare(b_data.CardName);
            } else {
              if (a_data.CardName == b_data.CardName) {
                return this.defaultSort(type, a_data, b_data);
              }

              return b_data.CardName.localeCompare(a_data.CardName);
            }
          });
        }
        /**能量排序 */


        static getCostSort(data, type) {
          data.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);
            return this.defaultSort(type, a_data, b_data);
          });
        }
        /**战力排序 */


        static getPowerSort(data, type) {
          data.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (type == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
              error: Error()
            }), CardSotrType1) : CardSotrType1).Up) {
              if (a_data.Power == b_data.Power) {
                if (a_data.Cost == b_data.Cost) {
                  return a_data.ID - b_data.ID;
                }

                return a_data.Cost - b_data.Cost;
              }

              return a_data.Power - b_data.Power;
            } else {
              if (a_data.Power == b_data.Power) {
                if (a_data.Cost == b_data.Cost) {
                  return b_data.ID - a_data.ID;
                }

                return b_data.Cost - a_data.Cost;
              }

              return b_data.Power - a_data.Power;
            }
          });
        }
        /**最新排序 */


        static getNewSort(data, type) {
          data.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (type == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
              error: Error()
            }), CardSotrType1) : CardSotrType1).Up) {
              if (a.createdAt == b.createdAt) {
                return this.defaultSort(type, a_data, b_data);
              }

              return a.createdAt - b.createdAt;
            } else {
              if (a.createdAt == b.createdAt) {
                return this.defaultSort(type, a_data, b_data);
              }

              return b.createdAt - a.createdAt;
            }
          });
        }
        /**品质排序 */


        static getQulitySort(data, type) {
          data.sort((a, b) => {
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (type == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
              error: Error()
            }), CardSotrType1) : CardSotrType1).Up) {
              if (a.quality == b.quality) {
                return this.defaultSort(type, a_data, b_data);
              }

              return a.quality - b.quality;
            } else {
              if (a.quality == b.quality) {
                return this.defaultSort(type, a_data, b_data);
              }

              return b.quality - a.quality;
            }
          });
        }
        /**可升级排序 */


        static getCanUpSort(data, type) {
          data.sort((a, b) => {
            let a_up = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CheckCardIsCanUpgrade(a.id) ? 1 : 2;
            let b_up = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CheckCardIsCanUpgrade(b.id) ? 1 : 2;
            let a_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(a.cardId);
            let b_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(b.cardId);

            if (type == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
              error: Error()
            }), CardSotrType1) : CardSotrType1).Up) {
              if (a_up == b_up) {
                return this.defaultSort(type, a_data, b_data);
              }

              return a_up - b_up;
            } else {
              if (a_up == b_up) {
                return this.defaultSort(type, a_data, b_data);
              }

              return b_up - a_up;
            }
          });
        }
        /**默认规则 */


        static defaultSort(type, a, b) {
          if (type == (_crd && CardSotrType1 === void 0 ? (_reportPossibleCrUseOfCardSotrType({
            error: Error()
          }), CardSotrType1) : CardSotrType1).Up) {
            if (a.Cost == b.Cost) {
              if (a.Power == b.Power) {
                return a.ID - b.ID;
              }

              return a.Power - b.Power;
            }

            return a.Cost - b.Cost;
          } else {
            if (a.Cost == b.Cost) {
              if (a.Power == b.Power) {
                return b.ID - a.ID;
              }

              return b.Power - a.Power;
            }

            return b.Cost - a.Cost;
          }
        } //——————————————————————————————————————————————————————————————————————筛选相关————————————————————————————————————————————————————————
        //搜索后的卡牌


        static onEditEnd(editBox, searchStrList, nodeList, search_card_list, selectSkillType, costType, showType) {
          let list = [];
          search_card_list = this.setSearch(search_card_list, selectSkillType, costType, showType); // this.setSearch(search_card_list, selectSkillType, costType, showType)

          if (editBox.string) {
            searchStrList.unshift(editBox.string);

            if (searchStrList.length > 4) {
              searchStrList.splice(4, 1);
            }

            nodeList.children.forEach(item => {
              item.children[0].getComponent(Label).string = searchStrList[item.getSiblingIndex()];
            });

            for (let index = 0; index < searchStrList.length; index++) {
              nodeList.children[index].active = true;
            }

            for (const iterator of search_card_list) {
              let cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(iterator.cardId);

              if (cfg.CardName.includes(editBox.string) || cfg.SkillDesc && cfg.SkillDesc.includes(editBox.string)) {
                list.push(iterator);
              }
            }
          } else {
            list = search_card_list;
          }

          return list;
        } //筛选特殊技能效果的卡牌


        static skillSearch(editBox, nodeList, selectSkillList, selectSkillType, costType, showType) {
          editBox.string = "";
          selectSkillType = (_crd && skillType === void 0 ? (_reportPossibleCrUseOfskillType({
            error: Error()
          }), skillType) : skillType).undefined;
          nodeList.children.forEach((node, index) => {
            if (node.getComponent(Toggle).isChecked) {
              selectSkillType = index + 1;
            }
          });
          selectSkillList = this.setSearch(selectSkillList, selectSkillType, costType, showType);
          return [selectSkillList, selectSkillType];
        } //筛选能量消耗的卡牌


        static costSearch(editBox, nodeList, costTypeList, selectSkillType, costType, showType) {
          editBox.string = "";
          costType = [];
          nodeList.children.forEach((node, index) => {
            if (node.getComponent(Toggle).isChecked) {
              costType.push(index);
            }
          });
          costTypeList = this.setSearch(costTypeList, selectSkillType, costType, showType);
          return [costTypeList, costType];
        } //筛选自定义展示的卡牌


        static showSearch(editBox, nodeList, showTypeList, selectSkillType, costType, showType) {
          editBox.string = "";
          showType = false;
          nodeList.children.forEach((node, index) => {
            if (node.getComponent(Toggle).isChecked) {
              showType = true;
            }
          });
          console.log(showType);
          showTypeList = this.setSearch(showTypeList, selectSkillType, costType, showType);
          return [showTypeList, showType];
        }

        static setSearch(list, selectSkillType, costType, showType) {
          list = [];

          if (showType) {
            list = this.onSetSearchShow();
          }

          if (list.length == 0) {
            for (let index = 0; index < (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cards.length; index++) {
              const element = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cards[index];
              list.push(element);
            }
          } //加入特殊效果的条件


          if (selectSkillType) {
            list = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardCfgByType(list, selectSkillType);
          }

          list = this.onSetSearchCost(list, costType);
          return list;
        }

        static onSetSearchShow() {
          let list = [];

          for (const iterator of (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).CardList) {
            let index = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cards.findIndex(item => item.cardId == iterator.ID);

            if (index != -1) {
              list.push((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cards[index]);
            } else {
              let card_data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleCard();
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

          return list;
        }

        static onSetSearchCost(data, type_list) {
          let list = [];

          if (type_list.length <= 0) {
            return data;
          }

          for (let index = 0; index < type_list.length; index++) {
            const type = type_list[index];

            if (type != undefined) {
              data.forEach((item, index) => {
                let card_cfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetCard(item.cardId);

                if (type == 0) {
                  if (card_cfg.Cost <= 1) {
                    list.push(item);
                  }
                } else {
                  if (card_cfg.Cost == type + 1) {
                    list.push(item);
                  }
                }
              });
            }
          }

          return list;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6a8a6098735a485465dbb88548a25c686925112.js.map