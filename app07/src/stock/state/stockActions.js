
//declare action type constants
export const WAIT = "wait";
export const ERR = "err";
export const REFRESH_ALL = "refresh all";
export const PUSH_ONE = "push one";
export const REFRESH_ONE = "refresh one";
export const SKIP_ONE = "skip one";


//define action creator methods
export const createWaitAction = msg => ({type:WAIT, msg});
export const createErrAction = errMsg => ({type:ERR, errMsg});
export const createRefreshAllAction = items => ({type:REFRESH_ALL, items});
export const createPushOneAction = item => ({type:PUSH_ONE, item});
export const createRefreshOneAction = item => ({type:REFRESH_ONE, item});
export const createSkipOneAction = id => ({type:SKIP_ONE, id});


