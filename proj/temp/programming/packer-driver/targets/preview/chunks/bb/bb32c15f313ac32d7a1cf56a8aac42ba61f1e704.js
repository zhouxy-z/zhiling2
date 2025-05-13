System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Toggle, BagItem1, ComposePanel, EventMgr, Evt_Item_Change, OpenBoxPanel1, Panel, AutoScroller, PlayerData, CfgMgr, ItemSubType, ItemType, MsgPanel, BagPanel1, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBagItem(extras) {
    _reporterNs.report("BagItem1", "./BagItem1", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComposePanel(extras) {
    _reporterNs.report("ComposePanel", "./ComposePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenBoxPanel(extras) {
    _reporterNs.report("OpenBoxPanel1", "./OpenBoxPanel1", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSThing(extras) {
    _reporterNs.report("SThing", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemSubType(extras) {
    _reporterNs.report("ItemSubType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  _export("BagPanel1", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BagItem1 = _unresolved_2.BagItem1;
    }, function (_unresolved_3) {
      ComposePanel = _unresolved_3.ComposePanel;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_Item_Change = _unresolved_4.Evt_Item_Change;
    }, function (_unresolved_5) {
      OpenBoxPanel1 = _unresolved_5.OpenBoxPanel1;
    }, function (_unresolved_6) {
      Panel = _unresolved_6.Panel;
    }, function (_unresolved_7) {
      AutoScroller = _unresolved_7.AutoScroller;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      CfgMgr = _unresolved_9.CfgMgr;
      ItemSubType = _unresolved_9.ItemSubType;
      ItemType = _unresolved_9.ItemType;
    }, function (_unresolved_10) {
      MsgPanel = _unresolved_10.MsgPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d97cH2E0dPbaX8Vxtbevak", "BagPanel1", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Toggle']);

      _export("BagPanel1", BagPanel1 = class BagPanel1 extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/bag/BagPanel1";
          this.page = void 0;
          this.page1 = void 0;
          this.scroller1 = void 0;
          this.page2 = void 0;
          this.scroller2 = void 0;
          this.page3 = void 0;
          this.scroller3 = void 0;
          this.item = void 0;
          this.selectName = void 0;
          this.selectDesc = void 0;
          this.selectHas = void 0;
          this.empty = void 0;
          this.useBtns = void 0;
          this.navBtns = void 0;
          this.scroller = void 0;
          this.selectData = void 0;
          this.datas = void 0;
          this._curSelectIndex = void 0;
        }

        onLoad() {
          this.CloseBy("layout/closeBtn");
          this.CloseBy("mask");
          this.page1 = this.find("layout/page1");
          this.scroller1 = this.page1.getChildByPath("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller1.SetHandle(this.updateBagItem.bind(this));
          this.scroller1.node.on('select', this.SelectItem, this);
          this.page2 = this.find("layout/page2");
          this.scroller2 = this.page2.getChildByPath("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller2.SetHandle(this.updateBagItem.bind(this));
          this.scroller2.node.on('select', this.SelectItem, this);
          this.page3 = this.find("layout/page3");
          this.scroller3 = this.page3.getChildByPath("ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller3.SetHandle(this.updateBagItem.bind(this));
          this.scroller3.node.on('select', this.SelectItem, this);
          this.item = this.find("layout/infoBar/item").addComponent(_crd && BagItem1 === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem1) : BagItem1);
          this.selectName = this.find("layout/infoBar/name", Label);
          this.selectDesc = this.find("layout/infoBar/desc", Label);
          this.selectHas = this.find("layout/infoBar/has", Label);
          this.empty = this.find("layout/infoBar/empty");
          this.useBtns = this.find("layout/infoBar/layout").children.concat();
          this.useBtns[0].on(Input.EventType.TOUCH_END, this.openJiaoyi, this);
          this.useBtns[1].on(Input.EventType.TOUCH_END, this.openHecheng, this);
          this.useBtns[2].on(Input.EventType.TOUCH_END, this.openUse, this);
          this.useBtns[3].on(Input.EventType.TOUCH_END, this.openGet, this);
          this.navBtns = this.find("layout/nav").children.concat();

          for (var btn of this.navBtns) {
            btn.on('toggle', this.onPage, this);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.onItemChange, this);
        }

        SetPage(page, isOperat) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (isOperat === void 0) {
              isOperat = true;
            }

            if (!_this.$hasLoad) yield _this.initSub;
            if (!_this.navBtns[page]) return;
            _this.page = undefined;
            _this.navBtns[page].getComponent(Toggle).isChecked = true;

            _this.onPage(_this.navBtns[page].getComponent(Toggle), isOperat);
          })();
        }

        onShow() {
          this.SetPage(0);
        }

        flush() {}

        onHide() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.$hasLoad) yield _this2.initSub;
            _this2.scroller = undefined;
            _this2.datas = undefined;
          })();
        }

        onItemChange() {
          if (!this.node.parent) return;
          this.SetPage(this.page, false);
        }

        openJiaoyi() {// let buildings = PlayerData.GetBuildingByType(BuildingType.ji_di, 101);
          // let building = buildings ? buildings[0] : undefined;
          // let open_lv = CfgMgr.GetSysOpenCfg(3).ConditionValue1[0]
          // if(building && building.level >= open_lv){
          //     Goto(PANEL_TYPE.TradePanel);
          // }else{
          //    Tips.Show("生命树等级不足");
          // }
        }

        openHecheng() {
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.selectData.item.id);

          if (std.SubType == (_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
            error: Error()
          }), ItemSubType) : ItemSubType).currency) {
            (_crd && ComposePanel === void 0 ? (_reportPossibleCrUseOfComposePanel({
              error: Error()
            }), ComposePanel) : ComposePanel).showByItemId(std.Items);
          }
        }

        openUse() {
          var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(this.selectData.item.id);

          switch (std.Itemtpye) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).box:
              //使用宝箱
              (_crd && OpenBoxPanel1 === void 0 ? (_reportPossibleCrUseOfOpenBoxPanel({
                error: Error()
              }), OpenBoxPanel1) : OpenBoxPanel1).Show(std);
              break;

            default:
              break;
          }
        }

        openGet() {// let get_path = CfgMgr.Getitem(this.selectData.id).SkipGet
          // GetMoreWin.Show(get_path)
        }

        onPage(t, isOperat) {
          if (isOperat === void 0) {
            isOperat = true;
          }

          if (!t.isChecked) return;
          if (isOperat) this._curSelectIndex = 0;
          var page = this.navBtns.indexOf(t.node);
          if (page < 0 || page == this.page) return;
          this.page1.active = false;
          this.page2.active = false;
          this.page3.active = false; // console.log("onPage", page);

          switch (page) {
            case 0:
              // 道具
              this.datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
                error: Error()
              }), ItemSubType) : ItemSubType).prop);
              this.datas.sort(this.commSort);
              this.page1.active = true;
              this.scroller = this.scroller1;
              break;

            case 1:
              // 碎片
              this.chipSort();
              this.page2.active = true;
              this.scroller = this.scroller2;
              break;

            case 2:
              // 资源
              this.datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
                error: Error()
              }), ItemSubType) : ItemSubType).factor);
              this.datas.sort(this.commSort);
              this.page3.active = true;
              this.scroller = this.scroller3;
              break;

            case 3:
              //装备
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("功能未开启");
              this.SetPage(this.page, false);
              return;
              break;

            default:
              this.datas.length = 0;
          }

          this.page = page;
          this.updateListData(isOperat);
        }

        updateListData(isOperat) {
          if (this.scroller && this.datas) {
            this.scroller.UpdateDatas(this.datas);
            this.SelectItem(this._curSelectIndex, isOperat);
          } else {
            this._curSelectIndex = 0;
          }
        }

        resetSelect() {
          var cont = this.scroller.node.getChildByPath("view/content");
          var selectIndex = -1;
          var defSelect;

          for (var index = 0; index < cont.children.length; index++) {
            var node = cont.children[index];
            var itemIndex = node["$$index"];
            if (itemIndex == 0) defSelect = node;

            if (itemIndex == this._curSelectIndex) {
              selectIndex = this._curSelectIndex;
              node.getChildByName("select").active = true;
            } else {
              node.getChildByName("select").active = false;
            }
          }

          if (selectIndex < 0) {
            selectIndex = 0;

            if (defSelect) {
              defSelect.getChildByName("select").active = true;
            }
          }

          this._curSelectIndex = selectIndex;
        }

        commSort(a, b) {
          var stdA = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(a.item.id);
          var stdB = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(b.item.id);
          return stdB.Sort - stdA.Sort;
        }

        chipSort() {
          this.datas = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetitemBySubType((_crd && ItemSubType === void 0 ? (_reportPossibleCrUseOfItemSubType({
            error: Error()
          }), ItemSubType) : ItemSubType).currency);
          this.datas.sort(this.commSort);
        }

        updateBagItem(item, data, index) {
          var bagItem = item.getComponent(_crd && BagItem1 === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem1) : BagItem1);
          if (!bagItem) bagItem = item.addComponent(_crd && BagItem1 === void 0 ? (_reportPossibleCrUseOfBagItem({
            error: Error()
          }), BagItem1) : BagItem1);
          bagItem.setIsShowSelect(false);
          bagItem.setIsShowRedPoint(true);
          bagItem.SetData(data);
          item.getChildByName("select").active = index == this._curSelectIndex; // console.log("updateBagItem===",data);
        }
        /**
         * 选中道具
         * @param index 
         */


        SelectItem(index, isOperat) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (isOperat === void 0) {
              isOperat = true;
            }

            if (!_this3.$hasLoad) yield _this3.initSub;
            _this3._curSelectIndex = index;

            _this3.resetSelect();

            if (_this3._curSelectIndex == 0 && isOperat) _this3.scroller.ScrollToHead();
            var data = _this3.datas[_this3._curSelectIndex];
            _this3.selectData = data;

            if (data) {
              _this3.empty.active = false;
              _this3.item.node.getComponent(Toggle).interactable = false;

              _this3.item.SetData(data);

              var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(data.item.id);
              _this3.selectName.string = std.ItemName;
              _this3.selectDesc.string = std.Remark;
              var count = data.item.count;

              if (std.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                error: Error()
              }), ItemType) : ItemType).money) {
                count = count / 10000;
              }

              _this3.selectHas.string = "\u5DF2\u62E5\u6709\uFF1A" + count;
              var btnNode;
              var redNode;

              for (var i = 0; i < _this3.useBtns.length; i++) {
                btnNode = _this3.useBtns[i];

                if (std.Button.indexOf(i + 1) != -1) {
                  btnNode.active = true;
                  redNode = btnNode.getChildByName("red_point"); // if(redNode){
                  //     if(i == 1){//碎片红点
                  //         if (std.Type == ThingType.ThingTypeItem && std.Itemtpye == ItemType.shard) {
                  //             redNode.active = data.count >= std.ItemEffect3;
                  //         }else{
                  //             redNode.active = false;
                  //         }
                  //     }else if(i == 2){//宝箱红点
                  //         if (std.Type == ThingType.ThingTypeItem && std.Itemtpye == ItemType.box) {
                  //             redNode.active = true;
                  //         }else{
                  //             redNode.active = false;
                  //         }
                  //     }
                  // }
                } else {
                  btnNode.active = false;
                }
              }
            } else {
              _this3.empty.active = true;
            }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb32c15f313ac32d7a1cf56a8aac42ba61f1e704.js.map