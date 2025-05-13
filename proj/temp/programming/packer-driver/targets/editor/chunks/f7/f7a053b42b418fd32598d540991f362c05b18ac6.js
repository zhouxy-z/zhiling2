System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Req, Tips, Session, _crd;

  function _reportPossibleCrUseOfReq(extras) {
    _reporterNs.report("Req", "./Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../module/common/Tips", _context.meta, extras);
  }

  _export("Session", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Req = _unresolved_2.Req;
    }, function (_unresolved_3) {
      Tips = _unresolved_3.Tips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03253ujDF1KGZqcvGmhUQWn", "Session", undefined);

      __checkObsolete__(['Node', 'game']);

      _export("Session", Session = class Session {
        static get starx() {
          if (!this.instance) {
            let _starx = window['starx'];
            this.instance = _starx;
          }

          return this.instance;
        }

        static addListener(type, cb, thisObj) {
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

          let obj = {
            cb: cb,
            thisObj: thisObj,
            handle: cb.bind(thisObj)
          };
          objs.push(obj);
          this.starx.on(type, obj.handle);
        }

        static removeListener(type, cb, thisObj) {
          let objs = this.listens[type] || [];
          this.listens[type] = objs;

          for (let i = 0; i < objs.length; i++) {
            let obj = objs[i];

            if (obj.cb == cb && (!thisObj || obj.thisObj == thisObj)) {
              this.starx.off(type, obj.handle);
              objs.splice(i, 1);
            }
          }
        }

        static on(route, cb, thisObj) {
          this.dispatcher.on(route, cb, thisObj);
          this.addListener(route, cb, thisObj);
        }

        static off(route, cb, thisObj) {
          this.dispatcher.off(route, cb, thisObj);
          this.removeListener(route, cb, thisObj);
        }

        static ioError(cb) {
          Session.hasConnect = false;
          Session.dispatcher.emit("io-error");
          if (typeof cb == "function") cb();
        }

        static onClose(cb) {
          Session.hasConnect = false;
          Session.dispatcher.emit("close");
          if (typeof cb == "function") cb();
        }

        static un_receive_msg(route) {
          var _this$listens$route;

          if ((_this$listens$route = this.listens[route]) != null && _this$listens$route.length || this.msgList[route]) {} else {
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


        static async Build(host, port, api, device_id, central_code, verification) {
          let success;
          let fail;
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
            host: host,
            port: port,
            path: api,
            'user': {
              device_id: device_id,
              central_code: central_code,
              verification: verification
            },
            encode: function (reqId, route, msg) {
              var _route;

              var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
              let func = (_route = (_crd && Req === void 0 ? (_reportPossibleCrUseOfReq({
                error: Error()
              }), Req) : Req)[route]) == null ? void 0 : _route.encode;
              if (route != "battle.protocol.battleroomping" && route != "gate.protocol.servertime") console.log(">>>", route, msg);

              if (typeof func == "function") {
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

        /**
         * 发送消息 [注:如果带回调函数则在数据返回时只会触发此回调而不会再派发消息事件出去]
         * @param route 
         * @param data 
         * @param cb 
         * @returns 
         */
        static Send(route, data, cb) {
          if (!this.hasConnect) {
            // console.error("连接已断开！");
            (_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips).Show("连接已断开！", () => {//game.restart();
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
                  dispatcher.emit(route, bytes); // } catch (e) {
                  //     console.error(e);
                  //     if (DEV) {
                  //         Utils.SaveFile(bytes.toString(), "bytes.txt");
                  //         Tips.Show("异常：" + route);
                  //     }
                  // }
                } else if (!Session.instance.hasListeners(route)) console.warn(route + "消息未处理！");
              };

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


        static async sendAsync(route, data) {
          if (!this.hasConnect) {
            console.error("连接已断开！");
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
              if (dispatcher.hasEventListener(route)) dispatcher.emit(route, bytes);else if (!Session.instance.hasListeners(route)) console.warn(route + "消息未处理！");
            };

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

      });

      Session.instance = void 0;
      Session.hasConnect = false;
      Session.listens = {};
      Session.dispatcher = new Node();
      Session.msgList = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7a053b42b418fd32598d540991f362c05b18ac6.js.map