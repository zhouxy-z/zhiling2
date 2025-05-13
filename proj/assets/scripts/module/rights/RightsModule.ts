import { Ret, Route } from "../../net/Protocol";
import { Session } from "../../net/Session";

export class RightsModule {
    constructor() {
        Session.on(Route.PlayerBenefitInfoPush, this.PlayerBenefitInfoPush, this);
    }


    private PlayerBenefitInfoPush(data: any) {
        let rights_data = Ret.PlayerBenefitInfoPush.decode(data);
        console.log("权益推送", rights_data)
    }

}