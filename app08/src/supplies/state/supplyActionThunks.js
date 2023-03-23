import axios from 'axios';

import {
    createRefreshAllAction,
    createRefreshOneAction,
    createSkipOneAction,
    createPushOneAction,
    createErrAction,
    createWaitAction
} from './supplyActions';

const vendorsApi = "http://localhost:9999/vendors";

export const createLoadAllVendorsActionThunk = () => dispatch => {
    dispatch(createWaitAction("Please wait while loading data..."));
    axios.get(vendorsApi)
        .then(resp => dispatch(createRefreshAllAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to load data! Please retry later!")) });
};

export const createAddVendorActionThunk = vendor => dispatch => {
    dispatch(createWaitAction("Please wait while adding the record..."));
    axios.post(vendorsApi,vendor)
        .then(resp => dispatch(createPushOneAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to add the record! Please retry later!")) });
};

export const createUpdateVendorActionThunk = vendor => dispatch => {
    dispatch(createWaitAction("Please wait while saving the record..."));
    axios.put(vendorsApi+"/"+vendor.id,vendor)
        .then(resp => dispatch(createRefreshOneAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to save the record! Please retry later!")) });
};

export const createDeleteVendorActionThunk = id => dispatch => {
    dispatch(createWaitAction("Please wait while deleting the record..."));
    axios.delete(vendorsApi+"/"+id)
        .then(resp => dispatch(createSkipOneAction(id)))
        .catch(err => { console.log(err); dispatch(createErrAction("Unable to delete the record! Please retry later!")) });
};
