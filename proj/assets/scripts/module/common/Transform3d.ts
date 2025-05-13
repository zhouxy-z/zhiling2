import { _decorator, Component, Enum, Layout, math, sp, Sprite, SpriteRenderer, UITransform, v3, Vec3 } from "cc";
import { GameSet } from "../../manager/GameSet";
import { Utils } from "../../utils/Utils";

const { ccclass, property, requireComponent } = _decorator;

enum $LayoutV {
    none,
    top,
    middle,
    bottom
}
enum $LayoutH {
    none,
    right,
    center,
    left
}

@ccclass('Transform3d')
export class Transform3d extends Component {

    @property({ type: Enum($LayoutV) })
    get layoutV() { return this._layoutV };
    set layoutV(value: number) {
        this._layoutV = value;
        let children = this.node.children;
        for (let child of children) {
            let h = 0;
            let ut = child.getComponent(UITransform);
            if (ut) {
                h = ut.height * child.scale.y * GameSet.PixelSize;
            } else {
                h = Utils.MapBound(child).height;
            }
            if (value == $LayoutV.top) {
                child.setPosition(child.position.x, h / 2, child.position.z);
            } else if (value == $LayoutV.middle) {
                child.setPosition(child.position.x, 0, child.position.z);
            } else if (value == $LayoutV.bottom) {
                child.setPosition(child.position.x, -h / 2, child.position.z);
            }
        }
    }
    protected _layoutV: number;

    @property({ type: Enum($LayoutH) })
    get layoutH() { return this._layoutH };
    set layoutH(value: number) {
        this._layoutH = value;
        let children = this.node.children;
        for (let child of children) {
            let w = 0;
            let ut = child.getComponent(UITransform);
            if (ut) {
                w = ut.width * child.scale.x * GameSet.PixelSize;
            } else {
                w = Utils.MapBound(child).width;
            }
            if (value == $LayoutH.left) {
                child.setPosition(w / 2, child.position.y, child.position.z);
            } else if (value == $LayoutH.center) {
                child.setPosition(0, child.position.y, child.position.z);
            } else if (value == $LayoutH.right) {
                child.setPosition(-w / 2, child.position.y, child.position.z);
            }
        }
    }
    protected _layoutH: number;

    protected $width: number = 0;
    protected $height: number = 0;
    protected thickness: number = 1;
    protected mat: math.Mat4;
    protected matInvert: math.Mat4;
    protected $left: Vec3;
    protected $right: Vec3;
    protected $top: Vec3;
    protected $bottom: Vec3;
    protected onLoad(): void {
        let sx = this.node.scale.x, sy = this.node.scale.y;
        let ut = this.getComponent(UITransform);
        if (ut) {
            this.$width = ut.contentSize.width * sx;
            this.$height = ut.contentSize.height * sy;
        } else {
            let rect = Utils.MapBound(this.node);
            this.$width = rect.width;
            this.$height = rect.height;
        }
        this.$left = v3(-this.$width / 2, 0, 0);
        this.$right = v3(this.$width / 2, 0, 0);
        this.$top = v3(0, this.$height / 2, 0);
        this.$bottom = v3(-this.$height / 2, 0, 0);
        this.mat = this.node.getWorldMatrix();
        this.matInvert = this.mat.invert();
    }

    get width() { return this.$width; }
    get height() { return this.$height; }

    private leftv: Vec3 = v3();
    private rightv: Vec3 = v3();
    private topv: Vec3 = v3();
    private bottomv: Vec3 = v3();

    get left() {
        Vec3.transformMat4(this.leftv, this.$left, this.mat);
        return this.leftv;
    }
    get right() {
        Vec3.transformMat4(this.rightv, this.$right, this.mat);
        return this.rightv;
    }
    get top() {
        Vec3.transformMat4(this.topv, this.$top, this.mat);
        return this.topv;
    }
    get bottom() {
        Vec3.transformMat4(this.bottomv, this.$bottom, this.mat);
        return this.bottomv;
    }
}