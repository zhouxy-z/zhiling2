System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Sprite, Toggle, SpriteFrame, UserHeadItem, ResMgr, Panel, AutoScroller, UserHeadPanel, _crd, HeadabType;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfUserHeadItem(extras) {
    _reporterNs.report("UserHeadItem", "./UserHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoScroller(extras) {
    _reporterNs.report("AutoScroller", "../../component/AutoScroller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStdHead(extras) {
    _reporterNs.report("StdHead", "../../manager/CfgMgr", _context.meta, extras);
  }

  _export("UserHeadPanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      UserHeadItem = _unresolved_2.UserHeadItem;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      Panel = _unresolved_4.Panel;
    }, function (_unresolved_5) {
      AutoScroller = _unresolved_5.AutoScroller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65d996ayDhMJ4xPc7seZ3PT", "UserHeadPanel", undefined);

      __checkObsolete__(['Button', 'Label', 'Sprite', 'Toggle', 'Node', 'path', 'SpriteFrame']);

      ;

      HeadabType = /*#__PURE__*/function (HeadabType) {
        HeadabType[HeadabType["Page_Head"] = 0] = "Page_Head";
        HeadabType[HeadabType["Page_Frame"] = 1] = "Page_Frame";
        return HeadabType;
      }(HeadabType || {});

      ;

      _export("UserHeadPanel", UserHeadPanel = class UserHeadPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/userInfo/UserHeadPanel";
          this.headBg = void 0;
          this.frameBg = void 0;
          this.icon = void 0;
          this.frame = void 0;
          this.stateLab = void 0;
          this.nameLab = void 0;
          this.descLab = void 0;
          this.attrCont = void 0;
          this.attrList = void 0;
          this.timeLab = void 0;
          this.headList = void 0;
          this.btn = void 0;
          this.unlockCondLab = void 0;
          this.navBtns = void 0;
          this.page = void 0;
          this.curSelectIndex = void 0;
          this.curSelectData = void 0;
          this.datas = [];
        }

        onLoad() {
          this.headBg = this.find("headCont/headBg");
          this.frameBg = this.find("headCont/frameBg");
          this.icon = this.find("headCont/Mask/icon", Sprite);
          this.frame = this.find("headCont/frame", Sprite);
          this.nameLab = this.find("infoCont/headNameCont/nameLab", Label);
          this.descLab = this.find("infoCont/descCont/descLab", Label);
          this.attrCont = this.find("infoCont/attrCont");
          this.attrList = this.find("infoCont/attrCont/attrList", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller); // this.attrList.SetHandle(this.updateAttrItem.bind(this));

          this.timeLab = this.find("infoCont/timeCont/timeLab", Label);
          this.headList = this.find("headList", _crd && AutoScroller === void 0 ? (_reportPossibleCrUseOfAutoScroller({
            error: Error()
          }), AutoScroller) : AutoScroller);
          this.headList.SetHandle(this.updateHeadItem.bind(this));
          this.headList.node.on('select', this.onSelect, this);
          this.btn = this.find("btn", Button);
          this.unlockCondLab = this.find("unlockCondLab", Label);
          this.navBtns = this.find("navBar/view/content").children.concat();
          this.CloseBy("mask");
          this.CloseBy("closeBtn");

          for (var btn of this.navBtns) {
            btn.on('toggle', this.onPage, this);
          }

          this.btn.node.on(Button.EventType.CLICK, this.onBtnClick, this);
        }

        SetPage(page) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.$hasLoad) yield _this.initSub;
            if (!_this.navBtns[page]) return;
            _this.page = undefined;
            _this.navBtns[page].getComponent(Toggle).isChecked = true;

            _this.onPage(_this.navBtns[page].getComponent(Toggle));
          })();
        }

        flush(page) {
          if (page == undefined) {
            page = HeadabType.Page_Head;
          }

          this.page = undefined;
          this.SetPage(page);
        }

        onShow() {}

        onHide() {}

        update(dt) {
          if (!this.curSelectData) return; // if(this.curSelectData.LimitTime > 0){
          //     this.timeLab.string = "有效期：" + DateUtils.FormatTime(PlayerData.GetServerTime(), "%{d}天%{h}时%{m}分%{s}秒");
          // }else{
          //     this.timeLab.string = "有效期：永久";
          // }
        }

        onPage(t) {
          if (!t.isChecked) return;
          var page = this.navBtns.indexOf(t.node);
          if (page < 0 || page == this.page) return;
          this.page = page;

          switch (page) {
            case HeadabType.Page_Head:
              this.headBg.active = true;
              this.frameBg.active = false;
              this.frame.node.active = false; // this.datas = CfgMgr.GetHeadList(StdHeadType.Head);

              break;

            case HeadabType.Page_Frame:
              this.headBg.active = false;
              this.frameBg.active = true;
              this.frame.node.active = true; // this.datas = CfgMgr.GetHeadList(StdHeadType.HeadFrame);

              break;
          }

          this.curSelectIndex = -1;
          this.headList.UpdateDatas(this.datas);
          this.headList.SelectFirst();
        }

        onBtnClick(btn) {}

        updateHeadItem(item, data) {
          var headItem = item.getComponent(_crd && UserHeadItem === void 0 ? (_reportPossibleCrUseOfUserHeadItem({
            error: Error()
          }), UserHeadItem) : UserHeadItem);
          if (!headItem) headItem = item.addComponent(_crd && UserHeadItem === void 0 ? (_reportPossibleCrUseOfUserHeadItem({
            error: Error()
          }), UserHeadItem) : UserHeadItem);
          headItem.SetData(data);
        } // private updateAttrItem(item: Node, data: AttrSub):void{
        //     let nameLab:Label = item.getChildByName("nameLab").getComponent(Label);
        //     nameLab.string = data.name + "：";
        //     let valLab:Label = item.getChildByName("valueLab").getComponent(Label);
        //     valLab.string = "+" + data.value + data.per;
        // }


        onSelect(index, item) {
          if (this.curSelectIndex == index) return;
          this.resetSelect();
          var select = item.getChildByName("select");
          select.active = true;
          this.curSelectIndex = index;
          this.updateSelect(this.datas[index]);
        }

        updateSelect(stdHead) {
          this.curSelectData = stdHead;
          var headUrl; // if(stdHead.HeadType == StdHeadType.Head){
          //     headUrl = path.join(folder_head_round, stdHead.IconRes, "spriteFrame");
          // }else if(stdHead.HeadType == StdHeadType.HeadFrame){
          //     headUrl = path.join(folder_head_round, "01", "spriteFrame");
          //     let frameUrl = path.join(folder_head, `frame/${stdHead.IconRes}`, "spriteFrame");
          //     ResMgr.LoadResAbSub(frameUrl, SpriteFrame, res => {
          //         this.frame.spriteFrame = res;
          //     });
          // } 

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).LoadResAbSub(headUrl, SpriteFrame, res => {
            this.icon.spriteFrame = res;
          });
          this.nameLab.string = stdHead.HeadName;
          this.descLab.string = stdHead.HeadDesc; // let fightAttrs:AttrSub[] = [];
          // let attrs:AttrSub[] = [];
          // let totlaAttrs:AttrSub[] = [];
          // let forAttr = (attrList: number[], valList: number[], attrs:AttrSub[]) => {
          //     for (let i = 0; i < attrList.length; i++) {
          //         let type = attrList[i];
          //         let val = valList && i < valList.length ? valList[i] : 0;
          //         let attrSub = FormatAttr(type, true);
          //         val = SetPerValue(attrSub, val);
          //         attrSub.value = val;
          //         attrs.push(attrSub);
          //     }
          // };
          // if (stdHead.Attr.length) {
          //     forAttr(stdHead.Attr, stdHead.AttrValue, attrs);
          // }
          // if (stdHead.AttrFight.length) {
          //     forAttr(stdHead.AttrFight, stdHead.AttrFightValue, fightAttrs);
          // }
          // totlaAttrs = fightAttrs.concat(attrs);
          // this.attrCont.active = totlaAttrs.length > 0;
          // this.attrList.UpdateDatas(totlaAttrs);
        }

        resetSelect() {
          var children = this.headList.node.getChildByPath("view/content").children;

          for (var i = 0; i < children.length; i++) {
            var node = children[i];
            node.getChildByName("select").active = false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77d5b0bcb3d4df028673bb8bcd0684bc638b60d4.js.map