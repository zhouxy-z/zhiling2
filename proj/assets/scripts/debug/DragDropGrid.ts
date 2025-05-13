import { Label, Node, Component, color } from "cc";
import { IGridData } from "./DragDropExample";

export class DragDropGrid extends Component {
    private lab:Label;
    private _data:IGridData;
    private _isInit:boolean = false;
    start() {
        this.lab = this.node.getChildByName("lab").getComponent(Label);
        this._isInit = true;
        this.updateShow();
        this.node.on(Node.EventType.TOUCH_END, ()=>{
            console.log("------>" + this.data.id);
        }, this);
    }

    setData(data:IGridData): void {
        this._data = data;
        this.updateShow();
    }

    private updateShow():void{
        if(!this._isInit || !this._data) return;
        this.lab.string = this._data.id + "";
        
    }

    get data():IGridData{
        return this._data;
    }
}