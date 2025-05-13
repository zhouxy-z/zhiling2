import { PlayerData } from "../player/PlayerData";
import proto, { Req, Route } from "../../net/Protocol";
import { CfgMgr, StdShopCommodity } from "../../manager/CfgMgr";
import { AutoScroller } from "../../component/AutoScroller";
import { AsyncComponent } from "../common/AsyncComponent";
import { Input, Label, Node, Slider, Sprite, SpriteFrame, UITransform, path } from "cc";
import { ShopItem } from "./ShopItem";
import { Tips } from "../common/Tips";
import { ResMgr, folder_item } from "../../manager/ResMgr";
import { Session } from "../../net/Session";
import { IPanelPage } from "../common/IPanelPage";
import { DateUtils } from "../../utils/DateUtils";

/**将shopitem再次封装，用于动态绑定shopIndexId的语法糖提示 */
interface IShopItem extends proto.base.IShopItem {
    shopIndexId: number;
}

export class ShopDefinePage extends AsyncComponent implements IPanelPage {
    protected scroller: AutoScroller;
    protected icon: Sprite;
    protected numLab: Label;
    protected nameLab: Label;
    protected descLab: Label;
    protected slider: Slider;
    protected progress: Node;
    protected costIcon: Sprite;
    protected costLab: Label;
    protected timeLab: Label;

    protected indexIds = [];
    protected selectShop: IShopItem;
    protected costCfg: StdShopCommodity;
    protected limit: number;
    protected buyCount = 0;
    protected refreshShop: proto.base.IShopIndexContent = undefined;

    protected onLoad() {
        this.scroller = this.node.getChildByPath("shopList").getComponent(AutoScroller);
        if(!this.scroller)this.scroller = this.node.getChildByPath("shopList").addComponent(AutoScroller);
        this.scroller.SetHandle(this.updateItem.bind(this));
        this.scroller.node.on('select', this.onSelect, this);
        this.icon = this.node.getChildByPath("infoView/itemShow/icon").getComponent(Sprite);
        this.numLab = this.node.getChildByPath("infoView/itemShow/numLab").getComponent(Label);
        this.nameLab = this.node.getChildByPath("infoView/nameLab").getComponent(Label);
        this.descLab = this.node.getChildByPath("infoView/descLab").getComponent(Label);
        this.slider = this.node.getChildByPath("infoView/Slider").getComponent(Slider);
        this.progress = this.node.getChildByPath("infoView/Slider/progress");
        this.costIcon = this.node.getChildByPath("infoView/costLayout/icon").getComponent(Sprite);
        this.costLab = this.node.getChildByPath("infoView/costLayout/cost").getComponent(Label);
        this.timeLab = this.node.getChildByPath("timeCont/timeLab").getComponent(Label);
        this.node.getChildByPath("infoView/del").on(Input.EventType.TOUCH_END, this.onDel, this);
        this.node.getChildByPath("infoView/add").on(Input.EventType.TOUCH_END, this.onAdd, this);
        this.node.getChildByPath("infoView/buyBtn").on(Input.EventType.TOUCH_END, this.onBuy, this);
        this.slider.node.on('slide', this.onSlide, this);
        super.onLoad();
    }

    protected sort(a: proto.base.IShopItem, b: proto.base.IShopItem) {
        let aseed = (a.count < 0 ? 1 : 0) * 10000 + CfgMgr.GetCommShopItem(a.id).Order;
        let bseed = (b.count < 0 ? 1 : 0) * 10000 + CfgMgr.GetCommShopItem(b.id).Order;
        return aseed - bseed;
    }

    async Show(indexIds: number[]) {
        this.selectShop = undefined;
        this.node.active = true;
        if (!this.hasLoad) await this.loadSub;
        this.indexIds = indexIds;
        this.updateData();
    }
    async Hide() {
        if (!this.hasLoad) await this.loadSub;
        this.node.active = false;
    }

    protected updateData(exceptIndex?: number) {
        // 将相同tabSort的商店合并
        let adshops: IShopItem[] = [];
        let items: IShopItem[] = [];
        this.refreshShop = undefined;
        for (let indexId of this.indexIds) {
            let content = PlayerData.GetShopByID(indexId);
            if (content.shopIndexId != exceptIndex) {
                if (!this.refreshShop || this.refreshShop.shop.refreshTime > content.shop.refreshTime) this.refreshShop = content;
            }
            content.shop.adShopItems.forEach(value => {
                value['shopIndexId'] = content.shopIndexId;
                adshops.push(value as IShopItem);
            })
            content.shop.shopItems.forEach(value => {
                value['shopIndexId'] = content.shopIndexId;
                items.push(value as IShopItem);
            })
        }
        // 排序
        adshops.sort(this.sort);
        items.sort(this.sort);
        let datas = adshops.concat(items);
        if (datas.length) {
            this.scroller.UpdateDatas(datas);
            this.scroller.SelectFirst();
            this.nameLab.node.parent.active = true;
        } else {
            this.nameLab.node.parent.active = false;
        }
    }

    protected update(dt: number): void {
        let size = this.slider.node.getComponent(UITransform).contentSize;
        this.progress.getComponent(UITransform).setContentSize(this.slider.progress * size.width, 13.448);

        if (this.refreshShop) {
            this.timeLab.node.parent.active = true;
            let residueTime: number = Math.max(Math.floor(this.refreshShop.shop.refreshTime - DateUtils.ServerTime), 0);
            this.timeLab.string = "刷新时间：" + DateUtils.FormatTime(residueTime, "%{hh}:%{mm}:%{ss}");
            if (residueTime <= 0) {
                let shop_index = new Req["shop.protocol.getindex"]();
                shop_index.shopIndexId = undefined;//[this.refreshShop.shopIndexId];
                Session.sendAsync(Route["shop.protocol.getindex"], shop_index);
                this.updateData(this.refreshShop.shopIndexId);
            } else {

            }
        } else {
            this.timeLab.node.parent.active = false;
            this.timeLab.string = "刷新时间：--:--:--";
        }
    }

    protected updateItem(item: Node, data: proto.base.IShopItem, index: number) {
        let shopItem = item.getComponent(ShopItem);
        if (!shopItem) shopItem = item.addComponent(ShopItem);
        shopItem.SetData(data);
    }

    protected onSelect(index: number, item: Node, data: any) {
        if (this.selectShop != data) this.buyCount = 1;
        this.selectShop = data;
        this.costCfg = CfgMgr.GetCommShopItem(data.id);
        let stdItem = CfgMgr.Getitem(this.costCfg.GoodsID[0]);
        this.nameLab.string = stdItem.ItemName;
        this.descLab.string = stdItem.Remark;
        this.nameLab.node.parent.active = true;
        this.limit = CfgMgr.GetCommShopItem(this.selectShop.id)?.GoodAmount || 1000;
        this.updateProgress();
    }

    protected onSlide(e?: Slider) {
        if (!this.selectShop) return;
        this.buyCount = Math.max(Math.ceil(this.limit * this.slider.progress), 1);
        this.updateProgress();
    }
    protected async updateProgress() {
        this.slider.progress = this.buyCount / this.limit;
        let url = path.join(folder_item, CfgMgr.Getitem(this.costCfg.CostID[0]).Icon, "spriteFrame");
        this.costIcon.spriteFrame = await ResMgr.LoadResAbSub(url, SpriteFrame);
        this.costLab.string = (this.costCfg.CostNumber[0] * this.buyCount).toString();
        this.numLab.string = "×" + this.buyCount.toString();
    }

    protected onDel() {
        this.buyCount = Math.max(1, this.buyCount - 1);
        this.updateProgress();
    }
    protected onAdd() {
        this.buyCount = Math.max(1, this.buyCount + 1);
        this.updateProgress();
    }
    protected onBuy() {
        if (!this.selectShop) {
            Tips.Show("请选择需要购买的商品");
            return;
        }
        let buy_item = new Req["shop.protocol.buyitem"]();
        buy_item.buyCount = this.buyCount;
        buy_item.buyId = this.costCfg.Id;
        buy_item.shopIndexId = this.selectShop.shopIndexId;
        Session.Send(Route["shop.protocol.buyitem"], buy_item);
    }
}