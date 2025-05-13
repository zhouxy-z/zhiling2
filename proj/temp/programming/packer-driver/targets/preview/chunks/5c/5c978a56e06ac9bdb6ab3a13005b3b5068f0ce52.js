System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, path, Button, Label, easing, tween, Sprite, SpriteFrame, Tween, UITransform, sp, folder_item, ResMgr, CfgMgr, Panel, Card, VList, Utils, CardGroupCoverItem, Goto, RewardTips, _crd;

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroupCoverItem(extras) {
    _reporterNs.report("CardGroupCoverItem", "./CardGroupCoverItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  _export("RewardTips", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      path = _cc.path;
      Button = _cc.Button;
      Label = _cc.Label;
      easing = _cc.easing;
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Tween = _cc.Tween;
      UITransform = _cc.UITransform;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      folder_item = _unresolved_2.folder_item;
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      Card = _unresolved_5.Card;
    }, function (_unresolved_6) {
      VList = _unresolved_6.VList;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      CardGroupCoverItem = _unresolved_8.CardGroupCoverItem;
    }, function (_unresolved_9) {
      Goto = _unresolved_9.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd9bc0vDQ5Icb+G2hRCHPxj", "RewardTips", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3', 'path', 'Button', 'Label', 'v3', 'easing', 'tween', 'Sprite', 'SpriteFrame', 'Tween', 'UITransform', 'sp']);

      _export("RewardTips", RewardTips = class RewardTips extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/common/RewardTips";
          this.showEffect = void 0;
          this.cardList = void 0;
          this.itemList = void 0;
          this.bottomCont = void 0;
          this.cardGroupCoverItem = void 0;
          this.okBtn = void 0;
          this.itemDatas = void 0;
          this.cardDatas = void 0;
          this.cardGroupData = void 0;
          this.hideCallBack = void 0;
          this.showCardEnd = void 0;
          this.showItemEnd = void 0;
        }

        onLoad() {
          this.showEffect = this.find("showEffect", sp.Skeleton);
          this.cardList = this.find("cardList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardList.initVisible = this.initVisbleCardList.bind(this);
          this.cardList.clickCell = this.clickCellCardList.bind(this);
          this.cardList.updateCell = this.updateCellCard.bind(this);
          this.itemList = this.find("itemList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.itemList.initVisible = this.initVisbleItemList.bind(this);
          this.itemList.updateCell = this.updateCellItem.bind(this);
          this.bottomCont = this.find("bottomCont");
          this.cardGroupCoverItem = this.find("bottomCont/CardGroupCoverItem").addComponent(_crd && CardGroupCoverItem === void 0 ? (_reportPossibleCrUseOfCardGroupCoverItem({
            error: Error()
          }), CardGroupCoverItem) : CardGroupCoverItem);
          this.okBtn = this.find("bottomCont/okBtn", Button);
          this.okBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        flush(datas, cardGroupData, showCallBack, hideCallBack) {
          console.log("获取奖励弹窗----->");
          this.cardList.node.active = false;
          this.itemList.node.active = false;
          this.showEffect.node.active = false;
          this.cardGroupCoverItem.node.active = false;
          if (showCallBack != null) showCallBack();
          this.hideCallBack = hideCallBack;
          this.cardGroupData = cardGroupData;
          this.initData(datas || []);
        }

        onShow() {}

        onHide() {
          if (this.hideCallBack != null) this.hideCallBack();
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.okBtn:
              this.showGet();
              break;
          }
        }

        initData(datas) {
          this.itemDatas = [];
          this.cardDatas = [];

          for (var data of datas) {
            if (data.card) {
              this.cardDatas.push(data.card);
            }

            if (data.item) {
              this.itemDatas.push(data.item);
            }
          }

          this.itemDatas.sort(this.itemSort.bind(this));
          this.cardDatas.sort(this.cardSort.bind(this));
          this.showCardEnd = false;
          this.showItemEnd = false;
          this.showGet();
        }
        /**排序 */


        itemSort(a, b) {
          var stdA = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(a.id);
          var stdB = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(b.id);
          return stdA.Quality - stdB.Quality;
        }
        /**排序 */


        cardSort(a, b) {
          return a.quality - b.quality;
        }

        showGet() {
          if (!this.showCardEnd && this.cardDatas.length > 0) {
            if (this.cardGroupData) {
              this.cardGroupCoverItem.node.active = true;
              this.cardGroupCoverItem.SetData(this.cardGroupData, false);
            }

            this.showGetCard();
            this.showCardEnd = true;
            return;
          }

          this.showCardEnd = true;

          if (!this.showItemEnd && this.itemDatas.length > 0) {
            this.showGetItem();
            this.showItemEnd = true;
            return;
          }

          this.Hide();
        }

        showGetCard() {
          this.okBtn.node.active = false;
          this.cardList.node.active = true;
          var listTrans = this.cardList.node.getComponent(UITransform);
          var viewTrans = this.cardList.node.getChildByName("view").getComponent(UITransform);
          var width;
          var height;

          if (this.cardDatas.length <= 6) {
            width = 164 * this.cardDatas.length;
            height = 214;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
          } else {
            width = 1050;
            height = 450;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
          }

          this.cardList.cellCount = this.cardDatas.length;
        }

        showGetItem() {
          this.okBtn.node.active = false;
          this.cardGroupCoverItem.node.active = false;
          this.cardList.node.active = false;
          this.itemList.node.active = true;
          var listTrans = this.itemList.node.getComponent(UITransform);
          var viewTrans = this.itemList.node.getChildByName("view").getComponent(UITransform);
          var width;
          var height;

          if (this.itemDatas.length <= 5) {
            width = 150 * this.itemDatas.length;
            height = 160;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
          } else {
            width = 750;
            height = 398;
            listTrans.setContentSize(width, height);
            viewTrans.setContentSize(width, height);
          }

          this.itemList.cellCount = this.itemDatas.length;
        }

        initVisbleItemList() {
          var cellList = this.itemList.visibleCellList;
          this.toNodeTween(cellList);
        }

        toNodeTween(cellList) {
          this.showEffect.node.active = true;
          this.showEffect.clearAnimation();
          this.showEffect.setAnimation(0, "start", false);
          var delayTime = this.showAwardTween(cellList, 0.2, 0.1);
          this.scheduleOnce(() => {
            this.okBtn.node.active = true;
            this.bottomCont.setScale(0, 0, 0);
            tween(this.bottomCont).to(0.3, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: easing.backOut
            }).start();
          }, delayTime);
        }

        updateCellItem(cell, cellInfo) {
          var itemData = this.itemDatas[cellInfo.index];
          var stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(itemData.id);
          var bg = cell.getChildByName("bg").getComponent(Sprite);
          var icon = cell.getChildByName("icon").getComponent(Sprite);
          var numLab = cell.getChildByName("numLab").getComponent(Label);
          var nameLab = cell.getChildByName("nameLab").getComponent(Label);
          var effect = cell.getChildByName("effect");
          effect.active = false;
          numLab.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(itemData.count);
          nameLab.string = stdItem.ItemName;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub("sheets/bag/Quality" + stdItem.Quality + "/spriteFrame", SpriteFrame, res => {
            bg.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
            error: Error()
          }), folder_item) : folder_item, stdItem.Icon, "spriteFrame"), SpriteFrame, res => {
            icon.spriteFrame = res;
          });
        }

        initVisbleCardList() {
          var cellList = this.cardList.visibleCellList;
          this.toNodeTween(cellList);
        }

        clickCellCardList(cell, cellInfo) {
          var cardData = this.cardDatas[cellInfo.index];
          (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
            error: Error()
          }), Goto) : Goto)("CardTipsPanel", cardData.cardId);
        }

        updateCellCard(cell, cellInfo) {
          var cardData = this.cardDatas[cellInfo.index];
          var card = cell.getChildByName("Cards");
          var cardCom = card.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card) || card.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          cardCom.setIsShowUpEffect(false);
          cardCom.SetData(cardData);
        }

        showAwardTween(nodeList, t, d, s, e) {
          if (t === void 0) {
            t = 0.2;
          }

          if (d === void 0) {
            d = 0.05;
          }

          if (s === void 0) {
            s = 0;
          }

          if (e === void 0) {
            e = 1;
          }

          var node;
          var totalTime;

          for (var index = 0; index < nodeList.length; index++) {
            node = nodeList[index];
            Tween.stopAllByTarget(node);
            node.setScale(s, s, s);
            totalTime = (index + 1) * d;
            tween(node).delay((index + 1) * d).to(t, {
              scale: new Vec3(e, e, e)
            }, {
              easing: easing.backOut
            }).call(this.playItemEffect.bind(this, node)).start();
          }

          return totalTime += t;
        }

        playItemEffect(node) {
          var _node$getChildByName;

          var effect = (_node$getChildByName = node.getChildByName("effect")) == null ? void 0 : _node$getChildByName.getComponent(sp.Skeleton);

          if (effect) {
            effect.node.active = true;
            effect.clearAnimation();
            effect.setAnimation(0, "animation", false);
            effect.setCompleteListener(() => {
              effect.node.active = false;
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c978a56e06ac9bdb6ab3a13005b3b5068f0ce52.js.map