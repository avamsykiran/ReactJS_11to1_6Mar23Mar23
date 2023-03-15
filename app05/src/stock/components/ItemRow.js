import { useDispatch } from 'react-redux';
import { createDeleteItemAction, createMarkItemEditableAction } from '../state/stockActions';

const ItemRow = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.unit}</td>
            <td>
                <button type="button" className="btn btn-sm btn-secondary me-2"
                    onClick={e => dispatch(createMarkItemEditableAction(item.id))}>EDIT</button>
                <button type="button" className="btn btn-sm btn-danger"
                    onClick={e => dispatch(createDeleteItemAction(item.id))} >DELETE</button>
            </td>
        </tr>
    );
}

export default ItemRow;