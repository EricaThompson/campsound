export const genreSearch = (genre) => (
    $.ajax({
        url: `/api/items?genre=${genre}`,
        method: 'GET'
    })
)

export const browseAll = () => (
    $.ajax({
        url: `/api/items`,
        method: 'GET'
    })
)

export const anySearch = (term) => (
    $.ajax({
        url: `/api/items?any=${term}`,
        method: 'GET'
    })
)