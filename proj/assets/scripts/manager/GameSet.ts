import { Camera, InstanceMaterialType, Layers, Vec3, director, find, geometry, math, view } from "cc";

export class GameSet {

    static readonly Version: string = "v1.0.10";

    static globalCfg: any;

    private static handles: { func: Function, thisObj: any }[] = [];
    static addTick(cb: Function, thisObj: any) {
        let result = this.handles.find(obj => obj.func == cb && obj.thisObj == thisObj);
        if (result) return;
        this.handles.push({ func: cb, thisObj: thisObj });
    }
    static removeTick(cb: Function, thisObj: any) {
        let index = this.handles.findIndex(obj => obj.func == cb && obj.thisObj == thisObj);
        if (index == -1) return;
        this.handles.splice(index, 1);
    }
    static update(dt: number) {
        for (let obj of this.handles) {
            obj.func.call(obj.thisObj, dt);
        }
    }

    static SceneHight: number = 0;
    private static _mainCamera: Camera;
    private static _uiCamera: Camera;

    /**
     * 获取主摄像机
     */
    static get mainCamera(): Camera {
        if (!this._mainCamera) {
            this._mainCamera = find("MainCamera").getComponent(Camera);
        }
        return this._mainCamera;
    }

    /**
     * 获取ui摄像机
     */
    static get UICamera(): Camera {
        if (!this._uiCamera) {
            this._uiCamera = find("Canvas/Camera").getComponent(Camera);
        }
        return this._uiCamera;
    }

    static readonly Lay_Scene = Layers.Enum['SCENE'];

    /**像素与世界单位(米)的比例 */
    static readonly PixelSize = 0.01;

    /**视窗像素 */
    static readonly viewSize = view.getVisibleSizeInPixel();

    /**地平面 */
    static readonly ScenePlane: geometry.Plane = geometry.Plane.create(0, 1, 0, 0);

    static HandPlane: geometry.Plane;

    static ShowPoint: Vec3;

    static ScreamRotation: math.Quat = math.quat();

    static GiantPoster: IGiantPoster;

    static CardWide = 4.1*1.1;
    static CardHide = 5.2*1.1;

    static debug: boolean = false;
}

export interface IGiantPoster {
    isShowingPoster: boolean;
    ShowGiantPoster(): Promise<any>;
    EndGiantPoster(): void;
}