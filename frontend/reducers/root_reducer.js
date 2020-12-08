import { combineReducers } from 'redux';
import sessionReducer from './session'

const RootReducer = combineReducers({
    // users: {},
    // music: {},
    // stories: {},
    // ui: {
    //     modal: null
    // },
    // errors: {},
    session: sessionReducer
})

export default RootReducer;