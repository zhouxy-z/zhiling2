System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, DL, _crd;

  /**
   * 跳转
   * @param type 
   * @param params 
   */
  function Goto(type) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    return (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
      error: Error()
    }), EventMgr) : EventMgr).Call('ui_guide', type, ...params);
  }
  /**
   * 检测条件
   * @param conditionID 
   * @param values 
   * @returns 
   */


  function CheckCondition(conditionID) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
      error: Error()
    }), EventMgr) : EventMgr).Call('condition_check', conditionID, ...values);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./manager/EventMgr", _context.meta, extras);
  }

  _export({
    DL: void 0,
    Goto: Goto,
    CheckCondition: CheckCondition
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b044UC8spM9b7XRsxok9qW", "DL", undefined);

      _export("DL", DL = class DL {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d00ba8ca31039f97da740748bfabd6741c3fc07.js.map