import { Component, Material, Node, _decorator, director, find, game, instantiate, sp } from "cc";
import { TestSkill } from "../../module/fight/display/TestSkill";
import { ResMgr } from "../../manager/ResMgr";
import { GameScene } from "../../module/fight/GameScene";
import { Second } from "../../utils/Utils";
import { SceneCard } from "../../module/fight/display/SceneCard";

const { ccclass, property } = _decorator;

@ccclass('SkillScene')
export class SkillScene extends Component {
    protected async onLoad() {

        await ResMgr.PrevLoad();

        find("FightScene").addComponent(GameScene);

        await Second(0.1);

        let layout1 = find("FightScene/area0/team1/card1");
        let layout2 = find("FightScene/area0/team2/card1");

        let attacker = SceneCard.Create();
        attacker.setWorldPosition(GameScene.isntance['myTeamLayout'][0][0].worldPosition);
        attacker.setWorldRotation(GameScene.isntance['myTeamLayout'][0][0].rotation);
        director.getScene().addChild(attacker);
        attacker.name = "attacker";
        attacker.Open();

        let enemy = find("enemy");
        enemy.setWorldPosition(layout2.worldPosition);
        if (enemy) enemy.destroy();

        let myLayout: any[][] = GameScene.isntance['myTeamLayout'] as (any[][]);
        let adLayout: any[][] = GameScene.isntance['adTeamLayout'] as (any[][]);
        let areaLay: Node = GameScene.isntance['areaCardLay'];
        let enemys = [], ps = [];
        for (let i = 0; i < 3; i++) {
            for (let n = 0; n < 3; n++) {
                let card = SceneCard.Create();
                card.name = "敌人" + (i * 4 + n);
                card.setWorldPosition(adLayout[i][n].worldPosition);
                card.setWorldRotation(adLayout[i][n].rotation);
                ps.push(card.Open());
                director.getScene().addChild(card);
                enemys.push(card);

                // if (i != 0 || n != 0) {
                //     let atk = SceneCard.Create();
                //     atk.name = "我方" + (i * 4 + n);
                //     atk.setWorldPosition(myLayout[i][n].worldPosition);
                //     atk.setWorldRotation(myLayout[i][n].rotation);
                //     director.getScene().addChild(atk);
                //     atk.Open();
                // }
            }
        }
        TestSkill.testEnemys = enemys;
        await Promise.all(ps);

        let ls = director.getScene().getComponentsInChildren(TestSkill);
        for (let test of ls) {
            if (test.enabled) test.Test();
        }

    }
}