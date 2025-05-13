System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Transform3d, _dec, _class, _crd, ccclass, property, TaskItem3d;

  function _reportPossibleCrUseOfTransform3d(extras) {
    _reporterNs.report("Transform3d", "../common/Transform3d", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Transform3d = _unresolved_2.Transform3d;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23b82anqrJEsI8zYS979rZW", "TaskItem3d", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'SpriteRenderer', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskItem3d", TaskItem3d = (_dec = ccclass('TaskItem3d'), _dec(_class = class TaskItem3d extends (_crd && Transform3d === void 0 ? (_reportPossibleCrUseOfTransform3d({
        error: Error()
      }), Transform3d) : Transform3d) {
        onLoad() {
          super.onLoad(); // let icon = this.node.getChildByName("icon");
          // let label = this.node.getChildByName("icon/label");
          // let sf = icon.getComponent(SpriteRenderer).spriteFrame;
          // let trans = label.getComponent(UITransform);
          // this.$width = (sf.width * icon.scale.x + trans.contentSize.width * label.scale.x) * GameSet.PixelSize;
          // this.$height = sf.height * icon.scale.y * GameSet.PixelSize;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30b2670c151f20176b2457364ecd0f987f0f3b53.js.map