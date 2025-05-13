import { Component, Input, Layers, Node, NodeEventType, Prefab, RenderRoot2D, UITransform, View, Widget, __private, find, instantiate, js, sys, view } from "cc";
import { ResMgr } from "./ResMgr";
import { EventMgr } from "./EventMgr";

export enum UILay {
    Game,    //游戏层
    UI,      //ui层
    Panel,   //面板层
    MsgPanel,//信息展示层
    Guide,   //引导
    Modal,   //顶层面板层
}

let $show: (display: Node, lay: number, siblingIndex?: number) => boolean;
let $hide: (display: Node) => void;
let $getChildNum: (...excepts: any[]) => number;
let $panel_cache: Panel[] = [];
let $LoadingIns: { Show: Function, Hide: Function };
let $topBarHeight: number = 0;
let $root_inst: GameRoot;

export class GameRoot {

    canvas: Node;
    lays: Node[] = [];

    constructor(canvas: Node, depth: number = 0, loading?: { Show: Function, Hide: Function }) {
        if ($root_inst) {
            for (let panel of $panel_cache) {
                panel['Destroy']();
            }
            $panel_cache = [];
            $root_inst = undefined;
        }
        $root_inst = this;
        this.canvas = canvas;
        $LoadingIns = loading;

        for (var k in UILay) {
            if (isNaN(Number(k))) {
                let lay = new Node();
                let widget = lay.addComponent(Widget);
                widget.isAlignLeft = true;
                widget.left = 0;
                widget.isAlignRight = true;
                widget.right = 0;
                widget.isAlignTop = true;
                widget.top = 0;
                widget.isAlignBottom = true;
                widget.bottom = 0;
                lay.name = k + "_Lay";
                let index = Number(UILay[k]);
                this.lays[index] = lay;
                this.canvas.addChild(lay);
                lay.setSiblingIndex(index + depth);
            }
        }
        // $root = this.lays[Lay.FGUI];
        if (find("Canvas/bg"))
            find("Canvas/bg").setSiblingIndex(0);

        console.log("GameRoot", this.canvas);
        $show = this.addChild.bind(this);
        $hide = this.removeChild.bind(this);
        $getChildNum = this.getChildNum.bind(this);

        EventMgr.on("top_bar_height", this.onUpdateTopBar, this);
        this.onUpdateTopBar(view.getVisibleSize().height - sys.getSafeAreaRect().height);
    }

    private onUpdateTopBar(h: number) {
        $topBarHeight = h;
        console.log("onStatusBar", $topBarHeight);
        for (let i = 0; i < this.lays.length; i++) {
            let lay = this.lays[i];
            let widget = lay.getComponent(Widget);
            if (widget) widget.top = $topBarHeight || 0;
        }
    }

    private getChildNum(...excepts: string[]) {
        let num = 0;
        for (let lay of this.lays) {
            let children = lay.children;
            for (let child of children) {
                if (excepts.indexOf(child.name) == -1) {
                    num++;
                }
            }
        }
        return num;
    }

    /**
     * 显示对象
     * @param display 
     * @param lay 
     */
    private addChild(display: Node, lay: number) {
        let container = this.lays[lay];
        if (display.parent != container) {
            this.lays[lay].addChild(display);
            return true;
        } else {
            display.setSiblingIndex(container.children.length - 1);
            return false;
        }
    }

    /**
     * 移除ui
     * @param display 
     */
    private removeChild(display: Component | Node) {
        if (display instanceof Component) {
            if (display.node.parent) {
                display.node.parent.removeChild(display.node);
            }
        } else {
            if (display.parent) display.parent.removeChild(display);
        }
    }
}

type classz<T = unknown> = new (...args: any[]) => T;
type _classz<T = unknown> = new (...args: any[]) => T;
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
/**
 * 界面基类
 * @默认隐藏单例并且推荐采用静态方法控制和更新界面
 * @实在需要可在子类公开单例
 * @Create方法可以创建多个界面副本
 * @Call方法和Emit方法都可以在界面加载或打开之前调用但是只会在加载初始完毕后才真正调用
 */
export abstract class Panel extends Component {
    protected static $instance: any;
    protected static $loading: Promise<any>;
    protected static $beforLoad: Promise<any>;
    protected static $beforLoadComplete: Function;
    protected static $showing: boolean = false;

    protected $hasLoad: boolean = false;
    protected $canBack: boolean = false;//是否可以回退
    protected $lockLay: UILay;
    private _initComplete: Function;
    protected initSub: Promise<any> = new Promise((resolve, reject) => {
        this._initComplete = resolve;
    });

    /**
     * - 已废弃，onLoad基类会自动回调resolve
     * @deprecated
     */
    protected initComplete = () => {
        let $initComplete = this._initComplete;
        this._initComplete = undefined;
        $initComplete();
        this.$hasLoad = true;
    };

    protected get hasLoad() {
        return this.$hasLoad;
    }

    private static $proxy: any;

    /**
     * 面板预制名称
     */
    protected abstract prefab: string;

    /**
     * 当界面加进显示列表显示出来时调用一次
     */
    protected abstract onShow(): void;

    /**
     * 刷新，每次Show或者Update时调用
     * @param args 
     */
    public abstract flush(...args): void;

    public SetPage(...args): void { }

    /**
     * 当界面被关闭时调用
     */
    protected abstract onHide(...args): void;

    get isComplete() {
        return this._initComplete == undefined;
    }

    protected update(dt: number): void {
        this.$secondTick += dt;
        if (this.$secondTick >= 1) {
            this.$secondTick = 0;
            this.onSecond();
        }
    }
    protected $secondTick = 0;
    protected onSecond() {

    }

    /**
     * 关闭其他
     */
    protected closeOther(type = Panel) {
        for (let lay of $root_inst.lays) {
            let children = lay.children;
            for (let child of children) {
                if (child != this.node) {
                    let panel = child.getComponent(type);
                    if (panel) {
                        panel.Hide();
                    }
                }
            }
        }
    }

    /**
     * 关闭所有
     */
    static CloseAll() {
        for (let lay of $root_inst.lays) {
            let children = lay.children;
            for (let child of children) {
                let panel = child.getComponent(Panel);
                if (panel) {
                    panel.Hide();
                }
            }
        }
    }

    /**
     * 回退
     */
    static Back() {
        for (let lay of $root_inst.lays) {
            let children = lay.children;
            for (let child of children) {
                let panel = child.getComponent(Panel);
                if (panel && panel.$canBack) {
                    panel.Hide();
                }
            }
        }
    }

    /**
     * 创建面板实例
     * @returns 
     */
    static async Create(): Promise<Panel> {
        let thisObj = this;
        if (!thisObj.$proxy) thisObj.$proxy = new (thisObj as any)();
        let prefab = thisObj.$proxy.prefab;
        if (!prefab || prefab == "") throw js.getClassName(thisObj) + "必须设置protected static prefab以绑定预制界面";
        let prototype = thisObj.prototype ? thisObj.prototype : Object.getPrototypeOf(thisObj);
        let classz = prototype.constructor;
        let success: Function;
        let promise: Promise<typeof classz> = new Promise((resolve, reject) => {
            success = resolve;
        });
        ResMgr.GetResources(prefab, (prefab: Prefab) => {
            let node = instantiate(prefab);
            let panel: Panel = node.addComponent(classz);
            node.on(Node.EventType.PARENT_CHANGED, e => {
                if (!node.parent) {
                    if (panel['onHide']) panel['onHide']();
                }
            });
            success(panel);
            let onload = panel.onLoad ? panel.onLoad.bind(panel) : undefined;
            panel.onLoad = () => {
                if (!onload?.()) {
                    let initComplete = panel._initComplete;
                    panel._initComplete = undefined;
                    initComplete();
                    panel.$hasLoad = true;
                }
            }
        }, (value, total) => {
            if (thisObj.$showing && $LoadingIns) $LoadingIns.Show(value, total);
        });
        return promise;
    }

    /**
     * 通过事件名发送自定义事件
     * @param type 
     * @param arg0 
     * @param arg1 
     * @param arg2 
     * @param arg3 
     * @param arg4 
     */
    Emit(type: string, arg0?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any) {
        this.node.emit(type, arg0, arg1, arg2, arg3, arg4);
    }

    Show(...args) {
        let thisObj = this;
        if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
        let lay = this.$lockLay != undefined ? this.$lockLay : UILay.Panel;
        if ($show(thisObj.node, lay)) {
            thisObj.onShow();
        }
        thisObj.flush(...args);
    }

    ShowTop(...args) {
        let thisObj = this;
        if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
        let lay = this.$lockLay != undefined ? this.$lockLay : UILay.Modal;
        if ($show(thisObj.node, lay)) {
            thisObj.onShow();
        }
        thisObj.flush(...args);
    }

    ShowMsg(...args) {
        let thisObj = this;
        if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
        let lay = this.$lockLay != undefined ? this.$lockLay : UILay.MsgPanel;
        if ($show(thisObj.node, lay)) {
            thisObj.onShow();
        }
        thisObj.flush(...args);
    }

    ShowUI(...args) {
        let thisObj = this;
        if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
        let lay = this.$lockLay != undefined ? this.$lockLay : UILay.UI;
        if ($show(thisObj.node, lay)) {
            thisObj.onShow();
        }
        thisObj.flush(...args);
    }

    Hide(...args) {
        let thisObj = this;
        if (!thisObj.node || !thisObj.node.parent) return;
        $hide(thisObj.node);
        // thisObj.onHide(...args);
    }

    protected find<T extends Component>(path: string): Node;
    protected find<T extends Component>(path: string, componentType: classz<T> | _classz<T>): T | null;
    protected find(path: string, componentType?: any) {
        let className = js.getClassName(this);
        path = path.replace("should_hide_in_hierarchy/" + className + "/", "");
        let node = this.node.getChildByPath(path);
        if (componentType) return node.getComponent(componentType);
        return node;
    }

    /**
     * 绑定关闭按钮
     * @param target 
     */
    protected CloseBy(target: Node | string) {
        if (target instanceof Node) {
            var btn: Node = target;
        } else if (this.node) {
            var btn = this.node.getChildByPath(target);
        }
        if (!btn) {
            console.warn("找不到关闭ui", target);
        }
        btn.on(Input.EventType.TOUCH_END, this.Hide, this);
    }

    /**
     * 显示处理
     * @param thisObj 
     * @param lay 
     * @returns 
     */
    private static async show(thisObj: any, lay: number, ...args) {
        // console.log("UIPath----", thisObj.name);
        thisObj.$showing = true;
        if (thisObj.$instance) {
            if (thisObj.$instance.$lockLay) lay = thisObj.$instance.$lockLay;
            if ($show(thisObj.$instance.node, lay)) {
                thisObj.$instance.onShow(...args);
            }
            thisObj.$instance.flush(...args);
            this.checkWidget(thisObj.$instance);
            if (thisObj.$loading) return thisObj.$loading;
            return Promise.resolve(thisObj.$instance);
        } else {
            return this.$getInstance(thisObj).then(panel => {
                if (thisObj.$showing) {
                    if (thisObj.$instance.$lockLay) lay = thisObj.$instance.$lockLay;
                    if ($show(panel.node, lay)) {
                        panel.onShow(...args);
                    }
                    panel.flush(...args);
                    this.checkWidget(panel);
                }
                return panel;
            });
        }
    }
    /**
     * 切页处理
     * @param thisObj 
     * @param args 
     * @returns 
     */
    private static async setPage(thisObj: any, ...args) {
        if (!thisObj.$showing) return;
        if (thisObj.$instance) {
            thisObj.$instance.SetPage(...args);
            if (thisObj.$loading) return thisObj.$loading;
            return Promise.resolve(thisObj.$instance);
        } else {
            return this.$getInstance(thisObj).then(panel => {
                if (thisObj.$showing) {
                    panel.SetPage(...args);
                }
                return panel;
            });
        }
    }

    private static checkWidget(thisObj) {
        if (thisObj.node) {
            let node: Node = thisObj.node.getChildByName(`mask`);
            if (node) {
                let w = node.getComponent(Widget);
                if (w) w.top = -$topBarHeight || 0;
            }
        }
    }

    /**
     * 加载实例
     * @param thisObj 
     * @returns 
     */
    private static async $getInstance(thisObj: any) {
        if (thisObj.$loading) return thisObj.$loading;
        if (!thisObj.$proxy) thisObj.$proxy = new (thisObj as any)();
        let prefab = thisObj.$proxy.prefab;
        if (!prefab || prefab == "") throw js.getClassName(thisObj) + "必须设置protected static prefab以绑定预制界面";

        let success: Function;
        thisObj.$loading = new Promise((resolve, reject) => {
            success = resolve;
        });
        let prototype = thisObj.prototype ? thisObj.prototype : Object.getPrototypeOf(thisObj);
        let classz = prototype.constructor;
        ResMgr.GetResources(prefab, (prefab: Prefab) => {
            let node = instantiate(prefab);
            thisObj.$instance = node.addComponent(classz);
            $panel_cache.push(thisObj);
            node.on(NodeEventType.PARENT_CHANGED, (...args: any[]) => {
                thisObj.$showing = node.parent != undefined;
                if (!node.parent) {
                    if (thisObj.$instance['onHide']) thisObj.$instance['onHide']();
                }
            }, this);
            let onload = thisObj.$instance.onLoad ? thisObj.$instance.onLoad.bind(thisObj.$instance) : undefined;
            thisObj.$instance.onLoad = () => {
                thisObj.$instance.$hasLoad = true;
                if (!onload?.()) {
                    let initComplete = thisObj.$instance._initComplete;
                    thisObj.$instance._initComplete = undefined;
                    initComplete();
                }
                if (thisObj.$beforLoadComplete) {
                    thisObj.$instance.initSub.then(value => {
                        thisObj.$beforLoadComplete(thisObj.$instance);
                        thisObj.$beforLoadComplete = undefined;
                        return value;
                    });
                }
            }
            success(thisObj.$instance);
        }, (value, total) => {
            if ($LoadingIns && thisObj.$showing) $LoadingIns.Show(value, total);
        });
        return thisObj.$loading;
    }

    /**
     * 提前初始化
     */
    static async load() {
        let thisObj = this;
        if (thisObj.$instance) return thisObj.$loading;
        await this.$getInstance(thisObj);
    }

    /**
     * 显示面板
     */
    static async Show(...args) {
        let thisObj = this;
        return this.show(thisObj, UILay.Panel, ...args);
    }

    /**
     * 顶层显示
     */
    static async ShowTop(...args) {
        let thisObj = this;
        return this.show(thisObj, UILay.Modal, ...args);
    }

    static async ShowUI(...args) {
        let thisObj = this;
        return this.show(thisObj, UILay.UI, ...args);
    }

    static async ShowMsg(...args) {
        let thisObj = this;
        return this.show(thisObj, UILay.MsgPanel, ...args);
    }

    static async ShowGame(...args) {
        let thisObj = this;
        return this.show(thisObj, UILay.Game, ...args);
    }

    static async SetPage(...args) {
        let thisObj = this;
        return this.setPage(thisObj, ...args);
    }

    /**
     * 关闭面板
     */
    static Hide(...args) {
        let thisObj = this;
        thisObj.$showing = false;
        if (thisObj.$instance) {
            $hide(thisObj.$instance);
            // thisObj.$instance.onHide(...args);
        }
    }
    /**
     * 刷新界面
     * @param args 
     */
    static async Flush(...args) {
        let thisObj = this;
        if (thisObj.$instance && thisObj.$instance.isComplete) {
            thisObj.$instance.flush(...args);
            return;
        }
        await thisObj.Waitting();
        thisObj.$instance.flush(...args);
    }

    /**是否正在显示 */
    static get Showing() {
        let thisObj = this;
        return thisObj.$showing;
    }

    /**
     * 获取一打开的panel数量
     */
    static GetPanelNum(...excepts: string[]) {
        let num = $getChildNum(...excepts);
        return num;
    }

    /**
     * 通过事件名发送自定义事件，如果节点尚未加载初试完毕则会延迟到初始完成后派发事件
     * @param type 
     * @param arg0 
     * @param arg1 
     * @param arg2 
     * @param arg3 
     * @param arg4 
     */
    static Emit(type: string, arg0?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any) {
        let thisObj = this;
        if (thisObj.$loading) {
            thisObj.$loading.then(p => {
                p.Emit(type, arg0, arg1, arg2, arg3, arg4);
                return p;
            });
            return;
        } else if (!thisObj.$beforLoad) {
            thisObj.$beforLoad = new Promise((resolve, reject) => {
                thisObj.$beforLoadComplete = resolve;
            });
        }
        thisObj.$beforLoad.then(p => {
            p.Emit(type, arg0, arg1, arg2, arg3, arg4);
            return p;
        })
    }

    /**
     * 调用方法
     * @param method 
     * @param args 
     */
    static Call<T>(method: keyof T, ...args: any[]) {
        let thisObj = this;
        // console.log("Call", thisObj);
        if (thisObj.$instance) {
            thisObj.$instance[method](...args);
            return;
        } else if (thisObj.$loading) {
            thisObj.$loading.then(p => {
                p[method](...args);
                return p;
            });
            return;
        } else if (!thisObj.$beforLoad) {
            thisObj.$beforLoad = new Promise((resolve, reject) => {
                thisObj.$beforLoadComplete = resolve;
            });
        }
        thisObj.$beforLoad.then(p => {
            p[method](...args);
        })
    }

    protected static Waitting() {
        let thisObj = this;
        if (thisObj.$instance) return thisObj.$instance.initSub;
        if (thisObj.$loading) return thisObj.$loading;
        if (!thisObj.$beforLoad) {
            thisObj.$beforLoad = new Promise((resolve, reject) => {
                thisObj.$beforLoadComplete = resolve;
            });
        }
        return thisObj.$beforLoad;
    }

    /**
     * 销毁
     */
    static Destroy() {
        let thisObj = this;
        if (thisObj.$instance) {
            let node = thisObj.$instance.node as Node;
            node.destroy();
            thisObj.$instance = undefined;
        }
    }
}

class ProxyComponent extends Component {
    static async Create(prefab: string) {
        let thisObj = this;
        // let obj = popGameObj(thisObj);
        // if (obj) return Promise.resolve(obj);
        let success: Function;
        let promise = new Promise((resolve, reject) => {
            success = resolve;
        });
        ResMgr.GetResources(prefab, (prefab: Prefab) => {
            let node = instantiate(prefab);
            let panel = node.addComponent(thisObj as any);
            success(panel);
        }, (value, total) => {
            if (value >= total && $LoadingIns) $LoadingIns.Show(value, total);
        });
        return promise;
    }

    protected find<T extends Component>(path: string): Node;
    protected find<T extends Component>(path: string, componentType: classz<T> | _classz<T>): T | null;
    protected find(path: string, componentType?: any) {
        let className = js.getClassName(this);
        path = path.replace("should_hide_in_hierarchy/" + className + "/", "");
        let node = this.node.getChildByPath(path);
        if (componentType) return node.getComponent(componentType);
        return node;
    }

    $loaded = false;
    $beforLoad: () => void;
    $onLoad: () => void;
    protected onLoad(): void {
        this.$onLoad && this.$onLoad();
        if (this.$beforLoad) {
            this.$beforLoad();
            this.$beforLoad = undefined;
        }
        this.$loaded = true;
        this.$onLoad = undefined;
    }

    $started = false;
    $start: () => void;
    protected start(): void {
        this.$onLoad && this.$onLoad();
        if (this.$beforLoad) {
            this.$beforLoad();
            this.$beforLoad = undefined;
        }
        this.$loaded = true;
        this.$onLoad = undefined;

        this.$start && this.$start();
        this.$started = true;
    }

    $onEnable: () => void;
    protected onEnable(): void { this.$onEnable && this.$onEnable(); }

    $update: (dt: number) => void;
    protected update(dt: number): void {
        if (this.$beforLoad) {
            this.$beforLoad();
            this.$beforLoad = undefined;
        }
        if (this.$onLoad) {
            this.$onLoad();
            this.$onLoad = undefined;
        }
        if (this.$update) {
            this.$update(dt);
        }
    }

    $onDisable: () => void;
    protected onDisable(): void { this.$onDisable && this.$onDisable(); }
}

let $classSeed = 0;
let gameObjPool: { [className: string]: { [prefab: string]: any[] } } = {};
function popGameObj(classz: any, prefab: string) {
    if (!js.getClassName(classz)) {
        $classSeed++;
        while (js.getClassByName("GameObj" + $classSeed)) {
            $classSeed++;
        }
        js.setClassName("GameObj" + $classSeed, classz);
    }
    let pool = gameObjPool[js.getClassName(classz)];
    prefab = prefab || "";
    if (pool && pool[prefab] && pool[prefab].length) {
        return pool[prefab].pop();
    }
    return undefined;
}
function pushGameObj(obj: GameObj) {
    if (obj.parent) obj.parent.removeChild(obj);
    let classz = js.getClassName(obj);
    if (!classz) {
        obj.destroy();
        return false;
    }
    let prefab = obj['$prefab'] || "";
    let pool = gameObjPool[classz] || { [prefab]: [] };
    gameObjPool[classz] = pool;
    if (pool[prefab] && pool[prefab].indexOf(obj) == -1) {
        pool[prefab].push(obj);
    } else {
        return false;
    }
    return true;
}

/**
 * 场景实体
 * @默认使用Create创建
 */
export abstract class GameObj extends Node {
    static Create(prefab?: string) {
        var thisObj: any = this;
        if (!prefab) prefab = thisObj['$prefab'];
        var obj = popGameObj(thisObj, prefab);
        if (obj) return obj;
        var obj = new (thisObj as any)();
        if (!thisObj['$prefab']) {
            thisObj['$prefab'] = obj.$prefab;
            if (!js.getClassName(thisObj)) {
                $classSeed++;
                while (js.getClassByName("GameObj" + $classSeed)) {
                    $classSeed++;
                }
                js.setClassName("GameObj" + $classSeed, thisObj);
            }
        }
        obj.loadPrefab(prefab);
        return obj;
    }

    protected static $classz: string = "";
    protected static $prefab: string = "";
    protected abstract $prefab: string;
    protected $proxy: ProxyComponent;
    protected loadSub: Promise<void>;
    protected loadEnd: Function;
    protected $hasLoad: boolean;
    protected $getComponent: (classConstructor: any) => any;
    protected $addComponent: <T extends Component>(classConstructor: __private.__types_globals__Constructor<T>) => T;
    constructor() {
        super();
        let thisObj = this;

        this.loadSub = new Promise((resolve, reject) => { thisObj.loadEnd = resolve; })
        // if (!super.getComponent(UITransform)) super.addComponent(UITransform);
        if (!this.$getComponent) this.$getComponent = super.getComponent;
        if (!this.$addComponent) this.$addComponent = super.addComponent;
        this["getComponent"] = (classz: any) => {
            if (classz == UITransform) return super.getComponent(UITransform);
            if (this.$proxy) return this.$proxy.node.getComponent(classz);
            return null;
        }
        this["getComponentInChildren"] = (classz: any) => {
            if (this.$proxy) return this.$proxy.node.getComponentInChildren(classz);
            return null;
        }
        this["getComponents"] = (classz: any) => {
            if (this.$proxy) return this.$proxy.node.getComponents(classz);
            return [];
        }
        this["getComponentsInChildren"] = (classz: any) => {
            if (this.$proxy) return this.$proxy.node.getComponentsInChildren(classz);
            return [];
        }
    }

    public GetLoadSub() {
        return this.loadSub;
    }

    public removeSelf() {
        if (this.parent) this.parent.removeChild(this);
    }

    public get hasLoad() {
        if (!this.$proxy) return false;
        return this.$proxy.$loaded;
    }

    public get prefabNode() {
        if (!this.$proxy) return undefined;
        return this.$proxy.node;
    }

    public GetChildren() {
        if (this.$proxy) return this.$proxy.node.children;
        return this.children;
    }

    protected loadPrefab(prefaburl?: string) {
        let thisObj = this;
        let url = prefaburl || thisObj.$prefab;
        thisObj.$prefab = url;
        ResMgr.GetResources(url, (prefab: Prefab) => {
            if (!prefab) console.error("加载失败:" + url);

            let node = instantiate(prefab);

            thisObj.$proxy = node.addComponent(ProxyComponent);

            thisObj.$proxy.$beforLoad = thisObj.beforLoad.bind(thisObj);
            thisObj.$proxy.$onLoad = thisObj.onLoad.bind(thisObj);
            thisObj.$proxy.$start = thisObj.start.bind(thisObj);

            thisObj.$proxy.$onEnable = thisObj.onEnable.bind(thisObj);
            thisObj.$proxy.$update = thisObj.update.bind(thisObj);
            thisObj.$proxy.$onDisable = thisObj.onDisable.bind(thisObj);

            if (thisObj.$proxy.$started && thisObj.$proxy.$loaded) thisObj.$proxy.$start();

            thisObj.addChild(node);
        });
    }

    /**
     * 层级优先级相同y坐标优先级越大越上层
     * @param value 
     * @param offset 
     */
    layPriority = 0;

    private beforLoad() {
        let loadEnd = this.loadEnd;
        this.loadEnd = undefined;
        if (loadEnd) loadEnd();
        this.$hasLoad = true;
    }
    protected onLoad(): void {

    }
    protected start(): void { }
    protected update(dt: number): void { }
    protected onEnable(): void { }
    protected onDisable(): void { }

    find<T extends Component>(path: string): Node;
    find<T extends Component>(path: string, componentType: classz<T> | _classz<T>): T | null;
    find(path: string, componentType?: any) {
        let className = js.getClassName(this);
        path = path.replace("should_hide_in_hierarchy/" + className + "/", "");
        let node = this.$proxy.node.getChildByPath(path);
        if (!node) return undefined;
        if (componentType) return node.getComponent(componentType);
        return node;
    }

    schedule(callback: any, interval?: number, repeat?: number, delay?: number): void {
        if (!this.$proxy) return;
        this.$proxy.schedule(callback, interval, delay);
    }
    scheduleOnce(callback: any, delay?: number): void {
        if (!this.$proxy) return;
        this.$proxy.scheduleOnce(callback, delay);
    }

    receive() {
        if (this.$proxy) this.$proxy.unscheduleAllCallbacks();
        if (!this.$hasLoad) {
            let self = this;
            this.loadSub.then(() => {
                pushGameObj(self);
            })
        } else {
            pushGameObj(this);
        }
    }
}
