
const ItemRow = ({ item, remove, markEditable }) => (
    <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.unit}</td>
        <td>
            <button type="button" className="btn btn-sm btn-secondary me-2" onClick={e => markEditable(item.id)}>EDIT</button>
            <button type="button" className="btn btn-sm btn-danger" onClick={e => remove(item.id)} >DELETE</button>
        </td>
    </tr>
);

export default ItemRow;