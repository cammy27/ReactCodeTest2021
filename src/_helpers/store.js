import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers/index';

import { save, load } from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension';

// const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(thunk, logger, save())),
    // applyMiddleware(
    //     thunkMiddleware,
    //     loggerMiddleware
    // )
);