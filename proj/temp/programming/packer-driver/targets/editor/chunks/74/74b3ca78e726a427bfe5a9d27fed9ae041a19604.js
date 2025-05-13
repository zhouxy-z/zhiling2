System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Battle_Area_to_HandCard, Battle_HandCard_To_Area, EventMgr, GameScene, Tips, Second, GameLogic, _crd;

  function _reportPossibleCrUseOfBattle_Area_to_HandCard(extras) {
    _reporterNs.report("Battle_Area_to_HandCard", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattle_HandCard_To_Area(extras) {
    _reporterNs.report("Battle_HandCard_To_Area", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "./GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../common/Tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase(extras) {
    _reporterNs.report("base", "../../net/proto/BaseUtils", _context.meta, extras);
  }

  _export("GameLogic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Battle_Area_to_HandCard = _unresolved_2.Battle_Area_to_HandCard;
      Battle_HandCard_To_Area = _unresolved_2.Battle_HandCard_To_Area;
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      GameScene = _unresolved_3.GameScene;
    }, function (_unresolved_4) {
      Tips = _unresolved_4.Tips;
    }, function (_unresolved_5) {
      Second = _unresolved_5.Second;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d30d03JXLBLeKN7WT5moyk6", "GameLogic", undefined);

      /**
       * 战斗逻辑
       */
      _export("GameLogic", GameLogic = class GameLogic {
        // 本轮的操作
        /////////////////////////////////////////////////////////////////////////////////////
        //       操作
        /////////////////////////////////////////////////////////////////////////////////////

        /**出牌 */
        static playCard(cardId, area) {
          for (let i = this.handCards.length - 1; i >= 0; i--) {
            let data = this.handCards[i];

            if (data && data.instId == cardId) {
              if (this.myArea[area].indexOf(data) != -1) {
                (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
                  error: Error()
                }), GameScene) : GameScene).isntance.FlushHandCard(this.handCards);
              } else {
                this.handCards.splice(i, 1);
                let index = this.myArea[area].length;
                this.myArea[area].push(data);
                this.round_opreate.push({
                  card: data,
                  area: area,
                  handIndex: i
                }); //GameScene.getIsntance().lastOperateId = data.instId;

                (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
                  error: Error()
                }), GameScene) : GameScene).isntance.SendMyCardToArea(data, area, index);
                (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
                  error: Error()
                }), GameScene) : GameScene).isntance.FlushHandCard(this.handCards);
              }

              return data;
            }
          }

          throw "找不到此牌 instId:" + cardId + "area:" + area;
        }
        /**返回手牌 */


        static getBack(cardId) {
          if (this.handCards.find(value => value.instId == cardId)) {
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("此牌已在手牌里");
          } else {
            let data = this.round_opreate[this.round_opreate.length - 1];

            if (data.card.instId == cardId) {
              let index = this.myArea[data.area].indexOf(data.card);
              if (index != -1) this.myArea[data.area].splice(index, 1);
              this.round_opreate.pop();

              if (this.round_opreate.length) {//GameScene.getIsntance().lastOperateId = this.round_opreate[this.round_opreate.length].card.instId;
              }

              this.handCards.splice(data.handIndex, 0, data.card);
              (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
                error: Error()
              }), GameScene) : GameScene).isntance.FlushHandCard(this.handCards);
            } else {
              (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
                error: Error()
              }), GameScene) : GameScene).isntance.LayoutAllArea();
            }
          }
        } /////////////////////////////////////////////////////////////////////////////////////
        //       主流程
        /////////////////////////////////////////////////////////////////////////////////////

        /**
         * 开始游戏
         * @param handCards 
         * @param myArea 
         * @param adArea 
         */


        static async Enter(handCards, myArea, adArea) {
          if (handCards) this.handCards = handCards;
          if (myArea) this.myArea = myArea;
          if (adArea) this.adArea = adArea;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_HandCard_To_Area === void 0 ? (_reportPossibleCrUseOfBattle_HandCard_To_Area({
            error: Error()
          }), Battle_HandCard_To_Area) : Battle_HandCard_To_Area, this.playCard, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Battle_Area_to_HandCard === void 0 ? (_reportPossibleCrUseOfBattle_Area_to_HandCard({
            error: Error()
          }), Battle_Area_to_HandCard) : Battle_Area_to_HandCard, this.getBack, this); // 初始手牌

          for (let data of handCards) {
            (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
              error: Error()
            }), GameScene) : GameScene).isntance.AddHandCard(data);
            await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
              error: Error()
            }), Second) : Second)(0.1);
          }
        }
        /**同步新回合开始 */


        static Round_New() {
          this.round_opreate = []; //GameScene.getIsntance().lastOperateId = undefined;
        }
        /**同步取消结束回合状态 */


        static Round_Resume() {}
        /**同步盖牌状态 */


        static Round_End() {//GameScene.getIsntance().CloseCard(this.round_opreate);
        }
        /**同步回合揭示和战斗表现 */


        static Round_Play() {
          //GameScene.getIsntance().ShowCard(this.round_opreate);
          //清理手牌参数
          //GameScene.getIsntance().lastOperateId = undefined;
          this.round_opreate = undefined;
        }
        /**同步回合结算 */


        static Round_Settlement() {}

      });

      GameLogic.handCards = [];
      // 手牌
      GameLogic.myArea = [];
      // 自己区域
      GameLogic.adArea = [[], [], []];
      // 对手区域
      GameLogic.round_opreate = [];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74b3ca78e726a427bfe5a9d27fed9ae041a19604.js.map