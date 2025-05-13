import { sp } from "cc";
import { ResMgr } from "../manager/ResMgr";
import { Utils } from "./Utils";

export class AnimationUtils {
    static async Play(url: string, ske: sp.Skeleton, action: string, loop: boolean) {
        const key = "$skeletonData_url";
        if (!ske[key] || ske[key] != url) {
            ske[key] = url;
            let skeletonData = await ResMgr.LoadResAbSub(url, sp.SkeletonData);
            if (ske[key] == url) {
                ske.skeletonData = skeletonData;
                if (Utils.CheckAnimation(ske, action)) {
                    try {
                        ske.setAnimation(0, action, loop);
                    } catch (e) {
                        console.warn("playAnimation:" + url);
                    }
                }
            }
        }
    }
}