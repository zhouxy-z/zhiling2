System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, Http, _crd, HttpInterfaceSelf, GetLoginInfo, SendChaoyouToken, SendGetAllNotice, SendGetAllNoticeJy, SendGetAllNoticeHc, SendGetRoleRankData, SERVER_HOST;

  function MsgId(protocol) {
    return protocol.uri + "->" + (protocol.msgType ? protocol.msgType : "");
  }
  /**
   * 会话
   */


  _export({
    MsgId: MsgId,
    Http: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53b19LXfyNJvocQUzMN1v6n", "Http", undefined);

      /**
       * 云信消息协议
       * @im消息无序，所以上下行消息合成一条完整协议，避免下行消息前后错乱
       * @请务必研究消息针对游戏业务逻辑所需的上下行耦合策略，如果有耦合错误则会导致其他依赖此消息的协议出现数据错乱的风险
       */
      __checkObsolete__(['AssetManager', 'game', 'resources']);

      /**表示自己 */
      _export("HttpInterfaceSelf", HttpInterfaceSelf = {
        uri: "$self"
      }); //占位作用不可修改

      /**获取toke */


      _export("GetLoginInfo", GetLoginInfo = {
        uri: "/wechat_login",
        isGet: false
      });
      /**潮游sdk登录 */


      _export("SendChaoyouToken", SendChaoyouToken = {
        uri: "/chaoyou_login",
        isGet: false
      });
      /**畅游戏服获取公告列表 */


      _export("SendGetAllNotice", SendGetAllNotice = {
        serverUrl: "https://mgapi.chaoyouhuyu.com",
        uri: "/biz-marketing/public/announcement/getAll",
        headers: {
          "X-SERVER-APP-ID": "zljq",
          "X-APP-ID": "zljq"
        },
        isGet: false
      });
      /**精英服获取公告列表 */


      _export("SendGetAllNoticeJy", SendGetAllNoticeJy = {
        serverUrl: "https://mgapi.chaoyouhuyu.com",
        uri: "/biz-marketing/public/announcement/getAll",
        headers: {
          "X-SERVER-APP-ID": "zljqjy",
          "X-APP-ID": "zljqjy"
        },
        isGet: false
      });
      /**幻彩服获取公告列表 */


      _export("SendGetAllNoticeHc", SendGetAllNoticeHc = {
        serverUrl: "https://mgapi.chaoyouhuyu.com",
        uri: "/biz-marketing/public/announcement/getAll",
        headers: {
          "X-SERVER-APP-ID": "zljqhc",
          "X-APP-ID": "zljqhc"
        },
        isGet: false
      });
      /**获取排行榜植灵数据列表 */


      _export("SendGetRoleRankData", SendGetRoleRankData = {
        serverUrl: "http://192.168.0.93:9898",
        uri: "/role/ranking"
      });

      SERVER_HOST = "https://192.168.0.118:7880"; //周科本地

      _export("Http", Http = class Http {
        static on(protocol, cb, module, isOnce = false) {
          let msgId = MsgId(protocol);
          let handles = this.msgHandles[msgId];

          if (!handles) {
            handles = [];
            this.msgHandles[msgId] = handles;
          }

          for (var handle of handles) {
            if (handle.cb == cb && handle.mod == module) {
              return false;
            }
          }

          handles.push({
            cb: cb,
            mod: module,
            isOnce: isOnce,
            protocol: protocol
          });
          return true;
        }

        static del(protocol) {
          let msgId = MsgId(protocol);

          if (this.msgHandles.has(msgId)) {
            this.msgHandles.delete(msgId);
          }
        }

        static dispatchDatas(msgId, ...args) {
          let handles = this.msgHandles[msgId];
          if (!handles) return;

          for (let i = 0; i < handles.length;) {
            let handle = handles[i];

            if (handle.isOnce) {
              handles.splice(i, 1);
            } else {
              i++;
            }

            let cb = handle.cb;
            cb.call(handle.mod, ...args);
          }
        }

        /**
         * 检测协议是否可以发送
         * @param protocol 
         * @returns 
         */
        static CheckProtocol(protocol) {
          if (!protocol.awaitList) return null;
          let list = [].concat(protocol.awaitList);
          if (list.length == 0) return null;

          for (let rely of list) {
            let msgId = rely == HttpInterfaceSelf ? MsgId(protocol) : MsgId(rely);
            if (this.states[msgId] > game.totalTime / 1000) return rely;
          }

          return null;
        }
        /**
         * get方法
         * @param url 请求数据路径
         * @param assetType 数据类型
         * @returns 
         */


        static async Get(url, assetType = "json") {
          var init = {
            method: 'GET'
          };
          console.log("http>>>", url);

          try {
            const response = await fetch(url, init);
            console.log("http<<<", url);

            switch (assetType) {
              case "json":
                const json = await response.json();
                console.log("http<<<", url, json);
                return json;

              case "blob":
                const blob = await response.blob();
                console.log("http<<<", url, blob);
                return blob;

              case "buffer":
                const buffer = await response.arrayBuffer();
                console.log("http<<<", url, buffer);
                return buffer;

              case "body":
                const body = response.body;
                console.log("http<<<", url, body);
                return body;
            }

            console.log("http<<<", url);
            return response;
          } catch (e) {
            return null;
          }
        }
        /**
         * post方法
         * @param url 请求地址
         * @param body 上传数据封装
         * @returns 
         */


        static async Post(url, body) {
          let json = "";
          let headers = {};
          headers['Content-Type'] = 'application/json';
          var init = {
            method: 'POST',
            headers
          };

          if (body) {
            init["body"] = JSON.stringify(body);
            json = init["body"];
          }

          console.log("http>>>", url, json);

          try {
            const response = await fetch(url, init);
            const json = await response.json();
            console.log("http<<<", url, json);
            return json;
          } catch (e) {
            return null;
          }
        }
        /**
         * 发送消息
         * @param protocol 
         * @param body 
         * @param uri 
         * @returns 
         */


        static async Send(protocol, body, uri, respObj) {
          let rely = this.CheckProtocol(protocol);

          if (rely) {
            console.warn("前置协议尚未返回->", MsgId(rely)); // if (protocol.awaitMsg) Tips.Show(protocol.awaitMsg);
          } else {
            //记录请求状态
            let msgId = MsgId(protocol);
            this.states[MsgId(protocol)] = protocol.awaitTick ? game.totalTime / 1000 + protocol.awaitTick : Number.MAX_SAFE_INTEGER; //格式化url

            let url = protocol.uri;

            while (uri && uri.length) {
              let check = url.match(/\{[^\}]*\}/);
              if (!check) break;
              url = url.replace(check[0], uri.shift());
            }

            let $uri = "";

            for (let i = 0, len = uri ? uri.length : 0; i < len; i++) {
              if ($uri != "") {
                $uri += "&";
              } else $uri += "?";

              let obj = uri[i];

              for (let k in obj) {
                $uri = $uri + k + "=" + obj[k];
              }
            }

            url = url + $uri; //发出请求

            const method = protocol.isGet ? "GET" : "POST";
            let response = await this.request(protocol.serverUrl, url, protocol.headers, method, body); // console.log("http<<<", response);

            if (!response) {
              console.warn("http请求失败！");
            } else if (response.status == 200) {
              let json = await response.json(); // if (json['code'] != 200) {
              //     // Tips.ShowTop(json['msg']);
              //     console.warn(json);
              //     this.states[msgId] = 0;
              //     return new Promise(() => { });
              // }
              // json = json.data;

              console.log("http<<<", msgId, JSON.stringify(json)); // if (respObj) {
              //     json = ParseJson(json, respObj);
              // }

              this.dispatchDatas(msgId, json);
              this.states[msgId] = 0;
              return Promise.resolve(json);
            } else {
              console.warn(msgId, "statusText:", response.status, response.statusText); // let json = await response.json();
              // console.warn(json);
              // if (json.msg) {
              //     // MsgPanel.Show(json.msg);
              // } else {
              //     // MsgPanel.Show(json.code);
              // }

              this.states[msgId] = 0;
              this.dispatchDatas(msgId, body);
              return Promise.resolve(null);
            }
          }
        }

        static loadBody(res) {
          if (res instanceof ArrayBuffer) {
            let responseText = '';

            try {
              const decoder = new TextDecoder();
              responseText = decoder.decode(res);
              console.log("Response body:", responseText); // 输出服务器返回的内容
              // 对responseText进行处理或提取所需数据
              // ...
            } catch (e) {
              console.error("Failed to decode the response text.");
            }
          }
        }
        /**
         * 发消息
         * @param url 
         * @param body 
         * @param token 
         * @returns 
         */


        static async request(serverUrl, uri, header, method, body) {
          let url = `${serverUrl || SERVER_HOST}${uri}`;
          let json = "";

          if (method.toLocaleLowerCase() == "post") {
            let headers = header || {};
            headers['Content-Type'] = 'application/json';
            var init = {
              method: 'POST',
              headers
            };

            if (body) {
              init["body"] = JSON.stringify(body);
              json = init["body"];
            }
          } else {
            var init = {
              method: 'GET'
            };
          }

          console.log("http>>>", url, json);

          try {
            const response = await fetch(url, init);
            return response;
          } catch (e) {
            return null;
          }
        }

      });

      Http.msgHandles = new Map();
      Http.states = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78a54cbe1bde181fbaad50026c50c491621f3cb8.js.map