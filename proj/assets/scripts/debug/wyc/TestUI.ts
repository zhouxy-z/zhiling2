import { _decorator, Camera, Canvas, Component, director, find, Input, instantiate, Layers, Node, path, Prefab, Rect, RenderRoot2D, RenderTexture, sp, Sprite, SpriteFrame, Vec3 } from 'cc';
import { ResMgr } from '../../manager/ResMgr';
import { CfgMgr } from '../../manager/CfgMgr';
import { GameRoot } from '../../manager/GameRoot';
import { Snapshot } from '../../utils/Snapshot';
import { Second, Utils } from '../../utils/Utils';
import { SceneCard } from '../../module/fight/display/SceneCard';
import { AutoScroller } from '../../component/AutoScroller';
import { EffectSet } from '../../module/fight/display/EffectSet';
import { Effect } from '../../module/fight/display/Effect';
import { Guide, PointTo } from '../../manager/Guide';
import { GameSet } from '../../manager/GameSet';
const { ccclass, property } = _decorator;

@ccclass('TestUI')
export class TestUI extends Component {

  private cameras: Camera[] = [];

  async start() {
    await ResMgr.PrevLoad();
    await CfgMgr.load();

    new GameRoot(find("Canvas"));

    let sk = find("Canvas/Node").getComponent(sp.Skeleton);
    sk.skeletonData = await ResMgr.LoadResAbSub(`spine/card_0026/card_0026`,sp.SkeletonData);
    sk.setAnimation(0,"idle",true);
  }

  protected onTouch() {
    console.log("onTouch");
  }
}
