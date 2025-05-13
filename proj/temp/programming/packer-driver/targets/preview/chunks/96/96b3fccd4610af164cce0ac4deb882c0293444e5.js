System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, PlayerData, LocalStorage, _crd;

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../module/player/PlayerData", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1ab6n2yw5N0KgFK40D/N+a", "LocalStorage", undefined);

      __checkObsolete__(['sys']);

      /**
       * 本地存储二次封装
       */
      _export("default", LocalStorage = class LocalStorage {
        /**
         * 存储布尔值 
         */
        static SetBool(cusKey, cusValue) {
          var _ref;

          sys.localStorage.setItem(this.gameName + ((_ref = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref = _ref.player) == null ? void 0 : _ref.playerId) + "_" + cusKey, cusValue.toString());
        }
        /**
         * 获取布尔值 
         */


        static GetBool(cusKey, cusDefault) {
          var _ref2;

          if (cusDefault === void 0) {
            cusDefault = false;
          }

          var _value = sys.localStorage.getItem(this.gameName + ((_ref2 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref2 = _ref2.player) == null ? void 0 : _ref2.playerId) + "_" + cusKey);

          if (_value) {
            return _value == "true" ? true : false;
          } else {
            return cusDefault;
          }
        }
        /**
         * 存储Number 
         */


        static SetNumber(cusKey, cusValue) {
          var _ref3;

          sys.localStorage.setItem(this.gameName + ((_ref3 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref3 = _ref3.player) == null ? void 0 : _ref3.playerId) + "_" + cusKey, cusValue.toString());
        }
        /**
         * 获取Number 
         */


        static GetNumber(cusKey, cusDefault) {
          var _ref4;

          if (cusDefault === void 0) {
            cusDefault = 0;
          }

          var _value = sys.localStorage.getItem(this.gameName + ((_ref4 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref4 = _ref4.player) == null ? void 0 : _ref4.playerId) + "_" + cusKey);

          if (_value) {
            return Number(_value);
          }

          return cusDefault;
        }
        /**
         * 存储字符串 
         */


        static SetString(cusKey, cusValue) {
          var _ref5;

          sys.localStorage.setItem(this.gameName + ((_ref5 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref5 = _ref5.player) == null ? void 0 : _ref5.playerId) + "_" + cusKey, cusValue);
        }
        /**
         * 获取字符串 
         */


        static GetString(cusKey, def) {
          var _ref6;

          if (def === void 0) {
            def = "";
          }

          var _value = sys.localStorage.getItem(this.gameName + ((_ref6 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref6 = _ref6.player) == null ? void 0 : _ref6.playerId) + "_" + cusKey);

          if (_value) {
            return _value;
          }

          return def;
        }
        /**
         * 存储Object 
         */


        static SetObject(cusKey, cusValue) {
          var _ref7;

          sys.localStorage.setItem(this.gameName + ((_ref7 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref7 = _ref7.player) == null ? void 0 : _ref7.playerId) + "_" + cusKey, JSON.stringify(cusValue));
          return cusValue;
        }
        /**
         * 获取Object 
         */


        static GetObject(cusKey, cusDefault) {
          var _ref8;

          if (cusDefault === void 0) {
            cusDefault = null;
          }

          var _value = sys.localStorage.getItem(this.gameName + ((_ref8 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref8 = _ref8.player) == null ? void 0 : _ref8.playerId) + "_" + cusKey);

          if (_value) {
            return JSON.parse(_value);
          }

          return cusDefault;
        }
        /**
         * 设置玩家数据
         * @param playerId 
         * @param key 
         * @param data 
         */


        static SetPlayerData(playerId, key, data) {
          var value = this.GetObject(playerId);

          if (!value) {
            value = {};
          }

          value[key] = data;
          this.SetObject(playerId, value);
        }
        /**
         * 获取玩家数据
         * @param playerId 
         * @param key 属性名
         */


        static GetPlayerData(playerId, key) {
          var value = this.GetObject(playerId);
          return value ? value[key] : null;
        }

        static RemoveItem(cusKey) {
          var _ref9;

          sys.localStorage.removeItem(this.gameName + ((_ref9 = _crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData) == null || (_ref9 = _ref9.player) == null ? void 0 : _ref9.playerId) + "_" + cusKey);
        }

        static Clear() {
          sys.localStorage.clear();
        }

      });

      LocalStorage.gameName = "gamefi002_";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96b3fccd4610af164cce0ac4deb882c0293444e5.js.map