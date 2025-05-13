System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CfgMgr, SkillUtils, _crd, TargetTyppe;

  function parse(params) {
    let obj = {};

    for (let str of params) {
      let values = str.split(":");
      let type = Number(values[0]);
      obj[type] = Number(values[1]);
    }

    return obj;
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../manager/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneCard(extras) {
    _reporterNs.report("SceneCard", "./display/SceneCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTarget(extras) {
    _reporterNs.report("EffectTarget", "./display/TestSkill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../net/Protocol", _context.meta, extras);
  }

  _export("SkillUtils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26e44z99ihPAZT1tuK0ATfa", "SkillUtils", undefined);

      __checkObsolete__(['Node']);

      /**
       * 阵营枚举
       */
      TargetTyppe = /*#__PURE__*/function (TargetTyppe) {
        TargetTyppe[TargetTyppe["owner"] = 0] = "owner";
        TargetTyppe[TargetTyppe["enemy"] = 1] = "enemy";
        TargetTyppe[TargetTyppe["all"] = 2] = "all";
        return TargetTyppe;
      }(TargetTyppe || {});

      _export("SkillUtils", SkillUtils = class SkillUtils {
        static TryToFindTarget(isMy, attacker, target, data) {
          let stdSkill = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).GetCardSkill(data.skillId);
          if (!stdSkill) return [];
          let card = attacker == null ? void 0 : attacker.cardData;
          let obj = parse(stdSkill.ConditionParam1);

          switch (stdSkill.ConditionType) {
            case "TerrainRevealed":
              //区域翻开触发
              return false;
              /**
                  参数1：0-表示任意区域揭开时触发；1-区域1，2-区域2，3-区域3，4-自身所在区域，
                  参数2：填详细的触发次数/0
               */
              // if (obj[1] == 4) {
              //     return [mySet.areas[card?.area]];
              // } else if (obj[1] > 0) {
              //     return [mySet.areas[obj[1] - 1]];
              // }

              break;

            case "ZoneCardEntered":
              //当有卡牌放入时

              /**
                  参数1：0我方，1敌方，2双方；
                  参数2：0表示卡牌自身所在的区域/映射区域，1/2/3表示对应区域，-1表示任意区域；
                  参数3：0=任意方式区域卡牌增加，1=被放置卡牌，2=非被放置卡牌’卡牌效果带来的复制/召唤等‘；
                  参数4：1/2/3表示对应张数时，4表示满卡牌时；（累计达成条件数量）
                  参数5：触发次数
              */
              if (obj[1] == 0) {
                // 我方区域
                if (obj[2] == 0) {
                  //自身所在区域
                  target.targets = [target.myArea[card == null ? void 0 : card.area]];
                  target.myArea = target.targets;
                } else if (obj[2] > 0) {
                  //指定区域
                  target.targets = [target.myArea[obj[2] - 1]];
                  target.myArea = target.targets;
                }
              } else if (obj[1] == 1) {
                //敌方
                if (obj[2] == 0) {
                  //自身所在区域
                  target.targets = [target.adArea[card == null ? void 0 : card.area]];
                  target.adArea = target.targets;
                } else if (obj[2] > 0) {
                  //指定区域
                  target.targets = [target.adArea[obj[2] - 1]];
                  target.adArea = target.targets;
                }
              } else if (obj[1] == 2) {
                //双方
                if (obj[2] == 0) {
                  //自身所在区域
                  target.targets = [target.myArea[card == null ? void 0 : card.area], target.adArea[card == null ? void 0 : card.area]];
                } else if (obj[2] > 0) {
                  //指定区域
                  target.targets = [target.myArea[obj[2] - 1], target.adArea[obj[2] - 1]];
                }
              } else {
                return false;
              }

              return true;

            case "ZoneCardGoing":
              //区域卡牌被揭开
              return false;
              /**
                  参数1：是否为自身，0否，1是，2任意；
                  参数2：0我方，1敌方，2双方；
                  参数3：0表示卡牌自身在的区域/映射区域，1/2/3表示对应区域，-1表示任意区域；
                  参数4：1|2|4=费点-1~N|职业0~N|种族0~N，参数4为空时则表示任意卡牌揭示时，‘费点-1，职业0，种族0则表示任意费点、职业、种族’；
                  参数5：触发次数
               */

              if (obj[1] == 1) {
                //自身卡牌
                return [attacker];
              } else if (obj[1] == 0) {
                //区域
                if (obj[2] == 0) {
                  //自己区域
                  if (obj[3] == 0) {
                    return [target.myArea[card == null ? void 0 : card.area]];
                  } else if (obj[3] > 0) {
                    return [target.myArea[obj[3]]];
                  }
                } else if (obj[2] == 1) {
                  //敌方区域
                  if (obj[3] == 0) {
                    return [target.adArea[card == null ? void 0 : card.area]];
                  } else if (obj[3] > 0) {
                    return [target.adArea[obj[3]]];
                  }
                }
              }

              break;

            case "ZoneCardDestroyed":
              //区域卡牌被删除

              /**
                  参数1：去除方式，0-任意，1-删除，2-丢弃；
                  参数2：是否为自身，0-任意，1-否，2-是；
                  参数3：敌我，0-双方，1-我方，2-敌方；
                  参数4：区域，0-卡牌自身在的区域/映射区域，1/2/3-对应区域，-1-任意区域；
                  参数5：卡牌类型，1|2|4=费点-1~N|职业0~N|种族0~N，当次字段为空时则表示任意卡牌揭示时，费点-1，职业0，种族0则表示任意费点、职业、种族；
                  参数6：触发次数"
               */
              return false;
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a10cbfe63046bd0e37bd3d5d003ffa9b68467ad4.js.map