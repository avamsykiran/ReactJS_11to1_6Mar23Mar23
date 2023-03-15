
//declare action type constants

export const ADD_ITEM = "add item";
export const DEL_ITEM = "delete item";
export const UPD_ITEM = "update item";
export const MARK_ITEM_EDITABLE = "mark item editable";
export const UNMARK_ITEM_EDITABLE = "unmarkk item editable";

//define action creator methods

export const createAddItemAction = item => ({ type: ADD_ITEM, item });
export const createUpdateItemAction = item => ({ type: UPD_ITEM, item });
export const createDeleteItemAction = id => ({ type: DEL_ITEM, id });
export const createMarkItemEditableAction = id => ({ type: MARK_ITEM_EDITABLE, id });
export const createUnMarkItemEditableAction = id => ({ type: UNMARK_ITEM_EDITABLE, id });

