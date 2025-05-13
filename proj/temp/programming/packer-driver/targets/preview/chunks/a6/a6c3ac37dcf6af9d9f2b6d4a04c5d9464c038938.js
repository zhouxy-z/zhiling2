System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EditBox, Input, Label, ScrollView, Toggle, Panel, AutoScroller, Session, MsgTypeSend, SFriendSortType, FriendSortPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../utils/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgTypeSend(extras) {
    _reporterNs.report("MsgTypeSend", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFriendSortType(extras) {
    _reporterNs.report("SFriendSortType", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  _export("FriendSortPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Label = _cc.Label;
      ScrollView = _cc.ScrollView;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      MsgTypeSend = _unresolved_5.MsgTypeSend;
    }, function (_unresolved_6) {}, function (_unresolved_7) {
      SFriendSortType = _unresolved_7.SFriendSortType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be270P8og1LHr5GUTP+f+1f", "FriendSortPanel", undefined);

      __checkObsolete__(['Button', 'Component', 'EditBox', 'EventHandler', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'find', 'instantiate', 'path', 'sp', 'tween', 'view']);

      _export("FriendSortPanel", FriendSortPanel = class FriendSortPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/friend/FriendSortPanel";
          this.sortListNode = null;
          this.filtrateListNode = null;
          this.sortList = null;
          this.filtrateList = null;
          // private tittle:Label;
          this.serch = null;
          this.nav = null;
          this.sortData = [{
            id: (_crd && SFriendSortType === void 0 ? (_reportPossibleCrUseOfSFriendSortType({
              error: Error()
            }), SFriendSortType) : SFriendSortType).SortDailyOutputDesc,
            string: "\u672C\u65E5\u6536\u76CA\u4ECE\u9AD8\u5230\u4F4E"
          }, {
            id: (_crd && SFriendSortType === void 0 ? (_reportPossibleCrUseOfSFriendSortType({
              error: Error()
            }), SFriendSortType) : SFriendSortType).SortDailyOutputAsc,
            string: "\u672C\u65E5\u6536\u76CA\u4ECE\u4F4E\u5230\u9AD8"
          }, {
            id: (_crd && SFriendSortType === void 0 ? (_reportPossibleCrUseOfSFriendSortType({
              error: Error()
            }), SFriendSortType) : SFriendSortType).SortTotalOutputDesc,
            string: "\u7D2F\u8BA1\u6536\u76CA\u4ECE\u9AD8\u5230\u4F4E"
          }, {
            id: (_crd && SFriendSortType === void 0 ? (_reportPossibleCrUseOfSFriendSortType({
              error: Error()
            }), SFriendSortType) : SFriendSortType).SortTotalOutputAsc,
            string: "\u7D2F\u8BA1\u6536\u76CA\u4F4E\u5230\u9AD8"
          }, {
            id: (_crd && SFriendSortType === void 0 ? (_reportPossibleCrUseOfSFriendSortType({
              error: Error()
            }), SFriendSortType) : SFriendSortType).SortBindTimeDesc,
            string: "\u65F6\u95F4\u4ECE\u65E9\u5230\u665A"
          }, {
            id: (_crd && SFriendSortType === void 0 ? (_reportPossibleCrUseOfSFriendSortType({
              error: Error()
            }), SFriendSortType) : SFriendSortType).SortBindTimeAsc,
            string: "\u65F6\u95F4\u4ECE\u665A\u5230\u65E9"
          }];
          this.sortvipData = [{
            id: 1,
            string: "\u5F00\u901A\u6743\u76CA\u5361"
          }];
          // private lastSortType:number;
          // private latSortSearch:string;
          this.callBcak = void 0;
          this.selectSortType = void 0;
          this.pageSize = void 0;
          this.filter_type = 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("panel/closeBtn");
          this.sortListNode = this.find("panel/sortList");
          this.filtrateListNode = this.find("panel/filtrateList");
          this.sortList = this.find("panel/sortList/leftLayout");
          this.filtrateList = this.find("panel/filtrateList/leftLayout"); // this.tittle  = this.find("panel/sortList/title",Label);

          this.serch = this.find("panel/serch");
          this.nav = this.find("panel/nav");
          this.onBtnEvent();
        }

        onBtnEvent() {
          this.nav.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.setNav(index);
            });
          });
          this.serch.getChildByName("EditBox").on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
          this.sortList.getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller).SetHandle(this.updateSortItem.bind(this));
          this.filtrateList.getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller).SetHandle(this.updateFiltrateItem.bind(this)); // this.filtrateList.getComponent(AutoScroller).node.on('select', this.onSelect, this);
        }

        onShow() {
          this.nav.children[0].getComponent(Toggle).isChecked = true;
        }

        flush(page_size, callback, sort_type, search, filter_type) {
          this.pageSize = page_size;
          this.callBcak = callback;
          this.selectSortType = sort_type; // this.latSortSearch = search;  

          this.filter_type = filter_type;
          this.updataSortDatas(0);
          this.setNav(0);
        }

        setNav(index) {
          // this.sortList.getComponent(ScrollView).content.removeAllChildren();  
          this.serch.active = index != 0;
          this.sortListNode.active = index == 0;
          this.filtrateListNode.active = index == 1; // this.tittle.string = (index == 0) ? "排序搜索" : "筛选";

          this.serch.getComponentInChildren(EditBox).string = "";
          this.resetNode(index);
        }

        resetNode(index) {
          if (index == 0) {
            var item = this.sortList.getComponent(ScrollView).content.children;
            item.forEach(item => {
              item.getSiblingIndex() + 1;

              if (this.selectSortType == item.getSiblingIndex() + 1) {
                item.getComponent(Toggle).isChecked = true;
              }
            });
          } else {
            var filter_item = this.filtrateList.getComponent(ScrollView).content.children;
            filter_item.forEach(filter_item => {
              filter_item.getSiblingIndex() + 1;

              if (this.filter_type == filter_item.getSiblingIndex() + 1) {
                filter_item.getComponent(Toggle).isChecked = true;
              }
            });
          }
        }

        updataSortDatas(index) {
          // if(index == 0){
          this.sortList.getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller).UpdateDatas(this.sortData); // }else{   

          this.filtrateList.getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller).UpdateDatas(this.sortvipData); // }
        }
        /**搜索栏事件 */


        onEditEnd() {}

        updateSortItem(item, data) {
          item.getComponent(Toggle).isChecked = false;
          item.getChildByName("title").getComponent(Label).string = "" + data.string;
          item.off(Toggle.EventType.TOGGLE);
          item.on(Toggle.EventType.TOGGLE, toggle => {
            if (toggle.getComponent(Toggle).isChecked) {
              this.selectSortType = data.id;
            }
          });
        }

        updateFiltrateItem(item, data) {
          item.getComponent(Toggle).isChecked = false;
          item.getChildByName("title").getComponent(Label).string = "" + data.string;
          item.off(Toggle.EventType.TOGGLE);
          item.on(Toggle.EventType.TOGGLE, toggle => {
            if (toggle.getComponent(Toggle).isChecked) {
              this.filter_type = data.id;
            } else {
              this.filter_type = 0;
            }
          });
        }

        onSend() {
          var str = this.serch.getComponentInChildren(EditBox).string;
          var data = {
            type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
              error: Error()
            }), MsgTypeSend) : MsgTypeSend).GetDownlinesRequest,
            data: {
              page: 1,
              page_size: this.pageSize,
              sort_type: this.selectSortType,
              filter_type: this.filter_type,
              search_player_id: str
            }
          };
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(data);
        } // protected  onSelect(index: number, item: Node):void {
        //     console.log(item.getComponent(Toggle).isChecked)
        //     this.filter_type = item.getComponent(Toggle).isChecked ? 1 : 0;
        // }


        onHide() {
          this.onSend();
          var playerid = this.serch.getComponentInChildren(EditBox).string;
          this.callBcak(this.selectSortType, playerid, this.filter_type);
          this.sortList.getComponent(ScrollView).content.removeAllChildren();
          this.filtrateList.getComponent(ScrollView).content.removeAllChildren();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6c3ac37dcf6af9d9f2b6d4a04c5d9464c038938.js.map