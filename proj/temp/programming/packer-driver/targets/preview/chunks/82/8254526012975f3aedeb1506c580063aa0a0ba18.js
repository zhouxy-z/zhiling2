System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Button, Canvas, Input, Node, Rect, Sprite, SpriteRenderer, Tween, UIRenderer, UITransform, Vec3, builtinResMgr, find, game, geometry, js, math, tween, v3, view, Mathf, PlaneView, Utils, _crd, $v1, $v2, $v3, $mat1, $mat2, $mat3, $q1, $q2, $q3, $ray1, $timeseed, $tick_record, $quat_x, $quat_y, $quat_z;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /**
   * 延迟
   * @param second 
   * @returns 
   */
  function Second(_x3) {
    return _Second.apply(this, arguments);
  }

  function _Second() {
    _Second = _asyncToGenerator(function* (second) {
      var timeout;
      var p = new Promise((resolve, reject) => {
        timeout = resolve;
      });
      var tick = game.totalTime;
      setTimeout(() => {
        timeout(game.totalTime - tick);
      }, second * 1000);
      return p;
    });
    return _Second.apply(this, arguments);
  }

  /**
   * 标记一个时间或计算已标记的时间点
   * @param tt 
   * @returns 
   */
  function TimeStamp(tt) {
    if (tt) {
      return game.totalTime / 1000 - ($tick_record[tt] || 0);
    }

    $timeseed++;
    $tick_record[$timeseed.toString()] = game.totalTime / 1000;
    return $timeseed;
  }

  function copyToClip(value) {
    // 创建一个临时的textarea元素，将文本放入其中
    var textarea = document.createElement('textarea');
    textarea.value = value;
    document.body.appendChild(textarea); // 选中文本

    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    var success = false;

    try {
      // 尝试执行复制操作
      document.execCommand('copy');
      console.log('Text copied to clipboard:', value);
      success = true;
    } catch (err) {
      console.error('Unable to copy text to clipboard');
      success = false;
    } // 移除临时元素


    document.body.removeChild(textarea);
    return success;
  }

  function _reportPossibleCrUseOfSpriteLabel(extras) {
    _reporterNs.report("SpriteLabel", "../component/SpriteLabel", _context.meta, extras);
  }

  _export({
    Mathf: void 0,
    PlaneView: void 0,
    Second: Second,
    TimeStamp: TimeStamp,
    copyToClip: copyToClip,
    Utils: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Button = _cc.Button;
      Canvas = _cc.Canvas;
      Input = _cc.Input;
      Node = _cc.Node;
      Rect = _cc.Rect;
      Sprite = _cc.Sprite;
      SpriteRenderer = _cc.SpriteRenderer;
      Tween = _cc.Tween;
      UIRenderer = _cc.UIRenderer;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      builtinResMgr = _cc.builtinResMgr;
      find = _cc.find;
      game = _cc.game;
      geometry = _cc.geometry;
      js = _cc.js;
      math = _cc.math;
      tween = _cc.tween;
      v3 = _cc.v3;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bd320W9JJFapR7jnVMOISg", "Utils", undefined);

      __checkObsolete__(['BlockInputEvents', 'Button', 'Camera', 'Canvas', 'Component', 'EventTouch', 'Input', 'Label', 'Mask', 'Mat4', 'Material', 'MeshRenderer', 'Node', 'Rect', 'RichText', 'Sprite', 'SpriteRenderer', 'Tween', 'UIRenderer', 'UITransform', 'Vec3', 'builtinResMgr', 'find', 'game', 'geometry', 'js', 'math', 'sp', 'tween', 'v3', 'view']);

      $v1 = v3();
      $v2 = v3();
      $v3 = v3();
      $mat1 = math.mat4();
      $mat2 = math.mat4();
      $mat3 = math.mat4();
      $q1 = math.quat();
      $q2 = math.quat();
      $q3 = math.quat();
      $ray1 = geometry.Ray.create();

      _export("Mathf", Mathf = class Mathf {
        static distance() {
          if (arguments.length == 2) {
            var _v = arguments.length <= 0 ? undefined : arguments[0],
                v2 = arguments.length <= 1 ? undefined : arguments[1];

            return Math.sqrt(Math.pow(v2.x - _v.x, 2) + Math.pow(v2.y - _v.y, 2));
          } else {
            var _x = arguments.length <= 0 ? undefined : arguments[0],
                _y = arguments.length <= 1 ? undefined : arguments[1],
                _x2 = arguments.length <= 2 ? undefined : arguments[2],
                _y2 = arguments.length <= 3 ? undefined : arguments[3];

            return Math.sqrt(Math.pow(_x2 - _x, 2) + Math.pow(_y2 - _y, 2));
          }
        }
        /**通用判断浮点数是否相等 */


        static Equip(a, b, epsilon) {
          if (epsilon === void 0) {
            epsilon = 1e-10;
          }

          // 处理非数值类型
          if (typeof a !== 'number' || typeof b !== 'number') return false; // 处理 NaN 和 Infinity

          if (Number.isNaN(a) || Number.isNaN(b)) return false;
          if (!Number.isFinite(a) || !Number.isFinite(b)) return a === b; // 计算绝对差值并与阈值比较

          return Math.abs(a - b) < epsilon;
        }

      });
      /**
       * 平面视图
       */


      _export("PlaneView", PlaneView = class PlaneView {
        constructor(camera, node, nv, offsetx, offsety) {
          this.camera = void 0;
          this.offsetx = 0;
          this.offsety = 0;
          this.nv = void 0;
          this.plane = void 0;
          this.leftUp = void 0;
          this.leftDown = void 0;
          this.rightUp = void 0;
          this.rightDown = void 0;
          this.middle = void 0;
          this.middleDown = void 0;
          this.mat = math.mat4();
          this.invertMat = math.mat4();
          this.localLeftUp = v3();
          this.localLeftDown = v3();
          this.localMiddle = v3();
          this.localRightUp = v3();
          this.localRightDown = v3();
          this.localMiddleDown = v3();
          this.camera = camera;
          this.nv = nv;
          this.offsetx = offsetx || 0;
          this.offsety = offsety || 0;
          node.getWorldMatrix(this.mat);

          if (nv) {
            Vec3.transformMat4($v1, nv, this.mat);
            Vec3.subtract($v2, $v1, node.worldPosition);
            this.plane = geometry.Plane.create($v2.x, $v2.y, $v2.z, node.worldPosition.length());
          } else {
            Vec3.transformMat4($v1, v3(0, 0, 0), this.mat);
            Vec3.transformMat4($v2, v3(1, 3, 0), this.mat);
            Vec3.transformMat4($v3, v3(2, 0, 0), this.mat);
            this.plane = geometry.Plane.create(0, 0, 0, 1);
            geometry.Plane.fromPoints(this.plane, $v1, $v2, $v3);
          }

          var size = view.getVisibleSizeInPixel();
          var w = size.width,
              h = size.height;
          this.leftUp = v3(...Utils.ScreenToPlane(this.offsetx, h - this.offsety, camera, this.plane));
          this.leftDown = v3(...Utils.ScreenToPlane(this.offsetx, this.offsety, camera, this.plane));
          this.middle = v3(...Utils.ScreenToPlane(w / 2 + this.offsetx, h / 2 + this.offsety, camera, this.plane));
          this.rightUp = v3(...Utils.ScreenToPlane(w - this.offsetx, h - this.offsety, camera, this.plane));
          this.rightDown = v3(...Utils.ScreenToPlane(w - this.offsetx, this.offsety, camera, this.plane));
          this.middleDown = v3(...Utils.ScreenToPlane(w / 2 + this.offsetx, this.offsety, camera, this.plane));
          math.Mat4.invert(this.invertMat, this.mat);
          Vec3.transformMat4(this.localLeftUp, this.leftUp, this.invertMat);
          Vec3.transformMat4(this.localLeftDown, this.leftDown, this.invertMat);
          Vec3.transformMat4(this.localMiddle, this.middle, this.invertMat);
          Vec3.transformMat4(this.localRightUp, this.rightUp, this.invertMat);
          Vec3.transformMat4(this.localRightDown, this.rightDown, this.invertMat);
          Vec3.transformMat4(this.localMiddleDown, this.middleDown, this.invertMat);
        }

        setLocalLeftUp(node, dx, dy) {
          if (dx === void 0) {
            dx = 0;
          }

          if (dy === void 0) {
            dy = 0;
          }

          node.setPosition(this.localLeftUp.x + dx, this.localLeftUp.y, this.localLeftUp.z + dy);
        }

        setLocalLeftDown(node, dx, dy) {
          if (dx === void 0) {
            dx = 0;
          }

          if (dy === void 0) {
            dy = 0;
          }

          node.setPosition(this.localLeftDown.x + dx, this.localLeftDown.y, this.localLeftDown.z - dy);
        }

        setLocalRightUp(node, dx, dy) {
          if (dx === void 0) {
            dx = 0;
          }

          if (dy === void 0) {
            dy = 0;
          }

          node.setPosition(this.localRightUp.x - dx, this.localRightUp.y, this.localRightUp.z + dy);
        }

        setLocalRightDown(node, dx, dy) {
          if (dx === void 0) {
            dx = 0;
          }

          if (dy === void 0) {
            dy = 0;
          }

          node.setPosition(this.localRightDown.x - dx, this.localRightDown.y, this.localRightDown.z - dy);
        }

        setLocalMiddleDown(node, dx, dy) {
          if (dx === void 0) {
            dx = 0;
          }

          if (dy === void 0) {
            dy = 0;
          }

          node.setPosition(this.localMiddle.x - dx, this.localMiddle.y, this.localMiddle.z - dy);
        }
        /**
         * 判断是否触碰
         * @param e 
         * @param node 
         * @param wide 
         * @param hide 
         * @returns 
         */


        checkTouch(e, node, wide, hide) {
          if (node['$$mask']) {
            node['$$mask'].dispatchEvent(e);
            return;
          }

          var pt = e.getLocation();
          var [x, y, z] = Utils.ScreenToPlane(pt.x, pt.y, this.camera, this.plane, undefined);
          $v2.set(x, y, z);
          Vec3.transformMat4($v1, $v2, this.invertMat);
          var v = node.position;

          if (this.nv && this.nv.equals(Vec3.UNIT_Y)) {
            if (Math.abs(v.x - $v1.x) <= wide && Math.abs(v.z - $v1.z) <= hide) {
              return true;
            }
          } else {
            if (Math.abs(v.x - $v1.x) <= wide && Math.abs(v.y - $v1.y) <= hide) {
              return true;
            }
          }

          return false;
        }

      });

      $timeseed = 0;
      $tick_record = {};
      $quat_x = math.quat();
      $quat_y = math.quat();
      $quat_z = math.quat();
      math.Quat.fromEuler($quat_x, -90, 0, 0);
      math.Quat.fromEuler($quat_y, 0, -90, 0);
      math.Quat.fromEuler($quat_z, 0, 0, -90);

      _export("Utils", Utils = class Utils {
        static trace() {
          var stack = new Error().stack.replace(/\([^\)]*\)/g, "");
          var stacks = stack.split("\n").slice(2, 4);

          for (var _len = arguments.length, arg = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            arg[_key2] = arguments[_key2];
          }

          console.log(...arg, ...stacks);
        }
        /**
         * 
         * @param decimal 传入数据 数字或者字符串
         * @param count 需要保留的小数位数
         * @returns 
         */


        static ToFixed(decimal, count) {
          if (count === void 0) {
            count = 0;
          }

          var reuslt = Math.round(decimal * 10000000000) / 10000000000 + "";
          var ls = reuslt.split(".");
          if (!ls.length || count < 1) return reuslt;
          reuslt = ls.shift();
          if (count > 0 && ls.length) reuslt += ".";

          while (count > 0 && ls.length) {
            reuslt += ls.shift();
            count--;
          }

          return reuslt; // const ss = 10000000000;
          // let value = Number(decimal);
          // if (isNaN(value) || value == undefined || value == Infinity) return '0';
          // if (typeof (decimal) == "number") {
          //     value = Math.round(value * ss) / ss;
          //     if (count) {
          //         let seed = Math.pow(10, count);
          //         value = Math.floor(value * seed) / seed;
          //         return value + "";
          //     } else return value + "";
          // } else if (typeof (decimal) == "string") {
          //     let index = decimal.indexOf(".");
          //     if (index != -1) {
          //         if (count > 0) {
          //             return decimal.substring(0, index + count + 1)
          //         } else {
          //             return decimal.substring(0, index);
          //         }
          //     } else {
          //         return decimal;
          //     }
          // }
          // return "0";
        }

        static formatNumber(n, accuracy) {
          if (accuracy === void 0) {
            accuracy = 2;
          }

          return this.BigNumber(n, accuracy);
        }

        static BigNumber(value, fd) {
          if (value >= 1000000000) return this.ToFixed(value / 1000000000, fd) + "b";
          if (value >= 1000000) return this.ToFixed(value / 1000000, fd) + "m";
          if (value >= 1000) return this.ToFixed(value / 1000, fd) + "k";
          return this.ToFixed(value, fd) + "";
        }

        static isNumber(arg) {
          return isNaN(Number(arg)) != false;
        }

        static IsArray(obj) {
          if (!Array.isArray) {
            Array["isArray"] = function (arg) {
              return Object.prototype.toString.call(arg) === '[object Array]';
            };
          }

          return Array.isArray(obj);
        }

        static noTouch(touch) {
          touch.preventSwallow = true;
        }
        /**屏蔽点击 */


        static NoTouch(target) {
          var block = target.getComponent(BlockInputEvents);
          if (block) block.destroy();
          target.on(Input.EventType.TOUCH_START, this.noTouch);
          target.on(Input.EventType.TOUCH_MOVE, this.noTouch);
          target.on(Input.EventType.TOUCH_END, this.noTouch);
          target.on(Input.EventType.TOUCH_CANCEL, this.noTouch);
        }

        /**
         * 转换坐标
         * @param x 
         * @param y 
         * @param from 
         * @param to 
         * @returns 
         */
        static Convert(x, y, from, to) {
          this.trans1.set(x, y);
          from.getComponent(UITransform).convertToWorldSpaceAR(this.trans1, this.trans2);

          if (!to) {
            return [this.trans2.x, this.trans2.y];
          }

          to.getComponent(UITransform).convertToNodeSpaceAR(this.trans2, this.trans1);
          return [this.trans1.x, this.trans1.y];
        }

        static ConvertNode(node, to) {
          var x = node.position.x,
              y = node.position.y;
          return this.Convert(x, y, node.parent, to);
        }

        static ConvertBoundToCavnas(canvas, node) {
          var canvasMat4 = canvas.getWorldMatrix();
          return node.getComponent(UITransform).getBoundingBoxTo(canvasMat4);
        }

        static MapBound(node) {
          var rect;
          node.parent.getWorldMatrix($mat1);
          var uts = node.getComponentsInChildren(UITransform);

          for (var ut of uts) {
            if (!rect) {
              rect = ut.getBoundingBoxTo($mat1).clone();
            } else {
              Rect.union(rect, rect.clone(), ut.getBoundingBoxTo($mat1));
            }
          }

          return rect;
        }

        static MapParentBy(node, component) {
          var results = [];
          var parent = node.parent;

          while (parent) {
            if (parent.getComponent(component)) {
              results.push(parent);
            }

            parent = parent.parent;
          }

          return results;
        }
        /**屏幕到指定节点 */


        static CanvasToNode(canvas, node) {
          var size = canvas.getComponent(UITransform).contentSize;
          var [x1, y1] = this.Convert(-size.width / 2, size.height / 2, canvas, node);
          var [x2, y2] = this.Convert(size.width / 2, -size.height / 2, canvas, node);
          return [x1, y1, x2, y2];
        }
        /**
         * 获取指定节点到目标容器的包围盒（自动计算缩放）
         * @param node 
         * @param parent 
         * @returns 
         */


        static GetBoundingBoxTo(node, parent) {
          if (!node.activeInHierarchy) return new Rect();
          var rect = node.getComponent(UITransform).getBoundingBox();
          var [xMin, yMin] = this.Convert(rect.xMin, rect.yMin, node.parent, parent);
          var [xMax, yMax] = this.Convert(rect.xMax, rect.yMax, node.parent, parent);
          return new Rect(xMin, yMin, xMax - xMin, yMax - yMin);
        }

        /**计算屏幕到节点的坐标 */
        static ConvertScreenToNode(camera, x, y, z, uiNode) {
          camera.screenToWorld(v3(x, y, z), this.csn1);
          camera.convertToUINode(this.csn1, uiNode, this.csn2);
          return [this.csn2.x, this.csn2.y];
        }
        /**
         * 遍历所有子节点
         * @param node 
         * @param handle 
         */


        static MapChildrenFor(node, handle) {
          var list = [node];

          while (list.length) {
            var _child = list.pop();

            var result = handle(_child);
            if (result) break;

            if (_child.children.length) {
              list.push(..._child.children);
            }
          }
        }

        static abss(a, b) {
          if (b === void 0) {
            b = 0;
          }

          return Math.abs(a - b);
        }

        static maxx() {
          return Math.max(...arguments);
        }

        static minn() {
          return Math.min(...arguments);
        }
        /**
             * 最大值和最小值之间随机
             * @param cusMax 
             * @param cusMin 
             * @returns 
             */


        static randomf(cusMax, cusMin) {
          return Math.random() * (cusMax - cusMin) + cusMin;
        }

        static randomI(cusMax, cusMin) {
          return Math.round(Math.random() * (cusMax - cusMin) + cusMin);
        }
        /***
         * 获取上周时间戳
         */


        static lastWeek() {
          var today = new Date(); // 创建一个表示当前时间的 Date 对象
          // 获取今天是星期几（0-6）

          var dayOfWeekIndex = today.getDay();

          if (dayOfWeekIndex == 0) {
            dayOfWeekIndex = 7;
          }

          var curDate1;
          var curDate2;
          curDate1 = new Date();
          curDate2 = new Date();
          var hour1 = curDate1.getHours();
          var minutes1 = curDate1.getMinutes();
          var sec1 = curDate1.getSeconds();
          var allSec1 = hour1 * 60 * 60 + minutes1 * 60 + sec1;
          var hour2 = curDate2.getHours();
          var minutes2 = curDate2.getMinutes();
          var sec2 = curDate2.getSeconds();
          var allSec2 = hour2 * 60 * 60 + minutes2 * 60 + sec2;
          var endTime;
          var startTime;
          curDate1.setDate(curDate1.getDate() - dayOfWeekIndex);
          endTime = this.getTimesTamp(curDate1);
          curDate2.setDate(curDate2.getDate() - dayOfWeekIndex - 6);
          startTime = this.getTimesTamp(curDate2);
          startTime = startTime - allSec1;
          endTime = endTime - allSec2 + 24 * 60 * 60 - 1;
          var data = {
            startTime: startTime,
            endTime: endTime
          };
          return data;
        }
        /***
         * 获取这周时间戳
         */


        static nowWeek() {
          var today = new Date(); // 创建一个表示当前时间的 Date 对象
          // 获取今天是星期几（0-6）

          var dayOfWeekIndex = today.getDay();

          if (dayOfWeekIndex == 0) {
            dayOfWeekIndex = 7;
          }

          var curDate1;
          var curDate2;
          curDate1 = new Date();
          curDate2 = new Date();
          var hour1 = curDate1.getHours();
          var minutes1 = curDate1.getMinutes();
          var sec1 = curDate1.getSeconds();
          var allSec1 = hour1 * 60 * 60 + minutes1 * 60 + sec1;
          var hour2 = curDate2.getHours();
          var minutes2 = curDate2.getMinutes();
          var sec2 = curDate2.getSeconds();
          var allSec2 = hour2 * 60 * 60 + minutes2 * 60 + sec2;
          var endTime;
          var startTime;
          curDate1.setDate(curDate1.getDate() - dayOfWeekIndex + 1);
          startTime = this.getTimesTamp(curDate1) - allSec1;
          endTime = this.getTimesTamp(curDate2);
          var data = {
            startTime: startTime,
            endTime: endTime
          };
          return data;
        }
        /**
         * 时间戳转换（秒）
         * @param curDate 需要转换的时间
         * @returns 
         */


        static getTimesTamp(curDate) {
          return Math.trunc(curDate.getTime() / 1000);
        }

        static Underline(str) {
          if (this.hasMap[str]) return this.hasMap[str];
          var value = str.replace(/([A-Z])/g, (match, word) => "_" + word.toLowerCase());
          this.hasMap[str] = value;
          return value;
        }

        static UpperCamel(str) {
          if (this.hasMap[str]) return this.hasMap[str];
          var value = str.replace(/(\_[a-z])/g, (match, word) => word.replace("_", "").toUpperCase());
          this.hasMap[str] = value;
          return value;
        }
        /**
         * 查找
         * @param root 
         * @param childname 
         * @returns 
         */


        static MapChild(root, childname) {
          if (root.name == childname) return root;
          var openls = [root];

          while (openls.length) {
            var node = openls.pop();

            for (var _child2 of node.children) {
              if (_child2.name == childname) return _child2;
              openls.push(_child2);
            }
          }

          return undefined;
        }
        /**
         * 判断是否ui
         * @param node 
         * @returns 
         */


        static isUI(node) {
          var parent = node;

          while (parent && !parent.getComponent(Canvas)) {
            parent = node.parent;
          }

          return parent;
        }
        /**
         * 判断是否有指定动作
         * @param ske 
         * @param action 
         * @returns 
         */


        static CheckAnimation(ske, action) {
          if (!ske || !ske.skeletonData) return false;
          var actions = ske.skeletonData.getAnimsEnum();

          if (!actions[action]) {
            return false;
          }

          return true;
        }
        /**
         * 获取默认动作
         * @param ske 
         * @returns 
         */


        static GetSkeAciton(ske) {
          var ls = ske.skeletonData.getAnimsEnum();

          for (var k in ls) {
            return k;
          }
        }
        /**
        * 格式化时间戳
        * @param {string} cusFormat 格式串，eg:'yyyy-MM-dd hh:mm:ss'
        * @返回 格式化后的时间字符串 
        * eg: new Date().format('yyyy-MM-dd hh:mm:ss') -> '2020-06-30 16:28:14'
        */


        static formatDate(cusTime, cusFormat) {
          var _date = new Date();

          _date.setTime(cusTime);

          var _info = {
            'M+': _date.getMonth() + 1,
            'd+': _date.getDate(),
            'h+': _date.getHours(),
            'm+': _date.getMinutes(),
            's+': _date.getSeconds(),
            'q+': Math.floor((_date.getMonth() + 3) / 3),
            'S+': _date.getMilliseconds()
          };

          if (/(y+)/i.test(cusFormat)) {
            cusFormat = cusFormat.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
          }

          for (var _key in _info) {
            if (new RegExp('(' + _key + ')').test(cusFormat)) {
              cusFormat = cusFormat.replace(RegExp.$1, RegExp.$1.length === 1 ? _info[_key] : ('00' + _info[_key]).substr(('' + _info[_key]).length));
            }
          }

          return cusFormat;
        }
        /**
         * 计算屏幕投射到场景的点
         * @param screenX
         * @param screenY
         * @param camera 
         * @param plane 
         * @returns 
         */


        static ScreenToPlane(screenX, screenY, camera, plane, len) {
          camera.screenPointToRay(screenX, screenY, $ray1);
          if (!len) len = geometry.intersect.rayPlane($ray1, plane);
          $ray1.computeHit($v1, len);
          return [$v1.x, $v1.y, $v1.z];
        }
        /**
         * 使节点朝向目标
         */


        static FaceToNode(a, b, out) {
          if (a instanceof Node) {
            a.getWorldPosition($v1);
          } else {
            $v1.set(a);
          }

          if (b instanceof Node) {
            b.getWorldPosition($v2);
          } else {
            $v2.set(b);
          }

          Vec3.subtract($v3, $v2, $v1); // 方向向量 = B 坐标 - A 坐标

          math.Quat.fromEuler($q1, $v3.x, $v3.y, $v3.z); // math.Quat.fromViewUp(q1, v3_3); // 根据方向向量生成旋转

          if (a instanceof Node) a.setWorldRotation($q1);
          if (out) out.set($q1);
        }
        /**
         * 计算节点的平面
         * @param node 
         * @returns 
         */


        static GetPlane(node, v) {
          if (v === void 0) {
            v = Vec3.UNIT_Y;
          }

          node.getWorldMatrix($mat1);
          Vec3.transformMat4($v1, v, $mat1);
          Vec3.subtract($v2, $v1, node.worldPosition);
          return geometry.Plane.create($v2.x, $v2.y, $v2.z, node.worldPosition.length());
        }
        /**
         * 尝试检测节点的尺寸
         * @param node 
         */


        static TestSize(node, isScale) {
          var _node$getComponent, _node$getComponent2;

          if (isScale === void 0) {
            isScale = false;
          }

          var defScaleX = isScale ? Math.abs(node.scale.x) : 1;
          var defScaleY = isScale ? Math.abs(node.scale.y) : 1;
          var sf = (_node$getComponent = node.getComponent(SpriteRenderer)) == null ? void 0 : _node$getComponent.spriteFrame;
          if (sf) return [sf.width * defScaleX, sf.height * defScaleY];
          sf = (_node$getComponent2 = node.getComponent(Sprite)) == null ? void 0 : _node$getComponent2.spriteFrame;
          if (sf) return [sf.width * defScaleX, sf.height * defScaleY];
          var trans = node.getComponent(UITransform);
          if (trans) return [trans.contentSize.width * defScaleX, trans.contentSize.height * defScaleY];
          return [0, 0];
        }
        /**
         * 计算3dui适配高度的值
         * @param height 
         * @param camera 
         * @returns 
         */


        static TestUIHigh(height, camera) {
          var fovRad = camera.fov * Math.PI / 180; // 转为弧度

          var distance = height / (2 * Math.tan(fovRad / 2));
          return distance;
        }
        /**
         * 节点到另一节点的向量
         * @param node1 
         * @param node2 
         * @returns 
         */


        static NodeSubNode(node1, node2) {
          node1.getWorldPosition($v1);
          node2.getWorldPosition($v2);
          Vec3.subtract($v3, $v1, $v2);
          return [$v3.x, $v3.y, $v3.z, $v3.length()];
        }
        /**
         * 计算模型尺寸
         * @param box 
         * @returns 
         */


        static CountBoundSize(box) {
          var boundingBox = box.model.worldBounds;
          boundingBox.getBoundary($v1, $v2);
          Vec3.subtract($v3, $v2, $v1);
          return [Math.abs($v3.x), Math.abs($v3.y), Math.abs($v3.z)];
        }
        /**
         * 计算从向量A到向量B的四元数旋转
         * @param a 起始向量（需归一化）
         * @param b 目标向量（需归一化）
         * @param out 输出四元数（可选）
         */


        static EulerAngles(a, b) {
          var epsilon = 1e-6; // 浮点误差阈值
          // 计算叉乘轴

          Vec3.cross($v1, a, b); // 处理向量共线的情况

          if ($v1.length() < epsilon) {
            // 方向相同：返回单位四元数
            if (Vec3.dot(a, b) > 0) return [$v2.x, $v2.y, $v2.z]; // 方向相反：绕Y轴旋转180度（可自定义其他轴）

            math.Quat.fromAxisAngle($q1, Vec3.UP, Math.PI);
            return [$v2.x, $v2.y, $v2.z];
          } // 计算旋转角度


          $v1.normalize();
          var cosTheta = Vec3.dot(a, b);
          var theta = Math.acos(Math.min(1, Math.max(-1, cosTheta))); // 限制精度范围
          // 生成四元数

          math.Quat.fromAxisAngle($q1, $v1, theta);
          $q1.getEulerAngles($v2);
          return [$v2.x, $v2.y, $v2.z];
        }
        /**
         * 按位数获取比特位值(高位)
         * @param value 
         * @param bitPos 
         * @returns 
         */


        static GetBitPosHiValue(value, bitPos) {
          if (bitPos <= 0 || bitPos > 32) {
            throw new Error("位数必须在 1 到 32 之间");
          }

          var rightOffset = 32 - bitPos;
          var bitValue = value >>> rightOffset & (1 << bitPos) - 1;
          return bitValue;
        }
        /**
         * 按位数获取比特位值(低位)
         * @param value 
         * @param bitPos 
         * @returns 
         */


        static GetBitPosLowValue(value, bitPos) {
          var mask = (1 << bitPos) - 1;
          return value & mask;
        }
        /**
         * 获取某位bit的值
         * @param value 
         * @param bit 
         * @returns 
         */


        static GetBitValue(value, bit) {
          if (bit <= 0 || bit > 32) {
            throw new Error("位数必须在 1 到 32 之间");
          }

          var bitValue = value >> bit & 0x1;
          return bitValue;
        }
        /**
         * 设置固定头部比特位的值
         * @param target 目标值（32 位整型）
         * @param headValue 头部比特位的值（十进制）
         * @param headBitCount 头部比特位的位数
         * @param args 可变参数，表示从头部之后要设置的比特位值（0 或 1）
         * @returns 设置后的值
         */


        SetHeadFixedBits(target, headValue, headBitCount) {
          if (headValue < 0 || headValue >= 1 << headBitCount) {
            throw new Error("headValue\u5FC5\u987B\u57280\u548C\u4E4B\u95F4" + ((1 << headBitCount) - 1));
          }

          var clearMask = ~((1 << headBitCount) - 1);
          target = target & clearMask;
          target = target | headValue;

          for (var i = 0; i < (arguments.length <= 3 ? 0 : arguments.length - 3); i++) {
            var bitValue = i + 3 < 3 || arguments.length <= i + 3 ? undefined : arguments[i + 3];

            if (bitValue !== 0 && bitValue !== 1) {
              throw new Error("位数值必须在 0 或者 1");
            }

            var bitPosition = headBitCount + i;

            if (bitValue === 1) {
              target = target | 1 << bitPosition;
            } else {
              target = target & ~(1 << bitPosition);
            }
          }

          return target;
        }

        static SetNodeGray(target, gray, disabled) {
          if (gray === void 0) {
            gray = false;
          }

          if (disabled === void 0) {
            disabled = true;
          }

          //console.warn("此方法有问题！暂时不要用");
          //return;
          var mat = builtinResMgr.get(gray ? "ui-sprite-gray-material" : "") || null;
          var renderList = target.getComponentsInChildren(UIRenderer);
          var btn;

          for (var rend of renderList) {
            btn = rend.node.getComponent(Button);
            if (btn && disabled) btn.interactable = !gray;
            rend.customMaterial = mat;
          }
        }

        static pointToLineDistance3DOptimized(point, linePoint1, linePoint2) {
          var direction = linePoint2.clone().subtract(linePoint1);
          var AP = point.clone().subtract(linePoint1);
          var cross = new Vec3();
          Vec3.cross(cross, AP, direction.normalize()); // 先归一化，避免最后除以长度

          return cross.length();
        }

        /*** 滚动数字*/
        static NumberRool(target, curValue, targetValue, dur, callBack) {
          if (dur === void 0) {
            dur = 0.3;
          }

          if (callBack === void 0) {
            callBack = null;
          }

          if (curValue == targetValue) {
            target.string = targetValue.toString();
            return;
          }

          var uid = target.uuid;
          var cv = curValue;
          var tv = targetValue;
          var roolObj = this._roolObjMap[uid];

          if (roolObj != undefined) {
            Tween.stopAllByTarget(roolObj);
          }

          roolObj = {
            value: curValue
          };
          this._roolObjMap[uid] = roolObj;
          var opts = js.createMap();

          opts.onUpdate = (t, ratio) => {
            if (target) {
              if (cv % 1 !== 0 || tv % 1 != 0) {
                target.string = this.formatNumber(t.value, 2);
              } else {
                target.string = Math.floor(t.value).toString();
              }
            }
          };

          tween(roolObj).to(dur, {
            value: targetValue
          }, opts).call(() => {
            if (callBack) callBack();
            delete this._roolObjMap[uid];
          }).start();
        }
        /**
         * 保存本地
         * @param data 
         * @param fileName 
         */


        static SaveFile(data, fileName) {
          // 创建一个Blob实例，里面包含要下载的数据
          var blob = new Blob([data], {
            type: 'text/plain;charset=utf-8'
          }); // 创建一个指向Blob对象的URL地址

          var url = URL.createObjectURL(blob); // 创建一个a标签

          var link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName); // 触发下载

          document.body.appendChild(link);
          link.click(); // 清理并移除元素和对象URL

          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }

        static CopyProto(obj, classz) {
          if (this.IsArray(obj)) {
            var datas = obj;
            var ls = [];

            for (var data of datas) {
              ls.push(classz.decode(classz.encode(data).finish()));
            }

            return ls;
          } else {
            return classz.decode(classz.encode(obj).finish());
          }
        }
        /**
         * 在指定圆弧上生成等分点
         * @param center 圆心
         * @param pointA 起点
         * @param pointB 终点
         * @param numSegments 分段数（生成的点数 = 分段数 + 1）
         * @returns 等分点数组
        */


        static GenerateArcPoints(center, pointA, pointB, numSegments) {
          if (numSegments <= 0) return []; // 转换为相对于圆心的坐标

          var dxA = pointA.x - center.x;
          var dyA = pointA.y - center.y;
          var dxB = pointB.x - center.x;
          var dyB = pointB.y - center.y; // 计算半径（假设两点在同一圆上）

          var radiusA = Math.hypot(dxA, dyA);
          var radiusB = Math.hypot(dxB, dyB);

          if (Math.abs(radiusA - radiusB) > 1e-6) {
            console.error("Error: Points A and B must be on the same circle.");
            return [];
          }

          var radius = radiusA; // 计算极角并标准化到 [0, 2π)

          var thetaA = Math.atan2(dyA, dxA);
          var thetaB = Math.atan2(dyB, dxB);
          thetaA = (thetaA + 2 * Math.PI) % (2 * Math.PI);
          thetaB = (thetaB + 2 * Math.PI) % (2 * Math.PI); // 计算角度差（自动处理方向）

          var deltaTheta = thetaB - thetaA;
          deltaTheta = (deltaTheta + Math.PI) % (2 * Math.PI) - Math.PI; // 调整到 [-π, π]

          var absDeltaTheta = Math.abs(deltaTheta);

          if (absDeltaTheta < 1e-6) {
            // 两点重合
            return Array(numSegments + 1).fill(Vec3.clone(pointA));
          }

          var points = [];
          var angleStep = absDeltaTheta / numSegments;

          for (var i = 0; i <= numSegments; i++) {
            var currentTheta = thetaA + (deltaTheta > 0 ? angleStep * i : -angleStep * i);
            currentTheta = (currentTheta + 2 * Math.PI) % (2 * Math.PI); // 保持标准化

            var x = center.x + Math.cos(currentTheta) * radius;
            var y = center.y + Math.sin(currentTheta) * radius;
            points.push(new Vec3(x, y));
          }

          return points;
        }
        /**
         * 给3dUI添加交互效果
         * @param node 
         * @param canvas 
         */


        static AddTouchEffect(node, hitTest, thisObj, canvas) {
          if (!canvas) canvas = find("Cavnas");
          node['$$hitTest'] = hitTest.bind(thisObj);
          canvas.on(Input.EventType.TOUCH_START, this.onTouchStart3D, node);
          canvas.on(Input.EventType.TOUCH_END, this.onTouchEnd3D, node);
          canvas.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd3D, node);
        }
        /**
         * 移除3dUI的按钮效果
         * @param node 
         * @param canvas 
         */


        static DelTouchEffect(node, canvas) {
          if (!canvas) canvas = find("Cavnas");
          canvas.off(Input.EventType.TOUCH_START, this.onTouchStart3D, node);
          canvas.off(Input.EventType.TOUCH_END, this.onTouchEnd3D, node);
          canvas.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd3D, node);
        }

        static onTouchStart3D(e) {
          var node = this;
          if (!node['$$hitTest'](e)) return;

          if (node.getChildByName("onTouchStart")) {
            node.getChildByName("onTouchStart").active = true;
            return;
          }

          if (!node['$initScale']) {
            node['$initScale'] = node.scale.clone();
          }

          var radio = 1.15;
          node.setScale(node.scale.x * radio, node.scale.y * radio, node.scale.z * radio);
        }

        static onTouchEnd3D(e) {
          var node = this;

          if (node.getChildByName("onTouchStart")) {
            node.getChildByName("onTouchStart").active = false;
            return;
          }

          if (!node['$initScale']) return;
          node.setScale(node['$initScale'].x, node['$initScale'].y, node['$initScale'].z);
        }

      });

      Utils.trans1 = new Vec3();
      Utils.trans2 = new Vec3();
      Utils.csn1 = new Vec3();
      Utils.csn2 = new Vec3();
      Utils.RadToDeg = 180 / Math.PI;
      Utils.DegToRad = Math.PI / 180;
      Utils.PI90 = Math.PI / 2;
      Utils.PI2 = Math.PI * 2;
      Utils.hasMap = {};
      Utils._roolObjMap = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8254526012975f3aedeb1506c580063aa0a0ba18.js.map