import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {createLoadAllVendorsActionThunk} from '../state/supplyActionThunks';

const SuppliesPage = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(createLoadAllVendorsActionThunk()),[]);

    let vendors = useSelector(state => state.supplies.vendors);
    let msg = useSelector(state => state.supplies.msg);
    let errMsg = useSelector(state => state.supplies.errMsg);

    return (
        <section className='container-fluid p-3'>
            <div className="col-sm-9 mx-auto">
                <h5>Vwndors List</h5>

                {msg && <p className='alert alert-info p-2'>{msg}</p>}

                {errMsg && <p className='alert alert-danger p-2'>{errMsg}</p>}

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Vendor#</th>
                            <th>Title</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(vendors && vendors.length === 0) &&
                            <tr>
                                <td colSpan="5" className='fw-bold text-center'>
                                    No vendors
                                </td>
                            </tr>
                        }
                        {(vendors && vendors.length > 0) && vendors.map(
                            v => (
                                <tr>
                                    <td>{v.id}</td>
                                    <td>{v.title}</td>
                                    <td>{v.mobile}</td>
                                    <td>

                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default SuppliesPage;