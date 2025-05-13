System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, Toggle, UIOpacity, Panel, PlayerData, Tips, AutoScroller, Card, CardType, Second, ResMgr, CfgMgr, MsgTypeSend, Session, EventMgr, Evt_UpdateFriendAssistRole, TradeHeroPanel, SelectHeroPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSAssistRoleInfo(extras) {
    _reporterNs.report("SAssistRoleInfo", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPlayerDataRole(extras) {
    _reporterNs.report("SPlayerDataRole", "../roleModule/PlayerStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../login/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../utils/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../home/panel/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../home/panel/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgTypeSend(extras) {
    _reporterNs.report("MsgTypeSend", "../../MsgType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_UpdateFriendAssistRole(extras) {
    _reporterNs.report("Evt_UpdateFriendAssistRole", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTradeHeroPanel(extras) {
    _reporterNs.report("TradeHeroPanel", "../trade/TradeHeroPanel", _context.meta, extras);
  }

  _export("SelectHeroPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.default;
    }, function (_unresolved_4) {
      Tips = _unresolved_4.Tips;
    }, function (_unresolved_5) {
      AutoScroller = _unresolved_5.AutoScroller;
    }, function (_unresolved_6) {
      Card = _unresolved_6.Card;
      CardType = _unresolved_6.CardType;
    }, function (_unresolved_7) {
      Second = _unresolved_7.Second;
    }, function (_unresolved_8) {
      ResMgr = _unresolved_8.ResMgr;
    }, function (_unresolved_9) {
      CfgMgr = _unresolved_9.CfgMgr;
    }, function (_unresolved_10) {
      MsgTypeSend = _unresolved_10.MsgTypeSend;
    }, function (_unresolved_11) {
      Session = _unresolved_11.Session;
    }, function (_unresolved_12) {
      EventMgr = _unresolved_12.EventMgr;
      Evt_UpdateFriendAssistRole = _unresolved_12.Evt_UpdateFriendAssistRole;
    }, function (_unresolved_13) {
      TradeHeroPanel = _unresolved_13.TradeHeroPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1dd15PD+BBE5q0sxRoxVjpz", "SelectHeroPanel", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity']);

      _export("SelectHeroPanel", SelectHeroPanel = class SelectHeroPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/SelectHeroPanel";
          this.navBar = void 0;
          this.tile = void 0;
          this.scroller = void 0;
          this.noneListCont = void 0;
          this.friends_scroller = void 0;
          this.my_lbl = void 0;
          this.friend_lbl = void 0;
          this.type = 0;
          this.limit = 0;
          this.callback = void 0;
          this.isShowFriend = void 0;
          this.datas = void 0;
          this.friend_datas = void 0;
          this.page = 1;
          this.page_size = 12;
          this.tab = void 0;
          this.all_select = 0;
          this.is_show_role_info = void 0;
          this.selects = [];
          this.selectsMer = [];
          this.is_jidi = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.navBar = this.find("frame/navBar");
          this.tile = this.find("tileBar/buildName", Label);
          this.my_lbl = this.find("frame/navBar/btn1/my_lbl", Label);
          this.friend_lbl = this.find("frame/navBar/btn2/friend_lbl", Label);
          this.noneListCont = this.find("noneListCont");
          this.scroller = this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.scroller.SetHandle(this.updateItem.bind(this));
          this.scroller.node.on('select', this.onSelect, this);
          this.friends_scroller = this.find("friendScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.friends_scroller.SetHandle(this.updateItem.bind(this));
          this.friends_scroller.node.on('select', this.onFrienSelect, this);
          this.find("okBtn").on(Input.EventType.TOUCH_END, this.onOk, this);
          this.navBar.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.setNav(index);
            });
          });
          this.CloseBy("closeBtn");
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_UpdateFriendAssistRole === void 0 ? (_reportPossibleCrUseOfEvt_UpdateFriendAssistRole({
            error: Error()
          }), Evt_UpdateFriendAssistRole) : Evt_UpdateFriendAssistRole, this.updateRoleData, this);
        }

        static SelectXiLian(roles, selects, limit, callBack) {
          this.Show(roles, selects, limit, callBack, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).XiLian);
        }

        static SelectJinHua(roles, selects, limit, callBack) {
          this.Show(roles, selects, limit, callBack, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).JinHua);
        }

        static SelectMerge(roles, selects, limit, callBack) {
          this.Show(roles, selects, limit, callBack, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Merge);
        }

        static SelectDefense(roles, selects, limit, callBack) {
          this.Show(roles, selects, limit, callBack, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).defend);
        }

        static SelectWork(roles, selects, limit, callBack, is_ji_di) {
          if (is_ji_di === void 0) {
            is_ji_di = false;
          }

          this.Show(roles, selects, limit, callBack, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Work, false, is_ji_di);
        }

        static SelectHelp(roles, selects, limit, callBack) {
          this.Show(roles, selects, limit, callBack);
        }

        flush(roles, selects, limit, callBack, cardType, isShowFriend, is_ji_di) {
          this.limit = limit;
          this.callback = callBack;
          this.datas = [];
          this.friend_datas = [];
          this.selectsMer = selects;
          this.all_select = 0;
          this.page = 1;
          this.type = cardType;
          this.isShowFriend = isShowFriend;
          this.is_jidi = is_ji_di;
          this.navBar.active = isShowFriend;
          this.is_show_role_info = false;
          this.my_lbl.string = "我的(0/" + this.limit + ")";
          this.friend_lbl.string = "好友(0/" + this.limit + ")";
          this.selects = selects;

          if (isShowFriend) {
            this.setNav(0);
            this.onSend();
          }

          for (var role of roles) {
            var data = {
              role: role,
              select: selects.indexOf(role) != -1,
              isend: false
            };
            this.datas.push(data);
          }

          if (cardType == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Merge) {
            this.tile.string = "\u9009\u62E9\u7E41\u80B2\u82F1\u96C4";

            if (selects[0] && selects.length >= 1) {
              var mainRole = null;
              this.datas.forEach(element => {
                if (element.select) mainRole = element.role;
              });
              var stds = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Get("role_quality");
              var std = null;
              stds.forEach(curStd => {
                if (curStd.MainRoleid == mainRole.type && mainRole.quality + 1 === curStd.RoleQuailty) {
                  std = curStd;
                }
              });
              var curRoles = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).getFanyuOrtherRole(mainRole, std);
              this.datas = [];

              for (var _role of curRoles) {
                var _data2 = {
                  role: _role,
                  select: selects.indexOf(_role) != -1,
                  isend: false
                };
                this.datas.push(_data2);
              } // this.datas.sort((a, b) => { return (b.select as any) - (a.select as any) });

            }
          } else if (cardType == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).XiLian) {
            this.tile.string = "\u9009\u62E9\u6D17\u7EC3\u82F1\u96C4";
          } else if (cardType == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).JinHua) {
            this.tile.string = "\u9009\u62E9\u82F1\u96C4";
          } else if (cardType == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Work) {
            this.tile.string = "\u9009\u62E9\u82F1\u96C4";
          } else if (cardType == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Friend) {
            this.tile.string = "\u52A9\u6218\u534F\u4F5C";
          } else if (cardType == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Trade) {
            this.tile.string = "\u9009\u62E9\u56DE\u6536";
            this.is_show_role_info = true;
          } else {
            this.datas.sort((a, b) => {
              return b.role.quality * 1000 + b.role.level - a.role.quality * 1000 + a.role.level;
            });
            this.tile.string = "\u9009\u62E9\u51FA\u6218\u89D2\u8272";
          }

          this.scroller.UpdateDatas(this.datas);
          this.noneListCont.active = this.datas && this.datas.length <= 0;
          this.scroller.ScrollToHead();
        }

        onShow() {}

        onHide() {
          this.scroller.node.getComponent(UIOpacity).opacity = 255;
          this.friends_scroller.node.getComponent(UIOpacity).opacity = 255; // if(this.is_show_role_info){

          (_crd && TradeHeroPanel === void 0 ? (_reportPossibleCrUseOfTradeHeroPanel({
            error: Error()
          }), TradeHeroPanel) : TradeHeroPanel).Hide(); // }
        }

        updateItem(item, data, index) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var card = item.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            if (!card) card = item.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);

            if (_this.is_jidi) {
              card.SetData(data, _this.type, _this.tab ? _this.tab == 1 : false, null, null, true);
            } else {
              card.SetData(data, _this.type, _this.tab ? _this.tab == 1 : false);
            }

            if (_this.isShowFriend) {
              _this.checkPage(data);
            }

            if (_this.type == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).Merge) {
              var state = item.getChildByName("state");
              var stateSprite = state.getComponent(Sprite);
              state.active = data.select;

              if (data.select) {
                if (_this.selects.indexOf(data.role) == 0) stateSprite.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub("sheets/fanyu/主/spriteFrame", SpriteFrame);else if (_this.selects.indexOf(data.role) == 1) stateSprite.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub("sheets/fanyu/副/spriteFrame", SpriteFrame);
              }
            }
          })();
        }

        setNav(index) {
          this.tab = index;
          this.noneListCont.active = false;

          if (index == 0) {
            this.scroller.UpdateDatas(this.datas);
            this.noneListCont.active = this.datas && this.datas.length > 0;
          } else {
            this.friends_scroller.UpdateDatas(this.friend_datas);
            this.noneListCont.active = this.friend_datas && this.friend_datas.length > 0;
          }

          this.scroller.node.active = index == 0;
          this.friends_scroller.node.active = index == 1;
        }

        onOk() {
          if (!this.scroller.node.active) {
            this.scroller.node.getComponent(UIOpacity).opacity = 0;
            this.scroller.node.active = true;
          }

          if (this.isShowFriend && !this.friends_scroller.node.active) {
            this.friends_scroller.node.getComponent(UIOpacity).opacity = 0;
            this.friends_scroller.node.active = true;
          }

          var ls = this.scroller.children;
          var selects = [];

          for (var obj of ls) {
            if (obj.getComponent(Toggle).isChecked) {
              var role = this.datas[obj['$$index']].role;
              selects.push(role);
            }
          }

          if (this.type == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Merge) {
            selects = this.selectsMer;
          }

          if (this.isShowFriend) {
            var friend_ls = this.friends_scroller.children;

            for (var f_obj of friend_ls) {
              if (f_obj.getComponent(Toggle).isChecked) {
                var f_role = this.friend_datas[f_obj['$$index']].role;
                selects.push(f_role);
              }
            }
          }

          this.Hide();
          var callback = this.callback;
          this.callback = undefined;
          callback == null || callback(selects);
        }

        onSelect(index, item) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.limit) return;
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0); // let chidlren = this.scroller.children;

            var num = 0; // console.log(index);

            _this2.datas.forEach((data, i) => {
              if (index == i) {
                if (data.select) {
                  data.select = false;
                } else {
                  data.select = true;
                }
              }

              if (data.select) {
                num++;
              }
            }); // for (let child of chidlren) {
            //     if (child.getComponent(Toggle).isChecked) {
            //         num++;
            //     }
            // }


            console.log(num);

            if (_this2.type == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).Merge) {
              var cur_limit = _this2.limit - _this2.all_select;

              if (num > cur_limit) {
                _this2.datas[index].select = false;
                item.getComponent(Toggle).isChecked = false;
                (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                  error: Error()
                }), Tips) : Tips).Show("只能选择" + _this2.limit + "个");
              } else {
                var state = item.getChildByName("state");
                var Selected = item.getChildByName("ui_breed_Selected");

                _this2.scroller.children.forEach((node, i) => {
                  node.getChildByName("ui_breed_Selected").active = node.getComponent(Toggle).isChecked;
                  node.getChildByName("state").active = node.getComponent(Toggle).isChecked;
                });

                _this2.datas[index].select = item.getComponent(Toggle).isChecked;
                Selected.active = item.getComponent(Toggle).isChecked; //标签 切换可选项

                var stateSprite = state.getComponent(Sprite);
                state.active = item.getComponent(Toggle).isChecked;

                if (num == 1) {
                  var mainRole = null;

                  _this2.datas.forEach(element => {
                    if (element.select) mainRole = element.role;
                  });

                  stateSprite.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub("sheets/fanyu/主/spriteFrame", SpriteFrame);
                  var stds = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                    error: Error()
                  }), CfgMgr) : CfgMgr).Get("role_quality");
                  var std = null;
                  stds.forEach(curStd => {
                    if (mainRole && curStd.MainRoleid == mainRole.type && mainRole.quality + 1 === curStd.RoleQuailty) {
                      std = curStd;
                    }
                  });
                  var curRoles = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).getFanyuOrtherRole(mainRole, std);
                  SelectHeroPanel.SelectMerge(curRoles, [mainRole], 2, _this2.callback);
                  _this2.selectsMer[0] = mainRole;
                  _this2.selectsMer[1] = null;
                } else if (num == 2) {
                  stateSprite.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub("sheets/fanyu/副/spriteFrame", SpriteFrame);

                  if (_this2.selectsMer[0]) {
                    _this2.selectsMer[1] = _this2.datas[index].role;
                  }
                } else {
                  var _curRoles = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).getFanyuMainRole();

                  SelectHeroPanel.SelectMerge(_curRoles, [], 2, _this2.callback);
                  _this2.selectsMer = [];
                }
              }
            } else {
              var _cur_limit = _this2.limit - _this2.all_select;

              if (num > _cur_limit) {
                if (num == 2) {
                  _this2.datas.forEach((data, i) => {
                    if (i != index) data.select = false;
                  });

                  _this2.scroller.children.forEach((node, i) => {
                    if (node != item) node.getComponent(Toggle).isChecked = false;
                  });

                  _this2.datas[index].select = item.getComponent(Toggle).isChecked;
                } else {
                  _this2.datas[index].select = false;
                  item.getComponent(Toggle).isChecked = false;
                  (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                    error: Error()
                  }), Tips) : Tips).Show("只能选择" + _this2.limit + "个");
                }
              } else {
                _this2.datas[index].select = item.getComponent(Toggle).isChecked;

                if (item.getComponent(Toggle).isChecked) {
                  _this2.all_select++;

                  if (_this2.all_select > _this2.limit) {
                    _this2.all_select = _this2.limit;
                  }
                } else {
                  _this2.all_select--;

                  if (_this2.all_select < 0) {
                    _this2.all_select = 0;
                  }
                }
              }
            }

            if (_this2.is_show_role_info) {
              if (item.getComponent(Toggle).isChecked) {
                (_crd && TradeHeroPanel === void 0 ? (_reportPossibleCrUseOfTradeHeroPanel({
                  error: Error()
                }), TradeHeroPanel) : TradeHeroPanel).Show(_this2.datas[index].role);
              } else {
                (_crd && TradeHeroPanel === void 0 ? (_reportPossibleCrUseOfTradeHeroPanel({
                  error: Error()
                }), TradeHeroPanel) : TradeHeroPanel).Hide();
              }
            }

            _this2.updateSelectCount();
          })();
        }

        onFrienSelect(index, item) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.limit) return;
            yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0);
            var chidlren = _this3.friends_scroller.children;
            var num = 0;

            for (var child of chidlren) {
              if (child.getComponent(Toggle).isChecked) {
                num++;
              }
            }

            if (_this3.type == (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).Merge) {
              _this3.friend_datas.forEach((data, i) => {
                if (i != index) data.select = false;
              });

              _this3.friends_scroller.children.forEach((node, i) => {
                if (node != item) node.getComponent(Toggle).isChecked = false;
              });

              _this3.friend_datas[index].select = item.getComponent(Toggle).isChecked;
            } else {
              var cur_limit = _this3.limit - _this3.all_select;

              if (num > cur_limit) {
                _this3.friend_datas[index].select = false;
                item.getComponent(Toggle).isChecked = false;
                (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                  error: Error()
                }), Tips) : Tips).Show("只能选择" + _this3.limit + "个");
              } else {
                _this3.friend_datas[index].select = item.getComponent(Toggle).isChecked;

                if (item.getComponent(Toggle).isChecked) {
                  _this3.all_select++;

                  if (_this3.all_select > _this3.limit) {
                    _this3.all_select = _this3.limit;
                  }
                } else {
                  _this3.all_select--;

                  if (_this3.all_select < 0) {
                    _this3.all_select = 0;
                  }
                }
              }
            }

            _this3.updateSelectCount();
          })();
        }

        updateSelectCount() {
          this.my_lbl.string = "我的(" + this.all_select + "/" + this.limit + ")";
          this.friend_lbl.string = "好友(" + this.all_select + "/" + this.limit + ")";
        }

        checkPage(data) {
          if (!data.isend && this.friend_datas[this.friend_datas.length - 1] == data) {
            data.isend = true;
            this.page++;
            this.onSend();
          }
        }

        onSend() {
          var data = {
            type: (_crd && MsgTypeSend === void 0 ? (_reportPossibleCrUseOfMsgTypeSend({
              error: Error()
            }), MsgTypeSend) : MsgTypeSend).GetDownlinesRequest,
            data: {
              page: this.page,
              page_size: this.page_size,
              sort_type: 1,
              filter_type: 0,
              SearchPlayerID: "",
              include_role: true
            }
          };
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send(data);
        }

        updateRoleData(data) {
          var datas = data.assistRoles;

          for (var iterator of datas) {
            if (iterator) {
              var _data = {
                role: {
                  id: iterator.role_id,
                  type: iterator.type,
                  level: iterator.level,
                  experience: 0,
                  soldier_num: 0,
                  active_skills: [],
                  passive_skills: [],
                  is_in_building: false,
                  building_id: 0,
                  battle_power: iterator.battle_power,
                  quality: iterator.quality,
                  skills: [],
                  is_assisting: true,
                  is_in_attack_lineup: false,
                  is_in_defense_lineup: false,
                  trade_cd: 0
                },
                select: false,
                isend: false
              };
              this.friend_datas.push(_data);
            }
          }

          this.friends_scroller.UpdateDatas(this.friend_datas);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=14c88121d46fe546ff20945dbf5d3b7faadb6568.js.map