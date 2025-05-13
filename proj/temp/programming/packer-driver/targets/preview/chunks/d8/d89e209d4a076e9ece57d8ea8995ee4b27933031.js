System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Sprite, SpriteFrame, Toggle, Panel, AutoScroller, GatePass, RightsConvert, CfgMgr, PlayerData, ResMgr, RightsPanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGatePass(extras) {
    _reporterNs.report("GatePass", "./GatePass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightsConvert(extras) {
    _reporterNs.report("RightsConvert", "./RightsConvert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdEquityCard(extras) {
    _reporterNs.report("StdEquityCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  _export("RightsPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      AutoScroller = _unresolved_3.AutoScroller;
    }, function (_unresolved_4) {
      GatePass = _unresolved_4.GatePass;
    }, function (_unresolved_5) {
      RightsConvert = _unresolved_5.RightsConvert;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }, function (_unresolved_8) {
      ResMgr = _unresolved_8.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9369cQ33x5Iy5G+TB1QQekx", "RightsPanel", undefined);

      __checkObsolete__(['Button', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle']);

      _export("RightsPanel", RightsPanel = class RightsPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/rights/RightsPanel";
          this.bg = void 0;
          this.help = void 0;
          this.scroller = void 0;
          this.GatePass = void 0;
          this.RightsConvert = void 0;
          this.tab_list = void 0;
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.CloseBy("backBtn");

            _this.help = _this.find("help", Button);
            _this.scroller = _this.find("ScrollView", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
              error: Error()
            }), AutoScroller) : AutoScroller);

            _this.scroller.SetHandle(_this.updateItem.bind(_this));

            _this.scroller.node.on('select', _this.onSelect, _this);

            _this.GatePass = _this.find("content/GatePass").addComponent(_crd && GatePass === void 0 ? (_reportPossibleCrUseOfGatePass({
              error: Error()
            }), GatePass) : GatePass);
            _this.RightsConvert = _this.find("content/RightsConvert").addComponent(_crd && RightsConvert === void 0 ? (_reportPossibleCrUseOfRightsConvert({
              error: Error()
            }), RightsConvert) : RightsConvert);

            _this.help.node.on(Button.EventType.CLICK, _this.onHelp, _this);
          })();
        }

        onShow() {}

        flush() {
          var seaid = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).CurSeasonData.currentSeasonId;

          var _tab_list_1 = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getPlayerHasEuqityList();

          var _tab_list_2 = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getEquityOpenCfg(seaid);

          var _loop = function _loop() {
            var element = _tab_list_2[index];

            var delete_index = _tab_list_1.findIndex(data => data.EquityCardID == element.EquityCardID);

            if (delete_index != -1) {
              _tab_list_1.splice(delete_index, 1);
            }
          };

          for (var index = 0; index < _tab_list_2.length; index++) {
            _loop();
          }

          this.tab_list = [..._tab_list_1, ..._tab_list_2];
          this.scroller.UpdateDatas(this.tab_list);
          this.scroller.SelectFirst();
        }

        onPage(page) {
          console.log(page);
          this.GatePass.node.active = false;
          this.RightsConvert.node.active = false;
          var data = this.tab_list[page];

          switch (data.CardType) {
            case 1:
              this.GatePass.node.active = true;
              this.GatePass.Show(data);
              break;

            case 2:
              this.RightsConvert.node.active = true;
              this.RightsConvert.Show(data);
              break;

            default:
              break;
          }
        }

        updateItem(item, data, index) {
          var icon1 = item.getChildByName("icon").getComponent(Sprite);
          var name1 = item.getChildByName("name").getComponent(Label);
          var icon2 = item.getChildByPath("Checkmark/icon").getComponent(Sprite);
          var name2 = item.getChildByPath("Checkmark/name").getComponent(Label);
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/rights/icon/" + data.TabIcon + "/spriteFrame", SpriteFrame, res => {
            icon1.spriteFrame = icon2.spriteFrame = res;
          });
          name1.string = name2.string = data.TabName;
        }

        onSelect(index, item, data) {
          console.log(data);
          item.getComponent(Toggle).isChecked = true;
          this.onPage(index);
        }

        onHelp() {}

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d89e209d4a076e9ece57d8ea8995ee4b27933031.js.map