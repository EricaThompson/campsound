import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import ui from './ui_reducer';
import session from './session_reducer';


const RootReducer = combineReducers({
    // users: {},
    // music: {},
    // stories: {},
    ui,
    // errors: {},
    session,
})

export default RootReducer;