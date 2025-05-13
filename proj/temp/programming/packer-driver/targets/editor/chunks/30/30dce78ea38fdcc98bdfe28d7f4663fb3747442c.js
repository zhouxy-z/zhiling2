System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, v3, Bezier, _crd;

  _export("Bezier", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b5a71P4BVF0YTsS2zNlA37", "Bezier", undefined);

      __checkObsolete__(['Vec3', 'geometry', 'v3']);

      _export("Bezier", Bezier = class Bezier {
        constructor() {
          this.vs = [];
        }

        receive() {
          for (let v of this.vs) {
            if (Bezier.poolv.indexOf(v) == -1) Bezier.poolv.push(v);
          }

          this.vs.length = 0;
          if (Bezier.pool.indexOf(this) == -1) Bezier.pool.push(this);
        }
        /**
         * 计算
         * @param t 
         * @returns 
         */


        update(t) {
          if (this.vs.length <= 2) return undefined;
          let vs = [];
          this.vs.forEach(value => {
            vs.push((Bezier.poolv.pop() || v3()).set(value));
          });

          while (vs.length > 1) {
            let temp = [];
            let prev = this.vs[0];

            for (let i = 1; i < vs.length; i++) {
              let v = Bezier.poolv.pop() || v3();
              Vec3.lerp(v, prev, vs[i], t);
              temp.push(v);
              Bezier.poolv.push(vs[i]);
              prev = vs[i];
            }

            vs.length = 0;
            vs = temp;
          } // console.log("update", vs[0].toString());


          return vs[0];
        }
        /**
         * 抛物线
         * @param start 
         * @param end 
         * @param radio 
         */


        static craeteCurve(start, end, radio) {
          let dis = Vec3.distance(start, end);
          let h = dis * radio;
          Vec3.lerp(this.tv1, start, end, 0.5);
          Vec3.multiplyScalar(this.tv2, this.v, h);
          Vec3.add(this.tv3, this.tv1, this.tv2);
          let bezier = this.pool.length ? this.pool.pop() : new Bezier();
          bezier.vs.push(Bezier.poolv.length ? Bezier.poolv.pop().set(start) : Vec3.clone(start));
          bezier.vs.push(Bezier.poolv.length ? Bezier.poolv.pop().set(this.tv3) : Vec3.clone(this.tv3));
          bezier.vs.push(Bezier.poolv.length ? Bezier.poolv.pop().set(end) : Vec3.clone(end)); // console.log("bezier", start.toString(), end.toString(), bezier.vs[1].toString());

          return bezier;
        }
        /**
         * 创建贝塞尔
         * @param start 
         * @param end 
         * @param ctrls 
         */


        static create(start, end, ctrls) {
          let ratio = Vec3.distance(start, end) / Vec3.distance(ctrls[0], ctrls[ctrls.length - 1]);
          let bezier = this.pool.length ? this.pool.pop() : new Bezier();
          bezier.vs.push(start);
          let prev = ctrls[0];

          for (let i = 1; i < ctrls.length - 1; i++) {
            let v = ctrls[i];
            let c = Bezier.poolv.length ? Bezier.poolv.pop() : v3();
            Vec3.lerp(c, prev, v, ratio);
            bezier.vs.push(c);
          }

          bezier.vs.push(end);
          return bezier;
        }

      });

      Bezier.poolv = [];
      Bezier.pool = [];
      Bezier.tv1 = v3();
      Bezier.tv2 = v3();
      Bezier.tv3 = v3();
      Bezier.v = v3(0, 1, 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30dce78ea38fdcc98bdfe28d7f4663fb3747442c.js.map