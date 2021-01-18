export const createItem = (userId, item) => (
    $.ajax({
        url: `/api/users/${userId}/items`,
        method: 'POST',
        data: item,
        contentType: false,
        processData: false
    })
)

export const readItem = (userId, itemId) => (
    $.ajax({
        url: `/api/users/${userId}/items/${itemId}`,
        method: 'GET'
    })
)


export const readAllUserItems = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/items`,
        method: 'GET'
    })
)

export const updateItem = (userId, itemId, item) => (
    $.ajax({
        url: `/api/users/${userId}/items/${itemId}`,
        method: 'PATCH',
        data: item,
        // contentType: false,
        // processData: false
    })
)

export const deleteItem = (userId, itemId) => (
    $.ajax({
        url: `/api/users/${userId}/items/${itemId}`,
        method: 'DELETE',
    })
)