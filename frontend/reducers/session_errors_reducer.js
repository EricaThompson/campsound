import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS,
} from '../actions/session_actions';

import { CLOSE_MODAL } from '../actions/modal_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
            // return Object.assign({}, { currentUser: action.user });
        case CLEAR_SESSION_ERRORS:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};