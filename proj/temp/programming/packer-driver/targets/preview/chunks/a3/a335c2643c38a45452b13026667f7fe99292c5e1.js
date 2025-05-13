System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Panel, AutoScroller, FriendIncomeListPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIncomeRecordInfo(extras) {
    _reporterNs.report("SIncomeRecordInfo", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSIncomeRecords(extras) {
    _reporterNs.report("SIncomeRecords", "../player/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  _export("FriendIncomeListPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "653edrkTU1D3YAlExpxtZhc", "FriendIncomeListPanel", undefined);

      __checkObsolete__(['Button', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'UITransform', 'instantiate', 'path', 'v3']);

      _export("FriendIncomeListPanel", FriendIncomeListPanel = class FriendIncomeListPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/friend/FriendIncomeListPanel";
          this.incomeNum = void 0;
          this.ScrollView = void 0;
          this.pageLabel = void 0;
          this.left = void 0;
          this.right = void 0;
          this.noneListCont = void 0;
          this.maxPage = void 0;
          this.maxCount = 1;
          this.curPage = 1;
          this.pageSize = 5;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("frame/closeBtn");
          this.noneListCont = this.find("frame/noneListCont");
          this.incomeNum = this.find("frame/incomeNode/incomeNum", Label);
          this.ScrollView = this.find("frame/ScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.ScrollView.SetHandle(this.updateItem.bind(this));
          this.pageLabel = this.find("frame/pageBg/Label", Label);
          this.left = this.find("frame/pageBg/left");
          this.right = this.find("frame/pageBg/right"); // EventMgr.on(Evt_GetIncomeRecords, this.updateLayer, this);

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
          this.SendSessionView();
        }

        flush(income) {// this.incomeNum.string = ToFixed(income, 4) + "";

          return _asyncToGenerator(function* () {
            if (income === void 0) {
              income = 0;
            }
          })();
        }

        updateItem(item, data, index) {// let headItem:HeadItem = item.getChildByPath("frame/HeadItem").addComponent(HeadItem);
          // let income_bg = item.getChildByPath("frame/income_bg")
          // let player_name = item.getChildByPath("frame/player_name").getComponent(Label);
          // let friendNode = item.getChildByPath("frame/friendNode")
          // let incomeNum = item.getChildByPath("frame/incomeNode/lbl/incomeNum").getComponent(Label);
          // let year_time = item.getChildByPath("frame/incomeNode/timeNode/year_time").getComponent(Label);
          // let hours_time = item.getChildByPath("frame/incomeNode/timeNode/hours_time").getComponent(Label);
          // let incomeNode = item.getChildByPath("frame/incomeNode")
          // let viewInfo:SPlayerViewInfo = {player_id: data.player_id};
          // headItem.SetData(viewInfo);
          // income_bg.getComponent(UITransform).width = 430;
          // friendNode.active = false;
          // incomeNode.active = true;
          // // icon.spriteFrame = await ResMgr.LoadResAbSub(path.join(folder_head_round, data.icon_url, "spriteFrame"), SpriteFrame);
          // player_name.string = data.name
          // incomeNum.string = ToFixed(data.amount, 4) + "";
          // let datetime = DateUtils.TimestampToDate(data.timestamp * 1000)
          // let m = parseInt(datetime[1]) < 10 ? `0${datetime[1]}` : `${datetime[1]}`;
          // let d = parseInt(datetime[2]) < 10 ? `0${datetime[2]}` : `${datetime[2]}`;
          // let h = parseInt(datetime[3]) < 10 ? `0${datetime[3]}` : `${datetime[3]}`;
          // let min = parseInt(datetime[4]) < 10 ? `0${datetime[4]}` : `${datetime[4]}`;
          // let s = parseInt(datetime[5]) < 10 ? `0${datetime[5]}` : `${datetime[5]}`;
          // year_time.string = datetime[0] + "." + m + "." + d;
          // hours_time.string = h + ":" + min + ":" + s;

          return _asyncToGenerator(function* () {})();
        }

        SendSessionView() {// let data = {
          //     type: MsgTypeSend.GetIncomeRecordsRequest,
          //     data: { page: this.curPage, page_size: this.pageSize },
          // }
          // Session.Send(data);
        }

        updateLayer(data) {
          this.maxCount = Math.ceil(data.total / this.pageSize);
          this.maxPage = this.maxCount > 0 ? this.maxCount : 1;
          this.pageLabel.string = this.curPage + "/" + this.maxPage;
          this.noneListCont.active = false;

          if (!data.income_records || data.income_records.length == 0) {
            this.noneListCont.active = true;
          }

          this.ScrollView.UpdateDatas(data.income_records);
        }

        onHide() {
          this.curPage = 1;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a335c2643c38a45452b13026667f7fe99292c5e1.js.map