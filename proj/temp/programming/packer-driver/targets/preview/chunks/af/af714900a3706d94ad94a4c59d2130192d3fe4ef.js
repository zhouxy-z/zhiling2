System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, Layout, path, Sprite, SpriteFrame, UIOpacity, UITransform, v3, Card, CfgMgr, ItemType, ThingName, folder_icon, folder_item, ResMgr, PlayerData, Req, Route, MsgPanel, Session, CardCollectLvContItem, _crd;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdBattleCardDelivery(extras) {
    _reporterNs.report("StdBattleCardDelivery", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPlayerLevelAward(extras) {
    _reporterNs.report("StdPlayerLevelAward", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThingName(extras) {
    _reporterNs.report("ThingName", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_icon(extras) {
    _reporterNs.report("folder_icon", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
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

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  _export("CardCollectLvContItem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Layout = _cc.Layout;
      path = _cc.path;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Card = _unresolved_2.Card;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
      ItemType = _unresolved_3.ItemType;
      ThingName = _unresolved_3.ThingName;
    }, function (_unresolved_4) {
      folder_icon = _unresolved_4.folder_icon;
      folder_item = _unresolved_4.folder_item;
      ResMgr = _unresolved_4.ResMgr;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      Req = _unresolved_6.Req;
      Route = _unresolved_6.Route;
    }, function (_unresolved_7) {
      MsgPanel = _unresolved_7.MsgPanel;
    }, function (_unresolved_8) {
      Session = _unresolved_8.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89b91bsw45P7bo6KovD1KTQ", "CardCollectLvContItem", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'instantiate', 'Label', 'Layout', 'Node', 'path', 'Sprite', 'SpriteFrame', 'UIOpacity', 'UITransform', 'v3', 'Vec3']);

      _export("CardCollectLvContItem", CardCollectLvContItem = class CardCollectLvContItem extends Component {
        constructor() {
          super(...arguments);
          this.sectionCont = void 0;
          this.lineCont = void 0;
          this.cont = void 0;
          this.btn = void 0;
          this.bg1 = void 0;
          this.bg2 = void 0;
          this.cardBg = void 0;
          this.card = void 0;
          this.fenchenBg = void 0;
          this.itemCont = void 0;
          this.itemIcon = void 0;
          this.itemNameLab = void 0;
          this.getImg = void 0;
          this.line = void 0;
          this.linePos = void 0;
          this.lvBg1 = void 0;
          this.lvBg2 = void 0;
          this.lvBg3 = void 0;
          this.lvLab1 = void 0;
          this.lvLab2 = void 0;
          this.lvLab3 = void 0;
          this.lock = void 0;
          this.canGetEffect = void 0;
          this.curLv = void 0;
          this.isInit = false;
          this.data = void 0;
          this.awardData = void 0;
          this.index = void 0;
        }

        onLoad() {
          this.sectionCont = this.node.getChildByPath("sectionCont");
          this.lineCont = this.node.getChildByPath("sectionCont/lineCont");
          this.cont = this.node.getChildByPath("cont");
          this.btn = this.node.getChildByPath("cont").getComponent(Button);
          this.bg1 = this.node.getChildByPath("cont/bg1");
          this.bg2 = this.node.getChildByPath("cont/bg2");
          this.cardBg = this.node.getChildByPath("cont/cardBg").getComponent(Sprite);
          this.card = this.node.getChildByPath("cont/Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.fenchenBg = this.node.getChildByPath("cont/fenchenBg");
          this.itemCont = this.node.getChildByPath("cont/itemCont");
          this.itemIcon = this.node.getChildByPath("cont/itemCont/itemIcon").getComponent(Sprite);
          this.itemNameLab = this.node.getChildByPath("cont/itemCont/itemNumLab").getComponent(Label);
          this.line = this.node.getChildByPath("line");
          this.lvBg1 = this.node.getChildByPath("lvCont/lvBg1");
          this.lvBg2 = this.node.getChildByPath("lvCont/lvBg2");
          this.lvBg3 = this.node.getChildByPath("lvCont/lvBg3");
          this.lvLab1 = this.node.getChildByPath("lvCont/lvLab1").getComponent(Label);
          this.lvLab2 = this.node.getChildByPath("lvCont/lvLab2").getComponent(Label);
          this.lvLab3 = this.node.getChildByPath("lvCont/lvLab3").getComponent(Label);
          this.getImg = this.node.getChildByPath("cont/getImg");
          this.canGetEffect = this.node.getChildByPath("cont/canGetEffect");
          this.lock = this.node.getChildByPath("cont/lock");
          this.canGetEffect.active = false;
          this.isInit = true;
          this.updateShow();
        }

        onEnable() {
          this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onDisable() {
          this.btn.node.off(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.btn:
              this.toSendUp();
              break;
          }
        }

        toSendUp() {
          if (this.curLv < this.data.stdPlayerLevel.Level) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("未达到领取等级");
            return;
          }

          if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetUpgradeAward(this.data.stdPlayerLevel.Level)) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("不可重复领取");
            return;
          }

          var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
            error: Error()
          }), Req) : Req)['logic.protocol.playerlevelrewardclaim']();
          data.level = this.data.stdPlayerLevel.Level;
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
            error: Error()
          }), Route) : Route)['logic.protocol.playerlevelrewardclaim'], data);
          console.log("\u53D1\u9001\u9886\u53D6---->" + data.level + "\u7EA7\u5956\u52B1");
        }

        SetData(data, curLv, index) {
          this.data = data;
          this.curLv = curLv;
          this.index = index;
          this.updateShow();
        }

        updateShow() {
          if (!this.isInit || !this.data) return;
          this.updateLine();
          this.awardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetUpgradeAward(this.data.stdPlayerLevel.Level);
          this.updateAward();
          this.updateDire();
          this.updateLv();
        }

        updateLine() {
          if (this.data.sectionList != null) {
            this.sectionCont.active = true;
            var lineNum = this.data.sectionList.length + 1;
            var node;
            var updateSize = [];

            for (var index = 0; index < this.lineCont.children.length; index++) {
              node = this.lineCont.children[index];

              if (index < lineNum) {
                node.active = true;
                var line = node.getChildByName("line");
                var targetLv = this.data.stdPlayerLevel.Level + (index + 1);
                line.active = this.curLv >= targetLv;
                updateSize.push(node);
              } else {
                node.active = false;
              }
            }

            this.lineCont.getComponent(Layout).updateLayout();

            for (var _node of updateSize) {
              var width = _node.getComponent(UITransform).width;

              var _line = _node.getChildByName("line");

              _line.getComponent(UITransform).width = width;

              var bg = _node.getChildByName("lineBg");

              bg.getComponent(UITransform).width = width;
            }
          } else {
            this.sectionCont.active = false;
          }
        }

        updateAward() {
          var iconStr;
          var numStr = "";
          this.getImg.active = this.awardData != undefined;
          this.bg2.active = this.awardData != undefined;
          this.card.node.active = false;
          this.cardBg.node.active = false;
          this.canGetEffect.active = false;
          this.fenchenBg.active = false;
          this.lock.active = true;

          if (this.data.stdPlayerLevel.RewardPool > 0) {
            //已领取
            if (this.awardData) {
              this.lock.active = false;
              this.bg2.active = true;
              iconStr = null;

              if (this.awardData.rewardType == (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
                error: Error()
              }), ThingName) : ThingName).battlecard) {
                var stdCardDeliver = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).GetBattleCardDeliver(this.awardData.rewardId);

                if (stdCardDeliver) {
                  this.cardBg.node.active = true;
                  this.card.node.active = true;
                  this.cardBg.getComponent(UIOpacity).opacity = 127;
                  this.card.getComponent(UIOpacity).opacity = 168; //this.card.setCardMask(true);

                  var cardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                    error: Error()
                  }), PlayerData) : PlayerData).CreateCardData(stdCardDeliver.CardID, stdCardDeliver.CardQuality);
                  this.card.SetData(cardData);
                  (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                    error: Error()
                  }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_icon === void 0 ? (_reportPossibleCrUseOffolder_icon({
                    error: Error()
                  }), folder_icon) : folder_icon, "card_bg" + cardData.quality, "spriteFrame"), SpriteFrame, res => {
                    this.itemIcon.spriteFrame = res;
                  });
                }
              } else if (this.awardData.rewardType == (_crd && ThingName === void 0 ? (_reportPossibleCrUseOfThingName({
                error: Error()
              }), ThingName) : ThingName).item) {
                var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                  error: Error()
                }), CfgMgr) : CfgMgr).Getitem(this.awardData.rewardId);
                iconStr = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, stdItem.Icon, "spriteFrame");
                numStr = stdItem.ItemName + "x" + this.awardData.rewardNum;
                this.fenchenBg.active = stdItem.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
                  error: Error()
                }), ItemType) : ItemType).piece;
                this.fenchenBg.getComponent(UIOpacity).opacity = 168;
                this.itemCont.getComponent(UIOpacity).opacity = 168;
              }
            } else {
              iconStr = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                error: Error()
              }), folder_item) : folder_item, this.data.stdPlayerLevel.icon, "spriteFrame");
              numStr = this.data.stdPlayerLevel.randomName;
              this.itemCont.getComponent(UIOpacity).opacity = 255;

              if (this.curLv >= this.data.stdPlayerLevel.Level) {
                this.lock.active = false;
              }
            }
          } else {
            if (this.data.stdPlayerLevel.RewardID > 0) {
              var _stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(this.data.stdPlayerLevel.RewardID);

              if (_stdItem) {
                iconStr = path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, _stdItem.Icon, "spriteFrame");
                numStr = _stdItem.ItemName + " x " + this.data.stdPlayerLevel.RewardNumber;
              }
            }

            if (this.awardData) {
              this.lock.active = false;
              this.itemCont.getComponent(UIOpacity).opacity = 168;
            } else {
              this.itemCont.getComponent(UIOpacity).opacity = 255;

              if (this.curLv >= this.data.stdPlayerLevel.Level) {
                this.lock.active = false;
              }
            }
          }

          if (iconStr) {
            this.itemCont.active = true;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(iconStr, SpriteFrame, res => {
              this.itemIcon.spriteFrame = res;
            });
            this.itemNameLab.string = numStr ? numStr.toString() : "";
          } else {
            this.itemCont.active = false;
          }

          if (this.curLv >= this.data.stdPlayerLevel.Level && !(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).GetUpgradeAward(this.data.stdPlayerLevel.Level)) {
            this.canGetEffect.active = true;
          }
        }

        updateDire() {
          var isTop = this.index % 2 == 0;

          if (isTop) {
            this.cont.position = v3(this.cont.position.x, 140, 0);
            this.line.position = v3(this.line.position.x, 22, 0);
          } else {
            this.cont.position = v3(this.cont.position.x, -132, 0);
            this.line.position = v3(this.line.position.x, -22, 0);
          }
        }

        updateLv() {
          this.lvLab1.node.active = false;
          this.lvLab2.node.active = false;
          this.lvLab3.node.active = false;

          if (this.data.stdPlayerLevel.Level < this.curLv) {
            this.lvLab2.node.active = true;
            this.lvBg1.active = true;
            this.lvBg2.active = false;
            this.lvBg3.active = false;
          } else if (this.data.stdPlayerLevel.Level == this.curLv) {
            this.lvLab3.node.active = true;
            this.lvBg1.active = false;
            this.lvBg2.active = true;
            this.lvBg3.active = false;
          } else if (this.data.stdPlayerLevel.Level > this.curLv) {
            this.lvLab1.node.active = true;
            this.lvBg1.active = false;
            this.lvBg2.active = false;
            this.lvBg3.active = true;
          }

          var lvStr = this.data.stdPlayerLevel.Level.toString();
          this.lvLab1.string = lvStr;
          this.lvLab2.string = lvStr;
          this.lvLab3.string = lvStr;
        }

        playUpEffect(delay, curLv) {
          var _this = this;

          var playTime = 0;
          playTime += delay;
          this.scheduleOnce(() => {
            this.updateAward();
            this.updateLv();
          }, delay);
          playTime += 0.05;

          if (this.data.sectionList != null) {
            var node;
            var lineNum = this.data.sectionList.length + 1;

            var _loop = function _loop() {
              if (index < lineNum) {
                node = _this.lineCont.children[index];
                var line = node.getChildByName("line");

                if (!line.active) {
                  var targetLv = _this.data.stdPlayerLevel.Level + (index + 1);

                  if (curLv >= targetLv) {
                    //playNodeList.push(line);
                    _this.scheduleOnce(() => {
                      line.active = true;
                    }, playTime);

                    playTime += 0.05;
                  }
                }
              }
            };

            for (var index = 0; index < this.lineCont.children.length; index++) {
              _loop();
            }
          }

          this.curLv = curLv;
          return playTime;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af714900a3706d94ad94a4c59d2130192d3fe4ef.js.map