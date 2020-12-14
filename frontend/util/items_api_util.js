export const createItem = (userId, item) => (
    $.ajax({
        url: `/api/users/${userId}/items`,
        method: 'POST',
        data: item
    })
)

export const readItem = (userId, itemId) => (
    $.ajax({
        url: `/api/users/${userId}/items/${itemId}`,
        method: 'GET'
    })
)

export const readAllItems = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/items`,
        method: 'GET'
    })
)

export const updateItem = (userId, item) => (
    $.ajax({
        url: `/api/users/${userId}/items/${item.id}`,
        method: 'PATCH',
        data: item
    })
)

export const deleteItem = (userId, itemId) => (
    $.ajax({
        url: `/api/users/${userId}/items/${itemId}`,
        method: 'DELETE',
    })
)