import axios from 'axios';

import {
    createRefreshAllAction,
    createRefreshOneAction,
    createSkipOneAction,
    createPushOneAction,
    createErrAction,
    createWaitAction
} from './stockActions';

const itesmApi = "http://localhost:9999/items";

createLoadAllItemsActionThunk = () => dispatch => {
    dispatch(createWaitAction("Please wait while loading data..."));
    axios.get(itesmApi)
        .then(resp => dispatch(createRefreshAllAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to load data! Please retry later!")) });
};

createAddItemActionThunk = item => dispatch => {
    dispatch(createWaitAction("Please wait while adding the record..."));
    axios.post(itesmApi,item)
        .then(resp => dispatch(createPushOneAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to add the record! Please retry later!")) });
};

