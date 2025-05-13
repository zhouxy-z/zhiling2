import {Button, Input, Label, Node, Sprite, SpriteFrame, Toggle } from "cc";
import { Panel } from "../../manager/GameRoot";
import { AutoScroller } from "../../component/AutoScroller";
import { GatePass } from "./GatePass";
import { RightsConvert } from "./RightsConvert";
import { CfgMgr, StdEquityCard } from "../../manager/CfgMgr";
import { PlayerData } from "../player/PlayerData";
import { ResMgr } from "../../manager/ResMgr";

export class RightsPanel extends Panel {
    protected prefab: string = "prefabs/rights/RightsPanel";

  
    private bg:Sprite;
    private help:Button;
    protected scroller: AutoScroller;
    private GatePass:GatePass;
    private RightsConvert:RightsConvert
   

    private tab_list:StdEquityCard[]
    protected async onLoad() {
        this.CloseBy("backBtn");
        this.help = this.find("help", Button);
        this.scroller = this.find("ScrollView", AutoScroller);
        this.scroller.SetHandle(this.updateItem.bind(this));
        this.scroller.node.on('select', this.onSelect, this);
        this.GatePass = this.find("content/GatePass").addComponent(GatePass);
        this.RightsConvert = this.find("content/RightsConvert").addComponent(RightsConvert);

        this.help.node.on(Button.EventType.CLICK, this.onHelp, this)
    }

    protected onShow(): void {
     
    }

    public flush(...args: any[]): void {
        let seaid = PlayerData.CurSeasonData.currentSeasonId
        let _tab_list_1 = PlayerData.getPlayerHasEuqityList();
        let _tab_list_2 =  CfgMgr.getEquityOpenCfg(seaid);
        for (let index = 0; index < _tab_list_2.length; index++) {
            const element = _tab_list_2[index];
            let delete_index = _tab_list_1.findIndex(data=>data.EquityCardID == element.EquityCardID) 
            if(delete_index != -1){
                _tab_list_1.splice(delete_index, 1)
            }
        }
        this.tab_list = [..._tab_list_1, ..._tab_list_2]
        this.scroller.UpdateDatas(this.tab_list)
        this.scroller.SelectFirst()
    }

 

  
    onPage(page: number) {
        console.log(page)
        this.GatePass.node.active = false;
        this.RightsConvert.node.active = false;
        let data = this.tab_list[page]
        switch (data.CardType) {
            case 1:
                this.GatePass.node.active = true;
                this.GatePass.Show(data)
                break;
            case 2:
                this.RightsConvert.node.active = true;
                this.RightsConvert.Show(data)
                break;
        
            default:
                break;
        }
       
    }
    private updateItem(item: Node, data: StdEquityCard, index: number) {
        let icon1 = item.getChildByName("icon").getComponent(Sprite)
        let name1 = item.getChildByName("name").getComponent(Label)
        let icon2 = item.getChildByPath("Checkmark/icon").getComponent(Sprite)
        let name2 = item.getChildByPath("Checkmark/name").getComponent(Label)
        
        ResMgr.LoadResAbSub("sheets/rights/icon/" + data.TabIcon + "/spriteFrame", SpriteFrame, res=>{
            icon1.spriteFrame = icon2.spriteFrame = res
        })

        name1.string = name2.string = data.TabName;

    }
    private onSelect(index: number, item: Node, data: any) {
        console.log(data)
        item.getComponent(Toggle).isChecked = true;
        this.onPage(index);
    }


    private onHelp(){

    }

    protected onHide(...args: any[]): void {

    }

}
