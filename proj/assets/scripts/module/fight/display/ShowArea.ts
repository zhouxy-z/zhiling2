import { Label, Node, Sprite, SpriteFrame, Tween, Vec3, sp, tween } from "cc";
import { GameObj } from "../../../manager/GameRoot";
import proto from "../../../net/Protocol";
import { ResMgr } from "../../../manager/ResMgr";
import { GameSet } from "../../../manager/GameSet";

export class ShowArea extends GameObj {
    protected $prefab: string = "prefabs/fight/ShowArea";

    protected filed: sp.Skeleton;
    protected descLab: Label;
    protected myPower: Label;
    protected adPower: Label;

    protected onLoad(): void {
        this.filed = this.find("filed", sp.Skeleton);
        this.descLab = this.find("desc", Label);
        this.myPower = this.find("power1", Label);
        this.adPower = this.find("power2", Label);

        let filed = this.filed;
        this.filed.setCompleteListener(() => {
            filed.setAnimation(0, "idle");
        })
    }

    async View(sd: sp.SkeletonData, desc: string, myPower: string, adPower: string, pos: Vec3) {
        Tween.stopAllByTarget(this);
        this.setWorldPosition(pos);
        tween(this as Node).to(0.25, { worldPosition: GameSet.ShowPoint }).start();
        if (!this.$hasLoad) await this.loadSub;
        this.descLab.string = desc;
        this.filed.skeletonData = sd;
        this.filed.setAnimation(0, "show", false);
        this.myPower.string = myPower;
        this.adPower.string = adPower;
    }

    Hide() {
        Tween.stopAllByTarget(this);
        this.setWorldPosition(Vec3.ZERO);
        if (this.parent) this.parent.removeChild(this);
    }
}