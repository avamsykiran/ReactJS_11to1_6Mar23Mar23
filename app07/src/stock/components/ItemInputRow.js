import { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { createAddItemActionThunk, createUpdateItemActionThunk } from '../state/stockActionThunks';

const ItemInputRow = () => {

    let {id} = useParams();

    const dispatch = useDispatch();

    let item = useSelector(state => state.items.find(i => i.id==id));

    let [name, setName] = useState(item ? item.name : '');
    let [quantity, setQuantity] = useState(item ? item.quantity : 0);
    let [unit, setUnit] = useState(item ? item.unit : '');

    let [isFormSaved,setFormSaved] = useState(false);

    let isEditing = item ? true : false;

    const submitBtnClick = e => {
        let item = { id, name, quantity, unit };
        dispatch(isEditing ? createUpdateItemActionThunk(item) : createAddItemActionThunk(item));
        setFormSaved(true);
    };

    return isFormSaved? <Navigate to="/" /> : (
        <section className="container-fluid p-4 mx-auto">
            <form className="col-sm-5 border border-primary p-2 mx-auto">
                <div>
                    <label>Item Id:</label>
                    <input type="text" className="form-control" value={id} readOnly={true} />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" className="form-control" value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" className="form-control" value={quantity}
                        onChange={e => setQuantity(parseFloat(e.target.value))} />
                </div>
                <div>
                    <label>Unit</label>
                    <input type="text" className="form-control" value={unit}
                        onChange={e => setUnit(e.target.value)} />
                </div>
                <div className="d-grid">
                    <button type="button" className="btn btn-sm btn-primary" onClick={submitBtnClick}>SAVE</button>
                </div>
            </form>
        </section>
    )
}

export default ItemInputRow;