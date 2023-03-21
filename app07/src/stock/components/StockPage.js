import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {createLoadAllItemsActionThunk} from '../state/stockActionThunks';
import ItemRow from './ItemRow';

const StockPage = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(createLoadAllItemsActionThunk()),[]);

    let items = useSelector(state => state.items);
    let msg = useSelector(state => state.msg);
    let errMsg = useSelector(state => state.errMsg);

    return (
        <section className='container-fluid p-3'>
            <div className="col-sm-9 mx-auto">
                <h5>Stock Details</h5>

                {msg && <p className='alert alert-info p-2'>{msg}</p>}

                {errMsg && <p className='alert alert-danger p-2'>{errMsg}</p>}

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Item#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(items && items.length === 0) &&
                            <tr>
                                <td colSpan="5" className='fw-bold text-center'>
                                    Inventory has no stock.
                                </td>
                            </tr>
                        }
                        {(items && items.length > 0) && items.map(
                            item => <ItemRow key={item.id} item={item} />
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default StockPage;