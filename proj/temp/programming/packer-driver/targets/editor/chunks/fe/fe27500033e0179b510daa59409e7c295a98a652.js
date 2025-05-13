System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, director, find, TestSkill, ResMgr, GameScene, Second, SceneCard, _dec, _class, _crd, ccclass, property, SkillScene;

  function _reportPossibleCrUseOfTestSkill(extras) {
    _reporterNs.report("TestSkill", "../../module/fight/display/TestSkill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../../module/fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneCard(extras) {
    _reporterNs.report("SceneCard", "../../module/fight/display/SceneCard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      director = _cc.director;
      find = _cc.find;
    }, function (_unresolved_2) {
      TestSkill = _unresolved_2.TestSkill;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      GameScene = _unresolved_4.GameScene;
    }, function (_unresolved_5) {
      Second = _unresolved_5.Second;
    }, function (_unresolved_6) {
      SceneCard = _unresolved_6.SceneCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "820568N89FL/IiE9ht0xcnP", "SkillScene", undefined);

      __checkObsolete__(['Component', 'Material', 'Node', '_decorator', 'director', 'find', 'game', 'instantiate', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillScene", SkillScene = (_dec = ccclass('SkillScene'), _dec(_class = class SkillScene extends Component {
        async onLoad() {
          await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).PrevLoad();
          find("FightScene").addComponent(_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene);
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0.1);
          let layout1 = find("FightScene/area0/team1/card1");
          let layout2 = find("FightScene/area0/team2/card1");
          let attacker = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
            error: Error()
          }), SceneCard) : SceneCard).Create();
          attacker.setWorldPosition((_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).isntance['myTeamLayout'][0][0].worldPosition);
          attacker.setWorldRotation((_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).isntance['myTeamLayout'][0][0].rotation);
          director.getScene().addChild(attacker);
          attacker.name = "attacker";
          attacker.Open();
          let enemy = find("enemy");
          enemy.setWorldPosition(layout2.worldPosition);
          if (enemy) enemy.destroy();
          let myLayout = (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).isntance['myTeamLayout'];
          let adLayout = (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).isntance['adTeamLayout'];
          let areaLay = (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).isntance['areaCardLay'];
          let enemys = [],
              ps = [];

          for (let i = 0; i < 3; i++) {
            for (let n = 0; n < 3; n++) {
              let card = (_crd && SceneCard === void 0 ? (_reportPossibleCrUseOfSceneCard({
                error: Error()
              }), SceneCard) : SceneCard).Create();
              card.name = "敌人" + (i * 4 + n);
              card.setWorldPosition(adLayout[i][n].worldPosition);
              card.setWorldRotation(adLayout[i][n].rotation);
              ps.push(card.Open());
              director.getScene().addChild(card);
              enemys.push(card); // if (i != 0 || n != 0) {
              //     let atk = SceneCard.Create();
              //     atk.name = "我方" + (i * 4 + n);
              //     atk.setWorldPosition(myLayout[i][n].worldPosition);
              //     atk.setWorldRotation(myLayout[i][n].rotation);
              //     director.getScene().addChild(atk);
              //     atk.Open();
              // }
            }
          }

          (_crd && TestSkill === void 0 ? (_reportPossibleCrUseOfTestSkill({
            error: Error()
          }), TestSkill) : TestSkill).testEnemys = enemys;
          await Promise.all(ps);
          let ls = director.getScene().getComponentsInChildren(_crd && TestSkill === void 0 ? (_reportPossibleCrUseOfTestSkill({
            error: Error()
          }), TestSkill) : TestSkill);

          for (let test of ls) {
            if (test.enabled) test.Test();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe27500033e0179b510daa59409e7c295a98a652.js.map