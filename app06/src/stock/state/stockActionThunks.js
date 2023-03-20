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

export const createLoadAllItemsActionThunk = () => dispatch => {
    dispatch(createWaitAction("Please wait while loading data..."));
    axios.get(itesmApi)
        .then(resp => dispatch(createRefreshAllAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to load data! Please retry later!")) });
};

export const createAddItemActionThunk = item => dispatch => {
    dispatch(createWaitAction("Please wait while adding the record..."));
    axios.post(itesmApi,item)
        .then(resp => dispatch(createPushOneAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to add the record! Please retry later!")) });
};

export const createUpdateItemActionThunk = item => dispatch => {
    dispatch(createWaitAction("Please wait while saving the record..."));
    axios.put(itesmApi+"/"+item.id,item)
        .then(resp => dispatch(createRefreshOneAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to save the record! Please retry later!")) });
};

export const createDeleteItemActionThunk = id => dispatch => {
    dispatch(createWaitAction("Please wait while deleting the record..."));
    axios.delete(itesmApi+"/"+id)
        .then(resp => dispatch(createSkipOneAction(id)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to delete the record! Please retry later!")) });
};
