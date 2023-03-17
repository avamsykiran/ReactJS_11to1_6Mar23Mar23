import { useSelector } from 'react-redux';
import ItemInputRow from './ItemInputRow';
import ItemRow from './ItemRow';

const StockPage = () => {

    let items = useSelector(state => state.items);

    return (
        <section className='container-fluid p-3'>
            <div className="col-sm-9 mx-auto">
                <h5>Stock Details</h5>
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

                        <ItemInputRow />

                        {(!items || items.length === 0) &&
                            <tr>
                                <td colSpan="5" className='fw-bold text-center'>
                                    Inventory has no stock.
                                </td>
                            </tr>
                        }
                        {(items && items.length > 0) && items.map(
                            item => (
                                item.isEditing ?
                                    <ItemInputRow key={item.id} item={item} /> :
                                    <ItemRow key={item.id} item={item} />
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default StockPage;