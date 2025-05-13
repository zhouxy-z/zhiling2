System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AssetManager, CCString, Color, Component, Layout, Node, Size, Sprite, SpriteFrame, UITransform, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, disallowMultiple, requireComponent, FontSets, FontNbReg, FontSyReg, HtmlReg, seed, SpriteLabelPool, ChPool, SpriteLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  /**解析字体 */
  function createFont(spriteFrames, isNumber = true) {
    let fontSet = {};

    for (let i = 0; i < spriteFrames.length; i++) {
      let spriteFrame = spriteFrames[i];
      let name = spriteFrame.name.replace("$$$", ""); //Logger.log("createFont", name, spriteFrame);

      if (isNumber) {
        let result = name.match(FontNbReg);

        if (result && result.length) {
          let key = Number(result[0]);

          if (isNaN(key) == false) {
            fontSet[key] = spriteFrame;
            continue;
          }
        }

        result = name.match(FontSyReg);

        if (result && result.length) {
          fontSet[result[0]] = spriteFrame;
        }
      } else {
        fontSet[name] = spriteFrame;
      }
    }

    return fontSet;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AssetManager = _cc.AssetManager;
      CCString = _cc.CCString;
      Color = _cc.Color;
      Component = _cc.Component;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Size = _cc.Size;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4bd15tDNMlKLb1xXhjb6BvF", "SpriteLabel", undefined);

      __checkObsolete__(['AssetManager', 'CCString', 'Color', 'Component', 'Layout', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'UITransform', '_decorator']);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);
      /**字体 */

      /**字体集 */
      FontSets = {};
      /**数字 */

      FontNbReg = /[0-9]+/;
      FontSyReg = /[\,\.\+\-\*\/\%\&\$\@\￥]/;
      /**富文本 */

      HtmlReg = /\<[^\>]+\>/g;
      seed = 0;
      SpriteLabelPool = [];
      ChPool = [];
      /**图片字体 */

      _export("SpriteLabel", SpriteLabel = (_dec = ccclass('SpriteLabel'), _dec2 = disallowMultiple(true), _dec3 = requireComponent(Layout), _dec4 = property({
        tooltip: "数字模式会自动识别图片名称头部数字为对应的键值，\n非数字模式则需要保证图片名字为对应字符键值"
      }), _dec5 = property({
        type: CCString,
        tooltip: "字体集目录路径，如果节点已有图片则会使用此图片目录为字体集目录"
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class SpriteLabel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isNumber", _descriptor, this);

          _initializerDefineProperty(this, "fontFolder", _descriptor2, this);

          this.hasInit = false;
          this._grayscale = false;
          this.fontSet = [];
          this.stylels = [];
          this.value = "";
          this.chs = [];
          this.size = 0;
          this.originalSize = 0;
          this.sizeScale = 1;
          this.colorValue = "#ffffff";
        }

        get font() {
          if (!this.fontFolder) return "";
          return this.fontFolder.replace("db://assets/res/", "");
        }

        set font(value) {
          //Logger.log("set folderUrl", this.hasInit);
          this.fontFolder = value.replace("db://assets/res/", "");

          if (this.hasInit) {
            this.onLoad();
          } else {
            let fontSets = [];
            let folder = this.fontFolder;

            if (FontSets[folder]) {
              fontSets.push(FontSets[folder]);
              this.init(fontSets, []);
              this.string = this.value;
            } else {
              let t = this;
              let ab = AssetManager.instance.getBundle("res");
              ab.loadDir(folder, SpriteFrame, (err, data) => {
                let fontSet = createFont(data, t.isNumber);
                FontSets[folder] = fontSet;
                fontSets.push(FontSets[folder]);
                t.init(fontSets, []);
                t.string = t.value;
              });
            }
          }
        }

        async onLoad() {
          //Logger.log("onLoad " + this.fontFolder);
          let layout = this.getComponent(Layout);
          this.SetLayout(layout.type || Layout.Type.HORIZONTAL);
          let fontSets = [];
          let childern = this.node.children;
          let ab = AssetManager.instance.getBundle("res");
          let styles = [];
          let t = this;

          for (let i = 0; i < childern.length; i++) {
            let child = childern[i];
            let sp = child.getComponent(Sprite); //Logger.log(child.name, sp.getComponent(UITransform));

            styles.push({
              size: sp.getComponent(UITransform).height / sp.spriteFrame.getOriginalSize().height,
              color: sp.color.toHEX("#rrggbb")
            });
            let info = ab.getAssetInfo(sp.spriteFrame.uuid);

            if (info && info.path) {
              let url = info.path;
              let ls = url.split(/[\\\/]/);
              ls.pop();
              ls.pop();
              url = ls.join("/");

              if (FontSets[url]) {
                fontSets.push(FontSets[url]);
              } else {
                await new Promise((resolve, reject) => {
                  ab.loadDir(url, SpriteFrame, (err, data) => {
                    let fontSet = createFont(data, t.isNumber);
                    FontSets[url] = fontSet;
                    resolve();
                  });
                });
                fontSets.push(FontSets[url]);
              }
            }
          }

          if (this.font) {
            let folder = this.font;

            if (FontSets[folder]) {
              fontSets.push(FontSets[folder]);
            } else {
              await new Promise((resolve, reject) => {
                ab.loadDir(folder, SpriteFrame, (err, data) => {
                  let fontSet = createFont(data, t.isNumber);
                  FontSets[folder] = fontSet;
                  resolve();
                });
              });
              fontSets.push(FontSets[folder]);
            }
          }

          this.init(fontSets, styles);
          this.string = this.value;
          this.hasInit = true;
        }

        init(fontsets, styles = []) {
          var _this$node$children;

          this._grayscale = false;
          if (this.fontSet) this.fontSet.length = 0;else this.fontSet = [];
          this.fontSet.push(...fontsets);
          this.stylels = styles;
          this.originalSize = 1;

          for (let fontset of fontsets) {
            for (let k in fontset) {
              this.originalSize = Math.max(this.originalSize, fontset[k].getOriginalSize().height);
            }
          }

          if (this.chs) this.chs.length = 0;else this.chs = [];

          if (((_this$node$children = this.node.children) == null ? void 0 : _this$node$children.length) > 0) {
            let children = this.node.children.concat();

            for (let i = 0; i < children.length; i++) {
              let child = children[i];
              let sprite = child.getComponent(Sprite);

              if (!sprite) {
                this.node.removeChild(child);
              } else {
                if (this.chs.indexOf(sprite) == -1) {
                  this.chs.push(sprite);
                }
              }
            }
          } // this.fontSize = this.size || this.originalSize;


          let layout = this.getComponent(Layout);
          this.SetLayout(layout.type || Layout.Type.HORIZONTAL);
        }
        /**获取字符串内容 */


        get string() {
          return this.value;
        }
        /**设置字符串 */


        set string(value) {
          if (value == undefined) {
            console.error(value);
          }

          this.value = value.replace(HtmlReg, "");
          if (!this.fontSet || !this.fontSet.length) return;
          let strs = value.split("");
          let chs = this.chs;
          let i = 0;
          let layout = this.getComponent(Layout);
          let defaultFont = this.fontSet[this.fontSet.length - 1];
          let sy = undefined;

          for (; i < strs.length; i++) {
            let fontset = this.fontSet[i] || defaultFont;
            let ch = chs[i];

            if (ch) {
              ch.node.active = true;
              ch.spriteFrame = fontset[strs[i]]; // ch.node.setSiblingIndex(i);
            } else {
              let node = ChPool.length > 0 ? ChPool.pop() : new Node();
              ch = node.addComponent(Sprite);
              ch.spriteFrame = fontset[strs[i]];
              ch.sizeMode = Sprite.SizeMode.RAW;
              ch.trim = false;
              chs[i] = ch;
              ch.node.active = true;
              ch.node.layer = this.node.layer;
              this.node.addChild(node); // node.setSiblingIndex(i);
            }

            ch.grayscale = this._grayscale;
            let colorValue = this.stylels.length ? this.stylels[Math.min(i, this.stylels.length - 1)].color || this.colorValue : this.colorValue;
            ch.color = new Color().fromHEX(colorValue);
            let scale = this.stylels.length ? this.stylels[Math.min(i, this.stylels.length - 1)].size || this.sizeScale : this.sizeScale;

            if (ch.spriteFrame) {
              var size = ch.spriteFrame.getOriginalSize();
            } else {
              console.warn("找不到字符图片:" + strs[i]);
              var size = new Size(ch.getComponent(UITransform).width, ch.getComponent(UITransform).height);
            }

            let w = size.width * scale;
            let h = size.height * scale;
            if (sy == undefined) sy = h / 2; // Logger.log(ch.name, this.stylels.length, this.sizeScale, scale);

            ch.getComponent(UITransform).setContentSize(w, h);
            let rect = ch.spriteFrame['_rect'];
            let originalSize = ch.spriteFrame['_originalSize'];
            let offsetX = -1 * (originalSize.width / 2 - rect.width / 2); //let offsetY = originalSize.height / 2 - rect.height / 2;

            if (!this.stylels[i]) {
              ch.trim = false;

              if (layout.type == Layout.Type.HORIZONTAL) {//ch.node.setPosition(0, offsetY * scale);
              }
            }
          }

          for (; i < this.node.children.length; i++) {
            let child = this.node.children[i];
            child.active = false;
          }

          layout.updateLayout(true);
        }
        /**
         * 设置文本的横纵方向
         * @param type 
         */


        SetLayout(type = 1) {
          let layout = this.getComponent(Layout);
          layout.type = type;

          if (type == Layout.Type.HORIZONTAL) {
            layout.alignHorizontal = false;
            layout.resizeMode = Layout.ResizeMode.CONTAINER;
            layout.horizontalDirection = Layout.HorizontalDirection.LEFT_TO_RIGHT;
            layout.affectedByScale = true;
          } else if (type == Layout.Type.VERTICAL) {
            layout.alignVertical = true;
            layout.resizeMode = Layout.ResizeMode.CONTAINER;
            layout.verticalDirection = Layout.VerticalDirection.TOP_TO_BOTTOM;
            layout.affectedByScale = true;
          } else {
            layout.resizeMode = Layout.ResizeMode.NONE;
            layout.startAxis = Layout.AxisDirection.HORIZONTAL;
            layout.verticalDirection = Layout.VerticalDirection.TOP_TO_BOTTOM;
            layout.horizontalDirection = Layout.HorizontalDirection.LEFT_TO_RIGHT;
          }

          this.string = this.value;
        }

        set grayscale(value) {
          if (this._grayscale == value) return;
          this._grayscale = value;
          this.string = this.value;
        }

        get grayscale() {
          return this._grayscale;
        }
        /**获取横向间隔 */


        get spacingX() {
          let layout = this.getComponent(Layout);
          return layout.spacingX;
        }
        /**设置横向间隔 */


        set spacingX(value) {
          let layout = this.getComponent(Layout);
          layout.spacingX = value;
        }
        /**获取纵向间隔 */


        get spacingY() {
          let layout = this.getComponent(Layout);
          return layout.spacingY;
        }
        /**设置纵向间隔 */


        set spacingY(value) {
          let layout = this.getComponent(Layout);
          layout.spacingY = value;
        }

        /**获取字体尺寸 */
        get fontSize() {
          return this.originalSize * this.sizeScale;
        }
        /**设置字体尺寸 */


        set fontSize(value) {
          this.size = value;
          if (!this.fontSet || !this.fontSet.length) return;
          this.sizeScale = value / this.originalSize;
          this.string = this.value;
        }
        /**重置所有尺寸 */


        ResetSize(value) {
          for (let style of this.stylels) {
            style.size = undefined;
          }

          this.fontSize = value;
        }

        /**获取字体颜色 */
        get color() {
          return this.colorValue;
        }
        /**设置字体颜色 */


        set color(value) {
          this.colorValue = value.replace("0x", "#");
          if (this.colorValue.charAt(0) != "#") this.colorValue = "#" + this.colorValue;
          if (!this.fontSet || !this.fontSet.length) return;
          this.string = this.value;
        }
        /**重置所有颜色 */


        ResetColor(value, str) {
          for (let style of this.stylels) {
            style.color = undefined;
          }

          this.color = str == undefined ? value : str;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isNumber", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fontFolder", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return undefined;
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=562dd3e757068247a8ce5fcfee3c9b7006f07add.js.map