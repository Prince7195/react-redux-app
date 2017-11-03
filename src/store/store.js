import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { mathReducer, userReducer } from '../reducers';

export default createStore(
    combineReducers({math: mathReducer, user: userReducer}), 
    {}, 
    applyMiddleware(logger)
);