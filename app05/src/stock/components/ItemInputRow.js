import { useDispatch } from 'react-redux';
import { createAddItemAction, createUpdateItemAction, createUnMarkItemEditableAction } from '../state/stockActions';
import { useState } from "react";

const ItemInputRow = ({ item }) => {

    const dispatch = useDispatch();

    let [id, setId] = useState(item ? item.id : 0);
    let [name, setName] = useState(item ? item.name : '');
    let [quantity, setQuantity] = useState(item ? item.quantity : 0);
    let [unit, setUnit] = useState(item ? item.unit : '');

    let isEditing = item ? item.isEditing : undefined;

    const submitBtnClick = e => {
        let item = { id, name, quantity, unit };
        dispatch(isEditing ? createUpdateItemAction(item) : createAddItemAction(item));
        setId(0);
        setName('');
        setQuantity(0);
        setUnit('');
    };

    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                <input type="text" className="form-control" value={name}
                    onChange={e => setName(e.target.value)} />
            </td>
            <td>
                <input type="number" className="form-control" value={quantity}
                    onChange={e => setQuantity(parseFloat(e.target.value))} />
            </td>
            <td>
                <input type="text" className="form-control" value={unit}
                    onChange={e => setUnit(e.target.value)} />
            </td>

            {isEditing ?
                (
                    <td>
                        <button type="button" className="btn btn-sm btn-secondary me-1"
                            onClick={submitBtnClick}>SAVE</button>
                        <button type="button" className="btn btn-sm btn-danger"
                            onClick={e => dispatch(createUnMarkItemEditableAction(id))}>CANCEL</button>
                    </td>
                ) :
                <td>
                    <button type="button" className="btn btn-sm btn-primary" onClick={submitBtnClick}>ADD</button>
                </td>
            }
        </tr>
    )
}

export default ItemInputRow;