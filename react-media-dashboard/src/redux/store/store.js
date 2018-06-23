import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {rootReducer} from '../reducers/root.reducer';
import {messageMiddleware} from '../middlewares/message.middleware';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        messageMiddleware
    )
);