System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Toggle, instantiate, CfgMgr, Panel, ShopDefinePage, ShopLuckyPage, Req, Route, Session, PlayerData, EventMgr, Evt_ShopLuckyGet, Evt_ShopUpdate, ShopPanel, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdShopIndex(extras) {
    _reporterNs.report("StdShopIndex", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopDefinePage(extras) {
    _reporterNs.report("ShopDefinePage", "./ShopDefinePage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopLuckyPage(extras) {
    _reporterNs.report("ShopLuckyPage", "./ShopLuckyPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoute(extras) {
    _reporterNs.report("Route", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPanelPage(extras) {
    _reporterNs.report("IPanelPage", "../common/IPanelPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ShopLuckyGet(extras) {
    _reporterNs.report("Evt_ShopLuckyGet", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_ShopUpdate(extras) {
    _reporterNs.report("Evt_ShopUpdate", "../../manager/EventMgr", _context.meta, extras);
  }

  _export("ShopPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      ShopDefinePage = _unresolved_4.ShopDefinePage;
    }, function (_unresolved_5) {
      ShopLuckyPage = _unresolved_5.ShopLuckyPage;
    }, function (_unresolved_6) {
      Req = _unresolved_6.Req;
      Route = _unresolved_6.Route;
    }, function (_unresolved_7) {
      Session = _unresolved_7.Session;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
      Evt_ShopLuckyGet = _unresolved_9.Evt_ShopLuckyGet;
      Evt_ShopUpdate = _unresolved_9.Evt_ShopUpdate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c0a6IoTSRGiYbgpMS1itLC", "ShopPanel", undefined);

      __checkObsolete__(['Component', 'Label', 'Node', 'Toggle', 'instantiate']);

      _export("ShopPanel", ShopPanel = class ShopPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/shop/ShopPanel";
          this.pageDefine = {
            [1]: {
              node: "shopDayPage",
              classz: _crd && ShopDefinePage === void 0 ? (_reportPossibleCrUseOfShopDefinePage({
                error: Error()
              }), ShopDefinePage) : ShopDefinePage
            },
            [2]: {
              node: "shopDayPage",
              classz: _crd && ShopDefinePage === void 0 ? (_reportPossibleCrUseOfShopDefinePage({
                error: Error()
              }), ShopDefinePage) : ShopDefinePage
            },
            [3]: {
              node: "shopLuckyPage",
              classz: _crd && ShopLuckyPage === void 0 ? (_reportPossibleCrUseOfShopLuckyPage({
                error: Error()
              }), ShopLuckyPage) : ShopLuckyPage
            }
          };
          this.pageMap = new Map();
          this.currentToggle = void 0;
        }

        onLoad() {
          this.CloseBy("backBtn"); // 初始化商城页签

          let groups = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetShopsByPanel("ShopPanel");
          let nav = this.find("nav");
          let origin = instantiate(nav.children[0]);
          let index = 0,
              pagedefines = new Map();

          for (let shops of groups) {
            let std = shops[0]; // 默认拿第一个当做标签名

            let ids = [];
            shops.forEach(value => {
              ids.push(value.ID);
            });
            let btn = nav.children[index];

            if (!btn) {
              btn = instantiate(origin);
              nav.addChild(btn);
            }

            btn.on('toggle', this.onNav, this);
            let toggle = btn.getComponent(Toggle);
            toggle['shopIndexType'] = ++index;
            this.resetTabName(btn, std.ShopName);
            let path = this.pageDefine[std.ShopType].node;
            let classz = this.pageDefine[std.ShopType].classz;
            let ui = this.find(path);
            ui.active = true;

            if (pagedefines.has(ui)) {
              let cloner = instantiate(ui);
              ui.parent.addChild(cloner);
              cloner.setSiblingIndex(ui.getSiblingIndex() + 1);
              pagedefines.set(cloner, {
                ids: ids,
                btn: btn,
                classz: classz
              });
            } else {
              pagedefines.set(ui, {
                ids: ids,
                btn: btn,
                classz: classz
              });
            }
          }

          pagedefines.forEach((value, node) => {
            let page = node.addComponent(value.classz);
            this.pageMap.set(value.btn, {
              ids: value.ids,
              page: page
            });
          });
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_ShopUpdate === void 0 ? (_reportPossibleCrUseOfEvt_ShopUpdate({
            error: Error()
          }), Evt_ShopUpdate) : Evt_ShopUpdate, this.updateData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_ShopLuckyGet === void 0 ? (_reportPossibleCrUseOfEvt_ShopLuckyGet({
            error: Error()
          }), Evt_ShopLuckyGet) : Evt_ShopLuckyGet, this.updateData, this);
        }

        resetTabName(btn, name) {
          btn.getChildByPath("layout/label").getComponent(Label).string = name;
          btn.getChildByPath("select/layout/label").getComponent(Label).string = name;
        }

        async onShow(e) {
          let shop_index = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)["shop.protocol.getindex"]();
          shop_index.shopIndexId = null;
          await (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).sendAsync((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)["shop.protocol.getindex"], shop_index);
          this.currentToggle = undefined;
          this.updateData();
        }

        updateData() {
          // 以服务器下发的商城来初始化哪些标签开启
          let shops = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetShopIndexs();
          this.pageMap.forEach((pageObj, btn) => {
            pageObj.page.Hide();
            let data = shops.find(content => pageObj.ids.indexOf(content.shopIndexId) != -1);

            if (data) {
              btn.active = true;
              let stdIndex = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetShopIndexById(data.shopIndexId);
              if (stdIndex) this.resetTabName(btn, stdIndex.ShopName);
            } else {
              btn.active = false;
            }
          });
          this.onNav(this.currentToggle);
        }

        onNav(toggle) {
          if (!toggle) toggle = this.find("nav").children[0].getComponent(Toggle);
          this.currentToggle = toggle;

          if (toggle.isChecked) {
            let target = this.pageMap.get(toggle.node);
            this.pageMap.forEach(value => {
              if (value == target) {
                value.page.Show(value.ids);
              } else {
                value.page.Hide();
              }
            });
          }
        }

        onHide(...args) {}

        async flush() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0640234ebe9fbd9428797130b6d6554bf38ad790.js.map