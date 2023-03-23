
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
export const createRefreshAllAction = vendors => ({type:REFRESH_ALL, vendors});
export const createPushOneAction = vendor => ({type:PUSH_ONE, vendor});
export const createRefreshOneAction = vendor => ({type:REFRESH_ONE, vendor});
export const createSkipOneAction = id => ({type:SKIP_ONE, id});


