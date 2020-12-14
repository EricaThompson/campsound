import {READ_ITEM, READ_ALL_ITEMS, DELETE_ITEM, ALL_CURRENT_USER_ITEMS, CURRENT_USER_ITEM} from '../actions/item_actions';

const ItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    // const items = {}
    const userItems = {}

    switch (action.type) {
        case READ_ALL_ITEMS:
            return Object.assign({}, action.items)
        case READ_ITEM:
            return Object.assign({}, { [action.item.id]: action.item })
        case ALL_CURRENT_USER_ITEMS:
            // action.items.forEach((item)=> {
            //     userItems.push(item)
            // })
            action.items.forEach((item)=> {
                if (item.owner_id = action.user_id){
                    userItems[item.id] = item
                }
            })
            return userItems
        // case CURRENT_USER_ITEM:
        case DELETE_ITEM:
            let nextState = Object.assign({}, oldState)
            delete nextState[action.itemId]
            return nextState
        default:
            return oldState
    }
}

export default ItemsReducer;