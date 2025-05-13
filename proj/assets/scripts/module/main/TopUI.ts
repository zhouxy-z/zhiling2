import { Button, CCClass, Event, EventTouch, Input, Label, Layout, Node, PageView, UIOpacity, UITransform, Vec3, _decorator, easing, instantiate, size, tween } from "cc";
import { Panel } from "../../manager/GameRoot";

export class TopUI extends Panel {
    protected prefab: string = 'prefabs/main/TopUI';

    protected onLoad(): void {
    }

    protected onShow(): void {
    }

    public flush(...args: any[]): void {
    }

    protected onHide(...args: any[]): void {
    }

    static Show(...args: any[]): Promise<any> {
        return this.ShowMsg(...args);
    }

    static async addChild(value: Node) {
        if (!this.$instance) await this.ShowMsg();
        this.$instance.node.addChild(value);
    }
    static async removeChild(value: Node) {
        if (!this.$instance) return;
        this.$instance.node.removeChild(value);
    }
}