import { Vec3, geometry, v3 } from "cc";

export class Bezier {
    protected static poolv: Vec3[] = [];
    protected static pool: Bezier[] = [];

    protected static tv1: Vec3 = v3();
    protected static tv2: Vec3 = v3();
    protected static tv3: Vec3 = v3();
    protected static v = v3(0, 1, 0);

    protected vs: Vec3[] = [];

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
    update(t: number) {
        if (this.vs.length <= 2) return undefined;
        let vs: Vec3[] = [];
        this.vs.forEach(value => { vs.push((Bezier.poolv.pop() || v3()).set(value)) });
        while (vs.length > 1) {
            let temp = [];
            let prev: Vec3 = this.vs[0];
            for (let i = 1; i < vs.length; i++) {
                let v = Bezier.poolv.pop() || v3();
                Vec3.lerp(v, prev, vs[i], t);
                temp.push(v);
                Bezier.poolv.push(vs[i]);
                prev = vs[i];
            }
            vs.length = 0;
            vs = temp;
        }
        // console.log("update", vs[0].toString());
        return vs[0];
    }

    /**
     * 抛物线
     * @param start 
     * @param end 
     * @param radio 
     */
    static craeteCurve(start: Vec3, end: Vec3, radio: number) {
        let dis = Vec3.distance(start, end);
        let h = dis * radio;
        Vec3.lerp(this.tv1, start, end, 0.5);
        Vec3.multiplyScalar(this.tv2, this.v, h);
        Vec3.add(this.tv3, this.tv1, this.tv2);
        let bezier = this.pool.length ? this.pool.pop() : new Bezier();
        bezier.vs.push(Bezier.poolv.length ? Bezier.poolv.pop().set(start) : Vec3.clone(start));
        bezier.vs.push(Bezier.poolv.length ? Bezier.poolv.pop().set(this.tv3) : Vec3.clone(this.tv3));
        bezier.vs.push(Bezier.poolv.length ? Bezier.poolv.pop().set(end) : Vec3.clone(end));
        // console.log("bezier", start.toString(), end.toString(), bezier.vs[1].toString());
        return bezier;
    }

    /**
     * 创建贝塞尔
     * @param start 
     * @param end 
     * @param ctrls 
     */
    static create(start: Vec3, end: Vec3, ctrls: Vec3[]) {
        let ratio = Vec3.distance(start, end) / Vec3.distance(ctrls[0], ctrls[ctrls.length - 1]);
        let bezier = this.pool.length ? this.pool.pop() : new Bezier();
        bezier.vs.push(start);
        let prev: Vec3 = ctrls[0];
        for (let i = 1; i < ctrls.length - 1; i++) {
            let v = ctrls[i];
            let c = Bezier.poolv.length ? Bezier.poolv.pop() : v3();
            Vec3.lerp(c, prev, v, ratio);
            bezier.vs.push(c);
        }
        bezier.vs.push(end);
        return bezier;
    }
}