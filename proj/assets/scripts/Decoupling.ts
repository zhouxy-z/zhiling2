import { js } from "cc";
import { BagPanel } from "./module/bag/BagPanel";
import { OpenBoxPanel } from "./module/bag/OpenBoxPanel";

export class Decoupling {
    constructor() {
        js.setClassName("BagPanel", BagPanel);
        js.setClassName("OpenBoxPanel", OpenBoxPanel);
    }
}