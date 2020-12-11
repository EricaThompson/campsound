export const signup = (user) => (
    $.ajax({
        url: 'api/users',
        method: 'POST',
        data: user
    })
)

export const getUser = (user) => (
    $.ajax({
        url: `api/users${user.id}`,
        data: user
    })
)

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

