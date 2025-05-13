System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, Label, EventMgr, Evt_GetDownLineInfo, Session, AutoScroller, Panel, SFriendSortType, Req, Route, FriendListPanel, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_GetDownLineInfo(extras) {
    _reporterNs.report("Evt_GetDownLineInfo", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFriendSortType(extras) {
    _reporterNs.report("SFriendSortType", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGetDownlines(extras) {
    _reporterNs.report("SGetDownlines", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  _export("FriendListPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Input = _cc.Input;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
      Evt_GetDownLineInfo = _unresolved_2.Evt_GetDownLineInfo;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      AutoScroller = _unresolved_4.AutoScroller;
    }, function (_unresolved_5) {
      Panel = _unresolved_5.Panel;
    }, function (_unresolved_6) {
      SFriendSortType = _unresolved_6.SFriendSortType;
    }, function (_unresolved_7) {
      Req = _unresolved_7.Req;
      Route = _unresolved_7.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38b2aUexLtE+4lcRUcYjdWz", "FriendListPanel", undefined);

      __checkObsolete__(['Button', 'Input', 'Label', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec3', 'instantiate', 'path']);

      _export("FriendListPanel", FriendListPanel = class FriendListPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/friend/FriendListPanel";
          this.friendNum = void 0;
          this.vipNum = void 0;
          this.filtrateBtn = void 0;
          this.ScrollView = void 0;
          this.pageBg = void 0;
          this.pageLabel = void 0;
          this.left = void 0;
          this.right = void 0;
          this.noneListCont = void 0;
          this.tipsNode = void 0;
          this.clone_item = void 0;
          this.maxPage = void 0;
          this.curPage = 1;
          this.pageSize = 5;
          this.sortType = void 0;
          this.searchPlayerID = "";
          this.filter_type = 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("frame/closeBtn");
          this.noneListCont = this.find("frame/noneListCont");
          this.friendNum = this.find("frame/friendInfoPage/friendNum", Label);
          this.vipNum = this.find("frame/friendInfoPage/vipNum", Label);
          this.filtrateBtn = this.find("frame/friendInfoPage/filtrateBtn", Button);
          this.ScrollView = this.find("frame/ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
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
          });
          this.right.on(Input.EventType.TOUCH_END, () => {
            this.curPage++;

            if (this.curPage <= this.maxPage) {
              this.SendSessionView();
            } else {
              this.curPage--;
            }
          });
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_GetDownLineInfo === void 0 ? (_reportPossibleCrUseOfEvt_GetDownLineInfo({
            error: Error()
          }), Evt_GetDownLineInfo) : Evt_GetDownLineInfo, this.updateFriendData, this);
          this.sortType = (_crd && SFriendSortType === void 0 ? (_reportPossibleCrUseOfSFriendSortType({
            error: Error()
          }), SFriendSortType) : SFriendSortType).SortBindTimeAsc;
          this.filter_type = 0;
          this.SendSessionView();
        }

        async flush(maxFriendNum) {
          this.friendNum.string = maxFriendNum + "";
          this.vipNum.string = "暂无";
          this.curPage = 1; // let rights_list = CfgMgr.GetEquityCardTab(1);
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

        updateFriendData(data) {
          // let count = Math.ceil(data.total_count / this.pageSize);
          // this.maxPage = count == 0 ? 1 : count; 
          // this.pageLabel.string = this.curPage + "/" + this.maxPage;
          // this.noneListCont.active = false;
          // if(!data.downlines || data.downlines.length == 0 ){
          //     this.noneListCont.active = true;
          // }
          this.ScrollView.UpdateDatas(data);
        }

        updateItem(item, data, index) {
          // let headItem:HeadItem = item.getChildByPath("frame/HeadItem").addComponent(HeadItem);
          let player_name = item.getChildByPath("frame/player_name").getComponent(Label);
          let friendIncomeNum = item.getChildByPath("frame/friendNode/todayNode/friendIncomeNum").getComponent(Label);
          let friendAllIncomeNum = item.getChildByPath("frame/friendNode/allNode/friendAllIncomeNum").getComponent(Label);
          let friendNode = item.getChildByPath("frame/friendNode");
          let incomeNode = item.getChildByPath("frame/incomeNode"); // let rightsBtn = item.getChildByPath("frame/rightsBtn")
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

          player_name.string = "绑定：" + data.playerInfo.nickName + data.playerInfo.playerId + "被绑定：" + data.playerInfo.inviterId + "层级：" + data.friendLevel; // friendIncomeNum.string =  ToFixed(data.daily_output, 4) + "";
          // friendAllIncomeNum.string = ToFixed(data.total_output, 4) + "";
        }

        SendSessionView() {
          // let data = {
          //     type: MsgTypeSend.GetDownlinesRequest,
          //     data: { page: this.curPage, page_size: this.pageSize, sort_type: this.sortType, filter_type: this.filter_type,  search_player_id: this.searchPlayerID }
          // }
          // Session.Send(data);
          let friend_data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["user.protocol.getfriends"](); // friend_data.uid = "";

          friend_data.level = 1;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["user.protocol.getfriends"], friend_data);
        }

        callBack(sort_type, playerid, filter_type) {
          this.sortType = sort_type;
          this.searchPlayerID = playerid;
          this.filter_type = filter_type;
          this.curPage = 1;
        }

        onFiltrate() {// FriendSortPanel.Show(this.pageSize, this.callBack.bind(this), this.sortType, this.searchPlayerID, this.filter_type);
        }

        onHide(...args) {
          this.curPage = 1;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_GetDownLineInfo === void 0 ? (_reportPossibleCrUseOfEvt_GetDownLineInfo({
            error: Error()
          }), Evt_GetDownLineInfo) : Evt_GetDownLineInfo);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a53d0761a6bb375ec0f95c94bda1775d6d082e45.js.map