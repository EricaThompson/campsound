import * as ItemAPIUtil from '../util/items_api_util';

export const READ_ITEM = 'READ_ITEM';
export const READ_ALL_ITEMS = 'READ_ALL_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ALL_CURRENT_USER_ITEMS = 'ALL_CURRENT_USER_ITEMS';
export const CURRENT_USER_ITEM = 'CURRENT_USER_ITEM';

const readMusicItem = (item) => ({
    type: READ_ITEM,
    item
})

const readAllMusicItems = (items) => ({
    type: READ_ALL_ITEMS,
    items
})

const readCurrentUserMusicItem = (item) => ({
    type: CURRENT_USER_ITEM,
    item
})

const readAllCurrentUserMusicItems = (items) => ({
    type: ALL_CURRENT_USER_ITEMS,
    items
})

const deleteMusicItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId
})

export const readItem = (userId, itemId) => dispatch => {
    return ItemAPIUtil.readItem(userId, itemId)
        .then(res => dispatch(readMusicItem(res)))
}
export const readAllUserItems = (userId) => dispatch => {
    return ItemAPIUtil.readAllUserItems(userId)
        .then(res => dispatch(readAllMusicItems(res)))
}

//! Is this necessary?
export const readCurrentUserItem = (userId) => dispatch => {
    return ItemAPIUtil.readItem(userId)
        .then(res => dispatch(readCurrentUserMusicItem(res)))
}

export const readAllCurrentUserItems = (userId) => dispatch => {
    return ItemAPIUtil.readAllUserItems(userId)
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

export const deleteItem = (itemId) => dispatch => {
    return ItemAPIUtil.deleteItem(itemId)
        .then(res => dispatch(deleteMusicItem(res)))
}