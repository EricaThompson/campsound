export const createItem = (item) => (
    $.ajax({
        url: '/api/items',
        method: 'POST',
        data: {item}
    })
)

export const readItem = (itemId) => (
    $.ajax({
        url: `/api/items/${itemId}`,
        method: 'GET'
    })
)

export const readAllItems = () => (
    $.ajax({
        url: '/api/items',
        method: 'GET'
    })
)

export const updateItem = (item) => (
    $.ajax({
        url: `/api/items/${item.id}`,
        method: 'PATCH',
        data: {item}
    })
)

export const deleteItem = (itemId) => (
    $.ajax({
        url: `/api/items/${1}`,
        method: 'DELETE',
    })
)