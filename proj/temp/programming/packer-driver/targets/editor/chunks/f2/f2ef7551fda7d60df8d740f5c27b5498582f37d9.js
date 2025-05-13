System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, Label, Sprite, SpriteFrame, Toggle, path, Panel, Req, Route, Session, PlayerData, CfgMgr, ResMgr, cardBack, CardGroupHead, cardGroupSettingTips, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
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

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcardBack(extras) {
    _reporterNs.report("cardBack", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupHead(extras) {
    _reporterNs.report("CardGroupHead", "./CardGroupHead", _context.meta, extras);
  }

  _export("cardGroupSettingTips", void 0);

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
      path = _cc.path;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      Req = _unresolved_3.Req;
      Route = _unresolved_3.Route;
    }, function (_unresolved_4) {
      Session = _unresolved_4.Session;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
    }, function (_unresolved_7) {
      ResMgr = _unresolved_7.ResMgr;
      cardBack = _unresolved_7.cardBack;
    }, function (_unresolved_8) {
      CardGroupHead = _unresolved_8.CardGroupHead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "233b4cHABRN+LJzhuU8OfD9", "cardGroupSettingTips%20copy", undefined);

      __checkObsolete__(['Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'path']);

      _export("cardGroupSettingTips", cardGroupSettingTips = class cardGroupSettingTips extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/cards/cardGroupSettingTips";
          this.tile = void 0;
          this.btn1 = void 0;
          this.btn2 = void 0;
          this.select = void 0;
          this.backItem = void 0;
          this.headItem = void 0;
          this.headData = void 0;
          this.cardBackdata = void 0;

          /**1是头像 2是卡背 */
          this.type = void 0;
        }

        onLoad() {
          this.tile = this.find("tile", Label);
          this.btn1 = this.find("btn1");
          this.btn2 = this.find("btn2");
          this.btn1.on(Input.EventType.TOUCH_END, this.onSet, this);
          this.btn2.on(Input.EventType.TOUCH_END, this.onAllCardGroup, this);
          this.CloseBy("mask");
          this.find("closeBtn").on(Input.EventType.TOUCH_END, this.Hide, this);
          this.select = this.find("select", Toggle);
          this.backItem = this.find("backitem");
          this.headItem = this.find("headitem").addComponent(_crd && CardGroupHead === void 0 ? (_reportPossibleCrUseOfCardGroupHead({
            error: Error()
          }), CardGroupHead) : CardGroupHead);
        }

        onShow() {}

        async flush(type, data) {
          this.type = type;
          let msg = "";
          this.headItem.node.active = false;
          this.backItem.active = false;
          let str_name = "";
          let cardGroupData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id);

          if (type == 1) {
            msg = "头像设置";
            this.headData = data;
            let cfg_head_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetHead(this.headData.avatarId);
            let is_use = cardGroupData.avatarId == this.headData.avatarId;
            this.headItem.SetData(this.headData.avatarId, data.like, is_use);
            str_name = cfg_head_data.name;
            this.headItem.node.active = true;
          } else {
            msg = "卡背设置";
            this.cardBackdata = data;
            this.backItem.getChildByName("favorite").active = data.like;
            this.backItem.getChildByName("use").active = cardGroupData.cardBackId == this.cardBackdata.cardBackId;
            let icon = this.backItem.getChildByName("icon").getComponent(Sprite);
            let cfg_card_back_data = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardBackCfgById(this.cardBackdata.cardBackId);
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && cardBack === void 0 ? (_reportPossibleCrUseOfcardBack({
              error: Error()
            }), cardBack) : cardBack, cfg_card_back_data.icon, "spriteFrame"), SpriteFrame, res => {
              icon.spriteFrame = res;
            });
            str_name = cfg_card_back_data.name;
            this.backItem.active = true;
          }

          this.find("namelabel").getComponent(Label).string = str_name;
          this.tile.string = msg;
          this.select.isChecked = data.like;
        }

        onSet() {
          let data = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).getCardGroupDataById((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cur_id);

          if (this.type == 1) {
            //装备到卡组
            data.avatarId = this.headData.avatarId;
            let Change_name = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["logic.protocol.setdeckattrs"]();
            Change_name.attrs = data;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.setdeckattrs"], Change_name);
          } else {
            //装备到卡组
            data.cardBackId = this.cardBackdata.cardBackId;
            let Change_name = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["logic.protocol.setdeckattrs"]();
            Change_name.attrs = data;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.setdeckattrs"], Change_name);
          }

          this.Hide();
        }

        onAllCardGroup() {
          if (this.type == 1) {
            //装备到卡组
            for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList) {
              iterator.avatarId = this.headData.avatarId;
              let Change_name = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["logic.protocol.setdeckattrs"]();
              Change_name.attrs = iterator;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["logic.protocol.setdeckattrs"], Change_name);
            }
          } else {
            //装备到卡组
            for (const iterator of (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).cardNameList) {
              iterator.cardBackId = this.cardBackdata.cardBackId;
              let Change_name = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)["logic.protocol.setdeckattrs"]();
              Change_name.attrs = iterator;
              (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
                error: Error()
              }), Route) : Route)["logic.protocol.setdeckattrs"], Change_name);
            }
          }

          this.Hide();
        }

        setLike() {
          let is_like = this.select.isChecked;

          if (this.type == 1) {
            this.headData.like = is_like; //设为最爱

            let setHeadData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["logic.protocol.setavatarinfos"]();
            setHeadData.infos = [this.headData];
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.setavatarinfos"], setHeadData);
          } else {
            this.cardBackdata.like = is_like; //设为最爱

            let setCardBackData = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["logic.protocol.setcardbackinfos"]();
            setCardBackData.infos = [this.cardBackdata];
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["logic.protocol.setcardbackinfos"], setCardBackData);
          }
        }

        onHide(...args) {
          this.setLike();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2ef7551fda7d60df8d740f5c27b5498582f37d9.js.map