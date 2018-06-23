import { typeAction } from '../actions/type.action';
import { initialState } from '../store/state';

export const userReducer = (state = initialState.userState, action) => {
    switch (action.type) {
        case typeAction.GET_USERS:
            console.log('==user reducer')
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}