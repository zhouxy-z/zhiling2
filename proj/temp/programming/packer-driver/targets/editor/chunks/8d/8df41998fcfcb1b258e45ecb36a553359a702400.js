System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ResMgr, GameScene, CfgMgr, _dec, _class, _crd, ccclass, property, Test, result;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../manager/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScene(extras) {
    _reporterNs.report("GameScene", "../module/fight/GameScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../manager/CfgMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      GameScene = _unresolved_3.GameScene;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e6e0x5UzxKyJFNppW0JvHo", "Test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'Input', 'instantiate', 'js', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test", Test = (_dec = ccclass('Test'), _dec(_class = class Test extends Component {
        async start() {
          await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).PrevLoad();
          await (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).load();
          this.test();
        }

        async test() {
          (_crd && GameScene === void 0 ? (_reportPossibleCrUseOfGameScene({
            error: Error()
          }), GameScene) : GameScene).Show();
        }

      }) || _class));

      result = {
        "battle_id": "5bd2404b-f838-4119-8580-5a6cf33062fe",
        "version": "3",
        "attacker_player_id": "pvp2",
        "defender_player_id": "2001",
        "attacker_battle_data": {
          "player_id": "pvp2",
          "player_name": "玩家pvp2",
          "player_icon_url": "",
          "homeland_id": 101,
          "homeland_level": 9,
          "currency": 0,
          "currency_74": 0,
          "wood": 0,
          "water": 0,
          "rock": 0,
          "seed": 0,
          "battle_power": 7320121,
          "buildings": [],
          "roles": [{
            "id": "9df97bba-93bc-4013-91fa-1e79344dfe18",
            "type": 107,
            "level": 1,
            "quality": 1,
            "experience": 0,
            "building_id": 0,
            "active_skills": [{
              "skill_id": 10701,
              "level": 1
            }, {
              "skill_id": 10702,
              "level": 1
            }],
            "passive_skills": [{
              "skill_id": 10701,
              "level": 1
            }, {
              "skill_id": 20001,
              "level": 1
            }],
            "battle_attributes": {
              "values": [0, 10012, 0, 0, 881, 0, 100, 0, 0, 2, 0, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.15, 0.15, 0, 0, 0, 0],
              "battle_power": 2477
            }
          }, {
            "id": "44236136-0b48-468b-b47d-05c1b80f2d75",
            "type": 111,
            "level": 1,
            "quality": 1,
            "experience": 0,
            "building_id": 0,
            "active_skills": [{
              "skill_id": 11101,
              "level": 1
            }, {
              "skill_id": 11102,
              "level": 1
            }],
            "passive_skills": [{
              "skill_id": 11101,
              "level": 1
            }, {
              "skill_id": 20004,
              "level": 1
            }],
            "battle_attributes": {
              "values": [0, 8330, 0, 0, 1001, 0, 100, 0, 0, 2, 0, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0, 0, 0, 0, -0.15, 0],
              "battle_power": 2414
            }
          }, {
            "id": "0bee2562-bcd0-4e10-89ac-1298dd406e99",
            "type": 118,
            "level": 1,
            "quality": 5,
            "experience": 0,
            "building_id": 0,
            "active_skills": [{
              "skill_id": 11801,
              "level": 1
            }, {
              "skill_id": 11802,
              "level": 1
            }],
            "passive_skills": [{
              "skill_id": 11801,
              "level": 1
            }, {
              "skill_id": 20003,
              "level": 1
            }],
            "battle_attributes": {
              "values": [0, 25520209, 0, 0, 3061801, 0, 100, 0, 0, 2, 0, 0, 0, 0.08, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.15, 0, 0, 0, 0, 0.15, 0, 0],
              "battle_power": 7297999
            }
          }, {
            "id": "82b9ea58-6000-41f1-80bb-5c993421c83a",
            "type": 113,
            "level": 1,
            "quality": 1,
            "experience": 0,
            "building_id": 0,
            "active_skills": [{
              "skill_id": 11301,
              "level": 1
            }, {
              "skill_id": 11302,
              "level": 1
            }],
            "passive_skills": [{
              "skill_id": 11301,
              "level": 1
            }, {
              "skill_id": 20002,
              "level": 1
            }],
            "battle_attributes": {
              "values": [0, 7729, 0, 0, 1121, 0, 100, 0, 0, 2, 0, 0, 0, 0.05, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, -0.15, 0, 0, 0],
              "battle_power": 2492
            }
          }, {
            "id": "f1b872cf-0777-42e0-9da5-68e6d366c09e",
            "type": 109,
            "level": 1,
            "quality": 1,
            "experience": 0,
            "building_id": 0,
            "active_skills": [{
              "skill_id": 10901,
              "level": 1
            }, {
              "skill_id": 10902,
              "level": 1
            }],
            "passive_skills": [{
              "skill_id": 10901,
              "level": 1
            }, {
              "skill_id": 20003,
              "level": 1
            }],
            "battle_attributes": {
              "values": [0, 6529, 0, 0, 1041, 0, 100, 0, 0, 2, 0, 0, 0, 0.08, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.15, 0, 0, 0, 0, 0.15, 0, 0],
              "battle_power": 2232
            }
          }],
          "attack_lineup": [{
            "role_id": "9df97bba-93bc-4013-91fa-1e79344dfe18",
            "soldiers": []
          }, {
            "role_id": "44236136-0b48-468b-b47d-05c1b80f2d75",
            "soldiers": []
          }, {
            "role_id": "0bee2562-bcd0-4e10-89ac-1298dd406e99",
            "soldiers": []
          }, {
            "role_id": "82b9ea58-6000-41f1-80bb-5c993421c83a",
            "soldiers": []
          }, {
            "role_id": "f1b872cf-0777-42e0-9da5-68e6d366c09e",
            "soldiers": []
          }],
          "defense_lineup": [],
          "shield_end_time": 0
        },
        "defender_battle_data": {
          "player_id": "2001",
          "player_name": "boss",
          "player_icon_url": "",
          "homeland_id": 101,
          "homeland_level": 1,
          "currency": 0,
          "currency_74": 0,
          "wood": 0,
          "water": 0,
          "rock": 0,
          "seed": 0,
          "battle_power": 305530313,
          "buildings": [],
          "roles": [{
            "id": "2001",
            "type": 2001,
            "level": 31,
            "quality": 3,
            "experience": 0,
            "building_id": 0,
            "active_skills": [{
              "skill_id": 200101,
              "level": 1
            }, {
              "skill_id": 200102,
              "level": 1
            }],
            "passive_skills": null,
            "battle_attributes": {
              "values": [0, 2319673116, 0, 0, 22900, 0, 200, 0, 0, 2, 0, 0, 0, 0.2, 0, 1.5, 0.5, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              "battle_power": 305530313
            }
          }],
          "attack_lineup": [],
          "defense_lineup": [{
            "role_id": "2001",
            "soldiers": []
          }],
          "shield_end_time": 0
        },
        "attacker_assist_role": null,
        "process": {
          "result": "lose",
          "casualties": [],
          "current_frame": 2100,
          "occupation_rate": 0.013032364685990524,
          "report": "{\"unitBattleStats\":{\"1\":{\"100\":{\"type\":107,\"damage\":0,\"heal\":0,\"defense\":65265,\"damageRealValue\":0},\"101\":{\"type\":111,\"damage\":68,\"heal\":0,\"defense\":68700,\"damageRealValue\":-68},\"102\":{\"type\":118,\"damage\":29699496,\"heal\":0,\"defense\":503800,\"damageRealValue\":-29699496},\"103\":{\"type\":113,\"damage\":20339,\"heal\":0,\"defense\":0,\"damageRealValue\":-20339},\"104\":{\"type\":109,\"damage\":510923,\"heal\":0,\"defense\":0,\"damageRealValue\":-510923}},\"2\":{\"200\":{\"type\":2001,\"damage\":637765,\"heal\":0,\"defense\":30230826,\"damageRealValue\":-637765}}}}"
        },
        "battle_frame_map": {
          "70": -105,
          "85": -34,
          "108": -105,
          "137": -34,
          "147": -105,
          "150": -306181,
          "154": -113,
          "161": -306181,
          "192": -306181,
          "201": -225,
          "202": -225,
          "203": -612361,
          "217": -11675,
          "233": -225,
          "248": -11450,
          "254": -225,
          "279": -11659,
          "281": -225,
          "310": -11450,
          "313": -225,
          "318": -209,
          "329": -673,
          "345": -225,
          "352": -612361,
          "363": -612361,
          "394": -612361,
          "396": -12117,
          "397": -225,
          "398": -225,
          "413": -225,
          "427": -11450,
          "436": -1837081,
          "445": -673,
          "458": -11450,
          "461": -225,
          "477": -225,
          "488": -11450,
          "497": -209,
          "507": -225,
          "534": -209,
          "537": -673,
          "568": -612361,
          "571": -11659,
          "601": -11675,
          "608": -1837081,
          "618": -612361,
          "631": -11450,
          "637": -673,
          "661": -11450,
          "667": -918541,
          "669": -209,
          "706": -892,
          "727": -673,
          "736": -225,
          "743": -11659,
          "751": -225,
          "773": -11450,
          "789": -612361,
          "800": -225,
          "803": -11450,
          "804": -209,
          "819": -612361,
          "830": -225,
          "833": -11450,
          "836": -225,
          "859": -612361,
          "860": -225,
          "890": -225,
          "915": -11659,
          "920": -225,
          "935": -225,
          "945": -11450,
          "950": -225,
          "960": -612361,
          "971": -225,
          "976": -11450,
          "1007": -11450,
          "1015": -209,
          "1018": -673,
          "1032": -1837081,
          "1034": -225,
          "1039": -225,
          "1054": -209,
          "1074": -612361,
          "1093": -11450,
          "1098": -225,
          "1124": -11450,
          "1130": -225,
          "1146": -673,
          "1155": -11450,
          "1177": -612361,
          "1183": -673,
          "1186": -11450,
          "1194": -209,
          "1208": -612361,
          "1214": -673,
          "1219": -612361,
          "1233": -209,
          "1235": -225,
          "1250": -612361,
          "1261": -612361,
          "1272": -11659,
          "1278": -673,
          "1283": -225,
          "1303": -11450,
          "1310": -225,
          "1313": -918541,
          "1326": -225,
          "1334": -11659,
          "1365": -11450,
          "1373": -667,
          "1412": -209,
          "1426": -225,
          "1431": -225,
          "1437": -612361,
          "1451": -11659,
          "1458": -225,
          "1468": -612361,
          "1474": -225,
          "1482": -11450,
          "1513": -11659,
          "1538": -225,
          "1544": -11450,
          "1590": -673,
          "1622": -225,
          "1630": -11659,
          "1644": -612361,
          "1654": -225,
          "1655": -1837081,
          "1661": -11450,
          "1670": -225,
          "1686": -225,
          "1692": -11450,
          "1697": -1837081,
          "1718": -225,
          "1723": -11450,
          "1749": -918541,
          "1802": -225,
          "1809": -11450,
          "1818": -225,
          "1840": -11450,
          "1850": -225,
          "1862": -612361,
          "1866": -225,
          "1871": -11659,
          "1902": -11450,
          "1904": -612361,
          "1910": -209,
          "1919": -225,
          "1949": -209,
          "1967": -918541,
          "1982": -225,
          "1988": -11450,
          "2019": -11450,
          "2046": -673,
          "2049": -612361,
          "2050": -11450,
          "2067": -225,
          "2078": -225,
          "2080": -612361,
          "2081": -11450,
          "2089": -209,
          "2091": -1837081,
          "2094": -225
        },
        "harm": 30326884,
        "round_time": 70,
        "push": {
          "harm": 30230826,
          "RewardType": [74],
          "RewardItemID": [0],
          "RewardNumber": [750]
        },
        "success": true,
        "log": ""
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8df41998fcfcb1b258e45ecb36a553359a702400.js.map