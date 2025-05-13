export enum EaseType {
    /**
     * @en A linear function, `f(k) = k`. Result correlates to input value one to one.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 线性函数，`f(k) = k`。返回值和输入值一一对应。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    linear,
    /**
     * @en A quadratic function, f(k) = k * k. The interpolation starts slowly, then progressively speeds up until the end,
     * at which point it stops abruptly. Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 一个二次方的函数，f(k) = k * k。插值开始时很慢，然后逐渐加快，直到结束，并突然停止。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quadIn,
    /**
     * @en A quadratic function, f(k) = k * (2-k). The interpolation starts abruptly and then progressively slows down towards the end. Refer to
     * [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 一个二次方的函数，f(k) = k * (2-k)。插值开始时很突然，然后在接近尾声时逐渐减慢。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quadOut,
    /**
     * @en The interpolation starts slowly, speeds up, and then slows down towards the end. Refer to
     * [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) graphic feature.
     * @zh 插值开始时很慢，接着加快，然后在接近尾声时减慢。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quadInOut,
    /**
     * @en Starts slowly and accelerates. Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 启动慢，加速快。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    cubicIn,
    /**
     * @en Starts quickly and decelerates.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 起动迅速，减速慢。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    cubicOut,
    /**
     * @en Accelerates the animation at the beginning, and decelerates the animation at the end.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 在开始时加速动画，在结束时减慢动画的速度。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    cubicInOut,
    /**
     * @en Starts slowly and accelerates. Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 启动慢，加速快。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quartIn,
    /**
     * @en Starts quickly and decelerates.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 起动迅速，减速慢。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quartOut,
    /**
     * @en Accelerates the animation at the beginning, and decelerates the animation at the end.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 在开始时加速动画，在结束时减慢动画的速度。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quartInOut,
    /**
     * @en Starts slowly and accelerates. Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 启动慢，加速快。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quintIn,
    /**
     * @en Starts quickly and decelerates.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 起动迅速，减速慢。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quintOut,
    /**
     * @en Accelerates the animation at the beginning, and decelerates the animation at the end.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 在开始时加速动画，在结束时减慢动画的速度。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quintInOut,
    /**
     * @en Smoothly accelerates the animation.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 平滑地加速动画。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    sineIn,
    /**
     * @en Smoothly decelerates the animation.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 平滑地使动画降速。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    sineOut,
    /**
     * @en Smoothly accelerates the animation at the beginning, and smoothly decelerates the animation at the end.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 在开始时平滑地加速动画，在结束时平滑地减速动画。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    sineInOut,
    /**
     * @en Starts slowly and accelerates. Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 启动慢，加速快。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    expoIn,
    /**
     * @en Starts quickly and decelerates.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 起动迅速，减速慢。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    expoOut,
    /**
     * @en Accelerates the animation at the beginning, and decelerates the animation at the end.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 在开始时加速动画，在结束时减慢动画的速度。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    expoInOut,
    /**
     * @en Starts slowly and accelerates. Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 启动慢，加速快。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    circIn,
    /**
     * @en Starts quickly and decelerates.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 起动迅速，减速慢。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    circOut,
    /**
     * @en Accelerates the animation at the beginning, and decelerates the animation at the end.
     * Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 在开始时加速动画，在结束时减慢动画的速度。具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    circInOut,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    elasticIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    elasticOut,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    elasticInOut,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    backIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    backOut,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    backInOut,
    bounceIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    bounceOut,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    bounceInOut,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    smooth,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    fade,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quadOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    cubicOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quartOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    quintOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    sineOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    expoOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    circOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    elasticOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    backOutIn,
    /**
     * @en Refer to [this doc](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html) for graphic feature.
     * @zh 具体效果可以参考[该文档](https://docs.cocos.com/creator/manual/zh/tween/tween-function.html)。
     */
    bounceOutIn,
}