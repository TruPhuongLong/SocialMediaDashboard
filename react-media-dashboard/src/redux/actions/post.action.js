import {typeAction} from './type.action';
import {getAlbumsPerUser, getPostsPerUser, postPost} from '../../services/post.api.service';

export const getPostsPerUserAction = (userid) => {
    return getPostsPerUser(userid)
    .then(posts => {
        return {
            type: typeAction.GET_POSTS_PER_USER,
            payload: {
                posts
            }
        }
    })
}

export const getAlbumsPerUserAction = (userid) => {
    return getAlbumsPerUser(userid)
    .then(imageurlses => {
        return {
            type: typeAction.GET_ALBUMS_PER_UER,
            payload: {
                imageurlses
            }
        }
    })
}

export const postPostsAction = (user, model, files) => {
    return postPost(user, model, files)
    .then(res => {
        return {
            type: typeAction.SUCCESS
        }
    })
}

export const setUserOfPostsAction = (user) => {
    return {
        type: typeAction.SET_USER_OF_POSTS,
        payload: {
            user
        }
    }
}