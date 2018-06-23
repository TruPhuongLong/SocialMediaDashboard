import {typeAction} from './type.action';
import {getAlbumsPerUser, getPostsPerUser} from '../../services/post.api.service';

export const getPostsPerUserAction = (user) => {
    return getPostsPerUser(user._id)
    .then(posts => {
        return {
            type: typeAction.GET_POSTS_PER_USER,
            payload: {
                posts,
                user,
            }
        }
    })
}

export const getAlbumsPerUserAction = (user) => {
    return getAlbumsPerUser(user._id)
    .then(imageurlses => {
        return {
            type: typeAction.GET_ALBUMS_PER_UER,
            payload: {
                user,
                imageurlses
            }
        }
    })
}