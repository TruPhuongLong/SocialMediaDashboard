import { typeAction } from '../actions/type.action';
import { initialState } from '../store/state';

export const commentReducer = (state = initialState.commentState, action) => {
    switch (action.type) {
        case typeAction.GET_COMMENTS:
            return {
                ...state,
                comments: action.payload.comments
            }
        
        default:
            return state;
    }
}