import { Node, Component, Sprite, Label, path, SpriteFrame } from "cc";
import { StdCardUpgradeShow } from "../../manager/CfgMgr";
import { ResMgr } from "../../manager/ResMgr";
export class CardCollectQualItem extends Component {
    private bg: Sprite;
    private nameLab: Label;
    private expLab: Label;
    private isInit: boolean = false;
    private data: StdCardUpgradeShow;
    protected onLoad(): void {
        this.bg = this.node.getChildByPath("bg").getComponent(Sprite);
        this.nameLab = this.node.getChildByPath("nameCont/nameLab").getComponent(Label);
        this.expLab = this.node.getChildByPath("expCont/expLab").getComponent(Label);
        this.isInit = true;
        this.updateShow();
    }

    SetData(data: StdCardUpgradeShow): void {
        this.data = data;
        this.updateShow();
    }

    private updateShow(): void {
        if (!this.isInit || !this.data) return;
        this.nameLab.string = this.data.QualityName;
        this.expLab.string = `+${this.data.AddExp}`;
        ResMgr.LoadResAbSub(path.join("sheets/cardCollect", `qualNameBg_${this.data.CardQuality}`, "spriteFrame"), SpriteFrame, (res: SpriteFrame) => {
            this.bg.spriteFrame = res;
        });
    }
}