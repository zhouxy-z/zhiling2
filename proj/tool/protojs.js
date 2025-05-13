#!/usr/bin/env node
"use strict";
const { execSync } = require('child_process');
const { rmSync, mkdirSync, existsSync, readFileSync, writeFileSync, readdirSync, statSync } = require('fs');
const path = require('path');

const outputPath = "./assets/scripts/net/proto";
const protoFolder = "proto";

async function Second(second) {
    let timeout;
    let p = new Promise((resolve, reject) => {
        timeout = resolve;
    });
    let tick = Date.now();
    setTimeout(() => {
        timeout(Date.now() - tick);
    }, second * 1000);
    return p;
}

if (!existsSync(outputPath)) {
    mkdirSync(outputPath, { recursive: true });
}

function fileImports(code) {
    const reg = /import\s+[^\;]+/g;
    let result = code.match(reg);
    if (!result || !result.length) return [];
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].replace(/import\s+/, "").replace(/\"/g, "");
    }
    return result;
}

let openlist = [];
let clientProto = readFileSync("proto/client.proto", { encoding: 'utf8' });
clientProto = clientProto.replace(/import[^\;]+\;/g, "").replace(/\n\n/g, "");
let files = readdirSync("proto/pb", { withFileTypes: true });
for (let file of files) {
    if (file.isFile() && file.name.match(/\.proto$/) && file.name.indexOf("_client") == -1) {
        openlist.push("pb/" + file.name);
        clientProto = clientProto + '\nimport "pb/' + file.name.replace(".proto", "_client.proto") + '";';
    }
}
if (!openlist.length) {
    throw "前端协议不能为空！";
}
writeFileSync("proto/client.proto", clientProto);

let imports = {};
let closelist = {};
while (openlist.length) {
    let url = openlist[0];
    let dep = Math.max(0, url.split("/").length - 1);
    let code = readFileSync(path.join(protoFolder, url), { encoding: 'utf-8' });
    let checks = fileImports(code);
    let host = "";
    for (let i = 0; i < dep; i++) {
        host = "../" + host;
    }
    if (checks && checks.length) {
        for (let check of checks) {
            if (openlist.indexOf(check) == -1 && !imports[check]) openlist.push(check);
            code = code.replace(check, host + check.replace(".proto", "_client.proto"));
        }
    }
    closelist[path.join(protoFolder, url.replace(".proto", "_client.proto"))] = code;
    openlist.shift();
}
for (let k in closelist) {
    // console.log(k, "\n", closelist[k]);
    writeFileSync(k, closelist[k]);
}

async function deleteTempFiles() {
    await Second(1);
    try {
        for (let k in closelist) {
            rmSync(k);
        }
    } catch (e) {
        console.warn(e);
    }
}


async function runCmd(...cmds) {
    await Second(1);
    console.log("start");
    for (let i = 0; i < cmds.length; i++) {
        let cmd = cmds[i];
        console.log(cmd);
        execSync(cmd);
        await Second(1);
    }
    console.log("end");
}

let pbjsComd = `pbjs --dependency protobufjs/minimal.js --target static-module --wrap commonjs --out ` + outputPath + `/proto.js ./proto/client.proto`;
let pbtsComd = `pbts --main --out  ` + outputPath + `/proto.d.ts  ` + outputPath + `/*.js`;
runCmd(pbjsComd, pbtsComd).then(makeDL);

let routeCfg = readFileSync("proto/pb/route.json", { encoding: 'utf8' });
let pushCfg = readFileSync("proto/pb/push.json", { encoding: 'utf8' });
let routeJson = {}, pushJson = {};
try {
    routeJson = JSON.parse(routeCfg);
    pushJson = JSON.parse(pushCfg);
} catch (e) {
    throw e;
}

let protocolCode =
    `import { js } from 'cc';
import proto from './proto/proto.js';
import { EDITOR } from 'cc/env';`;
let Route = "export const Route = {";
let Req = "export const Req = {";
let Ret = "export const Ret = {";
for (let obj of routeJson) {
    Route = Route + '\n    /** ' + obj.desc + '*/' + '\n    ["' + obj.name + '"]: "' + obj.name + '",';
    if (obj.msg_type_req) Req = Req + '\n    /** ' + obj.desc + '*/' + '\n    ["' + obj.name + '"]: proto.' + obj.msg_type_req + ",";
    if (obj.msg_type_ret) Ret = Ret + '\n    /** ' + obj.desc + '*/' + '\n    ["' + obj.name + '"]: proto.' + obj.msg_type_ret + ",";
}

for (let obj of pushJson) {
    Route = Route + '\n    /** ' + obj.desc + '*/' + '\n    ["' + obj.name + '"]: "' + obj.name + '",';
    if (obj.msg_type) Ret = Ret + '\n    /** ' + obj.desc + '*/' + '\n    ["' + obj.name + '"]: proto.' + obj.msg_type + ",";
}

protocolCode = protocolCode + "\n\n" + Route + "\n}\n\n" + Req + "\n}\n\n" + Ret + "\n}" + "\n\nexport default proto;";
writeFileSync("assets/scripts/net/Protocol.ts", protocolCode);

deleteTempFiles();

async function makeDL() {
    await Second(0.5);
    let scriptPath = "./assets/scripts/";
    const scriptRoot = path.resolve(scriptPath) + "\\";
    let scriptList = readdirSync(scriptPath);
    let PanelDefine = `export const PanelDefine = {`;
    let panelImport = "";
    let RegisterClass = `export class RegisterClass {
    constructor() {`;
    while (scriptList.length) {
        let file = scriptList.shift();
        // console.log(file);
        let url = path.resolve(scriptPath, file);
        let stat = statSync(url);
        if (stat.isFile()) {
            if (path.extname(file) == ".ts") {
                let txt = readFileSync(url, 'utf-8');
                let result = txt.match(/class [^\s]+ extends Panel/);
                if (result) {
                    let classname = result[0].replace(/class\s+/, "").replace(/\s+extends Panel/, "");
                    PanelDefine = PanelDefine + "\n   " + classname + ':"' + classname + '",';
                    panelImport = panelImport + "import { " + classname + ' } from "./' + url.replace(scriptRoot, "").replace(".ts", "").replace(/\\/g, "/") + '";\n';
                    RegisterClass = RegisterClass + `\n      js.setClassName("` + classname + `", ` + classname + `);`;
                }
                let out = txt.match(/class [^\s]+ extends BattleBaseComp/);
                if(out) {
                    let classname = out[0].replace(/class\s+/, "").replace(/\s+extends BattleBaseComp/, "");
                    PanelDefine = PanelDefine + "\n   " + classname + ':"' + classname + '",';
                    panelImport = panelImport + "import { " + classname + ' } from "./' + url.replace(scriptRoot, "").replace(".ts", "").replace(/\\/g, "/") + '";\n';
                    RegisterClass = RegisterClass + `\n      js.setClassName("` + classname + `", ` + classname + `);`;
                }
            }
        } else if (stat.isDirectory()) {
            let childs = readdirSync(url);
            for (let child of childs) {
                scriptList.push(path.join(file, child));
            }
        }
    }
    RegisterClass = `import { js } from "cc";\n` + panelImport + "\n" + RegisterClass + "\n   }\n}";
    PanelDefine += "\n}";
    // console.log(DL);
    // console.log(PanelFetch);
    writeFileSync("./assets/scripts/RegisterClass.ts", RegisterClass);
    writeFileSync("./assets/scripts/PanelDefine.ts", PanelDefine);
    console.log("DL Complete!");
    await Second(0.5);
}

