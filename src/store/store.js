import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { mathReducer, userReducer } from '../reducers';

export default createStore(
    combineReducers({math: mathReducer, user: userReducer}), 
    {}, 
    applyMiddleware(logger, thunk, promise())
);