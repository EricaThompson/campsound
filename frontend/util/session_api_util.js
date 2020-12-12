export const signup = (user) => (
    $.ajax({
        url: 'api/users',
        method: 'POST',
        data: user
    })
)

export const getUser = (userId) => (
    $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    })
)

export const update = (user, id) => {
    return $.ajax({
        url: `api/users/${id}`,
        method: 'PATCH',
        data: user,
        contentType: false,
        processData: false
    })
}

export const allUsers = () => (
    $.ajax({
        url: 'api/users'
    })
)

export const login = (user) => (
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: user
    })
)

export const logout = () => (
    $.ajax({
        url: 'api/session',
        method: 'DELETE'
    })
)

