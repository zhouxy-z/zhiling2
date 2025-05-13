System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, EditBox, Input, Label, Toggle, skillType, Second, PlayerData, CardsSortOrFiltrate, Tips2, CardFiltratePanel, _crd;

  function _reportPossibleCrUseOfskillType(extras) {
    _reporterNs.report("skillType", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSecond(extras) {
    _reporterNs.report("Second", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../player/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardsSortOrFiltrate(extras) {
    _reporterNs.report("CardsSortOrFiltrate", "./CardsSortOrFiltrate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips2", "../common/Tips2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("CardFiltratePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Input = _cc.Input;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      skillType = _unresolved_2.skillType;
    }, function (_unresolved_3) {
      Second = _unresolved_3.Second;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      CardsSortOrFiltrate = _unresolved_5.CardsSortOrFiltrate;
    }, function (_unresolved_6) {
      Tips2 = _unresolved_6.Tips2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ce4290uNJLxY+YS+xhPPkQ", "CardFiltratePanel", undefined);

      __checkObsolete__(['Button', 'Component', 'EditBox', 'Input', 'Label', 'Node', 'path', 'sp', 'Sprite', 'SpriteFrame', 'Toggle']);

      _export("CardFiltratePanel", CardFiltratePanel = class CardFiltratePanel extends Component {
        constructor(...args) {
          super(...args);
          this.filtrateNode = void 0;
          this.searchNode = void 0;
          this.editBox = void 0;
          this.completeBtn = void 0;
          this.cancelBtn = void 0;
          this.skillEffNode = void 0;
          this.costNode = void 0;
          this.diyNode = void 0;
          this.filtrateClose = void 0;
          this.help = void 0;
          this.card_list = void 0;
          this.callBack1 = void 0;
          this.callBack2 = void 0;
          this.selectSkillType = 0;
          this.costType = [];
          this.showType = false;
          this.selectSkillList = [];
          this.costTypeList = [];
          this.showTypeList = [];
          this.searchStrList = [];
          this.search_card_list = [];
          this.$loadSub = void 0;
          this.complete = void 0;
          this.hasLoad = false;
        }

        onLoad() {
          var _this$complete;

          // this.filtrateNode = this.node.getChildByName("filtrateNode");
          this.searchNode = this.node.getChildByPath("bg/searchNode");
          this.editBox = this.node.getChildByPath("bg/EditBox").getComponent(EditBox);
          this.editBox.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onEditEnd, this);
          this.skillEffNode = this.node.getChildByPath("bg/skillEffNode");
          this.costNode = this.node.getChildByPath("bg/costNode");
          this.diyNode = this.node.getChildByPath("bg/diyNode");
          this.help = this.node.getChildByPath("bg/help");
          this.help.on(Input.EventType.TOUCH_END, () => {
            (_crd && Tips2 === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips2) : Tips2).Show(1);
          }, this);
          this.cancelBtn = this.node.getChildByPath("bg/cancel").getComponent(Button);
          this.cancelBtn.node.on(Button.EventType.CLICK, this.resetSearchState, this);
          this.searchNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.editBox.string = node.children[0].getComponent(Label).string;
              this.onEditEnd();
            }, this);
          });
          this.skillEffNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.skillSearch();
            }, this);
          });
          this.costNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.costSearch();
            }, this);
          });
          this.diyNode.children.forEach((node, index) => {
            node.on(Input.EventType.TOUCH_END, () => {
              this.showSearch();
            }, this);
          });
          this.hasLoad = true;
          (_this$complete = this.complete) == null || _this$complete.call(this);
        }

        get loadSub() {
          if (this.$loadSub) return this.$loadSub;
          let thisObj = this;
          this.$loadSub = new Promise((resolve, reject) => {
            thisObj.complete = resolve;
          });
          return this.$loadSub;
        }

        setData(callBack1, callBack2, data, searchStrList, search_card_list, selectSkillType, costType, showType) {
          this.callBack1 = callBack1;
          this.callBack2 = callBack2;
          this.card_list = data;
          this.searchStrList = searchStrList;
          this.search_card_list = search_card_list;
          this.selectSkillType = selectSkillType;
          this.costType = costType;
          this.showType = showType;
        } //搜索后的卡牌


        onEditEnd() {
          let list = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).onEditEnd(this.editBox, this.searchStrList, this.searchNode, this.search_card_list, this.selectSkillType, this.costType, this.showType);
          this.callBack1(list);
          this.card_list = list;
        } //筛选特殊技能效果的卡牌


        async skillSearch() {
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          this.selectSkillType = (_crd && skillType === void 0 ? (_reportPossibleCrUseOfskillType({
            error: Error()
          }), skillType) : skillType).undefined;
          let data = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).skillSearch(this.editBox, this.skillEffNode, this.selectSkillList, this.selectSkillType, this.costType, this.showType);
          this.selectSkillList = data[0];
          this.selectSkillType = data[1];
          this.callBack1(this.selectSkillList);
          this.card_list = this.selectSkillList;
        } //筛选能量消耗的卡牌


        async costSearch() {
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          this.costType = [];
          let data = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).costSearch(this.editBox, this.costNode, this.costTypeList, this.selectSkillType, this.costType, this.showType);
          this.costTypeList = data[0];
          this.costType = data[1];
          this.callBack1(this.costTypeList);
          this.card_list = this.costTypeList;
        } //筛选自定义展示的卡牌


        async showSearch() {
          await (_crd && Second === void 0 ? (_reportPossibleCrUseOfSecond({
            error: Error()
          }), Second) : Second)(0);
          this.showType = false;
          let data = (_crd && CardsSortOrFiltrate === void 0 ? (_reportPossibleCrUseOfCardsSortOrFiltrate({
            error: Error()
          }), CardsSortOrFiltrate) : CardsSortOrFiltrate).showSearch(this.editBox, this.diyNode, this.showTypeList, this.selectSkillType, this.costType, this.showType);
          this.showTypeList = data[0];
          this.showType = data[1];
          this.callBack1(this.showTypeList);
          this.card_list = this.showTypeList;
        }
        /**重置筛选状态 */


        resetSearchState() {
          this.editBox.string = "";
          this.costNode.children.forEach(node => {
            node.getComponent(Toggle).isChecked = false;
          });
          this.skillEffNode.children.forEach(node => {
            node.getComponent(Toggle).isChecked = false;
          });
          this.diyNode.children.forEach(node => {
            node.getComponent(Toggle).isChecked = false;
          });
          this.card_list = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).cards;
          this.selectSkillType = (_crd && skillType === void 0 ? (_reportPossibleCrUseOfskillType({
            error: Error()
          }), skillType) : skillType).undefined;
          this.costType = [];
          this.showType = false;
          this.callBack2();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c553c341cb9fb77a6c83bb4183cf64645e95b3e7.js.map