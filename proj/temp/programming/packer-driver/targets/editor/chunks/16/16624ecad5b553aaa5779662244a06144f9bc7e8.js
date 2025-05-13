System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Layout, Toggle, instantiate, Panel, AutoScroller, CfgMgr, ThingTypeName, SQuerySortCardType, SQuerySortItemType, TradePanel, SortPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdMarketChoose(extras) {
    _reporterNs.report("StdMarketChoose", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingTypeName(extras) {
    _reporterNs.report("ThingTypeName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSQuerySortCardType(extras) {
    _reporterNs.report("SQuerySortCardType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSQuerySortItemType(extras) {
    _reporterNs.report("SQuerySortItemType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradePanel(extras) {
    _reporterNs.report("TradePanel", "./TradePanel", _context.meta, extras);
  }

  _export("SortPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Toggle = _cc.Toggle;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
      ThingTypeName = _unresolved_4.ThingTypeName;
    }, function (_unresolved_5) {
      SQuerySortCardType = _unresolved_5.SQuerySortCardType;
      SQuerySortItemType = _unresolved_5.SQuerySortItemType;
    }, function (_unresolved_6) {
      TradePanel = _unresolved_6.TradePanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6aa3fYrk29CIbMdFLBolEAF", "SortPanel", undefined);

      __checkObsolete__(['EventTouch', 'Input', 'Label', 'Layout', 'Node', 'Toggle', 'instantiate']);

      _export("SortPanel", SortPanel = class SortPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/Trade/SortPanel";
          this.sortLayout = void 0;
          this.cancelSortBtn = void 0;
          this.cancelFiltrateBtn = void 0;
          this.filtrateScroll = void 0;
          this.nav = void 0;
          this.clone_filtrate_item = void 0;
          this.clone_sort_item = void 0;
          this.old_sort_type = void 0;
          this.old_searchCardData = void 0;
          this.sortItemData = [{
            id: (_crd && SQuerySortItemType === void 0 ? (_reportPossibleCrUseOfSQuerySortItemType({
              error: Error()
            }), SQuerySortItemType) : SQuerySortItemType).PriceDow,
            string: `消耗从高到低`
          }, {
            id: (_crd && SQuerySortItemType === void 0 ? (_reportPossibleCrUseOfSQuerySortItemType({
              error: Error()
            }), SQuerySortItemType) : SQuerySortItemType).PriceUp,
            string: `消耗从低到高`
          }, {
            id: (_crd && SQuerySortItemType === void 0 ? (_reportPossibleCrUseOfSQuerySortItemType({
              error: Error()
            }), SQuerySortItemType) : SQuerySortItemType).TotalPriceDown,
            string: `消耗总数从高到低`
          }, {
            id: (_crd && SQuerySortItemType === void 0 ? (_reportPossibleCrUseOfSQuerySortItemType({
              error: Error()
            }), SQuerySortItemType) : SQuerySortItemType).TotalPriceUp,
            string: `消耗总数从低到高`
          }, {
            id: (_crd && SQuerySortItemType === void 0 ? (_reportPossibleCrUseOfSQuerySortItemType({
              error: Error()
            }), SQuerySortItemType) : SQuerySortItemType).CountDown,
            string: `数量从高到低`
          }, {
            id: (_crd && SQuerySortItemType === void 0 ? (_reportPossibleCrUseOfSQuerySortItemType({
              error: Error()
            }), SQuerySortItemType) : SQuerySortItemType).CountUp,
            string: `数量从低到高`
          }];
          this.sortCardData = [{
            id: (_crd && SQuerySortCardType === void 0 ? (_reportPossibleCrUseOfSQuerySortCardType({
              error: Error()
            }), SQuerySortCardType) : SQuerySortCardType).PriceDow,
            string: `消耗从高到低`
          }, {
            id: (_crd && SQuerySortCardType === void 0 ? (_reportPossibleCrUseOfSQuerySortCardType({
              error: Error()
            }), SQuerySortCardType) : SQuerySortCardType).PriceUp,
            string: `消耗从低到高`
          }, {
            id: (_crd && SQuerySortCardType === void 0 ? (_reportPossibleCrUseOfSQuerySortCardType({
              error: Error()
            }), SQuerySortCardType) : SQuerySortCardType).CardRarityDown,
            string: `稀有度从高到低`
          }, {
            id: (_crd && SQuerySortCardType === void 0 ? (_reportPossibleCrUseOfSQuerySortCardType({
              error: Error()
            }), SQuerySortCardType) : SQuerySortCardType).CardRarityUp,
            string: `稀有度从低到高`
          }, {
            id: (_crd && SQuerySortCardType === void 0 ? (_reportPossibleCrUseOfSQuerySortCardType({
              error: Error()
            }), SQuerySortCardType) : SQuerySortCardType).QualityDown,
            string: `品质从高到低`
          }, {
            id: (_crd && SQuerySortCardType === void 0 ? (_reportPossibleCrUseOfSQuerySortCardType({
              error: Error()
            }), SQuerySortCardType) : SQuerySortCardType).QualityUp,
            string: `品质从低到高`
          }];
        }

        static get ins() {
          return this.$instance;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("panel/closeBtn");
          this.filtrateScroll = this.find(`panel/filtrateScroll`, _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.filtrateScroll.SetHandle(this.updateItem.bind(this));
          this.sortLayout = this.find(`panel/sortLayout`, Layout);
          this.cancelFiltrateBtn = this.find(`panel/cancelFiltrateBtn`);
          this.cancelFiltrateBtn.on(Input.EventType.TOUCH_END, this.onRemoveFiltrate, this);
          this.cancelSortBtn = this.find(`panel/cancelSortBtn`);
          this.cancelSortBtn.on(Input.EventType.TOUCH_END, this.onRemoveSort, this);
          this.clone_filtrate_item = this.find("panel/filtrateScroll/view/content/type_node/item_layout/item");
          this.nav = this.find("panel/nav").children.concat();

          for (let btn of this.nav) {
            btn.off('toggle', this.onPage, this);
            btn.on('toggle', this.onPage, this);
          }
        }

        onShow() {}

        async flush(type, sort_type, searchCardData) {
          this.old_sort_type = sort_type;
          this.old_searchCardData = searchCardData;
          let data;
          this.nav[0].active = false;

          if (type == (_crd && ThingTypeName === void 0 ? (_reportPossibleCrUseOfThingTypeName({
            error: Error()
          }), ThingTypeName) : ThingTypeName).Item) {
            data = this.sortItemData;
            this.nav[1].getComponent(Toggle).isChecked = true;
          } else {
            this.sortLayout.node.active = false;
            this.nav[0].active = true;
            data = this.sortCardData;
            this.initCardSerchData();
            this.nav[0].getComponent(Toggle).isChecked = true;
          }

          let clone_item = this.sortLayout.node.children[0];
          this.sortLayout.node.removeAllChildren();

          for (const iterator of data) {
            let _item = instantiate(clone_item);

            let filtrat_name = _item.getChildByPath("name").getComponent(Label);

            filtrat_name.string = iterator.string;
            _item["data"] = iterator;

            if (iterator.id == this.old_sort_type) {
              let item_toggle = _item.getComponent(Toggle);

              if (!item_toggle) item_toggle = _item.addComponent(Toggle);
              item_toggle.isChecked = true;
            }

            this.sortLayout.node.addChild(_item);
          }
        }

        onPage(t) {
          let index = t.target.getSiblingIndex();
          this.sortLayout.node.active = false;
          this.filtrateScroll.node.active = false;
          this.cancelSortBtn.active = false;
          this.cancelFiltrateBtn.active = false;

          if (index == 0) {
            this.filtrateScroll.node.active = true;
            this.cancelFiltrateBtn.active = true;
          } else {
            this.sortLayout.node.active = true;
            this.cancelSortBtn.active = true;
          }
        }
        /**初始化筛选排序数据 */


        initCardSerchData() {
          let selections = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Get("market_choose"); //获取最大组数

          let type_list = [];
          let max_group = 0;

          for (const iterator of selections) {
            if (iterator.Group > max_group) {
              max_group = iterator.Group;
              let cfg = [];
              type_list.push(cfg);
            }
          }

          for (const iterator of selections) {
            type_list[iterator.Group - 1].push(iterator);
          }

          this.filtrateScroll.UpdateDatas(type_list);
        }

        updateItem(item, data) {
          let title_name = item.getChildByPath("title_bg/title").getComponent(Label);
          let layout = item.getChildByName("item_layout");
          title_name.string = data[0].GroupName;
          layout.removeAllChildren();

          for (const iterator of data) {
            let _item = instantiate(this.clone_filtrate_item);

            let filtrat_name = _item.getChildByPath("name").getComponent(Label);

            filtrat_name.string = iterator.TypeName;
            _item.name = iterator.TypeName;
            _item["data"] = iterator;
            let is_show = false;

            if (iterator.Group == 1) {
              if (this.old_searchCardData.card_rarity == iterator.Type) {
                is_show = true;
              }
            } else if (iterator.Group == 2) {
              if (this.old_searchCardData.quality == iterator.Type) {
                is_show = true;
              }
            }

            if (is_show) {
              let item_toggle = _item.getComponent(Toggle);

              if (!item_toggle) item_toggle = _item.addComponent(Toggle);
              item_toggle.isChecked = true;
            }

            layout.addChild(_item);
          }
        }

        onRemoveSort() {
          for (let i = 0; i < this.sortLayout.node.children.length; i++) {
            const item_element = this.sortLayout.node.children[i];
            item_element.getComponent(Toggle).isChecked = false;
          }
        }

        onRemoveFiltrate() {
          let content = this.filtrateScroll.node.getChildByPath("view/content");

          for (let index = 0; index < content.children.length; index++) {
            const element = content.children[index];
            let item_layout = element.getChildByName("item_layout");

            for (let i = 0; i < item_layout.children.length; i++) {
              const item_element = item_layout.children[i];
              item_element.getComponent(Toggle).isChecked = false;
            }
          }
        }

        onHide(...args) {
          let select_filtrate_list = [];
          let content = this.filtrateScroll.node.getChildByPath("view/content");
          let is_new = false;

          for (let index = 0; index < content.children.length; index++) {
            const element = content.children[index];
            let item_layout = element.getChildByName("item_layout");

            for (let i = 0; i < item_layout.children.length; i++) {
              const item_element = item_layout.children[i];

              if (item_element.getComponent(Toggle).isChecked) {
                let data = item_element["data"];
                select_filtrate_list.push(data); //有选择

                if (data.Group == 1) {
                  if (this.old_searchCardData.card_rarity != data.Type) {
                    is_new = true;
                    break;
                  }
                } else if (data.Group == 2) {
                  if (this.old_searchCardData.quality != data.Type) {
                    is_new = true;
                    break;
                  }
                }
              }
            }
          } //没有选择的


          if (!is_new) {
            if (select_filtrate_list.length == 1) {
              let is_select1 = this.old_searchCardData.card_rarity != null && select_filtrate_list[0].Group != 1;
              let is_select2 = this.old_searchCardData.quality != null && select_filtrate_list[0].Group != 2;
              is_new = is_select1 || is_select2;
            } else if (select_filtrate_list.length == 2) {
              let is_select1 = this.old_searchCardData.card_rarity != null && select_filtrate_list[0].Group != 1;
              let is_select2 = this.old_searchCardData.quality != null && select_filtrate_list[0].Group != 2 && select_filtrate_list[1].Group != 2;
              is_new = is_select1 || is_select2;
            } else {
              is_new = this.old_searchCardData.card_rarity != null || this.old_searchCardData.quality != null;
            }
          }

          let select_sort_str = null;

          for (let i = 0; i < this.sortLayout.node.children.length; i++) {
            const item_element = this.sortLayout.node.children[i];

            if (item_element.getComponent(Toggle).isChecked) {
              select_sort_str = item_element["data"].id;
              break;
            }
          } //没有选择的


          if (!is_new) {
            is_new = select_sort_str != this.old_sort_type;
          }

          if (is_new) {
            (_crd && TradePanel === void 0 ? (_reportPossibleCrUseOfTradePanel({
              error: Error()
            }), TradePanel) : TradePanel).ins.onFiltrateOrSort(select_filtrate_list, select_sort_str);
          }

          console.log(select_filtrate_list, select_sort_str);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16624ecad5b553aaa5779662244a06144f9bc7e8.js.map