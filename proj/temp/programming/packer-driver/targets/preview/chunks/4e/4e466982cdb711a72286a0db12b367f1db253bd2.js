System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, sp, path, RichText, EditBox, Panel, Session, PlayerData, EventMgr, Evt_BattleCreatRoomResult, battleDataMgr, MsgPanel, FightLogPanel, CfgMgr, VList, ResMgr, LocalStorage, proto, Req, Route, RoomPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../net/Session", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvt_BattleCreatRoomResult(extras) {
    _reporterNs.report("Evt_BattleCreatRoomResult", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbattleDataMgr(extras) {
    _reporterNs.report("battleDataMgr", "../battle/BattleDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPanel(extras) {
    _reporterNs.report("MsgPanel", "../common/MsgPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLogPanel(extras) {
    _reporterNs.report("FightLogPanel", "../fight/FightLogPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdAIGroup(extras) {
    _reporterNs.report("StdAIGroup", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdArea(extras) {
    _reporterNs.report("StdArea", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdCard(extras) {
    _reporterNs.report("StdCard", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellInfo(extras) {
    _reporterNs.report("CellInfo", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVList(extras) {
    _reporterNs.report("VList", "../../component/VList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../utils/LocalStorage", _context.meta, extras);
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

  _export("RoomPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      sp = _cc.sp;
      path = _cc.path;
      RichText = _cc.RichText;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
      Evt_BattleCreatRoomResult = _unresolved_5.Evt_BattleCreatRoomResult;
    }, function (_unresolved_6) {
      battleDataMgr = _unresolved_6.battleDataMgr;
    }, function (_unresolved_7) {
      MsgPanel = _unresolved_7.MsgPanel;
    }, function (_unresolved_8) {
      FightLogPanel = _unresolved_8.FightLogPanel;
    }, function (_unresolved_9) {
      CfgMgr = _unresolved_9.CfgMgr;
    }, function (_unresolved_10) {
      VList = _unresolved_10.VList;
    }, function (_unresolved_11) {
      ResMgr = _unresolved_11.ResMgr;
    }, function (_unresolved_12) {
      LocalStorage = _unresolved_12.default;
    }, function (_unresolved_13) {
      proto = _unresolved_13.default;
      Req = _unresolved_13.Req;
      Route = _unresolved_13.Route;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0266a7OWXlODZk5tkfzqPad", "RoomPanel", undefined);

      __checkObsolete__(['Node', 'Button', 'Label', 'sp', 'path', 'RichText', 'EditBox', 'js']);

      _export("RoomPanel", RoomPanel = class RoomPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/room/RoomPanel";
          this.terrainCont = void 0;
          this.terrainBtn = void 0;
          this.terrainList = void 0;
          this.selectTerrainList = void 0;
          this.setAreaBtn = void 0;
          this.areaLab = void 0;
          this.setAiIdBtn = void 0;
          this.aiIdLab = void 0;
          this.aiIdCont = void 0;
          this.aiIdBtn = void 0;
          this.aiIdList = void 0;
          this.selectAiIndx = 0;
          this.setAiCardBtn = void 0;
          this.aiCardLab = void 0;
          this.cardCont = void 0;
          this.cardList = void 0;
          this.selecCardList = void 0;
          this.seekLab = void 0;
          this.seekBtn = void 0;
          this.seekBtnLab = void 0;
          this.isClearSeek = void 0;
          this.cardBtn = void 0;
          this.setMyCardBtn = void 0;
          this.myCardLab = void 0;
          this.btn = void 0;
          //创建房间
          this.btnLab = void 0;
          this.closeBtn = void 0;
          this.fightLogBtn = void 0;
          this.defTerrainId = [];
          this.defAiCardId = [];
          this.defMyCardId = [];
          this.defAiId = void 0;
          this.aiList = void 0;
          this.areaList = void 0;
          this.stdCardList = void 0;
          this.curCardList = void 0;
          this.setCardType = void 0;
        }

        onLoad() {
          this.areaList = [];
          var temoAreaList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).AreaList;

          for (var std of temoAreaList) {
            if (std.IsOpen) {
              this.areaList.push(std);
            }
          }

          this.aiList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).AIGroupList;
          this.stdCardList = [];
          var tempCardList = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).CardList;

          for (var _std of tempCardList) {
            if (_std.IsOpen) {
              this.stdCardList.push(_std);
            }
          }

          this.setAreaBtn = this.find("setAreaBtn", Button);
          this.areaLab = this.find("areaLab", Label);
          this.terrainCont = this.find("terrainCont");
          this.terrainList = this.find("terrainCont/terrainList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.selectTerrainList = this.find("terrainCont/selectTerrainList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.terrainBtn = this.find("terrainCont/terrainBtn", Button);
          this.setAiIdBtn = this.find("setAiIdBtn", Button);
          this.aiIdLab = this.find("aiIdLab", Label);
          this.aiIdCont = this.find("aiIdCont");
          this.aiIdList = this.find("aiIdCont/aiIdList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.aiIdBtn = this.find("aiIdCont/aiIdBtn", Button);
          this.setAiCardBtn = this.find("setAiCardBtn", Button);
          this.aiCardLab = this.find("aiCardLab", Label);
          this.setMyCardBtn = this.find("setMyCardBtn", Button);
          this.myCardLab = this.find("myCardLab", Label);
          this.cardCont = this.find("cardCont");
          this.cardList = this.find("cardCont/cardList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.selecCardList = this.find("cardCont/selectCardList", _crd && VList === void 0 ? (_reportPossibleCrUseOfVList({
            error: Error()
          }), VList) : VList);
          this.cardBtn = this.find("cardCont/cardBtn", Button);
          this.seekLab = this.find("cardCont/seekLab", EditBox);
          this.seekBtn = this.find("cardCont/seekBtn", Button);
          this.seekBtnLab = this.find("cardCont/seekBtn/btnLab", Label);
          var defAiId = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetNumber("test_ai", undefined);

          if (defAiId) {
            var tepmAiId = undefined;

            for (var index = 0; index < (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).AIGroupList.length; index++) {
              var aiGrop = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).AIGroupList[index];

              if (defAiId == aiGrop.AIGroupID) {
                tepmAiId = defAiId;
                break;
              }
            }

            this.defAiId = tepmAiId;
          }

          if (this.defAiId == undefined) this.defAiId = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).AIGroupList[0].AIGroupID;
          var areas = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetString("test_area", undefined);

          if (areas) {
            var tepmAreasIds = [];
            var localData = JSON.parse(areas);

            for (var _index = 0; _index < localData.length; _index++) {
              var areaId = localData[_index];
              var stdArea = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).getArea(areaId);

              if (stdArea && stdArea.IsOpen) {
                tepmAreasIds.push(areaId);
              }
            }

            this.defTerrainId = tepmAreasIds;
          } else {
            this.defTerrainId = [];
            var stds = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("Area");

            for (var k in stds) {
              var _stdArea = stds[k];
              if (_stdArea.IsOpen) this.defTerrainId.push(Number(k));
              if (this.defTerrainId.length >= 3) break;
            }
          }

          var ads = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetString("test_ads", undefined);

          if (ads) {
            var tepmAdCardIds = [];

            var _localData = JSON.parse(ads);

            for (var _index2 = 0; _index2 < _localData.length; _index2++) {
              var cardId = _localData[_index2];

              var _std2 = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(cardId);

              if (_std2 && _std2.IsOpen) {
                tepmAdCardIds.push(cardId);
              }
            }

            this.defAiCardId = tepmAdCardIds;
          } else {
            this.defAiCardId = [];

            var _stds = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("Card");

            for (var _k in _stds) {
              var _std3 = _stds[_k];
              if (_std3.IsOpen) this.defAiCardId.push(Number(_k));
              if (this.defAiCardId.length > 6) break;
            }
          }

          var mys = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).GetString("test_mys", undefined);

          if (mys) {
            var tepmMyCardIds = [];

            var _localData2 = JSON.parse(mys);

            for (var _index3 = 0; _index3 < _localData2.length; _index3++) {
              var _cardId = _localData2[_index3];
              var stdCard = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCard(_cardId);

              if (stdCard && stdCard.IsOpen) {
                tepmMyCardIds.push(_cardId);
              }
            }

            this.defMyCardId = tepmMyCardIds;
          } else {
            this.defMyCardId = [];

            var _stds2 = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).Get("Card");

            for (var _k2 in _stds2) {
              var _stdCard = _stds2[_k2];
              if (_stdCard.IsOpen) this.defMyCardId.push(Number(_k2));
              if (this.defMyCardId.length > 6) break;
            }
          }

          this.terrainList.updateCell = (cell, cellInfo) => {
            var std = this.areaList[cellInfo.index];
            cell.getChildByName("idLab").getComponent(Label).string = std.AreaID.toString();
            cell.getChildByName("nameLab").getComponent(Label).string = std.AreaName;
            var skillDesc = "";

            for (var _index4 = 0; _index4 < std.AreaAffect.length; _index4++) {
              var skill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCardSkill(std.AreaAffect[_index4]);

              if (skill) {
                skillDesc += skill.SkillId + "-->" + skill.Desc;

                if (_index4 < std.AreaAffect.length) {
                  skillDesc += "\n";
                }
              }
            }

            cell.getChildByName("descLab").getComponent(RichText).string = skillDesc;
          };

          this.terrainList.clickCell = (cell, cellInfo) => {
            if (this.defTerrainId.length >= 3) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("最多只能选则3个地形");
              return;
            }

            var std = this.areaList[cellInfo.index];
            this.defTerrainId.push(std.AreaID);
            this.selectTerrainList.cellCount = this.defTerrainId.length;
            this.updateArea();
          };

          this.terrainList.cellCount = this.areaList.length;

          this.selectTerrainList.updateCell = (cell, cellInfo, lastCell, lastInfo) => {
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).getArea(this.defTerrainId[cellInfo.index]);
            cell.getChildByName("idLab").getComponent(Label).string = std.AreaID.toString();
            cell.getChildByName("nameLab").getComponent(Label).string = std.AreaName;
            var skillDesc = "";

            for (var _index5 = 0; _index5 < std.AreaAffect.length; _index5++) {
              var skill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCardSkill(std.AreaAffect[_index5]);

              if (skill) {
                skillDesc += skill.SkillId + "-->" + skill.Desc;

                if (_index5 < std.AreaAffect.length) {
                  skillDesc += "\n";
                }
              }
            }

            cell.getChildByName("descLab").getComponent(RichText).string = skillDesc;
          };

          this.selectTerrainList.clickCell = (cell, cellInfo) => {
            this.defTerrainId.splice(cellInfo.index, 1);
            this.selectTerrainList.cellCount = this.defTerrainId.length;
            this.updateArea();
          };

          this.aiIdList.updateCell = (cell, cellInfo) => {
            var std = this.aiList[cellInfo.index];
            cell.getChildByName("idLab").getComponent(Label).string = std.AIGroupID.toString();
            cell.getChildByName("select").active = cellInfo.isSelect;
          };

          this.aiIdList.selectCell = (cell, cellInfo, lastCell, lastInfo) => {
            if (cell) cell.getChildByName("select").active = cellInfo.isSelect;
            if (lastCell && lastInfo) lastCell.getChildByName("select").active = lastInfo.isSelect;
            var std = this.aiList[cellInfo.index];
            this.selectAiId(cellInfo.index);
          };

          this.aiIdList.cellCount = this.aiList.length;

          this.cardList.updateCell = (cell, cellInfo) => {
            var std = this.curCardList[cellInfo.index];
            cell.getChildByPath("cost/label").getComponent(Label).string = std.Cost.toString();
            cell.getChildByPath("power/label").getComponent(Label).string = std.Power.toString();
            cell.getChildByPath("nameframe/name").getComponent(Label).string = std.CardName;
            cell.getChildByPath("idLab").getComponent(Label).string = std.ID.toString();
            var skillDesc = "";

            for (var _index6 = 0; _index6 < std.SkillID.length; _index6++) {
              var skill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCardSkill(std.SkillID[_index6]);

              if (skill) {
                skillDesc += skill.SkillId + "-->" + skill.Desc;

                if (_index6 < std.SkillID.length) {
                  skillDesc += "\n";
                }
              }
            }

            cell.getChildByPath("descLab").getComponent(RichText).string = skillDesc;
            var body = cell.getChildByPath("body_card").getComponent(sp.Skeleton);
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join("spine", std.CardBody, std.CardBody), sp.SkeletonData, res => {
              body.skeletonData = res;
              body.setAnimation(0, "Idle", true);
            });
          };

          this.cardList.clickCell = (cell, cellInfo) => {
            var list = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;

            if (list.length >= 12) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("添加卡牌超出12张");
              return;
            }

            var addCard = this.curCardList[cellInfo.index];
            list.push(addCard.ID);
            this.selecCardList.cellCount = list.length;
            this.updateCard();
          };

          this.selecCardList.updateCell = (cell, cellInfo) => {
            var list = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;
            var std = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).GetCard(list[cellInfo.index]);
            cell.getChildByPath("cost/label").getComponent(Label).string = std.Cost.toString();
            cell.getChildByPath("power/label").getComponent(Label).string = std.Power.toString();
            cell.getChildByPath("nameframe/name").getComponent(Label).string = std.CardName;
            cell.getChildByPath("idLab").getComponent(Label).string = std.ID.toString();
            var skillDesc = "";

            for (var _index7 = 0; _index7 < std.SkillID.length; _index7++) {
              var skill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).GetCardSkill(std.SkillID[_index7]);

              if (skill) {
                skillDesc += skill.SkillId + "-->" + skill.Desc;

                if (_index7 < std.SkillID.length) {
                  skillDesc += "\n";
                }
              }
            }

            cell.getChildByPath("descLab").getComponent(RichText).string = skillDesc;
            var body = cell.getChildByPath("body_card").getComponent(sp.Skeleton);
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join("spine", std.CardBody, std.CardBody), sp.SkeletonData, res => {
              body.skeletonData = res;
              body.setAnimation(0, "Idle", true);
            });
          };

          this.selecCardList.clickCell = (cell, cellInfo) => {
            var list = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;
            list.splice(cellInfo.index, 1);
            this.selecCardList.cellCount = list.length;
            this.updateCard();
          };

          this.btn = this.find("btn", Button);
          this.btnLab = this.find("btn/btnLab", Label);
          this.closeBtn = this.find("closeBtn", Button);
          this.fightLogBtn = this.find("fightLogBtn", Button);
          this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.closeBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.fightLogBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.setAreaBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.terrainBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.setAiIdBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.aiIdBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.setAiCardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.cardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.setMyCardBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.seekBtn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
          this.terrainCont.active = false;
          this.aiIdCont.active = false;
          this.cardCont.active = false;
        }

        flush() {
          this.btnLab.string = "创建房间";
          this.btn.node.active = true; //Session.Send(Protocol.getplayerdecks);
        }

        onShow() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on(_crd && Evt_BattleCreatRoomResult === void 0 ? (_reportPossibleCrUseOfEvt_BattleCreatRoomResult({
            error: Error()
          }), Evt_BattleCreatRoomResult) : Evt_BattleCreatRoomResult, this.onCreatRoomResult, this);
          this.updateArea();
          this.selectAiId(this.selectAiIndx);
          this.updateCard();
        }

        onHide() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).off(_crd && Evt_BattleCreatRoomResult === void 0 ? (_reportPossibleCrUseOfEvt_BattleCreatRoomResult({
            error: Error()
          }), Evt_BattleCreatRoomResult) : Evt_BattleCreatRoomResult, this.onCreatRoomResult, this);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetNumber("test_ai", this.defAiId);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetString("test_area", JSON.stringify(this.defTerrainId));
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetString("test_ads", JSON.stringify(this.defAiCardId));
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).SetString("test_mys", JSON.stringify(this.defMyCardId));
        }

        updateArea() {
          var idStr = "";

          for (var index = 0; index < this.defTerrainId.length; index++) {
            idStr += this.defTerrainId[index] + "";

            if (index < this.defTerrainId.length - 1) {
              idStr += "、";
            }
          }

          this.areaLab.string = idStr;
        }

        selectAiId(index) {
          this.selectAiIndx = index;
          var std = this.aiList[this.selectAiIndx];
          this.defAiId = std.AIGroupID;
          this.aiIdLab.string = this.defAiId.toString();
        }

        showCard() {
          this.curCardList = this.stdCardList;
          this.cardCont.active = true;
          this.cardList.cellCount = this.curCardList.length;
          this.isClearSeek = false;
          this.seekBtnLab.string = "";
          this.updateSeekState();
          var list = this.setCardType == 1 ? this.defAiCardId : this.defMyCardId;
          this.cardCont.getChildByName("titleLab").getComponent(Label).string = this.setCardType == 1 ? "设置AI卡牌" : "设置我方卡牌";
          this.selecCardList.cellCount = list.length;
        }

        seekCard(str) {
          var regex = new RegExp(str.split('').join('.*?'), 'i');
          var list = [];

          for (var std of this.stdCardList) {
            if (regex.test(std.CardName) || regex.test(std.ID.toString())) {
              list.push(std);
            } else {
              for (var skillId of std.SkillID) {
                if (regex.test(skillId.toString())) {
                  list.push(std);
                }
              }
            }
          }

          if (list.length < 1) {
            (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
              error: Error()
            }), MsgPanel) : MsgPanel).Show("\u6240\u641C\u4E0D\u5230\u5305\u542B" + str + "\u7684\u5361\u724C");
            return;
          }

          this.isClearSeek = true;
          this.curCardList = list;
          this.cardList.cellCount = this.curCardList.length;
          this.updateSeekState();
        }

        updateSeekState() {
          this.seekBtnLab.string = this.isClearSeek ? "清空搜索" : "搜索";
        }

        updateCard() {
          var list = this.defAiCardId;
          var idStr = "";

          for (var index = 0; index < list.length; index++) {
            idStr += list[index] + "";

            if (index < list.length - 1) {
              idStr += "、";
            }
          }

          this.aiCardLab.string = idStr.length > 0 ? idStr : "无";
          idStr = "";
          list = this.defMyCardId;

          for (var _index8 = 0; _index8 < list.length; _index8++) {
            idStr += list[_index8] + "";

            if (_index8 < list.length - 1) {
              idStr += "、";
            }
          }

          this.myCardLab.string = idStr.length > 0 ? idStr : "无";
        }

        onBtnClick(btn) {
          switch (btn) {
            case this.btn:
              this.onCreatRoom();
              break;

            case this.closeBtn:
              this.Hide();
              break;

            case this.fightLogBtn:
              (_crd && FightLogPanel === void 0 ? (_reportPossibleCrUseOfFightLogPanel({
                error: Error()
              }), FightLogPanel) : FightLogPanel).Show();
              break;

            case this.setAreaBtn:
              this.showArea();
              break;

            case this.terrainBtn:
              this.terrainCont.active = false;
              break;

            case this.setAiIdBtn:
              this.aiIdCont.active = true;
              this.aiIdList.selectIndex(this.selectAiIndx);
              break;

            case this.aiIdBtn:
              this.aiIdCont.active = false;
              break;

            case this.setAiCardBtn:
              this.setCardType = 1;
              this.showCard();
              break;

            case this.cardBtn:
              this.cardCont.active = false;
              break;

            case this.setMyCardBtn:
              this.setCardType = 2;
              this.showCard();
              break;

            case this.seekBtn:
              if (this.isClearSeek) {
                this.isClearSeek = false;
                this.curCardList = this.stdCardList;
                this.seekLab.string = "";
                this.cardList.cellCount = this.curCardList.length;
                this.updateSeekState();
                return;
              }

              var seekStr = this.seekLab.string;

              if (seekStr == "") {
                (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                  error: Error()
                }), MsgPanel) : MsgPanel).Show("请输入要搜索的卡牌名称、卡牌id、技能id");
                return;
              }

              this.seekCard(seekStr);
              break;

            default:
              break;
          }
        }

        showArea() {
          this.terrainCont.active = true;
          this.selectTerrainList.cellCount = this.defTerrainId.length;
        }

        onCreatRoomResult() {
          this.btnLab.string = "进入房间";
        }

        onCreatRoom() {
          if (!(_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
            error: Error()
          }), battleDataMgr) : battleDataMgr).creatRoomData) {
            if (this.defTerrainId.length < 3) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("地形数据量不足3个");
              return;
            }

            if (this.defAiCardId.length < 4) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("AI卡牌不足4张");
              return;
            }

            if (this.defMyCardId.length < 4) {
              (_crd && MsgPanel === void 0 ? (_reportPossibleCrUseOfMsgPanel({
                error: Error()
              }), MsgPanel) : MsgPanel).Show("我方卡牌不足4张");
              return;
            }

            var data = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["battle_mgr.protocol.createbattlemgruserroom"]();
            data.context = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomContext.create();
            data.context.ignoreShuffle = true;
            data.context.aiWaitSecond = 1;
            data.context.areaIds = this.defTerrainId;
            data.context.roomId = "110";
            data.context.players = this.getPlayerData(2);
            data.context.waitSecond = 3600;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["battle_mgr.protocol.createbattlemgruserroom"], data);
          } else {
            var enterRoom = new (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
              error: Error()
            }), Req) : Req)["battle.protocol.battleroomenter"]();
            enterRoom.roomId = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).creatRoomData.roomId;
            var server = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).pb.Server.create();
            server.id = (_crd && battleDataMgr === void 0 ? (_reportPossibleCrUseOfbattleDataMgr({
              error: Error()
            }), battleDataMgr) : battleDataMgr).creatRoomData.serverId;
            enterRoom.server = server;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Send((_crd && Route === void 0 ? (_reportPossibleCrUseOfRoute({
              error: Error()
            }), Route) : Route)["battle.protocol.battleroomenter"], enterRoom);
          }
        }

        getPlayerData(num) {
          var playerList = [];
          var player;

          for (var index = 0; index < num; index++) {
            player = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleRoomPlayerContext.create();
            player.playerId = index == 0 ? (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).player.playerId : 1000 * (index + 1) + "";
            player.level = 1;
            player.isAi = index == 0 ? false : true;
            player.name = "test_" + player.playerId;

            if (player.isAi) {
              player.aiGroupId = this.defAiId;
              player.cards = this.getCardData(this.defAiCardId, 1000 * index);
            } else {
              player.cards = this.getCardData(this.defMyCardId, 1000 * index); // player.cards = this.getCardData([600003,600002,600003,600003,600003,600003,600003], 1000 * index);
              //player.deckId = PlayerData.curSelectDeckId;
            }

            playerList[index] = player;
          }

          return playerList;
        }

        getCardData(ids, cardId) {
          var cardList = [];
          var card;

          for (var index = 0; index < ids.length; index++) {
            card = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).base.BattleCard.create();
            card.cardId = ids[index];
            card.exp = 1;
            card.id = cardId * index + "";
            card.level = 1;
            card.nftLockExpires = 1;
            card.tradeCd = 0;
            card.quality = 1;
            card.ownershipType = 1;
            cardList[index] = card;
          }

          return cardList;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e466982cdb711a72286a0db12b367f1db253bd2.js.map