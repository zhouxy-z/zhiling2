import { IVec3Like, ParticleSystem, director } from "cc";
import { GameObj } from "../../../manager/GameRoot";
import { GameSet } from "../../../manager/GameSet";
import { EffectSet } from "./EffectSet";
import { DEBUG, DEV, EDITOR, PREVIEW, TEST } from "cc/env";

export class Effect extends GameObj {
    static readonly Event_Play_End: string = "Event_Play_End";

    protected $prefab: string = "prefabs/fight/ShowArea";

    protected p: ParticleSystem;
    protected prevState: boolean;
    protected onLoad(): void {
        this.layer = GameSet.Lay_Scene;
        this.p = this.getComponent(ParticleSystem);
        this.prevState = this.p.isPlaying;
    }

    async Play(x: number, y: number, z: number) {
        director.getScene().addChild(this);
        if (!this.$hasLoad) await this.loadSub;
        this.p.play();
        this.prevState = true;
        this.setWorldPosition(x, y, z);
    }

    async PlayOnce(x: number, y: number, z: number) {
        director.getScene().addChild(this);
        if (!this.$hasLoad) await this.loadSub;
        this.p.loop = false;
        this.p.play();
        this.prevState = true;
        this.setWorldPosition(x, y, z);
    }

    async PlayLoop(x: number, y: number, z: number) {
        director.getScene().addChild(this);
        if (!this.$hasLoad) await this.loadSub;
        this.p.loop = true;
        this.p.play();
        this.prevState = true;
        this.setWorldPosition(x, y, z);
    }

    async Stop() {
        if (!this.$hasLoad) await this.loadSub;
        this.p.stop();
    }

    protected update(dt: number): void {
        if (this.prevState && !this.p.isPlaying) {
            this.prevState = false;
            this.emit(Effect.Event_Play_End);
        }
    }

}

export class SampleEffect extends Effect {
    protected update(dt: number): void {
        if (this.prevState && !this.p.isPlaying) {
            this.prevState = false;
            this.emit(Effect.Event_Play_End);
            if (this.parent) this.parent.removeChild(this);
        }
    }
}