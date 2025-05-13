import { _decorator, Component, find, Node } from 'cc';
import { ResMgr } from '../manager/ResMgr';
import { GameRoot } from '../manager/GameRoot';
import { App } from '../manager/App';
import { GameSet } from '../manager/GameSet';
const { ccclass, property } = _decorator;

@ccclass('Luanch')
export class Luanch extends Component {
    private static instance: Luanch;

    protected async start() {

        console.log("Luanch onLoad");

        if (Luanch.instance) {
            Luanch.instance.destroy();
        }
        
        await ResMgr.PrevLoad();//加载ab包
        new GameRoot(find("Canvas"));

        new App();
    }

    update(deltaTime: number) {
        GameSet.update(deltaTime);
    }
}
