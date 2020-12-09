import { combineReducers } from 'redux';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
    // users: {},
    // music: {},
    // stories: {},
    ui,
    errors,
    session,
})

export default RootReducer;