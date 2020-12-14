import * as ItemAPIUtil from '../util/items_api_util';

export const READ_ITEM = 'READ_ITEM';
export const READ_ALL_ITEMS = 'READ_ALL_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ALL_CURRENT_USER_ITEMS = 'ALL_CURRENT_USER_ITEMS';
export const CURRENT_USER_ITEM = 'CURRENT_USER_ITEM';



const readMusicItem = (item) => ({
    type: READ_ITEM,
    item: item
})

const readAllMusicItems = (items) => ({
    type: READ_ALL_ITEMS,
    items: items
})

const readCurrentUserMusicItem = (item) => ({
    type: CURRENT_USER_ITEM,
    item: item
})

const readAllCurrentUserMusicItems = (items) => ({
    type: ALL_CURRENT_USER_ITEMS,
    items: items
})

const deleteMusicItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId: itemId
})

export const readItem = (userId, itemId) => dispatch => {
    return ItemAPIUtil.readItem(userId, itemId)
        .then(res => dispatch(readMusicItem(res)))
}
export const readAllItems = () => dispatch => {
    return ItemAPIUtil.readAllItems()
        .then(res => dispatch(readAllMusicItems(res)))
}

export const readCurrentUserItem = (userId) => dispatch => {
    return ItemAPIUtil.readItem(userId)
        .then(res => dispatch(readCurrentUserMusicItem(res)))
}

export const readAllCurrentUserItems = (userId) => dispatch => {
    return ItemAPIUtil.readAllItems(userId)
        .then(res => dispatch(readAllCurrentUserMusicItems(res)) )
}



export const createItem = (userId, item) => dispatch => {
    return ItemAPIUtil.createItem(userId, item)
        .then(res => dispatch(readMusicItem(res)))
}

export const updateItem = (userId, item) => dispatch => {
    return ItemAPIUtil.updateItem(userId, item)
        .then(res => dispatch(readMusicItem(res)))
}

export const deleteItem = (userId, itemId) => dispatch => {
    return ItemAPIUtil.deleteItem(userId, itemId)
        .then(res => dispatch(deleteMusicItem(res)))
}




