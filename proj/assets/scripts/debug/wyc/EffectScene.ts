import { _decorator, CCBoolean, CCFloat, Component, director, find, Node, sp } from 'cc';
import { EDITOR } from 'cc/env';
import { TestSkill } from '../../module/fight/display/TestSkill';
import { Second } from '../../utils/Utils';
const { disallowMultiple, ccclass, property } = _decorator;

@ccclass('EffectScene')
@disallowMultiple(true)
export class EffectScene extends Component {

    start() {
        let skills = this.node.parent.getComponentsInChildren(TestSkill);
        for (let skill of skills) {
            skill.Test();
            skill.node.on("tigger", (tigger, affect) => {
                console.log("tigger", tigger, affect);
            })
        }
    }

    update(deltaTime: number) {
    }
}


