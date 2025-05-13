System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Input, Label, Sprite, SpriteFrame, Toggle, Route, Session, EventMgr, Evt_Card_Back_Update, Evt_Card_Group_Update, Evt_Card_Head_Update, PlayerData, ResMgr, cardBack, Goto, CfgMgr, CardGroupHead, AutoScroller, CardsGroupSetting, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Back_Update(extras) {
    _reporterNs.report("Evt_Card_Back_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Head_Update(extras) {
    _reporterNs.report("Evt_Card_Head_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcardBack(extras) {
    _reporterNs.report("cardBack", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupHead(extras) {
    _reporterNs.report("CardGroupHead", "./CardGroupHead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  _export("CardsGroupSetting", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Input = _cc.Input;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Route = _unresolved_2.Route;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
      Evt_Card_Back_Update = _unresolved_4.Evt_Card_Back_Update;
      Evt_Card_Group_Update = _unresolved_4.Evt_Card_Group_Update;
      Evt_Card_Head_Update = _unresolved_4.Evt_Card_Head_Update;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      ResMgr = _unresolved_6.ResMgr;
      cardBack = _unresolved_6.cardBack;
    }, function (_unresolved_7) {
      Goto = _unresolved_7.Goto;
    }, function (_unresolved_8) {
      CfgMgr = _unresolved_8.CfgMgr;
    }, function (_unresolved_9) {
      CardGroupHead = _unresolved_9.CardGroupHead;
    }, function (_unresolved_10) {
      AutoScroller = _unresolved_10.AutoScroller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37c7cDJVUNJp570VGTrPmWT", "CardsGroupSetting", undefined);

      __checkObsolete__(['Button', 'Component', 'EditBox', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'UITransform', 'Vec3', 'Widget', 'instantiate', 'js', 'size', 'view']);

      _export("CardsGroupSetting", CardsGroupSetting = class CardsGroupSetting extends Component {
        constructor() {
          super(...arguments);
          this.back_btn = void 0;
          this.navBtns = void 0;
          this.ornamentNode = void 0;
          this.sortBtn = void 0;
          this.sortNode = void 0;
          this.sortNav = void 0;
          this.sortNodeBack = void 0;
          this.filtrateBtn = void 0;
          this.filtrateNode = void 0;
          this.filtrateNav = void 0;
          this.filtrateNodeBack = void 0;
          this.btnList = void 0;
          this.headScroller = void 0;
          this.backScroller = void 0;
          this.noneListCont = void 0;
          this.card_back = void 0;
          this.headitem = void 0;
          this.namelabel = void 0;
          this.tag1 = void 0;
          this.tag2 = void 0;
          this.filtrate_type = void 0;
          this.sort_type = void 0;
          this.callback = void 0;
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          this.back_btn = this.node.getChildByName("backBtn");
          this.back_btn.on(Input.EventType.TOUCH_END, this.Hide, this);
          this.navBtns = this.node.getChildByName("nav").children.concat();

          for (var btn of this.navBtns) {
            btn.off('toggle', this.onPage, this);
            btn.on('toggle', this.onPage, this);
          }

          this.ornamentNode = this.node.getChildByName("ornamentNode");
          this.btnList = this.node.getChildByPath("ornamentNode/btnList").children.concat();

          for (var _btn of this.btnList) {
            _btn.off(Button.EventType.CLICK, this.onBtnPage, this);

            _btn.on(Button.EventType.CLICK, this.onBtnPage, this);
          }

          this.noneListCont = this.node.getChildByPath("ornamentNode/noneListCont");
          this.headScroller = this.node.getChildByPath("ornamentNode/cardHeadScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.headScroller.SetHandle(this.updateHeadItem.bind(this));
          this.headScroller.node.on('select', this.onSelectHead, this);
          this.backScroller = this.node.getChildByPath("ornamentNode/cardBackScrollView").getComponent(_crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.backScroller.SetHandle(this.updateCardBackItem.bind(this));
          this.backScroller.node.on('select', this.onSelectHead, this);
          this.card_back = this.node.getChildByPath("ornamentNode/showNode/card_back").getComponent(Sprite);
          this.headitem = this.node.getChildByPath("ornamentNode/showNode/headitem").addComponent(_crd && CardGroupHead === void 0 ? (_reportPossibleCrUseOfCardGroupHead({
            error: Error()
          }), CardGroupHead) : CardGroupHead);
          this.namelabel = this.node.getChildByPath("ornamentNode/showNode/name_bg/namelabel").getComponent(Label);
          this.sortNode = this.node.getChildByPath("ornamentNode/sortNode");
          this.sortNav = this.node.getChildByPath("ornamentNode/sortNode/bg/nav").children.concat();
          this.sortNav.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              node.getComponent(Toggle).isChecked = true;
              this.sort_type = index;
              this.setSort();
            }, this);
          });
          this.sortBtn = this.node.getChildByPath("ornamentNode/sortBtn").getComponent(Button);
          this.sortBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.sortNodeBack = this.node.getChildByPath("ornamentNode/sortNode/back");
          this.sortNodeBack.on(Input.EventType.TOUCH_END, () => {
            this.sortNode.active = false;
            this.sortBtn.node.getChildByName("close").active = true;
            this.sortBtn.node.getChildByName("open").active = false;
          }, this);
          this.filtrateNode = this.node.getChildByPath("ornamentNode/filtrateNode");
          this.filtrateNav = this.node.getChildByPath("ornamentNode/filtrateNode/bg/nav").children.concat();
          this.filtrateNav.forEach((node, index) => {
            node.on(Toggle.EventType.TOGGLE, () => {
              this.filtrate_type = index;
              this.setFiltrate();
            }, this);
          });
          this.filtrateBtn = this.node.getChildByPath("ornamentNode/filtrateBtn").getComponent(Button);
          this.filtrateBtn.node.on(Button.EventType.CLICK, this.onClick, this);
          this.filtrateNodeBack = this.node.getChildByPath("ornamentNode/filtrateNode/back");
          this.filtrateNodeBack.on(Input.EventType.TOUCH_END, () => {
            this.filtrateNode.active = false;
            this.filtrateBtn.node.getChildByName("close").active = true;
            this.filtrateBtn.node.getChildByName("open").active = false;
          }, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Head_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Head_Update({
            error: Error()
          }), Evt_Card_Head_Update) : Evt_Card_Head_Update, this.setHeadList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Back_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Back_Update({
            error: Error()
          }), Evt_Card_Back_Update) : Evt_Card_Back_Update, this.setBackList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
            error: Error()
          }), Evt_Card_Group_Update) : Evt_Card_Group_Update, this.updateScroll, this);
          this.ornamentNode.active = false;
          this.hasLoad = true;
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          var thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }

        SetPage(page, callBack) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.hasLoad) yield _this.loadSub;
            if (!_this.navBtns[page]) return;
            _this.callback = callBack;
            _this.tag1 = undefined;
            _this.navBtns[page].getComponent(Toggle).isChecked = true;

            _this.onPage(_this.navBtns[page].getComponent(Toggle));
          })();
        }

        onPage(t) {
          var page = this.navBtns.indexOf(t.node);
          if (page < 0 || page == this.tag1) return;
          this.tag1 = page;

          if (page == 0) {
            this.ornamentNode.active = false;
          } else if (page == 1) {
            this.ornamentNode.active = true;
            this.onBtnPage(this.btnList[0].getComponent(Button));
            this.setRightData();
          }
        }

        onBtnPage(t) {
          var page = this.btnList.indexOf(t.node);
          if (page < 0 || page == this.tag2) return;
          this.tag2 = page;
          this.updatePage();
        }

        updatePage() {
          for (var index = 0; index < this.btnList.length; index++) {
            var element = this.btnList[index];
            var unCheckmark = element.getChildByName("unCheckmark");
            var Checkmark = element.getChildByName("Checkmark");
            Checkmark.active = index == this.tag2;
            unCheckmark.active = index != this.tag2;
          }

          this.headScroller.node.active = false;
          this.backScroller.node.active = false;

          if (this.tag2 == 0) {
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.getavatarinfos"]);
            this.headScroller.node.active = true;
          } else if (this.tag2 == 1) {
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.getcardbackinfos"]);
            this.backScroller.node.active = true;
          }
        }
        /**设置头像 */


        setHeadList(data_list) {
          var data = data_list ? data_list : (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardHeadList;
          var list = [];

          for (var _key in data) {
            var element = data[_key];
            list.push(element);
          }

          this.headScroller.UpdateDatas(list);
        }
        /**设置卡背 */


        setBackList(data_list) {
          var data = data_list ? data_list : (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cardBackList;
          var list = [];

          for (var _key2 in data) {
            var element = data[_key2];
            list.push(element);
          }

          this.backScroller.UpdateDatas(list);
        }

        updateHeadItem(item, data) {
          var head = item.getComponent(_crd && CardGroupHead === void 0 ? (_reportPossibleCrUseOfCardGroupHead({
            error: Error()
          }), CardGroupHead) : CardGroupHead);
          if (!head) head = item.addComponent(_crd && CardGroupHead === void 0 ? (_reportPossibleCrUseOfCardGroupHead({
            error: Error()
          }), CardGroupHead) : CardGroupHead);
          var is_use = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id).avatarId == data.avatarId;
          head.SetData(data.avatarId, data.like, is_use);
        }

        updateCardBackItem(item, data) {
          var icon = item.getChildByName("icon").getComponent(Sprite);
          var favorite = item.getChildByName("favorite").getComponent(Sprite);
          var use = item.getChildByName("use").getComponent(Sprite);
          var icon_spr = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardBackCfgById(data.cardBackId).icon;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub((_crd && cardBack === void 0 ? (_reportPossibleCrUseOfcardBack({
            error: Error()
          }), cardBack) : cardBack) + icon_spr + "/spriteFrame", SpriteFrame, res => {
            icon.spriteFrame = res;
          });
          favorite.node.active = data.like;
          use.node.active = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id).cardBackId == data.cardBackId;
        }

        onSelectHead(index, item, data) {
          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)("cardGroupSettingTips", this.tag2 + 1, data);
        }

        updateScroll() {
          this.updatePage();
          this.setRightData();
        }

        setRightData() {
          var data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id);

          if (data) {
            var icon_spr = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardBackCfgById(data.cardBackId).icon;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub((_crd && cardBack === void 0 ? (_reportPossibleCrUseOfcardBack({
              error: Error()
            }), cardBack) : cardBack) + icon_spr + "/spriteFrame", SpriteFrame, res => {
              this.card_back.spriteFrame = res;
            });
            this.namelabel.string = data.name;
            var head_data = null;

            for (var _key3 in (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardHeadList) {
              var element = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardHeadList[_key3];

              if (element.avatarId == data.avatarId) {
                head_data = element;
                break;
              }
            }

            this.headitem.SetData(data.avatarId, head_data && head_data.like, true);
          }
        }

        setSort() {
          var lsit = this.SortData();
          var data_list = [];

          if (this.tag2 == 0) {
            for (var index = 0; index < lsit.length; index++) {
              var element = lsit[index];
              data_list.push((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardHeadList[element]);
            }

            this.headScroller.UpdateDatas(data_list);
          } else {
            for (var _index = 0; _index < lsit.length; _index++) {
              var _element = lsit[_index];
              data_list.push((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardBackList[_element]);
            }

            this.backScroller.UpdateDatas(data_list);
          }
        }

        SortData() {
          var list = null;
          var data = null;

          if (this.tag2 == 0) {
            list = Object.keys((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardHeadList);
            data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardHeadList;
          } else {
            list = Object.keys((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardBackList);
            data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardBackList;
          }

          switch (this.sort_type) {
            case 0:
              //取消排序
              list.sort((a, b) => {
                return parseInt(a) - parseInt(b);
              });
              break;

            case 1:
              //时间最新
              list.sort((a, b) => {
                var a_data = data[a];
                var b_data = data[b];
                return b_data.createdAt - a_data.createdAt;
              });
              break;

            case 2:
              //时间最旧
              list.sort((a, b) => {
                var a_data = data[a];
                var b_data = data[b];
                return a_data.createdAt - b_data.createdAt;
              });
              break;

            default:
              break;
          }

          return list;
        }

        setFiltrate() {
          var is_select = this.filtrateNav[this.filtrate_type].getComponent(Toggle).isChecked;

          if (this.tag2 == 0) {
            var data_list = {};
            var list = Object.keys((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardHeadList);

            for (var index = 0; index < list.length; index++) {
              var element = list[index];

              if (is_select) {
                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cardHeadList[element].like) {
                  data_list[element] = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).cardHeadList[element];
                }
              } else {
                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cardHeadList[element]) {
                  data_list[element] = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).cardHeadList[element];
                }
              }
            }

            this.setHeadList(data_list);
          } else {
            var _data_list = {};

            var _list = Object.keys((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardBackList);

            for (var _index2 = 0; _index2 < _list.length; _index2++) {
              var _element2 = _list[_index2];

              if (is_select) {
                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cardBackList[_element2].like) {
                  _data_list[_element2] = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).cardBackList[_element2];
                }
              } else {
                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cardBackList[_element2]) {
                  _data_list[_element2] = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).cardBackList[_element2];
                }
              }
            }

            this.setBackList(_data_list);
          }
        }

        onClick(btn) {
          var name = btn.node.name;

          switch (name) {
            case "filtrateBtn":
              var is_filtrate_open = this.filtrateBtn.node.getChildByName("open").active;
              this.filtrateNode.active = !is_filtrate_open;
              this.filtrateBtn.node.getChildByName("close").active = is_filtrate_open;
              this.filtrateBtn.node.getChildByName("open").active = !is_filtrate_open;
              break;

            case "sortBtn":
              var is_sort_open = this.filtrateBtn.node.getChildByName("open").active;
              this.sortNode.active = !is_sort_open;
              this.sortBtn.node.getChildByName("close").active = is_sort_open;
              this.sortBtn.node.getChildByName("open").active = !is_sort_open;
              break;

            default:
              break;
          }
        }

        Hide() {
          if (this.callback) {
            this.callback();
            this.callback = null;
          }

          this.ornamentNode.active = false;
          this.node.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c98bbd3727cc6e91412cd2e0aa787f46b0c27b2.js.map