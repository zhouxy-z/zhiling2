/**
 * 音效定义
 */
export class AudioDefine {
    /**
     * 频道
     */
    static readonly Channels = {
        ["audio/bgm/*"]: { channel: 1, maxNum: 2 },
        ["audio/card/*"]: { channel: 2, maxNum: 10 },
        ["audio/scene/*"]: { channel: 3, maxNum: 2 },
        ["audio/ui/*"]: { channel: 4, maxNum: 10 },
    }
}