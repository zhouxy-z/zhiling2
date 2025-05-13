import { _decorator, Component, Node, RenderTexture, SpriteFrame, Camera, Layers, director, Vec3, math, geometry, Sprite, UITransform, MeshRenderer, find, Size, RenderRoot2D, Rect, Color, v3, sp, resources, Material, view, instantiate, Mask } from 'cc';
import { Second, Utils } from './Utils';
import { GameObj } from '../manager/GameRoot';
import { ResMgr } from '../manager/ResMgr';
import { GameSet } from '../manager/GameSet';
const { ccclass, property } = _decorator;

export class Snapshot extends Component {
    private static _instance: Snapshot = null!;
    private static _root: Node;
    private static sceneCameras: { [layer: number]: { camera: Camera, img: Node, tex: RenderTexture } } = {};
    private static uiCameras: { [layer: number]: { camera: Camera, img: Node, tex: RenderTexture } } = {};
    private static renderMap = new Map<Node, {
        camera: Camera,
        layer: number,
        masks: Node[],
        oldLayer: number,
        spriteNode: Node
    }>();

    private static init(): Snapshot {
        if (!this._instance) {
            this._root = new Node('Snapshot');
            this._root.layer = 4;
            this._root.addComponent(RenderRoot2D);
            this._instance = this._root.addComponent(Snapshot);
            director.getScene()?.addChild(this._root);
            this.sceneCameras = {};
            this.uiCameras = {};
        }
        return this._instance;
    }
    static get Root() { return this._root; }
    static Add(targetNode: Node): Node {
        let layer = 4;
        let oldLayer = targetNode.layer;
        targetNode['$$old_layer'] = oldLayer;
        targetNode.layer = targetNode.layer | layer;
        let results = Utils.MapParentBy(targetNode, Mask);
        results.forEach(value => value.layer = value.layer | layer);
        console.log("layer", targetNode.layer.toString(2), layer.toString(2));
        let size = view.getVisibleSize();
        let width = size.width, height = size.height;
        if (!this._instance) this.init();
        if (!targetNode.getComponent) targetNode.addComponent(UITransform);
        if (this.renderMap.has(targetNode)) {
            let obj = this.renderMap.get(targetNode);
            return obj.spriteNode;
        }
        this._root.active = true;
        let obj: { camera: Camera, img: Node, tex: RenderTexture };
        let cameraNode: Node, isNew = false;
        if (oldLayer & Layers.Enum['SCENE']) {
            obj = this.sceneCameras[layer];
            if (!obj) {
                isNew = true;
                let img = new Node();
                img.layer = Layers.Enum.DEFAULT;
                img.addComponent(Sprite);
                obj = { camera: undefined, img: img, tex: undefined };
                cameraNode = instantiate(GameSet.mainCamera.node);
                obj.camera = cameraNode.getComponent(Camera);
                obj.camera.node.setWorldPosition(GameSet.mainCamera.node.worldPosition);
                this.sceneCameras[layer] = obj;
            }
        } else {
            obj = this.uiCameras[layer];
            if (!obj) {
                isNew = true;
                let img = new Node();
                img.layer = Layers.Enum.DEFAULT;
                img.addComponent(Sprite);
                obj = { camera: undefined, img: img, tex: undefined };
                cameraNode = instantiate(GameSet.UICamera.node);
                obj.camera = cameraNode.getComponent(Camera);
                obj.camera.node.setWorldPosition(GameSet.UICamera.node.worldPosition);
                this.uiCameras[layer] = obj;
            }
        }
        if (isNew) {
            obj.camera.clearColor = new Color(0, 0, 0, 200); // 透明背景
            obj.camera.clearFlags = Camera.ClearFlag.SOLID_COLOR;
            obj.camera.visibility = layer;
            cameraNode.layer = layer;
            obj.camera.priority = -1;
            this._root.addChild(cameraNode);

            let tex = new RenderTexture();
            tex.initialize({ width: width, height: height });
            let sf = new SpriteFrame();
            sf.rect = new Rect(0, 0, width, height);
            sf.texture = tex;
            obj.tex = tex;
            obj.img.getComponent(Sprite).spriteFrame = sf;

        }
        if (targetNode instanceof GameObj) {
            if (!targetNode.hasLoad) {
                targetNode.GetLoadSub().then(() => {
                    Utils.MapChildrenFor(targetNode, child => {
                        child.layer = child.layer | layer;
                    });
                    obj.camera.targetTexture = obj.tex;
                })
            } else {
                Second(1).then(() => {
                    Utils.MapChildrenFor(targetNode, child => {
                        child.layer = child.layer | layer;
                    });
                    obj.camera.targetTexture = obj.tex;
                });
            }
        } else {
            Second(0).then(() => {
                Utils.MapChildrenFor(targetNode, child => {
                    child.layer = child.layer | layer;
                });
                obj.camera.targetTexture = obj.tex;
            });
        }

        let spriteNode = obj.img;
        this.renderMap.set(targetNode, {
            camera: obj.camera,
            layer: layer,
            masks: results,
            oldLayer: oldLayer,
            spriteNode: spriteNode
        })
        Utils.MapChildrenFor(targetNode, child => {
            let comp = child.getComponent(Sprite) || child.getComponent(sp.Skeleton);
            if (comp) {
                if (!comp.customMaterial || comp.customMaterial.uuid != ResMgr.depth_material_uuid) {
                    ResMgr.getDepthMaterial().then(material => { comp.customMaterial = material; });
                }
            }
            child.layer = child.layer | layer;
        });
        return spriteNode;
    }

    static Remove(targetNode?: Node) {
        if (!targetNode) {
            this.renderMap.forEach((obj, key) => {
                key.layer = key['$$old_layer'];
                Utils.MapChildrenFor(key, child => {
                    child.layer = key['$$old_layer'];
                });
                obj.masks.forEach(value => value.layer = key['$$old_layer']);
            });
            this.renderMap.clear();
        } else if (this.renderMap.has(targetNode)) {
            targetNode.layer = targetNode['$$old_layer'];
            Utils.MapChildrenFor(targetNode, child => {
                child.layer = targetNode['$$old_layer'];
            });
            let obj = this.renderMap.get(targetNode);
            obj.masks.forEach(value => value.layer = targetNode['$$old_layer']);
            this.renderMap.delete(targetNode);
        }
    }
}
