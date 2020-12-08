import { signup, login, logout } from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const signupUser = (user) => dispatch => {
    return signup(user)
        .then(res => dispatch(receiveCurrentUser(res)))
}

export const loginUser = (user) => dispatch => {
    return login(user)
        .then(res => dispatch(receiveCurrentUser(res)))
}

export const logoutUser = () => dispatch => {
    return logout()
        .then(()=> dispatch(logoutCurrentUser()))
}

