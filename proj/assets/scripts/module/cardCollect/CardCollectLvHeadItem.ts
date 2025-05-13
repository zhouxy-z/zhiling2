import { Node, Component, Label, Color } from "cc";
import { StdPlayerLevel } from "../../manager/CfgMgr";

export class CardCollectLvHeadItem extends Component {
    private lineRight: Node;
    private lvBg1: Node;
    private lvBg2: Node;
    private lvBg3: Node;
    private lvLab: Label;
    private lvLabColor: Color;
    private isInit: boolean = false;
    private data: StdPlayerLevel;
    private curLv: number;
    protected onLoad(): void {
        this.lineRight = this.node.getChildByPath("lineRightCont/lineRight");
        this.lvBg1 = this.node.getChildByPath("lvCont/lvBg1");
        this.lvBg2 = this.node.getChildByPath("lvCont/lvBg2");
        this.lvBg3 = this.node.getChildByPath("lvCont/lvBg3");
        this.lvLab = this.node.getChildByPath("lvCont/lvLab").getComponent(Label);
        this.lvLabColor = this.lvLab.color;
        this.isInit = true;
        this.updateShow();
    }

    SetData(data: StdPlayerLevel, curLv: number): void {
        this.data = data;
        this.curLv = curLv;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        if (this.data.Level < this.curLv) {
            this.lvLab.node.active == true;
            this.lvLab.isBold = false;
            this.lvBg1.active = true;
            this.lvBg2.active = false;
            this.lvBg3.active = false;
            this.lineRight.active = true;
            this.lvLabColor.fromHEX("#D6B480");
        } else if (this.data.Level == this.curLv) {
            this.lvLab.node.active == true;
            this.lvLab.isBold = true;
            this.lvBg1.active = false;
            this.lvBg2.active = true;
            this.lvBg3.active = false;
            this.lineRight.active = false;
            this.lvLabColor.fromHEX("#D94504");
        }
        this.lvLab.string = this.data.Level.toString();
        this.lvLab.color = this.lvLabColor;
    }

   
}