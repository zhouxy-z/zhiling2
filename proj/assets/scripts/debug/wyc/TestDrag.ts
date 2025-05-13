import { _decorator, assetManager, Camera, Canvas, Component, director, EventTouch, find, geometry, Input, instantiate, math, Node, Prefab, Scene, Tween, tween, UITransform, v3, Vec2, view } from 'cc';
import { GameScene } from '../../module/fight/GameScene';
import { ResMgr } from '../../manager/ResMgr';

const { ccclass, property } = _decorator;

@ccclass('TestDrag')
export class TestDrag extends Component {

    protected async onLoad() {
        await ResMgr.PrevLoad();

        let gamescene = find("FightScene").addComponent(GameScene);
    }

}
