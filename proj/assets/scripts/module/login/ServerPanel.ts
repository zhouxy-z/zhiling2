import { director, EditBox, Input, Label, Node } from "cc";
import { Panel } from "../../manager/GameRoot";
import { Selector } from "../../component/Selector";
import LocalStorage from "../../utils/LocalStorage";
import { CfgMgr } from "../../manager/CfgMgr";
import { GameSet } from "../../manager/GameSet";

export class ServerPanel extends Panel {
    protected prefab: string = "prefabs/login/ServerPanel";

    private selector: Selector;
    private input: EditBox;
    private loginHost: string;
    private loginServer: string;
    private loginPort: number;
    private callback: Function;
    protected async onLoad() {
        this.selector = this.find("frame/Selector", Selector);
        this.input = this.find("frame/input", EditBox);
        this.find("enter").on(Input.EventType.TOUCH_END, this.onLogin, this);

        this.loginHost = LocalStorage.GetString("loginHost", "http://192.168.0.103:8002/user/v1/login/wec");
        this.loginServer = LocalStorage.GetString("loginServer", "192.168.0.103");
        this.loginPort = LocalStorage.GetNumber("loginPort", 7000);
        let serverlist = CfgMgr.Get("server_list");
        let list = [];
        for (let server of serverlist) {
            list.push(server);
        }
        this.selector.string = this.loginHost || list[0]?.Login;
        this.selector.Init(list, (item: Node, data: any) => {
            let desc = data.Login;
            if (data.Desc) desc = "(" + data.Desc + ")" + data.Login;
            let label = item.getComponent(Label);
            if (!label) {
                item.getComponent(EditBox).string = desc;
            } else {
                label.string = desc;
            }
        });
        this.selector.node.on('select', this.onSelect, this);

        let str = LocalStorage.GetString("userCode");
        if (str) {
            this.input.string = str;
        }

    }

    protected onSelect(src: any, data: any) {
        this.loginHost = data.Login;
        this.loginServer = data.Server;
        this.loginPort = data.Port;
        LocalStorage.SetString("loginHost", this.loginHost);
        LocalStorage.SetString("loginServer", this.loginServer);
    }

    protected onShow(): void {


    }
    public flush(callBack: Function): void {
        this.callback = callBack;
    }
    protected onHide(...args: any[]): void {

    }

    onLogin() {

        if(GameSet.globalCfg) {
            GameSet.globalCfg.Host
        }

        let userCode = this.input.string;
        if (!userCode) {

        } else {
            LocalStorage.SetString("userCode", userCode);
            LocalStorage.SetString("loginServer", this.loginServer);
            LocalStorage.SetNumber("loginPort", this.loginPort);
            window['usercode'] = userCode;
            this.callback(this.loginHost, this.loginServer, this.loginPort, userCode);
        }
    }
}