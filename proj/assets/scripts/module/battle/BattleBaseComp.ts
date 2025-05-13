import { js } from "cc";
import { GameScene } from "../fight/GameScene";
import { BattlePackData } from "../player/PlayerStruct";
import proto from "../../net/Protocol";
import { EventMgr } from "../../manager/EventMgr";
/**
 * 战斗表现基类
 */
export abstract class BattleBaseComp<T> {
    public type: proto.base.BattleRoomOpOutputType;
    protected scene: GameScene; //需要处理的玩家 为空字符时表示系统更新，双方都要更新
    protected ownerPlayerId: string; //需要处理的玩家 为空字符时表示系统更新，双方都要更新
    protected roomId: string; //当前房间id
    protected round: number; //当前回合数
    protected maxTime: number; //最大(执行最大时间 超时则中断直接刷新全局)
    //脚本数据
    protected data: T;
    protected isRun: boolean = false;//是否开始跑脚本了
    protected isExit: boolean = false;//是否已退出脚本

    //退出脚本回调
    public exitCall: (roomId: string, round: number, playerId: string) => void;
    public changeDataCell?: (playerId: string, data: T) => void;
    /**
     * 进入
     */
    public enter(packData: BattlePackData, scene?: GameScene, type?: proto.base.BattleRoomOpOutputType): void {
        this.type = type;
        this.scene = scene;
        this.roomId = packData.roomId;
        this.round = packData.round;
        this.ownerPlayerId = packData.ownerPlayerId;
        this.data = packData.data;
        this.data['touchInstId'] = packData.touchInstId;
        console.log("enter------>" + proto.base.BattleRoomOpOutputType[this.type]);
        console.dir(this.data);
        this.isExit = false;
        this.start();
        this.isRun = true;
    }

    /***
     * 退出
     */
    public exit(): void {
        if (this.isExit) return;
        console.log("exit======>" + proto.base.BattleRoomOpOutputType[this.type]);
        EventMgr.emit("op_start");
        this.isRun = false;
        this.isExit = true;
        this.maxTime = 0;
        this.reset();
        this.changeDataCell?.(this.ownerPlayerId, this.data);
        this.changeDataCell = null;
        // this.data = null;
        this.exitCall?.(this.roomId, this.round, this.ownerPlayerId);
        this.exitCall = null;
    }

    /**
     * 必须实现脚本初始化
     */
    protected abstract start(): void;

    /**
     * 必须实现脚本重置
     */
    protected abstract reset(): void;

    /**
     * 帧更新
     * @param dt 
     */
    public update(dt: number): void {
        if (!this.isRun) return;
        //处理超时逻辑
        if (this.maxTime > 0) {
            return;
        }
        this.onUpdate(dt);
    }

    /**
     * 帧更新
     * @param dt 
     */
    protected onUpdate(dt: number): void {

    }
}