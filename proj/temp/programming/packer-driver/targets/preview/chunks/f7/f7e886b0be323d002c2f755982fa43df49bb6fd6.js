System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Sprite, SpriteFrame, path, Panel, EventMgr, QrcodeMaker, GetInviteCode, SaveImage, PlayerData, ResMgr, folder_head_round, AudioMgr, Audio_CommonClick, FriendSharePanel, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanel(extras) {
    _reporterNs.report("Panel", "../../GameRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../manager/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQrcodeMaker(extras) {
    _reporterNs.report("QrcodeMaker", "../../utils/QrcodeMaker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetInviteCode(extras) {
    _reporterNs.report("GetInviteCode", "../../Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveImage(extras) {
    _reporterNs.report("SaveImage", "../../utils/SaveImage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../roleModule/PlayerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffolder_head_round(extras) {
    _reporterNs.report("folder_head_round", "../../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../manager/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudio_CommonClick(extras) {
    _reporterNs.report("Audio_CommonClick", "../../manager/AudioMgr", _context.meta, extras);
  }

  _export("FriendSharePanel", void 0);

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
      SpriteFrame = _cc.SpriteFrame;
      path = _cc.path;
    }, function (_unresolved_2) {
      Panel = _unresolved_2.Panel;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      QrcodeMaker = _unresolved_4.QrcodeMaker;
    }, function (_unresolved_5) {
      GetInviteCode = _unresolved_5.GetInviteCode;
    }, function (_unresolved_6) {
      SaveImage = _unresolved_6.SaveImage;
    }, function (_unresolved_7) {
      PlayerData = _unresolved_7.default;
    }, function (_unresolved_8) {
      ResMgr = _unresolved_8.ResMgr;
      folder_head_round = _unresolved_8.folder_head_round;
    }, function (_unresolved_9) {
      AudioMgr = _unresolved_9.AudioMgr;
      Audio_CommonClick = _unresolved_9.Audio_CommonClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65d10RjYoJH25Bgqh9CxyRN", "FriendSharePanel", undefined);

      __checkObsolete__(['Button', 'EditBox', 'EventTouch', 'Input', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'Touch', 'UIOpacity', 'instantiate', 'path', 'v3']);

      _export("FriendSharePanel", FriendSharePanel = class FriendSharePanel extends (_crd && Panel === void 0 ? (_reportPossibleCrUseOfPanel({
        error: Error()
      }), Panel) : Panel) {
        constructor() {
          super(...arguments);
          this.prefab = "prefabs/panel/friend/FriendSharePanel";
          this.save = void 0;
          this.name_str = void 0;
          this.uid_str = void 0;
          this.sever_str = void 0;
          this.icon = void 0;
        }

        onLoad() {
          //25328825
          var url = "http://test.daochat.cn?inviteCode=" + (_crd && GetInviteCode === void 0 ? (_reportPossibleCrUseOfGetInviteCode({
            error: Error()
          }), GetInviteCode) : GetInviteCode)() + "&appId=test";
          var qrcode = (_crd && QrcodeMaker === void 0 ? (_reportPossibleCrUseOfQrcodeMaker({
            error: Error()
          }), QrcodeMaker) : QrcodeMaker).Create(url, 240, 240);
          qrcode.setPosition(-120, -120);
          this.find("node/qrcode").addChild(qrcode);
          this.CloseBy("node");
          this.name_str = this.find("node/name_str", Label);
          this.uid_str = this.find("node/uid_str", Label);
          this.sever_str = this.find("node/sever_str", Label);
          this.icon = this.find("node/bg/Mask/icon", Sprite);
          this.save = this.find("node/save", Button);
          this.save.node.on("click", this.onSave, this); // EventMgr.on(Evt_CloseFriendBindOrUnbindPanel, this.onClose, this)
        }

        onShow() {}

        flush() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.name_str.string = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).roleInfo.name;
            _this.uid_str.string = "ID:" + (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).roleInfo.player_id; // this.sever_str.string = "";

            var url = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).roleInfo.icon_url ? (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).roleInfo.icon_url : "01";
            _this.icon.spriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).LoadResAbSub(path.join(_crd && folder_head_round === void 0 ? (_reportPossibleCrUseOffolder_head_round({
              error: Error()
            }), folder_head_round) : folder_head_round, url, "spriteFrame"), SpriteFrame);
          })();
        }

        onSave(btn) {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).PlayOnce(_crd && Audio_CommonClick === void 0 ? (_reportPossibleCrUseOfAudio_CommonClick({
            error: Error()
          }), Audio_CommonClick) : Audio_CommonClick);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("save_image_complete", this.onClose, this);
          (_crd && SaveImage === void 0 ? (_reportPossibleCrUseOfSaveImage({
            error: Error()
          }), SaveImage) : SaveImage)(this.find("node"));
        }

        onClose() {
          this.Hide();
        }

        onHide() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7e886b0be323d002c2f755982fa43df49bb6fd6.js.map