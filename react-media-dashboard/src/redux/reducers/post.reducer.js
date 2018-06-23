import { typeAction } from '../actions/type.action';
import { initialState } from '../store/state';

export const postReducer = (state = initialState.postState, action) => {
    switch (action.type) {
        case typeAction.GET_POSTS_PER_USER:
            return {
                ...state,
                posts: action.payload.posts,
            }

        case typeAction.GET_ALBUMS_PER_UER:
            return {
                ...state,
                imageurlses: action.payload.imageurlses,
            }

        case typeAction.SET_USER_OF_POSTS:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
}