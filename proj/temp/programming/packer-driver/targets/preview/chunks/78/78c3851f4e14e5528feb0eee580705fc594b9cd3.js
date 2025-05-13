System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Input, Label, Layout, UIOpacity, Vec3, easing, tween, Panel, PlayerData, Session, EventMgr, Evt_Add_Card_Group_update, Evt_Card_Check_By_Name, Evt_Card_Group_Update, Evt_Item_Change, Evt_Main_Panel_Card_Group_Update, Evt_SectionUpdate, Evt_Set_Battle_Card_Group_Update, Second, Utils, AutoScroller, CardGroupItem, MsgPanel, proto, Req, Route, MainUI3D, CfgMgr, LocalStorage, GameSet, CardGroupHead, DateUtils, AudioMgr, AudioDefine, Goto, MainPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Add_Card_Group_update(extras) {
    _reporterNs.report("Evt_Add_Card_Group_update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Check_By_Name(extras) {
    _reporterNs.report("Evt_Card_Check_By_Name", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Item_Change(extras) {
    _reporterNs.report("Evt_Item_Change", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Main_Panel_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Main_Panel_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_SectionUpdate(extras) {
    _reporterNs.report("Evt_SectionUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update(extras) {
    _reporterNs.report("Evt_Set_Battle_Card_Group_Update", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupItem(extras) {
    _reporterNs.report("CardGroupItem", "../cards/CardGroupItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainUI3D(extras) {
    _reporterNs.report("MainUI3D", "./MainUI3D", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSet(extras) {
    _reporterNs.report("GameSet", "../../manager/GameSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupHead(extras) {
    _reporterNs.report("CardGroupHead", "../cards/CardGroupHead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtils(extras) {
    _reporterNs.report("DateUtils", "../../utils/DateUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../manager/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioDefine(extras) {
    _reporterNs.report("AudioDefine", "../../define/AudioDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  _export("MainPanel", void 0);

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
      Layout = _cc.Layout;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      easing = _cc.easing;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_Add_Card_Group_update = _unresolved_5.Evt_Add_Card_Group_update;
      Evt_Card_Check_By_Name = _unresolved_5.Evt_Card_Check_By_Name;
      Evt_Card_Group_Update = _unresolved_5.Evt_Card_Group_Update;
      Evt_Item_Change = _unresolved_5.Evt_Item_Change;
      Evt_Main_Panel_Card_Group_Update = _unresolved_5.Evt_Main_Panel_Card_Group_Update;
      Evt_SectionUpdate = _unresolved_5.Evt_SectionUpdate;
      Evt_Set_Battle_Card_Group_Update = _unresolved_5.Evt_Set_Battle_Card_Group_Update;
    }, function (_unresolved_6) {
      Second = _unresolved_6.Second;
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      AutoScroller = _unresolved_7.AutoScroller;
    }, function (_unresolved_8) {
      CardGroupItem = _unresolved_8.CardGroupItem;
    }, function (_unresolved_9) {
      MsgPanel = _unresolved_9.MsgPanel;
    }, function (_unresolved_10) {
      proto = _unresolved_10.default;
      Req = _unresolved_10.Req;
      Route = _unresolved_10.Route;
    }, function (_unresolved_11) {
      MainUI3D = _unresolved_11.MainUI3D;
    }, function (_unresolved_12) {
      CfgMgr = _unresolved_12.CfgMgr;
    }, function (_unresolved_13) {
      LocalStorage = _unresolved_13.default;
    }, function (_unresolved_14) {
      GameSet = _unresolved_14.GameSet;
    }, function (_unresolved_15) {
      CardGroupHead = _unresolved_15.CardGroupHead;
    }, function (_unresolved_16) {
      DateUtils = _unresolved_16.DateUtils;
    }, function (_unresolved_17) {
      AudioMgr = _unresolved_17.AudioMgr;
    }, function (_unresolved_18) {
      AudioDefine = _unresolved_18.AudioDefine;
    }, function (_unresolved_19) {
      Goto = _unresolved_19.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33096mPiqdOE7D5PoCIsu5S", "MainPanel", undefined);

      __checkObsolete__(['Button', 'CCClass', 'Event', 'EventTouch', 'Input', 'Label', 'Layout', 'Node', 'PageView', 'UIOpacity', 'UITransform', 'Vec3', '_decorator', 'easing', 'instantiate', 'size', 'tween']);

      _export("MainPanel", MainPanel = class MainPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = 'prefabs/main/MainPanel';
          this.creatRoomBtn = void 0;
          this.userButton = void 0;
          this.shopButton = void 0;
          this.battleButton = void 0;
          this.bottomBtn = void 0;
          this.leftTopNode = void 0;
          this.bottomNode = void 0;
          this.rightTopNode = void 0;
          this.currencyNode = void 0;
          this.cardNode = void 0;
          this.cardBtn = void 0;
          this.cardGroupScrollView = void 0;
          this.unsatisfied = void 0;
          this.cardGoup = void 0;
          this.unCardGroup = void 0;
          this.head = void 0;
          this.matchTime = 0;
          this.interval = void 0;
        }

        onLoad() {
          this.creatRoomBtn = this.find("creatRoomBtn", Button);
          this.creatRoomBtn.node.on(Button.EventType.CLICK, this.onButton, this);
          this.userButton = this.find("userButton", Button);
          this.userButton.node.on("click", this.onButton, this);
          this.shopButton = this.find("shopButton", Button);
          this.shopButton.node.on("click", this.onButton, this);
          this.cardBtn = this.find("bottomNode/battleButton/cardBtn", Button);
          this.cardBtn.node.on("click", this.onButton, this);
          this.battleButton = this.find("bottomNode/battleButton", Button);
          this.battleButton.node.on("click", this.onButton, this);
          this.bottomNode = this.find("bottomNode");
          this.bottomBtn = this.find("bottomNode/bottomBtn").children.concat();
          this.rightTopNode = this.find("rightTopNode");
          this.currencyNode = this.find("rightTopNode/currencyNode");
          this.cardNode = this.find("cardNode");
          this.cardNode.on(Input.EventType.TOUCH_END, () => {
            this.cardNode.active = false;
          }, this);
          this.cardGroupScrollView = this.find("cardNode/bg/cardGroupScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.cardGroupScrollView.SetHandle(this.updateCardGroupItem.bind(this));
          this.cardGroupScrollView.node.on('select', this.onCardGroupSelect, this);
          this.unCardGroup = this.find("bottomNode/battleButton/cardBtn/cardbgNode");
          this.cardGoup = this.find("bottomNode/battleButton/cardBtn/cardGroupItem");
          this.cardGoup.addComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem);
          this.head = this.find("userButton/CardGroupHead").addComponent(_crd && CardGroupHead === void 0 ? (_reportPossibleCrUseOfCardGroupHead({
            error: Error()
          }), CardGroupHead) : CardGroupHead);

          for (var btn of this.bottomBtn) {
            btn.on("click", this.onButton, this);
          }

          this.leftTopNode = this.find("leftTopNode").children.concat();

          for (var _btn of this.leftTopNode) {
            _btn.on("click", this.onButton, this);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Set_Battle_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Set_Battle_Card_Group_Update({
            error: Error()
          }), Evt_Set_Battle_Card_Group_Update) : Evt_Set_Battle_Card_Group_Update, this.setCardGroupItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Check_By_Name === void 0 ? (_reportPossibleCrUseOfEvt_Card_Check_By_Name({
            error: Error()
          }), Evt_Card_Check_By_Name) : Evt_Card_Check_By_Name, this.updateCardGroupState, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Card_Group_Update({
            error: Error()
          }), Evt_Card_Group_Update) : Evt_Card_Group_Update, this.setCardGroupItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Add_Card_Group_update === void 0 ? (_reportPossibleCrUseOfEvt_Add_Card_Group_update({
            error: Error()
          }), Evt_Add_Card_Group_update) : Evt_Add_Card_Group_update, this.setCardGroupItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Main_Panel_Card_Group_Update === void 0 ? (_reportPossibleCrUseOfEvt_Main_Panel_Card_Group_Update({
            error: Error()
          }), Evt_Main_Panel_Card_Group_Update) : Evt_Main_Panel_Card_Group_Update, this.setCardGroupItem, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_Item_Change === void 0 ? (_reportPossibleCrUseOfEvt_Item_Change({
            error: Error()
          }), Evt_Item_Change) : Evt_Item_Change, this.updateCurrency, this);
        }

        static Show() {
          return this.ShowUI(...arguments);
        }

        static ShowTop() {
          return this.ShowUI(...arguments);
        }

        onShow() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).StopChannel((_crd && AudioDefine === void 0 ? (_reportPossibleCrUseOfAudioDefine({
            error: Error()
          }), AudioDefine) : AudioDefine).Channels["audio/bgm/*"].channel);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).Play("audio/bgm/fighting4", 0, 0.1);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.getplayerdecks"]);
          (_crd && MainUI3D === void 0 ? (_reportPossibleCrUseOfMainUI3D({
            error: Error()
          }), MainUI3D) : MainUI3D).Show(this.node); //TopUI.Show();

          this.checkShowSeasonTips();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_SectionUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionUpdate({
            error: Error()
          }), Evt_SectionUpdate) : Evt_SectionUpdate, this.onSectionUpdate, this);
        }

        onHide() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).StopChannel((_crd && AudioDefine === void 0 ? (_reportPossibleCrUseOfAudioDefine({
            error: Error()
          }), AudioDefine) : AudioDefine).Channels["audio/bgm/*"].channel); //TopUI.Hide();

          (_crd && MainUI3D === void 0 ? (_reportPossibleCrUseOfMainUI3D({
            error: Error()
          }), MainUI3D) : MainUI3D).Hide();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_SectionUpdate === void 0 ? (_reportPossibleCrUseOfEvt_SectionUpdate({
            error: Error()
          }), Evt_SectionUpdate) : Evt_SectionUpdate, this.onSectionUpdate, this);
        }

        flush() {
          this.setCardGroupItem();
          this.startTween();
          this.updateCurrency();
        }

        startTween() {
          var _this = this;

          return _asyncToGenerator(function* () {
            tween(_this.bottomNode).to(0.6, {
              position: new Vec3(0, -318)
            }, {
              easing: easing.circOut
            }).start();

            for (var index = 0; index < _this.currencyNode.children.length; index++) {
              var element = _this.currencyNode.children[index];
              element.getChildByName("icon").setScale(new Vec3(0, 0, 1));
              element.getChildByName("Label").getComponent(UIOpacity).opacity = 0;
            }

            _this.userButton.node.getComponent(UIOpacity).opacity = 0;

            for (var _index = 0; _index < _this.leftTopNode.length; _index++) {
              var _element = _this.leftTopNode[_index];

              _element.setScale(new Vec3(0, 0, 1));
            }

            for (var _index2 = 0; _index2 < _this.currencyNode.children.length; _index2++) {
              var _element2 = _this.currencyNode.children[_index2];
              tween(_element2.getChildByName("icon")).to(0.3, {
                scale: new Vec3(1, 1, 1)
              }).start();
              tween(_element2.getChildByName("Label").getComponent(UIOpacity)).to(0.3, {
                opacity: 255
              }).start();
              yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(0.15);
            } // this.currencyNode.getComponent(Layout).updateLayout();
            //TopUI.addChild(this.rightTopNode);


            tween(_this.userButton.node.getComponent(UIOpacity)).to(0.05, {
              opacity: 255
            }).start();

            for (var _index3 = 0; _index3 < _this.leftTopNode.length; _index3++) {
              var _element3 = _this.leftTopNode[_index3];
              tween(_element3).to(0.3, {
                scale: new Vec3(1, 1, 1)
              }).start();
              yield (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
                error: Error()
              }), Second) : Second)(0.11);
            }

            _this.leftTopNode[0].parent.getComponent(Layout).updateLayout();
          })();
        }

        onButton(btn) {
          var name = btn.node.name;

          switch (name) {
            case "bagButton":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("BagPanel");
              break;

            case "mailButton":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("MailPanel");
              break;

            case "friendButton":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("FriendPanel");
              break;

            case "creatRoomBtn":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("RoomPanel");
              break;

            case "userButton":
              // UserInfoPanel.Show();
              break;

            case "shopButton":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("ShopPanel");
              break;

            case "cardBtn":
              this.cardNode.active = true;

              if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).cardNameList.length > 0) {
                this.cardGroupScrollView.UpdateDatas((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).cardNameList);
              } else {
                (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                  error: Error()
                }), Goto) : Goto)("CardsPanel");
              }

              break;

            case "tradeButton":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("TradePanel");
              break;

            case "battleButton":
              if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurFightCardGroup) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("未设置战斗卡组不可对战");
                return;
              }

              if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurFightCardGroup.size < (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).CardGuroupComm.DeckFullSize) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("\u5361\u7EC4\u5361\u724C\u6570\u91CF\u4E0D\u8DB3" + (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).CardGuroupComm.DeckFullSize + "\u5F20");
                return;
              }

              if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurSeasonData || (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId == 0) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("暂时没有赛季进行中");
                return;
              }

              if ((_crd && DateUtils === void 0 ? (_reportPossibleCrUseOfDateUtils({
                error: Error()
              }), DateUtils) : DateUtils).ServerTime > (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).GetCurSeasonEndTime()) {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("暂时没有赛季已结束");
                return;
              }

              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("VSPanel", (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).base.BattleMode.BattleModeRank);
              break;

            case "cardButton":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("CardsPanel");
              break;

            case "levelButton":
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("CardCollectPanel");
              break;

            case "settingButton":
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show((_crd && GameSet === void 0 ? (_reportPossibleCrUseOfGameSet({
                error: Error()
              }), GameSet) : GameSet).Version);
              break;

            default:
              break;
          }
        }

        setCardGroupItem() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.$hasLoad) yield _this2.initSub;

            if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).CurFightCardGroup) {
              _this2.cardGoup.active = true;
              _this2.unCardGroup.active = false;

              var card_group = _this2.cardGoup.getComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
                error: Error()
              }), CardGroupItem) : CardGroupItem);

              if (!card_group) _this2.cardGoup.addComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
                error: Error()
              }), CardGroupItem) : CardGroupItem);
              card_group.SetData((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurFightCardGroup, true);

              _this2.head.SetData((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).CurFightCardGroup.avatarId, false, false);
            } else {
              _this2.cardGoup.active = false;
              _this2.unCardGroup.active = true;
            }
          })();
        }

        updateCardGroupState(data) {}
        /**打开设置卡组界面 */


        updateCardGroupItem(item, data) {
          var card_group_item = item.getComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem);
          if (!card_group_item) card_group_item = item.addComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem);

          var callback = () => {
            (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
              error: Error()
            }), Goto) : Goto)("CardsPanel", data);
            this.cardNode.active = false;
          };

          var jump = item.getChildByPath("cardNode/jump").getComponent(Button);
          jump.node.off(Button.EventType.CLICK, callback, this);
          jump.node.on(Button.EventType.CLICK, callback, this);
          card_group_item.SetData(data);
        }
        /**选择卡组设置出战 */


        onCardGroupSelect(index, item) {
          var data = item.getComponent(_crd && CardGroupItem === void 0 ? (_reportPossibleCrUseOfCardGroupItem({
            error: Error()
          }), CardGroupItem) : CardGroupItem).getData();
          var set = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["logic.protocol.setdeckdefault"]();
          set.deckId = data.id;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["logic.protocol.setdeckdefault"], set);
          this.cardNode.active = false;
        }

        updateCurrency() {
          this.currencyNode.children.forEach(node => {
            var index = node.getSiblingIndex();
            var lab = node.getChildByName("Label").getComponent(Label);
            lab.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).BigNumber((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(index + 1));
          });
        }

        onSectionUpdate() {
          this.checkShowSeasonTips();
        }
        /**检测是否显示赛季提示 */


        checkShowSeasonTips() {
          if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData || (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId == 0) {
            return;
          }

          var key = "season_tips_is_show_" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).player.playerId;
          var showSeasonTipsDatas = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetObject(key);

          if (!showSeasonTipsDatas) {
            showSeasonTipsDatas = {};
          }

          if (showSeasonTipsDatas[(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId]) return;
          showSeasonTipsDatas[(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId] = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId;
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetObject(key, showSeasonTipsDatas);
          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)("VSSeasonTipsPanel");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78c3851f4e14e5528feb0eee580705fc594b9cd3.js.map