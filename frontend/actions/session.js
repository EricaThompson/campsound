import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signupUser = (user) => dispatch => {
    return signup(user)
        .then(res => dispatch(receiveCurrentUser(res)
        ), err => dispatch(receiveSessionErrors(err)))
}

export const loginUser = (user) => dispatch => {
    return login(user)
        .then(res => dispatch(receiveCurrentUser(res)
        ), err => dispatch(receiveSessionErrors(err)))
}

export const logoutUser = () => dispatch => {
    return logout()
        .then(()=> dispatch(logoutCurrentUser()))
}

// SessionApiUtil.login(user)
//     .then(res => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err)))

