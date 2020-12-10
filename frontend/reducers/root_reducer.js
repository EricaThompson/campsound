import { combineReducers } from 'redux';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import items from './items_reducer';

const RootReducer = combineReducers({
    // users: {},
    items,
    // stories: {},
    ui,
    errors,
    session,
})

export default RootReducer;