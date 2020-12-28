import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (preloadedState = {}) => createStore(
    RootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk))
);