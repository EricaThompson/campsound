import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer';


export default (preloadedState = {}) => createStore(
    RootReducer, preloadedState, applyMiddleware(logger)
);