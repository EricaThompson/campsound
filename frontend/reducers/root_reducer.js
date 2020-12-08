import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    users: {},
    music: {},
    stories: {},
    ui: {
        modal: null
    },
    errors: {},
    session: {}
})

export default RootReducer;