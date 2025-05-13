System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Input, Node, NodeEventType, UITransform, Widget, find, instantiate, js, sys, view, ResMgr, EventMgr, GameRoot, Panel, ProxyComponent, GameObj, _crd, UILay, $show, $hide, $getChildNum, $panel_cache, $LoadingIns, $topBarHeight, $root_inst, $classSeed, gameObjPool;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function popGameObj(classz, prefab) {
    if (!js.getClassName(classz)) {
      $classSeed++;

      while (js.getClassByName("GameObj" + $classSeed)) {
        $classSeed++;
      }

      js.setClassName("GameObj" + $classSeed, classz);
    }

    var pool = gameObjPool[js.getClassName(classz)];
    prefab = prefab || "";

    if (pool && pool[prefab] && pool[prefab].length) {
      return pool[prefab].pop();
    }

    return undefined;
  }

  function pushGameObj(obj) {
    if (obj.parent) obj.parent.removeChild(obj);
    var classz = js.getClassName(obj);

    if (!classz) {
      obj.destroy();
      return false;
    }

    var prefab = obj['$prefab'] || "";
    var pool = gameObjPool[classz] || {
      [prefab]: []
    };
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


  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./EventMgr", _context.meta, extras);
  }

  _export({
    GameRoot: void 0,
    Panel: void 0,
    GameObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Input = _cc.Input;
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      find = _cc.find;
      instantiate = _cc.instantiate;
      js = _cc.js;
      sys = _cc.sys;
      view = _cc.view;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df913jQSRhPSanvtZJZKK1U", "GameRoot", undefined);

      __checkObsolete__(['Component', 'Input', 'Layers', 'Node', 'NodeEventType', 'Prefab', 'RenderRoot2D', 'UITransform', 'View', 'Widget', '__private', 'find', 'instantiate', 'js', 'sys', 'view']);

      _export("UILay", UILay = /*#__PURE__*/function (UILay) {
        UILay[UILay["Game"] = 0] = "Game";
        UILay[UILay["UI"] = 1] = "UI";
        UILay[UILay["Panel"] = 2] = "Panel";
        UILay[UILay["MsgPanel"] = 3] = "MsgPanel";
        UILay[UILay["Guide"] = 4] = "Guide";
        UILay[UILay["Modal"] = 5] = "Modal";
        return UILay;
      }({}));

      $panel_cache = [];
      $topBarHeight = 0;

      _export("GameRoot", GameRoot = class GameRoot {
        constructor(canvas, depth, loading) {
          if (depth === void 0) {
            depth = 0;
          }

          this.canvas = void 0;
          this.lays = [];

          if ($root_inst) {
            for (var panel of $panel_cache) {
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
              var _lay = new Node();

              var widget = _lay.addComponent(Widget);

              widget.isAlignLeft = true;
              widget.left = 0;
              widget.isAlignRight = true;
              widget.right = 0;
              widget.isAlignTop = true;
              widget.top = 0;
              widget.isAlignBottom = true;
              widget.bottom = 0;
              _lay.name = k + "_Lay";
              var index = Number(UILay[k]);
              this.lays[index] = _lay;
              this.canvas.addChild(_lay);

              _lay.setSiblingIndex(index + depth);
            }
          } // $root = this.lays[Lay.FGUI];


          if (find("Canvas/bg")) find("Canvas/bg").setSiblingIndex(0);
          console.log("GameRoot", this.canvas);
          $show = this.addChild.bind(this);
          $hide = this.removeChild.bind(this);
          $getChildNum = this.getChildNum.bind(this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("top_bar_height", this.onUpdateTopBar, this);
          this.onUpdateTopBar(view.getVisibleSize().height - sys.getSafeAreaRect().height);
        }

        onUpdateTopBar(h) {
          $topBarHeight = h;
          console.log("onStatusBar", $topBarHeight);

          for (var i = 0; i < this.lays.length; i++) {
            var _lay2 = this.lays[i];

            var widget = _lay2.getComponent(Widget);

            if (widget) widget.top = $topBarHeight || 0;
          }
        }

        getChildNum() {
          var num = 0;

          for (var _len = arguments.length, excepts = new Array(_len), _key = 0; _key < _len; _key++) {
            excepts[_key] = arguments[_key];
          }

          for (var _lay3 of this.lays) {
            var children = _lay3.children;

            for (var child of children) {
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


        addChild(display, lay) {
          var container = this.lays[lay];

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


        removeChild(display) {
          if (display instanceof Component) {
            if (display.node.parent) {
              display.node.parent.removeChild(display.node);
            }
          } else {
            if (display.parent) display.parent.removeChild(display);
          }
        }

      });

      /**
       * 界面基类
       * @默认隐藏单例并且推荐采用静态方法控制和更新界面
       * @实在需要可在子类公开单例
       * @Create方法可以创建多个界面副本
       * @Call方法和Emit方法都可以在界面加载或打开之前调用但是只会在加载初始完毕后才真正调用
       */
      _export("Panel", Panel = class Panel extends Component {
        constructor() {
          super(...arguments);
          this.$hasLoad = false;
          this.$canBack = false;
          //是否可以回退
          this.$lockLay = void 0;
          this._initComplete = void 0;
          this.initSub = new Promise((resolve, reject) => {
            this._initComplete = resolve;
          });

          /**
           * - 已废弃，onLoad基类会自动回调resolve
           * @deprecated
           */
          this.initComplete = () => {
            var $initComplete = this._initComplete;
            this._initComplete = undefined;
            $initComplete();
            this.$hasLoad = true;
          };

          this.$secondTick = 0;
        }

        get hasLoad() {
          return this.$hasLoad;
        }
        /**
         * 面板预制名称
         */

        /**
         * 当界面加进显示列表显示出来时调用一次
         */

        /**
         * 刷新，每次Show或者Update时调用
         * @param args 
         */


        SetPage() {}
        /**
         * 当界面被关闭时调用
         */


        get isComplete() {
          return this._initComplete == undefined;
        }

        update(dt) {
          this.$secondTick += dt;

          if (this.$secondTick >= 1) {
            this.$secondTick = 0;
            this.onSecond();
          }
        }

        onSecond() {}
        /**
         * 关闭其他
         */


        closeOther(type) {
          if (type === void 0) {
            type = Panel;
          }

          for (var _lay4 of $root_inst.lays) {
            var children = _lay4.children;

            for (var child of children) {
              if (child != this.node) {
                var panel = child.getComponent(type);

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
          for (var _lay5 of $root_inst.lays) {
            var children = _lay5.children;

            for (var child of children) {
              var panel = child.getComponent(Panel);

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
          for (var _lay6 of $root_inst.lays) {
            var children = _lay6.children;

            for (var child of children) {
              var panel = child.getComponent(Panel);

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


        static Create() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this;
            if (!thisObj.$proxy) thisObj.$proxy = new thisObj();
            var prefab = thisObj.$proxy.prefab;
            if (!prefab || prefab == "") throw js.getClassName(thisObj) + "必须设置protected static prefab以绑定预制界面";
            var prototype = thisObj.prototype ? thisObj.prototype : Object.getPrototypeOf(thisObj);
            var classz = prototype.constructor;
            var success;
            var promise = new Promise((resolve, reject) => {
              success = resolve;
            });
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).GetResources(prefab, prefab => {
              var node = instantiate(prefab);
              var panel = node.addComponent(classz);
              node.on(Node.EventType.PARENT_CHANGED, e => {
                if (!node.parent) {
                  if (panel['onHide']) panel['onHide']();
                }
              });
              success(panel);
              var onload = panel.onLoad ? panel.onLoad.bind(panel) : undefined;

              panel.onLoad = () => {
                if (!(onload != null && onload())) {
                  var initComplete = panel._initComplete;
                  panel._initComplete = undefined;
                  initComplete();
                  panel.$hasLoad = true;
                }
              };
            }, (value, total) => {
              if (thisObj.$showing && $LoadingIns) $LoadingIns.Show(value, total);
            });
            return promise;
          })();
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


        Emit(type, arg0, arg1, arg2, arg3, arg4) {
          this.node.emit(type, arg0, arg1, arg2, arg3, arg4);
        }

        Show() {
          var thisObj = this;
          if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
          var lay = this.$lockLay != undefined ? this.$lockLay : UILay.Panel;

          if ($show(thisObj.node, lay)) {
            thisObj.onShow();
          }

          thisObj.flush(...arguments);
        }

        ShowTop() {
          var thisObj = this;
          if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
          var lay = this.$lockLay != undefined ? this.$lockLay : UILay.Modal;

          if ($show(thisObj.node, lay)) {
            thisObj.onShow();
          }

          thisObj.flush(...arguments);
        }

        ShowMsg() {
          var thisObj = this;
          if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
          var lay = this.$lockLay != undefined ? this.$lockLay : UILay.MsgPanel;

          if ($show(thisObj.node, lay)) {
            thisObj.onShow();
          }

          thisObj.flush(...arguments);
        }

        ShowUI() {
          var thisObj = this;
          if (!thisObj.node) throw js.getClassName(thisObj) + "实例必须使用Create创建";
          var lay = this.$lockLay != undefined ? this.$lockLay : UILay.UI;

          if ($show(thisObj.node, lay)) {
            thisObj.onShow();
          }

          thisObj.flush(...arguments);
        }

        Hide() {
          var thisObj = this;
          if (!thisObj.node || !thisObj.node.parent) return;
          $hide(thisObj.node); // thisObj.onHide(...args);
        }

        find(path, componentType) {
          var className = js.getClassName(this);
          path = path.replace("should_hide_in_hierarchy/" + className + "/", "");
          var node = this.node.getChildByPath(path);
          if (componentType) return node.getComponent(componentType);
          return node;
        }
        /**
         * 绑定关闭按钮
         * @param target 
         */


        CloseBy(target) {
          if (target instanceof Node) {
            var btn = target;
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


        static show(thisObj, lay) {
          var _arguments = arguments,
              _this2 = this;

          return _asyncToGenerator(function* () {
            for (var _len2 = _arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = _arguments[_key2];
            }

            // console.log("UIPath----", thisObj.name);
            thisObj.$showing = true;

            if (thisObj.$instance) {
              if (thisObj.$instance.$lockLay) lay = thisObj.$instance.$lockLay;

              if ($show(thisObj.$instance.node, lay)) {
                thisObj.$instance.onShow(...args);
              }

              thisObj.$instance.flush(...args);

              _this2.checkWidget(thisObj.$instance);

              if (thisObj.$loading) return thisObj.$loading;
              return Promise.resolve(thisObj.$instance);
            } else {
              return _this2.$getInstance(thisObj).then(panel => {
                if (thisObj.$showing) {
                  if (thisObj.$instance.$lockLay) lay = thisObj.$instance.$lockLay;

                  if ($show(panel.node, lay)) {
                    panel.onShow(...args);
                  }

                  panel.flush(...args);

                  _this2.checkWidget(panel);
                }

                return panel;
              });
            }
          })();
        }
        /**
         * 切页处理
         * @param thisObj 
         * @param args 
         * @returns 
         */


        static setPage(thisObj) {
          var _arguments2 = arguments,
              _this3 = this;

          return _asyncToGenerator(function* () {
            for (var _len3 = _arguments2.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = _arguments2[_key3];
            }

            if (!thisObj.$showing) return;

            if (thisObj.$instance) {
              thisObj.$instance.SetPage(...args);
              if (thisObj.$loading) return thisObj.$loading;
              return Promise.resolve(thisObj.$instance);
            } else {
              return _this3.$getInstance(thisObj).then(panel => {
                if (thisObj.$showing) {
                  panel.SetPage(...args);
                }

                return panel;
              });
            }
          })();
        }

        static checkWidget(thisObj) {
          if (thisObj.node) {
            var node = thisObj.node.getChildByName("mask");

            if (node) {
              var w = node.getComponent(Widget);
              if (w) w.top = -$topBarHeight || 0;
            }
          }
        }
        /**
         * 加载实例
         * @param thisObj 
         * @returns 
         */


        static $getInstance(thisObj) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (thisObj.$loading) return thisObj.$loading;
            if (!thisObj.$proxy) thisObj.$proxy = new thisObj();
            var prefab = thisObj.$proxy.prefab;
            if (!prefab || prefab == "") throw js.getClassName(thisObj) + "必须设置protected static prefab以绑定预制界面";
            var success;
            thisObj.$loading = new Promise((resolve, reject) => {
              success = resolve;
            });
            var prototype = thisObj.prototype ? thisObj.prototype : Object.getPrototypeOf(thisObj);
            var classz = prototype.constructor;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).GetResources(prefab, prefab => {
              var node = instantiate(prefab);
              thisObj.$instance = node.addComponent(classz);
              $panel_cache.push(thisObj);
              node.on(NodeEventType.PARENT_CHANGED, function () {
                thisObj.$showing = node.parent != undefined;

                if (!node.parent) {
                  if (thisObj.$instance['onHide']) thisObj.$instance['onHide']();
                }
              }, _this4);
              var onload = thisObj.$instance.onLoad ? thisObj.$instance.onLoad.bind(thisObj.$instance) : undefined;

              thisObj.$instance.onLoad = () => {
                thisObj.$instance.$hasLoad = true;

                if (!(onload != null && onload())) {
                  var initComplete = thisObj.$instance._initComplete;
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
              };

              success(thisObj.$instance);
            }, (value, total) => {
              if ($LoadingIns && thisObj.$showing) $LoadingIns.Show(value, total);
            });
            return thisObj.$loading;
          })();
        }
        /**
         * 提前初始化
         */


        static load() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this5;
            if (thisObj.$instance) return thisObj.$loading;
            yield _this5.$getInstance(thisObj);
          })();
        }
        /**
         * 显示面板
         */


        static Show() {
          var _arguments3 = arguments,
              _this6 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this6;

            for (var _len4 = _arguments3.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = _arguments3[_key4];
            }

            return _this6.show(thisObj, UILay.Panel, ...args);
          })();
        }
        /**
         * 顶层显示
         */


        static ShowTop() {
          var _arguments4 = arguments,
              _this7 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this7;

            for (var _len5 = _arguments4.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = _arguments4[_key5];
            }

            return _this7.show(thisObj, UILay.Modal, ...args);
          })();
        }

        static ShowUI() {
          var _arguments5 = arguments,
              _this8 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this8;

            for (var _len6 = _arguments5.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = _arguments5[_key6];
            }

            return _this8.show(thisObj, UILay.UI, ...args);
          })();
        }

        static ShowMsg() {
          var _arguments6 = arguments,
              _this9 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this9;

            for (var _len7 = _arguments6.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = _arguments6[_key7];
            }

            return _this9.show(thisObj, UILay.MsgPanel, ...args);
          })();
        }

        static ShowGame() {
          var _arguments7 = arguments,
              _this10 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this10;

            for (var _len8 = _arguments7.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = _arguments7[_key8];
            }

            return _this10.show(thisObj, UILay.Game, ...args);
          })();
        }

        static SetPage() {
          var _arguments8 = arguments,
              _this11 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this11;

            for (var _len9 = _arguments8.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = _arguments8[_key9];
            }

            return _this11.setPage(thisObj, ...args);
          })();
        }
        /**
         * 关闭面板
         */


        static Hide() {
          var thisObj = this;
          thisObj.$showing = false;

          if (thisObj.$instance) {
            $hide(thisObj.$instance); // thisObj.$instance.onHide(...args);
          }
        }
        /**
         * 刷新界面
         * @param args 
         */


        static Flush() {
          var _arguments9 = arguments,
              _this12 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this12;

            if (thisObj.$instance && thisObj.$instance.isComplete) {
              thisObj.$instance.flush(..._arguments9);
              return;
            }

            yield thisObj.Waitting();
            thisObj.$instance.flush(..._arguments9);
          })();
        }
        /**是否正在显示 */


        static get Showing() {
          var thisObj = this;
          return thisObj.$showing;
        }
        /**
         * 获取一打开的panel数量
         */


        static GetPanelNum() {
          var num = $getChildNum(...arguments);
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


        static Emit(type, arg0, arg1, arg2, arg3, arg4) {
          var thisObj = this;

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
          });
        }
        /**
         * 调用方法
         * @param method 
         * @param args 
         */


        static Call(method) {
          for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
            args[_key10 - 1] = arguments[_key10];
          }

          var thisObj = this; // console.log("Call", thisObj);

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
          });
        }

        static Waitting() {
          var thisObj = this;
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
          var thisObj = this;

          if (thisObj.$instance) {
            var node = thisObj.$instance.node;
            node.destroy();
            thisObj.$instance = undefined;
          }
        }

      });

      Panel.$instance = void 0;
      Panel.$loading = void 0;
      Panel.$beforLoad = void 0;
      Panel.$beforLoadComplete = void 0;
      Panel.$showing = false;
      Panel.$proxy = void 0;
      ProxyComponent = class ProxyComponent extends Component {
        constructor() {
          super(...arguments);
          this.$loaded = false;
          this.$beforLoad = void 0;
          this.$onLoad = void 0;
          this.$started = false;
          this.$start = void 0;
          this.$onEnable = void 0;
          this.$update = void 0;
          this.$onDisable = void 0;
        }

        static Create(prefab) {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            var thisObj = _this13; // let obj = popGameObj(thisObj);
            // if (obj) return Promise.resolve(obj);

            var success;
            var promise = new Promise((resolve, reject) => {
              success = resolve;
            });
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).GetResources(prefab, prefab => {
              var node = instantiate(prefab);
              var panel = node.addComponent(thisObj);
              success(panel);
            }, (value, total) => {
              if (value >= total && $LoadingIns) $LoadingIns.Show(value, total);
            });
            return promise;
          })();
        }

        find(path, componentType) {
          var className = js.getClassName(this);
          path = path.replace("should_hide_in_hierarchy/" + className + "/", "");
          var node = this.node.getChildByPath(path);
          if (componentType) return node.getComponent(componentType);
          return node;
        }

        onLoad() {
          this.$onLoad && this.$onLoad();

          if (this.$beforLoad) {
            this.$beforLoad();
            this.$beforLoad = undefined;
          }

          this.$loaded = true;
          this.$onLoad = undefined;
        }

        start() {
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

        onEnable() {
          this.$onEnable && this.$onEnable();
        }

        update(dt) {
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

        onDisable() {
          this.$onDisable && this.$onDisable();
        }

      };
      $classSeed = 0;
      gameObjPool = {};

      _export("GameObj", GameObj = class GameObj extends Node {
        static Create(prefab) {
          var thisObj = this;
          if (!prefab) prefab = thisObj['$prefab'];
          var obj = popGameObj(thisObj, prefab);
          if (obj) return obj;
          var obj = new thisObj();

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

        constructor() {
          super();
          this.$proxy = void 0;
          this.loadSub = void 0;
          this.loadEnd = void 0;
          this.$hasLoad = void 0;
          this.$getComponent = void 0;
          this.$addComponent = void 0;

          /**
           * 层级优先级相同y坐标优先级越大越上层
           * @param value 
           * @param offset 
           */
          this.layPriority = 0;
          var thisObj = this;
          this.loadSub = new Promise((resolve, reject) => {
            thisObj.loadEnd = resolve;
          }); // if (!super.getComponent(UITransform)) super.addComponent(UITransform);

          if (!this.$getComponent) this.$getComponent = super.getComponent;
          if (!this.$addComponent) this.$addComponent = super.addComponent;

          this["getComponent"] = classz => {
            if (classz == UITransform) return super.getComponent(UITransform);
            if (this.$proxy) return this.$proxy.node.getComponent(classz);
            return null;
          };

          this["getComponentInChildren"] = classz => {
            if (this.$proxy) return this.$proxy.node.getComponentInChildren(classz);
            return null;
          };

          this["getComponents"] = classz => {
            if (this.$proxy) return this.$proxy.node.getComponents(classz);
            return [];
          };

          this["getComponentsInChildren"] = classz => {
            if (this.$proxy) return this.$proxy.node.getComponentsInChildren(classz);
            return [];
          };
        }

        GetLoadSub() {
          return this.loadSub;
        }

        removeSelf() {
          if (this.parent) this.parent.removeChild(this);
        }

        get hasLoad() {
          if (!this.$proxy) return false;
          return this.$proxy.$loaded;
        }

        get prefabNode() {
          if (!this.$proxy) return undefined;
          return this.$proxy.node;
        }

        GetChildren() {
          if (this.$proxy) return this.$proxy.node.children;
          return this.children;
        }

        loadPrefab(prefaburl) {
          var thisObj = this;
          var url = prefaburl || thisObj.$prefab;
          thisObj.$prefab = url;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).GetResources(url, prefab => {
            if (!prefab) console.error("加载失败:" + url);
            var node = instantiate(prefab);
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

        beforLoad() {
          var loadEnd = this.loadEnd;
          this.loadEnd = undefined;
          if (loadEnd) loadEnd();
          this.$hasLoad = true;
        }

        onLoad() {}

        start() {}

        update(dt) {}

        onEnable() {}

        onDisable() {}

        find(path, componentType) {
          var className = js.getClassName(this);
          path = path.replace("should_hide_in_hierarchy/" + className + "/", "");
          var node = this.$proxy.node.getChildByPath(path);
          if (!node) return undefined;
          if (componentType) return node.getComponent(componentType);
          return node;
        }

        schedule(callback, interval, repeat, delay) {
          if (!this.$proxy) return;
          this.$proxy.schedule(callback, interval, delay);
        }

        scheduleOnce(callback, delay) {
          if (!this.$proxy) return;
          this.$proxy.scheduleOnce(callback, delay);
        }

        receive() {
          if (this.$proxy) this.$proxy.unscheduleAllCallbacks();

          if (!this.$hasLoad) {
            var self = this;
            this.loadSub.then(() => {
              pushGameObj(self);
            });
          } else {
            pushGameObj(this);
          }
        }

      });

      GameObj.$classz = "";
      GameObj.$prefab = "";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2300dea9db8ec2cd7ac1562e4603e1fa640699d.js.map