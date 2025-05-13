import { js } from "cc";
import { GameScene } from "../fight/GameScene";
import { BattleOpData } from "../player/PlayerStruct";
import { BattleBaseComp } from "./BattleBaseComp";
import { battleDataMgr } from "./BattleDataMgr";
import { FightData } from "../fight/FightData";

export class BattleCompMgr {
    //当前正在运行的脚本列表
    private runCompList: BattleBaseComp<any>[] = [];
    //脚本池子
    private compPool: Map<number, BattleBaseComp<any>[]> = new Map();

    /**
     * 添加处理战斗包脚本
     * @param className 
     * @returns 
     */
    public addComp<T extends BattleBaseComp<T>>(className: any, type: number): T {
        let comps: BattleBaseComp<T>[] = this.compPool.get(type) || [];
        let comp: BattleBaseComp<T> = comps.pop();
        if (!comp) {
            let ctor: any = js.getClassByName(className);
            comp = new ctor();
            this.compPool.set(type, comps);
        }
        if (this.runCompList.length > 0) {
            console.error("------>激活脚本错误")
        } else {
            this.runCompList.push(comp);
        }
        return comp as T;
    }

    /**
     * 移除战斗脚本
     * @param comp 
     */
    public removeComp(comp: BattleBaseComp<any>): void {
        let activateIndex: number = this.runCompList.indexOf(comp);
        if (activateIndex > -1) {
            this.runCompList.splice(activateIndex, 1);
        }
        let comps: BattleBaseComp<any>[] = this.compPool.get(comp.type) || [];
        comps.push(comp);
        this.compPool.set(comp.type, comps);
    }

    /**
     * 停止/终止正在跑的脚本
     */
    public stopComp(): void {
        for (let index = 0; index < this.runCompList.length; index++) {
            let comp = this.runCompList[index];
            // if (checkCondCall(comp.type)) continue;
            comp.exit();
        }
    }

    private isRun = false;
    public update(dt: number): void {
        for (let comp of this.runCompList) {
            comp.update(dt);
        }
        if (!this.isRun) this.runBattle();
    }

    /**
     * 跑战斗数据包
     */
    private runBattle(): void {
        let battleOpData: BattleOpData = battleDataMgr.getFirstBattlePack();
        if (battleOpData) {
            console.log("*****************************runBattle:" + battleOpData.type);
            FightData.BattleRoomOpOutputType = battleOpData.type;
            this.isRun = true;
            let self = this;
            let comp: BattleBaseComp<any> = this.addComp(battleOpData.comp, battleOpData.type);
            comp.exitCall = (roomId: string, round: number, playerId: string) => {
                this.removeComp(comp);
                self.isRun = false;
            }
            comp.changeDataCell = battleOpData?.changeDataCell?.bind(battleDataMgr);
            comp.enter(battleOpData.packData, GameScene.isntance, battleOpData.type);
        }
    }
}
export const battleCompMgr = new BattleCompMgr();