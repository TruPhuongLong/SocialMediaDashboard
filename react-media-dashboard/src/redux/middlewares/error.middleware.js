import {typeAction} from '../actions/type.action';

export const errorMiddleware = store => next => action => {
    if(action.type === typeAction.ERROR){
        console.log('error: ', action.payload.error);
        return;
    }

    next(action);
}