import { typeAction } from '../actions/type.action';
import { initialState } from '../store/state';

export const authReducer = (state = initialState.authState, action) => {
    switch (action.type) {
        case typeAction.LOGIN:
            return {
                ...state,
                islogin: action.payload.islogin,
                user: action.payload.user,
            }
        case typeAction.SIGNUP:
            return {
                ...state,
                islogin: action.payload.islogin,
                user: action.payload.user,
            }
        case typeAction.LOGOUT:
            return {
                ...state,
                islogin: action.payload.islogin,
                user: action.payload.user,
            }
        default:
            return state;
    }
}