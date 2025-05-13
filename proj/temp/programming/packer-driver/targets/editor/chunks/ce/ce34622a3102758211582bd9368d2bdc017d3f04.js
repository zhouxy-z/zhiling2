System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Sprite, Panel, FriendInfoPanel, _crd;

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../manager/GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSGetContactInfo(extras) {
    _reporterNs.report("SGetContactInfo", "../player/PlayerStruct", _context.meta, extras);
  }

  _export("FriendInfoPanel", void 0);

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
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7f4dO9kiNIi6WC115bBtSF", "FriendInfoPanel", undefined);

      __checkObsolete__(['Button', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'instantiate', 'path', 'v3']);

      _export("FriendInfoPanel", FriendInfoPanel = class FriendInfoPanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor(...args) {
          super(...args);
          this.prefab = "prefabs/friend/FriendInfoPanel";
          this.player_name = void 0;
          this.id = void 0;
          this.wx_num = void 0;
          this.qq_num = void 0;
          this.icon = void 0;
          this.idCloneBtn = void 0;
          this.wxCloneBtn = void 0;
          this.qqCloneBtn = void 0;
        }

        onLoad() {
          this.CloseBy("mask");
          this.CloseBy("frame/closeBtn");
          this.player_name = this.find("frame/friendInfoPage/player_name", Label);
          this.id = this.find("frame/friendInfoPage/id", Label);
          this.wx_num = this.find("frame/friendInfoPage/wx_num", Label);
          this.qq_num = this.find("frame/friendInfoPage/qq_num", Label);
          this.icon = this.find("bg/icon", Sprite);
          this.idCloneBtn = this.find("frame/friendInfoPage/idCloneBtn", Button);
          this.wxCloneBtn = this.find("frame/friendInfoPage/wxCloneBtn", Button);
          this.qqCloneBtn = this.find("frame/friendInfoPage/qqCloneBtn", Button);
          this.idCloneBtn.node.on("click", this.onClick, this);
          this.wxCloneBtn.node.on("click", this.onClick, this);
          this.qqCloneBtn.node.on("click", this.onClick, this); // EventMgr.on(Evt_GetContactInfo, this.updateInfo, this);
        }

        onShow() {}

        async flush(player_id) {// let data = {
          //     type: MsgTypeSend.GetContactInfoRequest,
          //     data: { player_id: player_id }
          // }
          // Session.Send(data);
        }

        updateInfo(data) {
          this.player_name.string = data.name;
          this.id.string = data.player_id;
          this.wx_num.string = data.wechat_id != "" ? data.wechat_id : "未填写信息";
          this.qq_num.string = data.qq_id != "" ? data.qq_id : "未填写信息";
        }

        onClick(event) {
          let name = event.node.name;

          switch (name) {
            case "idCloneBtn":
              this.copyInfo(this.id.string);
              console.log("clone_id");
              break;

            case "wxCloneBtn":
              this.copyInfo(this.wx_num.string);
              console.log("clone_wx");
              break;

            case "qqCloneBtn":
              this.copyInfo(this.qq_num.string);
              console.log("clone_qq");
              break;

            default:
              break;
          }
        }

        copyInfo(info) {// CopyToClip(info, (desc: string) => {
          //     if (desc ==  info) {
          //         MsgPanel.Show("已复制到粘贴板");
          //     }
          // });
        }

        onHide(...args) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce34622a3102758211582bd9368d2bdc017d3f04.js.map