import { Component, Label, Node, Toggle, instantiate } from "cc";
import { CfgMgr, StdShopIndex } from "../../manager/CfgMgr";
import { Panel } from "../../manager/GameRoot";
import { ShopDefinePage } from "./ShopDefinePage";
import { ShopLuckyPage } from "./ShopLuckyPage";
import { Req, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";
import { IPanelPage } from "../common/IPanelPage";
import { PlayerData } from "../player/PlayerData";
import { EventMgr, Evt_ShopLuckyGet, Evt_ShopUpdate } from "../../manager/EventMgr";

export class ShopPanel extends Panel {
    protected prefab: string = "prefabs/shop/ShopPanel";
    protected pageDefine: { [tabSort: number]: { node: string, classz: any } } = {
        [1]: { node: "shopDayPage", classz: ShopDefinePage },
        [2]: { node: "shopDayPage", classz: ShopDefinePage },
        [3]: { node: "shopLuckyPage", classz: ShopLuckyPage }
    }
    protected pageMap: Map<Node, { ids: number[], page: IPanelPage }> = new Map();

    protected onLoad() {
        this.CloseBy("backBtn");

        // 初始化商城页签
        let groups: StdShopIndex[][] = CfgMgr.GetShopsByPanel("ShopPanel");
        let nav = this.find("nav");
        let origin = instantiate(nav.children[0]);
        let index = 0, pagedefines: Map<Node, { ids: number[], btn: Node, classz: any }> = new Map();
        for (let shops of groups) {
            let std = shops[0];// 默认拿第一个当做标签名
            let ids = [];
            shops.forEach(value => { ids.push(value.ID) });
            let btn = nav.children[index];
            if (!btn) {
                btn = instantiate(origin);
                nav.addChild(btn);
            }
            btn.on('toggle', this.onNav, this);
            let toggle = btn.getComponent(Toggle);
            toggle['shopIndexType'] = ++index;
            this.resetTabName(btn, std.ShopName);

            let path = this.pageDefine[std.ShopType].node;
            let classz = this.pageDefine[std.ShopType].classz;
            let ui = this.find(path);
            ui.active = true;
            if (pagedefines.has(ui)) {
                let cloner = instantiate(ui);
                ui.parent.addChild(cloner);
                cloner.setSiblingIndex(ui.getSiblingIndex() + 1);
                pagedefines.set(cloner, { ids: ids, btn: btn, classz: classz });
            } else {
                pagedefines.set(ui, { ids: ids, btn: btn, classz: classz });
            }
        }
        pagedefines.forEach((value, node) => {
            let page: IPanelPage = node.addComponent(value.classz);
            this.pageMap.set(value.btn, { ids: value.ids, page: page });
        })

        EventMgr.on(Evt_ShopUpdate, this.updateData, this);
        EventMgr.on(Evt_ShopLuckyGet, this.updateData, this);
    }
    private resetTabName(btn: Node, name: string) {
        btn.getChildByPath("layout/label").getComponent(Label).string = name;
        btn.getChildByPath("select/layout/label").getComponent(Label).string = name;
    }
    protected async onShow(e?: any) {
        let shop_index = new Req["shop.protocol.getindex"]();
        shop_index.shopIndexId = null
        await Session.sendAsync(Route["shop.protocol.getindex"], shop_index);
        this.currentToggle = undefined;
        this.updateData();
    }
    protected updateData() {
        // 以服务器下发的商城来初始化哪些标签开启
        let shops = PlayerData.GetShopIndexs();
        this.pageMap.forEach((pageObj, btn) => {
            pageObj.page.Hide();
            let data = shops.find(content => pageObj.ids.indexOf(content.shopIndexId) != -1);
            if (data) {
                btn.active = true;
                let stdIndex = CfgMgr.GetShopIndexById(data.shopIndexId);
                if (stdIndex) this.resetTabName(btn, stdIndex.ShopName);
            } else {
                btn.active = false;
            }
        });
        this.onNav(this.currentToggle)
    }
    protected currentToggle: Toggle;
    protected onNav(toggle?: Toggle) {
        if (!toggle) toggle = this.find("nav").children[0].getComponent(Toggle);
        this.currentToggle = toggle;
        if (toggle.isChecked) {
            let target = this.pageMap.get(toggle.node);
            this.pageMap.forEach(value => {
                if (value == target) {
                    value.page.Show(value.ids);
                } else {
                    value.page.Hide();
                }
            });
        }
    }

    protected onHide(...args: any[]): void {

    }

    async flush() {

    }
}
