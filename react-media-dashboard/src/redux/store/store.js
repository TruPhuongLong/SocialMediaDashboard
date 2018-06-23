import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {rootReducer} from '../reducers/root.reducer';
import {errorMiddleware} from '../middlewares/error.middleware';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        errorMiddleware
    )
);