
//declare action type constants
export const WAIT = "wait";
export const ERR = "err";
export const REFRESH_ALL = "refresh all";
export const PUSH_ONE = "push one";
export const REFRESH_ONE = "refresh one";
export const SKIP_ONE = "skip one";
export const MARK_ITEM_EDITABLE = "mark item editable";
export const UNMARK_ITEM_EDITABLE = "unmarkk item editable";

//define action creator methods
export const createWaitAction = msg => ({type:WAIT, msg});
export const createErrAction = errMsg => ({type:ERR, errMsg});
export const createRefreshAllAction = items => ({type:REFRESH_ALL, items});
export const createPushOneAction = item => ({type:PUSH_ONE, item});
export const createRefreshOneAction = item => ({type:REFRESH_ONE, item});
export const createSkipOneAction = item => ({type:SKIP_ONE, item});
export const createMarkItemEditableAction = id => ({ type: MARK_ITEM_EDITABLE, id });
export const createUnMarkItemEditableAction = id => ({ type: UNMARK_ITEM_EDITABLE, id });

