System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, ProgressBar, sp, Sprite, v3, path, SpriteFrame, tween, Vec3, easing, UITransform, NodePool, instantiate, SpriteLabel, Panel, Card, proto, CfgMgr, ItemType, PlayerData, folder_item, ResMgr, Utils, Bezier, Goto, SeasonSettlePanel, _crd;

  function _reportPossibleCrUseOfSpriteLabel(extras) {
    _reporterNs.report("SpriteLabel", "../../component/SpriteLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../cards/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCardUpgrade(extras) {
    _reporterNs.report("StdCardUpgrade", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdItem(extras) {
    _reporterNs.report("StdItem", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPvpLevel(extras) {
    _reporterNs.report("StdPvpLevel", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdPVPSnatch(extras) {
    _reporterNs.report("StdPVPSnatch", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_item(extras) {
    _reporterNs.report("folder_item", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBezier(extras) {
    _reporterNs.report("Bezier", "../../utils/Bezier", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoto(extras) {
    _reporterNs.report("Goto", "../../DL", _context.meta, extras);
  }

  _export("SeasonSettlePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      path = _cc.path;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      easing = _cc.easing;
      UITransform = _cc.UITransform;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      SpriteLabel = _unresolved_2.SpriteLabel;
    }, function (_unresolved_3) {
      Panel = _unresolved_3.Panel;
    }, function (_unresolved_4) {
      Card = _unresolved_4.Card;
    }, function (_unresolved_5) {
      proto = _unresolved_5.default;
    }, function (_unresolved_6) {
      CfgMgr = _unresolved_6.CfgMgr;
      ItemType = _unresolved_6.ItemType;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.PlayerData;
    }, function (_unresolved_8) {
      folder_item = _unresolved_8.folder_item;
      ResMgr = _unresolved_8.ResMgr;
    }, function (_unresolved_9) {
      Utils = _unresolved_9.Utils;
    }, function (_unresolved_10) {
      Bezier = _unresolved_10.Bezier;
    }, function (_unresolved_11) {
      Goto = _unresolved_11.Goto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "566cebHg1pEUKk18W75lUWr", "SeasonSettlePanel", undefined);

      __checkObsolete__(['Node', 'Button', 'Label', 'ProgressBar', 'sp', 'Sprite', 'v3', 'path', 'SpriteFrame', 'tween', 'Vec3', 'easing', 'UITransform', 'NodePool', 'instantiate']);

      _export("SeasonSettlePanel", SeasonSettlePanel = class SeasonSettlePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/fight/SeasonSettlePanel";
          this.maskBtn = void 0;
          this.sectionCont = void 0;
          this.doubleCont = void 0;
          this.tempPointImg = void 0;
          this.doubleNumLab = void 0;
          this.sectionIcon = void 0;
          this.sectionNameImg = void 0;
          this.starCont = void 0;
          this.maxStarCont = void 0;
          this.maxStarNumLab = void 0;
          this.expNumCont = void 0;
          this.expLineBg = void 0;
          this.curNumLab = void 0;
          this.maxNumLab = void 0;
          this.pro = void 0;
          this.resultImg = void 0;
          this.getAwardBtn = void 0;
          this.bomEffect = void 0;
          this.awardCont = void 0;
          this.getEffect = void 0;
          this.card = void 0;
          this.cont = void 0;
          this.itemCont = void 0;
          this.itemIcon = void 0;
          this.itemCurLab = void 0;
          this.itemNeedNumLab = void 0;
          this.cardUpBtn = void 0;
          this.maxQualLab = void 0;
          this.upCardData = void 0;
          this.data = void 0;
          this.curStdPVPSnatch = void 0;
          this.flyPool = new NodePool();
          this.flyNum = void 0;
          this.hideCallBack = void 0;
          this.showCallBack = void 0;
          this.oldStar = void 0;
          this.playerId = void 0;
        }

        onLoad() {
          this.maskBtn = this.find("mask", Button);
          this.sectionCont = this.find("sectionCont");
          this.doubleCont = this.find("sectionCont/doubleCont");
          this.doubleNumLab = this.find("sectionCont/doubleCont/effect/doubleNumLab").addComponent(_crd && SpriteLabel === void 0 ? (_reportPossibleCrUseOfSpriteLabel({
            error: Error()
          }), SpriteLabel) : SpriteLabel);
          this.doubleNumLab.font = "sheets/numberImg/num2";
          this.sectionIcon = this.find("sectionCont/sectionCont/sectionIcon", Sprite);
          this.sectionNameImg = this.find("sectionCont/sectionCont/sectionNameImg", Sprite);
          this.expNumCont = this.find("sectionCont/sectionCont/expCont");
          this.expLineBg = this.find("sectionCont/sectionCont/expCont/expLineBg");
          this.curNumLab = this.find("sectionCont/sectionCont/expCont/numCont/curNumLab", Label);
          this.maxNumLab = this.find("sectionCont/sectionCont/expCont/numCont/maxNumLab", Label);
          this.starCont = this.find("sectionCont/sectionCont/starCont");
          this.maxStarCont = this.find("sectionCont/sectionCont/maxStarCont");
          this.maxStarNumLab = this.find("sectionCont/sectionCont/maxStarCont/maxStarNumLab", Label);
          this.pro = this.find("sectionCont/sectionCont/pro", ProgressBar);
          this.resultImg = this.find("sectionCont/resultImg", Sprite);
          this.getAwardBtn = this.find("sectionCont/getAwardBtn", Button);
          this.bomEffect = this.find("sectionCont/bomEffect", sp.Skeleton);
          this.tempPointImg = this.find("tempPointImg");
          this.awardCont = this.find("awardCont");
          this.getEffect = this.find("awardCont/getEffect", sp.Skeleton);
          this.card = this.find("awardCont/Cards").addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          this.cont = this.find("awardCont/cont");
          this.itemCont = this.find("awardCont/cont/itemCont");
          this.itemIcon = this.find("awardCont/cont/itemCont/icon", Sprite);
          this.itemCurLab = this.find("awardCont/cont/itemCont/numCont/curNumLab", Label);
          this.itemNeedNumLab = this.find("awardCont/cont/itemCont/numCont/needNumLab", Label);
          this.cardUpBtn = this.find("awardCont/cont/cardUpBtn", Button);
          this.maxQualLab = this.find("awardCont/cont/maxQualLab", Label);
          this.getAwardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.maskBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.cardUpBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        onShow() {
          if (this.showCallBack != null) this.showCallBack();
          this.sectionCont.active = false;
          this.awardCont.active = false;
          this.bomEffect.node.active = false;
        }

        onHide(...args) {
          if (this.hideCallBack != null) this.hideCallBack();
          this.hideCallBack = null;
        }
        /**
         * 刷新战斗ui
         * @param data 
         */


        flush(data, playerId, showCallBack, hideCallBack) {
          this.sectionCont.active = false;
          this.awardCont.active = false;
          this.data = data;
          this.playerId = playerId;
          if (showCallBack != null) showCallBack();
          this.hideCallBack = hideCallBack;
          /* if (!this.data) {
              let newData = proto.pb.PlayerPvpRankBattleSettlePush.create();
              newData.rankRecord = proto.base.PlayerPvpRankRecord.create();
              newData.rankRecord.doublingTimes = 4;
              newData.rankRecord.pointAfter = 850;
              newData.rankRecord.pointBefore = 780;
              newData.rankRecord.seasonId = 10001;
              newData.rankRecord.roomId = "101";
              this.data = newData;
          } */

          this.curStdPVPSnatch = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPVPSnatch(this.data.rankRecord.seasonId);
          this.showSection();
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.maskBtn:
              this.Hide();
              break;

            case this.cardUpBtn:
              this.Hide();
              (_crd && Goto === void 0 ? (_reportPossibleCrUseOfGoto({
                error: Error()
              }), Goto) : Goto)("CardInfoPanel", this.upCardData, null, null, true);
              break;

            case this.getAwardBtn:
              this.showGetAward();
              break;
          }
        }

        showSection() {
          this.sectionCont.active = true;
          this.getAwardBtn.node.active = false;
          this.maskBtn.interactable = false;
          let base = 1;
          let doubleCont = this.data.rankRecord.doublingTimes;
          base = base * Math.pow(2, doubleCont);
          this.doubleNumLab.string = base.toString();
          let resultStr = "";

          if (this.data.rankRecord.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultTie) {
            resultStr = "draw";
          } else if (this.data.rankRecord.result == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).base.PvpResult.PvpResultWin) {
            resultStr = "win";
          } else {
            resultStr = "lost";
          }

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/fight", resultStr, "spriteFrame"), SpriteFrame, res => {
            this.resultImg.spriteFrame = res;
          });
          this.setSection(this.data.rankRecord.pointBefore);
          let addPoint = this.data.rankRecord.pointAfter - this.data.rankRecord.pointBefore;

          if (addPoint > 0) {
            let posA = v3(this.doubleCont.worldPosition.x, this.doubleCont.worldPosition.y + 40);
            let posB = v3(this.pro.barSprite.node.worldPosition.x + this.pro.barSprite.node.getComponent(UITransform).width, this.pro.barSprite.node.worldPosition.y);
            this.creatFlyPoint(posA, posB, addPoint);
            this.bomEffect.node.worldPosition = posB.clone(); //this.bomEffect.node.active = true;

            this.bomEffect.setCompleteListener(() => {
              this.bomEffect.node.active = false;
            });
          } else {
            this.sectionShowEnd();
          }
        }

        creatFlyPoint(posA, posB, num) {
          let pos1 = new Vec3(posA.x + 100, posA.y - 200);
          let pos2 = new Vec3(posA.x + 200, posA.y + 100);
          let pos3 = new Vec3(posA.x + 300, posA.y + 200);
          this.flyNum = num;
          let flyNode;

          for (let index = 0; index < num; index++) {
            flyNode = this.flyPool.get() || instantiate(this.tempPointImg);
            flyNode.active = true;
            flyNode.parent = this.node;
            flyNode.position = posA;
            this.flyPoint(flyNode, index * 0.05, posA, posB, [pos1, pos2, pos3]);
          }
        }

        flyPoint(node, delay, posA, posB, partPos) {
          let bezier = (_crd && Bezier === void 0 ? (_reportPossibleCrUseOfBezier({
            error: Error()
          }), Bezier) : Bezier).create(posA, posB, partPos);

          let update = (target, ratio) => {
            if (bezier) {
              let v = bezier.update(ratio);
              bezier && target.setWorldPosition(v);
            }
          };

          tween(node).delay(delay).to(0.2, {}, {
            onUpdate: update
          }).call(() => {
            this.bomEffect.node.active = true;
            this.bomEffect.clearAnimation();
            this.bomEffect.setAnimation(0, "animation", false);
            this.flyPool.put(node);
            this.flyNum--;

            if (this.flyNum <= 0) {
              this.setNewSection();
            }
          }).start();
        }

        setSection(rankPoints, isChange = false) {
          let curStdPvpLv = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, rankPoints);
          let point = Math.max(rankPoints - curStdPvpLv.LevelPoints, 0);
          let curStar = Math.floor(point / curStdPvpLv.StarPoints);
          let maxStar = curStdPvpLv.Star - 1;

          if (curStdPvpLv.Star == 1) {
            this.starCont.active = false;
            this.expLineBg.active = false;
            this.maxStarCont.active = true;
            this.maxStarNumLab.string = `x ${curStar}`;
            this.expNumCont.position = v3(296, -268, 0);
            let starNode = this.maxStarCont.getChildByName("star");
            let bright = starNode.getChildByName("bright").getComponent(sp.Skeleton);
            let isShowEffect = isChange && curStar > 0 && curStar > this.oldStar;
            bright.node.active = curStar > 0;

            if (isShowEffect) {
              bright.clearAnimation();
              bright.setAnimation(0, `show`, false);
              bright.setCompleteListener(() => {
                bright.setAnimation(0, `loop`, true);
              });
            } else {
              bright.setAnimation(0, `loop`, true);
            }
          } else {
            this.maxStarCont.active = false;
            this.expLineBg.active = true;
            this.starCont.active = true;
            this.expNumCont.position = v3(0, -194, 0);

            for (let index = 0; index < this.starCont.children.length; index++) {
              let starNode = this.starCont.children[index];

              if (index < maxStar) {
                starNode.active = true;
                let bright = starNode.getChildByName("bright").getComponent(sp.Skeleton);
                let isShowEffect = isChange && !bright.node.active;
                bright.node.active = curStar > index;

                if (isShowEffect) {
                  bright.clearAnimation();
                  bright.setAnimation(0, `show`, false);
                  bright.setCompleteListener(() => {
                    bright.setAnimation(0, `loop`, true);
                  });
                } else {
                  bright.setAnimation(0, `loop`, true);
                }
              } else {
                starNode.active = false;
              }
            }
          }

          this.oldStar = curStar;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/sectionIcon", curStdPvpLv.LevelIcon, "spriteFrame"), SpriteFrame, res => {
            this.sectionIcon.spriteFrame = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(path.join("sheets/sectionIcon", curStdPvpLv.LevelNameImg, "spriteFrame"), SpriteFrame, res => {
            this.sectionNameImg.spriteFrame = res;
          });
          let curExp = point % curStdPvpLv.StarPoints;
          let mapExp = curStdPvpLv.StarPoints;
          this.curNumLab.string = curExp.toString();
          this.maxNumLab.string = mapExp.toString();
          this.pro.progress = curExp / mapExp;
        }

        setNewSection() {
          /* this.setSection(this.data.rankRecord.pointAfter);
          this.sectionShowEnd();
          return; */
          let addPoint = this.data.rankRecord.pointAfter - this.data.rankRecord.pointBefore;

          for (let index = 0; index < addPoint; index++) {
            let point = this.data.rankRecord.pointBefore + (index + 1);
            this.changeSection(index * 0.05, point, this.data.rankRecord.pointAfter);
          }
          /* let starStd: StdPvpLevel = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.data.rankRecord.pointBefore);
          let endStd: StdPvpLevel = CfgMgr.GetStdPvpLvByPoint(this.curStdPVPSnatch.RankGroupID, this.data.rankRecord.pointAfter);
          let stdLvList: StdPvpLevel[] = CfgMgr.GetStdPvpLvListByPoint(this.curStdPVPSnatch.RankGroupID, starStd.LevelPoints, endStd.LevelPoints);
          for (let index = 0; index < stdLvList.length; index++) {
              let std = stdLvList[index];
              
          } */

        }

        changeSection(d, point, newPoint) {
          this.scheduleOnce(() => {
            this.setSection(point, true);

            if (point == newPoint) {
              this.sectionShowEnd();
            }
          }, d);
        }

        sectionShowEnd() {
          if (!this.data.rewardThings || this.data.rewardThings.length < 1) {
            this.maskBtn.interactable = true;
          } else {
            this.getAwardBtn.node.active = true;
          }
        }

        showGetAward() {
          this.awardCont.active = true;
          this.sectionCont.active = false;
          this.maxQualLab.node.active = false;
          this.cardUpBtn.node.active = false;
          this.itemCont.active = false;
          this.upCardData = null;
          this.card.node.active = false;
          this.getEffect.node.active = true;
          this.getEffect.clearAnimation();
          this.getEffect.setAnimation(0, `start`, false);
          this.getEffect.setCompleteListener(() => {//this.getEffect.node.active = false;
          });
          this.scheduleOnce(() => {
            this.showAward();
          }, 0.3);
        }

        showAward() {
          this.card.node.scale = v3(0.5, 0.5, 1);
          let awardItem = this.data.rewardThings[0].item;
          let stdItem = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).Getitem(awardItem.id);

          if (stdItem && stdItem.Itemtpye == (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).piece) {
            let cardDatas = this.data.rankRecord.battlePlayers[this.playerId].cards;
            this.upCardData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetCardDataByItemId(awardItem.id, cardDatas);
          }

          if (this.upCardData) {
            this.card.node.active = true;
            this.card.SetData(this.upCardData);
            let haveNum = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).GetItemCount(awardItem.id);
            let upgradeList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCardUpgradeList(this.upCardData.cardId);
            let nextUpgrade = upgradeList[this.upCardData.quality];
            let costItemId;
            let costItemNum;

            if (nextUpgrade) {
              for (let index = 0; index < nextUpgrade.CostItemIds.length; index++) {
                if (nextUpgrade.CostItemIds[index] == awardItem.id) {
                  costItemId = nextUpgrade.CostItemIds[index];
                  costItemNum = nextUpgrade.CostItemNums[index];
                  break;
                }
              }
            }

            if (costItemId) {
              let std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).Getitem(costItemId);

              if (std) {
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_item === void 0 ? (_reportPossibleCrUseOffolder_item({
                  error: Error()
                }), folder_item) : folder_item, std.Icon, "spriteFrame"), SpriteFrame, res => {
                  this.itemIcon.spriteFrame = res;
                });
              }

              this.itemCont.active = true;
              let colorStr;

              if (haveNum >= costItemNum) {
                this.cardUpBtn.node.active = true;
                colorStr = "#F9DE73";
              } else {
                colorStr = "#D64532";
              }

              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).NumberRool(this.itemCurLab, awardItem.count, haveNum);
              this.itemNeedNumLab.string = `/${costItemNum}`;
            } else {
              this.maxQualLab.node.active = true;
            }
          }

          tween(this.card.node).to(0.3, {
            scale: new Vec3(1.4, 1.4, 1)
          }, {
            easing: easing.backOut
          }).call(() => {
            this.cont.active = true;
            this.maskBtn.interactable = true;
          }).start();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1c83b403406c2c264c18f52ac8b4376aba3d435.js.map