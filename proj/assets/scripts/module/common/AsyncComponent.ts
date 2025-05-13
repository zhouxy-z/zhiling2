import { Component } from "cc";

export class AsyncComponent extends Component {

    protected hasLoad = false;
    protected handle = undefined;
    protected $loadSub: Promise<any>;

    protected onLoad() {
        this.hasLoad = true;
        this.handle && this.handle();
    }
    protected get loadSub() {
        if (this.$loadSub) return this.$loadSub;
        let self = this;
        this.$loadSub = new Promise((resolve, reject) => {
            self.handle = resolve;
        });
        return this.$loadSub;
    }
}