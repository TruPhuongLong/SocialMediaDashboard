import { typeAction } from '../actions/type.action';
import {initialState} from '../store/state';

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeAction.ADD:
            break;
        case typeAction.REMOVE:
            break;
        default:
            break;
    }
}