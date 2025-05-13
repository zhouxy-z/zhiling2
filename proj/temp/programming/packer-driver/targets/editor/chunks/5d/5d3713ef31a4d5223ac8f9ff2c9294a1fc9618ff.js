System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, Game, Node, director, game, path, ResMgr, AudioMgr, _crd, stateSeed, Audio_Normal, Audio_Mute, Audio_Pause, sounds, channel_map, channel_state, is_back_ground, pool;

  function PoolSound(state) {
    if (state.source) {
      state.source.stop();
      state.source.node.off(AudioSource.EventType.ENDED);
    }

    pool.push(state);
  }

  function CreateSound(url, channel) {
    if (pool.length) {
      let state = pool.shift();
      state.id = ++stateSeed;
      state.oneShot = false;
      state.times = 1;
      state.status = Audio_Normal;
      state.running = true;
      state.channel = channel;
      state.url = url;
      state.loading = true;
      state.startTick = game.totalTime / 1000;
      return state;
    } else {
      let node = new Node();
      director.addPersistRootNode(node);
      return {
        id: ++stateSeed,
        source: node.addComponent(AudioSource),
        oneShot: false,
        times: 1,
        status: Audio_Normal,
        running: true,
        channel: channel,
        url: url,
        loading: true,
        startTick: game.totalTime / 1000
      };
    }
  }
  /**查询音效url是否在预设频道内 */


  function mapChannel(url) {
    if (channel_map[url]) return channel_map[url];
    let ls = url.split("/");

    while (ls.length) {
      let floder = ls.join("/") + "/*";
      if (channel_map[floder]) return channel_map[floder];
      ls.pop();
    }

    return undefined;
  }
  /**判断音效是否正在运行 */


  function checkRunning(state) {
    if (!state.running) return false;
    if (state.loading || state.status == Audio_Pause) return true;
    if (state.times == 0 || state.source.loop) return true;
    let tick = game.totalTime / 1000 - state.startTick;

    if (state.oneShot) {
      if (tick < state.source.duration) return true;
    } else {
      if (tick < state.source.duration - state.source.currentTime + state.source.duration * Math.max(0, state.times - 1)) return true;
    }

    return false;
  }

  function onAudioEnd() {
    let state = this;

    if (state.times <= 0) {
      if (!state.source.playing) {
        state.source.volume = state.volume || 1;
        state.source.play();
      }
    } else if (state.times == 1) {
      state.running = false;
      state.status = Audio_Normal;
      state.source.node.off(AudioSource.EventType.ENDED);

      for (let url in sounds) {
        let ls = sounds[url];

        for (let i = 0; i < ls.length; i++) {
          if (ls[i] == state) {
            ls.splice(i, 1);
            PoolSound(state);
            return;
          }
        }
      }
    } else {
      if (state.times > 0) state.times--;
      state.source.volume = state.volume || 1;
      state.source.play();
    }
  }

  function play(state, times = 1, volume = 1) {
    state.oneShot = times == 1;
    state.source.loop = times <= 0;
    state.times = times;
    state.startTick = game.totalTime / 1000;
    state.running = true;
    state.volume = volume;
    state.status = Audio_Normal;

    if (!state.oneShot || state.source.loop) {
      state.source.node.on(AudioSource.EventType.ENDED, onAudioEnd, state);
    } else {
      state.source.node.off(AudioSource.EventType.ENDED);
    }

    if (state.loading) return;
    state.source.volume = volume;
    state.source.play();

    if (channel_state[state.channel] == Audio_Mute) {
      state.status = Audio_Mute;
      state.source.pause();
    } else if (channel_state[state.channel] == Audio_Pause) {
      state.status = Audio_Pause;
      state.source.pause();
    } else if (is_back_ground) {
      state.source.pause();
    }
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  _export("AudioMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Game = _cc.Game;
      Node = _cc.Node;
      director = _cc.director;
      game = _cc.game;
      path = _cc.path;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01713S2MclKEY3ESW5dPe0I", "AudioMgr", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'Game', 'Node', 'assetManager', 'director', 'game', 'path']);

      /**声音定义 */
      stateSeed = 0;
      Audio_Normal = 0;
      Audio_Mute = 1; //静音

      Audio_Pause = 2; //暂停

      sounds = {};
      channel_map = {}; //预设频道表

      channel_state = []; // 频道的状态 1静音，2暂停

      is_back_ground = false;
      pool = [];

      _export("AudioMgr", AudioMgr = class AudioMgr {
        /**
         * 初始音效管理器
         * @param channelMap 预设音效频道
         */
        static init(channelMap) {
          channel_map = channelMap || {};
          game.on(Game.EVENT_HIDE, () => {
            is_back_ground = true;

            for (let url in sounds) {
              let ls = sounds[url];

              for (let state of ls) {
                if (!state.loading) state.source.pause();
              }
            }
          }, this);
          game.on(Game.EVENT_SHOW, () => {
            is_back_ground = false;

            for (let url in sounds) {
              let ls = sounds[url];

              for (let state of ls) {
                if (!state.loading && state.running && state.status == Audio_Normal && !channel_state[state.channel]) {
                  this.Resume(state.id);
                }
              }
            }
          }, this);
        }
        /**
         * 异步播放
         * @param audio 音效
         */


        static async PlayAsync(...args) {
          let times = args[1];
          if (times == undefined) times = 1;
          if (times <= 0) times = 0;
          return this.$Play(true, args[0], times, args[2], args[3]);
        }
        /**
         * 同步播放音效
         * @param audio 
         */


        static Play(...args) {
          let times, channel, maxNum, volume;

          if (args.length == 2) {
            times = 1;
            volume = args[1];
          } else if (args.length == 3) {
            times = args[1];
            volume = args[2];
          } else if (args.length == 4) {
            times = args[1];
            channel = args[2];
            volume = args[3];
          } else {
            times = args[1];
            channel = args[2];
            maxNum = args[3];
            volume = args[4];
          }

          if (times == undefined) times = 1;
          if (times < 0) times = 0;
          if (volume == undefined) volume = 1;
          return this.$Play(false, args[0], times, channel, maxNum, volume);
        }
        /**播放音效 */


        static $Play(async, url, times, channel, maxNum, volume = 1) {
          if (times == undefined) times = 1;

          if (typeof url != "string") {
            let def = url;
            url = def.url;
            channel = def.channel;
            maxNum = def.maxNum || 4;
          } else {
            var _mapChannel, _mapChannel2;

            if (channel == undefined) channel = ((_mapChannel = mapChannel(url)) == null ? void 0 : _mapChannel.channel) || 0;
            if (maxNum == undefined) maxNum = ((_mapChannel2 = mapChannel(url)) == null ? void 0 : _mapChannel2.maxNum) || 4;
          }

          let ls = sounds[url] || [];
          sounds[url] = ls;
          let oneShotState;

          for (let i = 0; i < maxNum; i++) {
            let state = ls[i];

            if (state && !checkRunning(state)) {
              state.id = ++stateSeed;
              play(state, times, volume);
              if (async) return Promise.resolve([state.id, state.source.duration]);
              return state.id;
            } else if (!state) {
              let state = CreateSound(url, channel);
              ls.push(state);
              let success;
              let p = new Promise((resolve, reject) => {
                success = resolve;
              });
              play(state, times, volume);
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).LoadResAbSub(url, AudioClip).then(clip => {
                state.source.clip = clip;
                state.loading = false;

                if (state.status == Audio_Normal && !channel_state[state.channel]) {
                  state.source.volume = state.volume || 1;
                  state.source.play();
                }

                success && success([state.id, state.source.duration]);
              });
              if (async) return p;
              return state.id;
            } else if (state && state.oneShot) oneShotState = state;
          } // 非循环音效重头开始播放


          if (oneShotState) {
            this.Stop(oneShotState.id);
            play(oneShotState, times, volume);
            if (async) return Promise.resolve([oneShotState.id, oneShotState.source.duration]);
            return oneShotState.id;
          }

          if (async) return Promise.resolve(undefined);
          return undefined;
        }
        /**
         * 静音
         * @param url 
         */


        static Mute(value) {
          let id, url;
          if (typeof value == "string") url = value;else id = value;

          for (let k in sounds) {
            let ls = sounds[k];

            for (let state of ls) {
              if (state.url == url || state.id == id) {
                state.status = Audio_Mute;
                if (!state.loading) state.source.pause();
              }
            }
          }
        }
        /**
         * 暂停音效
         * @param id  
         */


        static Pause(value) {
          let id, url;
          if (typeof value == "string") url = value;else id = value;

          for (let k in sounds) {
            let ls = sounds[k];

            for (let state of ls) {
              if (url == state.url || state.id == id) {
                state.status = Audio_Pause;
                if (!state.loading) state.source.pause();
              }
            }
          }
        }
        /**
         * 恢复音效
         * @param id 
         */


        static Resume(value) {
          let id, url;
          if (typeof value == "string") url = value;else id = value;

          for (let k in sounds) {
            let ls = sounds[k];

            for (let state of ls) {
              if (url == state.url || state.id == id) {
                if (state.status == Audio_Pause) {
                  state.status = Audio_Normal;

                  if (!state.loading) {
                    state.startTick = (state.source.currentTime || 0) + state.source.duration * Math.max(state.times - 1, 0);

                    if (checkRunning(state)) {
                      state.source.volume = state.volume || 1;
                      state.source.play();
                    }
                  }

                  continue;
                } else if (checkRunning(state)) {
                  state.status = Audio_Normal;
                  let tick = game.totalTime / 1000 - state.startTick;

                  if (state.times <= 0) {
                    state.source.volume = state.volume || 1;
                    state.source.currentTime = tick % state.source.duration;
                    state.source.play();
                    continue;
                  } else {
                    let less = state.source.currentTime + state.source.duration * Math.max(state.times - 1, 0);

                    if (tick < less) {
                      state.source.volume = state.volume || 1;
                      state.times -= Math.floor(tick / state.source.duration);
                      state.source.currentTime = tick % state.source.duration;
                      state.source.play();
                      continue;
                    }
                  }
                }

                state.status = Audio_Normal;
                state.running = false;
                if (!state.loading) state.source.stop();
                state.source.node.off(AudioSource.EventType.ENDED);
              }
            }
          }
        }
        /**
         * 停止音效
         * @param audio 
         * @param id 
         */


        static Stop(value) {
          let id, url;
          if (typeof value == "string") url = value;else id = value;

          for (let k in sounds) {
            let ls = sounds[k];

            for (let i = ls.length - 1; i >= 0; i--) {
              let state = ls[i];

              if (url == state.url || state.id == id) {
                state.status = Audio_Normal;
                state.running = false;

                if (!state.loading) {
                  state.source.stop();
                  state.source.node.off(AudioSource.EventType.ENDED);
                }

                ls.splice(i, 1);
                PoolSound(state);
              }
            }
          }
        }
        /**
         * 停止所有音效
         */


        static StopAll() {
          for (let url in sounds) {
            sounds[url].filter(state => {
              state.status = Audio_Normal;
              state.running = false;

              if (!state.loading) {
                state.source.stop();
                state.source.node.off(AudioSource.EventType.ENDED);
              }

              PoolSound(state);
            });
            sounds[url] = [];
          }
        }
        /**
         * 静音指定频道的音效
         * @param channel 
         */


        static MuteChannel(channel) {
          channel_state[channel] = Audio_Mute;

          for (let url in sounds) {
            let ls = sounds[url];

            for (let state of ls) {
              if (state.channel == channel) {
                state.status = Audio_Mute;
                state.source.pause();
              }
            }
          }
        }
        /**
         * 暂停指定频道的音效
         * @param channel 
         */


        static PauseChannel(channel) {
          channel_state[channel] = Audio_Pause;

          for (let url in sounds) {
            let ls = sounds[url];

            for (let state of ls) {
              if (state.channel == channel) {
                state.status = Audio_Pause;
                state.source.pause();
              }
            }
          }
        }
        /**
         * 恢复指定频道的播放
         * @param channel 
         */


        static ResumeChannel(channel) {
          channel_state[channel] = Audio_Normal;

          for (let url in sounds) {
            let ls = sounds[url];

            for (let state of ls) {
              if (state.channel == channel) {
                if (state.status == Audio_Pause) {
                  state.status = Audio_Normal;

                  if (checkRunning(state)) {
                    state.source.volume = state.volume || 1;
                    state.source.play();
                  }

                  continue;
                } else if (checkRunning(state)) {
                  state.status = Audio_Normal;
                  let tick = game.totalTime / 1000 - state.startTick;

                  if (state.times <= 0) {
                    state.source.volume = state.volume || 1;
                    state.source.currentTime = tick % state.source.duration;
                    state.source.play();
                    continue;
                  } else if (tick < state.source.duration * state.times) {
                    state.source.volume = state.volume || 1;
                    state.times -= Math.floor(tick / state.source.duration);
                    state.source.currentTime = tick % state.source.duration;
                    state.source.play();
                    continue;
                  }
                }

                state.status = Audio_Normal;
                state.running = false;
                state.source.stop();
                state.source.node.off(AudioSource.EventType.ENDED);
              }
            }
          }
        }
        /**
         * 停止指定频道的播放
         * @param channel 
         */


        static StopChannel(channel) {
          channel_state[channel] = Audio_Normal;

          for (let url in sounds) {
            let ls = sounds[url];

            for (let i = ls.length - 1; i >= 0; i--) {
              let state = ls[i];

              if (state.channel == channel) {
                state.status = Audio_Normal;
                state.running = false;

                if (!state.loading) {
                  state.source.stop();
                  state.source.node.off(AudioSource.EventType.ENDED);
                }

                ls.splice(i, 1);
                PoolSound(state);
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d3713ef31a4d5223ac8f9ff2c9294a1fc9618ff.js.map