import { Vec3, game, math } from "cc";
import { GameSet } from "../manager/GameSet";

export class Shake {

    private static instance: Shake;
    private rate: number = 0.02;
    private tick = 0;
    private endTick = 0;
    private loop = 0;
    private power = 0;
    private initV: Vec3;

    start(power: number, duration: number, rate: number) {
        this.loop = 0;
        this.rate = rate;
        this.power = power;
        this.tick = game.totalTime / 1000;
        this.endTick = this.tick + duration;
        GameSet.addTick(this.update, this);
    }

    end() {
        GameSet.removeTick(this.update, this);
        GameSet.mainCamera.node.setWorldPosition(this.initV);
    }

    update(dt: number) {
        if (this.tick < this.endTick) {
            this.tick += dt;
            this.loop += dt;
            if (this.loop >= this.rate) {
                this.loop = 0;
                let dx = math.randomRange(-this.power, this.power);
                let dy = math.randomRange(-this.power, this.power);
                let dz = math.randomRange(-this.power, this.power);
                GameSet.mainCamera.node.setWorldPosition(this.initV.x + dx, this.initV.y + dy, this.initV.z + dz);
                // console.log("shake", GameSet.mainCamera.node.worldPosition.toString());
            }
        } else {
            this.end();
        }
    }

    /**
     * 开始
     * @param power 
     */
    static Start(power: number, duration: number, rate: number = 0.02) {
        if (!this.instance) {
            this.instance = new Shake();
            this.instance.initV = GameSet.mainCamera.node.worldPosition.clone();
        }
        this.instance.start(power * GameSet.PixelSize, duration, rate);
    }

    /**
     * 停止
     * @returns 
     */
    static End() {
        if (!this.instance) return;
        this.instance.end();
    }
}