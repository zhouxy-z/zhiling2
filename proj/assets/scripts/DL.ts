import { EventMgr } from "./manager/EventMgr";

export class DL {

}

/**
 * 跳转
 * @param type 
 * @param params 
 */
export function Goto(type: string, ...params: any[]) {
   return EventMgr.Call('ui_guide', type, ...params);
}

/**
 * 检测条件
 * @param conditionID 
 * @param values 
 * @returns 
 */
export function CheckCondition(conditionID: number, ...values: any[]) {
   return EventMgr.Call('condition_check', conditionID, ...values);
}
