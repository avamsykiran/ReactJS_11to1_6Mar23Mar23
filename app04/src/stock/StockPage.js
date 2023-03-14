import { useState } from 'react';
import ItemInputRow from './ItemInputRow';

import ItemRow from './ItemRow';

const StockPage = () => {

    let [items, setItems] = useState([
        { id: 1, name: "Rice", unit: "25 Kg Bag", quantity: 50 },
        { id: 2, name: "Wheat", unit: "15 Kg Bag", quantity: 120 },
        { id: 3, name: "Channa Dal", unit: "1 Kg Packet", quantity: 200 },
        { id: 4, name: "Urd Dal", unit: "1 Kg Packet", quantity: 250 },
        { id: 5, name: "Sugar", unit: "500g Packet", quantity: 450 }
    ]);

    let [nextId, setNextId] = useState(6);

    const add = item => {
        setItems([...items, { ...item, id: nextId }]);
        setNextId(nextId + 1);
    }

    const remove = id => setItems(items.filter(i => i.id !== id));

    const markEditable = id => setItems(items.map(i => i.id !== id ? i : { ...i, isEditing: true }));

    const unMarkEditable = id => setItems(items.map(i => i.id !== id ? i : { ...i, isEditing: undefined }));

    const update = item => setItems(items.map(i => i.id !== item.id ? i : { ...item, isEditing: undefined }));

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

                        <ItemInputRow save={add} />

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
                                    <ItemInputRow key={item.id} item={item} save={update} cancel={unMarkEditable} /> :
                                    <ItemRow key={item.id} item={item} remove={remove} markEditable={markEditable} />
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default StockPage;