
import { WAIT, ERR, REFRESH_ALL, REFRESH_ONE, PUSH_ONE, SKIP_ONE } from './stockActions';

const initData = () => ({
    items: null,
    msg: null,
    errMsg: null
});

const stockReducer = (state = initData(), action) => {
    let { items, msg, errMsg } = state;

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
            items = action.items;
            msg = null;
            errMsg = null;
            break;
        case PUSH_ONE:
            items = [...items, action.item];
            msg = null;
            errMsg = null;
            break;
        case REFRESH_ONE:
            items = items.map(i => i.id === action.item.id ? action.item : i);
            msg = null;
            errMsg = null;
            break;
        case SKIP_ONE:
            items = items.filter(i => i.id != action.id);
            msg = null;
            errMsg = null;
            break;
    }

    return { items, msg, errMsg };
}

export default stockReducer;