
import { ADD_ITEM, UPD_ITEM, DEL_ITEM, MARK_ITEM_EDITABLE, UNMARK_ITEM_EDITABLE } from './stockActions';

const initData = () => ({
    items: [
        { id: 1, name: "Rice", unit: "25 Kg Bag", quantity: 50 },
        { id: 2, name: "Wheat", unit: "15 Kg Bag", quantity: 120 },
        { id: 3, name: "Channa Dal", unit: "1 Kg Packet", quantity: 200 },
        { id: 4, name: "Urd Dal", unit: "1 Kg Packet", quantity: 250 },
        { id: 5, name: "Sugar", unit: "500g Packet", quantity: 450 }
    ],
    nextId: 6
});

const stockReducer = (state = initData(), action) => {
    let { items, nextId } = state;

    switch (action.type) {
        case ADD_ITEM:
            items = [...items, { ...action.item, id: nextId }];
            nextId = nextId + 1;
            break;
        case UPD_ITEM:
            items = items.map(i => i.id === action.item.id ? { ...action.item, isEditing: undefined } : i);
            break;
        case DEL_ITEM:
            items = items.filter(i => i.id !== action.id);
            break;
        case MARK_ITEM_EDITABLE:
            items = items.map(i => i.id === action.id ? { ...i, isEditing: true } : i);
            break;
        case UNMARK_ITEM_EDITABLE:
            items = items.map(i => i.id === action.id ? { ...i, isEditing: undefined } : i);
            break;
    }

    return { items, nextId };
}

export default stockReducer;