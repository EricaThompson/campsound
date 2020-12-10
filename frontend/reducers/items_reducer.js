import {READ_ITEM, READ_ALL_ITEMS, DELETE_ITEM} from '../actions/item_actions';

const ItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)

    switch (action.type) {
        case READ_ALL_ITEMS:
            return Object.assign({}, oldState, action.items)
        case READ_ITEM:
            return Object.assign({}, oldState, { [action.item.id]: action.item })
        case DELETE_ITEM:
            let nextState = Object.assign({}, oldState)
            delete nextState[action.itemId]
            return nextState
        default:
            return oldState
    }
}

export default ItemsReducer;