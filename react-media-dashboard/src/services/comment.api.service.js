import {URL_COMMENT} from '../libs/constant';
import {get, post, patch, _delete} from './data.service';

export const getComments = (postid) => {
    return get(URL_COMMENT + '/' + postid);
}

export const postComment = (model) => {
    return post(URL_COMMENT, model);
}

export const patchComment = (id) => {
    return patch(URL_COMMENT + '/' + id);
}

export const deleteComment = (id) => {
    return _delete(URL_COMMENT + '/' + id);
}

