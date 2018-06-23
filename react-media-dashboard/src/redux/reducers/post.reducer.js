import { typeAction } from '../actions/type.action';
import { initialState } from '../store/state';

export const postReducer = (state = initialState.postState, action) => {
    switch (action.type) {
        case typeAction.GET_POSTS_PER_USER:
            return {
                ...state,
                posts: action.payload.posts,
                user: action.payload.user,
            }

        case typeAction.GET_ALBUMS_PER_UER:
            return {
                ...state,
                user: action.payload.user,
                imageurlses: action.payload.imageurlses,
            }
        default:
            return state;
    }
}