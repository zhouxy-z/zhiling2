import { Node, game } from 'cc';
import { Req, Ret } from './Protocol';
import { Tips } from '../module/common/Tips';
import { DEV } from 'cc/env';
import { Utils } from '../utils/Utils';
export class Session {
    private static instance: any;
    private static hasConnect = false;
    private static get starx() {
        if (!this.instance) {
            let _starx = window['starx'];
            this.instance = _starx;
        }
        return this.instance;
    }

    private static listens = {};
    protected static addListener(type: string, cb: Function, thisObj?: any) {
        let objs = this.listens[type] || [];
        this.listens[type] = objs;
        for (let obj of objs) {
            if (obj.cb == cb && (!thisObj || obj.thisObj == thisObj)) {
                this.starx.off(type, obj.handle);
                this.starx.on(type, cb.bind(thisObj));
                obj.cb = cb;
                obj.thisObj = thisObj;
                return;
            }
        }
        let obj = { cb: cb, thisObj: thisObj, handle: cb.bind(thisObj) };
        objs.push(obj);
        this.starx.on(type, obj.handle);
    }
    protected static removeListener(type: string, cb: Function, thisObj?: any) {
        let objs: any[] = this.listens[type] || [];
        this.listens[type] = objs;
        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i];
            if (obj.cb == cb && (!thisObj || obj.thisObj == thisObj)) {
                this.starx.off(type, obj.handle);
                objs.splice(i, 1);
            }
        }
    }

    private static dispatcher: Node = new Node();
    static on(route: string, cb: Function, thisObj?: any) {
        this.dispatcher.on(route, cb, thisObj);
        this.addListener(route, cb, thisObj);
    }
    static off(route: string, cb: Function, thisObj?: any) {
        this.dispatcher.off(route, cb, thisObj);
        this.removeListener(route, cb, thisObj);
    }

    private static ioError(cb?: Function) {
        Session.hasConnect = false;
        Session.dispatcher.emit("io-error");
        if (typeof (cb) == "function") cb();
    }
    private static onClose(cb?: Function) {
        Session.hasConnect = false;
        Session.dispatcher.emit("close");
        if (typeof (cb) == "function") cb();
    }
    private static un_receive_msg(route: string) {
        if (this.listens[route]?.length || this.msgList[route]) {

        } else {
            console.warn(route + "消息未处理！");
        }
    }

    /**
     * 创建会话连接
     * @param host 
     * @param port 
     * @param api 
     * @param central_code 
     * @param verification 
     * @param protocols 
     */
    static async Build(host: string, port: number, api: string, device_id: string, central_code: string, verification: string) {
        let success: Function;
        let fail: Function;
        let p = new Promise((resolve, reject) => {
            success = resolve;
            fail = reject;
        });
        let self = this;
        let Protocol = window['Protocol'];
        let Message = Protocol.Message;
        let starx = this.starx;
        starx.off('io-error', this.ioError);
        starx.on('io-error', this.ioError);
        starx.off('close', this.onClose);
        starx.on('close', this.onClose);
        starx.on('un_receive_msg', this.un_receive_msg.bind(this));
        starx.init({
            host: host, port: port, path: api, 'user': { device_id: device_id, central_code: central_code, verification: verification },
            encode: function (reqId, route, msg) {
                var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
                let func = Req[route]?.encode;
                if (route != "battle.protocol.battleroomping" && route != "gate.protocol.servertime") console.log(">>>", route, msg);
                if (typeof (func) == "function") {
                    msg = func(msg).finish();
                } else {
                    msg = new Uint8Array(0);
                }
                return Message.encode(reqId, type, 0, route, msg);
            },
            strdecode: function (buffer) {
                return buffer;
            }
        }, function () {
            self.hasConnect = true;
            console.log("socket connect success!");
            success();
        });
        return p;
    }

    private static msgList: { [route: string]: Function } = {};

    /**
     * 发送消息 [注:如果带回调函数则在数据返回时只会触发此回调而不会再派发消息事件出去]
     * @param route 
     * @param data 
     * @param cb 
     * @returns 
     */
    static Send(route: string, data?: any, cb?: Function) {
        if (!this.hasConnect) {
            // console.error("连接已断开！");
            Tips.Show("连接已断开！", () => {
                //game.restart();
            });
            return;
        }
        let notify = false;
        if (!data) {
            notify = true;
        } else {
            if (typeof data == "function") {
                console.trace("请给此协议装配数据!");
                return;
            }
        }
        if (!cb) {
            cb = this.msgList[route];
            if (!cb) {
                let dispatcher = this.dispatcher;
                cb = function (bytes) {
                    if (dispatcher.hasEventListener(route)) {
                        // try {
                            dispatcher.emit(route, bytes);
                        // } catch (e) {
                        //     console.error(e);
                        //     if (DEV) {
                        //         Utils.SaveFile(bytes.toString(), "bytes.txt");
                        //         Tips.Show("异常：" + route);
                        //     }
                        // }
                    } else if (!Session.instance.hasListeners(route))
                        console.warn(route + "消息未处理！");
                }
                this.msgList[route] = cb;
            }
        }
        if (notify) {
            this.starx.request(route, cb);
        } else {
            this.starx.request(route, data, cb);
        }
    }

    /**
     * 异步发送消息 [注:异步回调会先派发消息事件再触发异步Promise.resolve]
     * @param route 
     * @param data 
     * @returns 
     */
    static async sendAsync(route: string, data?: any) {
        if (!this.hasConnect) {
            console.error("连接已断开！")
            return;
        }
        let notify = false;
        if (!data) {
            notify = true;
        } else {
            if (typeof data == "function") {
                console.trace("请给此协议装配数据!");
                return;
            }
        }
        let starx = this.starx;
        let cb = this.msgList[route];
        if (!cb) {
            let dispatcher = this.dispatcher;
            cb = function (bytes) {
                if (dispatcher.hasEventListener(route))
                    dispatcher.emit(route, bytes);
                else if (!Session.instance.hasListeners(route))
                    console.warn(route + "消息未处理！");

            }
            this.msgList[route] = cb;
        }
        return new Promise((resolve, reject) => {
            if (notify) {
                starx.request(route, bytes => {
                    cb(bytes);
                    resolve(bytes);
                });
            } else {
                starx.request(route, data, bytes => {
                    cb(bytes);
                    resolve(bytes);
                });
            }
        });
    }
}