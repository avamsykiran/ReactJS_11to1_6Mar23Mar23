
import { WAIT, ERR, REFRESH_ALL, REFRESH_ONE, PUSH_ONE, SKIP_ONE } from './supplyActions';

const initData = () => ({
    vendors: null,
    msg: null,
    errMsg: null
});

const supplyReducer = (state = initData(), action) => {
    let { vendors, msg, errMsg } = state;

    switch (action.type) {
        case WAIT:
            msg = action.msg;
            errMsg = null;
            break;
        case ERR:
            msg = null;
            errMsg = action.errMsg;
            break;
        case REFRESH_ALL:
            vendors = action.vendors;
            msg = null;
            errMsg = null;
            break;
        case PUSH_ONE:
            vendors = [...vendors, action.vendor];
            msg = null;
            errMsg = null;
            break;
        case REFRESH_ONE:
            vendors = vendors.map(i => i.id === action.vendor.id ? action.vendor : i);
            msg = null;
            errMsg = null;
            break;
        case SKIP_ONE:
            vendors = vendors.filter(i => i.id != action.id);
            msg = null;
            errMsg = null;
            break;
    }

    return { vendors, msg, errMsg };
}

export default supplyReducer;