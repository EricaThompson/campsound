import * as ItemAPIUtil from '../util/items_api_util';

export const READ_ITEM = 'READ_ITEM';
export const READ_ALL_ITEMS = 'READ_ALL_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';


const readMusicItem = (item) => ({
    type: READ_ITEM,
    item: item
})

const readAllMusicItems = (items) => ({
    type: READ_ALL_ITEMS,
    items: items
})

const deleteMusicItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId: itemId
})


export const readAllItems = () => dispatch => {
    return ItemAPIUtil.readAllItems()
        .then(res => dispatch(readAllMusicItems(res)))
}

export const readItem = (itemId) => dispatch => {
    return ItemAPIUtil.readItem(itemId)
        .then(res => dispatch(readMusicItem(res)))
}

export const createItem = (item) => dispatch => {
    return ItemAPIUtil.createItem(item)
        .then(res => dispatch(readMusicItem(res)))
}

export const updateItem = (item) => dispatch => {
    return ItemAPIUtil.updateItem(item)
        .then(res => dispatch(updateMusicItem(res)))
}

export const deleteItem = (itemId) => dispatch => {
    return ItemAPIUtil.deleteItem(itemId)
        .then(res => dispatch(deleteMusicItem(res)))
}




