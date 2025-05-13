import { _decorator, Component, Label, SpriteRenderer, UITransform } from "cc";
import { Transform3d } from "../common/Transform3d";
import { GameSet } from "../../manager/GameSet";

const { ccclass, property } = _decorator;

@ccclass('TaskItem3d')
export class TaskItem3d extends Transform3d {
    protected onLoad(): void {
        super.onLoad();
        // let icon = this.node.getChildByName("icon");
        // let label = this.node.getChildByName("icon/label");
        // let sf = icon.getComponent(SpriteRenderer).spriteFrame;
        // let trans = label.getComponent(UITransform);
        // this.$width = (sf.width * icon.scale.x + trans.contentSize.width * label.scale.x) * GameSet.PixelSize;
        // this.$height = sf.height * icon.scale.y * GameSet.PixelSize;
    }
}